import {normalize,limits,OPTIONS} from '../src/catalog.js';
export function validateDesign(input){
 if(!input||typeof input!=='object'||Array.isArray(input))throw new Error('Please check your building design.');
 for(const key of Object.keys(OPTIONS))if(!OPTIONS[key].some(x=>x.id===input[key]))throw new Error(`Please check your ${key} choice.`);
 if(typeof input.insulated!=='boolean'||![0,1.5].includes(input.canopy))throw new Error('Please check your additional options.');
 const l=limits(input);for(const k of ['width','depth']){const n=input[k];if(typeof n!=='number'||!Number.isFinite(n)||n<l.min||n>(k==='depth'?l.depthMax:l.max)+.001||Math.abs((n-l.min)/l.step-Math.round((n-l.min)/l.step))>.0001)throw new Error(`Please choose a valid ${k} for this building system.`);}
 return normalize(input);
}
const round=n=>Math.round(n/25)*25;
function shellAtWidth(w){const anchors=[[3,3730],[4,4495],[5,5440]];const [a,b]=w<=4?[anchors[0],anchors[1]]:[anchors[1],anchors[2]];return a[1]+(w-a[0])*(b[1]-a[1])/(b[0]-a[0]);}
export function calculateQuote(design,reference='CGB-CONCEPT',createdAt=new Date().toISOString()){
 const area=design.width*design.depth,shell=shellAtWidth(design.width)*Math.pow(design.depth/3,.8),low=round(shell*.85),high=round(shell*1.15);
 const options=[];const add=(label,amount,spread=.15)=>options.push({label,low:round(amount*(1-spread)),high:round(amount*(1+spread))});
 add('Internal timber floor allowance',area*59);
 add(`${{french:'French',sliding:'Sliding',bifold:'Bifold'}[design.glazing]} doors allowance`,{french:1133,sliding:1645,bifold:1599}[design.glazing]);
 if(design.window!=='none')add('Side glazing allowance',design.window==='both'?1050:525,.3);
 if(design.timber!=='natural')add('Paint / treatment allowance',2*(design.width+design.depth)*2.1*35,.3);
 if(design.canopy)add('Side canopy allowance',design.canopy*design.depth*450,.35);
 if(design.insulated)add('Insulation discussion allowance',area*(23+835.11/12)+2*(design.width+design.depth)*2.1*64,.2);
 const basis='Unpromoted Lugarde 44mm log-cabin shell references: 3×3m £3,730; 4×3m £4,495; 5×3m £5,440, researched 11 October 2026. Other dimensions and systems use an indicative model. Floor and doors use source reference rates; side glazing, treatment and canopy are provisional allowances. Delivery, assembly, bases, electrics and heating are excluded. No promotional discount assumed.';
 return {reference,createdAt,baseLow:low,baseHigh:high,low:low+options.reduce((sum,x)=>sum+x.low,0),high:high+options.reduce((sum,x)=>sum+x.high,0),options,basis,design};
}
