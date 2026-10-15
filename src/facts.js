// Coastal's contact details and selling points, each as worded on Coastal's own site (or
// Lugarde's, for Lugarde product claims), with the page it came from. Shown beside the step it
// supports. Anything unconfirmed is in docs/CONFIRMATIONS.md, not here.
export const COASTAL = {
  name: 'Coastal Garden Buildings',
  phone: '01425 274000', tel: '+441425274000',
  email: 'info@coastalgardenbuildings.co.uk',
  showSite: 'Stewarts Christchurch Garden Centre, Lyndhurst Road, Christchurch, Dorset BH23 4SA',
  maps: 'https://www.google.com/maps/search/?api=1&query=Stewarts+Christchurch+Garden+Centre+BH23+4SA',
  hours: [['Monday to Saturday', '9am to 4.30pm'], ['Sunday', '10.30am to 4pm']],
  hoursNote: 'Winter opening times, as published by Coastal. The show site is open every day.',
  brochure: 'https://coastalgardenbuildings.co.uk/wp-content/uploads/2023/09/Lugarde-garden-buildings-christchurch-dorset.pdf',
  site: 'https://coastalgardenbuildings.co.uk/',
  configuratorPage: 'https://coastalgardenbuildings.co.uk/services/design-your-own-bespoke-garden-building-with-3d-configurator/'
};

const S = {
  brochures: 'https://coastalgardenbuildings.co.uk/brochures/',
  about: 'https://coastalgardenbuildings.co.uk/about-us-coastal-garden-buildings-christchurch-dorset/',
  survey: 'https://coastalgardenbuildings.co.uk/services/site-survey/',
  p87: 'https://coastalgardenbuildings.co.uk/summerhouses-log-cabins-christchurch-dorset-new-forest/octagonal/lugarde-p87-summerhouse/',
  features: 'https://coastalgardenbuildings.co.uk/summerhouses-log-cabins-christchurch-dorset-new-forest/',
  installs: 'https://coastalgardenbuildings.co.uk/our-latest-garden-building-installations-dorset-new-forest-hampshire/',
  groundwork: 'https://coastalgardenbuildings.co.uk/services/groundwork-garden-building-installation-dorset/',
  removals: 'https://coastalgardenbuildings.co.uk/services/removals/',
  finishing: 'https://coastalgardenbuildings.co.uk/services/finishing-touches/',
  hut: 'https://coastalgardenbuildings.co.uk/garden-office/',
  home: 'https://coastalgardenbuildings.co.uk/',
  lugardeQuality: 'https://lugarde.com/uk/about-lugarde/quality-guarantee'
};

/** Selling points by step: `quote` is the claim as published, `by` who makes it. */
export const USPS = {
  range: [
    {title: 'Over 90 buildings on show', quote: 'Come visit us for inspiration with over 90 buildings on show.', by: 'Coastal', src: S.brochures},
    {title: 'Five-year Lugarde warranty', quote: 'Every Lugarde outdoor retreat is backed by a five-year warranty on manufacturing and structural defects.', by: 'Lugarde', src: S.lugardeQuality}
  ],
  size: [
    {title: 'Free site survey', quote: 'We offer, and recommend, a free, no obligation site survey to our local area within a 25 mile radius.', by: 'Coastal', src: S.survey},
    {title: 'Low roofs on request', quote: 'We can design summerhouses with low pitched roofs to keep within the 2.5m height restriction.', by: 'Coastal', src: S.p87}
  ],
  openings: [
    {title: 'Double glazed as standard', quote: 'Double glazed windows and doors. 3 point locking system on doors. Rubber draught excluders on doors and windows.', by: 'Coastal, Lugarde standard features', src: S.features}
  ],
  finish: [
    {title: 'Painting by Coastal', quote: 'Lugarde offer a range of paint colours for your building to arrive pre-painted, or alternatively use our painting service for a colour of your choice.', by: 'Coastal', src: 'https://coastalgardenbuildings.co.uk/summerhouses-log-cabins-christchurch-dorset-new-forest/octagonal/lugarde-p83-summerhouse/'}
  ],
  extras: [
    {title: 'Our own fitters', quote: 'We are very proud of our team of fitters, some of whom have been with us for over 20 years.', by: 'Coastal', src: S.installs},
    {title: 'Groundworks by our team', quote: 'Timber decking, steel, slabs or concrete, we can also get these vital groundworks done for you efficiently by our team.', by: 'Coastal', src: S.groundwork}
  ],
  price: [
    {title: 'Family run since 1979', quote: 'A family run business since 1979, we are passionate about providing people with their own slice of outdoor living.', by: 'Coastal', src: S.home},
    {title: 'No hard sales', quote: 'You’ll find no hard sales tactics here, just friendly staff ready to assist you from your initial enquiry to installation.', by: 'Coastal', src: S.hut}
  ]
};
