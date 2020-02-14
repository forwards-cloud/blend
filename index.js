!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);class r{constructor(){this.styles={container:{border:"1px solid #ddd",display:"flex",borderRadius:"5px",maxWidth:"800px",margin:"0 auto",alignItems:"center"},qrContainer:{padding:"8px",borderRight:"1px solid #ddd",opacity:.65,minWidth:"90px"},qr:{maxWidth:"90px"},forwardContainer:{flex:1,padding:"16px",marginLeft:"-1px",borderLeft:"1px solid #ddd"},forward:{fontSize:"1.2rem",lineHeight:"1.8rem",minHeight:"3.5rem"},author:{marginTop:"12px",opacity:.6}}}add(e,t){for(var n in this.styles[t])e.style[n]=this.styles[t][n]}}class o{constructor(e){this.frm=e||"random",this.CDN="https://cdn.jsdelivr.net/gh/forwards-cloud/forwards/quotes/",this.quote=null}get(){let e=this;return new Promise((t,n)=>{fetch(this.CDN+"index.json",{}).then(e=>e.json()).then(r=>{const o=r.total,d=Math.floor(Math.random()*o)+1;fetch(this.CDN+d+".json",{}).then(e=>e.json()).then(n=>{e.quote=n,t(n)}).catch(e=>{n(e)})}).catch(e=>{n(e)})})}build(e){let t=new r,n=document,o=n.getElementById(e);t.add(o,"container");let d=n.createElement("div");t.add(d,"qrContainer");let i=n.createElement("img");t.add(i,"qr"),i.src="https://fwd.sgp1.digitaloceanspaces.com/qr-codes/5de168b95f8cfb2ee74c53db.png",d.appendChild(i);let a=n.createElement("div");t.add(a,"forwardContainer");let s=n.createElement("div");s.innerHTML=this.quote.quote,t.add(s,"forward");let l=n.createElement("div");l.innerHTML="&ndash; &nbsp;"+this.quote.author,t.add(l,"author"),a.appendChild(s),a.appendChild(l),o.appendChild(d),o.appendChild(a)}}class d{constructor(e,t){this.type=e||"quote",this.frm=t||"random",this.CDN="https://cdn.jsdelivr.net/gh/forwards-cloud/forwards/",this.forward=null}async init(){if("quote"===this.type){let e=new o(frm);await e.get(),e.build("ForwardsBlend")}}}!function(){let e=document;e.addEventListener("readystatechange",(function t(){if("complete"===e.readyState){new d("quote").init(),e.removeEventListener("readystatechange",t)}}))}()}]);