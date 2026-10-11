import {getStore} from '@netlify/blobs';
import {session,storeName,response,readJSON,checkOrigin,InputError} from '../../server/service.mjs';
import {generateProposal} from '../../server/pdf.mjs';
export default async(request,context={})=>{
 try{
  checkOrigin(request);
  if(request.method!=='POST')return response({error:'Submit your enquiry to unlock the PDF.'},405,{Allow:'POST'});
  const store=getStore({name:storeName(context),consistency:'strong'}),{record}=await session(request,store);
  const input=await readJSON(request,3400000);
  const images={hero:null,detail:null};
  for(const key of Object.keys(images)){
   if(input[key]==null)continue;
   if(typeof input[key]!=='string'||!/^data:image\/png;base64,[A-Za-z0-9+/=]+$/.test(input[key])||input[key].length>1600000)throw new InputError('Your preview could not be prepared. Please refresh and try downloading again.');
   images[key]=input[key];
  }
  let link='';
  if(typeof input.link==='string'&&input.link.length<4000){const u=new URL(input.link);if(u.origin===new URL(request.url).origin&&u.hash.startsWith('#design='))link=u.href;}
  const bytes=await generateProposal({design:record.design,quote:record.quote,lead:record.lead,...images,link});
  return new Response(bytes,{headers:{'Content-Type':'application/pdf','Content-Disposition':`attachment; filename="Coastal-${record.quote.reference}-design-proposal.pdf"`,'Cache-Control':'private, no-store','X-Content-Type-Options':'nosniff'}});
 }catch(e){
  if(e instanceof InputError)return response({error:e.message},e.status);
  console.warn('Coastal PDF unavailable',e.name);
  return response({error:'Your proposal could not be prepared. Please try again.'},503);
 }
};
