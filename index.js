!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);class n{constructor(){this.styles={container:{border:"1px solid #ddd",display:"flex",borderRadius:"5px",maxWidth:"800px",margin:"0 auto",alignItems:"center"},qrContainer:{padding:"8px",borderRight:"1px solid #ddd",opacity:.65,minWidth:"90px"},qr:{maxWidth:"90px"},forwardContainer:{flex:1,padding:"16px 24px",marginLeft:"-1px",borderLeft:"1px solid #ddd",display:"flex",flexDirection:"column"},forward:{fontSize:"1.2rem",lineHeight:"1.8rem"},author:{marginTop:"12px",opacity:.6}}}add(e,t){for(var r in this.styles[t])e.style[r]=this.styles[t][r]}}class o{constructor(e){this.frm=e||"random",this.CDN="https://cdn.jsdelivr.net/gh/forwards-cloud/forwards@latest/quotes/",this.quote=null}get(){let e=this;return new Promise((t,r)=>{fetch(this.CDN+"index.json",{}).then(e=>e.json()).then(n=>{const o=n.total,d=Math.floor(Math.random()*o)+1;fetch(this.CDN+d+".json",{}).then(e=>e.json()).then(r=>{e.quote=r,t(r)}).catch(e=>{r(e)})}).catch(e=>{r(e)})})}build(e){let t=new n,r=document,o=r.getElementById(e);t.add(o,"container");let d=r.createElement("div");t.add(d,"qrContainer");let i=r.createElement("img");t.add(i,"qr"),i.src="https://fwd.sgp1.digitaloceanspaces.com/qr-codes/5de168b95f8cfb2ee74c53db.png",d.appendChild(i);let a=r.createElement("div");t.add(a,"forwardContainer");let s=r.createElement("div");s.className="forwards-blend-quote",s.innerHTML=this.quote.quote,t.add(s,"forward");let l=r.createElement("div");l.innerHTML="&ndash; &nbsp;"+this.quote.author,t.add(l,"author"),a.appendChild(s),a.appendChild(l),o.appendChild(d),o.appendChild(a),document.querySelectorAll("#"+e+" .forwards-blend-quote p").forEach(e=>{console.log("para"),e.style.margin=0})}}class d{constructor(e,t){this.type=e||"quote",this.frm=t||"random",this.CDN="https://cdn.jsdelivr.net/gh/forwards-cloud/forwards/",this.forward=null}async init(){if("quote"===this.type){let e=new o(this.frm);await e.get(),e.build("ForwardsBlend")}}}!function(){let e=document;e.addEventListener("readystatechange",(function t(){if("complete"===e.readyState){new d("quote").init(),e.removeEventListener("readystatechange",t)}}))}()}]);