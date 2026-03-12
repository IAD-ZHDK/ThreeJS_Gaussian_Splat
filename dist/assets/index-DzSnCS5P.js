(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const ha="177",yi={ROTATE:0,DOLLY:1,PAN:2},Ei={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wd=0,ja=1,Rd=2,Tc=1,Id=2,Pn=3,En=0,qt=1,an=2,Zn=0,Jn=1,Za=2,Ja=3,el=4,bc=5,hi=100,Dd=101,Pd=102,Fd=103,Ld=104,Bd=200,Ud=201,Od=202,Nd=203,Ss=204,_s=205,zd=206,kd=207,Hd=208,Vd=209,Gd=210,Wd=211,Xd=212,qd=213,Qd=214,vo=0,yo=1,Eo=2,Yi=3,Co=4,Mo=5,To=6,bo=7,wc=0,Yd=1,Kd=2,ei=0,$d=1,jd=2,Zd=3,Jd=4,eu=5,tu=6,nu=7,Rc=300,Ki=301,$i=302,wo=303,Ro=304,Er=306,Io=1e3,pi=1001,Do=1002,Zt=1003,iu=1004,Ds=1005,Sn=1006,Dr=1007,mi=1008,Cn=1009,Ic=1010,Dc=1011,vs=1012,fa=1013,ln=1014,An=1015,ns=1016,pa=1017,ma=1018,ys=1020,Pc=35902,Fc=1021,Lc=1022,Ht=1023,ji=1026,Es=1027,Bc=1028,Cr=1029,Uc=1030,ga=1031,Gi=1033,or=33776,ar=33777,lr=33778,cr=33779,Po=35840,Fo=35841,Lo=35842,Bo=35843,Uo=36196,Oo=37492,No=37496,zo=37808,ko=37809,Ho=37810,Vo=37811,Go=37812,Wo=37813,Xo=37814,qo=37815,Qo=37816,Yo=37817,Ko=37818,$o=37819,jo=37820,Zo=37821,dr=36492,Jo=36494,ea=36495,Oc=36283,ta=36284,na=36285,ia=36286,su=3200,ru=3201,ou=0,au=1,Yn="",rn="srgb",Zi="srgb-linear",fr="linear",lt="srgb",Ci=7680,tl=519,lu=512,cu=513,du=514,Nc=515,uu=516,hu=517,fu=518,pu=519,nl=35044,mu=35048,il="300 es",Bn=2e3,pr=2001;class _i{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ur=Math.PI/180,sa=180/Math.PI;function bs(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ut[s&255]+Ut[s>>8&255]+Ut[s>>16&255]+Ut[s>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function Ke(s,e,t){return Math.max(e,Math.min(t,s))}function gu(s,e){return(s%e+e)%e}function Pr(s,e,t){return(1-t)*s+t*e}function os(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Xt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const zc={DEG2RAD:ur};class Me{constructor(e=0,t=0){Me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],d=n[i+2],u=n[i+3];const h=r[o+0],f=r[o+1],g=r[o+2],A=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=A;return}if(u!==A||l!==h||c!==f||d!==g){let m=1-a;const p=l*h+c*f+d*g+u*A,x=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const C=Math.sqrt(_),T=Math.atan2(C,p*x);m=Math.sin(m*T)/C,a=Math.sin(a*T)/C}const S=a*x;if(l=l*m+h*S,c=c*m+f*S,d=d*m+g*S,u=u*m+A*S,m===1-a){const C=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=C,c*=C,d*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],d=n[i+3],u=r[o],h=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+d*u+l*f-c*h,e[t+1]=l*g+d*h+c*u-a*f,e[t+2]=c*g+d*f+a*h-l*u,e[t+3]=d*g-a*u-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(i/2),u=a(r/2),h=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=h*d*u+c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u-h*f*g;break;case"YXZ":this._x=h*d*u+c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u+h*f*g;break;case"ZXY":this._x=h*d*u-c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u-h*f*g;break;case"ZYX":this._x=h*d*u-c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u+h*f*g;break;case"YZX":this._x=h*d*u+c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u-h*f*g;break;case"XZY":this._x=h*d*u-c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],u=t[10],h=n+a+u;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(d-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+o*a+i*c-r*l,this._y=i*d+o*l+r*a-n*c,this._z=r*d+o*c+n*l-i*a,this._w=o*d-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),u=Math.sin((1-t)*d)/c,h=Math.sin(t*d)/c;return this._w=o*u+this._w*h,this._x=n*u+this._x*h,this._y=i*u+this._y*h,this._z=r*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),d=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*d,this.y=n+l*d+a*c-r*u,this.z=i+l*u+r*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fr.copy(this).projectOnVector(e),this.sub(Fr)}reflect(e){return this.sub(Fr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fr=new I,sl=new gt;class Ne{constructor(e,t,n,i,r,o,a,l,c){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=i,d[2]=a,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],u=n[7],h=n[2],f=n[5],g=n[8],A=i[0],m=i[3],p=i[6],x=i[1],_=i[4],S=i[7],C=i[2],T=i[5],y=i[8];return r[0]=o*A+a*x+l*C,r[3]=o*m+a*_+l*T,r[6]=o*p+a*S+l*y,r[1]=c*A+d*x+u*C,r[4]=c*m+d*_+u*T,r[7]=c*p+d*S+u*y,r[2]=h*A+f*x+g*C,r[5]=h*m+f*_+g*T,r[8]=h*p+f*S+g*y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-n*r*d+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=d*o-a*c,h=a*l-d*r,f=c*r-o*l,g=t*u+n*h+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/g;return e[0]=u*A,e[1]=(i*c-d*n)*A,e[2]=(a*n-i*o)*A,e[3]=h*A,e[4]=(d*t-i*l)*A,e[5]=(i*r-a*t)*A,e[6]=f*A,e[7]=(n*l-c*t)*A,e[8]=(o*t-n*r)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Lr.makeScale(e,t)),this}rotate(e){return this.premultiply(Lr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Lr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lr=new Ne;function kc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function mr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Au(){const s=mr("canvas");return s.style.display="block",s}const rl={};function Wi(s){s in rl||(rl[s]=!0,console.warn(s))}function xu(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Su(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function _u(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ol=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),al=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vu(){const s={enabled:!0,workingColorSpace:Zi,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===lt&&(i.r=Un(i.r),i.g=Un(i.g),i.b=Un(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===lt&&(i.r=Xi(i.r),i.g=Xi(i.g),i.b=Xi(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Yn?fr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Wi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Wi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Zi]:{primaries:e,whitePoint:n,transfer:fr,toXYZ:ol,fromXYZ:al,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:e,whitePoint:n,transfer:lt,toXYZ:ol,fromXYZ:al,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),s}const et=vu();function Un(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Xi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Mi;class yu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Mi===void 0&&(Mi=mr("canvas")),Mi.width=e.width,Mi.height=e.height;const i=Mi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Mi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=mr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Un(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Un(t[n]/255)*255):t[n]=Un(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Eu=0;class Aa{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=bs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Br(i[o].image)):r.push(Br(i[o]))}else r=Br(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Br(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?yu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cu=0;const Ur=new I;class Vt extends _i{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,n=pi,i=pi,r=Sn,o=mi,a=Ht,l=Cn,c=Vt.DEFAULT_ANISOTROPY,d=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=bs(),this.name="",this.source=new Aa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ur).x}get height(){return this.source.getSize(Ur).y}get depth(){return this.source.getSize(Ur).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Io:e.x=e.x-Math.floor(e.x);break;case pi:e.x=e.x<0?0:1;break;case Do:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Io:e.y=e.y-Math.floor(e.y);break;case pi:e.y=e.y<0?0:1;break;case Do:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=Rc;Vt.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,t=0,n=0,i=1){At.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],d=l[4],u=l[8],h=l[1],f=l[5],g=l[9],A=l[2],m=l[6],p=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-A)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+A)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,S=(f+1)/2,C=(p+1)/2,T=(d+h)/4,y=(u+A)/4,w=(g+m)/4;return _>S&&_>C?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=T/n,r=y/n):S>C?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=T/i,r=w/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=y/r,i=w/r),this.set(n,i,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(u-A)*(u-A)+(h-d)*(h-d));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-A)/x,this.z=(h-d)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mu extends _i{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new Vt(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Aa(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends Mu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Hc extends Vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tu extends Vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _n{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,fn):fn.fromBufferAttribute(r,o),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ps.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ps.copy(n.boundingBox)),Ps.applyMatrix4(e.matrixWorld),this.union(Ps)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(as),Fs.subVectors(this.max,as),Ti.subVectors(e.a,as),bi.subVectors(e.b,as),wi.subVectors(e.c,as),Nn.subVectors(bi,Ti),zn.subVectors(wi,bi),ri.subVectors(Ti,wi);let t=[0,-Nn.z,Nn.y,0,-zn.z,zn.y,0,-ri.z,ri.y,Nn.z,0,-Nn.x,zn.z,0,-zn.x,ri.z,0,-ri.x,-Nn.y,Nn.x,0,-zn.y,zn.x,0,-ri.y,ri.x,0];return!Or(t,Ti,bi,wi,Fs)||(t=[1,0,0,0,1,0,0,0,1],!Or(t,Ti,bi,wi,Fs))?!1:(Ls.crossVectors(Nn,zn),t=[Ls.x,Ls.y,Ls.z],Or(t,Ti,bi,wi,Fs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Tn=[new I,new I,new I,new I,new I,new I,new I,new I],fn=new I,Ps=new _n,Ti=new I,bi=new I,wi=new I,Nn=new I,zn=new I,ri=new I,as=new I,Fs=new I,Ls=new I,oi=new I;function Or(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){oi.fromArray(s,r);const a=i.x*Math.abs(oi.x)+i.y*Math.abs(oi.y)+i.z*Math.abs(oi.z),l=e.dot(oi),c=t.dot(oi),d=n.dot(oi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const bu=new _n,ls=new I,Nr=new I;class xa{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):bu.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ls.subVectors(e,this.center);const t=ls.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ls,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ls.copy(e.center).add(Nr)),this.expandByPoint(ls.copy(e.center).sub(Nr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const bn=new I,zr=new I,Bs=new I,kn=new I,kr=new I,Us=new I,Hr=new I;let Vc=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bn.copy(this.origin).addScaledVector(this.direction,t),bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){zr.copy(e).add(t).multiplyScalar(.5),Bs.copy(t).sub(e).normalize(),kn.copy(this.origin).sub(zr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Bs),a=kn.dot(this.direction),l=-kn.dot(Bs),c=kn.lengthSq(),d=Math.abs(1-o*o);let u,h,f,g;if(d>0)if(u=o*l-a,h=o*a-l,g=r*d,u>=0)if(h>=-g)if(h<=g){const A=1/d;u*=A,h*=A,f=u*(u+o*h+2*a)+h*(o*u+h+2*l)+c}else h=r,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;else h=-r,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;else h<=-g?(u=Math.max(0,-(-o*r+a)),h=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+h*(h+2*l)+c):h<=g?(u=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(u=Math.max(0,-(o*r+a)),h=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+h*(h+2*l)+c);else h=o>0?-r:r,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(zr).addScaledVector(Bs,h),f}intersectSphere(e,t){bn.subVectors(e.center,this.origin);const n=bn.dot(this.direction),i=bn.dot(bn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),d>=0?(r=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(a=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,bn)!==null}intersectTriangle(e,t,n,i,r){kr.subVectors(t,e),Us.subVectors(n,e),Hr.crossVectors(kr,Us);let o=this.direction.dot(Hr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;kn.subVectors(this.origin,e);const l=a*this.direction.dot(Us.crossVectors(kn,Us));if(l<0)return null;const c=a*this.direction.dot(kr.cross(kn));if(c<0||l+c>o)return null;const d=-a*kn.dot(Hr);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class ke{constructor(e,t,n,i,r,o,a,l,c,d,u,h,f,g,A,m){ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,d,u,h,f,g,A,m)}set(e,t,n,i,r,o,a,l,c,d,u,h,f,g,A,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=d,p[10]=u,p[14]=h,p[3]=f,p[7]=g,p[11]=A,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ri.setFromMatrixColumn(e,0).length(),r=1/Ri.setFromMatrixColumn(e,1).length(),o=1/Ri.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const h=o*d,f=o*u,g=a*d,A=a*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=h-A*c,t[9]=-a*l,t[2]=A-h*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*d,f=l*u,g=c*d,A=c*u;t[0]=h+A*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*d,t[9]=-a,t[2]=f*a-g,t[6]=A+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*d,f=l*u,g=c*d,A=c*u;t[0]=h-A*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*d,t[9]=A-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*d,f=o*u,g=a*d,A=a*u;t[0]=l*d,t[4]=g*c-f,t[8]=h*c+A,t[1]=l*u,t[5]=A*c+h,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,f=o*c,g=a*l,A=a*c;t[0]=l*d,t[4]=A-h*u,t[8]=g*u+f,t[1]=u,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=f*u+g,t[10]=h-A*u}else if(e.order==="XZY"){const h=o*l,f=o*c,g=a*l,A=a*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=h*u+A,t[5]=o*d,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*d,t[10]=A*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wu,e,Ru)}lookAt(e,t,n){const i=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Hn.crossVectors(n,Yt),Hn.lengthSq()===0&&(Math.abs(n.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Hn.crossVectors(n,Yt)),Hn.normalize(),Os.crossVectors(Yt,Hn),i[0]=Hn.x,i[4]=Os.x,i[8]=Yt.x,i[1]=Hn.y,i[5]=Os.y,i[9]=Yt.y,i[2]=Hn.z,i[6]=Os.z,i[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],u=n[5],h=n[9],f=n[13],g=n[2],A=n[6],m=n[10],p=n[14],x=n[3],_=n[7],S=n[11],C=n[15],T=i[0],y=i[4],w=i[8],E=i[12],v=i[1],R=i[5],B=i[9],F=i[13],U=i[2],z=i[6],N=i[10],W=i[14],k=i[3],K=i[7],ee=i[11],ue=i[15];return r[0]=o*T+a*v+l*U+c*k,r[4]=o*y+a*R+l*z+c*K,r[8]=o*w+a*B+l*N+c*ee,r[12]=o*E+a*F+l*W+c*ue,r[1]=d*T+u*v+h*U+f*k,r[5]=d*y+u*R+h*z+f*K,r[9]=d*w+u*B+h*N+f*ee,r[13]=d*E+u*F+h*W+f*ue,r[2]=g*T+A*v+m*U+p*k,r[6]=g*y+A*R+m*z+p*K,r[10]=g*w+A*B+m*N+p*ee,r[14]=g*E+A*F+m*W+p*ue,r[3]=x*T+_*v+S*U+C*k,r[7]=x*y+_*R+S*z+C*K,r[11]=x*w+_*B+S*N+C*ee,r[15]=x*E+_*F+S*W+C*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],u=e[6],h=e[10],f=e[14],g=e[3],A=e[7],m=e[11],p=e[15];return g*(+r*l*u-i*c*u-r*a*h+n*c*h+i*a*f-n*l*f)+A*(+t*l*f-t*c*h+r*o*h-i*o*f+i*c*d-r*l*d)+m*(+t*c*u-t*a*f-r*o*u+n*o*f+r*a*d-n*c*d)+p*(-i*a*d-t*l*u+t*a*h+i*o*u-n*o*h+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=e[9],h=e[10],f=e[11],g=e[12],A=e[13],m=e[14],p=e[15],x=u*m*c-A*h*c+A*l*f-a*m*f-u*l*p+a*h*p,_=g*h*c-d*m*c-g*l*f+o*m*f+d*l*p-o*h*p,S=d*A*c-g*u*c+g*a*f-o*A*f-d*a*p+o*u*p,C=g*u*l-d*A*l-g*a*h+o*A*h+d*a*m-o*u*m,T=t*x+n*_+i*S+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/T;return e[0]=x*y,e[1]=(A*h*r-u*m*r-A*i*f+n*m*f+u*i*p-n*h*p)*y,e[2]=(a*m*r-A*l*r+A*i*c-n*m*c-a*i*p+n*l*p)*y,e[3]=(u*l*r-a*h*r-u*i*c+n*h*c+a*i*f-n*l*f)*y,e[4]=_*y,e[5]=(d*m*r-g*h*r+g*i*f-t*m*f-d*i*p+t*h*p)*y,e[6]=(g*l*r-o*m*r-g*i*c+t*m*c+o*i*p-t*l*p)*y,e[7]=(o*h*r-d*l*r+d*i*c-t*h*c-o*i*f+t*l*f)*y,e[8]=S*y,e[9]=(g*u*r-d*A*r-g*n*f+t*A*f+d*n*p-t*u*p)*y,e[10]=(o*A*r-g*a*r+g*n*c-t*A*c-o*n*p+t*a*p)*y,e[11]=(d*a*r-o*u*r-d*n*c+t*u*c+o*n*f-t*a*f)*y,e[12]=C*y,e[13]=(d*A*i-g*u*i+g*n*h-t*A*h-d*n*m+t*u*m)*y,e[14]=(g*a*i-o*A*i-g*n*l+t*A*l+o*n*m-t*a*m)*y,e[15]=(o*u*i-d*a*i+d*n*l-t*u*l-o*n*h+t*a*h)*y,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,d=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,d*a+n,d*l-i*o,0,c*l-i*a,d*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,d=o+o,u=a+a,h=r*c,f=r*d,g=r*u,A=o*d,m=o*u,p=a*u,x=l*c,_=l*d,S=l*u,C=n.x,T=n.y,y=n.z;return i[0]=(1-(A+p))*C,i[1]=(f+S)*C,i[2]=(g-_)*C,i[3]=0,i[4]=(f-S)*T,i[5]=(1-(h+p))*T,i[6]=(m+x)*T,i[7]=0,i[8]=(g+_)*y,i[9]=(m-x)*y,i[10]=(1-(h+A))*y,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ri.set(i[0],i[1],i[2]).length();const o=Ri.set(i[4],i[5],i[6]).length(),a=Ri.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],pn.copy(this);const c=1/r,d=1/o,u=1/a;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=d,pn.elements[5]*=d,pn.elements[6]*=d,pn.elements[8]*=u,pn.elements[9]*=u,pn.elements[10]*=u,t.setFromRotationMatrix(pn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Bn){const l=this.elements,c=2*r/(t-e),d=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i);let f,g;if(a===Bn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===pr)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Bn){const l=this.elements,c=1/(t-e),d=1/(n-i),u=1/(o-r),h=(t+e)*c,f=(n+i)*d;let g,A;if(a===Bn)g=(o+r)*u,A=-2*u;else if(a===pr)g=r*u,A=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=A,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ri=new I,pn=new ke,wu=new I(0,0,0),Ru=new I(1,1,1),Hn=new I,Os=new I,Yt=new I,ll=new ke,cl=new gt;class On{constructor(e=0,t=0,n=0,i=On.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],d=i[9],u=i[2],h=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ll.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ll,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cl.setFromEuler(this),this.setFromQuaternion(cl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class Gc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Iu=0;const dl=new I,Ii=new gt,wn=new ke,Ns=new I,cs=new I,Du=new I,Pu=new gt,ul=new I(1,0,0),hl=new I(0,1,0),fl=new I(0,0,1),pl={type:"added"},Fu={type:"removed"},Di={type:"childadded",child:null},Vr={type:"childremoved",child:null};class bt extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new I,t=new On,n=new gt,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ke},normalMatrix:{value:new Ne}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.premultiply(Ii),this}rotateX(e){return this.rotateOnAxis(ul,e)}rotateY(e){return this.rotateOnAxis(hl,e)}rotateZ(e){return this.rotateOnAxis(fl,e)}translateOnAxis(e,t){return dl.copy(e).applyQuaternion(this.quaternion),this.position.add(dl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ul,e)}translateY(e){return this.translateOnAxis(hl,e)}translateZ(e){return this.translateOnAxis(fl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ns.copy(e):Ns.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(cs,Ns,this.up):wn.lookAt(Ns,cs,this.up),this.quaternion.setFromRotationMatrix(wn),i&&(wn.extractRotation(i.matrixWorld),Ii.setFromRotationMatrix(wn),this.quaternion.premultiply(Ii.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pl),Di.child=e,this.dispatchEvent(Di),Di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fu),Vr.child=e,this.dispatchEvent(Vr),Vr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pl),Di.child=e,this.dispatchEvent(Di),Di.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,e,Du),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,Pu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),u=o(e.shapes),h=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}bt.DEFAULT_UP=new I(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new I,Rn=new I,Gr=new I,In=new I,Pi=new I,Fi=new I,ml=new I,Wr=new I,Xr=new I,qr=new I,Qr=new At,Yr=new At,Kr=new At;class gn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),mn.subVectors(e,t),i.cross(mn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){mn.subVectors(i,t),Rn.subVectors(n,t),Gr.subVectors(e,t);const o=mn.dot(mn),a=mn.dot(Rn),l=mn.dot(Gr),c=Rn.dot(Rn),d=Rn.dot(Gr),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const h=1/u,f=(c*l-a*d)*h,g=(o*d-a*l)*h;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,In)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,In.x),l.addScaledVector(o,In.y),l.addScaledVector(a,In.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Qr.setScalar(0),Yr.setScalar(0),Kr.setScalar(0),Qr.fromBufferAttribute(e,t),Yr.fromBufferAttribute(e,n),Kr.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Qr,r.x),o.addScaledVector(Yr,r.y),o.addScaledVector(Kr,r.z),o}static isFrontFacing(e,t,n,i){return mn.subVectors(n,t),Rn.subVectors(e,t),mn.cross(Rn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),mn.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return gn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Pi.subVectors(i,n),Fi.subVectors(r,n),Wr.subVectors(e,n);const l=Pi.dot(Wr),c=Fi.dot(Wr);if(l<=0&&c<=0)return t.copy(n);Xr.subVectors(e,i);const d=Pi.dot(Xr),u=Fi.dot(Xr);if(d>=0&&u<=d)return t.copy(i);const h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(n).addScaledVector(Pi,o);qr.subVectors(e,r);const f=Pi.dot(qr),g=Fi.dot(qr);if(g>=0&&f<=g)return t.copy(r);const A=f*c-l*g;if(A<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Fi,a);const m=d*g-f*u;if(m<=0&&u-d>=0&&f-g>=0)return ml.subVectors(r,i),a=(u-d)/(u-d+(f-g)),t.copy(i).addScaledVector(ml,a);const p=1/(m+A+h);return o=A*p,a=h*p,t.copy(n).addScaledVector(Pi,o).addScaledVector(Fi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},zs={h:0,s:0,l:0};function $r(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class tt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=et.workingColorSpace){if(e=gu(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=$r(o,r,e+1/3),this.g=$r(o,r,e),this.b=$r(o,r,e-1/3)}return et.colorSpaceToWorking(this,i),this}setStyle(e,t=rn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rn){const n=Wc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Un(e.r),this.g=Un(e.g),this.b=Un(e.b),this}copyLinearToSRGB(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rn){return et.workingToColorSpace(Ot.copy(this),e),Math.round(Ke(Ot.r*255,0,255))*65536+Math.round(Ke(Ot.g*255,0,255))*256+Math.round(Ke(Ot.b*255,0,255))}getHexString(e=rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(Ot.copy(this),t);const n=Ot.r,i=Ot.g,r=Ot.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=d<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=rn){et.workingToColorSpace(Ot.copy(this),e);const t=Ot.r,n=Ot.g,i=Ot.b;return e!==rn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Vn),this.setHSL(Vn.h+e,Vn.s+t,Vn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vn),e.getHSL(zs);const n=Pr(Vn.h,zs.h,t),i=Pr(Vn.s,zs.s,t),r=Pr(Vn.l,zs.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new tt;tt.NAMES=Wc;let Lu=0;class Mr extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=bs(),this.name="",this.type="Material",this.blending=Jn,this.side=En,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ss,this.blendDst=_s,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ci,this.stencilZFail=Ci,this.stencilZPass=Ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Jn&&(n.blending=this.blending),this.side!==En&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ss&&(n.blendSrc=this.blendSrc),this.blendDst!==_s&&(n.blendDst=this.blendDst),this.blendEquation!==hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Yi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class xi extends Mr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ln=Bu();function Bu(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,d=0;for(;(c&8388608)===0;)c<<=1,d-=8388608;c&=-8388609,d+=947912704,r[l]=c|d}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function Uu(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=Ke(s,-65504,65504),Ln.floatView[0]=s;const e=Ln.uint32View[0],t=e>>23&511;return Ln.baseTable[t]+((e&8388607)>>Ln.shiftTable[t])}function Ou(s){const e=s>>10;return Ln.uint32View[0]=Ln.mantissaTable[Ln.offsetTable[e]+(s&1023)]+Ln.exponentTable[e],Ln.floatView[0]}class Cs{static toHalfFloat(e){return Uu(e)}static fromHalfFloat(e){return Ou(e)}}const Mt=new I,ks=new Me;let Nu=0;class cn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=nl,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ks.fromBufferAttribute(this,t),ks.applyMatrix3(e),this.setXY(t,ks.x,ks.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=os(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=os(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=os(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=os(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=os(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),i=Xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),i=Xt(i,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nl&&(e.usage=this.usage),e}}class Xc extends cn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class qc extends cn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Jt extends cn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let zu=0;const sn=new ke,jr=new bt,Li=new I,Kt=new _n,ds=new _n,Dt=new I;class dn extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=bs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kc(e)?qc:Xc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ne().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return jr.lookAt(e),jr.updateMatrix(),this.applyMatrix4(jr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Jt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _n);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Kt.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ds.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(Kt.min,ds.min),Kt.expandByPoint(Dt),Dt.addVectors(Kt.max,ds.max),Kt.expandByPoint(Dt)):(Kt.expandByPoint(ds.min),Kt.expandByPoint(ds.max))}Kt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Dt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Dt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Dt.fromBufferAttribute(a,c),l&&(Li.fromBufferAttribute(e,c),Dt.add(Li)),i=Math.max(i,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let w=0;w<n.count;w++)a[w]=new I,l[w]=new I;const c=new I,d=new I,u=new I,h=new Me,f=new Me,g=new Me,A=new I,m=new I;function p(w,E,v){c.fromBufferAttribute(n,w),d.fromBufferAttribute(n,E),u.fromBufferAttribute(n,v),h.fromBufferAttribute(r,w),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,v),d.sub(c),u.sub(c),f.sub(h),g.sub(h);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(A.copy(d).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(R),m.copy(u).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(R),a[w].add(A),a[E].add(A),a[v].add(A),l[w].add(m),l[E].add(m),l[v].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let w=0,E=x.length;w<E;++w){const v=x[w],R=v.start,B=v.count;for(let F=R,U=R+B;F<U;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const _=new I,S=new I,C=new I,T=new I;function y(w){C.fromBufferAttribute(i,w),T.copy(C);const E=a[w];_.copy(E),_.sub(C.multiplyScalar(C.dot(E))).normalize(),S.crossVectors(T,E);const R=S.dot(l[w])<0?-1:1;o.setXYZW(w,_.x,_.y,_.z,R)}for(let w=0,E=x.length;w<E;++w){const v=x[w],R=v.start,B=v.count;for(let F=R,U=R+B;F<U;F+=3)y(e.getX(F+0)),y(e.getX(F+1)),y(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new I,r=new I,o=new I,a=new I,l=new I,c=new I,d=new I,u=new I;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),A=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,A),o.fromBufferAttribute(t,m),d.subVectors(o,r),u.subVectors(i,r),d.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,A),c.fromBufferAttribute(n,m),a.add(d),l.add(d),c.add(d),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(A,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),d.subVectors(o,r),u.subVectors(i,r),d.cross(u),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,u=a.normalized,h=new c.constructor(l.length*d);let f=0,g=0;for(let A=0,m=l.length;A<m;A++){a.isInterleavedBufferAttribute?f=l[A]*a.data.stride+a.offset:f=l[A]*d;for(let p=0;p<d;p++)h[g++]=c[f++]}return new cn(h,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new dn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let d=0,u=c.length;d<u;d++){const h=c[d],f=e(h,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){const f=c[u];d.push(f.toJSON(e.data))}d.length>0&&(i[l]=d,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],u=r[c];for(let h=0,f=u.length;h<f;h++)d.push(u[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gl=new ke,ai=new Vc,Hs=new xa,Al=new I,Vs=new I,Gs=new I,Ws=new I,Zr=new I,Xs=new I,xl=new I,qs=new I;class Et extends bt{constructor(e=new dn,t=new xi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Xs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=a[l],u=r[l];d!==0&&(Zr.fromBufferAttribute(u,e),o?Xs.addScaledVector(Zr,d):Xs.addScaledVector(Zr.sub(t),d))}t.add(Xs)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere),Hs.applyMatrix4(r),ai.copy(e.ray).recast(e.near),!(Hs.containsPoint(ai.origin)===!1&&(ai.intersectSphere(Hs,Al)===null||ai.origin.distanceToSquared(Al)>(e.far-e.near)**2))&&(gl.copy(r).invert(),ai.copy(e.ray).applyMatrix4(gl),!(n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ai)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,A=h.length;g<A;g++){const m=h[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let S=x,C=_;S<C;S+=3){const T=a.getX(S),y=a.getX(S+1),w=a.getX(S+2);i=Qs(this,p,e,n,c,d,u,T,y,w),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),A=Math.min(a.count,f.start+f.count);for(let m=g,p=A;m<p;m+=3){const x=a.getX(m),_=a.getX(m+1),S=a.getX(m+2);i=Qs(this,o,e,n,c,d,u,x,_,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,A=h.length;g<A;g++){const m=h[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=x,C=_;S<C;S+=3){const T=S,y=S+1,w=S+2;i=Qs(this,p,e,n,c,d,u,T,y,w),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),A=Math.min(l.count,f.start+f.count);for(let m=g,p=A;m<p;m+=3){const x=m,_=m+1,S=m+2;i=Qs(this,o,e,n,c,d,u,x,_,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function ku(s,e,t,n,i,r,o,a){let l;if(e.side===qt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===En,a),l===null)return null;qs.copy(a),qs.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(qs);return c<t.near||c>t.far?null:{distance:c,point:qs.clone(),object:s}}function Qs(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Vs),s.getVertexPosition(l,Gs),s.getVertexPosition(c,Ws);const d=ku(s,e,t,n,Vs,Gs,Ws,xl);if(d){const u=new I;gn.getBarycoord(xl,Vs,Gs,Ws,u),i&&(d.uv=gn.getInterpolatedAttribute(i,a,l,c,u,new Me)),r&&(d.uv1=gn.getInterpolatedAttribute(r,a,l,c,u,new Me)),o&&(d.normal=gn.getInterpolatedAttribute(o,a,l,c,u,new I),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new I,materialIndex:0};gn.getNormal(Vs,Gs,Ws,h.normal),d.face=h,d.barycoord=u}return d}class is extends dn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],d=[],u=[];let h=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(d,3)),this.setAttribute("uv",new Jt(u,2));function g(A,m,p,x,_,S,C,T,y,w,E){const v=S/y,R=C/w,B=S/2,F=C/2,U=T/2,z=y+1,N=w+1;let W=0,k=0;const K=new I;for(let ee=0;ee<N;ee++){const ue=ee*R-F;for(let Re=0;Re<z;Re++){const Te=Re*v-B;K[A]=Te*x,K[m]=ue*_,K[p]=U,c.push(K.x,K.y,K.z),K[A]=0,K[m]=0,K[p]=T>0?1:-1,d.push(K.x,K.y,K.z),u.push(Re/y),u.push(1-ee/w),W+=1}}for(let ee=0;ee<w;ee++)for(let ue=0;ue<y;ue++){const Re=h+ue+z*ee,Te=h+ue+z*(ee+1),$=h+(ue+1)+z*(ee+1),te=h+(ue+1)+z*ee;l.push(Re,Te,te),l.push(Te,$,te),k+=6}a.addGroup(f,k,E),f+=k,h+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ji(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function zt(s){const e={};for(let t=0;t<s.length;t++){const n=Ji(s[t]);for(const i in n)e[i]=n[i]}return e}function Hu(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Qc(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const Vu={clone:Ji,merge:zt};var Gu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class en extends Mr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gu,this.fragmentShader=Wu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ji(e.uniforms),this.uniformsGroups=Hu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Yc extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=Bn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gn=new I,Sl=new Me,_l=new Me;class on extends Yc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=sa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ur*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sa*2*Math.atan(Math.tan(ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z)}getViewSize(e,t){return this.getViewBounds(e,Sl,_l),t.subVectors(_l,Sl)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ur*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Bi=-90,Ui=1;class Xu extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new on(Bi,Ui,e,t);i.layers=this.layers,this.add(i);const r=new on(Bi,Ui,e,t);r.layers=this.layers,this.add(r);const o=new on(Bi,Ui,e,t);o.layers=this.layers,this.add(o);const a=new on(Bi,Ui,e,t);a.layers=this.layers,this.add(a);const l=new on(Bi,Ui,e,t);l.layers=this.layers,this.add(l);const c=new on(Bi,Ui,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=A,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(u,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Kc extends Vt{constructor(e=[],t=Ki,n,i,r,o,a,l,c,d){super(e,t,n,i,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qu extends ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Kc(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new is(5,5,5),r=new en({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:Zn});r.uniforms.tEquirect.value=t;const o=new Et(i,r),a=t.minFilter;return t.minFilter===mi&&(t.minFilter=Sn),new Xu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}class Ys extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qu={type:"move"};class Jr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ys,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ys,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ys,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const A of e.hand.values()){const m=t.getJointPose(A,n),p=this._getHandJoint(c,A);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qu)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ys;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Yu extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Wn extends Vt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Zt,d=Zt,u,h){super(null,o,a,l,c,d,i,r,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ku extends cn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const eo=new I,$u=new I,ju=new Ne;class qn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=eo.subVectors(n,t).cross($u.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(eo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ju.getNormalMatrix(e),i=this.coplanarPoint(eo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const li=new xa,Ks=new I;class $c{constructor(e=new qn,t=new qn,n=new qn,i=new qn,r=new qn,o=new qn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Bn){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],d=i[5],u=i[6],h=i[7],f=i[8],g=i[9],A=i[10],m=i[11],p=i[12],x=i[13],_=i[14],S=i[15];if(n[0].setComponents(l-r,h-c,m-f,S-p).normalize(),n[1].setComponents(l+r,h+c,m+f,S+p).normalize(),n[2].setComponents(l+o,h+d,m+g,S+x).normalize(),n[3].setComponents(l-o,h-d,m-g,S-x).normalize(),n[4].setComponents(l-a,h-u,m-A,S-_).normalize(),t===Bn)n[5].setComponents(l+a,h+u,m+A,S+_).normalize();else if(t===pr)n[5].setComponents(a,u,A,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(e){return li.center.set(0,0,0),li.radius=.7071067811865476,li.applyMatrix4(e.matrixWorld),this.intersectsSphere(li)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ks.x=i.normal.x>0?e.max.x:e.min.x,Ks.y=i.normal.y>0?e.max.y:e.min.y,Ks.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ks)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sa extends Vt{constructor(e,t,n=ln,i,r,o,a=Zt,l=Zt,c,d=ji,u=1){if(d!==ji&&d!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:u};super(h,i,r,o,a,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Aa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ms extends dn{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const d=[],u=[],h=[],f=[];let g=0;const A=[],m=n/2;let p=0;x(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(d),this.setAttribute("position",new Jt(u,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(f,2));function x(){const S=new I,C=new I;let T=0;const y=(t-e)/n;for(let w=0;w<=r;w++){const E=[],v=w/r,R=v*(t-e)+e;for(let B=0;B<=i;B++){const F=B/i,U=F*l+a,z=Math.sin(U),N=Math.cos(U);C.x=R*z,C.y=-v*n+m,C.z=R*N,u.push(C.x,C.y,C.z),S.set(z,y,N).normalize(),h.push(S.x,S.y,S.z),f.push(F,1-v),E.push(g++)}A.push(E)}for(let w=0;w<i;w++)for(let E=0;E<r;E++){const v=A[E][w],R=A[E+1][w],B=A[E+1][w+1],F=A[E][w+1];(e>0||E!==0)&&(d.push(v,R,F),T+=3),(t>0||E!==r-1)&&(d.push(R,B,F),T+=3)}c.addGroup(p,T,0),p+=T}function _(S){const C=g,T=new Me,y=new I;let w=0;const E=S===!0?e:t,v=S===!0?1:-1;for(let B=1;B<=i;B++)u.push(0,m*v,0),h.push(0,v,0),f.push(.5,.5),g++;const R=g;for(let B=0;B<=i;B++){const U=B/i*l+a,z=Math.cos(U),N=Math.sin(U);y.x=E*N,y.y=m*v,y.z=E*z,u.push(y.x,y.y,y.z),h.push(0,v,0),T.x=z*.5+.5,T.y=N*.5*v+.5,f.push(T.x,T.y),g++}for(let B=0;B<i;B++){const F=C+B,U=R+B;S===!0?d.push(U,U+1,F):d.push(U+1,U,F),w+=3}c.addGroup(p,w,S===!0?1:2),p+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ms(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _a extends Ms{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new _a(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class es extends dn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,d=l+1,u=e/a,h=t/l,f=[],g=[],A=[],m=[];for(let p=0;p<d;p++){const x=p*h-o;for(let _=0;_<c;_++){const S=_*u-r;g.push(S,-x,0),A.push(0,0,1),m.push(_/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const _=x+c*p,S=x+c*(p+1),C=x+1+c*(p+1),T=x+1+c*p;f.push(_,S,T),f.push(S,C,T)}this.setIndex(f),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(A,3)),this.setAttribute("uv",new Jt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new es(e.width,e.height,e.widthSegments,e.heightSegments)}}class gr extends dn{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const d=[],u=new I,h=new I,f=[],g=[],A=[],m=[];for(let p=0;p<=n;p++){const x=[],_=p/n;let S=0;p===0&&o===0?S=.5/t:p===n&&l===Math.PI&&(S=-.5/t);for(let C=0;C<=t;C++){const T=C/t;u.x=-e*Math.cos(i+T*r)*Math.sin(o+_*a),u.y=e*Math.cos(o+_*a),u.z=e*Math.sin(i+T*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),h.copy(u).normalize(),A.push(h.x,h.y,h.z),m.push(T+S,1-_),x.push(c++)}d.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const _=d[p][x+1],S=d[p][x],C=d[p+1][x],T=d[p+1][x+1];(p!==0||o>0)&&f.push(_,S,T),(p!==n-1||l<Math.PI)&&f.push(S,C,T)}this.setIndex(f),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(A,3)),this.setAttribute("uv",new Jt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Zu extends Mr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=su,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ju extends Mr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class va extends Yc{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class eh extends dn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class th extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class vl{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ke(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}function yl(s,e,t,n){const i=nh(n);switch(t){case Fc:return s*e;case Bc:return s*e/i.components*i.byteLength;case Cr:return s*e/i.components*i.byteLength;case Uc:return s*e*2/i.components*i.byteLength;case ga:return s*e*2/i.components*i.byteLength;case Lc:return s*e*3/i.components*i.byteLength;case Ht:return s*e*4/i.components*i.byteLength;case Gi:return s*e*4/i.components*i.byteLength;case or:case ar:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case lr:case cr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Fo:case Bo:return Math.max(s,16)*Math.max(e,8)/4;case Po:case Lo:return Math.max(s,8)*Math.max(e,8)/2;case Uo:case Oo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case No:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case zo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ko:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ho:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Vo:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Go:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Wo:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Xo:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case qo:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Qo:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Yo:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ko:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case $o:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case jo:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Zo:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case dr:case Jo:case ea:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Oc:case ta:return Math.ceil(s/4)*Math.ceil(e/4)*8;case na:case ia:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function nh(s){switch(s){case Cn:case Ic:return{byteLength:1,components:1};case vs:case Dc:case ns:return{byteLength:2,components:1};case pa:case ma:return{byteLength:2,components:4};case ln:case fa:case An:return{byteLength:4,components:1};case Pc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ha}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ha);function jc(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function ih(s){const e=new WeakMap;function t(a,l){const c=a.array,d=a.usage,u=c.byteLength,h=s.createBuffer();s.bindBuffer(l,h),s.bufferData(l,c,d),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const d=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,d);else{u.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<u.length;f++){const g=u[h],A=u[f];A.start<=g.start+g.count+1?g.count=Math.max(g.count,A.start+A.count-g.start):(++h,u[h]=A)}u.length=h+1;for(let f=0,g=u.length;f<g;f++){const A=u[f];s.bufferSubData(c,A.start*d.BYTES_PER_ELEMENT,d,A.start,A.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var sh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rh=`#ifdef USE_ALPHAHASH
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
#endif`,oh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ah=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ch=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dh=`#ifdef USE_AOMAP
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
#endif`,uh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,fh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ph=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ah=`#ifdef USE_IRIDESCENCE
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
#endif`,xh=`#ifdef USE_BUMPMAP
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
#endif`,Sh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_h=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Eh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ch=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Th=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,bh=`#define PI 3.141592653589793
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
} // validated`,wh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rh=`vec3 transformedNormal = objectNormal;
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
#endif`,Ih=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ph=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uh=`#ifdef USE_ENVMAP
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
#endif`,Oh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nh=`#ifdef USE_ENVMAP
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
#endif`,zh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kh=`#ifdef USE_ENVMAP
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
#endif`,Hh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xh=`#ifdef USE_GRADIENTMAP
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
}`,qh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kh=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,$h=`#ifdef USE_ENVMAP
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
#endif`,jh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ef=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tf=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,nf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,sf=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,rf=`#if defined( RE_IndirectDiffuse )
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
#endif`,of=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,af=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,df=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ff=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pf=`#if defined( USE_POINTS_UV )
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
#endif`,mf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Af=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_f=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,vf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ef=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bf=`#ifdef USE_NORMALMAP
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
#endif`,wf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,If=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Df=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ff=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Lf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Of=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Hf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xf=`#ifdef USE_SKINNING
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
#endif`,qf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qf=`#ifdef USE_SKINNING
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
#endif`,Yf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$f=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jf=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zf=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jf=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ip=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rp=`uniform sampler2D t2D;
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
}`,op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ap=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dp=`#include <common>
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
}`,up=`#if DEPTH_PACKING == 3200
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hp=`#define DISTANCE
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
}`,fp=`#define DISTANCE
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
}`,pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gp=`uniform float scale;
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
}`,Ap=`uniform vec3 diffuse;
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
}`,xp=`#include <common>
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
}`,Sp=`uniform vec3 diffuse;
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
}`,_p=`#define LAMBERT
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
}`,vp=`#define LAMBERT
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
}`,yp=`#define MATCAP
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
}`,Ep=`#define MATCAP
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
}`,Cp=`#define NORMAL
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
}`,Mp=`#define NORMAL
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
}`,Tp=`#define PHONG
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
}`,bp=`#define PHONG
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
}`,wp=`#define STANDARD
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
}`,Rp=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
}`,Ip=`#define TOON
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
}`,Dp=`#define TOON
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
}`,Pp=`uniform float size;
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
}`,Fp=`uniform vec3 diffuse;
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
}`,Lp=`#include <common>
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
}`,Bp=`uniform vec3 color;
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
}`,Up=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Op=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:sh,alphahash_pars_fragment:rh,alphamap_fragment:oh,alphamap_pars_fragment:ah,alphatest_fragment:lh,alphatest_pars_fragment:ch,aomap_fragment:dh,aomap_pars_fragment:uh,batching_pars_vertex:hh,batching_vertex:fh,begin_vertex:ph,beginnormal_vertex:mh,bsdfs:gh,iridescence_fragment:Ah,bumpmap_pars_fragment:xh,clipping_planes_fragment:Sh,clipping_planes_pars_fragment:_h,clipping_planes_pars_vertex:vh,clipping_planes_vertex:yh,color_fragment:Eh,color_pars_fragment:Ch,color_pars_vertex:Mh,color_vertex:Th,common:bh,cube_uv_reflection_fragment:wh,defaultnormal_vertex:Rh,displacementmap_pars_vertex:Ih,displacementmap_vertex:Dh,emissivemap_fragment:Ph,emissivemap_pars_fragment:Fh,colorspace_fragment:Lh,colorspace_pars_fragment:Bh,envmap_fragment:Uh,envmap_common_pars_fragment:Oh,envmap_pars_fragment:Nh,envmap_pars_vertex:zh,envmap_physical_pars_fragment:$h,envmap_vertex:kh,fog_vertex:Hh,fog_pars_vertex:Vh,fog_fragment:Gh,fog_pars_fragment:Wh,gradientmap_pars_fragment:Xh,lightmap_pars_fragment:qh,lights_lambert_fragment:Qh,lights_lambert_pars_fragment:Yh,lights_pars_begin:Kh,lights_toon_fragment:jh,lights_toon_pars_fragment:Zh,lights_phong_fragment:Jh,lights_phong_pars_fragment:ef,lights_physical_fragment:tf,lights_physical_pars_fragment:nf,lights_fragment_begin:sf,lights_fragment_maps:rf,lights_fragment_end:of,logdepthbuf_fragment:af,logdepthbuf_pars_fragment:lf,logdepthbuf_pars_vertex:cf,logdepthbuf_vertex:df,map_fragment:uf,map_pars_fragment:hf,map_particle_fragment:ff,map_particle_pars_fragment:pf,metalnessmap_fragment:mf,metalnessmap_pars_fragment:gf,morphinstance_vertex:Af,morphcolor_vertex:xf,morphnormal_vertex:Sf,morphtarget_pars_vertex:_f,morphtarget_vertex:vf,normal_fragment_begin:yf,normal_fragment_maps:Ef,normal_pars_fragment:Cf,normal_pars_vertex:Mf,normal_vertex:Tf,normalmap_pars_fragment:bf,clearcoat_normal_fragment_begin:wf,clearcoat_normal_fragment_maps:Rf,clearcoat_pars_fragment:If,iridescence_pars_fragment:Df,opaque_fragment:Pf,packing:Ff,premultiplied_alpha_fragment:Lf,project_vertex:Bf,dithering_fragment:Uf,dithering_pars_fragment:Of,roughnessmap_fragment:Nf,roughnessmap_pars_fragment:zf,shadowmap_pars_fragment:kf,shadowmap_pars_vertex:Hf,shadowmap_vertex:Vf,shadowmask_pars_fragment:Gf,skinbase_vertex:Wf,skinning_pars_vertex:Xf,skinning_vertex:qf,skinnormal_vertex:Qf,specularmap_fragment:Yf,specularmap_pars_fragment:Kf,tonemapping_fragment:$f,tonemapping_pars_fragment:jf,transmission_fragment:Zf,transmission_pars_fragment:Jf,uv_pars_fragment:ep,uv_pars_vertex:tp,uv_vertex:np,worldpos_vertex:ip,background_vert:sp,background_frag:rp,backgroundCube_vert:op,backgroundCube_frag:ap,cube_vert:lp,cube_frag:cp,depth_vert:dp,depth_frag:up,distanceRGBA_vert:hp,distanceRGBA_frag:fp,equirect_vert:pp,equirect_frag:mp,linedashed_vert:gp,linedashed_frag:Ap,meshbasic_vert:xp,meshbasic_frag:Sp,meshlambert_vert:_p,meshlambert_frag:vp,meshmatcap_vert:yp,meshmatcap_frag:Ep,meshnormal_vert:Cp,meshnormal_frag:Mp,meshphong_vert:Tp,meshphong_frag:bp,meshphysical_vert:wp,meshphysical_frag:Rp,meshtoon_vert:Ip,meshtoon_frag:Dp,points_vert:Pp,points_frag:Fp,shadow_vert:Lp,shadow_frag:Bp,sprite_vert:Up,sprite_frag:Op},ge={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},xn={basic:{uniforms:zt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:zt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:zt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:zt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:zt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:zt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:zt([ge.points,ge.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:zt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:zt([ge.common,ge.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:zt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:zt([ge.sprite,ge.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:zt([ge.common,ge.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:zt([ge.lights,ge.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};xn.physical={uniforms:zt([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const $s={r:0,b:0,g:0},ci=new On,Np=new ke;function zp(s,e,t,n,i,r,o){const a=new tt(0);let l=r===!0?0:1,c,d,u=null,h=0,f=null;function g(_){let S=_.isScene===!0?_.background:null;return S&&S.isTexture&&(S=(_.backgroundBlurriness>0?t:e).get(S)),S}function A(_){let S=!1;const C=g(_);C===null?p(a,l):C&&C.isColor&&(p(C,1),S=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(_,S){const C=g(S);C&&(C.isCubeTexture||C.mapping===Er)?(d===void 0&&(d=new Et(new is(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:Ji(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(T,y,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),ci.copy(S.backgroundRotation),ci.x*=-1,ci.y*=-1,ci.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),d.material.uniforms.envMap.value=C,d.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Np.makeRotationFromEuler(ci)),d.material.toneMapped=et.getTransfer(C.colorSpace)!==lt,(u!==C||h!==C.version||f!==s.toneMapping)&&(d.material.needsUpdate=!0,u=C,h=C.version,f=s.toneMapping),d.layers.enableAll(),_.unshift(d,d.geometry,d.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Et(new es(2,2),new en({name:"BackgroundMaterial",uniforms:Ji(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=et.getTransfer(C.colorSpace)!==lt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||h!==C.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=C,h=C.version,f=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,S){_.getRGB($s,Qc(s)),n.buffers.color.setClear($s.r,$s.g,$s.b,S,o)}function x(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,S=1){a.set(_),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(a,l)},render:A,addToRenderList:m,dispose:x}}function kp(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=h(null);let r=i,o=!1;function a(v,R,B,F,U){let z=!1;const N=u(F,B,R);r!==N&&(r=N,c(r.object)),z=f(v,F,B,U),z&&g(v,F,B,U),U!==null&&e.update(U,s.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,S(v,R,B,F),U!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return s.createVertexArray()}function c(v){return s.bindVertexArray(v)}function d(v){return s.deleteVertexArray(v)}function u(v,R,B){const F=B.wireframe===!0;let U=n[v.id];U===void 0&&(U={},n[v.id]=U);let z=U[R.id];z===void 0&&(z={},U[R.id]=z);let N=z[F];return N===void 0&&(N=h(l()),z[F]=N),N}function h(v){const R=[],B=[],F=[];for(let U=0;U<t;U++)R[U]=0,B[U]=0,F[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:B,attributeDivisors:F,object:v,attributes:{},index:null}}function f(v,R,B,F){const U=r.attributes,z=R.attributes;let N=0;const W=B.getAttributes();for(const k in W)if(W[k].location>=0){const ee=U[k];let ue=z[k];if(ue===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(ue=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(ue=v.instanceColor)),ee===void 0||ee.attribute!==ue||ue&&ee.data!==ue.data)return!0;N++}return r.attributesNum!==N||r.index!==F}function g(v,R,B,F){const U={},z=R.attributes;let N=0;const W=B.getAttributes();for(const k in W)if(W[k].location>=0){let ee=z[k];ee===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(ee=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(ee=v.instanceColor));const ue={};ue.attribute=ee,ee&&ee.data&&(ue.data=ee.data),U[k]=ue,N++}r.attributes=U,r.attributesNum=N,r.index=F}function A(){const v=r.newAttributes;for(let R=0,B=v.length;R<B;R++)v[R]=0}function m(v){p(v,0)}function p(v,R){const B=r.newAttributes,F=r.enabledAttributes,U=r.attributeDivisors;B[v]=1,F[v]===0&&(s.enableVertexAttribArray(v),F[v]=1),U[v]!==R&&(s.vertexAttribDivisor(v,R),U[v]=R)}function x(){const v=r.newAttributes,R=r.enabledAttributes;for(let B=0,F=R.length;B<F;B++)R[B]!==v[B]&&(s.disableVertexAttribArray(B),R[B]=0)}function _(v,R,B,F,U,z,N){N===!0?s.vertexAttribIPointer(v,R,B,U,z):s.vertexAttribPointer(v,R,B,F,U,z)}function S(v,R,B,F){A();const U=F.attributes,z=B.getAttributes(),N=R.defaultAttributeValues;for(const W in z){const k=z[W];if(k.location>=0){let K=U[W];if(K===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(K=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(K=v.instanceColor)),K!==void 0){const ee=K.normalized,ue=K.itemSize,Re=e.get(K);if(Re===void 0)continue;const Te=Re.buffer,$=Re.type,te=Re.bytesPerElement,oe=$===s.INT||$===s.UNSIGNED_INT||K.gpuType===fa;if(K.isInterleavedBufferAttribute){const se=K.data,fe=se.stride,Le=K.offset;if(se.isInstancedInterleavedBuffer){for(let Se=0;Se<k.locationSize;Se++)p(k.location+Se,se.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Se=0;Se<k.locationSize;Se++)m(k.location+Se);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let Se=0;Se<k.locationSize;Se++)_(k.location+Se,ue/k.locationSize,$,ee,fe*te,(Le+ue/k.locationSize*Se)*te,oe)}else{if(K.isInstancedBufferAttribute){for(let se=0;se<k.locationSize;se++)p(k.location+se,K.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let se=0;se<k.locationSize;se++)m(k.location+se);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let se=0;se<k.locationSize;se++)_(k.location+se,ue/k.locationSize,$,ee,ue*te,ue/k.locationSize*se*te,oe)}}else if(N!==void 0){const ee=N[W];if(ee!==void 0)switch(ee.length){case 2:s.vertexAttrib2fv(k.location,ee);break;case 3:s.vertexAttrib3fv(k.location,ee);break;case 4:s.vertexAttrib4fv(k.location,ee);break;default:s.vertexAttrib1fv(k.location,ee)}}}}x()}function C(){w();for(const v in n){const R=n[v];for(const B in R){const F=R[B];for(const U in F)d(F[U].object),delete F[U];delete R[B]}delete n[v]}}function T(v){if(n[v.id]===void 0)return;const R=n[v.id];for(const B in R){const F=R[B];for(const U in F)d(F[U].object),delete F[U];delete R[B]}delete n[v.id]}function y(v){for(const R in n){const B=n[R];if(B[v.id]===void 0)continue;const F=B[v.id];for(const U in F)d(F[U].object),delete F[U];delete B[v.id]}}function w(){E(),o=!0,r!==i&&(r=i,c(r.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:w,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:y,initAttributes:A,enableAttribute:m,disableUnusedAttributes:x}}function Hp(s,e,t){let n;function i(c){n=c}function r(c,d){s.drawArrays(n,c,d),t.update(d,n,1)}function o(c,d,u){u!==0&&(s.drawArraysInstanced(n,c,d,u),t.update(d,n,u))}function a(c,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,u);let f=0;for(let g=0;g<u;g++)f+=d[g];t.update(f,n,1)}function l(c,d,u,h){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],d[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,d,0,h,0,u);let g=0;for(let A=0;A<u;A++)g+=d[A]*h[A];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Vp(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(y){return!(y!==Ht&&n.convert(y)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){const w=y===ns&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==Cn&&n.convert(y)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&y!==An&&!w)}function l(y){if(y==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const u=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:A,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:S,vertexTextures:C,maxSamples:T}}function Gp(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new qn,a=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const f=u.length!==0||h||n!==0||i;return i=h,n=u.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,f){const g=u.clippingPlanes,A=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?d(null):c();else{const x=r?0:n,_=x*4;let S=p.clippingState||null;l.value=S,S=d(g,h,_,f);for(let C=0;C!==_;++C)S[C]=t[C];p.clippingState=S,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,h,f,g){const A=u!==null?u.length:0;let m=null;if(A!==0){if(m=l.value,g!==!0||m===null){const p=f+A*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,S=f;_!==A;++_,S+=4)o.copy(u[_]).applyMatrix4(x,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,m}}function Wp(s){let e=new WeakMap;function t(o,a){return a===wo?o.mapping=Ki:a===Ro&&(o.mapping=$i),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===wo||a===Ro)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new qu(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Hi=4,El=[.125,.215,.35,.446,.526,.582],fi=20,to=new va,Cl=new tt;let no=null,io=0,so=0,ro=!1;const ui=(1+Math.sqrt(5))/2,Oi=1/ui,Ml=[new I(-ui,Oi,0),new I(ui,Oi,0),new I(-Oi,0,ui),new I(Oi,0,ui),new I(0,ui,-Oi),new I(0,ui,Oi),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Xp=new I;class Tl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=Xp}=r;no=this._renderer.getRenderTarget(),io=this._renderer.getActiveCubeFace(),so=this._renderer.getActiveMipmapLevel(),ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(no,io,so),this._renderer.xr.enabled=ro,e.scissorTest=!1,js(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ki||e.mapping===$i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),no=this._renderer.getRenderTarget(),io=this._renderer.getActiveCubeFace(),so=this._renderer.getActiveMipmapLevel(),ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:ns,format:Ht,colorSpace:Zi,depthBuffer:!1},i=bl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qp(r)),this._blurMaterial=Qp(r,e,t)}return i}_compileMaterial(e){const t=new Et(this._lodPlanes[0],e);this._renderer.compile(t,to)}_sceneToCubeUV(e,t,n,i,r){const l=new on(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Cl),u.toneMapping=ei,u.autoClear=!1;const g=new xi({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),A=new Et(new is,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(Cl),m=!0);for(let x=0;x<6;x++){const _=x%3;_===0?(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[x],r.y,r.z)):_===1?(l.up.set(0,0,c[x]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[x],r.z)):(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[x]));const S=this._cubeSize;js(i,_*S,x>2?S:0,S,S),u.setRenderTarget(i),m&&u.render(A,l),u.render(e,l)}A.geometry.dispose(),A.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ki||e.mapping===$i;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wl());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Et(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;js(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,to)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ml[(i-r-1)%Ml.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new Et(this._lodPlanes[i],c),h=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*fi-1),A=r/g,m=isFinite(r)?1+Math.floor(d*A):fi;m>fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fi}`);const p=[];let x=0;for(let y=0;y<fi;++y){const w=y/A,E=Math.exp(-w*w/2);p.push(E),y===0?x+=E:y<m&&(x+=2*E)}for(let y=0;y<p.length;y++)p[y]=p[y]/x;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-n;const S=this._sizeLods[i],C=3*S*(i>_-Hi?i-_+Hi:0),T=4*(this._cubeSize-S);js(t,C,T,3*S,2*S),l.setRenderTarget(t),l.render(u,to)}}function qp(s){const e=[],t=[],n=[];let i=s;const r=s-Hi+1+El.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Hi?l=El[o-s+Hi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),d=-c,u=1+c,h=[d,d,u,d,u,u,d,d,u,u,d,u],f=6,g=6,A=3,m=2,p=1,x=new Float32Array(A*g*f),_=new Float32Array(m*g*f),S=new Float32Array(p*g*f);for(let T=0;T<f;T++){const y=T%3*2/3-1,w=T>2?0:-1,E=[y,w,0,y+2/3,w,0,y+2/3,w+1,0,y,w,0,y+2/3,w+1,0,y,w+1,0];x.set(E,A*g*T),_.set(h,m*g*T);const v=[T,T,T,T,T,T];S.set(v,p*g*T)}const C=new dn;C.setAttribute("position",new cn(x,A)),C.setAttribute("uv",new cn(_,m)),C.setAttribute("faceIndex",new cn(S,p)),e.push(C),i>Hi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function bl(s,e,t){const n=new ni(s,e,t);return n.texture.mapping=Er,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function js(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Qp(s,e,t){const n=new Float32Array(fi),i=new I(0,1,0);return new en({name:"SphericalGaussianBlur",defines:{n:fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ya(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function wl(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ya(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Rl(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function ya(){return`

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
	`}function Yp(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===wo||l===Ro,d=l===Ki||l===$i;if(c||d){let u=e.get(a);const h=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Tl(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||d&&f&&i(f)?(t===null&&(t=new Tl(s)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Kp(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Wi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function $p(s,e,t,n){const i={},r=new WeakMap;function o(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete i[h.id];const f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(u,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(u){const h=u.attributes;for(const f in h)e.update(h[f],s.ARRAY_BUFFER)}function c(u){const h=[],f=u.index,g=u.attributes.position;let A=0;if(f!==null){const x=f.array;A=f.version;for(let _=0,S=x.length;_<S;_+=3){const C=x[_+0],T=x[_+1],y=x[_+2];h.push(C,T,T,y,y,C)}}else if(g!==void 0){const x=g.array;A=g.version;for(let _=0,S=x.length/3-1;_<S;_+=3){const C=_+0,T=_+1,y=_+2;h.push(C,T,T,y,y,C)}}else return;const m=new(kc(h)?qc:Xc)(h,1);m.version=A;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function d(u){const h=r.get(u);if(h){const f=u.index;f!==null&&h.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:d}}function jp(s,e,t){let n;function i(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,f){s.drawElements(n,f,r,h*o),t.update(f,n,1)}function c(h,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,h*o,g),t.update(f,n,g))}function d(h,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(h,f,g,A){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,f[p],A[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,h,0,A,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x]*A[x];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function Zp(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Jp(s,e,t){const n=new WeakMap,i=new At;function r(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0;let h=n.get(a);if(h===void 0||h.count!==u){let v=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var f=v;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,A=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),A===!0&&(S=2),m===!0&&(S=3);let C=a.attributes.position.count*S,T=1;C>e.maxTextureSize&&(T=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const y=new Float32Array(C*T*4*u),w=new Hc(y,C,T,u);w.type=An,w.needsUpdate=!0;const E=S*4;for(let R=0;R<u;R++){const B=p[R],F=x[R],U=_[R],z=C*T*4*R;for(let N=0;N<B.count;N++){const W=N*E;g===!0&&(i.fromBufferAttribute(B,N),y[z+W+0]=i.x,y[z+W+1]=i.y,y[z+W+2]=i.z,y[z+W+3]=0),A===!0&&(i.fromBufferAttribute(F,N),y[z+W+4]=i.x,y[z+W+5]=i.y,y[z+W+6]=i.z,y[z+W+7]=0),m===!0&&(i.fromBufferAttribute(U,N),y[z+W+8]=i.x,y[z+W+9]=i.y,y[z+W+10]=i.z,y[z+W+11]=U.itemSize===4?i.w:1)}}h={count:u,texture:w,size:new Me(C,T)},n.set(a,h),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const A=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",A),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:r}}function em(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,u=e.get(l,d);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Zc=new Vt,Il=new Sa(1,1),Jc=new Hc,ed=new Tu,td=new Kc,Dl=[],Pl=[],Fl=new Float32Array(16),Ll=new Float32Array(9),Bl=new Float32Array(4);function ss(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Dl[i];if(r===void 0&&(r=new Float32Array(i),Dl[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function wt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Rt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Tr(s,e){let t=Pl[e];t===void 0&&(t=new Int32Array(e),Pl[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function tm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function nm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;s.uniform2fv(this.addr,e),Rt(t,e)}}function im(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;s.uniform3fv(this.addr,e),Rt(t,e)}}function sm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;s.uniform4fv(this.addr,e),Rt(t,e)}}function rm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,n))return;Bl.set(n),s.uniformMatrix2fv(this.addr,!1,Bl),Rt(t,n)}}function om(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,n))return;Ll.set(n),s.uniformMatrix3fv(this.addr,!1,Ll),Rt(t,n)}}function am(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,n))return;Fl.set(n),s.uniformMatrix4fv(this.addr,!1,Fl),Rt(t,n)}}function lm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function cm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;s.uniform2iv(this.addr,e),Rt(t,e)}}function dm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;s.uniform3iv(this.addr,e),Rt(t,e)}}function um(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;s.uniform4iv(this.addr,e),Rt(t,e)}}function hm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function fm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;s.uniform2uiv(this.addr,e),Rt(t,e)}}function pm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;s.uniform3uiv(this.addr,e),Rt(t,e)}}function mm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;s.uniform4uiv(this.addr,e),Rt(t,e)}}function gm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Il.compareFunction=Nc,r=Il):r=Zc,t.setTexture2D(e||r,i)}function Am(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ed,i)}function xm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||td,i)}function Sm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Jc,i)}function _m(s){switch(s){case 5126:return tm;case 35664:return nm;case 35665:return im;case 35666:return sm;case 35674:return rm;case 35675:return om;case 35676:return am;case 5124:case 35670:return lm;case 35667:case 35671:return cm;case 35668:case 35672:return dm;case 35669:case 35673:return um;case 5125:return hm;case 36294:return fm;case 36295:return pm;case 36296:return mm;case 35678:case 36198:case 36298:case 36306:case 35682:return gm;case 35679:case 36299:case 36307:return Am;case 35680:case 36300:case 36308:case 36293:return xm;case 36289:case 36303:case 36311:case 36292:return Sm}}function vm(s,e){s.uniform1fv(this.addr,e)}function ym(s,e){const t=ss(e,this.size,2);s.uniform2fv(this.addr,t)}function Em(s,e){const t=ss(e,this.size,3);s.uniform3fv(this.addr,t)}function Cm(s,e){const t=ss(e,this.size,4);s.uniform4fv(this.addr,t)}function Mm(s,e){const t=ss(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Tm(s,e){const t=ss(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function bm(s,e){const t=ss(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function wm(s,e){s.uniform1iv(this.addr,e)}function Rm(s,e){s.uniform2iv(this.addr,e)}function Im(s,e){s.uniform3iv(this.addr,e)}function Dm(s,e){s.uniform4iv(this.addr,e)}function Pm(s,e){s.uniform1uiv(this.addr,e)}function Fm(s,e){s.uniform2uiv(this.addr,e)}function Lm(s,e){s.uniform3uiv(this.addr,e)}function Bm(s,e){s.uniform4uiv(this.addr,e)}function Um(s,e,t){const n=this.cache,i=e.length,r=Tr(t,i);wt(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Zc,r[o])}function Om(s,e,t){const n=this.cache,i=e.length,r=Tr(t,i);wt(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||ed,r[o])}function Nm(s,e,t){const n=this.cache,i=e.length,r=Tr(t,i);wt(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||td,r[o])}function zm(s,e,t){const n=this.cache,i=e.length,r=Tr(t,i);wt(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Jc,r[o])}function km(s){switch(s){case 5126:return vm;case 35664:return ym;case 35665:return Em;case 35666:return Cm;case 35674:return Mm;case 35675:return Tm;case 35676:return bm;case 5124:case 35670:return wm;case 35667:case 35671:return Rm;case 35668:case 35672:return Im;case 35669:case 35673:return Dm;case 5125:return Pm;case 36294:return Fm;case 36295:return Lm;case 36296:return Bm;case 35678:case 36198:case 36298:case 36306:case 35682:return Um;case 35679:case 36299:case 36307:return Om;case 35680:case 36300:case 36308:case 36293:return Nm;case 36289:case 36303:case 36311:case 36292:return zm}}class Hm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_m(t.type)}}class Vm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=km(t.type)}}class Gm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const oo=/(\w+)(\])?(\[|\.)?/g;function Ul(s,e){s.seq.push(e),s.map[e.id]=e}function Wm(s,e,t){const n=s.name,i=n.length;for(oo.lastIndex=0;;){const r=oo.exec(n),o=oo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ul(t,c===void 0?new Hm(a,s,e):new Vm(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Gm(a),Ul(t,u)),t=u}}}class hr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Wm(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Ol(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Xm=37297;let qm=0;function Qm(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Nl=new Ne;function Ym(s){et._getMatrix(Nl,et.workingColorSpace,s);const e=`mat3( ${Nl.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(s)){case fr:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function zl(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Qm(s.getShaderSource(e),o)}else return i}function Km(s,e){const t=Ym(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function $m(s,e){let t;switch(e){case $d:t="Linear";break;case jd:t="Reinhard";break;case Zd:t="Cineon";break;case Jd:t="ACESFilmic";break;case tu:t="AgX";break;case nu:t="Neutral";break;case eu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Zs=new I;function jm(){et.getLuminanceCoefficients(Zs);const s=Zs.x.toFixed(4),e=Zs.y.toFixed(4),t=Zs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(us).join(`
`)}function Jm(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function eg(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function us(s){return s!==""}function kl(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hl(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ra(s){return s.replace(tg,ig)}const ng=new Map;function ig(s,e){let t=Ye[e];if(t===void 0){const n=ng.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ra(t)}const sg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vl(s){return s.replace(sg,rg)}function rg(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Gl(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function og(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Tc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Id?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Pn&&(e="SHADOWMAP_TYPE_VSM"),e}function ag(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ki:case $i:e="ENVMAP_TYPE_CUBE";break;case Er:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lg(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===$i&&(e="ENVMAP_MODE_REFRACTION"),e}function cg(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case wc:e="ENVMAP_BLENDING_MULTIPLY";break;case Yd:e="ENVMAP_BLENDING_MIX";break;case Kd:e="ENVMAP_BLENDING_ADD";break}return e}function dg(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ug(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=og(t),c=ag(t),d=lg(t),u=cg(t),h=dg(t),f=Zm(t),g=Jm(r),A=i.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(us).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(us).join(`
`),p.length>0&&(p+=`
`)):(m=[Gl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(us).join(`
`),p=[Gl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ei?"#define TONE_MAPPING":"",t.toneMapping!==ei?Ye.tonemapping_pars_fragment:"",t.toneMapping!==ei?$m("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,Km("linearToOutputTexel",t.outputColorSpace),jm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(us).join(`
`)),o=ra(o),o=kl(o,t),o=Hl(o,t),a=ra(a),a=kl(a,t),a=Hl(a,t),o=Vl(o),a=Vl(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===il?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=x+m+o,S=x+p+a,C=Ol(i,i.VERTEX_SHADER,_),T=Ol(i,i.FRAGMENT_SHADER,S);i.attachShader(A,C),i.attachShader(A,T),t.index0AttributeName!==void 0?i.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(A,0,"position"),i.linkProgram(A);function y(R){if(s.debug.checkShaderErrors){const B=i.getProgramInfoLog(A).trim(),F=i.getShaderInfoLog(C).trim(),U=i.getShaderInfoLog(T).trim();let z=!0,N=!0;if(i.getProgramParameter(A,i.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,A,C,T);else{const W=zl(i,C,"vertex"),k=zl(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(A,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+W+`
`+k)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(F===""||U==="")&&(N=!1);N&&(R.diagnostics={runnable:z,programLog:B,vertexShader:{log:F,prefix:m},fragmentShader:{log:U,prefix:p}})}i.deleteShader(C),i.deleteShader(T),w=new hr(i,A),E=eg(i,A)}let w;this.getUniforms=function(){return w===void 0&&y(this),w};let E;this.getAttributes=function(){return E===void 0&&y(this),E};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(A,Xm)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qm++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=C,this.fragmentShader=T,this}let hg=0;class fg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new pg(e),t.set(e,n)),n}}class pg{constructor(e){this.id=hg++,this.code=e,this.usedTimes=0}}function mg(s,e,t,n,i,r,o){const a=new Gc,l=new fg,c=new Set,d=[],u=i.logarithmicDepthBuffer,h=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,v,R,B,F){const U=B.fog,z=F.geometry,N=E.isMeshStandardMaterial?B.environment:null,W=(E.isMeshStandardMaterial?t:e).get(E.envMap||N),k=W&&W.mapping===Er?W.image.height:null,K=g[E.type];E.precision!==null&&(f=i.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const ee=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ue=ee!==void 0?ee.length:0;let Re=0;z.morphAttributes.position!==void 0&&(Re=1),z.morphAttributes.normal!==void 0&&(Re=2),z.morphAttributes.color!==void 0&&(Re=3);let Te,$,te,oe;if(K){const rt=xn[K];Te=rt.vertexShader,$=rt.fragmentShader}else Te=E.vertexShader,$=E.fragmentShader,l.update(E),te=l.getVertexShaderID(E),oe=l.getFragmentShaderID(E);const se=s.getRenderTarget(),fe=s.state.buffers.depth.getReversed(),Le=F.isInstancedMesh===!0,Se=F.isBatchedMesh===!0,Qe=!!E.map,We=!!E.matcap,Pe=!!W,P=!!E.aoMap,Xe=!!E.lightMap,Ge=!!E.bumpMap,$e=!!E.normalMap,pe=!!E.displacementMap,He=!!E.emissiveMap,Ie=!!E.metalnessMap,qe=!!E.roughnessMap,yt=E.anisotropy>0,D=E.clearcoat>0,M=E.dispersion>0,q=E.iridescence>0,Z=E.sheen>0,ne=E.transmission>0,j=yt&&!!E.anisotropyMap,De=D&&!!E.clearcoatMap,he=D&&!!E.clearcoatNormalMap,Ce=D&&!!E.clearcoatRoughnessMap,L=q&&!!E.iridescenceMap,X=q&&!!E.iridescenceThicknessMap,le=Z&&!!E.sheenColorMap,_e=Z&&!!E.sheenRoughnessMap,Ee=!!E.specularMap,ce=!!E.specularColorMap,Be=!!E.specularIntensityMap,O=ne&&!!E.transmissionMap,me=ne&&!!E.thicknessMap,ie=!!E.gradientMap,Ae=!!E.alphaMap,re=E.alphaTest>0,J=!!E.alphaHash,ve=!!E.extensions;let Oe=ei;E.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Oe=s.toneMapping);const dt={shaderID:K,shaderType:E.type,shaderName:E.name,vertexShader:Te,fragmentShader:$,defines:E.defines,customVertexShaderID:te,customFragmentShaderID:oe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Se,batchingColor:Se&&F._colorsTexture!==null,instancing:Le,instancingColor:Le&&F.instanceColor!==null,instancingMorph:Le&&F.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:se===null?s.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Zi,alphaToCoverage:!!E.alphaToCoverage,map:Qe,matcap:We,envMap:Pe,envMapMode:Pe&&W.mapping,envMapCubeUVHeight:k,aoMap:P,lightMap:Xe,bumpMap:Ge,normalMap:$e,displacementMap:h&&pe,emissiveMap:He,normalMapObjectSpace:$e&&E.normalMapType===au,normalMapTangentSpace:$e&&E.normalMapType===ou,metalnessMap:Ie,roughnessMap:qe,anisotropy:yt,anisotropyMap:j,clearcoat:D,clearcoatMap:De,clearcoatNormalMap:he,clearcoatRoughnessMap:Ce,dispersion:M,iridescence:q,iridescenceMap:L,iridescenceThicknessMap:X,sheen:Z,sheenColorMap:le,sheenRoughnessMap:_e,specularMap:Ee,specularColorMap:ce,specularIntensityMap:Be,transmission:ne,transmissionMap:O,thicknessMap:me,gradientMap:ie,opaque:E.transparent===!1&&E.blending===Jn&&E.alphaToCoverage===!1,alphaMap:Ae,alphaTest:re,alphaHash:J,combine:E.combine,mapUv:Qe&&A(E.map.channel),aoMapUv:P&&A(E.aoMap.channel),lightMapUv:Xe&&A(E.lightMap.channel),bumpMapUv:Ge&&A(E.bumpMap.channel),normalMapUv:$e&&A(E.normalMap.channel),displacementMapUv:pe&&A(E.displacementMap.channel),emissiveMapUv:He&&A(E.emissiveMap.channel),metalnessMapUv:Ie&&A(E.metalnessMap.channel),roughnessMapUv:qe&&A(E.roughnessMap.channel),anisotropyMapUv:j&&A(E.anisotropyMap.channel),clearcoatMapUv:De&&A(E.clearcoatMap.channel),clearcoatNormalMapUv:he&&A(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&A(E.clearcoatRoughnessMap.channel),iridescenceMapUv:L&&A(E.iridescenceMap.channel),iridescenceThicknessMapUv:X&&A(E.iridescenceThicknessMap.channel),sheenColorMapUv:le&&A(E.sheenColorMap.channel),sheenRoughnessMapUv:_e&&A(E.sheenRoughnessMap.channel),specularMapUv:Ee&&A(E.specularMap.channel),specularColorMapUv:ce&&A(E.specularColorMap.channel),specularIntensityMapUv:Be&&A(E.specularIntensityMap.channel),transmissionMapUv:O&&A(E.transmissionMap.channel),thicknessMapUv:me&&A(E.thicknessMap.channel),alphaMapUv:Ae&&A(E.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&($e||yt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!z.attributes.uv&&(Qe||Ae),fog:!!U,useFog:E.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:fe,skinning:F.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Re,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Qe&&E.map.isVideoTexture===!0&&et.getTransfer(E.map.colorSpace)===lt,decodeVideoTextureEmissive:He&&E.emissiveMap.isVideoTexture===!0&&et.getTransfer(E.emissiveMap.colorSpace)===lt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===an,flipSided:E.side===qt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ve&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&E.extensions.multiDraw===!0||Se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return dt.vertexUv1s=c.has(1),dt.vertexUv2s=c.has(2),dt.vertexUv3s=c.has(3),c.clear(),dt}function p(E){const v=[];if(E.shaderID?v.push(E.shaderID):(v.push(E.customVertexShaderID),v.push(E.customFragmentShaderID)),E.defines!==void 0)for(const R in E.defines)v.push(R),v.push(E.defines[R]);return E.isRawShaderMaterial===!1&&(x(v,E),_(v,E),v.push(s.outputColorSpace)),v.push(E.customProgramCacheKey),v.join()}function x(E,v){E.push(v.precision),E.push(v.outputColorSpace),E.push(v.envMapMode),E.push(v.envMapCubeUVHeight),E.push(v.mapUv),E.push(v.alphaMapUv),E.push(v.lightMapUv),E.push(v.aoMapUv),E.push(v.bumpMapUv),E.push(v.normalMapUv),E.push(v.displacementMapUv),E.push(v.emissiveMapUv),E.push(v.metalnessMapUv),E.push(v.roughnessMapUv),E.push(v.anisotropyMapUv),E.push(v.clearcoatMapUv),E.push(v.clearcoatNormalMapUv),E.push(v.clearcoatRoughnessMapUv),E.push(v.iridescenceMapUv),E.push(v.iridescenceThicknessMapUv),E.push(v.sheenColorMapUv),E.push(v.sheenRoughnessMapUv),E.push(v.specularMapUv),E.push(v.specularColorMapUv),E.push(v.specularIntensityMapUv),E.push(v.transmissionMapUv),E.push(v.thicknessMapUv),E.push(v.combine),E.push(v.fogExp2),E.push(v.sizeAttenuation),E.push(v.morphTargetsCount),E.push(v.morphAttributeCount),E.push(v.numDirLights),E.push(v.numPointLights),E.push(v.numSpotLights),E.push(v.numSpotLightMaps),E.push(v.numHemiLights),E.push(v.numRectAreaLights),E.push(v.numDirLightShadows),E.push(v.numPointLightShadows),E.push(v.numSpotLightShadows),E.push(v.numSpotLightShadowsWithMaps),E.push(v.numLightProbes),E.push(v.shadowMapType),E.push(v.toneMapping),E.push(v.numClippingPlanes),E.push(v.numClipIntersection),E.push(v.depthPacking)}function _(E,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),E.push(a.mask)}function S(E){const v=g[E.type];let R;if(v){const B=xn[v];R=Vu.clone(B.uniforms)}else R=E.uniforms;return R}function C(E,v){let R;for(let B=0,F=d.length;B<F;B++){const U=d[B];if(U.cacheKey===v){R=U,++R.usedTimes;break}}return R===void 0&&(R=new ug(s,v,E,r),d.push(R)),R}function T(E){if(--E.usedTimes===0){const v=d.indexOf(E);d[v]=d[d.length-1],d.pop(),E.destroy()}}function y(E){l.remove(E)}function w(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:C,releaseProgram:T,releaseShaderCache:y,programs:d,dispose:w}}function gg(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Ag(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Wl(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Xl(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,h,f,g,A,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:h,material:f,groupOrder:g,renderOrder:u.renderOrder,z:A,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=A,p.group=m),e++,p}function a(u,h,f,g,A,m){const p=o(u,h,f,g,A,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,h,f,g,A,m){const p=o(u,h,f,g,A,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,h){t.length>1&&t.sort(u||Ag),n.length>1&&n.sort(h||Wl),i.length>1&&i.sort(h||Wl)}function d(){for(let u=e,h=s.length;u<h;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:d,sort:c}}function xg(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Xl,s.set(n,[o])):i>=r.length?(o=new Xl,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Sg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new tt};break;case"SpotLight":t={position:new I,direction:new I,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function _g(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let vg=0;function yg(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Eg(s){const e=new Sg,t=_g(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const i=new I,r=new ke,o=new ke;function a(c){let d=0,u=0,h=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,A=0,m=0,p=0,x=0,_=0,S=0,C=0,T=0,y=0;c.sort(yg);for(let E=0,v=c.length;E<v;E++){const R=c[E],B=R.color,F=R.intensity,U=R.distance,z=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=B.r*F,u+=B.g*F,h+=B.b*F;else if(R.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(R.sh.coefficients[N],F);y++}else if(R.isDirectionalLight){const N=e.get(R);if(N.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const W=R.shadow,k=t.get(R);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=z,n.directionalShadowMatrix[f]=R.shadow.matrix,x++}n.directional[f]=N,f++}else if(R.isSpotLight){const N=e.get(R);N.position.setFromMatrixPosition(R.matrixWorld),N.color.copy(B).multiplyScalar(F),N.distance=U,N.coneCos=Math.cos(R.angle),N.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),N.decay=R.decay,n.spot[A]=N;const W=R.shadow;if(R.map&&(n.spotLightMap[C]=R.map,C++,W.updateMatrices(R),R.castShadow&&T++),n.spotLightMatrix[A]=W.matrix,R.castShadow){const k=t.get(R);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,n.spotShadow[A]=k,n.spotShadowMap[A]=z,S++}A++}else if(R.isRectAreaLight){const N=e.get(R);N.color.copy(B).multiplyScalar(F),N.halfWidth.set(R.width*.5,0,0),N.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=N,m++}else if(R.isPointLight){const N=e.get(R);if(N.color.copy(R.color).multiplyScalar(R.intensity),N.distance=R.distance,N.decay=R.decay,R.castShadow){const W=R.shadow,k=t.get(R);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,k.shadowCameraNear=W.camera.near,k.shadowCameraFar=W.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=R.shadow.matrix,_++}n.point[g]=N,g++}else if(R.isHemisphereLight){const N=e.get(R);N.skyColor.copy(R.color).multiplyScalar(F),N.groundColor.copy(R.groundColor).multiplyScalar(F),n.hemi[p]=N,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=h;const w=n.hash;(w.directionalLength!==f||w.pointLength!==g||w.spotLength!==A||w.rectAreaLength!==m||w.hemiLength!==p||w.numDirectionalShadows!==x||w.numPointShadows!==_||w.numSpotShadows!==S||w.numSpotMaps!==C||w.numLightProbes!==y)&&(n.directional.length=f,n.spot.length=A,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=S+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=y,w.directionalLength=f,w.pointLength=g,w.spotLength=A,w.rectAreaLength=m,w.hemiLength=p,w.numDirectionalShadows=x,w.numPointShadows=_,w.numSpotShadows=S,w.numSpotMaps=C,w.numLightProbes=y,n.version=vg++)}function l(c,d){let u=0,h=0,f=0,g=0,A=0;const m=d.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const _=c[p];if(_.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),u++}else if(_.isSpotLight){const S=n.spot[f];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),f++}else if(_.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const S=n.point[h];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),h++}else if(_.isHemisphereLight){const S=n.hemi[A];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(m),A++}}}return{setup:a,setupView:l,state:n}}function ql(s){const e=new Eg(s),t=[],n=[];function i(d){c.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function o(d){n.push(d)}function a(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Cg(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new ql(s),e.set(i,[a])):r>=o.length?(a=new ql(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Mg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tg=`uniform sampler2D shadow_pass;
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
}`;function bg(s,e,t){let n=new $c;const i=new Me,r=new Me,o=new At,a=new Zu({depthPacking:ru}),l=new Ju,c={},d=t.maxTextureSize,u={[En]:qt,[qt]:En,[an]:an},h=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:Mg,fragmentShader:Tg}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new dn;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Et(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tc;let p=this.type;this.render=function(T,y,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const E=s.getRenderTarget(),v=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),B=s.state;B.setBlending(Zn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const F=p!==Pn&&this.type===Pn,U=p===Pn&&this.type!==Pn;for(let z=0,N=T.length;z<N;z++){const W=T[z],k=W.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const K=k.getFrameExtents();if(i.multiply(K),r.copy(k.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(r.x=Math.floor(d/K.x),i.x=r.x*K.x,k.mapSize.x=r.x),i.y>d&&(r.y=Math.floor(d/K.y),i.y=r.y*K.y,k.mapSize.y=r.y)),k.map===null||F===!0||U===!0){const ue=this.type!==Pn?{minFilter:Zt,magFilter:Zt}:{};k.map!==null&&k.map.dispose(),k.map=new ni(i.x,i.y,ue),k.map.texture.name=W.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();const ee=k.getViewportCount();for(let ue=0;ue<ee;ue++){const Re=k.getViewport(ue);o.set(r.x*Re.x,r.y*Re.y,r.x*Re.z,r.y*Re.w),B.viewport(o),k.updateMatrices(W,ue),n=k.getFrustum(),S(y,w,k.camera,W,this.type)}k.isPointLightShadow!==!0&&this.type===Pn&&x(k,w),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(E,v,R)};function x(T,y){const w=e.update(A);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ni(i.x,i.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(y,null,w,h,A,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(y,null,w,f,A,null)}function _(T,y,w,E){let v=null;const R=w.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)v=R;else if(v=w.isPointLight===!0?l:a,s.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){const B=v.uuid,F=y.uuid;let U=c[B];U===void 0&&(U={},c[B]=U);let z=U[F];z===void 0&&(z=v.clone(),U[F]=z,y.addEventListener("dispose",C)),v=z}if(v.visible=y.visible,v.wireframe=y.wireframe,E===Pn?v.side=y.shadowSide!==null?y.shadowSide:y.side:v.side=y.shadowSide!==null?y.shadowSide:u[y.side],v.alphaMap=y.alphaMap,v.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,v.map=y.map,v.clipShadows=y.clipShadows,v.clippingPlanes=y.clippingPlanes,v.clipIntersection=y.clipIntersection,v.displacementMap=y.displacementMap,v.displacementScale=y.displacementScale,v.displacementBias=y.displacementBias,v.wireframeLinewidth=y.wireframeLinewidth,v.linewidth=y.linewidth,w.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const B=s.properties.get(v);B.light=w}return v}function S(T,y,w,E,v){if(T.visible===!1)return;if(T.layers.test(y.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===Pn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,T.matrixWorld);const F=e.update(T),U=T.material;if(Array.isArray(U)){const z=F.groups;for(let N=0,W=z.length;N<W;N++){const k=z[N],K=U[k.materialIndex];if(K&&K.visible){const ee=_(T,K,E,v);T.onBeforeShadow(s,T,y,w,F,ee,k),s.renderBufferDirect(w,null,F,ee,T,k),T.onAfterShadow(s,T,y,w,F,ee,k)}}}else if(U.visible){const z=_(T,U,E,v);T.onBeforeShadow(s,T,y,w,F,z,null),s.renderBufferDirect(w,null,F,z,T,null),T.onAfterShadow(s,T,y,w,F,z,null)}}const B=T.children;for(let F=0,U=B.length;F<U;F++)S(B[F],y,w,E,v)}function C(T){T.target.removeEventListener("dispose",C);for(const w in c){const E=c[w],v=T.target.uuid;v in E&&(E[v].dispose(),delete E[v])}}}const wg={[vo]:yo,[Eo]:To,[Co]:bo,[Yi]:Mo,[yo]:vo,[To]:Eo,[bo]:Co,[Mo]:Yi};function Rg(s,e){function t(){let O=!1;const me=new At;let ie=null;const Ae=new At(0,0,0,0);return{setMask:function(re){ie!==re&&!O&&(s.colorMask(re,re,re,re),ie=re)},setLocked:function(re){O=re},setClear:function(re,J,ve,Oe,dt){dt===!0&&(re*=Oe,J*=Oe,ve*=Oe),me.set(re,J,ve,Oe),Ae.equals(me)===!1&&(s.clearColor(re,J,ve,Oe),Ae.copy(me))},reset:function(){O=!1,ie=null,Ae.set(-1,0,0,0)}}}function n(){let O=!1,me=!1,ie=null,Ae=null,re=null;return{setReversed:function(J){if(me!==J){const ve=e.get("EXT_clip_control");J?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),me=J;const Oe=re;re=null,this.setClear(Oe)}},getReversed:function(){return me},setTest:function(J){J?se(s.DEPTH_TEST):fe(s.DEPTH_TEST)},setMask:function(J){ie!==J&&!O&&(s.depthMask(J),ie=J)},setFunc:function(J){if(me&&(J=wg[J]),Ae!==J){switch(J){case vo:s.depthFunc(s.NEVER);break;case yo:s.depthFunc(s.ALWAYS);break;case Eo:s.depthFunc(s.LESS);break;case Yi:s.depthFunc(s.LEQUAL);break;case Co:s.depthFunc(s.EQUAL);break;case Mo:s.depthFunc(s.GEQUAL);break;case To:s.depthFunc(s.GREATER);break;case bo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ae=J}},setLocked:function(J){O=J},setClear:function(J){re!==J&&(me&&(J=1-J),s.clearDepth(J),re=J)},reset:function(){O=!1,ie=null,Ae=null,re=null,me=!1}}}function i(){let O=!1,me=null,ie=null,Ae=null,re=null,J=null,ve=null,Oe=null,dt=null;return{setTest:function(rt){O||(rt?se(s.STENCIL_TEST):fe(s.STENCIL_TEST))},setMask:function(rt){me!==rt&&!O&&(s.stencilMask(rt),me=rt)},setFunc:function(rt,un,Mn){(ie!==rt||Ae!==un||re!==Mn)&&(s.stencilFunc(rt,un,Mn),ie=rt,Ae=un,re=Mn)},setOp:function(rt,un,Mn){(J!==rt||ve!==un||Oe!==Mn)&&(s.stencilOp(rt,un,Mn),J=rt,ve=un,Oe=Mn)},setLocked:function(rt){O=rt},setClear:function(rt){dt!==rt&&(s.clearStencil(rt),dt=rt)},reset:function(){O=!1,me=null,ie=null,Ae=null,re=null,J=null,ve=null,Oe=null,dt=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let d={},u={},h=new WeakMap,f=[],g=null,A=!1,m=null,p=null,x=null,_=null,S=null,C=null,T=null,y=new tt(0,0,0),w=0,E=!1,v=null,R=null,B=null,F=null,U=null;const z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,W=0;const k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(k)[1]),N=W>=1):k.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),N=W>=2);let K=null,ee={};const ue=s.getParameter(s.SCISSOR_BOX),Re=s.getParameter(s.VIEWPORT),Te=new At().fromArray(ue),$=new At().fromArray(Re);function te(O,me,ie,Ae){const re=new Uint8Array(4),J=s.createTexture();s.bindTexture(O,J),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ve=0;ve<ie;ve++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(me,0,s.RGBA,1,1,Ae,0,s.RGBA,s.UNSIGNED_BYTE,re):s.texImage2D(me+ve,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,re);return J}const oe={};oe[s.TEXTURE_2D]=te(s.TEXTURE_2D,s.TEXTURE_2D,1),oe[s.TEXTURE_CUBE_MAP]=te(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[s.TEXTURE_2D_ARRAY]=te(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),oe[s.TEXTURE_3D]=te(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(s.DEPTH_TEST),o.setFunc(Yi),Ge(!1),$e(ja),se(s.CULL_FACE),P(Zn);function se(O){d[O]!==!0&&(s.enable(O),d[O]=!0)}function fe(O){d[O]!==!1&&(s.disable(O),d[O]=!1)}function Le(O,me){return u[O]!==me?(s.bindFramebuffer(O,me),u[O]=me,O===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=me),O===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=me),!0):!1}function Se(O,me){let ie=f,Ae=!1;if(O){ie=h.get(me),ie===void 0&&(ie=[],h.set(me,ie));const re=O.textures;if(ie.length!==re.length||ie[0]!==s.COLOR_ATTACHMENT0){for(let J=0,ve=re.length;J<ve;J++)ie[J]=s.COLOR_ATTACHMENT0+J;ie.length=re.length,Ae=!0}}else ie[0]!==s.BACK&&(ie[0]=s.BACK,Ae=!0);Ae&&s.drawBuffers(ie)}function Qe(O){return g!==O?(s.useProgram(O),g=O,!0):!1}const We={[hi]:s.FUNC_ADD,[Dd]:s.FUNC_SUBTRACT,[Pd]:s.FUNC_REVERSE_SUBTRACT};We[Fd]=s.MIN,We[Ld]=s.MAX;const Pe={[Bd]:s.ZERO,[Ud]:s.ONE,[Od]:s.SRC_COLOR,[Ss]:s.SRC_ALPHA,[Gd]:s.SRC_ALPHA_SATURATE,[Hd]:s.DST_COLOR,[zd]:s.DST_ALPHA,[Nd]:s.ONE_MINUS_SRC_COLOR,[_s]:s.ONE_MINUS_SRC_ALPHA,[Vd]:s.ONE_MINUS_DST_COLOR,[kd]:s.ONE_MINUS_DST_ALPHA,[Wd]:s.CONSTANT_COLOR,[Xd]:s.ONE_MINUS_CONSTANT_COLOR,[qd]:s.CONSTANT_ALPHA,[Qd]:s.ONE_MINUS_CONSTANT_ALPHA};function P(O,me,ie,Ae,re,J,ve,Oe,dt,rt){if(O===Zn){A===!0&&(fe(s.BLEND),A=!1);return}if(A===!1&&(se(s.BLEND),A=!0),O!==bc){if(O!==m||rt!==E){if((p!==hi||S!==hi)&&(s.blendEquation(s.FUNC_ADD),p=hi,S=hi),rt)switch(O){case Jn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Za:s.blendFunc(s.ONE,s.ONE);break;case Ja:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case el:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Jn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Za:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ja:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case el:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}x=null,_=null,C=null,T=null,y.set(0,0,0),w=0,m=O,E=rt}return}re=re||me,J=J||ie,ve=ve||Ae,(me!==p||re!==S)&&(s.blendEquationSeparate(We[me],We[re]),p=me,S=re),(ie!==x||Ae!==_||J!==C||ve!==T)&&(s.blendFuncSeparate(Pe[ie],Pe[Ae],Pe[J],Pe[ve]),x=ie,_=Ae,C=J,T=ve),(Oe.equals(y)===!1||dt!==w)&&(s.blendColor(Oe.r,Oe.g,Oe.b,dt),y.copy(Oe),w=dt),m=O,E=!1}function Xe(O,me){O.side===an?fe(s.CULL_FACE):se(s.CULL_FACE);let ie=O.side===qt;me&&(ie=!ie),Ge(ie),O.blending===Jn&&O.transparent===!1?P(Zn):P(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const Ae=O.stencilWrite;a.setTest(Ae),Ae&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),He(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?se(s.SAMPLE_ALPHA_TO_COVERAGE):fe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(O){v!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),v=O)}function $e(O){O!==wd?(se(s.CULL_FACE),O!==R&&(O===ja?s.cullFace(s.BACK):O===Rd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):fe(s.CULL_FACE),R=O}function pe(O){O!==B&&(N&&s.lineWidth(O),B=O)}function He(O,me,ie){O?(se(s.POLYGON_OFFSET_FILL),(F!==me||U!==ie)&&(s.polygonOffset(me,ie),F=me,U=ie)):fe(s.POLYGON_OFFSET_FILL)}function Ie(O){O?se(s.SCISSOR_TEST):fe(s.SCISSOR_TEST)}function qe(O){O===void 0&&(O=s.TEXTURE0+z-1),K!==O&&(s.activeTexture(O),K=O)}function yt(O,me,ie){ie===void 0&&(K===null?ie=s.TEXTURE0+z-1:ie=K);let Ae=ee[ie];Ae===void 0&&(Ae={type:void 0,texture:void 0},ee[ie]=Ae),(Ae.type!==O||Ae.texture!==me)&&(K!==ie&&(s.activeTexture(ie),K=ie),s.bindTexture(O,me||oe[O]),Ae.type=O,Ae.texture=me)}function D(){const O=ee[K];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function M(){try{s.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function q(){try{s.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{s.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ne(){try{s.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function j(){try{s.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function De(){try{s.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{s.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ce(){try{s.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function L(){try{s.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function X(){try{s.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function le(O){Te.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),Te.copy(O))}function _e(O){$.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),$.copy(O))}function Ee(O,me){let ie=c.get(me);ie===void 0&&(ie=new WeakMap,c.set(me,ie));let Ae=ie.get(O);Ae===void 0&&(Ae=s.getUniformBlockIndex(me,O.name),ie.set(O,Ae))}function ce(O,me){const Ae=c.get(me).get(O);l.get(me)!==Ae&&(s.uniformBlockBinding(me,Ae,O.__bindingPointIndex),l.set(me,Ae))}function Be(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},K=null,ee={},u={},h=new WeakMap,f=[],g=null,A=!1,m=null,p=null,x=null,_=null,S=null,C=null,T=null,y=new tt(0,0,0),w=0,E=!1,v=null,R=null,B=null,F=null,U=null,Te.set(0,0,s.canvas.width,s.canvas.height),$.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:se,disable:fe,bindFramebuffer:Le,drawBuffers:Se,useProgram:Qe,setBlending:P,setMaterial:Xe,setFlipSided:Ge,setCullFace:$e,setLineWidth:pe,setPolygonOffset:He,setScissorTest:Ie,activeTexture:qe,bindTexture:yt,unbindTexture:D,compressedTexImage2D:M,compressedTexImage3D:q,texImage2D:L,texImage3D:X,updateUBOMapping:Ee,uniformBlockBinding:ce,texStorage2D:he,texStorage3D:Ce,texSubImage2D:Z,texSubImage3D:ne,compressedTexSubImage2D:j,compressedTexSubImage3D:De,scissor:le,viewport:_e,reset:Be}}function Ig(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Me,d=new WeakMap;let u;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,M){return f?new OffscreenCanvas(D,M):mr("canvas")}function A(D,M,q){let Z=1;const ne=yt(D);if((ne.width>q||ne.height>q)&&(Z=q/Math.max(ne.width,ne.height)),Z<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const j=Math.floor(Z*ne.width),De=Math.floor(Z*ne.height);u===void 0&&(u=g(j,De));const he=M?g(j,De):u;return he.width=j,he.height=De,he.getContext("2d").drawImage(D,0,0,j,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+j+"x"+De+")."),he}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),D;return D}function m(D){return D.generateMipmaps}function p(D){s.generateMipmap(D)}function x(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(D,M,q,Z,ne=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let j=M;if(M===s.RED&&(q===s.FLOAT&&(j=s.R32F),q===s.HALF_FLOAT&&(j=s.R16F),q===s.UNSIGNED_BYTE&&(j=s.R8)),M===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(j=s.R8UI),q===s.UNSIGNED_SHORT&&(j=s.R16UI),q===s.UNSIGNED_INT&&(j=s.R32UI),q===s.BYTE&&(j=s.R8I),q===s.SHORT&&(j=s.R16I),q===s.INT&&(j=s.R32I)),M===s.RG&&(q===s.FLOAT&&(j=s.RG32F),q===s.HALF_FLOAT&&(j=s.RG16F),q===s.UNSIGNED_BYTE&&(j=s.RG8)),M===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(j=s.RG8UI),q===s.UNSIGNED_SHORT&&(j=s.RG16UI),q===s.UNSIGNED_INT&&(j=s.RG32UI),q===s.BYTE&&(j=s.RG8I),q===s.SHORT&&(j=s.RG16I),q===s.INT&&(j=s.RG32I)),M===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(j=s.RGB8UI),q===s.UNSIGNED_SHORT&&(j=s.RGB16UI),q===s.UNSIGNED_INT&&(j=s.RGB32UI),q===s.BYTE&&(j=s.RGB8I),q===s.SHORT&&(j=s.RGB16I),q===s.INT&&(j=s.RGB32I)),M===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),q===s.UNSIGNED_INT&&(j=s.RGBA32UI),q===s.BYTE&&(j=s.RGBA8I),q===s.SHORT&&(j=s.RGBA16I),q===s.INT&&(j=s.RGBA32I)),M===s.RGB&&q===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),M===s.RGBA){const De=ne?fr:et.getTransfer(Z);q===s.FLOAT&&(j=s.RGBA32F),q===s.HALF_FLOAT&&(j=s.RGBA16F),q===s.UNSIGNED_BYTE&&(j=De===lt?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function S(D,M){let q;return D?M===null||M===ln||M===ys?q=s.DEPTH24_STENCIL8:M===An?q=s.DEPTH32F_STENCIL8:M===vs&&(q=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ln||M===ys?q=s.DEPTH_COMPONENT24:M===An?q=s.DEPTH_COMPONENT32F:M===vs&&(q=s.DEPTH_COMPONENT16),q}function C(D,M){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==Zt&&D.minFilter!==Sn?Math.log2(Math.max(M.width,M.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?M.mipmaps.length:1}function T(D){const M=D.target;M.removeEventListener("dispose",T),w(M),M.isVideoTexture&&d.delete(M)}function y(D){const M=D.target;M.removeEventListener("dispose",y),v(M)}function w(D){const M=n.get(D);if(M.__webglInit===void 0)return;const q=D.source,Z=h.get(q);if(Z){const ne=Z[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&E(D),Object.keys(Z).length===0&&h.delete(q)}n.remove(D)}function E(D){const M=n.get(D);s.deleteTexture(M.__webglTexture);const q=D.source,Z=h.get(q);delete Z[M.__cacheKey],o.memory.textures--}function v(D){const M=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let ne=0;ne<M.__webglFramebuffer[Z].length;ne++)s.deleteFramebuffer(M.__webglFramebuffer[Z][ne]);else s.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)s.deleteFramebuffer(M.__webglFramebuffer[Z]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const q=D.textures;for(let Z=0,ne=q.length;Z<ne;Z++){const j=n.get(q[Z]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(q[Z])}n.remove(D)}let R=0;function B(){R=0}function F(){const D=R;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),R+=1,D}function U(D){const M=[];return M.push(D.wrapS),M.push(D.wrapT),M.push(D.wrapR||0),M.push(D.magFilter),M.push(D.minFilter),M.push(D.anisotropy),M.push(D.internalFormat),M.push(D.format),M.push(D.type),M.push(D.generateMipmaps),M.push(D.premultiplyAlpha),M.push(D.flipY),M.push(D.unpackAlignment),M.push(D.colorSpace),M.join()}function z(D,M){const q=n.get(D);if(D.isVideoTexture&&Ie(D),D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){const Z=D.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(q,D,M);return}}t.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+M)}function N(D,M){const q=n.get(D);if(D.version>0&&q.__version!==D.version){oe(q,D,M);return}t.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+M)}function W(D,M){const q=n.get(D);if(D.version>0&&q.__version!==D.version){oe(q,D,M);return}t.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+M)}function k(D,M){const q=n.get(D);if(D.version>0&&q.__version!==D.version){se(q,D,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+M)}const K={[Io]:s.REPEAT,[pi]:s.CLAMP_TO_EDGE,[Do]:s.MIRRORED_REPEAT},ee={[Zt]:s.NEAREST,[iu]:s.NEAREST_MIPMAP_NEAREST,[Ds]:s.NEAREST_MIPMAP_LINEAR,[Sn]:s.LINEAR,[Dr]:s.LINEAR_MIPMAP_NEAREST,[mi]:s.LINEAR_MIPMAP_LINEAR},ue={[lu]:s.NEVER,[pu]:s.ALWAYS,[cu]:s.LESS,[Nc]:s.LEQUAL,[du]:s.EQUAL,[fu]:s.GEQUAL,[uu]:s.GREATER,[hu]:s.NOTEQUAL};function Re(D,M){if(M.type===An&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Sn||M.magFilter===Dr||M.magFilter===Ds||M.magFilter===mi||M.minFilter===Sn||M.minFilter===Dr||M.minFilter===Ds||M.minFilter===mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,K[M.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,K[M.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,K[M.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,ee[M.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,ee[M.minFilter]),M.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,ue[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Zt||M.minFilter!==Ds&&M.minFilter!==mi||M.type===An&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Te(D,M){let q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,M.addEventListener("dispose",T));const Z=M.source;let ne=h.get(Z);ne===void 0&&(ne={},h.set(Z,ne));const j=U(M);if(j!==D.__cacheKey){ne[j]===void 0&&(ne[j]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ne[j].usedTimes++;const De=ne[D.__cacheKey];De!==void 0&&(ne[D.__cacheKey].usedTimes--,De.usedTimes===0&&E(M)),D.__cacheKey=j,D.__webglTexture=ne[j].texture}return q}function $(D,M,q){return Math.floor(Math.floor(D/q)/M)}function te(D,M,q,Z){const j=D.updateRanges;if(j.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,q,Z,M.data);else{j.sort((X,le)=>X.start-le.start);let De=0;for(let X=1;X<j.length;X++){const le=j[De],_e=j[X],Ee=le.start+le.count,ce=$(_e.start,M.width,4),Be=$(le.start,M.width,4);_e.start<=Ee+1&&ce===Be&&$(_e.start+_e.count-1,M.width,4)===ce?le.count=Math.max(le.count,_e.start+_e.count-le.start):(++De,j[De]=_e)}j.length=De+1;const he=s.getParameter(s.UNPACK_ROW_LENGTH),Ce=s.getParameter(s.UNPACK_SKIP_PIXELS),L=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let X=0,le=j.length;X<le;X++){const _e=j[X],Ee=Math.floor(_e.start/4),ce=Math.ceil(_e.count/4),Be=Ee%M.width,O=Math.floor(Ee/M.width),me=ce,ie=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Be),s.pixelStorei(s.UNPACK_SKIP_ROWS,O),t.texSubImage2D(s.TEXTURE_2D,0,Be,O,me,ie,q,Z,M.data)}D.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,he),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ce),s.pixelStorei(s.UNPACK_SKIP_ROWS,L)}}function oe(D,M,q){let Z=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=s.TEXTURE_3D);const ne=Te(D,M),j=M.source;t.bindTexture(Z,D.__webglTexture,s.TEXTURE0+q);const De=n.get(j);if(j.version!==De.__version||ne===!0){t.activeTexture(s.TEXTURE0+q);const he=et.getPrimaries(et.workingColorSpace),Ce=M.colorSpace===Yn?null:et.getPrimaries(M.colorSpace),L=M.colorSpace===Yn||he===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,L);let X=A(M.image,!1,i.maxTextureSize);X=qe(M,X);const le=r.convert(M.format,M.colorSpace),_e=r.convert(M.type);let Ee=_(M.internalFormat,le,_e,M.colorSpace,M.isVideoTexture);Re(Z,M);let ce;const Be=M.mipmaps,O=M.isVideoTexture!==!0,me=De.__version===void 0||ne===!0,ie=j.dataReady,Ae=C(M,X);if(M.isDepthTexture)Ee=S(M.format===Es,M.type),me&&(O?t.texStorage2D(s.TEXTURE_2D,1,Ee,X.width,X.height):t.texImage2D(s.TEXTURE_2D,0,Ee,X.width,X.height,0,le,_e,null));else if(M.isDataTexture)if(Be.length>0){O&&me&&t.texStorage2D(s.TEXTURE_2D,Ae,Ee,Be[0].width,Be[0].height);for(let re=0,J=Be.length;re<J;re++)ce=Be[re],O?ie&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,ce.width,ce.height,le,_e,ce.data):t.texImage2D(s.TEXTURE_2D,re,Ee,ce.width,ce.height,0,le,_e,ce.data);M.generateMipmaps=!1}else O?(me&&t.texStorage2D(s.TEXTURE_2D,Ae,Ee,X.width,X.height),ie&&te(M,X,le,_e)):t.texImage2D(s.TEXTURE_2D,0,Ee,X.width,X.height,0,le,_e,X.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){O&&me&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Ee,Be[0].width,Be[0].height,X.depth);for(let re=0,J=Be.length;re<J;re++)if(ce=Be[re],M.format!==Ht)if(le!==null)if(O){if(ie)if(M.layerUpdates.size>0){const ve=yl(ce.width,ce.height,M.format,M.type);for(const Oe of M.layerUpdates){const dt=ce.data.subarray(Oe*ve/ce.data.BYTES_PER_ELEMENT,(Oe+1)*ve/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,Oe,ce.width,ce.height,1,le,dt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,ce.width,ce.height,X.depth,le,ce.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,re,Ee,ce.width,ce.height,X.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?ie&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,ce.width,ce.height,X.depth,le,_e,ce.data):t.texImage3D(s.TEXTURE_2D_ARRAY,re,Ee,ce.width,ce.height,X.depth,0,le,_e,ce.data)}else{O&&me&&t.texStorage2D(s.TEXTURE_2D,Ae,Ee,Be[0].width,Be[0].height);for(let re=0,J=Be.length;re<J;re++)ce=Be[re],M.format!==Ht?le!==null?O?ie&&t.compressedTexSubImage2D(s.TEXTURE_2D,re,0,0,ce.width,ce.height,le,ce.data):t.compressedTexImage2D(s.TEXTURE_2D,re,Ee,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?ie&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,ce.width,ce.height,le,_e,ce.data):t.texImage2D(s.TEXTURE_2D,re,Ee,ce.width,ce.height,0,le,_e,ce.data)}else if(M.isDataArrayTexture)if(O){if(me&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Ee,X.width,X.height,X.depth),ie)if(M.layerUpdates.size>0){const re=yl(X.width,X.height,M.format,M.type);for(const J of M.layerUpdates){const ve=X.data.subarray(J*re/X.data.BYTES_PER_ELEMENT,(J+1)*re/X.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,X.width,X.height,1,le,_e,ve)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,le,_e,X.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ee,X.width,X.height,X.depth,0,le,_e,X.data);else if(M.isData3DTexture)O?(me&&t.texStorage3D(s.TEXTURE_3D,Ae,Ee,X.width,X.height,X.depth),ie&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,le,_e,X.data)):t.texImage3D(s.TEXTURE_3D,0,Ee,X.width,X.height,X.depth,0,le,_e,X.data);else if(M.isFramebufferTexture){if(me)if(O)t.texStorage2D(s.TEXTURE_2D,Ae,Ee,X.width,X.height);else{let re=X.width,J=X.height;for(let ve=0;ve<Ae;ve++)t.texImage2D(s.TEXTURE_2D,ve,Ee,re,J,0,le,_e,null),re>>=1,J>>=1}}else if(Be.length>0){if(O&&me){const re=yt(Be[0]);t.texStorage2D(s.TEXTURE_2D,Ae,Ee,re.width,re.height)}for(let re=0,J=Be.length;re<J;re++)ce=Be[re],O?ie&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,le,_e,ce):t.texImage2D(s.TEXTURE_2D,re,Ee,le,_e,ce);M.generateMipmaps=!1}else if(O){if(me){const re=yt(X);t.texStorage2D(s.TEXTURE_2D,Ae,Ee,re.width,re.height)}ie&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,le,_e,X)}else t.texImage2D(s.TEXTURE_2D,0,Ee,le,_e,X);m(M)&&p(Z),De.__version=j.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function se(D,M,q){if(M.image.length!==6)return;const Z=Te(D,M),ne=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+q);const j=n.get(ne);if(ne.version!==j.__version||Z===!0){t.activeTexture(s.TEXTURE0+q);const De=et.getPrimaries(et.workingColorSpace),he=M.colorSpace===Yn?null:et.getPrimaries(M.colorSpace),Ce=M.colorSpace===Yn||De===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const L=M.isCompressedTexture||M.image[0].isCompressedTexture,X=M.image[0]&&M.image[0].isDataTexture,le=[];for(let J=0;J<6;J++)!L&&!X?le[J]=A(M.image[J],!0,i.maxCubemapSize):le[J]=X?M.image[J].image:M.image[J],le[J]=qe(M,le[J]);const _e=le[0],Ee=r.convert(M.format,M.colorSpace),ce=r.convert(M.type),Be=_(M.internalFormat,Ee,ce,M.colorSpace),O=M.isVideoTexture!==!0,me=j.__version===void 0||Z===!0,ie=ne.dataReady;let Ae=C(M,_e);Re(s.TEXTURE_CUBE_MAP,M);let re;if(L){O&&me&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,Be,_e.width,_e.height);for(let J=0;J<6;J++){re=le[J].mipmaps;for(let ve=0;ve<re.length;ve++){const Oe=re[ve];M.format!==Ht?Ee!==null?O?ie&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve,0,0,Oe.width,Oe.height,Ee,Oe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve,Be,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve,0,0,Oe.width,Oe.height,Ee,ce,Oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve,Be,Oe.width,Oe.height,0,Ee,ce,Oe.data)}}}else{if(re=M.mipmaps,O&&me){re.length>0&&Ae++;const J=yt(le[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,Be,J.width,J.height)}for(let J=0;J<6;J++)if(X){O?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,le[J].width,le[J].height,Ee,ce,le[J].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Be,le[J].width,le[J].height,0,Ee,ce,le[J].data);for(let ve=0;ve<re.length;ve++){const dt=re[ve].image[J].image;O?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve+1,0,0,dt.width,dt.height,Ee,ce,dt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve+1,Be,dt.width,dt.height,0,Ee,ce,dt.data)}}else{O?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ee,ce,le[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Be,Ee,ce,le[J]);for(let ve=0;ve<re.length;ve++){const Oe=re[ve];O?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve+1,0,0,Ee,ce,Oe.image[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve+1,Be,Ee,ce,Oe.image[J])}}}m(M)&&p(s.TEXTURE_CUBE_MAP),j.__version=ne.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function fe(D,M,q,Z,ne,j){const De=r.convert(q.format,q.colorSpace),he=r.convert(q.type),Ce=_(q.internalFormat,De,he,q.colorSpace),L=n.get(M),X=n.get(q);if(X.__renderTarget=M,!L.__hasExternalTextures){const le=Math.max(1,M.width>>j),_e=Math.max(1,M.height>>j);ne===s.TEXTURE_3D||ne===s.TEXTURE_2D_ARRAY?t.texImage3D(ne,j,Ce,le,_e,M.depth,0,De,he,null):t.texImage2D(ne,j,Ce,le,_e,0,De,he,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),He(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,ne,X.__webglTexture,0,pe(M)):(ne===s.TEXTURE_2D||ne>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,ne,X.__webglTexture,j),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Le(D,M,q){if(s.bindRenderbuffer(s.RENDERBUFFER,D),M.depthBuffer){const Z=M.depthTexture,ne=Z&&Z.isDepthTexture?Z.type:null,j=S(M.stencilBuffer,ne),De=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=pe(M);He(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,he,j,M.width,M.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,he,j,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,j,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,De,s.RENDERBUFFER,D)}else{const Z=M.textures;for(let ne=0;ne<Z.length;ne++){const j=Z[ne],De=r.convert(j.format,j.colorSpace),he=r.convert(j.type),Ce=_(j.internalFormat,De,he,j.colorSpace),L=pe(M);q&&He(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,L,Ce,M.width,M.height):He(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,L,Ce,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Ce,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Se(D,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(M.depthTexture);Z.__renderTarget=M,(!Z.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),z(M.depthTexture,0);const ne=Z.__webglTexture,j=pe(M);if(M.depthTexture.format===ji)He(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ne,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ne,0);else if(M.depthTexture.format===Es)He(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ne,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Qe(D){const M=n.get(D),q=D.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==D.depthTexture){const Z=D.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Z){const ne=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Z.removeEventListener("dispose",ne)};Z.addEventListener("dispose",ne),M.__depthDisposeCallback=ne}M.__boundDepthTexture=Z}if(D.depthTexture&&!M.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");const Z=D.texture.mipmaps;Z&&Z.length>0?Se(M.__webglFramebuffer[0],D):Se(M.__webglFramebuffer,D)}else if(q){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]===void 0)M.__webglDepthbuffer[Z]=s.createRenderbuffer(),Le(M.__webglDepthbuffer[Z],D,!1);else{const ne=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,ne,s.RENDERBUFFER,j)}}else{const Z=D.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),Le(M.__webglDepthbuffer,D,!1);else{const ne=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,ne,s.RENDERBUFFER,j)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function We(D,M,q){const Z=n.get(D);M!==void 0&&fe(Z.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&Qe(D)}function Pe(D){const M=D.texture,q=n.get(D),Z=n.get(M);D.addEventListener("dispose",y);const ne=D.textures,j=D.isWebGLCubeRenderTarget===!0,De=ne.length>1;if(De||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=M.version,o.memory.textures++),j){q.__webglFramebuffer=[];for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer[he]=[];for(let Ce=0;Ce<M.mipmaps.length;Ce++)q.__webglFramebuffer[he][Ce]=s.createFramebuffer()}else q.__webglFramebuffer[he]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer=[];for(let he=0;he<M.mipmaps.length;he++)q.__webglFramebuffer[he]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(De)for(let he=0,Ce=ne.length;he<Ce;he++){const L=n.get(ne[he]);L.__webglTexture===void 0&&(L.__webglTexture=s.createTexture(),o.memory.textures++)}if(D.samples>0&&He(D)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let he=0;he<ne.length;he++){const Ce=ne[he];q.__webglColorRenderbuffer[he]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[he]);const L=r.convert(Ce.format,Ce.colorSpace),X=r.convert(Ce.type),le=_(Ce.internalFormat,L,X,Ce.colorSpace,D.isXRRenderTarget===!0),_e=pe(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,_e,le,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,q.__webglColorRenderbuffer[he])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),Le(q.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),Re(s.TEXTURE_CUBE_MAP,M);for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ce=0;Ce<M.mipmaps.length;Ce++)fe(q.__webglFramebuffer[he][Ce],D,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce);else fe(q.__webglFramebuffer[he],D,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(M)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let he=0,Ce=ne.length;he<Ce;he++){const L=ne[he],X=n.get(L);t.bindTexture(s.TEXTURE_2D,X.__webglTexture),Re(s.TEXTURE_2D,L),fe(q.__webglFramebuffer,D,L,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,0),m(L)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let he=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(he=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(he,Z.__webglTexture),Re(he,M),M.mipmaps&&M.mipmaps.length>0)for(let Ce=0;Ce<M.mipmaps.length;Ce++)fe(q.__webglFramebuffer[Ce],D,M,s.COLOR_ATTACHMENT0,he,Ce);else fe(q.__webglFramebuffer,D,M,s.COLOR_ATTACHMENT0,he,0);m(M)&&p(he),t.unbindTexture()}D.depthBuffer&&Qe(D)}function P(D){const M=D.textures;for(let q=0,Z=M.length;q<Z;q++){const ne=M[q];if(m(ne)){const j=x(D),De=n.get(ne).__webglTexture;t.bindTexture(j,De),p(j),t.unbindTexture()}}}const Xe=[],Ge=[];function $e(D){if(D.samples>0){if(He(D)===!1){const M=D.textures,q=D.width,Z=D.height;let ne=s.COLOR_BUFFER_BIT;const j=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,De=n.get(D),he=M.length>1;if(he)for(let L=0;L<M.length;L++)t.bindFramebuffer(s.FRAMEBUFFER,De.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+L,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,De.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+L,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const Ce=D.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let L=0;L<M.length;L++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ne|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ne|=s.STENCIL_BUFFER_BIT)),he){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,De.__webglColorRenderbuffer[L]);const X=n.get(M[L]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,X,0)}s.blitFramebuffer(0,0,q,Z,0,0,q,Z,ne,s.NEAREST),l===!0&&(Xe.length=0,Ge.length=0,Xe.push(s.COLOR_ATTACHMENT0+L),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Xe.push(j),Ge.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ge)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Xe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),he)for(let L=0;L<M.length;L++){t.bindFramebuffer(s.FRAMEBUFFER,De.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+L,s.RENDERBUFFER,De.__webglColorRenderbuffer[L]);const X=n.get(M[L]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,De.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+L,s.TEXTURE_2D,X,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const M=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function pe(D){return Math.min(i.maxSamples,D.samples)}function He(D){const M=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ie(D){const M=o.render.frame;d.get(D)!==M&&(d.set(D,M),D.update())}function qe(D,M){const q=D.colorSpace,Z=D.format,ne=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||q!==Zi&&q!==Yn&&(et.getTransfer(q)===lt?(Z!==Ht||ne!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),M}function yt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=B,this.setTexture2D=z,this.setTexture2DArray=N,this.setTexture3D=W,this.setTextureCube=k,this.rebindTextures=We,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=He}function nd(s,e){function t(n,i=Yn){let r;const o=et.getTransfer(i);if(n===Cn)return s.UNSIGNED_BYTE;if(n===pa)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ma)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Pc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ic)return s.BYTE;if(n===Dc)return s.SHORT;if(n===vs)return s.UNSIGNED_SHORT;if(n===fa)return s.INT;if(n===ln)return s.UNSIGNED_INT;if(n===An)return s.FLOAT;if(n===ns)return s.HALF_FLOAT;if(n===Fc)return s.ALPHA;if(n===Lc)return s.RGB;if(n===Ht)return s.RGBA;if(n===ji)return s.DEPTH_COMPONENT;if(n===Es)return s.DEPTH_STENCIL;if(n===Bc)return s.RED;if(n===Cr)return s.RED_INTEGER;if(n===Uc)return s.RG;if(n===ga)return s.RG_INTEGER;if(n===Gi)return s.RGBA_INTEGER;if(n===or||n===ar||n===lr||n===cr)if(o===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===or)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===or)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Po||n===Fo||n===Lo||n===Bo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Po)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Lo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Uo||n===Oo||n===No)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Uo||n===Oo)return o===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===No)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===zo||n===ko||n===Ho||n===Vo||n===Go||n===Wo||n===Xo||n===qo||n===Qo||n===Yo||n===Ko||n===$o||n===jo||n===Zo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===zo)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ko)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ho)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vo)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Go)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wo)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xo)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qo)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qo)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yo)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ko)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$o)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===jo)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Zo)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dr||n===Jo||n===ea)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===dr)return o===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ea)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Oc||n===ta||n===na||n===ia)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===dr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ta)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===na)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ia)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ys?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const Dg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Fg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Vt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new en({vertexShader:Dg,fragmentShader:Pg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Et(new es(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Lg extends _i{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,u=null,h=null,f=null,g=null;const A=new Fg,m=t.getContextAttributes();let p=null,x=null;const _=[],S=[],C=new Me;let T=null;const y=new on;y.viewport=new At;const w=new on;w.viewport=new At;const E=[y,w],v=new th;let R=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let te=_[$];return te===void 0&&(te=new Jr,_[$]=te),te.getTargetRaySpace()},this.getControllerGrip=function($){let te=_[$];return te===void 0&&(te=new Jr,_[$]=te),te.getGripSpace()},this.getHand=function($){let te=_[$];return te===void 0&&(te=new Jr,_[$]=te),te.getHandSpace()};function F($){const te=S.indexOf($.inputSource);if(te===-1)return;const oe=_[te];oe!==void 0&&(oe.update($.inputSource,$.frame,c||o),oe.dispatchEvent({type:$.type,data:$.inputSource}))}function U(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",z);for(let $=0;$<_.length;$++){const te=S[$];te!==null&&(S[$]=null,_[$].disconnect(te))}R=null,B=null,A.reset(),e.setRenderTarget(p),f=null,h=null,u=null,i=null,x=null,Te.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",U),i.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,se=null,fe=null;m.depth&&(fe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=m.stencil?Es:ji,se=m.stencil?ys:ln);const Le={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(Le),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new ni(h.textureWidth,h.textureHeight,{format:Ht,type:Cn,depthTexture:new Sa(h.textureWidth,h.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const oe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,oe),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new ni(f.framebufferWidth,f.framebufferHeight,{format:Ht,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Te.setContext(i),Te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function z($){for(let te=0;te<$.removed.length;te++){const oe=$.removed[te],se=S.indexOf(oe);se>=0&&(S[se]=null,_[se].disconnect(oe))}for(let te=0;te<$.added.length;te++){const oe=$.added[te];let se=S.indexOf(oe);if(se===-1){for(let Le=0;Le<_.length;Le++)if(Le>=S.length){S.push(oe),se=Le;break}else if(S[Le]===null){S[Le]=oe,se=Le;break}if(se===-1)break}const fe=_[se];fe&&fe.connect(oe)}}const N=new I,W=new I;function k($,te,oe){N.setFromMatrixPosition(te.matrixWorld),W.setFromMatrixPosition(oe.matrixWorld);const se=N.distanceTo(W),fe=te.projectionMatrix.elements,Le=oe.projectionMatrix.elements,Se=fe[14]/(fe[10]-1),Qe=fe[14]/(fe[10]+1),We=(fe[9]+1)/fe[5],Pe=(fe[9]-1)/fe[5],P=(fe[8]-1)/fe[0],Xe=(Le[8]+1)/Le[0],Ge=Se*P,$e=Se*Xe,pe=se/(-P+Xe),He=pe*-P;if(te.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(He),$.translateZ(pe),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),fe[10]===-1)$.projectionMatrix.copy(te.projectionMatrix),$.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const Ie=Se+pe,qe=Qe+pe,yt=Ge-He,D=$e+(se-He),M=We*Qe/qe*Ie,q=Pe*Qe/qe*Ie;$.projectionMatrix.makePerspective(yt,D,M,q,Ie,qe),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function K($,te){te===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(te.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let te=$.near,oe=$.far;A.texture!==null&&(A.depthNear>0&&(te=A.depthNear),A.depthFar>0&&(oe=A.depthFar)),v.near=w.near=y.near=te,v.far=w.far=y.far=oe,(R!==v.near||B!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),R=v.near,B=v.far),y.layers.mask=$.layers.mask|2,w.layers.mask=$.layers.mask|4,v.layers.mask=y.layers.mask|w.layers.mask;const se=$.parent,fe=v.cameras;K(v,se);for(let Le=0;Le<fe.length;Le++)K(fe[Le],se);fe.length===2?k(v,y,w):v.projectionMatrix.copy(y.projectionMatrix),ee($,v,se)};function ee($,te,oe){oe===null?$.matrix.copy(te.matrixWorld):($.matrix.copy(oe.matrixWorld),$.matrix.invert(),$.matrix.multiply(te.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(te.projectionMatrix),$.projectionMatrixInverse.copy(te.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=sa*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(v)};let ue=null;function Re($,te){if(d=te.getViewerPose(c||o),g=te,d!==null){const oe=d.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let se=!1;oe.length!==v.cameras.length&&(v.cameras.length=0,se=!0);for(let Se=0;Se<oe.length;Se++){const Qe=oe[Se];let We=null;if(f!==null)We=f.getViewport(Qe);else{const P=u.getViewSubImage(h,Qe);We=P.viewport,Se===0&&(e.setRenderTargetTextures(x,P.colorTexture,P.depthStencilTexture),e.setRenderTarget(x))}let Pe=E[Se];Pe===void 0&&(Pe=new on,Pe.layers.enable(Se),Pe.viewport=new At,E[Se]=Pe),Pe.matrix.fromArray(Qe.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(Qe.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(We.x,We.y,We.width,We.height),Se===0&&(v.matrix.copy(Pe.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),se===!0&&v.cameras.push(Pe)}const fe=i.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){const Se=u.getDepthInformation(oe[0]);Se&&Se.isValid&&Se.texture&&A.init(e,Se,i.renderState)}}for(let oe=0;oe<_.length;oe++){const se=S[oe],fe=_[oe];se!==null&&fe!==void 0&&fe.update(se,te,c||o)}ue&&ue($,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}const Te=new jc;Te.setAnimationLoop(Re),this.setAnimationLoop=function($){ue=$},this.dispose=function(){}}}const di=new On,Bg=new ke;function Ug(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Qc(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,_,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),d(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),A(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),_=x.envMap,S=x.envMapRotation;_&&(m.envMap.value=_,di.copy(S),di.x*=-1,di.y*=-1,di.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),m.envMapRotation.value.setFromMatrix4(Bg.makeRotationFromEuler(di)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function A(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Og(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,_){const S=_.program;n.uniformBlockBinding(x,S)}function c(x,_){let S=i[x.id];S===void 0&&(g(x),S=d(x),i[x.id]=S,x.addEventListener("dispose",m));const C=_.program;n.updateUBOMapping(x,C);const T=e.render.frame;r[x.id]!==T&&(h(x),r[x.id]=T)}function d(x){const _=u();x.__bindingPointIndex=_;const S=s.createBuffer(),C=x.__size,T=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,C,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,S),S}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const _=i[x.id],S=x.uniforms,C=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let T=0,y=S.length;T<y;T++){const w=Array.isArray(S[T])?S[T]:[S[T]];for(let E=0,v=w.length;E<v;E++){const R=w[E];if(f(R,T,E,C)===!0){const B=R.__offset,F=Array.isArray(R.value)?R.value:[R.value];let U=0;for(let z=0;z<F.length;z++){const N=F[z],W=A(N);typeof N=="number"||typeof N=="boolean"?(R.__data[0]=N,s.bufferSubData(s.UNIFORM_BUFFER,B+U,R.__data)):N.isMatrix3?(R.__data[0]=N.elements[0],R.__data[1]=N.elements[1],R.__data[2]=N.elements[2],R.__data[3]=0,R.__data[4]=N.elements[3],R.__data[5]=N.elements[4],R.__data[6]=N.elements[5],R.__data[7]=0,R.__data[8]=N.elements[6],R.__data[9]=N.elements[7],R.__data[10]=N.elements[8],R.__data[11]=0):(N.toArray(R.__data,U),U+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,B,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,_,S,C){const T=x.value,y=_+"_"+S;if(C[y]===void 0)return typeof T=="number"||typeof T=="boolean"?C[y]=T:C[y]=T.clone(),!0;{const w=C[y];if(typeof T=="number"||typeof T=="boolean"){if(w!==T)return C[y]=T,!0}else if(w.equals(T)===!1)return w.copy(T),!0}return!1}function g(x){const _=x.uniforms;let S=0;const C=16;for(let y=0,w=_.length;y<w;y++){const E=Array.isArray(_[y])?_[y]:[_[y]];for(let v=0,R=E.length;v<R;v++){const B=E[v],F=Array.isArray(B.value)?B.value:[B.value];for(let U=0,z=F.length;U<z;U++){const N=F[U],W=A(N),k=S%C,K=k%W.boundary,ee=k+K;S+=K,ee!==0&&C-ee<W.storage&&(S+=C-ee),B.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=S,S+=W.storage}}}const T=S%C;return T>0&&(S+=C-T),x.__size=S,x.__cache={},this}function A(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function m(x){const _=x.target;_.removeEventListener("dispose",m);const S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function p(){for(const x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class Ng{constructor(e={}){const{canvas:t=Au(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),A=new Int32Array(4);let m=null,p=null;const x=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let C=!1;this._outputColorSpace=rn;let T=0,y=0,w=null,E=-1,v=null;const R=new At,B=new At;let F=null;const U=new tt(0);let z=0,N=t.width,W=t.height,k=1,K=null,ee=null;const ue=new At(0,0,N,W),Re=new At(0,0,N,W);let Te=!1;const $=new $c;let te=!1,oe=!1;const se=new ke,fe=new ke,Le=new I,Se=new At,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function Pe(){return w===null?k:1}let P=n;function Xe(b,H){return t.getContext(b,H)}try{const b={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ha}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",re,!1),t.addEventListener("webglcontextcreationerror",J,!1),P===null){const H="webgl2";if(P=Xe(H,b),P===null)throw Xe(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ge,$e,pe,He,Ie,qe,yt,D,M,q,Z,ne,j,De,he,Ce,L,X,le,_e,Ee,ce,Be,O;function me(){Ge=new Kp(P),Ge.init(),ce=new nd(P,Ge),$e=new Vp(P,Ge,e,ce),pe=new Rg(P,Ge),$e.reverseDepthBuffer&&h&&pe.buffers.depth.setReversed(!0),He=new Zp(P),Ie=new gg,qe=new Ig(P,Ge,pe,Ie,$e,ce,He),yt=new Wp(S),D=new Yp(S),M=new ih(P),Be=new kp(P,M),q=new $p(P,M,He,Be),Z=new em(P,q,M,He),le=new Jp(P,$e,qe),Ce=new Gp(Ie),ne=new mg(S,yt,D,Ge,$e,Be,Ce),j=new Ug(S,Ie),De=new xg,he=new Cg(Ge),X=new zp(S,yt,D,pe,Z,f,l),L=new bg(S,Z,$e),O=new Og(P,He,$e,pe),_e=new Hp(P,Ge,He),Ee=new jp(P,Ge,He),He.programs=ne.programs,S.capabilities=$e,S.extensions=Ge,S.properties=Ie,S.renderLists=De,S.shadowMap=L,S.state=pe,S.info=He}me();const ie=new Lg(S,P);this.xr=ie,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const b=Ge.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ge.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(b){b!==void 0&&(k=b,this.setSize(N,W,!1))},this.getSize=function(b){return b.set(N,W)},this.setSize=function(b,H,Q=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=b,W=H,t.width=Math.floor(b*k),t.height=Math.floor(H*k),Q===!0&&(t.style.width=b+"px",t.style.height=H+"px"),this.setViewport(0,0,b,H)},this.getDrawingBufferSize=function(b){return b.set(N*k,W*k).floor()},this.setDrawingBufferSize=function(b,H,Q){N=b,W=H,k=Q,t.width=Math.floor(b*Q),t.height=Math.floor(H*Q),this.setViewport(0,0,b,H)},this.getCurrentViewport=function(b){return b.copy(R)},this.getViewport=function(b){return b.copy(ue)},this.setViewport=function(b,H,Q,Y){b.isVector4?ue.set(b.x,b.y,b.z,b.w):ue.set(b,H,Q,Y),pe.viewport(R.copy(ue).multiplyScalar(k).round())},this.getScissor=function(b){return b.copy(Re)},this.setScissor=function(b,H,Q,Y){b.isVector4?Re.set(b.x,b.y,b.z,b.w):Re.set(b,H,Q,Y),pe.scissor(B.copy(Re).multiplyScalar(k).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(b){pe.setScissorTest(Te=b)},this.setOpaqueSort=function(b){K=b},this.setTransparentSort=function(b){ee=b},this.getClearColor=function(b){return b.copy(X.getClearColor())},this.setClearColor=function(){X.setClearColor(...arguments)},this.getClearAlpha=function(){return X.getClearAlpha()},this.setClearAlpha=function(){X.setClearAlpha(...arguments)},this.clear=function(b=!0,H=!0,Q=!0){let Y=0;if(b){let V=!1;if(w!==null){const ae=w.texture.format;V=ae===Gi||ae===ga||ae===Cr}if(V){const ae=w.texture.type,xe=ae===Cn||ae===ln||ae===vs||ae===ys||ae===pa||ae===ma,we=X.getClearColor(),ye=X.getClearAlpha(),ze=we.r,Ve=we.g,Fe=we.b;xe?(g[0]=ze,g[1]=Ve,g[2]=Fe,g[3]=ye,P.clearBufferuiv(P.COLOR,0,g)):(A[0]=ze,A[1]=Ve,A[2]=Fe,A[3]=ye,P.clearBufferiv(P.COLOR,0,A))}else Y|=P.COLOR_BUFFER_BIT}H&&(Y|=P.DEPTH_BUFFER_BIT),Q&&(Y|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",re,!1),t.removeEventListener("webglcontextcreationerror",J,!1),X.dispose(),De.dispose(),he.dispose(),Ie.dispose(),yt.dispose(),D.dispose(),Z.dispose(),Be.dispose(),O.dispose(),ne.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Wa),ie.removeEventListener("sessionend",Xa),ii.stop()};function Ae(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function re(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const b=He.autoReset,H=L.enabled,Q=L.autoUpdate,Y=L.needsUpdate,V=L.type;me(),He.autoReset=b,L.enabled=H,L.autoUpdate=Q,L.needsUpdate=Y,L.type=V}function J(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ve(b){const H=b.target;H.removeEventListener("dispose",ve),Oe(H)}function Oe(b){dt(b),Ie.remove(b)}function dt(b){const H=Ie.get(b).programs;H!==void 0&&(H.forEach(function(Q){ne.releaseProgram(Q)}),b.isShaderMaterial&&ne.releaseShaderCache(b))}this.renderBufferDirect=function(b,H,Q,Y,V,ae){H===null&&(H=Qe);const xe=V.isMesh&&V.matrixWorld.determinant()<0,we=yd(b,H,Q,Y,V);pe.setMaterial(Y,xe);let ye=Q.index,ze=1;if(Y.wireframe===!0){if(ye=q.getWireframeAttribute(Q),ye===void 0)return;ze=2}const Ve=Q.drawRange,Fe=Q.attributes.position;let je=Ve.start*ze,ot=(Ve.start+Ve.count)*ze;ae!==null&&(je=Math.max(je,ae.start*ze),ot=Math.min(ot,(ae.start+ae.count)*ze)),ye!==null?(je=Math.max(je,0),ot=Math.min(ot,ye.count)):Fe!=null&&(je=Math.max(je,0),ot=Math.min(ot,Fe.count));const xt=ot-je;if(xt<0||xt===1/0)return;Be.setup(V,Y,we,Q,ye);let vt,Ze=_e;if(ye!==null&&(vt=M.get(ye),Ze=Ee,Ze.setIndex(vt)),V.isMesh)Y.wireframe===!0?(pe.setLineWidth(Y.wireframeLinewidth*Pe()),Ze.setMode(P.LINES)):Ze.setMode(P.TRIANGLES);else if(V.isLine){let Ue=Y.linewidth;Ue===void 0&&(Ue=1),pe.setLineWidth(Ue*Pe()),V.isLineSegments?Ze.setMode(P.LINES):V.isLineLoop?Ze.setMode(P.LINE_LOOP):Ze.setMode(P.LINE_STRIP)}else V.isPoints?Ze.setMode(P.POINTS):V.isSprite&&Ze.setMode(P.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Wi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ze.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))Ze.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ue=V._multiDrawStarts,Ft=V._multiDrawCounts,it=V._multiDrawCount,hn=ye?M.get(ye).bytesPerElement:1,vi=Ie.get(Y).currentProgram.getUniforms();for(let Qt=0;Qt<it;Qt++)vi.setValue(P,"_gl_DrawID",Qt),Ze.render(Ue[Qt]/hn,Ft[Qt])}else if(V.isInstancedMesh)Ze.renderInstances(je,xt,V.count);else if(Q.isInstancedBufferGeometry){const Ue=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ft=Math.min(Q.instanceCount,Ue);Ze.renderInstances(je,xt,Ft)}else Ze.render(je,xt)};function rt(b,H,Q){b.transparent===!0&&b.side===an&&b.forceSinglePass===!1?(b.side=qt,b.needsUpdate=!0,Is(b,H,Q),b.side=En,b.needsUpdate=!0,Is(b,H,Q),b.side=an):Is(b,H,Q)}this.compile=function(b,H,Q=null){Q===null&&(Q=b),p=he.get(Q),p.init(H),_.push(p),Q.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),b!==Q&&b.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const Y=new Set;return b.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ae=V.material;if(ae)if(Array.isArray(ae))for(let xe=0;xe<ae.length;xe++){const we=ae[xe];rt(we,Q,V),Y.add(we)}else rt(ae,Q,V),Y.add(ae)}),p=_.pop(),Y},this.compileAsync=function(b,H,Q=null){const Y=this.compile(b,H,Q);return new Promise(V=>{function ae(){if(Y.forEach(function(xe){Ie.get(xe).currentProgram.isReady()&&Y.delete(xe)}),Y.size===0){V(b);return}setTimeout(ae,10)}Ge.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let un=null;function Mn(b){un&&un(b)}function Wa(){ii.stop()}function Xa(){ii.start()}const ii=new jc;ii.setAnimationLoop(Mn),typeof self<"u"&&ii.setContext(self),this.setAnimationLoop=function(b){un=b,ie.setAnimationLoop(b),b===null?ii.stop():ii.start()},ie.addEventListener("sessionstart",Wa),ie.addEventListener("sessionend",Xa),this.render=function(b,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(H),H=ie.getCamera()),b.isScene===!0&&b.onBeforeRender(S,b,H,w),p=he.get(b,_.length),p.init(H),_.push(p),fe.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),$.setFromProjectionMatrix(fe),oe=this.localClippingEnabled,te=Ce.init(this.clippingPlanes,oe),m=De.get(b,x.length),m.init(),x.push(m),ie.enabled===!0&&ie.isPresenting===!0){const ae=S.xr.getDepthSensingMesh();ae!==null&&Rr(ae,H,-1/0,S.sortObjects)}Rr(b,H,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(K,ee),We=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,We&&X.addToRenderList(m,b),this.info.render.frame++,te===!0&&Ce.beginShadows();const Q=p.state.shadowsArray;L.render(Q,b,H),te===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,V=m.transmissive;if(p.setupLights(),H.isArrayCamera){const ae=H.cameras;if(V.length>0)for(let xe=0,we=ae.length;xe<we;xe++){const ye=ae[xe];Qa(Y,V,b,ye)}We&&X.render(b);for(let xe=0,we=ae.length;xe<we;xe++){const ye=ae[xe];qa(m,b,ye,ye.viewport)}}else V.length>0&&Qa(Y,V,b,H),We&&X.render(b),qa(m,b,H);w!==null&&y===0&&(qe.updateMultisampleRenderTarget(w),qe.updateRenderTargetMipmap(w)),b.isScene===!0&&b.onAfterRender(S,b,H),Be.resetDefaultState(),E=-1,v=null,_.pop(),_.length>0?(p=_[_.length-1],te===!0&&Ce.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Rr(b,H,Q,Y){if(b.visible===!1)return;if(b.layers.test(H.layers)){if(b.isGroup)Q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(H);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||$.intersectsSprite(b)){Y&&Se.setFromMatrixPosition(b.matrixWorld).applyMatrix4(fe);const xe=Z.update(b),we=b.material;we.visible&&m.push(b,xe,we,Q,Se.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||$.intersectsObject(b))){const xe=Z.update(b),we=b.material;if(Y&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Se.copy(b.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Se.copy(xe.boundingSphere.center)),Se.applyMatrix4(b.matrixWorld).applyMatrix4(fe)),Array.isArray(we)){const ye=xe.groups;for(let ze=0,Ve=ye.length;ze<Ve;ze++){const Fe=ye[ze],je=we[Fe.materialIndex];je&&je.visible&&m.push(b,xe,je,Q,Se.z,Fe)}}else we.visible&&m.push(b,xe,we,Q,Se.z,null)}}const ae=b.children;for(let xe=0,we=ae.length;xe<we;xe++)Rr(ae[xe],H,Q,Y)}function qa(b,H,Q,Y){const V=b.opaque,ae=b.transmissive,xe=b.transparent;p.setupLightsView(Q),te===!0&&Ce.setGlobalState(S.clippingPlanes,Q),Y&&pe.viewport(R.copy(Y)),V.length>0&&Rs(V,H,Q),ae.length>0&&Rs(ae,H,Q),xe.length>0&&Rs(xe,H,Q),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Qa(b,H,Q,Y){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new ni(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?ns:Cn,minFilter:mi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const ae=p.state.transmissionRenderTarget[Y.id],xe=Y.viewport||R;ae.setSize(xe.z*S.transmissionResolutionScale,xe.w*S.transmissionResolutionScale);const we=S.getRenderTarget();S.setRenderTarget(ae),S.getClearColor(U),z=S.getClearAlpha(),z<1&&S.setClearColor(16777215,.5),S.clear(),We&&X.render(Q);const ye=S.toneMapping;S.toneMapping=ei;const ze=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),te===!0&&Ce.setGlobalState(S.clippingPlanes,Y),Rs(b,Q,Y),qe.updateMultisampleRenderTarget(ae),qe.updateRenderTargetMipmap(ae),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Fe=0,je=H.length;Fe<je;Fe++){const ot=H[Fe],xt=ot.object,vt=ot.geometry,Ze=ot.material,Ue=ot.group;if(Ze.side===an&&xt.layers.test(Y.layers)){const Ft=Ze.side;Ze.side=qt,Ze.needsUpdate=!0,Ya(xt,Q,Y,vt,Ze,Ue),Ze.side=Ft,Ze.needsUpdate=!0,Ve=!0}}Ve===!0&&(qe.updateMultisampleRenderTarget(ae),qe.updateRenderTargetMipmap(ae))}S.setRenderTarget(we),S.setClearColor(U,z),ze!==void 0&&(Y.viewport=ze),S.toneMapping=ye}function Rs(b,H,Q){const Y=H.isScene===!0?H.overrideMaterial:null;for(let V=0,ae=b.length;V<ae;V++){const xe=b[V],we=xe.object,ye=xe.geometry,ze=xe.group;let Ve=xe.material;Ve.allowOverride===!0&&Y!==null&&(Ve=Y),we.layers.test(Q.layers)&&Ya(we,H,Q,ye,Ve,ze)}}function Ya(b,H,Q,Y,V,ae){b.onBeforeRender(S,H,Q,Y,V,ae),b.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(S,H,Q,Y,b,ae),V.transparent===!0&&V.side===an&&V.forceSinglePass===!1?(V.side=qt,V.needsUpdate=!0,S.renderBufferDirect(Q,H,Y,V,b,ae),V.side=En,V.needsUpdate=!0,S.renderBufferDirect(Q,H,Y,V,b,ae),V.side=an):S.renderBufferDirect(Q,H,Y,V,b,ae),b.onAfterRender(S,H,Q,Y,V,ae)}function Is(b,H,Q){H.isScene!==!0&&(H=Qe);const Y=Ie.get(b),V=p.state.lights,ae=p.state.shadowsArray,xe=V.state.version,we=ne.getParameters(b,V.state,ae,H,Q),ye=ne.getProgramCacheKey(we);let ze=Y.programs;Y.environment=b.isMeshStandardMaterial?H.environment:null,Y.fog=H.fog,Y.envMap=(b.isMeshStandardMaterial?D:yt).get(b.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&b.envMap===null?H.environmentRotation:b.envMapRotation,ze===void 0&&(b.addEventListener("dispose",ve),ze=new Map,Y.programs=ze);let Ve=ze.get(ye);if(Ve!==void 0){if(Y.currentProgram===Ve&&Y.lightsStateVersion===xe)return $a(b,we),Ve}else we.uniforms=ne.getUniforms(b),b.onBeforeCompile(we,S),Ve=ne.acquireProgram(we,ye),ze.set(ye,Ve),Y.uniforms=we.uniforms;const Fe=Y.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Fe.clippingPlanes=Ce.uniform),$a(b,we),Y.needsLights=Cd(b),Y.lightsStateVersion=xe,Y.needsLights&&(Fe.ambientLightColor.value=V.state.ambient,Fe.lightProbe.value=V.state.probe,Fe.directionalLights.value=V.state.directional,Fe.directionalLightShadows.value=V.state.directionalShadow,Fe.spotLights.value=V.state.spot,Fe.spotLightShadows.value=V.state.spotShadow,Fe.rectAreaLights.value=V.state.rectArea,Fe.ltc_1.value=V.state.rectAreaLTC1,Fe.ltc_2.value=V.state.rectAreaLTC2,Fe.pointLights.value=V.state.point,Fe.pointLightShadows.value=V.state.pointShadow,Fe.hemisphereLights.value=V.state.hemi,Fe.directionalShadowMap.value=V.state.directionalShadowMap,Fe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Fe.spotShadowMap.value=V.state.spotShadowMap,Fe.spotLightMatrix.value=V.state.spotLightMatrix,Fe.spotLightMap.value=V.state.spotLightMap,Fe.pointShadowMap.value=V.state.pointShadowMap,Fe.pointShadowMatrix.value=V.state.pointShadowMatrix),Y.currentProgram=Ve,Y.uniformsList=null,Ve}function Ka(b){if(b.uniformsList===null){const H=b.currentProgram.getUniforms();b.uniformsList=hr.seqWithValue(H.seq,b.uniforms)}return b.uniformsList}function $a(b,H){const Q=Ie.get(b);Q.outputColorSpace=H.outputColorSpace,Q.batching=H.batching,Q.batchingColor=H.batchingColor,Q.instancing=H.instancing,Q.instancingColor=H.instancingColor,Q.instancingMorph=H.instancingMorph,Q.skinning=H.skinning,Q.morphTargets=H.morphTargets,Q.morphNormals=H.morphNormals,Q.morphColors=H.morphColors,Q.morphTargetsCount=H.morphTargetsCount,Q.numClippingPlanes=H.numClippingPlanes,Q.numIntersection=H.numClipIntersection,Q.vertexAlphas=H.vertexAlphas,Q.vertexTangents=H.vertexTangents,Q.toneMapping=H.toneMapping}function yd(b,H,Q,Y,V){H.isScene!==!0&&(H=Qe),qe.resetTextureUnits();const ae=H.fog,xe=Y.isMeshStandardMaterial?H.environment:null,we=w===null?S.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Zi,ye=(Y.isMeshStandardMaterial?D:yt).get(Y.envMap||xe),ze=Y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Ve=!!Q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Fe=!!Q.morphAttributes.position,je=!!Q.morphAttributes.normal,ot=!!Q.morphAttributes.color;let xt=ei;Y.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(xt=S.toneMapping);const vt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ze=vt!==void 0?vt.length:0,Ue=Ie.get(Y),Ft=p.state.lights;if(te===!0&&(oe===!0||b!==v)){const Nt=b===v&&Y.id===E;Ce.setState(Y,b,Nt)}let it=!1;Y.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Ft.state.version||Ue.outputColorSpace!==we||V.isBatchedMesh&&Ue.batching===!1||!V.isBatchedMesh&&Ue.batching===!0||V.isBatchedMesh&&Ue.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ue.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ue.instancing===!1||!V.isInstancedMesh&&Ue.instancing===!0||V.isSkinnedMesh&&Ue.skinning===!1||!V.isSkinnedMesh&&Ue.skinning===!0||V.isInstancedMesh&&Ue.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ue.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ue.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ue.instancingMorph===!1&&V.morphTexture!==null||Ue.envMap!==ye||Y.fog===!0&&Ue.fog!==ae||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==Ce.numPlanes||Ue.numIntersection!==Ce.numIntersection)||Ue.vertexAlphas!==ze||Ue.vertexTangents!==Ve||Ue.morphTargets!==Fe||Ue.morphNormals!==je||Ue.morphColors!==ot||Ue.toneMapping!==xt||Ue.morphTargetsCount!==Ze)&&(it=!0):(it=!0,Ue.__version=Y.version);let hn=Ue.currentProgram;it===!0&&(hn=Is(Y,H,V));let vi=!1,Qt=!1,rs=!1;const ft=hn.getUniforms(),tn=Ue.uniforms;if(pe.useProgram(hn.program)&&(vi=!0,Qt=!0,rs=!0),Y.id!==E&&(E=Y.id,Qt=!0),vi||v!==b){pe.buffers.depth.getReversed()?(se.copy(b.projectionMatrix),Su(se),_u(se),ft.setValue(P,"projectionMatrix",se)):ft.setValue(P,"projectionMatrix",b.projectionMatrix),ft.setValue(P,"viewMatrix",b.matrixWorldInverse);const Wt=ft.map.cameraPosition;Wt!==void 0&&Wt.setValue(P,Le.setFromMatrixPosition(b.matrixWorld)),$e.logarithmicDepthBuffer&&ft.setValue(P,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ft.setValue(P,"isOrthographic",b.isOrthographicCamera===!0),v!==b&&(v=b,Qt=!0,rs=!0)}if(V.isSkinnedMesh){ft.setOptional(P,V,"bindMatrix"),ft.setOptional(P,V,"bindMatrixInverse");const Nt=V.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),ft.setValue(P,"boneTexture",Nt.boneTexture,qe))}V.isBatchedMesh&&(ft.setOptional(P,V,"batchingTexture"),ft.setValue(P,"batchingTexture",V._matricesTexture,qe),ft.setOptional(P,V,"batchingIdTexture"),ft.setValue(P,"batchingIdTexture",V._indirectTexture,qe),ft.setOptional(P,V,"batchingColorTexture"),V._colorsTexture!==null&&ft.setValue(P,"batchingColorTexture",V._colorsTexture,qe));const nn=Q.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&le.update(V,Q,hn),(Qt||Ue.receiveShadow!==V.receiveShadow)&&(Ue.receiveShadow=V.receiveShadow,ft.setValue(P,"receiveShadow",V.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(tn.envMap.value=ye,tn.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&H.environment!==null&&(tn.envMapIntensity.value=H.environmentIntensity),Qt&&(ft.setValue(P,"toneMappingExposure",S.toneMappingExposure),Ue.needsLights&&Ed(tn,rs),ae&&Y.fog===!0&&j.refreshFogUniforms(tn,ae),j.refreshMaterialUniforms(tn,Y,k,W,p.state.transmissionRenderTarget[b.id]),hr.upload(P,Ka(Ue),tn,qe)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(hr.upload(P,Ka(Ue),tn,qe),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ft.setValue(P,"center",V.center),ft.setValue(P,"modelViewMatrix",V.modelViewMatrix),ft.setValue(P,"normalMatrix",V.normalMatrix),ft.setValue(P,"modelMatrix",V.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Nt=Y.uniformsGroups;for(let Wt=0,Ir=Nt.length;Wt<Ir;Wt++){const si=Nt[Wt];O.update(si,hn),O.bind(si,hn)}}return hn}function Ed(b,H){b.ambientLightColor.needsUpdate=H,b.lightProbe.needsUpdate=H,b.directionalLights.needsUpdate=H,b.directionalLightShadows.needsUpdate=H,b.pointLights.needsUpdate=H,b.pointLightShadows.needsUpdate=H,b.spotLights.needsUpdate=H,b.spotLightShadows.needsUpdate=H,b.rectAreaLights.needsUpdate=H,b.hemisphereLights.needsUpdate=H}function Cd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(b,H,Q){const Y=Ie.get(b);Y.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),Ie.get(b.texture).__webglTexture=H,Ie.get(b.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,H){const Q=Ie.get(b);Q.__webglFramebuffer=H,Q.__useDefaultFramebuffer=H===void 0};const Md=P.createFramebuffer();this.setRenderTarget=function(b,H=0,Q=0){w=b,T=H,y=Q;let Y=!0,V=null,ae=!1,xe=!1;if(b){const ye=Ie.get(b);if(ye.__useDefaultFramebuffer!==void 0)pe.bindFramebuffer(P.FRAMEBUFFER,null),Y=!1;else if(ye.__webglFramebuffer===void 0)qe.setupRenderTarget(b);else if(ye.__hasExternalTextures)qe.rebindTextures(b,Ie.get(b.texture).__webglTexture,Ie.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Fe=b.depthTexture;if(ye.__boundDepthTexture!==Fe){if(Fe!==null&&Ie.has(Fe)&&(b.width!==Fe.image.width||b.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");qe.setupDepthRenderbuffer(b)}}const ze=b.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(xe=!0);const Ve=Ie.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ve[H])?V=Ve[H][Q]:V=Ve[H],ae=!0):b.samples>0&&qe.useMultisampledRTT(b)===!1?V=Ie.get(b).__webglMultisampledFramebuffer:Array.isArray(Ve)?V=Ve[Q]:V=Ve,R.copy(b.viewport),B.copy(b.scissor),F=b.scissorTest}else R.copy(ue).multiplyScalar(k).floor(),B.copy(Re).multiplyScalar(k).floor(),F=Te;if(Q!==0&&(V=Md),pe.bindFramebuffer(P.FRAMEBUFFER,V)&&Y&&pe.drawBuffers(b,V),pe.viewport(R),pe.scissor(B),pe.setScissorTest(F),ae){const ye=Ie.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+H,ye.__webglTexture,Q)}else if(xe){const ye=Ie.get(b.texture),ze=H;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,ye.__webglTexture,Q,ze)}else if(b!==null&&Q!==0){const ye=Ie.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ye.__webglTexture,Q)}E=-1},this.readRenderTargetPixels=function(b,H,Q,Y,V,ae,xe,we=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Ie.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xe!==void 0&&(ye=ye[xe]),ye){pe.bindFramebuffer(P.FRAMEBUFFER,ye);try{const ze=b.textures[we],Ve=ze.format,Fe=ze.type;if(!$e.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=b.width-Y&&Q>=0&&Q<=b.height-V&&(b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+we),P.readPixels(H,Q,Y,V,ce.convert(Ve),ce.convert(Fe),ae))}finally{const ze=w!==null?Ie.get(w).__webglFramebuffer:null;pe.bindFramebuffer(P.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(b,H,Q,Y,V,ae,xe,we=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Ie.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xe!==void 0&&(ye=ye[xe]),ye)if(H>=0&&H<=b.width-Y&&Q>=0&&Q<=b.height-V){pe.bindFramebuffer(P.FRAMEBUFFER,ye);const ze=b.textures[we],Ve=ze.format,Fe=ze.type;if(!$e.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,je),P.bufferData(P.PIXEL_PACK_BUFFER,ae.byteLength,P.STREAM_READ),b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+we),P.readPixels(H,Q,Y,V,ce.convert(Ve),ce.convert(Fe),0);const ot=w!==null?Ie.get(w).__webglFramebuffer:null;pe.bindFramebuffer(P.FRAMEBUFFER,ot);const xt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await xu(P,xt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,je),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ae),P.deleteBuffer(je),P.deleteSync(xt),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,H=null,Q=0){const Y=Math.pow(2,-Q),V=Math.floor(b.image.width*Y),ae=Math.floor(b.image.height*Y),xe=H!==null?H.x:0,we=H!==null?H.y:0;qe.setTexture2D(b,0),P.copyTexSubImage2D(P.TEXTURE_2D,Q,0,0,xe,we,V,ae),pe.unbindTexture()};const Td=P.createFramebuffer(),bd=P.createFramebuffer();this.copyTextureToTexture=function(b,H,Q=null,Y=null,V=0,ae=null){ae===null&&(V!==0?(Wi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ae=V,V=0):ae=0);let xe,we,ye,ze,Ve,Fe,je,ot,xt;const vt=b.isCompressedTexture?b.mipmaps[ae]:b.image;if(Q!==null)xe=Q.max.x-Q.min.x,we=Q.max.y-Q.min.y,ye=Q.isBox3?Q.max.z-Q.min.z:1,ze=Q.min.x,Ve=Q.min.y,Fe=Q.isBox3?Q.min.z:0;else{const nn=Math.pow(2,-V);xe=Math.floor(vt.width*nn),we=Math.floor(vt.height*nn),b.isDataArrayTexture?ye=vt.depth:b.isData3DTexture?ye=Math.floor(vt.depth*nn):ye=1,ze=0,Ve=0,Fe=0}Y!==null?(je=Y.x,ot=Y.y,xt=Y.z):(je=0,ot=0,xt=0);const Ze=ce.convert(H.format),Ue=ce.convert(H.type);let Ft;H.isData3DTexture?(qe.setTexture3D(H,0),Ft=P.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(qe.setTexture2DArray(H,0),Ft=P.TEXTURE_2D_ARRAY):(qe.setTexture2D(H,0),Ft=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,H.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,H.unpackAlignment);const it=P.getParameter(P.UNPACK_ROW_LENGTH),hn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),vi=P.getParameter(P.UNPACK_SKIP_PIXELS),Qt=P.getParameter(P.UNPACK_SKIP_ROWS),rs=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,vt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,vt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ze),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ve),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Fe);const ft=b.isDataArrayTexture||b.isData3DTexture,tn=H.isDataArrayTexture||H.isData3DTexture;if(b.isDepthTexture){const nn=Ie.get(b),Nt=Ie.get(H),Wt=Ie.get(nn.__renderTarget),Ir=Ie.get(Nt.__renderTarget);pe.bindFramebuffer(P.READ_FRAMEBUFFER,Wt.__webglFramebuffer),pe.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ir.__webglFramebuffer);for(let si=0;si<ye;si++)ft&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ie.get(b).__webglTexture,V,Fe+si),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ie.get(H).__webglTexture,ae,xt+si)),P.blitFramebuffer(ze,Ve,xe,we,je,ot,xe,we,P.DEPTH_BUFFER_BIT,P.NEAREST);pe.bindFramebuffer(P.READ_FRAMEBUFFER,null),pe.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(V!==0||b.isRenderTargetTexture||Ie.has(b)){const nn=Ie.get(b),Nt=Ie.get(H);pe.bindFramebuffer(P.READ_FRAMEBUFFER,Td),pe.bindFramebuffer(P.DRAW_FRAMEBUFFER,bd);for(let Wt=0;Wt<ye;Wt++)ft?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,nn.__webglTexture,V,Fe+Wt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,nn.__webglTexture,V),tn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Nt.__webglTexture,ae,xt+Wt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Nt.__webglTexture,ae),V!==0?P.blitFramebuffer(ze,Ve,xe,we,je,ot,xe,we,P.COLOR_BUFFER_BIT,P.NEAREST):tn?P.copyTexSubImage3D(Ft,ae,je,ot,xt+Wt,ze,Ve,xe,we):P.copyTexSubImage2D(Ft,ae,je,ot,ze,Ve,xe,we);pe.bindFramebuffer(P.READ_FRAMEBUFFER,null),pe.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else tn?b.isDataTexture||b.isData3DTexture?P.texSubImage3D(Ft,ae,je,ot,xt,xe,we,ye,Ze,Ue,vt.data):H.isCompressedArrayTexture?P.compressedTexSubImage3D(Ft,ae,je,ot,xt,xe,we,ye,Ze,vt.data):P.texSubImage3D(Ft,ae,je,ot,xt,xe,we,ye,Ze,Ue,vt):b.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ae,je,ot,xe,we,Ze,Ue,vt.data):b.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ae,je,ot,vt.width,vt.height,Ze,vt.data):P.texSubImage2D(P.TEXTURE_2D,ae,je,ot,xe,we,Ze,Ue,vt);P.pixelStorei(P.UNPACK_ROW_LENGTH,it),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,hn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,vi),P.pixelStorei(P.UNPACK_SKIP_ROWS,Qt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,rs),ae===0&&H.generateMipmaps&&P.generateMipmap(Ft),pe.unbindTexture()},this.copyTextureToTexture3D=function(b,H,Q=null,Y=null,V=0){return Wi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,H,Q,Y,V)},this.initRenderTarget=function(b){Ie.get(b).__webglFramebuffer===void 0&&qe.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?qe.setTextureCube(b,0):b.isData3DTexture?qe.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?qe.setTexture2DArray(b,0):qe.setTexture2D(b,0),pe.unbindTexture()},this.resetState=function(){T=0,y=0,w=null,pe.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}class $n{static idGen=0;constructor(e,t){let n,i;this.promise=new Promise((c,d)=>{n=c,i=d});const r=n.bind(this),o=i.bind(this),a=(...c)=>{r(...c)},l=c=>{o(c)};e(a.bind(this),l.bind(this)),this.abortHandler=t,this.id=$n.idGen++}then(e){return new $n((t,n)=>{this.promise=this.promise.then((...i)=>{const r=e(...i);r instanceof Promise||r instanceof $n?r.then((...o)=>{t(...o)}):t(r)}).catch(i=>{n(i)})},this.abortHandler)}catch(e){return new $n(t=>{this.promise=this.promise.then((...n)=>{t(...n)}).catch(e)},this.abortHandler)}abort(e){this.abortHandler&&this.abortHandler(e)}}class id extends Error{constructor(e){super(e)}}(function(){const s=new Float32Array(1),e=new Int32Array(s.buffer);return function(t){s[0]=t;const n=e[0];let i=n>>16&32768,r=n>>12&2047;const o=n>>23&255;return o<103?i:o>142?(i|=31744,i|=(o==255?0:1)&&n&8388607,i):o<113?(r|=2048,i|=(r>>114-o)+(r>>113-o&1),i):(i|=o-112<<10|r>>1,i+=r&1,i)}})();const ao=(function(){const s=new Float32Array(1),e=new Int32Array(s.buffer);return function(t){return s[0]=t,e[0]}})(),zg=function(s,e){return s[e]+(s[e+1]<<8)+(s[e+2]<<16)+(s[e+3]<<24)},br=function(s,e,t=!0,n){const i=new AbortController,r=i.signal;let o=!1;const a=d=>{i.abort(d),o=!0};let l=!1;const c=(d,u,h,f)=>{e&&!l&&(e(d,u,h,f),d===100&&(l=!0))};return new $n((d,u)=>{const h={signal:r};n&&(h.headers=n),fetch(s,h).then(async f=>{if(!f.ok){const _=await f.text();u(new Error(`Fetch failed: ${f.status} ${f.statusText} ${_}`));return}const g=f.body.getReader();let A=0,m=f.headers.get("Content-Length"),p=m?parseInt(m):void 0;const x=[];for(;!o;)try{const{value:_,done:S}=await g.read();if(S){if(c(100,"100%",_,p),t){const y=new Blob(x).arrayBuffer();d(y)}else d();break}A+=_.length;let C,T;p!==void 0&&(C=A/p*100,T=`${C.toFixed(2)}%`),t&&x.push(_),c(C,T,_,p)}catch(_){u(_);return}}).catch(f=>{u(new id(f))})},a)},mt=function(s,e,t){return Math.max(Math.min(s,t),e)},Ni=function(){return performance.now()/1e3},ki=s=>{if(s.geometry&&(s.geometry.dispose(),s.geometry=null),s.material&&(s.material.dispose(),s.material=null),s.children)for(let e of s.children)ki(e)},jt=(s,e)=>new Promise(t=>{window.setTimeout(()=>{t(s?s():void 0)},e?1:50)}),qi=(s=0)=>{let e=0;if(s===1)e=9;else if(s===2)e=24;else if(s===3)e=45;else if(s>3)throw new Error("getSphericalHarmonicsComponentCountForDegree() -> Invalid spherical harmonics degree");return e},Ea=()=>{let s,e;return{promise:new Promise((n,i)=>{s=n,e=i}),resolve:s,reject:e}},lo=s=>{let e,t;return s||(s=()=>{}),{promise:new $n((i,r)=>{e=i,t=r},s),resolve:e,reject:t}};class kg{constructor(e,t,n){this.major=e,this.minor=t,this.patch=n}toString(){return`${this.major}_${this.minor}_${this.patch}`}}function Ca(){const s=navigator.userAgent;return s.indexOf("iPhone")>0||s.indexOf("iPad")>0}function sd(){if(Ca()){const s=navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);return new kg(parseInt(s[1]||0,10),parseInt(s[2]||0,10),parseInt(s[3]||0,10))}else return null}const Hg=14;class de{static OFFSET={X:0,Y:1,Z:2,SCALE0:3,SCALE1:4,SCALE2:5,ROTATION0:6,ROTATION1:7,ROTATION2:8,ROTATION3:9,FDC0:10,FDC1:11,FDC2:12,OPACITY:13,FRC0:14,FRC1:15,FRC2:16,FRC3:17,FRC4:18,FRC5:19,FRC6:20,FRC7:21,FRC8:22,FRC9:23,FRC10:24,FRC11:25,FRC12:26,FRC13:27,FRC14:28,FRC15:29,FRC16:30,FRC17:31,FRC18:32,FRC19:33,FRC20:34,FRC21:35,FRC22:36,FRC23:37};constructor(e=0){this.sphericalHarmonicsDegree=e,this.sphericalHarmonicsCount=qi(this.sphericalHarmonicsDegree),this.componentCount=this.sphericalHarmonicsCount+Hg,this.defaultSphericalHarmonics=new Array(this.sphericalHarmonicsCount).fill(0),this.splats=[],this.splatCount=0}static createSplat(e=0){const t=[0,0,0,1,1,1,1,0,0,0,0,0,0,0];let n=qi(e);for(let i=0;i<n;i++)t.push(0);return t}addSplat(e){this.splats.push(e),this.splatCount++}getSplat(e){return this.splats[e]}addDefaultSplat(){const e=de.createSplat(this.sphericalHarmonicsDegree);return this.addSplat(e),e}addSplatFromComonents(e,t,n,i,r,o,a,l,c,d,u,h,f,g,...A){const m=[e,t,n,i,r,o,a,l,c,d,u,h,f,g,...this.defaultSphericalHarmonics];for(let p=0;p<A.length&&p<this.sphericalHarmonicsCount;p++)m[p]=A[p];return this.addSplat(m),m}addSplatFromArray(e,t){const n=e.splats[t],i=de.createSplat(this.sphericalHarmonicsDegree);for(let r=0;r<this.componentCount&&r<n.length;r++)i[r]=n[r];this.addSplat(i)}}class ct{static DefaultSplatSortDistanceMapPrecision=16;static MemoryPageSize=65536;static BytesPerFloat=4;static BytesPerInt=4;static MaxScenes=32;static ProgressiveLoadSectionSize=262144;static ProgressiveLoadSectionDelayDuration=15;static SphericalHarmonics8BitCompressionRange=3}const Vg=ct.SphericalHarmonics8BitCompressionRange,Xn=Vg/2,Tt=Cs.toHalfFloat.bind(Cs),Ma=Cs.fromHalfFloat.bind(Cs),pt=(s,e,t=!1,n,i)=>{if(e===0)return s;if(e===1||e===2&&!t)return Cs.fromHalfFloat(s);if(e===2)return Ta(s,n,i)},hs=(s,e,t)=>{s=mt(s,e,t);const n=t-e;return mt(Math.floor((s-e)/n*255),0,255)},Ta=(s,e,t)=>{const n=t-e;return s/255*n+e},rd=(s,e,t)=>hs(Ma(s,e,t)),Gg=(s,e,t)=>Tt(Ta(s,e,t)),st=(s,e,t,n=!1)=>t===0?s.getFloat32(e*4,!0):t===1||t===2&&!n?s.getUint16(e*2,!0):s.getUint8(e,!0),Wg=(function(){const s=e=>e;return function(e,t,n,i=!1){if(t===n)return e;let r=s;return t===2&&i?n===1?r=Gg:n==0&&(r=Ta):t===2||t===1?n===0?r=Ma:n==2&&(i?r=rd:r=s):t===0&&(n===1?r=Tt:n==2&&(i?r=hs:r=Tt)),r(e)}})(),zi=(s,e,t,n,i=0)=>{const r=new Uint8Array(s,e),o=new Uint8Array(t,n);for(let a=0;a<i;a++)o[a]=r[a]};class G{static CurrentMajorVersion=0;static CurrentMinorVersion=1;static CenterComponentCount=3;static ScaleComponentCount=3;static RotationComponentCount=4;static ColorComponentCount=4;static CovarianceComponentCount=6;static SplatScaleOffsetFloat=3;static SplatRotationOffsetFloat=6;static CompressionLevels={0:{BytesPerCenter:12,BytesPerScale:12,BytesPerRotation:16,BytesPerColor:4,ScaleOffsetBytes:12,RotationffsetBytes:24,ColorOffsetBytes:40,SphericalHarmonicsOffsetBytes:44,ScaleRange:1,BytesPerSphericalHarmonicsComponent:4,SphericalHarmonicsOffsetFloat:11,SphericalHarmonicsDegrees:{0:{BytesPerSplat:44},1:{BytesPerSplat:80},2:{BytesPerSplat:140}}},1:{BytesPerCenter:6,BytesPerScale:6,BytesPerRotation:8,BytesPerColor:4,ScaleOffsetBytes:6,RotationffsetBytes:12,ColorOffsetBytes:20,SphericalHarmonicsOffsetBytes:24,ScaleRange:32767,BytesPerSphericalHarmonicsComponent:2,SphericalHarmonicsOffsetFloat:12,SphericalHarmonicsDegrees:{0:{BytesPerSplat:24},1:{BytesPerSplat:42},2:{BytesPerSplat:72}}},2:{BytesPerCenter:6,BytesPerScale:6,BytesPerRotation:8,BytesPerColor:4,ScaleOffsetBytes:6,RotationffsetBytes:12,ColorOffsetBytes:20,SphericalHarmonicsOffsetBytes:24,ScaleRange:32767,BytesPerSphericalHarmonicsComponent:1,SphericalHarmonicsOffsetFloat:12,SphericalHarmonicsDegrees:{0:{BytesPerSplat:24},1:{BytesPerSplat:33},2:{BytesPerSplat:48}}}};static CovarianceSizeFloats=6;static HeaderSizeBytes=4096;static SectionHeaderSizeBytes=1024;static BucketStorageSizeBytes=12;static BucketStorageSizeFloats=3;static BucketBlockSize=5;static BucketSize=256;constructor(e,t=!0){this.constructFromBuffer(e,t)}getSplatCount(){return this.splatCount}getMaxSplatCount(){return this.maxSplatCount}getMinSphericalHarmonicsDegree(){let e=0;for(let t=0;t<this.sections.length;t++){const n=this.sections[t];(t===0||n.sphericalHarmonicsDegree<e)&&(e=n.sphericalHarmonicsDegree)}return e}getBucketIndex(e,t){let n;const i=e.fullBucketCount*e.bucketSize;if(t<i)n=Math.floor(t/e.bucketSize);else{let r=i;n=e.fullBucketCount;let o=0;for(;r<e.splatCount;){let a=e.partiallyFilledBucketLengths[o];if(t>=r&&t<r+a)break;r+=a,n++,o++}}return n}getSplatCenter(e,t,n){const i=this.globalSplatIndexToSectionMap[e],r=this.sections[i],o=e-r.splatCountOffset,a=r.bytesPerSplat*o,l=new DataView(this.bufferData,r.dataBase+a),c=st(l,0,this.compressionLevel),d=st(l,1,this.compressionLevel),u=st(l,2,this.compressionLevel);if(this.compressionLevel>=1){const f=this.getBucketIndex(r,o)*G.BucketStorageSizeFloats,g=r.compressionScaleFactor,A=r.compressionScaleRange;t.x=(c-A)*g+r.bucketArray[f],t.y=(d-A)*g+r.bucketArray[f+1],t.z=(u-A)*g+r.bucketArray[f+2]}else t.x=c,t.y=d,t.z=u;n&&t.applyMatrix4(n)}getSplatScaleAndRotation=(function(){const e=new ke,t=new ke,n=new ke,i=new I,r=new I,o=new gt;return function(a,l,c,d,u){const h=this.globalSplatIndexToSectionMap[a],f=this.sections[h],g=a-f.splatCountOffset,A=f.bytesPerSplat*g+G.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,m=new DataView(this.bufferData,f.dataBase+A);r.set(pt(st(m,0,this.compressionLevel),this.compressionLevel),pt(st(m,1,this.compressionLevel),this.compressionLevel),pt(st(m,2,this.compressionLevel),this.compressionLevel)),u&&(u.x!==void 0&&(r.x=u.x),u.y!==void 0&&(r.y=u.y),u.z!==void 0&&(r.z=u.z)),o.set(pt(st(m,4,this.compressionLevel),this.compressionLevel),pt(st(m,5,this.compressionLevel),this.compressionLevel),pt(st(m,6,this.compressionLevel),this.compressionLevel),pt(st(m,3,this.compressionLevel),this.compressionLevel)),d?(e.makeScale(r.x,r.y,r.z),t.makeRotationFromQuaternion(o),n.copy(e).multiply(t).multiply(d),n.decompose(i,c,l)):(l.copy(r),c.copy(o))}})();getSplatColor(e,t){const n=this.globalSplatIndexToSectionMap[e],i=this.sections[n],r=e-i.splatCountOffset,o=i.bytesPerSplat*r+G.CompressionLevels[this.compressionLevel].ColorOffsetBytes,a=new Uint8Array(this.bufferData,i.dataBase+o,4);t.set(a[0],a[1],a[2],a[3])}fillSplatCenterArray(e,t,n,i,r){const o=this.splatCount;n=n||0,i=i||o-1,r===void 0&&(r=n);const a=new I;for(let l=n;l<=i;l++){const c=this.globalSplatIndexToSectionMap[l],d=this.sections[c],u=l-d.splatCountOffset,h=(l-n+r)*G.CenterComponentCount,f=d.bytesPerSplat*u,g=new DataView(this.bufferData,d.dataBase+f),A=st(g,0,this.compressionLevel),m=st(g,1,this.compressionLevel),p=st(g,2,this.compressionLevel);if(this.compressionLevel>=1){const _=this.getBucketIndex(d,u)*G.BucketStorageSizeFloats,S=d.compressionScaleFactor,C=d.compressionScaleRange;a.x=(A-C)*S+d.bucketArray[_],a.y=(m-C)*S+d.bucketArray[_+1],a.z=(p-C)*S+d.bucketArray[_+2]}else a.x=A,a.y=m,a.z=p;t&&a.applyMatrix4(t),e[h]=a.x,e[h+1]=a.y,e[h+2]=a.z}}fillSplatScaleRotationArray=(function(){const e=new ke,t=new ke,n=new ke,i=new I,r=new gt,o=new I,a=l=>{const c=l.w<0?-1:1;l.x*=c,l.y*=c,l.z*=c,l.w*=c};return function(l,c,d,u,h,f,g,A){const m=this.splatCount;u=u||0,h=h||m-1,f===void 0&&(f=u);const p=(x,_)=>Wg(x,_,g);for(let x=u;x<=h;x++){const _=this.globalSplatIndexToSectionMap[x],S=this.sections[_],C=x-S.splatCountOffset,T=S.bytesPerSplat*C+G.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,y=(x-u+f)*G.ScaleComponentCount,w=(x-u+f)*G.RotationComponentCount,E=new DataView(this.bufferData,S.dataBase+T),v=A&&A.x!==void 0?A.x:st(E,0,this.compressionLevel),R=A&&A.y!==void 0?A.y:st(E,1,this.compressionLevel),B=A&&A.z!==void 0?A.z:st(E,2,this.compressionLevel),F=st(E,3,this.compressionLevel),U=st(E,4,this.compressionLevel),z=st(E,5,this.compressionLevel),N=st(E,6,this.compressionLevel);i.set(pt(v,this.compressionLevel),pt(R,this.compressionLevel),pt(B,this.compressionLevel)),r.set(pt(U,this.compressionLevel),pt(z,this.compressionLevel),pt(N,this.compressionLevel),pt(F,this.compressionLevel)).normalize(),d&&(o.set(0,0,0),e.makeScale(i.x,i.y,i.z),t.makeRotationFromQuaternion(r),n.identity().premultiply(e).premultiply(t),n.premultiply(d),n.decompose(o,r,i),r.normalize()),a(r),l&&(l[y]=p(i.x,0),l[y+1]=p(i.y,0),l[y+2]=p(i.z,0)),c&&(c[w]=p(r.x,0),c[w+1]=p(r.y,0),c[w+2]=p(r.z,0),c[w+3]=p(r.w,0))}}})();static computeCovariance=(function(){const e=new ke,t=new Ne,n=new Ne,i=new Ne,r=new Ne,o=new Ne,a=new Ne;return function(l,c,d,u,h=0,f){e.makeScale(l.x,l.y,l.z),t.setFromMatrix4(e),e.makeRotationFromQuaternion(c),n.setFromMatrix4(e),i.copy(n).multiply(t),r.copy(i).transpose().premultiply(i),d&&(o.setFromMatrix4(d),a.copy(o).transpose(),r.multiply(a),r.premultiply(o)),f>=1?(u[h]=Tt(r.elements[0]),u[h+1]=Tt(r.elements[3]),u[h+2]=Tt(r.elements[6]),u[h+3]=Tt(r.elements[4]),u[h+4]=Tt(r.elements[7]),u[h+5]=Tt(r.elements[8])):(u[h]=r.elements[0],u[h+1]=r.elements[3],u[h+2]=r.elements[6],u[h+3]=r.elements[4],u[h+4]=r.elements[7],u[h+5]=r.elements[8])}})();fillSplatCovarianceArray(e,t,n,i,r,o){const a=this.splatCount,l=new I,c=new gt;n=n||0,i=i||a-1,r===void 0&&(r=n);for(let d=n;d<=i;d++){const u=this.globalSplatIndexToSectionMap[d],h=this.sections[u],f=d-h.splatCountOffset,g=(d-n+r)*G.CovarianceComponentCount,A=h.bytesPerSplat*f+G.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,m=new DataView(this.bufferData,h.dataBase+A);l.set(pt(st(m,0,this.compressionLevel),this.compressionLevel),pt(st(m,1,this.compressionLevel),this.compressionLevel),pt(st(m,2,this.compressionLevel),this.compressionLevel)),c.set(pt(st(m,4,this.compressionLevel),this.compressionLevel),pt(st(m,5,this.compressionLevel),this.compressionLevel),pt(st(m,6,this.compressionLevel),this.compressionLevel),pt(st(m,3,this.compressionLevel),this.compressionLevel)),G.computeCovariance(l,c,t,e,g,o)}}fillSplatColorArray(e,t,n,i,r){const o=this.splatCount;n=n||0,i=i||o-1,r===void 0&&(r=n);for(let a=n;a<=i;a++){const l=this.globalSplatIndexToSectionMap[a],c=this.sections[l],d=a-c.splatCountOffset,u=(a-n+r)*G.ColorComponentCount,h=c.bytesPerSplat*d+G.CompressionLevels[this.compressionLevel].ColorOffsetBytes,f=new Uint8Array(this.bufferData,c.dataBase+h);let g=f[3];g=g>=t?g:0,e[u]=f[0],e[u+1]=f[1],e[u+2]=f[2],e[u+3]=g}}fillSphericalHarmonicsArray=(function(){for(let U=0;U<15;U++)new I;const e=new Ne,t=new ke,n=new I,i=new I,r=new gt,o=[],a=[],l=[],c=[],d=[],u=[],h=[],f=[],g=[],A=[],m=[],p=[],x=[],_=[],S=[],C=[],T=[],y=[],w=U=>U,E=(U,z,N,W)=>{U[0]=z,U[1]=N,U[2]=W},v=(U,z,N,W,k)=>{U[0]=st(z,W,k,!0),U[1]=st(z,W+N,k,!0),U[2]=st(z,W+N+N,k,!0)},R=(U,z)=>{z[0]=U[0],z[1]=U[1],z[2]=U[2]},B=(U,z,N,W)=>{z[N]=W(U[0]),z[N+1]=W(U[1]),z[N+2]=W(U[2])},F=(U,z,N,W,k)=>(z[0]=pt(U[0],N,!0,W,k),z[1]=pt(U[1],N,!0,W,k),z[2]=pt(U[2],N,!0,W,k),z);return function(U,z,N,W,k,K,ee){const ue=this.splatCount;W=W||0,k=k||ue-1,K===void 0&&(K=W),N&&z>=1&&(t.copy(N),t.decompose(n,r,i),r.normalize(),t.makeRotationFromQuaternion(r),e.setFromMatrix4(t),E(o,e.elements[4],-e.elements[7],e.elements[1]),E(a,-e.elements[5],e.elements[8],-e.elements[2]),E(l,e.elements[3],-e.elements[6],e.elements[0]));const Re=$=>rd($,this.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff),Te=$=>hs($,this.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff);for(let $=W;$<=k;$++){const te=this.globalSplatIndexToSectionMap[$],oe=this.sections[te];z=Math.min(z,oe.sphericalHarmonicsDegree);const se=qi(z),fe=$-oe.splatCountOffset,Le=oe.bytesPerSplat*fe+G.CompressionLevels[this.compressionLevel].SphericalHarmonicsOffsetBytes,Se=new DataView(this.bufferData,oe.dataBase+Le),Qe=($-W+K)*se;let We=N?0:this.compressionLevel,Pe=w;We!==ee&&(We===1?ee===0?Pe=Ma:ee==2&&(Pe=Re):We===0&&(ee===1?Pe=Tt:ee==2&&(Pe=Te)));const P=this.minSphericalHarmonicsCoeff,Xe=this.maxSphericalHarmonicsCoeff;z>=1&&(v(g,Se,3,0,this.compressionLevel),v(A,Se,3,1,this.compressionLevel),v(m,Se,3,2,this.compressionLevel),N?(F(g,g,this.compressionLevel,P,Xe),F(A,A,this.compressionLevel,P,Xe),F(m,m,this.compressionLevel,P,Xe),G.rotateSphericalHarmonics3(g,A,m,o,a,l,_,S,C)):(R(g,_),R(A,S),R(m,C)),B(_,U,Qe,Pe),B(S,U,Qe+3,Pe),B(C,U,Qe+6,Pe),z>=2&&(v(g,Se,5,9,this.compressionLevel),v(A,Se,5,10,this.compressionLevel),v(m,Se,5,11,this.compressionLevel),v(p,Se,5,12,this.compressionLevel),v(x,Se,5,13,this.compressionLevel),N?(F(g,g,this.compressionLevel,P,Xe),F(A,A,this.compressionLevel,P,Xe),F(m,m,this.compressionLevel,P,Xe),F(p,p,this.compressionLevel,P,Xe),F(x,x,this.compressionLevel,P,Xe),G.rotateSphericalHarmonics5(g,A,m,p,x,o,a,l,c,d,u,h,f,_,S,C,T,y)):(R(g,_),R(A,S),R(m,C),R(p,T),R(x,y)),B(_,U,Qe+9,Pe),B(S,U,Qe+12,Pe),B(C,U,Qe+15,Pe),B(T,U,Qe+18,Pe),B(y,U,Qe+21,Pe)))}}})();static dot3=(e,t,n,i,r)=>{r[0]=r[1]=r[2]=0;const o=i[0],a=i[1],l=i[2];G.addInto3(e[0]*o,e[1]*o,e[2]*o,r),G.addInto3(t[0]*a,t[1]*a,t[2]*a,r),G.addInto3(n[0]*l,n[1]*l,n[2]*l,r)};static addInto3=(e,t,n,i)=>{i[0]=i[0]+e,i[1]=i[1]+t,i[2]=i[2]+n};static dot5=(e,t,n,i,r,o,a)=>{a[0]=a[1]=a[2]=0;const l=o[0],c=o[1],d=o[2],u=o[3],h=o[4];G.addInto3(e[0]*l,e[1]*l,e[2]*l,a),G.addInto3(t[0]*c,t[1]*c,t[2]*c,a),G.addInto3(n[0]*d,n[1]*d,n[2]*d,a),G.addInto3(i[0]*u,i[1]*u,i[2]*u,a),G.addInto3(r[0]*h,r[1]*h,r[2]*h,a)};static rotateSphericalHarmonics3=(e,t,n,i,r,o,a,l,c)=>{G.dot3(e,t,n,i,a),G.dot3(e,t,n,r,l),G.dot3(e,t,n,o,c)};static rotateSphericalHarmonics5=(e,t,n,i,r,o,a,l,c,d,u,h,f,g,A,m,p,x)=>{const _=Math.sqrt(.25),S=Math.sqrt(3/4),C=Math.sqrt(1/3),T=Math.sqrt(4/3),y=Math.sqrt(1/12);c[0]=_*(l[2]*o[0]+l[0]*o[2]+(o[2]*l[0]+o[0]*l[2])),c[1]=l[1]*o[0]+o[1]*l[0],c[2]=S*(l[1]*o[1]+o[1]*l[1]),c[3]=l[1]*o[2]+o[1]*l[2],c[4]=_*(l[2]*o[2]-l[0]*o[0]+(o[2]*l[2]-o[0]*l[0])),G.dot5(e,t,n,i,r,c,g),d[0]=_*(a[2]*o[0]+a[0]*o[2]+(o[2]*a[0]+o[0]*a[2])),d[1]=a[1]*o[0]+o[1]*a[0],d[2]=S*(a[1]*o[1]+o[1]*a[1]),d[3]=a[1]*o[2]+o[1]*a[2],d[4]=_*(a[2]*o[2]-a[0]*o[0]+(o[2]*a[2]-o[0]*a[0])),G.dot5(e,t,n,i,r,d,A),u[0]=C*(a[2]*a[0]+a[0]*a[2])+-y*(l[2]*l[0]+l[0]*l[2]+(o[2]*o[0]+o[0]*o[2])),u[1]=T*a[1]*a[0]+-C*(l[1]*l[0]+o[1]*o[0]),u[2]=a[1]*a[1]+-_*(l[1]*l[1]+o[1]*o[1]),u[3]=T*a[1]*a[2]+-C*(l[1]*l[2]+o[1]*o[2]),u[4]=C*(a[2]*a[2]-a[0]*a[0])+-y*(l[2]*l[2]-l[0]*l[0]+(o[2]*o[2]-o[0]*o[0])),G.dot5(e,t,n,i,r,u,m),h[0]=_*(a[2]*l[0]+a[0]*l[2]+(l[2]*a[0]+l[0]*a[2])),h[1]=a[1]*l[0]+l[1]*a[0],h[2]=S*(a[1]*l[1]+l[1]*a[1]),h[3]=a[1]*l[2]+l[1]*a[2],h[4]=_*(a[2]*l[2]-a[0]*l[0]+(l[2]*a[2]-l[0]*a[0])),G.dot5(e,t,n,i,r,h,p),f[0]=_*(l[2]*l[0]+l[0]*l[2]-(o[2]*o[0]+o[0]*o[2])),f[1]=l[1]*l[0]-o[1]*o[0],f[2]=S*(l[1]*l[1]-o[1]*o[1]),f[3]=l[1]*l[2]-o[1]*o[2],f[4]=_*(l[2]*l[2]-l[0]*l[0]-(o[2]*o[2]-o[0]*o[0])),G.dot5(e,t,n,i,r,f,x)};static parseHeader(e){const t=new Uint8Array(e,0,G.HeaderSizeBytes),n=new Uint16Array(e,0,G.HeaderSizeBytes/2),i=new Uint32Array(e,0,G.HeaderSizeBytes/4),r=new Float32Array(e,0,G.HeaderSizeBytes/4),o=t[0],a=t[1],l=i[1],c=i[2],d=i[3],u=i[4],h=n[10],f=new I(r[6],r[7],r[8]),g=r[9]||-Xn,A=r[10]||Xn;return{versionMajor:o,versionMinor:a,maxSectionCount:l,sectionCount:c,maxSplatCount:d,splatCount:u,compressionLevel:h,sceneCenter:f,minSphericalHarmonicsCoeff:g,maxSphericalHarmonicsCoeff:A}}static writeHeaderCountsToBuffer(e,t,n){const i=new Uint32Array(n,0,G.HeaderSizeBytes/4);i[2]=e,i[4]=t}static writeHeaderToBuffer(e,t){const n=new Uint8Array(t,0,G.HeaderSizeBytes),i=new Uint16Array(t,0,G.HeaderSizeBytes/2),r=new Uint32Array(t,0,G.HeaderSizeBytes/4),o=new Float32Array(t,0,G.HeaderSizeBytes/4);n[0]=e.versionMajor,n[1]=e.versionMinor,n[2]=0,n[3]=0,r[1]=e.maxSectionCount,r[2]=e.sectionCount,r[3]=e.maxSplatCount,r[4]=e.splatCount,i[10]=e.compressionLevel,o[6]=e.sceneCenter.x,o[7]=e.sceneCenter.y,o[8]=e.sceneCenter.z,o[9]=e.minSphericalHarmonicsCoeff||-Xn,o[10]=e.maxSphericalHarmonicsCoeff||Xn}static parseSectionHeaders(e,t,n=0,i){const r=e.compressionLevel,o=e.maxSectionCount,a=new Uint16Array(t,n,o*G.SectionHeaderSizeBytes/2),l=new Uint32Array(t,n,o*G.SectionHeaderSizeBytes/4),c=new Float32Array(t,n,o*G.SectionHeaderSizeBytes/4),d=[];let u=0,h=u/2,f=u/4,g=G.HeaderSizeBytes+e.maxSectionCount*G.SectionHeaderSizeBytes,A=0;for(let m=0;m<o;m++){const p=l[f+1],x=l[f+2],_=l[f+3],S=c[f+4],C=S/2,T=a[h+10],y=l[f+6]||G.CompressionLevels[r].ScaleRange,w=l[f+8],E=l[f+9],v=E*4,R=T*_+v,B=a[h+20],{bytesPerSplat:F}=G.calculateComponentStorage(r,B),U=F*p,z=U+R,N={bytesPerSplat:F,splatCountOffset:A,splatCount:i?p:0,maxSplatCount:p,bucketSize:x,bucketCount:_,bucketBlockSize:S,halfBucketBlockSize:C,bucketStorageSizeBytes:T,bucketsStorageSizeBytes:R,splatDataStorageSizeBytes:U,storageSizeBytes:z,compressionScaleRange:y,compressionScaleFactor:C/y,base:g,bucketsBase:g+v,dataBase:g+R,fullBucketCount:w,partiallyFilledBucketCount:E,sphericalHarmonicsDegree:B};d[m]=N,g+=z,u+=G.SectionHeaderSizeBytes,h=u/2,f=u/4,A+=p}return d}static writeSectionHeaderToBuffer(e,t,n,i=0){const r=new Uint16Array(n,i,G.SectionHeaderSizeBytes/2),o=new Uint32Array(n,i,G.SectionHeaderSizeBytes/4),a=new Float32Array(n,i,G.SectionHeaderSizeBytes/4);o[0]=e.splatCount,o[1]=e.maxSplatCount,o[2]=t>=1?e.bucketSize:0,o[3]=t>=1?e.bucketCount:0,a[4]=t>=1?e.bucketBlockSize:0,r[10]=t>=1?G.BucketStorageSizeBytes:0,o[6]=t>=1?e.compressionScaleRange:0,o[7]=e.storageSizeBytes,o[8]=t>=1?e.fullBucketCount:0,o[9]=t>=1?e.partiallyFilledBucketCount:0,r[20]=e.sphericalHarmonicsDegree}static writeSectionHeaderSplatCountToBuffer(e,t,n=0){const i=new Uint32Array(t,n,G.SectionHeaderSizeBytes/4);i[0]=e}constructFromBuffer(e,t){this.bufferData=e,this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSectionMap=[];const n=G.parseHeader(this.bufferData);this.versionMajor=n.versionMajor,this.versionMinor=n.versionMinor,this.maxSectionCount=n.maxSectionCount,this.sectionCount=t?n.maxSectionCount:0,this.maxSplatCount=n.maxSplatCount,this.splatCount=t?n.maxSplatCount:0,this.compressionLevel=n.compressionLevel,this.sceneCenter=new I().copy(n.sceneCenter),this.minSphericalHarmonicsCoeff=n.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff=n.maxSphericalHarmonicsCoeff,this.sections=G.parseSectionHeaders(n,this.bufferData,G.HeaderSizeBytes,t),this.linkBufferArrays(),this.buildMaps()}static calculateComponentStorage(e,t){const n=G.CompressionLevels[e].BytesPerCenter,i=G.CompressionLevels[e].BytesPerScale,r=G.CompressionLevels[e].BytesPerRotation,o=G.CompressionLevels[e].BytesPerColor,a=qi(t),l=G.CompressionLevels[e].BytesPerSphericalHarmonicsComponent*a,c=n+i+r+o+l;return{bytesPerCenter:n,bytesPerScale:i,bytesPerRotation:r,bytesPerColor:o,sphericalHarmonicsComponentsPerSplat:a,sphericalHarmonicsBytesPerSplat:l,bytesPerSplat:c}}linkBufferArrays(){for(let e=0;e<this.maxSectionCount;e++){const t=this.sections[e];t.bucketArray=new Float32Array(this.bufferData,t.bucketsBase,t.bucketCount*G.BucketStorageSizeFloats),t.partiallyFilledBucketCount>0&&(t.partiallyFilledBucketLengths=new Uint32Array(this.bufferData,t.base,t.partiallyFilledBucketCount))}}buildMaps(){let e=0;for(let t=0;t<this.maxSectionCount;t++){const n=this.sections[t];for(let i=0;i<n.maxSplatCount;i++){const r=e+i;this.globalSplatIndexToLocalSplatIndexMap[r]=i,this.globalSplatIndexToSectionMap[r]=t}e+=n.maxSplatCount}}updateLoadedCounts(e,t){G.writeHeaderCountsToBuffer(e,t,this.bufferData),this.sectionCount=e,this.splatCount=t}updateSectionLoadedCounts(e,t){const n=G.HeaderSizeBytes+G.SectionHeaderSizeBytes*e;G.writeSectionHeaderSplatCountToBuffer(t,this.bufferData,n),this.sections[e].splatCount=t}static writeSplatDataToSectionBuffer=(function(){const e=new ArrayBuffer(12),t=new ArrayBuffer(12),n=new ArrayBuffer(16),i=new ArrayBuffer(4),r=new ArrayBuffer(256),o=new gt,a=new I,l=new I,{X:c,Y:d,Z:u,SCALE0:h,SCALE1:f,SCALE2:g,ROTATION0:A,ROTATION1:m,ROTATION2:p,ROTATION3:x,FDC0:_,FDC1:S,FDC2:C,OPACITY:T,FRC0:y,FRC9:w}=de.OFFSET,E=(v,R,B)=>{const F=B*2+1;return v=Math.round(v*R)+B,mt(v,0,F)};return function(v,R,B,F,U,z,N,W,k=-Xn,K=Xn){const ee=qi(U),ue=G.CompressionLevels[F].BytesPerCenter,Re=G.CompressionLevels[F].BytesPerScale,Te=G.CompressionLevels[F].BytesPerRotation,$=G.CompressionLevels[F].BytesPerColor,te=B,oe=te+ue,se=oe+Re,fe=se+Te,Le=fe+$;if(v[A]!==void 0?(o.set(v[A],v[m],v[p],v[x]),o.normalize()):o.set(1,0,0,0),v[h]!==void 0?a.set(v[h]||0,v[f]||0,v[g]||0):a.set(0,0,0),F===0){const Qe=new Float32Array(R,te,G.CenterComponentCount),We=new Float32Array(R,se,G.RotationComponentCount),Pe=new Float32Array(R,oe,G.ScaleComponentCount);if(We.set([o.x,o.y,o.z,o.w]),Pe.set([a.x,a.y,a.z]),Qe.set([v[c],v[d],v[u]]),U>0){const P=new Float32Array(R,Le,ee);if(U>=1){for(let Xe=0;Xe<9;Xe++)P[Xe]=v[y+Xe]||0;if(U>=2)for(let Xe=0;Xe<15;Xe++)P[Xe+9]=v[w+Xe]||0}}}else{const Qe=new Uint16Array(e,0,G.CenterComponentCount),We=new Uint16Array(n,0,G.RotationComponentCount),Pe=new Uint16Array(t,0,G.ScaleComponentCount);if(We.set([Tt(o.x),Tt(o.y),Tt(o.z),Tt(o.w)]),Pe.set([Tt(a.x),Tt(a.y),Tt(a.z)]),l.set(v[c],v[d],v[u]).sub(z),l.x=E(l.x,N,W),l.y=E(l.y,N,W),l.z=E(l.z,N,W),Qe.set([l.x,l.y,l.z]),U>0){const P=F===1?Uint16Array:Uint8Array,Xe=F===1?2:1,Ge=new P(r,0,ee);if(U>=1){for(let pe=0;pe<9;pe++){const He=v[y+pe]||0;Ge[pe]=F===1?Tt(He):hs(He,k,K)}const $e=9*Xe;if(zi(Ge.buffer,0,R,Le,$e),U>=2){for(let pe=0;pe<15;pe++){const He=v[w+pe]||0;Ge[pe+9]=F===1?Tt(He):hs(He,k,K)}zi(Ge.buffer,$e,R,Le+$e,15*Xe)}}}zi(Qe.buffer,0,R,te,6),zi(Pe.buffer,0,R,oe,6),zi(We.buffer,0,R,se,8)}const Se=new Uint8ClampedArray(i,0,4);Se.set([v[_]||0,v[S]||0,v[C]||0]),Se[3]=v[T]||0,zi(Se.buffer,0,R,fe,4)}})();static generateFromUncompressedSplatArrays(e,t,n,i,r,o,a=[]){let l=0;for(let C=0;C<e.length;C++){const T=e[C];l=Math.max(T.sphericalHarmonicsDegree,l)}let c,d;for(let C=0;C<e.length;C++){const T=e[C];for(let y=0;y<T.splats.length;y++){const w=T.splats[y];for(let E=de.OFFSET.FRC0;E<de.OFFSET.FRC23&&E<w.length;E++)(!c||w[E]<c)&&(c=w[E]),(!d||w[E]>d)&&(d=w[E])}}c=c||-Xn,d=d||Xn;const{bytesPerSplat:u}=G.calculateComponentStorage(n,l),h=G.CompressionLevels[n].ScaleRange,f=[],g=[];let A=0;for(let C=0;C<e.length;C++){const T=e[C],y=new de(l);for(let te=0;te<T.splatCount;te++){const oe=T.splats[te];(oe[de.OFFSET.OPACITY]||0)>=t&&y.addSplat(oe)}const w=a[C]||{},E=(w.blockSizeFactor||1)*(r||G.BucketBlockSize),v=Math.ceil((w.bucketSizeFactor||1)*(o||G.BucketSize)),R=G.computeBucketsForUncompressedSplatArray(y,E,v),B=R.fullBuckets.length,F=R.partiallyFullBuckets.map(te=>te.splats.length),U=F.length,z=[...R.fullBuckets,...R.partiallyFullBuckets],N=y.splats.length*u,W=U*4,k=n>=1?z.length*G.BucketStorageSizeBytes+W:0,K=N+k,ee=new ArrayBuffer(K),ue=h/(E*.5),Re=new I;let Te=0;for(let te=0;te<z.length;te++){const oe=z[te];Re.fromArray(oe.center);for(let se=0;se<oe.splats.length;se++){let fe=oe.splats[se];const Le=y.splats[fe],Se=k+Te*u;G.writeSplatDataToSectionBuffer(Le,ee,Se,n,l,Re,ue,h,c,d),Te++}}if(A+=Te,n>=1){const te=new Uint32Array(ee,0,F.length*4);for(let se=0;se<F.length;se++)te[se]=F[se];const oe=new Float32Array(ee,W,z.length*G.BucketStorageSizeFloats);for(let se=0;se<z.length;se++){const fe=z[se],Le=se*3;oe[Le]=fe.center[0],oe[Le+1]=fe.center[1],oe[Le+2]=fe.center[2]}}f.push(ee);const $=new ArrayBuffer(G.SectionHeaderSizeBytes);G.writeSectionHeaderToBuffer({maxSplatCount:Te,splatCount:Te,bucketSize:v,bucketCount:z.length,bucketBlockSize:E,compressionScaleRange:h,storageSizeBytes:K,fullBucketCount:B,partiallyFilledBucketCount:U,sphericalHarmonicsDegree:l},n,$,0),g.push($)}let m=0;for(let C of f)m+=C.byteLength;const p=G.HeaderSizeBytes+G.SectionHeaderSizeBytes*f.length+m,x=new ArrayBuffer(p);G.writeHeaderToBuffer({versionMajor:0,versionMinor:1,maxSectionCount:f.length,sectionCount:f.length,maxSplatCount:A,splatCount:A,compressionLevel:n,sceneCenter:i,minSphericalHarmonicsCoeff:c,maxSphericalHarmonicsCoeff:d},x);let _=G.HeaderSizeBytes;for(let C of g)new Uint8Array(x,_,G.SectionHeaderSizeBytes).set(new Uint8Array(C)),_+=G.SectionHeaderSizeBytes;for(let C of f)new Uint8Array(x,_,C.byteLength).set(new Uint8Array(C)),_+=C.byteLength;return new G(x)}static computeBucketsForUncompressedSplatArray(e,t,n){let i=e.splatCount;const r=t/2,o=new I,a=new I;for(let A=0;A<i;A++){const m=e.splats[A],p=[m[de.OFFSET.X],m[de.OFFSET.Y],m[de.OFFSET.Z]];(A===0||p[0]<o.x)&&(o.x=p[0]),(A===0||p[0]>a.x)&&(a.x=p[0]),(A===0||p[1]<o.y)&&(o.y=p[1]),(A===0||p[1]>a.y)&&(a.y=p[1]),(A===0||p[2]<o.z)&&(o.z=p[2]),(A===0||p[2]>a.z)&&(a.z=p[2])}const l=new I().copy(a).sub(o),c=Math.ceil(l.y/t),d=Math.ceil(l.z/t),u=new I,h=[],f={};for(let A=0;A<i;A++){const m=e.splats[A],p=[m[de.OFFSET.X],m[de.OFFSET.Y],m[de.OFFSET.Z]],x=Math.floor((p[0]-o.x)/t),_=Math.floor((p[1]-o.y)/t),S=Math.floor((p[2]-o.z)/t);u.x=x*t+o.x+r,u.y=_*t+o.y+r,u.z=S*t+o.z+r;const C=x*(c*d)+_*d+S;let T=f[C];T||(f[C]=T={splats:[],center:u.toArray()}),T.splats.push(A),T.splats.length>=n&&(h.push(T),f[C]=null)}const g=[];for(let A in f)if(f.hasOwnProperty(A)){const m=f[A];m&&g.push(m)}return{fullBuckets:h,partiallyFullBuckets:g}}static preallocateUncompressed(e,t){const n=G.CompressionLevels[0].SphericalHarmonicsDegrees[t],i=G.HeaderSizeBytes+G.SectionHeaderSizeBytes,r=i+n.BytesPerSplat*e,o=new ArrayBuffer(r);return G.writeHeaderToBuffer({versionMajor:G.CurrentMajorVersion,versionMinor:G.CurrentMinorVersion,maxSectionCount:1,sectionCount:1,maxSplatCount:e,splatCount:e,compressionLevel:0,sceneCenter:new I},o),G.writeSectionHeaderToBuffer({maxSplatCount:e,splatCount:e,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0,sphericalHarmonicsDegree:t},0,o,G.HeaderSizeBytes),{splatBuffer:new G(o,!0),splatBufferDataOffsetBytes:i}}}const Ql=new Uint8Array([112,108,121,10]),Yl=new Uint8Array([10,101,110,100,95,104,101,97,100,101,114,10]),co="end_header",uo=new Map([["char",Int8Array],["uchar",Uint8Array],["short",Int16Array],["ushort",Uint16Array],["int",Int32Array],["uint",Uint32Array],["float",Float32Array],["double",Float64Array]]),vn=(s,e)=>{const t=(1<<e)-1;return(s&t)/t},Kl=(s,e)=>{s.x=vn(e>>>21,11),s.y=vn(e>>>11,10),s.z=vn(e,11)},Xg=(s,e)=>{s.x=vn(e>>>24,8),s.y=vn(e>>>16,8),s.z=vn(e>>>8,8),s.w=vn(e,8)},qg=(s,e)=>{const t=1/(Math.sqrt(2)*.5),n=(vn(e>>>20,10)-.5)*t,i=(vn(e>>>10,10)-.5)*t,r=(vn(e,10)-.5)*t,o=Math.sqrt(1-(n*n+i*i+r*r));switch(e>>>30){case 0:s.set(o,n,i,r);break;case 1:s.set(n,o,i,r);break;case 2:s.set(n,i,o,r);break;case 3:s.set(n,i,r,o);break}},Dn=(s,e,t)=>s*(1-t)+e*t,St=(s,e)=>s.properties.find(t=>t.name===e&&t.storage)?.storage;class Je{static decodeHeaderText(e){let t,n,i,r;const o=e.split(`
`).filter(u=>!u.startsWith("comment "));let a=0,l=!1;for(let u=1;u<o.length;++u){const h=o[u].split(" ");switch(h[0]){case"format":if(h[1]!=="binary_little_endian")throw new Error("Unsupported ply format");break;case"element":t={name:h[1],count:parseInt(h[2],10),properties:[],storageSizeBytes:0},t.name==="chunk"?n=t:t.name==="vertex"?i=t:t.name==="sh"&&(r=t);break;case"property":{if(!uo.has(h[1]))throw new Error(`Unrecognized property data type '${h[1]}' in ply header`);const f=uo.get(h[1]),g=f.BYTES_PER_ELEMENT*t.count;t.name==="vertex"&&(a+=f.BYTES_PER_ELEMENT),t.properties.push({type:h[1],name:h[2],storage:null,byteSize:f.BYTES_PER_ELEMENT,storageSizeByes:g}),t.storageSizeBytes+=g;break}case co:l=!0;break;default:throw new Error(`Unrecognized header value '${h[0]}' in ply header`)}if(l)break}let c=0,d=0;return r&&(d=r.properties.length,r.properties.length>=45?c=3:r.properties.length>=24?c=2:r.properties.length>=9&&(c=1)),{chunkElement:n,vertexElement:i,shElement:r,bytesPerSplat:a,headerSizeBytes:e.indexOf(co)+co.length+1,sphericalHarmonicsDegree:c,sphericalHarmonicsPerSplat:d}}static decodeHeader(e){const t=(f,g)=>{const A=f.length-g.length;let m,p;for(m=0;m<=A;++m){for(p=0;p<g.length&&f[m+p]===g[p];++p);if(p===g.length)return m}return-1},n=(f,g)=>{if(f.length<g.length)return!1;for(let A=0;A<g.length;++A)if(f[A]!==g[A])return!1;return!0};let i=new Uint8Array(e),r;if(i.length>=Ql.length&&!n(i,Ql))throw new Error("Invalid PLY header");if(r=t(i,Yl),r===-1)throw new Error("End of PLY header not found");const o=new TextDecoder("ascii").decode(i.slice(0,r)),{chunkElement:a,vertexElement:l,shElement:c,sphericalHarmonicsDegree:d,sphericalHarmonicsPerSplat:u,bytesPerSplat:h}=Je.decodeHeaderText(o);return{headerSizeBytes:r+Yl.length,bytesPerSplat:h,chunkElement:a,vertexElement:l,shElement:c,sphericalHarmonicsDegree:d,sphericalHarmonicsPerSplat:u}}static readElementData(e,t,n,i,r,o=null){let a=t instanceof DataView?t:new DataView(t);i=i||0,r=r||e.count-1;for(let l=i;l<=r;++l)for(let c=0;c<e.properties.length;++c){const d=e.properties[c],u=uo.get(d.type),h=u.BYTES_PER_ELEMENT*e.count;if((!d.storage||d.storage.byteLength<h)&&(!o||o(d.name))&&(d.storage=new u(e.count)),d.storage)switch(d.type){case"char":d.storage[l]=a.getInt8(n);break;case"uchar":d.storage[l]=a.getUint8(n);break;case"short":d.storage[l]=a.getInt16(n,!0);break;case"ushort":d.storage[l]=a.getUint16(n,!0);break;case"int":d.storage[l]=a.getInt32(n,!0);break;case"uint":d.storage[l]=a.getUint32(n,!0);break;case"float":d.storage[l]=a.getFloat32(n,!0);break;case"double":d.storage[l]=a.getFloat64(n,!0);break}n+=d.byteSize}return n}static readPly(e,t=null){const n=Je.decodeHeader(e);let i=Je.readElementData(n.chunkElement,e,n.headerSizeBytes,null,null,t);return i=Je.readElementData(n.vertexElement,e,i,null,null,t),Je.readElementData(n.shElement,e,i,null,null,t),{chunkElement:n.chunkElement,vertexElement:n.vertexElement,shElement:n.shElement,sphericalHarmonicsDegree:n.sphericalHarmonicsDegree,sphericalHarmonicsPerSplat:n.sphericalHarmonicsPerSplat}}static getElementStorageArrays(e,t,n){const i={};if(t){const r=St(e,"min_r"),o=St(e,"min_g"),a=St(e,"min_b"),l=St(e,"max_r"),c=St(e,"max_g"),d=St(e,"max_b"),u=St(e,"min_x"),h=St(e,"min_y"),f=St(e,"min_z"),g=St(e,"max_x"),A=St(e,"max_y"),m=St(e,"max_z"),p=St(e,"min_scale_x"),x=St(e,"min_scale_y"),_=St(e,"min_scale_z"),S=St(e,"max_scale_x"),C=St(e,"max_scale_y"),T=St(e,"max_scale_z"),y=St(t,"packed_position"),w=St(t,"packed_rotation"),E=St(t,"packed_scale"),v=St(t,"packed_color");i.colorExtremes={minR:r,maxR:l,minG:o,maxG:c,minB:a,maxB:d},i.positionExtremes={minX:u,maxX:g,minY:h,maxY:A,minZ:f,maxZ:m},i.scaleExtremes={minScaleX:p,maxScaleX:S,minScaleY:x,maxScaleY:C,minScaleZ:_,maxScaleZ:T},i.position=y,i.rotation=w,i.scale=E,i.color=v}if(n){const r={};for(let o=0;o<45;o++){const a=`f_rest_${o}`,l=St(n,a);if(l)r[a]=l;else break}i.sh=r}return i}static decompressBaseSplat=(function(){const e=new I,t=new gt,n=new I,i=new At,r=de.OFFSET;return function(o,a,l,c,d,u,h,f,g,A){A=A||de.createSplat();const m=Math.floor((a+o)/256);return Kl(e,l[o]),qg(t,h[o]),Kl(n,d[o]),Xg(i,g[o]),A[r.X]=Dn(c.minX[m],c.maxX[m],e.x),A[r.Y]=Dn(c.minY[m],c.maxY[m],e.y),A[r.Z]=Dn(c.minZ[m],c.maxZ[m],e.z),A[r.ROTATION0]=t.x,A[r.ROTATION1]=t.y,A[r.ROTATION2]=t.z,A[r.ROTATION3]=t.w,A[r.SCALE0]=Math.exp(Dn(u.minScaleX[m],u.maxScaleX[m],n.x)),A[r.SCALE1]=Math.exp(Dn(u.minScaleY[m],u.maxScaleY[m],n.y)),A[r.SCALE2]=Math.exp(Dn(u.minScaleZ[m],u.maxScaleZ[m],n.z)),f.minR&&f.maxR?A[r.FDC0]=mt(Math.round(Dn(f.minR[m],f.maxR[m],i.x)*255),0,255):A[r.FDC0]=mt(Math.floor(i.x*255),0,255),f.minG&&f.maxG?A[r.FDC1]=mt(Math.round(Dn(f.minG[m],f.maxG[m],i.y)*255),0,255):A[r.FDC1]=mt(Math.floor(i.y*255),0,255),f.minB&&f.maxB?A[r.FDC2]=mt(Math.round(Dn(f.minB[m],f.maxB[m],i.z)*255),0,255):A[r.FDC2]=mt(Math.floor(i.z*255),0,255),A[r.OPACITY]=mt(Math.floor(i.w*255),0,255),A}})();static decompressSphericalHarmonics=(function(){const e=[0,3,8,15],t=[0,1,2,9,10,11,12,13,24,25,26,27,28,29,30,3,4,5,14,15,16,17,18,31,32,33,34,35,36,37,6,7,8,19,20,21,22,23,38,39,40,41,42,43,44];return function(n,i,r,o,a){a=a||de.createSplat();let l=e[r],c=e[o];for(let d=0;d<3;++d)for(let u=0;u<15;++u){const h=t[d*15+u];u<l&&u<c&&(a[de.OFFSET.FRC0+h]=i[d*c+u][n]*(8/255)-4)}return a}})();static parseToUncompressedSplatBufferSection(e,t,n,i,r,o,a,l,c=null){Je.readElementData(t,o,0,n,i,c);const d=G.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat,{positionExtremes:u,scaleExtremes:h,colorExtremes:f,position:g,rotation:A,scale:m,color:p}=Je.getElementStorageArrays(e,t),x=de.createSplat();for(let _=n;_<=i;++_){Je.decompressBaseSplat(_,r,g,u,m,h,A,f,p,x);const S=_*d+l;G.writeSplatDataToSectionBuffer(x,a,S,0,0)}}static parseToUncompressedSplatArraySection(e,t,n,i,r,o,a,l=null){Je.readElementData(t,o,0,n,i,l);const{positionExtremes:c,scaleExtremes:d,colorExtremes:u,position:h,rotation:f,scale:g,color:A}=Je.getElementStorageArrays(e,t);for(let m=n;m<=i;++m){const p=de.createSplat();Je.decompressBaseSplat(m,r,h,c,g,d,f,u,A,p),a.addSplat(p)}}static parseSphericalHarmonicsToUncompressedSplatArraySection(e,t,n,i,r,o,a,l,c,d=null){Je.readElementData(t,r,o,n,i,d);const{sh:u}=Je.getElementStorageArrays(e,void 0,t),h=Object.values(u);for(let f=n;f<=i;++f)Je.decompressSphericalHarmonics(f,h,a,l,c.splats[f])}static parseToUncompressedSplatArray(e,t){const{chunkElement:n,vertexElement:i,shElement:r,sphericalHarmonicsDegree:o}=Je.readPly(e);t=Math.min(t,o);const a=new de(t),{positionExtremes:l,scaleExtremes:c,colorExtremes:d,position:u,rotation:h,scale:f,color:g}=Je.getElementStorageArrays(n,i);let A;if(t>0){const{sh:m}=Je.getElementStorageArrays(n,void 0,r);A=Object.values(m)}for(let m=0;m<i.count;++m){a.addDefaultSplat();const p=a.getSplat(a.splatCount-1);Je.decompressBaseSplat(m,0,u,l,f,c,h,d,g,p),t>0&&Je.decompressSphericalHarmonics(m,A,t,o,p)}return a}static parseToUncompressedSplatBuffer(e,t){const{chunkElement:n,vertexElement:i,shElement:r,sphericalHarmonicsDegree:o}=Je.readPly(e);t=Math.min(t,o);const{splatBuffer:a,splatBufferDataOffsetBytes:l}=G.preallocateUncompressed(i.count,t),{positionExtremes:c,scaleExtremes:d,colorExtremes:u,position:h,rotation:f,scale:g,color:A}=Je.getElementStorageArrays(n,i);let m;if(t>0){const{sh:_}=Je.getElementStorageArrays(n,void 0,r);m=Object.values(_)}const p=G.CompressionLevels[0].SphericalHarmonicsDegrees[t].BytesPerSplat,x=de.createSplat(t);for(let _=0;_<i.count;++_){Je.decompressBaseSplat(_,0,h,c,g,d,f,u,A,x),t>0&&Je.decompressSphericalHarmonics(_,m,t,o,x);const S=_*p+l;G.writeSplatDataToSectionBuffer(x,a.bufferData,S,0,t)}return a}}const kt={INRIAV1:0,INRIAV2:1,PlayCanvasCompressed:2},[od,ba,wa,Ra,Ia,Da,Pa]=[0,1,2,3,4,5,6],$l={double:od,int:ba,uint:wa,float:Ra,short:Ia,ushort:Da,uchar:Pa},Qg={[od]:8,[ba]:4,[wa]:4,[Ra]:4,[Ia]:2,[Da]:2,[Pa]:1};class nt{static HeaderEndToken="end_header";static decodeSectionHeader(e,t,n=0){const i=[];let r=!1,o=-1,a=0,l=!1,c=null;const d=[],u=[],h=[],f={};for(let p=n;p<e.length;p++){const x=e[p].trim();if(x.startsWith("element"))if(r){o--;break}else{r=!0,n=p,o=p;const _=x.split(" ");let S=0;for(let C of _){const T=C.trim();T.length>0&&(S++,S===2?c=T:S===3&&(a=parseInt(T)))}}else if(x.startsWith("property")){const _=x.match(/(\w+)\s+(\w+)\s+(\w+)/);if(_){const S=_[2],C=_[3];h.push(C);const T=t[C];f[C]=S;const y=$l[S];T!==void 0&&(d.push(T),u[T]=y)}}if(x===nt.HeaderEndToken){l=!0;break}r&&(i.push(x),o++)}const g=[];let A=0;for(let p of h){const x=f[p];if(f.hasOwnProperty(p)){const _=t[p];_!==void 0&&(g[_]=A)}A+=Qg[$l[x]]}const m=nt.decodeSphericalHarmonicsFromSectionHeader(h,t);return{headerLines:i,headerStartLine:n,headerEndLine:o,fieldTypes:u,fieldIds:d,fieldOffsets:g,bytesPerVertex:A,vertexCount:a,dataSizeBytes:A*a,endOfHeader:l,sectionName:c,sphericalHarmonicsDegree:m.degree,sphericalHarmonicsCoefficientsPerChannel:m.coefficientsPerChannel,sphericalHarmonicsDegree1Fields:m.degree1Fields,sphericalHarmonicsDegree2Fields:m.degree2Fields}}static decodeSphericalHarmonicsFromSectionHeader(e,t){let n=0,i=0;for(let l of e)l.startsWith("f_rest")&&n++;i=n/3;let r=0;i>=3&&(r=1),i>=8&&(r=2);let o=[],a=[];for(let l=0;l<3;l++){if(r>=1)for(let c=0;c<3;c++)o.push(t["f_rest_"+(c+i*l)]);if(r>=2)for(let c=0;c<5;c++)a.push(t["f_rest_"+(c+i*l+3)])}return{degree:r,coefficientsPerChannel:i,degree1Fields:o,degree2Fields:a}}static getHeaderSectionNames(e){const t=[];for(let n of e)if(n.startsWith("element")){const i=n.split(" ");let r=0;for(let o of i){const a=o.trim();a.length>0&&(r++,r===2&&t.push(a))}}return t}static checkTextForEndHeader(e){return!!e.includes(nt.HeaderEndToken)}static checkBufferForEndHeader(e,t,n,i){const r=new Uint8Array(e,Math.max(0,t-n),n),o=i.decode(r);return nt.checkTextForEndHeader(o)}static extractHeaderFromBufferToText(e){const t=new TextDecoder;let n=0,i="";const r=100;for(;;){if(n+r>=e.byteLength)throw new Error("End of file reached while searching for end of header");const o=new Uint8Array(e,n,r);if(i+=t.decode(o),n+=r,nt.checkBufferForEndHeader(e,n,r*2,t))break}return i}static readHeaderFromBuffer(e){const t=new TextDecoder;let n=0,i="";const r=100;for(;;){if(n+r>=e.byteLength)throw new Error("End of file reached while searching for end of header");const o=new Uint8Array(e,n,r);if(i+=t.decode(o),n+=r,nt.checkBufferForEndHeader(e,n,r*2,t))break}return i}static convertHeaderTextToLines(e){const t=e.split(`
`),n=[];for(let i=0;i<t.length;i++){const r=t[i].trim();if(n.push(r),r===nt.HeaderEndToken)break}return n}static determineHeaderFormatFromHeaderText(e){const t=nt.convertHeaderTextToLines(e);let n=kt.INRIAV1;for(let i=0;i<t.length;i++){const r=t[i].trim();if(r.startsWith("element chunk")||r.match(/[A-Za-z]*packed_[A-Za-z]*/))n=kt.PlayCanvasCompressed;else if(r.startsWith("element codebook_centers"))n=kt.INRIAV2;else if(r===nt.HeaderEndToken)break}return n}static determineHeaderFormatFromPlyBuffer(e){const t=nt.extractHeaderFromBufferToText(e);return nt.determineHeaderFormatFromHeaderText(t)}static readVertex(e,t,n,i,r,o,a=!0){const l=n*t.bytesPerVertex+i,c=t.fieldOffsets,d=t.fieldTypes;for(let u of r){const h=d[u];h===Ra?o[u]=e.getFloat32(l+c[u],!0):h===Ia?o[u]=e.getInt16(l+c[u],!0):h===Da?o[u]=e.getUint16(l+c[u],!0):h===ba?o[u]=e.getInt32(l+c[u],!0):h===wa?o[u]=e.getUint32(l+c[u],!0):h===Pa&&(a?o[u]=e.getUint8(l+c[u])/255:o[u]=e.getUint8(l+c[u]))}}}const ad=["scale_0","scale_1","scale_2","rot_0","rot_1","rot_2","rot_3","x","y","z","f_dc_0","f_dc_1","f_dc_2","opacity","red","green","blue","f_rest_0"],Yg=ad.map((s,e)=>e),[jl,Kg,$g,jg,Zg,Jg,e0,t0,n0,i0,Zl,s0,r0,Jl,ec,o0,a0,l0]=Yg;class Bt{static decodeHeaderLines(e){let t=0;e.forEach(d=>{d.includes("f_rest_")&&t++});let n=0;t>=45?n=45:t>=24?n=24:t>=9&&(n=9);let r=Array.from(Array(Math.max(n-1,0))).map((d,u)=>`f_rest_${u+1}`);const o=[...ad,...r],a=o.map((d,u)=>u),l=a.reduce((d,u)=>(d[o[u]]=u,d),{}),c=nt.decodeSectionHeader(e,l,0);return c.splatCount=c.vertexCount,c.bytesPerSplat=c.bytesPerVertex,c.fieldsToReadIndexes=a,c}static decodeHeaderText(e){const t=nt.convertHeaderTextToLines(e),n=Bt.decodeHeaderLines(t);return n.headerText=e,n.headerSizeBytes=e.indexOf(nt.HeaderEndToken)+nt.HeaderEndToken.length+1,n}static decodeHeaderFromBuffer(e){const t=nt.readHeaderFromBuffer(e);return Bt.decodeHeaderText(t)}static findSplatData(e,t){return new DataView(e,t.headerSizeBytes)}static parseToUncompressedSplatBufferSection(e,t,n,i,r,o,a,l=0){l=Math.min(l,e.sphericalHarmonicsDegree);const c=G.CompressionLevels[0].SphericalHarmonicsDegrees[l].BytesPerSplat;for(let d=t;d<=n;d++){const u=Bt.parseToUncompressedSplat(i,d,e,r,l),h=d*c+a;G.writeSplatDataToSectionBuffer(u,o,h,0,l)}}static parseToUncompressedSplatArraySection(e,t,n,i,r,o,a=0){a=Math.min(a,e.sphericalHarmonicsDegree);for(let l=t;l<=n;l++){const c=Bt.parseToUncompressedSplat(i,l,e,r,a);o.addSplat(c)}}static decodeSectionSplatData(e,t,n,i,r=!0){if(i=Math.min(i,n.sphericalHarmonicsDegree),r){const o=new de(i);for(let a=0;a<t;a++){const l=Bt.parseToUncompressedSplat(e,a,n,0,i);o.addSplat(l)}return o}else{const{splatBuffer:o,splatBufferDataOffsetBytes:a}=G.preallocateUncompressed(t,i);return Bt.parseToUncompressedSplatBufferSection(n,0,t-1,e,0,o.bufferData,a,i),o}}static parseToUncompressedSplat=(function(){let e=[];const t=new gt,n=de.OFFSET.X,i=de.OFFSET.Y,r=de.OFFSET.Z,o=de.OFFSET.SCALE0,a=de.OFFSET.SCALE1,l=de.OFFSET.SCALE2,c=de.OFFSET.ROTATION0,d=de.OFFSET.ROTATION1,u=de.OFFSET.ROTATION2,h=de.OFFSET.ROTATION3,f=de.OFFSET.FDC0,g=de.OFFSET.FDC1,A=de.OFFSET.FDC2,m=de.OFFSET.OPACITY,p=[];for(let x=0;x<45;x++)p[x]=de.OFFSET.FRC0+x;return function(x,_,S,C=0,T=0){T=Math.min(T,S.sphericalHarmonicsDegree),Bt.readSplat(x,S,_,C,e);const y=de.createSplat(T);if(e[jl]!==void 0?(y[o]=Math.exp(e[jl]),y[a]=Math.exp(e[Kg]),y[l]=Math.exp(e[$g])):(y[o]=.01,y[a]=.01,y[l]=.01),e[Zl]!==void 0){const w=.28209479177387814;y[f]=(.5+w*e[Zl])*255,y[g]=(.5+w*e[s0])*255,y[A]=(.5+w*e[r0])*255}else e[ec]!==void 0?(y[f]=e[ec]*255,y[g]=e[o0]*255,y[A]=e[a0]*255):(y[f]=0,y[g]=0,y[A]=0);if(e[Jl]!==void 0&&(y[m]=1/(1+Math.exp(-e[Jl]))*255),y[f]=mt(Math.floor(y[f]),0,255),y[g]=mt(Math.floor(y[g]),0,255),y[A]=mt(Math.floor(y[A]),0,255),y[m]=mt(Math.floor(y[m]),0,255),T>=1&&e[l0]!==void 0){for(let w=0;w<9;w++)y[p[w]]=e[S.sphericalHarmonicsDegree1Fields[w]];if(T>=2)for(let w=0;w<15;w++)y[p[9+w]]=e[S.sphericalHarmonicsDegree2Fields[w]]}return t.set(e[jg],e[Zg],e[Jg],e[e0]),t.normalize(),y[c]=t.x,y[d]=t.y,y[u]=t.z,y[h]=t.w,y[n]=e[t0],y[i]=e[n0],y[r]=e[i0],y}})();static readSplat(e,t,n,i,r){return nt.readVertex(e,t,n,i,t.fieldsToReadIndexes,r,!0)}static parseToUncompressedSplatArray(e,t=0){const{header:n,splatCount:i,splatData:r}=tc(e);return Bt.decodeSectionSplatData(r,i,n,t,!0)}static parseToUncompressedSplatBuffer(e,t=0){const{header:n,splatCount:i,splatData:r}=tc(e);return Bt.decodeSectionSplatData(r,i,n,t,!1)}}function tc(s){const e=Bt.decodeHeaderFromBuffer(s),t=e.splatCount,n=Bt.findSplatData(s,e);return{header:e,splatCount:t,splatData:n}}const ld=["features_dc","features_rest_0","features_rest_1","features_rest_2","features_rest_3","features_rest_4","features_rest_5","features_rest_6","features_rest_7","features_rest_8","features_rest_9","features_rest_10","features_rest_11","features_rest_12","features_rest_13","features_rest_14","opacity","scaling","rotation_re","rotation_im"],Js=ld.map((s,e)=>e),[er,c0,d0,nc,tr,u0,ho]=[0,1,4,16,17,18,19],cd=["scale_0","scale_1","scale_2","rot_0","rot_1","rot_2","rot_3","x","y","z","f_dc_0","f_dc_1","f_dc_2","opacity","red","green","blue","f_rest_0","f_rest_1","f_rest_2","f_rest_3","f_rest_4","f_rest_5","f_rest_6","f_rest_7","f_rest_8","f_rest_9","f_rest_10","f_rest_11","f_rest_12","f_rest_13","f_rest_14","f_rest_15","f_rest_16","f_rest_17","f_rest_18","f_rest_19","f_rest_20","f_rest_21","f_rest_22","f_rest_23","f_rest_24","f_rest_25","f_rest_26","f_rest_27","f_rest_28","f_rest_29","f_rest_30","f_rest_31","f_rest_32","f_rest_33","f_rest_34","f_rest_35","f_rest_36","f_rest_37","f_rest_38","f_rest_39","f_rest_40","f_rest_41","f_rest_42","f_rest_43","f_rest_44","f_rest_45"],oa=cd.map((s,e)=>e),[ic,h0,f0,p0,m0,g0,A0,x0,S0,_0,aa,dd,ud,sc]=oa,rc=aa,v0=dd,y0=ud,nr=s=>{const e=(31744&s)>>10,t=1023&s;return(s>>15?-1:1)*(e?e===31?t?NaN:1/0:Math.pow(2,e-15)*(1+t/1024):t/1024*6103515625e-14)};class $t{static decodeSectionHeadersFromHeaderLines(e){const t=oa.reduce((d,u)=>(d[cd[u]]=u,d),{}),n=Js.reduce((d,u)=>(d[ld[u]]=u,d),{}),i=nt.getHeaderSectionNames(e);let r;for(let d=0;d<i.length;d++)i[d]==="codebook_centers"&&(r=d);let o=0,a=!1;const l=[];let c=0;for(;!a;){let d;c===r?d=nt.decodeSectionHeader(e,n,o):d=nt.decodeSectionHeader(e,t,o),a=d.endOfHeader,o=d.headerEndLine+1,a||(d.splatCount=d.vertexCount,d.bytesPerSplat=d.bytesPerVertex),l.push(d),c++}return l}static decodeSectionHeadersFromHeaderText(e){const t=nt.convertHeaderTextToLines(e);return $t.decodeSectionHeadersFromHeaderLines(t)}static getSplatCountFromSectionHeaders(e){let t=0;for(let n of e)n.sectionName!=="codebook_centers"&&(t+=n.vertexCount);return t}static decodeHeaderFromHeaderText(e){const t=e.indexOf(nt.HeaderEndToken)+nt.HeaderEndToken.length+1,n=$t.decodeSectionHeadersFromHeaderText(e),i=$t.getSplatCountFromSectionHeaders(n);return{headerSizeBytes:t,sectionHeaders:n,splatCount:i}}static decodeHeaderFromBuffer(e){const t=nt.readHeaderFromBuffer(e);return $t.decodeHeaderFromHeaderText(t)}static findVertexData(e,t,n){let i=t.headerSizeBytes;for(let r=0;r<n&&r<t.sectionHeaders.length;r++){const o=t.sectionHeaders[r];i+=o.dataSizeBytes}return new DataView(e,i,t.sectionHeaders[n].dataSizeBytes)}static decodeCodeBook(e,t){const n=[],i=[];for(let r=0;r<t.vertexCount;r++){nt.readVertex(e,t,r,0,Js,n);for(let o of Js){const a=Js[o];let l=i[a];l||(i[a]=l=[]),l.push(n[o])}}for(let r=0;r<i.length;r++){const o=i[r],a=.28209479177387814;for(let l=0;l<o.length;l++){const c=nr(o[l]);r===nc?o[l]=Math.round(1/(1+Math.exp(-c))*255):r===er?o[l]=Math.round((.5+a*c)*255):r===tr?o[l]=Math.exp(c):o[l]=c}}return i}static decodeSectionSplatData(e,t,n,i,r){r=Math.min(r,n.sphericalHarmonicsDegree);const o=new de(r);for(let a=0;a<t;a++){const l=$t.parseToUncompressedSplat(e,a,n,i,0,r);o.addSplat(l)}return o}static parseToUncompressedSplat=(function(){let e=[];const t=new gt,n=de.OFFSET.X,i=de.OFFSET.Y,r=de.OFFSET.Z,o=de.OFFSET.SCALE0,a=de.OFFSET.SCALE1,l=de.OFFSET.SCALE2,c=de.OFFSET.ROTATION0,d=de.OFFSET.ROTATION1,u=de.OFFSET.ROTATION2,h=de.OFFSET.ROTATION3,f=de.OFFSET.FDC0,g=de.OFFSET.FDC1,A=de.OFFSET.FDC2,m=de.OFFSET.OPACITY,p=[];for(let x=0;x<45;x++)p[x]=de.OFFSET.FRC0+x;return function(x,_,S,C,T=0,y=0){y=Math.min(y,S.sphericalHarmonicsDegree),$t.readSplat(x,S,_,T,e);const w=de.createSplat(y);if(e[ic]!==void 0?(w[o]=C[tr][e[ic]],w[a]=C[tr][e[h0]],w[l]=C[tr][e[f0]]):(w[o]=.01,w[a]=.01,w[l]=.01),e[aa]!==void 0?(w[f]=C[er][e[aa]],w[g]=C[er][e[dd]],w[A]=C[er][e[ud]]):e[rc]!==void 0?(w[f]=e[rc]*255,w[g]=e[v0]*255,w[A]=e[y0]*255):(w[f]=0,w[g]=0,w[A]=0),e[sc]!==void 0&&(w[m]=C[nc][e[sc]]),w[f]=mt(Math.floor(w[f]),0,255),w[g]=mt(Math.floor(w[g]),0,255),w[A]=mt(Math.floor(w[A]),0,255),w[m]=mt(Math.floor(w[m]),0,255),y>=1&&S.sphericalHarmonicsDegree>=1){for(let F=0;F<9;F++){const U=C[c0+F%3];w[p[F]]=U[e[S.sphericalHarmonicsDegree1Fields[F]]]}if(y>=2&&S.sphericalHarmonicsDegree>=2)for(let F=0;F<15;F++){const U=C[d0+F%5];w[p[9+F]]=U[e[S.sphericalHarmonicsDegree2Fields[F]]]}}const E=C[u0][e[p0]],v=C[ho][e[m0]],R=C[ho][e[g0]],B=C[ho][e[A0]];return t.set(E,v,R,B),t.normalize(),w[c]=t.x,w[d]=t.y,w[u]=t.z,w[h]=t.w,w[n]=nr(e[x0]),w[i]=nr(e[S0]),w[r]=nr(e[_0]),w}})();static readSplat(e,t,n,i,r){return nt.readVertex(e,t,n,i,oa,r,!1)}static parseToUncompressedSplatArray(e,t=0){const n=[],i=$t.decodeHeaderFromBuffer(e,t);let r;for(let a=0;a<i.sectionHeaders.length;a++){const l=i.sectionHeaders[a];if(l.sectionName==="codebook_centers"){const c=$t.findVertexData(e,i,a);r=$t.decodeCodeBook(c,l)}}for(let a=0;a<i.sectionHeaders.length;a++){const l=i.sectionHeaders[a];if(l.sectionName!=="codebook_centers"){const c=l.vertexCount,d=$t.findVertexData(e,i,a),u=$t.decodeSectionSplatData(d,c,l,r,t);n.push(u)}}const o=new de(t);for(let a of n)for(let l of a.splats)o.addSplat(l);return o}}class oc{static parseToUncompressedSplatArray(e,t=0){const n=nt.determineHeaderFormatFromPlyBuffer(e);if(n===kt.PlayCanvasCompressed)return Je.parseToUncompressedSplatArray(e,t);if(n===kt.INRIAV1)return Bt.parseToUncompressedSplatArray(e,t);if(n===kt.INRIAV2)return $t.parseToUncompressedSplatArray(e,t)}static parseToUncompressedSplatBuffer(e,t=0){const n=nt.determineHeaderFormatFromPlyBuffer(e);if(n===kt.PlayCanvasCompressed)return Je.parseToUncompressedSplatBuffer(e,t);if(n===kt.INRIAV1)return Bt.parseToUncompressedSplatBuffer(e,t);if(n===kt.INRIAV2)throw new Error("parseToUncompressedSplatBuffer() is not implemented for INRIA V2 PLY files")}}class Fa{constructor(e,t,n,i){this.sectionCount=e,this.sectionFilters=t,this.groupingParameters=n,this.partitionGenerator=i}partitionUncompressedSplatArray(e){let t,n,i;if(this.partitionGenerator){const o=this.partitionGenerator(e);t=o.groupingParameters,n=o.sectionCount,i=o.sectionFilters}else t=this.groupingParameters,n=this.sectionCount,i=this.sectionFilters;const r=[];for(let o=0;o<n;o++){const a=new de(e.sphericalHarmonicsDegree),l=i[o];for(let c=0;c<e.splatCount;c++)l(c)&&a.addSplat(e.splats[c]);r.push(a)}return{splatArrays:r,parameters:t}}static getStandardPartitioner(e=0,t=new I,n=G.BucketBlockSize,i=G.BucketSize){const r=o=>{const a=de.OFFSET.X,l=de.OFFSET.Y,c=de.OFFSET.Z;e<=0&&(e=o.splatCount);const d=new I,u=.5,h=p=>{p.x=Math.floor(p.x/u)*u,p.y=Math.floor(p.y/u)*u,p.z=Math.floor(p.z/u)*u};o.splats.forEach(p=>{d.set(p[a],p[l],p[c]).sub(t),h(d),p.centerDist=d.lengthSq()}),o.splats.sort((p,x)=>{let _=p.centerDist,S=x.centerDist;return _>S?1:-1});const f=[],g=[];e=Math.min(o.splatCount,e);const A=Math.ceil(o.splatCount/e);let m=0;for(let p=0;p<A;p++){let x=m;f.push(_=>_>=x&&_<x+e),g.push({blocksSize:n,bucketSize:i}),m+=e}return{sectionCount:f.length,sectionFilters:f,groupingParameters:g}};return new Fa(void 0,void 0,void 0,r)}}class ws{constructor(e,t,n,i,r,o,a){this.splatPartitioner=e,this.alphaRemovalThreshold=t,this.compressionLevel=n,this.sectionSize=i,this.sceneCenter=r?new I().copy(r):void 0,this.blockSize=o,this.bucketSize=a}generateFromUncompressedSplatArray(e){const t=this.splatPartitioner.partitionUncompressedSplatArray(e);return G.generateFromUncompressedSplatArrays(t.splatArrays,this.alphaRemovalThreshold,this.compressionLevel,this.sceneCenter,this.blockSize,this.bucketSize,t.parameters)}static getStandardGenerator(e=1,t=1,n=0,i=new I,r=G.BucketBlockSize,o=G.BucketSize){const a=Fa.getStandardPartitioner(n,i,r,o);return new ws(a,e,t,n,i,r,o)}}const Ct={Downloading:0,Processing:1,Done:2};class Ar extends Error{constructor(e){super(e)}}const ut={ProgressiveToSplatBuffer:0,ProgressiveToSplatArray:1,DownloadBeforeProcessing:2};function ac(s,e){let t=0;for(let i of s)t+=i.sizeBytes;(!e||e.byteLength<t)&&(e=new ArrayBuffer(t));let n=0;for(let i of s)new Uint8Array(e,n,i.sizeBytes).set(i.data),n+=i.sizeBytes;return e}function lc(s,e,t,n,i,r,o,a){return e?ws.getStandardGenerator(t,n,i,r,o,a).generateFromUncompressedSplatArray(s):G.generateFromUncompressedSplatArrays([s],t,0,new I)}class La{static loadFromURL(e,t,n,i,r,o,a=!0,l=0,c,d,u,h,f){let g;!n&&!a?g=ut.DownloadBeforeProcessing:a?g=ut.ProgressiveToSplatArray:g=ut.ProgressiveToSplatBuffer;const A=ct.ProgressiveLoadSectionSize,m=G.HeaderSizeBytes+G.SectionHeaderSizeBytes,p=1;let x,_,S,C,T,y=0,w=0,E=0,v=!1,R=!1,B=!1;const F=Ea();let U=0,z=0,N=0,W=0,k="",K=null,ee=[],ue;const Re=new TextDecoder,Te=($,te,oe)=>{const se=$>=100;if(oe&&(ee.push({data:oe,sizeBytes:oe.byteLength,startBytes:N,endBytes:N+oe.byteLength}),N+=oe.byteLength),g===ut.DownloadBeforeProcessing)se&&F.resolve(ee);else{if(v){if(x===kt.PlayCanvasCompressed&&!R){const fe=K.headerSizeBytes+K.chunkElement.storageSizeBytes;T=ac(ee,T),T.byteLength>=fe&&(Je.readElementData(K.chunkElement,T,K.headerSizeBytes),U=fe,z=fe,R=!0)}}else if(k+=Re.decode(oe),nt.checkTextForEndHeader(k)){if(x=nt.determineHeaderFormatFromHeaderText(k),x===kt.INRIAV1)K=Bt.decodeHeaderText(k),l=Math.min(l,K.sphericalHarmonicsDegree),y=K.splatCount,R=!0,W=K.headerSizeBytes+K.bytesPerSplat*y;else if(x===kt.PlayCanvasCompressed){if(K=Je.decodeHeaderText(k),l=Math.min(l,K.sphericalHarmonicsDegree),g===ut.ProgressiveToSplatBuffer&&l>0)throw new Ar("PlyLoader.loadFromURL() -> Selected PLY format has spherical harmonics data that cannot be progressively loaded.");y=K.vertexElement.count,W=K.headerSizeBytes+K.bytesPerSplat*y+K.chunkElement.storageSizeBytes}else{if(g===ut.ProgressiveToSplatBuffer)throw new Ar("PlyLoader.loadFromURL() -> Selected PLY format cannot be progressively loaded.");g=ut.DownloadBeforeProcessing;return}if(g===ut.ProgressiveToSplatBuffer){const fe=G.CompressionLevels[0].SphericalHarmonicsDegrees[l],Le=m+fe.BytesPerSplat*y;S=new ArrayBuffer(Le),G.writeHeaderToBuffer({versionMajor:G.CurrentMajorVersion,versionMinor:G.CurrentMinorVersion,maxSectionCount:p,sectionCount:p,maxSplatCount:y,splatCount:0,compressionLevel:0,sceneCenter:new I},S)}else ue=new de(l);U=K.headerSizeBytes,z=K.headerSizeBytes,v=!0}if(v&&R&&ee.length>0&&(_=ac(ee,_),N-U>A||N>=W&&!B||se)){const Le=B?K.sphericalHarmonicsPerSplat:K.bytesPerSplat,Qe=(B?N:Math.min(W,N))-z,We=Math.floor(Qe/Le),Pe=We*Le,P=N-z-Pe,Xe=z-ee[0].startBytes,Ge=new DataView(_,Xe,Pe);if(B)x===kt.PlayCanvasCompressed&&g===ut.ProgressiveToSplatArray&&(Je.parseSphericalHarmonicsToUncompressedSplatArraySection(K.chunkElement,K.shElement,E,E+We-1,Ge,0,l,K.sphericalHarmonicsDegree,ue),E+=We);else{if(g===ut.ProgressiveToSplatBuffer){const $e=G.CompressionLevels[0].SphericalHarmonicsDegrees[l],pe=w*$e.BytesPerSplat+m;x===kt.PlayCanvasCompressed?Je.parseToUncompressedSplatBufferSection(K.chunkElement,K.vertexElement,0,We-1,w,Ge,S,pe):Bt.parseToUncompressedSplatBufferSection(K,0,We-1,Ge,0,S,pe,l)}else x===kt.PlayCanvasCompressed?Je.parseToUncompressedSplatArraySection(K.chunkElement,K.vertexElement,0,We-1,w,Ge,ue):Bt.parseToUncompressedSplatArraySection(K,0,We-1,Ge,0,ue,l);w+=We,g===ut.ProgressiveToSplatBuffer&&(C||(G.writeSectionHeaderToBuffer({maxSplatCount:y,splatCount:w,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0,sphericalHarmonicsDegree:l},0,S,G.HeaderSizeBytes),C=new G(S,!1)),C.updateLoadedCounts(1,w)),N>=W&&(B=!0)}if(P===0)ee=[];else{let $e=[],pe=0;for(let He=ee.length-1;He>=0;He--){const Ie=ee[He];if(pe+=Ie.sizeBytes,$e.unshift(Ie),pe>=P)break}ee=$e}U+=A,z+=Pe}i&&C&&i(C,se),se&&(g===ut.ProgressiveToSplatBuffer?F.resolve(C):F.resolve(ue))}t&&t($,te,Ct.Downloading)};return t&&t(0,"0%",Ct.Downloading),br(e,Te,!1,c).then(()=>(t&&t(0,"0%",Ct.Processing),F.promise.then($=>{if(t&&t(100,"100%",Ct.Done),g===ut.DownloadBeforeProcessing){const te=ee.map(oe=>oe.data);return new Blob(te).arrayBuffer().then(oe=>La.loadFromFileData(oe,r,o,a,l,d,u,h,f))}else return g===ut.ProgressiveToSplatBuffer?$:jt(()=>lc($,a,r,o,d,u,h,f))})))}static loadFromFileData(e,t,n,i,r=0,o,a,l,c){return i?jt(()=>oc.parseToUncompressedSplatArray(e,r)).then(d=>lc(d,i,t,n,o,a,l,c)):jt(()=>oc.parseToUncompressedSplatBuffer(e,r))}}const E0=s=>new ReadableStream({async start(e){e.enqueue(s),e.close()}});async function C0(s){try{const e=E0(s);if(!e)throw new Error("Failed to create stream from data");return await M0(e)}catch(e){throw console.error("Error decompressing gzipped data:",e),e}}async function M0(s){const e=s.pipeThrough(new DecompressionStream("gzip")),n=await new Response(e).arrayBuffer();return new Uint8Array(n)}const T0=1347635022,b0=1,w0=.15;function R0(s){const e=s>>15&1,t=s>>10&31,n=s&1023,i=e===1?-1:1;return t===0?i*Math.pow(2,-14)*n/1024:t===31?n!==0?NaN:i*(1/0):i*Math.pow(2,t-15)*(1+n/1024)}function I0(s){return(s-128)/128}function gi(s){switch(s){case 0:return 0;case 1:return 3;case 2:return 8;case 3:return 15;default:return console.error(`[SPZ: ERROR] Unsupported SH degree: ${s}`),0}}const D0=(function(){let s=[];const e=new gt,t=de.OFFSET.X,n=de.OFFSET.Y,i=de.OFFSET.Z,r=de.OFFSET.SCALE0,o=de.OFFSET.SCALE1,a=de.OFFSET.SCALE2,l=de.OFFSET.ROTATION0,c=de.OFFSET.ROTATION1,d=de.OFFSET.ROTATION2,u=de.OFFSET.ROTATION3,h=de.OFFSET.FDC0,f=de.OFFSET.FDC1,g=de.OFFSET.FDC2,A=de.OFFSET.OPACITY,m=[gi(0),gi(1),gi(2),gi(3)],p=[0,1,2,9,10,11,12,13,24,25,26,27,28,29,30,3,4,5,14,15,16,17,18,31,32,33,34,35,36,37,6,7,8,19,20,21,22,23,38,39,40,41,42,43,44];return function(x,_,S){S=Math.min(_,S);const C=de.createSplat(S);x.scale[0]!==void 0?(C[r]=x.scale[0],C[o]=x.scale[1],C[a]=x.scale[2]):(C[r]=.01,C[o]=.01,C[a]=.01),x.color[0]!==void 0?(C[h]=x.color[0],C[f]=x.color[1],C[g]=x.color[2]):s[RED]!==void 0?(C[h]=s[RED]*255,C[f]=s[GREEN]*255,C[g]=s[BLUE]*255):(C[h]=0,C[f]=0,C[g]=0),x.alpha!==void 0&&(C[A]=x.alpha),C[h]=mt(Math.floor(C[h]),0,255),C[f]=mt(Math.floor(C[f]),0,255),C[g]=mt(Math.floor(C[g]),0,255),C[A]=mt(Math.floor(C[A]),0,255);let T=m[S],y=m[_];for(let w=0;w<3;++w)for(let E=0;E<15;++E){const v=p[w*15+E];E<T&&E<y&&(C[de.OFFSET.FRC0+v]=x.sh[w*y+E])}return e.set(x.rotation[3],x.rotation[0],x.rotation[1],x.rotation[2]),e.normalize(),C[l]=e.x,C[c]=e.y,C[d]=e.z,C[u]=e.w,C[t]=x.position[0],C[n]=x.position[1],C[i]=x.position[2],C}})();function P0(s,e,t,n){return!(s.positions.length!==e*3*(n?2:3)||s.scales.length!==e*3||s.rotations.length!==e*3||s.alphas.length!==e||s.colors.length!==e*3||s.sh.length!==e*t*3)}function cc(s,e,t,n,i){e=Math.min(e,s.shDegree);const r=s.numPoints,o=gi(s.shDegree),a=s.positions.length===r*3*2;if(!P0(s,r,o,a))return null;const l={position:[],scale:[],rotation:[],alpha:void 0,color:[],sh:[]};let c;a&&(c=new Uint16Array(s.positions.buffer,s.positions.byteOffset,r*3));const d=1/(1<<s.fractionalBits),u=gi(s.shDegree),h=.28209479177387814;for(let f=0;f<r;f++){if(a)for(let x=0;x<3;x++)l.position[x]=R0(c[f*3+x]);else for(let x=0;x<3;x++){const _=f*9+x*3;let S=s.positions[_];S|=s.positions[_+1]<<8,S|=s.positions[_+2]<<16,S|=S&8388608?4278190080:0,l.position[x]=S*d}for(let x=0;x<3;x++)l.scale[x]=Math.exp(s.scales[f*3+x]/16-10);const g=s.rotations.subarray(f*3,f*3+3),A=[g[0]/127.5-1,g[1]/127.5-1,g[2]/127.5-1];l.rotation[0]=A[0],l.rotation[1]=A[1],l.rotation[2]=A[2];const m=A[0]*A[0]+A[1]*A[1]+A[2]*A[2];l.rotation[3]=Math.sqrt(Math.max(0,1-m)),l.alpha=Math.floor(s.alphas[f]);for(let x=0;x<3;x++)l.color[x]=Math.floor(((s.colors[f*3+x]/255-.5)/w0*h+.5)*255);for(let x=0;x<3;x++)for(let _=0;_<u;_++)l.sh[x*u+_]=I0(s.sh[u*3*f+_*3+x]);const p=D0(l,s.shDegree,e);if(t){const x=G.CompressionLevels[0].SphericalHarmonicsDegrees[e].BytesPerSplat,_=f*x+i;G.writeSplatDataToSectionBuffer(p,n,_,0,e)}else n.addSplat(p)}}const F0=16,L0=1e7;function B0(s){const e=new DataView(s);let t=0;const n={magic:e.getUint32(t,!0),version:e.getUint32(t+4,!0),numPoints:e.getUint32(t+8,!0),shDegree:e.getUint8(t+12),fractionalBits:e.getUint8(t+13),flags:e.getUint8(t+14),reserved:e.getUint8(t+15)};if(t+=F0,n.magic!==T0)return console.error("[SPZ ERROR] deserializePackedGaussians: header not found"),null;if(n.version<1||n.version>2)return console.error(`[SPZ ERROR] deserializePackedGaussians: version not supported: ${n.version}`),null;if(n.numPoints>L0)return console.error(`[SPZ ERROR] deserializePackedGaussians: Too many points: ${n.numPoints}`),null;if(n.shDegree>3)return console.error(`[SPZ ERROR] deserializePackedGaussians: Unsupported SH degree: ${n.shDegree}`),null;const i=n.numPoints,r=gi(n.shDegree),o=n.version===1,a={numPoints:i,shDegree:n.shDegree,fractionalBits:n.fractionalBits,antialiased:(n.flags&b0)!==0,positions:new Uint8Array(i*3*(o?2:3)),scales:new Uint8Array(i*3),rotations:new Uint8Array(i*3),alphas:new Uint8Array(i),colors:new Uint8Array(i*3),sh:new Uint8Array(i*r*3)};try{const l=new Uint8Array(s);let c=a.positions.length,d=t;if(a.positions.set(l.slice(d,d+c)),d+=c,a.alphas.set(l.slice(d,d+a.alphas.length)),d+=a.alphas.length,a.colors.set(l.slice(d,d+a.colors.length)),d+=a.colors.length,a.scales.set(l.slice(d,d+a.scales.length)),d+=a.scales.length,a.rotations.set(l.slice(d,d+a.rotations.length)),d+=a.rotations.length,a.sh.set(l.slice(d,d+a.sh.length)),d+a.sh.length!==s.byteLength)return console.error("[SPZ ERROR] deserializePackedGaussians: incorrect buffer size"),null}catch(l){return console.error("[SPZ ERROR] deserializePackedGaussians: read error",l),null}return a}async function U0(s){try{const e=await C0(s);return B0(e.buffer)}catch(e){return console.error("[SPZ ERROR] loadSpzPacked: decompression error",e),null}}class Ba{static loadFromURL(e,t,n,i,r=!0,o=0,a,l,c,d,u){return t&&t(0,"0%",Ct.Downloading),br(e,t,!0,a).then(h=>(t&&t(0,"0%",Ct.Processing),Ba.loadFromFileData(h,n,i,r,o,l,c,d,u)))}static async loadFromFileData(e,t,n,i,r=0,o,a,l,c){await jt();const d=await U0(e);r=Math.min(d.shDegree,r);const u=new de(r);if(i)return cc(d,r,!1,u,0),ws.getStandardGenerator(t,n,o,a,l,c).generateFromUncompressedSplatArray(u);{const{splatBuffer:h,splatBufferDataOffsetBytes:f}=G.preallocateUncompressed(d.numPoints,r);return cc(d,r,!0,h.bufferData,f),h}}}class at{static RowSizeBytes=32;static CenterSizeBytes=12;static ScaleSizeBytes=12;static RotationSizeBytes=4;static ColorSizeBytes=4;static parseToUncompressedSplatBufferSection(e,t,n,i,r,o){const a=G.CompressionLevels[0].BytesPerCenter,l=G.CompressionLevels[0].BytesPerScale,c=G.CompressionLevels[0].BytesPerRotation,d=G.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat;for(let u=e;u<=t;u++){const h=u*at.RowSizeBytes+i,f=new Float32Array(n,h,3),g=new Float32Array(n,h+at.CenterSizeBytes,3),A=new Uint8Array(n,h+at.CenterSizeBytes+at.ScaleSizeBytes,4),m=new Uint8Array(n,h+at.CenterSizeBytes+at.ScaleSizeBytes+at.RotationSizeBytes,4),p=new gt((m[1]-128)/128,(m[2]-128)/128,(m[3]-128)/128,(m[0]-128)/128);p.normalize();const x=u*d+o,_=new Float32Array(r,x,3),S=new Float32Array(r,x+a,3),C=new Float32Array(r,x+a+l,4),T=new Uint8Array(r,x+a+l+c,4);_[0]=f[0],_[1]=f[1],_[2]=f[2],S[0]=g[0],S[1]=g[1],S[2]=g[2],C[0]=p.w,C[1]=p.x,C[2]=p.y,C[3]=p.z,T[0]=A[0],T[1]=A[1],T[2]=A[2],T[3]=A[3]}}static parseToUncompressedSplatArraySection(e,t,n,i,r){for(let o=e;o<=t;o++){const a=o*at.RowSizeBytes+i,l=new Float32Array(n,a,3),c=new Float32Array(n,a+at.CenterSizeBytes,3),d=new Uint8Array(n,a+at.CenterSizeBytes+at.ScaleSizeBytes,4),u=new Uint8Array(n,a+at.CenterSizeBytes+at.ScaleSizeBytes+at.RotationSizeBytes,4),h=new gt((u[1]-128)/128,(u[2]-128)/128,(u[3]-128)/128,(u[0]-128)/128);h.normalize(),r.addSplatFromComonents(l[0],l[1],l[2],c[0],c[1],c[2],h.w,h.x,h.y,h.z,d[0],d[1],d[2],d[3])}}static parseStandardSplatToUncompressedSplatArray(e){const t=e.byteLength/at.RowSizeBytes,n=new de;for(let i=0;i<t;i++){const r=i*at.RowSizeBytes,o=new Float32Array(e,r,3),a=new Float32Array(e,r+at.CenterSizeBytes,3),l=new Uint8Array(e,r+at.CenterSizeBytes+at.ScaleSizeBytes,4),c=new Uint8Array(e,r+at.CenterSizeBytes+at.ScaleSizeBytes+at.ColorSizeBytes,4),d=new gt((c[1]-128)/128,(c[2]-128)/128,(c[3]-128)/128,(c[0]-128)/128);d.normalize(),n.addSplatFromComonents(o[0],o[1],o[2],a[0],a[1],a[2],d.w,d.x,d.y,d.z,l[0],l[1],l[2],l[3])}return n}}function dc(s,e,t,n,i,r,o,a){return e?ws.getStandardGenerator(t,n,i,r,o,a).generateFromUncompressedSplatArray(s):G.generateFromUncompressedSplatArrays([s],t,0,new I)}class Ua{static loadFromURL(e,t,n,i,r,o,a=!0,l,c,d,u,h){let f=n?ut.ProgressiveToSplatBuffer:ut.ProgressiveToSplatArray;a&&(f=ut.ProgressiveToSplatArray);const g=G.HeaderSizeBytes+G.SectionHeaderSizeBytes,A=ct.ProgressiveLoadSectionSize,m=1;let p,x,_,S=0,C=0,T;const y=Ea();let w=0,E=0,v=[];const R=(B,F,U,z)=>{const N=B>=100;if(U&&v.push(U),f===ut.DownloadBeforeProcessing){N&&y.resolve(v);return}if(!z){if(n)throw new Ar("Cannon directly load .splat because no file size info is available.");f=ut.DownloadBeforeProcessing;return}if(!p){S=z/at.RowSizeBytes,p=new ArrayBuffer(z);const W=G.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat,k=g+W*S;f===ut.ProgressiveToSplatBuffer?(x=new ArrayBuffer(k),G.writeHeaderToBuffer({versionMajor:G.CurrentMajorVersion,versionMinor:G.CurrentMinorVersion,maxSectionCount:m,sectionCount:m,maxSplatCount:S,splatCount:C,compressionLevel:0,sceneCenter:new I},x)):T=new de(0)}if(U){new Uint8Array(p,E,U.byteLength).set(new Uint8Array(U)),E+=U.byteLength;const W=E-w;if(W>A||N){const K=(N?W:A)/at.RowSizeBytes,ee=C+K;f===ut.ProgressiveToSplatBuffer?at.parseToUncompressedSplatBufferSection(C,ee-1,p,0,x,g):at.parseToUncompressedSplatArraySection(C,ee-1,p,0,T),C=ee,f===ut.ProgressiveToSplatBuffer&&(_||(G.writeSectionHeaderToBuffer({maxSplatCount:S,splatCount:C,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0},0,x,G.HeaderSizeBytes),_=new G(x,!1)),_.updateLoadedCounts(1,C),i&&i(_,N)),w+=A}}N&&(f===ut.ProgressiveToSplatBuffer?y.resolve(_):y.resolve(T)),t&&t(B,F,Ct.Downloading)};return t&&t(0,"0%",Ct.Downloading),br(e,R,!1,l).then(()=>(t&&t(0,"0%",Ct.Processing),y.promise.then(B=>(t&&t(100,"100%",Ct.Done),f===ut.DownloadBeforeProcessing?new Blob(v).arrayBuffer().then(F=>Ua.loadFromFileData(F,r,o,a,c,d,u,h)):f===ut.ProgressiveToSplatBuffer?B:jt(()=>dc(B,a,r,o,c,d,u,h))))))}static loadFromFileData(e,t,n,i,r,o,a,l){return jt(()=>{const c=at.parseStandardSplatToUncompressedSplatArray(e);return dc(c,i,t,n,r,o,a,l)})}}class fs{static checkVersion(e){const t=G.CurrentMajorVersion,n=G.CurrentMinorVersion,i=G.parseHeader(e);if(i.versionMajor===t&&i.versionMinor>=n||i.versionMajor>t)return!0;throw new Error(`KSplat version not supported: v${i.versionMajor}.${i.versionMinor}. Minimum required: v${t}.${n}`)}static loadFromURL(e,t,n,i,r){let o,a,l,c,d=!1,u=!1,h,f=[],g=!1,A=!1,m=0,p=0,x=0,_=!1,S=!1,C=!1,T=[];const y=Ea(),w=()=>{!d&&!u&&m>=G.HeaderSizeBytes&&(u=!0,new Blob(T).arrayBuffer().then(z=>{l=new ArrayBuffer(G.HeaderSizeBytes),new Uint8Array(l).set(new Uint8Array(z,0,G.HeaderSizeBytes)),fs.checkVersion(l),u=!1,d=!0,c=G.parseHeader(l),window.setTimeout(()=>{R()},1)}))};let E=0;const v=()=>{E===0&&(E++,window.setTimeout(()=>{E--,B()},1))},R=()=>{const U=()=>{A=!0,new Blob(T).arrayBuffer().then(N=>{A=!1,g=!0,h=new ArrayBuffer(c.maxSectionCount*G.SectionHeaderSizeBytes),new Uint8Array(h).set(new Uint8Array(N,G.HeaderSizeBytes,c.maxSectionCount*G.SectionHeaderSizeBytes)),f=G.parseSectionHeaders(c,h,0,!1);let W=0;for(let K=0;K<c.maxSectionCount;K++)W+=f[K].storageSizeBytes;const k=G.HeaderSizeBytes+c.maxSectionCount*G.SectionHeaderSizeBytes+W;if(!o){o=new ArrayBuffer(k);let K=0;for(let ee=0;ee<T.length;ee++){const ue=T[ee];new Uint8Array(o,K,ue.byteLength).set(new Uint8Array(ue)),K+=ue.byteLength}}x=G.HeaderSizeBytes+G.SectionHeaderSizeBytes*c.maxSectionCount;for(let K=0;K<=f.length&&K<c.maxSectionCount;K++)x+=f[K].storageSizeBytes;v()})};!A&&!g&&d&&m>=G.HeaderSizeBytes+G.SectionHeaderSizeBytes*c.maxSectionCount&&U()},B=()=>{if(C)return;C=!0;const U=()=>{if(C=!1,g){if(S)return;if(_=m>=x,m-p>ct.ProgressiveLoadSectionSize||_){p+=ct.ProgressiveLoadSectionSize,S=p>=x,a||(a=new G(o,!1));const N=G.HeaderSizeBytes+G.SectionHeaderSizeBytes*c.maxSectionCount;let W=0,k=0,K=0;for(let Re=0;Re<c.maxSectionCount;Re++){const Te=f[Re],$=W+Te.partiallyFilledBucketCount*4+Te.bucketStorageSizeBytes*Te.bucketCount,te=N+$;if(p>=te){k++;const oe=p-te,Le=G.CompressionLevels[c.compressionLevel].SphericalHarmonicsDegrees[Te.sphericalHarmonicsDegree].BytesPerSplat;let Se=Math.floor(oe/Le);Se=Math.min(Se,Te.maxSplatCount),K+=Se,a.updateLoadedCounts(k,K),a.updateSectionLoadedCounts(Re,Se)}else break;W+=Te.storageSizeBytes}i(a,S);const ee=p/x*100,ue=ee.toFixed(2)+"%";t&&t(ee,ue,Ct.Downloading),S?y.resolve(a):B()}}};window.setTimeout(U,ct.ProgressiveLoadSectionDelayDuration)};return br(e,(U,z,N)=>{N&&(T.push(N),o&&new Uint8Array(o,m,N.byteLength).set(new Uint8Array(N)),m+=N.byteLength),n?(w(),R(),B()):t&&t(U,z,Ct.Downloading)},!n,r).then(U=>(t&&t(0,"0%",Ct.Processing),(n?y.promise:fs.loadFromFileData(U)).then(N=>(t&&t(100,"100%",Ct.Done),N))))}static loadFromFileData(e){return jt(()=>(fs.checkVersion(e),new G(e)))}static downloadFile=(function(){let e;return function(t,n){const i=new Blob([t.bufferData],{type:"application/octet-stream"});e||(e=document.createElement("a"),document.body.appendChild(e)),e.download=n,e.href=URL.createObjectURL(i),e.click()}})()}const Pt={Splat:0,KSplat:1,Ply:2,Spz:3},uc=s=>s.endsWith(".ply")?Pt.Ply:s.endsWith(".splat")?Pt.Splat:s.endsWith(".ksplat")?Pt.KSplat:s.endsWith(".spz")?Pt.Spz:null,hc={type:"change"},fo={type:"start"},fc={type:"end"},ir=new Vc,pc=new qn,O0=Math.cos(70*zc.DEG2RAD);class sr extends _i{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"KeyA",UP:"KeyW",RIGHT:"KeyD",BOTTOM:"KeyS"},this.mouseButtons={LEFT:yi.ROTATE,MIDDLE:yi.DOLLY,RIGHT:yi.PAN},this.touches={ONE:Ei.ROTATE,TWO:Ei.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",M),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",M),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,this.clearDampedRotation(),this.clearDampedPan(),n.object.updateProjectionMatrix(),n.dispatchEvent(hc),n.update(),r=i.NONE},this.clearDampedRotation=function(){l.theta=0,l.phi=0},this.clearDampedPan=function(){d.set(0,0,0)},this.update=(function(){const L=new I,X=new gt().setFromUnitVectors(e.up,new I(0,1,0)),le=X.clone().invert(),_e=new I,Ee=new gt,ce=new I,Be=2*Math.PI;return function(){X.setFromUnitVectors(e.up,new I(0,1,0)),le.copy(X).invert();const me=n.object.position;L.copy(me).sub(n.target),L.applyQuaternion(X),a.setFromVector3(L),n.autoRotate&&r===i.NONE&&R(E()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ie=n.minAzimuthAngle,Ae=n.maxAzimuthAngle;isFinite(ie)&&isFinite(Ae)&&(ie<-Math.PI?ie+=Be:ie>Math.PI&&(ie-=Be),Ae<-Math.PI?Ae+=Be:Ae>Math.PI&&(Ae-=Be),ie<=Ae?a.theta=Math.max(ie,Math.min(Ae,a.theta)):a.theta=a.theta>(ie+Ae)/2?Math.max(ie,a.theta):Math.min(Ae,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),n.zoomToCursor&&T||n.object.isOrthographicCamera?a.radius=K(a.radius):a.radius=K(a.radius*c),L.setFromSpherical(a),L.applyQuaternion(le),me.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),d.set(0,0,0));let re=!1;if(n.zoomToCursor&&T){let J=null;if(n.object.isPerspectiveCamera){const ve=L.length();J=K(ve*c);const Oe=ve-J;n.object.position.addScaledVector(S,Oe),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const ve=new I(C.x,C.y,0);ve.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),re=!0;const Oe=new I(C.x,C.y,0);Oe.unproject(n.object),n.object.position.sub(Oe).add(ve),n.object.updateMatrixWorld(),J=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;J!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(J).add(n.object.position):(ir.origin.copy(n.object.position),ir.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(ir.direction))<O0?e.lookAt(n.target):(pc.setFromNormalAndCoplanarPoint(n.object.up,n.target),ir.intersectPlane(pc,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),re=!0);return c=1,T=!1,re||_e.distanceToSquared(n.object.position)>o||8*(1-Ee.dot(n.object.quaternion))>o||ce.distanceToSquared(n.target)>0?(n.dispatchEvent(hc),_e.copy(n.object.position),Ee.copy(n.object.quaternion),ce.copy(n.target),re=!1,!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ne),n.domElement.removeEventListener("pointerdown",pe),n.domElement.removeEventListener("pointercancel",Ie),n.domElement.removeEventListener("wheel",D),n.domElement.removeEventListener("pointermove",He),n.domElement.removeEventListener("pointerup",Ie),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",M),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new vl,l=new vl;let c=1;const d=new I,u=new Me,h=new Me,f=new Me,g=new Me,A=new Me,m=new Me,p=new Me,x=new Me,_=new Me,S=new I,C=new Me;let T=!1;const y=[],w={};function E(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function R(L){l.theta-=L}function B(L){l.phi-=L}const F=(function(){const L=new I;return function(le,_e){L.setFromMatrixColumn(_e,0),L.multiplyScalar(-le),d.add(L)}})(),U=(function(){const L=new I;return function(le,_e){n.screenSpacePanning===!0?L.setFromMatrixColumn(_e,1):(L.setFromMatrixColumn(_e,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(le),d.add(L)}})(),z=(function(){const L=new I;return function(le,_e){const Ee=n.domElement;if(n.object.isPerspectiveCamera){const ce=n.object.position;L.copy(ce).sub(n.target);let Be=L.length();Be*=Math.tan(n.object.fov/2*Math.PI/180),F(2*le*Be/Ee.clientHeight,n.object.matrix),U(2*_e*Be/Ee.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(F(le*(n.object.right-n.object.left)/n.object.zoom/Ee.clientWidth,n.object.matrix),U(_e*(n.object.top-n.object.bottom)/n.object.zoom/Ee.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function N(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(L){if(!n.zoomToCursor)return;T=!0;const X=n.domElement.getBoundingClientRect(),le=L.clientX-X.left,_e=L.clientY-X.top,Ee=X.width,ce=X.height;C.x=le/Ee*2-1,C.y=-(_e/ce)*2+1,S.set(C.x,C.y,1).unproject(e).sub(e.position).normalize()}function K(L){return Math.max(n.minDistance,Math.min(n.maxDistance,L))}function ee(L){u.set(L.clientX,L.clientY)}function ue(L){k(L),p.set(L.clientX,L.clientY)}function Re(L){g.set(L.clientX,L.clientY)}function Te(L){h.set(L.clientX,L.clientY),f.subVectors(h,u).multiplyScalar(n.rotateSpeed);const X=n.domElement;R(2*Math.PI*f.x/X.clientHeight),B(2*Math.PI*f.y/X.clientHeight),u.copy(h),n.update()}function $(L){x.set(L.clientX,L.clientY),_.subVectors(x,p),_.y>0?N(v()):_.y<0&&W(v()),p.copy(x),n.update()}function te(L){A.set(L.clientX,L.clientY),m.subVectors(A,g).multiplyScalar(n.panSpeed),z(m.x,m.y),g.copy(A),n.update()}function oe(L){k(L),L.deltaY<0?W(v()):L.deltaY>0&&N(v()),n.update()}function se(L){let X=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?B(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,n.keyPanSpeed),X=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?B(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,-n.keyPanSpeed),X=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?R(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(n.keyPanSpeed,0),X=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?R(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(-n.keyPanSpeed,0),X=!0;break}X&&(L.preventDefault(),n.update())}function fe(){if(y.length===1)u.set(y[0].pageX,y[0].pageY);else{const L=.5*(y[0].pageX+y[1].pageX),X=.5*(y[0].pageY+y[1].pageY);u.set(L,X)}}function Le(){if(y.length===1)g.set(y[0].pageX,y[0].pageY);else{const L=.5*(y[0].pageX+y[1].pageX),X=.5*(y[0].pageY+y[1].pageY);g.set(L,X)}}function Se(){const L=y[0].pageX-y[1].pageX,X=y[0].pageY-y[1].pageY,le=Math.sqrt(L*L+X*X);p.set(0,le)}function Qe(){n.enableZoom&&Se(),n.enablePan&&Le()}function We(){n.enableZoom&&Se(),n.enableRotate&&fe()}function Pe(L){if(y.length==1)h.set(L.pageX,L.pageY);else{const le=Ce(L),_e=.5*(L.pageX+le.x),Ee=.5*(L.pageY+le.y);h.set(_e,Ee)}f.subVectors(h,u).multiplyScalar(n.rotateSpeed);const X=n.domElement;R(2*Math.PI*f.x/X.clientHeight),B(2*Math.PI*f.y/X.clientHeight),u.copy(h)}function P(L){if(y.length===1)A.set(L.pageX,L.pageY);else{const X=Ce(L),le=.5*(L.pageX+X.x),_e=.5*(L.pageY+X.y);A.set(le,_e)}m.subVectors(A,g).multiplyScalar(n.panSpeed),z(m.x,m.y),g.copy(A)}function Xe(L){const X=Ce(L),le=L.pageX-X.x,_e=L.pageY-X.y,Ee=Math.sqrt(le*le+_e*_e);x.set(0,Ee),_.set(0,Math.pow(x.y/p.y,n.zoomSpeed)),N(_.y),p.copy(x)}function Ge(L){n.enableZoom&&Xe(L),n.enablePan&&P(L)}function $e(L){n.enableZoom&&Xe(L),n.enableRotate&&Pe(L)}function pe(L){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",He),n.domElement.addEventListener("pointerup",Ie)),j(L),L.pointerType==="touch"?q(L):qe(L))}function He(L){n.enabled!==!1&&(L.pointerType==="touch"?Z(L):yt(L))}function Ie(L){De(L),y.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",He),n.domElement.removeEventListener("pointerup",Ie)),n.dispatchEvent(fc),r=i.NONE}function qe(L){let X;switch(L.button){case 0:X=n.mouseButtons.LEFT;break;case 1:X=n.mouseButtons.MIDDLE;break;case 2:X=n.mouseButtons.RIGHT;break;default:X=-1}switch(X){case yi.DOLLY:if(n.enableZoom===!1)return;ue(L),r=i.DOLLY;break;case yi.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;Re(L),r=i.PAN}else{if(n.enableRotate===!1)return;ee(L),r=i.ROTATE}break;case yi.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;ee(L),r=i.ROTATE}else{if(n.enablePan===!1)return;Re(L),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(fo)}function yt(L){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;Te(L);break;case i.DOLLY:if(n.enableZoom===!1)return;$(L);break;case i.PAN:if(n.enablePan===!1)return;te(L);break}}function D(L){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(L.preventDefault(),n.dispatchEvent(fo),oe(L),n.dispatchEvent(fc))}function M(L){n.enabled===!1||n.enablePan===!1||se(L)}function q(L){switch(he(L),y.length){case 1:switch(n.touches.ONE){case Ei.ROTATE:if(n.enableRotate===!1)return;fe(),r=i.TOUCH_ROTATE;break;case Ei.PAN:if(n.enablePan===!1)return;Le(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Ei.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Qe(),r=i.TOUCH_DOLLY_PAN;break;case Ei.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;We(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(fo)}function Z(L){switch(he(L),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Pe(L),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;P(L),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ge(L),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;$e(L),n.update();break;default:r=i.NONE}}function ne(L){n.enabled!==!1&&L.preventDefault()}function j(L){y.push(L)}function De(L){delete w[L.pointerId];for(let X=0;X<y.length;X++)if(y[X].pointerId==L.pointerId){y.splice(X,1);return}}function he(L){let X=w[L.pointerId];X===void 0&&(X=new Me,w[L.pointerId]=X),X.set(L.pageX,L.pageY)}function Ce(L){const X=L.pointerId===y[0].pointerId?y[1]:y[0];return w[X.pointerId]}n.domElement.addEventListener("contextmenu",ne),n.domElement.addEventListener("pointerdown",pe),n.domElement.addEventListener("pointercancel",Ie),n.domElement.addEventListener("wheel",D,{passive:!1}),this.update()}}const N0=(s,e,t,n,i)=>{const r=performance.now();let o=s.style.display==="none"?0:parseFloat(s.style.opacity);isNaN(o)&&(o=1);const a=window.setInterval(()=>{const c=performance.now()-r;let d=Math.min(c/n,1);d>.999&&(d=1);let u;e?(u=(1-d)*o,u<1e-4&&(u=0)):u=(1-o)*d+o,u>0?(s.style.display=t,s.style.opacity=u):s.style.display="none",d>=1&&(i&&i(),window.clearInterval(a))},16);return a},z0=500;class Oa{static elementIDGen=0;constructor(e,t){this.taskIDGen=0,this.elementID=Oa.elementIDGen++,this.tasks=[],this.message=e||"Loading...",this.container=t||document.body,this.spinnerContainerOuter=document.createElement("div"),this.spinnerContainerOuter.className=`spinnerOuterContainer${this.elementID}`,this.spinnerContainerOuter.style.display="none",this.spinnerContainerPrimary=document.createElement("div"),this.spinnerContainerPrimary.className=`spinnerContainerPrimary${this.elementID}`,this.spinnerPrimary=document.createElement("div"),this.spinnerPrimary.classList.add(`spinner${this.elementID}`,`spinnerPrimary${this.elementID}`),this.messageContainerPrimary=document.createElement("div"),this.messageContainerPrimary.classList.add(`messageContainer${this.elementID}`,`messageContainerPrimary${this.elementID}`),this.messageContainerPrimary.innerHTML=this.message,this.spinnerContainerMin=document.createElement("div"),this.spinnerContainerMin.className=`spinnerContainerMin${this.elementID}`,this.spinnerMin=document.createElement("div"),this.spinnerMin.classList.add(`spinner${this.elementID}`,`spinnerMin${this.elementID}`),this.messageContainerMin=document.createElement("div"),this.messageContainerMin.classList.add(`messageContainer${this.elementID}`,`messageContainerMin${this.elementID}`),this.messageContainerMin.innerHTML=this.message,this.spinnerContainerPrimary.appendChild(this.spinnerPrimary),this.spinnerContainerPrimary.appendChild(this.messageContainerPrimary),this.spinnerContainerOuter.appendChild(this.spinnerContainerPrimary),this.spinnerContainerMin.appendChild(this.spinnerMin),this.spinnerContainerMin.appendChild(this.messageContainerMin),this.spinnerContainerOuter.appendChild(this.spinnerContainerMin);const n=document.createElement("style");n.innerHTML=`

            .spinnerOuterContainer${this.elementID} {
                width: 100%;
                height: 100%;
                margin: 0;
                top: 0;
                left: 0;
                position: absolute;
                pointer-events: none;
            }

            .messageContainer${this.elementID} {
                height: 20px;
                font-family: arial;
                font-size: 12pt;
                color: #ffffff;
                text-align: center;
                vertical-align: middle;
            }

            .spinner${this.elementID} {
                padding: 15px;
                background: #07e8d6;
                z-index:99999;
            
                aspect-ratio: 1;
                border-radius: 50%;
                --_m: 
                    conic-gradient(#0000,#000),
                    linear-gradient(#000 0 0) content-box;
                -webkit-mask: var(--_m);
                    mask: var(--_m);
                -webkit-mask-composite: source-out;
                    mask-composite: subtract;
                box-sizing: border-box;
                animation: load 1s linear infinite;
            }

            .spinnerContainerPrimary${this.elementID} {
                z-index:99999;
                background-color: rgba(128, 128, 128, 0.75);
                border: #666666 1px solid;
                border-radius: 5px;
                padding-top: 20px;
                padding-bottom: 10px;
                margin: 0;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-80px, -80px);
                width: 180px;
                pointer-events: auto;
            }

            .spinnerPrimary${this.elementID} {
                width: 120px;
                margin-left: 30px;
            }

            .messageContainerPrimary${this.elementID} {
                padding-top: 15px;
            }

            .spinnerContainerMin${this.elementID} {
                z-index:99999;
                background-color: rgba(128, 128, 128, 0.75);
                border: #666666 1px solid;
                border-radius: 5px;
                padding-top: 20px;
                padding-bottom: 15px;
                margin: 0;
                position: absolute;
                bottom: 50px;
                left: 50%;
                transform: translate(-50%, 0);
                display: flex;
                flex-direction: left;
                pointer-events: auto;
                min-width: 250px;
            }

            .messageContainerMin${this.elementID} {
                margin-right: 15px;
            }

            .spinnerMin${this.elementID} {
                width: 50px;
                height: 50px;
                margin-left: 15px;
                margin-right: 25px;
            }

            .messageContainerMin${this.elementID} {
                padding-top: 15px;
            }
            
            @keyframes load {
                to{transform: rotate(1turn)}
            }

        `,this.spinnerContainerOuter.appendChild(n),this.container.appendChild(this.spinnerContainerOuter),this.setMinimized(!1,!0),this.fadeTransitions=[]}addTask(e){const t={message:e,id:this.taskIDGen++};return this.tasks.push(t),this.update(),t.id}removeTask(e){let t=0;for(let n of this.tasks){if(n.id===e){this.tasks.splice(t,1);break}t++}this.update()}removeAllTasks(){this.tasks=[],this.update()}setMessageForTask(e,t){for(let n of this.tasks)if(n.id===e){n.message=t;break}this.update()}update(){this.tasks.length>0?(this.show(),this.setMessage(this.tasks[this.tasks.length-1].message)):this.hide()}show(){this.spinnerContainerOuter.style.display="block",this.visible=!0}hide(){this.spinnerContainerOuter.style.display="none",this.visible=!1}setContainer(e){this.container&&this.spinnerContainerOuter.parentElement===this.container&&this.container.removeChild(this.spinnerContainerOuter),e&&(this.container=e,this.container.appendChild(this.spinnerContainerOuter),this.spinnerContainerOuter.style.zIndex=this.container.style.zIndex+1)}setMinimized(e,t){const n=(i,r,o,a,l)=>{o?i.style.display=r?a:"none":this.fadeTransitions[l]=N0(i,!r,a,z0,()=>{this.fadeTransitions[l]=null})};n(this.spinnerContainerPrimary,!e,t,"block",0),n(this.spinnerContainerMin,e,t,"flex",1),this.minimized=e}setMessage(e){this.messageContainerPrimary.innerHTML=e,this.messageContainerMin.innerHTML=e}}class k0{constructor(e){this.idGen=0,this.tasks=[],this.container=e||document.body,this.progressBarContainerOuter=document.createElement("div"),this.progressBarContainerOuter.className="progressBarOuterContainer",this.progressBarContainerOuter.style.display="none",this.progressBarBox=document.createElement("div"),this.progressBarBox.className="progressBarBox",this.progressBarBackground=document.createElement("div"),this.progressBarBackground.className="progressBarBackground",this.progressBar=document.createElement("div"),this.progressBar.className="progressBar",this.progressBarBackground.appendChild(this.progressBar),this.progressBarBox.appendChild(this.progressBarBackground),this.progressBarContainerOuter.appendChild(this.progressBarBox);const t=document.createElement("style");t.innerHTML=`

            .progressBarOuterContainer {
                width: 100%;
                height: 100%;
                margin: 0;
                top: 0;
                left: 0;
                position: absolute;
                pointer-events: none;
            }

            .progressBarBox {
                z-index:99999;
                padding: 7px 9px 5px 7px;
                background-color: rgba(190, 190, 190, 0.75);
                border: #555555 1px solid;
                border-radius: 15px;
                margin: 0;
                position: absolute;
                bottom: 50px;
                left: 50%;
                transform: translate(-50%, 0);
                width: 180px;
                height: 30px;
                pointer-events: auto;
            }

            .progressBarBackground {
                width: 100%;
                height: 25px;
                border-radius:10px;
                background-color: rgba(128, 128, 128, 0.75);
                border: #444444 1px solid;
                box-shadow: inset 0 0 10px #333333;
            }

            .progressBar {
                height: 25px;
                width: 0px;
                border-radius:10px;
                background-color: rgba(0, 200, 0, 0.75);
                box-shadow: inset 0 0 10px #003300;
            }

        `,this.progressBarContainerOuter.appendChild(t),this.container.appendChild(this.progressBarContainerOuter)}show(){this.progressBarContainerOuter.style.display="block"}hide(){this.progressBarContainerOuter.style.display="none"}setProgress(e){this.progressBar.style.width=e+"%"}setContainer(e){this.container&&this.progressBarContainerOuter.parentElement===this.container&&this.container.removeChild(this.progressBarContainerOuter),e&&(this.container=e,this.container.appendChild(this.progressBarContainerOuter),this.progressBarContainerOuter.style.zIndex=this.container.style.zIndex+1)}}class H0{constructor(e){this.container=e||document.body,this.infoCells={};const t=[["Camera position","cameraPosition"],["Camera look-at","cameraLookAt"],["Camera up","cameraUp"],["Camera mode","orthographicCamera"],["Cursor position","cursorPosition"],["FPS","fps"],["Rendering:","renderSplatCount"],["Sort time","sortTime"],["Render window","renderWindow"],["Focal adjustment","focalAdjustment"],["Splat scale","splatScale"],["Point cloud mode","pointCloudMode"]];this.infoPanelContainer=document.createElement("div");const n=document.createElement("style");n.innerHTML=`

            .infoPanel {
                width: 430px;
                padding: 10px;
                background-color: rgba(50, 50, 50, 0.85);
                border: #555555 2px solid;
                color: #dddddd;
                border-radius: 10px;
                z-index: 9999;
                font-family: arial;
                font-size: 11pt;
                text-align: left;
                margin: 0;
                top: 10px;
                left:10px;
                position: absolute;
                pointer-events: auto;
            }

            .info-panel-cell {
                margin-bottom: 5px;
                padding-bottom: 2px;
            }

            .label-cell {
                font-weight: bold;
                font-size: 12pt;
                width: 140px;
            }

        `,this.infoPanelContainer.append(n),this.infoPanel=document.createElement("div"),this.infoPanel.className="infoPanel";const i=document.createElement("div");i.style.display="table";for(let r of t){const o=document.createElement("div");o.style.display="table-row",o.className="info-panel-row";const a=document.createElement("div");a.style.display="table-cell",a.innerHTML=`${r[0]}: `,a.classList.add("info-panel-cell","label-cell");const l=document.createElement("div");l.style.display="table-cell",l.style.width="10px",l.innerHTML=" ",l.className="info-panel-cell";const c=document.createElement("div");c.style.display="table-cell",c.innerHTML="",c.className="info-panel-cell",this.infoCells[r[1]]=c,o.appendChild(a),o.appendChild(l),o.appendChild(c),i.appendChild(o)}this.infoPanel.appendChild(i),this.infoPanelContainer.append(this.infoPanel),this.infoPanelContainer.style.display="none",this.container.appendChild(this.infoPanelContainer),this.visible=!1}update=function(e,t,n,i,r,o,a,l,c,d,u,h,f,g){const A=`${t.x.toFixed(5)}, ${t.y.toFixed(5)}, ${t.z.toFixed(5)}`;if(this.infoCells.cameraPosition.innerHTML!==A&&(this.infoCells.cameraPosition.innerHTML=A),n){const p=n,x=`${p.x.toFixed(5)}, ${p.y.toFixed(5)}, ${p.z.toFixed(5)}`;this.infoCells.cameraLookAt.innerHTML!==x&&(this.infoCells.cameraLookAt.innerHTML=x)}const m=`${i.x.toFixed(5)}, ${i.y.toFixed(5)}, ${i.z.toFixed(5)}`;if(this.infoCells.cameraUp.innerHTML!==m&&(this.infoCells.cameraUp.innerHTML=m),this.infoCells.orthographicCamera.innerHTML=r?"Orthographic":"Perspective",o){const p=o,x=`${p.x.toFixed(5)}, ${p.y.toFixed(5)}, ${p.z.toFixed(5)}`;this.infoCells.cursorPosition.innerHTML=x}else this.infoCells.cursorPosition.innerHTML="N/A";this.infoCells.fps.innerHTML=a,this.infoCells.renderWindow.innerHTML=`${e.x} x ${e.y}`,this.infoCells.renderSplatCount.innerHTML=`${c} splats out of ${l} (${d.toFixed(2)}%)`,this.infoCells.sortTime.innerHTML=`${u.toFixed(3)} ms`,this.infoCells.focalAdjustment.innerHTML=`${h.toFixed(3)}`,this.infoCells.splatScale.innerHTML=`${f.toFixed(3)}`,this.infoCells.pointCloudMode.innerHTML=`${g}`};setContainer(e){this.container&&this.infoPanelContainer.parentElement===this.container&&this.container.removeChild(this.infoPanelContainer),e&&(this.container=e,this.container.appendChild(this.infoPanelContainer),this.infoPanelContainer.style.zIndex=this.container.style.zIndex+1)}show(){this.infoPanelContainer.style.display="block",this.visible=!0}hide(){this.infoPanelContainer.style.display="none",this.visible=!1}}const mc=new I;class V0 extends bt{constructor(e=new I(0,0,1),t=new I(0,0,0),n=1,i=.1,r=16776960,o=n*.2,a=o*.2){super(),this.type="ArrowHelper";const l=new Ms(i,i,n,32);l.translate(0,n/2,0);const c=new Ms(0,a,o,32);c.translate(0,n,0),this.position.copy(t),this.line=new Et(l,new xi({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Et(c,new xi({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{mc.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(mc,t)}}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class ps{constructor(e){this.threeScene=e,this.splatRenderTarget=null,this.renderTargetCopyQuad=null,this.renderTargetCopyCamera=null,this.meshCursor=null,this.focusMarker=null,this.controlPlane=null,this.debugRoot=null,this.secondaryDebugRoot=null}updateSplatRenderTargetForRenderDimensions(e,t){this.destroySplatRendertarget(),this.splatRenderTarget=new ni(e,t,{format:Ht,stencilBuffer:!1,depthBuffer:!0}),this.splatRenderTarget.depthTexture=new Sa(e,t),this.splatRenderTarget.depthTexture.format=ji,this.splatRenderTarget.depthTexture.type=ln}destroySplatRendertarget(){this.splatRenderTarget&&(this.splatRenderTarget=null)}setupRenderTargetCopyObjects(){const e={sourceColorTexture:{type:"t",value:null},sourceDepthTexture:{type:"t",value:null}},t=new en({vertexShader:`
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = vec4( position.xy, 0.0, 1.0 );    
                }
            `,fragmentShader:`
                #include <common>
                #include <packing>
                varying vec2 vUv;
                uniform sampler2D sourceColorTexture;
                uniform sampler2D sourceDepthTexture;
                void main() {
                    vec4 color = texture2D(sourceColorTexture, vUv);
                    float fragDepth = texture2D(sourceDepthTexture, vUv).x;
                    gl_FragDepth = fragDepth;
                    gl_FragColor = vec4(color.rgb, color.a * 2.0);
              }
            `,uniforms:e,depthWrite:!1,depthTest:!1,transparent:!0,blending:bc,blendSrc:Ss,blendSrcAlpha:Ss,blendDst:_s,blendDstAlpha:_s});t.extensions.fragDepth=!0,this.renderTargetCopyQuad=new Et(new es(2,2),t),this.renderTargetCopyCamera=new va(-1,1,1,-1,0,1)}destroyRenderTargetCopyObjects(){this.renderTargetCopyQuad&&(ki(this.renderTargetCopyQuad),this.renderTargetCopyQuad=null)}setupMeshCursor(){if(!this.meshCursor){const e=new _a(.5,1.5,32),t=new xi({color:16777215}),n=new Et(e,t);n.rotation.set(0,0,Math.PI),n.position.set(0,1,0);const i=new Et(e,t);i.position.set(0,-1,0);const r=new Et(e,t);r.rotation.set(0,0,Math.PI/2),r.position.set(1,0,0);const o=new Et(e,t);o.rotation.set(0,0,-Math.PI/2),o.position.set(-1,0,0),this.meshCursor=new bt,this.meshCursor.add(n),this.meshCursor.add(i),this.meshCursor.add(r),this.meshCursor.add(o),this.meshCursor.scale.set(.1,.1,.1),this.threeScene.add(this.meshCursor),this.meshCursor.visible=!1}}destroyMeshCursor(){this.meshCursor&&(ki(this.meshCursor),this.threeScene.remove(this.meshCursor),this.meshCursor=null)}setMeshCursorVisibility(e){this.meshCursor.visible=e}getMeschCursorVisibility(){return this.meshCursor.visible}setMeshCursorPosition(e){this.meshCursor.position.copy(e)}positionAndOrientMeshCursor(e,t){this.meshCursor.position.copy(e),this.meshCursor.up.copy(t.up),this.meshCursor.lookAt(t.position)}setupFocusMarker(){if(!this.focusMarker){const e=new gr(.5,32,32),t=ps.buildFocusMarkerMaterial();t.depthTest=!1,t.depthWrite=!1,t.transparent=!0,this.focusMarker=new Et(e,t)}}destroyFocusMarker(){this.focusMarker&&(ki(this.focusMarker),this.focusMarker=null)}updateFocusMarker=(function(){const e=new I,t=new ke,n=new I;return function(i,r,o){t.copy(r.matrixWorld).invert(),e.copy(i).applyMatrix4(t),e.normalize().multiplyScalar(10),e.applyMatrix4(r.matrixWorld),n.copy(r.position).sub(i);const a=n.length();this.focusMarker.position.copy(i),this.focusMarker.scale.set(a,a,a),this.focusMarker.material.uniforms.realFocusPosition.value.copy(i),this.focusMarker.material.uniforms.viewport.value.copy(o),this.focusMarker.material.uniformsNeedUpdate=!0}})();setFocusMarkerVisibility(e){this.focusMarker.visible=e}setFocusMarkerOpacity(e){this.focusMarker.material.uniforms.opacity.value=e,this.focusMarker.material.uniformsNeedUpdate=!0}getFocusMarkerOpacity(){return this.focusMarker.material.uniforms.opacity.value}setupControlPlane(){if(!this.controlPlane){const e=new es(1,1);e.rotateX(-Math.PI/2);const t=new xi({color:16777215});t.transparent=!0,t.opacity=.6,t.depthTest=!1,t.depthWrite=!1,t.side=an;const n=new Et(e,t),i=new I(0,1,0);i.normalize();const r=new I(0,0,0),o=.5,a=.01,l=56576,c=new V0(i,r,o,a,l,.1,.03);this.controlPlane=new bt,this.controlPlane.add(n),this.controlPlane.add(c)}}destroyControlPlane(){this.controlPlane&&(ki(this.controlPlane),this.controlPlane=null)}setControlPlaneVisibility(e){this.controlPlane.visible=e}positionAndOrientControlPlane=(function(){const e=new gt,t=new I(0,1,0);return function(n,i){e.setFromUnitVectors(t,i),this.controlPlane.position.copy(n),this.controlPlane.quaternion.copy(e)}})();addDebugMeshes(){this.debugRoot=this.createDebugMeshes(),this.secondaryDebugRoot=this.createSecondaryDebugMeshes(),this.threeScene.add(this.debugRoot),this.threeScene.add(this.secondaryDebugRoot)}destroyDebugMeshes(){for(let e of[this.debugRoot,this.secondaryDebugRoot])e&&(ki(e),this.threeScene.remove(e));this.debugRoot=null,this.secondaryDebugRoot=null}createDebugMeshes(e){const t=new gr(1,32,32),n=new bt,i=(r,o)=>{let a=new Et(t,ps.buildDebugMaterial(r));a.renderOrder=e,n.add(a),a.position.fromArray(o)};return i(16711680,[-50,0,0]),i(16711680,[50,0,0]),i(65280,[0,0,-50]),i(65280,[0,0,50]),i(16755200,[5,0,5]),n}createSecondaryDebugMeshes(e){const t=new is(3,3,3),n=new bt;let i=12303291;const r=a=>{let l=new Et(t,ps.buildDebugMaterial(i));l.renderOrder=e,n.add(l),l.position.fromArray(a)};let o=10;return r([-o,0,-o]),r([-o,0,o]),r([o,0,-o]),r([o,0,o]),n}static buildDebugMaterial(e){const t=`
            #include <common>
            varying float ndcDepth;

            void main() {
                gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position.xyz, 1.0);
                ndcDepth = gl_Position.z / gl_Position.w;
                gl_Position.x = gl_Position.x / gl_Position.w;
                gl_Position.y = gl_Position.y / gl_Position.w;
                gl_Position.z = 0.0;
                gl_Position.w = 1.0;
    
            }
        `,n=`
            #include <common>
            uniform vec3 color;
            varying float ndcDepth;
            void main() {
                gl_FragDepth = (ndcDepth + 1.0) / 2.0;
                gl_FragColor = vec4(color.rgb, 0.0);
            }
        `,i={color:{type:"v3",value:new tt(e)}},r=new en({uniforms:i,vertexShader:t,fragmentShader:n,transparent:!1,depthTest:!0,depthWrite:!0,side:En});return r.extensions.fragDepth=!0,r}static buildFocusMarkerMaterial(e){const t=`
            #include <common>

            uniform vec2 viewport;
            uniform vec3 realFocusPosition;

            varying vec4 ndcPosition;
            varying vec4 ndcCenter;
            varying vec4 ndcFocusPosition;

            void main() {
                float radius = 0.01;

                vec4 viewPosition = modelViewMatrix * vec4(position.xyz, 1.0);
                vec4 viewCenter = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);

                vec4 viewFocusPosition = modelViewMatrix * vec4(realFocusPosition, 1.0);

                ndcPosition = projectionMatrix * viewPosition;
                ndcPosition = ndcPosition * vec4(1.0 / ndcPosition.w);
                ndcCenter = projectionMatrix * viewCenter;
                ndcCenter = ndcCenter * vec4(1.0 / ndcCenter.w);

                ndcFocusPosition = projectionMatrix * viewFocusPosition;
                ndcFocusPosition = ndcFocusPosition * vec4(1.0 / ndcFocusPosition.w);

                gl_Position = projectionMatrix * viewPosition;

            }
        `,n=`
            #include <common>
            uniform vec3 color;
            uniform vec2 viewport;
            uniform float opacity;

            varying vec4 ndcPosition;
            varying vec4 ndcCenter;
            varying vec4 ndcFocusPosition;

            void main() {
                vec2 screenPosition = vec2(ndcPosition) * viewport;
                vec2 screenCenter = vec2(ndcCenter) * viewport;

                vec2 screenVec = screenPosition - screenCenter;

                float projectedRadius = length(screenVec);

                float lineWidth = 0.0005 * viewport.y;
                float aaRange = 0.0025 * viewport.y;
                float radius = 0.06 * viewport.y;
                float radDiff = abs(projectedRadius - radius) - lineWidth;
                float alpha = 1.0 - clamp(radDiff / 5.0, 0.0, 1.0); 

                gl_FragColor = vec4(color.rgb, alpha * opacity);
            }
        `,i={color:{type:"v3",value:new tt(e)},realFocusPosition:{type:"v3",value:new I},viewport:{type:"v2",value:new Me},opacity:{value:0}};return new en({uniforms:i,vertexShader:t,fragmentShader:n,transparent:!0,depthTest:!1,depthWrite:!1,side:En})}dispose(){this.destroyMeshCursor(),this.destroyFocusMarker(),this.destroyDebugMeshes(),this.destroyControlPlane(),this.destroyRenderTargetCopyObjects(),this.destroySplatRendertarget()}}const G0=new I(1,0,0),W0=new I(0,1,0),X0=new I(0,0,1);class po{constructor(e=new I,t=new I){this.origin=new I,this.direction=new I,this.setParameters(e,t)}setParameters(e,t){this.origin.copy(e),this.direction.copy(t).normalize()}boxContainsPoint(e,t,n){return!(t.x<e.min.x-n||t.x>e.max.x+n||t.y<e.min.y-n||t.y>e.max.y+n||t.z<e.min.z-n||t.z>e.max.z+n)}intersectBox=(function(){const e=new I,t=[],n=[],i=[];return function(r,o){if(n[0]=this.origin.x,n[1]=this.origin.y,n[2]=this.origin.z,i[0]=this.direction.x,i[1]=this.direction.y,i[2]=this.direction.z,this.boxContainsPoint(r,this.origin,1e-4))return o&&(o.origin.copy(this.origin),o.normal.set(0,0,0),o.distance=-1),!0;for(let a=0;a<3;a++){if(i[a]==0)continue;const l=a==0?G0:a==1?W0:X0,c=i[a]<0?r.max:r.min;let d=-Math.sign(i[a]);t[0]=a==0?c.x:a==1?c.y:c.z;let u=t[0]-n[a];if(u*d<0){const h=(a+1)%3,f=(a+2)%3;if(t[2]=i[h]/i[a]*u+n[h],t[1]=i[f]/i[a]*u+n[f],e.set(t[a],t[f],t[h]),this.boxContainsPoint(r,e,1e-4))return o&&(o.origin.copy(e),o.normal.copy(l).multiplyScalar(d),o.distance=e.sub(this.origin).length()),!0}}return!1}})();intersectSphere=(function(){const e=new I;return function(t,n,i){e.copy(t).sub(this.origin);const r=e.dot(this.direction),o=r*r,l=e.dot(e)-o,c=n*n;if(l>c)return!1;const d=Math.sqrt(c-l),u=r-d,h=r+d;if(h<0)return!1;let f=u<0?h:u;return i&&(i.origin.copy(this.origin).addScaledVector(this.direction,f),i.normal.copy(i.origin).sub(t).normalize(),i.distance=f),!0}})()}class Na{constructor(){this.origin=new I,this.normal=new I,this.distance=0,this.splatIndex=0}set(e,t,n,i){this.origin.copy(e),this.normal.copy(t),this.distance=n,this.splatIndex=i}clone(){const e=new Na;return e.origin.copy(this.origin),e.normal.copy(this.normal),e.distance=this.distance,e.splatIndex=this.splatIndex,e}}const Fn={ThreeD:0,TwoD:1};class q0{constructor(e,t,n=!1){this.ray=new po(e,t),this.raycastAgainstTrueSplatEllipsoid=n}setFromCameraAndScreenPosition=(function(){const e=new Me;return function(t,n,i){if(e.x=n.x/i.x*2-1,e.y=(i.y-n.y)/i.y*2-1,t.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t;else if(t.isOrthographicCamera)this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t;else throw new Error("Raycaster::setFromCameraAndScreenPosition() -> Unsupported camera type")}})();intersectSplatMesh=(function(){const e=new ke,t=new ke,n=new ke,i=new po,r=new I;return function(o,a=[]){const l=o.getSplatTree();if(l){for(let c=0;c<l.subTrees.length;c++){const d=l.subTrees[c];t.copy(o.matrixWorld),o.dynamicMode&&(o.getSceneTransform(c,n),t.multiply(n)),e.copy(t).invert(),i.origin.copy(this.ray.origin).applyMatrix4(e),i.direction.copy(this.ray.origin).add(this.ray.direction),i.direction.applyMatrix4(e).sub(i.origin).normalize();const u=[];d.rootNode&&this.castRayAtSplatTreeNode(i,l,d.rootNode,u),u.forEach(h=>{h.origin.applyMatrix4(t),h.normal.applyMatrix4(t).normalize(),h.distance=r.copy(h.origin).sub(this.ray.origin).length()}),a.push(...u)}return a.sort((c,d)=>c.distance>d.distance?1:-1),a}}})();castRayAtSplatTreeNode=(function(){const e=new At,t=new I,n=new I,i=new gt,r=new Na,o=1e-7,a=new I(0,0,0),l=new ke,c=new ke,d=new ke,u=new ke,h=new ke,f=new po;return function(g,A,m,p=[]){if(g.intersectBox(m.boundingBox)){if(m.data&&m.data.indexes&&m.data.indexes.length>0)for(let x=0;x<m.data.indexes.length;x++){const _=m.data.indexes[x],S=A.splatMesh.getSceneIndexForSplat(_);if(A.splatMesh.getScene(S).visible&&(A.splatMesh.getSplatColor(_,e),A.splatMesh.getSplatCenter(_,t),A.splatMesh.getSplatScaleAndRotation(_,n,i),!(n.x<=o||n.y<=o||A.splatMesh.splatRenderMode===Fn.ThreeD&&n.z<=o)))if(this.raycastAgainstTrueSplatEllipsoid){c.makeScale(n.x,n.y,n.z),d.makeRotationFromQuaternion(i);const T=Math.log10(e.w)*2;if(l.makeScale(T,T,T),h.copy(l).multiply(d).multiply(c),u.copy(h).invert(),f.origin.copy(g.origin).sub(t).applyMatrix4(u),f.direction.copy(g.origin).add(g.direction).sub(t),f.direction.applyMatrix4(u).sub(f.origin).normalize(),f.intersectSphere(a,1,r)){const y=r.clone();y.splatIndex=_,y.origin.applyMatrix4(h).add(t),p.push(y)}}else{let T=n.x+n.y,y=2;if(A.splatMesh.splatRenderMode===Fn.ThreeD&&(T+=n.z,y=3),T=T/y,g.intersectSphere(t,T,r)){const w=r.clone();w.splatIndex=_,p.push(w)}}}if(m.children&&m.children.length>0)for(let x of m.children)this.castRayAtSplatTreeNode(g,A,x,p);return p}}})()}class Qi{static buildVertexShaderBase(e=!1,t=!1,n=0,i=""){let r=`
        precision highp float;
        #include <common>

        attribute uint splatIndex;
        uniform highp usampler2D centersColorsTexture;
        uniform highp sampler2D sphericalHarmonicsTexture;
        uniform highp sampler2D sphericalHarmonicsTextureR;
        uniform highp sampler2D sphericalHarmonicsTextureG;
        uniform highp sampler2D sphericalHarmonicsTextureB;

        uniform highp usampler2D sceneIndexesTexture;
        uniform vec2 sceneIndexesTextureSize;
        uniform int sceneCount;
    `;return t&&(r+=`
            uniform float sceneOpacity[${ct.MaxScenes}];
            uniform int sceneVisibility[${ct.MaxScenes}];
        `),e&&(r+=`
            uniform highp mat4 transforms[${ct.MaxScenes}];
        `),r+=`
        ${i}
        uniform vec2 focal;
        uniform float orthoZoom;
        uniform int orthographicMode;
        uniform int pointCloudModeEnabled;
        uniform float inverseFocalAdjustment;
        uniform vec2 viewport;
        uniform vec2 basisViewport;
        uniform vec2 centersColorsTextureSize;
        uniform int sphericalHarmonicsDegree;
        uniform vec2 sphericalHarmonicsTextureSize;
        uniform int sphericalHarmonics8BitMode;
        uniform int sphericalHarmonicsMultiTextureMode;
        uniform float visibleRegionRadius;
        uniform float visibleRegionFadeStartRadius;
        uniform float firstRenderTime;
        uniform float currentTime;
        uniform int fadeInComplete;
        uniform vec3 sceneCenter;
        uniform float splatScale;
        uniform float sphericalHarmonics8BitCompressionRangeMin[${ct.MaxScenes}];
        uniform float sphericalHarmonics8BitCompressionRangeMax[${ct.MaxScenes}];

        varying vec4 vColor;
        varying vec2 vUv;
        varying vec2 vPosition;

        mat3 quaternionToRotationMatrix(float x, float y, float z, float w) {
            float s = 1.0 / sqrt(w * w + x * x + y * y + z * z);
        
            return mat3(
                1. - 2. * (y * y + z * z),
                2. * (x * y + w * z),
                2. * (x * z - w * y),
                2. * (x * y - w * z),
                1. - 2. * (x * x + z * z),
                2. * (y * z + w * x),
                2. * (x * z + w * y),
                2. * (y * z - w * x),
                1. - 2. * (x * x + y * y)
            );
        }

        const float sqrt8 = sqrt(8.0);
        const float minAlpha = 1.0 / 255.0;

        const vec4 encodeNorm4 = vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0);
        const uvec4 mask4 = uvec4(uint(0x000000FF), uint(0x0000FF00), uint(0x00FF0000), uint(0xFF000000));
        const uvec4 shift4 = uvec4(0, 8, 16, 24);
        vec4 uintToRGBAVec (uint u) {
           uvec4 urgba = mask4 & u;
           urgba = urgba >> shift4;
           vec4 rgba = vec4(urgba) * encodeNorm4;
           return rgba;
        }

        vec2 getDataUV(in int stride, in int offset, in vec2 dimensions) {
            vec2 samplerUV = vec2(0.0, 0.0);
            float d = float(splatIndex * uint(stride) + uint(offset)) / dimensions.x;
            samplerUV.y = float(floor(d)) / dimensions.y;
            samplerUV.x = fract(d);
            return samplerUV;
        }

        vec2 getDataUVF(in uint sIndex, in float stride, in uint offset, in vec2 dimensions) {
            vec2 samplerUV = vec2(0.0, 0.0);
            float d = float(uint(float(sIndex) * stride) + offset) / dimensions.x;
            samplerUV.y = float(floor(d)) / dimensions.y;
            samplerUV.x = fract(d);
            return samplerUV;
        }

        const float SH_C1 = 0.4886025119029199f;
        const float[5] SH_C2 = float[](1.0925484, -1.0925484, 0.3153916, -1.0925484, 0.5462742);

        void main () {

            uint oddOffset = splatIndex & uint(0x00000001);
            uint doubleOddOffset = oddOffset * uint(2);
            bool isEven = oddOffset == uint(0);
            uint nearestEvenIndex = splatIndex - oddOffset;
            float fOddOffset = float(oddOffset);

            uvec4 sampledCenterColor = texture(centersColorsTexture, getDataUV(1, 0, centersColorsTextureSize));
            vec3 splatCenter = uintBitsToFloat(uvec3(sampledCenterColor.gba));

            uint sceneIndex = uint(0);
            if (sceneCount > 1) {
                sceneIndex = texture(sceneIndexesTexture, getDataUV(1, 0, sceneIndexesTextureSize)).r;
            }
            `,t&&(r+=`
                float splatOpacityFromScene = sceneOpacity[sceneIndex];
                int sceneVisible = sceneVisibility[sceneIndex];
                if (splatOpacityFromScene <= 0.01 || sceneVisible == 0) {
                    gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
                    return;
                }
            `),e?r+=`
                mat4 transform = transforms[sceneIndex];
                mat4 transformModelViewMatrix = viewMatrix * transform;
            `:r+="mat4 transformModelViewMatrix = modelViewMatrix;",r+=`
            float sh8BitCompressionRangeMinForScene = sphericalHarmonics8BitCompressionRangeMin[sceneIndex];
            float sh8BitCompressionRangeMaxForScene = sphericalHarmonics8BitCompressionRangeMax[sceneIndex];
            float sh8BitCompressionRangeForScene = sh8BitCompressionRangeMaxForScene - sh8BitCompressionRangeMinForScene;
            float sh8BitCompressionHalfRangeForScene = sh8BitCompressionRangeForScene / 2.0;
            vec3 vec8BitSHShift = vec3(sh8BitCompressionRangeMinForScene);

            vec4 viewCenter = transformModelViewMatrix * vec4(splatCenter, 1.0);

            vec4 clipCenter = projectionMatrix * viewCenter;

            float clip = 1.2 * clipCenter.w;
            if (clipCenter.z < -clip || clipCenter.x < -clip || clipCenter.x > clip || clipCenter.y < -clip || clipCenter.y > clip) {
                gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
                return;
            }

            vec3 ndcCenter = clipCenter.xyz / clipCenter.w;

            vPosition = position.xy;
            vColor = uintToRGBAVec(sampledCenterColor.r);
        `,n>=1&&(r+=`   
            if (sphericalHarmonicsDegree >= 1) {
            `,e?r+=`
                    vec3 worldViewDir = normalize(splatCenter - vec3(inverse(transform) * vec4(cameraPosition, 1.0)));
                `:r+=`
                    vec3 worldViewDir = normalize(splatCenter - cameraPosition);
                `,r+=`
                vec3 sh1;
                vec3 sh2;
                vec3 sh3;
            `,n>=2&&(r+=`
                    vec3 sh4;
                    vec3 sh5;
                    vec3 sh6;
                    vec3 sh7;
                    vec3 sh8;
                `),n===1?r+=`
                    if (sphericalHarmonicsMultiTextureMode == 0) {
                        vec2 shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset, sphericalHarmonicsTextureSize);
                        vec4 sampledSH0123 = texture(sphericalHarmonicsTexture, shUV);
                        shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset + uint(1), sphericalHarmonicsTextureSize);
                        vec4 sampledSH4567 = texture(sphericalHarmonicsTexture, shUV);
                        shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset + uint(2), sphericalHarmonicsTextureSize);
                        vec4 sampledSH891011 = texture(sphericalHarmonicsTexture, shUV);
                        sh1 = vec3(sampledSH0123.rgb) * (1.0 - fOddOffset) + vec3(sampledSH0123.ba, sampledSH4567.r) * fOddOffset;
                        sh2 = vec3(sampledSH0123.a, sampledSH4567.rg) * (1.0 - fOddOffset) + vec3(sampledSH4567.gba) * fOddOffset;
                        sh3 = vec3(sampledSH4567.ba, sampledSH891011.r) * (1.0 - fOddOffset) + vec3(sampledSH891011.rgb) * fOddOffset;
                    } else {
                        vec2 sampledSH01R = texture(sphericalHarmonicsTextureR, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23R = texture(sphericalHarmonicsTextureR, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH01G = texture(sphericalHarmonicsTextureG, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23G = texture(sphericalHarmonicsTextureG, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH01B = texture(sphericalHarmonicsTextureB, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23B = texture(sphericalHarmonicsTextureB, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        sh1 = vec3(sampledSH01R.rg, sampledSH23R.r);
                        sh2 = vec3(sampledSH01G.rg, sampledSH23G.r);
                        sh3 = vec3(sampledSH01B.rg, sampledSH23B.r);
                    }
                `:n===2&&(r+=`
                    vec4 sampledSH0123;
                    vec4 sampledSH4567;
                    vec4 sampledSH891011;

                    vec4 sampledSH0123R;
                    vec4 sampledSH0123G;
                    vec4 sampledSH0123B;

                    if (sphericalHarmonicsMultiTextureMode == 0) {
                        sampledSH0123 = texture(sphericalHarmonicsTexture, getDataUV(6, 0, sphericalHarmonicsTextureSize));
                        sampledSH4567 = texture(sphericalHarmonicsTexture, getDataUV(6, 1, sphericalHarmonicsTextureSize));
                        sampledSH891011 = texture(sphericalHarmonicsTexture, getDataUV(6, 2, sphericalHarmonicsTextureSize));
                        sh1 = sampledSH0123.rgb;
                        sh2 = vec3(sampledSH0123.a, sampledSH4567.rg);
                        sh3 = vec3(sampledSH4567.ba, sampledSH891011.r);
                    } else {
                        sampledSH0123R = texture(sphericalHarmonicsTextureR, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sampledSH0123G = texture(sphericalHarmonicsTextureG, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sampledSH0123B = texture(sphericalHarmonicsTextureB, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sh1 = vec3(sampledSH0123R.rgb);
                        sh2 = vec3(sampledSH0123G.rgb);
                        sh3 = vec3(sampledSH0123B.rgb);
                    }
                `),r+=`
                    if (sphericalHarmonics8BitMode == 1) {
                        sh1 = sh1 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        sh2 = sh2 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        sh3 = sh3 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                    }
                    float x = worldViewDir.x;
                    float y = worldViewDir.y;
                    float z = worldViewDir.z;
                    vColor.rgb += SH_C1 * (-sh1 * y + sh2 * z - sh3 * x);
            `,n>=2&&(r+=`
                    if (sphericalHarmonicsDegree >= 2) {
                        float xx = x * x;
                        float yy = y * y;
                        float zz = z * z;
                        float xy = x * y;
                        float yz = y * z;
                        float xz = x * z;
                `,n===2&&(r+=`
                        if (sphericalHarmonicsMultiTextureMode == 0) {
                            vec4 sampledSH12131415 = texture(sphericalHarmonicsTexture, getDataUV(6, 3, sphericalHarmonicsTextureSize));
                            vec4 sampledSH16171819 = texture(sphericalHarmonicsTexture, getDataUV(6, 4, sphericalHarmonicsTextureSize));
                            vec4 sampledSH20212223 = texture(sphericalHarmonicsTexture, getDataUV(6, 5, sphericalHarmonicsTextureSize));
                            sh4 = sampledSH891011.gba;
                            sh5 = sampledSH12131415.rgb;
                            sh6 = vec3(sampledSH12131415.a, sampledSH16171819.rg);
                            sh7 = vec3(sampledSH16171819.ba, sampledSH20212223.r);
                            sh8 = sampledSH20212223.gba;
                        } else {
                            vec4 sampledSH4567R = texture(sphericalHarmonicsTextureR, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            vec4 sampledSH4567G = texture(sphericalHarmonicsTextureG, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            vec4 sampledSH4567B = texture(sphericalHarmonicsTextureB, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            sh4 = vec3(sampledSH0123R.a, sampledSH4567R.rg);
                            sh5 = vec3(sampledSH4567R.ba, sampledSH0123G.a);
                            sh6 = vec3(sampledSH4567G.rgb);
                            sh7 = vec3(sampledSH4567G.a, sampledSH0123B.a, sampledSH4567B.r);
                            sh8 = vec3(sampledSH4567B.gba);
                        }
                    `),r+=`
                        if (sphericalHarmonics8BitMode == 1) {
                            sh4 = sh4 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh5 = sh5 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh6 = sh6 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh7 = sh7 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh8 = sh8 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        }

                        vColor.rgb +=
                            (SH_C2[0] * xy) * sh4 +
                            (SH_C2[1] * yz) * sh5 +
                            (SH_C2[2] * (2.0 * zz - xx - yy)) * sh6 +
                            (SH_C2[3] * xz) * sh7 +
                            (SH_C2[4] * (xx - yy)) * sh8;
                    }
                `),r+=`

                vColor.rgb = clamp(vColor.rgb, vec3(0.), vec3(1.));

            }

            `),r}static getVertexShaderFadeIn(){return`
            if (fadeInComplete == 0) {
                float opacityAdjust = 1.0;
                float centerDist = length(splatCenter - sceneCenter);
                float renderTime = max(currentTime - firstRenderTime, 0.0);

                float fadeDistance = 0.75;
                float distanceLoadFadeInFactor = step(visibleRegionFadeStartRadius, centerDist);
                distanceLoadFadeInFactor = (1.0 - distanceLoadFadeInFactor) +
                                        (1.0 - clamp((centerDist - visibleRegionFadeStartRadius) / fadeDistance, 0.0, 1.0)) *
                                        distanceLoadFadeInFactor;
                opacityAdjust *= distanceLoadFadeInFactor;
                vColor.a *= opacityAdjust;
            }
        `}static getUniforms(e=!1,t=!1,n=0,i=1,r=!1){const o={sceneCenter:{type:"v3",value:new I},fadeInComplete:{type:"i",value:0},orthographicMode:{type:"i",value:0},visibleRegionFadeStartRadius:{type:"f",value:0},visibleRegionRadius:{type:"f",value:0},currentTime:{type:"f",value:0},firstRenderTime:{type:"f",value:0},centersColorsTexture:{type:"t",value:null},sphericalHarmonicsTexture:{type:"t",value:null},sphericalHarmonicsTextureR:{type:"t",value:null},sphericalHarmonicsTextureG:{type:"t",value:null},sphericalHarmonicsTextureB:{type:"t",value:null},sphericalHarmonics8BitCompressionRangeMin:{type:"f",value:[]},sphericalHarmonics8BitCompressionRangeMax:{type:"f",value:[]},focal:{type:"v2",value:new Me},orthoZoom:{type:"f",value:1},inverseFocalAdjustment:{type:"f",value:1},viewport:{type:"v2",value:new Me},basisViewport:{type:"v2",value:new Me},debugColor:{type:"v3",value:new tt},centersColorsTextureSize:{type:"v2",value:new Me(1024,1024)},sphericalHarmonicsDegree:{type:"i",value:n},sphericalHarmonicsTextureSize:{type:"v2",value:new Me(1024,1024)},sphericalHarmonics8BitMode:{type:"i",value:0},sphericalHarmonicsMultiTextureMode:{type:"i",value:0},splatScale:{type:"f",value:i},pointCloudModeEnabled:{type:"i",value:r?1:0},sceneIndexesTexture:{type:"t",value:null},sceneIndexesTextureSize:{type:"v2",value:new Me(1024,1024)},sceneCount:{type:"i",value:1}};for(let a=0;a<ct.MaxScenes;a++)o.sphericalHarmonics8BitCompressionRangeMin.value.push(-3/2),o.sphericalHarmonics8BitCompressionRangeMax.value.push(ct.SphericalHarmonics8BitCompressionRange/2);if(t){const a=[];for(let c=0;c<ct.MaxScenes;c++)a.push(1);o.sceneOpacity={type:"f",value:a};const l=[];for(let c=0;c<ct.MaxScenes;c++)l.push(1);o.sceneVisibility={type:"i",value:l}}if(e){const a=[];for(let l=0;l<ct.MaxScenes;l++)a.push(new ke);o.transforms={type:"mat4",value:a}}return o}}class xr{static build(e=!1,t=!1,n=!1,i=2048,r=1,o=!1,a=0,l=.3){let d=Qi.buildVertexShaderBase(e,t,a,`
            uniform vec2 covariancesTextureSize;
            uniform highp sampler2D covariancesTexture;
            uniform highp usampler2D covariancesTextureHalfFloat;
            uniform int covariancesAreHalfFloat;

            void fromCovarianceHalfFloatV4(uvec4 val, out vec4 first, out vec4 second) {
                vec2 r = unpackHalf2x16(val.r);
                vec2 g = unpackHalf2x16(val.g);
                vec2 b = unpackHalf2x16(val.b);

                first = vec4(r.x, r.y, g.x, g.y);
                second = vec4(b.x, b.y, 0.0, 0.0);
            }
        `);d+=xr.buildVertexShaderProjection(n,t,i,l);const u=xr.buildFragmentShader(),h=Qi.getUniforms(e,t,a,r,o);return h.covariancesTextureSize={type:"v2",value:new Me(1024,1024)},h.covariancesTexture={type:"t",value:null},h.covariancesTextureHalfFloat={type:"t",value:null},h.covariancesAreHalfFloat={type:"i",value:0},new en({uniforms:h,vertexShader:d,fragmentShader:u,transparent:!0,alphaTest:1,blending:Jn,depthTest:!0,depthWrite:!1,side:an})}static buildVertexShaderProjection(e,t,n,i){let r=`

            vec4 sampledCovarianceA;
            vec4 sampledCovarianceB;
            vec3 cov3D_M11_M12_M13;
            vec3 cov3D_M22_M23_M33;
            if (covariancesAreHalfFloat == 0) {
                sampledCovarianceA = texture(covariancesTexture, getDataUVF(nearestEvenIndex, 1.5, oddOffset,
                                                                            covariancesTextureSize));
                sampledCovarianceB = texture(covariancesTexture, getDataUVF(nearestEvenIndex, 1.5, oddOffset + uint(1),
                                                                            covariancesTextureSize));

                cov3D_M11_M12_M13 = vec3(sampledCovarianceA.rgb) * (1.0 - fOddOffset) +
                                    vec3(sampledCovarianceA.ba, sampledCovarianceB.r) * fOddOffset;
                cov3D_M22_M23_M33 = vec3(sampledCovarianceA.a, sampledCovarianceB.rg) * (1.0 - fOddOffset) +
                                    vec3(sampledCovarianceB.gba) * fOddOffset;
            } else {
                uvec4 sampledCovarianceU = texture(covariancesTextureHalfFloat, getDataUV(1, 0, covariancesTextureSize));
                fromCovarianceHalfFloatV4(sampledCovarianceU, sampledCovarianceA, sampledCovarianceB);
                cov3D_M11_M12_M13 = sampledCovarianceA.rgb;
                cov3D_M22_M23_M33 = vec3(sampledCovarianceA.a, sampledCovarianceB.rg);
            }
        
            // Construct the 3D covariance matrix
            mat3 Vrk = mat3(
                cov3D_M11_M12_M13.x, cov3D_M11_M12_M13.y, cov3D_M11_M12_M13.z,
                cov3D_M11_M12_M13.y, cov3D_M22_M23_M33.x, cov3D_M22_M23_M33.y,
                cov3D_M11_M12_M13.z, cov3D_M22_M23_M33.y, cov3D_M22_M23_M33.z
            );

            mat3 J;
            if (orthographicMode == 1) {
                // Since the projection is linear, we don't need an approximation
                J = transpose(mat3(orthoZoom, 0.0, 0.0,
                                0.0, orthoZoom, 0.0,
                                0.0, 0.0, 0.0));
            } else {
                // Construct the Jacobian of the affine approximation of the projection matrix. It will be used to transform the
                // 3D covariance matrix instead of using the actual projection matrix because that transformation would
                // require a non-linear component (perspective division) which would yield a non-gaussian result.
                float s = 1.0 / (viewCenter.z * viewCenter.z);
                J = mat3(
                    focal.x / viewCenter.z, 0., -(focal.x * viewCenter.x) * s,
                    0., focal.y / viewCenter.z, -(focal.y * viewCenter.y) * s,
                    0., 0., 0.
                );
            }

            // Concatenate the projection approximation with the model-view transformation
            mat3 W = transpose(mat3(transformModelViewMatrix));
            mat3 T = W * J;

            // Transform the 3D covariance matrix (Vrk) to compute the 2D covariance matrix
            mat3 cov2Dm = transpose(T) * Vrk * T;
            `;return e?r+=`
                float detOrig = cov2Dm[0][0] * cov2Dm[1][1] - cov2Dm[0][1] * cov2Dm[0][1];
                cov2Dm[0][0] += ${i};
                cov2Dm[1][1] += ${i};
                float detBlur = cov2Dm[0][0] * cov2Dm[1][1] - cov2Dm[0][1] * cov2Dm[0][1];
                vColor.a *= sqrt(max(detOrig / detBlur, 0.0));
                if (vColor.a < minAlpha) return;
            `:r+=`
                cov2Dm[0][0] += ${i};
                cov2Dm[1][1] += ${i};
            `,r+=`

            // We are interested in the upper-left 2x2 portion of the projected 3D covariance matrix because
            // we only care about the X and Y values. We want the X-diagonal, cov2Dm[0][0],
            // the Y-diagonal, cov2Dm[1][1], and the correlation between the two cov2Dm[0][1]. We don't
            // need cov2Dm[1][0] because it is a symetric matrix.
            vec3 cov2Dv = vec3(cov2Dm[0][0], cov2Dm[0][1], cov2Dm[1][1]);

            // We now need to solve for the eigen-values and eigen vectors of the 2D covariance matrix
            // so that we can determine the 2D basis for the splat. This is done using the method described
            // here: https://people.math.harvard.edu/~knill/teaching/math21b2004/exhibits/2dmatrices/index.html
            // After calculating the eigen-values and eigen-vectors, we calculate the basis for rendering the splat
            // by normalizing the eigen-vectors and then multiplying them by (sqrt(8) * sqrt(eigen-value)), which is
            // equal to scaling them by sqrt(8) standard deviations.
            //
            // This is a different approach than in the original work at INRIA. In that work they compute the
            // max extents of the projected splat in screen space to form a screen-space aligned bounding rectangle
            // which forms the geometry that is actually rasterized. The dimensions of that bounding box are 3.0
            // times the square root of the maximum eigen-value, or 3 standard deviations. They then use the inverse
            // 2D covariance matrix (called 'conic') in the CUDA rendering thread to determine fragment opacity by
            // calculating the full gaussian: exp(-0.5 * (X - mean) * conic * (X - mean)) * splat opacity
            float a = cov2Dv.x;
            float d = cov2Dv.z;
            float b = cov2Dv.y;
            float D = a * d - b * b;
            float trace = a + d;
            float traceOver2 = 0.5 * trace;
            float term2 = sqrt(max(0.1f, traceOver2 * traceOver2 - D));
            float eigenValue1 = traceOver2 + term2;
            float eigenValue2 = traceOver2 - term2;

            if (pointCloudModeEnabled == 1) {
                eigenValue1 = eigenValue2 = 0.2;
            }

            if (eigenValue2 <= 0.0) return;

            vec2 eigenVector1 = normalize(vec2(b, eigenValue1 - a));
            // since the eigen vectors are orthogonal, we derive the second one from the first
            vec2 eigenVector2 = vec2(eigenVector1.y, -eigenVector1.x);

            // We use sqrt(8) standard deviations instead of 3 to eliminate more of the splat with a very low opacity.
            vec2 basisVector1 = eigenVector1 * splatScale * min(sqrt8 * sqrt(eigenValue1), ${parseInt(n)}.0);
            vec2 basisVector2 = eigenVector2 * splatScale * min(sqrt8 * sqrt(eigenValue2), ${parseInt(n)}.0);
            `,t&&(r+=`
                vColor.a *= splatOpacityFromScene;
            `),r+=`
            vec2 ndcOffset = vec2(vPosition.x * basisVector1 + vPosition.y * basisVector2) *
                             basisViewport * 2.0 * inverseFocalAdjustment;

            vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
            gl_Position = quadPos;

            // Scale the position data we send to the fragment shader
            vPosition *= sqrt8;
        `,r+=Qi.getVertexShaderFadeIn(),r+="}",r}static buildFragmentShader(){let e=`
            precision highp float;
            #include <common>
 
            uniform vec3 debugColor;

            varying vec4 vColor;
            varying vec2 vUv;
            varying vec2 vPosition;
        `;return e+=`
            void main () {
                // Compute the positional squared distance from the center of the splat to the current fragment.
                float A = dot(vPosition, vPosition);
                // Since the positional data in vPosition has been scaled by sqrt(8), the squared result will be
                // scaled by a factor of 8. If the squared result is larger than 8, it means it is outside the ellipse
                // defined by the rectangle formed by vPosition. It also means it's farther
                // away than sqrt(8) standard deviations from the mean.
                if (A > 8.0) discard;
                vec3 color = vColor.rgb;

                // Since the rendered splat is scaled by sqrt(8), the inverse covariance matrix that is part of
                // the gaussian formula becomes the identity matrix. We're then left with (X - mean) * (X - mean),
                // and since 'mean' is zero, we have X * X, which is the same as A:
                float opacity = exp(-0.5 * A) * vColor.a;

                gl_FragColor = vec4(color.rgb, opacity);
            }
        `,e}}class Sr{static build(e=!1,t=!1,n=1,i=!1,r=0){let a=Qi.buildVertexShaderBase(e,t,r,`
            uniform vec2 scaleRotationsTextureSize;
            uniform highp sampler2D scaleRotationsTexture;
            varying mat3 vT;
            varying vec2 vQuadCenter;
            varying vec2 vFragCoord;
        `);a+=Sr.buildVertexShaderProjection();const l=Sr.buildFragmentShader(),c=Qi.getUniforms(e,t,r,n,i);return c.scaleRotationsTexture={type:"t",value:null},c.scaleRotationsTextureSize={type:"v2",value:new Me(1024,1024)},new en({uniforms:c,vertexShader:a,fragmentShader:l,transparent:!0,alphaTest:1,blending:Jn,depthTest:!0,depthWrite:!1,side:an})}static buildVertexShaderProjection(){let e=`

            vec4 scaleRotationA = texture(scaleRotationsTexture, getDataUVF(nearestEvenIndex, 1.5,
                                                                            oddOffset, scaleRotationsTextureSize));
            vec4 scaleRotationB = texture(scaleRotationsTexture, getDataUVF(nearestEvenIndex, 1.5,
                                                                            oddOffset + uint(1), scaleRotationsTextureSize));

            vec3 scaleRotation123 = vec3(scaleRotationA.rgb) * (1.0 - fOddOffset) +
                                    vec3(scaleRotationA.ba, scaleRotationB.r) * fOddOffset;
            vec3 scaleRotation456 = vec3(scaleRotationA.a, scaleRotationB.rg) * (1.0 - fOddOffset) +
                                    vec3(scaleRotationB.gba) * fOddOffset;

            float missingW = sqrt(1.0 - scaleRotation456.x * scaleRotation456.x - scaleRotation456.y *
                                    scaleRotation456.y - scaleRotation456.z * scaleRotation456.z);
            mat3 R = quaternionToRotationMatrix(scaleRotation456.r, scaleRotation456.g, scaleRotation456.b, missingW);
            mat3 S = mat3(scaleRotation123.r, 0.0, 0.0,
                            0.0, scaleRotation123.g, 0.0,
                            0.0, 0.0, scaleRotation123.b);
            
            mat3 L = R * S;

            mat3x4 splat2World = mat3x4(vec4(L[0], 0.0),
                                        vec4(L[1], 0.0),
                                        vec4(splatCenter.x, splatCenter.y, splatCenter.z, 1.0));

            mat4 world2ndc = transpose(projectionMatrix * transformModelViewMatrix);

            mat3x4 ndc2pix = mat3x4(vec4(viewport.x / 2.0, 0.0, 0.0, (viewport.x - 1.0) / 2.0),
                                    vec4(0.0, viewport.y / 2.0, 0.0, (viewport.y - 1.0) / 2.0),
                                    vec4(0.0, 0.0, 0.0, 1.0));

            mat3 T = transpose(splat2World) * world2ndc * ndc2pix;
            vec3 normal = vec3(viewMatrix * vec4(L[0][2], L[1][2], L[2][2], 0.0));
        `;return e+=`

                mat4 splat2World4 = mat4(vec4(L[0], 0.0),
                                        vec4(L[1], 0.0),
                                        vec4(L[2], 0.0),
                                        vec4(splatCenter.x, splatCenter.y, splatCenter.z, 1.0));

                mat4 Tt = transpose(transpose(splat2World4) * world2ndc);

                vec4 tempPoint1 = Tt * vec4(1.0, 0.0, 0.0, 1.0);
                tempPoint1 /= tempPoint1.w;

                vec4 tempPoint2 = Tt * vec4(0.0, 1.0, 0.0, 1.0);
                tempPoint2 /= tempPoint2.w;

                vec4 center = Tt * vec4(0.0, 0.0, 0.0, 1.0);
                center /= center.w;

                vec2 basisVector1 = tempPoint1.xy - center.xy;
                vec2 basisVector2 = tempPoint2.xy - center.xy;

                vec2 basisVector1Screen = basisVector1 * 0.5 * viewport;
                vec2 basisVector2Screen = basisVector2 * 0.5 * viewport;

                const float minPix = 1.;
                if (length(basisVector1Screen) < minPix || length(basisVector2Screen) < minPix) {
                    
            vec3 T0 = vec3(T[0][0], T[0][1], T[0][2]);
            vec3 T1 = vec3(T[1][0], T[1][1], T[1][2]);
            vec3 T3 = vec3(T[2][0], T[2][1], T[2][2]);

            vec3 tempPoint = vec3(1.0, 1.0, -1.0);
            float distance = (T3.x * T3.x * tempPoint.x) + (T3.y * T3.y * tempPoint.y) + (T3.z * T3.z * tempPoint.z);
            vec3 f = (1.0 / distance) * tempPoint;
            if (abs(distance) < 0.00001) return;

            float pointImageX = (T0.x * T3.x * f.x) + (T0.y * T3.y * f.y) + (T0.z * T3.z * f.z);
            float pointImageY = (T1.x * T3.x * f.x) + (T1.y * T3.y * f.y) + (T1.z * T3.z * f.z);
            vec2 pointImage = vec2(pointImageX, pointImageY);

            float tempX = (T0.x * T0.x * f.x) + (T0.y * T0.y * f.y) + (T0.z * T0.z * f.z);
            float tempY = (T1.x * T1.x * f.x) + (T1.y * T1.y * f.y) + (T1.z * T1.z * f.z);
            vec2 temp = vec2(tempX, tempY);

            vec2 halfExtend = pointImage * pointImage - temp;
            vec2 extent = sqrt(max(vec2(0.0001), halfExtend));
            float radius = max(extent.x, extent.y);

            vec2 ndcOffset = ((position.xy * radius * 3.0) * basisViewport * 2.0);

            vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
            gl_Position = quadPos;

            vT = T;
            vQuadCenter = pointImage;
            vFragCoord = (quadPos.xy * 0.5 + 0.5) * viewport;
        
                } else {
                    vec2 ndcOffset = vec2(position.x * basisVector1 + position.y * basisVector2) * 3.0 * inverseFocalAdjustment;
                    vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
                    gl_Position = quadPos;

                    vT = T;
                    vQuadCenter = center.xy;
                    vFragCoord = (quadPos.xy * 0.5 + 0.5) * viewport;
                }
            `,e+=Qi.getVertexShaderFadeIn(),e+="}",e}static buildFragmentShader(){return`
            precision highp float;
            #include <common>

            uniform vec3 debugColor;

            varying vec4 vColor;
            varying vec2 vUv;
            varying vec2 vPosition;
            varying mat3 vT;
            varying vec2 vQuadCenter;
            varying vec2 vFragCoord;

            void main () {

                const float FilterInvSquare = 2.0;
                const float near_n = 0.2;
                const float T = 1.0;

                vec2 xy = vQuadCenter;
                vec3 Tu = vT[0];
                vec3 Tv = vT[1];
                vec3 Tw = vT[2];
                vec3 k = vFragCoord.x * Tw - Tu;
                vec3 l = vFragCoord.y * Tw - Tv;
                vec3 p = cross(k, l);
                if (p.z == 0.0) discard;
                vec2 s = vec2(p.x / p.z, p.y / p.z);
                float rho3d = (s.x * s.x + s.y * s.y); 
                vec2 d = vec2(xy.x - vFragCoord.x, xy.y - vFragCoord.y);
                float rho2d = FilterInvSquare * (d.x * d.x + d.y * d.y); 

                // compute intersection and depth
                float rho = min(rho3d, rho2d);
                float depth = (rho3d <= rho2d) ? (s.x * Tw.x + s.y * Tw.y) + Tw.z : Tw.z; 
                if (depth < near_n) discard;
                //  vec4 nor_o = collected_normal_opacity[j];
                //  float normal[3] = {nor_o.x, nor_o.y, nor_o.z};
                float opa = vColor.a;

                float power = -0.5f * rho;
                if (power > 0.0f) discard;

                // Eq. (2) from 3D Gaussian splatting paper.
                // Obtain alpha by multiplying with Gaussian opacity
                // and its exponential falloff from mean.
                // Avoid numerical instabilities (see paper appendix). 
                float alpha = min(0.99f, opa * exp(power));
                if (alpha < 1.0f / 255.0f) discard;
                float test_T = T * (1.0 - alpha);
                if (test_T < 0.0001)discard;

                float w = alpha * T;
                gl_FragColor = vec4(vColor.rgb, w);
            }
        `}}class Q0{static build(e){const t=new dn;t.setIndex([0,1,2,0,2,3]);const n=new Float32Array(12),i=new cn(n,3);t.setAttribute("position",i),i.setXYZ(0,-1,-1,0),i.setXYZ(1,-1,1,0),i.setXYZ(2,1,1,0),i.setXYZ(3,1,-1,0),i.needsUpdate=!0;const r=new eh().copy(t),o=new Uint32Array(e),a=new Ku(o,1,!1);return a.setUsage(mu),r.setAttribute("splatIndex",a),r.instanceCount=0,r}}class Y0 extends bt{constructor(e,t=new I,n=new gt,i=new I(1,1,1),r=1,o=1,a=!0){super(),this.splatBuffer=e,this.position.copy(t),this.quaternion.copy(n),this.scale.copy(i),this.transform=new ke,this.minimumAlpha=r,this.opacity=o,this.visible=a}copyTransformData(e){this.position.copy(e.position),this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.transform.copy(e.transform)}updateTransform(e){e?(this.matrixWorldAutoUpdate&&this.updateWorldMatrix(!0,!1),this.transform.copy(this.matrixWorld)):(this.matrixAutoUpdate&&this.updateMatrix(),this.transform.copy(this.matrix))}}class za{static idGen=0;constructor(e,t,n,i){this.min=new I().copy(e),this.max=new I().copy(t),this.boundingBox=new _n(this.min,this.max),this.center=new I().copy(this.max).sub(this.min).multiplyScalar(.5).add(this.min),this.depth=n,this.children=[],this.data=null,this.id=i||za.idGen++}}class ms{constructor(e,t){this.maxDepth=e,this.maxCentersPerNode=t,this.sceneDimensions=new I,this.sceneMin=new I,this.sceneMax=new I,this.rootNode=null,this.nodesWithIndexes=[],this.splatMesh=null}static convertWorkerSubTreeNode(e){const t=new I().fromArray(e.min),n=new I().fromArray(e.max),i=new za(t,n,e.depth,e.id);if(e.data.indexes){i.data={indexes:[]};for(let r of e.data.indexes)i.data.indexes.push(r)}if(e.children)for(let r of e.children)i.children.push(ms.convertWorkerSubTreeNode(r));return i}static convertWorkerSubTree(e,t){const n=new ms(e.maxDepth,e.maxCentersPerNode);n.sceneMin=new I().fromArray(e.sceneMin),n.sceneMax=new I().fromArray(e.sceneMax),n.splatMesh=t,n.rootNode=ms.convertWorkerSubTreeNode(e.rootNode);const i=(r,o)=>{r.children.length===0&&o(r);for(let a of r.children)i(a,o)};return n.nodesWithIndexes=[],i(n.rootNode,r=>{r.data&&r.data.indexes&&r.data.indexes.length>0&&n.nodesWithIndexes.push(r)}),n}}function K0(s){let e=0;class t{constructor(l,c){this.min=[l[0],l[1],l[2]],this.max=[c[0],c[1],c[2]]}containsPoint(l){return l[0]>=this.min[0]&&l[0]<=this.max[0]&&l[1]>=this.min[1]&&l[1]<=this.max[1]&&l[2]>=this.min[2]&&l[2]<=this.max[2]}}class n{constructor(l,c){this.maxDepth=l,this.maxCentersPerNode=c,this.sceneDimensions=[],this.sceneMin=[],this.sceneMax=[],this.rootNode=null,this.addedIndexes={},this.nodesWithIndexes=[],this.splatMesh=null,this.disposed=!1}}class i{constructor(l,c,d,u){this.min=[l[0],l[1],l[2]],this.max=[c[0],c[1],c[2]],this.center=[(c[0]-l[0])*.5+l[0],(c[1]-l[1])*.5+l[1],(c[2]-l[2])*.5+l[2]],this.depth=d,this.children=[],this.data=null,this.id=u||e++}}processSplatTreeNode=function(a,l,c,d){const u=l.data.indexes.length;if(u<a.maxCentersPerNode||l.depth>a.maxDepth){const x=[];for(let _=0;_<l.data.indexes.length;_++)a.addedIndexes[l.data.indexes[_]]||(x.push(l.data.indexes[_]),a.addedIndexes[l.data.indexes[_]]=!0);l.data.indexes=x,l.data.indexes.sort((_,S)=>_>S?1:-1),a.nodesWithIndexes.push(l);return}const h=[l.max[0]-l.min[0],l.max[1]-l.min[1],l.max[2]-l.min[2]],f=[h[0]*.5,h[1]*.5,h[2]*.5],g=[l.min[0]+f[0],l.min[1]+f[1],l.min[2]+f[2]],A=[new t([g[0]-f[0],g[1],g[2]-f[2]],[g[0],g[1]+f[1],g[2]]),new t([g[0],g[1],g[2]-f[2]],[g[0]+f[0],g[1]+f[1],g[2]]),new t([g[0],g[1],g[2]],[g[0]+f[0],g[1]+f[1],g[2]+f[2]]),new t([g[0]-f[0],g[1],g[2]],[g[0],g[1]+f[1],g[2]+f[2]]),new t([g[0]-f[0],g[1]-f[1],g[2]-f[2]],[g[0],g[1],g[2]]),new t([g[0],g[1]-f[1],g[2]-f[2]],[g[0]+f[0],g[1],g[2]]),new t([g[0],g[1]-f[1],g[2]],[g[0]+f[0],g[1],g[2]+f[2]]),new t([g[0]-f[0],g[1]-f[1],g[2]],[g[0],g[1],g[2]+f[2]])],m=[];for(let x=0;x<A.length;x++)m[x]=[];const p=[0,0,0];for(let x=0;x<u;x++){const _=l.data.indexes[x],S=c[_];p[0]=d[S],p[1]=d[S+1],p[2]=d[S+2];for(let C=0;C<A.length;C++)A[C].containsPoint(p)&&m[C].push(_)}for(let x=0;x<A.length;x++){const _=new i(A[x].min,A[x].max,l.depth+1);_.data={indexes:m[x]},l.children.push(_)}l.data={};for(let x of l.children)processSplatTreeNode(a,x,c,d)};const r=(a,l,c)=>{const d=[0,0,0],u=[0,0,0],h=[],f=Math.floor(a.length/4);for(let A=0;A<f;A++){const m=A*4,p=a[m],x=a[m+1],_=a[m+2],S=Math.round(a[m+3]);(A===0||p<d[0])&&(d[0]=p),(A===0||p>u[0])&&(u[0]=p),(A===0||x<d[1])&&(d[1]=x),(A===0||x>u[1])&&(u[1]=x),(A===0||_<d[2])&&(d[2]=_),(A===0||_>u[2])&&(u[2]=_),h.push(S)}const g=new n(l,c);return g.sceneMin=d,g.sceneMax=u,g.rootNode=new i(g.sceneMin,g.sceneMax,0),g.rootNode.data={indexes:h},g};function o(a,l,c){const d=[];for(let h of a){const f=Math.floor(h.length/4);for(let g=0;g<f;g++){const A=g*4,m=Math.round(h[A+3]);d[m]=A}}const u=[];for(let h of a){const f=r(h,l,c);u.push(f),processSplatTreeNode(f,f.rootNode,d,h)}s.postMessage({subTrees:u})}s.onmessage=a=>{a.data.process&&o(a.data.process.centers,a.data.process.maxDepth,a.data.process.maxCentersPerNode)}}function $0(s,e,t,n,i){s.postMessage({process:{centers:e,maxDepth:n,maxCentersPerNode:i}},t)}function j0(){return new Worker(URL.createObjectURL(new Blob(["(",K0.toString(),")(self)"],{type:"application/javascript"})))}class Z0{constructor(e,t){this.maxDepth=e,this.maxCentersPerNode=t,this.subTrees=[],this.splatMesh=null}dispose(){this.diposeSplatTreeWorker(),this.disposed=!0}diposeSplatTreeWorker(){this.splatTreeWorker&&this.splatTreeWorker.terminate(),this.splatTreeWorker=null}processSplatMesh=function(e,t=()=>!0,n,i){this.splatTreeWorker||(this.splatTreeWorker=j0()),this.splatMesh=e,this.subTrees=[];const r=new I,o=(a,l)=>{const c=new Float32Array(l*4);let d=0;for(let u=0;u<l;u++){const h=u+a;if(t(h)){e.getSplatCenter(h,r);const f=d*4;c[f]=r.x,c[f+1]=r.y,c[f+2]=r.z,c[f+3]=h,d++}}return c};return new Promise(a=>{const l=()=>this.disposed?(this.diposeSplatTreeWorker(),a(),!0):!1;n&&n(!1),jt(()=>{if(l())return;const c=[];if(e.dynamicMode){let d=0;for(let u=0;u<e.scenes.length;u++){const f=e.getScene(u).splatBuffer.getSplatCount(),g=o(d,f);c.push(g),d+=f}}else{const d=o(0,e.getSplatCount());c.push(d)}this.splatTreeWorker.onmessage=d=>{l()||d.data.subTrees&&(i&&i(!1),jt(()=>{if(!l()){for(let u of d.data.subTrees){const h=ms.convertWorkerSubTree(u,e);this.subTrees.push(h)}this.diposeSplatTreeWorker(),i&&i(!0),jt(()=>{a()})}}))},jt(()=>{if(l())return;n&&n(!0);const d=c.map(u=>u.buffer);$0(this.splatTreeWorker,c,d,this.maxDepth,this.maxCentersPerNode)})})})};countLeaves(){let e=0;return this.visitLeaves(()=>{e++}),e}visitLeaves(e){const t=(n,i)=>{n.children.length===0&&i(n);for(let r of n.children)t(r,i)};for(let n of this.subTrees)t(n.rootNode,e)}}function J0(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function eA(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(y){if(y==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),h=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),A=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=h>0,S=o||e.has("OES_texture_float"),C=_&&S,T=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:d,maxTextures:u,maxVertexTextures:h,maxTextureSize:f,maxCubemapSize:g,maxAttributes:A,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:_,floatFragmentTextures:S,floatVertexTextures:C,maxSamples:T}}const Ai={Default:0,Gradual:1,Instant:2},ti={None:0,Error:1,Warning:2,Info:3,Debug:4},gc=new dn,tA=new xi,rr=6,nA=4,iA=4,sA=4,rA=6,oA=8,mo=4,go=4,Ac=1,aA=.012,lA=.003,xc=1,Sc=16777216;class Lt extends Et{constructor(e=Fn.ThreeD,t=!1,n=!1,i=!1,r=1,o=!0,a=!1,l=!1,c=1024,d=ti.None,u=0,h=1,f=.3){super(gc,tA),this.renderer=void 0,this.splatRenderMode=e,this.dynamicMode=t,this.enableOptionalEffects=n,this.halfPrecisionCovariancesOnGPU=i,this.devicePixelRatio=r,this.enableDistancesComputationOnGPU=o,this.integerBasedDistancesComputation=a,this.antialiased=l,this.kernel2DSize=f,this.maxScreenSpaceSplatSize=c,this.logLevel=d,this.sphericalHarmonicsDegree=u,this.minSphericalHarmonicsDegree=0,this.sceneFadeInRateMultiplier=h,this.scenes=[],this.splatTree=null,this.baseSplatTree=null,this.splatDataTextures={},this.distancesTransformFeedback={id:null,vertexShader:null,fragmentShader:null,program:null,centersBuffer:null,sceneIndexesBuffer:null,outDistancesBuffer:null,centersLoc:-1,modelViewProjLoc:-1,sceneIndexesLoc:-1,transformsLocs:[]},this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSceneIndexMap=[],this.lastBuildSplatCount=0,this.lastBuildScenes=[],this.lastBuildMaxSplatCount=0,this.lastBuildSceneCount=0,this.firstRenderTime=-1,this.finalBuild=!1,this.webGLUtils=null,this.boundingBox=new _n,this.calculatedSceneCenter=new I,this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.visibleRegionChanging=!1,this.splatScale=1,this.pointCloudModeEnabled=!1,this.disposed=!1,this.lastRenderer=null,this.visible=!1}static buildScenes(e,t,n){const i=[];i.length=t.length;for(let r=0;r<t.length;r++){const o=t[r],a=n[r]||{};let l=a.position||[0,0,0],c=a.rotation||[0,0,0,1],d=a.scale||[1,1,1];const u=new I().fromArray(l),h=new gt().fromArray(c),f=new I().fromArray(d),g=Lt.createScene(o,u,h,f,a.splatAlphaRemovalThreshold||1,a.opacity,a.visible);e.add(g),i[r]=g}return i}static createScene(e,t,n,i,r,o=1,a=!0){return new Y0(e,t,n,i,r,o,a)}static buildSplatIndexMaps(e){const t=[],n=[];let i=0;for(let r=0;r<e.length;r++){const a=e[r].getMaxSplatCount();for(let l=0;l<a;l++)t[i]=l,n[i]=r,i++}return{localSplatIndexMap:t,sceneIndexMap:n}}buildSplatTree=function(e=[],t,n){return new Promise(i=>{this.disposeSplatTree(),this.baseSplatTree=new Z0(8,1e3);const r=performance.now(),o=new At;this.baseSplatTree.processSplatMesh(this,a=>{this.getSplatColor(a,o);const l=this.getSceneIndexForSplat(a),c=e[l]||1;return o.w>=c},t,n).then(()=>{const a=performance.now()-r;if(this.logLevel>=ti.Info&&console.log("SplatTree build: "+a+" ms"),this.disposed)i();else{this.splatTree=this.baseSplatTree,this.baseSplatTree=null;let l=0,c=0,d=0;this.splatTree.visitLeaves(u=>{const h=u.data.indexes.length;h>0&&(c+=h,d++,l++)}),this.logLevel>=ti.Info&&(console.log(`SplatTree leaves: ${this.splatTree.countLeaves()}`),console.log(`SplatTree leaves with splats:${l}`),c=c/d,console.log(`Avg splat count per node: ${c}`),console.log(`Total splat count: ${this.getSplatCount()}`)),i()}})})};build(e,t,n=!0,i=!1,r,o,a=!0){this.sceneOptions=t,this.finalBuild=i;const l=Lt.getTotalMaxSplatCountForSplatBuffers(e),c=Lt.buildScenes(this,e,t);if(n)for(let A=0;A<this.scenes.length&&A<c.length;A++){const m=c[A],p=this.getScene(A);m.copyTransformData(p)}this.scenes=c;let d=3;for(let A of e){const m=A.getMinSphericalHarmonicsDegree();m<d&&(d=m)}this.minSphericalHarmonicsDegree=Math.min(d,this.sphericalHarmonicsDegree);let u=!1;if(e.length!==this.lastBuildScenes.length)u=!0;else for(let A=0;A<e.length;A++)if(e[A]!==this.lastBuildScenes[A].splatBuffer){u=!0;break}let h=!0;if((this.scenes.length!==1||this.lastBuildSceneCount!==this.scenes.length||this.lastBuildMaxSplatCount!==l||u)&&(h=!1),!h){this.boundingBox=new _n,a||(this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.firstRenderTime=-1),this.lastBuildScenes=[],this.lastBuildSplatCount=0,this.lastBuildMaxSplatCount=0,this.disposeMeshData(),this.geometry=Q0.build(l),this.splatRenderMode===Fn.ThreeD?this.material=xr.build(this.dynamicMode,this.enableOptionalEffects,this.antialiased,this.maxScreenSpaceSplatSize,this.splatScale,this.pointCloudModeEnabled,this.minSphericalHarmonicsDegree,this.kernel2DSize):this.material=Sr.build(this.dynamicMode,this.enableOptionalEffects,this.splatScale,this.pointCloudModeEnabled,this.minSphericalHarmonicsDegree);const A=Lt.buildSplatIndexMaps(e);this.globalSplatIndexToLocalSplatIndexMap=A.localSplatIndexMap,this.globalSplatIndexToSceneIndexMap=A.sceneIndexMap}const f=this.getSplatCount(!0);this.enableDistancesComputationOnGPU&&this.setupDistancesComputationTransformFeedback();const g=this.refreshGPUDataFromSplatBuffers(h);for(let A=0;A<this.scenes.length;A++)this.lastBuildScenes[A]=this.scenes[A];return this.lastBuildSplatCount=f,this.lastBuildMaxSplatCount=this.getMaxSplatCount(),this.lastBuildSceneCount=this.scenes.length,i&&this.scenes.length>0&&this.buildSplatTree(t.map(A=>A.splatAlphaRemovalThreshold||1),r,o).then(()=>{this.onSplatTreeReadyCallback&&this.onSplatTreeReadyCallback(this.splatTree),this.onSplatTreeReadyCallback=null}),this.visible=this.scenes.length>0,g}freeIntermediateSplatData(){const e=t=>{delete t.source.data,delete t.image,t.onUpdate=null};delete this.splatDataTextures.baseData.covariances,delete this.splatDataTextures.baseData.centers,delete this.splatDataTextures.baseData.colors,delete this.splatDataTextures.baseData.sphericalHarmonics,delete this.splatDataTextures.centerColors.data,delete this.splatDataTextures.covariances.data,this.splatDataTextures.sphericalHarmonics&&delete this.splatDataTextures.sphericalHarmonics.data,this.splatDataTextures.sceneIndexes&&delete this.splatDataTextures.sceneIndexes.data,this.splatDataTextures.centerColors.texture.needsUpdate=!0,this.splatDataTextures.centerColors.texture.onUpdate=()=>{e(this.splatDataTextures.centerColors.texture)},this.splatDataTextures.covariances.texture.needsUpdate=!0,this.splatDataTextures.covariances.texture.onUpdate=()=>{e(this.splatDataTextures.covariances.texture)},this.splatDataTextures.sphericalHarmonics&&(this.splatDataTextures.sphericalHarmonics.texture?(this.splatDataTextures.sphericalHarmonics.texture.needsUpdate=!0,this.splatDataTextures.sphericalHarmonics.texture.onUpdate=()=>{e(this.splatDataTextures.sphericalHarmonics.texture)}):this.splatDataTextures.sphericalHarmonics.textures.forEach(t=>{t.needsUpdate=!0,t.onUpdate=()=>{e(t)}})),this.splatDataTextures.sceneIndexes&&(this.splatDataTextures.sceneIndexes.texture.needsUpdate=!0,this.splatDataTextures.sceneIndexes.texture.onUpdate=()=>{e(this.splatDataTextures.sceneIndexes.texture)})}dispose(){this.disposeMeshData(),this.disposeTextures(),this.disposeSplatTree(),this.enableDistancesComputationOnGPU&&(this.computeDistancesOnGPUSyncTimeout&&(clearTimeout(this.computeDistancesOnGPUSyncTimeout),this.computeDistancesOnGPUSyncTimeout=null),this.disposeDistancesComputationGPUResources()),this.scenes=[],this.distancesTransformFeedback={id:null,vertexShader:null,fragmentShader:null,program:null,centersBuffer:null,sceneIndexesBuffer:null,outDistancesBuffer:null,centersLoc:-1,modelViewProjLoc:-1,sceneIndexesLoc:-1,transformsLocs:[]},this.renderer=null,this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSceneIndexMap=[],this.lastBuildSplatCount=0,this.lastBuildScenes=[],this.lastBuildMaxSplatCount=0,this.lastBuildSceneCount=0,this.firstRenderTime=-1,this.finalBuild=!1,this.webGLUtils=null,this.boundingBox=new _n,this.calculatedSceneCenter=new I,this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.visibleRegionChanging=!1,this.splatScale=1,this.pointCloudModeEnabled=!1,this.disposed=!0,this.lastRenderer=null,this.visible=!1}disposeMeshData(){this.geometry&&this.geometry!==gc&&(this.geometry.dispose(),this.geometry=null),this.material&&(this.material.dispose(),this.material=null)}disposeTextures(){for(let e in this.splatDataTextures)if(this.splatDataTextures.hasOwnProperty(e)){const t=this.splatDataTextures[e];t.texture&&(t.texture.dispose(),t.texture=null)}this.splatDataTextures=null}disposeSplatTree(){this.splatTree&&(this.splatTree.dispose(),this.splatTree=null),this.baseSplatTree&&(this.baseSplatTree.dispose(),this.baseSplatTree=null)}getSplatTree(){return this.splatTree}onSplatTreeReady(e){this.onSplatTreeReadyCallback=e}getDataForDistancesComputation(e,t){const n=this.integerBasedDistancesComputation?this.getIntegerCenters(e,t,!0):this.getFloatCenters(e,t,!0),i=this.getSceneIndexes(e,t);return{centers:n,sceneIndexes:i}}refreshGPUDataFromSplatBuffers(e){const t=this.getSplatCount(!0);this.refreshDataTexturesFromSplatBuffers(e);const n=e?this.lastBuildSplatCount:0,{centers:i,sceneIndexes:r}=this.getDataForDistancesComputation(n,t-1);return this.enableDistancesComputationOnGPU&&this.refreshGPUBuffersForDistancesComputation(i,r,e),{from:n,to:t-1,count:t-n,centers:i,sceneIndexes:r}}refreshGPUBuffersForDistancesComputation(e,t,n=!1){const i=n?this.lastBuildSplatCount:0;this.updateGPUCentersBufferForDistancesComputation(n,e,i),this.updateGPUTransformIndexesBufferForDistancesComputation(n,t,i)}refreshDataTexturesFromSplatBuffers(e){const t=this.getSplatCount(!0),n=this.lastBuildSplatCount,i=t-1;e?this.updateBaseDataFromSplatBuffers(n,i):(this.setupDataTextures(),this.updateBaseDataFromSplatBuffers()),this.updateDataTexturesFromBaseData(n,i),this.updateVisibleRegion(e)}setupDataTextures(){const e=this.getMaxSplatCount(),t=this.getSplatCount(!0);this.disposeTextures();const n=(y,w)=>{const E=new Me(4096,1024);for(;E.x*E.y*y<e*w;)E.y*=2;return E},i=y=>y>=1?rA:iA,r=y=>{const w=i(y),E=n(w,6);return{elementsPerTexelStored:w,texSize:E}};let o=this.getTargetCovarianceCompressionLevel();const a=0,l=this.getTargetSphericalHarmonicsCompressionLevel();let c,d,u;if(this.splatRenderMode===Fn.ThreeD){const y=r(o);y.texSize.x*y.texSize.y>Sc&&o===0&&(o=1),c=new Float32Array(e*rr)}else d=new Float32Array(e*3),u=new Float32Array(e*4);const h=new Float32Array(e*3),f=new Uint8Array(e*4);let g=Float32Array;l===1?g=Uint16Array:l===2&&(g=Uint8Array);const A=qi(this.minSphericalHarmonicsDegree),m=this.minSphericalHarmonicsDegree?new g(e*A):void 0,p=n(go,4),x=new Uint32Array(p.x*p.y*go);Lt.updateCenterColorsPaddedData(0,t-1,h,f,x);const _=new Wn(x,p.x,p.y,Gi,ln);if(_.internalFormat="RGBA32UI",_.needsUpdate=!0,this.material.uniforms.centersColorsTexture.value=_,this.material.uniforms.centersColorsTextureSize.value.copy(p),this.material.uniformsNeedUpdate=!0,this.splatDataTextures={baseData:{covariances:c,scales:d,rotations:u,centers:h,colors:f,sphericalHarmonics:m},centerColors:{data:x,texture:_,size:p}},this.splatRenderMode===Fn.ThreeD){const y=r(o),w=y.elementsPerTexelStored,E=y.texSize;let v=o>=1?Uint32Array:Float32Array;const R=o>=1?oA:sA,B=new v(E.x*E.y*R);o===0?B.set(c):Lt.updatePaddedCompressedCovariancesTextureData(c,B,0,0,c.length);let F;if(o>=1)F=new Wn(B,E.x,E.y,Gi,ln),F.internalFormat="RGBA32UI",this.material.uniforms.covariancesTextureHalfFloat.value=F;else{F=new Wn(B,E.x,E.y,Ht,An),this.material.uniforms.covariancesTexture.value=F;const U=new Wn(new Uint32Array(32),2,2,Gi,ln);U.internalFormat="RGBA32UI",this.material.uniforms.covariancesTextureHalfFloat.value=U,U.needsUpdate=!0}F.needsUpdate=!0,this.material.uniforms.covariancesAreHalfFloat.value=o>=1?1:0,this.material.uniforms.covariancesTextureSize.value.copy(E),this.splatDataTextures.covariances={data:B,texture:F,size:E,compressionLevel:o,elementsPerTexelStored:w,elementsPerTexelAllocated:R}}else{const w=n(mo,6);let E=Float32Array,v=An;const R=new E(w.x*w.y*mo);Lt.updateScaleRotationsPaddedData(0,t-1,d,u,R);const B=new Wn(R,w.x,w.y,Ht,v);B.needsUpdate=!0,this.material.uniforms.scaleRotationsTexture.value=B,this.material.uniforms.scaleRotationsTextureSize.value.copy(w),this.splatDataTextures.scaleRotations={data:R,texture:B,size:w,compressionLevel:a}}if(m){const y=l===2?Cn:ns;let w=A;w%2!==0&&w++;const E=4,v=Ht;let R=n(E,w);if(R.x*R.y<=Sc){const B=R.x*R.y*E,F=new g(B);for(let z=0;z<t;z++){const N=A*z,W=w*z;for(let k=0;k<A;k++)F[W+k]=m[N+k]}const U=new Wn(F,R.x,R.y,v,y);U.needsUpdate=!0,this.material.uniforms.sphericalHarmonicsTexture.value=U,this.splatDataTextures.sphericalHarmonics={componentCount:A,paddedComponentCount:w,data:F,textureCount:1,texture:U,size:R,compressionLevel:l,elementsPerTexel:E}}else{const B=A/3;w=B,w%2!==0&&w++,R=n(E,w);const F=R.x*R.y*E,U=[this.material.uniforms.sphericalHarmonicsTextureR,this.material.uniforms.sphericalHarmonicsTextureG,this.material.uniforms.sphericalHarmonicsTextureB],z=[],N=[];for(let W=0;W<3;W++){const k=new g(F);z.push(k);for(let ee=0;ee<t;ee++){const ue=A*ee,Re=w*ee;if(B>=3){for(let Te=0;Te<3;Te++)k[Re+Te]=m[ue+W*3+Te];if(B>=8)for(let Te=0;Te<5;Te++)k[Re+3+Te]=m[ue+9+W*5+Te]}}const K=new Wn(k,R.x,R.y,v,y);N.push(K),K.needsUpdate=!0,U[W].value=K}this.material.uniforms.sphericalHarmonicsMultiTextureMode.value=1,this.splatDataTextures.sphericalHarmonics={componentCount:A,componentCountPerChannel:B,paddedComponentCount:w,data:z,textureCount:3,textures:N,size:R,compressionLevel:l,elementsPerTexel:E}}this.material.uniforms.sphericalHarmonicsTextureSize.value.copy(R),this.material.uniforms.sphericalHarmonics8BitMode.value=l===2?1:0;for(let B=0;B<this.scenes.length;B++){const F=this.scenes[B].splatBuffer;this.material.uniforms.sphericalHarmonics8BitCompressionRangeMin.value[B]=F.minSphericalHarmonicsCoeff,this.material.uniforms.sphericalHarmonics8BitCompressionRangeMax.value[B]=F.maxSphericalHarmonicsCoeff}this.material.uniformsNeedUpdate=!0}const S=n(Ac,4),C=new Uint32Array(S.x*S.y*Ac);for(let y=0;y<t;y++)C[y]=this.globalSplatIndexToSceneIndexMap[y];const T=new Wn(C,S.x,S.y,Cr,ln);T.internalFormat="R32UI",T.needsUpdate=!0,this.material.uniforms.sceneIndexesTexture.value=T,this.material.uniforms.sceneIndexesTextureSize.value.copy(S),this.material.uniformsNeedUpdate=!0,this.splatDataTextures.sceneIndexes={data:C,texture:T,size:S},this.material.uniforms.sceneCount.value=this.scenes.length}updateBaseDataFromSplatBuffers(e,t){const n=this.splatDataTextures.covariances,i=n?n.compressionLevel:void 0,r=this.splatDataTextures.scaleRotations,o=r?r.compressionLevel:void 0,a=this.splatDataTextures.sphericalHarmonics,l=a?a.compressionLevel:0;this.fillSplatDataArrays(this.splatDataTextures.baseData.covariances,this.splatDataTextures.baseData.scales,this.splatDataTextures.baseData.rotations,this.splatDataTextures.baseData.centers,this.splatDataTextures.baseData.colors,this.splatDataTextures.baseData.sphericalHarmonics,void 0,i,o,l,e,t,e)}updateDataTexturesFromBaseData(e,t){const n=this.splatDataTextures.covariances,i=n?n.compressionLevel:void 0,r=this.splatDataTextures.scaleRotations,o=r?r.compressionLevel:void 0,a=this.splatDataTextures.sphericalHarmonics,l=a?a.compressionLevel:0,c=this.splatDataTextures.centerColors,d=c.data,u=c.texture;Lt.updateCenterColorsPaddedData(e,t,this.splatDataTextures.baseData.centers,this.splatDataTextures.baseData.colors,d);const h=this.renderer?this.renderer.properties.get(u):null;if(!h||!h.__webglTexture?u.needsUpdate=!0:this.updateDataTexture(d,c.texture,c.size,h,go,nA,4,e,t),n){const x=n.texture,_=e*rr,S=t*rr;if(i===0)for(let T=_;T<=S;T++){const y=this.splatDataTextures.baseData.covariances[T];n.data[T]=y}else Lt.updatePaddedCompressedCovariancesTextureData(this.splatDataTextures.baseData.covariances,n.data,e*n.elementsPerTexelAllocated,_,S);const C=this.renderer?this.renderer.properties.get(x):null;!C||!C.__webglTexture?x.needsUpdate=!0:i===0?this.updateDataTexture(n.data,n.texture,n.size,C,n.elementsPerTexelStored,rr,4,e,t):this.updateDataTexture(n.data,n.texture,n.size,C,n.elementsPerTexelAllocated,n.elementsPerTexelAllocated,2,e,t)}if(r){const x=r.data,_=r.texture,S=6,C=o===0?4:2;Lt.updateScaleRotationsPaddedData(e,t,this.splatDataTextures.baseData.scales,this.splatDataTextures.baseData.rotations,x);const T=this.renderer?this.renderer.properties.get(_):null;!T||!T.__webglTexture?_.needsUpdate=!0:this.updateDataTexture(x,r.texture,r.size,T,mo,S,C,e,t)}const f=this.splatDataTextures.baseData.sphericalHarmonics;if(f){let x=4;l===1?x=2:l===2&&(x=1);const _=(T,y,w,E,v)=>{const R=this.renderer?this.renderer.properties.get(T):null;!R||!R.__webglTexture?T.needsUpdate=!0:this.updateDataTexture(E,T,y,R,w,v,x,e,t)},S=a.componentCount,C=a.paddedComponentCount;if(a.textureCount===1){const T=a.data;for(let y=e;y<=t;y++){const w=S*y,E=C*y;for(let v=0;v<S;v++)T[E+v]=f[w+v]}_(a.texture,a.size,a.elementsPerTexel,T,C)}else{const T=a.componentCountPerChannel;for(let y=0;y<3;y++){const w=a.data[y];for(let E=e;E<=t;E++){const v=S*E,R=C*E;if(T>=3){for(let B=0;B<3;B++)w[R+B]=f[v+y*3+B];if(T>=8)for(let B=0;B<5;B++)w[R+3+B]=f[v+9+y*5+B]}}_(a.textures[y],a.size,a.elementsPerTexel,w,C)}}}const g=this.splatDataTextures.sceneIndexes,A=g.data;for(let x=this.lastBuildSplatCount;x<=t;x++)A[x]=this.globalSplatIndexToSceneIndexMap[x];const m=g.texture,p=this.renderer?this.renderer.properties.get(m):null;!p||!p.__webglTexture?m.needsUpdate=!0:this.updateDataTexture(A,g.texture,g.size,p,1,1,1,this.lastBuildSplatCount,t)}getTargetCovarianceCompressionLevel(){return this.halfPrecisionCovariancesOnGPU?1:0}getTargetSphericalHarmonicsCompressionLevel(){return Math.max(1,this.getMaximumSplatBufferCompressionLevel())}getMaximumSplatBufferCompressionLevel(){let e;for(let t=0;t<this.scenes.length;t++){const i=this.getScene(t).splatBuffer;(t===0||i.compressionLevel>e)&&(e=i.compressionLevel)}return e}getMinimumSplatBufferCompressionLevel(){let e;for(let t=0;t<this.scenes.length;t++){const i=this.getScene(t).splatBuffer;(t===0||i.compressionLevel<e)&&(e=i.compressionLevel)}return e}static computeTextureUpdateRegion(e,t,n,i,r){const o=r/i,a=e*o,l=Math.floor(a/n),c=l*n*i,d=t*o,u=Math.floor(d/n),h=u*n*i+n*i;return{dataStart:c,dataEnd:h,startRow:l,endRow:u}}updateDataTexture(e,t,n,i,r,o,a,l,c){const d=this.renderer.getContext(),u=Lt.computeTextureUpdateRegion(l,c,n.x,r,o),h=u.dataEnd-u.dataStart,f=new e.constructor(e.buffer,u.dataStart*a,h),g=u.endRow-u.startRow+1,A=this.webGLUtils.convert(t.type),m=this.webGLUtils.convert(t.format,t.colorSpace),p=d.getParameter(d.TEXTURE_BINDING_2D);d.bindTexture(d.TEXTURE_2D,i.__webglTexture),d.texSubImage2D(d.TEXTURE_2D,0,0,u.startRow,n.x,g,m,A,f),d.bindTexture(d.TEXTURE_2D,p)}static updatePaddedCompressedCovariancesTextureData(e,t,n,i,r){let o=new DataView(t.buffer),a=n,l=0;for(let c=i;c<=r;c+=2)o.setUint16(a*2,e[c],!0),o.setUint16(a*2+2,e[c+1],!0),a+=2,l++,l>=3&&(a+=2,l=0)}static updateCenterColorsPaddedData(e,t,n,i,r){for(let o=e;o<=t;o++){const a=o*4,l=o*3,c=o*4;r[c]=zg(i,a),r[c+1]=ao(n[l]),r[c+2]=ao(n[l+1]),r[c+3]=ao(n[l+2])}}static updateScaleRotationsPaddedData(e,t,n,i,r){for(let a=e;a<=t;a++){const l=a*3,c=a*4,d=a*6;r[d]=n[l],r[d+1]=n[l+1],r[d+2]=n[l+2],r[d+3]=i[c],r[d+4]=i[c+1],r[d+5]=i[c+2]}}updateVisibleRegion(e){const t=this.getSplatCount(!0),n=new I;if(!e){const r=new I;this.scenes.forEach(o=>{r.add(o.splatBuffer.sceneCenter)}),r.multiplyScalar(1/this.scenes.length),this.calculatedSceneCenter.copy(r),this.material.uniforms.sceneCenter.value.copy(this.calculatedSceneCenter),this.material.uniformsNeedUpdate=!0}const i=e?this.lastBuildSplatCount:0;for(let r=i;r<t;r++){this.getSplatCenter(r,n,!0);const o=n.sub(this.calculatedSceneCenter).length();o>this.maxSplatDistanceFromSceneCenter&&(this.maxSplatDistanceFromSceneCenter=o)}this.maxSplatDistanceFromSceneCenter-this.visibleRegionBufferRadius>xc&&(this.visibleRegionBufferRadius=this.maxSplatDistanceFromSceneCenter,this.visibleRegionRadius=Math.max(this.visibleRegionBufferRadius-xc,0)),this.finalBuild&&(this.visibleRegionRadius=this.visibleRegionBufferRadius=this.maxSplatDistanceFromSceneCenter),this.updateVisibleRegionFadeDistance()}updateVisibleRegionFadeDistance(e=Ai.Default){const t=aA*this.sceneFadeInRateMultiplier,n=lA*this.sceneFadeInRateMultiplier,i=this.finalBuild?t:n,r=e===Ai.Default?i:n;this.visibleRegionFadeStartRadius=(this.visibleRegionRadius-this.visibleRegionFadeStartRadius)*r+this.visibleRegionFadeStartRadius;const a=(this.visibleRegionBufferRadius>0?this.visibleRegionFadeStartRadius/this.visibleRegionBufferRadius:0)>.99,l=a||e===Ai.Instant?1:0;this.material.uniforms.visibleRegionFadeStartRadius.value=this.visibleRegionFadeStartRadius,this.material.uniforms.visibleRegionRadius.value=this.visibleRegionRadius,this.material.uniforms.firstRenderTime.value=this.firstRenderTime,this.material.uniforms.currentTime.value=performance.now(),this.material.uniforms.fadeInComplete.value=l,this.material.uniformsNeedUpdate=!0,this.visibleRegionChanging=!a}updateRenderIndexes(e,t){const n=this.geometry;n.attributes.splatIndex.set(e),n.attributes.splatIndex.needsUpdate=!0,t>0&&this.firstRenderTime===-1&&(this.firstRenderTime=performance.now()),n.instanceCount=t,n.setDrawRange(0,t)}updateTransforms(){for(let e=0;e<this.scenes.length;e++)this.getScene(e).updateTransform(this.dynamicMode)}updateUniforms=(function(){const e=new Me;return function(t,n,i,r,o,a){if(this.getSplatCount()>0){if(e.set(t.x*this.devicePixelRatio,t.y*this.devicePixelRatio),this.material.uniforms.viewport.value.copy(e),this.material.uniforms.basisViewport.value.set(1/e.x,1/e.y),this.material.uniforms.focal.value.set(n,i),this.material.uniforms.orthographicMode.value=r?1:0,this.material.uniforms.orthoZoom.value=o,this.material.uniforms.inverseFocalAdjustment.value=a,this.dynamicMode)for(let c=0;c<this.scenes.length;c++)this.material.uniforms.transforms.value[c].copy(this.getScene(c).transform);if(this.enableOptionalEffects)for(let c=0;c<this.scenes.length;c++)this.material.uniforms.sceneOpacity.value[c]=mt(this.getScene(c).opacity,0,1),this.material.uniforms.sceneVisibility.value[c]=this.getScene(c).visible?1:0,this.material.uniformsNeedUpdate=!0;this.material.uniformsNeedUpdate=!0}}})();setSplatScale(e=1){this.splatScale=e,this.material.uniforms.splatScale.value=e,this.material.uniformsNeedUpdate=!0}getSplatScale(){return this.splatScale}setPointCloudModeEnabled(e){this.pointCloudModeEnabled=e,this.material.uniforms.pointCloudModeEnabled.value=e?1:0,this.material.uniformsNeedUpdate=!0}getPointCloudModeEnabled(){return this.pointCloudModeEnabled}getSplatDataTextures(){return this.splatDataTextures}getSplatCount(e=!1){return e?Lt.getTotalSplatCountForScenes(this.scenes):this.lastBuildSplatCount}static getTotalSplatCountForScenes(e){let t=0;for(let n of e)n&&n.splatBuffer&&(t+=n.splatBuffer.getSplatCount());return t}static getTotalSplatCountForSplatBuffers(e){let t=0;for(let n of e)t+=n.getSplatCount();return t}getMaxSplatCount(){return Lt.getTotalMaxSplatCountForScenes(this.scenes)}static getTotalMaxSplatCountForScenes(e){let t=0;for(let n of e)n&&n.splatBuffer&&(t+=n.splatBuffer.getMaxSplatCount());return t}static getTotalMaxSplatCountForSplatBuffers(e){let t=0;for(let n of e)t+=n.getMaxSplatCount();return t}disposeDistancesComputationGPUResources(){if(!this.renderer)return;const e=this.renderer.getContext();this.distancesTransformFeedback.vao&&(e.deleteVertexArray(this.distancesTransformFeedback.vao),this.distancesTransformFeedback.vao=null),this.distancesTransformFeedback.program&&(e.deleteProgram(this.distancesTransformFeedback.program),e.deleteShader(this.distancesTransformFeedback.vertexShader),e.deleteShader(this.distancesTransformFeedback.fragmentShader),this.distancesTransformFeedback.program=null,this.distancesTransformFeedback.vertexShader=null,this.distancesTransformFeedback.fragmentShader=null),this.disposeDistancesComputationGPUBufferResources(),this.distancesTransformFeedback.id&&(e.deleteTransformFeedback(this.distancesTransformFeedback.id),this.distancesTransformFeedback.id=null)}disposeDistancesComputationGPUBufferResources(){if(!this.renderer)return;const e=this.renderer.getContext();this.distancesTransformFeedback.centersBuffer&&(this.distancesTransformFeedback.centersBuffer=null,e.deleteBuffer(this.distancesTransformFeedback.centersBuffer)),this.distancesTransformFeedback.outDistancesBuffer&&(e.deleteBuffer(this.distancesTransformFeedback.outDistancesBuffer),this.distancesTransformFeedback.outDistancesBuffer=null)}setRenderer(e){if(e!==this.renderer){this.renderer=e;const t=this.renderer.getContext(),n=new J0(t),i=new eA(t,n,{});if(n.init(i),this.webGLUtils=new nd(t,n),this.enableDistancesComputationOnGPU&&this.getSplatCount()>0){this.setupDistancesComputationTransformFeedback();const{centers:r,sceneIndexes:o}=this.getDataForDistancesComputation(0,this.getSplatCount()-1);this.refreshGPUBuffersForDistancesComputation(r,o)}}}setupDistancesComputationTransformFeedback=(function(){let e;return function(){const t=this.getMaxSplatCount();if(!this.renderer)return;const n=this.lastRenderer!==this.renderer,i=e!==t;if(!n&&!i)return;n?this.disposeDistancesComputationGPUResources():i&&this.disposeDistancesComputationGPUBufferResources();const r=this.renderer.getContext(),o=(h,f,g)=>{const A=h.createShader(f);if(!A)return console.error("Fatal error: gl could not create a shader object."),null;if(h.shaderSource(A,g),h.compileShader(A),!h.getShaderParameter(A,h.COMPILE_STATUS)){let p="unknown";f===h.VERTEX_SHADER?p="vertex shader":f===h.FRAGMENT_SHADER&&(p="fragement shader");const x=h.getShaderInfoLog(A);return console.error("Failed to compile "+p+" with these errors:"+x),h.deleteShader(A),null}return A};let a;this.integerBasedDistancesComputation?(a=`#version 300 es
                in ivec4 center;
                flat out int distance;`,this.dynamicMode?a+=`
                        in uint sceneIndex;
                        uniform ivec4 transforms[${ct.MaxScenes}];
                        void main(void) {
                            ivec4 transform = transforms[sceneIndex];
                            distance = center.x * transform.x + center.y * transform.y + center.z * transform.z + transform.w * center.w;
                        }
                    `:a+=`
                        uniform ivec3 modelViewProj;
                        void main(void) {
                            distance = center.x * modelViewProj.x + center.y * modelViewProj.y + center.z * modelViewProj.z;
                        }
                    `):(a=`#version 300 es
                in vec4 center;
                flat out float distance;`,this.dynamicMode?a+=`
                        in uint sceneIndex;
                        uniform mat4 transforms[${ct.MaxScenes}];
                        void main(void) {
                            vec4 transformedCenter = transforms[sceneIndex] * vec4(center.xyz, 1.0);
                            distance = transformedCenter.z;
                        }
                    `:a+=`
                        uniform vec3 modelViewProj;
                        void main(void) {
                            distance = center.x * modelViewProj.x + center.y * modelViewProj.y + center.z * modelViewProj.z;
                        }
                    `);const l=`#version 300 es
                precision lowp float;
                out vec4 fragColor;
                void main(){}
            `,c=r.getParameter(r.VERTEX_ARRAY_BINDING),d=r.getParameter(r.CURRENT_PROGRAM),u=d?r.getProgramParameter(d,r.DELETE_STATUS):!1;if(n&&(this.distancesTransformFeedback.vao=r.createVertexArray()),r.bindVertexArray(this.distancesTransformFeedback.vao),n){const h=r.createProgram(),f=o(r,r.VERTEX_SHADER,a),g=o(r,r.FRAGMENT_SHADER,l);if(!f||!g)throw new Error("Could not compile shaders for distances computation on GPU.");if(r.attachShader(h,f),r.attachShader(h,g),r.transformFeedbackVaryings(h,["distance"],r.SEPARATE_ATTRIBS),r.linkProgram(h),!r.getProgramParameter(h,r.LINK_STATUS)){const m=r.getProgramInfoLog(h);throw console.error("Fatal error: Failed to link program: "+m),r.deleteProgram(h),r.deleteShader(g),r.deleteShader(f),new Error("Could not link shaders for distances computation on GPU.")}this.distancesTransformFeedback.program=h,this.distancesTransformFeedback.vertexShader=f,this.distancesTransformFeedback.vertexShader=g}if(r.useProgram(this.distancesTransformFeedback.program),this.distancesTransformFeedback.centersLoc=r.getAttribLocation(this.distancesTransformFeedback.program,"center"),this.dynamicMode){this.distancesTransformFeedback.sceneIndexesLoc=r.getAttribLocation(this.distancesTransformFeedback.program,"sceneIndex");for(let h=0;h<this.scenes.length;h++)this.distancesTransformFeedback.transformsLocs[h]=r.getUniformLocation(this.distancesTransformFeedback.program,`transforms[${h}]`)}else this.distancesTransformFeedback.modelViewProjLoc=r.getUniformLocation(this.distancesTransformFeedback.program,"modelViewProj");(n||i)&&(this.distancesTransformFeedback.centersBuffer=r.createBuffer(),r.bindBuffer(r.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),r.enableVertexAttribArray(this.distancesTransformFeedback.centersLoc),this.integerBasedDistancesComputation?r.vertexAttribIPointer(this.distancesTransformFeedback.centersLoc,4,r.INT,0,0):r.vertexAttribPointer(this.distancesTransformFeedback.centersLoc,4,r.FLOAT,!1,0,0),this.dynamicMode&&(this.distancesTransformFeedback.sceneIndexesBuffer=r.createBuffer(),r.bindBuffer(r.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),r.enableVertexAttribArray(this.distancesTransformFeedback.sceneIndexesLoc),r.vertexAttribIPointer(this.distancesTransformFeedback.sceneIndexesLoc,1,r.UNSIGNED_INT,0,0))),(n||i)&&(this.distancesTransformFeedback.outDistancesBuffer=r.createBuffer()),r.bindBuffer(r.ARRAY_BUFFER,this.distancesTransformFeedback.outDistancesBuffer),r.bufferData(r.ARRAY_BUFFER,t*4,r.STATIC_READ),n&&(this.distancesTransformFeedback.id=r.createTransformFeedback()),r.bindTransformFeedback(r.TRANSFORM_FEEDBACK,this.distancesTransformFeedback.id),r.bindBufferBase(r.TRANSFORM_FEEDBACK_BUFFER,0,this.distancesTransformFeedback.outDistancesBuffer),d&&u!==!0&&r.useProgram(d),c&&r.bindVertexArray(c),this.lastRenderer=this.renderer,e=t}})();updateGPUCentersBufferForDistancesComputation(e,t,n){if(!this.renderer)return;const i=this.renderer.getContext(),r=i.getParameter(i.VERTEX_ARRAY_BINDING);i.bindVertexArray(this.distancesTransformFeedback.vao);const o=this.integerBasedDistancesComputation?Uint32Array:Float32Array,a=16,l=n*a;if(i.bindBuffer(i.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),e)i.bufferSubData(i.ARRAY_BUFFER,l,t);else{const c=new o(this.getMaxSplatCount()*a);c.set(t),i.bufferData(i.ARRAY_BUFFER,c,i.STATIC_DRAW)}i.bindBuffer(i.ARRAY_BUFFER,null),r&&i.bindVertexArray(r)}updateGPUTransformIndexesBufferForDistancesComputation(e,t,n){if(!this.renderer||!this.dynamicMode)return;const i=this.renderer.getContext(),r=i.getParameter(i.VERTEX_ARRAY_BINDING);i.bindVertexArray(this.distancesTransformFeedback.vao);const o=n*4;if(i.bindBuffer(i.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),e)i.bufferSubData(i.ARRAY_BUFFER,o,t);else{const a=new Uint32Array(this.getMaxSplatCount()*4);a.set(t),i.bufferData(i.ARRAY_BUFFER,a,i.STATIC_DRAW)}i.bindBuffer(i.ARRAY_BUFFER,null),r&&i.bindVertexArray(r)}getSceneIndexes(e,t){let n;const i=t-e+1;n=new Uint32Array(i);for(let r=e;r<=t;r++)n[r]=this.globalSplatIndexToSceneIndexMap[r];return n}fillTransformsArray=(function(){const e=[];return function(t){e.length!==t.length&&(e.length=t.length);for(let n=0;n<this.scenes.length;n++){const r=this.getScene(n).transform.elements;for(let o=0;o<16;o++)e[n*16+o]=r[o]}t.set(e)}})();computeDistancesOnGPU=(function(){const e=new ke;return function(t,n){if(!this.renderer)return;const i=this.renderer.getContext(),r=i.getParameter(i.VERTEX_ARRAY_BINDING),o=i.getParameter(i.CURRENT_PROGRAM),a=o?i.getProgramParameter(o,i.DELETE_STATUS):!1;if(i.bindVertexArray(this.distancesTransformFeedback.vao),i.useProgram(this.distancesTransformFeedback.program),i.enable(i.RASTERIZER_DISCARD),this.dynamicMode)for(let d=0;d<this.scenes.length;d++)if(e.copy(this.getScene(d).transform),e.premultiply(t),this.integerBasedDistancesComputation){const u=Lt.getIntegerMatrixArray(e),h=[u[2],u[6],u[10],u[14]];i.uniform4i(this.distancesTransformFeedback.transformsLocs[d],h[0],h[1],h[2],h[3])}else i.uniformMatrix4fv(this.distancesTransformFeedback.transformsLocs[d],!1,e.elements);else if(this.integerBasedDistancesComputation){const d=Lt.getIntegerMatrixArray(t),u=[d[2],d[6],d[10]];i.uniform3i(this.distancesTransformFeedback.modelViewProjLoc,u[0],u[1],u[2])}else{const d=[t.elements[2],t.elements[6],t.elements[10]];i.uniform3f(this.distancesTransformFeedback.modelViewProjLoc,d[0],d[1],d[2])}i.bindBuffer(i.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),i.enableVertexAttribArray(this.distancesTransformFeedback.centersLoc),this.integerBasedDistancesComputation?i.vertexAttribIPointer(this.distancesTransformFeedback.centersLoc,4,i.INT,0,0):i.vertexAttribPointer(this.distancesTransformFeedback.centersLoc,4,i.FLOAT,!1,0,0),this.dynamicMode&&(i.bindBuffer(i.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),i.enableVertexAttribArray(this.distancesTransformFeedback.sceneIndexesLoc),i.vertexAttribIPointer(this.distancesTransformFeedback.sceneIndexesLoc,1,i.UNSIGNED_INT,0,0)),i.bindTransformFeedback(i.TRANSFORM_FEEDBACK,this.distancesTransformFeedback.id),i.bindBufferBase(i.TRANSFORM_FEEDBACK_BUFFER,0,this.distancesTransformFeedback.outDistancesBuffer),i.beginTransformFeedback(i.POINTS),i.drawArrays(i.POINTS,0,this.getSplatCount()),i.endTransformFeedback(),i.bindBufferBase(i.TRANSFORM_FEEDBACK_BUFFER,0,null),i.bindTransformFeedback(i.TRANSFORM_FEEDBACK,null),i.disable(i.RASTERIZER_DISCARD);const l=i.fenceSync(i.SYNC_GPU_COMMANDS_COMPLETE,0);i.flush();const c=new Promise(d=>{const u=()=>{if(this.disposed)d();else switch(i.clientWaitSync(l,0,0)){case i.TIMEOUT_EXPIRED:return this.computeDistancesOnGPUSyncTimeout=setTimeout(u),this.computeDistancesOnGPUSyncTimeout;case i.WAIT_FAILED:throw new Error("should never get here");default:this.computeDistancesOnGPUSyncTimeout=null,i.deleteSync(l);const A=i.getParameter(i.VERTEX_ARRAY_BINDING);i.bindVertexArray(this.distancesTransformFeedback.vao),i.bindBuffer(i.ARRAY_BUFFER,this.distancesTransformFeedback.outDistancesBuffer),i.getBufferSubData(i.ARRAY_BUFFER,0,n),i.bindBuffer(i.ARRAY_BUFFER,null),A&&i.bindVertexArray(A),d()}};this.computeDistancesOnGPUSyncTimeout=setTimeout(u)});return o&&a!==!0&&i.useProgram(o),r&&i.bindVertexArray(r),c}})();getLocalSplatParameters(e,t,n){n==null&&(n=!this.dynamicMode),t.splatBuffer=this.getSplatBufferForSplat(e),t.localIndex=this.getSplatLocalIndex(e),t.sceneTransform=n?this.getSceneTransformForSplat(e):null}fillSplatDataArrays(e,t,n,i,r,o,a,l=0,c=0,d=1,u,h,f=0,g){const A=new I;A.x=void 0,A.y=void 0,this.splatRenderMode===Fn.ThreeD?A.z=void 0:A.z=1;const m=new ke;let p=0,x=this.scenes.length-1;g!=null&&g>=0&&g<=this.scenes.length&&(p=g,x=g);for(let _=p;_<=x;_++){a==null&&(a=!this.dynamicMode);const S=this.getScene(_),C=S.splatBuffer;let T;if(a&&(this.getSceneTransform(_,m),T=m),e&&C.fillSplatCovarianceArray(e,T,u,h,f,l),t||n){if(!t||!n)throw new Error('SplatMesh::fillSplatDataArrays() -> "scales" and "rotations" must both be valid.');C.fillSplatScaleRotationArray(t,n,T,u,h,f,c,A)}i&&C.fillSplatCenterArray(i,T,u,h,f),r&&C.fillSplatColorArray(r,S.minimumAlpha,u,h,f),o&&C.fillSphericalHarmonicsArray(o,this.minSphericalHarmonicsDegree,T,u,h,f,d),f+=C.getSplatCount()}}getIntegerCenters(e,t,n=!1){const i=t-e+1,r=new Float32Array(i*3);this.fillSplatDataArrays(null,null,null,r,null,null,void 0,void 0,void 0,void 0,e);let o,a=n?4:3;o=new Int32Array(i*a);for(let l=0;l<i;l++){for(let c=0;c<3;c++)o[l*a+c]=Math.round(r[l*3+c]*1e3);n&&(o[l*a+3]=1e3)}return o}getFloatCenters(e,t,n=!1){const i=t-e+1,r=new Float32Array(i*3);if(this.fillSplatDataArrays(null,null,null,r,null,null,void 0,void 0,void 0,void 0,e),!n)return r;let o=new Float32Array(i*4);for(let a=0;a<i;a++){for(let l=0;l<3;l++)o[a*4+l]=r[a*3+l];o[a*4+3]=1}return o}getSplatCenter=(function(){const e={};return function(t,n,i){this.getLocalSplatParameters(t,e,i),e.splatBuffer.getSplatCenter(e.localIndex,n,e.sceneTransform)}})();getSplatScaleAndRotation=(function(){const e={},t=new I;return function(n,i,r,o){this.getLocalSplatParameters(n,e,o),t.x=void 0,t.y=void 0,t.z=void 0,this.splatRenderMode===Fn.TwoD&&(t.z=0),e.splatBuffer.getSplatScaleAndRotation(e.localIndex,i,r,e.sceneTransform,t)}})();getSplatColor=(function(){const e={};return function(t,n){this.getLocalSplatParameters(t,e),e.splatBuffer.getSplatColor(e.localIndex,n)}})();getSceneTransform(e,t){const n=this.getScene(e);n.updateTransform(this.dynamicMode),t.copy(n.transform)}getScene(e){if(e<0||e>=this.scenes.length)throw new Error("SplatMesh::getScene() -> Invalid scene index.");return this.scenes[e]}getSceneCount(){return this.scenes.length}getSplatBufferForSplat(e){return this.getScene(this.globalSplatIndexToSceneIndexMap[e]).splatBuffer}getSceneIndexForSplat(e){return this.globalSplatIndexToSceneIndexMap[e]}getSceneTransformForSplat(e){return this.getScene(this.globalSplatIndexToSceneIndexMap[e]).transform}getSplatLocalIndex(e){return this.globalSplatIndexToLocalSplatIndexMap[e]}static getIntegerMatrixArray(e){const t=e.elements,n=[];for(let i=0;i<16;i++)n[i]=Math.round(t[i]*1e3);return n}computeBoundingBox(e=!1,t){let n=this.getSplatCount();if(t!=null){if(t<0||t>=this.scenes.length)throw new Error("SplatMesh::computeBoundingBox() -> Invalid scene index.");n=this.scenes[t].splatBuffer.getSplatCount()}const i=new Float32Array(n*3);this.fillSplatDataArrays(null,null,null,i,null,null,e,void 0,void 0,void 0,void 0,t);const r=new I,o=new I;for(let a=0;a<n;a++){const l=a*3,c=i[l],d=i[l+1],u=i[l+2];(a===0||c<r.x)&&(r.x=c),(a===0||d<r.y)&&(r.y=d),(a===0||u<r.z)&&(r.z=u),(a===0||c>o.x)&&(o.x=c),(a===0||d>o.y)&&(o.y=d),(a===0||u>o.z)&&(o.z=u)}return new _n(r,o)}}var cA="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEbA2AAAGAQf39/f39/f39/f39/f39/fwBgAAF/AhIBA2VudgZtZW1vcnkCAwCAgAQDBAMAAQIHVAQRX193YXNtX2NhbGxfY3RvcnMAABhfX3dhc21fYXBwbHlfZGF0YV9yZWxvY3MAAAtzb3J0SW5kZXhlcwABE2Vtc2NyaXB0ZW5fdGxzX2luaXQAAgqWEAMDAAELihAEAXwDewN/A30gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEBA0AgAyABQQJ0IgVqIAIgACAFaigCAEECdGooAgAiBTYCACAFIAogBSAKSBshCiAFIA0gBSANShshDSABQQFqIgEgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiFWooAgAiFkECdGooAgAiFEcEQAJ/IAX9CQI4IAggFEEGdGoiDv0JAgwgDioCHP0gASAOKgIs/SACIA4qAjz9IAP95gEgBf0JAiggDv0JAgggDioCGP0gASAOKgIo/SACIA4qAjj9IAP95gEgBf0JAgggDv0JAgAgDioCEP0gASAOKgIg/SACIA4qAjD9IAP95gEgBf0JAhggDv0JAgQgDioCFP0gASAOKgIk/SACIA4qAjT9IAP95gH95AH95AH95AEiEf1f/QwAAAAAAECPQAAAAAAAQI9AIhL98gEiE/0hASIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDgJ/IBP9IQAiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgL/REgDv0cAQJ/IBEgEf0NCAkKCwwNDg8AAAAAAAAAAP1fIBL98gEiEf0hACIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAv9HAICfyAR/SEBIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4C/0cAyESIBQhDwsgAyAVaiABIBZBBHRq/QAAACAS/bUBIhH9GwAgEf0bAWogEf0bAmogEf0bA2oiDjYCACAOIAogCiAOShshCiAOIA0gDSAOSBshDSACQQFqIgIgC0cNAAsMAwsCfyAFKgIIu/0UIAUqAhi7/SIB/QwAAAAAAECPQAAAAAAAQI9A/fIBIhH9IQEiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIQ4CfyAR/SEAIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyECAn8gBSoCKLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEFQfj///8HIQpBiICAgHghDSALIAxNDQIgAv0RIA79HAEgBf0cAiESIAwhBQNAIAMgBUECdCICaiABIAAgAmooAgBBBHRq/QAAACAS/bUBIhH9GwAgEf0bAWogEf0bAmoiAjYCACACIAogAiAKSBshCiACIA0gAiANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEBA0AgAyABQQJ0IgVqAn8gAiAAIAVqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAFBAWoiASALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIRcgBSoCGCEYIAUqAgghGUH4////ByEKQYiAgIB4IQ0gDCEFA0ACfyAXIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCAZIAIqAgCUIBggAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIUaigCAEECdCIVaigCACIORwRAIAX9CQI4IAggDkEGdGoiD/0JAgwgDyoCHP0gASAPKgIs/SACIA8qAjz9IAP95gEgBf0JAiggD/0JAgggDyoCGP0gASAPKgIo/SACIA8qAjj9IAP95gEgBf0JAgggD/0JAgAgDyoCEP0gASAPKgIg/SACIA8qAjD9IAP95gEgBf0JAhggD/0JAgQgDyoCFP0gASAPKgIk/SACIA8qAjT9IAP95gH95AH95AH95AEhESAOIQ8LIAMgFGoCfyAR/R8DIAEgFUECdCIOQQxyaioCAJQgEf0fAiABIA5BCHJqKgIAlCAR/R8AIAEgDmoqAgCUIBH9HwEgASAOQQRyaioCAJSSkpK7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAsiDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSACQQFqIgIgC0cNAAsMAQtBiICAgHghDUH4////ByEKCyALIAxLBEAgCUEBa7MgDbIgCrKTlSEXIAwhDQNAAn8gFyADIA1BAnRqIgEoAgAgCmuylCIYi0MAAABPXQRAIBioDAELQYCAgIB4CyEOIAEgDjYCACAEIA5BAnRqIgEgASgCAEEBajYCACANQQFqIg0gC0cNAAsLIAlBAk8EQCAEKAIAIQ1BASEKA0AgBCAKQQJ0aiIBIAEoAgAgDWoiDTYCACAKQQFqIgogCUcNAAsLIAxBAEoEQCAMIQoDQCAGIApBAWsiAUECdCICaiAAIAJqKAIANgIAIApBAUshAiABIQogAg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCwsEAEEACw==",_c="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACEgEDZW52Bm1lbW9yeQIDAICABAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQqiDwICAAucDwMBfAd9Bn8gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEFA0AgAyAFQQJ0IgFqIAIgACABaigCAEECdGooAgAiATYCACABIAogASAKSBshCiABIA0gASANShshDSAFQQFqIgUgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiGmooAgBBAnQiG2ooAgAiDkcEQAJ/IAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRgCfyARIA8qAiyUIBIgDyoCKJQgEyAPKgIglCAUIA8qAiSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRkCfyARIA8qAhyUIBIgDyoCGJQgEyAPKgIQlCAUIA8qAhSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRwCfyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIR0gDiEPCyADIBpqIAEgG0ECdGoiDigCBCAcbCAOKAIAIB1saiAOKAIIIBlsaiAOKAIMIBhsaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAii7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshAgJ/IAUqAhi7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshByALIAxNAn8gBSoCCLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEPQfj///8HIQpBiICAgHghDQ0CIAwhBQNAIAMgBUECdCIIaiABIAAgCGooAgBBBHRqIggoAgQgB2wgCCgCACAPbGogCCgCCCACbGoiCDYCACAIIAogCCAKSBshCiAIIA0gCCANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEFA0AgAyAFQQJ0IgFqAn8gAiAAIAFqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAVBAWoiBSALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIREgBSoCGCESIAUqAgghE0H4////ByEKQYiAgIB4IQ0gDCEFA0ACfyARIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCATIAIqAgCUIBIgAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIYaigCAEECdCIZaigCACIORwRAIAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSIRUgESAPKgIslCASIA8qAiiUIBMgDyoCIJQgFCAPKgIklJKSkiEWIBEgDyoCHJQgEiAPKgIYlCATIA8qAhCUIBQgDyoCFJSSkpIhFyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSIREgDiEPCyADIBhqAn8gFSABIBlBAnRqIg4qAgyUIBYgDioCCJQgESAOKgIAlCAXIA4qAgSUkpKSu0QAAAAAAACwQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIg42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gAkEBaiICIAtHDQALDAELQYiAgIB4IQ1B+P///wchCgsgCyAMSwRAIAlBAWuzIA2yIAqyk5UhESAMIQ0DQAJ/IBEgAyANQQJ0aiIBKAIAIAprspQiEotDAAAAT10EQCASqAwBC0GAgICAeAshDiABIA42AgAgBCAOQQJ0aiIBIAEoAgBBAWo2AgAgDUEBaiINIAtHDQALCyAJQQJPBEAgBCgCACENQQEhCgNAIAQgCkECdGoiASABKAIAIA1qIg02AgAgCkEBaiIKIAlHDQALCyAMQQBKBEAgDCEKA0AgBiAKQQFrIgFBAnQiAmogACACaigCADYCACAKQQFLIAEhCg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCws=",dA="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQrrDwICAAvlDwQBfAN7B30DfyALIAprIQwCQAJAIA4EQCANBEBB+P///wchCkGIgICAeCENIAsgDE0NAyAMIQUDQCADIAVBAnQiAWogAiAAIAFqKAIAQQJ0aigCACIBNgIAIAEgCiABIApIGyEKIAEgDSABIA1KGyENIAVBAWoiBSALRw0ACwwDCyAPBEAgCyAMTQ0CQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIcaigCACIdQQJ0aigCACIbRwRAAn8gBf0JAjggCCAbQQZ0aiIO/QkCDCAOKgIc/SABIA4qAiz9IAIgDioCPP0gA/3mASAF/QkCKCAO/QkCCCAOKgIY/SABIA4qAij9IAIgDioCOP0gA/3mASAF/QkCCCAO/QkCACAOKgIQ/SABIA4qAiD9IAIgDioCMP0gA/3mASAF/QkCGCAO/QkCBCAOKgIU/SABIA4qAiT9IAIgDioCNP0gA/3mAf3kAf3kAf3kASIR/V/9DAAAAAAAQI9AAAAAAABAj0AiEv3yASIT/SEBIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOAn8gE/0hACIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAv9ESAO/RwBAn8gESAR/Q0ICQoLDA0ODwABAgMAAQID/V8gEv3yASIR/SEAIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4C/0cAgJ/IBH9IQEiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgL/RwDIRIgGyEPCyADIBxqIAEgHUEEdGr9AAAAIBL9tQEiEf0bACAR/RsBaiAR/RsCaiAR/RsDaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAgi7/RQgBSoCGLv9IgH9DAAAAAAAQI9AAAAAAABAj0D98gEiEf0hASIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDgJ/IBH9IQAiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLAn8gBSoCKLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEFQfj///8HIQpBiICAgHghDSALIAxNDQL9ESAO/RwBIAX9HAIhEiAMIQUDQCADIAVBAnQiAmogASAAIAJqKAIAQQR0av0AAAAgEv21ASIR/RsAIBH9GwFqIBH9GwJqIgI2AgAgAiAKIAIgCkgbIQogAiANIAIgDUobIQ0gBUEBaiIFIAtHDQALDAILIA0EQEH4////ByEKQYiAgIB4IQ0gCyAMTQ0CIAwhBQNAIAMgBUECdCIBagJ/IAIgACABaigCAEECdGoqAgC7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAsiDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgD0UEQCALIAxNDQEgBSoCKCEUIAUqAhghFSAFKgIIIRZB+P///wchCkGIgICAeCENIAwhBQNAAn8gFCABIAAgBUECdCIHaigCAEEEdGoiAioCCJQgFiACKgIAlCAVIAIqAgSUkpK7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDiADIAdqIA42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gBUEBaiIFIAtHDQALDAILIAsgDE0NAEF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiG2ooAgBBAnQiHGooAgAiDkcEQCAFKgI4IhQgCCAOQQZ0aiIPKgI8lCAFKgIoIhUgDyoCOJQgBSoCCCIWIA8qAjCUIAUqAhgiFyAPKgI0lJKSkiEYIBQgDyoCLJQgFSAPKgIolCAWIA8qAiCUIBcgDyoCJJSSkpIhGSAUIA8qAhyUIBUgDyoCGJQgFiAPKgIQlCAXIA8qAhSUkpKSIRogFCAPKgIMlCAVIA8qAgiUIBYgDyoCAJQgFyAPKgIElJKSkiEUIA4hDwsgAyAbagJ/IBggASAcQQJ0aiIOKgIMlCAZIA4qAgiUIBQgDioCAJQgGiAOKgIElJKSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAJBAWoiAiALRw0ACwwBC0GIgICAeCENQfj///8HIQoLIAsgDEsEQCAJQQFrsyANsiAKspOVIRQgDCENA0ACfyAUIAMgDUECdGoiASgCACAKa7KUIhWLQwAAAE9dBEAgFagMAQtBgICAgHgLIQ4gASAONgIAIAQgDkECdGoiASABKAIAQQFqNgIAIA1BAWoiDSALRw0ACwsgCUECTwRAIAQoAgAhDUEBIQoDQCAEIApBAnRqIgEgASgCACANaiINNgIAIApBAWoiCiAJRw0ACwsgDEEASgRAIAwhCgNAIAYgCkEBayIBQQJ0IgJqIAAgAmooAgA2AgAgCkEBSyABIQoNAAsLIAsgDEoEQCALIQoDQCAGIAsgBCADIApBAWsiCkECdCIBaigCAEECdGoiAigCACIFa0ECdGogACABaigCADYCACACIAVBAWs2AgAgCiAMSg0ACwsL",uA="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQqiDwICAAucDwMBfAd9Bn8gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEFA0AgAyAFQQJ0IgFqIAIgACABaigCAEECdGooAgAiATYCACABIAogASAKSBshCiABIA0gASANShshDSAFQQFqIgUgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiGmooAgBBAnQiG2ooAgAiDkcEQAJ/IAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRgCfyARIA8qAiyUIBIgDyoCKJQgEyAPKgIglCAUIA8qAiSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRkCfyARIA8qAhyUIBIgDyoCGJQgEyAPKgIQlCAUIA8qAhSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRwCfyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIR0gDiEPCyADIBpqIAEgG0ECdGoiDigCBCAcbCAOKAIAIB1saiAOKAIIIBlsaiAOKAIMIBhsaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAii7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshAgJ/IAUqAhi7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshByALIAxNAn8gBSoCCLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEPQfj///8HIQpBiICAgHghDQ0CIAwhBQNAIAMgBUECdCIIaiABIAAgCGooAgBBBHRqIggoAgQgB2wgCCgCACAPbGogCCgCCCACbGoiCDYCACAIIAogCCAKSBshCiAIIA0gCCANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEFA0AgAyAFQQJ0IgFqAn8gAiAAIAFqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAVBAWoiBSALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIREgBSoCGCESIAUqAgghE0H4////ByEKQYiAgIB4IQ0gDCEFA0ACfyARIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCATIAIqAgCUIBIgAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIYaigCAEECdCIZaigCACIORwRAIAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSIRUgESAPKgIslCASIA8qAiiUIBMgDyoCIJQgFCAPKgIklJKSkiEWIBEgDyoCHJQgEiAPKgIYlCATIA8qAhCUIBQgDyoCFJSSkpIhFyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSIREgDiEPCyADIBhqAn8gFSABIBlBAnRqIg4qAgyUIBYgDioCCJQgESAOKgIAlCAXIA4qAgSUkpKSu0QAAAAAAACwQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIg42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gAkEBaiICIAtHDQALDAELQYiAgIB4IQ1B+P///wchCgsgCyAMSwRAIAlBAWuzIA2yIAqyk5UhESAMIQ0DQAJ/IBEgAyANQQJ0aiIBKAIAIAprspQiEotDAAAAT10EQCASqAwBC0GAgICAeAshDiABIA42AgAgBCAOQQJ0aiIBIAEoAgBBAWo2AgAgDUEBaiINIAtHDQALCyAJQQJPBEAgBCgCACENQQEhCgNAIAQgCkECdGoiASABKAIAIA1qIg02AgAgCkEBaiIKIAlHDQALCyAMQQBKBEAgDCEKA0AgBiAKQQFrIgFBAnQiAmogACACaigCADYCACAKQQFLIAEhCg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCws=";function hA(s){let e,t,n,i,r,o,a,l,c,d,u,h,f,g,A,m,p,x,_,S;function C(T,y,w,E,v,R,B){const F=performance.now();if(!n&&(new Uint32Array(t,a,v.byteLength/S.BytesPerInt).set(v),new Float32Array(t,d,B.byteLength/S.BytesPerFloat).set(B),E)){let k;i?k=new Int32Array(t,u,R.byteLength/S.BytesPerInt):k=new Float32Array(t,u,R.byteLength/S.BytesPerFloat),k.set(R)}m||(m=new Uint32Array(x)),new Float32Array(t,A,16).set(w),new Uint32Array(t,f,x).set(m),e.exports.sortIndexes(a,g,u,h,f,A,l,c,d,x,T,y,o,E,i,r);const U={sortDone:!0,splatSortCount:T,splatRenderCount:y,sortTime:0};if(!n){const N=new Uint32Array(t,l,y);(!p||p.length<y)&&(p=new Uint32Array(y)),p.set(N),U.sortedIndexes=p}const z=performance.now();U.sortTime=z-F,s.postMessage(U)}s.onmessage=T=>{if(T.data.centers)centers=T.data.centers,sceneIndexes=T.data.sceneIndexes,i?new Int32Array(t,g+T.data.range.from*S.BytesPerInt*4,T.data.range.count*4).set(new Int32Array(centers)):new Float32Array(t,g+T.data.range.from*S.BytesPerFloat*4,T.data.range.count*4).set(new Float32Array(centers)),r&&new Uint32Array(t,c+T.data.range.from*4,T.data.range.count).set(new Uint32Array(sceneIndexes)),_=T.data.range.from+T.data.range.count;else if(T.data.sort){const y=Math.min(T.data.sort.splatRenderCount||0,_),w=Math.min(T.data.sort.splatSortCount||0,_),E=T.data.sort.usePrecomputedDistances;let v,R,B;n||(v=T.data.sort.indexesToSort,B=T.data.sort.transforms,E&&(R=T.data.sort.precomputedDistances)),C(w,y,T.data.sort.modelViewProj,E,v,R,B)}else if(T.data.init){S=T.data.init.Constants,o=T.data.init.splatCount,n=T.data.init.useSharedMemory,i=T.data.init.integerBasedSort,r=T.data.init.dynamicMode,x=T.data.init.distanceMapRange,_=0;const y=i?S.BytesPerInt*4:S.BytesPerFloat*4,w=new Uint8Array(T.data.init.sorterWasmBytes),E=16*S.BytesPerFloat,v=o*S.BytesPerInt,R=o*y,B=E,F=i?o*S.BytesPerInt:o*S.BytesPerFloat,U=o*S.BytesPerInt,z=o*S.BytesPerInt,N=i?x*S.BytesPerInt*2:x*S.BytesPerFloat*2,W=r?o*S.BytesPerInt:0,k=r?S.MaxScenes*E:0,K=S.MemoryPageSize*32,ee=v+R+B+F+U+N+z+W+k+K,ue=Math.floor(ee/S.MemoryPageSize)+1,Re={module:{},env:{memory:new WebAssembly.Memory({initial:ue,maximum:ue,shared:!0})}};WebAssembly.compile(w).then(Te=>WebAssembly.instantiate(Te,Re)).then(Te=>{e=Te,a=0,g=a+v,A=g+R,u=A+B,h=u+F,f=h+U,l=f+N,c=l+z,d=c+W,t=Re.env.memory.buffer,n?s.postMessage({sortSetupPhase1Complete:!0,indexesToSortBuffer:t,indexesToSortOffset:a,sortedIndexesBuffer:t,sortedIndexesOffset:l,precomputedDistancesBuffer:t,precomputedDistancesOffset:u,transformsBuffer:t,transformsOffset:d}):s.postMessage({sortSetupPhase1Complete:!0})})}}}function fA(s,e,t,n,i,r=ct.DefaultSplatSortDistanceMapPrecision){const o=new Worker(URL.createObjectURL(new Blob(["(",hA.toString(),")(self)"],{type:"application/javascript"})));let a=cA;const l=Ca()?sd():null;!t&&!e?(a=_c,l&&l.major<=16&&l.minor<4&&(a=uA)):t?e||l&&l.major<=16&&l.minor<4&&(a=dA):a=_c;const c=atob(a),d=new Uint8Array(c.length);for(let u=0;u<c.length;u++)d[u]=c.charCodeAt(u);return o.postMessage({init:{sorterWasmBytes:d.buffer,splatCount:s,useSharedMemory:e,integerBasedSort:n,dynamicMode:i,distanceMapRange:1<<r,Constants:{BytesPerFloat:ct.BytesPerFloat,BytesPerInt:ct.BytesPerInt,MemoryPageSize:ct.MemoryPageSize,MaxScenes:ct.MaxScenes}}}),o}const Qn={None:0,VR:1,AR:2};class ts{static createButton(e,t={}){const n=document.createElement("button");function i(){let c=null;async function d(f){f.addEventListener("end",u),await e.xr.setSession(f),n.textContent="EXIT VR",c=f}function u(){c.removeEventListener("end",u),n.textContent="ENTER VR",c=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="ENTER VR";const h={...t,optionalFeatures:["local-floor","bounded-floor","layers",...t.optionalFeatures||[]]};n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){c===null?navigator.xr.requestSession("immersive-vr",h).then(d):(c.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",h).then(d).catch(f=>{console.warn(f)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",h).then(d).catch(f=>{console.warn(f)})}function r(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function o(){r(),n.textContent="VR NOT SUPPORTED"}function a(c){r(),console.warn("Exception when trying to call xr.isSessionSupported",c),n.textContent="VR NOT ALLOWED"}function l(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return n.id="VRButton",n.style.display="none",l(n),navigator.xr.isSessionSupported("immersive-vr").then(function(c){c?i():o(),c&&ts.xrSessionIsGranted&&n.click()}).catch(a),n;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",l(c),c}}static registerSessionGrantedListener(){if(typeof navigator<"u"&&"xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{ts.xrSessionIsGranted=!0})}}}ts.xrSessionIsGranted=!1;ts.registerSessionGrantedListener();class pA{static createButton(e,t={}){const n=document.createElement("button");function i(){if(t.domOverlay===void 0){const h=document.createElement("div");h.style.display="none",document.body.appendChild(h);const f=document.createElementNS("http://www.w3.org/2000/svg","svg");f.setAttribute("width",38),f.setAttribute("height",38),f.style.position="absolute",f.style.right="20px",f.style.top="20px",f.addEventListener("click",function(){c.end()}),h.appendChild(f);const g=document.createElementNS("http://www.w3.org/2000/svg","path");g.setAttribute("d","M 12,12 L 28,28 M 28,12 12,28"),g.setAttribute("stroke","#fff"),g.setAttribute("stroke-width",2),f.appendChild(g),t.optionalFeatures===void 0&&(t.optionalFeatures=[]),t.optionalFeatures.push("dom-overlay"),t.domOverlay={root:h}}let c=null;async function d(h){h.addEventListener("end",u),e.xr.setReferenceSpaceType("local"),await e.xr.setSession(h),n.textContent="STOP AR",t.domOverlay.root.style.display="",c=h}function u(){c.removeEventListener("end",u),n.textContent="START AR",t.domOverlay.root.style.display="none",c=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="START AR",n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){c===null?navigator.xr.requestSession("immersive-ar",t).then(d):(c.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(d).catch(h=>{console.warn(h)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(d).catch(h=>{console.warn(h)})}function r(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function o(){r(),n.textContent="AR NOT SUPPORTED"}function a(c){r(),console.warn("Exception when trying to call xr.isSessionSupported",c),n.textContent="AR NOT ALLOWED"}function l(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return n.id="ARButton",n.style.display="none",l(n),navigator.xr.isSessionSupported("immersive-ar").then(function(c){c?i():o()}).catch(a),n;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",l(c),c}}}const gs={Always:0,OnChange:1,Never:2},mA=50,gA=.75,AA=15e5,xA=10,SA=2.5,_A=60;class Vi{constructor(e={}){if(e.cameraUp||(e.cameraUp=[0,1,0]),this.cameraUp=new I().fromArray(e.cameraUp),e.initialCameraPosition||(e.initialCameraPosition=[0,10,15]),this.initialCameraPosition=new I().fromArray(e.initialCameraPosition),e.initialCameraLookAt||(e.initialCameraLookAt=[0,0,0]),this.initialCameraLookAt=new I().fromArray(e.initialCameraLookAt),this.dropInMode=e.dropInMode||!1,(e.selfDrivenMode===void 0||e.selfDrivenMode===null)&&(e.selfDrivenMode=!0),this.selfDrivenMode=e.selfDrivenMode&&!this.dropInMode,this.selfDrivenUpdateFunc=this.selfDrivenUpdate.bind(this),e.useBuiltInControls===void 0&&(e.useBuiltInControls=!0),this.useBuiltInControls=e.useBuiltInControls,this.rootElement=e.rootElement,this.ignoreDevicePixelRatio=e.ignoreDevicePixelRatio||!1,this.devicePixelRatio=this.ignoreDevicePixelRatio?1:window.devicePixelRatio||1,this.halfPrecisionCovariancesOnGPU=e.halfPrecisionCovariancesOnGPU||!1,this.threeScene=e.threeScene,this.renderer=e.renderer,this.camera=e.camera,this.gpuAcceleratedSort=e.gpuAcceleratedSort||!1,(e.integerBasedSort===void 0||e.integerBasedSort===null)&&(e.integerBasedSort=!0),this.integerBasedSort=e.integerBasedSort,(e.sharedMemoryForWorkers===void 0||e.sharedMemoryForWorkers===null)&&(e.sharedMemoryForWorkers=!0),this.sharedMemoryForWorkers=e.sharedMemoryForWorkers,this.dynamicScene=!!e.dynamicScene,this.antialiased=e.antialiased||!1,this.kernel2DSize=e.kernel2DSize===void 0?.3:e.kernel2DSize,this.webXRMode=e.webXRMode||Qn.None,this.webXRMode!==Qn.None&&(this.gpuAcceleratedSort=!1),this.webXRActive=!1,this.webXRSessionInit=e.webXRSessionInit||{},this.renderMode=e.renderMode||gs.Always,this.sceneRevealMode=e.sceneRevealMode||Ai.Default,this.focalAdjustment=e.focalAdjustment||1,this.maxScreenSpaceSplatSize=e.maxScreenSpaceSplatSize||1024,this.logLevel=e.logLevel||ti.None,this.sphericalHarmonicsDegree=e.sphericalHarmonicsDegree||0,this.enableOptionalEffects=e.enableOptionalEffects||!1,(e.enableSIMDInSort===void 0||e.enableSIMDInSort===null)&&(e.enableSIMDInSort=!0),this.enableSIMDInSort=e.enableSIMDInSort,(e.inMemoryCompressionLevel===void 0||e.inMemoryCompressionLevel===null)&&(e.inMemoryCompressionLevel=0),this.inMemoryCompressionLevel=e.inMemoryCompressionLevel,(e.optimizeSplatData===void 0||e.optimizeSplatData===null)&&(e.optimizeSplatData=!0),this.optimizeSplatData=e.optimizeSplatData,(e.freeIntermediateSplatData===void 0||e.freeIntermediateSplatData===null)&&(e.freeIntermediateSplatData=!1),this.freeIntermediateSplatData=e.freeIntermediateSplatData,Ca()){const n=sd();n.major<17&&(this.enableSIMDInSort=!1),n.major<16&&(this.sharedMemoryForWorkers=!1)}(e.splatRenderMode===void 0||e.splatRenderMode===null)&&(e.splatRenderMode=Fn.ThreeD),this.splatRenderMode=e.splatRenderMode,this.sceneFadeInRateMultiplier=e.sceneFadeInRateMultiplier||1,this.splatSortDistanceMapPrecision=e.splatSortDistanceMapPrecision||ct.DefaultSplatSortDistanceMapPrecision;const t=this.integerBasedSort?20:24;this.splatSortDistanceMapPrecision=mt(this.splatSortDistanceMapPrecision,10,t),this.onSplatMeshChangedCallback=null,this.createSplatMesh(),this.controls=null,this.perspectiveControls=null,this.orthographicControls=null,this.orthographicCamera=null,this.perspectiveCamera=null,this.showMeshCursor=!1,this.showControlPlane=!1,this.showInfo=!1,this.sceneHelper=null,this.sortWorker=null,this.sortRunning=!1,this.splatRenderCount=0,this.splatSortCount=0,this.lastSplatSortCount=0,this.sortWorkerIndexesToSort=null,this.sortWorkerSortedIndexes=null,this.sortWorkerPrecomputedDistances=null,this.sortWorkerTransforms=null,this.preSortMessages=[],this.runAfterNextSort=[],this.selfDrivenModeRunning=!1,this.splatRenderReady=!1,this.raycaster=new q0,this.infoPanel=null,this.startInOrthographicMode=!1,this.currentFPS=0,this.lastSortTime=0,this.consecutiveRenderFrames=0,this.previousCameraTarget=new I,this.nextCameraTarget=new I,this.mousePosition=new Me,this.mouseDownPosition=new Me,this.mouseDownTime=null,this.resizeObserver=null,this.mouseMoveListener=null,this.mouseDownListener=null,this.mouseUpListener=null,this.keyDownListener=null,this.sortPromise=null,this.sortPromiseResolver=null,this.splatSceneDownloadPromises={},this.splatSceneDownloadAndBuildPromise=null,this.splatSceneRemovalPromise=null,this.loadingSpinner=new Oa(null,this.rootElement||document.body),this.loadingSpinner.hide(),this.loadingProgressBar=new k0(this.rootElement||document.body),this.loadingProgressBar.hide(),this.infoPanel=new H0(this.rootElement||document.body),this.infoPanel.hide(),this.usingExternalCamera=!!(this.dropInMode||this.camera),this.usingExternalRenderer=!!(this.dropInMode||this.renderer),this.initialized=!1,this.disposing=!1,this.disposed=!1,this.disposePromise=null,this.dropInMode||this.init()}createSplatMesh(){this.splatMesh=new Lt(this.splatRenderMode,this.dynamicScene,this.enableOptionalEffects,this.halfPrecisionCovariancesOnGPU,this.devicePixelRatio,this.gpuAcceleratedSort,this.integerBasedSort,this.antialiased,this.maxScreenSpaceSplatSize,this.logLevel,this.sphericalHarmonicsDegree,this.sceneFadeInRateMultiplier,this.kernel2DSize),this.splatMesh.frustumCulled=!1,this.onSplatMeshChangedCallback&&this.onSplatMeshChangedCallback()}init(){this.initialized||(this.rootElement||(this.usingExternalRenderer?this.rootElement=this.renderer.domElement||document.body:(this.rootElement=document.createElement("div"),this.rootElement.style.width="100%",this.rootElement.style.height="100%",this.rootElement.style.position="absolute",document.body.appendChild(this.rootElement))),this.setupCamera(),this.setupRenderer(),this.setupWebXR(this.webXRSessionInit),this.setupControls(),this.setupEventHandlers(),this.threeScene=this.threeScene||new Yu,this.sceneHelper=new ps(this.threeScene),this.sceneHelper.setupMeshCursor(),this.sceneHelper.setupFocusMarker(),this.sceneHelper.setupControlPlane(),this.loadingProgressBar.setContainer(this.rootElement),this.loadingSpinner.setContainer(this.rootElement),this.infoPanel.setContainer(this.rootElement),this.initialized=!0)}setupCamera(){if(!this.usingExternalCamera){const e=new Me;this.getRenderDimensions(e),this.perspectiveCamera=new on(mA,e.x/e.y,.1,1e3),this.orthographicCamera=new va(e.x/-2,e.x/2,e.y/2,e.y/-2,.1,1e3),this.camera=this.startInOrthographicMode?this.orthographicCamera:this.perspectiveCamera,this.camera.position.copy(this.initialCameraPosition),this.camera.up.copy(this.cameraUp).normalize(),this.camera.lookAt(this.initialCameraLookAt)}}setupRenderer(){if(!this.usingExternalRenderer){const e=new Me;this.getRenderDimensions(e),this.renderer=new Ng({antialias:!1,precision:"highp"}),this.renderer.setPixelRatio(this.devicePixelRatio),this.renderer.autoClear=!0,this.renderer.setClearColor(new tt(0),0),this.renderer.setSize(e.x,e.y),this.resizeObserver=new ResizeObserver(()=>{this.getRenderDimensions(e),this.renderer.setSize(e.x,e.y),this.forceRenderNextFrame()}),this.resizeObserver.observe(this.rootElement),this.rootElement.appendChild(this.renderer.domElement)}}setupWebXR(e){this.webXRMode&&(this.webXRMode===Qn.VR?this.rootElement.appendChild(ts.createButton(this.renderer,e)):this.webXRMode===Qn.AR&&this.rootElement.appendChild(pA.createButton(this.renderer,e)),this.renderer.xr.addEventListener("sessionstart",t=>{this.webXRActive=!0}),this.renderer.xr.addEventListener("sessionend",t=>{this.webXRActive=!1}),this.renderer.xr.enabled=!0,this.camera.position.copy(this.initialCameraPosition),this.camera.up.copy(this.cameraUp).normalize(),this.camera.lookAt(this.initialCameraLookAt))}setupControls(){if(this.useBuiltInControls&&this.webXRMode===Qn.None){this.usingExternalCamera?this.camera.isOrthographicCamera?this.orthographicControls=new sr(this.camera,this.renderer.domElement):this.perspectiveControls=new sr(this.camera,this.renderer.domElement):(this.perspectiveControls=new sr(this.perspectiveCamera,this.renderer.domElement),this.orthographicControls=new sr(this.orthographicCamera,this.renderer.domElement));for(let e of[this.orthographicControls,this.perspectiveControls])e&&(e.listenToKeyEvents(window),e.rotateSpeed=.5,e.maxPolarAngle=Math.PI*.75,e.minPolarAngle=.1,e.enableDamping=!0,e.dampingFactor=.05,e.target.copy(this.initialCameraLookAt),e.update());this.controls=this.camera.isOrthographicCamera?this.orthographicControls:this.perspectiveControls,this.controls.update()}}setupEventHandlers(){this.useBuiltInControls&&this.webXRMode===Qn.None&&(this.mouseMoveListener=this.onMouseMove.bind(this),this.renderer.domElement.addEventListener("pointermove",this.mouseMoveListener,!1),this.mouseDownListener=this.onMouseDown.bind(this),this.renderer.domElement.addEventListener("pointerdown",this.mouseDownListener,!1),this.mouseUpListener=this.onMouseUp.bind(this),this.renderer.domElement.addEventListener("pointerup",this.mouseUpListener,!1),this.keyDownListener=this.onKeyDown.bind(this),window.addEventListener("keydown",this.keyDownListener,!1))}removeEventHandlers(){this.useBuiltInControls&&(this.renderer.domElement.removeEventListener("pointermove",this.mouseMoveListener),this.mouseMoveListener=null,this.renderer.domElement.removeEventListener("pointerdown",this.mouseDownListener),this.mouseDownListener=null,this.renderer.domElement.removeEventListener("pointerup",this.mouseUpListener),this.mouseUpListener=null,window.removeEventListener("keydown",this.keyDownListener),this.keyDownListener=null)}setRenderMode(e){this.renderMode=e}setActiveSphericalHarmonicsDegrees(e){this.splatMesh.material.uniforms.sphericalHarmonicsDegree.value=e,this.splatMesh.material.uniformsNeedUpdate=!0}onSplatMeshChanged(e){this.onSplatMeshChangedCallback=e}onKeyDown=(function(){const e=new I,t=new ke,n=new ke;return function(i){switch(e.set(0,0,-1),e.transformDirection(this.camera.matrixWorld),t.makeRotationAxis(e,Math.PI/128),n.makeRotationAxis(e,-Math.PI/128),i.code){case"KeyG":this.focalAdjustment+=.02,this.forceRenderNextFrame();break;case"KeyF":this.focalAdjustment-=.02,this.forceRenderNextFrame();break;case"ArrowLeft":this.camera.up.transformDirection(t);break;case"ArrowRight":this.camera.up.transformDirection(n);break;case"KeyC":this.showMeshCursor=!this.showMeshCursor;break;case"KeyU":this.showControlPlane=!this.showControlPlane;break;case"KeyI":this.showInfo=!this.showInfo,this.showInfo?this.infoPanel.show():this.infoPanel.hide();break;case"KeyO":this.usingExternalCamera||this.setOrthographicMode(!this.camera.isOrthographicCamera);break;case"KeyP":this.usingExternalCamera||this.splatMesh.setPointCloudModeEnabled(!this.splatMesh.getPointCloudModeEnabled());break;case"Equal":this.usingExternalCamera||this.splatMesh.setSplatScale(this.splatMesh.getSplatScale()+.05);break;case"Minus":this.usingExternalCamera||this.splatMesh.setSplatScale(Math.max(this.splatMesh.getSplatScale()-.05,0));break}}})();onMouseMove(e){this.mousePosition.set(e.offsetX,e.offsetY)}onMouseDown(){this.mouseDownPosition.copy(this.mousePosition),this.mouseDownTime=Ni()}onMouseUp=(function(){const e=new Me;return function(t){e.copy(this.mousePosition).sub(this.mouseDownPosition),Ni()-this.mouseDownTime<.5&&e.length()<2&&this.onMouseClick(t)}})();onMouseClick(e){this.mousePosition.set(e.offsetX,e.offsetY),this.checkForFocalPointChange()}checkForFocalPointChange=(function(){const e=new Me,t=new I,n=[];return function(){if(!this.transitioningCameraTarget&&(this.getRenderDimensions(e),n.length=0,this.raycaster.setFromCameraAndScreenPosition(this.camera,this.mousePosition,e),this.raycaster.intersectSplatMesh(this.splatMesh,n),n.length>0)){const r=n[0].origin;t.copy(r).sub(this.camera.position),t.length()>gA&&(this.previousCameraTarget.copy(this.controls.target),this.nextCameraTarget.copy(r),this.transitioningCameraTarget=!0,this.transitioningCameraTargetStartTime=Ni())}}})();getRenderDimensions(e){this.rootElement?(e.x=this.rootElement.offsetWidth,e.y=this.rootElement.offsetHeight):this.renderer.getSize(e)}setOrthographicMode(e){if(e===this.camera.isOrthographicCamera)return;const t=this.camera,n=e?this.orthographicCamera:this.perspectiveCamera;if(n.position.copy(t.position),n.up.copy(t.up),n.rotation.copy(t.rotation),n.quaternion.copy(t.quaternion),n.matrix.copy(t.matrix),this.camera=n,this.controls){const i=a=>{a.saveState(),a.reset()},r=this.controls,o=e?this.orthographicControls:this.perspectiveControls;i(o),i(r),o.target.copy(r.target),e?Vi.setCameraZoomFromPosition(n,t,r):Vi.setCameraPositionFromZoom(n,t,o),this.controls=o,this.camera.lookAt(this.controls.target)}}static setCameraPositionFromZoom=(function(){const e=new I;return function(t,n,i){const r=1/(n.zoom*.001);e.copy(i.target).sub(t.position).normalize().multiplyScalar(r).negate(),t.position.copy(i.target).add(e)}})();static setCameraZoomFromPosition=(function(){const e=new I;return function(t,n,i){const r=e.copy(i.target).sub(n.position).length();t.zoom=1/(r*.001)}})();updateSplatMesh=(function(){const e=new Me;return function(){if(!this.splatMesh)return;if(this.splatMesh.getSplatCount()>0){this.splatMesh.updateVisibleRegionFadeDistance(this.sceneRevealMode),this.splatMesh.updateTransforms(),this.getRenderDimensions(e);const n=this.camera.projectionMatrix.elements[0]*.5*this.devicePixelRatio*e.x,i=this.camera.projectionMatrix.elements[5]*.5*this.devicePixelRatio*e.y,r=this.camera.isOrthographicCamera?1/this.devicePixelRatio:1,o=this.focalAdjustment*r,a=1/o;this.adjustForWebXRStereo(e),this.splatMesh.updateUniforms(e,n*o,i*o,this.camera.isOrthographicCamera,this.camera.zoom||1,a)}}})();adjustForWebXRStereo(e){if(this.camera&&this.webXRActive){const n=this.renderer.xr.getCamera().projectionMatrix.elements[0],i=this.camera.projectionMatrix.elements[0];e.x*=i/n}}isLoadingOrUnloading(){return Object.keys(this.splatSceneDownloadPromises).length>0||this.splatSceneDownloadAndBuildPromise!==null||this.splatSceneRemovalPromise!==null}isDisposingOrDisposed(){return this.disposing||this.disposed}addSplatSceneDownloadPromise(e){this.splatSceneDownloadPromises[e.id]=e}removeSplatSceneDownloadPromise(e){delete this.splatSceneDownloadPromises[e.id]}setSplatSceneDownloadAndBuildPromise(e){this.splatSceneDownloadAndBuildPromise=e}clearSplatSceneDownloadAndBuildPromise(){this.splatSceneDownloadAndBuildPromise=null}addSplatScene(e,t={}){if(this.isLoadingOrUnloading())throw new Error("Cannot add splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot add splat scene after dispose() is called.");t.progressiveLoad&&this.splatMesh.scenes&&this.splatMesh.scenes.length>0&&(console.log('addSplatScene(): "progressiveLoad" option ignore because there are multiple splat scenes'),t.progressiveLoad=!1);const n=t.format!==void 0&&t.format!==null?t.format:uc(e),i=Vi.isProgressivelyLoadable(n)&&t.progressiveLoad,r=t.showLoadingUI!==void 0&&t.showLoadingUI!==null?t.showLoadingUI:!0;let o=null;r&&(this.loadingSpinner.removeAllTasks(),o=this.loadingSpinner.addTask("Downloading..."));const a=()=>{this.loadingProgressBar.hide(),this.loadingSpinner.removeAllTasks()},l=(A,m,p)=>{if(r)if(p===Ct.Downloading)if(A==100)this.loadingSpinner.setMessageForTask(o,"Download complete!");else if(i)this.loadingSpinner.setMessageForTask(o,"Downloading splats...");else{const x=m?`: ${m}`:"...";this.loadingSpinner.setMessageForTask(o,`Downloading${x}`)}else p===Ct.Processing&&this.loadingSpinner.setMessageForTask(o,"Processing splats...")};let c=!1,d=0;const u=(A,m)=>{r&&((A&&i||m&&!i)&&(this.loadingSpinner.removeTask(o),!m&&!c&&this.loadingProgressBar.show()),i&&(m?(c=!0,this.loadingProgressBar.hide()):this.loadingProgressBar.setProgress(d)))},h=(A,m,p)=>{d=A,l(A,m,p),t.onProgress&&t.onProgress(A,m,p)},f=(A,m,p)=>{!i&&t.onProgress&&t.onProgress(0,"0%",Ct.Processing);const x={rotation:t.rotation||t.orientation,position:t.position,scale:t.scale,splatAlphaRemovalThreshold:t.splatAlphaRemovalThreshold};return this.addSplatBuffers([A],[x],p,m&&r,r,i,i).then(()=>{!i&&t.onProgress&&t.onProgress(100,"100%",Ct.Processing),u(m,p)})};return(i?this.downloadAndBuildSingleSplatSceneProgressiveLoad.bind(this):this.downloadAndBuildSingleSplatSceneStandardLoad.bind(this))(e,n,t.splatAlphaRemovalThreshold,f.bind(this),h,a.bind(this),t.headers)}downloadAndBuildSingleSplatSceneStandardLoad(e,t,n,i,r,o,a){const l=this.downloadSplatSceneToSplatBuffer(e,n,r,!1,void 0,t,a),c=lo(l.abortHandler);return l.then(d=>(this.removeSplatSceneDownloadPromise(l),i(d,!0,!0).then(()=>{c.resolve(),this.clearSplatSceneDownloadAndBuildPromise()}))).catch(d=>{o&&o(),this.clearSplatSceneDownloadAndBuildPromise(),this.removeSplatSceneDownloadPromise(l),c.reject(this.updateError(d,`Viewer::addSplatScene -> Could not load file ${e}`))}),this.addSplatSceneDownloadPromise(l),this.setSplatSceneDownloadAndBuildPromise(c.promise),c.promise}downloadAndBuildSingleSplatSceneProgressiveLoad(e,t,n,i,r,o,a){let l=0,c=!1;const d=[],u=()=>{if(d.length>0&&!c&&!this.isDisposingOrDisposed()){c=!0;const m=d.shift();i(m.splatBuffer,m.firstBuild,m.finalBuild).then(()=>{c=!1,m.firstBuild?g.resolve():m.finalBuild&&(A.resolve(),this.clearSplatSceneDownloadAndBuildPromise()),d.length>0&&jt(()=>u())})}},h=(m,p)=>{this.isDisposingOrDisposed()||(p||d.length===0||m.getSplatCount()>d[0].splatBuffer.getSplatCount())&&(d.push({splatBuffer:m,firstBuild:l===0,finalBuild:p}),l++,u())},f=this.downloadSplatSceneToSplatBuffer(e,n,r,!0,h,t,a),g=lo(f.abortHandler),A=lo();return this.addSplatSceneDownloadPromise(f),this.setSplatSceneDownloadAndBuildPromise(A.promise),f.then(()=>{this.removeSplatSceneDownloadPromise(f)}).catch(m=>{this.clearSplatSceneDownloadAndBuildPromise(),this.removeSplatSceneDownloadPromise(f);const p=this.updateError(m,"Viewer::addSplatScene -> Could not load one or more scenes");g.reject(p),o&&o(p)}),g.promise}addSplatScenes(e,t=!0,n=void 0){if(this.isLoadingOrUnloading())throw new Error("Cannot add splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot add splat scene after dispose() is called.");const i=e.length,r=[];let o;t&&(this.loadingSpinner.removeAllTasks(),o=this.loadingSpinner.addTask("Downloading..."));const a=(u,h,f,g)=>{r[u]=h;let A=0;for(let m=0;m<i;m++)A+=r[m]||0;A=A/i,f=`${A.toFixed(2)}%`,t&&g===Ct.Downloading&&this.loadingSpinner.setMessageForTask(o,A==100?"Download complete!":`Downloading: ${f}`),n&&n(A,f,g)},l=[],c=[];for(let u=0;u<e.length;u++){const h=e[u],f=h.format!==void 0&&h.format!==null?h.format:uc(h.path),g=this.downloadSplatSceneToSplatBuffer(h.path,h.splatAlphaRemovalThreshold,a.bind(this,u),!1,void 0,f,h.headers);l.push(g),c.push(g.promise)}const d=new $n((u,h)=>{Promise.all(c).then(f=>{t&&this.loadingSpinner.removeTask(o),n&&n(0,"0%",Ct.Processing),this.addSplatBuffers(f,e,!0,t,t,!1,!1).then(()=>{n&&n(100,"100%",Ct.Processing),this.clearSplatSceneDownloadAndBuildPromise(),u()})}).catch(f=>{t&&this.loadingSpinner.removeTask(o),this.clearSplatSceneDownloadAndBuildPromise(),h(this.updateError(f,"Viewer::addSplatScenes -> Could not load one or more splat scenes."))}).finally(()=>{this.removeSplatSceneDownloadPromise(d)})},u=>{for(let h of l)h.abort(u)});return this.addSplatSceneDownloadPromise(d),this.setSplatSceneDownloadAndBuildPromise(d),d}downloadSplatSceneToSplatBuffer(e,t=1,n=void 0,i=!1,r=void 0,o,a){try{if(o===Pt.Splat||o===Pt.KSplat||o===Pt.Ply){const l=i?!1:this.optimizeSplatData;if(o===Pt.Splat)return Ua.loadFromURL(e,n,i,r,t,this.inMemoryCompressionLevel,l,a);if(o===Pt.KSplat)return fs.loadFromURL(e,n,i,r,a);if(o===Pt.Ply)return La.loadFromURL(e,n,i,r,t,this.inMemoryCompressionLevel,l,this.sphericalHarmonicsDegree,a)}else if(o===Pt.Spz)return Ba.loadFromURL(e,n,t,this.inMemoryCompressionLevel,this.optimizeSplatData,this.sphericalHarmonicsDegree,a)}catch(l){throw this.updateError(l,null)}throw new Error(`Viewer::downloadSplatSceneToSplatBuffer -> File format not supported: ${e}`)}static isProgressivelyLoadable(e){return e===Pt.Splat||e===Pt.KSplat||e===Pt.Ply}addSplatBuffers=(function(){return function(e,t=[],n=!0,i=!0,r=!0,o=!1,a=!1,l=!0){if(this.isDisposingOrDisposed())return Promise.resolve();let c=null;const d=()=>{c!==null&&(this.loadingSpinner.removeTask(c),c=null)};return this.splatRenderReady=!1,new Promise(u=>{i&&(c=this.loadingSpinner.addTask("Processing splats...")),jt(()=>{if(this.isDisposingOrDisposed())u();else{const h=this.addSplatBuffersToMesh(e,t,n,r,o,l),f=this.splatMesh.getMaxSplatCount();this.sortWorker&&this.sortWorker.maxSplatCount!==f&&this.disposeSortWorker(),this.gpuAcceleratedSort||this.preSortMessages.push({centers:h.centers.buffer,sceneIndexes:h.sceneIndexes.buffer,range:{from:h.from,to:h.to,count:h.count}}),(!this.sortWorker&&f>0?this.setupSortWorker(this.splatMesh):Promise.resolve()).then(()=>{this.isDisposingOrDisposed()||this.runSplatSort(!0,!0).then(A=>{!this.sortWorker||!A?(this.splatRenderReady=!0,d(),u()):(a?this.splatRenderReady=!0:this.runAfterNextSort.push(()=>{this.splatRenderReady=!0}),this.runAfterNextSort.push(()=>{d(),u()}))})})}},!0)})}})();addSplatBuffersToMesh=(function(){let e;return function(t,n,i=!0,r=!1,o=!1,a=!0){if(this.isDisposingOrDisposed())return;let l=[],c=[];o||(l=this.splatMesh.scenes.map(f=>f.splatBuffer)||[],c=this.splatMesh.sceneOptions?this.splatMesh.sceneOptions.map(f=>f):[]),l.push(...t),c.push(...n),this.renderer&&this.splatMesh.setRenderer(this.renderer);const d=f=>{if(this.isDisposingOrDisposed())return;const g=this.splatMesh.getSplatCount();r&&g>=AA&&!f&&!e&&(this.loadingSpinner.setMinimized(!0,!0),e=this.loadingSpinner.addTask("Optimizing data structures..."))},u=f=>{this.isDisposingOrDisposed()||f&&e&&(this.loadingSpinner.removeTask(e),e=null)},h=this.splatMesh.build(l,c,!0,i,d,u,a);return i&&this.freeIntermediateSplatData&&this.splatMesh.freeIntermediateSplatData(),h}})();setupSortWorker(e){if(!this.isDisposingOrDisposed())return new Promise(t=>{const n=this.integerBasedSort?Int32Array:Float32Array,i=e.getSplatCount(),r=e.getMaxSplatCount();this.sortWorker=fA(r,this.sharedMemoryForWorkers,this.enableSIMDInSort,this.integerBasedSort,this.splatMesh.dynamicMode,this.splatSortDistanceMapPrecision),this.sortWorker.onmessage=o=>{if(o.data.sortDone){if(this.sortRunning=!1,this.sharedMemoryForWorkers)this.splatMesh.updateRenderIndexes(this.sortWorkerSortedIndexes,o.data.splatRenderCount);else{const a=new Uint32Array(o.data.sortedIndexes.buffer,0,o.data.splatRenderCount);this.splatMesh.updateRenderIndexes(a,o.data.splatRenderCount)}this.lastSplatSortCount=this.splatSortCount,this.lastSortTime=o.data.sortTime,this.sortPromiseResolver(),this.sortPromiseResolver=null,this.forceRenderNextFrame(),this.runAfterNextSort.length>0&&(this.runAfterNextSort.forEach(a=>{a()}),this.runAfterNextSort.length=0)}else if(o.data.sortCanceled)this.sortRunning=!1;else if(o.data.sortSetupPhase1Complete){this.logLevel>=ti.Info&&console.log("Sorting web worker WASM setup complete."),this.sharedMemoryForWorkers?(this.sortWorkerSortedIndexes=new Uint32Array(o.data.sortedIndexesBuffer,o.data.sortedIndexesOffset,r),this.sortWorkerIndexesToSort=new Uint32Array(o.data.indexesToSortBuffer,o.data.indexesToSortOffset,r),this.sortWorkerPrecomputedDistances=new n(o.data.precomputedDistancesBuffer,o.data.precomputedDistancesOffset,r),this.sortWorkerTransforms=new Float32Array(o.data.transformsBuffer,o.data.transformsOffset,ct.MaxScenes*16)):(this.sortWorkerIndexesToSort=new Uint32Array(r),this.sortWorkerPrecomputedDistances=new n(r),this.sortWorkerTransforms=new Float32Array(ct.MaxScenes*16));for(let a=0;a<i;a++)this.sortWorkerIndexesToSort[a]=a;if(this.sortWorker.maxSplatCount=r,this.logLevel>=ti.Info){console.log("Sorting web worker ready.");const a=this.splatMesh.getSplatDataTextures(),l=a.covariances.size,c=a.centerColors.size;console.log("Covariances texture size: "+l.x+" x "+l.y),console.log("Centers/colors texture size: "+c.x+" x "+c.y)}t()}}})}updateError(e,t){return e instanceof id?e:e instanceof Ar?new Error("File type or server does not support progressive loading."):t?new Error(t):e}disposeSortWorker(){this.sortWorker&&this.sortWorker.terminate(),this.sortWorker=null,this.sortPromise=null,this.sortPromiseResolver&&(this.sortPromiseResolver(),this.sortPromiseResolver=null),this.preSortMessages=[],this.sortRunning=!1}removeSplatScene(e,t=!0){return this.removeSplatScenes([e],t)}removeSplatScenes(e,t=!0){if(this.isLoadingOrUnloading())throw new Error("Cannot remove splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot remove splat scene after dispose() is called.");let n;return this.splatSceneRemovalPromise=new Promise((i,r)=>{let o;t&&(this.loadingSpinner.removeAllTasks(),this.loadingSpinner.show(),o=this.loadingSpinner.addTask("Removing splat scene..."));const a=()=>{t&&(this.loadingSpinner.hide(),this.loadingSpinner.removeTask(o))},l=d=>{a(),this.splatSceneRemovalPromise=null,d?r(d):i()},c=()=>this.isDisposingOrDisposed()?(l(),!0):!1;n=this.sortPromise||Promise.resolve(),n.then(()=>{if(c())return;const d=[],u=[],h=[];for(let f=0;f<this.splatMesh.scenes.length;f++){let g=!1;for(let A of e)if(A===f){g=!0;break}if(!g){const A=this.splatMesh.scenes[f];d.push(A.splatBuffer),u.push(this.splatMesh.sceneOptions[f]),h.push({position:A.position.clone(),quaternion:A.quaternion.clone(),scale:A.scale.clone()})}}this.disposeSortWorker(),this.splatMesh.dispose(),this.sceneRevealMode=Ai.Instant,this.createSplatMesh(),this.addSplatBuffers(d,u,!0,!1,!0).then(()=>{c()||(a(),this.splatMesh.scenes.forEach((f,g)=>{f.position.copy(h[g].position),f.quaternion.copy(h[g].quaternion),f.scale.copy(h[g].scale)}),this.splatMesh.updateTransforms(),this.splatRenderReady=!1,this.runSplatSort(!0).then(()=>{if(c()){this.splatRenderReady=!0;return}n=this.sortPromise||Promise.resolve(),n.then(()=>{this.splatRenderReady=!0,l()})}))}).catch(f=>{l(f)})})}),this.splatSceneRemovalPromise}start(){if(this.selfDrivenMode)this.webXRMode?this.renderer.setAnimationLoop(this.selfDrivenUpdateFunc):this.requestFrameId=requestAnimationFrame(this.selfDrivenUpdateFunc),this.selfDrivenModeRunning=!0;else throw new Error("Cannot start viewer unless it is in self driven mode.")}stop(){this.selfDrivenMode&&this.selfDrivenModeRunning&&(this.webXRMode?this.renderer.setAnimationLoop(null):cancelAnimationFrame(this.requestFrameId),this.selfDrivenModeRunning=!1)}async dispose(){if(this.isDisposingOrDisposed())return this.disposePromise;let e=[],t=[];for(let n in this.splatSceneDownloadPromises)if(this.splatSceneDownloadPromises.hasOwnProperty(n)){const i=this.splatSceneDownloadPromises[n];t.push(i),e.push(i.promise)}return this.sortPromise&&e.push(this.sortPromise),this.disposing=!0,this.disposePromise=Promise.all(e).finally(()=>{this.stop(),this.orthographicControls&&(this.orthographicControls.dispose(),this.orthographicControls=null),this.perspectiveControls&&(this.perspectiveControls.dispose(),this.perspectiveControls=null),this.controls=null,this.splatMesh&&(this.splatMesh.dispose(),this.splatMesh=null),this.sceneHelper&&(this.sceneHelper.dispose(),this.sceneHelper=null),this.resizeObserver&&(this.resizeObserver.unobserve(this.rootElement),this.resizeObserver=null),this.disposeSortWorker(),this.removeEventHandlers(),this.loadingSpinner.removeAllTasks(),this.loadingSpinner.setContainer(null),this.loadingProgressBar.hide(),this.loadingProgressBar.setContainer(null),this.infoPanel.setContainer(null),this.camera=null,this.threeScene=null,this.splatRenderReady=!1,this.initialized=!1,this.renderer&&(this.usingExternalRenderer||(this.rootElement.removeChild(this.renderer.domElement),this.renderer.dispose()),this.renderer=null),this.usingExternalRenderer||document.body.removeChild(this.rootElement),this.sortWorkerSortedIndexes=null,this.sortWorkerIndexesToSort=null,this.sortWorkerPrecomputedDistances=null,this.sortWorkerTransforms=null,this.disposed=!0,this.disposing=!1,this.disposePromise=null}),t.forEach(n=>{n.abort("Scene disposed")}),this.disposePromise}selfDrivenUpdate(){this.selfDrivenMode&&!this.webXRMode&&(this.requestFrameId=requestAnimationFrame(this.selfDrivenUpdateFunc)),this.update(),this.shouldRender()?(this.render(),this.consecutiveRenderFrames++):this.consecutiveRenderFrames=0,this.renderNextFrame=!1}forceRenderNextFrame(){this.renderNextFrame=!0}shouldRender=(function(){let e=0;const t=new I,n=new gt,i=1e-4;return function(){if(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())return!1;let r=!1,o=!1;if(this.camera){const a=this.camera.position,l=this.camera.quaternion;o=Math.abs(a.x-t.x)>i||Math.abs(a.y-t.y)>i||Math.abs(a.z-t.z)>i||Math.abs(l.x-n.x)>i||Math.abs(l.y-n.y)>i||Math.abs(l.z-n.z)>i||Math.abs(l.w-n.w)>i}return r=this.renderMode!==gs.Never&&(e===0||this.splatMesh.visibleRegionChanging||o||this.renderMode===gs.Always||this.dynamicMode===!0||this.renderNextFrame),this.camera&&(t.copy(this.camera.position),n.copy(this.camera.quaternion)),e++,r}})();render=(function(){return function(){if(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())return;const e=n=>{for(let i of n.children)if(i.visible)return!0;return!1},t=this.renderer.autoClear;e(this.threeScene)&&(this.renderer.render(this.threeScene,this.camera),this.renderer.autoClear=!1),this.renderer.render(this.splatMesh,this.camera),this.renderer.autoClear=!1,this.sceneHelper.getFocusMarkerOpacity()>0&&this.renderer.render(this.sceneHelper.focusMarker,this.camera),this.showControlPlane&&this.renderer.render(this.sceneHelper.controlPlane,this.camera),this.renderer.autoClear=t}})();update(e,t){this.dropInMode&&this.updateForDropInMode(e,t),!(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())&&(this.controls&&(this.controls.update(),this.camera.isOrthographicCamera&&!this.usingExternalCamera&&Vi.setCameraPositionFromZoom(this.camera,this.camera,this.controls)),this.runSplatSort(),this.updateForRendererSizeChanges(),this.updateSplatMesh(),this.updateMeshCursor(),this.updateFPS(),this.timingSensitiveUpdates(),this.updateInfoPanel(),this.updateControlPlane())}updateForDropInMode(e,t){this.renderer=e,this.splatMesh&&this.splatMesh.setRenderer(this.renderer),this.camera=t,this.controls&&(this.controls.object=t),this.init()}updateFPS=(function(){let e=Ni(),t=0;return function(){if(this.consecutiveRenderFrames>_A){const n=Ni();n-e>=1?(this.currentFPS=t,t=0,e=n):t++}else this.currentFPS=null}})();updateForRendererSizeChanges=(function(){const e=new Me,t=new Me;let n;return function(){this.usingExternalCamera||(this.renderer.getSize(t),(n===void 0||n!==this.camera.isOrthographicCamera||t.x!==e.x||t.y!==e.y)&&(this.camera.isOrthographicCamera?(this.camera.left=-t.x/2,this.camera.right=t.x/2,this.camera.top=t.y/2,this.camera.bottom=-t.y/2):this.camera.aspect=t.x/t.y,this.camera.updateProjectionMatrix(),e.copy(t),n=this.camera.isOrthographicCamera))}})();timingSensitiveUpdates=(function(){let e;return function(){const t=Ni();e||(e=t);const n=t-e;this.updateCameraTransition(t),this.updateFocusMarker(n),e=t}})();updateCameraTransition=(function(){let e=new I,t=new I,n=new I;return function(i){if(this.transitioningCameraTarget){t.copy(this.previousCameraTarget).sub(this.camera.position).normalize(),n.copy(this.nextCameraTarget).sub(this.camera.position).normalize();const r=Math.acos(t.dot(n)),a=(r/(Math.PI/3)*.65+.3)/r*(i-this.transitioningCameraTargetStartTime);e.copy(this.previousCameraTarget).lerp(this.nextCameraTarget,a),this.camera.lookAt(e),this.controls.target.copy(e),a>=1&&(this.transitioningCameraTarget=!1)}}})();updateFocusMarker=(function(){const e=new Me;let t=!1;return function(n){if(this.getRenderDimensions(e),this.transitioningCameraTarget){this.sceneHelper.setFocusMarkerVisibility(!0);const i=Math.max(this.sceneHelper.getFocusMarkerOpacity(),0);let r=Math.min(i+xA*n,1);this.sceneHelper.setFocusMarkerOpacity(r),this.sceneHelper.updateFocusMarker(this.nextCameraTarget,this.camera,e),t=!0,this.forceRenderNextFrame()}else{let i;if(t?i=1:i=Math.min(this.sceneHelper.getFocusMarkerOpacity(),1),i>0){this.sceneHelper.updateFocusMarker(this.nextCameraTarget,this.camera,e);let r=Math.max(i-SA*n,0);this.sceneHelper.setFocusMarkerOpacity(r),r===0&&this.sceneHelper.setFocusMarkerVisibility(!1)}i>0&&this.forceRenderNextFrame(),t=!1}}})();updateMeshCursor=(function(){const e=[],t=new Me;return function(){this.showMeshCursor?(this.forceRenderNextFrame(),this.getRenderDimensions(t),e.length=0,this.raycaster.setFromCameraAndScreenPosition(this.camera,this.mousePosition,t),this.raycaster.intersectSplatMesh(this.splatMesh,e),e.length>0?(this.sceneHelper.setMeshCursorVisibility(!0),this.sceneHelper.positionAndOrientMeshCursor(e[0].origin,this.camera)):this.sceneHelper.setMeshCursorVisibility(!1)):(this.sceneHelper.getMeschCursorVisibility()&&this.forceRenderNextFrame(),this.sceneHelper.setMeshCursorVisibility(!1))}})();updateInfoPanel=(function(){const e=new Me;return function(){if(!this.showInfo)return;const t=this.splatMesh.getSplatCount();this.getRenderDimensions(e);const n=this.controls?this.controls.target:null,i=this.showMeshCursor?this.sceneHelper.meshCursor.position:null,r=t>0?this.splatRenderCount/t*100:0;this.infoPanel.update(e,this.camera.position,n,this.camera.up,this.camera.isOrthographicCamera,i,this.currentFPS||"N/A",t,this.splatRenderCount,r,this.lastSortTime,this.focalAdjustment,this.splatMesh.getSplatScale(),this.splatMesh.getPointCloudModeEnabled())}})();updateControlPlane(){this.showControlPlane?(this.sceneHelper.setControlPlaneVisibility(!0),this.sceneHelper.positionAndOrientControlPlane(this.controls.target,this.camera.up)):this.sceneHelper.setControlPlaneVisibility(!1)}runSplatSort=(function(){const e=new ke,t=[],n=new I(0,0,-1),i=new I(0,0,-1),r=new I,o=new I,a=[],l=[{angleThreshold:.55,sortFractions:[.125,.33333,.75]},{angleThreshold:.65,sortFractions:[.33333,.66667]},{angleThreshold:.8,sortFractions:[.5]}];return function(c=!1,d=!1){if(!this.initialized)return Promise.resolve(!1);if(this.sortRunning)return Promise.resolve(!0);if(this.splatMesh.getSplatCount()<=0)return this.splatRenderCount=0,Promise.resolve(!1);let u=0,h=0,f=!1,g=!1;if(i.set(0,0,-1).applyQuaternion(this.camera.quaternion),u=i.dot(n),h=o.copy(this.camera.position).sub(r).length(),!c&&!this.splatMesh.dynamicMode&&a.length===0&&(u<=.99&&(f=!0),h>=1&&(g=!0),!f&&!g))return Promise.resolve(!1);this.sortRunning=!0;let{splatRenderCount:A,shouldSortAll:m}=this.gatherSceneNodesForSort();m=m||d,this.splatRenderCount=A,e.copy(this.camera.matrixWorld).invert();const p=this.perspectiveCamera||this.camera;e.premultiply(p.projectionMatrix),this.splatMesh.dynamicMode||e.multiply(this.splatMesh.matrixWorld);let x=Promise.resolve(!0);return this.gpuAcceleratedSort&&(a.length<=1||a.length%2===0)&&(x=this.splatMesh.computeDistancesOnGPU(e,this.sortWorkerPrecomputedDistances)),x.then(()=>{if(a.length===0)if(this.splatMesh.dynamicMode||m)a.push(this.splatRenderCount);else{for(let C of l)if(u<C.angleThreshold){for(let T of C.sortFractions)a.push(Math.floor(this.splatRenderCount*T));break}a.push(this.splatRenderCount)}let _=Math.min(a.shift(),this.splatRenderCount);this.splatSortCount=_,t[0]=this.camera.position.x,t[1]=this.camera.position.y,t[2]=this.camera.position.z;const S={modelViewProj:e.elements,cameraPosition:t,splatRenderCount:this.splatRenderCount,splatSortCount:_,usePrecomputedDistances:this.gpuAcceleratedSort};return this.splatMesh.dynamicMode&&this.splatMesh.fillTransformsArray(this.sortWorkerTransforms),this.sharedMemoryForWorkers||(S.indexesToSort=this.sortWorkerIndexesToSort,S.transforms=this.sortWorkerTransforms,this.gpuAcceleratedSort&&(S.precomputedDistances=this.sortWorkerPrecomputedDistances)),this.sortPromise=new Promise(C=>{this.sortPromiseResolver=C}),this.preSortMessages.length>0&&(this.preSortMessages.forEach(C=>{this.sortWorker.postMessage(C)}),this.preSortMessages=[]),this.sortWorker.postMessage({sort:S}),a.length===0&&(r.copy(this.camera.position),n.copy(i)),!0}),x}})();gatherSceneNodesForSort=(function(){const e=[];let t=null;const n=new I,i=new I,r=new I,o=new ke,a=new ke,l=new ke,c=new I,d=new I(0,0,-1),u=new I,h=f=>u.copy(f.max).sub(f.min).length();return function(f=!1){this.getRenderDimensions(c);const g=c.y/2/Math.tan(this.camera.fov/2*zc.DEG2RAD),A=Math.atan(c.x/2/g),m=Math.atan(c.y/2/g),p=Math.cos(A),x=Math.cos(m),_=this.splatMesh.getSplatTree();if(_){a.copy(this.camera.matrixWorld).invert(),this.splatMesh.dynamicMode||a.multiply(this.splatMesh.matrixWorld);let S=0,C=0;for(let y=0;y<_.subTrees.length;y++){const w=_.subTrees[y];o.copy(a),this.splatMesh.dynamicMode&&(this.splatMesh.getSceneTransform(y,l),o.multiply(l));const E=w.nodesWithIndexes.length;for(let v=0;v<E;v++){const R=w.nodesWithIndexes[v];if(!R.data||!R.data.indexes||R.data.indexes.length===0)continue;r.copy(R.center).applyMatrix4(o);const B=r.length();r.normalize(),n.copy(r).setX(0).normalize(),i.copy(r).setY(0).normalize();const F=d.dot(i),U=d.dot(n),z=h(R),N=U<x-.6,W=F<p-.6;!f&&(W||N)&&B>z||(C+=R.data.indexes.length,e[S]=R,R.data.distanceToNode=B,S++)}}e.length=S,e.sort((y,w)=>y.data.distanceToNode<w.data.distanceToNode?-1:1);let T=C*ct.BytesPerInt;for(let y=0;y<S;y++){const w=e[y],E=w.data.indexes.length,v=E*ct.BytesPerInt;new Uint32Array(this.sortWorkerIndexesToSort.buffer,T-v,E).set(w.data.indexes),T-=v}return{splatRenderCount:C,shouldSortAll:!1}}else{const S=this.splatMesh.getSplatCount();if(!t||t.length!==S){t=new Uint32Array(S);for(let C=0;C<S;C++)t[C]=C}return this.sortWorkerIndexesToSort.set(t),{splatRenderCount:S,shouldSortAll:!0}}}})();getSplatMesh(){return this.splatMesh}getSplatScene(e){return this.splatMesh.getScene(e)}getSceneCount(){return this.splatMesh.getSceneCount()}isMobile(){return navigator.userAgent.includes("Mobi")}}class yn{constructor(e,t,n,i,r="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),yn.nextNameID=yn.nextNameID||0,this.$name.id=`lil-gui-name-${++yn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("lil-disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class vA extends yn{constructor(e,t,n){super(e,t,n,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function la(s){let e,t;return(e=s.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const yA={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:la,toHexString:la},Ts={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},EA={isPrimitive:!1,match:s=>Array.isArray(s)||ArrayBuffer.isView(s),fromHexString(s,e,t=1){const n=Ts.fromHexString(s);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([s,e,t],n=1){n=255/n;const i=s*n<<16^e*n<<8^t*n<<0;return Ts.toHexString(i)}},CA={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,e,t=1){const n=Ts.fromHexString(s);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:s,g:e,b:t},n=1){n=255/n;const i=s*n<<16^e*n<<8^t*n<<0;return Ts.toHexString(i)}},MA=[yA,Ts,EA,CA];function TA(s){return MA.find(e=>e.match(s))}class bA extends yn{constructor(e,t,n,i){super(e,t,n,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=TA(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=la(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Ao extends yn{constructor(e,t,n){super(e,t,n,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class wA extends yn{constructor(e,t,n,i,r,o){super(e,t,n,"lil-number"),this._initInput(),this.min(i),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let x=parseFloat(this.$input.value);isNaN(x)||(this._stepExplicit&&(x=this._snap(x)),this.setValue(this._clamp(x)))},n=x=>{const _=parseFloat(this.$input.value);isNaN(_)||(this._snapClampSetValue(_+x),this.$input.value=this.getValue())},i=x=>{x.key==="Enter"&&this.$input.blur(),x.code==="ArrowUp"&&(x.preventDefault(),n(this._step*this._arrowKeyMultiplier(x))),x.code==="ArrowDown"&&(x.preventDefault(),n(this._step*this._arrowKeyMultiplier(x)*-1))},r=x=>{this._inputFocused&&(x.preventDefault(),n(this._step*this._normalizeMouseWheel(x)))};let o=!1,a,l,c,d,u;const h=5,f=x=>{a=x.clientX,l=c=x.clientY,o=!0,d=this.getValue(),u=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",A)},g=x=>{if(o){const _=x.clientX-a,S=x.clientY-l;Math.abs(S)>h?(x.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(_)>h&&A()}if(!o){const _=x.clientY-c;u-=_*this._step*this._arrowKeyMultiplier(x),d+u>this._max?u=this._max-d:d+u<this._min&&(u=this._min-d),this._snapClampSetValue(d+u)}c=x.clientY},A=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",A)},m=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const e=(p,x,_,S,C)=>(p-x)/(_-x)*(C-S)+S,t=p=>{const x=this.$slider.getBoundingClientRect();let _=e(p,x.left,x.right,this._min,this._max);this._snapClampSetValue(_)},n=p=>{this._setDraggingStyle(!0),t(p.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},i=p=>{t(p.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)};let o=!1,a,l;const c=p=>{p.preventDefault(),this._setDraggingStyle(!0),t(p.touches[0].clientX),o=!1},d=p=>{p.touches.length>1||(this._hasScrollBar?(a=p.touches[0].clientX,l=p.touches[0].clientY,o=!0):c(p),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",h))},u=p=>{if(o){const x=p.touches[0].clientX-a,_=p.touches[0].clientY-l;Math.abs(x)>Math.abs(_)?c(p):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",h))}else p.preventDefault(),t(p.touches[0].clientX)},h=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",h)},f=this._callOnFinishChange.bind(this),g=400;let A;const m=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const _=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+_),this.$input.value=this.getValue(),clearTimeout(A),A=setTimeout(f,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",d,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",e),document.body.classList.toggle("lil-dragging",e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class RA extends yn{constructor(e,t,n,i){super(e,t,n,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class IA extends yn{constructor(e,t,n){super(e,t,n,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var DA=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.lil-root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.lil-root > .lil-children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.lil-allow-touch-styles, .lil-gui.lil-allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.lil-force-touch-styles, .lil-gui.lil-force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.lil-auto-place, .lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-controller.lil-disabled {
  opacity: 0.5;
}
.lil-controller.lil-disabled, .lil-controller.lil-disabled * {
  pointer-events: none !important;
}
.lil-controller > .lil-name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-controller .lil-widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-controller.lil-string input {
  color: var(--string-color);
}
.lil-controller.lil-boolean {
  cursor: pointer;
}
.lil-controller.lil-color .lil-display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-controller.lil-color .lil-display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-controller.lil-color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-controller.lil-color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-controller.lil-option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-controller.lil-option .lil-display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-display.lil-focus {
    background: var(--focus-color);
  }
}
.lil-controller.lil-option .lil-display.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-option .lil-display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-controller.lil-option .lil-widget,
.lil-controller.lil-option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-widget:hover .lil-display {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number input {
  color: var(--number-color);
}
.lil-controller.lil-number.lil-has-slider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-controller.lil-number .lil-slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-controller.lil-number .lil-slider:hover {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number .lil-slider.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-number .lil-slider.lil-active .lil-fill {
  opacity: 0.95;
}
.lil-controller.lil-number .lil-fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-dragging * {
  cursor: ew-resize !important;
}
.lil-dragging.lil-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .lil-title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .lil-title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .lil-title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-dragging) .lil-gui .lil-title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .lil-title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.lil-root > .lil-title:focus {
  text-decoration: none !important;
}
.lil-gui.lil-closed > .lil-title:before {
  content: "▸";
}
.lil-gui.lil-closed > .lil-children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.lil-closed:not(.lil-transition) > .lil-children {
  display: none;
}
.lil-gui.lil-transition > .lil-children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .lil-children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.lil-root > .lil-children > .lil-gui > .lil-title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.lil-root > .lil-children > .lil-gui.lil-closed > .lil-title {
  border-bottom-color: transparent;
}
.lil-gui + .lil-controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .lil-title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .lil-children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .lil-controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .lil-controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .lil-controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .lil-controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .lil-controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAALkAAsAAAAABtQAAAKVAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDMgqBBIEbATYCJAMUCwwABCAFhAoHgQQbHAbIDiUFEYVARAAAYQTVWNmz9MxhEgodq49wYRUFKE8GWNiUBxI2LBRaVnc51U83Gmhs0Q7JXWMiz5eteLwrKwuxHO8VFxUX9UpZBs6pa5ABRwHA+t3UxUnH20EvVknRerzQgX6xC/GH6ZUvTcAjAv122dF28OTqCXrPuyaDER30YBA1xnkVutDDo4oCi71Ca7rrV9xS8dZHbPHefsuwIyCpmT7j+MnjAH5X3984UZoFFuJ0yiZ4XEJFxjagEBeqs+e1iyK8Xf/nOuwF+vVK0ur765+vf7txotUi0m3N0m/84RGSrBCNrh8Ee5GjODjF4gnWP+dJrH/Lk9k4oT6d+gr6g/wssA2j64JJGP6cmx554vUZnpZfn6ZfX2bMwPPrlANsB86/DiHjhl0OP+c87+gaJo/gY084s3HoYL/ZkWHTRfBXvvoHnnkHvngKun4KBE/ede7tvq3/vQOxDXB1/fdNz6XbPdcr0Vhpojj9dG+owuSKFsslCi1tgEjirjXdwMiov2EioadxmqTHUCIwo8NgQaeIasAi0fTYSPTbSmwbMOFduyh9wvBrESGY0MtgRjtgQR8Q1bRPohn2UoCRZf9wyYANMXFeJTysqAe0I4mrherOekFdKMrYvJjLvOIUM9SuwYB5DVZUwwVjJJOaUnZCmcEkIZZrKqNvRGRMvmFZsmhP4VMKCSXBhSqUBxgMS7h0cZvEd71AWkEhGWaeMFcNnpqyJkyXgYL7PQ1MoSq0wDAkRtJIijkZSmqYTiSImfLiSWXIZwhRh3Rug2X0kk1Dgj+Iu43u5p98ghopcpSo0Uyc8SnjlYX59WUeaMoDqmVD2TOWD9a4pCRAzf2ECgwGcrHjPOWY9bNxq/OL3I/QjwEAAAA=") format("woff2");
}`;function PA(s){const e=document.createElement("style");e.innerHTML=s;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let vc=!1;class ka{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),l&&this.domElement.classList.add("lil-allow-touch-styles"),!vc&&a&&(PA(DA),vc=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=o}add(e,t,n,i,r){if(Object(n)===n)return new RA(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new wA(this,e,t,n,i,r);case"boolean":return new vA(this,e,t);case"string":return new IA(this,e,t);case"function":return new Ao(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new bA(this,e,t,n)}addFolder(e){const t=new ka({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Ao||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Ao)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("lil-transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const FA=document.getElementById("app"),Gt=document.getElementById("status"),LA=document.getElementById("plyInput"),_r=document.getElementById("plyUrl"),BA=document.getElementById("loadUrl"),UA=document.getElementById("resetView"),yc=document.getElementById("helpToggle"),Ec=document.getElementById("helpPanel"),hd=[0,1.5,4],fd=[0,0,0],be={selfDrivenMode:!0,renderer:"internal",camera:"internal",useBuiltInControls:!0,ignoreDevicePixelRatio:!1,gpuAcceleratedSort:!1,enableSIMDInSort:!1,sharedMemoryForWorkers:!1,integerBasedSort:!1,halfPrecisionCovariancesOnGPU:!1,dynamicScene:!0,webXRMode:Qn.None,renderMode:gs.Always,sceneRevealMode:Ai.Gradual,antialiased:!0,focalAdjustment:1,logLevel:ti.None,sphericalHarmonicsDegree:0,enableOptionalEffects:!1,inMemoryCompressionLevel:0,freeIntermediateSplatData:!1,sinWaveAnimation:!1,sinWaveAmplitude:.5,sinWaveFrequency:1},ca=new ka({title:"Viewer"});let _t=null,vr=null,yr=null,As=0,jn=null,Kn=null,xo=!1,So=!1,_o=Promise.resolve(),Cc={...be},xs=null,Ha=Date.now();function OA(){typeof ca.controllersRecursive=="function"&&ca.controllersRecursive().forEach(s=>s.updateDisplay())}function Si(s){return _o=_o.then(()=>s(),()=>s()),_o}function pd(){return globalThis.crossOriginIsolated===!0}function NA(){return be.sharedMemoryForWorkers&&pd()}function zA(){return be.dynamicScene?{gpuAcceleratedSort:!1,enableSIMDInSort:!1,sharedMemoryForWorkers:!1,integerBasedSort:!1}:{gpuAcceleratedSort:be.gpuAcceleratedSort,enableSIMDInSort:be.enableSIMDInSort,sharedMemoryForWorkers:NA(),integerBasedSort:be.integerBasedSort}}function wr(s){const e={};for(const t of Object.keys(s)){if(!Number.isNaN(Number(t)))continue;const n=s[t];typeof n=="number"&&(e[t]=n)}return e}function md(){As&&(cancelAnimationFrame(As),As=0)}function kA(){if(!_t||!xs||!be.sinWaveAnimation)return;const s=(Date.now()-Ha)*.001,e=_t.getSceneCount();for(let t=0;t<e;t++){const n=_t.getScene(t);if(!n||!n.splatBuffer)continue;const i=n.splatBuffer.getPosition(0);if(!i)continue;const r=i.data||i;if(!r||!xs[t])continue;const o=xs[t],a=be.sinWaveAmplitude,l=be.sinWaveFrequency;for(let c=0;c<o.length;c+=3){const d=o[c],u=o[c+1],h=o[c+2],f=d+u+h,g=Math.sin(s*l+f)*a;r[c]=d,r[c+1]=u+g,r[c+2]=h}n.splatBuffer.updatePositions(i)}}function HA(s){const e=()=>{_t===s&&(kA(),typeof s.update=="function"&&s.update(),typeof s.render=="function"&&s.render(),As=requestAnimationFrame(e))};As=requestAnimationFrame(e)}function Va(){md();const s=zA(),e=new Vi({rootElement:FA,cameraUp:[0,1,0],initialCameraPosition:hd,initialCameraLookAt:fd,selfDrivenMode:be.selfDrivenMode,renderer:be.renderer==="internal"?void 0:be.renderer,camera:be.camera==="internal"?void 0:be.camera,useBuiltInControls:be.useBuiltInControls,ignoreDevicePixelRatio:be.ignoreDevicePixelRatio,gpuAcceleratedSort:s.gpuAcceleratedSort,enableSIMDInSort:s.enableSIMDInSort,sharedMemoryForWorkers:s.sharedMemoryForWorkers,integerBasedSort:s.integerBasedSort,halfPrecisionCovariancesOnGPU:be.halfPrecisionCovariancesOnGPU,dynamicScene:be.dynamicScene,webXRMode:be.webXRMode,renderMode:be.renderMode,sceneRevealMode:be.sceneRevealMode,sceneFadeInRateMultiplier:1,antialiased:be.antialiased,focalAdjustment:be.focalAdjustment,logLevel:be.logLevel,sphericalHarmonicsDegree:be.sphericalHarmonicsDegree,enableOptionalEffects:be.enableOptionalEffects,inMemoryCompressionLevel:be.inMemoryCompressionLevel,freeIntermediateSplatData:be.freeIntermediateSplatData,splatSortDistanceMapPrecision:be.dynamicScene?12:16});return be.selfDrivenMode?e.start():HA(e),e}_t=Va();function gd(s){const e=s.toLowerCase();return e.endsWith(".ksplat")?Pt.KSplat:e.endsWith(".splat")?Pt.Splat:Pt.Ply}async function VA(){if(!_t)return;const s=_t.getSceneCount();if(s<1)return;const e=[];for(let t=0;t<s;t++)e.push(t);await _t.removeSplatScenes(e,!1)}async function Ad(s,e,t){_t||(_t=Va()),Gt.textContent=`Loading ${e}...`,await VA(),_t.sceneRevealMode=be.sceneRevealMode,await _t.addSplatScene(s,{format:t,showLoadingUI:!0}),xd(),Ha=Date.now(),Gt.textContent=`${e} loaded`}function xd(){if(!_t)return;xs={};const s=_t.getSceneCount();for(let e=0;e<s;e++){const t=_t.getScene(e);if(!t||!t.splatBuffer)continue;const n=t.splatBuffer.getPosition(0);if(!n)continue;const i=n.data||n;i&&(xs[e]=new Float32Array(i))}}async function GA(){if(!Kn){Gt.textContent="No file loaded";return}if(Kn.type==="url"){await _d(Kn.sourceUrl,{persistLastScene:!1});return}if(Kn.type==="file"){await vd(Kn.file,{persistLastScene:!1});return}Gt.textContent="No file loaded"}async function da(){if(!So){So=!0,Gt.textContent="Rebuilding viewer...";try{be.sharedMemoryForWorkers&&!pd()&&(be.sharedMemoryForWorkers=!1,yr&&yr.updateDisplay(),Gt.textContent="Shared memory disabled: crossOriginIsolated is required");const s=_t;if(_t=null,s){md();try{await s.dispose()}catch(e){console.warn("Viewer dispose failed during rebuild, continuing with fresh instance.",e)}}_t=Va(),Kn?await GA():Gt.textContent="No file loaded"}finally{So=!1}}}async function Sd(s){if(!(!be.dynamicScene||xo)){xo=!0;try{be.dynamicScene=!1,vr&&vr.updateDisplay(),Gt.textContent=`Dynamic Scene disabled (${s})`,await Si(async()=>{await da()})}catch(e){Gt.textContent="Failed to recover from dynamic mode error",console.error(e)}finally{xo=!1}}}function ua(s){return s?String(s).toLowerCase().includes("memory access out of bounds"):!1}function WA(){!_t.camera||!_t.controls||(_t.camera.position.fromArray(hd),_t.controls.target.fromArray(fd),_t.controls.update())}async function Ga(s){return _d(s,{persistLastScene:!0})}async function _d(s,e={persistLastScene:!0}){const t=s.trim();if(!t){Gt.textContent="Enter a scene URL first";return}try{const n=t.split("/").pop()||t,i=gd(n),r=await fetch(t);if(!r.ok)throw new Error(`HTTP ${r.status}`);const o=await r.arrayBuffer();if(i===Pt.KSplat&&o.byteLength<4096)throw new Error("Invalid KSplat data (file too small or wrong URL)");jn&&URL.revokeObjectURL(jn);const a=new Blob([o]);jn=URL.createObjectURL(a),await Ad(jn,n,i),e.persistLastScene&&(Kn={type:"url",sourceUrl:t,label:n,format:i})}catch(n){Gt.textContent=`Failed to load ${t} (${n.message||"invalid data"})`,console.error(n)}}async function XA(s){return vd(s,{persistLastScene:!0})}async function vd(s,e={persistLastScene:!0}){jn&&URL.revokeObjectURL(jn),jn=URL.createObjectURL(s);try{const t=gd(s.name);await Ad(jn,s.name,t),e.persistLastScene&&(Kn={type:"file",file:s,label:s.name,format:t})}catch(t){Gt.textContent=`Failed to load ${s.name}`,console.error(t)}}LA.addEventListener("change",async s=>{const e=s.target.files?.[0];e&&await Si(async()=>{await XA(e)})});BA.addEventListener("click",()=>{Si(async()=>{await Ga(_r.value)})});_r.addEventListener("keydown",s=>{s.key==="Enter"&&Si(async()=>{await Ga(_r.value)})});UA.addEventListener("click",()=>{WA()});yc.addEventListener("click",()=>{const s=!Ec.hidden;Ec.hidden=s,yc.setAttribute("aria-expanded",String(!s))});const ht=ca.addFolder("Advanced Options"),It=s=>s.onFinishChange(async()=>{const e={...Cc};try{await Si(async()=>{await da()}),Cc={...be}}catch(t){Object.assign(be,e),OA(),Gt.textContent="Option failed; reverted to last working config",console.error(t);try{await Si(async()=>{await da()})}catch(n){Gt.textContent="Failed to recover viewer after rollback",console.error(n)}}});It(ht.add(be,"selfDrivenMode").name("selfDrivenMode"));ht.add(be,"renderer",{internal:"internal"}).name("renderer");ht.add(be,"camera",{internal:"internal"}).name("camera");It(ht.add(be,"useBuiltInControls").name("useBuiltInControls"));It(ht.add(be,"ignoreDevicePixelRatio").name("ignoreDevicePixelRatio"));It(ht.add(be,"gpuAcceleratedSort").name("gpuAcceleratedSort"));It(ht.add(be,"enableSIMDInSort").name("enableSIMDInSort"));yr=ht.add(be,"sharedMemoryForWorkers").name("sharedMemoryForWorkers");It(yr);It(ht.add(be,"integerBasedSort").name("integerBasedSort"));It(ht.add(be,"halfPrecisionCovariancesOnGPU").name("halfPrecisionCovariancesOnGPU"));vr=ht.add(be,"dynamicScene").name("dynamicScene");It(vr);It(ht.add(be,"webXRMode",wr(Qn)).name("webXRMode"));It(ht.add(be,"renderMode",wr(gs)).name("renderMode"));It(ht.add(be,"sceneRevealMode",wr(Ai)).name("sceneRevealMode"));It(ht.add(be,"antialiased").name("antialiased"));It(ht.add(be,"focalAdjustment",.1,3,.01).name("focalAdjustment"));It(ht.add(be,"logLevel",wr(ti)).name("logLevel"));It(ht.add(be,"sphericalHarmonicsDegree",0,2,1).name("sphericalHarmonicsDegree"));It(ht.add(be,"enableOptionalEffects").name("enableOptionalEffects"));It(ht.add(be,"inMemoryCompressionLevel",0,2,1).name("inMemoryCompressionLevel"));It(ht.add(be,"freeIntermediateSplatData").name("freeIntermediateSplatData"));ht.add(be,"sinWaveAnimation").name("Sin Wave").onChange(()=>{be.sinWaveAnimation&&(xd(),Ha=Date.now())});ht.add(be,"sinWaveAmplitude",0,2,.1).name("Wave Amplitude");ht.add(be,"sinWaveFrequency",.1,5,.1).name("Wave Frequency");ht.close();const Mc=(_r.value||"data/chain.ksplat").trim();Mc&&Si(async()=>{await Ga(Mc)}).catch(()=>{Gt.textContent="No file loaded"});window.addEventListener("error",s=>{(ua(s?.message)||ua(s?.error?.message))&&Sd("WASM sort error")});window.addEventListener("unhandledrejection",s=>{const e=s?.reason?.message||s?.reason;ua(e)&&Sd("WASM sort error")});
