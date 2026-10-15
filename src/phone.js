// UK phone numbers and postcodes, checked the same way in the page and in the Netlify function.
// Numbers are validated against the UK numbering plan by libphonenumber-js (full metadata), and
// Ofcom's ranges reserved for TV and radio drama are refused, since they never ring anyone.
import {parsePhoneNumberFromString} from 'libphonenumber-js/max';

// Ofcom drama ranges, as national significant numbers (no leading 0): each prefix plus 3 digits.
const DRAMA = ['1134960', '1144960', '1154960', '1164960', '1174960', '1184960', '1214960', '1314960', '1414960', '1514960', '1614960', '2079460', '1914980', '2890180', '2920180', '1632960', '7700900', '8081570', '9098790', '3069990'];
const OK_TYPES = new Set(['MOBILE', 'FIXED_LINE', 'FIXED_LINE_OR_MOBILE', 'VOIP', 'PERSONAL_NUMBER', 'UAN', 'TOLL_FREE']);

/** Returns {ok, e164, display, error}. Accepts 07..., 01..., 02..., 03..., +44 and 0044 forms. */
export function checkUkPhone(input) {
  const raw = String(input || '').trim();
  if (!raw) return {ok: false, error: 'Please enter your phone number so we can call you back.'};
  if (/[a-z]/i.test(raw.replace(/ext\.?\s*\d+$/i, ''))) return {ok: false, error: 'A phone number can only contain digits, spaces and a leading +.'};
  const cleaned = raw.replace(/^00\s*44/, '+44').replace(/[\s().-]/g, '');
  const p = parsePhoneNumberFromString(cleaned, 'GB');
  if (!p || p.country !== 'GB' || !p.isValid()) return {ok: false, error: 'Please enter a UK phone number, for example 07700 123456 or 01425 274000.'};
  const nsn = p.nationalNumber;
  if (DRAMA.some(d => nsn.startsWith(d) && nsn.length === d.length + 3)) return {ok: false, error: 'That number is reserved for TV and radio and cannot take calls. Please check it.'};
  const type = p.getType();
  if (type && !OK_TYPES.has(type)) return {ok: false, error: 'Please give a mobile or landline number (not a premium or shared-cost number).'};
  return {ok: true, e164: p.number, display: p.formatNational(), type: type || 'UNKNOWN'};
}

const POSTCODE = /^(GIR ?0AA|[A-PR-UWYZ]([0-9]{1,2}|[A-HK-Y][0-9]{1,2}|[0-9][A-HJKPSTUW]|[A-HK-Y][0-9][ABEHMNPRVWXY]) ?[0-9][ABD-HJLNP-UW-Z]{2})$/i;
export function checkPostcode(input) {
  const v = String(input || '').trim().toUpperCase().replace(/\s+/g, ' ');
  if (!v) return {ok: false, error: 'Please enter your postcode.'};
  if (!POSTCODE.test(v)) return {ok: false, error: 'Please enter a full UK postcode, for example BH23 4SA.'};
  const compact = v.replace(/\s/g, '');
  return {ok: true, value: `${compact.slice(0, -3)} ${compact.slice(-3)}`};
}
export function checkEmail(input) {
  const v = String(input || '').trim();
  if (!v) return {ok: false, error: 'Please enter your email address.'};
  if (v.length > 254 || !/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(v)) return {ok: false, error: 'Please enter an email address like name@example.co.uk.'};
  return {ok: true, value: v};
}
export function checkName(input, which) {
  const v = String(input || '').trim();
  if (!v) return {ok: false, error: `Please enter your ${which} name.`};
  if (v.length > 60 || /[<>{}@]|https?:/i.test(v)) return {ok: false, error: `Please check your ${which} name.`};
  return {ok: true, value: v};
}
