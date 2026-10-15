var Wn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Xn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xu=0,Gl=1,yu=2;var wo=1,bl=2,ei=3,Mi=0,nn=1,Pe=2,xi=0,ds=1,Wl=2,Xl=3,ql=4,vu=5,Li=100,Mu=101,bu=102,Yl=103,$l=104,Su=200,wu=201,Eu=202,Tu=203,Aa=204,Ra=205,Au=206,Ru=207,Cu=208,Pu=209,Lu=210,Iu=211,Du=212,Uu=213,Nu=214,Ou=0,Fu=1,zu=2,Wr=3,Bu=4,ku=5,Hu=6,Vu=7,Sl=0,Gu=1,Wu=2,yi=0,Xu=1,qu=2,Yu=3,wl=4,$u=5,Zu=6,Ju=7;var Sh=300,gs=301,_s=302,Ca=303,Pa=304,Eo=306,$s=1e3,Nn=1001,La=1002,We=1003,Zl=1004;var Fs=1005;var fn=1006,Wo=1007;var Di=1008;var vi=1009,ju=1010,Ku=1011,El=1012,wh=1013,_i=1014,ni=1015,Zs=1016,Eh=1017,Th=1018,Ni=1020,Qu=1021,On=1023,td=1024,ed=1025,Oi=1026,xs=1027,nd=1028,Ah=1029,id=1030,Rh=1031,Ch=1033,Xo=33776,qo=33777,Yo=33778,$o=33779,Jl=35840,jl=35841,Kl=35842,Ql=35843,Ph=36196,tc=37492,ec=37496,nc=37808,ic=37809,sc=37810,rc=37811,oc=37812,ac=37813,lc=37814,cc=37815,hc=37816,uc=37817,dc=37818,fc=37819,pc=37820,mc=37821,Zo=36492,gc=36494,_c=36495,sd=36283,xc=36284,yc=36285,vc=36286;var Xr=2300,qr=2301,Jo=2302,Mc=2400,bc=2401,Sc=2402;var rd=3200,od=3201,Tl=0,ad=1,gi="",en="srgb",Si="srgb-linear",Al="display-p3",To="display-p3-linear",Yr="linear",we="srgb",$r="rec709",Zr="p3";var Yi=7680;var wc=519,ld=512,cd=513,hd=514,Lh=515,ud=516,dd=517,fd=518,pd=519,Ia=35044;var Ec="300 es",Da=1035,ii=2e3,Jr=2001,Vn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tc=1234567,fs=Math.PI/180,ys=180/Math.PI;function Hn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qe[i&255]+Qe[i>>8&255]+Qe[i>>16&255]+Qe[i>>24&255]+"-"+Qe[t&255]+Qe[t>>8&255]+"-"+Qe[t>>16&15|64]+Qe[t>>24&255]+"-"+Qe[e&63|128]+Qe[e>>8&255]+"-"+Qe[e>>16&255]+Qe[e>>24&255]+Qe[n&255]+Qe[n>>8&255]+Qe[n>>16&255]+Qe[n>>24&255]).toLowerCase()}function Ie(i,t,e){return Math.max(t,Math.min(e,i))}function Rl(i,t){return(i%t+t)%t}function md(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function gd(i,t,e){return i!==t?(e-i)/(t-i):0}function Gs(i,t,e){return(1-e)*i+e*t}function _d(i,t,e,n){return Gs(i,t,1-Math.exp(-e*n))}function xd(i,t=1){return t-Math.abs(Rl(i,t*2)-t)}function yd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function vd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Md(i,t){return i+Math.floor(Math.random()*(t-i+1))}function bd(i,t){return i+Math.random()*(t-i)}function Sd(i){return i*(.5-Math.random())}function wd(i){i!==void 0&&(Tc=i);let t=Tc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ed(i){return i*fs}function Td(i){return i*ys}function Ua(i){return(i&i-1)===0&&i!==0}function Ad(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function jr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Rd(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),m=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*m,o*c);break;case"YXY":i.set(l*m,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Fn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var qn={DEG2RAD:fs,RAD2DEG:ys,generateUUID:Hn,clamp:Ie,euclideanModulo:Rl,mapLinear:md,inverseLerp:gd,lerp:Gs,damp:_d,pingpong:xd,smoothstep:yd,smootherstep:vd,randInt:Md,randFloat:bd,randFloatSpread:Sd,seededRandom:wd,degToRad:Ed,radToDeg:Td,isPowerOfTwo:Ua,ceilPowerOfTwo:Ad,floorPowerOfTwo:jr,setQuaternionFromProperEuler:Rd,normalize:xe,denormalize:Fn},wt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},se=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],y=s[0],p=s[3],f=s[6],v=s[1],x=s[4],T=s[7],W=s[2],H=s[5],R=s[8];return r[0]=a*y+o*v+l*W,r[3]=a*p+o*x+l*H,r[6]=a*f+o*T+l*R,r[1]=c*y+h*v+u*W,r[4]=c*p+h*x+u*H,r[7]=c*f+h*T+u*R,r[2]=d*y+m*v+g*W,r[5]=d*p+m*x+g*H,r[8]=d*f+m*T+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,m=c*r-a*l,g=e*u+n*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=u*y,t[1]=(s*c-h*n)*y,t[2]=(o*n-s*a)*y,t[3]=d*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=m*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(jo.makeScale(t,e)),this}rotate(t){return this.premultiply(jo.makeRotation(-t)),this}translate(t,e){return this.premultiply(jo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},jo=new se;function Ih(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Kr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Cd(){let i=Kr("canvas");return i.style.display="block",i}var Ac={};function Dh(i){i in Ac||(Ac[i]=!0,console.warn(i))}var Rc=new se().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Cc=new se().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),mr={[Si]:{transfer:Yr,primaries:$r,toReference:i=>i,fromReference:i=>i},[en]:{transfer:we,primaries:$r,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[To]:{transfer:Yr,primaries:Zr,toReference:i=>i.applyMatrix3(Cc),fromReference:i=>i.applyMatrix3(Rc)},[Al]:{transfer:we,primaries:Zr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Cc),fromReference:i=>i.applyMatrix3(Rc).convertLinearToSRGB()}},Pd=new Set([Si,To]),ve={enabled:!0,_workingColorSpace:Si,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Pd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=mr[t].toReference,s=mr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return mr[i].primaries},getTransfer:function(i){return i===gi?Yr:mr[i].transfer}};function ps(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ko(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var $i,Qr=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{$i===void 0&&($i=Kr("canvas")),$i.width=t.width,$i.height=t.height;let n=$i.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=$i}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Kr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ps(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ps(e[n]/255)*255):e[n]=ps(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ld=0,to=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=Hn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Qo(s[a].image)):r.push(Qo(s[a]))}else r=Qo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Qo(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Qr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Id=0,pn=class i extends Vn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Nn,s=Nn,r=fn,a=Di,o=On,l=vi,c=i.DEFAULT_ANISOTROPY,h=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=Hn(),this.name="",this.source=new to(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $s:t.x=t.x-Math.floor(t.x);break;case Nn:t.x=t.x<0?0:1;break;case La:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $s:t.y=t.y-Math.floor(t.y);break;case Nn:t.y=t.y<0?0:1;break;case La:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Sh;pn.DEFAULT_ANISOTROPY=1;var ue=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],g=l[9],y=l[2],p=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,T=(m+1)/2,W=(f+1)/2,H=(h+d)/4,R=(u+y)/4,Z=(g+p)/4;return x>T&&x>W?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=H/n,r=R/n):T>W?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=H/s,r=Z/s):W<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(W),n=R/r,s=Z/r),this.set(n,s,r,e),this}let v=Math.sqrt((p-g)*(p-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(u-y)/v,this.z=(d-h)/v,this.w=Math.acos((c+m+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Na=class extends Vn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);let r=new pn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new to(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},si=class extends Na{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},eo=class extends pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Oa=class extends pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],m=r[a+1],g=r[a+2],y=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=y;return}if(u!==y||l!==d||c!==m||h!==g){let p=1-o,f=l*d+c*m+h*g+u*y,v=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){let W=Math.sqrt(x),H=Math.atan2(W,f*v);p=Math.sin(p*H)/W,o=Math.sin(o*H)/W}let T=o*v;if(l=l*p+d*T,c=c*p+m*T,h=h*p+g*T,u=u*p+y*T,p===1-o){let W=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=W,c*=W,h*=W,u*=W}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*m-c*d,t[e+1]=l*g+h*d+c*u-o*m,t[e+2]=c*g+h*m+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"YZX":this._x=d*h*u+c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u-d*m*g;break;case"XZY":this._x=d*h*u-c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>u){let m=2*Math.sqrt(1+n-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>u){let m=2*Math.sqrt(1+o-n-u);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+u-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ie(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Pc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Pc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ta.copy(this).projectOnVector(t),this.sub(ta)}reflect(t){return this.sub(ta.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ta=new L,Pc=new zn,un=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ln):Ln.fromBufferAttribute(r,a),Ln.applyMatrix4(t.matrixWorld),this.expandByPoint(Ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gr.copy(n.boundingBox)),gr.applyMatrix4(t.matrixWorld),this.union(gr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ln),Ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zs),_r.subVectors(this.max,zs),Zi.subVectors(t.a,zs),Ji.subVectors(t.b,zs),ji.subVectors(t.c,zs),hi.subVectors(Ji,Zi),ui.subVectors(ji,Ji),wi.subVectors(Zi,ji);let e=[0,-hi.z,hi.y,0,-ui.z,ui.y,0,-wi.z,wi.y,hi.z,0,-hi.x,ui.z,0,-ui.x,wi.z,0,-wi.x,-hi.y,hi.x,0,-ui.y,ui.x,0,-wi.y,wi.x,0];return!ea(e,Zi,Ji,ji,_r)||(e=[1,0,0,0,1,0,0,0,1],!ea(e,Zi,Ji,ji,_r))?!1:(xr.crossVectors(hi,ui),e=[xr.x,xr.y,xr.z],ea(e,Zi,Ji,ji,_r))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Jn=[new L,new L,new L,new L,new L,new L,new L,new L],Ln=new L,gr=new un,Zi=new L,Ji=new L,ji=new L,hi=new L,ui=new L,wi=new L,zs=new L,_r=new L,xr=new L,Ei=new L;function ea(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ei.fromArray(i,r);let o=s.x*Math.abs(Ei.x)+s.y*Math.abs(Ei.y)+s.z*Math.abs(Ei.z),l=t.dot(Ei),c=e.dot(Ei),h=n.dot(Ei);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Dd=new un,Bs=new L,na=new L,ri=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Dd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bs.subVectors(t,this.center);let e=Bs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Bs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(na.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bs.copy(t.center).add(na)),this.expandByPoint(Bs.copy(t.center).sub(na))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},jn=new L,ia=new L,yr=new L,di=new L,sa=new L,vr=new L,ra=new L,vs=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(jn.copy(this.origin).addScaledVector(this.direction,e),jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ia.copy(t).add(e).multiplyScalar(.5),yr.copy(e).sub(t).normalize(),di.copy(this.origin).sub(ia);let r=t.distanceTo(e)*.5,a=-this.direction.dot(yr),o=di.dot(this.direction),l=-di.dot(yr),c=di.lengthSq(),h=Math.abs(1-a*a),u,d,m,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,m=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ia).addScaledVector(yr,d),m}intersectSphere(t,e){jn.subVectors(t.center,this.origin);let n=jn.dot(this.direction),s=jn.dot(jn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,jn)!==null}intersectTriangle(t,e,n,s,r){sa.subVectors(e,t),vr.subVectors(n,t),ra.crossVectors(sa,vr);let a=this.direction.dot(ra),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;di.subVectors(this.origin,t);let l=o*this.direction.dot(vr.crossVectors(di,vr));if(l<0)return null;let c=o*this.direction.dot(sa.cross(di));if(c<0||l+c>a)return null;let h=-o*di.dot(ra);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},be=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,d,m,g,y,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,m,g,y,p)}set(t,e,n,s,r,a,o,l,c,h,u,d,m,g,y,p){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=g,f[11]=y,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ki.setFromMatrixColumn(t,0).length(),r=1/Ki.setFromMatrixColumn(t,1).length(),a=1/Ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,m=a*u,g=o*h,y=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+g*c,e[5]=d-y*c,e[9]=-o*l,e[2]=y-d*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,m=l*u,g=c*h,y=c*u;e[0]=d+y*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=y+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,m=l*u,g=c*h,y=c*u;e[0]=d-y*o,e[4]=-a*u,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=y-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,m=a*u,g=o*h,y=o*u;e[0]=l*h,e[4]=g*c-m,e[8]=d*c+y,e[1]=l*u,e[5]=y*c+d,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,m=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=y-d*u,e[8]=g*u+m,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*u+g,e[10]=d-y*u}else if(t.order==="XZY"){let d=a*l,m=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+y,e[5]=a*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=o*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ud,t,Nd)}lookAt(t,e,n){let s=this.elements;return yn.subVectors(t,e),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),fi.crossVectors(n,yn),fi.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),fi.crossVectors(n,yn)),fi.normalize(),Mr.crossVectors(yn,fi),s[0]=fi.x,s[4]=Mr.x,s[8]=yn.x,s[1]=fi.y,s[5]=Mr.y,s[9]=yn.y,s[2]=fi.z,s[6]=Mr.z,s[10]=yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],y=n[6],p=n[10],f=n[14],v=n[3],x=n[7],T=n[11],W=n[15],H=s[0],R=s[4],Z=s[8],st=s[12],M=s[1],D=s[5],Q=s[9],P=s[13],b=s[2],U=s[6],w=s[10],N=s[14],k=s[3],V=s[7],K=s[11],it=s[15];return r[0]=a*H+o*M+l*b+c*k,r[4]=a*R+o*D+l*U+c*V,r[8]=a*Z+o*Q+l*w+c*K,r[12]=a*st+o*P+l*N+c*it,r[1]=h*H+u*M+d*b+m*k,r[5]=h*R+u*D+d*U+m*V,r[9]=h*Z+u*Q+d*w+m*K,r[13]=h*st+u*P+d*N+m*it,r[2]=g*H+y*M+p*b+f*k,r[6]=g*R+y*D+p*U+f*V,r[10]=g*Z+y*Q+p*w+f*K,r[14]=g*st+y*P+p*N+f*it,r[3]=v*H+x*M+T*b+W*k,r[7]=v*R+x*D+T*U+W*V,r[11]=v*Z+x*Q+T*w+W*K,r[15]=v*st+x*P+T*N+W*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],m=t[14],g=t[3],y=t[7],p=t[11],f=t[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*m-n*l*m)+y*(+e*l*m-e*c*d+r*a*d-s*a*m+s*c*h-r*l*h)+p*(+e*c*u-e*o*m-r*a*u+n*a*m+r*o*h-n*c*h)+f*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],m=t[11],g=t[12],y=t[13],p=t[14],f=t[15],v=u*p*c-y*d*c+y*l*m-o*p*m-u*l*f+o*d*f,x=g*d*c-h*p*c-g*l*m+a*p*m+h*l*f-a*d*f,T=h*y*c-g*u*c+g*o*m-a*y*m-h*o*f+a*u*f,W=g*u*l-h*y*l-g*o*d+a*y*d+h*o*p-a*u*p,H=e*v+n*x+s*T+r*W;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/H;return t[0]=v*R,t[1]=(y*d*r-u*p*r-y*s*m+n*p*m+u*s*f-n*d*f)*R,t[2]=(o*p*r-y*l*r+y*s*c-n*p*c-o*s*f+n*l*f)*R,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*m-n*l*m)*R,t[4]=x*R,t[5]=(h*p*r-g*d*r+g*s*m-e*p*m-h*s*f+e*d*f)*R,t[6]=(g*l*r-a*p*r-g*s*c+e*p*c+a*s*f-e*l*f)*R,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*m+e*l*m)*R,t[8]=T*R,t[9]=(g*u*r-h*y*r-g*n*m+e*y*m+h*n*f-e*u*f)*R,t[10]=(a*y*r-g*o*r+g*n*c-e*y*c-a*n*f+e*o*f)*R,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*m-e*o*m)*R,t[12]=W*R,t[13]=(h*y*s-g*u*s+g*n*d-e*y*d-h*n*p+e*u*p)*R,t[14]=(g*o*s-a*y*s-g*n*l+e*y*l+a*n*p-e*o*p)*R,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*R,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,m=r*h,g=r*u,y=a*h,p=a*u,f=o*u,v=l*c,x=l*h,T=l*u,W=n.x,H=n.y,R=n.z;return s[0]=(1-(y+f))*W,s[1]=(m+T)*W,s[2]=(g-x)*W,s[3]=0,s[4]=(m-T)*H,s[5]=(1-(d+f))*H,s[6]=(p+v)*H,s[7]=0,s[8]=(g+x)*R,s[9]=(p-v)*R,s[10]=(1-(d+y))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ki.set(s[0],s[1],s[2]).length(),a=Ki.set(s[4],s[5],s[6]).length(),o=Ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],In.copy(this);let c=1/r,h=1/a,u=1/o;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=h,In.elements[5]*=h,In.elements[6]*=h,In.elements[8]*=u,In.elements[9]*=u,In.elements[10]*=u,e.setFromRotationMatrix(In),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=ii){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),m,g;if(o===ii)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Jr)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=ii){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,m=(n+s)*h,g,y;if(o===ii)g=(a+r)*u,y=-2*u;else if(o===Jr)g=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ki=new L,In=new be,Ud=new L(0,0,0),Nd=new L(1,1,1),fi=new L,Mr=new L,yn=new L,Lc=new be,Ic=new zn,Bn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ie(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Lc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Lc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ic.setFromEuler(this),this.setFromQuaternion(Ic,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bn.DEFAULT_ORDER="XYZ";var Js=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Od=0,Dc=new L,Qi=new zn,Kn=new be,br=new L,ks=new L,Fd=new L,zd=new zn,Uc=new L(1,0,0),Nc=new L(0,1,0),Oc=new L(0,0,1),Bd={type:"added"},kd={type:"removed"},oa={type:"childadded",child:null},aa={type:"childremoved",child:null},Xe=class i extends Vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=Hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new Bn,n=new zn,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new be},normalMatrix:{value:new se}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Js,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.premultiply(Qi),this}rotateX(t){return this.rotateOnAxis(Uc,t)}rotateY(t){return this.rotateOnAxis(Nc,t)}rotateZ(t){return this.rotateOnAxis(Oc,t)}translateOnAxis(t,e){return Dc.copy(t).applyQuaternion(this.quaternion),this.position.add(Dc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Uc,t)}translateY(t){return this.translateOnAxis(Nc,t)}translateZ(t){return this.translateOnAxis(Oc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?br.copy(t):br.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(ks,br,this.up):Kn.lookAt(br,ks,this.up),this.quaternion.setFromRotationMatrix(Kn),s&&(Kn.extractRotation(s.matrixWorld),Qi.setFromRotationMatrix(Kn),this.quaternion.premultiply(Qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Bd),oa.child=t,this.dispatchEvent(oa),oa.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(kd),aa.child=t,this.dispatchEvent(aa),aa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Kn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,t,Fd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,zd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Xe.DEFAULT_UP=new L(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Dn=new L,Qn=new L,la=new L,ti=new L,ts=new L,es=new L,Fc=new L,ca=new L,ha=new L,ua=new L,Ui=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Dn.subVectors(t,e),s.cross(Dn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Dn.subVectors(s,e),Qn.subVectors(n,e),la.subVectors(t,e);let a=Dn.dot(Dn),o=Dn.dot(Qn),l=Dn.dot(la),c=Qn.dot(Qn),h=Qn.dot(la),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,m=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ti.x),l.addScaledVector(a,ti.y),l.addScaledVector(o,ti.z),l)}static isFrontFacing(t,e,n,s){return Dn.subVectors(n,e),Qn.subVectors(t,e),Dn.cross(Qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Dn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Dn.cross(Qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ts.subVectors(s,n),es.subVectors(r,n),ca.subVectors(t,n);let l=ts.dot(ca),c=es.dot(ca);if(l<=0&&c<=0)return e.copy(n);ha.subVectors(t,s);let h=ts.dot(ha),u=es.dot(ha);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ts,a);ua.subVectors(t,r);let m=ts.dot(ua),g=es.dot(ua);if(g>=0&&m<=g)return e.copy(r);let y=m*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(es,o);let p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return Fc.subVectors(r,s),o=(u-h)/(u-h+(m-g)),e.copy(s).addScaledVector(Fc,o);let f=1/(p+y+d);return a=y*f,o=d*f,e.copy(n).addScaledVector(ts,a).addScaledVector(es,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Uh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},Sr={h:0,s:0,l:0};function da(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Kt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=en){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ve.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ve.workingColorSpace){return this.r=t,this.g=e,this.b=n,ve.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ve.workingColorSpace){if(t=Rl(t,1),e=Ie(e,0,1),n=Ie(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=da(a,r,t+1/3),this.g=da(a,r,t),this.b=da(a,r,t-1/3)}return ve.toWorkingColorSpace(this,s),this}setStyle(t,e=en){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=en){let n=Uh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ps(t.r),this.g=ps(t.g),this.b=ps(t.b),this}copyLinearToSRGB(t){return this.r=Ko(t.r),this.g=Ko(t.g),this.b=Ko(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=en){return ve.fromWorkingColorSpace(tn.copy(this),t),Math.round(Ie(tn.r*255,0,255))*65536+Math.round(Ie(tn.g*255,0,255))*256+Math.round(Ie(tn.b*255,0,255))}getHexString(t=en){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ve.workingColorSpace){ve.fromWorkingColorSpace(tn.copy(this),e);let n=tn.r,s=tn.g,r=tn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ve.workingColorSpace){return ve.fromWorkingColorSpace(tn.copy(this),e),t.r=tn.r,t.g=tn.g,t.b=tn.b,t}getStyle(t=en){ve.fromWorkingColorSpace(tn.copy(this),t);let e=tn.r,n=tn.g,s=tn.b;return t!==en?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(pi),this.setHSL(pi.h+t,pi.s+e,pi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(pi),t.getHSL(Sr);let n=Gs(pi.h,Sr.h,e),s=Gs(pi.s,Sr.s,e),r=Gs(pi.l,Sr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},tn=new Kt;Kt.NAMES=Uh;var Hd=0,bi=class extends Vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=Hn(),this.name="",this.type="Material",this.blending=ds,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Aa,this.blendDst=Ra,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(n.blending=this.blending),this.side!==Mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Aa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ra&&(n.blendDst=this.blendDst),this.blendEquation!==Li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Wr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ms=class extends bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=Sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Le=new L,wr=new wt,Mn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ia,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Dh("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)wr.fromBufferAttribute(this,e),wr.applyMatrix3(t),this.setXY(e,wr.x,wr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fn(e,this.array)),e}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fn(e,this.array)),e}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fn(e,this.array)),e}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array),r=xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ia&&(t.usage=this.usage),t}};var no=class extends Mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var io=class extends Mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var pe=class extends Mn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Vd=0,wn=new be,fa=new Xe,ns=new L,vn=new un,Hs=new un,ke=new L,qe=class i extends Vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=Hn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ih(t)?io:no)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new se().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return wn.makeRotationFromQuaternion(t),this.applyMatrix4(wn),this}rotateX(t){return wn.makeRotationX(t),this.applyMatrix4(wn),this}rotateY(t){return wn.makeRotationY(t),this.applyMatrix4(wn),this}rotateZ(t){return wn.makeRotationZ(t),this.applyMatrix4(wn),this}translate(t,e,n){return wn.makeTranslation(t,e,n),this.applyMatrix4(wn),this}scale(t,e,n){return wn.makeScale(t,e,n),this.applyMatrix4(wn),this}lookAt(t){return fa.lookAt(t),fa.updateMatrix(),this.applyMatrix4(fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new pe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new un);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ri);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(vn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Hs.setFromBufferAttribute(o),this.morphTargetsRelative?(ke.addVectors(vn.min,Hs.min),vn.expandByPoint(ke),ke.addVectors(vn.max,Hs.max),vn.expandByPoint(ke)):(vn.expandByPoint(Hs.min),vn.expandByPoint(Hs.max))}vn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ke.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ke));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ke.fromBufferAttribute(o,c),l&&(ns.fromBufferAttribute(t,c),ke.add(ns)),s=Math.max(s,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let Z=0;Z<n.count;Z++)o[Z]=new L,l[Z]=new L;let c=new L,h=new L,u=new L,d=new wt,m=new wt,g=new wt,y=new L,p=new L;function f(Z,st,M){c.fromBufferAttribute(n,Z),h.fromBufferAttribute(n,st),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,Z),m.fromBufferAttribute(r,st),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),m.sub(d),g.sub(d);let D=1/(m.x*g.y-g.x*m.y);isFinite(D)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(D),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(D),o[Z].add(y),o[st].add(y),o[M].add(y),l[Z].add(p),l[st].add(p),l[M].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let Z=0,st=v.length;Z<st;++Z){let M=v[Z],D=M.start,Q=M.count;for(let P=D,b=D+Q;P<b;P+=3)f(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let x=new L,T=new L,W=new L,H=new L;function R(Z){W.fromBufferAttribute(s,Z),H.copy(W);let st=o[Z];x.copy(st),x.sub(W.multiplyScalar(W.dot(st))).normalize(),T.crossVectors(H,st);let D=T.dot(l[Z])<0?-1:1;a.setXYZW(Z,x.x,x.y,x.z,D)}for(let Z=0,st=v.length;Z<st;++Z){let M=v[Z],D=M.start,Q=M.count;for(let P=D,b=D+Q;P<b;P+=3)R(t.getX(P+0)),R(t.getX(P+1)),R(t.getX(P+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let d=0,m=t.count;d<m;d+=3){let g=t.getX(d+0),y=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),m=0,g=0;for(let y=0,p=l.length;y<p;y++){o.isInterleavedBufferAttribute?m=l[y]*o.data.stride+o.offset:m=l[y]*h;for(let f=0;f<h;f++)d[g++]=c[m++]}return new Mn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],m=t(d,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},zc=new be,Ti=new vs,Er=new ri,Bc=new L,is=new L,ss=new L,rs=new L,pa=new L,Tr=new L,Ar=new wt,Rr=new wt,Cr=new wt,kc=new L,Hc=new L,Vc=new L,Pr=new L,Lr=new L,re=class extends Xe{constructor(t=new qe,e=new Ms){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Tr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(pa.fromBufferAttribute(u,t),a?Tr.addScaledVector(pa,h):Tr.addScaledVector(pa.sub(e),h))}e.add(Tr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(r),Ti.copy(t.ray).recast(t.near),!(Er.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(Er,Bc)===null||Ti.origin.distanceToSquared(Bc)>(t.far-t.near)**2))&&(zc.copy(r).invert(),Ti.copy(t.ray).applyMatrix4(zc),!(n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ti)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let p=d[g],f=a[p.materialIndex],v=Math.max(p.start,m.start),x=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let T=v,W=x;T<W;T+=3){let H=o.getX(T),R=o.getX(T+1),Z=o.getX(T+2);s=Ir(this,f,t,n,c,h,u,H,R,Z),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let p=g,f=y;p<f;p+=3){let v=o.getX(p),x=o.getX(p+1),T=o.getX(p+2);s=Ir(this,a,t,n,c,h,u,v,x,T),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let p=d[g],f=a[p.materialIndex],v=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let T=v,W=x;T<W;T+=3){let H=T,R=T+1,Z=T+2;s=Ir(this,f,t,n,c,h,u,H,R,Z),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let p=g,f=y;p<f;p+=3){let v=p,x=p+1,T=p+2;s=Ir(this,a,t,n,c,h,u,v,x,T),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Gd(i,t,e,n,s,r,a,o){let l;if(t.side===nn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Mi,o),l===null)return null;Lr.copy(o),Lr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Lr);return c<e.near||c>e.far?null:{distance:c,point:Lr.clone(),object:i}}function Ir(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,is),i.getVertexPosition(l,ss),i.getVertexPosition(c,rs);let h=Gd(i,t,e,n,is,ss,rs,Pr);if(h){s&&(Ar.fromBufferAttribute(s,o),Rr.fromBufferAttribute(s,l),Cr.fromBufferAttribute(s,c),h.uv=Ui.getInterpolation(Pr,is,ss,rs,Ar,Rr,Cr,new wt)),r&&(Ar.fromBufferAttribute(r,o),Rr.fromBufferAttribute(r,l),Cr.fromBufferAttribute(r,c),h.uv1=Ui.getInterpolation(Pr,is,ss,rs,Ar,Rr,Cr,new wt)),a&&(kc.fromBufferAttribute(a,o),Hc.fromBufferAttribute(a,l),Vc.fromBufferAttribute(a,c),h.normal=Ui.getInterpolation(Pr,is,ss,rs,kc,Hc,Vc,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new L,materialIndex:0};Ui.getNormal(is,ss,rs,u.normal),h.face=u}return h}var mn=class i extends qe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(u,2));function g(y,p,f,v,x,T,W,H,R,Z,st){let M=T/R,D=W/Z,Q=T/2,P=W/2,b=H/2,U=R+1,w=Z+1,N=0,k=0,V=new L;for(let K=0;K<w;K++){let it=K*D-P;for(let tt=0;tt<U;tt++){let ut=tt*M-Q;V[y]=ut*v,V[p]=it*x,V[f]=b,c.push(V.x,V.y,V.z),V[y]=0,V[p]=0,V[f]=H>0?1:-1,h.push(V.x,V.y,V.z),u.push(tt/R),u.push(1-K/Z),N+=1}}for(let K=0;K<Z;K++)for(let it=0;it<R;it++){let tt=d+it+U*K,ut=d+it+U*(K+1),q=d+(it+1)+U*(K+1),et=d+(it+1)+U*K;l.push(tt,ut,et),l.push(ut,q,et),k+=6}o.addGroup(m,k,st),m+=k,d+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function bs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ln(i){let t={};for(let e=0;e<i.length;e++){let n=bs(i[e]);for(let s in n)t[s]=n[s]}return t}function Wd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Nh(i){return i.getRenderTarget()===null?i.outputColorSpace:ve.workingColorSpace}var Ao={clone:bs,merge:ln},Xd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,En=class extends bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xd,this.fragmentShader=qd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bs(t.uniforms),this.uniformsGroups=Wd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},so=class extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=ii}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},mi=new L,Gc=new wt,Wc=new wt,He=class extends so{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ys*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(fs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ys*2*Math.atan(Math.tan(fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(mi.x,mi.y).multiplyScalar(-t/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-t/mi.z)}getViewSize(t,e){return this.getViewBounds(t,Gc,Wc),e.subVectors(Wc,Gc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(fs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},os=-90,as=1,Fa=class extends Xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new He(os,as,t,e);s.layers=this.layers,this.add(s);let r=new He(os,as,t,e);r.layers=this.layers,this.add(r);let a=new He(os,as,t,e);a.layers=this.layers,this.add(a);let o=new He(os,as,t,e);o.layers=this.layers,this.add(o);let l=new He(os,as,t,e);l.layers=this.layers,this.add(l);let c=new He(os,as,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===ii)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Jr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ro=class extends pn{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:gs,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},za=class extends si{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ro(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:fn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new mn(5,5,5),r=new En({name:"CubemapFromEquirect",uniforms:bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:xi});r.uniforms.tEquirect.value=e;let a=new re(s,r),o=e.minFilter;return e.minFilter===Di&&(e.minFilter=fn),new Fa(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},ma=new L,Yd=new L,$d=new se,Un=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ma.subVectors(n,e).cross(Yd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ma),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||$d.getNormalMatrix(t),s=this.coplanarPoint(ma).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ai=new ri,Dr=new L,js=class{constructor(t=new Un,e=new Un,n=new Un,s=new Un,r=new Un,a=new Un){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ii){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],m=s[8],g=s[9],y=s[10],p=s[11],f=s[12],v=s[13],x=s[14],T=s[15];if(n[0].setComponents(l-r,d-c,p-m,T-f).normalize(),n[1].setComponents(l+r,d+c,p+m,T+f).normalize(),n[2].setComponents(l+a,d+h,p+g,T+v).normalize(),n[3].setComponents(l-a,d-h,p-g,T-v).normalize(),n[4].setComponents(l-o,d-u,p-y,T-x).normalize(),e===ii)n[5].setComponents(l+o,d+u,p+y,T+x).normalize();else if(e===Jr)n[5].setComponents(o,u,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(t){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Dr.x=s.normal.x>0?t.max.x:t.min.x,Dr.y=s.normal.y>0?t.max.y:t.min.y,Dr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Dr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Oh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Zd(i,t){let e=t.isWebGL2,n=new WeakMap;function s(c,h){let u=c.array,d=c.usage,m=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,d),c.onUploadCallback();let y;if(u instanceof Float32Array)y=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)y=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)y=i.SHORT;else if(u instanceof Uint32Array)y=i.UNSIGNED_INT;else if(u instanceof Int32Array)y=i.INT;else if(u instanceof Int8Array)y=i.BYTE;else if(u instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:y,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,u){let d=h.array,m=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,c),m.count===-1&&g.length===0&&i.bufferSubData(u,0,d),g.length!==0){for(let y=0,p=g.length;y<p;y++){let f=g[y];e?i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}m.count!==-1&&(e?i.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):i.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}var sn=class i extends qe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,m=[],g=[],y=[],p=[];for(let f=0;f<h;f++){let v=f*d-a;for(let x=0;x<c;x++){let T=x*u-r;g.push(T,-v,0),y.push(0,0,1),p.push(x/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<o;v++){let x=v+c*f,T=v+c*(f+1),W=v+1+c*(f+1),H=v+1+c*f;m.push(x,T,H),m.push(T,W,H)}this.setIndex(m),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(y,3)),this.setAttribute("uv",new pe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Jd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Kd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ef=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rf=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,of=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,af=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,uf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_f=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,yf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Mf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Sf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ef=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Af="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rf=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Cf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Pf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,If=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Df=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Uf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Of=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ff=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Bf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,kf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Wf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Xf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$f=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Jf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ep=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,np=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ip=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,sp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,op=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ap=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,up=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,fp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,pp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,mp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Mp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ep=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ap=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ip=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Up=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Np=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Op=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Bp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Hp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Jp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,jp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,rm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,om=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,um=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_m=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ym=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Em=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Tm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Am=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Cm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ie={alphahash_fragment:Jd,alphahash_pars_fragment:jd,alphamap_fragment:Kd,alphamap_pars_fragment:Qd,alphatest_fragment:tf,alphatest_pars_fragment:ef,aomap_fragment:nf,aomap_pars_fragment:sf,batching_pars_vertex:rf,batching_vertex:of,begin_vertex:af,beginnormal_vertex:lf,bsdfs:cf,iridescence_fragment:hf,bumpmap_pars_fragment:uf,clipping_planes_fragment:df,clipping_planes_pars_fragment:ff,clipping_planes_pars_vertex:pf,clipping_planes_vertex:mf,color_fragment:gf,color_pars_fragment:_f,color_pars_vertex:xf,color_vertex:yf,common:vf,cube_uv_reflection_fragment:Mf,defaultnormal_vertex:bf,displacementmap_pars_vertex:Sf,displacementmap_vertex:wf,emissivemap_fragment:Ef,emissivemap_pars_fragment:Tf,colorspace_fragment:Af,colorspace_pars_fragment:Rf,envmap_fragment:Cf,envmap_common_pars_fragment:Pf,envmap_pars_fragment:Lf,envmap_pars_vertex:If,envmap_physical_pars_fragment:Wf,envmap_vertex:Df,fog_vertex:Uf,fog_pars_vertex:Nf,fog_fragment:Of,fog_pars_fragment:Ff,gradientmap_pars_fragment:zf,lightmap_fragment:Bf,lightmap_pars_fragment:kf,lights_lambert_fragment:Hf,lights_lambert_pars_fragment:Vf,lights_pars_begin:Gf,lights_toon_fragment:Xf,lights_toon_pars_fragment:qf,lights_phong_fragment:Yf,lights_phong_pars_fragment:$f,lights_physical_fragment:Zf,lights_physical_pars_fragment:Jf,lights_fragment_begin:jf,lights_fragment_maps:Kf,lights_fragment_end:Qf,logdepthbuf_fragment:tp,logdepthbuf_pars_fragment:ep,logdepthbuf_pars_vertex:np,logdepthbuf_vertex:ip,map_fragment:sp,map_pars_fragment:rp,map_particle_fragment:op,map_particle_pars_fragment:ap,metalnessmap_fragment:lp,metalnessmap_pars_fragment:cp,morphinstance_vertex:hp,morphcolor_vertex:up,morphnormal_vertex:dp,morphtarget_pars_vertex:fp,morphtarget_vertex:pp,normal_fragment_begin:mp,normal_fragment_maps:gp,normal_pars_fragment:_p,normal_pars_vertex:xp,normal_vertex:yp,normalmap_pars_fragment:vp,clearcoat_normal_fragment_begin:Mp,clearcoat_normal_fragment_maps:bp,clearcoat_pars_fragment:Sp,iridescence_pars_fragment:wp,opaque_fragment:Ep,packing:Tp,premultiplied_alpha_fragment:Ap,project_vertex:Rp,dithering_fragment:Cp,dithering_pars_fragment:Pp,roughnessmap_fragment:Lp,roughnessmap_pars_fragment:Ip,shadowmap_pars_fragment:Dp,shadowmap_pars_vertex:Up,shadowmap_vertex:Np,shadowmask_pars_fragment:Op,skinbase_vertex:Fp,skinning_pars_vertex:zp,skinning_vertex:Bp,skinnormal_vertex:kp,specularmap_fragment:Hp,specularmap_pars_fragment:Vp,tonemapping_fragment:Gp,tonemapping_pars_fragment:Wp,transmission_fragment:Xp,transmission_pars_fragment:qp,uv_pars_fragment:Yp,uv_pars_vertex:$p,uv_vertex:Zp,worldpos_vertex:Jp,background_vert:jp,background_frag:Kp,backgroundCube_vert:Qp,backgroundCube_frag:tm,cube_vert:em,cube_frag:nm,depth_vert:im,depth_frag:sm,distanceRGBA_vert:rm,distanceRGBA_frag:om,equirect_vert:am,equirect_frag:lm,linedashed_vert:cm,linedashed_frag:hm,meshbasic_vert:um,meshbasic_frag:dm,meshlambert_vert:fm,meshlambert_frag:pm,meshmatcap_vert:mm,meshmatcap_frag:gm,meshnormal_vert:_m,meshnormal_frag:xm,meshphong_vert:ym,meshphong_frag:vm,meshphysical_vert:Mm,meshphysical_frag:bm,meshtoon_vert:Sm,meshtoon_frag:wm,points_vert:Em,points_frag:Tm,shadow_vert:Am,shadow_frag:Rm,sprite_vert:Cm,sprite_frag:Pm},Nt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},cn={basic:{uniforms:ln([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:ln([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:ln([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:ln([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:ln([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:ln([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:ln([Nt.points,Nt.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:ln([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:ln([Nt.common,Nt.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:ln([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:ln([Nt.sprite,Nt.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distanceRGBA:{uniforms:ln([Nt.common,Nt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distanceRGBA_vert,fragmentShader:ie.distanceRGBA_frag},shadow:{uniforms:ln([Nt.lights,Nt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};cn.physical={uniforms:ln([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};var Ur={r:0,b:0,g:0},Ri=new Bn,Lm=new be;function Im(i,t,e,n,s,r,a){let o=new Kt(0),l=r===!0?0:1,c,h,u=null,d=0,m=null;function g(p,f){let v=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?e:t).get(x)),x===null?y(o,l):x&&x.isColor&&(y(x,1),v=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Eo)?(h===void 0&&(h=new re(new mn(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:bs(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(W,H,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ri.copy(f.backgroundRotation),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Lm.makeRotationFromEuler(Ri)),h.material.toneMapped=ve.getTransfer(x.colorSpace)!==we,(u!==x||d!==x.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,m=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new re(new sn(2,2),new En({name:"BackgroundMaterial",uniforms:bs(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=ve.getTransfer(x.colorSpace)!==we,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function y(p,f){p.getRGB(Ur,Nh(i)),n.buffers.color.setClear(Ur.r,Ur.g,Ur.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),l=f,y(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,y(o,l)},render:g}}function Dm(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=p(null),c=l,h=!1;function u(b,U,w,N,k){let V=!1;if(a){let K=y(N,w,U);c!==K&&(c=K,m(c.object)),V=f(b,N,w,k),V&&v(b,N,w,k)}else{let K=U.wireframe===!0;(c.geometry!==N.id||c.program!==w.id||c.wireframe!==K)&&(c.geometry=N.id,c.program=w.id,c.wireframe=K,V=!0)}k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(V||h)&&(h=!1,Z(b,U,w,N),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(b){return n.isWebGL2?i.bindVertexArray(b):r.bindVertexArrayOES(b)}function g(b){return n.isWebGL2?i.deleteVertexArray(b):r.deleteVertexArrayOES(b)}function y(b,U,w){let N=w.wireframe===!0,k=o[b.id];k===void 0&&(k={},o[b.id]=k);let V=k[U.id];V===void 0&&(V={},k[U.id]=V);let K=V[N];return K===void 0&&(K=p(d()),V[N]=K),K}function p(b){let U=[],w=[],N=[];for(let k=0;k<s;k++)U[k]=0,w[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:w,attributeDivisors:N,object:b,attributes:{},index:null}}function f(b,U,w,N){let k=c.attributes,V=U.attributes,K=0,it=w.getAttributes();for(let tt in it)if(it[tt].location>=0){let q=k[tt],et=V[tt];if(et===void 0&&(tt==="instanceMatrix"&&b.instanceMatrix&&(et=b.instanceMatrix),tt==="instanceColor"&&b.instanceColor&&(et=b.instanceColor)),q===void 0||q.attribute!==et||et&&q.data!==et.data)return!0;K++}return c.attributesNum!==K||c.index!==N}function v(b,U,w,N){let k={},V=U.attributes,K=0,it=w.getAttributes();for(let tt in it)if(it[tt].location>=0){let q=V[tt];q===void 0&&(tt==="instanceMatrix"&&b.instanceMatrix&&(q=b.instanceMatrix),tt==="instanceColor"&&b.instanceColor&&(q=b.instanceColor));let et={};et.attribute=q,q&&q.data&&(et.data=q.data),k[tt]=et,K++}c.attributes=k,c.attributesNum=K,c.index=N}function x(){let b=c.newAttributes;for(let U=0,w=b.length;U<w;U++)b[U]=0}function T(b){W(b,0)}function W(b,U){let w=c.newAttributes,N=c.enabledAttributes,k=c.attributeDivisors;w[b]=1,N[b]===0&&(i.enableVertexAttribArray(b),N[b]=1),k[b]!==U&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](b,U),k[b]=U)}function H(){let b=c.newAttributes,U=c.enabledAttributes;for(let w=0,N=U.length;w<N;w++)U[w]!==b[w]&&(i.disableVertexAttribArray(w),U[w]=0)}function R(b,U,w,N,k,V,K){K===!0?i.vertexAttribIPointer(b,U,w,k,V):i.vertexAttribPointer(b,U,w,N,k,V)}function Z(b,U,w,N){if(n.isWebGL2===!1&&(b.isInstancedMesh||N.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let k=N.attributes,V=w.getAttributes(),K=U.defaultAttributeValues;for(let it in V){let tt=V[it];if(tt.location>=0){let ut=k[it];if(ut===void 0&&(it==="instanceMatrix"&&b.instanceMatrix&&(ut=b.instanceMatrix),it==="instanceColor"&&b.instanceColor&&(ut=b.instanceColor)),ut!==void 0){let q=ut.normalized,et=ut.itemSize,dt=e.get(ut);if(dt===void 0)continue;let mt=dt.buffer,_t=dt.type,pt=dt.bytesPerElement,Bt=n.isWebGL2===!0&&(_t===i.INT||_t===i.UNSIGNED_INT||ut.gpuType===wh);if(ut.isInterleavedBufferAttribute){let At=ut.data,I=At.stride,xt=ut.offset;if(At.isInstancedInterleavedBuffer){for(let ft=0;ft<tt.locationSize;ft++)W(tt.location+ft,At.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let ft=0;ft<tt.locationSize;ft++)T(tt.location+ft);i.bindBuffer(i.ARRAY_BUFFER,mt);for(let ft=0;ft<tt.locationSize;ft++)R(tt.location+ft,et/tt.locationSize,_t,q,I*pt,(xt+et/tt.locationSize*ft)*pt,Bt)}else{if(ut.isInstancedBufferAttribute){for(let At=0;At<tt.locationSize;At++)W(tt.location+At,ut.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let At=0;At<tt.locationSize;At++)T(tt.location+At);i.bindBuffer(i.ARRAY_BUFFER,mt);for(let At=0;At<tt.locationSize;At++)R(tt.location+At,et/tt.locationSize,_t,q,et*pt,et/tt.locationSize*At*pt,Bt)}}else if(K!==void 0){let q=K[it];if(q!==void 0)switch(q.length){case 2:i.vertexAttrib2fv(tt.location,q);break;case 3:i.vertexAttrib3fv(tt.location,q);break;case 4:i.vertexAttrib4fv(tt.location,q);break;default:i.vertexAttrib1fv(tt.location,q)}}}}H()}function st(){Q();for(let b in o){let U=o[b];for(let w in U){let N=U[w];for(let k in N)g(N[k].object),delete N[k];delete U[w]}delete o[b]}}function M(b){if(o[b.id]===void 0)return;let U=o[b.id];for(let w in U){let N=U[w];for(let k in N)g(N[k].object),delete N[k];delete U[w]}delete o[b.id]}function D(b){for(let U in o){let w=o[U];if(w[b.id]===void 0)continue;let N=w[b.id];for(let k in N)g(N[k].object),delete N[k];delete w[b.id]}}function Q(){P(),h=!0,c!==l&&(c=l,m(c.object))}function P(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:Q,resetDefaultState:P,dispose:st,releaseStatesOfGeometry:M,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:T,disableUnusedAttributes:H}}function Um(i,t,e,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,d){if(d===0)return;let m,g;if(s)m=i,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,u,d),e.update(u,r,d)}function c(h,u,d){if(d===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let y=0;y<d;y++)g+=u[y];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Nm(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext!="undefined"&&i.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,T=a||t.has("OES_texture_float"),W=x&&T,H=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:T,floatVertexTextures:W,maxSamples:H}}function Om(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Un,o=new se,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let m=u.length!==0||d||n!==0||s;return s=d,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,m){let g=u.clippingPlanes,y=u.clipIntersection,p=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let v=r?0:n,x=v*4,T=f.clippingState||null;l.value=T,T=h(g,d,x,m);for(let W=0;W!==x;++W)T[W]=e[W];f.clippingState=T,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,m,g){let y=u!==null?u.length:0,p=null;if(y!==0){if(p=l.value,g!==!0||p===null){let f=m+y*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<f)&&(p=new Float32Array(f));for(let x=0,T=m;x!==y;++x,T+=4)a.copy(u[x]).applyMatrix4(v,o),a.normal.toArray(p,T),p[T+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}function Fm(i){let t=new WeakMap;function e(a,o){return o===Ca?a.mapping=gs:o===Pa&&(a.mapping=_s),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ca||o===Pa)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new za(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var oo=class extends so{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},cs=4,Xc=[.125,.215,.35,.446,.526,.582],Ii=20,ga=new oo,qc=new Kt,_a=null,xa=0,ya=0,Pi=(1+Math.sqrt(5))/2,ls=1/Pi,Yc=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Pi,ls),new L(0,Pi,-ls),new L(ls,0,Pi),new L(-ls,0,Pi),new L(Pi,ls,0),new L(-Pi,ls,0)],Ss=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){_a=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),ya=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(_a,xa,ya),t.scissorTest=!1,Nr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gs||t.mapping===_s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_a=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),ya=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Zs,format:On,colorSpace:Si,depthBuffer:!1},s=$c(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$c(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zm(r)),this._blurMaterial=Bm(r,t,e)}return s}_compileMaterial(t){let e=new re(this._lodPlanes[0],t);this._renderer.compile(e,ga)}_sceneToCubeUV(t,e,n,s){let o=new He(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(qc),h.toneMapping=yi,h.autoClear=!1;let m=new Ms({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),g=new re(new mn,m),y=!1,p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,y=!0):(m.color.copy(qc),y=!0);for(let f=0;f<6;f++){let v=f%3;v===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):v===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));let x=this._cubeSize;Nr(s,v*x,f>2?x:0,x,x),h.setRenderTarget(s),y&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===gs||t.mapping===_s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new re(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Nr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ga)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Yc[(s-1)%Yc.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new re(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Ii-1),y=r/g,p=isFinite(r)?1+Math.floor(h*y):Ii;p>Ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ii}`);let f=[],v=0;for(let R=0;R<Ii;++R){let Z=R/y,st=Math.exp(-Z*Z/2);f.push(st),R===0?v+=st:R<p&&(v+=2*st)}for(let R=0;R<f.length;R++)f[R]=f[R]/v;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;let T=this._sizeLods[s],W=3*T*(s>x-cs?s-x+cs:0),H=4*(this._cubeSize-T);Nr(e,W,H,3*T,2*T),l.setRenderTarget(e),l.render(u,ga)}};function zm(i){let t=[],e=[],n=[],s=i,r=i-cs+1+Xc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-cs?l=Xc[a-i+cs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,y=3,p=2,f=1,v=new Float32Array(y*g*m),x=new Float32Array(p*g*m),T=new Float32Array(f*g*m);for(let H=0;H<m;H++){let R=H%3*2/3-1,Z=H>2?0:-1,st=[R,Z,0,R+2/3,Z,0,R+2/3,Z+1,0,R,Z,0,R+2/3,Z+1,0,R,Z+1,0];v.set(st,y*g*H),x.set(d,p*g*H);let M=[H,H,H,H,H,H];T.set(M,f*g*H)}let W=new qe;W.setAttribute("position",new Mn(v,y)),W.setAttribute("uv",new Mn(x,p)),W.setAttribute("faceIndex",new Mn(T,f)),t.push(W),s>cs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function $c(i,t,e){let n=new si(i,t,e);return n.texture.mapping=Eo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Nr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Bm(i,t,e){let n=new Float32Array(Ii),s=new L(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Zc(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Jc(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Cl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function km(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Ca||l===Pa,h=l===gs||l===_s;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new Ss(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new Ss(i));let d=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Hm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Vm(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let y=d.morphAttributes[g];for(let p=0,f=y.length;p<f;p++)t.remove(y[p])}d.removeEventListener("dispose",a),delete s[d.id];let m=r.get(d);m&&(t.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let m=u.morphAttributes;for(let g in m){let y=m[g];for(let p=0,f=y.length;p<f;p++)t.update(y[p],i.ARRAY_BUFFER)}}function c(u){let d=[],m=u.index,g=u.attributes.position,y=0;if(m!==null){let v=m.array;y=m.version;for(let x=0,T=v.length;x<T;x+=3){let W=v[x+0],H=v[x+1],R=v[x+2];d.push(W,H,H,R,R,W)}}else if(g!==void 0){let v=g.array;y=g.version;for(let x=0,T=v.length/3-1;x<T;x+=3){let W=x+0,H=x+1,R=x+2;d.push(W,H,H,R,R,W)}}else return;let p=new(Ih(d)?io:no)(d,1);p.version=y;let f=r.get(u);f&&t.remove(f),r.set(u,p)}function h(u){let d=r.get(u);if(d){let m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Gm(i,t,e,n){let s=n.isWebGL2,r;function a(m){r=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function h(m,g){i.drawElements(r,g,o,m*l),e.update(g,r,1)}function u(m,g,y){if(y===0)return;let p,f;if(s)p=i,f="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](r,g,o,m*l,y),e.update(g,r,y)}function d(m,g,y){if(y===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<y;f++)this.render(m[f]/l,g[f]);else{p.multiDrawElementsWEBGL(r,g,0,o,m,0,y);let f=0;for(let v=0;v<y;v++)f+=g[v];e.update(f,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Wm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Xm(i,t){return i[0]-t[0]}function qm(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Ym(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,a=new ue,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(t.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0,y=r.get(h);if(y===void 0||y.count!==g){let Q=function(){M.dispose(),r.delete(h),h.removeEventListener("dispose",Q)};y!==void 0&&y.texture.dispose();let p=h.morphAttributes.position!==void 0,f=h.morphAttributes.normal!==void 0,v=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],W=h.morphAttributes.color||[],H=0;p===!0&&(H=1),f===!0&&(H=2),v===!0&&(H=3);let R=h.attributes.position.count*H,Z=1;R>t.maxTextureSize&&(Z=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);let st=new Float32Array(R*Z*4*g),M=new eo(st,R,Z,g);M.type=ni,M.needsUpdate=!0;let D=H*4;for(let P=0;P<g;P++){let b=x[P],U=T[P],w=W[P],N=R*Z*4*P;for(let k=0;k<b.count;k++){let V=k*D;p===!0&&(a.fromBufferAttribute(b,k),st[N+V+0]=a.x,st[N+V+1]=a.y,st[N+V+2]=a.z,st[N+V+3]=0),f===!0&&(a.fromBufferAttribute(U,k),st[N+V+4]=a.x,st[N+V+5]=a.y,st[N+V+6]=a.z,st[N+V+7]=0),v===!0&&(a.fromBufferAttribute(w,k),st[N+V+8]=a.x,st[N+V+9]=a.y,st[N+V+10]=a.z,st[N+V+11]=w.itemSize===4?a.w:1)}}y={count:g,texture:M,size:new wt(R,Z)},r.set(h,y),h.addEventListener("dispose",Q)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",c.morphTexture,e);else{let p=0;for(let v=0;v<d.length;v++)p+=d[v];let f=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",f),u.getUniforms().setValue(i,"morphTargetInfluences",d)}u.getUniforms().setValue(i,"morphTargetsTexture",y.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",y.size)}else{let m=d===void 0?0:d.length,g=n[h.id];if(g===void 0||g.length!==m){g=[];for(let x=0;x<m;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<m;x++){let T=g[x];T[0]=x,T[1]=d[x]}g.sort(qm);for(let x=0;x<8;x++)x<m&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Xm);let y=h.morphAttributes.position,p=h.morphAttributes.normal,f=0;for(let x=0;x<8;x++){let T=o[x],W=T[0],H=T[1];W!==Number.MAX_SAFE_INTEGER&&H?(y&&h.getAttribute("morphTarget"+x)!==y[W]&&h.setAttribute("morphTarget"+x,y[W]),p&&h.getAttribute("morphNormal"+x)!==p[W]&&h.setAttribute("morphNormal"+x,p[W]),s[x]=H,f+=H):(y&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),p&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}let v=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(i,"morphTargetBaseInfluence",v),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function $m(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var ao=class extends pn{constructor(t,e,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:Oi,h!==Oi&&h!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Oi&&(n=_i),n===void 0&&h===xs&&(n=Ni),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:We,this.minFilter=l!==void 0?l:We,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Fh=new pn,zh=new ao(1,1);zh.compareFunction=Lh;var Bh=new eo,kh=new Oa,Hh=new ro,jc=[],Kc=[],Qc=new Float32Array(16),th=new Float32Array(9),eh=new Float32Array(4);function Cs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=jc[s];if(r===void 0&&(r=new Float32Array(s),jc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ne(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ro(i,t){let e=Kc[t];e===void 0&&(e=new Int32Array(t),Kc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Zm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Jm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2fv(this.addr,t),Ne(e,t)}}function jm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;i.uniform3fv(this.addr,t),Ne(e,t)}}function Km(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4fv(this.addr,t),Ne(e,t)}}function Qm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;eh.set(n),i.uniformMatrix2fv(this.addr,!1,eh),Ne(e,n)}}function tg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;th.set(n),i.uniformMatrix3fv(this.addr,!1,th),Ne(e,n)}}function eg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Qc.set(n),i.uniformMatrix4fv(this.addr,!1,Qc),Ne(e,n)}}function ng(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2iv(this.addr,t),Ne(e,t)}}function sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3iv(this.addr,t),Ne(e,t)}}function rg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4iv(this.addr,t),Ne(e,t)}}function og(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ag(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2uiv(this.addr,t),Ne(e,t)}}function lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3uiv(this.addr,t),Ne(e,t)}}function cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4uiv(this.addr,t),Ne(e,t)}}function hg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?zh:Fh;e.setTexture2D(t||r,s)}function ug(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||kh,s)}function dg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Hh,s)}function fg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Bh,s)}function pg(i){switch(i){case 5126:return Zm;case 35664:return Jm;case 35665:return jm;case 35666:return Km;case 35674:return Qm;case 35675:return tg;case 35676:return eg;case 5124:case 35670:return ng;case 35667:case 35671:return ig;case 35668:case 35672:return sg;case 35669:case 35673:return rg;case 5125:return og;case 36294:return ag;case 36295:return lg;case 36296:return cg;case 35678:case 36198:case 36298:case 36306:case 35682:return hg;case 35679:case 36299:case 36307:return ug;case 35680:case 36300:case 36308:case 36293:return dg;case 36289:case 36303:case 36311:case 36292:return fg}}function mg(i,t){i.uniform1fv(this.addr,t)}function gg(i,t){let e=Cs(t,this.size,2);i.uniform2fv(this.addr,e)}function _g(i,t){let e=Cs(t,this.size,3);i.uniform3fv(this.addr,e)}function xg(i,t){let e=Cs(t,this.size,4);i.uniform4fv(this.addr,e)}function yg(i,t){let e=Cs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function vg(i,t){let e=Cs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Mg(i,t){let e=Cs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function bg(i,t){i.uniform1iv(this.addr,t)}function Sg(i,t){i.uniform2iv(this.addr,t)}function wg(i,t){i.uniform3iv(this.addr,t)}function Eg(i,t){i.uniform4iv(this.addr,t)}function Tg(i,t){i.uniform1uiv(this.addr,t)}function Ag(i,t){i.uniform2uiv(this.addr,t)}function Rg(i,t){i.uniform3uiv(this.addr,t)}function Cg(i,t){i.uniform4uiv(this.addr,t)}function Pg(i,t,e){let n=this.cache,s=t.length,r=Ro(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Fh,r[a])}function Lg(i,t,e){let n=this.cache,s=t.length,r=Ro(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||kh,r[a])}function Ig(i,t,e){let n=this.cache,s=t.length,r=Ro(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Hh,r[a])}function Dg(i,t,e){let n=this.cache,s=t.length,r=Ro(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Bh,r[a])}function Ug(i){switch(i){case 5126:return mg;case 35664:return gg;case 35665:return _g;case 35666:return xg;case 35674:return yg;case 35675:return vg;case 35676:return Mg;case 5124:case 35670:return bg;case 35667:case 35671:return Sg;case 35668:case 35672:return wg;case 35669:case 35673:return Eg;case 5125:return Tg;case 36294:return Ag;case 36295:return Rg;case 36296:return Cg;case 35678:case 36198:case 36298:case 36306:case 35682:return Pg;case 35679:case 36299:case 36307:return Lg;case 35680:case 36300:case 36308:case 36293:return Ig;case 36289:case 36303:case 36311:case 36292:return Dg}}var Ba=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=pg(e.type)}},ka=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ug(e.type)}},Ha=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},va=/(\w+)(\])?(\[|\.)?/g;function nh(i,t){i.seq.push(t),i.map[t.id]=t}function Ng(i,t,e){let n=i.name,s=n.length;for(va.lastIndex=0;;){let r=va.exec(n),a=va.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){nh(e,c===void 0?new Ba(o,i,t):new ka(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Ha(o),nh(e,u)),e=u}}}var ms=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Ng(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function ih(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Og=37297,Fg=0;function zg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Bg(i){let t=ve.getPrimaries(ve.workingColorSpace),e=ve.getPrimaries(i),n;switch(t===e?n="":t===Zr&&e===$r?n="LinearDisplayP3ToLinearSRGB":t===$r&&e===Zr&&(n="LinearSRGBToLinearDisplayP3"),i){case Si:case To:return[n,"LinearTransferOETF"];case en:case Al:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function sh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+zg(i.getShaderSource(t),a)}else return s}function kg(i,t){let e=Bg(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Hg(i,t){let e;switch(t){case Xu:e="Linear";break;case qu:e="Reinhard";break;case Yu:e="OptimizedCineon";break;case wl:e="ACESFilmic";break;case Zu:e="AgX";break;case Ju:e="Neutral";break;case $u:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Vg(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(hs).join(`
`)}function Gg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hs).join(`
`)}function Wg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Xg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function hs(i){return i!==""}function rh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function oh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var qg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Va(i){return i.replace(qg,$g)}var Yg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function $g(i,t){let e=ie[t];if(e===void 0){let n=Yg.get(t);if(n!==void 0)e=ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Va(e)}var Zg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ah(i){return i.replace(Zg,Jg)}function Jg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function lh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(t+=`precision ${i.precision} sampler3D;
		precision ${i.precision} sampler2DArray;
		precision ${i.precision} sampler2DShadow;
		precision ${i.precision} samplerCubeShadow;
		precision ${i.precision} sampler2DArrayShadow;
		precision ${i.precision} isampler2D;
		precision ${i.precision} isampler3D;
		precision ${i.precision} isamplerCube;
		precision ${i.precision} isampler2DArray;
		precision ${i.precision} usampler2D;
		precision ${i.precision} usampler3D;
		precision ${i.precision} usamplerCube;
		precision ${i.precision} usampler2DArray;
		`),i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function jg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===wo?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===bl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ei&&(t="SHADOWMAP_TYPE_VSM"),t}function Kg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case gs:case _s:t="ENVMAP_TYPE_CUBE";break;case Eo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Qg(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===_s&&(t="ENVMAP_MODE_REFRACTION"),t}function t0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Sl:t="ENVMAP_BLENDING_MULTIPLY";break;case Gu:t="ENVMAP_BLENDING_MIX";break;case Wu:t="ENVMAP_BLENDING_ADD";break}return t}function e0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function n0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=jg(e),c=Kg(e),h=Qg(e),u=t0(e),d=e0(e),m=e.isWebGL2?"":Vg(e),g=Gg(e),y=Wg(r),p=s.createProgram(),f,v,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(hs).join(`
`),f.length>0&&(f+=`
`),v=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(hs).join(`
`),v.length>0&&(v+=`
`)):(f=[lh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),v=[m,lh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yi?"#define TONE_MAPPING":"",e.toneMapping!==yi?ie.tonemapping_pars_fragment:"",e.toneMapping!==yi?Hg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,kg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hs).join(`
`)),a=Va(a),a=rh(a,e),a=oh(a,e),o=Va(o),o=rh(o,e),o=oh(o,e),a=ah(a),o=ah(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,v=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let T=x+f+a,W=x+v+o,H=ih(s,s.VERTEX_SHADER,T),R=ih(s,s.FRAGMENT_SHADER,W);s.attachShader(p,H),s.attachShader(p,R),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function Z(Q){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(p).trim(),b=s.getShaderInfoLog(H).trim(),U=s.getShaderInfoLog(R).trim(),w=!0,N=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(w=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,H,R);else{let k=sh(s,H,"vertex"),V=sh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+Q.name+`
Material Type: `+Q.type+`

Program Info Log: `+P+`
`+k+`
`+V)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(b===""||U==="")&&(N=!1);N&&(Q.diagnostics={runnable:w,programLog:P,vertexShader:{log:b,prefix:f},fragmentShader:{log:U,prefix:v}})}s.deleteShader(H),s.deleteShader(R),st=new ms(s,p),M=Xg(s,p)}let st;this.getUniforms=function(){return st===void 0&&Z(this),st};let M;this.getAttributes=function(){return M===void 0&&Z(this),M};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(p,Og)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Fg++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=H,this.fragmentShader=R,this}var i0=0,Ga=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Wa(t),e.set(t,n)),n}},Wa=class{constructor(t){this.id=i0++,this.code=t,this.usedTimes=0}};function s0(i,t,e,n,s,r,a){let o=new Js,l=new Ga,c=new Set,h=[],u=s.isWebGL2,d=s.logarithmicDepthBuffer,m=s.vertexTextures,g=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M){return c.add(M),M===0?"uv":`uv${M}`}function f(M,D,Q,P,b){let U=P.fog,w=b.geometry,N=M.isMeshStandardMaterial?P.environment:null,k=(M.isMeshStandardMaterial?e:t).get(M.envMap||N),V=k&&k.mapping===Eo?k.image.height:null,K=y[M.type];M.precision!==null&&(g=s.getMaxPrecision(M.precision),g!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));let it=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,tt=it!==void 0?it.length:0,ut=0;w.morphAttributes.position!==void 0&&(ut=1),w.morphAttributes.normal!==void 0&&(ut=2),w.morphAttributes.color!==void 0&&(ut=3);let q,et,dt,mt;if(K){let ce=cn[K];q=ce.vertexShader,et=ce.fragmentShader}else q=M.vertexShader,et=M.fragmentShader,l.update(M),dt=l.getVertexShaderID(M),mt=l.getFragmentShaderID(M);let _t=i.getRenderTarget(),pt=b.isInstancedMesh===!0,Bt=b.isBatchedMesh===!0,At=!!M.map,I=!!M.matcap,xt=!!k,ft=!!M.aoMap,gt=!!M.lightMap,j=!!M.bumpMap,Rt=!!M.normalMap,Dt=!!M.displacementMap,Ct=!!M.emissiveMap,$t=!!M.metalnessMap,C=!!M.roughnessMap,S=M.anisotropy>0,lt=M.clearcoat>0,rt=M.iridescence>0,Mt=M.sheen>0,bt=M.transmission>0,Vt=S&&!!M.anisotropyMap,Gt=lt&&!!M.clearcoatMap,Tt=lt&&!!M.clearcoatNormalMap,Ot=lt&&!!M.clearcoatRoughnessMap,Yt=rt&&!!M.iridescenceMap,Et=rt&&!!M.iridescenceThicknessMap,Me=Mt&&!!M.sheenColorMap,Pt=Mt&&!!M.sheenRoughnessMap,Ht=!!M.specularMap,Ft=!!M.specularColorMap,kt=!!M.specularIntensityMap,z=bt&&!!M.transmissionMap,yt=bt&&!!M.thicknessMap,Xt=!!M.gradientMap,Y=!!M.alphaMap,It=M.alphaTest>0,J=!!M.alphaHash,ct=!!M.extensions,zt=yi;M.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(zt=i.toneMapping);let Qt={isWebGL2:u,shaderID:K,shaderType:M.type,shaderName:M.name,vertexShader:q,fragmentShader:et,defines:M.defines,customVertexShaderID:dt,customFragmentShaderID:mt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,batching:Bt,instancing:pt,instancingColor:pt&&b.instanceColor!==null,instancingMorph:pt&&b.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:_t===null?i.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:Si,alphaToCoverage:!!M.alphaToCoverage,map:At,matcap:I,envMap:xt,envMapMode:xt&&k.mapping,envMapCubeUVHeight:V,aoMap:ft,lightMap:gt,bumpMap:j,normalMap:Rt,displacementMap:m&&Dt,emissiveMap:Ct,normalMapObjectSpace:Rt&&M.normalMapType===ad,normalMapTangentSpace:Rt&&M.normalMapType===Tl,metalnessMap:$t,roughnessMap:C,anisotropy:S,anisotropyMap:Vt,clearcoat:lt,clearcoatMap:Gt,clearcoatNormalMap:Tt,clearcoatRoughnessMap:Ot,iridescence:rt,iridescenceMap:Yt,iridescenceThicknessMap:Et,sheen:Mt,sheenColorMap:Me,sheenRoughnessMap:Pt,specularMap:Ht,specularColorMap:Ft,specularIntensityMap:kt,transmission:bt,transmissionMap:z,thicknessMap:yt,gradientMap:Xt,opaque:M.transparent===!1&&M.blending===ds&&M.alphaToCoverage===!1,alphaMap:Y,alphaTest:It,alphaHash:J,combine:M.combine,mapUv:At&&p(M.map.channel),aoMapUv:ft&&p(M.aoMap.channel),lightMapUv:gt&&p(M.lightMap.channel),bumpMapUv:j&&p(M.bumpMap.channel),normalMapUv:Rt&&p(M.normalMap.channel),displacementMapUv:Dt&&p(M.displacementMap.channel),emissiveMapUv:Ct&&p(M.emissiveMap.channel),metalnessMapUv:$t&&p(M.metalnessMap.channel),roughnessMapUv:C&&p(M.roughnessMap.channel),anisotropyMapUv:Vt&&p(M.anisotropyMap.channel),clearcoatMapUv:Gt&&p(M.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&p(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ot&&p(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Yt&&p(M.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&p(M.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&p(M.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&p(M.sheenRoughnessMap.channel),specularMapUv:Ht&&p(M.specularMap.channel),specularColorMapUv:Ft&&p(M.specularColorMap.channel),specularIntensityMapUv:kt&&p(M.specularIntensityMap.channel),transmissionMapUv:z&&p(M.transmissionMap.channel),thicknessMapUv:yt&&p(M.thicknessMap.channel),alphaMapUv:Y&&p(M.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(Rt||S),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,pointsUvs:b.isPoints===!0&&!!w.attributes.uv&&(At||Y),fog:!!U,useFog:M.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:b.isSkinnedMesh===!0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:ut,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&Q.length>0,shadowMapType:i.shadowMap.type,toneMapping:zt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:At&&M.map.isVideoTexture===!0&&ve.getTransfer(M.map.colorSpace)===we,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Pe,flipSided:M.side===nn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ct&&M.extensions.derivatives===!0,extensionFragDepth:ct&&M.extensions.fragDepth===!0,extensionDrawBuffers:ct&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ct&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ct&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ct&&M.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Qt.vertexUv1s=c.has(1),Qt.vertexUv2s=c.has(2),Qt.vertexUv3s=c.has(3),c.clear(),Qt}function v(M){let D=[];if(M.shaderID?D.push(M.shaderID):(D.push(M.customVertexShaderID),D.push(M.customFragmentShaderID)),M.defines!==void 0)for(let Q in M.defines)D.push(Q),D.push(M.defines[Q]);return M.isRawShaderMaterial===!1&&(x(D,M),T(D,M),D.push(i.outputColorSpace)),D.push(M.customProgramCacheKey),D.join()}function x(M,D){M.push(D.precision),M.push(D.outputColorSpace),M.push(D.envMapMode),M.push(D.envMapCubeUVHeight),M.push(D.mapUv),M.push(D.alphaMapUv),M.push(D.lightMapUv),M.push(D.aoMapUv),M.push(D.bumpMapUv),M.push(D.normalMapUv),M.push(D.displacementMapUv),M.push(D.emissiveMapUv),M.push(D.metalnessMapUv),M.push(D.roughnessMapUv),M.push(D.anisotropyMapUv),M.push(D.clearcoatMapUv),M.push(D.clearcoatNormalMapUv),M.push(D.clearcoatRoughnessMapUv),M.push(D.iridescenceMapUv),M.push(D.iridescenceThicknessMapUv),M.push(D.sheenColorMapUv),M.push(D.sheenRoughnessMapUv),M.push(D.specularMapUv),M.push(D.specularColorMapUv),M.push(D.specularIntensityMapUv),M.push(D.transmissionMapUv),M.push(D.thicknessMapUv),M.push(D.combine),M.push(D.fogExp2),M.push(D.sizeAttenuation),M.push(D.morphTargetsCount),M.push(D.morphAttributeCount),M.push(D.numDirLights),M.push(D.numPointLights),M.push(D.numSpotLights),M.push(D.numSpotLightMaps),M.push(D.numHemiLights),M.push(D.numRectAreaLights),M.push(D.numDirLightShadows),M.push(D.numPointLightShadows),M.push(D.numSpotLightShadows),M.push(D.numSpotLightShadowsWithMaps),M.push(D.numLightProbes),M.push(D.shadowMapType),M.push(D.toneMapping),M.push(D.numClippingPlanes),M.push(D.numClipIntersection),M.push(D.depthPacking)}function T(M,D){o.disableAll(),D.isWebGL2&&o.enable(0),D.supportsVertexTextures&&o.enable(1),D.instancing&&o.enable(2),D.instancingColor&&o.enable(3),D.instancingMorph&&o.enable(4),D.matcap&&o.enable(5),D.envMap&&o.enable(6),D.normalMapObjectSpace&&o.enable(7),D.normalMapTangentSpace&&o.enable(8),D.clearcoat&&o.enable(9),D.iridescence&&o.enable(10),D.alphaTest&&o.enable(11),D.vertexColors&&o.enable(12),D.vertexAlphas&&o.enable(13),D.vertexUv1s&&o.enable(14),D.vertexUv2s&&o.enable(15),D.vertexUv3s&&o.enable(16),D.vertexTangents&&o.enable(17),D.anisotropy&&o.enable(18),D.alphaHash&&o.enable(19),D.batching&&o.enable(20),M.push(o.mask),o.disableAll(),D.fog&&o.enable(0),D.useFog&&o.enable(1),D.flatShading&&o.enable(2),D.logarithmicDepthBuffer&&o.enable(3),D.skinning&&o.enable(4),D.morphTargets&&o.enable(5),D.morphNormals&&o.enable(6),D.morphColors&&o.enable(7),D.premultipliedAlpha&&o.enable(8),D.shadowMapEnabled&&o.enable(9),D.useLegacyLights&&o.enable(10),D.doubleSided&&o.enable(11),D.flipSided&&o.enable(12),D.useDepthPacking&&o.enable(13),D.dithering&&o.enable(14),D.transmission&&o.enable(15),D.sheen&&o.enable(16),D.opaque&&o.enable(17),D.pointsUvs&&o.enable(18),D.decodeVideoTexture&&o.enable(19),D.alphaToCoverage&&o.enable(20),M.push(o.mask)}function W(M){let D=y[M.type],Q;if(D){let P=cn[D];Q=Ao.clone(P.uniforms)}else Q=M.uniforms;return Q}function H(M,D){let Q;for(let P=0,b=h.length;P<b;P++){let U=h[P];if(U.cacheKey===D){Q=U,++Q.usedTimes;break}}return Q===void 0&&(Q=new n0(i,D,M,r),h.push(Q)),Q}function R(M){if(--M.usedTimes===0){let D=h.indexOf(M);h[D]=h[h.length-1],h.pop(),M.destroy()}}function Z(M){l.remove(M)}function st(){l.dispose()}return{getParameters:f,getProgramCacheKey:v,getUniforms:W,acquireProgram:H,releaseProgram:R,releaseShaderCache:Z,programs:h,dispose:st}}function r0(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function o0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ch(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function hh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,m,g,y,p){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:y,group:p},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=y,f.group=p),t++,f}function o(u,d,m,g,y,p){let f=a(u,d,m,g,y,p);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):e.push(f)}function l(u,d,m,g,y,p){let f=a(u,d,m,g,y,p);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||o0),n.length>1&&n.sort(d||ch),s.length>1&&s.sort(d||ch)}function h(){for(let u=t,d=i.length;u<d;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function a0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new hh,i.set(n,[a])):s>=r.length?(a=new hh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function l0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Kt};break;case"SpotLight":e={position:new L,direction:new L,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function c0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var h0=0;function u0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function d0(i,t){let e=new l0,n=c0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new L);let r=new L,a=new be,o=new be;function l(h,u){let d=0,m=0,g=0;for(let Q=0;Q<9;Q++)s.probe[Q].set(0,0,0);let y=0,p=0,f=0,v=0,x=0,T=0,W=0,H=0,R=0,Z=0,st=0;h.sort(u0);let M=u===!0?Math.PI:1;for(let Q=0,P=h.length;Q<P;Q++){let b=h[Q],U=b.color,w=b.intensity,N=b.distance,k=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)d+=U.r*w*M,m+=U.g*w*M,g+=U.b*w*M;else if(b.isLightProbe){for(let V=0;V<9;V++)s.probe[V].addScaledVector(b.sh.coefficients[V],w);st++}else if(b.isDirectionalLight){let V=e.get(b);if(V.color.copy(b.color).multiplyScalar(b.intensity*M),b.castShadow){let K=b.shadow,it=n.get(b);it.shadowBias=K.bias,it.shadowNormalBias=K.normalBias,it.shadowRadius=K.radius,it.shadowMapSize=K.mapSize,s.directionalShadow[y]=it,s.directionalShadowMap[y]=k,s.directionalShadowMatrix[y]=b.shadow.matrix,T++}s.directional[y]=V,y++}else if(b.isSpotLight){let V=e.get(b);V.position.setFromMatrixPosition(b.matrixWorld),V.color.copy(U).multiplyScalar(w*M),V.distance=N,V.coneCos=Math.cos(b.angle),V.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),V.decay=b.decay,s.spot[f]=V;let K=b.shadow;if(b.map&&(s.spotLightMap[R]=b.map,R++,K.updateMatrices(b),b.castShadow&&Z++),s.spotLightMatrix[f]=K.matrix,b.castShadow){let it=n.get(b);it.shadowBias=K.bias,it.shadowNormalBias=K.normalBias,it.shadowRadius=K.radius,it.shadowMapSize=K.mapSize,s.spotShadow[f]=it,s.spotShadowMap[f]=k,H++}f++}else if(b.isRectAreaLight){let V=e.get(b);V.color.copy(U).multiplyScalar(w),V.halfWidth.set(b.width*.5,0,0),V.halfHeight.set(0,b.height*.5,0),s.rectArea[v]=V,v++}else if(b.isPointLight){let V=e.get(b);if(V.color.copy(b.color).multiplyScalar(b.intensity*M),V.distance=b.distance,V.decay=b.decay,b.castShadow){let K=b.shadow,it=n.get(b);it.shadowBias=K.bias,it.shadowNormalBias=K.normalBias,it.shadowRadius=K.radius,it.shadowMapSize=K.mapSize,it.shadowCameraNear=K.camera.near,it.shadowCameraFar=K.camera.far,s.pointShadow[p]=it,s.pointShadowMap[p]=k,s.pointShadowMatrix[p]=b.shadow.matrix,W++}s.point[p]=V,p++}else if(b.isHemisphereLight){let V=e.get(b);V.skyColor.copy(b.color).multiplyScalar(w*M),V.groundColor.copy(b.groundColor).multiplyScalar(w*M),s.hemi[x]=V,x++}}v>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Nt.LTC_FLOAT_1,s.rectAreaLTC2=Nt.LTC_FLOAT_2):(s.rectAreaLTC1=Nt.LTC_HALF_1,s.rectAreaLTC2=Nt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Nt.LTC_FLOAT_1,s.rectAreaLTC2=Nt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Nt.LTC_HALF_1,s.rectAreaLTC2=Nt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=m,s.ambient[2]=g;let D=s.hash;(D.directionalLength!==y||D.pointLength!==p||D.spotLength!==f||D.rectAreaLength!==v||D.hemiLength!==x||D.numDirectionalShadows!==T||D.numPointShadows!==W||D.numSpotShadows!==H||D.numSpotMaps!==R||D.numLightProbes!==st)&&(s.directional.length=y,s.spot.length=f,s.rectArea.length=v,s.point.length=p,s.hemi.length=x,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=W,s.pointShadowMap.length=W,s.spotShadow.length=H,s.spotShadowMap.length=H,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=W,s.spotLightMatrix.length=H+R-Z,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=Z,s.numLightProbes=st,D.directionalLength=y,D.pointLength=p,D.spotLength=f,D.rectAreaLength=v,D.hemiLength=x,D.numDirectionalShadows=T,D.numPointShadows=W,D.numSpotShadows=H,D.numSpotMaps=R,D.numLightProbes=st,s.version=h0++)}function c(h,u){let d=0,m=0,g=0,y=0,p=0,f=u.matrixWorldInverse;for(let v=0,x=h.length;v<x;v++){let T=h[v];if(T.isDirectionalLight){let W=s.directional[d];W.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),W.direction.sub(r),W.direction.transformDirection(f),d++}else if(T.isSpotLight){let W=s.spot[g];W.position.setFromMatrixPosition(T.matrixWorld),W.position.applyMatrix4(f),W.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),W.direction.sub(r),W.direction.transformDirection(f),g++}else if(T.isRectAreaLight){let W=s.rectArea[y];W.position.setFromMatrixPosition(T.matrixWorld),W.position.applyMatrix4(f),o.identity(),a.copy(T.matrixWorld),a.premultiply(f),o.extractRotation(a),W.halfWidth.set(T.width*.5,0,0),W.halfHeight.set(0,T.height*.5,0),W.halfWidth.applyMatrix4(o),W.halfHeight.applyMatrix4(o),y++}else if(T.isPointLight){let W=s.point[m];W.position.setFromMatrixPosition(T.matrixWorld),W.position.applyMatrix4(f),m++}else if(T.isHemisphereLight){let W=s.hemi[p];W.direction.setFromMatrixPosition(T.matrixWorld),W.direction.transformDirection(f),p++}}}return{setup:l,setupView:c,state:s}}function uh(i,t){let e=new d0(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function f0(i,t){let e=new WeakMap;function n(r,a=0){let o=e.get(r),l;return o===void 0?(l=new uh(i,t),e.set(r,[l])):a>=o.length?(l=new uh(i,t),o.push(l)):l=o[a],l}function s(){e=new WeakMap}return{get:n,dispose:s}}var Xa=class extends bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},qa=class extends bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},p0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function g0(i,t,e){let n=new js,s=new wt,r=new wt,a=new ue,o=new Xa({depthPacking:od}),l=new qa,c={},h=e.maxTextureSize,u={[Mi]:nn,[nn]:Mi,[Pe]:Pe},d=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:p0,fragmentShader:m0}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new qe;g.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new re(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wo;let f=this.type;this.render=function(H,R,Z){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||H.length===0)return;let st=i.getRenderTarget(),M=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),Q=i.state;Q.setBlending(xi),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);let P=f!==ei&&this.type===ei,b=f===ei&&this.type!==ei;for(let U=0,w=H.length;U<w;U++){let N=H[U],k=N.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let V=k.getFrameExtents();if(s.multiply(V),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/V.x),s.x=r.x*V.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/V.y),s.y=r.y*V.y,k.mapSize.y=r.y)),k.map===null||P===!0||b===!0){let it=this.type!==ei?{minFilter:We,magFilter:We}:{};k.map!==null&&k.map.dispose(),k.map=new si(s.x,s.y,it),k.map.texture.name=N.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();let K=k.getViewportCount();for(let it=0;it<K;it++){let tt=k.getViewport(it);a.set(r.x*tt.x,r.y*tt.y,r.x*tt.z,r.y*tt.w),Q.viewport(a),k.updateMatrices(N,it),n=k.getFrustum(),T(R,Z,k.camera,N,this.type)}k.isPointLightShadow!==!0&&this.type===ei&&v(k,Z),k.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(st,M,D)};function v(H,R){let Z=t.update(y);d.defines.VSM_SAMPLES!==H.blurSamples&&(d.defines.VSM_SAMPLES=H.blurSamples,m.defines.VSM_SAMPLES=H.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new si(s.x,s.y)),d.uniforms.shadow_pass.value=H.map.texture,d.uniforms.resolution.value=H.mapSize,d.uniforms.radius.value=H.radius,i.setRenderTarget(H.mapPass),i.clear(),i.renderBufferDirect(R,null,Z,d,y,null),m.uniforms.shadow_pass.value=H.mapPass.texture,m.uniforms.resolution.value=H.mapSize,m.uniforms.radius.value=H.radius,i.setRenderTarget(H.map),i.clear(),i.renderBufferDirect(R,null,Z,m,y,null)}function x(H,R,Z,st){let M=null,D=Z.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(D!==void 0)M=D;else if(M=Z.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let Q=M.uuid,P=R.uuid,b=c[Q];b===void 0&&(b={},c[Q]=b);let U=b[P];U===void 0&&(U=M.clone(),b[P]=U,R.addEventListener("dispose",W)),M=U}if(M.visible=R.visible,M.wireframe=R.wireframe,st===ei?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,Z.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let Q=i.properties.get(M);Q.light=Z}return M}function T(H,R,Z,st,M){if(H.visible===!1)return;if(H.layers.test(R.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&M===ei)&&(!H.frustumCulled||n.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,H.matrixWorld);let P=t.update(H),b=H.material;if(Array.isArray(b)){let U=P.groups;for(let w=0,N=U.length;w<N;w++){let k=U[w],V=b[k.materialIndex];if(V&&V.visible){let K=x(H,V,st,M);H.onBeforeShadow(i,H,R,Z,P,K,k),i.renderBufferDirect(Z,null,P,K,H,k),H.onAfterShadow(i,H,R,Z,P,K,k)}}}else if(b.visible){let U=x(H,b,st,M);H.onBeforeShadow(i,H,R,Z,P,U,null),i.renderBufferDirect(Z,null,P,U,H,null),H.onAfterShadow(i,H,R,Z,P,U,null)}}let Q=H.children;for(let P=0,b=Q.length;P<b;P++)T(Q[P],R,Z,st,M)}function W(H){H.target.removeEventListener("dispose",W);for(let Z in c){let st=c[Z],M=H.target.uuid;M in st&&(st[M].dispose(),delete st[M])}}}function _0(i,t,e){let n=e.isWebGL2;function s(){let Y=!1,It=new ue,J=null,ct=new ue(0,0,0,0);return{setMask:function(zt){J!==zt&&!Y&&(i.colorMask(zt,zt,zt,zt),J=zt)},setLocked:function(zt){Y=zt},setClear:function(zt,Qt,ce,de,ye){ye===!0&&(zt*=de,Qt*=de,ce*=de),It.set(zt,Qt,ce,de),ct.equals(It)===!1&&(i.clearColor(zt,Qt,ce,de),ct.copy(It))},reset:function(){Y=!1,J=null,ct.set(-1,0,0,0)}}}function r(){let Y=!1,It=null,J=null,ct=null;return{setTest:function(zt){zt?pt(i.DEPTH_TEST):Bt(i.DEPTH_TEST)},setMask:function(zt){It!==zt&&!Y&&(i.depthMask(zt),It=zt)},setFunc:function(zt){if(J!==zt){switch(zt){case Ou:i.depthFunc(i.NEVER);break;case Fu:i.depthFunc(i.ALWAYS);break;case zu:i.depthFunc(i.LESS);break;case Wr:i.depthFunc(i.LEQUAL);break;case Bu:i.depthFunc(i.EQUAL);break;case ku:i.depthFunc(i.GEQUAL);break;case Hu:i.depthFunc(i.GREATER);break;case Vu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=zt}},setLocked:function(zt){Y=zt},setClear:function(zt){ct!==zt&&(i.clearDepth(zt),ct=zt)},reset:function(){Y=!1,It=null,J=null,ct=null}}}function a(){let Y=!1,It=null,J=null,ct=null,zt=null,Qt=null,ce=null,de=null,ye=null;return{setTest:function(oe){Y||(oe?pt(i.STENCIL_TEST):Bt(i.STENCIL_TEST))},setMask:function(oe){It!==oe&&!Y&&(i.stencilMask(oe),It=oe)},setFunc:function(oe,ae,Se){(J!==oe||ct!==ae||zt!==Se)&&(i.stencilFunc(oe,ae,Se),J=oe,ct=ae,zt=Se)},setOp:function(oe,ae,Se){(Qt!==oe||ce!==ae||de!==Se)&&(i.stencilOp(oe,ae,Se),Qt=oe,ce=ae,de=Se)},setLocked:function(oe){Y=oe},setClear:function(oe){ye!==oe&&(i.clearStencil(oe),ye=oe)},reset:function(){Y=!1,It=null,J=null,ct=null,zt=null,Qt=null,ce=null,de=null,ye=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap,d={},m={},g=new WeakMap,y=[],p=null,f=!1,v=null,x=null,T=null,W=null,H=null,R=null,Z=null,st=new Kt(0,0,0),M=0,D=!1,Q=null,P=null,b=null,U=null,w=null,N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,V=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(K)[1]),k=V>=1):K.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),k=V>=2);let it=null,tt={},ut=i.getParameter(i.SCISSOR_BOX),q=i.getParameter(i.VIEWPORT),et=new ue().fromArray(ut),dt=new ue().fromArray(q);function mt(Y,It,J,ct){let zt=new Uint8Array(4),Qt=i.createTexture();i.bindTexture(Y,Qt),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ce=0;ce<J;ce++)n&&(Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY)?i.texImage3D(It,0,i.RGBA,1,1,ct,0,i.RGBA,i.UNSIGNED_BYTE,zt):i.texImage2D(It+ce,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,zt);return Qt}let _t={};_t[i.TEXTURE_2D]=mt(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=mt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(_t[i.TEXTURE_2D_ARRAY]=mt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=mt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),pt(i.DEPTH_TEST),l.setFunc(Wr),Dt(!1),Ct(Gl),pt(i.CULL_FACE),j(xi);function pt(Y){d[Y]!==!0&&(i.enable(Y),d[Y]=!0)}function Bt(Y){d[Y]!==!1&&(i.disable(Y),d[Y]=!1)}function At(Y,It){return m[Y]!==It?(i.bindFramebuffer(Y,It),m[Y]=It,n&&(Y===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=It),Y===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=It)),!0):!1}function I(Y,It){let J=y,ct=!1;if(Y){J=g.get(It),J===void 0&&(J=[],g.set(It,J));let zt=Y.textures;if(J.length!==zt.length||J[0]!==i.COLOR_ATTACHMENT0){for(let Qt=0,ce=zt.length;Qt<ce;Qt++)J[Qt]=i.COLOR_ATTACHMENT0+Qt;J.length=zt.length,ct=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,ct=!0);if(ct)if(e.isWebGL2)i.drawBuffers(J);else if(t.has("WEBGL_draw_buffers")===!0)t.get("WEBGL_draw_buffers").drawBuffersWEBGL(J);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function xt(Y){return p!==Y?(i.useProgram(Y),p=Y,!0):!1}let ft={[Li]:i.FUNC_ADD,[Mu]:i.FUNC_SUBTRACT,[bu]:i.FUNC_REVERSE_SUBTRACT};if(n)ft[Yl]=i.MIN,ft[$l]=i.MAX;else{let Y=t.get("EXT_blend_minmax");Y!==null&&(ft[Yl]=Y.MIN_EXT,ft[$l]=Y.MAX_EXT)}let gt={[Su]:i.ZERO,[wu]:i.ONE,[Eu]:i.SRC_COLOR,[Aa]:i.SRC_ALPHA,[Lu]:i.SRC_ALPHA_SATURATE,[Cu]:i.DST_COLOR,[Au]:i.DST_ALPHA,[Tu]:i.ONE_MINUS_SRC_COLOR,[Ra]:i.ONE_MINUS_SRC_ALPHA,[Pu]:i.ONE_MINUS_DST_COLOR,[Ru]:i.ONE_MINUS_DST_ALPHA,[Iu]:i.CONSTANT_COLOR,[Du]:i.ONE_MINUS_CONSTANT_COLOR,[Uu]:i.CONSTANT_ALPHA,[Nu]:i.ONE_MINUS_CONSTANT_ALPHA};function j(Y,It,J,ct,zt,Qt,ce,de,ye,oe){if(Y===xi){f===!0&&(Bt(i.BLEND),f=!1);return}if(f===!1&&(pt(i.BLEND),f=!0),Y!==vu){if(Y!==v||oe!==D){if((x!==Li||H!==Li)&&(i.blendEquation(i.FUNC_ADD),x=Li,H=Li),oe)switch(Y){case ds:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wl:i.blendFunc(i.ONE,i.ONE);break;case Xl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ql:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case ds:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Xl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ql:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}T=null,W=null,R=null,Z=null,st.set(0,0,0),M=0,v=Y,D=oe}return}zt=zt||It,Qt=Qt||J,ce=ce||ct,(It!==x||zt!==H)&&(i.blendEquationSeparate(ft[It],ft[zt]),x=It,H=zt),(J!==T||ct!==W||Qt!==R||ce!==Z)&&(i.blendFuncSeparate(gt[J],gt[ct],gt[Qt],gt[ce]),T=J,W=ct,R=Qt,Z=ce),(de.equals(st)===!1||ye!==M)&&(i.blendColor(de.r,de.g,de.b,ye),st.copy(de),M=ye),v=Y,D=!1}function Rt(Y,It){Y.side===Pe?Bt(i.CULL_FACE):pt(i.CULL_FACE);let J=Y.side===nn;It&&(J=!J),Dt(J),Y.blending===ds&&Y.transparent===!1?j(xi):j(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),l.setFunc(Y.depthFunc),l.setTest(Y.depthTest),l.setMask(Y.depthWrite),o.setMask(Y.colorWrite);let ct=Y.stencilWrite;c.setTest(ct),ct&&(c.setMask(Y.stencilWriteMask),c.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),c.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),C(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?pt(i.SAMPLE_ALPHA_TO_COVERAGE):Bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(Y){Q!==Y&&(Y?i.frontFace(i.CW):i.frontFace(i.CCW),Q=Y)}function Ct(Y){Y!==xu?(pt(i.CULL_FACE),Y!==P&&(Y===Gl?i.cullFace(i.BACK):Y===yu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Bt(i.CULL_FACE),P=Y}function $t(Y){Y!==b&&(k&&i.lineWidth(Y),b=Y)}function C(Y,It,J){Y?(pt(i.POLYGON_OFFSET_FILL),(U!==It||w!==J)&&(i.polygonOffset(It,J),U=It,w=J)):Bt(i.POLYGON_OFFSET_FILL)}function S(Y){Y?pt(i.SCISSOR_TEST):Bt(i.SCISSOR_TEST)}function lt(Y){Y===void 0&&(Y=i.TEXTURE0+N-1),it!==Y&&(i.activeTexture(Y),it=Y)}function rt(Y,It,J){J===void 0&&(it===null?J=i.TEXTURE0+N-1:J=it);let ct=tt[J];ct===void 0&&(ct={type:void 0,texture:void 0},tt[J]=ct),(ct.type!==Y||ct.texture!==It)&&(it!==J&&(i.activeTexture(J),it=J),i.bindTexture(Y,It||_t[Y]),ct.type=Y,ct.texture=It)}function Mt(){let Y=tt[it];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function bt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Vt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Gt(){try{i.texSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Tt(){try{i.texSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ot(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Yt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Et(){try{i.texStorage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Me(){try{i.texStorage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Pt(){try{i.texImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ht(){try{i.texImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ft(Y){et.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),et.copy(Y))}function kt(Y){dt.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),dt.copy(Y))}function z(Y,It){let J=u.get(It);J===void 0&&(J=new WeakMap,u.set(It,J));let ct=J.get(Y);ct===void 0&&(ct=i.getUniformBlockIndex(It,Y.name),J.set(Y,ct))}function yt(Y,It){let ct=u.get(It).get(Y);h.get(It)!==ct&&(i.uniformBlockBinding(It,ct,Y.__bindingPointIndex),h.set(It,ct))}function Xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},it=null,tt={},m={},g=new WeakMap,y=[],p=null,f=!1,v=null,x=null,T=null,W=null,H=null,R=null,Z=null,st=new Kt(0,0,0),M=0,D=!1,Q=null,P=null,b=null,U=null,w=null,et.set(0,0,i.canvas.width,i.canvas.height),dt.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:pt,disable:Bt,bindFramebuffer:At,drawBuffers:I,useProgram:xt,setBlending:j,setMaterial:Rt,setFlipSided:Dt,setCullFace:Ct,setLineWidth:$t,setPolygonOffset:C,setScissorTest:S,activeTexture:lt,bindTexture:rt,unbindTexture:Mt,compressedTexImage2D:bt,compressedTexImage3D:Vt,texImage2D:Pt,texImage3D:Ht,updateUBOMapping:z,uniformBlockBinding:yt,texStorage2D:Et,texStorage3D:Me,texSubImage2D:Gt,texSubImage3D:Tt,compressedTexSubImage2D:Ot,compressedTexSubImage3D:Yt,scissor:Ft,viewport:kt,reset:Xt}}function x0(i,t,e,n,s,r,a){let o=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new wt,u=new WeakMap,d,m=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(C){}function y(C,S){return g?new OffscreenCanvas(C,S):Kr("canvas")}function p(C,S,lt,rt){let Mt=1,bt=$t(C);if((bt.width>rt||bt.height>rt)&&(Mt=rt/Math.max(bt.width,bt.height)),Mt<1||S===!0)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap||typeof VideoFrame!="undefined"&&C instanceof VideoFrame){let Vt=S?jr:Math.floor,Gt=Vt(Mt*bt.width),Tt=Vt(Mt*bt.height);d===void 0&&(d=y(Gt,Tt));let Ot=lt?y(Gt,Tt):d;return Ot.width=Gt,Ot.height=Tt,Ot.getContext("2d").drawImage(C,0,0,Gt,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+bt.width+"x"+bt.height+") to ("+Gt+"x"+Tt+")."),Ot}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+bt.width+"x"+bt.height+")."),C;return C}function f(C){let S=$t(C);return Ua(S.width)&&Ua(S.height)}function v(C){return o?!1:C.wrapS!==Nn||C.wrapT!==Nn||C.minFilter!==We&&C.minFilter!==fn}function x(C,S){return C.generateMipmaps&&S&&C.minFilter!==We&&C.minFilter!==fn}function T(C){i.generateMipmap(C)}function W(C,S,lt,rt,Mt=!1){if(o===!1)return S;if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let bt=S;if(S===i.RED&&(lt===i.FLOAT&&(bt=i.R32F),lt===i.HALF_FLOAT&&(bt=i.R16F),lt===i.UNSIGNED_BYTE&&(bt=i.R8)),S===i.RED_INTEGER&&(lt===i.UNSIGNED_BYTE&&(bt=i.R8UI),lt===i.UNSIGNED_SHORT&&(bt=i.R16UI),lt===i.UNSIGNED_INT&&(bt=i.R32UI),lt===i.BYTE&&(bt=i.R8I),lt===i.SHORT&&(bt=i.R16I),lt===i.INT&&(bt=i.R32I)),S===i.RG&&(lt===i.FLOAT&&(bt=i.RG32F),lt===i.HALF_FLOAT&&(bt=i.RG16F),lt===i.UNSIGNED_BYTE&&(bt=i.RG8)),S===i.RG_INTEGER&&(lt===i.UNSIGNED_BYTE&&(bt=i.RG8UI),lt===i.UNSIGNED_SHORT&&(bt=i.RG16UI),lt===i.UNSIGNED_INT&&(bt=i.RG32UI),lt===i.BYTE&&(bt=i.RG8I),lt===i.SHORT&&(bt=i.RG16I),lt===i.INT&&(bt=i.RG32I)),S===i.RGBA){let Vt=Mt?Yr:ve.getTransfer(rt);lt===i.FLOAT&&(bt=i.RGBA32F),lt===i.HALF_FLOAT&&(bt=i.RGBA16F),lt===i.UNSIGNED_BYTE&&(bt=Vt===we?i.SRGB8_ALPHA8:i.RGBA8),lt===i.UNSIGNED_SHORT_4_4_4_4&&(bt=i.RGBA4),lt===i.UNSIGNED_SHORT_5_5_5_1&&(bt=i.RGB5_A1)}return(bt===i.R16F||bt===i.R32F||bt===i.RG16F||bt===i.RG32F||bt===i.RGBA16F||bt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),bt}function H(C,S,lt){return x(C,lt)===!0||C.isFramebufferTexture&&C.minFilter!==We&&C.minFilter!==fn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function R(C){return C===We||C===Zl||C===Fs?i.NEAREST:i.LINEAR}function Z(C){let S=C.target;S.removeEventListener("dispose",Z),M(S),S.isVideoTexture&&u.delete(S)}function st(C){let S=C.target;S.removeEventListener("dispose",st),Q(S)}function M(C){let S=n.get(C);if(S.__webglInit===void 0)return;let lt=C.source,rt=m.get(lt);if(rt){let Mt=rt[S.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&D(C),Object.keys(rt).length===0&&m.delete(lt)}n.remove(C)}function D(C){let S=n.get(C);i.deleteTexture(S.__webglTexture);let lt=C.source,rt=m.get(lt);delete rt[S.__cacheKey],a.memory.textures--}function Q(C){let S=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(S.__webglFramebuffer[rt]))for(let Mt=0;Mt<S.__webglFramebuffer[rt].length;Mt++)i.deleteFramebuffer(S.__webglFramebuffer[rt][Mt]);else i.deleteFramebuffer(S.__webglFramebuffer[rt]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[rt])}else{if(Array.isArray(S.__webglFramebuffer))for(let rt=0;rt<S.__webglFramebuffer.length;rt++)i.deleteFramebuffer(S.__webglFramebuffer[rt]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let rt=0;rt<S.__webglColorRenderbuffer.length;rt++)S.__webglColorRenderbuffer[rt]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[rt]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let lt=C.textures;for(let rt=0,Mt=lt.length;rt<Mt;rt++){let bt=n.get(lt[rt]);bt.__webglTexture&&(i.deleteTexture(bt.__webglTexture),a.memory.textures--),n.remove(lt[rt])}n.remove(C)}let P=0;function b(){P=0}function U(){let C=P;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),P+=1,C}function w(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function N(C,S){let lt=n.get(C);if(C.isVideoTexture&&Dt(C),C.isRenderTargetTexture===!1&&C.version>0&&lt.__version!==C.version){let rt=C.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{dt(lt,C,S);return}}e.bindTexture(i.TEXTURE_2D,lt.__webglTexture,i.TEXTURE0+S)}function k(C,S){let lt=n.get(C);if(C.version>0&&lt.__version!==C.version){dt(lt,C,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,lt.__webglTexture,i.TEXTURE0+S)}function V(C,S){let lt=n.get(C);if(C.version>0&&lt.__version!==C.version){dt(lt,C,S);return}e.bindTexture(i.TEXTURE_3D,lt.__webglTexture,i.TEXTURE0+S)}function K(C,S){let lt=n.get(C);if(C.version>0&&lt.__version!==C.version){mt(lt,C,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,lt.__webglTexture,i.TEXTURE0+S)}let it={[$s]:i.REPEAT,[Nn]:i.CLAMP_TO_EDGE,[La]:i.MIRRORED_REPEAT},tt={[We]:i.NEAREST,[Zl]:i.NEAREST_MIPMAP_NEAREST,[Fs]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[Wo]:i.LINEAR_MIPMAP_NEAREST,[Di]:i.LINEAR_MIPMAP_LINEAR},ut={[ld]:i.NEVER,[pd]:i.ALWAYS,[cd]:i.LESS,[Lh]:i.LEQUAL,[hd]:i.EQUAL,[fd]:i.GEQUAL,[ud]:i.GREATER,[dd]:i.NOTEQUAL};function q(C,S,lt){if(S.type===ni&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===fn||S.magFilter===Wo||S.magFilter===Fs||S.magFilter===Di||S.minFilter===fn||S.minFilter===Wo||S.minFilter===Fs||S.minFilter===Di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),lt?(i.texParameteri(C,i.TEXTURE_WRAP_S,it[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,it[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,it[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,tt[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,tt[S.minFilter])):(i.texParameteri(C,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(C,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(S.wrapS!==Nn||S.wrapT!==Nn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(C,i.TEXTURE_MAG_FILTER,R(S.magFilter)),i.texParameteri(C,i.TEXTURE_MIN_FILTER,R(S.minFilter)),S.minFilter!==We&&S.minFilter!==fn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,ut[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===We||S.minFilter!==Fs&&S.minFilter!==Di||S.type===ni&&t.has("OES_texture_float_linear")===!1||o===!1&&S.type===Zs&&t.has("OES_texture_half_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let rt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,rt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function et(C,S){let lt=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",Z));let rt=S.source,Mt=m.get(rt);Mt===void 0&&(Mt={},m.set(rt,Mt));let bt=w(S);if(bt!==C.__cacheKey){Mt[bt]===void 0&&(Mt[bt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,lt=!0),Mt[bt].usedTimes++;let Vt=Mt[C.__cacheKey];Vt!==void 0&&(Mt[C.__cacheKey].usedTimes--,Vt.usedTimes===0&&D(S)),C.__cacheKey=bt,C.__webglTexture=Mt[bt].texture}return lt}function dt(C,S,lt){let rt=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(rt=i.TEXTURE_3D);let Mt=et(C,S),bt=S.source;e.bindTexture(rt,C.__webglTexture,i.TEXTURE0+lt);let Vt=n.get(bt);if(bt.version!==Vt.__version||Mt===!0){e.activeTexture(i.TEXTURE0+lt);let Gt=ve.getPrimaries(ve.workingColorSpace),Tt=S.colorSpace===gi?null:ve.getPrimaries(S.colorSpace),Ot=S.colorSpace===gi||Gt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);let Yt=v(S)&&f(S.image)===!1,Et=p(S.image,Yt,!1,s.maxTextureSize);Et=Ct(S,Et);let Me=f(Et)||o,Pt=r.convert(S.format,S.colorSpace),Ht=r.convert(S.type),Ft=W(S.internalFormat,Pt,Ht,S.colorSpace,S.isVideoTexture);q(rt,S,Me);let kt,z=S.mipmaps,yt=o&&S.isVideoTexture!==!0&&Ft!==Ph,Xt=Vt.__version===void 0||Mt===!0,Y=bt.dataReady,It=H(S,Et,Me);if(S.isDepthTexture)Ft=i.DEPTH_COMPONENT,o?S.type===ni?Ft=i.DEPTH_COMPONENT32F:S.type===_i?Ft=i.DEPTH_COMPONENT24:S.type===Ni?Ft=i.DEPTH24_STENCIL8:Ft=i.DEPTH_COMPONENT16:S.type===ni&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Oi&&Ft===i.DEPTH_COMPONENT&&S.type!==El&&S.type!==_i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=_i,Ht=r.convert(S.type)),S.format===xs&&Ft===i.DEPTH_COMPONENT&&(Ft=i.DEPTH_STENCIL,S.type!==Ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Ni,Ht=r.convert(S.type))),Xt&&(yt?e.texStorage2D(i.TEXTURE_2D,1,Ft,Et.width,Et.height):e.texImage2D(i.TEXTURE_2D,0,Ft,Et.width,Et.height,0,Pt,Ht,null));else if(S.isDataTexture)if(z.length>0&&Me){yt&&Xt&&e.texStorage2D(i.TEXTURE_2D,It,Ft,z[0].width,z[0].height);for(let J=0,ct=z.length;J<ct;J++)kt=z[J],yt?Y&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,kt.width,kt.height,Pt,Ht,kt.data):e.texImage2D(i.TEXTURE_2D,J,Ft,kt.width,kt.height,0,Pt,Ht,kt.data);S.generateMipmaps=!1}else yt?(Xt&&e.texStorage2D(i.TEXTURE_2D,It,Ft,Et.width,Et.height),Y&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et.width,Et.height,Pt,Ht,Et.data)):e.texImage2D(i.TEXTURE_2D,0,Ft,Et.width,Et.height,0,Pt,Ht,Et.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){yt&&Xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,Ft,z[0].width,z[0].height,Et.depth);for(let J=0,ct=z.length;J<ct;J++)kt=z[J],S.format!==On?Pt!==null?yt?Y&&e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,kt.width,kt.height,Et.depth,Pt,kt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,Ft,kt.width,kt.height,Et.depth,0,kt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):yt?Y&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,kt.width,kt.height,Et.depth,Pt,Ht,kt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,J,Ft,kt.width,kt.height,Et.depth,0,Pt,Ht,kt.data)}else{yt&&Xt&&e.texStorage2D(i.TEXTURE_2D,It,Ft,z[0].width,z[0].height);for(let J=0,ct=z.length;J<ct;J++)kt=z[J],S.format!==On?Pt!==null?yt?Y&&e.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,kt.width,kt.height,Pt,kt.data):e.compressedTexImage2D(i.TEXTURE_2D,J,Ft,kt.width,kt.height,0,kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):yt?Y&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,kt.width,kt.height,Pt,Ht,kt.data):e.texImage2D(i.TEXTURE_2D,J,Ft,kt.width,kt.height,0,Pt,Ht,kt.data)}else if(S.isDataArrayTexture)yt?(Xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,Ft,Et.width,Et.height,Et.depth),Y&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Pt,Ht,Et.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ft,Et.width,Et.height,Et.depth,0,Pt,Ht,Et.data);else if(S.isData3DTexture)yt?(Xt&&e.texStorage3D(i.TEXTURE_3D,It,Ft,Et.width,Et.height,Et.depth),Y&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Pt,Ht,Et.data)):e.texImage3D(i.TEXTURE_3D,0,Ft,Et.width,Et.height,Et.depth,0,Pt,Ht,Et.data);else if(S.isFramebufferTexture){if(Xt)if(yt)e.texStorage2D(i.TEXTURE_2D,It,Ft,Et.width,Et.height);else{let J=Et.width,ct=Et.height;for(let zt=0;zt<It;zt++)e.texImage2D(i.TEXTURE_2D,zt,Ft,J,ct,0,Pt,Ht,null),J>>=1,ct>>=1}}else if(z.length>0&&Me){if(yt&&Xt){let J=$t(z[0]);e.texStorage2D(i.TEXTURE_2D,It,Ft,J.width,J.height)}for(let J=0,ct=z.length;J<ct;J++)kt=z[J],yt?Y&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,Pt,Ht,kt):e.texImage2D(i.TEXTURE_2D,J,Ft,Pt,Ht,kt);S.generateMipmaps=!1}else if(yt){if(Xt){let J=$t(Et);e.texStorage2D(i.TEXTURE_2D,It,Ft,J.width,J.height)}Y&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Pt,Ht,Et)}else e.texImage2D(i.TEXTURE_2D,0,Ft,Pt,Ht,Et);x(S,Me)&&T(rt),Vt.__version=bt.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function mt(C,S,lt){if(S.image.length!==6)return;let rt=et(C,S),Mt=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+lt);let bt=n.get(Mt);if(Mt.version!==bt.__version||rt===!0){e.activeTexture(i.TEXTURE0+lt);let Vt=ve.getPrimaries(ve.workingColorSpace),Gt=S.colorSpace===gi?null:ve.getPrimaries(S.colorSpace),Tt=S.colorSpace===gi||Vt===Gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let Ot=S.isCompressedTexture||S.image[0].isCompressedTexture,Yt=S.image[0]&&S.image[0].isDataTexture,Et=[];for(let J=0;J<6;J++)!Ot&&!Yt?Et[J]=p(S.image[J],!1,!0,s.maxCubemapSize):Et[J]=Yt?S.image[J].image:S.image[J],Et[J]=Ct(S,Et[J]);let Me=Et[0],Pt=f(Me)||o,Ht=r.convert(S.format,S.colorSpace),Ft=r.convert(S.type),kt=W(S.internalFormat,Ht,Ft,S.colorSpace),z=o&&S.isVideoTexture!==!0,yt=bt.__version===void 0||rt===!0,Xt=Mt.dataReady,Y=H(S,Me,Pt);q(i.TEXTURE_CUBE_MAP,S,Pt);let It;if(Ot){z&&yt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Y,kt,Me.width,Me.height);for(let J=0;J<6;J++){It=Et[J].mipmaps;for(let ct=0;ct<It.length;ct++){let zt=It[ct];S.format!==On?Ht!==null?z?Xt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct,0,0,zt.width,zt.height,Ht,zt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct,kt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?Xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct,0,0,zt.width,zt.height,Ht,Ft,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct,kt,zt.width,zt.height,0,Ht,Ft,zt.data)}}}else{if(It=S.mipmaps,z&&yt){It.length>0&&Y++;let J=$t(Et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Y,kt,J.width,J.height)}for(let J=0;J<6;J++)if(Yt){z?Xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Et[J].width,Et[J].height,Ht,Ft,Et[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,kt,Et[J].width,Et[J].height,0,Ht,Ft,Et[J].data);for(let ct=0;ct<It.length;ct++){let Qt=It[ct].image[J].image;z?Xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct+1,0,0,Qt.width,Qt.height,Ht,Ft,Qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct+1,kt,Qt.width,Qt.height,0,Ht,Ft,Qt.data)}}else{z?Xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ht,Ft,Et[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,kt,Ht,Ft,Et[J]);for(let ct=0;ct<It.length;ct++){let zt=It[ct];z?Xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct+1,0,0,Ht,Ft,zt.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct+1,kt,Ht,Ft,zt.image[J])}}}x(S,Pt)&&T(i.TEXTURE_CUBE_MAP),bt.__version=Mt.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function _t(C,S,lt,rt,Mt,bt){let Vt=r.convert(lt.format,lt.colorSpace),Gt=r.convert(lt.type),Tt=W(lt.internalFormat,Vt,Gt,lt.colorSpace);if(!n.get(S).__hasExternalTextures){let Yt=Math.max(1,S.width>>bt),Et=Math.max(1,S.height>>bt);Mt===i.TEXTURE_3D||Mt===i.TEXTURE_2D_ARRAY?e.texImage3D(Mt,bt,Tt,Yt,Et,S.depth,0,Vt,Gt,null):e.texImage2D(Mt,bt,Tt,Yt,Et,0,Vt,Gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Rt(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,Mt,n.get(lt).__webglTexture,0,j(S)):(Mt===i.TEXTURE_2D||Mt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,Mt,n.get(lt).__webglTexture,bt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(C,S,lt){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer&&!S.stencilBuffer){let rt=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(lt||Rt(S)){let Mt=S.depthTexture;Mt&&Mt.isDepthTexture&&(Mt.type===ni?rt=i.DEPTH_COMPONENT32F:Mt.type===_i&&(rt=i.DEPTH_COMPONENT24));let bt=j(S);Rt(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt,rt,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,rt,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,rt,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,C)}else if(S.depthBuffer&&S.stencilBuffer){let rt=j(S);lt&&Rt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,i.DEPTH24_STENCIL8,S.width,S.height):Rt(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,C)}else{let rt=S.textures;for(let Mt=0;Mt<rt.length;Mt++){let bt=rt[Mt],Vt=r.convert(bt.format,bt.colorSpace),Gt=r.convert(bt.type),Tt=W(bt.internalFormat,Vt,Gt,bt.colorSpace),Ot=j(S);lt&&Rt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,Tt,S.width,S.height):Rt(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ot,Tt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Bt(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),N(S.depthTexture,0);let rt=n.get(S.depthTexture).__webglTexture,Mt=j(S);if(S.depthTexture.format===Oi)Rt(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0,Mt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0);else if(S.depthTexture.format===xs)Rt(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0,Mt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function At(C){let S=n.get(C),lt=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(lt)throw new Error("target.depthTexture not supported in Cube render targets");Bt(S.__webglFramebuffer,C)}else if(lt){S.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[rt]),S.__webglDepthbuffer[rt]=i.createRenderbuffer(),pt(S.__webglDepthbuffer[rt],C,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),pt(S.__webglDepthbuffer,C,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function I(C,S,lt){let rt=n.get(C);S!==void 0&&_t(rt.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),lt!==void 0&&At(C)}function xt(C){let S=C.texture,lt=n.get(C),rt=n.get(S);C.addEventListener("dispose",st);let Mt=C.textures,bt=C.isWebGLCubeRenderTarget===!0,Vt=Mt.length>1,Gt=f(C)||o;if(Vt||(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=S.version,a.memory.textures++),bt){lt.__webglFramebuffer=[];for(let Tt=0;Tt<6;Tt++)if(o&&S.mipmaps&&S.mipmaps.length>0){lt.__webglFramebuffer[Tt]=[];for(let Ot=0;Ot<S.mipmaps.length;Ot++)lt.__webglFramebuffer[Tt][Ot]=i.createFramebuffer()}else lt.__webglFramebuffer[Tt]=i.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){lt.__webglFramebuffer=[];for(let Tt=0;Tt<S.mipmaps.length;Tt++)lt.__webglFramebuffer[Tt]=i.createFramebuffer()}else lt.__webglFramebuffer=i.createFramebuffer();if(Vt)if(s.drawBuffers)for(let Tt=0,Ot=Mt.length;Tt<Ot;Tt++){let Yt=n.get(Mt[Tt]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=i.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&Rt(C)===!1){lt.__webglMultisampledFramebuffer=i.createFramebuffer(),lt.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglMultisampledFramebuffer);for(let Tt=0;Tt<Mt.length;Tt++){let Ot=Mt[Tt];lt.__webglColorRenderbuffer[Tt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,lt.__webglColorRenderbuffer[Tt]);let Yt=r.convert(Ot.format,Ot.colorSpace),Et=r.convert(Ot.type),Me=W(Ot.internalFormat,Yt,Et,Ot.colorSpace,C.isXRRenderTarget===!0),Pt=j(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,Me,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,lt.__webglColorRenderbuffer[Tt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(lt.__webglDepthRenderbuffer=i.createRenderbuffer(),pt(lt.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(bt){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),q(i.TEXTURE_CUBE_MAP,S,Gt);for(let Tt=0;Tt<6;Tt++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let Ot=0;Ot<S.mipmaps.length;Ot++)_t(lt.__webglFramebuffer[Tt][Ot],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Ot);else _t(lt.__webglFramebuffer[Tt],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0);x(S,Gt)&&T(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Vt){for(let Tt=0,Ot=Mt.length;Tt<Ot;Tt++){let Yt=Mt[Tt],Et=n.get(Yt);e.bindTexture(i.TEXTURE_2D,Et.__webglTexture),q(i.TEXTURE_2D,Yt,Gt),_t(lt.__webglFramebuffer,C,Yt,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,0),x(Yt,Gt)&&T(i.TEXTURE_2D)}e.unbindTexture()}else{let Tt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?Tt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(Tt,rt.__webglTexture),q(Tt,S,Gt),o&&S.mipmaps&&S.mipmaps.length>0)for(let Ot=0;Ot<S.mipmaps.length;Ot++)_t(lt.__webglFramebuffer[Ot],C,S,i.COLOR_ATTACHMENT0,Tt,Ot);else _t(lt.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,Tt,0);x(S,Gt)&&T(Tt),e.unbindTexture()}C.depthBuffer&&At(C)}function ft(C){let S=f(C)||o,lt=C.textures;for(let rt=0,Mt=lt.length;rt<Mt;rt++){let bt=lt[rt];if(x(bt,S)){let Vt=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Gt=n.get(bt).__webglTexture;e.bindTexture(Vt,Gt),T(Vt),e.unbindTexture()}}}function gt(C){if(o&&C.samples>0&&Rt(C)===!1){let S=C.textures,lt=C.width,rt=C.height,Mt=i.COLOR_BUFFER_BIT,bt=[],Vt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Gt=n.get(C),Tt=S.length>1;if(Tt)for(let Ot=0;Ot<S.length;Ot++)e.bindFramebuffer(i.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let Ot=0;Ot<S.length;Ot++){bt.push(i.COLOR_ATTACHMENT0+Ot),C.depthBuffer&&bt.push(Vt);let Yt=Gt.__ignoreDepthValues!==void 0?Gt.__ignoreDepthValues:!1;if(Yt===!1&&(C.depthBuffer&&(Mt|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&(Mt|=i.STENCIL_BUFFER_BIT)),Tt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Gt.__webglColorRenderbuffer[Ot]),Yt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Vt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Vt])),Tt){let Et=n.get(S[Ot]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Et,0)}i.blitFramebuffer(0,0,lt,rt,0,0,lt,rt,Mt,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,bt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Tt)for(let Ot=0;Ot<S.length;Ot++){e.bindFramebuffer(i.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.RENDERBUFFER,Gt.__webglColorRenderbuffer[Ot]);let Yt=n.get(S[Ot]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.TEXTURE_2D,Yt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer)}}function j(C){return Math.min(s.maxSamples,C.samples)}function Rt(C){let S=n.get(C);return o&&C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Dt(C){let S=a.render.frame;u.get(C)!==S&&(u.set(C,S),C.update())}function Ct(C,S){let lt=C.colorSpace,rt=C.format,Mt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Da||lt!==Si&&lt!==gi&&(ve.getTransfer(lt)===we?o===!1?t.has("EXT_sRGB")===!0&&rt===On?(C.format=Da,C.minFilter=fn,C.generateMipmaps=!1):S=Qr.sRGBToLinear(S):(rt!==On||Mt!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",lt)),S}function $t(C){return typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame!="undefined"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=U,this.resetTextureUnits=b,this.setTexture2D=N,this.setTexture2DArray=k,this.setTexture3D=V,this.setTextureCube=K,this.rebindTextures=I,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Rt}function y0(i,t,e){let n=e.isWebGL2;function s(r,a=gi){let o,l=ve.getTransfer(a);if(r===vi)return i.UNSIGNED_BYTE;if(r===Eh)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Th)return i.UNSIGNED_SHORT_5_5_5_1;if(r===ju)return i.BYTE;if(r===Ku)return i.SHORT;if(r===El)return i.UNSIGNED_SHORT;if(r===wh)return i.INT;if(r===_i)return i.UNSIGNED_INT;if(r===ni)return i.FLOAT;if(r===Zs)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Qu)return i.ALPHA;if(r===On)return i.RGBA;if(r===td)return i.LUMINANCE;if(r===ed)return i.LUMINANCE_ALPHA;if(r===Oi)return i.DEPTH_COMPONENT;if(r===xs)return i.DEPTH_STENCIL;if(r===Da)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===nd)return i.RED;if(r===Ah)return i.RED_INTEGER;if(r===id)return i.RG;if(r===Rh)return i.RG_INTEGER;if(r===Ch)return i.RGBA_INTEGER;if(r===Xo||r===qo||r===Yo||r===$o)if(l===we)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Xo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===qo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Yo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===$o)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Xo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===qo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Yo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===$o)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Jl||r===jl||r===Kl||r===Ql)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Jl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===jl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Kl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ql)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ph)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===tc||r===ec)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===tc)return l===we?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===ec)return l===we?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===nc||r===ic||r===sc||r===rc||r===oc||r===ac||r===lc||r===cc||r===hc||r===uc||r===dc||r===fc||r===pc||r===mc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===nc)return l===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ic)return l===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===sc)return l===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===rc)return l===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===oc)return l===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ac)return l===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===lc)return l===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===cc)return l===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===hc)return l===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===uc)return l===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===dc)return l===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===fc)return l===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===pc)return l===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===mc)return l===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Zo||r===gc||r===_c)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Zo)return l===we?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===gc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===_c)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===sd||r===xc||r===yc||r===vc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Zo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===xc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===yc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===vc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ni?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Ya=class extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},hn=class extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}},v0={type:"move"},Ws=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let p=e.getJointPose(y,n),f=this._getHandJoint(c,y);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(v0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new hn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},M0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,b0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,$a=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new pn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}render(t,e){if(this.texture!==null){if(this.mesh===null){let n=e.cameras[0].viewport,s=new En({extensions:{fragDepth:!0},vertexShader:M0,fragmentShader:b0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new re(new sn(20,20),s)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}},Za=class extends Vn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,g=null,y=new $a,p=e.getContextAttributes(),f=null,v=null,x=[],T=[],W=new wt,H=null,R=new He;R.layers.enable(1),R.viewport=new ue;let Z=new He;Z.layers.enable(2),Z.viewport=new ue;let st=[R,Z],M=new Ya;M.layers.enable(1),M.layers.enable(2);let D=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let et=x[q];return et===void 0&&(et=new Ws,x[q]=et),et.getTargetRaySpace()},this.getControllerGrip=function(q){let et=x[q];return et===void 0&&(et=new Ws,x[q]=et),et.getGripSpace()},this.getHand=function(q){let et=x[q];return et===void 0&&(et=new Ws,x[q]=et),et.getHandSpace()};function P(q){let et=T.indexOf(q.inputSource);if(et===-1)return;let dt=x[et];dt!==void 0&&(dt.update(q.inputSource,q.frame,c||a),dt.dispatchEvent({type:q.type,data:q.inputSource}))}function b(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",b),s.removeEventListener("inputsourceschange",U);for(let q=0;q<x.length;q++){let et=T[q];et!==null&&(T[q]=null,x[q].disconnect(et))}D=null,Q=null,y.reset(),t.setRenderTarget(f),m=null,d=null,u=null,s=null,v=null,ut.stop(),n.isPresenting=!1,t.setPixelRatio(H),t.setSize(W.width,W.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",b),s.addEventListener("inputsourceschange",U),p.xrCompatible!==!0&&await e.makeXRCompatible(),H=t.getPixelRatio(),t.getSize(W),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let et={antialias:s.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new si(m.framebufferWidth,m.framebufferHeight,{format:On,type:vi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let et=null,dt=null,mt=null;p.depth&&(mt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=p.stencil?xs:Oi,dt=p.stencil?Ni:_i);let _t={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(_t),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new si(d.textureWidth,d.textureHeight,{format:On,type:vi,depthTexture:new ao(d.textureWidth,d.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0});let pt=t.properties.get(v);pt.__ignoreDepthValues=d.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ut.setContext(s),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function U(q){for(let et=0;et<q.removed.length;et++){let dt=q.removed[et],mt=T.indexOf(dt);mt>=0&&(T[mt]=null,x[mt].disconnect(dt))}for(let et=0;et<q.added.length;et++){let dt=q.added[et],mt=T.indexOf(dt);if(mt===-1){for(let pt=0;pt<x.length;pt++)if(pt>=T.length){T.push(dt),mt=pt;break}else if(T[pt]===null){T[pt]=dt,mt=pt;break}if(mt===-1)break}let _t=x[mt];_t&&_t.connect(dt)}}let w=new L,N=new L;function k(q,et,dt){w.setFromMatrixPosition(et.matrixWorld),N.setFromMatrixPosition(dt.matrixWorld);let mt=w.distanceTo(N),_t=et.projectionMatrix.elements,pt=dt.projectionMatrix.elements,Bt=_t[14]/(_t[10]-1),At=_t[14]/(_t[10]+1),I=(_t[9]+1)/_t[5],xt=(_t[9]-1)/_t[5],ft=(_t[8]-1)/_t[0],gt=(pt[8]+1)/pt[0],j=Bt*ft,Rt=Bt*gt,Dt=mt/(-ft+gt),Ct=Dt*-ft;et.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ct),q.translateZ(Dt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();let $t=Bt+Dt,C=At+Dt,S=j-Ct,lt=Rt+(mt-Ct),rt=I*At/C*$t,Mt=xt*At/C*$t;q.projectionMatrix.makePerspective(S,lt,rt,Mt,$t,C),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function V(q,et){et===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(et.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;y.texture!==null&&(q.near=y.depthNear,q.far=y.depthFar),M.near=Z.near=R.near=q.near,M.far=Z.far=R.far=q.far,(D!==M.near||Q!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,Q=M.far,R.near=D,R.far=Q,Z.near=D,Z.far=Q,R.updateProjectionMatrix(),Z.updateProjectionMatrix(),q.updateProjectionMatrix());let et=q.parent,dt=M.cameras;V(M,et);for(let mt=0;mt<dt.length;mt++)V(dt[mt],et);dt.length===2?k(M,R,Z):M.projectionMatrix.copy(R.projectionMatrix),K(q,M,et)};function K(q,et,dt){dt===null?q.matrix.copy(et.matrixWorld):(q.matrix.copy(dt.matrixWorld),q.matrix.invert(),q.matrix.multiply(et.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ys*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return y.texture!==null};let it=null;function tt(q,et){if(h=et.getViewerPose(c||a),g=et,h!==null){let dt=h.views;m!==null&&(t.setRenderTargetFramebuffer(v,m.framebuffer),t.setRenderTarget(v));let mt=!1;dt.length!==M.cameras.length&&(M.cameras.length=0,mt=!0);for(let pt=0;pt<dt.length;pt++){let Bt=dt[pt],At=null;if(m!==null)At=m.getViewport(Bt);else{let xt=u.getViewSubImage(d,Bt);At=xt.viewport,pt===0&&(t.setRenderTargetTextures(v,xt.colorTexture,d.ignoreDepthValues?void 0:xt.depthStencilTexture),t.setRenderTarget(v))}let I=st[pt];I===void 0&&(I=new He,I.layers.enable(pt),I.viewport=new ue,st[pt]=I),I.matrix.fromArray(Bt.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(Bt.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(At.x,At.y,At.width,At.height),pt===0&&(M.matrix.copy(I.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),mt===!0&&M.cameras.push(I)}let _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")){let pt=u.getDepthInformation(dt[0]);pt&&pt.isValid&&pt.texture&&y.init(t,pt,s.renderState)}}for(let dt=0;dt<x.length;dt++){let mt=T[dt],_t=x[dt];mt!==null&&_t!==void 0&&_t.update(mt,et,c||a)}y.render(t,M),it&&it(q,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}let ut=new Oh;ut.setAnimationLoop(tt),this.setAnimationLoop=function(q){it=q},this.dispose=function(){}}},Ci=new Bn,S0=new be;function w0(i,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Nh(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,v,x,T){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,T)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),y(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,v,x):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===nn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===nn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let v=t.get(f),x=v.envMap,T=v.envMapRotation;if(x&&(p.envMap.value=x,Ci.copy(T),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),p.envMapRotation.value.setFromMatrix4(S0.makeRotationFromEuler(Ci)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;let W=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*W,e(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,v,x){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*v,p.scale.value=x*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),t.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,v){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===nn&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function y(p,f){let v=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function E0(i,t,e,n){let s={},r={},a=[],o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){let T=x.program;n.uniformBlockBinding(v,T)}function c(v,x){let T=s[v.id];T===void 0&&(g(v),T=h(v),s[v.id]=T,v.addEventListener("dispose",p));let W=x.program;n.updateUBOMapping(v,W);let H=t.render.frame;r[v.id]!==H&&(d(v),r[v.id]=H)}function h(v){let x=u();v.__bindingPointIndex=x;let T=i.createBuffer(),W=v.__size,H=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,W,H),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,T),T}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let x=s[v.id],T=v.uniforms,W=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let H=0,R=T.length;H<R;H++){let Z=Array.isArray(T[H])?T[H]:[T[H]];for(let st=0,M=Z.length;st<M;st++){let D=Z[st];if(m(D,H,st,W)===!0){let Q=D.__offset,P=Array.isArray(D.value)?D.value:[D.value],b=0;for(let U=0;U<P.length;U++){let w=P[U],N=y(w);typeof w=="number"||typeof w=="boolean"?(D.__data[0]=w,i.bufferSubData(i.UNIFORM_BUFFER,Q+b,D.__data)):w.isMatrix3?(D.__data[0]=w.elements[0],D.__data[1]=w.elements[1],D.__data[2]=w.elements[2],D.__data[3]=0,D.__data[4]=w.elements[3],D.__data[5]=w.elements[4],D.__data[6]=w.elements[5],D.__data[7]=0,D.__data[8]=w.elements[6],D.__data[9]=w.elements[7],D.__data[10]=w.elements[8],D.__data[11]=0):(w.toArray(D.__data,b),b+=N.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Q,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(v,x,T,W){let H=v.value,R=x+"_"+T;if(W[R]===void 0)return typeof H=="number"||typeof H=="boolean"?W[R]=H:W[R]=H.clone(),!0;{let Z=W[R];if(typeof H=="number"||typeof H=="boolean"){if(Z!==H)return W[R]=H,!0}else if(Z.equals(H)===!1)return Z.copy(H),!0}return!1}function g(v){let x=v.uniforms,T=0,W=16;for(let R=0,Z=x.length;R<Z;R++){let st=Array.isArray(x[R])?x[R]:[x[R]];for(let M=0,D=st.length;M<D;M++){let Q=st[M],P=Array.isArray(Q.value)?Q.value:[Q.value];for(let b=0,U=P.length;b<U;b++){let w=P[b],N=y(w),k=T%W;k!==0&&W-k<N.boundary&&(T+=W-k),Q.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=T,T+=N.storage}}}let H=T%W;return H>0&&(T+=W-H),v.__size=T,v.__cache={},this}function y(v){let x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function p(v){let x=v.target;x.removeEventListener("dispose",p);let T=a.indexOf(x.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}var Ks=class{constructor(t={}){let{canvas:e=Cd(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let m=new Uint32Array(4),g=new Int32Array(4),y=null,p=null,f=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=en,this._useLegacyLights=!1,this.toneMapping=yi,this.toneMappingExposure=1;let x=this,T=!1,W=0,H=0,R=null,Z=-1,st=null,M=new ue,D=new ue,Q=null,P=new Kt(0),b=0,U=e.width,w=e.height,N=1,k=null,V=null,K=new ue(0,0,U,w),it=new ue(0,0,U,w),tt=!1,ut=new js,q=!1,et=!1,dt=null,mt=new be,_t=new wt,pt=new L,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function At(){return R===null?N:1}let I=n;function xt(_,E){for(let B=0;B<_.length;B++){let G=_[B],X=e.getContext(G,E);if(X!==null)return X}return null}try{let _={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r162"),e.addEventListener("webglcontextlost",Xt,!1),e.addEventListener("webglcontextrestored",Y,!1),e.addEventListener("webglcontextcreationerror",It,!1),I===null){let E=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&E.shift(),I=xt(E,_),I===null)throw xt(E)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let ft,gt,j,Rt,Dt,Ct,$t,C,S,lt,rt,Mt,bt,Vt,Gt,Tt,Ot,Yt,Et,Me,Pt,Ht,Ft,kt;function z(){ft=new Hm(I),gt=new Nm(I,ft,t),ft.init(gt),Ht=new y0(I,ft,gt),j=new _0(I,ft,gt),Rt=new Wm(I),Dt=new r0,Ct=new x0(I,ft,j,Dt,gt,Ht,Rt),$t=new Fm(x),C=new km(x),S=new Zd(I,gt),Ft=new Dm(I,ft,S,gt),lt=new Vm(I,S,Rt,Ft),rt=new $m(I,lt,S,Rt),Et=new Ym(I,gt,Ct),Tt=new Om(Dt),Mt=new s0(x,$t,C,ft,gt,Ft,Tt),bt=new w0(x,Dt),Vt=new a0,Gt=new f0(ft,gt),Yt=new Im(x,$t,C,j,rt,d,l),Ot=new g0(x,rt,gt),kt=new E0(I,Rt,gt,j),Me=new Um(I,ft,Rt,gt),Pt=new Gm(I,ft,Rt,gt),Rt.programs=Mt.programs,x.capabilities=gt,x.extensions=ft,x.properties=Dt,x.renderLists=Vt,x.shadowMap=Ot,x.state=j,x.info=Rt}z();let yt=new Za(x,I);this.xr=yt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let _=ft.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=ft.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(_){_!==void 0&&(N=_,this.setSize(U,w,!1))},this.getSize=function(_){return _.set(U,w)},this.setSize=function(_,E,B=!0){if(yt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=_,w=E,e.width=Math.floor(_*N),e.height=Math.floor(E*N),B===!0&&(e.style.width=_+"px",e.style.height=E+"px"),this.setViewport(0,0,_,E)},this.getDrawingBufferSize=function(_){return _.set(U*N,w*N).floor()},this.setDrawingBufferSize=function(_,E,B){U=_,w=E,N=B,e.width=Math.floor(_*B),e.height=Math.floor(E*B),this.setViewport(0,0,_,E)},this.getCurrentViewport=function(_){return _.copy(M)},this.getViewport=function(_){return _.copy(K)},this.setViewport=function(_,E,B,G){_.isVector4?K.set(_.x,_.y,_.z,_.w):K.set(_,E,B,G),j.viewport(M.copy(K).multiplyScalar(N).round())},this.getScissor=function(_){return _.copy(it)},this.setScissor=function(_,E,B,G){_.isVector4?it.set(_.x,_.y,_.z,_.w):it.set(_,E,B,G),j.scissor(D.copy(it).multiplyScalar(N).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(_){j.setScissorTest(tt=_)},this.setOpaqueSort=function(_){k=_},this.setTransparentSort=function(_){V=_},this.getClearColor=function(_){return _.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor.apply(Yt,arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha.apply(Yt,arguments)},this.clear=function(_=!0,E=!0,B=!0){let G=0;if(_){let X=!1;if(R!==null){let nt=R.texture.format;X=nt===Ch||nt===Rh||nt===Ah}if(X){let nt=R.texture.type,at=nt===vi||nt===_i||nt===El||nt===Ni||nt===Eh||nt===Th,St=Yt.getClearColor(),vt=Yt.getClearAlpha(),Lt=St.r,Ut=St.g,Wt=St.b;at?(m[0]=Lt,m[1]=Ut,m[2]=Wt,m[3]=vt,I.clearBufferuiv(I.COLOR,0,m)):(g[0]=Lt,g[1]=Ut,g[2]=Wt,g[3]=vt,I.clearBufferiv(I.COLOR,0,g))}else G|=I.COLOR_BUFFER_BIT}E&&(G|=I.DEPTH_BUFFER_BIT),B&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Xt,!1),e.removeEventListener("webglcontextrestored",Y,!1),e.removeEventListener("webglcontextcreationerror",It,!1),Vt.dispose(),Gt.dispose(),Dt.dispose(),$t.dispose(),C.dispose(),rt.dispose(),Ft.dispose(),kt.dispose(),Mt.dispose(),yt.dispose(),yt.removeEventListener("sessionstart",ye),yt.removeEventListener("sessionend",oe),dt&&(dt.dispose(),dt=null),ae.stop()};function Xt(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Y(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let _=Rt.autoReset,E=Ot.enabled,B=Ot.autoUpdate,G=Ot.needsUpdate,X=Ot.type;z(),Rt.autoReset=_,Ot.enabled=E,Ot.autoUpdate=B,Ot.needsUpdate=G,Ot.type=X}function It(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function J(_){let E=_.target;E.removeEventListener("dispose",J),ct(E)}function ct(_){zt(_),Dt.remove(_)}function zt(_){let E=Dt.get(_).programs;E!==void 0&&(E.forEach(function(B){Mt.releaseProgram(B)}),_.isShaderMaterial&&Mt.releaseShaderCache(_))}this.renderBufferDirect=function(_,E,B,G,X,nt){E===null&&(E=Bt);let at=X.isMesh&&X.matrixWorld.determinant()<0,St=F(_,E,B,G,X);j.setMaterial(G,at);let vt=B.index,Lt=1;if(G.wireframe===!0){if(vt=lt.getWireframeAttribute(B),vt===void 0)return;Lt=2}let Ut=B.drawRange,Wt=B.attributes.position,te=Ut.start*Lt,Zt=(Ut.start+Ut.count)*Lt;nt!==null&&(te=Math.max(te,nt.start*Lt),Zt=Math.min(Zt,(nt.start+nt.count)*Lt)),vt!==null?(te=Math.max(te,0),Zt=Math.min(Zt,vt.count)):Wt!=null&&(te=Math.max(te,0),Zt=Math.min(Zt,Wt.count));let Jt=Zt-te;if(Jt<0||Jt===1/0)return;Ft.setup(X,G,St,B,vt);let he,ee=Me;if(vt!==null&&(he=S.get(vt),ee=Pt,ee.setIndex(he)),X.isMesh)G.wireframe===!0?(j.setLineWidth(G.wireframeLinewidth*At()),ee.setMode(I.LINES)):ee.setMode(I.TRIANGLES);else if(X.isLine){let qt=G.linewidth;qt===void 0&&(qt=1),j.setLineWidth(qt*At()),X.isLineSegments?ee.setMode(I.LINES):X.isLineLoop?ee.setMode(I.LINE_LOOP):ee.setMode(I.LINE_STRIP)}else X.isPoints?ee.setMode(I.POINTS):X.isSprite&&ee.setMode(I.TRIANGLES);if(X.isBatchedMesh)ee.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)ee.renderInstances(te,Jt,X.count);else if(B.isInstancedBufferGeometry){let qt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,me=Math.min(B.instanceCount,qt);ee.renderInstances(te,Jt,me)}else ee.render(te,Jt)};function Qt(_,E,B){_.transparent===!0&&_.side===Pe&&_.forceSinglePass===!1?(_.side=nn,_.needsUpdate=!0,ot(_,E,B),_.side=Mi,_.needsUpdate=!0,ot(_,E,B),_.side=Pe):ot(_,E,B)}this.compile=function(_,E,B=null){B===null&&(B=_),p=Gt.get(B),p.init(),v.push(p),B.traverseVisible(function(X){X.isLight&&X.layers.test(E.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),_!==B&&_.traverseVisible(function(X){X.isLight&&X.layers.test(E.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights(x._useLegacyLights);let G=new Set;return _.traverse(function(X){let nt=X.material;if(nt)if(Array.isArray(nt))for(let at=0;at<nt.length;at++){let St=nt[at];Qt(St,B,X),G.add(St)}else Qt(nt,B,X),G.add(nt)}),v.pop(),p=null,G},this.compileAsync=function(_,E,B=null){let G=this.compile(_,E,B);return new Promise(X=>{function nt(){if(G.forEach(function(at){Dt.get(at).currentProgram.isReady()&&G.delete(at)}),G.size===0){X(_);return}setTimeout(nt,10)}ft.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let ce=null;function de(_){ce&&ce(_)}function ye(){ae.stop()}function oe(){ae.start()}let ae=new Oh;ae.setAnimationLoop(de),typeof self!="undefined"&&ae.setContext(self),this.setAnimationLoop=function(_){ce=_,yt.setAnimationLoop(_),_===null?ae.stop():ae.start()},yt.addEventListener("sessionstart",ye),yt.addEventListener("sessionend",oe),this.render=function(_,E){if(E!==void 0&&E.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),E.parent===null&&E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),yt.enabled===!0&&yt.isPresenting===!0&&(yt.cameraAutoUpdate===!0&&yt.updateCamera(E),E=yt.getCamera()),_.isScene===!0&&_.onBeforeRender(x,_,E,R),p=Gt.get(_,v.length),p.init(),v.push(p),mt.multiplyMatrices(E.projectionMatrix,E.matrixWorldInverse),ut.setFromProjectionMatrix(mt),et=this.localClippingEnabled,q=Tt.init(this.clippingPlanes,et),y=Vt.get(_,f.length),y.init(),f.push(y),Se(_,E,0,x.sortObjects),y.finish(),x.sortObjects===!0&&y.sort(k,V),this.info.render.frame++,q===!0&&Tt.beginShadows();let B=p.state.shadowsArray;if(Ot.render(B,_,E),q===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(yt.enabled===!1||yt.isPresenting===!1||yt.hasDepthSensing()===!1)&&Yt.render(y,_),p.setupLights(x._useLegacyLights),E.isArrayCamera){let G=E.cameras;for(let X=0,nt=G.length;X<nt;X++){let at=G[X];Ke(y,_,at,at.viewport)}}else Ke(y,_,E);R!==null&&(Ct.updateMultisampleRenderTarget(R),Ct.updateRenderTargetMipmap(R)),_.isScene===!0&&_.onAfterRender(x,_,E),Ft.resetDefaultState(),Z=-1,st=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,f.pop(),f.length>0?y=f[f.length-1]:y=null};function Se(_,E,B,G){if(_.visible===!1)return;if(_.layers.test(E.layers)){if(_.isGroup)B=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(E);else if(_.isLight)p.pushLight(_),_.castShadow&&p.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||ut.intersectsSprite(_)){G&&pt.setFromMatrixPosition(_.matrixWorld).applyMatrix4(mt);let at=rt.update(_),St=_.material;St.visible&&y.push(_,at,St,B,pt.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||ut.intersectsObject(_))){let at=rt.update(_),St=_.material;if(G&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),pt.copy(_.boundingSphere.center)):(at.boundingSphere===null&&at.computeBoundingSphere(),pt.copy(at.boundingSphere.center)),pt.applyMatrix4(_.matrixWorld).applyMatrix4(mt)),Array.isArray(St)){let vt=at.groups;for(let Lt=0,Ut=vt.length;Lt<Ut;Lt++){let Wt=vt[Lt],te=St[Wt.materialIndex];te&&te.visible&&y.push(_,at,te,B,pt.z,Wt)}}else St.visible&&y.push(_,at,St,B,pt.z,null)}}let nt=_.children;for(let at=0,St=nt.length;at<St;at++)Se(nt[at],E,B,G)}function Ke(_,E,B,G){let X=_.opaque,nt=_.transmissive,at=_.transparent;p.setupLightsView(B),q===!0&&Tt.setGlobalState(x.clippingPlanes,B),nt.length>0&&dn(X,nt,E,B),G&&j.viewport(M.copy(G)),X.length>0&&Sn(X,E,B),nt.length>0&&Sn(nt,E,B),at.length>0&&Sn(at,E,B),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function dn(_,E,B,G){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;let nt=gt.isWebGL2;dt===null&&(dt=new si(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")?Zs:vi,minFilter:Di,samples:nt?4:0})),x.getDrawingBufferSize(_t),nt?dt.setSize(_t.x,_t.y):dt.setSize(jr(_t.x),jr(_t.y));let at=x.getRenderTarget();x.setRenderTarget(dt),x.getClearColor(P),b=x.getClearAlpha(),b<1&&x.setClearColor(16777215,.5),x.clear();let St=x.toneMapping;x.toneMapping=yi,Sn(_,B,G),Ct.updateMultisampleRenderTarget(dt),Ct.updateRenderTargetMipmap(dt);let vt=!1;for(let Lt=0,Ut=E.length;Lt<Ut;Lt++){let Wt=E[Lt],te=Wt.object,Zt=Wt.geometry,Jt=Wt.material,he=Wt.group;if(Jt.side===Pe&&te.layers.test(G.layers)){let ee=Jt.side;Jt.side=nn,Jt.needsUpdate=!0,ci(te,B,G,Zt,Jt,he),Jt.side=ee,Jt.needsUpdate=!0,vt=!0}}vt===!0&&(Ct.updateMultisampleRenderTarget(dt),Ct.updateRenderTargetMipmap(dt)),x.setRenderTarget(at),x.setClearColor(P,b),x.toneMapping=St}function Sn(_,E,B){let G=E.isScene===!0?E.overrideMaterial:null;for(let X=0,nt=_.length;X<nt;X++){let at=_[X],St=at.object,vt=at.geometry,Lt=G===null?at.material:G,Ut=at.group;St.layers.test(B.layers)&&ci(St,E,B,vt,Lt,Ut)}}function ci(_,E,B,G,X,nt){_.onBeforeRender(x,E,B,G,X,nt),_.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),X.onBeforeRender(x,E,B,G,_,nt),X.transparent===!0&&X.side===Pe&&X.forceSinglePass===!1?(X.side=nn,X.needsUpdate=!0,x.renderBufferDirect(B,E,G,X,_,nt),X.side=Mi,X.needsUpdate=!0,x.renderBufferDirect(B,E,G,X,_,nt),X.side=Pe):x.renderBufferDirect(B,E,G,X,_,nt),_.onAfterRender(x,E,B,G,X,nt)}function ot(_,E,B){E.isScene!==!0&&(E=Bt);let G=Dt.get(_),X=p.state.lights,nt=p.state.shadowsArray,at=X.state.version,St=Mt.getParameters(_,X.state,nt,E,B),vt=Mt.getProgramCacheKey(St),Lt=G.programs;G.environment=_.isMeshStandardMaterial?E.environment:null,G.fog=E.fog,G.envMap=(_.isMeshStandardMaterial?C:$t).get(_.envMap||G.environment),G.envMapRotation=G.environment!==null&&_.envMap===null?E.environmentRotation:_.envMapRotation,Lt===void 0&&(_.addEventListener("dispose",J),Lt=new Map,G.programs=Lt);let Ut=Lt.get(vt);if(Ut!==void 0){if(G.currentProgram===Ut&&G.lightsStateVersion===at)return A(_,St),Ut}else St.uniforms=Mt.getUniforms(_),_.onBuild(B,St,x),_.onBeforeCompile(St,x),Ut=Mt.acquireProgram(St,vt),Lt.set(vt,Ut),G.uniforms=St.uniforms;let Wt=G.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Wt.clippingPlanes=Tt.uniform),A(_,St),G.needsLights=$(_),G.lightsStateVersion=at,G.needsLights&&(Wt.ambientLightColor.value=X.state.ambient,Wt.lightProbe.value=X.state.probe,Wt.directionalLights.value=X.state.directional,Wt.directionalLightShadows.value=X.state.directionalShadow,Wt.spotLights.value=X.state.spot,Wt.spotLightShadows.value=X.state.spotShadow,Wt.rectAreaLights.value=X.state.rectArea,Wt.ltc_1.value=X.state.rectAreaLTC1,Wt.ltc_2.value=X.state.rectAreaLTC2,Wt.pointLights.value=X.state.point,Wt.pointLightShadows.value=X.state.pointShadow,Wt.hemisphereLights.value=X.state.hemi,Wt.directionalShadowMap.value=X.state.directionalShadowMap,Wt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Wt.spotShadowMap.value=X.state.spotShadowMap,Wt.spotLightMatrix.value=X.state.spotLightMatrix,Wt.spotLightMap.value=X.state.spotLightMap,Wt.pointShadowMap.value=X.state.pointShadowMap,Wt.pointShadowMatrix.value=X.state.pointShadowMatrix),G.currentProgram=Ut,G.uniformsList=null,Ut}function ht(_){if(_.uniformsList===null){let E=_.currentProgram.getUniforms();_.uniformsList=ms.seqWithValue(E.seq,_.uniforms)}return _.uniformsList}function A(_,E){let B=Dt.get(_);B.outputColorSpace=E.outputColorSpace,B.batching=E.batching,B.instancing=E.instancing,B.instancingColor=E.instancingColor,B.instancingMorph=E.instancingMorph,B.skinning=E.skinning,B.morphTargets=E.morphTargets,B.morphNormals=E.morphNormals,B.morphColors=E.morphColors,B.morphTargetsCount=E.morphTargetsCount,B.numClippingPlanes=E.numClippingPlanes,B.numIntersection=E.numClipIntersection,B.vertexAlphas=E.vertexAlphas,B.vertexTangents=E.vertexTangents,B.toneMapping=E.toneMapping}function F(_,E,B,G,X){E.isScene!==!0&&(E=Bt),Ct.resetTextureUnits();let nt=E.fog,at=G.isMeshStandardMaterial?E.environment:null,St=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Si,vt=(G.isMeshStandardMaterial?C:$t).get(G.envMap||at),Lt=G.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ut=!!B.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Wt=!!B.morphAttributes.position,te=!!B.morphAttributes.normal,Zt=!!B.morphAttributes.color,Jt=yi;G.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Jt=x.toneMapping);let he=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ee=he!==void 0?he.length:0,qt=Dt.get(G),me=p.state.lights;if(q===!0&&(et===!0||_!==st)){let _e=_===st&&G.id===Z;Tt.setState(G,_,_e)}let ne=!1;G.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==me.state.version||qt.outputColorSpace!==St||X.isBatchedMesh&&qt.batching===!1||!X.isBatchedMesh&&qt.batching===!0||X.isInstancedMesh&&qt.instancing===!1||!X.isInstancedMesh&&qt.instancing===!0||X.isSkinnedMesh&&qt.skinning===!1||!X.isSkinnedMesh&&qt.skinning===!0||X.isInstancedMesh&&qt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&qt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&qt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&qt.instancingMorph===!1&&X.morphTexture!==null||qt.envMap!==vt||G.fog===!0&&qt.fog!==nt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==Tt.numPlanes||qt.numIntersection!==Tt.numIntersection)||qt.vertexAlphas!==Lt||qt.vertexTangents!==Ut||qt.morphTargets!==Wt||qt.morphNormals!==te||qt.morphColors!==Zt||qt.toneMapping!==Jt||gt.isWebGL2===!0&&qt.morphTargetsCount!==ee)&&(ne=!0):(ne=!0,qt.__version=G.version);let Oe=qt.currentProgram;ne===!0&&(Oe=ot(G,E,X));let gn=!1,_n=!1,De=!1,fe=Oe.getUniforms(),ge=qt.uniforms;if(j.useProgram(Oe.program)&&(gn=!0,_n=!0,De=!0),G.id!==Z&&(Z=G.id,_n=!0),gn||st!==_){fe.setValue(I,"projectionMatrix",_.projectionMatrix),fe.setValue(I,"viewMatrix",_.matrixWorldInverse);let _e=fe.map.cameraPosition;_e!==void 0&&_e.setValue(I,pt.setFromMatrixPosition(_.matrixWorld)),gt.logarithmicDepthBuffer&&fe.setValue(I,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&fe.setValue(I,"isOrthographic",_.isOrthographicCamera===!0),st!==_&&(st=_,_n=!0,De=!0)}if(X.isSkinnedMesh){fe.setOptional(I,X,"bindMatrix"),fe.setOptional(I,X,"bindMatrixInverse");let _e=X.skeleton;_e&&(gt.floatVertexTextures?(_e.boneTexture===null&&_e.computeBoneTexture(),fe.setValue(I,"boneTexture",_e.boneTexture,Ct)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}X.isBatchedMesh&&(fe.setOptional(I,X,"batchingTexture"),fe.setValue(I,"batchingTexture",X._matricesTexture,Ct));let on=B.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0&&gt.isWebGL2===!0)&&Et.update(X,B,Oe),(_n||qt.receiveShadow!==X.receiveShadow)&&(qt.receiveShadow=X.receiveShadow,fe.setValue(I,"receiveShadow",X.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(ge.envMap.value=vt,ge.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),_n&&(fe.setValue(I,"toneMappingExposure",x.toneMappingExposure),qt.needsLights&&O(ge,De),nt&&G.fog===!0&&bt.refreshFogUniforms(ge,nt),bt.refreshMaterialUniforms(ge,G,N,w,dt),ms.upload(I,ht(qt),ge,Ct)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ms.upload(I,ht(qt),ge,Ct),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&fe.setValue(I,"center",X.center),fe.setValue(I,"modelViewMatrix",X.modelViewMatrix),fe.setValue(I,"normalMatrix",X.normalMatrix),fe.setValue(I,"modelMatrix",X.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let _e=G.uniformsGroups;for(let Pn=0,jt=_e.length;Pn<jt;Pn++)if(gt.isWebGL2){let Re=_e[Pn];kt.update(Re,Oe),kt.bind(Re,Oe)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Oe}function O(_,E){_.ambientLightColor.needsUpdate=E,_.lightProbe.needsUpdate=E,_.directionalLights.needsUpdate=E,_.directionalLightShadows.needsUpdate=E,_.pointLights.needsUpdate=E,_.pointLightShadows.needsUpdate=E,_.spotLights.needsUpdate=E,_.spotLightShadows.needsUpdate=E,_.rectAreaLights.needsUpdate=E,_.hemisphereLights.needsUpdate=E}function $(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(_,E,B){Dt.get(_.texture).__webglTexture=E,Dt.get(_.depthTexture).__webglTexture=B;let G=Dt.get(_);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=B===void 0,G.__autoAllocateDepthBuffer||ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(_,E){let B=Dt.get(_);B.__webglFramebuffer=E,B.__useDefaultFramebuffer=E===void 0},this.setRenderTarget=function(_,E=0,B=0){R=_,W=E,H=B;let G=!0,X=null,nt=!1,at=!1;if(_){let vt=Dt.get(_);vt.__useDefaultFramebuffer!==void 0?(j.bindFramebuffer(I.FRAMEBUFFER,null),G=!1):vt.__webglFramebuffer===void 0?Ct.setupRenderTarget(_):vt.__hasExternalTextures&&Ct.rebindTextures(_,Dt.get(_.texture).__webglTexture,Dt.get(_.depthTexture).__webglTexture);let Lt=_.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(at=!0);let Ut=Dt.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Ut[E])?X=Ut[E][B]:X=Ut[E],nt=!0):gt.isWebGL2&&_.samples>0&&Ct.useMultisampledRTT(_)===!1?X=Dt.get(_).__webglMultisampledFramebuffer:Array.isArray(Ut)?X=Ut[B]:X=Ut,M.copy(_.viewport),D.copy(_.scissor),Q=_.scissorTest}else M.copy(K).multiplyScalar(N).floor(),D.copy(it).multiplyScalar(N).floor(),Q=tt;if(j.bindFramebuffer(I.FRAMEBUFFER,X)&&gt.drawBuffers&&G&&j.drawBuffers(_,X),j.viewport(M),j.scissor(D),j.setScissorTest(Q),nt){let vt=Dt.get(_.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+E,vt.__webglTexture,B)}else if(at){let vt=Dt.get(_.texture),Lt=E||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,vt.__webglTexture,B||0,Lt)}Z=-1},this.readRenderTargetPixels=function(_,E,B,G,X,nt,at){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Dt.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&at!==void 0&&(St=St[at]),St){j.bindFramebuffer(I.FRAMEBUFFER,St);try{let vt=_.texture,Lt=vt.format,Ut=vt.type;if(Lt!==On&&Ht.convert(Lt)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Wt=Ut===Zs&&(ft.has("EXT_color_buffer_half_float")||gt.isWebGL2&&ft.has("EXT_color_buffer_float"));if(Ut!==vi&&Ht.convert(Ut)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ut===ni&&(gt.isWebGL2||ft.has("OES_texture_float")||ft.has("WEBGL_color_buffer_float")))&&!Wt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}E>=0&&E<=_.width-G&&B>=0&&B<=_.height-X&&I.readPixels(E,B,G,X,Ht.convert(Lt),Ht.convert(Ut),nt)}finally{let vt=R!==null?Dt.get(R).__webglFramebuffer:null;j.bindFramebuffer(I.FRAMEBUFFER,vt)}}},this.copyFramebufferToTexture=function(_,E,B=0){let G=Math.pow(2,-B),X=Math.floor(E.image.width*G),nt=Math.floor(E.image.height*G);Ct.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,B,0,0,_.x,_.y,X,nt),j.unbindTexture()},this.copyTextureToTexture=function(_,E,B,G=0){let X=E.image.width,nt=E.image.height,at=Ht.convert(B.format),St=Ht.convert(B.type);Ct.setTexture2D(B,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment),E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,G,_.x,_.y,X,nt,at,St,E.image.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,G,_.x,_.y,E.mipmaps[0].width,E.mipmaps[0].height,at,E.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,G,_.x,_.y,at,St,E.image),G===0&&B.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),j.unbindTexture()},this.copyTextureToTexture3D=function(_,E,B,G,X=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let nt=Math.round(_.max.x-_.min.x),at=Math.round(_.max.y-_.min.y),St=_.max.z-_.min.z+1,vt=Ht.convert(G.format),Lt=Ht.convert(G.type),Ut;if(G.isData3DTexture)Ct.setTexture3D(G,0),Ut=I.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)Ct.setTexture2DArray(G,0),Ut=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,G.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,G.unpackAlignment);let Wt=I.getParameter(I.UNPACK_ROW_LENGTH),te=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Zt=I.getParameter(I.UNPACK_SKIP_PIXELS),Jt=I.getParameter(I.UNPACK_SKIP_ROWS),he=I.getParameter(I.UNPACK_SKIP_IMAGES),ee=B.isCompressedTexture?B.mipmaps[X]:B.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,ee.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ee.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,_.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,_.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,_.min.z),B.isDataTexture||B.isData3DTexture?I.texSubImage3D(Ut,X,E.x,E.y,E.z,nt,at,St,vt,Lt,ee.data):G.isCompressedArrayTexture?I.compressedTexSubImage3D(Ut,X,E.x,E.y,E.z,nt,at,St,vt,ee.data):I.texSubImage3D(Ut,X,E.x,E.y,E.z,nt,at,St,vt,Lt,ee),I.pixelStorei(I.UNPACK_ROW_LENGTH,Wt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,te),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Zt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Jt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,he),X===0&&G.generateMipmaps&&I.generateMipmap(Ut),j.unbindTexture()},this.initTexture=function(_){_.isCubeTexture?Ct.setTextureCube(_,0):_.isData3DTexture?Ct.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?Ct.setTexture2DArray(_,0):Ct.setTexture2D(_,0),j.unbindTexture()},this.resetState=function(){W=0,H=0,R=null,j.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Al?"display-p3":"srgb",e.unpackColorSpace=ve.workingColorSpace===To?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Ja=class extends Ks{};Ja.prototype.isWebGL1Renderer=!0;var lo=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Kt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ws=class extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentRotation=this.environmentRotation.toArray(),e}},ja=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ia,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Hn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Dh("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},an=new L,Gn=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyMatrix4(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyNormalMatrix(t),this.setXYZ(e,an.x,an.y,an.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.transformDirection(t),this.setXYZ(e,an.x,an.y,an.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Fn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Fn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Fn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Fn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array),r=xe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Mn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var co=class extends pn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=We,h=We,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Es=class extends pn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Tn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,m=(a-h)/d;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new wt:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new L,s=[],r=[],a=[],o=new L,l=new be;for(let m=0;m<=t;m++){let g=m/t;s[m]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ie(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(o,g))}a[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(Ie(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],m*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Qs=class extends Tn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new wt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,m=c-this.aY;l=d*h-m*u+this.aX,c=d*u+m*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ka=class extends Qs{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Pl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,m=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,m*=h,s(a,o,d,m)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Or=new L,Ma=new Pl,ba=new Pl,Sa=new Pl,Qa=class extends Tn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Or.subVectors(s[0],s[1]).add(s[0]),c=Or);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Or.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Or),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),m),y=Math.pow(u.distanceToSquared(d),m),p=Math.pow(d.distanceToSquared(h),m);y<1e-4&&(y=1),g<1e-4&&(g=y),p<1e-4&&(p=y),Ma.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,y,p),ba.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,y,p),Sa.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,y,p)}else this.curveType==="catmullrom"&&(Ma.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),ba.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Sa.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ma.calc(l),ba.calc(l),Sa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function dh(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function T0(i,t){let e=1-i;return e*e*t}function A0(i,t){return 2*(1-i)*i*t}function R0(i,t){return i*i*t}function Xs(i,t,e,n){return T0(i,t)+A0(i,e)+R0(i,n)}function C0(i,t){let e=1-i;return e*e*e*t}function P0(i,t){let e=1-i;return 3*e*e*i*t}function L0(i,t){return 3*(1-i)*i*i*t}function I0(i,t){return i*i*i*t}function qs(i,t,e,n,s){return C0(i,t)+P0(i,e)+L0(i,n)+I0(i,s)}var ho=class extends Tn{constructor(t=new wt,e=new wt,n=new wt,s=new wt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new wt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(qs(t,s.x,r.x,a.x,o.x),qs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},tl=class extends Tn{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(qs(t,s.x,r.x,a.x,o.x),qs(t,s.y,r.y,a.y,o.y),qs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},uo=class extends Tn{constructor(t=new wt,e=new wt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new wt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new wt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},el=class extends Tn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fo=class extends Tn{constructor(t=new wt,e=new wt,n=new wt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new wt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Xs(t,s.x,r.x,a.x),Xs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},nl=class extends Tn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Xs(t,s.x,r.x,a.x),Xs(t,s.y,r.y,a.y),Xs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},po=class extends Tn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new wt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(dh(o,l.x,c.x,h.x,u.x),dh(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new wt().fromArray(s))}return this}},il=Object.freeze({__proto__:null,ArcCurve:Ka,CatmullRomCurve3:Qa,CubicBezierCurve:ho,CubicBezierCurve3:tl,EllipseCurve:Qs,LineCurve:uo,LineCurve3:el,QuadraticBezierCurve:fo,QuadraticBezierCurve3:nl,SplineCurve:po}),sl=class extends Tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new il[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new il[s.type]().fromJSON(s))}return this}},Ts=class extends sl{constructor(t){super(),this.type="Path",this.currentPoint=new wt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new uo(this.currentPoint.clone(),new wt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new fo(this.currentPoint.clone(),new wt(t,e),new wt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new ho(this.currentPoint.clone(),new wt(t,e),new wt(n,s),new wt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new po(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Qs(t,e,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var mo=class i extends qe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new L,h=new wt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let m=n+u/e*s;c.x=t*Math.cos(m),c.y=t*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new pe(a,3)),this.setAttribute("normal",new pe(o,3)),this.setAttribute("uv",new pe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ye=class i extends qe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],m=[],g=0,y=[],p=n/2,f=0;v(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new pe(u,3)),this.setAttribute("normal",new pe(d,3)),this.setAttribute("uv",new pe(m,2));function v(){let T=new L,W=new L,H=0,R=(e-t)/n;for(let Z=0;Z<=r;Z++){let st=[],M=Z/r,D=M*(e-t)+t;for(let Q=0;Q<=s;Q++){let P=Q/s,b=P*l+o,U=Math.sin(b),w=Math.cos(b);W.x=D*U,W.y=-M*n+p,W.z=D*w,u.push(W.x,W.y,W.z),T.set(U,R,w).normalize(),d.push(T.x,T.y,T.z),m.push(P,1-M),st.push(g++)}y.push(st)}for(let Z=0;Z<s;Z++)for(let st=0;st<r;st++){let M=y[st][Z],D=y[st+1][Z],Q=y[st+1][Z+1],P=y[st][Z+1];h.push(M,D,P),h.push(D,Q,P),H+=6}c.addGroup(f,H,0),f+=H}function x(T){let W=g,H=new wt,R=new L,Z=0,st=T===!0?t:e,M=T===!0?1:-1;for(let Q=1;Q<=s;Q++)u.push(0,p*M,0),d.push(0,M,0),m.push(.5,.5),g++;let D=g;for(let Q=0;Q<=s;Q++){let b=Q/s*l+o,U=Math.cos(b),w=Math.sin(b);R.x=st*w,R.y=p*M,R.z=st*U,u.push(R.x,R.y,R.z),d.push(0,M,0),H.x=U*.5+.5,H.y=w*.5*M+.5,m.push(H.x,H.y),g++}for(let Q=0;Q<s;Q++){let P=W+Q,b=D+Q;T===!0?h.push(b,b+1,P):h.push(b+1,b,P),Z+=3}c.addGroup(f,Z,T===!0?1:2),f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},go=class i extends Ye{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},rl=class i extends qe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new pe(r,3)),this.setAttribute("normal",new pe(r.slice(),3)),this.setAttribute("uv",new pe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let x=new L,T=new L,W=new L;for(let H=0;H<e.length;H+=3)m(e[H+0],x),m(e[H+1],T),m(e[H+2],W),l(x,T,W,v)}function l(v,x,T,W){let H=W+1,R=[];for(let Z=0;Z<=H;Z++){R[Z]=[];let st=v.clone().lerp(T,Z/H),M=x.clone().lerp(T,Z/H),D=H-Z;for(let Q=0;Q<=D;Q++)Q===0&&Z===H?R[Z][Q]=st:R[Z][Q]=st.clone().lerp(M,Q/D)}for(let Z=0;Z<H;Z++)for(let st=0;st<2*(H-Z)-1;st++){let M=Math.floor(st/2);st%2===0?(d(R[Z][M+1]),d(R[Z+1][M]),d(R[Z][M])):(d(R[Z][M+1]),d(R[Z+1][M+1]),d(R[Z+1][M]))}}function c(v){let x=new L;for(let T=0;T<r.length;T+=3)x.x=r[T+0],x.y=r[T+1],x.z=r[T+2],x.normalize().multiplyScalar(v),r[T+0]=x.x,r[T+1]=x.y,r[T+2]=x.z}function h(){let v=new L;for(let x=0;x<r.length;x+=3){v.x=r[x+0],v.y=r[x+1],v.z=r[x+2];let T=p(v)/2/Math.PI+.5,W=f(v)/Math.PI+.5;a.push(T,1-W)}g(),u()}function u(){for(let v=0;v<a.length;v+=6){let x=a[v+0],T=a[v+2],W=a[v+4],H=Math.max(x,T,W),R=Math.min(x,T,W);H>.9&&R<.1&&(x<.2&&(a[v+0]+=1),T<.2&&(a[v+2]+=1),W<.2&&(a[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function m(v,x){let T=v*3;x.x=t[T+0],x.y=t[T+1],x.z=t[T+2]}function g(){let v=new L,x=new L,T=new L,W=new L,H=new wt,R=new wt,Z=new wt;for(let st=0,M=0;st<r.length;st+=9,M+=6){v.set(r[st+0],r[st+1],r[st+2]),x.set(r[st+3],r[st+4],r[st+5]),T.set(r[st+6],r[st+7],r[st+8]),H.set(a[M+0],a[M+1]),R.set(a[M+2],a[M+3]),Z.set(a[M+4],a[M+5]),W.copy(v).add(x).add(T).divideScalar(3);let D=p(W);y(H,M+0,v,D),y(R,M+2,x,D),y(Z,M+4,T,D)}}function y(v,x,T,W){W<0&&v.x===1&&(a[x]=v.x-1),T.x===0&&T.z===0&&(a[x]=W/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Fr=new L,zr=new L,wa=new L,Br=new Ui,_o=class extends qe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(fs*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},m=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:y,b:p,c:f}=Br;if(y.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),f.fromBufferAttribute(o,c[2]),Br.getNormal(wa),u[0]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,u[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,u[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let v=0;v<3;v++){let x=(v+1)%3,T=u[v],W=u[x],H=Br[h[v]],R=Br[h[x]],Z=`${T}_${W}`,st=`${W}_${T}`;st in d&&d[st]?(wa.dot(d[st].normal)<=r&&(m.push(H.x,H.y,H.z),m.push(R.x,R.y,R.z)),d[st]=null):Z in d||(d[Z]={index0:c[v],index1:c[x],normal:wa.clone()})}}for(let g in d)if(d[g]){let{index0:y,index1:p}=d[g];Fr.fromBufferAttribute(o,y),zr.fromBufferAttribute(o,p),m.push(Fr.x,Fr.y,Fr.z),m.push(zr.x,zr.y,zr.z)}this.setAttribute("position",new pe(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},Fi=class extends Ts{constructor(t){super(t),this.uuid=Hn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Ts().fromJSON(s))}return this}},D0={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Vh(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,m;if(n&&(r=z0(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);m=Math.max(c-o,h-l),m=m!==0?32767/m:0}return tr(r,a,e,o,l,m,0),a}};function Vh(i,t,e,n,s){let r,a;if(s===Z0(i,t,e,n)>0)for(r=t;r<e;r+=n)a=fh(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=fh(r,i[r],i[r+1],a);return a&&Co(a,a.next)&&(nr(a),a=a.next),a}function zi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Co(e,e.next)||Ce(e.prev,e,e.next)===0)){if(nr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function tr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&G0(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?N0(i,n,s,r):U0(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),nr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=O0(zi(i),t,e),tr(i,t,e,n,s,r,2)):a===2&&F0(i,t,e,n,s,r):tr(zi(i),t,e,n,s,r,1);break}}}function U0(i){let t=i.prev,e=i,n=i.next;if(Ce(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,m=o>l?o>c?o:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=m&&us(s,o,r,l,a,c,g.x,g.y)&&Ce(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function N0(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Ce(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,m=o<l?o<c?o:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,y=o>l?o>c?o:c:l>c?l:c,p=h>u?h>d?h:d:u>d?u:d,f=ol(m,g,t,e,n),v=ol(y,p,t,e,n),x=i.prevZ,T=i.nextZ;for(;x&&x.z>=f&&T&&T.z<=v;){if(x.x>=m&&x.x<=y&&x.y>=g&&x.y<=p&&x!==s&&x!==a&&us(o,h,l,u,c,d,x.x,x.y)&&Ce(x.prev,x,x.next)>=0||(x=x.prevZ,T.x>=m&&T.x<=y&&T.y>=g&&T.y<=p&&T!==s&&T!==a&&us(o,h,l,u,c,d,T.x,T.y)&&Ce(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;x&&x.z>=f;){if(x.x>=m&&x.x<=y&&x.y>=g&&x.y<=p&&x!==s&&x!==a&&us(o,h,l,u,c,d,x.x,x.y)&&Ce(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;T&&T.z<=v;){if(T.x>=m&&T.x<=y&&T.y>=g&&T.y<=p&&T!==s&&T!==a&&us(o,h,l,u,c,d,T.x,T.y)&&Ce(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function O0(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Co(s,r)&&Gh(s,n,n.next,r)&&er(s,r)&&er(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),nr(n),nr(n.next),n=i=r),n=n.next}while(n!==i);return zi(n)}function F0(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&q0(a,o)){let l=Wh(a,o);a=zi(a,a.next),l=zi(l,l.next),tr(a,t,e,n,s,r,0),tr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function z0(i,t,e,n){let s=[],r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Vh(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(X0(c));for(s.sort(B0),r=0;r<s.length;r++)e=k0(s[r],e);return e}function B0(i,t){return i.x-t.x}function k0(i,t){let e=H0(i,t);if(!e)return t;let n=Wh(e,i);return zi(n,n.next),zi(e,e.next)}function H0(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&us(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),er(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&V0(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function V0(i,t){return Ce(i.prev,i,t.prev)<0&&Ce(t.next,i,i.next)<0}function G0(i,t,e,n){let s=i;do s.z===0&&(s.z=ol(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,W0(s)}function W0(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function ol(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function X0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function us(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function q0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Y0(i,t)&&(er(i,t)&&er(t,i)&&$0(i,t)&&(Ce(i.prev,i,t.prev)||Ce(i,t.prev,t))||Co(i,t)&&Ce(i.prev,i,i.next)>0&&Ce(t.prev,t,t.next)>0)}function Ce(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Co(i,t){return i.x===t.x&&i.y===t.y}function Gh(i,t,e,n){let s=Hr(Ce(i,t,e)),r=Hr(Ce(i,t,n)),a=Hr(Ce(e,n,i)),o=Hr(Ce(e,n,t));return!!(s!==r&&a!==o||s===0&&kr(i,e,t)||r===0&&kr(i,n,t)||a===0&&kr(e,i,n)||o===0&&kr(e,t,n))}function kr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Hr(i){return i>0?1:i<0?-1:0}function Y0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Gh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function er(i,t){return Ce(i.prev,i,i.next)<0?Ce(i,t,i.next)>=0&&Ce(i,i.prev,t)>=0:Ce(i,t,i.prev)<0||Ce(i,i.next,t)<0}function $0(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Wh(i,t){let e=new al(i.i,i.x,i.y),n=new al(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function fh(i,t,e,n){let s=new al(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function nr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function al(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Z0(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Ys=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];ph(t),mh(n,t);let a=t.length;e.forEach(ph);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,mh(n,e[l]);let o=D0.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function ph(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function mh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Bi=class i extends qe{constructor(t=new Fi([new wt(.5,.5),new wt(-.5,.5),new wt(-.5,-.5),new wt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new pe(s,3)),this.setAttribute("uv",new pe(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:J0,x,T=!1,W,H,R,Z;f&&(x=f.getSpacedPoints(h),T=!0,d=!1,W=f.computeFrenetFrames(h,!1),H=new L,R=new L,Z=new L),d||(p=0,m=0,g=0,y=0);let st=o.extractPoints(c),M=st.shape,D=st.holes;if(!Ys.isClockWise(M)){M=M.reverse();for(let I=0,xt=D.length;I<xt;I++){let ft=D[I];Ys.isClockWise(ft)&&(D[I]=ft.reverse())}}let P=Ys.triangulateShape(M,D),b=M;for(let I=0,xt=D.length;I<xt;I++){let ft=D[I];M=M.concat(ft)}function U(I,xt,ft){return xt||console.error("THREE.ExtrudeGeometry: vec does not exist"),I.clone().addScaledVector(xt,ft)}let w=M.length,N=P.length;function k(I,xt,ft){let gt,j,Rt,Dt=I.x-xt.x,Ct=I.y-xt.y,$t=ft.x-I.x,C=ft.y-I.y,S=Dt*Dt+Ct*Ct,lt=Dt*C-Ct*$t;if(Math.abs(lt)>Number.EPSILON){let rt=Math.sqrt(S),Mt=Math.sqrt($t*$t+C*C),bt=xt.x-Ct/rt,Vt=xt.y+Dt/rt,Gt=ft.x-C/Mt,Tt=ft.y+$t/Mt,Ot=((Gt-bt)*C-(Tt-Vt)*$t)/(Dt*C-Ct*$t);gt=bt+Dt*Ot-I.x,j=Vt+Ct*Ot-I.y;let Yt=gt*gt+j*j;if(Yt<=2)return new wt(gt,j);Rt=Math.sqrt(Yt/2)}else{let rt=!1;Dt>Number.EPSILON?$t>Number.EPSILON&&(rt=!0):Dt<-Number.EPSILON?$t<-Number.EPSILON&&(rt=!0):Math.sign(Ct)===Math.sign(C)&&(rt=!0),rt?(gt=-Ct,j=Dt,Rt=Math.sqrt(S)):(gt=Dt,j=Ct,Rt=Math.sqrt(S/2))}return new wt(gt/Rt,j/Rt)}let V=[];for(let I=0,xt=b.length,ft=xt-1,gt=I+1;I<xt;I++,ft++,gt++)ft===xt&&(ft=0),gt===xt&&(gt=0),V[I]=k(b[I],b[ft],b[gt]);let K=[],it,tt=V.concat();for(let I=0,xt=D.length;I<xt;I++){let ft=D[I];it=[];for(let gt=0,j=ft.length,Rt=j-1,Dt=gt+1;gt<j;gt++,Rt++,Dt++)Rt===j&&(Rt=0),Dt===j&&(Dt=0),it[gt]=k(ft[gt],ft[Rt],ft[Dt]);K.push(it),tt=tt.concat(it)}for(let I=0;I<p;I++){let xt=I/p,ft=m*Math.cos(xt*Math.PI/2),gt=g*Math.sin(xt*Math.PI/2)+y;for(let j=0,Rt=b.length;j<Rt;j++){let Dt=U(b[j],V[j],gt);mt(Dt.x,Dt.y,-ft)}for(let j=0,Rt=D.length;j<Rt;j++){let Dt=D[j];it=K[j];for(let Ct=0,$t=Dt.length;Ct<$t;Ct++){let C=U(Dt[Ct],it[Ct],gt);mt(C.x,C.y,-ft)}}}let ut=g+y;for(let I=0;I<w;I++){let xt=d?U(M[I],tt[I],ut):M[I];T?(R.copy(W.normals[0]).multiplyScalar(xt.x),H.copy(W.binormals[0]).multiplyScalar(xt.y),Z.copy(x[0]).add(R).add(H),mt(Z.x,Z.y,Z.z)):mt(xt.x,xt.y,0)}for(let I=1;I<=h;I++)for(let xt=0;xt<w;xt++){let ft=d?U(M[xt],tt[xt],ut):M[xt];T?(R.copy(W.normals[I]).multiplyScalar(ft.x),H.copy(W.binormals[I]).multiplyScalar(ft.y),Z.copy(x[I]).add(R).add(H),mt(Z.x,Z.y,Z.z)):mt(ft.x,ft.y,u/h*I)}for(let I=p-1;I>=0;I--){let xt=I/p,ft=m*Math.cos(xt*Math.PI/2),gt=g*Math.sin(xt*Math.PI/2)+y;for(let j=0,Rt=b.length;j<Rt;j++){let Dt=U(b[j],V[j],gt);mt(Dt.x,Dt.y,u+ft)}for(let j=0,Rt=D.length;j<Rt;j++){let Dt=D[j];it=K[j];for(let Ct=0,$t=Dt.length;Ct<$t;Ct++){let C=U(Dt[Ct],it[Ct],gt);T?mt(C.x,C.y+x[h-1].y,x[h-1].x+ft):mt(C.x,C.y,u+ft)}}}q(),et();function q(){let I=s.length/3;if(d){let xt=0,ft=w*xt;for(let gt=0;gt<N;gt++){let j=P[gt];_t(j[2]+ft,j[1]+ft,j[0]+ft)}xt=h+p*2,ft=w*xt;for(let gt=0;gt<N;gt++){let j=P[gt];_t(j[0]+ft,j[1]+ft,j[2]+ft)}}else{for(let xt=0;xt<N;xt++){let ft=P[xt];_t(ft[2],ft[1],ft[0])}for(let xt=0;xt<N;xt++){let ft=P[xt];_t(ft[0]+w*h,ft[1]+w*h,ft[2]+w*h)}}n.addGroup(I,s.length/3-I,0)}function et(){let I=s.length/3,xt=0;dt(b,xt),xt+=b.length;for(let ft=0,gt=D.length;ft<gt;ft++){let j=D[ft];dt(j,xt),xt+=j.length}n.addGroup(I,s.length/3-I,1)}function dt(I,xt){let ft=I.length;for(;--ft>=0;){let gt=ft,j=ft-1;j<0&&(j=I.length-1);for(let Rt=0,Dt=h+p*2;Rt<Dt;Rt++){let Ct=w*Rt,$t=w*(Rt+1),C=xt+gt+Ct,S=xt+j+Ct,lt=xt+j+$t,rt=xt+gt+$t;pt(C,S,lt,rt)}}}function mt(I,xt,ft){l.push(I),l.push(xt),l.push(ft)}function _t(I,xt,ft){Bt(I),Bt(xt),Bt(ft);let gt=s.length/3,j=v.generateTopUV(n,s,gt-3,gt-2,gt-1);At(j[0]),At(j[1]),At(j[2])}function pt(I,xt,ft,gt){Bt(I),Bt(xt),Bt(gt),Bt(xt),Bt(ft),Bt(gt);let j=s.length/3,Rt=v.generateSideWallUV(n,s,j-6,j-3,j-2,j-1);At(Rt[0]),At(Rt[1]),At(Rt[3]),At(Rt[1]),At(Rt[2]),At(Rt[3])}function Bt(I){s.push(l[I*3+0]),s.push(l[I*3+1]),s.push(l[I*3+2])}function At(I){r.push(I.x),r.push(I.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return j0(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new il[s.type]().fromJSON(s)),new i(n,t.options)}},J0={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new wt(r,a),new wt(o,l),new wt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],m=t[s*3+1],g=t[s*3+2],y=t[r*3],p=t[r*3+1],f=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new wt(a,1-l),new wt(c,1-u),new wt(d,1-g),new wt(y,1-f)]:[new wt(o,1-l),new wt(h,1-u),new wt(m,1-g),new wt(p,1-f)]}};function j0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ki=class i extends rl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var xo=class i extends qe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new L,d=new L,m=[],g=[],y=[],p=[];for(let f=0;f<=n;f++){let v=[],x=f/n,T=0;f===0&&a===0?T=.5/e:f===n&&l===Math.PI&&(T=-.5/e);for(let W=0;W<=e;W++){let H=W/e;u.x=-t*Math.cos(s+H*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(s+H*r)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),p.push(H+T,1-x),v.push(c++)}h.push(v)}for(let f=0;f<n;f++)for(let v=0;v<e;v++){let x=h[f][v+1],T=h[f][v],W=h[f+1][v],H=h[f+1][v+1];(f!==0||a>0)&&m.push(x,T,H),(f!==n-1||l<Math.PI)&&m.push(T,W,H)}this.setIndex(m),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(y,3)),this.setAttribute("uv",new pe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var yo=class extends qe{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new L,r=new L;if(t.index!==null){let a=t.attributes.position,o=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start,m=u.count;for(let g=d,y=d+m;g<y;g+=3)for(let p=0;p<3;p++){let f=o.getX(g+p),v=o.getX(g+(p+1)%3);s.fromBufferAttribute(a,f),r.fromBufferAttribute(a,v),gh(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),gh(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new pe(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function gh(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}var $e=class extends bi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tl,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ir=class extends $e{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new wt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ie(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Kt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Kt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Kt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var vo=class extends bi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tl,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=Sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Vr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function K0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var As=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ll=class extends As{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mc,endingEnd:Mc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case bc:r=t,o=2*e-n;break;case Sc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case bc:a=t,l=2*n-e;break;case Sc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-e)/(s-e),y=g*g,p=y*g,f=-d*p+2*d*y-d*g,v=(1+d)*p+(-1.5-2*d)*y+(-.5+d)*g+1,x=(-1-m)*p+(1.5+m)*y+.5*g,T=m*p-m*y;for(let W=0;W!==o;++W)r[W]=f*a[h+W]+v*a[c+W]+x*a[l+W]+T*a[u+W];return r}},cl=class extends As{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},hl=class extends As{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},kn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Vr(e,this.TimeBufferType),this.values=Vr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Vr(t.times,Array),values:Vr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new hl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new cl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ll(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Xr:e=this.InterpolantFactoryMethodDiscrete;break;case qr:e=this.InterpolantFactoryMethodLinear;break;case Jo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xr;case this.InterpolantFactoryMethodLinear:return qr;case this.InterpolantFactoryMethodSmooth:return Jo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&K0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Jo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,d=u-n,m=u+n;for(let g=0;g!==n;++g){let y=e[u+g];if(y!==e[d+g]||y!==e[m+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let m=0;m!==n;++m)e[d+m]=e[u+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=qr;var Hi=class extends kn{};Hi.prototype.ValueTypeName="bool";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=Xr;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var ul=class extends kn{};ul.prototype.ValueTypeName="color";var dl=class extends kn{};dl.prototype.ValueTypeName="number";var fl=class extends As{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)zn.slerpFlat(r,0,a,c-o,a,c,l);return r}},sr=class extends kn{InterpolantFactoryMethodLinear(t){return new fl(this.times,this.values,this.getValueSize(),t)}};sr.prototype.ValueTypeName="quaternion";sr.prototype.DefaultInterpolation=qr;sr.prototype.InterpolantFactoryMethodSmooth=void 0;var Vi=class extends kn{};Vi.prototype.ValueTypeName="string";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=Xr;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var pl=class extends kn{};pl.prototype.ValueTypeName="vector";var ml=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let m=c[u],g=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},Q0=new ml,gl=class{constructor(t){this.manager=t!==void 0?t:Q0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};gl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Rs=class extends Xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Mo=class extends Rs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ea=new be,_h=new L,xh=new L,rr=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new js,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;_h.setFromMatrixPosition(t.matrixWorld),e.position.copy(_h),xh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xh),e.updateMatrixWorld(),Ea.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ea),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ea)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},_l=class extends rr{constructor(){super(new He(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=ys*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},or=class extends Rs{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new _l}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},yh=new be,Vs=new L,Ta=new L,xl=class extends rr{constructor(){super(new He(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new wt(4,2),this._viewportCount=6,this._viewports=[new ue(2,1,1,1),new ue(0,1,1,1),new ue(3,1,1,1),new ue(1,1,1,1),new ue(3,0,1,1),new ue(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Vs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Vs),Ta.copy(n.position),Ta.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ta),n.updateMatrixWorld(),s.makeTranslation(-Vs.x,-Vs.y,-Vs.z),yh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yh)}},Gi=class extends Rs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new xl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},yl=class extends rr{constructor(){super(new oo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ar=class extends Rs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.shadow=new yl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var bo=class extends qe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Ll="\\[\\]\\.:\\/",t_=new RegExp("["+Ll+"]","g"),Il="[^"+Ll+"]",e_="[^"+Ll.replace("\\.","")+"]",n_=/((?:WC+[\/:])*)/.source.replace("WC",Il),i_=/(WCOD+)?/.source.replace("WCOD",e_),s_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Il),r_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Il),o_=new RegExp("^"+n_+i_+s_+r_+"$"),a_=["material","materials","bones","map"],vl=class{constructor(t,e,n){let s=n||Ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ae=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(t_,"")}static parseTrackName(t){let e=o_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);a_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ae.Composite=vl;Ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ae.prototype.GetterByBindingType=[Ae.prototype._getValue_direct,Ae.prototype._getValue_array,Ae.prototype._getValue_arrayElement,Ae.prototype._getValue_toArray];Ae.prototype.SetterByBindingTypeAndVersioning=[[Ae.prototype._setValue_direct,Ae.prototype._setValue_direct_setNeedsUpdate,Ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_array,Ae.prototype._setValue_array_setNeedsUpdate,Ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_arrayElement,Ae.prototype._setValue_arrayElement_setNeedsUpdate,Ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_fromArray,Ae.prototype._setValue_fromArray_setNeedsUpdate,Ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var B_=new Float32Array(1);var Wi=class extends ja{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var vh=new be,lr=class{constructor(t,e,n=0,s=1/0){this.ray=new vs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Js,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return vh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vh),this}intersectObject(t,e=!0,n=[]){return Ml(t,this,n,e),n.sort(Mh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ml(t[s],this,n,e);return n.sort(Mh),n}};function Mh(i,t){return i.distance-t.distance}function Ml(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)Ml(s[r],t,e,!0)}}var oi=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ie(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var bh=new L,Gr=new L,So=class{constructor(t=new L,e=new L){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){bh.subVectors(t,this.start),Gr.subVectors(this.end,this.start);let n=Gr.dot(Gr),r=Gr.dot(bh)/n;return e&&(r=Ie(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"162"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="162");var Xh={type:"change"},Dl={type:"start"},qh={type:"end"},Lo=new vs,Yh=new Un,l_=Math.cos(70*qn.DEG2RAD),Io=class extends Vn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wn.ROTATE,MIDDLE:Wn.DOLLY,RIGHT:Wn.PAN},this.touches={ONE:Xn.ROTATE,TWO:Xn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(z){z.addEventListener("keydown",Gt),this._domElementKeyEvents=z},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Gt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Xh),n.update(),r=s.NONE},this.update=(function(){let z=new L,yt=new zn().setFromUnitVectors(t.up,new L(0,1,0)),Xt=yt.clone().invert(),Y=new L,It=new zn,J=new L,ct=2*Math.PI;return function(Qt=null){let ce=n.object.position;z.copy(ce).sub(n.target),z.applyQuaternion(yt),o.setFromVector3(z),n.autoRotate&&r===s.NONE&&Q(M(Qt)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let de=n.minAzimuthAngle,ye=n.maxAzimuthAngle;isFinite(de)&&isFinite(ye)&&(de<-Math.PI?de+=ct:de>Math.PI&&(de-=ct),ye<-Math.PI?ye+=ct:ye>Math.PI&&(ye-=ct),de<=ye?o.theta=Math.max(de,Math.min(ye,o.theta)):o.theta=o.theta>(de+ye)/2?Math.max(de,o.theta):Math.min(ye,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let oe=!1;if(n.zoomToCursor&&H||n.object.isOrthographicCamera)o.radius=K(o.radius);else{let ae=o.radius;o.radius=K(o.radius*c),oe=ae!=o.radius}if(z.setFromSpherical(o),z.applyQuaternion(Xt),ce.copy(n.target).add(z),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),n.zoomToCursor&&H){let ae=null;if(n.object.isPerspectiveCamera){let Se=z.length();ae=K(Se*c);let Ke=Se-ae;n.object.position.addScaledVector(T,Ke),n.object.updateMatrixWorld(),oe=!!Ke}else if(n.object.isOrthographicCamera){let Se=new L(W.x,W.y,0);Se.unproject(n.object);let Ke=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),oe=Ke!==n.object.zoom;let dn=new L(W.x,W.y,0);dn.unproject(n.object),n.object.position.sub(dn).add(Se),n.object.updateMatrixWorld(),ae=z.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ae!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ae).add(n.object.position):(Lo.origin.copy(n.object.position),Lo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Lo.direction))<l_?t.lookAt(n.target):(Yh.setFromNormalAndCoplanarPoint(n.object.up,n.target),Lo.intersectPlane(Yh,n.target))))}else if(n.object.isOrthographicCamera){let ae=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),ae!==n.object.zoom&&(n.object.updateProjectionMatrix(),oe=!0)}return c=1,H=!1,oe||Y.distanceToSquared(n.object.position)>a||8*(1-It.dot(n.object.quaternion))>a||J.distanceToSquared(n.target)>a?(n.dispatchEvent(Xh),Y.copy(n.object.position),It.copy(n.object.quaternion),J.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Yt),n.domElement.removeEventListener("pointerdown",Ct),n.domElement.removeEventListener("pointercancel",C),n.domElement.removeEventListener("wheel",rt),n.domElement.removeEventListener("pointermove",$t),n.domElement.removeEventListener("pointerup",C),n.domElement.getRootNode().removeEventListener("keydown",bt,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Gt),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,a=1e-6,o=new oi,l=new oi,c=1,h=new L,u=new wt,d=new wt,m=new wt,g=new wt,y=new wt,p=new wt,f=new wt,v=new wt,x=new wt,T=new L,W=new wt,H=!1,R=[],Z={},st=!1;function M(z){return z!==null?2*Math.PI/60*n.autoRotateSpeed*z:2*Math.PI/60/60*n.autoRotateSpeed}function D(z){let yt=Math.abs(z*.01);return Math.pow(.95,n.zoomSpeed*yt)}function Q(z){l.theta-=z}function P(z){l.phi-=z}let b=(function(){let z=new L;return function(Xt,Y){z.setFromMatrixColumn(Y,0),z.multiplyScalar(-Xt),h.add(z)}})(),U=(function(){let z=new L;return function(Xt,Y){n.screenSpacePanning===!0?z.setFromMatrixColumn(Y,1):(z.setFromMatrixColumn(Y,0),z.crossVectors(n.object.up,z)),z.multiplyScalar(Xt),h.add(z)}})(),w=(function(){let z=new L;return function(Xt,Y){let It=n.domElement;if(n.object.isPerspectiveCamera){let J=n.object.position;z.copy(J).sub(n.target);let ct=z.length();ct*=Math.tan(n.object.fov/2*Math.PI/180),b(2*Xt*ct/It.clientHeight,n.object.matrix),U(2*Y*ct/It.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(b(Xt*(n.object.right-n.object.left)/n.object.zoom/It.clientWidth,n.object.matrix),U(Y*(n.object.top-n.object.bottom)/n.object.zoom/It.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function N(z){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=z:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(z){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=z:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function V(z,yt){if(!n.zoomToCursor)return;H=!0;let Xt=n.domElement.getBoundingClientRect(),Y=z-Xt.left,It=yt-Xt.top,J=Xt.width,ct=Xt.height;W.x=Y/J*2-1,W.y=-(It/ct)*2+1,T.set(W.x,W.y,1).unproject(n.object).sub(n.object.position).normalize()}function K(z){return Math.max(n.minDistance,Math.min(n.maxDistance,z))}function it(z){u.set(z.clientX,z.clientY)}function tt(z){V(z.clientX,z.clientX),f.set(z.clientX,z.clientY)}function ut(z){g.set(z.clientX,z.clientY)}function q(z){d.set(z.clientX,z.clientY),m.subVectors(d,u).multiplyScalar(n.rotateSpeed);let yt=n.domElement;Q(2*Math.PI*m.x/yt.clientHeight),P(2*Math.PI*m.y/yt.clientHeight),u.copy(d),n.update()}function et(z){v.set(z.clientX,z.clientY),x.subVectors(v,f),x.y>0?N(D(x.y)):x.y<0&&k(D(x.y)),f.copy(v),n.update()}function dt(z){y.set(z.clientX,z.clientY),p.subVectors(y,g).multiplyScalar(n.panSpeed),w(p.x,p.y),g.copy(y),n.update()}function mt(z){V(z.clientX,z.clientY),z.deltaY<0?k(D(z.deltaY)):z.deltaY>0&&N(D(z.deltaY)),n.update()}function _t(z){let yt=!1;switch(z.code){case n.keys.UP:z.ctrlKey||z.metaKey||z.shiftKey?P(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):w(0,n.keyPanSpeed),yt=!0;break;case n.keys.BOTTOM:z.ctrlKey||z.metaKey||z.shiftKey?P(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):w(0,-n.keyPanSpeed),yt=!0;break;case n.keys.LEFT:z.ctrlKey||z.metaKey||z.shiftKey?Q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):w(n.keyPanSpeed,0),yt=!0;break;case n.keys.RIGHT:z.ctrlKey||z.metaKey||z.shiftKey?Q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):w(-n.keyPanSpeed,0),yt=!0;break}yt&&(z.preventDefault(),n.update())}function pt(z){if(R.length===1)u.set(z.pageX,z.pageY);else{let yt=Ft(z),Xt=.5*(z.pageX+yt.x),Y=.5*(z.pageY+yt.y);u.set(Xt,Y)}}function Bt(z){if(R.length===1)g.set(z.pageX,z.pageY);else{let yt=Ft(z),Xt=.5*(z.pageX+yt.x),Y=.5*(z.pageY+yt.y);g.set(Xt,Y)}}function At(z){let yt=Ft(z),Xt=z.pageX-yt.x,Y=z.pageY-yt.y,It=Math.sqrt(Xt*Xt+Y*Y);f.set(0,It)}function I(z){n.enableZoom&&At(z),n.enablePan&&Bt(z)}function xt(z){n.enableZoom&&At(z),n.enableRotate&&pt(z)}function ft(z){if(R.length==1)d.set(z.pageX,z.pageY);else{let Xt=Ft(z),Y=.5*(z.pageX+Xt.x),It=.5*(z.pageY+Xt.y);d.set(Y,It)}m.subVectors(d,u).multiplyScalar(n.rotateSpeed);let yt=n.domElement;Q(2*Math.PI*m.x/yt.clientHeight),P(2*Math.PI*m.y/yt.clientHeight),u.copy(d)}function gt(z){if(R.length===1)y.set(z.pageX,z.pageY);else{let yt=Ft(z),Xt=.5*(z.pageX+yt.x),Y=.5*(z.pageY+yt.y);y.set(Xt,Y)}p.subVectors(y,g).multiplyScalar(n.panSpeed),w(p.x,p.y),g.copy(y)}function j(z){let yt=Ft(z),Xt=z.pageX-yt.x,Y=z.pageY-yt.y,It=Math.sqrt(Xt*Xt+Y*Y);v.set(0,It),x.set(0,Math.pow(v.y/f.y,n.zoomSpeed)),N(x.y),f.copy(v);let J=(z.pageX+yt.x)*.5,ct=(z.pageY+yt.y)*.5;V(J,ct)}function Rt(z){n.enableZoom&&j(z),n.enablePan&&gt(z)}function Dt(z){n.enableZoom&&j(z),n.enableRotate&&ft(z)}function Ct(z){n.enabled!==!1&&(R.length===0&&(n.domElement.setPointerCapture(z.pointerId),n.domElement.addEventListener("pointermove",$t),n.domElement.addEventListener("pointerup",C)),!Pt(z)&&(Et(z),z.pointerType==="touch"?Tt(z):S(z)))}function $t(z){n.enabled!==!1&&(z.pointerType==="touch"?Ot(z):lt(z))}function C(z){switch(Me(z),R.length){case 0:n.domElement.releasePointerCapture(z.pointerId),n.domElement.removeEventListener("pointermove",$t),n.domElement.removeEventListener("pointerup",C),n.dispatchEvent(qh),r=s.NONE;break;case 1:let yt=R[0],Xt=Z[yt];Tt({pointerId:yt,pageX:Xt.x,pageY:Xt.y});break}}function S(z){let yt;switch(z.button){case 0:yt=n.mouseButtons.LEFT;break;case 1:yt=n.mouseButtons.MIDDLE;break;case 2:yt=n.mouseButtons.RIGHT;break;default:yt=-1}switch(yt){case Wn.DOLLY:if(n.enableZoom===!1)return;tt(z),r=s.DOLLY;break;case Wn.ROTATE:if(z.ctrlKey||z.metaKey||z.shiftKey){if(n.enablePan===!1)return;ut(z),r=s.PAN}else{if(n.enableRotate===!1)return;it(z),r=s.ROTATE}break;case Wn.PAN:if(z.ctrlKey||z.metaKey||z.shiftKey){if(n.enableRotate===!1)return;it(z),r=s.ROTATE}else{if(n.enablePan===!1)return;ut(z),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Dl)}function lt(z){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;q(z);break;case s.DOLLY:if(n.enableZoom===!1)return;et(z);break;case s.PAN:if(n.enablePan===!1)return;dt(z);break}}function rt(z){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(z.preventDefault(),n.dispatchEvent(Dl),mt(Mt(z)),n.dispatchEvent(qh))}function Mt(z){let yt=z.deltaMode,Xt={clientX:z.clientX,clientY:z.clientY,deltaY:z.deltaY};switch(yt){case 1:Xt.deltaY*=16;break;case 2:Xt.deltaY*=100;break}return z.ctrlKey&&!st&&(Xt.deltaY*=10),Xt}function bt(z){z.key==="Control"&&(st=!0,n.domElement.getRootNode().addEventListener("keyup",Vt,{passive:!0,capture:!0}))}function Vt(z){z.key==="Control"&&(st=!1,n.domElement.getRootNode().removeEventListener("keyup",Vt,{passive:!0,capture:!0}))}function Gt(z){n.enabled===!1||n.enablePan===!1||_t(z)}function Tt(z){switch(Ht(z),R.length){case 1:switch(n.touches.ONE){case Xn.ROTATE:if(n.enableRotate===!1)return;pt(z),r=s.TOUCH_ROTATE;break;case Xn.PAN:if(n.enablePan===!1)return;Bt(z),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Xn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;I(z),r=s.TOUCH_DOLLY_PAN;break;case Xn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xt(z),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Dl)}function Ot(z){switch(Ht(z),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;ft(z),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;gt(z),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Rt(z),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Dt(z),n.update();break;default:r=s.NONE}}function Yt(z){n.enabled!==!1&&z.preventDefault()}function Et(z){R.push(z.pointerId)}function Me(z){delete Z[z.pointerId];for(let yt=0;yt<R.length;yt++)if(R[yt]==z.pointerId){R.splice(yt,1);return}}function Pt(z){for(let yt=0;yt<R.length;yt++)if(R[yt]==z.pointerId)return!0;return!1}function Ht(z){let yt=Z[z.pointerId];yt===void 0&&(yt=new wt,Z[z.pointerId]=yt),yt.set(z.pageX,z.pageY)}function Ft(z){let yt=z.pointerId===R[0]?R[1]:R[0];return Z[yt]}n.domElement.addEventListener("contextmenu",Yt),n.domElement.addEventListener("pointerdown",Ct),n.domElement.addEventListener("pointercancel",C),n.domElement.addEventListener("wheel",rt,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",bt,{passive:!0,capture:!0}),this.update()}};var Do=class extends ws{constructor(t=null){super();let e=new mn;e.deleteAttribute("uv");let n=new $e({side:nn}),s=new $e,r=5;t!==null&&t._useLegacyLights===!1&&(r=900);let a=new Gi(16777215,r,28,2);a.position.set(.418,16.199,.3),this.add(a);let o=new re(e,n);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let l=new re(e,s);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new re(e,s);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let h=new re(e,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let u=new re(e,s);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let d=new re(e,s);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);let m=new re(e,s);m.position.set(-2.193,-.369,-5.547),m.rotation.set(0,.516,0),m.scale.set(3.875,3.487,2.986),this.add(m);let g=new re(e,Ps(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);let y=new re(e,Ps(50));y.position.set(-16.109,18.021,-8.207),y.scale.set(.1,2.425,2.751),this.add(y);let p=new re(e,Ps(17));p.position.set(14.904,12.198,-1.832),p.scale.set(.15,4.265,6.331),this.add(p);let f=new re(e,Ps(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let v=new re(e,Ps(20));v.position.set(3.235,11.486,-12.541),v.scale.set(2.5,2,.1),this.add(v);let x=new re(e,Ps(100));x.position.set(0,20,0),x.scale.set(1,.1,1),this.add(x)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Ps(i){let t=new Ms;return t.color.setScalar(i),t}var $h=new un,Uo=new L,Ls=class extends bo{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new pe(t,3)),this.setAttribute("uv",new pe(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Wi(e,6,1);return this.setAttribute("instanceStart",new Gn(n,3,0)),this.setAttribute("instanceEnd",new Gn(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Wi(e,6,1);return this.setAttribute("instanceColorStart",new Gn(n,3,0)),this.setAttribute("instanceColorEnd",new Gn(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new yo(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new un);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),$h.setFromBufferAttribute(e),this.boundingBox.union($h))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ri),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Uo.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Uo)),Uo.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Uo));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}};Nt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new wt(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};cn.line={uniforms:Ao.merge([Nt.common,Nt.fog,Nt.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var Is=class extends En{constructor(t){super({type:"LineMaterial",uniforms:Ao.clone(cn.line.uniforms),vertexShader:cn.line.vertexShader,fragmentShader:cn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1))}};var Zh=new L,Jh=new L,Ze=new ue,Je=new ue,Yn=new ue,Ul=new L,Nl=new be,je=new So,jh=new L,No=new un,Oo=new ri,$n=new ue,Zn,Xi;function Kh(i,t,e){return $n.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),$n.multiplyScalar(1/$n.w),$n.x=Xi/e.width,$n.y=Xi/e.height,$n.applyMatrix4(i.projectionMatrixInverse),$n.multiplyScalar(1/$n.w),Math.abs(Math.max($n.x,$n.y))}function c_(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,l=a;o<l;o++){je.start.fromBufferAttribute(s,o),je.end.fromBufferAttribute(r,o),je.applyMatrix4(e);let c=new L,h=new L;Zn.distanceSqToSegment(je.start,je.end,h,c),h.distanceTo(c)<Xi*.5&&t.push({point:h,pointOnLine:c,distance:Zn.origin.distanceTo(h),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function h_(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,h=Math.min(o.instanceCount,l.count),u=-t.near;Zn.at(1,Yn),Yn.w=1,Yn.applyMatrix4(t.matrixWorldInverse),Yn.applyMatrix4(n),Yn.multiplyScalar(1/Yn.w),Yn.x*=r.x/2,Yn.y*=r.y/2,Yn.z=0,Ul.copy(Yn),Nl.multiplyMatrices(t.matrixWorldInverse,a);for(let d=0,m=h;d<m;d++){if(Ze.fromBufferAttribute(l,d),Je.fromBufferAttribute(c,d),Ze.w=1,Je.w=1,Ze.applyMatrix4(Nl),Je.applyMatrix4(Nl),Ze.z>u&&Je.z>u)continue;if(Ze.z>u){let x=Ze.z-Je.z,T=(Ze.z-u)/x;Ze.lerp(Je,T)}else if(Je.z>u){let x=Je.z-Ze.z,T=(Je.z-u)/x;Je.lerp(Ze,T)}Ze.applyMatrix4(n),Je.applyMatrix4(n),Ze.multiplyScalar(1/Ze.w),Je.multiplyScalar(1/Je.w),Ze.x*=r.x/2,Ze.y*=r.y/2,Je.x*=r.x/2,Je.y*=r.y/2,je.start.copy(Ze),je.start.z=0,je.end.copy(Je),je.end.z=0;let y=je.closestPointToPointParameter(Ul,!0);je.at(y,jh);let p=qn.lerp(Ze.z,Je.z,y),f=p>=-1&&p<=1,v=Ul.distanceTo(jh)<Xi*.5;if(f&&v){je.start.fromBufferAttribute(l,d),je.end.fromBufferAttribute(c,d),je.start.applyMatrix4(a),je.end.applyMatrix4(a);let x=new L,T=new L;Zn.distanceSqToSegment(je.start,je.end,T,x),e.push({point:T,pointOnLine:x,distance:Zn.origin.distanceTo(T),object:i,face:null,faceIndex:d,uv:null,uv1:null})}}}var Fo=class extends re{constructor(t=new Ls,e=new Is({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,o=0,l=e.count;a<l;a++,o+=2)Zh.fromBufferAttribute(e,a),Jh.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+Zh.distanceTo(Jh);let r=new Wi(s,2,1);return t.setAttribute("instanceDistanceStart",new Gn(r,1,0)),t.setAttribute("instanceDistanceEnd",new Gn(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Zn=t.ray;let a=this.matrixWorld,o=this.geometry,l=this.material;Xi=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),Oo.copy(o.boundingSphere).applyMatrix4(a);let c;if(n)c=Xi*.5;else{let u=Math.max(s.near,Oo.distanceToPoint(Zn.origin));c=Kh(s,u,l.resolution)}if(Oo.radius+=c,Zn.intersectsSphere(Oo)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),No.copy(o.boundingBox).applyMatrix4(a);let h;if(n)h=Xi*.5;else{let u=Math.max(s.near,No.distanceToPoint(Zn.origin));h=Kh(s,u,l.resolution)}No.expandByScalar(h),Zn.intersectsBox(No)!==!1&&(n?c_(this,e):h_(this,s,e))}};var u_="40babb820bb07ab118b01a927d23be6f",K_=`https://lugarde-configurator.com/?dealerToken=${u_}`;var An={log:{name:"Log Cabin",lugarde:"log-cabin",price:"blokhut",tag:"Solid logs, windmill corners",description:"Solid timber logs stacked horizontally and locked together at the corners with a traditional windmill joint.",bestFor:"Authentic character and a traditional look and feel",thicknesses:[44,68,90],thickness:44,roofs:["flat","apex","pent"],roof:"flat",step:.1,width:[1.5,20],depth:{flat:[1.5,5],apex:[1.5,6.5],pent:[1.5,5]},wall:{flat:2.038,apex:2.103,pent:1.968},edge:.28,over:{flat:.23,apex:.3,pent:.23},slopes:[17,21,26,30],slope:21,log:.1355,corner:.09,post:.12,treatments:["none","spray","boiler"],raise:4,canopy:!0,defaultSize:[4.4,3],highlights:["44, 68 or 90mm logs","Up to 20m long"]},prima:{name:"Prima",lugarde:"PRIMA-4-corners",price:"prima",tag:"Walls slot into corner posts",description:"Lugarde\u2019s patented system: wall sections slot into corner posts with an aluminium core, with no visible nails or screws.",bestFor:"A modern garden room where design and a clean finish matter",thicknesses:[28,44],thickness:44,roofs:["flat","pyramid"],roof:"flat",step:.6,width:[1.8,5.4],depth:{flat:[1.8,4.2],pyramid:[1.8,4.2]},small:{28:3.6},wall:{flat:2.148,pyramid:2.148},edge:.295,over:{flat:.18,pyramid:.264},slopes:[30],slope:30,board:.135,cornerPost:.075,post:.12,treatments:["none","spray","pickle"],raise:4,canopy:!0,defaultSize:[4.2,3],highlights:["28 or 44mm walls","60cm modules"]},pro:{name:"Pro",lugarde:"pro",price:"prosystem",tag:"14 \xD7 14cm laminated posts",description:"Wall sections slot directly into laminated 14 \xD7 14cm posts: Lugarde\u2019s strongest, most stable system, sized in 10cm steps.",bestFor:"Larger builds, home offices, gyms and year-round rooms",thicknesses:[28],thickness:28,roofs:["flat","apex"],roof:"flat",step:.1,width:[1,8.5],depth:{flat:[1,4.3],apex:[2.5,8.5]},span:{apex:5.8},canopyMax:3.6,wall:{flat:2.21,apex:2.48},edge:.28,over:{flat:.23,apex:.35},slopes:[25,40],slope:25,board:.134,post:.14,panel:3.5,treatments:["none","spray","pickle","boiler"],raise:0,canopy:!0,defaultSize:[4,3],highlights:["14 \xD7 14cm posts","Sized in 10cm steps"]}};var zo={silver:{name:"Silver trim",hex:"#c9ccce",product:"roof.trim-color.silver",list:0},black:{name:"Black trim",hex:"#26282a",product:"roof.trim-color.black",list:6,unit:"metre"}},cr={"shingles-black":{name:"Black shingles",hex:"#2b2d30",kind:"shingles",products:["roof.cover.shingles","roof.shingles.black"]},"shingles-green":{name:"Green shingles",hex:"#3f5a43",kind:"shingles",products:["roof.cover.shingles","roof.shingles.green"]},"shingles-red":{name:"Red shingles",hex:"#7c3a2f",kind:"shingles",products:["roof.cover.shingles","roof.shingles.red"]},"classic-7016":{name:"Metal tiles, Classic, anthracite (RAL 7016)",hex:"#383e42",kind:"tiles",profile:"classic",apexOnly:!0,products:["roof.covering.classic.ral7016"]},"classic-8012":{name:"Metal tiles, Classic, red-brown (RAL 8012)",hex:"#59191f",kind:"tiles",profile:"classic",apexOnly:!0,products:["roof.covering.classic.ral8012"]},"classic-9005":{name:"Metal tiles, Classic, black (RAL 9005)",hex:"#141414",kind:"tiles",profile:"classic",apexOnly:!0,products:["roof.covering.classic.ral9005"]},"modern-7016":{name:"Metal tiles, Modern, anthracite (RAL 7016)",hex:"#383e42",kind:"tiles",profile:"modern",apexOnly:!0,products:["roof.covering.modern.ral7016"]},"modern-9005":{name:"Metal tiles, Modern, black (RAL 9005)",hex:"#141414",kind:"tiles",profile:"modern",apexOnly:!0,products:["roof.covering.modern.ral9005"]}};var Qh="#d8bf93",Ds={spray:{transparent:{name:"Transparent",hex:"#d6b98c",opaque:!1},brown:{name:"Transparent brown",hex:"#b07a45",opaque:!1},graphitegrey:{name:"Transparent graphite grey",hex:"#4a4b4a",opaque:!1},lightgrey:{name:"Transparent light grey",hex:"#c9ccc5",opaque:!1},white:{name:"Transparent white",hex:"#e0dfd6",opaque:!1},"transparent-black-oil":{name:"Transparent black oil",hex:"#2c2b29",opaque:!1},"transparent-brown-oil":{name:"Transparent brown oil",hex:"#7a5532",opaque:!1}},pickle:{black:{name:"Black grey (RAL 7021)",hex:"#2f3234",opaque:!0},dustygrey:{name:"Dusty grey (RAL 7037)",hex:"#7a7b7a",opaque:!0},gravelgrey:{name:"Pebble grey (RAL 7032)",hex:"#b5b0a1",opaque:!0},purewhite:{name:"Pure white (RAL 9010)",hex:"#f1ece1",opaque:!0},quartzgrey:{name:"Quartz grey (RAL 7039)",hex:"#6b665e",opaque:!0},transparentoak:{name:"Transparent oak (stain)",hex:"#b9955c",opaque:!1}},boiler:{brown:{name:"Brown",hex:"#9a6a3c",opaque:!1},green:{name:"Green",hex:"#8a8156",opaque:!1},grey:{name:"Grey",hex:"#8e8b80",opaque:!1}}};var Ee=(i,t,e,n,s,r,a,o,l,c={})=>({code:i,name:t,group:e,kind:n,w:s,h:r,fw:a,fh:o,list:l,...c}),Ve={pe46h:Ee("PE46 (H)","Glazed single door","door","single",.77,1.935,.91,2.04,851,{product:"door.single.pe46h",leaves:1,glass:.62,panel:.3}),pe61h:Ee("PE61 (H)","Half-glazed single door","door","single",.77,1.935,.91,2.04,828,{product:"door.single.pe61h",leaves:1,glass:.42,panel:.5}),px39h:Ee("PX39 (H)","Single door with glazing bars","door","single",.77,1.935,.91,2.04,874,{product:"door.single.px39h",leaves:1,glass:.6,panel:.3,bars:[2,3]}),mg01h:Ee("MG01 (H)","Single door, frosted glass strips","door","single",.77,1.935,.91,2.04,874,{product:"door.single.mg01h",leaves:1,strips:4,panel:.25,frosted:!0}),dd01h:Ee("DD01 (H)","Boarded single door","door","single",.77,1.935,.91,2.04,851,{product:"door.single.dd01h",leaves:1,glass:0,panel:1}),pe45h:Ee("PE45 (H)","French doors","door","double",1.21,1.935,1.35,2.04,1196,{product:"door.double.pe45h",leaves:2,glass:.66,panel:.26}),pe24h:Ee("PE24 (H)","French doors with glazing bars","door","double",1.21,1.935,1.35,2.04,1288,{product:"door.double.pe24h",leaves:2,glass:.64,panel:.27,bars:[2,4]}),pe60h:Ee("PE60 (H)","Half-glazed French doors","door","double",1.21,1.935,1.35,2.04,1196,{product:"door.double.pe60h",leaves:2,glass:.45,panel:.48}),pe50h:Ee("PE50 (H)","Wide French doors","door","double",1.51,1.935,1.63,2.04,1403,{product:"door.double.pe50h",leaves:2,glass:.9,panel:0,bars:[2,4]}),pe45fh:Ee("PE45F (H)","Boarded double doors","door","double",1.21,1.935,1.35,2.04,1432,{product:"door.double.pe45fh",leaves:2,glass:0,panel:1}),sd200:Ee("SD200","Sliding doors, 2m","door","sliding",2,1.935,2.12,2.04,1645,{product:"door.sliding.sd200",leaves:2,glass:.92,panel:0}),sd300:Ee("SD300","Sliding doors, 3m","door","sliding",3,1.935,3.12,2.04,2760,{product:"door.sliding.sd300",leaves:4,glass:.92,panel:0}),dl01h:Ee("DL01H","Folding doors, 3 leaves","door","folding",1.495,1.935,1.63,2.04,1599,{product:"door.folding.dl01h",leaves:3,glass:.66,panel:.26}),vl01h:Ee("VL01H","Bi-fold doors, 2m","door","folding",1.995,1.935,2.12,2.04,1852,{product:"door.folding.vl01h",leaves:4,glass:.7,panel:.22}),vl02h:Ee("VL02H","Bi-fold doors, 2.4m","door","folding",2.415,1.935,2.54,2.04,2053,{product:"door.folding.vl02h",leaves:4,glass:.7,panel:.22}),pe47:Ee("PE47","Tilt-and-turn window","window","tilt",.77,1,.91,1.145,857,{product:"window.tiltandturn.pe47",leaves:1,sill:.85}),pe48:Ee("PE48","Wide tilt-and-turn window","window","tilt",1.29,1,1.43,1.145,1127,{product:"window.tiltandturn.pe48",leaves:2,sill:.85}),pe49:Ee("PE49","Tall double tilt-and-turn window","window","tilt",1.21,1.53,1.35,1.68,1231,{product:"window.tiltandturn.pe49",leaves:2,sill:.32}),pe65:Ee("PE65","Tall narrow tilt-and-turn window","window","tilt",.53,1.53,.675,1.68,1058,{product:"window.tiltandturn.pe65",leaves:1,sill:.32}),pj07:Ee("PJ07","Tall slot window (fixed)","window","fixed",.34,1.53,.45,1.68,282,{product:"window.picture.pj07",leaves:1,sill:.32}),pj26:Ee("PJ26","Full-height fixed window","window","fixed",.77,1.8,.91,1.935,587,{product:"window.picture.pj26",leaves:1,sill:.05}),pj25:Ee("PJ25","Wide fixed window","window","fixed",1.53,1,1.68,1.145,362,{product:"window.picture.pj25",leaves:1,sill:.85}),pj06h:Ee("PJ06H","Landscape slot window (fixed)","window","fixed",1.14,.34,1.28,.475,196,{product:"window.picture.pj06h",leaves:1,sill:1.5}),pe21:Ee("PE21","Casement window with glazing bars","window","casement",1,1.14,1.14,1.28,857,{product:"window.casement.pe21",leaves:2,sill:.7,bars:[2,3]}),pe23:Ee("PE23","Wide casement window with glazing bars","window","casement",1.21,1.14,1.35,1.28,909,{product:"window.casement.pe23",leaves:2,sill:.7,bars:[2,4]})};var Ol={floor:{name:"Internal floor",note:"Pressure-treated floor beams, floorboards and skirting",products:["remainder.innerfloor.yes"],list:null},floorInsulation:{name:"Floor insulation",note:"20mm thermal boards between the floor beams (needs the internal floor)",products:["remainder.insulation.floor"],list:null,needs:"floor"},roofInsulation:{name:"Roof insulation",note:"Rigid thermoset boards, from 0.027 W/m.K",products:["remainder.insulation.roof"],list:null},wallInsulation:{name:"Double walls with insulation",note:"An inner wall of 19mm boards on slotted beams, with a breathable membrane",products:["remainder.insulation.wall"],list:null},ceiling:{name:"Extra ceiling",note:"Finishes the inside of a flat or pent roof below the insulation",products:["remainder.insulation.extraceiling"],list:null,roofs:["flat","pent"]},veranda:{name:"Canopy decking",note:"Siberian larch decking under the canopy",products:["remainder.outerfloor.yes"],list:null,needs:"canopy"},gutter:{name:"Zinc gutters and downpipes",note:"Along the eaves, with downpipes",products:["roof.gutter.yes"],list:62,unit:"metre",roofs:["apex","pent","pyramid"]},downpipe:{name:"Downpipe set",note:"Drains the flat roof\u2019s outlet: one set or two, to suit the roof",products:["roof.downspout.yes"],list:null,roofs:["flat"]},diamond:{name:"Diamond-cut log ends",note:"Instead of straight-cut (44mm logs)",products:["wall.edge.diamond"],list:125,rooms:["log"]},plasticBeams:{name:"Plastic foundation beams",note:"Instead of timber (not with 90mm logs)",products:["wall.foundation-beams.plastic"],list:13,unit:"metre"},stormAnchors:{name:"Storm anchor kit",note:"Ties the walls to the base",products:["remainder.stormanchors.yes"],list:130,rooms:["log","prima"]},finial:{name:"Chrome ball finial",note:"On the pyramid\u2019s metal cap",products:["remainder.roof.edge.chrome-ball"],list:0,roofs:["pyramid"]}};var Bo={none:{name:"No skylight"},s1:{name:"Skylight 50 \xD7 150cm",w:.5,d:1.5,product:"remainder.skylight.size-1",list:1161},s2:{name:"Skylight 50 \xD7 200cm",w:.5,d:2,product:"remainder.skylight.size-2",list:1473},s3:{name:"Skylight 100 \xD7 150cm",w:1,d:1.5,product:"remainder.skylight.size-3",list:1258},s4:{name:"Skylight 100 \xD7 200cm",w:1,d:2,product:"remainder.skylight.size-4",list:1585}},tu={patio:{name:"Base and paving by Coastal",note:"Coastal\u2019s groundwork team: \u201Ctimber decking, steel, slabs or concrete\u201D",source:"/services/groundwork-garden-building-installation-dorset/"},heater:{name:"Electrics by Coastal\u2019s electrician",note:"Sockets, lighting and a heater, by the electrician Coastal has used for over 20 years",source:"/services/finishing-touches/"},fitout:{name:"Lined interior with laminate flooring",note:"Lined, painted walls and laminate flooring, as in Coastal\u2019s own garden rooms",source:"/garden-office/ (The Hut standard specification)"}};var ko=140,eu=3500,Fl=i=>i*Math.PI/180,zl=i=>Math.round(i*1e3);function m_(i){let t=i.openings.map(l=>Ve[l.type]).filter(l=>l.group==="door"),e=t.some(l=>l.fh*1e3>1905),n=t.some(l=>l.fh*1e3>2040),s=i.openings.some(l=>l.type==="pj26"),r=i.canopy.side!=="none",a=0,o=0;return i.range==="log"?(a=2e3+(i.roof==="flat"?70:i.roof==="apex"?135:0),(e||s)&&(o=135),n&&(o=270)):i.range==="prima"?(a=2e3+(i.roof==="pyramid"?180:20),(e||r||s)&&(o=135),n&&(o+=135)):a=2210+(i.roof==="apex"?270:0),a+=iu(i)+o+su(i)+nu(i),a}var nu=i=>(i.raise||0)*135;function iu(i){return i.range==="pro"?0:i.thickness===28?-7:i.thickness===44||i.thickness===68?-32:0}function su(i){if(i.range!=="prima"||i.roof!=="flat")return 0;let{D:t}=Us(i);return t>=4200?135:0}function g_(i){let t=i.openings.map(l=>Ve[l.type]).filter(l=>l.group==="door"),e=t.some(l=>l.fh*1e3>1905),n=t.some(l=>l.fh*1e3>2040),s=i.roof==="flat"?150:135,r=i.canopy.side!=="none",a=i.openings.some(l=>l.type==="pj26"),o=1800;return i.range==="log"?(o+=50,(e||a)&&(o+=s),n&&(o+=s),i.roof==="apex"&&i.thickness>=44&&(o-=119)):i.range==="prima"?((e||a||r)&&(o+=s),n&&(o+=135)):o+=190,o+nu(i)+iu(i)+su(i)}function __(i){let t=An[i.range],e=x_(i),n=i.slope;if(i.roof==="flat")return 500;if(i.roof==="pent")return 703;if(i.roof==="pyramid"){let{W:o,D:l}=Us(i),c=Math.min(o,l),h=n===30?29.5:n;return Math.ceil(110+(c/2+2*e)*Math.tan(Fl(h)))}let r=v_(i)+2*e;if(t.lugarde==="pro"){r-2*e>eu&&(r-=ko),r/=2;let o=(r-e)*Math.tan(Fl(n))+443;return o+=n===25?141:n===40?151:0,Math.ceil(o)}let a=i.thickness===28?300:443;return Math.ceil((r/2-e)*Math.tan(Fl(n))+a)}var x_=i=>zl(An[i.range].over[i.roof]);function Us(i){let t=i.range==="pro";return{W:zl(i.width)-(t?ko:0),D:zl(i.depth)-(t?ko:0)}}function y_(i){let{W:t,D:e}=Us(i);return t>=e}function v_(i){let{W:t,D:e}=Us(i);return y_(i)?e:t}function Ho(i){let t=eu-ko;if(i<0)return-Ho(-i);if(i<430)return 0;if(i<=t)return 100*Math.round((i-1360)/100)+1360;let e=Math.floor(i/t)*t,n=i%t;return n>180&&n<430?360+e:e+Ho(n)}function ru(i){let{W:t,D:e}=Us(i),n={};for(let[s,r,a]of[["back",t,!1],["right",e,!1],["front",t,!0],["left",e,!0]]){let o=Math.floor(r/3361),l=[];if(o>0){let c=Math.abs(Ho(r/(o+1))),h=r%c;h=h===Ho(h)?Math.abs(c-h):-Math.abs(h);let u=h!==c,d=Math.abs(h)/500;for(let m=0;m<o;m++){let g=c*(m+1);a&&(g=-g,u&&(g+=1<d&&m<d?h/d*(m+1):h)),l.push(Math.abs(g))}}n[s]=l}return n}function ou(i){return{wall:m_(i),total:g_(i)+__(i)}}function au(i){var a;let t={front:[],right:[],back:[],left:[]};if(i.range!=="log")return t;let e=o=>[5500,6500,9700,13e3,16250,19500].filter(l=>o>l).length,{W:n,D:s}=Us(i),r=n>=s;for(let[o,l]of[["front",n],["back",n],["left",s],["right",s]]){let c=5e3;if(i.roof==="apex"&&(c=(r?o==="left"||o==="right":o==="front"||o==="back")?5900:((a=cr[i.covering])==null?void 0:a.kind)==="shingles"?4900:5900),!(l>c))continue;let h=Math.max(1,e(l));for(let u=1;u<=h;u++)t[o].push(Math.round(l*u/(h+1))/1e3)}return t}var M_=(i,t=3)=>Math.round(i*10**t)/10**t;var lu=i=>i.width>=i.depth;function cu(i){let t=i.width,e=i.depth,n=-t/2,s=t/2,r=-e/2,a=e/2;return[["front",[n,a],[s,a]],["right",[s,a],[s,r]],["back",[s,r],[n,r]],["left",[n,r],[n,a]]].map(([l,c,h],u)=>{let d=Math.hypot(h[0]-c[0],h[1]-c[1]),m=[(h[0]-c[0])/d,(h[1]-c[1])/d];return{id:l,i:u,a:c,b:h,L:M_(d,4),u:m,n:[-m[1],m[0]],axis:Math.abs(m[0])>.5?"x":"z"}})}var b_=(i,t)=>t==="front"||t==="back"?i.width:i.depth;function hu(i){let t={front:[],right:[],back:[],left:[]};if(i.range==="pro"){let e=ru(i),n=An.pro.post/2;for(let s of Object.keys(t)){let r=b_(i,s)*1e3-140;for(let a of e[s]){let o=(r-a)/1e3+n;t[s].push([o-n,o+n])}}}else if(i.range==="log"){let e=au(i);for(let n of Object.keys(t))for(let s of e[n])t[n].push([s-.06,s+.06])}for(let e of Object.keys(t))t[e].sort((n,s)=>n[0]-s[0]);return t}function Bl(i){let t=ou(i);return{wall:t.wall/1e3,total:t.total/1e3}}function hr(i){let t=Ve[i];return t.group==="door"?0:Math.max(.05,2.04-t.fh)}var S_=Object.keys(Ol),w_=Object.keys(tu),gx=Object.freeze({v:1,range:"log",use:"office",width:An.log.defaultSize[0],depth:An.log.defaultSize[1],thickness:44,roof:"flat",slope:21,trim:"silver",covering:"shingles-black",raise:0,canopy:{side:"none",depth:1.5},openings:null,treatment:{kind:"spray",colour:"graphitegrey"},frames:{kind:"pickle",colour:"dustygrey"},floorColour:"none",options:Object.fromEntries(S_.map(i=>[i,!1])),spots:0,wallLights:0,skylight:"none",extras:Object.fromEntries(w_.map(i=>[i,!1])),step:0});function kl(i){return!i||i.kind==="none"?Qh:Ds[i.kind][i.colour].hex}var E_={front:"f",right:"r",back:"b",left:"l"},_x=Object.fromEntries(Object.entries(E_).map(([i,t])=>[t,i])),T_={none:"n",spray:"s",pickle:"p",boiler:"b"},xx=Object.fromEntries(Object.entries(T_).map(([i,t])=>[t,i]));var ur=new L;function Rn(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;ur.copy(t),ur[n]=0,ur.normalize();let c=.5*a/(a+o),h=1-ur.angleTo(i)/l;return Math.sign(ur[e])===1?h*c:o/(a+o)+c+c*(1-h)}var Vo=class extends mn{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new L,l=new L,c=new L(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,m=h.length/6,g=new L,y=.5/s;for(let p=0,f=0;p<h.length;p+=3,f+=2)switch(o.fromArray(h,p),l.copy(o),l.x-=Math.sign(l.x)*y,l.y-=Math.sign(l.y)*y,l.z-=Math.sign(l.z)*y,l.normalize(),h[p+0]=c.x*Math.sign(o.x)+l.x*r,h[p+1]=c.y*Math.sign(o.y)+l.y*r,h[p+2]=c.z*Math.sign(o.z)+l.z*r,u[p+0]=l.x,u[p+1]=l.y,u[p+2]=l.z,Math.floor(p/m)){case 0:g.set(1,0,0),d[f+0]=Rn(g,l,"z","y",r,n),d[f+1]=1-Rn(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),d[f+0]=1-Rn(g,l,"z","y",r,n),d[f+1]=1-Rn(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),d[f+0]=1-Rn(g,l,"x","z",r,t),d[f+1]=Rn(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),d[f+0]=1-Rn(g,l,"x","z",r,t),d[f+1]=1-Rn(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),d[f+0]=1-Rn(g,l,"x","y",r,t),d[f+1]=1-Rn(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),d[f+0]=Rn(g,l,"x","y",r,t),d[f+1]=1-Rn(g,l,"y","x",r,e);break}}};var A_={sand:"#d8c7a8",oat:"#e6dccb",terracotta:"#b8714e",clay:"#c99a72",ink:"#2a2f33",oak:"#b88d5f",walnut:"#6e4b33",rubber:"#2b2d2f",canvas:"#efe9dc",leaf:"#4f7a46",brass:"#b8955a",charcoal:"#3a3a3c",linen:"#f1ece2",felt:"#2f6d4a",grass:"#3e7a3a",slate:"#4a4f55"};function uu(i,t,e,n){var st,M,D,Q;let{std:s,add:r,box:a,group:o}=n,l=e.x1-e.x0,c=e.z1-e.z0,h=e.floor,u=(e.x0+e.x1)/2,d=(e.z0+e.z1)/2,m=o(i,"furniture");m.position.set(u,0,d);let g={};for(let[P,b]of Object.entries(A_))g[P]=s(b,{roughness:P==="rubber"?.95:P==="brass"?.35:.75,metalness:P==="brass"?.6:0});let y=(P,b,U,w,N,k,V,K=.04)=>r(m,new Vo(P,b,U,3,Math.min(K,P/2,b/2,U/2)),V,w,N,k,"furniture"),p=(P,b,U,w,N,k,V,K=20)=>r(m,new Ye(P,b,U,K),V,w,N,k,"furniture"),f=(P,b,U,w,N,k,V)=>a(m,P,b,U,w,N,k,V,"furniture"),v=P=>t.openings.filter(b=>b.wall===P).map(b=>{let U=Ve[b.type],w=P==="front"||P==="back"?t.width:t.depth,N=b.p*w,k=N-U.fw/2-.05,V=N+U.fw/2+.05,K=tt=>P==="front"?tt-t.width/2-u:P==="back"?t.width/2-tt-u:P==="left"?tt-t.depth/2-d:t.depth/2-tt-d,it=[K(k),K(V)].sort((tt,ut)=>tt-ut);return{a:it[0],b:it[1],sill:hr(b.type)}}),x=(P,b,U,w)=>v(P).every(N=>b+U<N.a||b-U>N.b||N.sill>w),T=(P,b,U=0,w=2)=>{let N=(P==="front"||P==="back"?l:c)/2-b-.05;for(let k=0;k<50;k++)for(let V of[1,-1]){let K=U+V*k*.1;if(Math.abs(K)<=N&&x(P,K,b,w))return K}return null},W=(P,b,U=1)=>{p(.14*U,.11*U,.3*U,P,h+.15*U,b,g.charcoal);for(let w=0;w<5;w++)r(m,new ki(.13*U,1),g.leaf,P+Math.sin(w*2.4)*.07*U,h+(.42+w*.08)*U,b+Math.cos(w*2.4)*.07*U,"furniture")},H=(P,b,U,w,N)=>{let k=f(U,.006,w,P,h+.004,b,N);k.castShadow=!1},R=-c/2,Z=t.use;if(Z==="office"){let P=(st=T("back",.7,-l/6,1))!=null?st:0;f(1.4,.03,.7,P,h+.74,R+.4,g.oak);for(let U of[-1,1])f(.04,.72,.62,P+U*.66,h+.36,R+.4,g.ink);y(.5,.32,.03,P,h+.98,R+.2,g.ink,.01),y(.5,.08,.5,P,h+.47,R+.95,g.charcoal),y(.48,.5,.07,P,h+.78,R+1.18,g.charcoal),p(.03,.03,.4,P,h+.22,R+.95,g.ink,10);let b=T("back",.45,l/3,2.2);if(b!==null&&Math.abs(b-P)>1.2){f(.9,1.8,.02,b,h+.9,R+.02,g.oak);for(let w of[-1,1])f(.025,1.8,.32,b+w*.4375,h+.9,R+.17,g.oak);for(let w=0;w<6;w++)f(.85,.025,.3,b,h+.0125+w*.3525,R+.18,g.oak);let U=[g.terracotta,g.ink,g.canvas,g.leaf,g.clay,g.slate,g.brass];for(let w=0;w<4;w++)for(let N=0;N<9;N++)if((N+w)%5!==4){let k=.22+(N*7+w*3)%4*.015;f(.075,k,.2,b-.36+N*.088,h+.025+w*.3525+k/2+.001,R+.14,U[(N+w*2)%U.length])}}c>2.4&&(y(1.6,.42,.8,0,h+.21,c/2-.75,g.oat),y(1.6,.4,.18,0,h+.5,c/2-.38,g.oat)),W(l/2-.3,R+.3,.9)}else if(Z==="gym"){H(0,0,Math.min(2.6,l-.4),Math.min(1.8,c-.4),g.rubber);let P=(M=T("back",.6,0,2.2))!=null?M:0;for(let U of[-.55,.55])f(.07,2,.07,P+U,h+1,R+.5,g.ink);f(1.2,.05,.05,P,h+1.95,R+.5,g.ink),f(1.6,.03,.03,P,h+1.3,R+.62,g.brass);for(let U of[-.75,.75])p(.22,.22,.05,P+U,h+1.3,R+.62,g.rubber).rotation.z=Math.PI/2;y(1.1,.1,.3,0,h+.45,0,g.ink);for(let U of[-.4,.4])f(.05,.4,.05,0,h+.2,U,g.ink);let b=T("left",.5,0,1.4);b!==null&&(f(.5,.9,1.1,-l/2+.5,h+.45,b,g.charcoal),y(.35,.08,.4,-l/2+.5,h+.95,b-.2,g.rubber)),W(l/2-.3,c/2-.4,.8)}else if(Z==="games"){let P=Math.min(2.2,l-1.2),b=Math.min(1.2,c-1.2);if(P>1.2&&b>.7){y(P,.14,b,0,h+.74,-c/8,g.walnut,.03),f(P-.16,.01,b-.16,0,h+.815,-c/8,g.felt);for(let[w,N]of[[-1,-1],[1,-1],[-1,1],[1,1]])f(.12,.68,.12,w*(P/2-.15),h+.34,-c/8+N*(b/2-.15),g.walnut)}let U=T("back",.3,l/3,2.2);U!==null&&(p(.23,.23,.04,U,h+1.73,R+.03,g.ink,28).rotation.x=Math.PI/2);for(let w of[-1,1])p(.18,.18,.05,w*(l/2-.4),h+.75,c/2-.5,g.ink),p(.025,.025,.72,w*(l/2-.4),h+.36,c/2-.5,g.brass,8)}else if(Z==="bar"){let P=(D=T("back",1.1,0,1))!=null?D:0,b=Math.min(2.2,l-.6);f(b,.9,.5,P,h+.45,R+1.1,g.walnut),f(b+.1,.05,.62,P,h+.925,R+1.1,g.slate),f(b,1.6,.3,P,h+1.2,R+.16,g.ink);for(let U=1;U<4;U++)f(b-.04,.02,.28,P,h+.6+U*.38,R+.18,g.oak);for(let U=0;U<Math.floor(b/.16);U++)for(let w=1;w<4;w++)p(.035,.035,.26,P-b/2+.12+U*.16,h+.6+w*.38+.14,R+.2,[g.leaf,g.brass,g.terracotta,g.canvas][(U+w)%4],10);for(let U=0;U<Math.max(2,Math.floor(b/.6));U++){let w=P-b/2+.35+U*.6;p(.19,.19,.06,w,h+.78,R+1.65,g.ink),p(.025,.025,.74,w,h+.38,R+1.65,g.brass,8)}}else if(Z==="golf"){let P=Math.min(3.2,l-.4),b=Math.min(2.2,e.wallTop-h-.25);f(P,b,.03,0,h+.15+b/2,R+.06,g.canvas),f(Math.min(1.5,l-.6),.02,Math.min(1.5,c-1.2),0,h+.01,R+1.4,g.grass),y(.3,.1,.12,0,Math.min(e.wallTop-.15,h+2.3),c/2-.8,g.ink),y(.6,.45,.5,l/2-.5,h+.225,c/2-.6,g.charcoal),p(.012,.012,1,-.45,h+.5,R+1.6,g.ink,8).rotation.z=.3}else if(Z==="annexe"){let P=(Q=T("back",.9,0,1))!=null?Q:0,b=Math.min(1.6,l-.8);y(b,.4,2,P,h+.2,R+1.05,g.walnut,.03),y(b-.06,.22,1.9,P,h+.5,R+1.07,g.linen,.06),y(b,.9,.08,P,h+.45,R+.05,g.walnut,.02);for(let U of[-1,1])y(.4,.28,.3,P+U*(b/2+.3),h+.44,R+.2,g.linen,.1),f(.45,.5,.4,P+U*(b/2+.3),h+.25,R+.25,g.oak);c>3&&y(.8,.4,.8,-l/2+.6,h+.2,c/2-.7,g.terracotta)}else{H(0,-c/8,Math.min(2.2,l-.6),Math.min(1.6,c-.6),g.oat);for(let P of[-1,1])y(.75,.42,.75,P*.7,h+.21,-c/8,g.canvas),y(.75,.38,.16,P*.7,h+.55,-c/8-.3,g.canvas);p(.35,.35,.04,0,h+.4,-c/8,g.oak,28),p(.04,.04,.38,0,h+.19,-c/8,g.ink,10),W(-l/2+.35,R+.35)}}var dr=.07,du=.09,Cn=(i,t,e)=>new L(i,t,e);function R_(i){return i.range==="pro"?{t:.028,post:An.pro.post,inset:An.pro.post/2-.014}:{t:i.thickness/1e3,post:i.range==="prima"?.085:0,inset:0}}function fr(i){let t=An[i.range].over[i.roof],e=i.canopy.side!=="none"?i.canopy.depth:0;return{front:t,back:t,left:t+(i.canopy.side==="left"?e:0),right:t+(i.canopy.side==="right"?e:0)}}function Ns(i){var n;let t=fr(i),e=Bl(i);return{x0:-i.width/2-t.left,x1:i.width/2+t.right,z0:-i.depth/2-t.back,z1:i.depth/2+t.front+((n=i.extras)!=null&&n.patio?1.4:0),top:dr+e.total}}function C_(i){let t=fr(i);return{x0:-i.width/2-t.left,x1:i.width/2+t.right,z0:-i.depth/2-t.back,z1:i.depth/2+t.front}}function qi(i,t,e){let n=new mn(i,t,e),s=n.attributes.uv,r=[[e,t],[e,t],[i,e],[i,e],[i,t],[i,t]];for(let a=0;a<s.count;a++){let[o,l]=r[Math.floor(a/4)];s.setXY(a,s.getX(a)*o,s.getY(a)*l)}return n}function fu(i){let[t,e]=i.groups,n=t.count/2;return i.clearGroups(),i.addGroup(t.start,n,0),i.addGroup(t.start+n,n,1),i.addGroup(e.start,e.count,2),i}function pu(i,t){let e=An[i.range],n=i.width,s=i.depth,r=R_(i),a=r.t,o=Bl(i),l=dr,c=dr+o.wall,h=o.total-o.wall,u=i.range==="pro",d=i.range==="log",m=i.range==="prima",g=new hn;g.name="room";let y=[],p=[],f=ot=>(p.push(ot),ot),v=(ot,ht={})=>f(new $e({color:ot,roughness:.7,...ht})),x=kl(i.treatment),T=i.treatment.kind==="pickle"&&Ds.pickle[i.treatment.colour].opaque,W=ot=>T?ot+"Paint":ot,H=t.cladding(W(d?"log":"tng"),x,!0),R=v("#ffffff",{map:H.map,normalMap:H.normalMap,roughness:H.roughness,normalScale:new wt(1,1)});R.name="walls";let Z=t.cladding(W("tng"),x,!1),st=v("#ffffff",{map:Z.map,normalMap:Z.normalMap,roughness:Z.roughness}),M=t.cladding(W("fascia"),x,!0),D=v("#ffffff",{map:M.map,normalMap:M.normalMap,roughness:M.roughness}),Q=kl(i.frames),P=i.frames.kind==="pickle"&&Ds.pickle[i.frames.colour].opaque,b=i.frames.kind==="none"||!P?(()=>{let ot=t.cladding("tng",Q,!1);return v("#ffffff",{map:ot.map,normalMap:ot.normalMap,roughness:.6})})():v(Q,{roughness:.55});b.name="frames";let U=f(new ir({color:"#a9bfc4",roughness:.05,metalness:0,transparent:!0,opacity:.22,envMapIntensity:1.8,side:Pe,depthWrite:!1})),w=f(new ir({color:"#e7eded",roughness:.55,transparent:!0,opacity:.85,side:Pe,depthWrite:!1})),N=v("#c9cdd0",{roughness:.25,metalness:.9}),k=v("#8d9396",{roughness:.35,metalness:.8}),V=v("#1d1f22",{roughness:.45,metalness:.3}),K=v("#3a3a38",{roughness:1});K.name="hidden";let it=v(i.options.plasticBeams?"#1c1d1e":"#6c6845",{roughness:i.options.plasticBeams?.5:.85}),tt=zo[i.trim],ut=v(tt.hex,{roughness:.32,metalness:.75}),q=(()=>{let ot=t.roof("epdm");return v("#ffffff",{map:ot.map,normalMap:ot.normalMap,roughness:ot.roughness})})(),et=t.cladding(W("soffit"),x,!1),dt=v("#ffffff",{map:et.map,normalMap:et.normalMap,roughness:.8,side:Pe}),mt=cr[i.covering],_t=i.roof==="apex"||i.roof==="pyramid"?(()=>{let ot=mt.kind==="tiles"?t.tiles(mt.hex,mt.profile):t.shingles(mt.hex);return v("#ffffff",{map:ot.map,normalMap:ot.normalMap,roughness:ot.roughness,metalness:mt.kind==="tiles"?.4:0})})():null,pt=f(new $e({color:"#fff6e0",emissive:"#ffd79a",emissiveIntensity:.35,roughness:.3})),Bt=t.cladding(W(d?"log":"tng"),x,!0),At=v("#ffffff",{map:Bt.map,normalMap:Bt.normalMap,roughness:.8}),I=i.options.wallInsulation?t.cladding("tng","#e6d6b6",!0):null,xt=I?v("#ffffff",{map:I.map,normalMap:I.normalMap,roughness:.8}):null,ft=(ot,...ht)=>(ot.userData.tags=[...ot.userData.tags||[],...ht],ot),gt=(ot,ht,A,F=0,O=0,$=0,..._)=>{let E=new re(ht,A);return E.position.set(F,O,$),E.castShadow=!0,E.receiveShadow=!0,ot.add(E),ft(E,..._)},j=(ot,ht,A,F,O,$,_,E,...B)=>gt(ot,qi(ht,A,F),E,O,$,_,...B),Rt=(ot,...ht)=>{let A=new hn;return ot.add(A),ft(A,...ht)},Dt={std:v,add:gt,box:j,group:Rt,materials:{lamp:pt}},Ct=cu(i),$t=hu(i),C=Rt(g,"walls"),S=i.roof==="apex",lt=i.roof==="pent",rt=lu(i),Mt=i.slope*Math.PI/180,bt=ot=>S&&(rt?ot==="left"||ot==="right":ot==="front"||ot==="back"),Vt=()=>rt?s:n,Gt=.35,Tt=(ot,ht,A=0)=>{if(bt(ot.id)){let F=Vt()/2,O=Math.abs(ht-ot.L/2);return c+Math.max(0,(F-O-A)*Math.tan(Mt))-.015}if(lt){let F=ot.a[1]+ot.u[1]*ht;return c+Gt*(F+s/2)/s}return c},Ot={};Ct.forEach(ot=>{let ht=ot.L,A=ot.id,F=Rt(C,"wall:"+A);F.position.set(ot.a[0],0,ot.a[1]),F.rotation.y=Math.atan2(-ot.u[1],ot.u[0]),Ot[A]={g:F,L:ht,wall:ot};let O=i.openings.filter(nt=>nt.wall===A),$=O.map(nt=>{let at=Ve[nt.type],St=nt.p*ht,vt=hr(nt.type),Lt=new Ts,Ut=St-at.fw/2,Wt=St+at.fw/2,te=l+vt+(vt?0:.002),Zt=Math.min(l+vt+at.fh,Tt(ot,Ut)-.004,Tt(ot,Wt)-.004);return Lt.moveTo(Ut,te),Lt.lineTo(Ut,Zt),Lt.lineTo(Wt,Zt),Lt.lineTo(Wt,te),Lt.lineTo(Ut,te),Lt}),_=A==="front"||A==="back",E=[];if(d)E=[_?[0,ht]:[a+.001,ht-a-.001]];else if(m)E=[[r.post-.003,ht-r.post+.003]];else{let nt=[0,...$t[A].map(([at,St])=>(at+St)/2),ht];for(let at=0;at<nt.length-1;at++)E.push([nt[at]+(at===0?r.post:r.post/2)+.001,nt[at+1]-(at===nt.length-2?r.post:r.post/2)-.001])}let B=u?-r.inset:0;for(let[nt,at]of E){let St=new Fi,vt=bt(A)?ht/2:null;St.moveTo(nt,l),St.lineTo(at,l),St.lineTo(at,Tt(ot,at)),vt!==null&&vt>nt&&vt<at&&St.lineTo(vt,Tt(ot,vt)),St.lineTo(nt,Tt(ot,nt)),St.lineTo(nt,l),St.holes=$.filter((Lt,Ut)=>{let Wt=O[Ut].p*ht;return Wt>nt&&Wt<at}),gt(F,fu(new Bi(St,{depth:a,bevelEnabled:!1})),[At,R,R],0,0,B-a,"cladding","wall:"+A)}if(xt){let nt=new Fi,at=d?_?a+.07:a+.102:r.post+.07,St=ht-at;nt.moveTo(at,l+.03),nt.lineTo(St,l+.03),nt.lineTo(St,Math.min(Tt(ot,St,.1),c)-.03),nt.lineTo(at,Math.min(Tt(ot,at,.1),c)-.03),nt.lineTo(at,l+.03),nt.holes=$.filter((vt,Lt)=>{let Ut=O[Lt].p*ht;return Ut>at&&Ut<St}),gt(F,fu(new Bi(nt,{depth:.019,bevelEnabled:!1})),[xt,K,xt],0,0,B-a-.08,"wallInsulation","insulation","wall:"+A)}let G=d?_?ht:ht-2*a-.004:m?ht-2*r.post:ht-2*r.post-.004,X=ht/2;j(F,G,dr-.002,Math.max(a,.045)+.006,X,dr/2,B-a/2,it,"beams","base");for(let nt of O)ci(F,nt,ht,B)});let Yt=Rt(g,"corners"),Et=[[-1,1],[1,1],[1,-1],[-1,-1]];if(d){let ot=Math.max(1,Math.round(o.wall/.1355)),ht=o.wall/ot,A=i.options.diamond,O=(($,_)=>{let E=new Fi;if(!A)return E.moveTo(0,0),E.lineTo($,0),E.lineTo($,_),E.lineTo(0,_),E.lineTo(0,0),E;let B=Math.min(.035,_*.3);return E.moveTo(0,0),E.lineTo($-B,0),E.lineTo($,_/2),E.lineTo($-B,_),E.lineTo(0,_),E.lineTo(0,0),E})(du,ht-.006);for(let[$,_]of Et)for(let E=0;E<ot;E++){let B=l+E*ht+.003;if(E%2===0){let G=new Bi(O,{depth:a,bevelEnabled:!1}),X=gt(Yt,G,R,$*(n/2+.001),B,_>0?s/2-a:-s/2,"corners","logEnds");$<0&&(X.scale.x=-1)}else{let G=new Bi(O,{depth:a,bevelEnabled:!1}),X=gt(Yt,G,R,$>0?n/2-a:-n/2,B,_*(s/2+.001),"corners","logEnds");X.rotation.y=_>0?-Math.PI/2:Math.PI/2,X.position.x=$>0?n/2-(_>0?0:a):-n/2+(_>0?a:0)}}}else{let ot=r.post,ht=m?.004:0,A=u?c+.02:c-.008;for(let[F,O]of Et){let $=F*(n/2-ot/2+ht/2),_=O*(s/2-ot/2+ht/2),E=(S&&Me(),A);j(Yt,ot+ht,E-(u?0:l),ot+ht,$,(u?0:l)+(E-(u?0:l))/2,_,st,"corners","posts"),u&&j(Yt,ot+.01,.018,ot+.01,$,.009,_,V,"posts")}if(u)for(let F of Ct)for(let[O,$]of $t[F.id]){let _=(O+$)/2,E=F.a[0]+F.u[0]*_+F.n[0]*(-ot/2),B=F.a[1]+F.u[1]*_+F.n[1]*(-ot/2),G=Tt(F,_);j(Yt,ot,G+.02,ot,E,(G+.02)/2,B,st,"corners","posts","wall:"+F.id),j(Yt,ot+.01,.018,ot+.01,E,.009,B,V,"posts")}}function Me(){return!1}if(d){let ot=Rt(g,"stability");for(let ht of Ct)for(let[A,F]of $t[ht.id]){let O=(A+F)/2,$=a+.035,_=ht.a[0]+ht.u[0]*O-ht.n[0]*$,E=ht.a[1]+ht.u[1]*O-ht.n[1]*$,B=j(ot,.07,o.wall-.06,.07,_,l+o.wall/2,E,st,"stability","wall:"+ht.id);ht.axis==="z"&&(B.rotation.y=Math.PI/2)}}let Pt={x0:-n/2+(u?r.post/2+r.inset:a)+.002,x1:n/2-(u?r.post/2+r.inset:a)-.002,z0:-s/2+(u?r.post/2+r.inset:a)+.002,z1:s/2-(u?r.post/2+r.inset:a)-.002};i.options.wallInsulation&&(Pt.x0+=.1,Pt.x1-=.1,Pt.z0+=.1,Pt.z1-=.1);let Ht=Pt.x1-Pt.x0,Ft=Pt.z1-Pt.z0,kt=(Pt.x0+Pt.x1)/2,z=(Pt.z0+Pt.z1)/2,yt=i.options.floor?l+.03:.012,Xt=Rt(g,"floor"),Y=t.paving(),It=v("#d8d4ca",{map:Y.map,normalMap:Y.normalMap,roughness:.95});if(j(Xt,n+.1,.012,s+.1,0,.006,0,It,"base","groundwork"),i.options.floor||i.extras.fitout){let ot=i.extras.fitout,ht=ot?t.floor("laminate","#8f8a82"):t.cladding(W("tng"),i.floorColour!=="none"?Ds.spray[i.floorColour].hex:"#d3b98d",!1),A=v("#ffffff",{map:ht.map,normalMap:ht.normalMap,roughness:ot?.5:.78}),F=Math.min(1.2,Ht*.4),O=Math.min(1.2,Ft*.4),$=yt-.012;j(Xt,Ht,.024,Ft-O-.002,kt,$,Pt.z0+O+.002+(Ft-O-.002)/2,A,"floor",...ot?["fitout"]:[]),j(Xt,Ht-F-.002,.024,O,Pt.x0+F+.002+(Ht-F-.002)/2,$,Pt.z0+O/2,A,"floor",...ot?["fitout"]:[]);let _=j(Xt,F,.024,O,Pt.x0+F/2,$,Pt.z0+O/2,A,"floor","planHide"),E=Rt(Xt,"floor","planOnly","floorInsulation");for(let B=Pt.x0+.05;B<Pt.x0+F;B+=.4)j(E,.045,.07,O-.01,B,l-.035+.02,Pt.z0+O/2,v("#7b6d4b",{roughness:.9}),"floor","planOnly","floorInsulation");if(i.options.floorInsulation){let B=t.foil(),G=v("#ffffff",{map:B.map,normalMap:B.normalMap,roughness:.35});for(let X=Pt.x0+.095;X<Pt.x0+F-.05;X+=.4)j(E,Math.min(.35,Pt.x0+F-X-.03),.02,O-.02,X+Math.min(.35,Pt.x0+F-X-.03)/2,l-.005,Pt.z0+O/2,G,"floor","planOnly","floorInsulation")}}let J=Rt(g,"roof"),ct=C_(i),zt=e.over[i.roof],Qt={value:c};i.roof==="flat"?ce():S?de():lt?ye():oe();function ce(){let ot=c+h,ht=.025,A=ct.x1-ct.x0,F=ct.z1-ct.z0,O=(ct.x0+ct.x1)/2,$=(ct.z0+ct.z1)/2;j(J,A-2*ht-.004,.1,F-2*ht-.004,O,ot-.03-.05,$,q,"roof");let _=j(J,A-2*ht-.004,.016,F-2*ht-.004,O,c+.045,$,dt,"roof","soffit","ceiling"),E=h-.06,B=c+.03+E/2;j(J,A,E,ht,O,B,ct.z1-ht/2,D,"fascia"),j(J,A,E,ht,O,B,ct.z0+ht/2,D,"fascia"),j(J,ht,E,F-2*ht-.002,ct.x0+ht/2,B,$,D,"fascia"),j(J,ht,E,F-2*ht-.002,ct.x1-ht/2,B,$,D,"fascia");let G=.012,X=.065,nt=ot-X/2+.006;j(J,A+2*G,X,G,O,nt,ct.z1+G/2+.001,ut,"trim"),j(J,A+2*G,X,G,O,nt,ct.z0-G/2-.001,ut,"trim"),j(J,G,X,F,ct.x0-G/2-.001,nt,$,ut,"trim"),j(J,G,X,F,ct.x1+G/2+.001,nt,$,ut,"trim");for(let[at,St,vt,Lt]of[[A,.05,O,ct.z1-.025],[A,.05,O,ct.z0+.025],[.05,F-.1,ct.x0+.025,$],[.05,F-.1,ct.x1-.025,$]])j(J,at,.008,St,vt,ot+.002,Lt,ut,"trim");if(Qt.value=c+.037,i.skylight!=="none"){let at=Bo[i.skylight],St=Rt(J,"skylight"),vt=Math.min(at.w,n-.8),Lt=Math.min(at.d,s-.8),Ut=i.canopy.side==="left"?.2:i.canopy.side==="right"?-.2:0;j(St,vt+.1,.14,Lt+.1,Ut,ot+.05,-s*.08,V,"skylight","roof"),gt(St,new sn(vt,Lt),U,Ut,ot+.122,-s*.08,"skylight","roof","glass").rotation.x=-Math.PI/2}}function de(){let ht=Math.tan(Mt),A=rt?ct.x0:ct.z0,F=rt?ct.x1:ct.z1,O=F-A,$=(A+F)/2,_=Vt()/2,E=_+zt,B=c+.02,G=B+_*ht,X=E/Math.cos(Mt);for(let nt of[-1,1]){let at=new hn;J.add(at);let St=qi(O,.055,X),vt=gt(at,St,[K,K,_t,dt,K,K],0,0,0,"roof"),Lt=nt*E/2,Ut=G-E/2*ht+.055/2/Math.cos(Mt);rt?(vt.position.set($,Ut,Lt),vt.rotation.x=nt*Mt):(vt.position.set(Lt,Ut,$),vt.rotation.z=-nt*Mt,vt.rotation.y=0,vt.geometry=qi(X,.055,O),vt.material=[_t,dt,K,K,K,K],vt.material=[K,K,_t,dt,K,K],vt.geometry.rotateY(Math.PI/2));let Wt=B-zt*ht-.07;if(rt?j(J,O,.14,.022,$,Wt,nt*(E+.012),D,"fascia"):j(J,.022,.14,O,nt*(E+.012),Wt,$,D,"fascia"),i.options.gutter){let te=Wt-.02,Zt=nt*(E+.07),Jt=new Ye(.06,.06,O,16,1,!0,0,Math.PI),he=gt(J,Jt,v("#9aa0a3",{roughness:.35,metalness:.7,side:Pe}),rt?$:Zt,te,rt?Zt:$,"gutter");he.rotation.z=Math.PI/2,rt||he.rotation.set(Math.PI/2,0,0);for(let ee of[A+.15,F-.15]){let qt=rt?ee:Zt,me=rt?Zt:ee;gt(J,new Ye(.035,.035,te-.05,12),v("#9aa0a3",{roughness:.35,metalness:.7}),qt,(te-.05)/2,me,"gutter")}}}rt?j(J,O+.02,.05,.12,$,G+.055+.02,0,_t,"roof"):j(J,.12,.05,O+.02,0,G+.055+.02,$,_t,"roof");for(let nt of[A-.012,F+.012])for(let at of[-1,1]){let St=X+.02,vt=gt(J,qi(.022,.18,St),st,0,0,0,"fascia","barge"),Lt=G-E/2*ht-.02,Ut=nt+(at>0?Math.sign(nt)*.004:0);rt?(vt.position.set(Ut,Lt,at*E/2),vt.rotation.x=at*Mt):(vt.geometry.dispose(),vt.geometry=qi(St,.18,.022),vt.position.set(at*E/2,Lt,Ut),vt.rotation.z=-at*Mt)}if(d){let nt=_<1.6?1:_<2.6?2:3;for(let at=0;at<=nt;at++){let St=at===0?0:(_-.25)*at/nt;for(let vt of at===0?[0]:[-1,1]){let Lt=G-St*ht-.11-.015*at,Ut=O-.06;rt?j(J,Ut,.17,.07,$,Lt,vt*St,st,"roof","purlins"):j(J,.07,.17,Ut,vt*St,Lt,$,st,"roof","purlins")}}}Qt.value=G}function ye(){let ot=Gt/s,ht=Math.atan(ot),A=.18,F=ct.x1-ct.x0,O=ct.z1-ct.z0,$=(ct.x0+ct.x1)/2,_=X=>c+.02+Gt*(X+s/2)/s,E=O/Math.cos(ht),B=(_(ct.z0)+_(ct.z1))/2+A/2,G=gt(J,qi(F-.05,A,E-.05),[K,K,q,dt,st,st],$,B,0,"roof");G.rotation.x=-ht;for(let X of[ct.z0,ct.z1])j(J,F+.02,A+.04,.022,$,_(X)+A/2,X+(X>0?.011:-.011),D,"fascia");for(let X of[ct.x0-.011,ct.x1+.011]){let nt=gt(J,qi(.022,A+.04,E+.01),st,X,B,0,"fascia");nt.rotation.x=-ht}if(i.options.gutter){let X=gt(J,new Ye(.06,.06,F,16,1,!0,0,Math.PI),v("#9aa0a3",{roughness:.35,metalness:.7,side:Pe}),$,_(ct.z0)-.02,ct.z0-.07,"gutter");X.rotation.z=Math.PI/2,gt(J,new Ye(.035,.035,_(ct.z0)-.07,12),v("#9aa0a3",{roughness:.35,metalness:.7}),ct.x1-.15,(_(ct.z0)-.07)/2,ct.z0-.07,"gutter")}Qt.value=c}function oe(){let ht=Mt,A=zt,F=-n/2-A,O=n/2+A,$=-s/2-A,_=s/2+A,E=Math.min(O-F,_-$)/2,B=c+.02-A*Math.tan(ht),G=B+E*Math.tan(ht),X=(O-F)/2-E,nt=(_-$)/2-E,at=[Cn(F,B,_),Cn(O,B,_),Cn(O,B,$),Cn(F,B,$)],St=[Cn(-X,G,nt),Cn(X,G,nt),Cn(X,G,-nt),Cn(-X,G,-nt)],vt=[],Lt=[],Ut=(Zt,Jt,he,ee)=>{let qt=(me,ne,Oe)=>{vt.push(me.x,me.y,me.z,ne.x,ne.y,ne.z,Oe.x,Oe.y,Oe.z);for(let gn of[me,ne,Oe])Lt.push(gn.x+gn.z,gn.y/Math.sin(Mt))};qt(Zt,Jt,he),ee&&qt(Zt,he,ee)};for(let Zt=0;Zt<4;Zt++){let Jt=(Zt+1)%4;St[Zt].distanceTo(St[Jt])<1e-4?Ut(at[Zt],at[Jt],St[Zt]):Ut(at[Zt],at[Jt],St[Jt],St[Zt])}let Wt=new qe;Wt.setAttribute("position",new pe(vt,3)),Wt.setAttribute("uv",new pe(Lt,2)),Wt.computeVertexNormals(),gt(J,Wt,_t,0,.05,0,"roof");let te=Wt.clone();gt(J,te,dt,0,0,0,"roof","soffit").material=dt,te.index=null;for(let[Zt,Jt,he,ee]of[[O-F+.04,.022,0,_+.011],[O-F+.04,.022,0,$-.011],[.022,_-$,F-.011,0],[.022,_-$,O+.011,0]])j(J,Zt,.12,Jt,he,B-.02,ee,D,"fascia");if(gt(J,new go(.12,.16,16),k,(X>.01,0),G+.05+.06,0,"roof","cap").scale.x=Math.max(1,(X*2+.24)/.24),i.options.finial&&gt(J,new xo(.07,20,14),N,0,G+.05+.21,0,"finial","roof"),i.options.gutter){for(let[Zt,Jt,he,ee]of[[O-F,0,_+.07,0],[O-F,0,$-.07,0],[_-$,F-.07,0,1],[_-$,O+.07,0,1]])gt(J,new Ye(.055,.055,Zt,14,1,!0,0,Math.PI),v("#9aa0a3",{roughness:.35,metalness:.7,side:Pe}),Jt,B-.07,he,"gutter").rotation.set(ee?Math.PI/2:0,0,ee?0:Math.PI/2);gt(J,new Ye(.035,.035,B-.1,12),v("#9aa0a3",{roughness:.35,metalness:.7}),O+.07,(B-.1)/2,_+.07,"gutter")}Qt.value=c}if(i.roof==="flat"&&i.options.downpipe){let ot=ct.x1-.25,ht=ct.z0-.05;gt(J,new Ye(.035,.035,c+h-.25,12),v("#9aa0a3",{roughness:.35,metalness:.7}),ot,(c+h-.25)/2,ht,"downpipe"),j(J,.08,.06,.08,ot,c+h-.227,ht-.004,v("#9aa0a3",{roughness:.35,metalness:.7}),"downpipe")}let ae=Rt(g,"ceiling");if(i.roof==="flat"||lt){let ot=i.roof==="flat"?c+.036:c+.03,ht=Math.max(1,Math.floor(Ht/.6));for(let A=1;A<=ht;A++){let F=Pt.x0+Ht*A/(ht+1),O=j(ae,.045,.12,Ft-.01,F,ot-.062,z,st,"ceiling","beams");lt&&(O.rotation.x=-Math.atan(Gt/s),O.position.y=c+Gt/2-.04)}if(i.options.roofInsulation&&!i.options.ceiling&&i.roof==="flat"){let A=t.foil();gt(ae,new sn(Ht,Ft),v("#ffffff",{map:A.map,normalMap:A.normalMap,roughness:.35,side:Pe}),kt,ot-.004,z,"roofInsulation","insulation","ceiling").rotation.x=Math.PI/2}if(i.options.ceiling){let A=t.cladding("tng","#efe6d3",!1);gt(ae,new sn(Ht,Ft),v("#ffffff",{map:A.map,normalMap:A.normalMap,roughness:.8,side:Pe}),kt,ot-.13,z,"ceiling","extraCeiling").rotation.x=Math.PI/2,Qt.value=ot-.13}else if(i.options.roofInsulation&&lt){let A=t.foil(),F=gt(ae,new sn(Ht,Ft/Math.cos(Math.atan(Gt/s))),v("#ffffff",{map:A.map,normalMap:A.normalMap,roughness:.35,side:Pe}),kt,c+Gt/2-.005,z,"roofInsulation","insulation","ceiling");F.rotation.x=Math.PI/2-Math.atan(Gt/s)}}else if(i.options.roofInsulation){let ot=t.foil(),ht=v("#ffffff",{map:ot.map,normalMap:ot.normalMap,roughness:.35,side:Pe});if(S){let A=Vt()/2,F=rt?Ht:Ft;for(let O of[-1,1]){let $=gt(ae,new sn(rt?F:(A-.1)/Math.cos(Mt),rt?(A-.1)/Math.cos(Mt):F),ht,0,0,0,"roofInsulation","insulation","ceiling"),_=c+.02+A/2*Math.tan(Mt)-.06;rt?($.position.set(kt,_,O*A/2),$.rotation.x=-Math.PI/2+O*Mt):($.position.set(O*A/2,_,z),$.rotation.set(-Math.PI/2,-O*Mt,0))}}else gt(ae,new sn(Ht,Ft),ht,kt,c-.01,z,"roofInsulation","insulation","ceiling").rotation.x=Math.PI/2}if(i.canopy.side!=="none"){let ot=Rt(g,"canopy"),ht=i.canopy.depth,A=i.canopy.side==="left"?-1:1,F=u?.14:.12,O=A*(n/2+ht)-A*F/2,$=[-s/2+F/2,s/2-F/2];d&&i.roof==="flat"&&s>3.5&&$.splice(1,0,0);let _=i.roof==="flat"?c+.03:c-.01;for(let E of $){j(ot,F,_-.01,F,O,(_-.01)/2+.005,E,st,"canopy","posts"),j(ot,F+.02,.012,F+.02,O,.006,E,V,"canopy","posts");for(let G of E===$[0]?[1]:E===$[$.length-1]?[-1]:[-1,1]){let X=j(ot,.05,.55,.05,O,_-.3,E+G*.17,st,"canopy","braces");X.rotation.x=-G*Math.PI/4}let B=j(ot,.05,.55,.05,O-A*.17,_-.3,E,st,"canopy","braces");B.rotation.z=-A*Math.PI/4}if(j(ot,F-.012,.16,s-.004,O,_-.085,0,st,"canopy","beams"),i.options.veranda){let E=t.deck("#b0835a"),B=v("#ffffff",{map:E.map,normalMap:E.normalMap,roughness:E.roughness}),G=A>0?n/2+.004:-n/2-ht+.004,X=A>0?n/2+ht-.004:-n/2-.004;j(ot,X-G,.04,s-.008,(G+X)/2,.04,0,B,"veranda","canopy")}}let Se=Rt(g,"exterior"),Ke=Ct.find(ot=>ot.id==="front"),dn=i.openings.filter(ot=>ot.wall==="front"&&Ve[ot.type].group==="door").sort((ot,ht)=>Ve[ht.type].fw-Ve[ot.type].fw)[0];if(i.wallLights){let ot=[];if(dn){let ht=dn.p*n-n/2,A=Ve[dn.type].fw/2+.22;ot.push(ht-A,ht+A)}else ot.push(-n/4,n/4);i.wallLights===4&&ot.push(-n/2+.35,n/2-.35);for(let ht of ot.slice(0,i.wallLights)){let A=Math.max(-n/2+.2,Math.min(n/2-.2,ht)),F=s/2+(u?-r.inset:0)+.05;j(Se,.08,.16,.09,A,l+1.85,F,V,"wallLights");for(let O of[-.09,.09])j(Se,.05,.004,.05,A,l+1.85+O,F,pt,"wallLights","lamp");y.push({kind:"updown",position:Cn(A,l+1.85,F+.08)})}}if(i.spots){let ot=i.spots,ht=Math.min(ot,Math.max(3,Math.round(ot*n/(2*n+s)))),A=Math.floor((ot-ht)/2),F=i.roof==="flat"?c+.036:c-zt*Math.tan(Mt)+.01,O=s/2+Math.max(.08,zt/2),$=(_,E)=>{gt(Se,new Ye(.03,.03,.008,16),pt,_,F,E,"spots","lamp"),y.push({kind:"down",position:Cn(_,F-.02,E)})};for(let _=0;_<ht;_++)$(-n/2+n*(_+.5)/ht,O);for(let _=0;_<A;_++)for(let E of[-1,1])$(E*(n/2+Math.max(.08,zt/2)),s/2-s*(_+.5)/(A+.5));y.length=Math.min(y.length,12)}if(i.options.stormAnchors)for(let[ot,ht]of Et){let A=ot*(n/2+(d?du+.01:.006)),F=ht*(s/2-.3);j(Se,.006,o.wall-.05,.04,A,l+o.wall/2,F,k,"anchors")}if(i.extras.patio){let ot=t.paving(),ht=v("#e7e3da",{map:ot.map,normalMap:ot.normalMap,roughness:.7}),A=Ns({...i,extras:{}}),F=Rt(Se,"patio");j(F,A.x1-A.x0+1.2,.03,1.6,(A.x0+A.x1)/2,.015,A.z1+.8,ht,"patio"),j(F,A.x1-A.x0+1.2,.05,.06,(A.x0+A.x1)/2,.025,A.z1+1.63,v("#5b5d60",{roughness:.8}),"patio")}let Sn={x0:Pt.x0,x1:Pt.x1,z0:Pt.z0,z1:Pt.z1,floor:yt,walls:Ct,ceilingAt:()=>Math.max(Qt.value-.05,c-.05),wallTop:c};if(i.extras.heater){let ot=Rt(g,"heater");j(ot,.9,.12,.07,kt,c-.45,Pt.z0+.05,v("#2b2d30",{roughness:.5,metalness:.3}),"heater"),j(ot,.82,.05,.01,kt,c-.47,Pt.z0+.088,f(new $e({color:"#ffb27a",emissive:"#ff7a3a",emissiveIntensity:.8})),"heater","lamp"),y.push({kind:"interior",position:Cn(kt,c-.6,Pt.z0+.4)})}if(i.extras.fitout){let ot=Rt(g,"fitout"),ht=Math.min(Sn.ceilingAt(),c+.02)-.015,A=Math.max(2,Math.round(Ht/1.4)),F=Math.max(1,Math.round(Ft/1.4));for(let O=0;O<A;O++)for(let $=0;$<F;$++){let _=Pt.x0+Ht*(O+.5)/A,E=Pt.z0+Ft*($+.5)/F;gt(ot,new Ye(.04,.04,.01,14),pt,_,ht,E,"fitout","lamp"),y.filter(B=>B.kind==="interior").length<4&&y.push({kind:"interior",position:Cn(_,ht-.2,E)})}for(let[O,$,_,E]of[[kt,Pt.z0+.006,Ht,.012],[kt,Pt.z1-.006,Ht,.012],[Pt.x0+.006,z,.012,Ft],[Pt.x1-.006,z,.012,Ft]])j(ot,_,.09,E,O,yt+.045,$,v("#f2f0ea",{roughness:.6}),"fitout")}uu(g,i,Sn,Dt);function ci(ot,ht,A,F){let O=Ve[ht.type],$=ht.p*A,_=hr(ht.type),E=Rt(ot,"opening:"+ht.id,"openings");E.position.set($,l+_,F-a/2);let B=O.fw,G=O.fh,X=a+.012,nt=.055,at=.065,St=a/2+.011;j(E,B+2*at,at,.02,0,G+at/2,St,b,"opening:"+ht.id,"frames");for(let Jt of[-1,1])j(E,at,G-.001,.02,Jt*(B/2+at/2),(G-.001)/2,St,b,"opening:"+ht.id,"frames");j(E,B,nt,X,0,G-nt/2,0,b,"opening:"+ht.id,"frames");for(let Jt of[-1,1])j(E,nt,G-nt-.001,X,Jt*(B/2-nt/2),(G-nt)/2,0,b,"opening:"+ht.id,"frames");O.group==="window"?(j(E,B-2*nt-.002,nt,X,0,nt/2,0,b,"opening:"+ht.id,"frames"),j(E,B+.1,.035,.07,0,-.0175,a/2+.035,b,"opening:"+ht.id,"frames","sill")):j(E,B-2*nt-.002,.02,X,0,.01,0,k,"opening:"+ht.id,"frames");let vt=B-2*nt,Lt=G-nt-(O.group==="window"?nt:.02),Ut=O.group==="window"?nt:.02,Wt=O.leaves,te=vt/Wt;for(let Jt=0;Jt<Wt;Jt++){let he=-vt/2+te*(Jt+.5),qt=O.kind==="sliding"?Jt%2?-.012:.012:0;Zt(E,he,Ut,te-.004,Lt-.002,qt,Jt,Wt)}function Zt(Jt,he,ee,qt,me,ne,Oe,gn){var Ge;let _n=O.kind==="sliding"?.055:.07,De=.07,fe=O.group==="door"?.13:.07,ge=Rt(Jt,"opening:"+ht.id);ge.position.set(he,ee,ne);let on=.045;j(ge,qt,De,on,0,me-De/2,0,b,"opening:"+ht.id,"leaves"),j(ge,qt,fe,on,0,fe/2,0,b,"opening:"+ht.id,"leaves");for(let Fe of[-1,1])j(ge,_n,me-De-fe-.002,on,Fe*(qt/2-_n/2),fe+(me-De-fe)/2,0,b,"opening:"+ht.id,"leaves");let _e=qt-2*_n-.002,Pn=me-De-fe-.002,jt=O.group==="door"?Pn*((Ge=O.panel)!=null?Ge:0):0,Re=O.group==="door"&&O.glass===0?0:Pn-jt-(jt?De:0);if(jt>.01){let Fe=j(ge,_e,jt,.022,0,fe+jt/2,0,b,"opening:"+ht.id,"leaves","panel");for(let ze=1;ze<Math.round(_e/.09);ze++)j(ge,.006,jt-.02,.004,-_e/2+ze*_e/Math.round(_e/.09),fe+jt/2,.013,v("#000000",{transparent:!0,opacity:.25,depthWrite:!1}),"opening:"+ht.id,"leaves");Re>.01&&j(ge,_e,De,on,0,fe+jt+De/2,0,b,"opening:"+ht.id,"leaves")}if(Re>.01){let Fe=me-De-Re/2-.001;if(O.strips){let ze=O.strips,xn=Re/ze;for(let Be=0;Be<ze;Be++)gt(ge,new sn(_e,xn-.07),w,0,me-De-xn*(Be+.5),0,"opening:"+ht.id,"glass"),Be<ze-1&&j(ge,_e,.07,on*.8,0,me-De-xn*(Be+1),0,b,"opening:"+ht.id,"leaves")}else if(gt(ge,new sn(_e,Re),ht.glass==="frosted"?w:U,0,Fe,0,"opening:"+ht.id,"glass"),O.bars){let[ze,xn]=O.bars;for(let Be=1;Be<ze;Be++)j(ge,.022,Re,.018,-_e/2+_e*Be/ze,Fe,.012,b,"opening:"+ht.id,"bars");for(let Be=1;Be<xn;Be++)j(ge,_e,.022,.012,0,Fe-Re/2+Re*Be/xn,.012,b,"opening:"+ht.id,"bars")}}else jt||j(ge,_e,Pn,.022,0,fe+Pn/2,0,b,"opening:"+ht.id,"leaves","panel");if(O.kind!=="fixed"&&(gn===1||Oe===Math.floor(gn/2)-(gn%2?0:1)||O.kind==="sliding"&&Oe===1)){let Fe=qt/2-_n/2;j(ge,.02,O.group==="door"?.22:.12,.03,Fe,O.group==="door"?Math.min(1.05,me*.52):me/2,on/2+.02,N,"opening:"+ht.id,"handles")}}}return g.traverse(ot=>{ot.isMesh&&ot.material===U&&(ot.castShadow=!1)}),{group:g,lights:y,materials:p,room:Sn}}var le=1024;function bn(i){let t=i>>>0||1;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function ai(i){let t=2166136261;for(let e of String(i))t=Math.imul(t^e.charCodeAt(0),16777619);return t>>>0}function P_(i,t=i){let e=document.createElement("canvas");return e.width=i,e.height=t,e}var Os=(i,t=0,e=255)=>Math.max(t,Math.min(e,i));function li(i){let t=parseInt(i.replace("#",""),16);return[t>>16&255,t>>8&255,t&255]}function Te([i,t,e],n,s=0){return`rgb(${Os(i*n+s)},${Os(t*n)},${Os(e*n-s)})`}function L_(i,t){let e=i.width,n=i.height,s=i.getContext("2d").getImageData(0,0,e,n).data,r=P_(e,n),a=r.getContext("2d"),o=a.createImageData(e,n),l=o.data,c=(h,u)=>s[((u+n)%n*e+(h+e)%e)*4]/255;for(let h=0;h<n;h++)for(let u=0;u<e;u++){let d=c(u+1,h-1)+2*c(u+1,h)+c(u+1,h+1)-(c(u-1,h-1)+2*c(u-1,h)+c(u-1,h+1)),m=c(u-1,h+1)+2*c(u,h+1)+c(u+1,h+1)-(c(u-1,h-1)+2*c(u,h-1)+c(u+1,h-1)),g=-d*t,y=m*t,p=1,f=Math.hypot(g,y,p),v=(h*e+u)*4;l[v]=(g/f*.5+.5)*255,l[v+1]=(y/f*.5+.5)*255,l[v+2]=(p/f*.5+.5)*255,l[v+3]=255}return a.putImageData(o,0,0),r}function rn(i,t,e){let n=i.getContext("2d"),s=n.getImageData(0,0,i.width,i.height),r=s.data,a=bn(e);for(let o=0;o<r.length;o+=4){let l=(a()-.5)*t;r[o]=Os(r[o]+l),r[o+1]=Os(r[o+1]+l),r[o+2]=Os(r[o+2]+l)}n.putImageData(s,0,0)}function pr(i,t,e,n,s,r,a){let o=e-t;for(let l=0;l<a.lines;l++){let c=t+s()*o,h=s()<a.darkShare,u=h?1-a.contrast*(.4+s()*.6):1+a.contrast*.5*s();i.strokeStyle=Te(r,u,a.warm),i.globalAlpha=.12+s()*.3,i.lineWidth=.6+s()*(h?2.6:1.6);let d=1+Math.floor(s()*2),m=2+Math.floor(s()*4),g=s()*a.wave,y=s()*a.wave*.35,p=s()*6.283,f=s()*6.283;i.beginPath();for(let v=0;v<=n;v+=8){let x=c+g*Math.sin(6.283*d*v/n+p)+y*Math.sin(6.283*m*v/n+f);v===0?i.moveTo(x,v):i.lineTo(x,v)}i.stroke()}i.globalAlpha=1}function I_(i,t,e,n,s,r,a,o){for(let l of[n,n-s,n+s]){let c=o*(.6+r()*.4),h=o*(1.4+r()*.8),u=i.createRadialGradient(e,l,0,e,l,c*1.6);u.addColorStop(0,Te(a,.42)),u.addColorStop(.45,Te(a,.62)),u.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=u,i.beginPath(),i.ellipse(e,l,c*1.6,h*1.6,0,0,6.283),i.fill(),i.strokeStyle=Te(a,.7),i.globalAlpha=.4,i.lineWidth=1;for(let d=1;d<4;d++)i.beginPath(),i.ellipse(e,l,c*(1+d*.5),h*(1+d*.6),0,0,6.283),i.stroke();i.globalAlpha=1,t&&(t.fillStyle="rgba(0,0,0,.18)",t.beginPath(),t.ellipse(e,l,c,h,0,0,6.283),t.fill())}}var D_={log:{board:.1355,count:8,groove:.006,bevel:.014,lines:30,contrast:.3,darkShare:.62,wave:3,warm:8,knots:.45,jitter:.045,roughness:.78,normal:4.2},fascia:{board:.2,count:5,groove:.002,bevel:.002,lines:34,contrast:.26,darkShare:.6,wave:3,warm:8,knots:.2,jitter:.03,roughness:.76,normal:2},fasciaPaint:{board:.2,count:5,groove:.002,bevel:.002,lines:8,contrast:.05,darkShare:.5,wave:2,warm:0,knots:.1,jitter:.01,roughness:.7,normal:2},logPaint:{board:.1355,count:8,groove:.006,bevel:.014,lines:10,contrast:.07,darkShare:.5,wave:2,warm:0,knots:.3,jitter:.025,roughness:.72,normal:4.2},tng:{board:.135,count:8,groove:.004,bevel:.004,lines:28,contrast:.28,darkShare:.6,wave:3,warm:8,knots:.5,jitter:.05,roughness:.76,normal:3.4,vgroove:!0},tngPaint:{board:.135,count:8,groove:.004,bevel:.004,lines:8,contrast:.06,darkShare:.5,wave:2,warm:0,knots:.25,jitter:.02,roughness:.7,normal:3.4,vgroove:!0},soffit:{board:.095,count:10,groove:.003,bevel:.002,lines:22,contrast:.26,darkShare:.6,wave:3,warm:8,knots:.3,jitter:.08,roughness:.78,normal:2.6,vgroove:!0},soffitPaint:{board:.095,count:10,groove:.003,bevel:.002,lines:6,contrast:.05,darkShare:.5,wave:2,warm:0,knots:.1,jitter:.02,roughness:.72,normal:2.6,vgroove:!0},natural:{board:.129,count:9,gap:.01,groove:0,bevel:.003,lines:0,brush:900,contrast:.05,darkShare:.5,wave:.5,warm:0,knots:0,jitter:.03,roughness:.62,normal:3.6},composite:{board:.13,count:8,groove:.004,bevel:.004,lines:34,contrast:.12,darkShare:.55,wave:2.4,warm:0,knots:0,jitter:.025,roughness:.64,normal:3.4,vgroove:!0,emboss:.22},foresta:{board:.1217,count:8,groove:.003,bevel:.003,lines:40,contrast:.34,darkShare:.62,wave:3,warm:6,knots:.12,jitter:.1,roughness:.6,normal:3},cedar:{board:.13,count:10,groove:.004,bevel:.003,lines:30,contrast:.34,darkShare:.65,wave:3,warm:12,knots:.25,jitter:.22,roughness:.8,normal:3.2},pine:{board:.13,count:10,groove:.005,bevel:.004,lines:26,contrast:.22,darkShare:.6,wave:3,warm:10,knots:.7,jitter:.12,roughness:.78,normal:3.4,vgroove:!0},painted:{board:.13,count:10,groove:.005,bevel:.004,lines:8,contrast:.05,darkShare:.5,wave:2,warm:0,knots:.3,jitter:.02,roughness:.7,normal:3.4,vgroove:!0}};function mu(i,{scale:t=1,flat:e=!1}={}){let n=new Map,s=Math.min(8,i.capabilities.getMaxAnisotropy()),r=t,a=0,o=0,l=(P,b=P)=>{let U=document.createElement("canvas");U.width=Math.max(1,Math.round(P*r)),U.height=Math.max(1,Math.round(b*r));let w=U.getContext("2d");if(!w)throw new Error("2D canvas unavailable");return r!==1&&w.scale(r,r),U},c=P=>{P.width=P.height=0},h=(P,b)=>{let U=L_(P,b*r);return c(P),U},u=(P,b=!0,U=!0)=>{let w=new Es(P);return b&&(w.colorSpace=en),w.anisotropy=s,U&&(w.wrapS=w.wrapT=$s),w.onUpdate=()=>{w.onUpdate=null,c(P)},w},d=P=>{if(!P)return{map:null,normalMap:null,roughness:.8,size:[1,1]};let b=new co(new Uint8Array([...li(P),255]),1,1);return b.colorSpace=en,b.needsUpdate=!0,b.userData.hex=P,{map:b,normalMap:null,roughness:.8,size:[1,1]}},m=(P,b,U)=>{let w=n.get(P);if(!w){let N;if(e)N=d(b);else try{N=U()}catch(k){o++,console.warn("Texture drawn flat:",P,k),N=d(b)}w={value:N,used:a},n.set(P,w)}return w.used=a,w.value},g=P=>{for(let b of[P.map,P.normalMap])b==null||b.dispose()},y=(P,b,U)=>{for(let w of[P.map,P.normalMap].filter(Boolean))w.repeat.set(1/b,1/U);return{...P,size:[b,U]}};function p(P,b,U,{painted:w=!1}={}){let N=w&&P==="pine"?"painted":P;return m(`clad:${N}:${b}:${U}`,b,()=>{let k=D_[N],V=k.widths||Array(k.count).fill(k.board+(k.gap||0)),K=V.reduce((At,I)=>At+I,0),it=le,tt=le,ut=it/K,q=l(it),et=l(it),dt=q.getContext("2d"),mt=et.getContext("2d");if(U)for(let At of[dt,mt])At.translate(it,0),At.rotate(Math.PI/2);let _t=li(b),pt=bn(ai(N+b));mt.fillStyle="#000",mt.fillRect(0,0,it,tt);let Bt=0;for(let At=0;At<V.length;At++){let I=Bt*ut,xt=I+(V[At]-(k.gap||0))*ut;Bt+=V[At];let ft=1+(pt()-.5)*2*k.jitter,gt=_t.map(Ct=>Ct*ft);dt.fillStyle=Te(_t,ft,k.warm*(pt()-.5)),dt.fillRect(I,0,xt-I,tt),pr(dt,I,xt,tt,pt,gt,k),k.knots&&pt()<k.knots&&I_(dt,mt,I+(xt-I)*(.25+pt()*.5),pt()*tt,tt,pt,gt,4+pt()*6);let j=Math.max(1,k.bevel*ut),Rt=mt.createLinearGradient(I,0,xt,0);if(Rt.addColorStop(0,"#5a5a5a"),Rt.addColorStop(j/(xt-I),"#f0f0f0"),Rt.addColorStop(1-j/(xt-I),"#f0f0f0"),Rt.addColorStop(1,"#5a5a5a"),mt.fillStyle=Rt,mt.fillRect(I,0,xt-I,tt),k.shiplap||k.lap){let Ct=mt.createLinearGradient(I,0,xt,0);Ct.addColorStop(0,k.lap?"rgba(0,0,0,.75)":"rgba(0,0,0,.3)"),Ct.addColorStop(k.lap?1:.5,"rgba(0,0,0,0)"),mt.fillStyle=Ct,mt.fillRect(I,0,xt-I,tt),dt.fillStyle=k.lap?"rgba(0,0,0,.16)":"rgba(0,0,0,.07)",dt.fillRect(I,0,(xt-I)*(k.lap?.12:.2),tt),k.lap&&(dt.fillStyle="rgba(255,255,255,.06)",dt.fillRect(xt-(xt-I)*.25,0,(xt-I)*.25,tt))}if(k.vgroove&&(dt.fillStyle="rgba(0,0,0,.12)",dt.fillRect(I,0,2,tt),dt.fillStyle="rgba(255,255,255,.18)",dt.fillRect(xt-3,0,2,tt)),k.alternate&&At%2&&(dt.fillStyle="rgba(0,0,0,.14)",dt.fillRect(I,0,xt-I,tt),mt.fillStyle="rgba(0,0,0,.35)",mt.fillRect(I,0,xt-I,tt)),k.weathered)for(let Ct=0;Ct<6;Ct++)dt.fillStyle=`rgba(${pt()<.5?"200,200,205":"90,70,50"},${.05+pt()*.07})`,dt.fillRect(I+pt()*(xt-I)*.8,0,(xt-I)*(.1+pt()*.3),tt);let Dt=Math.max(1.5,(k.groove||0)*ut);if(k.gap){let Ct=xt,$t=k.gap*ut;dt.fillStyle=Te(_t,.38),dt.fillRect(Ct,0,$t,tt),dt.fillStyle="rgba(0,0,0,.35)",dt.fillRect(Ct,0,$t*.3,tt),mt.fillStyle="#101010",mt.fillRect(Ct,0,$t,tt)}else dt.fillStyle=Te(_t,.45),dt.fillRect(xt-Dt,0,Dt,tt),mt.fillStyle="#000",mt.fillRect(xt-Dt,0,Dt,tt)}if(k.emboss||k.brush){mt.globalAlpha=k.emboss||.16;for(let At=0;At<(k.brush||520);At++){let I=pt()*it,xt=pt()*tt,ft=40+pt()*160;mt.strokeStyle=pt()<.5?"#000":"#fff",mt.lineWidth=.8+pt(),mt.beginPath(),mt.moveTo(I,xt),mt.lineTo(I+(pt()-.5)*3,xt+ft),mt.stroke()}mt.globalAlpha=1}return rn(q,N==="natural"||N==="painted"?6:10,ai(b)),y({map:u(q),normalMap:u(h(et,k.normal),!1),roughness:k.roughness},K,K)})}function f(P,b){return m(`metal:${P}:${b}`,P,()=>{let K=l(512),it=l(512),tt=K.getContext("2d"),ut=it.getContext("2d");if(b)for(let et of[tt,ut])et.translate(512,0),et.rotate(Math.PI/2);let q=li(P);tt.fillStyle=Te(q,1),tt.fillRect(0,0,512,512),ut.fillStyle="#303030",ut.fillRect(0,0,512,512);for(let et=0;et<5;et++){let dt=et*.2*512,mt=.02*512,_t=.012*512,pt=.044*512;tt.fillStyle=Te(q,1.18),tt.fillRect(dt,0,_t,512),tt.fillStyle=Te(q,1.06),tt.fillRect(dt+_t,0,mt,512),tt.fillStyle=Te(q,.72),tt.fillRect(dt+_t+mt,0,_t,512);let Bt=ut.createLinearGradient(dt,0,dt+pt,0);Bt.addColorStop(0,"#303030"),Bt.addColorStop(.3,"#f0f0f0"),Bt.addColorStop(.7,"#f0f0f0"),Bt.addColorStop(1,"#303030"),ut.fillStyle=Bt,ut.fillRect(dt,0,pt,512);for(let At of[.45,.7])tt.fillStyle=Te(q,.9),tt.fillRect(dt+At*.2*512,0,2,512),ut.fillStyle="#505050",ut.fillRect(dt+At*.2*512,0,2,512)}return rn(K,5,ai("metal"+P)),y({map:u(K),normalMap:u(h(it,2.6),!1),roughness:.42},1,1)})}function v(P,b){return m(`floor:${P}:${b}`,b,()=>{let U=li(b),w=bn(ai(b)),N=l(le),k=l(le),V=N.getContext("2d"),K=k.getContext("2d");if(P==="carpet"||P==="rubber"){V.fillStyle=Te(U,1),V.fillRect(0,0,le,le);for(let _t=0;_t<26e3;_t++)V.fillStyle=Te(U,.82+w()*.36),V.fillRect(w()*le,w()*le,1.4,1.4);return K.fillStyle="#808080",K.fillRect(0,0,le,le),rn(k,60,9),y({map:u(N),normalMap:u(h(k,1.2),!1),roughness:1},.5,.5)}let it=6,tt=.19,ut=1.28,q=ut,et=tt*it,dt=le/q,mt=le/et;K.fillStyle="#000",K.fillRect(0,0,le,le);for(let _t=0;_t<it;_t++){let pt=_t*.37%1*ut;for(let Bt=-1;Bt<2;Bt++){let At=(pt+Bt*ut)*dt,I=_t*tt*mt,xt=ut*dt,ft=tt*mt,gt=1+(w()-.5)*.16;V.save(),V.beginPath(),V.rect(At,I,xt,ft),V.clip(),V.fillStyle=Te(U,gt),V.fillRect(At,I,xt,ft),V.translate(At,I+ft),V.rotate(-Math.PI/2),pr(V,0,ft,xt,w,U.map(j=>j*gt),{lines:22,contrast:.28,darkShare:.7,wave:4,warm:3}),V.restore(),K.fillStyle="#e8e8e8",K.fillRect(At+2,I+2,xt-4,ft-4),V.fillStyle=Te(U,.55),V.fillRect(At,I,xt,1.2),V.fillRect(At,I,1.2,ft)}}return rn(N,8,5),y({map:u(N),normalMap:u(h(k,1.6),!1),roughness:P==="plank"?.5:.55},q,et)})}function x(P){return m(`deck:${P}`,P,()=>{let b=li(P),U=bn(ai("deck"+P)),w=.14,N=.006,k=6,V=(w+N)*k,K=1.8,it=l(le),tt=l(le),ut=it.getContext("2d"),q=tt.getContext("2d"),et=le/V,dt=le/K;ut.fillStyle=Te(b,.25),ut.fillRect(0,0,le,le),q.fillStyle="#000",q.fillRect(0,0,le,le);for(let mt=0;mt<k;mt++){let _t=mt*(w+N)*et,pt=_t+w*et,Bt=1+(U()-.5)*.22;ut.fillStyle=Te(b,Bt),ut.fillRect(_t,0,pt-_t,le),pr(ut,_t,pt,le,U,b.map(I=>I*Bt),{lines:24,contrast:.3,darkShare:.7,wave:3,warm:4}),q.fillStyle="#d0d0d0",q.fillRect(_t,0,pt-_t,le);for(let I=1;I<7;I++)q.fillStyle="#9a9a9a",q.fillRect(_t+(pt-_t)*I/7-1,0,2,le);let At=mt*.43%1*le;ut.fillStyle=Te(b,.3),ut.fillRect(_t,At,pt-_t,3),q.fillStyle="#000",q.fillRect(_t,At,pt-_t,3)}return rn(it,10,77),y({map:u(it),normalMap:u(h(tt,2.5),!1),roughness:.74},V,K)})}function T(P){return m(`roof:${P}`,"#2d2f30",()=>{let b=bn(ai(P)),U=l(512),w=l(512),N=U.getContext("2d"),k=w.getContext("2d");if(P==="shingles"){N.fillStyle="#232527",N.fillRect(0,0,512,512),k.fillStyle="#000",k.fillRect(0,0,512,512);let V=6,K=3,it=512/V,tt=512/K;for(let ut=0;ut<V;ut++){let q=ut%2*tt/2;for(let et=-1;et<=K;et++){let dt=q+et*tt,mt=.85+b()*.3;N.fillStyle=`rgb(${38*mt},${40*mt},${43*mt})`,N.fillRect(dt+2,ut*it,tt-4,it-3);let _t=k.createLinearGradient(0,ut*it,0,ut*it+it);_t.addColorStop(0,"#606060"),_t.addColorStop(1,"#f0f0f0"),k.fillStyle=_t,k.fillRect(dt+2,ut*it,tt-4,it-3)}}return rn(U,26,41),y({map:u(U),normalMap:u(h(w,3),!1),roughness:.92},1,.84)}N.fillStyle="#2d2f30",N.fillRect(0,0,512,512);for(let V=0;V<6e3;V++)N.fillStyle=`rgba(${b()<.5?"0,0,0":"90,92,94"},.18)`,N.fillRect(b()*512,b()*512,2,2);return k.fillStyle="#808080",k.fillRect(0,0,512,512),rn(w,30,3),y({map:u(U),normalMap:u(h(w,1),!1),roughness:.88},1.2,1.2)})}function W(P){return m(`int:${P.panels}:${P.wall}:${P.beading}`,P.wall,()=>{let b=l(512,1024),U=l(512,1024),w=b.getContext("2d"),N=U.getContext("2d"),k=1.22,V=2.44,K=512/k,it=1024/V;w.fillStyle=P.wall,w.fillRect(0,0,512,1024),N.fillStyle="#808080",N.fillRect(0,0,512,1024);let tt=(ut,q,et,dt,mt)=>{w.fillStyle=mt,w.fillRect(ut,q,et,dt),w.fillStyle="rgba(0,0,0,.08)",w.fillRect(ut+et,q,2,dt),N.fillStyle="#f4f4f4",N.fillRect(ut,q,et,dt)};if(P.panels==="beaded"&&tt(0,0,.045*K,1024,P.beading),P.panels==="slatted"){w.fillStyle="#26282a",w.fillRect(0,0,512,1024);let et=li(P.wall),dt=bn(ai(P.wall));for(let mt=0;mt<20;mt++){let _t=1+(dt()-.5)*.12;w.fillStyle=Te(et,_t),w.fillRect(mt*25.6+2,0,25.6-6,1024),pr(w,mt*25.6+2,mt*25.6+25.6-4,1024,dt,et.map(pt=>pt*_t),{lines:6,contrast:.2,darkShare:.6,wave:2,warm:4}),N.fillStyle="#e8e8e8",N.fillRect(mt*25.6+2,0,25.6-6,1024)}N.fillStyle="#202020";for(let mt=0;mt<20;mt++)N.fillRect(mt*25.6+25.6-4,0,6,1024)}if(P.panels==="plywood"){let ut=li(P.wall),q=bn(5);pr(w,0,512,1024,q,ut,{lines:70,contrast:.18,darkShare:.5,wave:14,warm:6}),w.fillStyle="rgba(0,0,0,.25)",w.fillRect(0,0,2,1024),w.fillRect(0,0,512,2),N.fillStyle="#000",N.fillRect(0,0,2,1024),N.fillRect(0,0,512,2)}if(P.panels==="wrapped"&&(w.fillStyle="rgba(0,0,0,.07)",w.fillRect(0,0,3,1024),N.fillStyle="#202020",N.fillRect(0,0,3,1024)),P.panels==="boards"&&(w.fillStyle="rgba(0,0,0,.09)",w.fillRect(0,0,3,1024),w.fillRect(0,0,512,3),N.fillStyle="#000",N.fillRect(0,0,3,1024),N.fillRect(0,0,512,3)),P.panels==="membrane"){let ut=bn(31);for(let q=0;q<9e3;q++)w.fillStyle=ut()<.5?"rgba(0,0,0,.06)":"rgba(255,255,255,.07)",w.fillRect(ut()*512,ut()*1024,2,1);w.fillStyle="#c9c9c4",w.fillRect(0,0,512,.05*it),w.fillRect(0,1024-.05*it,512,.05*it);for(let q of[0,256])w.fillStyle="rgba(0,0,0,.18)",w.fillRect(q,0,2,1024),N.fillStyle="#5a5a5a",N.fillRect(q,0,2,1024);for(let q=20;q<1024;q+=70)for(let et of[6,250,262,506])w.fillStyle="#8e9090",w.fillRect(et,q,4,2);rn(U,18,7)}return rn(b,3,11),y({map:u(b),normalMap:u(h(U,2),!1),roughness:.82},k,V)})}function H(){return m("lawn","#6a8649",()=>{let P=bn(17),b=l(le),U=b.getContext("2d");U.fillStyle="#6a8649",U.fillRect(0,0,le,le);for(let N=0;N<2;N++)U.fillStyle=N%2?"rgba(255,255,230,.025)":"rgba(20,40,0,.025)",U.fillRect(0,N*le/2,le,le/2);for(let N=0;N<9e4;N++){let k=P();U.fillStyle=k<.45?"rgba(46,72,30,.55)":k<.85?"rgba(125,152,86,.5)":"rgba(170,180,110,.45)";let V=P()*le,K=P()*le;U.fillRect(V,K,1.3,2.6+P()*3)}let w=l(512);return w.getContext("2d").fillStyle="#808080",w.getContext("2d").fillRect(0,0,512,512),rn(w,90,21),y({map:u(b),normalMap:u(h(w,1.4),!1),roughness:.95},3,3)})}function R(){return m("paving","#c8c4ba",()=>{let P=bn(5),b=l(512),U=l(512),w=b.getContext("2d"),N=U.getContext("2d");w.fillStyle="#b9ab90",w.fillRect(0,0,512,512),N.fillStyle="#000",N.fillRect(0,0,512,512);let k=2,V=512/k;for(let K=0;K<k;K++)for(let it=0;it<k;it++){let tt=.9+P()*.18;w.fillStyle=`rgb(${224*tt},${210*tt},${184*tt})`,w.fillRect(K*V+3,it*V+3,V-6,V-6),N.fillStyle="#d8d8d8",N.fillRect(K*V+3,it*V+3,V-6,V-6)}return rn(b,22,8),rn(U,40,9),y({map:u(b),normalMap:u(h(U,2),!1),roughness:.9},1.2,1.2)})}function Z(){return m("gravel","#a49d90",()=>{let P=bn(23),b=l(512),U=l(512),w=b.getContext("2d"),N=U.getContext("2d");w.fillStyle="#a49d90",w.fillRect(0,0,512,512),N.fillStyle="#202020",N.fillRect(0,0,512,512);for(let k=0;k<9e3;k++){let V=P()*512,K=P()*512,it=1.5+P()*3.5,tt=.7+P()*.5;w.fillStyle=`rgb(${190*tt},${182*tt},${168*tt})`,w.beginPath(),w.ellipse(V,K,it,it*.8,P()*3,0,6.283),w.fill(),N.fillStyle=`rgb(${200*tt},${200*tt},${200*tt})`,N.beginPath(),N.ellipse(V,K,it,it*.8,0,0,6.283),N.fill()}return y({map:u(b),normalMap:u(h(U,2.2),!1),roughness:1},.8,.8)})}function st(){return m("powder",null,()=>{let P=l(256);P.getContext("2d").fillStyle="#808080",P.getContext("2d").fillRect(0,0,256,256),rn(P,26,4);let b=u(h(P,.8),!1);return b.repeat.set(4,4),{normalMap:b}})}function M(P){return m(`shingles:${P}`,P,()=>{let b=bn(ai("sh"+P)),U=li(P),w=512,N=l(w),k=l(w),V=N.getContext("2d"),K=k.getContext("2d");V.fillStyle=Te(U,.5),V.fillRect(0,0,w,w),K.fillStyle="#000",K.fillRect(0,0,w,w);let it=4,tt=3,ut=w/it,q=w/tt;for(let et=0;et<it;et++){let dt=et%2*q/2;for(let mt=-1;mt<=tt;mt++){let _t=dt+mt*q,pt=.82+b()*.32;V.fillStyle=Te(U,pt),V.fillRect(_t+2,et*ut,q-4,ut-4);for(let At=0;At<260;At++)V.fillStyle=`rgba(${b()<.5?"0,0,0":"255,255,255"},${.05+b()*.08})`,V.fillRect(_t+2+b()*(q-6),et*ut+b()*(ut-6),2,2);let Bt=K.createLinearGradient(0,et*ut,0,et*ut+ut);Bt.addColorStop(0,"#505050"),Bt.addColorStop(1,"#f2f2f2"),K.fillStyle=Bt,K.fillRect(_t+2,et*ut,q-4,ut-4)}V.fillStyle="rgba(0,0,0,.45)",V.fillRect(0,et*ut+ut-4,w,4)}return rn(N,20,ai(P)),y({map:u(N),normalMap:u(h(k,3.2),!1),roughness:.92},1,.572)})}function D(P,b){return m(`tiles:${P}:${b}`,P,()=>{let U=li(P),w=512,N=l(w),k=l(w),V=N.getContext("2d"),K=k.getContext("2d"),it=3,tt=w/it,ut=6,q=w/ut;for(let et=0;et<it;et++){let dt=et*tt,mt=K.createLinearGradient(0,dt,0,dt+tt);mt.addColorStop(0,"#404040"),mt.addColorStop(.85,"#e8e8e8"),mt.addColorStop(1,"#202020"),K.fillStyle=mt,K.fillRect(0,dt,w,tt);let _t=V.createLinearGradient(0,dt,0,dt+tt);if(_t.addColorStop(0,Te(U,.78)),_t.addColorStop(.85,Te(U,1.12)),_t.addColorStop(1,Te(U,.55)),V.fillStyle=_t,V.fillRect(0,dt,w,tt),b==="classic")for(let pt=0;pt<ut;pt++){let Bt=V.createLinearGradient(pt*q,0,pt*q+q,0);Bt.addColorStop(0,"rgba(0,0,0,.28)"),Bt.addColorStop(.5,"rgba(255,255,255,.12)"),Bt.addColorStop(1,"rgba(0,0,0,.28)"),V.fillStyle=Bt,V.fillRect(pt*q,dt,q,tt);let At=K.createLinearGradient(pt*q,0,pt*q+q,0);At.addColorStop(0,"rgba(0,0,0,.5)"),At.addColorStop(.5,"rgba(255,255,255,.4)"),At.addColorStop(1,"rgba(0,0,0,.5)"),K.fillStyle=At,K.fillRect(pt*q,dt,q,tt)}}return rn(N,4,12),y({map:u(N),normalMap:u(h(k,3),!1),roughness:.38},1.11,1.05)})}function Q(){return m("foil","#c9ccce",()=>{let b=l(512),U=b.getContext("2d"),w=l(512),N=w.getContext("2d"),k=bn(44);U.fillStyle="#c9ccce",U.fillRect(0,0,512,512);for(let V=0;V<4e3;V++)U.fillStyle=`rgba(${k()<.5?"255,255,255":"90,95,100"},${.08+k()*.1})`,U.fillRect(k()*512,k()*512,3+k()*9,1);U.fillStyle="#7b8a96",U.font="22px sans-serif";for(let V=40;V<512;V+=120)for(let K=20;K<512;K+=230)U.fillText("PIR 0.022",K+V/120%2*80,V);return U.fillStyle="rgba(0,0,0,.35)",U.fillRect(0,0,512,3),U.fillRect(0,0,3,512),N.fillStyle="#909090",N.fillRect(0,0,512,512),rn(w,16,3),N.fillStyle="#000",N.fillRect(0,0,512,3),N.fillRect(0,0,3,512),y({map:u(b),normalMap:u(h(w,1.2),!1),roughness:.35},1.2,1.2)})}return{cladding:p,metal:f,floor:v,deck:x,roof:T,interior:W,lawn:H,paving:R,gravel:Z,powder:st,shingles:M,tiles:D,foil:Q,begin(){a++},prune(P){let b=[...n].filter(([U,w])=>w.used<a&&U!=="lawn").sort((U,w)=>U[1].used-w[1].used);for(let[U,w]of b){if(n.size<=P)break;g(w.value),n.delete(U)}},stats:()=>({textures:n.size,failures:o,scale:r}),dispose(){for(let P of n.values())g(P.value);n.clear()}}}var gu="http://www.w3.org/2000/svg",Hl=.12,Go=class{constructor(){this.domElement=document.createElementNS(gu,"svg"),this.domElement.setAttribute("class","scene-svg"),this.domElement.setAttribute("preserveAspectRatio","none"),this.info={faces:0,paths:0,ms:0},this.shadowMap={enabled:!1,type:0},this.capabilities={getMaxAnisotropy:()=>1,isWebGL2:!1},this.extensions={has:()=>!1},this.toneMappingExposure=1,this._pool=[],this._w=1,this._h=1}setPixelRatio(){}getPixelRatio(){return 1}setSize(t,e){this._w=Math.max(1,t),this._h=Math.max(1,e),this.domElement.setAttribute("viewBox",`${-this._w/2} ${-this._h/2} ${this._w} ${this._h}`)}getSize(t){return t.set(this._w,this._h)}getContext(){return{isContextLost:()=>!1}}dispose(){this._pool.length=0,this.domElement.replaceChildren()}forceContextLoss(){}render(t,e){let n=performance.now();t.updateMatrixWorld(),e.parent||e.updateMatrixWorld();let s=t.background;s&&s.isColor&&(this.domElement.style.backgroundColor=s.getStyle());let r=new be().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),a=new L().setFromMatrixPosition(e.matrixWorld),o=this._w/2,l=this._h/2,c=new Kt(0,0,0),h=[];t.traverseVisible(Q=>{if(Q.isLight){if(Q.isAmbientLight)c.add(Q.color.clone().multiplyScalar(Q.intensity));else if(Q.isHemisphereLight)c.add(Q.color.clone().lerp(Q.groundColor,.5).multiplyScalar(Q.intensity*.5));else if(Q.isDirectionalLight){let P=new L().setFromMatrixPosition(Q.matrixWorld).sub(new L().setFromMatrixPosition(Q.target.matrixWorld)).normalize();h.push({dir:P,colour:Q.color.clone().multiplyScalar(Q.intensity)})}}});let u=[],d=new L,m=new L,g=new L,y=new L,p=new L,f=new L,v=new ue,x=new ue,T=new ue,W=new Kt,H=new Kt;t.traverseVisible(Q=>{var k,V;if(!Q.isMesh||!((k=Q.geometry)!=null&&k.attributes.position))return;let P=[].concat(Q.material),b=Q.geometry.attributes.position,U=Q.geometry.index,w=Q.geometry.groups.length?Q.geometry.groups:[{start:0,count:U?U.count:b.count,materialIndex:0}],N=!!Q.userData.ground;for(let K of w){let it=P[K.materialIndex]||P[0];if(!it||!it.visible||it.colorWrite===!1||it.opacity<.03||it.name==="hidden")continue;let tt=it.side!==0,ut=it.side===1,q=Math.min(K.start+K.count,U?U.count:b.count);for(let et=K.start;et+2<q;et+=3){let dt=U?U.getX(et):et,mt=U?U.getX(et+1):et+1,_t=U?U.getX(et+2):et+2;if(d.fromBufferAttribute(b,dt).applyMatrix4(Q.matrixWorld),m.fromBufferAttribute(b,mt).applyMatrix4(Q.matrixWorld),g.fromBufferAttribute(b,_t).applyMatrix4(Q.matrixWorld),y.crossVectors(p.subVectors(m,d),f.subVectors(g,d)),y.lengthSq()<1e-12)continue;y.normalize();let pt=y.dot(p.subVectors(a,d));if(ut&&(y.negate(),pt=-pt),pt<=0){if(!tt)continue;y.negate()}v.set(d.x,d.y,d.z,1).applyMatrix4(r),x.set(m.x,m.y,m.z,1).applyMatrix4(r),T.set(g.x,g.y,g.z,1).applyMatrix4(r);let Bt=U_([v.clone(),x.clone(),T.clone()]);if(Bt.length<3)continue;let At="",I=1/0,xt=-1/0,ft=1/0,gt=-1/0,j=0;for(let Dt=0;Dt<Bt.length;Dt++){let Ct=Bt[Dt],$t=Ct.x/Ct.w*o,C=-Ct.y/Ct.w*l;At+=(Dt?"L":"M")+$t.toFixed(1)+","+C.toFixed(1),I=Math.min(I,$t),xt=Math.max(xt,$t),ft=Math.min(ft,C),gt=Math.max(gt,C),j+=Ct.w}if(xt<-o||I>o||gt<-l||ft>l||(xt-I)*(gt-ft)<.5)continue;W.copy(c);for(let Dt of h){let Ct=Math.round(y.dot(Dt.dir)*12)/12;Ct>0&&W.add(H.copy(Dt.colour).multiplyScalar(Ct))}W.multiply(it.color),it.emissive&&W.add(it.emissive.clone().multiplyScalar((V=it.emissiveIntensity)!=null?V:1));let Rt=it.transparent?it.opacity:1;u.push({depth:j/Bt.length,ground:N,d:At+"z",fill:"#"+W.getHexString(),opacity:Rt})}}}),u.sort((Q,P)=>P.ground-Q.ground||P.depth-Q.depth);let R=0,Z="",st=1,M="",D=()=>{if(!M)return;let Q=this._pool[R];Q||(Q=this._pool[R]=document.createElementNS(gu,"path"),Q.setAttribute("stroke-linejoin","round")),Q.setAttribute("d",M),Q.setAttribute("fill",Z),st<1?(Q.setAttribute("fill-opacity",st.toFixed(2)),Q.setAttribute("stroke","none")):(Q.removeAttribute("fill-opacity"),Q.setAttribute("stroke",Z),Q.setAttribute("stroke-width",".7")),(Q.parentNode!==this.domElement||this.domElement.childNodes[R]!==Q)&&this.domElement.appendChild(Q),R++,M=""};for(let Q of u)(Q.fill!==Z||Q.opacity!==st)&&(D(),Z=Q.fill,st=Q.opacity),M+=Q.d;for(D();this.domElement.childNodes.length>R;)this.domElement.lastChild.remove();this.info={faces:u.length,paths:R,ms:Math.round(performance.now()-n)}}};function U_(i){let t=[];for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length],r=n.w>Hl,a=s.w>Hl;if(r&&t.push(n),r!==a){let o=(Hl-n.w)/(s.w-n.w);t.push(new ue().lerpVectors(n,s,o))}}return t}var N_="#ff8a3d",O_=i=>1-Math.pow(1-i,3),Vl={high:{ratio:2,textures:1,shadow:2048,softShadows:!0,antialias:!0,capture:2e3,cache:40},medium:{ratio:1.5,textures:.5,shadow:1024,softShadows:!0,antialias:!0,capture:1600,cache:18},low:{ratio:1.25,textures:.5,shadow:1024,softShadows:!1,antialias:!0,capture:1400,cache:14},safe:{ratio:1,textures:.5,shadow:0,softShadows:!1,antialias:!1,capture:1400,cache:14,simple:!0},svg:{ratio:1,textures:.5,shadow:0,softShadows:!1,antialias:!1,capture:0,cache:40}};function Wx(i,t={}){let e=Vl[t.tier]?t.tier:"high",n=Vl[e],s;if(e==="svg")s=new Go;else{let a=document.createElement("canvas");try{s=new Ks({canvas:a,antialias:n.antialias,preserveDrawingBuffer:!1,powerPreference:e==="high"?"high-performance":"default"})}catch(o){throw F_(a),_u(o,"context")}}let r=[];try{return z_(i,s,{...t,tier:e},r)}catch(a){for(let o of r.reverse())try{o()}catch(l){}try{s.dispose()}catch(o){}if(s.isWebGLRenderer)try{s.forceContextLoss()}catch(o){}throw s.domElement.remove(),i.querySelectorAll(".scene-overlay").forEach(o=>o.remove()),_u(a,"setup")}}function _u(i,t){let e=i instanceof Error?i:new Error(String(i));return e.stage=e.stage||t,e}function F_(i){var t;for(let e of["webgl2","webgl"])try{let n=i.getContext(e);if(n){(t=n.getExtension("WEBGL_lose_context"))==null||t.loseContext();return}}catch(n){}}function z_(i,t,{onLost:e=()=>{},onBroken:n=()=>{},onVerified:s=()=>{},onPick:r=()=>{},onViewChange:a=()=>{},tier:o},l){let c=Vl[o],h=o==="svg",u=!!c.simple,d=matchMedia("(prefers-reduced-motion: reduce)"),m=Math.min(window.devicePixelRatio||1,c.ratio);t.setPixelRatio(m),t.outputColorSpace=en,t.toneMapping=wl,t.toneMappingExposure=.98,t.shadowMap.enabled=!h&&!u,t.shadowMap.type=c.softShadows?bl:wo;let g=null,y=!1,p=[];h||(t.debug.onShaderError=(A,F,O,$)=>{let _=[A.getProgramInfoLog(F),A.getShaderInfoLog(O),A.getShaderInfoLog($)].filter(Boolean).join(" | ").replace(/\s+/g," ").slice(0,300);p.push(_||"link failed, no log"),console.warn("A 3D shader failed to link on this GPU:",_),g||(g="shader",y&&setTimeout(()=>{!K&&!kt&&n("shader")}))}),t.domElement.setAttribute("role","img"),t.domElement.setAttribute("aria-label","Interactive 3D preview of your Coastal Garden Buildings design. Drag to look around, scroll or pinch to zoom."),i.appendChild(t.domElement);let f=document.createElementNS("http://www.w3.org/2000/svg","svg");f.setAttribute("class","scene-overlay"),f.setAttribute("aria-hidden","true"),i.appendChild(f);let v=new ws,x=mu(t,{scale:c.textures,flat:h});l.push(()=>x.dispose());let T=null;if(!h&&!u){let A=new Ss(t);T=A.fromScene(new Do,.04).texture,A.dispose()}v.environment=T;let W="environmentIntensity"in v;function H(A){v.environmentIntensity=A,!W&&v.traverse(F=>{for(let O of F.material?[].concat(F.material):[])"envMapIntensity"in O&&(O.userData.envBase===void 0&&(O.userData.envBase=O.envMapIntensity),O.envMapIntensity=O.userData.envBase*A)})}H(.55);let R=(A,F,O)=>{let $=document.createElement("canvas");$.width=4,$.height=512;let _=$.getContext("2d"),E=_.createLinearGradient(0,0,0,512);E.addColorStop(0,A),E.addColorStop(.55,F),E.addColorStop(1,O),_.fillStyle=E,_.fillRect(0,0,4,512);let B=new Es($);return B.colorSpace=en,B},Z=h?new Kt("#d6e4ee"):R("#7fb0d8","#d7e6ee","#ece4d4"),st=h?new Kt("#2e3346"):R("#1b2340","#7a5a62","#3a3330");v.background=Z,v.fog=new lo("#ece4d4",18,52);let M=new Mo("#e6eef4","#6f7f56",1.05);v.add(M);let D=new ar("#fff3df",2.9);D.position.set(-7,10,9),D.castShadow=!0,D.shadow.mapSize.set(c.shadow||1,c.shadow||1),D.shadow.bias=-2e-4,D.shadow.normalBias=.02,D.shadow.radius=3,v.add(D,D.target);let Q=new ar("#d9e6f2",.55);Q.position.set(8,5,-6),v.add(Q);let P=new hn;v.add(P);let b=x.lawn(),U=new re(new mo(60,64),new $e({map:b.map,normalMap:b.normalMap,roughness:.95,color:"#ffffff"}));U.rotation.x=-Math.PI/2,U.receiveShadow=!0,U.userData.ground=!0,U.geometry.attributes.uv.array.forEach((A,F,O)=>{O[F]=(A-.5)*120}),P.add(U);let w=new He(35,1,.05,220),N=new Io(w,t.domElement);l.push(()=>N.dispose()),N.enableDamping=!d.matches&&!h,N.dampingFactor=.09,N.rotateSpeed=.6,N.zoomSpeed=.8,N.enablePan=!1;let k=null,V=null,K=!1,it=0,tt=!1,ut="outside",q=null,et=null,dt=[],mt=[],_t=null,pt={w:1,h:1};function Bt(A){A.traverse(F=>{F.geometry&&F.geometry.dispose()})}function At(A,F){var Pn;_t&&(P.remove(_t),Bt(_t),(Pn=_t.userData.mats)==null||Pn.forEach(jt=>jt.dispose()));let O=new hn;_t=O,P.add(O);let $=[],_=(jt,Re="#ffffff",Ge=.9)=>{let Fe=new $e({color:Re,map:(jt==null?void 0:jt.map)||null,normalMap:(jt==null?void 0:jt.normalMap)||null,roughness:Ge});return $.push(Fe),Fe},{x0:E,x1:B,z0:G}=F,X=A.depth/2+Math.max(fr(A).front,0),nt=_(x.paving(),"#e9e6df",.75),at=Math.min(1.4,A.width*.5),St=2.6,vt=new re(new sn(at,St),nt);vt.rotation.x=-Math.PI/2,vt.position.set(0,.004,X+St/2+.05),vt.receiveShadow=!0,vt.userData.ground=!0;let Lt=vt.geometry.attributes.uv;for(let jt=0;jt<Lt.count;jt++)Lt.setXY(jt,Lt.getX(jt)*at,Lt.getY(jt)*St);O.add(vt);let Ut=_(x.gravel(),"#ffffff",1),Wt=B-E+.5,te=X-G+.4,Zt=new re(new sn(Wt,te),Ut);Zt.rotation.x=-Math.PI/2,Zt.position.set((E+B)/2,.002,(G+X)/2),Zt.receiveShadow=!0,Zt.userData.ground=!0;let Jt=Zt.geometry.attributes.uv;for(let jt=0;jt<Jt.count;jt++)Jt.setXY(jt,Jt.getX(jt)*Wt,Jt.getY(jt)*te);O.add(Zt);let he=(()=>{let jt=11;return()=>(jt=jt*16807%2147483647)/2147483647})(),ee=new $e({color:"#557a3e",roughness:.9});$.push(ee);let qt=new $e({color:"#6c8c45",roughness:.9});$.push(qt);let me=new $e({color:"#6e5a45",roughness:.95});$.push(me);let ne=(jt,Re,Ge,Fe=ee)=>{let ze=new hn;ze.position.set(jt,0,Re),O.add(ze);for(let xn=0;xn<6;xn++){let Be=new re(new ki(.26*Ge*(.7+he()*.5),1),Fe);Be.position.set((he()-.5)*.5*Ge,.22*Ge+he()*.3*Ge,(he()-.5)*.5*Ge),Be.castShadow=Be.receiveShadow=!0,ze.add(Be)}},Oe=(jt,Re,Ge)=>{let Fe=new re(new Ye(.08,.12,Ge*.55,10),me);Fe.position.set(jt,Ge*.275,Re),Fe.castShadow=!0,O.add(Fe);for(let ze=0;ze<7;ze++){let xn=new re(new ki(Ge*(.18+he()*.08),1),ze%2?ee:qt);xn.position.set(jt+(he()-.5)*Ge*.35,Ge*(.62+he()*.3),Re+(he()-.5)*Ge*.35),xn.castShadow=!0,O.add(xn)}};ne(E-.7,X-.2,.9),ne(B+.7,X-.5,.8,qt),ne(E-.9,G+.6,1.1,qt),Oe(B+2.4,G-.6,4.2),Oe(E-2.8,G-1.2,3.6);let gn=x.cladding("tng","#8a6a4e",!0),_n=_(gn,"#ffffff",.85),De=G-2.4,fe=B-E+12,ge=new re(new mn(fe,1.8,.05),_n),on=ge.geometry.attributes.uv;for(let jt=0;jt<on.count;jt++)on.setXY(jt,on.getX(jt)*fe,on.getY(jt)*1.8);ge.position.set((E+B)/2,.9,De),ge.castShadow=ge.receiveShadow=!0,ge.userData.hedge=!0,O.add(ge);let _e=new $e({color:"#4a4038",roughness:.9});$.push(_e);for(let jt=(E+B)/2-fe/2+.9;jt<(E+B)/2+fe/2;jt+=1.83){let Re=new re(new mn(.09,1.86,.09),_e);Re.position.set(jt,.93,De+.075),Re.castShadow=!0,Re.userData.hedge=!0,O.add(Re)}O.userData.hedgeZ=De,O.userData.mats=$}let I=new WeakMap;function xt(A,F){let O=$=>{if(!($!=null&&$.isMeshStandardMaterial))return $;let _=I.get($);return _||(_=new vo({color:$.color,map:$.map,emissive:$.emissive,emissiveIntensity:$.emissiveIntensity,transparent:$.transparent,opacity:$.opacity,side:$.side,depthWrite:$.depthWrite,visible:$.visible}),_.name=$.name,_.userData=$.userData,I.set($,_),F==null||F.push(_)),_};A.traverse($=>{$.isMesh&&($.material=Array.isArray($.material)?$.material.map(O):O($.material))})}function ft(){v.traverse(A=>{var F;for(let O of A.material?[].concat(A.material):[])O.userData.flatColour||!((F=O.map)!=null&&F.userData.hex)||(O.color.multiply(new Kt(O.map.userData.hex)),O.userData.flatColour=!0)})}function gt(A){var F;for(let O of mt)v.remove(O),(F=O.dispose)==null||F.call(O);if(mt=[],!!tt){for(let O of A.filter($=>$.kind==="interior").slice(0,4)){let $=new Gi("#ffd8a8",5,7,1.6);$.position.copy(O.position),v.add($),mt.push($)}for(let O of A.filter($=>$.kind!=="interior").slice(0,5))if(O.kind==="down"||O.kind==="updown"){let $=new or("#ffcf94",6,4.5,.75,.65,1.4);if($.position.copy(O.position),$.target.position.copy(O.position).add(new L(0,-2,.25)),v.add($,$.target),mt.push($,$.target),O.kind==="updown"){let _=new or("#ffcf94",3,2.2,.5,.7,1.4);_.position.copy(O.position),_.target.position.copy(O.position).add(new L(0,2,0)),v.add(_,_.target),mt.push(_,_.target)}}else{let $=new Gi("#ffc98a",2.5,4,1.8);$.position.copy(O.position),v.add($),mt.push($)}}}function j(){v.background=tt?st:Z,v.fog.color.set(tt?"#2f3534":"#e4eae2"),M.intensity=tt?.14:1.05,M.color.set(tt?"#5b6f96":"#e6eef4"),D.intensity=tt?.18:2.7,D.color.set(tt?"#9fb4ff":"#fff1dc"),Q.intensity=tt?.05:.55,H(tt?.07:.55),t.toneMappingExposure=tt?1.2:.98,h&&(M.intensity=tt?.35:1.25,D.intensity=tt?.08:.55,Q.intensity=tt?.02:.12),V==null||V.group.traverse(A=>{var F;A.isMesh&&((F=A.userData.tags)!=null&&F.includes("lamp"))&&(A.material.emissiveIntensity=tt?4:.35)}),gt((V==null?void 0:V.lights)||[])}function Rt(A){let F=Math.max(A.x1-A.x0,A.z1-A.z0)/2+2.5,O=D.shadow.camera;O.left=-F,O.right=F,O.top=F,O.bottom=-F,O.near=1,O.far=40,O.updateProjectionMatrix(),D.target.position.set((A.x0+A.x1)/2,0,(A.z0+A.z1)/2)}let Dt=()=>{let A=Ns(k);return new un(new L(A.x0-.2,0,A.z0-.25),new L(A.x1+.2,A.top+.05,A.z1+.1))};function Ct(A,F,O,$,_=1.1){let E=A.getCenter(new L),B=new L().crossVectors(new L(0,1,0),F).normalize();B.lengthSq()<.1&&B.set(1,0,0);let G=new L().crossVectors(F,B).normalize(),X=Math.tan(qn.degToRad(O/2)),nt=X*$,at=0;for(let St of[A.min.x,A.max.x])for(let vt of[A.min.y,A.max.y])for(let Lt of[A.min.z,A.max.z]){let Ut=new L(St,vt,Lt).sub(E),Wt=Ut.dot(F);at=Math.max(at,Wt+Math.abs(Ut.dot(B))/nt*_,Wt+Math.abs(Ut.dot(G))/X*_)}return at}function $t(A=null){let F=V.room,O=F.floor,$=k.openings.filter(X=>X.wall==="front"&&Ve[X.type].group==="door").sort((X,nt)=>Ve[nt.type].fw-Ve[X.type].fw)[0],_=$?$.p*k.width-k.width/2:0,E=qn.clamp(_,F.x0+.45,F.x1-.45),B=new L(E,O+1.5,Math.max(F.z0+.4,F.z1-.3)),G=A||new L(-E*.35,O+1,F.z0);return{pos:B,at:G}}function C(A,F={}){let O=pt.w/pt.h;if(A==="inside"){let{pos:X,at:nt}=$t(F.lookAt),at=nt.clone().sub(X).normalize();return{view:"inside",fov:O<.9?84:74,position:X,target:X.clone().addScaledVector(at,.02)}}if(A==="plan"){let X=Dt();X.max.y=1;let nt=X.getCenter(new L),at=Ct(X,new L(0,1,1e-4).normalize(),30,O,1.22);return{view:"plan",fov:30,position:new L(nt.x,at+1,nt.z+.001),target:new L(nt.x,0,nt.z)}}let $=(F.dir||new L(-.62,.32,1)).clone().normalize(),_=F.box||Dt(),E=_.getCenter(new L);F.box||(E.y=Math.min(E.y,1.25));let B=35,G=Math.max(F.minDistance||0,Ct(_,$,B,O,F.margin||(F.box?1.08:1.2)));return{view:"outside",fov:B,position:E.clone().addScaledVector($,G),target:E}}function S(A){if(N.enableRotate=A!=="plan",N.enablePan=A==="plan",N.screenSpacePanning=!0,N.enableZoom=A!=="inside",A==="outside"){N.minPolarAngle=.12,N.maxPolarAngle=1.5;let F=Ns(k);N.minDistance=2.2,N.maxDistance=Math.max(F.x1-F.x0,F.z1-F.z0)*3+14,N.rotateSpeed=.6,N.mouseButtons.LEFT=Wn.ROTATE}else A==="inside"?(N.minPolarAngle=.5,N.maxPolarAngle=2.4,N.minDistance=0,N.maxDistance=.05,N.rotateSpeed=-.35):(N.minDistance=2,N.maxDistance=90,N.mouseButtons.LEFT=Wn.PAN,N.touches.ONE=Xn.PAN);A!=="plan"&&(N.touches.ONE=Xn.ROTATE)}function lt(){if(!V)return;let A=ut==="plan";V.group.traverse(F=>{let O=F.userData.tags;!O||!F.isMesh||((O.includes("roof")||O.includes("ceiling")||O.includes("spots")||O.includes("fitout")&&O.includes("lamp")||O.includes("planHide"))&&(F.visible=!A),O.includes("planOnly")&&(F.visible=A))}),ye()}function rt(A,F=!0){let O=A.view!==ut;ut=A.view,S(ut),lt();let $={position:w.position.clone(),target:N.target.clone(),fov:w.fov};!F||d.matches||O&&(ut==="inside"||$.position.distanceTo(A.position)>70)?(w.position.copy(A.position),N.target.copy(A.target),w.fov=A.fov,w.updateProjectionMatrix(),q=null,N.update(),Pt()):(q={start:performance.now(),duration:O?700:650,from:$,to:A},Pt()),O&&a(ut)}function Mt(A){if(!q)return!1;let F=Math.min(1,(A-q.start)/q.duration),O=O_(F),$=q.from.target.clone().lerp(q.to.target,O),_=new oi().setFromVector3(q.from.position.clone().sub(q.from.target)),E=new oi().setFromVector3(q.to.position.clone().sub(q.to.target)),B=E.theta-_.theta;B>Math.PI&&(B-=2*Math.PI),B<-Math.PI&&(B+=2*Math.PI);let G=new oi(_.radius+(E.radius-_.radius)*O,_.phi+(E.phi-_.phi)*O,_.theta+B*O);return w.position.copy($).add(new L().setFromSpherical(G)),N.target.copy($),w.fov=q.from.fov+(q.to.fov-q.from.fov)*O,w.updateProjectionMatrix(),F===1&&(q=null),!0}let bt=new hn;bt.name="highlight",v.add(bt);let Vt=h?null:new Is({color:N_,linewidth:3.2,transparent:!0,opacity:0,depthTest:!0,depthWrite:!1});Vt&&(Vt.resolution.set(1,1),l.push(()=>Vt.dispose()));let Gt=null;function Tt(A){let F=[];return V==null||V.group.traverse(O=>{O.isMesh&&O.visible&&O.userData.tags&&A.some($=>O.userData.tags.includes($))&&!O.userData.tags.includes("glass")&&!O.userData.ground&&F.push(O)}),F}function Ot(A){let F=new un;for(let O of A)F.expandByObject(O);return F}function Yt(A){if(bt.clear(),Gt==null||Gt.dispose(),Gt=null,!Vt||!A.length)return;let F=[],O=new L;for(let _ of A.slice(0,260)){_.updateMatrixWorld(!0);let E=new _o(_.geometry,32),B=E.attributes.position;for(let G=0;G<B.count;G++)O.fromBufferAttribute(B,G).applyMatrix4(_.matrixWorld),F.push(O.x,O.y,O.z);if(E.dispose(),F.length>24e4)break}Gt=new Ls().setPositions(F);let $=new Fo(Gt,Vt);$.renderOrder=5,$.frustumCulled=!1,bt.add($)}let Et=[];function Me(A){var O;if(!_t)return;let F=A.position.z>((O=_t.userData.hedgeZ)!=null?O:-99)+.6;_t.traverse($=>{$.userData.hedge&&($.visible=F)})}function Pt(){!K&&!kt&&!it&&(it=requestAnimationFrame(Xt))}let Ht=0,Ft=null,kt=!1,z=0,yt=0;function Xt(A){if(it=0,Ht++,K||kt)return;Qt(A);let F=Mt(A),O=N.update(),$=!1;if(et&&Vt){et.frames=(et.frames||0)+1;let _=Math.min((A-et.start)/1e3,et.frames/13);Vt.opacity=_<0?0:_<1.8?.55+.45*Math.abs(Math.sin(_*Math.PI*1.1)):Math.max(Et.length?.6:0,1-(_-1.8)/1.2),_>3&&(et=null,Et.length?Yt(Et):Yt([]),Vt.opacity=Et.length?.6:0),$=!!et}try{Vt&&Vt.resolution.set(pt.w,pt.h),Me(w),t.render(v,w)}catch(_){Ft=String(_)}ye(),!y&&!Y&&zt(),(F||O||$)&&Pt()}let Y=!1,It=0,J=[],ct=[];function zt(){let A=!1;if(!h&&!g)try{let F=t.getContext(),O=t.getDrawingBufferSize(new wt),$=new Uint8Array(4),_=[];for(let B of[.92,.5,.08])F.readPixels(O.x>>1,Math.round(O.y*B),1,1,F.RGBA,F.UNSIGNED_BYTE,$),_.push([$[0],$[1],$[2]]);J.push(_),A=_.every(([B,G,X])=>B+G+X<12);let E=F.getError();E&&ct.push(E)}catch(F){J.push(String(F))}if(A&&++It<3){Pt();return}A&&(g="blank"),Y=!0,setTimeout(()=>{K||kt||(g?n(g):(y=!0,s()))})}function Qt(A){let F=A-z;z=A,F>0&&F<250&&(yt=F>50?yt+1:Math.max(0,yt-2),!(yt<20||m<=1)&&(yt=0,m=Math.max(1,Math.round((m-.25)*4)/4),t.setPixelRatio(m),pt={w:0,h:0},Sn()))}N.addEventListener("change",Pt),N.addEventListener("start",()=>{q=null});let ce=!1;function de(A){let F=A.clone().project(w);return[(F.x+1)/2*pt.w,(1-F.y)/2*pt.h,F.z]}function ye(){if(!k||!ce&&ut!=="plan"){f.replaceChildren();return}let A=k.width,F=k.depth,O=ut==="plan"?0:.02,$=[],_="http://www.w3.org/2000/svg",E=(nt,at,St)=>{let vt=document.createElementNS(_,nt);for(let[Lt,Ut]of Object.entries(at))vt.setAttribute(Lt,Ut);return St&&(vt.textContent=St),$.push(vt),vt},B=(nt,at,St,vt)=>{let[Lt,Ut,Wt]=de(nt.clone().add(vt)),[te,Zt,Jt]=de(at.clone().add(vt));if(Wt>1||Jt>1)return;let he=(Lt+te)/2,ee=(Ut+Zt)/2;E("line",{x1:Lt,y1:Ut,x2:te,y2:Zt}),E("line",{class:"tick",x1:Lt,y1:Ut-6,x2:Lt,y2:Ut+6}),E("line",{class:"tick",x1:te,y1:Zt-6,x2:te,y2:Zt+6});let qt=E("g",{transform:`translate(${he} ${ee})`}),me=document.createElementNS(_,"rect");me.setAttribute("x","-36"),me.setAttribute("y","-12"),me.setAttribute("width","72"),me.setAttribute("height","24"),me.setAttribute("rx","12");let ne=document.createElementNS(_,"text");ne.setAttribute("text-anchor","middle"),ne.setAttribute("dy","4"),ne.textContent=St,qt.append(me,ne)},G=fr(k),X=F/2+G.front;if(B(new L(-A/2,O,F/2),new L(A/2,O,F/2),`${A.toFixed(1)}m`,new L(0,0,Math.max(.55,X-F/2+.5))),B(new L(A/2,O,F/2),new L(A/2,O,-F/2),`${F.toFixed(1)}m`,new L(.6+(k.canopy.side==="right"?k.canopy.depth:0),0,0)),ut==="plan"){if(k.canopy.side!=="none"){let at=k.canopy.side==="left"?-1:1,St=k.canopy.depth;B(new L(at*A/2,O,F/2),new L(at*(A/2+St),O,F/2),`${St.toFixed(1)}m`,new L(0,0,Math.max(.55,X-F/2+.5)))}let nt=[["Front",0,X+.9],["Back",0,-F/2-G.back-.5],["Left",-A/2-G.left-.5,-F*.3],["Right",A/2+G.right+.5,-F*.3]];for(let[at,St,vt]of nt){let[Lt,Ut]=de(new L(St,0,vt));E("text",{class:"wall-name",x:Lt,y:Ut,"text-anchor":"middle"},at)}}f.setAttribute("viewBox",`0 0 ${pt.w} ${pt.h}`),f.replaceChildren(...$)}let oe=new lr,ae=null;t.domElement.addEventListener("pointerdown",A=>{ae=[A.clientX,A.clientY]}),t.domElement.addEventListener("pointerup",A=>{var _;if(!ae||Math.hypot(A.clientX-ae[0],A.clientY-ae[1])>6||!V)return;let F=t.domElement.getBoundingClientRect();oe.setFromCamera(new wt((A.clientX-F.left)/F.width*2-1,-((A.clientY-F.top)/F.height)*2+1),w);let O=oe.intersectObject(V.group,!0).find(E=>E.object.visible),$=(_=O==null?void 0:O.object.userData.tags)==null?void 0:_.find(E=>E.startsWith("opening:"));if($)r({kind:"opening",id:$.slice(8)});else if(O){let E=["skylight","spots","wallLights","gutter","downpipe","trim","canopy","veranda","fascia","roof","corners","posts","walls","floor","heater","furniture","cladding","beams","anchors","patio","ceiling","wallInsulation"].find(B=>{var G;return(G=O.object.userData.tags)==null?void 0:G.includes(B)});E&&r({kind:"part",part:E})}});let Se=A=>{w.fov=qn.clamp(w.fov*A,38,88),w.updateProjectionMatrix(),Pt()};t.domElement.addEventListener("wheel",A=>{ut==="inside"&&(A.preventDefault(),Se(A.deltaY>0?1.08:1/1.08))},{passive:!1});let Ke=new Map,dn=0;t.domElement.addEventListener("pointerdown",A=>{A.pointerType==="touch"&&Ke.set(A.pointerId,[A.clientX,A.clientY])}),t.domElement.addEventListener("pointermove",A=>{if(!Ke.has(A.pointerId))return;if(Ke.set(A.pointerId,[A.clientX,A.clientY]),ut!=="inside"||Ke.size!==2){dn=0;return}let[F,O]=[...Ke.values()],$=Math.hypot(F[0]-O[0],F[1]-O[1]);dn&&Se(dn/$),dn=$});for(let A of["pointerup","pointercancel","pointerleave"])t.domElement.addEventListener(A,F=>{Ke.delete(F.pointerId),dn=0});function Sn(){let A=i.getBoundingClientRect();A.width<2||A.height<2||Math.abs(A.width-pt.w)<.5&&Math.abs(A.height-pt.h)<.5||(pt={w:A.width,h:A.height},t.setSize(pt.w,pt.h,!1),w.aspect=pt.w/pt.h,w.updateProjectionMatrix(),k&&rt(C(ut),!1),Pt())}let ci=new ResizeObserver(Sn);l.push(()=>ci.disconnect()),ci.observe(i),t.domElement.addEventListener("webglcontextlost",A=>{A.preventDefault(),!(K||kt)&&(kt=!0,it&&cancelAnimationFrame(it),it=0,e())});let ot="",ht={update(A,{refit:F=!1}={}){var G,X;if(K)return;let O=JSON.stringify({...A,step:0});if(O===ot&&!F)return;ot=O;let $=!k,_=k&&(k.width!==A.width||k.depth!==A.depth||k.range!==A.range||k.roof!==A.roof||k.canopy.side!==A.canopy.side||k.canopy.depth!==A.canopy.depth||!!((G=k.extras)!=null&&G.patio)!=!!((X=A.extras)!=null&&X.patio));x.begin();let E;try{E=pu(A,x)}catch(nt){if(Ft=String(nt),ot="",$)throw nt;console.error(nt);return}k=A,V&&(v.remove(V.group),Bt(V.group),V.materials.forEach(nt=>nt.dispose())),V=E,v.add(V.group);let B=Ns(k);At(k,B),x.prune(c.cache),h&&ft(),u&&(xt(V.group,V.materials),xt(_t,_t.userData.mats),xt(U)),Rt(B),j(),Et=dt.length?Tt(dt):[],et?(et.meshes=Tt(et.tags),Yt(et.meshes)):Yt(Et),Vt&&!et&&(Vt.opacity=Et.length?.6:0),lt(),$?(Sn(),rt(C("outside"),!1)):(F||_)&&rt(C(ut),!0),Pt()},setView(A,{animate:F=!0}={}){k&&rt(C(A),F)},get view(){return ut},focus(A){var E;if(!k||!V)return;v.updateMatrixWorld(!0);let F=A.dir,O={...A,dir:F?Array.isArray(F)?new L(...F):new L(F.x,F.y,F.z):void 0},$=O.tags||[],_=O.view||"outside";if(_==="inside"){let B=Tt($),G=B.length?Ot(B).getCenter(new L):null;G&&O.lookDown&&(G.y=V.room.floor),rt(C("inside",{lookAt:G}),!0)}else if(_==="plan")rt(C("plan"),!0);else{let B=$.length?Tt($):[],G=B.length?Ot(B):Dt();if(O.context!==!1){let X=(E=O.pad)!=null?E:.35,nt=G.getSize(new L);G=G.clone().expandByVector(new L(Math.max(X,nt.x*.15),Math.max(X*.7,.3),Math.max(X,nt.z*.15))),O.whole&&(G=Dt()),G.min.y=O.ground?0:Math.max(0,G.min.y)}rt(C("outside",{dir:O.dir,box:G,minDistance:O.minDistance||3}),!0)}O.highlight!==!1&&$.length&&(et={tags:$,start:performance.now()+(d.matches?0:250),meshes:Tt($)},Yt(et.meshes)),Pt()},select(A){v.updateMatrixWorld(!0),dt=A||[],Et=A!=null&&A.length?Tt(A):[],et||(Yt(Et),Vt&&(Vt.opacity=Et.length?.6:0)),Pt()},zoom(A){if(ut==="inside"){w.fov=qn.clamp(w.fov-A*8,38,88),w.updateProjectionMatrix(),Pt();return}let F=w.position.clone().sub(N.target),O=qn.clamp(F.length()*(A>0?.8:1.25),N.minDistance,N.maxDistance),$={view:ut,fov:w.fov,position:N.target.clone().add(F.setLength(O)),target:N.target.clone()};q=d.matches?null:{start:performance.now(),duration:260,from:{position:w.position.clone(),target:N.target.clone(),fov:w.fov},to:$},q||w.position.copy($.position),Pt()},reset(){rt(C(ut==="plan"?"plan":ut),!0)},setNight(A){tt=!!A,j(),Pt()},setDimensions(A){ce=!!A,ye(),Pt()},capture(A=["hero","front","back","left","right","inside","inside2","plan","dusk"],{width:F=2e3,height:O=1250}={}){if(!k||kt||h||t.getContext().isContextLost())return{};F>c.capture&&(O=Math.round(O*c.capture/F),F=c.capture);let $=new He(35,F/O,.05,220),_={night:tt,view:ut,size:t.getSize(new wt),ratio:t.getPixelRatio()},E={},B=bt.visible;bt.visible=!1;try{t.setPixelRatio(1),t.setSize(F,O,!1);let G=pt;pt={w:F,h:O};let X=Ns(k),nt=()=>Dt();for(let at of A){let St=at==="dusk";tt!==St&&(tt=St,j());let vt;if(at==="hero"||at==="dusk")vt=C("outside",{dir:new L(-.62,.26,1),margin:1.06});else if(at==="front")vt=C("outside",{dir:new L(0,.12,1),margin:1.08});else if(at==="back")vt=C("outside",{dir:new L(0,.14,-1),margin:1.08,box:nt()});else if(at==="left")vt=C("outside",{dir:new L(-1,.14,0),margin:1.08,box:nt()});else if(at==="right")vt=C("outside",{dir:new L(1,.14,0),margin:1.08,box:nt()});else if(at==="inside")vt=C("inside");else if(at==="inside2"){let Lt=V.room;vt={view:"inside",fov:72,position:new L(Lt.x1-.45,Lt.floor+1.45,Lt.z0+.45),target:new L((Lt.x0+Lt.x1)/2-(Lt.x1-Lt.x0)/4,Lt.floor+1,Lt.z1)}}else vt=C("plan");ut=vt.view,lt(),$.fov=vt.fov,$.aspect=F/O,$.updateProjectionMatrix(),$.position.copy(vt.position),$.lookAt(vt.target),Me($),t.render(v,$),E[at]=t.domElement.toDataURL("image/jpeg",.9)}pt=G}catch(G){}finally{tt!==_.night&&(tt=_.night,j()),ut=_.view,lt(),bt.visible=B,t.setPixelRatio(_.ratio),t.setSize(_.size.x,_.size.y,!1),kt||t.render(v,w)}return E},dispose(){K||(K=!0,it&&cancelAnimationFrame(it),ci.disconnect(),N.dispose(),V&&(Bt(V.group),V.materials.forEach(A=>A.dispose())),_t&&Bt(_t),Gt==null||Gt.dispose(),Vt==null||Vt.dispose(),x.dispose(),T==null||T.dispose(),t.dispose(),kt||t.forceContextLoss(),t.domElement.remove(),f.remove())},quality:()=>({tier:o,ratio:m,lost:kt,broken:g,...x.stats(),webgl:h?0:t.capabilities.isWebGL2===!1?1:2,svg:h?t.info:void 0}),diagnostics(){let A={tier:o,gpu:ht.gpu(),ratio:m,frames:Ht,verified:y,broken:g,shaderErrors:p.slice(0,3),glErrors:ct.slice(0,5),samples:J.slice(0,3),lastError:Ft,textures:x.stats()};if(h)A.svg=t.info;else try{let F=t.getContext(),O=F.getContextAttributes()||{};A.webgl=t.capabilities.isWebGL2===!1?1:2,A.context={antialias:O.antialias,alpha:O.alpha,lost:F.isContextLost()},A.maxTexture=F.getParameter(F.MAX_TEXTURE_SIZE),A.extensions=["EXT_color_buffer_float","EXT_color_buffer_half_float","KHR_parallel_shader_compile","OES_texture_float_linear"].filter($=>F.getExtension($)),A.buffer=t.getDrawingBufferSize(new wt).toArray()}catch(F){A.contextError=String(F)}return A},gpu(){if(h)return"none (SVG)";try{let A=t.getContext(),F=A.getExtension("WEBGL_debug_renderer_info");return String(A.getParameter(F?F.UNMASKED_RENDERER_WEBGL:A.RENDERER))}catch(A){return"unknown"}},_debug:()=>{var A;return{scene:v,camera:w,controls:N,renderer:t,room:V,view:ut,state:k,highlight:bt,pulse:et,anim:q,frames:Ht,frame:it,lastError:Ft,lineOpacity:(A=Vt==null?void 0:Vt.opacity)!=null?A:0,THREE:{Raycaster:lr,Vector3:L,DoubleSide:Pe}}}};return ht}export{Vl as TIERS,Wx as createScene};
/*! Bundled license information:

three-webgl1/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
