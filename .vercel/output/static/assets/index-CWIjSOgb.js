import{R as fe,a as cu,j as _,r as k,u as du,b as Zn,c as sa,d as hc,_ as jn,e as pc,f as uu}from"./index-mlvi9G3u.js";function fu(n){if(typeof document>"u")return;let e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",e.appendChild(t),t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n))}const hu=n=>{switch(n){case"success":return gu;case"info":return vu;case"warning":return xu;case"error":return _u;default:return null}},pu=Array(12).fill(0),mu=({visible:n,className:e})=>fe.createElement("div",{className:["sonner-loading-wrapper",e].filter(Boolean).join(" "),"data-visible":n},fe.createElement("div",{className:"sonner-spinner"},pu.map((t,i)=>fe.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${i}`})))),gu=fe.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},fe.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),xu=fe.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},fe.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),vu=fe.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},fe.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),_u=fe.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},fe.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),bu=fe.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},fe.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),fe.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),Su=()=>{const[n,e]=fe.useState(document.hidden);return fe.useEffect(()=>{const t=()=>{e(document.hidden)};return document.addEventListener("visibilitychange",t),()=>window.removeEventListener("visibilitychange",t)},[]),n};let lo=1;class yu{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{const t=this.subscribers.indexOf(e);this.subscribers.splice(t,1)}),this.publish=e=>{this.subscribers.forEach(t=>t(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var t;const{message:i,...r}=e,s=typeof e?.id=="number"||((t=e.id)==null?void 0:t.length)>0?e.id:lo++,o=this.toasts.find(c=>c.id===s),a=e.dismissible===void 0?!0:e.dismissible;return this.dismissedToasts.has(s)&&this.dismissedToasts.delete(s),o?this.toasts=this.toasts.map(c=>c.id===s?(this.publish({...c,...e,id:s,title:i}),{...c,...e,id:s,dismissible:a,title:i}):c):this.addToast({title:i,...r,dismissible:a,id:s}),s},this.dismiss=e=>(e?(this.dismissedToasts.add(e),requestAnimationFrame(()=>this.subscribers.forEach(t=>t({id:e,dismiss:!0})))):this.toasts.forEach(t=>{this.subscribers.forEach(i=>i({id:t.id,dismiss:!0}))}),e),this.message=(e,t)=>this.create({...t,message:e}),this.error=(e,t)=>this.create({...t,message:e,type:"error"}),this.success=(e,t)=>this.create({...t,type:"success",message:e}),this.info=(e,t)=>this.create({...t,type:"info",message:e}),this.warning=(e,t)=>this.create({...t,type:"warning",message:e}),this.loading=(e,t)=>this.create({...t,type:"loading",message:e}),this.promise=(e,t)=>{if(!t)return;let i;t.loading!==void 0&&(i=this.create({...t,promise:e,type:"loading",message:t.loading,description:typeof t.description!="function"?t.description:void 0}));const r=Promise.resolve(e instanceof Function?e():e);let s=i!==void 0,o;const a=r.then(async l=>{if(o=["resolve",l],fe.isValidElement(l))s=!1,this.create({id:i,type:"default",message:l});else if(Eu(l)&&!l.ok){s=!1;const d=typeof t.error=="function"?await t.error(`HTTP error! status: ${l.status}`):t.error,u=typeof t.description=="function"?await t.description(`HTTP error! status: ${l.status}`):t.description,x=typeof d=="object"&&!fe.isValidElement(d)?d:{message:d};this.create({id:i,type:"error",description:u,...x})}else if(l instanceof Error){s=!1;const d=typeof t.error=="function"?await t.error(l):t.error,u=typeof t.description=="function"?await t.description(l):t.description,x=typeof d=="object"&&!fe.isValidElement(d)?d:{message:d};this.create({id:i,type:"error",description:u,...x})}else if(t.success!==void 0){s=!1;const d=typeof t.success=="function"?await t.success(l):t.success,u=typeof t.description=="function"?await t.description(l):t.description,x=typeof d=="object"&&!fe.isValidElement(d)?d:{message:d};this.create({id:i,type:"success",description:u,...x})}}).catch(async l=>{if(o=["reject",l],t.error!==void 0){s=!1;const f=typeof t.error=="function"?await t.error(l):t.error,d=typeof t.description=="function"?await t.description(l):t.description,m=typeof f=="object"&&!fe.isValidElement(f)?f:{message:f};this.create({id:i,type:"error",description:d,...m})}}).finally(()=>{s&&(this.dismiss(i),i=void 0),t.finally==null||t.finally.call(t)}),c=()=>new Promise((l,f)=>a.then(()=>o[0]==="reject"?f(o[1]):l(o[1])).catch(f));return typeof i!="string"&&typeof i!="number"?{unwrap:c}:Object.assign(i,{unwrap:c})},this.custom=(e,t)=>{const i=t?.id||lo++;return this.create({jsx:e(i),id:i,...t}),i},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}}const Ot=new yu,Mu=(n,e)=>{const t=e?.id||lo++;return Ot.addToast({title:n,...e,id:t}),t},Eu=n=>n&&typeof n=="object"&&"ok"in n&&typeof n.ok=="boolean"&&"status"in n&&typeof n.status=="number",wu=Mu,Tu=()=>Ot.toasts,Au=()=>Ot.getActiveToasts(),_s=Object.assign(wu,{success:Ot.success,info:Ot.info,warning:Ot.warning,error:Ot.error,custom:Ot.custom,message:Ot.message,promise:Ot.promise,dismiss:Ot.dismiss,loading:Ot.loading},{getHistory:Tu,getToasts:Au});fu("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");function pr(n){return n.label!==void 0}const Ru=3,Cu="24px",Pu="16px",Oa=4e3,Nu=356,Du=14,Lu=45,Iu=200;function sn(...n){return n.filter(Boolean).join(" ")}function Uu(n){const[e,t]=n.split("-"),i=[];return e&&i.push(e),t&&i.push(t),i}const Fu=n=>{var e,t,i,r,s,o,a,c,l;const{invert:f,toast:d,unstyled:u,interacting:m,setHeights:x,visibleToasts:b,heights:p,index:h,toasts:y,expanded:T,removeToast:E,defaultRichColors:C,closeButton:w,style:R,cancelButtonStyle:g,actionButtonStyle:A,className:F="",descriptionClassName:P="",duration:z,position:Y,gap:K,expandByDefault:L,classNames:I,icons:B,closeButtonAriaLabel:te="Close toast"}=n,[ie,q]=fe.useState(null),[be,Ae]=fe.useState(null),[Se,Ie]=fe.useState(!1),[he,X]=fe.useState(!1),[de,ee]=fe.useState(!1),[me,Fe]=fe.useState(!1),[Ne,Ye]=fe.useState(!1),[Ge,qe]=fe.useState(0),[at,He]=fe.useState(0),ft=fe.useRef(d.duration||z||Oa),dt=fe.useRef(null),pt=fe.useRef(null),D=h===0,xt=h+1<=b,Oe=d.type,Qe=d.dismissible!==!1,pe=d.className||"",ht=d.descriptionClassName||"",M=fe.useMemo(()=>p.findIndex(G=>G.toastId===d.id)||0,[p,d.id]),v=fe.useMemo(()=>{var G;return(G=d.closeButton)!=null?G:w},[d.closeButton,w]),O=fe.useMemo(()=>d.duration||z||Oa,[d.duration,z]),Z=fe.useRef(0),ne=fe.useRef(0),oe=fe.useRef(0),ae=fe.useRef(null),[$,J]=Y.split("-"),ge=fe.useMemo(()=>p.reduce((G,ce,re)=>re>=M?G:G+ce.height,0),[p,M]),ye=Su(),ue=d.invert||f,se=Oe==="loading";ne.current=fe.useMemo(()=>M*K+ge,[M,ge]),fe.useEffect(()=>{ft.current=O},[O]),fe.useEffect(()=>{Ie(!0)},[]),fe.useEffect(()=>{const G=pt.current;if(G){const ce=G.getBoundingClientRect().height;return He(ce),x(re=>[{toastId:d.id,height:ce,position:d.position},...re]),()=>x(re=>re.filter(Q=>Q.toastId!==d.id))}},[x,d.id]),fe.useLayoutEffect(()=>{if(!Se)return;const G=pt.current,ce=G.style.height;G.style.height="auto";const re=G.getBoundingClientRect().height;G.style.height=ce,He(re),x(Q=>Q.find(Ce=>Ce.toastId===d.id)?Q.map(Ce=>Ce.toastId===d.id?{...Ce,height:re}:Ce):[{toastId:d.id,height:re,position:d.position},...Q])},[Se,d.title,d.description,x,d.id,d.jsx,d.action,d.cancel]);const Ue=fe.useCallback(()=>{X(!0),qe(ne.current),x(G=>G.filter(ce=>ce.toastId!==d.id)),setTimeout(()=>{E(d)},Iu)},[d,E,x,ne]);fe.useEffect(()=>{if(d.promise&&Oe==="loading"||d.duration===1/0||d.type==="loading")return;let G;return T||m||ye?(()=>{if(oe.current<Z.current){const Q=new Date().getTime()-Z.current;ft.current=ft.current-Q}oe.current=new Date().getTime()})():ft.current!==1/0&&(Z.current=new Date().getTime(),G=setTimeout(()=>{d.onAutoClose==null||d.onAutoClose.call(d,d),Ue()},ft.current)),()=>clearTimeout(G)},[T,m,d,Oe,ye,Ue]),fe.useEffect(()=>{d.delete&&(Ue(),d.onDismiss==null||d.onDismiss.call(d,d))},[Ue,d.delete]);function ke(){var G;if(B?.loading){var ce;return fe.createElement("div",{className:sn(I?.loader,d==null||(ce=d.classNames)==null?void 0:ce.loader,"sonner-loader"),"data-visible":Oe==="loading"},B.loading)}return fe.createElement(mu,{className:sn(I?.loader,d==null||(G=d.classNames)==null?void 0:G.loader),visible:Oe==="loading"})}const Ze=d.icon||B?.[Oe]||hu(Oe);var N,le;return fe.createElement("li",{tabIndex:0,ref:pt,className:sn(F,pe,I?.toast,d==null||(e=d.classNames)==null?void 0:e.toast,I?.default,I?.[Oe],d==null||(t=d.classNames)==null?void 0:t[Oe]),"data-sonner-toast":"","data-rich-colors":(N=d.richColors)!=null?N:C,"data-styled":!(d.jsx||d.unstyled||u),"data-mounted":Se,"data-promise":!!d.promise,"data-swiped":Ne,"data-removed":he,"data-visible":xt,"data-y-position":$,"data-x-position":J,"data-index":h,"data-front":D,"data-swiping":de,"data-dismissible":Qe,"data-type":Oe,"data-invert":ue,"data-swipe-out":me,"data-swipe-direction":be,"data-expanded":!!(T||L&&Se),"data-testid":d.testId,style:{"--index":h,"--toasts-before":h,"--z-index":y.length-h,"--offset":`${he?Ge:ne.current}px`,"--initial-height":L?"auto":`${at}px`,...R,...d.style},onDragEnd:()=>{ee(!1),q(null),ae.current=null},onPointerDown:G=>{G.button!==2&&(se||!Qe||(dt.current=new Date,qe(ne.current),G.target.setPointerCapture(G.pointerId),G.target.tagName!=="BUTTON"&&(ee(!0),ae.current={x:G.clientX,y:G.clientY})))},onPointerUp:()=>{var G,ce,re;if(me||!Qe)return;ae.current=null;const Q=Number(((G=pt.current)==null?void 0:G.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),Re=Number(((ce=pt.current)==null?void 0:ce.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),Ce=new Date().getTime()-((re=dt.current)==null?void 0:re.getTime()),Je=ie==="x"?Q:Re,et=Math.abs(Je)/Ce;if(Math.abs(Je)>=Lu||et>.11){qe(ne.current),d.onDismiss==null||d.onDismiss.call(d,d),Ae(ie==="x"?Q>0?"right":"left":Re>0?"down":"up"),Ue(),Fe(!0);return}else{var vt,mt;(vt=pt.current)==null||vt.style.setProperty("--swipe-amount-x","0px"),(mt=pt.current)==null||mt.style.setProperty("--swipe-amount-y","0px")}Ye(!1),ee(!1),q(null)},onPointerMove:G=>{var ce,re,Q;if(!ae.current||!Qe||((ce=window.getSelection())==null?void 0:ce.toString().length)>0)return;const Ce=G.clientY-ae.current.y,Je=G.clientX-ae.current.x;var et;const vt=(et=n.swipeDirections)!=null?et:Uu(Y);!ie&&(Math.abs(Je)>1||Math.abs(Ce)>1)&&q(Math.abs(Je)>Math.abs(Ce)?"x":"y");let mt={x:0,y:0};const vi=xn=>1/(1.5+Math.abs(xn)/20);if(ie==="y"){if(vt.includes("top")||vt.includes("bottom"))if(vt.includes("top")&&Ce<0||vt.includes("bottom")&&Ce>0)mt.y=Ce;else{const xn=Ce*vi(Ce);mt.y=Math.abs(xn)<Math.abs(Ce)?xn:Ce}}else if(ie==="x"&&(vt.includes("left")||vt.includes("right")))if(vt.includes("left")&&Je<0||vt.includes("right")&&Je>0)mt.x=Je;else{const xn=Je*vi(Je);mt.x=Math.abs(xn)<Math.abs(Je)?xn:Je}(Math.abs(mt.x)>0||Math.abs(mt.y)>0)&&Ye(!0),(re=pt.current)==null||re.style.setProperty("--swipe-amount-x",`${mt.x}px`),(Q=pt.current)==null||Q.style.setProperty("--swipe-amount-y",`${mt.y}px`)}},v&&!d.jsx&&Oe!=="loading"?fe.createElement("button",{"aria-label":te,"data-disabled":se,"data-close-button":!0,onClick:se||!Qe?()=>{}:()=>{Ue(),d.onDismiss==null||d.onDismiss.call(d,d)},className:sn(I?.closeButton,d==null||(i=d.classNames)==null?void 0:i.closeButton)},(le=B?.close)!=null?le:bu):null,(Oe||d.icon||d.promise)&&d.icon!==null&&(B?.[Oe]!==null||d.icon)?fe.createElement("div",{"data-icon":"",className:sn(I?.icon,d==null||(r=d.classNames)==null?void 0:r.icon)},d.promise||d.type==="loading"&&!d.icon?d.icon||ke():null,d.type!=="loading"?Ze:null):null,fe.createElement("div",{"data-content":"",className:sn(I?.content,d==null||(s=d.classNames)==null?void 0:s.content)},fe.createElement("div",{"data-title":"",className:sn(I?.title,d==null||(o=d.classNames)==null?void 0:o.title)},d.jsx?d.jsx:typeof d.title=="function"?d.title():d.title),d.description?fe.createElement("div",{"data-description":"",className:sn(P,ht,I?.description,d==null||(a=d.classNames)==null?void 0:a.description)},typeof d.description=="function"?d.description():d.description):null),fe.isValidElement(d.cancel)?d.cancel:d.cancel&&pr(d.cancel)?fe.createElement("button",{"data-button":!0,"data-cancel":!0,style:d.cancelButtonStyle||g,onClick:G=>{pr(d.cancel)&&Qe&&(d.cancel.onClick==null||d.cancel.onClick.call(d.cancel,G),Ue())},className:sn(I?.cancelButton,d==null||(c=d.classNames)==null?void 0:c.cancelButton)},d.cancel.label):null,fe.isValidElement(d.action)?d.action:d.action&&pr(d.action)?fe.createElement("button",{"data-button":!0,"data-action":!0,style:d.actionButtonStyle||A,onClick:G=>{pr(d.action)&&(d.action.onClick==null||d.action.onClick.call(d.action,G),!G.defaultPrevented&&Ue())},className:sn(I?.actionButton,d==null||(l=d.classNames)==null?void 0:l.actionButton)},d.action.label):null)};function Ba(){if(typeof window>"u"||typeof document>"u")return"ltr";const n=document.documentElement.getAttribute("dir");return n==="auto"||!n?window.getComputedStyle(document.documentElement).direction:n}function Ou(n,e){const t={};return[n,e].forEach((i,r)=>{const s=r===1,o=s?"--mobile-offset":"--offset",a=s?Pu:Cu;function c(l){["top","right","bottom","left"].forEach(f=>{t[`${o}-${f}`]=typeof l=="number"?`${l}px`:l})}typeof i=="number"||typeof i=="string"?c(i):typeof i=="object"?["top","right","bottom","left"].forEach(l=>{i[l]===void 0?t[`${o}-${l}`]=a:t[`${o}-${l}`]=typeof i[l]=="number"?`${i[l]}px`:i[l]}):c(a)}),t}const Bu=fe.forwardRef(function(e,t){const{id:i,invert:r,position:s="bottom-right",hotkey:o=["altKey","KeyT"],expand:a,closeButton:c,className:l,offset:f,mobileOffset:d,theme:u="light",richColors:m,duration:x,style:b,visibleToasts:p=Ru,toastOptions:h,dir:y=Ba(),gap:T=Du,icons:E,containerAriaLabel:C="Notifications"}=e,[w,R]=fe.useState([]),g=fe.useMemo(()=>i?w.filter(Se=>Se.toasterId===i):w.filter(Se=>!Se.toasterId),[w,i]),A=fe.useMemo(()=>Array.from(new Set([s].concat(g.filter(Se=>Se.position).map(Se=>Se.position)))),[g,s]),[F,P]=fe.useState([]),[z,Y]=fe.useState(!1),[K,L]=fe.useState(!1),[I,B]=fe.useState(u!=="system"?u:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),te=fe.useRef(null),ie=o.join("+").replace(/Key/g,"").replace(/Digit/g,""),q=fe.useRef(null),be=fe.useRef(!1),Ae=fe.useCallback(Se=>{R(Ie=>{var he;return(he=Ie.find(X=>X.id===Se.id))!=null&&he.delete||Ot.dismiss(Se.id),Ie.filter(({id:X})=>X!==Se.id)})},[]);return fe.useEffect(()=>Ot.subscribe(Se=>{if(Se.dismiss){requestAnimationFrame(()=>{R(Ie=>Ie.map(he=>he.id===Se.id?{...he,delete:!0}:he))});return}setTimeout(()=>{cu.flushSync(()=>{R(Ie=>{const he=Ie.findIndex(X=>X.id===Se.id);return he!==-1?[...Ie.slice(0,he),{...Ie[he],...Se},...Ie.slice(he+1)]:[Se,...Ie]})})})}),[w]),fe.useEffect(()=>{if(u!=="system"){B(u);return}if(u==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?B("dark"):B("light")),typeof window>"u")return;const Se=window.matchMedia("(prefers-color-scheme: dark)");try{Se.addEventListener("change",({matches:Ie})=>{B(Ie?"dark":"light")})}catch{Se.addListener(({matches:he})=>{try{B(he?"dark":"light")}catch(X){console.error(X)}})}},[u]),fe.useEffect(()=>{w.length<=1&&Y(!1)},[w]),fe.useEffect(()=>{const Se=Ie=>{var he;if(o.every(ee=>Ie[ee]||Ie.code===ee)){var de;Y(!0),(de=te.current)==null||de.focus()}Ie.code==="Escape"&&(document.activeElement===te.current||(he=te.current)!=null&&he.contains(document.activeElement))&&Y(!1)};return document.addEventListener("keydown",Se),()=>document.removeEventListener("keydown",Se)},[o]),fe.useEffect(()=>{if(te.current)return()=>{q.current&&(q.current.focus({preventScroll:!0}),q.current=null,be.current=!1)}},[te.current]),fe.createElement("section",{ref:t,"aria-label":`${C} ${ie}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},A.map((Se,Ie)=>{var he;const[X,de]=Se.split("-");return g.length?fe.createElement("ol",{key:Se,dir:y==="auto"?Ba():y,tabIndex:-1,ref:te,className:l,"data-sonner-toaster":!0,"data-sonner-theme":I,"data-y-position":X,"data-x-position":de,style:{"--front-toast-height":`${((he=F[0])==null?void 0:he.height)||0}px`,"--width":`${Nu}px`,"--gap":`${T}px`,...b,...Ou(f,d)},onBlur:ee=>{be.current&&!ee.currentTarget.contains(ee.relatedTarget)&&(be.current=!1,q.current&&(q.current.focus({preventScroll:!0}),q.current=null))},onFocus:ee=>{ee.target instanceof HTMLElement&&ee.target.dataset.dismissible==="false"||be.current||(be.current=!0,q.current=ee.relatedTarget)},onMouseEnter:()=>Y(!0),onMouseMove:()=>Y(!0),onMouseLeave:()=>{K||Y(!1)},onDragEnd:()=>Y(!1),onPointerDown:ee=>{ee.target instanceof HTMLElement&&ee.target.dataset.dismissible==="false"||L(!0)},onPointerUp:()=>L(!1)},g.filter(ee=>!ee.position&&Ie===0||ee.position===Se).map((ee,me)=>{var Fe,Ne;return fe.createElement(Fu,{key:ee.id,icons:E,index:me,toast:ee,defaultRichColors:m,duration:(Fe=h?.duration)!=null?Fe:x,className:h?.className,descriptionClassName:h?.descriptionClassName,invert:r,visibleToasts:p,closeButton:(Ne=h?.closeButton)!=null?Ne:c,interacting:K,position:Se,style:h?.style,unstyled:h?.unstyled,classNames:h?.classNames,cancelButtonStyle:h?.cancelButtonStyle,actionButtonStyle:h?.actionButtonStyle,closeButtonAriaLabel:h?.closeButtonAriaLabel,removeToast:Ae,toasts:g.filter(Ye=>Ye.position==ee.position),heights:F.filter(Ye=>Ye.position==ee.position),setHeights:P,expandByDefault:a,gap:T,expanded:z,swipeDirections:e.swipeDirections})})):null}))}),ku=({...n})=>_.jsx(Bu,{className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...n});const mc=(...n)=>n.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();const zu=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const Gu=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,i)=>i?i.toUpperCase():t.toLowerCase());const ka=n=>{const e=Gu(n);return e.charAt(0).toUpperCase()+e.slice(1)};var Vu={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Hu=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};const Wu=k.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},c)=>k.createElement("svg",{ref:c,...Vu,width:e,height:e,stroke:n,strokeWidth:i?Number(t)*24/Number(e):t,className:mc("lucide",r),...!s&&!Hu(a)&&{"aria-hidden":"true"},...a},[...o.map(([l,f])=>k.createElement(l,f)),...Array.isArray(s)?s:[s]]));const Yt=(n,e)=>{const t=k.forwardRef(({className:i,...r},s)=>k.createElement(Wu,{ref:s,iconNode:e,className:mc(`lucide-${zu(ka(n))}`,`lucide-${n}`,i),...r}));return t.displayName=ka(n),t};const ju=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],qn=Yt("arrow-up-right",ju);const Xu=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],qu=Yt("chevron-left",Xu);const Yu=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],$u=Yt("chevron-right",Yu);const Ku=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Zu=Yt("external-link",Ku);const Ju=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Qu=Yt("github",Ju);const ef=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],tf=Yt("linkedin",ef);const nf=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],rf=Yt("loader-circle",nf);const sf=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],of=Yt("mail",sf);const af=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],lf=Yt("menu",af);const cf=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],gc=Yt("play",cf);const df=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]],uf=Yt("quote",df);const ff=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],oa=Yt("x",ff);function xc(n){var e,t,i="";if(typeof n=="string"||typeof n=="number")i+=n;else if(typeof n=="object")if(Array.isArray(n)){var r=n.length;for(e=0;e<r;e++)n[e]&&(t=xc(n[e]))&&(i&&(i+=" "),i+=t)}else for(t in n)n[t]&&(i&&(i+=" "),i+=t);return i}function hf(){for(var n,e,t=0,i="",r=arguments.length;t<r;t++)(n=arguments[t])&&(e=xc(n))&&(i&&(i+=" "),i+=e);return i}const pf=(n,e)=>{const t=new Array(n.length+e.length);for(let i=0;i<n.length;i++)t[i]=n[i];for(let i=0;i<e.length;i++)t[n.length+i]=e[i];return t},mf=(n,e)=>({classGroupId:n,validator:e}),vc=(n=new Map,e=null,t)=>({nextPart:n,validators:e,classGroupId:t}),ts="-",za=[],gf="arbitrary..",xf=n=>{const e=_f(n),{conflictingClassGroups:t,conflictingClassGroupModifiers:i}=n;return{getClassGroupId:o=>{if(o.startsWith("[")&&o.endsWith("]"))return vf(o);const a=o.split(ts),c=a[0]===""&&a.length>1?1:0;return _c(a,c,e)},getConflictingClassGroupIds:(o,a)=>{if(a){const c=i[o],l=t[o];return c?l?pf(l,c):c:l||za}return t[o]||za}}},_c=(n,e,t)=>{if(n.length-e===0)return t.classGroupId;const r=n[e],s=t.nextPart.get(r);if(s){const l=_c(n,e+1,s);if(l)return l}const o=t.validators;if(o===null)return;const a=e===0?n.join(ts):n.slice(e).join(ts),c=o.length;for(let l=0;l<c;l++){const f=o[l];if(f.validator(a))return f.classGroupId}},vf=n=>n.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const e=n.slice(1,-1),t=e.indexOf(":"),i=e.slice(0,t);return i?gf+i:void 0})(),_f=n=>{const{theme:e,classGroups:t}=n;return bf(t,e)},bf=(n,e)=>{const t=vc();for(const i in n){const r=n[i];aa(r,t,i,e)}return t},aa=(n,e,t,i)=>{const r=n.length;for(let s=0;s<r;s++){const o=n[s];Sf(o,e,t,i)}},Sf=(n,e,t,i)=>{if(typeof n=="string"){yf(n,e,t);return}if(typeof n=="function"){Mf(n,e,t,i);return}Ef(n,e,t,i)},yf=(n,e,t)=>{const i=n===""?e:bc(e,n);i.classGroupId=t},Mf=(n,e,t,i)=>{if(wf(n)){aa(n(i),e,t,i);return}e.validators===null&&(e.validators=[]),e.validators.push(mf(t,n))},Ef=(n,e,t,i)=>{const r=Object.entries(n),s=r.length;for(let o=0;o<s;o++){const[a,c]=r[o];aa(c,bc(e,a),t,i)}},bc=(n,e)=>{let t=n;const i=e.split(ts),r=i.length;for(let s=0;s<r;s++){const o=i[s];let a=t.nextPart.get(o);a||(a=vc(),t.nextPart.set(o,a)),t=a}return t},wf=n=>"isThemeGetter"in n&&n.isThemeGetter===!0,Tf=n=>{if(n<1)return{get:()=>{},set:()=>{}};let e=0,t=Object.create(null),i=Object.create(null);const r=(s,o)=>{t[s]=o,e++,e>n&&(e=0,i=t,t=Object.create(null))};return{get(s){let o=t[s];if(o!==void 0)return o;if((o=i[s])!==void 0)return r(s,o),o},set(s,o){s in t?t[s]=o:r(s,o)}}},co="!",Ga=":",Af=[],Va=(n,e,t,i,r)=>({modifiers:n,hasImportantModifier:e,baseClassName:t,maybePostfixModifierPosition:i,isExternal:r}),Rf=n=>{const{prefix:e,experimentalParseClassName:t}=n;let i=r=>{const s=[];let o=0,a=0,c=0,l;const f=r.length;for(let b=0;b<f;b++){const p=r[b];if(o===0&&a===0){if(p===Ga){s.push(r.slice(c,b)),c=b+1;continue}if(p==="/"){l=b;continue}}p==="["?o++:p==="]"?o--:p==="("?a++:p===")"&&a--}const d=s.length===0?r:r.slice(c);let u=d,m=!1;d.endsWith(co)?(u=d.slice(0,-1),m=!0):d.startsWith(co)&&(u=d.slice(1),m=!0);const x=l&&l>c?l-c:void 0;return Va(s,m,u,x)};if(e){const r=e+Ga,s=i;i=o=>o.startsWith(r)?s(o.slice(r.length)):Va(Af,!1,o,void 0,!0)}if(t){const r=i;i=s=>t({className:s,parseClassName:r})}return i},Cf=n=>{const e=new Map;return n.orderSensitiveModifiers.forEach((t,i)=>{e.set(t,1e6+i)}),t=>{const i=[];let r=[];for(let s=0;s<t.length;s++){const o=t[s],a=o[0]==="[",c=e.has(o);a||c?(r.length>0&&(r.sort(),i.push(...r),r=[]),i.push(o)):r.push(o)}return r.length>0&&(r.sort(),i.push(...r)),i}},Pf=n=>({cache:Tf(n.cacheSize),parseClassName:Rf(n),sortModifiers:Cf(n),postfixLookupClassGroupIds:Nf(n),...xf(n)}),Nf=n=>{const e=Object.create(null),t=n.postfixLookupClassGroups;if(t)for(let i=0;i<t.length;i++)e[t[i]]=!0;return e},Df=/\s+/,Lf=(n,e)=>{const{parseClassName:t,getClassGroupId:i,getConflictingClassGroupIds:r,sortModifiers:s,postfixLookupClassGroupIds:o}=e,a=[],c=n.trim().split(Df);let l="";for(let f=c.length-1;f>=0;f-=1){const d=c[f],{isExternal:u,modifiers:m,hasImportantModifier:x,baseClassName:b,maybePostfixModifierPosition:p}=t(d);if(u){l=d+(l.length>0?" "+l:l);continue}let h=!!p,y;if(h){const R=b.substring(0,p);y=i(R);const g=y&&o[y]?i(b):void 0;g&&g!==y&&(y=g,h=!1)}else y=i(b);if(!y){if(!h){l=d+(l.length>0?" "+l:l);continue}if(y=i(b),!y){l=d+(l.length>0?" "+l:l);continue}h=!1}const T=m.length===0?"":m.length===1?m[0]:s(m).join(":"),E=x?T+co:T,C=E+y;if(a.indexOf(C)>-1)continue;a.push(C);const w=r(y,h);for(let R=0;R<w.length;++R){const g=w[R];a.push(E+g)}l=d+(l.length>0?" "+l:l)}return l},If=(...n)=>{let e=0,t,i,r="";for(;e<n.length;)(t=n[e++])&&(i=Sc(t))&&(r&&(r+=" "),r+=i);return r},Sc=n=>{if(typeof n=="string")return n;let e,t="";for(let i=0;i<n.length;i++)n[i]&&(e=Sc(n[i]))&&(t&&(t+=" "),t+=e);return t},Uf=(n,...e)=>{let t,i,r,s;const o=c=>{const l=e.reduce((f,d)=>d(f),n());return t=Pf(l),i=t.cache.get,r=t.cache.set,s=a,a(c)},a=c=>{const l=i(c);if(l)return l;const f=Lf(c,t);return r(c,f),f};return s=o,(...c)=>s(If(...c))},Ff=[],Et=n=>{const e=t=>t[n]||Ff;return e.isThemeGetter=!0,e},yc=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Mc=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Of=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,Bf=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,kf=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,zf=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Gf=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Vf=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Fn=n=>Of.test(n),Xe=n=>!!n&&!Number.isNaN(Number(n)),on=n=>!!n&&Number.isInteger(Number(n)),bs=n=>n.endsWith("%")&&Xe(n.slice(0,-1)),vn=n=>Bf.test(n),Ec=()=>!0,Hf=n=>kf.test(n)&&!zf.test(n),la=()=>!1,Wf=n=>Gf.test(n),jf=n=>Vf.test(n),Xf=n=>!Ee(n)&&!Te(n),qf=n=>n.startsWith("@container")&&(n[10]==="/"&&n[11]!==void 0||n[11]==="s"&&n[16]!==void 0&&n.startsWith("-size/",10)||n[11]==="n"&&n[18]!==void 0&&n.startsWith("-normal/",10)),Yf=n=>Jn(n,Ac,la),Ee=n=>yc.test(n),ei=n=>Jn(n,Rc,Hf),Ha=n=>Jn(n,nh,Xe),$f=n=>Jn(n,Pc,Ec),Kf=n=>Jn(n,Cc,la),Wa=n=>Jn(n,wc,la),Zf=n=>Jn(n,Tc,jf),mr=n=>Jn(n,Nc,Wf),Te=n=>Mc.test(n),Yi=n=>mi(n,Rc),Jf=n=>mi(n,Cc),ja=n=>mi(n,wc),Qf=n=>mi(n,Ac),eh=n=>mi(n,Tc),gr=n=>mi(n,Nc,!0),th=n=>mi(n,Pc,!0),Jn=(n,e,t)=>{const i=yc.exec(n);return i?i[1]?e(i[1]):t(i[2]):!1},mi=(n,e,t=!1)=>{const i=Mc.exec(n);return i?i[1]?e(i[1]):t:!1},wc=n=>n==="position"||n==="percentage",Tc=n=>n==="image"||n==="url",Ac=n=>n==="length"||n==="size"||n==="bg-size",Rc=n=>n==="length",nh=n=>n==="number",Cc=n=>n==="family-name",Pc=n=>n==="number"||n==="weight",Nc=n=>n==="shadow",ih=()=>{const n=Et("color"),e=Et("font"),t=Et("text"),i=Et("font-weight"),r=Et("tracking"),s=Et("leading"),o=Et("breakpoint"),a=Et("container"),c=Et("spacing"),l=Et("radius"),f=Et("shadow"),d=Et("inset-shadow"),u=Et("text-shadow"),m=Et("drop-shadow"),x=Et("blur"),b=Et("perspective"),p=Et("aspect"),h=Et("ease"),y=Et("animate"),T=()=>["auto","avoid","all","avoid-page","page","left","right","column"],E=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],C=()=>[...E(),Te,Ee],w=()=>["auto","hidden","clip","visible","scroll"],R=()=>["auto","contain","none"],g=()=>[Te,Ee,c],A=()=>[Fn,"full","auto",...g()],F=()=>[on,"none","subgrid",Te,Ee],P=()=>["auto",{span:["full",on,Te,Ee]},on,Te,Ee],z=()=>[on,"auto",Te,Ee],Y=()=>["auto","min","max","fr",Te,Ee],K=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],L=()=>["start","end","center","stretch","center-safe","end-safe"],I=()=>["auto",...g()],B=()=>[Fn,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...g()],te=()=>[Fn,"screen","full","dvw","lvw","svw","min","max","fit",...g()],ie=()=>[Fn,"screen","full","lh","dvh","lvh","svh","min","max","fit",...g()],q=()=>[n,Te,Ee],be=()=>[...E(),ja,Wa,{position:[Te,Ee]}],Ae=()=>["no-repeat",{repeat:["","x","y","space","round"]}],Se=()=>["auto","cover","contain",Qf,Yf,{size:[Te,Ee]}],Ie=()=>[bs,Yi,ei],he=()=>["","none","full",l,Te,Ee],X=()=>["",Xe,Yi,ei],de=()=>["solid","dashed","dotted","double"],ee=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],me=()=>[Xe,bs,ja,Wa],Fe=()=>["","none",x,Te,Ee],Ne=()=>["none",Xe,Te,Ee],Ye=()=>["none",Xe,Te,Ee],Ge=()=>[Xe,Te,Ee],qe=()=>[Fn,"full",...g()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[vn],breakpoint:[vn],color:[Ec],container:[vn],"drop-shadow":[vn],ease:["in","out","in-out"],font:[Xf],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[vn],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[vn],shadow:[vn],spacing:["px",Xe],text:[vn],"text-shadow":[vn],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Fn,Ee,Te,p]}],container:["container"],"container-type":[{"@container":["","normal","size",Te,Ee]}],"container-named":[qf],columns:[{columns:[Xe,Ee,Te,a]}],"break-after":[{"break-after":T()}],"break-before":[{"break-before":T()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:C()}],overflow:[{overflow:w()}],"overflow-x":[{"overflow-x":w()}],"overflow-y":[{"overflow-y":w()}],overscroll:[{overscroll:R()}],"overscroll-x":[{"overscroll-x":R()}],"overscroll-y":[{"overscroll-y":R()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:A()}],"inset-x":[{"inset-x":A()}],"inset-y":[{"inset-y":A()}],start:[{"inset-s":A(),start:A()}],end:[{"inset-e":A(),end:A()}],"inset-bs":[{"inset-bs":A()}],"inset-be":[{"inset-be":A()}],top:[{top:A()}],right:[{right:A()}],bottom:[{bottom:A()}],left:[{left:A()}],visibility:["visible","invisible","collapse"],z:[{z:[on,"auto",Te,Ee]}],basis:[{basis:[Fn,"full","auto",a,...g()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Xe,Fn,"auto","initial","none",Ee]}],grow:[{grow:["",Xe,Te,Ee]}],shrink:[{shrink:["",Xe,Te,Ee]}],order:[{order:[on,"first","last","none",Te,Ee]}],"grid-cols":[{"grid-cols":F()}],"col-start-end":[{col:P()}],"col-start":[{"col-start":z()}],"col-end":[{"col-end":z()}],"grid-rows":[{"grid-rows":F()}],"row-start-end":[{row:P()}],"row-start":[{"row-start":z()}],"row-end":[{"row-end":z()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":Y()}],"auto-rows":[{"auto-rows":Y()}],gap:[{gap:g()}],"gap-x":[{"gap-x":g()}],"gap-y":[{"gap-y":g()}],"justify-content":[{justify:[...K(),"normal"]}],"justify-items":[{"justify-items":[...L(),"normal"]}],"justify-self":[{"justify-self":["auto",...L()]}],"align-content":[{content:["normal",...K()]}],"align-items":[{items:[...L(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...L(),{baseline:["","last"]}]}],"place-content":[{"place-content":K()}],"place-items":[{"place-items":[...L(),"baseline"]}],"place-self":[{"place-self":["auto",...L()]}],p:[{p:g()}],px:[{px:g()}],py:[{py:g()}],ps:[{ps:g()}],pe:[{pe:g()}],pbs:[{pbs:g()}],pbe:[{pbe:g()}],pt:[{pt:g()}],pr:[{pr:g()}],pb:[{pb:g()}],pl:[{pl:g()}],m:[{m:I()}],mx:[{mx:I()}],my:[{my:I()}],ms:[{ms:I()}],me:[{me:I()}],mbs:[{mbs:I()}],mbe:[{mbe:I()}],mt:[{mt:I()}],mr:[{mr:I()}],mb:[{mb:I()}],ml:[{ml:I()}],"space-x":[{"space-x":g()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":g()}],"space-y-reverse":["space-y-reverse"],size:[{size:B()}],"inline-size":[{inline:["auto",...te()]}],"min-inline-size":[{"min-inline":["auto",...te()]}],"max-inline-size":[{"max-inline":["none",...te()]}],"block-size":[{block:["auto",...ie()]}],"min-block-size":[{"min-block":["auto",...ie()]}],"max-block-size":[{"max-block":["none",...ie()]}],w:[{w:[a,"screen",...B()]}],"min-w":[{"min-w":[a,"screen","none",...B()]}],"max-w":[{"max-w":[a,"screen","none","prose",{screen:[o]},...B()]}],h:[{h:["screen","lh",...B()]}],"min-h":[{"min-h":["screen","lh","none",...B()]}],"max-h":[{"max-h":["screen","lh",...B()]}],"font-size":[{text:["base",t,Yi,ei]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[i,th,$f]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",bs,Ee]}],"font-family":[{font:[Jf,Kf,e]}],"font-features":[{"font-features":[Ee]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[r,Te,Ee]}],"line-clamp":[{"line-clamp":[Xe,"none",Te,Ha]}],leading:[{leading:[s,...g()]}],"list-image":[{"list-image":["none",Te,Ee]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Te,Ee]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:q()}],"text-color":[{text:q()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...de(),"wavy"]}],"text-decoration-thickness":[{decoration:[Xe,"from-font","auto",Te,ei]}],"text-decoration-color":[{decoration:q()}],"underline-offset":[{"underline-offset":[Xe,"auto",Te,Ee]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:g()}],"tab-size":[{tab:[on,Te,Ee]}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Te,Ee]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Te,Ee]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:be()}],"bg-repeat":[{bg:Ae()}],"bg-size":[{bg:Se()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},on,Te,Ee],radial:["",Te,Ee],conic:[on,Te,Ee]},eh,Zf]}],"bg-color":[{bg:q()}],"gradient-from-pos":[{from:Ie()}],"gradient-via-pos":[{via:Ie()}],"gradient-to-pos":[{to:Ie()}],"gradient-from":[{from:q()}],"gradient-via":[{via:q()}],"gradient-to":[{to:q()}],rounded:[{rounded:he()}],"rounded-s":[{"rounded-s":he()}],"rounded-e":[{"rounded-e":he()}],"rounded-t":[{"rounded-t":he()}],"rounded-r":[{"rounded-r":he()}],"rounded-b":[{"rounded-b":he()}],"rounded-l":[{"rounded-l":he()}],"rounded-ss":[{"rounded-ss":he()}],"rounded-se":[{"rounded-se":he()}],"rounded-ee":[{"rounded-ee":he()}],"rounded-es":[{"rounded-es":he()}],"rounded-tl":[{"rounded-tl":he()}],"rounded-tr":[{"rounded-tr":he()}],"rounded-br":[{"rounded-br":he()}],"rounded-bl":[{"rounded-bl":he()}],"border-w":[{border:X()}],"border-w-x":[{"border-x":X()}],"border-w-y":[{"border-y":X()}],"border-w-s":[{"border-s":X()}],"border-w-e":[{"border-e":X()}],"border-w-bs":[{"border-bs":X()}],"border-w-be":[{"border-be":X()}],"border-w-t":[{"border-t":X()}],"border-w-r":[{"border-r":X()}],"border-w-b":[{"border-b":X()}],"border-w-l":[{"border-l":X()}],"divide-x":[{"divide-x":X()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":X()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...de(),"hidden","none"]}],"divide-style":[{divide:[...de(),"hidden","none"]}],"border-color":[{border:q()}],"border-color-x":[{"border-x":q()}],"border-color-y":[{"border-y":q()}],"border-color-s":[{"border-s":q()}],"border-color-e":[{"border-e":q()}],"border-color-bs":[{"border-bs":q()}],"border-color-be":[{"border-be":q()}],"border-color-t":[{"border-t":q()}],"border-color-r":[{"border-r":q()}],"border-color-b":[{"border-b":q()}],"border-color-l":[{"border-l":q()}],"divide-color":[{divide:q()}],"outline-style":[{outline:[...de(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Xe,Te,Ee]}],"outline-w":[{outline:["",Xe,Yi,ei]}],"outline-color":[{outline:q()}],shadow:[{shadow:["","none",f,gr,mr]}],"shadow-color":[{shadow:q()}],"inset-shadow":[{"inset-shadow":["none",d,gr,mr]}],"inset-shadow-color":[{"inset-shadow":q()}],"ring-w":[{ring:X()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:q()}],"ring-offset-w":[{"ring-offset":[Xe,ei]}],"ring-offset-color":[{"ring-offset":q()}],"inset-ring-w":[{"inset-ring":X()}],"inset-ring-color":[{"inset-ring":q()}],"text-shadow":[{"text-shadow":["none",u,gr,mr]}],"text-shadow-color":[{"text-shadow":q()}],opacity:[{opacity:[Xe,Te,Ee]}],"mix-blend":[{"mix-blend":[...ee(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":ee()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Xe]}],"mask-image-linear-from-pos":[{"mask-linear-from":me()}],"mask-image-linear-to-pos":[{"mask-linear-to":me()}],"mask-image-linear-from-color":[{"mask-linear-from":q()}],"mask-image-linear-to-color":[{"mask-linear-to":q()}],"mask-image-t-from-pos":[{"mask-t-from":me()}],"mask-image-t-to-pos":[{"mask-t-to":me()}],"mask-image-t-from-color":[{"mask-t-from":q()}],"mask-image-t-to-color":[{"mask-t-to":q()}],"mask-image-r-from-pos":[{"mask-r-from":me()}],"mask-image-r-to-pos":[{"mask-r-to":me()}],"mask-image-r-from-color":[{"mask-r-from":q()}],"mask-image-r-to-color":[{"mask-r-to":q()}],"mask-image-b-from-pos":[{"mask-b-from":me()}],"mask-image-b-to-pos":[{"mask-b-to":me()}],"mask-image-b-from-color":[{"mask-b-from":q()}],"mask-image-b-to-color":[{"mask-b-to":q()}],"mask-image-l-from-pos":[{"mask-l-from":me()}],"mask-image-l-to-pos":[{"mask-l-to":me()}],"mask-image-l-from-color":[{"mask-l-from":q()}],"mask-image-l-to-color":[{"mask-l-to":q()}],"mask-image-x-from-pos":[{"mask-x-from":me()}],"mask-image-x-to-pos":[{"mask-x-to":me()}],"mask-image-x-from-color":[{"mask-x-from":q()}],"mask-image-x-to-color":[{"mask-x-to":q()}],"mask-image-y-from-pos":[{"mask-y-from":me()}],"mask-image-y-to-pos":[{"mask-y-to":me()}],"mask-image-y-from-color":[{"mask-y-from":q()}],"mask-image-y-to-color":[{"mask-y-to":q()}],"mask-image-radial":[{"mask-radial":[Te,Ee]}],"mask-image-radial-from-pos":[{"mask-radial-from":me()}],"mask-image-radial-to-pos":[{"mask-radial-to":me()}],"mask-image-radial-from-color":[{"mask-radial-from":q()}],"mask-image-radial-to-color":[{"mask-radial-to":q()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":E()}],"mask-image-conic-pos":[{"mask-conic":[Xe]}],"mask-image-conic-from-pos":[{"mask-conic-from":me()}],"mask-image-conic-to-pos":[{"mask-conic-to":me()}],"mask-image-conic-from-color":[{"mask-conic-from":q()}],"mask-image-conic-to-color":[{"mask-conic-to":q()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:be()}],"mask-repeat":[{mask:Ae()}],"mask-size":[{mask:Se()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",Te,Ee]}],filter:[{filter:["","none",Te,Ee]}],blur:[{blur:Fe()}],brightness:[{brightness:[Xe,Te,Ee]}],contrast:[{contrast:[Xe,Te,Ee]}],"drop-shadow":[{"drop-shadow":["","none",m,gr,mr]}],"drop-shadow-color":[{"drop-shadow":q()}],grayscale:[{grayscale:["",Xe,Te,Ee]}],"hue-rotate":[{"hue-rotate":[Xe,Te,Ee]}],invert:[{invert:["",Xe,Te,Ee]}],saturate:[{saturate:[Xe,Te,Ee]}],sepia:[{sepia:["",Xe,Te,Ee]}],"backdrop-filter":[{"backdrop-filter":["","none",Te,Ee]}],"backdrop-blur":[{"backdrop-blur":Fe()}],"backdrop-brightness":[{"backdrop-brightness":[Xe,Te,Ee]}],"backdrop-contrast":[{"backdrop-contrast":[Xe,Te,Ee]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Xe,Te,Ee]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Xe,Te,Ee]}],"backdrop-invert":[{"backdrop-invert":["",Xe,Te,Ee]}],"backdrop-opacity":[{"backdrop-opacity":[Xe,Te,Ee]}],"backdrop-saturate":[{"backdrop-saturate":[Xe,Te,Ee]}],"backdrop-sepia":[{"backdrop-sepia":["",Xe,Te,Ee]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":g()}],"border-spacing-x":[{"border-spacing-x":g()}],"border-spacing-y":[{"border-spacing-y":g()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Te,Ee]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Xe,"initial",Te,Ee]}],ease:[{ease:["linear","initial",h,Te,Ee]}],delay:[{delay:[Xe,Te,Ee]}],animate:[{animate:["none",y,Te,Ee]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[b,Te,Ee]}],"perspective-origin":[{"perspective-origin":C()}],rotate:[{rotate:Ne()}],"rotate-x":[{"rotate-x":Ne()}],"rotate-y":[{"rotate-y":Ne()}],"rotate-z":[{"rotate-z":Ne()}],scale:[{scale:Ye()}],"scale-x":[{"scale-x":Ye()}],"scale-y":[{"scale-y":Ye()}],"scale-z":[{"scale-z":Ye()}],"scale-3d":["scale-3d"],skew:[{skew:Ge()}],"skew-x":[{"skew-x":Ge()}],"skew-y":[{"skew-y":Ge()}],transform:[{transform:[Te,Ee,"","none","gpu","cpu"]}],"transform-origin":[{origin:C()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:qe()}],"translate-x":[{"translate-x":qe()}],"translate-y":[{"translate-y":qe()}],"translate-z":[{"translate-z":qe()}],"translate-none":["translate-none"],zoom:[{zoom:[on,Te,Ee]}],accent:[{accent:q()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:q()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Te,Ee]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scrollbar-thumb-color":[{"scrollbar-thumb":q()}],"scrollbar-track-color":[{"scrollbar-track":q()}],"scrollbar-gutter":[{"scrollbar-gutter":["auto","stable","both"]}],"scrollbar-w":[{scrollbar:["auto","thin","none"]}],"scroll-m":[{"scroll-m":g()}],"scroll-mx":[{"scroll-mx":g()}],"scroll-my":[{"scroll-my":g()}],"scroll-ms":[{"scroll-ms":g()}],"scroll-me":[{"scroll-me":g()}],"scroll-mbs":[{"scroll-mbs":g()}],"scroll-mbe":[{"scroll-mbe":g()}],"scroll-mt":[{"scroll-mt":g()}],"scroll-mr":[{"scroll-mr":g()}],"scroll-mb":[{"scroll-mb":g()}],"scroll-ml":[{"scroll-ml":g()}],"scroll-p":[{"scroll-p":g()}],"scroll-px":[{"scroll-px":g()}],"scroll-py":[{"scroll-py":g()}],"scroll-ps":[{"scroll-ps":g()}],"scroll-pe":[{"scroll-pe":g()}],"scroll-pbs":[{"scroll-pbs":g()}],"scroll-pbe":[{"scroll-pbe":g()}],"scroll-pt":[{"scroll-pt":g()}],"scroll-pr":[{"scroll-pr":g()}],"scroll-pb":[{"scroll-pb":g()}],"scroll-pl":[{"scroll-pl":g()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Te,Ee]}],fill:[{fill:["none",...q()]}],"stroke-w":[{stroke:[Xe,Yi,ei,Ha]}],stroke:[{stroke:["none",...q()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{"container-named":["container-type"],overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},postfixLookupClassGroups:["container-type"],orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},rh=Uf(ih);function Mt(...n){return rh(hf(n))}function uo(n=.25,e=6){const t=k.useRef(null);return k.useEffect(()=>{const i=t.current;if(!i||!window.matchMedia?.("(hover: hover) and (pointer: fine)").matches||window.matchMedia?.("(prefers-reduced-motion: reduce)").matches)return;let r=0,s=0,o=0,a=0,c=0;const l=()=>{if(a+=(s-a)*.18,c+=(o-c)*.18,Math.abs(a-s)<.05&&Math.abs(c-o)<.05&&s===0&&o===0){i.style.translate="",r=0;return}i.style.translate=`${a.toFixed(2)}px ${c.toFixed(2)}px`,r=requestAnimationFrame(l)},f=u=>{const m=i.getBoundingClientRect(),x=u.clientX-(m.left+m.width/2),b=u.clientY-(m.top+m.height/2);s=Math.max(-e,Math.min(e,x*n)),o=Math.max(-e,Math.min(e,b*n)),r||(r=requestAnimationFrame(l))},d=()=>{s=0,o=0,r||(r=requestAnimationFrame(l))};return i.addEventListener("pointermove",f),i.addEventListener("pointerleave",d),()=>{cancelAnimationFrame(r),i.removeEventListener("pointermove",f),i.removeEventListener("pointerleave",d),i.style.translate=""}},[n,e]),t}const ca="/assets/me-CwN4ryf4.jpeg";function sh(){const{lang:n,setLang:e,t,isTransitioning:i}=du(),[r,s]=k.useState(!1),[o,a]=k.useState(!1),c=uo();k.useEffect(()=>{const f=()=>s(window.scrollY>12);return f(),window.addEventListener("scroll",f,{passive:!0}),()=>window.removeEventListener("scroll",f)},[]),k.useEffect(()=>(document.body.style.overflow=o?"hidden":"",()=>{document.body.style.overflow=""}),[o]);const l=[{href:"#work",label:t.nav.projects,n:"01"},{href:"#process",label:t.nav.process,n:"02"},{href:"#stack",label:t.nav.stack,n:"03"},{href:"#contact",label:t.nav.contact,n:"04"}];return _.jsxs(_.Fragment,{children:[_.jsx("header",{className:Mt("fixed left-0 right-0 z-50 transition-[top] duration-300 ease-out",r?"top-3 sm:top-4":"top-4 sm:top-6"),children:_.jsxs("nav",{className:Mt("mx-auto flex max-w-5xl items-center justify-between gap-3 rounded-full border border-border/60 px-3 pl-4 py-2 transition-[background-color,box-shadow,backdrop-filter] duration-300",r?"bg-background/70 backdrop-blur-xl shadow-[0_8px_30px_-10px_rgba(0,0,0,0.5)]":"bg-card/40 backdrop-blur-md"),children:[_.jsxs("a",{href:"#top",className:"flex items-center gap-2.5 shrink-0",children:[_.jsx("img",{src:ca,alt:"Pablo Salcido",className:"h-8 w-8 rounded-full object-cover object-top border border-border"}),_.jsx("span",{className:"hidden sm:inline text-sm font-medium tracking-tight",children:"Pablo Salcido"})]}),_.jsx("ul",{className:"hidden md:flex items-center gap-7 text-sm text-muted-foreground",children:l.map(f=>_.jsx("li",{children:_.jsx("a",{href:f.href,className:"nav-link hover:text-foreground transition-colors",children:f.label})},f.href))}),_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx(Dc,{lang:n,setLang:e,disabled:i}),_.jsx("a",{ref:c,href:"#contact",className:"press hidden sm:inline-flex items-center rounded-full bg-foreground text-background px-4 py-1.5 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors",children:t.cta.workTogether}),_.jsx("button",{type:"button",onClick:()=>a(!0),className:"press md:hidden grid h-9 w-9 place-items-center rounded-full border border-border text-foreground hover:bg-card/60 transition-colors","aria-label":t.cta.openMenu,children:_.jsx(lf,{className:"h-4 w-4"})})]})]})}),_.jsx(oh,{open:o,onClose:()=>a(!1),nav:l,lang:n,setLang:e,isTransitioning:i,cta:t.cta.workTogether})]})}function oh({open:n,onClose:e,nav:t,lang:i,setLang:r,isTransitioning:s,cta:o}){const[a,c]=k.useState(!1),[l,f]=k.useState(!1);return k.useEffect(()=>{if(n){c(!0);const d=requestAnimationFrame(()=>requestAnimationFrame(()=>f(!0)));return()=>cancelAnimationFrame(d)}else{f(!1);const d=setTimeout(()=>c(!1),400);return()=>clearTimeout(d)}},[n]),k.useEffect(()=>{if(!n)return;const d=u=>u.key==="Escape"&&e();return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[n,e]),a?_.jsxs("div",{className:Mt("fixed inset-0 z-[60] flex flex-col transition-opacity duration-300 ease-out",l?"opacity-100":"opacity-0"),style:{background:"var(--background)"},"aria-modal":"true",role:"dialog",children:[_.jsxs("div",{className:"pointer-events-none absolute inset-0 overflow-hidden",children:[_.jsx("div",{className:"absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full",style:{background:"radial-gradient(circle, color-mix(in oklab, var(--primary) 12%, transparent), transparent 70%)"}}),_.jsx("div",{className:"absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full",style:{background:"radial-gradient(circle, color-mix(in oklab, var(--primary) 7%, transparent), transparent 70%)"}})]}),_.jsxs("div",{className:Mt("relative flex items-center justify-between px-6 pt-5 transition-all duration-300",l?"opacity-100 translate-y-0":"opacity-0 -translate-y-2"),style:{transitionDelay:l?"40ms":"0ms"},children:[_.jsxs("a",{href:"#top",onClick:e,className:"flex items-center gap-2.5",children:[_.jsx("img",{src:ca,alt:"Pablo Salcido",className:"h-8 w-8 rounded-full object-cover object-top border border-border"}),_.jsx("span",{className:"text-sm font-medium tracking-tight text-foreground",children:"Pablo Salcido"})]}),_.jsx("button",{type:"button",onClick:e,className:"grid h-10 w-10 place-items-center rounded-full border border-border bg-card/60 text-foreground hover:bg-card transition-colors","aria-label":"Close menu",children:_.jsx(oa,{className:"h-4 w-4"})})]}),_.jsx("nav",{className:"relative flex-1 flex flex-col justify-center px-6",children:t.map((d,u)=>_.jsxs("a",{href:d.href,onClick:e,className:Mt("group flex items-center justify-between border-b border-border/30 py-5 transition-all duration-500 ease-out",l?"opacity-100 translate-y-0":"opacity-0 translate-y-5"),style:{transitionDelay:l?`${u*70+100}ms`:"0ms"},children:[_.jsxs("div",{className:"flex items-baseline gap-4",children:[_.jsx("span",{className:"font-mono text-xs text-muted-foreground/50 tracking-widest select-none",children:d.n}),_.jsx("span",{className:"font-display text-[2.6rem] leading-none text-foreground group-hover:text-primary-glow transition-colors duration-200",children:d.label})]}),_.jsx(qn,{className:"h-5 w-5 text-muted-foreground/30 group-hover:text-primary-glow group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-200"})]},d.href))}),_.jsxs("div",{className:Mt("relative flex items-center justify-between px-6 pb-10 transition-all duration-500 ease-out",l?"opacity-100 translate-y-0":"opacity-0 translate-y-4"),style:{transitionDelay:l?"380ms":"0ms"},children:[_.jsx(Dc,{lang:i,setLang:r,disabled:s}),_.jsxs("a",{href:"#contact",onClick:e,className:"group inline-flex items-center gap-2 rounded-full bg-foreground text-background pl-5 pr-2 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors",children:[o,_.jsx("span",{className:"grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground group-hover:bg-background group-hover:text-foreground transition-colors",children:_.jsx(qn,{className:"h-3.5 w-3.5"})})]})]})]}):null}function Dc({lang:n,setLang:e,disabled:t}){const i=k.useRef(null),r=s=>{if(s.key!=="ArrowLeft"&&s.key!=="ArrowRight")return;s.preventDefault();const o=n==="en"?"es":"en";e(o),i.current?.querySelectorAll("button")?.[o==="en"?0:1]?.focus()};return _.jsxs("div",{ref:i,role:"radiogroup","aria-label":"Language",className:"relative inline-flex items-center rounded-full border border-border bg-background/60 p-[3px] text-xs font-medium",onKeyDown:r,children:[_.jsx("span",{className:Mt("pointer-events-none absolute top-[3px] bottom-[3px] w-[calc(50%-3px)] rounded-full bg-foreground transition-all duration-200 ease-out",n==="en"?"left-[3px]":"left-[calc(50%)]"),"aria-hidden":"true"}),["en","es"].map(s=>{const o=n===s;return _.jsx("button",{type:"button",role:"radio","aria-checked":o,disabled:t,onClick:()=>e(s),"aria-label":s==="en"?"Switch to English":"Cambiar a Español",className:Mt("relative z-10 px-2.5 py-1 rounded-full uppercase tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 focus-visible:ring-offset-background",o?"text-background":"text-muted-foreground hover:text-foreground",t&&"opacity-50 cursor-not-allowed"),children:s},s)})]})}const ti=n=>({"--d":`${n}ms`});function ah(){const n=Zn(),e=uo(),t=uo();return _.jsx("section",{id:"top",className:"relative overflow-hidden pt-36 pb-28 sm:pt-44 sm:pb-36",style:{background:"var(--gradient-hero)"},children:_.jsx("div",{className:"relative mx-auto max-w-6xl px-5 sm:px-8",children:_.jsxs("div",{className:"grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-start",children:[_.jsxs("div",{children:[_.jsx("div",{className:"hero-item",style:ti(0),children:_.jsxs("div",{className:"inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1.5 backdrop-blur-sm",children:[_.jsxs("span",{className:"relative flex h-1.5 w-1.5",children:[_.jsx("span",{className:"absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-glow opacity-70"}),_.jsx("span",{className:"relative inline-flex h-1.5 w-1.5 rounded-full bg-primary-glow"})]}),_.jsx("span",{className:"font-mono-eyebrow text-foreground/80",children:n.hero.availability})]})}),_.jsxs("h1",{className:"font-display mt-8 text-[clamp(2.75rem,6vw,4.75rem)] leading-[1] tracking-[-0.03em] text-foreground",children:[_.jsx("span",{className:"hero-line",children:_.jsx("span",{style:ti(100),children:n.hero.title1})}),_.jsx("span",{className:"hero-line",children:_.jsx("span",{style:ti(200),className:"text-primary-glow",children:n.hero.titleEm})})]}),_.jsx("p",{className:"hero-item mt-7 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed",style:ti(380),children:n.hero.description}),_.jsxs("div",{className:"hero-item mt-9 flex flex-wrap gap-3",style:ti(470),children:[_.jsxs("a",{ref:e,href:"#work",className:"group press inline-flex items-center gap-2 rounded-full bg-foreground text-background pl-5 pr-2 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors",children:[n.hero.viewWork,_.jsx("span",{className:"grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground group-hover:bg-background group-hover:text-foreground transition-colors",children:_.jsx(qn,{className:"h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"})})]}),_.jsx("a",{ref:t,href:"#contact",className:"press inline-flex items-center rounded-full border border-border bg-card/40 backdrop-blur-sm px-5 py-3 text-sm font-medium text-foreground hover:border-primary/50 transition-colors",children:n.hero.startConversation})]}),_.jsx("dl",{className:"hero-item mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-xl",style:ti(560),children:n.hero.stats.map(i=>_.jsxs("div",{children:[_.jsx("dt",{className:"text-xs uppercase tracking-[0.14em] font-medium text-muted-foreground",children:i.k}),_.jsx("dd",{className:"mt-2 text-sm text-foreground/90 leading-relaxed",children:i.v})]},i.k))})]}),_.jsxs("div",{className:"relative lg:mt-6",children:[_.jsxs("div",{className:"hero-media relative aspect-[4/5] w-full rounded-3xl border border-border overflow-hidden",style:{boxShadow:"var(--shadow-elegant)"},children:[_.jsx("img",{src:ca,alt:"Pablo Salcido",className:"absolute inset-0 h-full w-full object-cover object-top"}),_.jsx("div",{"aria-hidden":!0,className:"absolute inset-0 mix-blend-soft-light",style:{background:"linear-gradient(165deg, color-mix(in oklab, var(--primary) 55%, transparent), transparent 55%)"}}),_.jsx("div",{"aria-hidden":!0,className:"absolute inset-x-0 bottom-0 h-1/3",style:{background:"linear-gradient(to top, color-mix(in oklab, var(--background) 55%, transparent), transparent)"}})]}),_.jsxs("div",{className:"hero-item mt-6 rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-5",style:ti(700),children:[_.jsx("p",{className:"text-xs uppercase tracking-[0.14em] font-medium text-muted-foreground",children:n.hero.currentSignal}),_.jsx("p",{className:"mt-3 text-sm text-foreground/90 leading-relaxed",children:n.hero.currentSignalBody})]})]})]})})})}function lh(n={threshold:.15,rootMargin:"0px 0px -10% 0px"}){const e=k.useRef(null),[t,i]=k.useState(!1);return k.useEffect(()=>{const r=e.current;if(!r)return;if(typeof IntersectionObserver>"u"){i(!0);return}const s=new IntersectionObserver(o=>{for(const a of o)if(a.isIntersecting){i(!0),s.disconnect();break}},n);return s.observe(r),()=>s.disconnect()},[]),{ref:e,shown:t}}function Vt({children:n,delay:e=0,className:t,as:i="div"}){const{ref:r,shown:s}=lh(),o=i;return _.jsx(o,{ref:r,className:Mt("reveal",s&&"reveal-in",t),style:e?{transitionDelay:`${e}ms`}:void 0,children:n})}function ch(){const n=Zn();return _.jsx("section",{className:"relative py-28 sm:py-40",children:_.jsx("div",{className:"mx-auto max-w-6xl px-5 sm:px-8",children:_.jsxs("div",{className:"grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start",children:[_.jsx("div",{className:"lg:sticky lg:top-32",children:_.jsx(Vt,{children:_.jsxs("h2",{className:"font-display text-[clamp(2rem,3.5vw,3rem)] leading-[1.05] text-foreground max-w-md",children:[n.whoIWorkWith.title1," ",n.whoIWorkWith.titleEm]})})}),_.jsxs("div",{children:[n.whoIWorkWith.items.map((e,t)=>_.jsx(Vt,{delay:t*80,children:_.jsxs("article",{className:"group border-t border-border py-8 sm:py-10 grid sm:grid-cols-[72px_1fr] gap-4 sm:gap-8",children:[_.jsxs("span",{className:"font-mono text-sm text-primary-glow/70 pt-1.5 transition-colors duration-300 group-hover:text-primary-glow",children:["0",t+1]}),_.jsxs("div",{children:[_.jsx("h3",{className:"font-display text-xl sm:text-2xl text-foreground leading-snug",children:e.title}),_.jsx("p",{className:"mt-3 text-muted-foreground leading-relaxed max-w-lg",children:e.body})]})]})},e.title)),_.jsx("div",{className:"border-t border-border"})]})]})})})}function $n(n,e,{checkForDefaultPrevented:t=!0}={}){return function(r){if(n?.(r),t===!1||!r.defaultPrevented)return e?.(r)}}function Xa(n,e){if(typeof n=="function")return n(e);n!=null&&(n.current=e)}function dh(...n){return e=>{let t=!1;const i=n.map(r=>{const s=Xa(r,e);return!t&&typeof s=="function"&&(t=!0),s});if(t)return()=>{for(let r=0;r<i.length;r++){const s=i[r];typeof s=="function"?s():Xa(n[r],null)}}}}function gi(...n){return k.useCallback(dh(...n),n)}function uh(n,e){const t=k.createContext(e);t.displayName=n+"Context";const i=s=>{const{children:o,...a}=s,c=k.useMemo(()=>a,Object.values(a));return _.jsx(t.Provider,{value:c,children:o})};i.displayName=n+"Provider";function r(s){const o=k.useContext(t);if(o)return o;if(e!==void 0)return e;throw new Error(`\`${s}\` must be used within \`${n}\``)}return[i,r]}function fh(n,e=[]){let t=[];function i(s,o){const a=k.createContext(o);a.displayName=s+"Context";const c=t.length;t=[...t,o];const l=d=>{const{scope:u,children:m,...x}=d,b=u?.[n]?.[c]||a,p=k.useMemo(()=>x,Object.values(x));return _.jsx(b.Provider,{value:p,children:m})};l.displayName=s+"Provider";function f(d,u){const m=u?.[n]?.[c]||a,x=k.useContext(m);if(x)return x;if(o!==void 0)return o;throw new Error(`\`${d}\` must be used within \`${s}\``)}return[l,f]}const r=()=>{const s=t.map(o=>k.createContext(o));return function(a){const c=a?.[n]||s;return k.useMemo(()=>({[`__scope${n}`]:{...a,[n]:c}}),[a,c])}};return r.scopeName=n,[i,hh(r,...e)]}function hh(...n){const e=n[0];if(n.length===1)return e;const t=()=>{const i=n.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(s){const o=i.reduce((a,{useScope:c,scopeName:l})=>{const d=c(s)[`__scope${l}`];return{...a,...d}},{});return k.useMemo(()=>({[`__scope${e.scopeName}`]:o}),[o])}};return t.scopeName=e.scopeName,t}var rr=globalThis?.document?k.useLayoutEffect:()=>{},ph=sa[" useId ".trim().toString()]||(()=>{}),mh=0;function Ss(n){const[e,t]=k.useState(ph());return rr(()=>{t(i=>i??String(mh++))},[n]),n||(e?`radix-${e}`:"")}var gh=sa[" useInsertionEffect ".trim().toString()]||rr;function xh({prop:n,defaultProp:e,onChange:t=()=>{},caller:i}){const[r,s,o]=vh({defaultProp:e,onChange:t}),a=n!==void 0,c=a?n:r;{const f=k.useRef(n!==void 0);k.useEffect(()=>{const d=f.current;d!==a&&console.warn(`${i} is changing from ${d?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),f.current=a},[a,i])}const l=k.useCallback(f=>{if(a){const d=_h(f)?f(n):f;d!==n&&o.current?.(d)}else s(f)},[a,n,s,o]);return[c,l]}function vh({defaultProp:n,onChange:e}){const[t,i]=k.useState(n),r=k.useRef(t),s=k.useRef(e);return gh(()=>{s.current=e},[e]),k.useEffect(()=>{r.current!==t&&(s.current?.(t),r.current=t)},[t,r]),[t,i,s]}function _h(n){return typeof n=="function"}function Lc(n){const e=k.forwardRef((t,i)=>{let{children:r,...s}=t,o=null,a=!1;const c=[];qa(r)&&typeof xr=="function"&&(r=xr(r._payload)),k.Children.forEach(r,u=>{if(Eh(u)){a=!0;const m=u;let x="child"in m.props?m.props.child:m.props.children;qa(x)&&typeof xr=="function"&&(x=xr(x._payload)),o=Sh(m,x),c.push(o?.props?.children)}else c.push(u)}),o?o=k.cloneElement(o,void 0,c):!a&&k.Children.count(r)===1&&k.isValidElement(r)&&(o=r);const l=o?Mh(o):void 0,f=gi(i,l);if(!o){if(r||r===0)throw new Error(a?Rh(n):Ah(n));return r}const d=yh(s,o.props??{});return o.type!==k.Fragment&&(d.ref=i?f:l),k.cloneElement(o,d)});return e.displayName=`${n}.Slot`,e}var bh=Symbol.for("radix.slottable"),Sh=(n,e)=>{if("child"in n.props){const t=n.props.child;return k.isValidElement(t)?k.cloneElement(t,void 0,n.props.children(t.props.children)):null}return k.isValidElement(e)?e:null};function yh(n,e){const t={...e};for(const i in e){const r=n[i],s=e[i];/^on[A-Z]/.test(i)?r&&s?t[i]=(...a)=>{const c=s(...a);return r(...a),c}:r&&(t[i]=r):i==="style"?t[i]={...r,...s}:i==="className"&&(t[i]=[r,s].filter(Boolean).join(" "))}return{...n,...t}}function Mh(n){let e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,t=e&&"isReactWarning"in e&&e.isReactWarning;return t?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get,t=e&&"isReactWarning"in e&&e.isReactWarning,t?n.props.ref:n.props.ref||n.ref)}function Eh(n){return k.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===bh}var wh=Symbol.for("react.lazy");function qa(n){return n!=null&&typeof n=="object"&&"$$typeof"in n&&n.$$typeof===wh&&"_payload"in n&&Th(n._payload)}function Th(n){return typeof n=="object"&&n!==null&&"then"in n}var Ah=n=>`${n} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,Rh=n=>`${n} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,xr=sa[" use ".trim().toString()],Ch=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Nn=Ch.reduce((n,e)=>{const t=Lc(`Primitive.${e}`),i=k.forwardRef((r,s)=>{const{asChild:o,...a}=r,c=o?t:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),_.jsx(c,{...a,ref:s})});return i.displayName=`Primitive.${e}`,{...n,[e]:i}},{});function Ph(n,e){n&&hc.flushSync(()=>n.dispatchEvent(e))}function sr(n){const e=k.useRef(n);return k.useEffect(()=>{e.current=n}),k.useMemo(()=>((...t)=>e.current?.(...t)),[])}function Nh(n,e=globalThis?.document){const t=sr(n);k.useEffect(()=>{const i=r=>{r.key==="Escape"&&t(r)};return e.addEventListener("keydown",i,{capture:!0}),()=>e.removeEventListener("keydown",i,{capture:!0})},[t,e])}var Dh="DismissableLayer",fo="dismissableLayer.update",Lh="dismissableLayer.pointerDownOutside",Ih="dismissableLayer.focusOutside",Ya,Ic=k.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Uc=k.forwardRef((n,e)=>{const{disableOutsidePointerEvents:t=!1,onEscapeKeyDown:i,onPointerDownOutside:r,onFocusOutside:s,onInteractOutside:o,onDismiss:a,...c}=n,l=k.useContext(Ic),[f,d]=k.useState(null),u=f?.ownerDocument??globalThis?.document,[,m]=k.useState({}),x=gi(e,R=>d(R)),b=Array.from(l.layers),[p]=[...l.layersWithOutsidePointerEventsDisabled].slice(-1),h=b.indexOf(p),y=f?b.indexOf(f):-1,T=l.layersWithOutsidePointerEventsDisabled.size>0,E=y>=h,C=Oh(R=>{const g=R.target,A=[...l.branches].some(F=>F.contains(g));!E||A||(r?.(R),o?.(R),R.defaultPrevented||a?.())},u),w=Bh(R=>{const g=R.target;[...l.branches].some(F=>F.contains(g))||(s?.(R),o?.(R),R.defaultPrevented||a?.())},u);return Nh(R=>{y===l.layers.size-1&&(i?.(R),!R.defaultPrevented&&a&&(R.preventDefault(),a()))},u),k.useEffect(()=>{if(f)return t&&(l.layersWithOutsidePointerEventsDisabled.size===0&&(Ya=u.body.style.pointerEvents,u.body.style.pointerEvents="none"),l.layersWithOutsidePointerEventsDisabled.add(f)),l.layers.add(f),$a(),()=>{t&&(l.layersWithOutsidePointerEventsDisabled.delete(f),l.layersWithOutsidePointerEventsDisabled.size===0&&(u.body.style.pointerEvents=Ya))}},[f,u,t,l]),k.useEffect(()=>()=>{f&&(l.layers.delete(f),l.layersWithOutsidePointerEventsDisabled.delete(f),$a())},[f,l]),k.useEffect(()=>{const R=()=>m({});return document.addEventListener(fo,R),()=>document.removeEventListener(fo,R)},[]),_.jsx(Nn.div,{...c,ref:x,style:{pointerEvents:T?E?"auto":"none":void 0,...n.style},onFocusCapture:$n(n.onFocusCapture,w.onFocusCapture),onBlurCapture:$n(n.onBlurCapture,w.onBlurCapture),onPointerDownCapture:$n(n.onPointerDownCapture,C.onPointerDownCapture)})});Uc.displayName=Dh;var Uh="DismissableLayerBranch",Fh=k.forwardRef((n,e)=>{const t=k.useContext(Ic),i=k.useRef(null),r=gi(e,i);return k.useEffect(()=>{const s=i.current;if(s)return t.branches.add(s),()=>{t.branches.delete(s)}},[t.branches]),_.jsx(Nn.div,{...n,ref:r})});Fh.displayName=Uh;function Oh(n,e=globalThis?.document){const t=sr(n),i=k.useRef(!1),r=k.useRef(()=>{});return k.useEffect(()=>{const s=a=>{if(a.target&&!i.current){let c=function(){Fc(Lh,t,l,{discrete:!0})};const l={originalEvent:a};a.pointerType==="touch"?(e.removeEventListener("click",r.current),r.current=c,e.addEventListener("click",r.current,{once:!0})):c()}else e.removeEventListener("click",r.current);i.current=!1},o=window.setTimeout(()=>{e.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(o),e.removeEventListener("pointerdown",s),e.removeEventListener("click",r.current)}},[e,t]),{onPointerDownCapture:()=>i.current=!0}}function Bh(n,e=globalThis?.document){const t=sr(n),i=k.useRef(!1);return k.useEffect(()=>{const r=s=>{s.target&&!i.current&&Fc(Ih,t,{originalEvent:s},{discrete:!1})};return e.addEventListener("focusin",r),()=>e.removeEventListener("focusin",r)},[e,t]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}function $a(){const n=new CustomEvent(fo);document.dispatchEvent(n)}function Fc(n,e,t,{discrete:i}){const r=t.originalEvent.target,s=new CustomEvent(n,{bubbles:!1,cancelable:!0,detail:t});e&&r.addEventListener(n,e,{once:!0}),i?Ph(r,s):r.dispatchEvent(s)}var ys="focusScope.autoFocusOnMount",Ms="focusScope.autoFocusOnUnmount",Ka={bubbles:!1,cancelable:!0},kh="FocusScope",Oc=k.forwardRef((n,e)=>{const{loop:t=!1,trapped:i=!1,onMountAutoFocus:r,onUnmountAutoFocus:s,...o}=n,[a,c]=k.useState(null),l=sr(r),f=sr(s),d=k.useRef(null),u=gi(e,b=>c(b)),m=k.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;k.useEffect(()=>{if(i){let b=function(T){if(m.paused||!a)return;const E=T.target;a.contains(E)?d.current=E:Wn(d.current,{select:!0})},p=function(T){if(m.paused||!a)return;const E=T.relatedTarget;E!==null&&(a.contains(E)||Wn(d.current,{select:!0}))},h=function(T){if(document.activeElement===document.body)for(const C of T)C.removedNodes.length>0&&Wn(a)};document.addEventListener("focusin",b),document.addEventListener("focusout",p);const y=new MutationObserver(h);return a&&y.observe(a,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",b),document.removeEventListener("focusout",p),y.disconnect()}}},[i,a,m.paused]),k.useEffect(()=>{if(a){Ja.add(m);const b=document.activeElement;if(!a.contains(b)){const h=new CustomEvent(ys,Ka);a.addEventListener(ys,l),a.dispatchEvent(h),h.defaultPrevented||(zh(jh(Bc(a)),{select:!0}),document.activeElement===b&&Wn(a))}return()=>{a.removeEventListener(ys,l),setTimeout(()=>{const h=new CustomEvent(Ms,Ka);a.addEventListener(Ms,f),a.dispatchEvent(h),h.defaultPrevented||Wn(b??document.body,{select:!0}),a.removeEventListener(Ms,f),Ja.remove(m)},0)}}},[a,l,f,m]);const x=k.useCallback(b=>{if(!t&&!i||m.paused)return;const p=b.key==="Tab"&&!b.altKey&&!b.ctrlKey&&!b.metaKey,h=document.activeElement;if(p&&h){const y=b.currentTarget,[T,E]=Gh(y);T&&E?!b.shiftKey&&h===E?(b.preventDefault(),t&&Wn(T,{select:!0})):b.shiftKey&&h===T&&(b.preventDefault(),t&&Wn(E,{select:!0})):h===y&&b.preventDefault()}},[t,i,m.paused]);return _.jsx(Nn.div,{tabIndex:-1,...o,ref:u,onKeyDown:x})});Oc.displayName=kh;function zh(n,{select:e=!1}={}){const t=document.activeElement;for(const i of n)if(Wn(i,{select:e}),document.activeElement!==t)return}function Gh(n){const e=Bc(n),t=Za(e,n),i=Za(e.reverse(),n);return[t,i]}function Bc(n){const e=[],t=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,{acceptNode:i=>{const r=i.tagName==="INPUT"&&i.type==="hidden";return i.disabled||i.hidden||r?NodeFilter.FILTER_SKIP:i.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;t.nextNode();)e.push(t.currentNode);return e}function Za(n,e){for(const t of n)if(!Vh(t,{upTo:e}))return t}function Vh(n,{upTo:e}){if(getComputedStyle(n).visibility==="hidden")return!0;for(;n;){if(e!==void 0&&n===e)return!1;if(getComputedStyle(n).display==="none")return!0;n=n.parentElement}return!1}function Hh(n){return n instanceof HTMLInputElement&&"select"in n}function Wn(n,{select:e=!1}={}){if(n&&n.focus){const t=document.activeElement;n.focus({preventScroll:!0}),n!==t&&Hh(n)&&e&&n.select()}}var Ja=Wh();function Wh(){let n=[];return{add(e){const t=n[0];e!==t&&t?.pause(),n=Qa(n,e),n.unshift(e)},remove(e){n=Qa(n,e),n[0]?.resume()}}}function Qa(n,e){const t=[...n],i=t.indexOf(e);return i!==-1&&t.splice(i,1),t}function jh(n){return n.filter(e=>e.tagName!=="A")}var Xh="Portal",kc=k.forwardRef((n,e)=>{const{container:t,...i}=n,[r,s]=k.useState(!1);rr(()=>s(!0),[]);const o=t||r&&globalThis?.document?.body;return o?hc.createPortal(_.jsx(Nn.div,{...i,ref:e}),o):null});kc.displayName=Xh;function qh(n,e){return k.useReducer((t,i)=>e[t][i]??t,n)}var ds=n=>{const{present:e,children:t}=n,i=Yh(e),r=typeof t=="function"?t({present:i.isPresent}):k.Children.only(t),s=$h(i.ref,Kh(r));return typeof t=="function"||i.isPresent?k.cloneElement(r,{ref:s}):null};ds.displayName="Presence";function Yh(n){const[e,t]=k.useState(),i=k.useRef(null),r=k.useRef(n),s=k.useRef("none"),o=n?"mounted":"unmounted",[a,c]=qh(o,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return k.useEffect(()=>{const l=vr(i.current);s.current=a==="mounted"?l:"none"},[a]),rr(()=>{const l=i.current,f=r.current;if(f!==n){const u=s.current,m=vr(l);n?c("MOUNT"):m==="none"||l?.display==="none"?c("UNMOUNT"):c(f&&u!==m?"ANIMATION_OUT":"UNMOUNT"),r.current=n}},[n,c]),rr(()=>{if(e){let l;const f=e.ownerDocument.defaultView??window,d=m=>{const b=vr(i.current).includes(CSS.escape(m.animationName));if(m.target===e&&b&&(c("ANIMATION_END"),!r.current)){const p=e.style.animationFillMode;e.style.animationFillMode="forwards",l=f.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=p)})}},u=m=>{m.target===e&&(s.current=vr(i.current))};return e.addEventListener("animationstart",u),e.addEventListener("animationcancel",d),e.addEventListener("animationend",d),()=>{f.clearTimeout(l),e.removeEventListener("animationstart",u),e.removeEventListener("animationcancel",d),e.removeEventListener("animationend",d)}}else c("ANIMATION_END")},[e,c]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:k.useCallback(l=>{i.current=l?getComputedStyle(l):null,t(l)},[])}}function el(n,e){if(typeof n=="function")return n(e);n!=null&&(n.current=e)}function $h(...n){const e=k.useRef(n);return e.current=n,k.useCallback(t=>{const i=e.current;let r=!1;const s=i.map(o=>{const a=el(o,t);return!r&&typeof a=="function"&&(r=!0),a});if(r)return()=>{for(let o=0;o<s.length;o++){const a=s[o];typeof a=="function"?a():el(i[o],null)}}},[])}function vr(n){return n?.animationName||"none"}function Kh(n){let e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,t=e&&"isReactWarning"in e&&e.isReactWarning;return t?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get,t=e&&"isReactWarning"in e&&e.isReactWarning,t?n.props.ref:n.props.ref||n.ref)}var _r=0,Si=null;function Zh(){k.useEffect(()=>{Si||(Si={start:tl(),end:tl()});const{start:n,end:e}=Si;return document.body.firstElementChild!==n&&document.body.insertAdjacentElement("afterbegin",n),document.body.lastElementChild!==e&&document.body.insertAdjacentElement("beforeend",e),_r++,()=>{_r===1&&(Si?.start.remove(),Si?.end.remove(),Si=null),_r=Math.max(0,_r-1)}},[])}function tl(){const n=document.createElement("span");return n.setAttribute("data-radix-focus-guard",""),n.tabIndex=0,n.style.outline="none",n.style.opacity="0",n.style.position="fixed",n.style.pointerEvents="none",n}var qr="right-scroll-bar-position",Yr="width-before-scroll-bar",Jh="with-scroll-bars-hidden",Qh="--removed-body-scroll-bar-size";function Es(n,e){return typeof n=="function"?n(e):n&&(n.current=e),n}function ep(n,e){var t=k.useState(function(){return{value:n,callback:e,facade:{get current(){return t.value},set current(i){var r=t.value;r!==i&&(t.value=i,t.callback(i,r))}}}})[0];return t.callback=e,t.facade}var tp=typeof window<"u"?k.useLayoutEffect:k.useEffect,nl=new WeakMap;function np(n,e){var t=ep(null,function(i){return n.forEach(function(r){return Es(r,i)})});return tp(function(){var i=nl.get(t);if(i){var r=new Set(i),s=new Set(n),o=t.current;r.forEach(function(a){s.has(a)||Es(a,null)}),s.forEach(function(a){r.has(a)||Es(a,o)})}nl.set(t,n)},[n]),t}function ip(n){return n}function rp(n,e){e===void 0&&(e=ip);var t=[],i=!1,r={read:function(){if(i)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return t.length?t[t.length-1]:n},useMedium:function(s){var o=e(s,i);return t.push(o),function(){t=t.filter(function(a){return a!==o})}},assignSyncMedium:function(s){for(i=!0;t.length;){var o=t;t=[],o.forEach(s)}t={push:function(a){return s(a)},filter:function(){return t}}},assignMedium:function(s){i=!0;var o=[];if(t.length){var a=t;t=[],a.forEach(s),o=t}var c=function(){var f=o;o=[],f.forEach(s)},l=function(){return Promise.resolve().then(c)};l(),t={push:function(f){o.push(f),l()},filter:function(f){return o=o.filter(f),t}}}};return r}function sp(n){n===void 0&&(n={});var e=rp(null);return e.options=jn({async:!0,ssr:!1},n),e}var zc=function(n){var e=n.sideCar,t=pc(n,["sideCar"]);if(!e)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var i=e.read();if(!i)throw new Error("Sidecar medium not found");return k.createElement(i,jn({},t))};zc.isSideCarExport=!0;function op(n,e){return n.useMedium(e),zc}var Gc=sp(),ws=function(){},us=k.forwardRef(function(n,e){var t=k.useRef(null),i=k.useState({onScrollCapture:ws,onWheelCapture:ws,onTouchMoveCapture:ws}),r=i[0],s=i[1],o=n.forwardProps,a=n.children,c=n.className,l=n.removeScrollBar,f=n.enabled,d=n.shards,u=n.sideCar,m=n.noRelative,x=n.noIsolation,b=n.inert,p=n.allowPinchZoom,h=n.as,y=h===void 0?"div":h,T=n.gapMode,E=pc(n,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),C=u,w=np([t,e]),R=jn(jn({},E),r);return k.createElement(k.Fragment,null,f&&k.createElement(C,{sideCar:Gc,removeScrollBar:l,shards:d,noRelative:m,noIsolation:x,inert:b,setCallbacks:s,allowPinchZoom:!!p,lockRef:t,gapMode:T}),o?k.cloneElement(k.Children.only(a),jn(jn({},R),{ref:w})):k.createElement(y,jn({},R,{className:c,ref:w}),a))});us.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};us.classNames={fullWidth:Yr,zeroRight:qr};var ap=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function lp(){if(!document)return null;var n=document.createElement("style");n.type="text/css";var e=ap();return e&&n.setAttribute("nonce",e),n}function cp(n,e){n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}function dp(n){var e=document.head||document.getElementsByTagName("head")[0];e.appendChild(n)}var up=function(){var n=0,e=null;return{add:function(t){n==0&&(e=lp())&&(cp(e,t),dp(e)),n++},remove:function(){n--,!n&&e&&(e.parentNode&&e.parentNode.removeChild(e),e=null)}}},fp=function(){var n=up();return function(e,t){k.useEffect(function(){return n.add(e),function(){n.remove()}},[e&&t])}},Vc=function(){var n=fp(),e=function(t){var i=t.styles,r=t.dynamic;return n(i,r),null};return e},hp={left:0,top:0,right:0,gap:0},Ts=function(n){return parseInt(n||"",10)||0},pp=function(n){var e=window.getComputedStyle(document.body),t=e[n==="padding"?"paddingLeft":"marginLeft"],i=e[n==="padding"?"paddingTop":"marginTop"],r=e[n==="padding"?"paddingRight":"marginRight"];return[Ts(t),Ts(i),Ts(r)]},mp=function(n){if(n===void 0&&(n="margin"),typeof window>"u")return hp;var e=pp(n),t=document.documentElement.clientWidth,i=window.innerWidth;return{left:e[0],top:e[1],right:e[2],gap:Math.max(0,i-t+e[2]-e[0])}},gp=Vc(),ki="data-scroll-locked",xp=function(n,e,t,i){var r=n.left,s=n.top,o=n.right,a=n.gap;return t===void 0&&(t="margin"),`
  .`.concat(Jh,` {
   overflow: hidden `).concat(i,`;
   padding-right: `).concat(a,"px ").concat(i,`;
  }
  body[`).concat(ki,`] {
    overflow: hidden `).concat(i,`;
    overscroll-behavior: contain;
    `).concat([e&&"position: relative ".concat(i,";"),t==="margin"&&`
    padding-left: `.concat(r,`px;
    padding-top: `).concat(s,`px;
    padding-right: `).concat(o,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a,"px ").concat(i,`;
    `),t==="padding"&&"padding-right: ".concat(a,"px ").concat(i,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(qr,` {
    right: `).concat(a,"px ").concat(i,`;
  }
  
  .`).concat(Yr,` {
    margin-right: `).concat(a,"px ").concat(i,`;
  }
  
  .`).concat(qr," .").concat(qr,` {
    right: 0 `).concat(i,`;
  }
  
  .`).concat(Yr," .").concat(Yr,` {
    margin-right: 0 `).concat(i,`;
  }
  
  body[`).concat(ki,`] {
    `).concat(Qh,": ").concat(a,`px;
  }
`)},il=function(){var n=parseInt(document.body.getAttribute(ki)||"0",10);return isFinite(n)?n:0},vp=function(){k.useEffect(function(){return document.body.setAttribute(ki,(il()+1).toString()),function(){var n=il()-1;n<=0?document.body.removeAttribute(ki):document.body.setAttribute(ki,n.toString())}},[])},_p=function(n){var e=n.noRelative,t=n.noImportant,i=n.gapMode,r=i===void 0?"margin":i;vp();var s=k.useMemo(function(){return mp(r)},[r]);return k.createElement(gp,{styles:xp(s,!e,r,t?"":"!important")})},ho=!1;if(typeof window<"u")try{var br=Object.defineProperty({},"passive",{get:function(){return ho=!0,!0}});window.addEventListener("test",br,br),window.removeEventListener("test",br,br)}catch{ho=!1}var yi=ho?{passive:!1}:!1,bp=function(n){return n.tagName==="TEXTAREA"},Hc=function(n,e){if(!(n instanceof Element))return!1;var t=window.getComputedStyle(n);return t[e]!=="hidden"&&!(t.overflowY===t.overflowX&&!bp(n)&&t[e]==="visible")},Sp=function(n){return Hc(n,"overflowY")},yp=function(n){return Hc(n,"overflowX")},rl=function(n,e){var t=e.ownerDocument,i=e;do{typeof ShadowRoot<"u"&&i instanceof ShadowRoot&&(i=i.host);var r=Wc(n,i);if(r){var s=jc(n,i),o=s[1],a=s[2];if(o>a)return!0}i=i.parentNode}while(i&&i!==t.body);return!1},Mp=function(n){var e=n.scrollTop,t=n.scrollHeight,i=n.clientHeight;return[e,t,i]},Ep=function(n){var e=n.scrollLeft,t=n.scrollWidth,i=n.clientWidth;return[e,t,i]},Wc=function(n,e){return n==="v"?Sp(e):yp(e)},jc=function(n,e){return n==="v"?Mp(e):Ep(e)},wp=function(n,e){return n==="h"&&e==="rtl"?-1:1},Tp=function(n,e,t,i,r){var s=wp(n,window.getComputedStyle(e).direction),o=s*i,a=t.target,c=e.contains(a),l=!1,f=o>0,d=0,u=0;do{if(!a)break;var m=jc(n,a),x=m[0],b=m[1],p=m[2],h=b-p-s*x;(x||h)&&Wc(n,a)&&(d+=h,u+=x);var y=a.parentNode;a=y&&y.nodeType===Node.DOCUMENT_FRAGMENT_NODE?y.host:y}while(!c&&a!==document.body||c&&(e.contains(a)||e===a));return(f&&Math.abs(d)<1||!f&&Math.abs(u)<1)&&(l=!0),l},Sr=function(n){return"changedTouches"in n?[n.changedTouches[0].clientX,n.changedTouches[0].clientY]:[0,0]},sl=function(n){return[n.deltaX,n.deltaY]},ol=function(n){return n&&"current"in n?n.current:n},Ap=function(n,e){return n[0]===e[0]&&n[1]===e[1]},Rp=function(n){return`
  .block-interactivity-`.concat(n,` {pointer-events: none;}
  .allow-interactivity-`).concat(n,` {pointer-events: all;}
`)},Cp=0,Mi=[];function Pp(n){var e=k.useRef([]),t=k.useRef([0,0]),i=k.useRef(),r=k.useState(Cp++)[0],s=k.useState(Vc)[0],o=k.useRef(n);k.useEffect(function(){o.current=n},[n]),k.useEffect(function(){if(n.inert){document.body.classList.add("block-interactivity-".concat(r));var b=uu([n.lockRef.current],(n.shards||[]).map(ol),!0).filter(Boolean);return b.forEach(function(p){return p.classList.add("allow-interactivity-".concat(r))}),function(){document.body.classList.remove("block-interactivity-".concat(r)),b.forEach(function(p){return p.classList.remove("allow-interactivity-".concat(r))})}}},[n.inert,n.lockRef.current,n.shards]);var a=k.useCallback(function(b,p){if("touches"in b&&b.touches.length===2||b.type==="wheel"&&b.ctrlKey)return!o.current.allowPinchZoom;var h=Sr(b),y=t.current,T="deltaX"in b?b.deltaX:y[0]-h[0],E="deltaY"in b?b.deltaY:y[1]-h[1],C,w=b.target,R=Math.abs(T)>Math.abs(E)?"h":"v";if("touches"in b&&R==="h"&&w.type==="range")return!1;var g=window.getSelection(),A=g&&g.anchorNode,F=A?A===w||A.contains(w):!1;if(F)return!1;var P=rl(R,w);if(!P)return!0;if(P?C=R:(C=R==="v"?"h":"v",P=rl(R,w)),!P)return!1;if(!i.current&&"changedTouches"in b&&(T||E)&&(i.current=C),!C)return!0;var z=i.current||C;return Tp(z,p,b,z==="h"?T:E)},[]),c=k.useCallback(function(b){var p=b;if(!(!Mi.length||Mi[Mi.length-1]!==s)){var h="deltaY"in p?sl(p):Sr(p),y=e.current.filter(function(C){return C.name===p.type&&(C.target===p.target||p.target===C.shadowParent)&&Ap(C.delta,h)})[0];if(y&&y.should){p.cancelable&&p.preventDefault();return}if(!y){var T=(o.current.shards||[]).map(ol).filter(Boolean).filter(function(C){return C.contains(p.target)}),E=T.length>0?a(p,T[0]):!o.current.noIsolation;E&&p.cancelable&&p.preventDefault()}}},[]),l=k.useCallback(function(b,p,h,y){var T={name:b,delta:p,target:h,should:y,shadowParent:Np(h)};e.current.push(T),setTimeout(function(){e.current=e.current.filter(function(E){return E!==T})},1)},[]),f=k.useCallback(function(b){t.current=Sr(b),i.current=void 0},[]),d=k.useCallback(function(b){l(b.type,sl(b),b.target,a(b,n.lockRef.current))},[]),u=k.useCallback(function(b){l(b.type,Sr(b),b.target,a(b,n.lockRef.current))},[]);k.useEffect(function(){return Mi.push(s),n.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:u}),document.addEventListener("wheel",c,yi),document.addEventListener("touchmove",c,yi),document.addEventListener("touchstart",f,yi),function(){Mi=Mi.filter(function(b){return b!==s}),document.removeEventListener("wheel",c,yi),document.removeEventListener("touchmove",c,yi),document.removeEventListener("touchstart",f,yi)}},[]);var m=n.removeScrollBar,x=n.inert;return k.createElement(k.Fragment,null,x?k.createElement(s,{styles:Rp(r)}):null,m?k.createElement(_p,{noRelative:n.noRelative,gapMode:n.gapMode}):null)}function Np(n){for(var e=null;n!==null;)n instanceof ShadowRoot&&(e=n.host,n=n.host),n=n.parentNode;return e}const Dp=op(Gc,Pp);var Xc=k.forwardRef(function(n,e){return k.createElement(us,jn({},n,{ref:e,sideCar:Dp}))});Xc.classNames=us.classNames;var Lp=function(n){if(typeof document>"u")return null;var e=Array.isArray(n)?n[0]:n;return e.ownerDocument.body},Ei=new WeakMap,yr=new WeakMap,Mr={},As=0,qc=function(n){return n&&(n.host||qc(n.parentNode))},Ip=function(n,e){return e.map(function(t){if(n.contains(t))return t;var i=qc(t);return i&&n.contains(i)?i:(console.error("aria-hidden",t,"in not contained inside",n,". Doing nothing"),null)}).filter(function(t){return!!t})},Up=function(n,e,t,i){var r=Ip(e,Array.isArray(n)?n:[n]);Mr[t]||(Mr[t]=new WeakMap);var s=Mr[t],o=[],a=new Set,c=new Set(r),l=function(d){!d||a.has(d)||(a.add(d),l(d.parentNode))};r.forEach(l);var f=function(d){!d||c.has(d)||Array.prototype.forEach.call(d.children,function(u){if(a.has(u))f(u);else try{var m=u.getAttribute(i),x=m!==null&&m!=="false",b=(Ei.get(u)||0)+1,p=(s.get(u)||0)+1;Ei.set(u,b),s.set(u,p),o.push(u),b===1&&x&&yr.set(u,!0),p===1&&u.setAttribute(t,"true"),x||u.setAttribute(i,"true")}catch(h){console.error("aria-hidden: cannot operate on ",u,h)}})};return f(e),a.clear(),As++,function(){o.forEach(function(d){var u=Ei.get(d)-1,m=s.get(d)-1;Ei.set(d,u),s.set(d,m),u||(yr.has(d)||d.removeAttribute(i),yr.delete(d)),m||d.removeAttribute(t)}),As--,As||(Ei=new WeakMap,Ei=new WeakMap,yr=new WeakMap,Mr={})}},Fp=function(n,e,t){t===void 0&&(t="data-aria-hidden");var i=Array.from(Array.isArray(n)?n:[n]),r=Lp(n);return r?(i.push.apply(i,Array.from(r.querySelectorAll("[aria-live], script"))),Up(i,r,t,"aria-hidden")):function(){return null}},fs="Dialog",[Yc]=fh(fs),[Op,nn]=Yc(fs),$c=n=>{const{__scopeDialog:e,children:t,open:i,defaultOpen:r,onOpenChange:s,modal:o=!0}=n,a=k.useRef(null),c=k.useRef(null),[l,f]=xh({prop:i,defaultProp:r??!1,onChange:s,caller:fs});return _.jsx(Op,{scope:e,triggerRef:a,contentRef:c,contentId:Ss(),titleId:Ss(),descriptionId:Ss(),open:l,onOpenChange:f,onOpenToggle:k.useCallback(()=>f(d=>!d),[f]),modal:o,children:t})};$c.displayName=fs;var Kc="DialogTrigger",Bp=k.forwardRef((n,e)=>{const{__scopeDialog:t,...i}=n,r=nn(Kc,t),s=gi(e,r.triggerRef);return _.jsx(Nn.button,{type:"button","aria-haspopup":"dialog","aria-expanded":r.open,"aria-controls":r.open?r.contentId:void 0,"data-state":fa(r.open),...i,ref:s,onClick:$n(n.onClick,r.onOpenToggle)})});Bp.displayName=Kc;var da="DialogPortal",[kp,Zc]=Yc(da,{forceMount:void 0}),Jc=n=>{const{__scopeDialog:e,forceMount:t,children:i,container:r}=n,s=nn(da,e);return _.jsx(kp,{scope:e,forceMount:t,children:k.Children.map(i,o=>_.jsx(ds,{present:t||s.open,children:_.jsx(kc,{asChild:!0,container:r,children:o})}))})};Jc.displayName=da;var ns="DialogOverlay",Qc=k.forwardRef((n,e)=>{const t=Zc(ns,n.__scopeDialog),{forceMount:i=t.forceMount,...r}=n,s=nn(ns,n.__scopeDialog);return s.modal?_.jsx(ds,{present:i||s.open,children:_.jsx(Gp,{...r,ref:e})}):null});Qc.displayName=ns;var zp=Lc("DialogOverlay.RemoveScroll"),Gp=k.forwardRef((n,e)=>{const{__scopeDialog:t,...i}=n,r=nn(ns,t);return _.jsx(Xc,{as:zp,allowPinchZoom:!0,shards:[r.contentRef],children:_.jsx(Nn.div,{"data-state":fa(r.open),...i,ref:e,style:{pointerEvents:"auto",...i.style}})})}),ui="DialogContent",ed=k.forwardRef((n,e)=>{const t=Zc(ui,n.__scopeDialog),{forceMount:i=t.forceMount,...r}=n,s=nn(ui,n.__scopeDialog);return _.jsx(ds,{present:i||s.open,children:s.modal?_.jsx(Vp,{...r,ref:e}):_.jsx(Hp,{...r,ref:e})})});ed.displayName=ui;var Vp=k.forwardRef((n,e)=>{const t=nn(ui,n.__scopeDialog),i=k.useRef(null),r=gi(e,t.contentRef,i);return k.useEffect(()=>{const s=i.current;if(s)return Fp(s)},[]),_.jsx(td,{...n,ref:r,trapFocus:t.open,disableOutsidePointerEvents:t.open,onCloseAutoFocus:$n(n.onCloseAutoFocus,s=>{s.preventDefault(),t.triggerRef.current?.focus()}),onPointerDownOutside:$n(n.onPointerDownOutside,s=>{const o=s.detail.originalEvent,a=o.button===0&&o.ctrlKey===!0;(o.button===2||a)&&s.preventDefault()}),onFocusOutside:$n(n.onFocusOutside,s=>s.preventDefault())})}),Hp=k.forwardRef((n,e)=>{const t=nn(ui,n.__scopeDialog),i=k.useRef(!1),r=k.useRef(!1);return _.jsx(td,{...n,ref:e,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:s=>{n.onCloseAutoFocus?.(s),s.defaultPrevented||(i.current||t.triggerRef.current?.focus(),s.preventDefault()),i.current=!1,r.current=!1},onInteractOutside:s=>{n.onInteractOutside?.(s),s.defaultPrevented||(i.current=!0,s.detail.originalEvent.type==="pointerdown"&&(r.current=!0));const o=s.target;t.triggerRef.current?.contains(o)&&s.preventDefault(),s.detail.originalEvent.type==="focusin"&&r.current&&s.preventDefault()}})}),td=k.forwardRef((n,e)=>{const{__scopeDialog:t,trapFocus:i,onOpenAutoFocus:r,onCloseAutoFocus:s,...o}=n,a=nn(ui,t),c=k.useRef(null),l=gi(e,c);return Zh(),_.jsxs(_.Fragment,{children:[_.jsx(Oc,{asChild:!0,loop:!0,trapped:i,onMountAutoFocus:r,onUnmountAutoFocus:s,children:_.jsx(Uc,{role:"dialog",id:a.contentId,"aria-describedby":a.descriptionId,"aria-labelledby":a.titleId,"data-state":fa(a.open),...o,ref:l,onDismiss:()=>a.onOpenChange(!1)})}),_.jsxs(_.Fragment,{children:[_.jsx(Wp,{titleId:a.titleId}),_.jsx(Xp,{contentRef:c,descriptionId:a.descriptionId})]})]})}),ua="DialogTitle",nd=k.forwardRef((n,e)=>{const{__scopeDialog:t,...i}=n,r=nn(ua,t);return _.jsx(Nn.h2,{id:r.titleId,...i,ref:e})});nd.displayName=ua;var id="DialogDescription",rd=k.forwardRef((n,e)=>{const{__scopeDialog:t,...i}=n,r=nn(id,t);return _.jsx(Nn.p,{id:r.descriptionId,...i,ref:e})});rd.displayName=id;var sd="DialogClose",od=k.forwardRef((n,e)=>{const{__scopeDialog:t,...i}=n,r=nn(sd,t);return _.jsx(Nn.button,{type:"button",...i,ref:e,onClick:$n(n.onClick,()=>r.onOpenChange(!1))})});od.displayName=sd;function fa(n){return n?"open":"closed"}var ad="DialogTitleWarning",[Bb,ld]=uh(ad,{contentName:ui,titleName:ua,docsSlug:"dialog"}),Wp=({titleId:n})=>{const e=ld(ad),t=`\`${e.contentName}\` requires a \`${e.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${e.docsSlug}`;return k.useEffect(()=>{n&&(document.getElementById(n)||console.error(t))},[t,n]),null},jp="DialogDescriptionWarning",Xp=({contentRef:n,descriptionId:e})=>{const i=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${ld(jp).contentName}}.`;return k.useEffect(()=>{const r=n.current?.getAttribute("aria-describedby");e&&r&&(document.getElementById(e)||console.warn(i))},[i,n,e]),null},qp=$c,Yp=Jc,cd=Qc,dd=ed,ud=nd,fd=rd,$p=od;const Kp=qp,Zp=Yp,hd=k.forwardRef(({className:n,...e},t)=>_.jsx(cd,{ref:t,className:Mt("fixed inset-0 z-50 bg-black/70 modal-backdrop",n),...e}));hd.displayName=cd.displayName;const pd=k.forwardRef(({className:n,children:e,...t},i)=>_.jsxs(Zp,{children:[_.jsx(hd,{}),_.jsxs(dd,{ref:i,className:Mt("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg sm:rounded-lg modal-content",n),...t,children:[e,_.jsxs($p,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[_.jsx(oa,{className:"h-4 w-4"}),_.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));pd.displayName=dd.displayName;const md=k.forwardRef(({className:n,...e},t)=>_.jsx(ud,{ref:t,className:Mt("text-lg font-semibold leading-none tracking-tight",n),...e}));md.displayName=ud.displayName;const gd=k.forwardRef(({className:n,...e},t)=>_.jsx(fd,{ref:t,className:Mt("text-sm text-muted-foreground",n),...e}));gd.displayName=fd.displayName;const Jp="/assets/joseph-KKYy4_MQ.png",Qp="/assets/bclg-DGjS_ekn.png",em="/assets/esencial-Dj_Q8ZGA.png",tm="/assets/travane-hJxOVszi.png",nm="/assets/kochina-DuxHB4rJ.png",al=[{image:Jp,stack:["Angular","PostgreSQL","Node.js","Swagger"]},{image:Qp,stack:["Angular","Express","MongoDB","CI/CD"]},{image:em,stack:["Angular","Express","MongoDB","Stripe"]},{image:tm,stack:["Angular","TypeScript","Tailwind"]},{image:nm,stack:["Angular","TypeScript","Tailwind"]},{image:null,mock:"saas",stack:["React","Node.js","PostgreSQL","Stripe"]}],ll=["md:col-span-7","md:col-span-5","md:col-span-5","md:col-span-7","md:col-span-12"];function xd(){return _.jsx("div",{className:"absolute inset-0 rounded-xl border border-border overflow-hidden",style:{background:"var(--card)"},children:_.jsxs("div",{className:"p-4 grid grid-cols-3 gap-2 h-full",children:[_.jsx("div",{className:"col-span-1 rounded-md bg-muted-foreground/10"}),_.jsxs("div",{className:"col-span-2 grid grid-rows-3 gap-2",children:[_.jsx("div",{className:"rounded-md bg-primary/25"}),_.jsx("div",{className:"rounded-md bg-muted-foreground/10"}),_.jsx("div",{className:"rounded-md bg-muted-foreground/15"})]})]})})}function cl(n){const e=n.currentTarget.getBoundingClientRect();n.currentTarget.style.setProperty("--mx",`${n.clientX-e.left}px`),n.currentTarget.style.setProperty("--my",`${n.clientY-e.top}px`)}function dl({project:n,hoverLabel:e,className:t}){return _.jsxs("div",{className:Mt("clip-reveal relative rounded-xl bg-muted/40 overflow-hidden",t),children:[n.image?_.jsx("img",{src:n.image,alt:n.title,className:"absolute inset-0 h-full w-full object-cover rounded-xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"}):_.jsx(xd,{}),_.jsx("div",{className:"absolute inset-0 rounded-xl bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity grid place-items-center pointer-events-none",children:_.jsx("span",{className:"text-sm text-foreground/90 font-medium bg-card/90 backdrop-blur px-3 py-1.5 rounded-full border border-border",children:e})})]})}function ul({project:n,roleLabel:e,outcomeLabel:t,titleClass:i="text-2xl"}){return _.jsxs(_.Fragment,{children:[_.jsxs("div",{className:"flex items-start justify-between gap-4",children:[_.jsxs("div",{children:[_.jsx("p",{className:"font-mono-eyebrow text-muted-foreground",children:n.tag}),_.jsx("h3",{className:Mt("font-display mt-2 text-foreground leading-tight",i),children:n.title})]}),_.jsx(qn,{className:"h-5 w-5 shrink-0 text-muted-foreground group-hover:text-primary-glow group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"})]}),_.jsx("p",{className:"mt-3 text-sm text-muted-foreground leading-relaxed",children:n.summary}),_.jsxs("div",{className:"mt-5 flex flex-wrap gap-4 text-xs",children:[_.jsxs("div",{children:[_.jsx("p",{className:"font-mono-eyebrow text-muted-foreground",children:e}),_.jsx("p",{className:"mt-1 text-foreground/90",children:n.role})]}),_.jsxs("div",{children:[_.jsx("p",{className:"font-mono-eyebrow text-muted-foreground",children:t}),_.jsx("p",{className:"mt-1 text-foreground/90",children:n.outcome})]})]}),_.jsx("div",{className:"mt-5 flex flex-wrap gap-1.5",children:n.stack.map(r=>_.jsx("span",{className:"rounded-full border border-border bg-background/40 px-2.5 py-1 text-[11px] font-mono text-muted-foreground",children:r},r))})]})}function im(){const n=Zn(),e=n.selectedWork.projects.map((c,l)=>({...c,image:al[l]?.image??null,stack:al[l]?.stack??[]})),[t,i]=k.useState(null),r=t!==null?e[t]:null,s="group relative w-full text-left rounded-3xl border border-border/80 bg-card/85 backdrop-blur-xl tilt-card hover:tilt-card-hover overflow-hidden shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",[o,...a]=e;return _.jsxs("section",{id:"work",className:"relative py-28 sm:py-36 scroll-mt-24",children:[_.jsxs("div",{className:"mx-auto max-w-6xl px-5 sm:px-8",children:[_.jsxs(Vt,{children:[_.jsxs("h2",{className:"font-display text-4xl sm:text-5xl text-foreground max-w-3xl leading-[1.05]",children:[n.selectedWork.title1," ",n.selectedWork.titleEm]}),_.jsx("p",{className:"mt-5 max-w-2xl text-muted-foreground",children:n.selectedWork.description})]}),_.jsx(Vt,{className:"mt-16",children:_.jsxs("button",{type:"button",onClick:()=>i(0),onPointerMove:cl,className:Mt(s,"grid gap-6 lg:grid-cols-[1.4fr_1fr] p-6 sm:p-8"),children:[_.jsx("div",{className:"card-sheen","aria-hidden":!0}),_.jsx(dl,{project:o,hoverLabel:n.selectedWork.viewCaseStudy,className:"aspect-[16/10] lg:aspect-auto lg:min-h-[420px]"}),_.jsx("div",{className:"flex flex-col justify-center lg:py-4",children:_.jsx(ul,{project:o,roleLabel:n.selectedWork.role,outcomeLabel:n.selectedWork.outcome,titleClass:"text-3xl sm:text-4xl"})})]})}),_.jsx("div",{className:"mt-6 grid gap-6 md:grid-cols-12",children:a.map((c,l)=>{const f=l+1,d=ll[l]==="md:col-span-12";return _.jsx(Vt,{delay:l%2*70,className:Mt("h-full",ll[l]),children:_.jsxs("button",{type:"button",onClick:()=>i(f),onPointerMove:cl,className:Mt(s,"h-full p-6 sm:p-7",d&&"grid gap-6 md:grid-cols-[1.2fr_1fr] items-center"),children:[_.jsx("div",{className:"card-sheen","aria-hidden":!0}),_.jsx(dl,{project:c,hoverLabel:n.selectedWork.viewCaseStudy,className:Mt("aspect-[16/10]",!d&&"mb-6")}),_.jsx("div",{children:_.jsx(ul,{project:c,roleLabel:n.selectedWork.role,outcomeLabel:n.selectedWork.outcome})})]})},c.title)})})]}),_.jsx(Kp,{open:!!r,onOpenChange:c=>!c&&i(null),children:_.jsx(pd,{"data-lenis-prevent":!0,onWheel:c=>c.stopPropagation(),onTouchMove:c=>c.stopPropagation(),className:"max-w-3xl max-h-[90vh] overflow-y-auto overscroll-contain modal-scroll bg-card/95 backdrop-blur-xl border-border p-0 [&>button]:hidden",children:r&&_.jsxs("div",{className:"p-6 sm:p-10",children:[_.jsxs("div",{className:"flex items-start justify-between gap-6",children:[_.jsxs("div",{children:[_.jsx("p",{className:"font-mono-eyebrow text-muted-foreground",children:r.tag}),_.jsx(md,{className:"font-display mt-3 text-3xl sm:text-4xl text-foreground leading-[1.05]",children:r.title}),_.jsx(gd,{className:"mt-3 text-muted-foreground max-w-xl",children:r.summary}),r.liveUrl&&_.jsxs("a",{href:r.liveUrl,target:"_blank",rel:"noopener noreferrer",className:"press mt-4 inline-flex items-center gap-2 rounded-full bg-foreground text-background pl-4 pr-3 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors",children:[n.selectedWork.viewLive,_.jsx("span",{className:"grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground group-hover:bg-background group-hover:text-foreground transition-colors",children:_.jsx(Zu,{className:"h-3 w-3"})})]})]}),_.jsx("button",{type:"button",onClick:()=>i(null),className:"press shrink-0 grid h-10 w-10 place-items-center rounded-full border border-border bg-background/60 hover:bg-background transition-colors","aria-label":n.selectedWork.closeCase,children:_.jsx(oa,{className:"h-4 w-4"})})]}),_.jsxs("div",{className:"mt-8 grid gap-8",children:[_.jsx("div",{className:"relative aspect-[16/9] rounded-2xl bg-muted/30 border border-border overflow-hidden",children:r.video?_.jsx("video",{src:r.video,controls:!0,playsInline:!0,poster:r.image??void 0,className:"absolute inset-0 h-full w-full object-cover"}):r.image?_.jsxs("div",{className:"absolute inset-0",children:[_.jsx("img",{src:r.image,alt:r.title,className:"h-full w-full object-cover"}),_.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-background/30",children:_.jsxs("div",{className:"flex items-center gap-2 rounded-full border border-border bg-card/80 backdrop-blur px-4 py-2 text-sm text-muted-foreground",children:[_.jsx(gc,{className:"h-3.5 w-3.5"}),"Video coming soon"]})})]}):_.jsx(xd,{})}),_.jsx("div",{className:"grid grid-cols-3 gap-3",children:r.metrics.map(c=>_.jsxs("div",{className:"rounded-2xl border border-border bg-card/70 p-4 text-center",children:[_.jsx("p",{className:"font-display text-2xl sm:text-3xl text-primary-glow",children:c.value}),_.jsx("p",{className:"mt-1 font-mono-eyebrow text-muted-foreground",children:c.label})]},c.label))}),_.jsxs("div",{className:"grid sm:grid-cols-3 gap-4 text-sm",children:[_.jsxs("div",{children:[_.jsx("p",{className:"font-mono-eyebrow text-muted-foreground",children:n.selectedWork.sections.client}),_.jsx("p",{className:"mt-1.5 text-foreground/90",children:r.client})]}),_.jsxs("div",{children:[_.jsx("p",{className:"font-mono-eyebrow text-muted-foreground",children:n.selectedWork.sections.role}),_.jsx("p",{className:"mt-1.5 text-foreground/90",children:r.role})]}),_.jsxs("div",{children:[_.jsx("p",{className:"font-mono-eyebrow text-muted-foreground",children:n.selectedWork.sections.timeline}),_.jsx("p",{className:"mt-1.5 text-foreground/90",children:r.timeline})]})]}),_.jsxs("div",{children:[_.jsx("p",{className:"font-mono-eyebrow text-muted-foreground",children:n.selectedWork.sections.problem}),_.jsx("p",{className:"mt-2 text-foreground/90 leading-relaxed",children:r.problem})]}),_.jsxs("div",{children:[_.jsx("p",{className:"font-mono-eyebrow text-muted-foreground",children:n.selectedWork.sections.approach}),_.jsx("ul",{className:"mt-3 space-y-2.5",children:r.approach.map(c=>_.jsxs("li",{className:"flex gap-3 text-sm sm:text-base text-foreground/85 leading-relaxed",children:[_.jsx("span",{className:"mt-2 h-1 w-1 shrink-0 rounded-full bg-primary-glow"}),_.jsx("span",{children:c})]},c))})]}),_.jsxs("div",{children:[_.jsx("p",{className:"font-mono-eyebrow text-muted-foreground",children:n.selectedWork.sections.results}),_.jsx("ul",{className:"mt-3 space-y-2.5",children:r.results.map(c=>_.jsxs("li",{className:"flex gap-3 text-sm sm:text-base text-foreground/85 leading-relaxed",children:[_.jsx("span",{className:"mt-2 h-1 w-1 shrink-0 rounded-full bg-primary-glow"}),_.jsx("span",{children:c})]},c))})]}),_.jsxs("div",{children:[_.jsx("p",{className:"font-mono-eyebrow text-muted-foreground",children:n.selectedWork.sections.techStack}),_.jsx("div",{className:"mt-3 grid sm:grid-cols-2 gap-3",children:r.stackDetail.map(c=>_.jsxs("div",{className:"rounded-2xl border border-border bg-card/60 p-4",children:[_.jsx("p",{className:"font-mono-eyebrow text-muted-foreground",children:c.label}),_.jsx("div",{className:"mt-2.5 flex flex-wrap gap-1.5",children:c.items.map(l=>_.jsx("span",{className:"rounded-full border border-border bg-background/40 px-2.5 py-1 text-[11px] text-foreground/85",children:l},l))})]},c.label))})]})]})]})})})]})}function rm(){const n=Zn();return _.jsx("section",{id:"process",className:"relative py-28 sm:py-44 scroll-mt-24",children:_.jsx("div",{className:"mx-auto max-w-6xl px-5 sm:px-8",children:_.jsxs("div",{className:"grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start",children:[_.jsx("div",{className:"lg:sticky lg:top-32",children:_.jsxs(Vt,{children:[_.jsxs("h2",{className:"font-display text-4xl sm:text-5xl text-foreground leading-[1.05] max-w-md",children:[n.process.title1," ",n.process.titleEm]}),_.jsx("p",{className:"mt-5 max-w-md text-muted-foreground",children:n.process.description})]})}),_.jsxs("ol",{children:[n.process.steps.map((e,t)=>_.jsx(Vt,{delay:t*60,children:_.jsxs("li",{className:"group border-t border-border py-8 sm:py-10 grid grid-cols-[72px_1fr] sm:grid-cols-[104px_1fr] gap-5 sm:gap-8",children:[_.jsx("span",{className:"font-mono text-3xl sm:text-5xl leading-none pt-1 text-foreground/15 transition-colors duration-500 group-hover:text-primary-glow/70",children:e.n}),_.jsxs("div",{children:[_.jsx("h3",{className:"font-display text-xl sm:text-2xl text-foreground leading-snug",children:e.title}),_.jsx("p",{className:"mt-3 text-muted-foreground leading-relaxed",children:e.body})]})]})},e.n)),_.jsx("div",{className:"border-t border-border"})]})]})})})}function sm({items:n,duration:e=40,reverse:t,className:i}){const r=[...n,...n];return _.jsx("div",{className:Mt("marquee group relative overflow-hidden","[mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",i),children:_.jsx("div",{className:"marquee-track flex w-max gap-12 will-change-transform",style:{animation:`marquee ${e}s linear infinite ${t?"reverse":""}`},children:r.map((s,o)=>_.jsx("div",{className:"shrink-0 flex items-center",children:s},o))})})}function om(){const n=Zn(),e=Math.ceil(n.stack.groups.length/2),t=[n.stack.groups.slice(0,e),n.stack.groups.slice(e)];return _.jsxs("section",{id:"stack",className:"relative py-20 sm:py-28 scroll-mt-24",children:[_.jsx("div",{className:"mx-auto max-w-6xl px-5 sm:px-8",children:_.jsxs(Vt,{children:[_.jsxs("h2",{className:"font-display text-4xl sm:text-5xl text-foreground max-w-3xl leading-[1.05]",children:[n.stack.title1," ",n.stack.titleEm]}),_.jsx("p",{className:"mt-5 max-w-2xl text-muted-foreground",children:n.stack.description})]})}),_.jsx(Vt,{className:"mt-14 space-y-7",delay:80,children:t.map((i,r)=>_.jsx(sm,{duration:r===0?70:85,reverse:r===1,items:i.flatMap(s=>[_.jsx("span",{className:"font-mono text-xs uppercase tracking-[0.2em] text-primary-glow/80",children:s.title},`${s.title}-label`),...s.items.map(o=>_.jsx("span",{className:"text-lg sm:text-xl text-foreground/70",children:o},`${s.title}-${o}`))])},r))})]})}function am(){const n=Zn(),e=k.useRef(null),[t,i]=k.useState(0),[r,s]=k.useState(null);k.useEffect(()=>{const c=e.current;if(!c)return;const l=()=>{const f=Array.from(c.querySelectorAll("[data-testimonial-card]"));if(!f.length)return;const d=c.scrollLeft+c.clientWidth/2;let u=0,m=1/0;f.forEach((x,b)=>{const p=x.offsetLeft+x.offsetWidth/2,h=Math.abs(p-d);h<m&&(m=h,u=b)}),i(u)};return c.addEventListener("scroll",l,{passive:!0}),l(),()=>c.removeEventListener("scroll",l)},[n.socialProof.quotes.length]);const o=c=>{const l=e.current;if(!l)return;const f=l.querySelector("[data-testimonial-card]"),d=f?f.offsetWidth+20:l.clientWidth*.85;l.scrollBy({left:c*d,behavior:"smooth"})},a=c=>{const l=e.current;if(!l)return;const f=l.querySelectorAll("[data-testimonial-card]")[c];f&&l.scrollTo({left:f.offsetLeft-(l.clientWidth-f.offsetWidth)/2,behavior:"smooth"})};return _.jsxs("section",{className:"relative py-28 sm:py-36",children:[_.jsxs("div",{className:"mx-auto max-w-6xl px-5 sm:px-8",children:[_.jsx(Vt,{children:_.jsxs("h2",{className:"font-display text-4xl sm:text-5xl text-foreground max-w-3xl leading-[1.05]",children:[n.socialProof.title1," ",n.socialProof.titleEm]})}),_.jsx(Vt,{delay:100,children:_.jsx("div",{className:"mt-10 flex flex-wrap items-center gap-x-10 gap-y-4 text-muted-foreground",children:n.socialProof.logos.map(c=>_.jsx("span",{className:"font-display text-xl sm:text-2xl text-foreground/50",children:c},c))})})]}),_.jsxs("div",{className:"mt-14 relative",children:[_.jsx("div",{"aria-hidden":!0,className:"pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-background to-transparent z-10"}),_.jsx("div",{"aria-hidden":!0,className:"pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-background to-transparent z-10"}),_.jsx("div",{ref:e,className:"testimonial-scroller flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth px-5 sm:px-[max(2rem,calc((100vw-72rem)/2+2rem))] pb-4",children:n.socialProof.quotes.map((c,l)=>{const f=!!c.videoSrc,d=r===l;return _.jsxs("article",{"data-testimonial-card":!0,className:"snap-center shrink-0 w-[88%] sm:w-[520px] md:w-[600px] rounded-2xl border border-border bg-card/60 backdrop-blur-sm overflow-hidden flex flex-col",children:[f?_.jsx("div",{className:"relative aspect-video bg-muted/40",children:d?_.jsx("video",{src:c.videoSrc,poster:c.poster,autoPlay:!0,controls:!0,playsInline:!0,className:"absolute inset-0 h-full w-full object-cover",onEnded:()=>s(null)}):_.jsxs("button",{type:"button",onClick:()=>s(l),"aria-label":n.socialProof.playVideo,className:"group absolute inset-0 h-full w-full",children:[c.poster?_.jsx("img",{src:c.poster,alt:"",className:"absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]",loading:"lazy"}):_.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-primary/20 via-card to-background"}),_.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent"}),_.jsx("span",{className:"absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 ring-1 ring-primary-glow/40 transition-transform duration-300 group-hover:scale-110",children:_.jsx(gc,{className:"h-6 w-6 translate-x-[1px]",fill:"currentColor"})}),_.jsx("span",{className:"absolute bottom-4 left-5 right-5 text-left",children:_.jsxs("span",{className:"block font-mono-eyebrow text-xs text-foreground/80",children:[c.name," · ",c.role]})})]})}):_.jsx("div",{className:"relative h-2 bg-gradient-to-r from-primary/60 via-primary-glow/60 to-transparent"}),_.jsxs("div",{className:"p-7 sm:p-8 flex-1 flex flex-col",children:[_.jsx(uf,{"aria-hidden":!0,className:"h-6 w-6 text-primary-glow/60"}),_.jsx("blockquote",{className:"mt-3 text-foreground/90 leading-relaxed text-lg",children:c.quote}),_.jsxs("figcaption",{className:"mt-6 pt-5 border-t border-border/60 font-mono-eyebrow text-muted-foreground text-xs",children:[c.name," · ",c.role]})]})]},c.name+l)})})]}),_.jsxs("div",{className:"mx-auto max-w-6xl px-5 sm:px-8 mt-6 flex items-center justify-between gap-6",children:[_.jsx("div",{className:"flex items-center gap-2",children:n.socialProof.quotes.map((c,l)=>_.jsx("button",{type:"button","aria-label":`Go to testimonial ${l+1}`,"aria-current":l===t,onClick:()=>a(l),className:`h-1.5 rounded-full transition-all duration-300 ${l===t?"w-8 bg-primary-glow":"w-3 bg-foreground/20 hover:bg-foreground/40"}`},l))}),_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx("button",{type:"button",onClick:()=>o(-1),"aria-label":n.socialProof.prev,className:"h-10 w-10 rounded-full border border-border bg-card/60 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-card hover:border-primary-glow/50 transition-colors",children:_.jsx(qu,{className:"h-5 w-5"})}),_.jsx("button",{type:"button",onClick:()=>o(1),"aria-label":n.socialProof.next,className:"h-10 w-10 rounded-full border border-border bg-card/60 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-card hover:border-primary-glow/50 transition-colors",children:_.jsx($u,{className:"h-5 w-5"})})]})]})]})}function lm(){const n=Zn(),[e,t]=k.useState(!1);async function i(r){r.preventDefault();const s=r.currentTarget,o=new FormData(s),a={name:String(o.get("name")||"").trim(),email:String(o.get("email")||"").trim(),company:String(o.get("company")||"").trim()||void 0,message:String(o.get("message")||"").trim()};if(!a.name||!a.email||!a.message){_s.error(n.contact.errors.required);return}t(!0);try{const c=await fetch("/api/public/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!c.ok){const l=await c.json().catch(()=>null);throw new Error(l?.error||`Request failed (${c.status})`)}_s.success(n.contact.success),s.reset()}catch(c){const l=c instanceof Error?c.message:n.contact.errors.generic;_s.error(l)}finally{t(!1)}}return _.jsx("section",{id:"contact",className:"relative py-28 sm:py-40 scroll-mt-24",style:{background:"radial-gradient(ellipse at 50% 0%, color-mix(in oklab, var(--primary) 14%, transparent) 0%, transparent 60%)"},children:_.jsx("div",{className:"mx-auto max-w-6xl px-5 sm:px-8",children:_.jsxs("div",{className:"grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20",children:[_.jsxs(Vt,{children:[_.jsx("p",{className:"font-mono-eyebrow text-muted-foreground",children:n.contact.eyebrow}),_.jsxs("h2",{className:"font-display mt-4 text-4xl sm:text-5xl text-foreground leading-[1.05]",children:[n.contact.title1," ",_.jsx("span",{className:"text-primary-glow",children:n.contact.titleEm})]}),_.jsx("p",{className:"mt-5 text-muted-foreground leading-relaxed max-w-md",children:n.contact.description}),_.jsxs("ul",{className:"mt-8 space-y-3",children:[_.jsx("li",{children:_.jsxs("a",{href:"mailto:pablo.gzz.sal@gmail.com",className:"inline-flex items-center gap-3 text-foreground hover:text-primary-glow transition-colors",children:[_.jsx(of,{className:"h-4 w-4"}),"pablo.gzz.sal@gmail.com",_.jsx(qn,{className:"h-4 w-4 opacity-70"})]})}),_.jsx("li",{children:_.jsxs("a",{href:"https://www.linkedin.com/in/pablo-gonzalez-salcido-bb1a491a9/",target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-3 text-foreground hover:text-primary-glow transition-colors",children:[_.jsx(tf,{className:"h-4 w-4"}),"LinkedIn",_.jsx(qn,{className:"h-4 w-4 opacity-70"})]})}),_.jsx("li",{children:_.jsxs("a",{href:"https://github.com/pablo-gzz-sal",target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-3 text-foreground hover:text-primary-glow transition-colors",children:[_.jsx(Qu,{className:"h-4 w-4"}),"GitHub",_.jsx(qn,{className:"h-4 w-4 opacity-70"})]})})]})]}),_.jsx(Vt,{delay:100,children:_.jsxs("form",{onSubmit:i,className:"rounded-3xl border border-border bg-card/50 backdrop-blur-sm p-6 sm:p-8",style:{boxShadow:"var(--shadow-elegant)"},children:[_.jsxs("div",{className:"grid sm:grid-cols-2 gap-5",children:[_.jsx(Rs,{label:n.contact.fields.name,name:"name",required:!0,placeholder:n.contact.fields.namePh}),_.jsx(Rs,{label:n.contact.fields.email,name:"email",type:"email",required:!0,placeholder:n.contact.fields.emailPh})]}),_.jsx("div",{className:"mt-5",children:_.jsx(Rs,{label:n.contact.fields.company,name:"company",placeholder:n.contact.fields.companyPh})}),_.jsx("div",{className:"mt-5",children:_.jsxs("label",{className:"block",children:[_.jsx("span",{className:"font-mono-eyebrow text-muted-foreground",children:n.contact.fields.project}),_.jsx("textarea",{name:"message",required:!0,rows:5,maxLength:5e3,placeholder:n.contact.fields.projectPh,className:"mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"})]})}),_.jsx("button",{type:"submit",disabled:e,className:"press mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary-glow transition-colors disabled:opacity-60",children:e?_.jsxs(_.Fragment,{children:[_.jsx(rf,{className:"h-4 w-4 animate-spin"}),n.contact.sending]}):_.jsxs(_.Fragment,{children:[n.contact.send,_.jsx(qn,{className:"h-4 w-4"})]})}),_.jsx("p",{className:"mt-3 text-xs text-muted-foreground",children:n.contact.reply})]})})]})})})}function Rs({label:n,name:e,type:t="text",required:i,placeholder:r}){return _.jsxs("label",{className:"block",children:[_.jsx("span",{className:"font-mono-eyebrow text-muted-foreground",children:n}),_.jsx("input",{type:t,name:e,required:i,placeholder:r,maxLength:320,className:"mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"})]})}function cm(){const n=Zn();return _.jsxs("footer",{className:"border-t border-border py-12",children:[_.jsxs("div",{className:"mx-auto max-w-6xl px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6",children:[_.jsxs("div",{className:"flex items-center gap-2.5",children:[_.jsx("span",{className:"grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground font-display text-sm",children:"PS"}),_.jsx("span",{className:"text-sm text-muted-foreground",children:n.footer.tagline})]}),_.jsxs("div",{className:"flex items-center gap-6 text-sm text-muted-foreground",children:[_.jsx("a",{href:"https://www.linkedin.com/in/pablo-gonzalez-salcido-bb1a491a9/",target:"_blank",rel:"noreferrer",className:"hover:text-foreground transition-colors",children:"LinkedIn"}),_.jsx("a",{href:"https://github.com/pablo-gzz-sal",target:"_blank",rel:"noreferrer",className:"hover:text-foreground transition-colors",children:"GitHub"}),_.jsx("a",{href:"mailto:pablo.gzz.sal@gmail.com",className:"hover:text-foreground transition-colors",children:"Email"})]})]}),_.jsxs("div",{className:"mx-auto max-w-6xl px-5 sm:px-8 mt-8 text-xs text-muted-foreground",children:["© ",new Date().getFullYear()," Pablo Salcido. ",n.footer.rights]})]})}var fl="1.3.23";function vd(n,e,t){return Math.max(n,Math.min(e,t))}function dm(n,e,t){return(1-t)*n+t*e}function um(n,e,t,i){return dm(n,e,1-Math.exp(-t*i))}function fm(n,e){return(n%e+e)%e}var hm=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(n){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=n;const t=vd(0,this.currentTime/this.duration,1);e=t>=1;const i=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=um(this.value,this.to,this.lerp*60,n),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(n,e,{lerp:t,duration:i,easing:r,onStart:s,onUpdate:o}){this.from=this.value=n,this.to=e,this.lerp=t,this.duration=i,this.easing=r,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function pm(n,e){let t;return function(...i){clearTimeout(t),t=setTimeout(()=>{t=void 0,n.apply(this,i)},e)}}var mm=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(n,e,{autoResize:t=!0,debounce:i=250}={}){this.wrapper=n,this.content=e,t&&(this.debouncedResize=pm(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},_d=class{events={};emit(n,...e){const t=this.events[n]||[];for(let i=0,r=t.length;i<r;i++)t[i]?.(...e)}on(n,e){return this.events[n]?this.events[n].push(e):this.events[n]=[e],()=>{this.events[n]=this.events[n]?.filter(t=>e!==t)}}off(n,e){this.events[n]=this.events[n]?.filter(t=>e!==t)}destroy(){this.events={}}};const gm=100/6,On={passive:!1};function hl(n,e){return n===1?gm:n===2?e:1}var xm=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new _d;constructor(n,e={wheelMultiplier:1,touchMultiplier:1}){this.element=n,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,On),this.element.addEventListener("touchstart",this.onTouchStart,On),this.element.addEventListener("touchmove",this.onTouchMove,On),this.element.addEventListener("touchend",this.onTouchEnd,On)}on(n,e){return this.emitter.on(n,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,On),this.element.removeEventListener("touchstart",this.onTouchStart,On),this.element.removeEventListener("touchmove",this.onTouchMove,On),this.element.removeEventListener("touchend",this.onTouchEnd,On)}onTouchStart=n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:n})};onTouchMove=n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n,i=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:i,y:r},this.emitter.emit("scroll",{deltaX:i,deltaY:r,event:n})};onTouchEnd=n=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:n})};onWheel=n=>{let{deltaX:e,deltaY:t,deltaMode:i}=n;const r=hl(i,this.window.width),s=hl(i,this.window.height);e*=r,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:n})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}};const pl=n=>Math.min(1,1.001-2**(-10*n));var vm=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new hm;emitter=new _d;dimensions;virtualScroll;constructor({wrapper:n=window,content:e=document.documentElement,eventsTarget:t=n,smoothWheel:i=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:c,lerp:l=.1,infinite:f=!1,orientation:d="vertical",gestureOrientation:u=d==="horizontal"?"both":"vertical",touchMultiplier:m=1,wheelMultiplier:x=1,autoResize:b=!0,prevent:p,virtualScroll:h,overscroll:y=!0,autoRaf:T=!1,anchors:E=!1,autoToggle:C=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:R=!1,naiveDimensions:g=R,stopInertiaOnNavigate:A=!1}={}){window.lenisVersion=fl,window.lenis||(window.lenis={}),window.lenis.version=fl,d==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),(!n||n===document.documentElement)&&(n=window),typeof a=="number"&&typeof c!="function"?c=pl:typeof c=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:n,content:e,eventsTarget:t,smoothWheel:i,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:c,lerp:l,infinite:f,gestureOrientation:u,orientation:d,touchMultiplier:m,wheelMultiplier:x,autoResize:b,prevent:p,virtualScroll:h,overscroll:y,autoRaf:T,anchors:E,autoToggle:C,allowNestedScroll:w,naiveDimensions:g,stopInertiaOnNavigate:A},this.dimensions=new mm(n,e,{autoResize:b}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new xm(t,{touchMultiplier:m,wheelMultiplier:x}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(n,e){return this.emitter.on(n,e)}off(n,e){return this.emitter.off(n,e)}onScrollEnd=n=>{n instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&n.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const n=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[n]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=n=>{n.propertyName?.includes("overflow")&&n.target===this.rootElement&&this.checkOverflow()};setScroll(n){this.isHorizontal?this.options.wrapper.scrollTo({left:n,behavior:"instant"}):this.options.wrapper.scrollTo({top:n,behavior:"instant"})}onClick=n=>{const e=n.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),t=new URL(window.location.href);if(this.options.anchors){const i=e.find(r=>t.host===r.host&&t.pathname===r.pathname&&r.hash);if(i){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=`#${i.hash.split("#")[1]}`;this.scrollTo(s,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(i=>t.host===i.host&&t.pathname!==i.pathname)){this.reset();return}};onPointerDown=n=>{n.button===1&&this.reset()};onVirtualScroll=n=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(n)===!1)return;const{deltaX:e,deltaY:t,event:i}=n;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const r=i.type.includes("touch"),s=i.type.includes("wheel");this.isTouching=i.type==="touchstart"||i.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&r&&i.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||a)return;let c=i.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const l=this.options.prevent,f=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(c.find(x=>x instanceof HTMLElement&&(typeof l=="function"&&l?.(x)||x.hasAttribute?.("data-lenis-prevent")||f==="vertical"&&x.hasAttribute?.("data-lenis-prevent-vertical")||f==="horizontal"&&x.hasAttribute?.("data-lenis-prevent-horizontal")||r&&x.hasAttribute?.("data-lenis-prevent-touch")||s&&x.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(x,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const u=r&&this.options.syncTouch,m=r&&i.type==="touchend";m&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...u?{lerp:m?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const n=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-n,this.direction=Math.sign(this.animatedScroll-n),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=n=>{const e=n-(this.time||n);this.time=n,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(n,{offset:e=0,immediate:t=!1,lock:i=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:o=r?this.options.duration:void 0,easing:a=r?this.options.easing:void 0,onStart:c,onComplete:l,force:f=!1,userData:d}={}){if((this.isStopped||this.isLocked)&&!f)return;let u=n,m=e;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let x=null;if(typeof u=="string"?(x=document.querySelector(u),x||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof HTMLElement&&u?.nodeType&&(x=u),x){if(this.options.wrapper!==window){const E=this.rootElement.getBoundingClientRect();m-=this.isHorizontal?E.left:E.top}const b=x.getBoundingClientRect(),p=getComputedStyle(x),h=this.isHorizontal?Number.parseFloat(p.scrollMarginLeft):Number.parseFloat(p.scrollMarginTop),y=getComputedStyle(this.rootElement),T=this.isHorizontal?Number.parseFloat(y.scrollPaddingLeft):Number.parseFloat(y.scrollPaddingTop);u=(this.isHorizontal?b.left:b.top)+this.animatedScroll-(Number.isNaN(h)?0:h)-(Number.isNaN(T)?0:T)}}if(typeof u=="number"){if(u+=m,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const x=u-this.animatedScroll;x>this.limit/2?u-=this.limit:x<-this.limit/2&&(u+=this.limit)}}else u=vd(0,u,this.limit);if(u===this.targetScroll){c?.(this),l?.(this);return}if(this.userData=d??{},t){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=u),typeof o=="number"&&typeof a!="function"?a=pl:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,u,{duration:o,easing:a,lerp:s,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",c?.(this)},onUpdate:(x,b)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=x-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=x,this.setScroll(this.scroll),r&&(this.targetScroll=x),b||this.emit(),b&&(this.reset(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(n,{deltaX:e,deltaY:t}){const i=Date.now();n._lenis||(n._lenis={});const r=n._lenis;let s,o,a,c,l,f,d,u,m,x;if(i-(r.time??0)>2e3){r.time=Date.now();const w=window.getComputedStyle(n);if(r.computedStyle=w,s=["auto","overlay","scroll"].includes(w.overflowX),o=["auto","overlay","scroll"].includes(w.overflowY),l=["auto"].includes(w.overscrollBehaviorX),f=["auto"].includes(w.overscrollBehaviorY),r.hasOverflowX=s,r.hasOverflowY=o,!(s||o))return!1;d=n.scrollWidth,u=n.scrollHeight,m=n.clientWidth,x=n.clientHeight,a=d>m,c=u>x,r.isScrollableX=a,r.isScrollableY=c,r.scrollWidth=d,r.scrollHeight=u,r.clientWidth=m,r.clientHeight=x,r.hasOverscrollBehaviorX=l,r.hasOverscrollBehaviorY=f}else a=r.isScrollableX,c=r.isScrollableY,s=r.hasOverflowX,o=r.hasOverflowY,d=r.scrollWidth,u=r.scrollHeight,m=r.clientWidth,x=r.clientHeight,l=r.hasOverscrollBehaviorX,f=r.hasOverscrollBehaviorY;if(!(s&&a||o&&c))return!1;const b=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let p,h,y,T,E,C;if(b==="horizontal")p=Math.round(n.scrollLeft),h=d-m,y=e,T=s,E=a,C=l;else if(b==="vertical")p=Math.round(n.scrollTop),h=u-x,y=t,T=o,E=c,C=f;else return!1;return!C&&(p>=h||p<=0)?!0:(y>0?p<h:p>0)&&T&&E}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const n=this.options.wrapper;return this.isHorizontal?n.scrollX??n.scrollLeft:n.scrollY??n.scrollTop}get scroll(){return this.options.infinite?fm(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(n){this._isScrolling!==n&&(this._isScrolling=n,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(n){this._isStopped!==n&&(this._isStopped=n,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(n){this._isLocked!==n&&(this._isLocked=n,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let n="lenis";return this.options.autoToggle&&(n+=" lenis-autoToggle"),this.isStopped&&(n+=" lenis-stopped"),this.isLocked&&(n+=" lenis-locked"),this.isScrolling&&(n+=" lenis-scrolling"),this.isScrolling==="smooth"&&(n+=" lenis-smooth"),n}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(n=>{this.rootElement.classList.add(n)})}cleanUpClassName(){for(const n of Array.from(this.rootElement.classList))(n==="lenis"||n.startsWith("lenis-"))&&this.rootElement.classList.remove(n)}};function _m(){return k.useEffect(()=>{if(typeof window<"u"&&window.matchMedia?.("(prefers-reduced-motion: reduce)").matches)return;const e=new vm({duration:1.15,easing:a=>Math.min(1,1.001-Math.pow(2,-10*a)),smoothWheel:!0,wheelMultiplier:1,touchMultiplier:1.2}),t=document.documentElement,i=({progress:a})=>{t.style.setProperty("--scroll-progress",a.toFixed(4)),window.dispatchEvent(new CustomEvent("lenis-scroll",{detail:{progress:a}}))};e.on("scroll",i);const r=a=>{if(a.defaultPrevented||a.button!==0||a.metaKey||a.ctrlKey)return;const c=a.target.closest?.('a[href^="#"]');if(!c)return;const l=c.getAttribute("href");if(!l||l==="#")return;const f=document.querySelector(l);f&&(a.preventDefault(),e.scrollTo(f,{offset:-96,duration:1.2}))};document.addEventListener("click",r);let s=0;const o=a=>{e.raf(a),s=requestAnimationFrame(o)};return s=requestAnimationFrame(o),()=>{cancelAnimationFrame(s),document.removeEventListener("click",r),e.destroy()}},[]),null}const ha="184",bm=0,ml=1,Sm=2,$r=1,ym=2,nr=3,Kn=0,Bt=1,En=2,Tn=0,zi=1,gl=2,xl=3,vl=4,Mm=5,ai=100,Em=101,wm=102,Tm=103,Am=104,Rm=200,Cm=201,Pm=202,Nm=203,po=204,mo=205,Dm=206,Lm=207,Im=208,Um=209,Fm=210,Om=211,Bm=212,km=213,zm=214,go=0,xo=1,vo=2,Vi=3,_o=4,bo=5,So=6,yo=7,bd=0,Gm=1,Vm=2,fn=0,Sd=1,yd=2,Md=3,Ed=4,wd=5,Td=6,Ad=7,Rd=300,fi=301,Hi=302,Cs=303,Ps=304,hs=306,Mo=1e3,wn=1001,Eo=1002,Ct=1003,Hm=1004,Er=1005,Lt=1006,Ns=1007,ci=1008,qt=1009,Cd=1010,Pd=1011,or=1012,pa=1013,mn=1014,dn=1015,Cn=1016,ma=1017,ga=1018,ar=1020,Nd=35902,Dd=35899,Ld=1021,Id=1022,en=1023,Pn=1026,di=1027,Ud=1028,xa=1029,hi=1030,va=1031,_a=1033,Kr=33776,Zr=33777,Jr=33778,Qr=33779,wo=35840,To=35841,Ao=35842,Ro=35843,Co=36196,Po=37492,No=37496,Do=37488,Lo=37489,is=37490,Io=37491,Uo=37808,Fo=37809,Oo=37810,Bo=37811,ko=37812,zo=37813,Go=37814,Vo=37815,Ho=37816,Wo=37817,jo=37818,Xo=37819,qo=37820,Yo=37821,$o=36492,Ko=36494,Zo=36495,Jo=36283,Qo=36284,rs=36285,ea=36286,Wm=3200,_l=0,jm=1,Xn="",Xt="srgb",ss="srgb-linear",os="linear",rt="srgb",wi=7680,bl=519,Xm=512,qm=513,Ym=514,ba=515,$m=516,Km=517,Sa=518,Zm=519,Sl=35044,yl="300 es",un=2e3,as=2001;function Jm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ls(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Qm(){const n=ls("canvas");return n.style.display="block",n}const Ml={};function El(...n){const e="THREE."+n.shift();console.log(e,...n)}function Fd(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Be(...n){n=Fd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function nt(...n){n=Fd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ta(...n){const e=n.join(" ");e in Ml||(Ml[e]=!0,Be(...n))}function eg(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const tg={[go]:xo,[vo]:So,[_o]:yo,[Vi]:bo,[xo]:go,[So]:vo,[yo]:_o,[bo]:Vi};class xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ds=Math.PI/180,na=180/Math.PI;function lr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function ng(n,e){return(n%e+e)%e}function Ls(n,e,t){return(1-t)*n+t*e}function $i(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ft(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const wa=class wa{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};wa.prototype.isVector2=!0;let it=wa;class Xi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],f=i[r+2],d=i[r+3],u=s[o+0],m=s[o+1],x=s[o+2],b=s[o+3];if(d!==b||c!==u||l!==m||f!==x){let p=c*u+l*m+f*x+d*b;p<0&&(u=-u,m=-m,x=-x,b=-b,p=-p);let h=1-a;if(p<.9995){const y=Math.acos(p),T=Math.sin(y);h=Math.sin(h*y)/T,a=Math.sin(a*y)/T,c=c*h+u*a,l=l*h+m*a,f=f*h+x*a,d=d*h+b*a}else{c=c*h+u*a,l=l*h+m*a,f=f*h+x*a,d=d*h+b*a;const y=1/Math.sqrt(c*c+l*l+f*f+d*d);c*=y,l*=y,f*=y,d*=y}}e[t]=c,e[t+1]=l,e[t+2]=f,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],f=i[r+3],d=s[o],u=s[o+1],m=s[o+2],x=s[o+3];return e[t]=a*x+f*d+c*m-l*u,e[t+1]=c*x+f*u+l*d-a*m,e[t+2]=l*x+f*m+a*u-c*d,e[t+3]=f*x-a*d-c*u-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),f=a(r/2),d=a(s/2),u=c(i/2),m=c(r/2),x=c(s/2);switch(o){case"XYZ":this._x=u*f*d+l*m*x,this._y=l*m*d-u*f*x,this._z=l*f*x+u*m*d,this._w=l*f*d-u*m*x;break;case"YXZ":this._x=u*f*d+l*m*x,this._y=l*m*d-u*f*x,this._z=l*f*x-u*m*d,this._w=l*f*d+u*m*x;break;case"ZXY":this._x=u*f*d-l*m*x,this._y=l*m*d+u*f*x,this._z=l*f*x+u*m*d,this._w=l*f*d-u*m*x;break;case"ZYX":this._x=u*f*d-l*m*x,this._y=l*m*d+u*f*x,this._z=l*f*x-u*m*d,this._w=l*f*d+u*m*x;break;case"YZX":this._x=u*f*d+l*m*x,this._y=l*m*d+u*f*x,this._z=l*f*x-u*m*d,this._w=l*f*d-u*m*x;break;case"XZY":this._x=u*f*d-l*m*x,this._y=l*m*d-u*f*x,this._z=l*f*x+u*m*d,this._w=l*f*d+u*m*x;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],f=t[6],d=t[10],u=i+a+d;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(f-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(f-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+f)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,f=t._w;return this._x=i*f+o*a+r*l-s*c,this._y=r*f+o*c+s*a-i*l,this._z=s*f+o*l+i*c-r*a,this._w=o*f-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),f=Math.sin(l);c=Math.sin(c*l)/f,t=Math.sin(t*l)/f,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ta=class Ta{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),f=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*f,this.y=i+c*f+a*l-s*d,this.z=r+c*d+s*f-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Is.copy(this).projectOnVector(e),this.sub(Is)}reflect(e){return this.sub(Is.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ta.prototype.isVector3=!0;let W=Ta;const Is=new W,wl=new Xi,Aa=class Aa{constructor(e,t,i,r,s,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=t,f[4]=s,f[5]=c,f[6]=i,f[7]=o,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],f=i[4],d=i[7],u=i[2],m=i[5],x=i[8],b=r[0],p=r[3],h=r[6],y=r[1],T=r[4],E=r[7],C=r[2],w=r[5],R=r[8];return s[0]=o*b+a*y+c*C,s[3]=o*p+a*T+c*w,s[6]=o*h+a*E+c*R,s[1]=l*b+f*y+d*C,s[4]=l*p+f*T+d*w,s[7]=l*h+f*E+d*R,s[2]=u*b+m*y+x*C,s[5]=u*p+m*T+x*w,s[8]=u*h+m*E+x*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8];return t*o*f-t*a*l-i*s*f+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8],d=f*o-a*l,u=a*c-f*s,m=l*s-o*c,x=t*d+i*u+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/x;return e[0]=d*b,e[1]=(r*l-f*i)*b,e[2]=(a*i-r*o)*b,e[3]=u*b,e[4]=(f*t-r*c)*b,e[5]=(r*s-a*t)*b,e[6]=m*b,e[7]=(i*c-l*t)*b,e[8]=(o*t-i*s)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Us.makeScale(e,t)),this}rotate(e){return this.premultiply(Us.makeRotation(-e)),this}translate(e,t){return this.premultiply(Us.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Aa.prototype.isMatrix3=!0;let ze=Aa;const Us=new ze,Tl=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Al=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ig(){const n={enabled:!0,workingColorSpace:ss,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===rt&&(r.r=An(r.r),r.g=An(r.g),r.b=An(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===rt&&(r.r=Gi(r.r),r.g=Gi(r.g),r.b=Gi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Xn?os:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ta("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ta("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ss]:{primaries:e,whitePoint:i,transfer:os,toXYZ:Tl,fromXYZ:Al,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:Tl,fromXYZ:Al,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),n}const $e=ig();function An(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Gi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ti;class rg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ti===void 0&&(Ti=ls("canvas")),Ti.width=e.width,Ti.height=e.height;const r=Ti.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ti}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ls("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=An(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(An(t[i]/255)*255):t[i]=An(t[i]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sg=0;class ya{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=lr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Fs(r[o].image)):s.push(Fs(r[o]))}else s=Fs(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Fs(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?rg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}let og=0;const Os=new W;class Ut extends xi{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,i=wn,r=wn,s=Lt,o=ci,a=en,c=qt,l=Ut.DEFAULT_ANISOTROPY,f=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=lr(),this.name="",this.source=new ya(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Os).x}get height(){return this.source.getSize(Os).y}get depth(){return this.source.getSize(Os).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Be(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mo:e.x=e.x-Math.floor(e.x);break;case wn:e.x=e.x<0?0:1;break;case Eo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mo:e.y=e.y-Math.floor(e.y);break;case wn:e.y=e.y<0?0:1;break;case Eo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=Rd;Ut.DEFAULT_ANISOTROPY=1;const Ra=class Ra{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],f=c[4],d=c[8],u=c[1],m=c[5],x=c[9],b=c[2],p=c[6],h=c[10];if(Math.abs(f-u)<.01&&Math.abs(d-b)<.01&&Math.abs(x-p)<.01){if(Math.abs(f+u)<.1&&Math.abs(d+b)<.1&&Math.abs(x+p)<.1&&Math.abs(l+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,E=(m+1)/2,C=(h+1)/2,w=(f+u)/4,R=(d+b)/4,g=(x+p)/4;return T>E&&T>C?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=w/i,s=R/i):E>C?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=w/r,s=g/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=R/s,r=g/s),this.set(i,r,s,t),this}let y=Math.sqrt((p-x)*(p-x)+(d-b)*(d-b)+(u-f)*(u-f));return Math.abs(y)<.001&&(y=1),this.x=(p-x)/y,this.y=(d-b)/y,this.z=(u-f)/y,this.w=Math.acos((l+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ra.prototype.isVector4=!0;let St=Ra;class ag extends xi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new Ut(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Lt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new ya(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hn extends ag{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Od extends Ut{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lg extends Ut{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cs=class cs{constructor(e,t,i,r,s,o,a,c,l,f,d,u,m,x,b,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,f,d,u,m,x,b,p)}set(e,t,i,r,s,o,a,c,l,f,d,u,m,x,b,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=c,h[2]=l,h[6]=f,h[10]=d,h[14]=u,h[3]=m,h[7]=x,h[11]=b,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cs().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Ai.setFromMatrixColumn(e,0).length(),s=1/Ai.setFromMatrixColumn(e,1).length(),o=1/Ai.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=o*f,m=o*d,x=a*f,b=a*d;t[0]=c*f,t[4]=-c*d,t[8]=l,t[1]=m+x*l,t[5]=u-b*l,t[9]=-a*c,t[2]=b-u*l,t[6]=x+m*l,t[10]=o*c}else if(e.order==="YXZ"){const u=c*f,m=c*d,x=l*f,b=l*d;t[0]=u+b*a,t[4]=x*a-m,t[8]=o*l,t[1]=o*d,t[5]=o*f,t[9]=-a,t[2]=m*a-x,t[6]=b+u*a,t[10]=o*c}else if(e.order==="ZXY"){const u=c*f,m=c*d,x=l*f,b=l*d;t[0]=u-b*a,t[4]=-o*d,t[8]=x+m*a,t[1]=m+x*a,t[5]=o*f,t[9]=b-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const u=o*f,m=o*d,x=a*f,b=a*d;t[0]=c*f,t[4]=x*l-m,t[8]=u*l+b,t[1]=c*d,t[5]=b*l+u,t[9]=m*l-x,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const u=o*c,m=o*l,x=a*c,b=a*l;t[0]=c*f,t[4]=b-u*d,t[8]=x*d+m,t[1]=d,t[5]=o*f,t[9]=-a*f,t[2]=-l*f,t[6]=m*d+x,t[10]=u-b*d}else if(e.order==="XZY"){const u=o*c,m=o*l,x=a*c,b=a*l;t[0]=c*f,t[4]=-d,t[8]=l*f,t[1]=u*d+b,t[5]=o*f,t[9]=m*d-x,t[2]=x*d-m,t[6]=a*f,t[10]=b*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cg,e,dg)}lookAt(e,t,i){const r=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),Bn.crossVectors(i,zt),Bn.lengthSq()===0&&(Math.abs(i.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),Bn.crossVectors(i,zt)),Bn.normalize(),wr.crossVectors(zt,Bn),r[0]=Bn.x,r[4]=wr.x,r[8]=zt.x,r[1]=Bn.y,r[5]=wr.y,r[9]=zt.y,r[2]=Bn.z,r[6]=wr.z,r[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],f=i[1],d=i[5],u=i[9],m=i[13],x=i[2],b=i[6],p=i[10],h=i[14],y=i[3],T=i[7],E=i[11],C=i[15],w=r[0],R=r[4],g=r[8],A=r[12],F=r[1],P=r[5],z=r[9],Y=r[13],K=r[2],L=r[6],I=r[10],B=r[14],te=r[3],ie=r[7],q=r[11],be=r[15];return s[0]=o*w+a*F+c*K+l*te,s[4]=o*R+a*P+c*L+l*ie,s[8]=o*g+a*z+c*I+l*q,s[12]=o*A+a*Y+c*B+l*be,s[1]=f*w+d*F+u*K+m*te,s[5]=f*R+d*P+u*L+m*ie,s[9]=f*g+d*z+u*I+m*q,s[13]=f*A+d*Y+u*B+m*be,s[2]=x*w+b*F+p*K+h*te,s[6]=x*R+b*P+p*L+h*ie,s[10]=x*g+b*z+p*I+h*q,s[14]=x*A+b*Y+p*B+h*be,s[3]=y*w+T*F+E*K+C*te,s[7]=y*R+T*P+E*L+C*ie,s[11]=y*g+T*z+E*I+C*q,s[15]=y*A+T*Y+E*B+C*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],f=e[2],d=e[6],u=e[10],m=e[14],x=e[3],b=e[7],p=e[11],h=e[15],y=c*m-l*u,T=a*m-l*d,E=a*u-c*d,C=o*m-l*f,w=o*u-c*f,R=o*d-a*f;return t*(b*y-p*T+h*E)-i*(x*y-p*C+h*w)+r*(x*T-b*C+h*R)-s*(x*E-b*w+p*R)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8],d=e[9],u=e[10],m=e[11],x=e[12],b=e[13],p=e[14],h=e[15],y=t*a-i*o,T=t*c-r*o,E=t*l-s*o,C=i*c-r*a,w=i*l-s*a,R=r*l-s*c,g=f*b-d*x,A=f*p-u*x,F=f*h-m*x,P=d*p-u*b,z=d*h-m*b,Y=u*h-m*p,K=y*Y-T*z+E*P+C*F-w*A+R*g;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/K;return e[0]=(a*Y-c*z+l*P)*L,e[1]=(r*z-i*Y-s*P)*L,e[2]=(b*R-p*w+h*C)*L,e[3]=(u*w-d*R-m*C)*L,e[4]=(c*F-o*Y-l*A)*L,e[5]=(t*Y-r*F+s*A)*L,e[6]=(p*E-x*R-h*T)*L,e[7]=(f*R-u*E+m*T)*L,e[8]=(o*z-a*F+l*g)*L,e[9]=(i*F-t*z-s*g)*L,e[10]=(x*w-b*E+h*y)*L,e[11]=(d*E-f*w-m*y)*L,e[12]=(a*A-o*P-c*g)*L,e[13]=(t*P-i*A+r*g)*L,e[14]=(b*T-x*C-p*y)*L,e[15]=(f*C-d*T+u*y)*L,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,f=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,f*a+i,f*c-r*o,0,l*c-r*a,f*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,f=o+o,d=a+a,u=s*l,m=s*f,x=s*d,b=o*f,p=o*d,h=a*d,y=c*l,T=c*f,E=c*d,C=i.x,w=i.y,R=i.z;return r[0]=(1-(b+h))*C,r[1]=(m+E)*C,r[2]=(x-T)*C,r[3]=0,r[4]=(m-E)*w,r[5]=(1-(u+h))*w,r[6]=(p+y)*w,r[7]=0,r[8]=(x+T)*R,r[9]=(p-y)*R,r[10]=(1-(u+b))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let o=Ai.set(r[0],r[1],r[2]).length();const a=Ai.set(r[4],r[5],r[6]).length(),c=Ai.set(r[8],r[9],r[10]).length();s<0&&(o=-o),$t.copy(this);const l=1/o,f=1/a,d=1/c;return $t.elements[0]*=l,$t.elements[1]*=l,$t.elements[2]*=l,$t.elements[4]*=f,$t.elements[5]*=f,$t.elements[6]*=f,$t.elements[8]*=d,$t.elements[9]*=d,$t.elements[10]*=d,t.setFromRotationMatrix($t),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,r,s,o,a=un,c=!1){const l=this.elements,f=2*s/(t-e),d=2*s/(i-r),u=(t+e)/(t-e),m=(i+r)/(i-r);let x,b;if(c)x=s/(o-s),b=o*s/(o-s);else if(a===un)x=-(o+s)/(o-s),b=-2*o*s/(o-s);else if(a===as)x=-o/(o-s),b=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=f,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=b,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=un,c=!1){const l=this.elements,f=2/(t-e),d=2/(i-r),u=-(t+e)/(t-e),m=-(i+r)/(i-r);let x,b;if(c)x=1/(o-s),b=o/(o-s);else if(a===un)x=-2/(o-s),b=-(o+s)/(o-s);else if(a===as)x=-1/(o-s),b=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=f,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=x,l[14]=b,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};cs.prototype.isMatrix4=!0;let wt=cs;const Ai=new W,$t=new wt,cg=new W(0,0,0),dg=new W(1,1,1),Bn=new W,wr=new W,zt=new W,Rl=new wt,Cl=new Xi;class pi{constructor(e=0,t=0,i=0,r=pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],f=r[9],d=r[2],u=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Rl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cl.setFromEuler(this),this.setFromQuaternion(Cl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pi.DEFAULT_ORDER="XYZ";class Bd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ug=0;const Pl=new W,Ri=new Xi,_n=new wt,Tr=new W,Ki=new W,fg=new W,hg=new Xi,Nl=new W(1,0,0),Dl=new W(0,1,0),Ll=new W(0,0,1),Il={type:"added"},pg={type:"removed"},Ci={type:"childadded",child:null},Bs={type:"childremoved",child:null};class Ht extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new W,t=new pi,i=new Xi,r=new W(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wt},normalMatrix:{value:new ze}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.premultiply(Ri),this}rotateX(e){return this.rotateOnAxis(Nl,e)}rotateY(e){return this.rotateOnAxis(Dl,e)}rotateZ(e){return this.rotateOnAxis(Ll,e)}translateOnAxis(e,t){return Pl.copy(e).applyQuaternion(this.quaternion),this.position.add(Pl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nl,e)}translateY(e){return this.translateOnAxis(Dl,e)}translateZ(e){return this.translateOnAxis(Ll,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Tr.copy(e):Tr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(Ki,Tr,this.up):_n.lookAt(Tr,Ki,this.up),this.quaternion.setFromRotationMatrix(_n),r&&(_n.extractRotation(r.matrixWorld),Ri.setFromRotationMatrix(_n),this.quaternion.premultiply(Ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Il),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pg),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Il),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,e,fg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,hg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),f=o(e.images),d=o(e.shapes),u=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const c=[];for(const l in a){const f=a[l];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ht.DEFAULT_UP=new W(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ar extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mg={type:"move"};class ks{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ar,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ar,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ar,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const b of e.hand.values()){const p=t.getJointPose(b,i),h=this._getHandJoint(l,b);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const f=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=f.position.distanceTo(d.position),m=.02,x=.005;l.inputState.pinching&&u>m+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=m-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mg)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ar;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const kd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},Rr={h:0,s:0,l:0};function zs(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ot{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=$e.workingColorSpace){return this.r=e,this.g=t,this.b=i,$e.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=$e.workingColorSpace){if(e=ng(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=zs(o,s,e+1/3),this.g=zs(o,s,e),this.b=zs(o,s,e-1/3)}return $e.colorSpaceToWorking(this,r),this}setStyle(e,t=Xt){function i(s){s!==void 0&&parseFloat(s)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const i=kd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=An(e.r),this.g=An(e.g),this.b=An(e.b),this}copyLinearToSRGB(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return $e.workingToColorSpace(Dt.copy(this),e),Math.round(Ke(Dt.r*255,0,255))*65536+Math.round(Ke(Dt.g*255,0,255))*256+Math.round(Ke(Dt.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(Dt.copy(this),t);const i=Dt.r,r=Dt.g,s=Dt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const f=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=f<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=f,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=Xt){$e.workingToColorSpace(Dt.copy(this),e);const t=Dt.r,i=Dt.g,r=Dt.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(kn),this.setHSL(kn.h+e,kn.s+t,kn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(kn),e.getHSL(Rr);const i=Ls(kn.h,Rr.h,t),r=Ls(kn.s,Rr.s,t),s=Ls(kn.l,Rr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new ot;ot.NAMES=kd;class gg extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pi,this.environmentIntensity=1,this.environmentRotation=new pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Kt=new W,bn=new W,Gs=new W,Sn=new W,Pi=new W,Ni=new W,Ul=new W,Vs=new W,Hs=new W,Ws=new W,js=new St,Xs=new St,qs=new St;class Qt{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Kt.subVectors(e,t),r.cross(Kt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Kt.subVectors(r,t),bn.subVectors(i,t),Gs.subVectors(e,t);const o=Kt.dot(Kt),a=Kt.dot(bn),c=Kt.dot(Gs),l=bn.dot(bn),f=bn.dot(Gs),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;const u=1/d,m=(l*c-a*f)*u,x=(o*f-a*c)*u;return s.set(1-m-x,x,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Sn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Sn.x),c.addScaledVector(o,Sn.y),c.addScaledVector(a,Sn.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return js.setScalar(0),Xs.setScalar(0),qs.setScalar(0),js.fromBufferAttribute(e,t),Xs.fromBufferAttribute(e,i),qs.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(js,s.x),o.addScaledVector(Xs,s.y),o.addScaledVector(qs,s.z),o}static isFrontFacing(e,t,i,r){return Kt.subVectors(i,t),bn.subVectors(e,t),Kt.cross(bn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kt.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),Kt.cross(bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Qt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Pi.subVectors(r,i),Ni.subVectors(s,i),Vs.subVectors(e,i);const c=Pi.dot(Vs),l=Ni.dot(Vs);if(c<=0&&l<=0)return t.copy(i);Hs.subVectors(e,r);const f=Pi.dot(Hs),d=Ni.dot(Hs);if(f>=0&&d<=f)return t.copy(r);const u=c*d-f*l;if(u<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(i).addScaledVector(Pi,o);Ws.subVectors(e,s);const m=Pi.dot(Ws),x=Ni.dot(Ws);if(x>=0&&m<=x)return t.copy(s);const b=m*l-c*x;if(b<=0&&l>=0&&x<=0)return a=l/(l-x),t.copy(i).addScaledVector(Ni,a);const p=f*x-m*d;if(p<=0&&d-f>=0&&m-x>=0)return Ul.subVectors(s,r),a=(d-f)/(d-f+(m-x)),t.copy(r).addScaledVector(Ul,a);const h=1/(p+b+u);return o=b*h,a=u*h,t.copy(i).addScaledVector(Pi,o).addScaledVector(Ni,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class cr{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zt):Zt.fromBufferAttribute(s,o),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Cr.copy(i.boundingBox)),Cr.applyMatrix4(e.matrixWorld),this.union(Cr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zi),Pr.subVectors(this.max,Zi),Di.subVectors(e.a,Zi),Li.subVectors(e.b,Zi),Ii.subVectors(e.c,Zi),zn.subVectors(Li,Di),Gn.subVectors(Ii,Li),ni.subVectors(Di,Ii);let t=[0,-zn.z,zn.y,0,-Gn.z,Gn.y,0,-ni.z,ni.y,zn.z,0,-zn.x,Gn.z,0,-Gn.x,ni.z,0,-ni.x,-zn.y,zn.x,0,-Gn.y,Gn.x,0,-ni.y,ni.x,0];return!Ys(t,Di,Li,Ii,Pr)||(t=[1,0,0,0,1,0,0,0,1],!Ys(t,Di,Li,Ii,Pr))?!1:(Nr.crossVectors(zn,Gn),t=[Nr.x,Nr.y,Nr.z],Ys(t,Di,Li,Ii,Pr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const yn=[new W,new W,new W,new W,new W,new W,new W,new W],Zt=new W,Cr=new cr,Di=new W,Li=new W,Ii=new W,zn=new W,Gn=new W,ni=new W,Zi=new W,Pr=new W,Nr=new W,ii=new W;function Ys(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ii.fromArray(n,s);const a=r.x*Math.abs(ii.x)+r.y*Math.abs(ii.y)+r.z*Math.abs(ii.z),c=e.dot(ii),l=t.dot(ii),f=i.dot(ii);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>a)return!1}return!0}const yt=new W,Dr=new it;let xg=0;class pn extends xi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Sl,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Dr.fromBufferAttribute(this,t),Dr.applyMatrix3(e),this.setXY(t,Dr.x,Dr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=$i(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$i(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$i(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$i(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sl&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class zd extends pn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Gd extends pn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Rn extends pn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const vg=new cr,Ji=new W,$s=new W;class Ma{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):vg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ji.subVectors(e,this.center);const t=Ji.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ji,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($s.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ji.copy(e.center).add($s)),this.expandByPoint(Ji.copy(e.center).sub($s))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let _g=0;const jt=new wt,Ks=new Ht,Ui=new W,Gt=new cr,Qi=new cr,Rt=new W;class Dn extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_g++}),this.uuid=lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jm(e)?Gd:zd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,i){return jt.makeTranslation(e,t,i),this.applyMatrix4(jt),this}scale(e,t,i){return jt.makeScale(e,t,i),this.applyMatrix4(jt),this}lookAt(e){return Ks.lookAt(e),Ks.updateMatrix(),this.applyMatrix4(Ks.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Rn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ma);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Qi.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(Gt.min,Qi.min),Gt.expandByPoint(Rt),Rt.addVectors(Gt.max,Qi.max),Gt.expandByPoint(Rt)):(Gt.expandByPoint(Qi.min),Gt.expandByPoint(Qi.max))}Gt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Rt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,f=a.count;l<f;l++)Rt.fromBufferAttribute(a,l),c&&(Ui.fromBufferAttribute(e,l),Rt.add(Ui)),r=Math.max(r,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let g=0;g<i.count;g++)a[g]=new W,c[g]=new W;const l=new W,f=new W,d=new W,u=new it,m=new it,x=new it,b=new W,p=new W;function h(g,A,F){l.fromBufferAttribute(i,g),f.fromBufferAttribute(i,A),d.fromBufferAttribute(i,F),u.fromBufferAttribute(s,g),m.fromBufferAttribute(s,A),x.fromBufferAttribute(s,F),f.sub(l),d.sub(l),m.sub(u),x.sub(u);const P=1/(m.x*x.y-x.x*m.y);isFinite(P)&&(b.copy(f).multiplyScalar(x.y).addScaledVector(d,-m.y).multiplyScalar(P),p.copy(d).multiplyScalar(m.x).addScaledVector(f,-x.x).multiplyScalar(P),a[g].add(b),a[A].add(b),a[F].add(b),c[g].add(p),c[A].add(p),c[F].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let g=0,A=y.length;g<A;++g){const F=y[g],P=F.start,z=F.count;for(let Y=P,K=P+z;Y<K;Y+=3)h(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const T=new W,E=new W,C=new W,w=new W;function R(g){C.fromBufferAttribute(r,g),w.copy(C);const A=a[g];T.copy(A),T.sub(C.multiplyScalar(C.dot(A))).normalize(),E.crossVectors(w,A);const P=E.dot(c[g])<0?-1:1;o.setXYZW(g,T.x,T.y,T.z,P)}for(let g=0,A=y.length;g<A;++g){const F=y[g],P=F.start,z=F.count;for(let Y=P,K=P+z;Y<K;Y+=3)R(e.getX(Y+0)),R(e.getX(Y+1)),R(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);const r=new W,s=new W,o=new W,a=new W,c=new W,l=new W,f=new W,d=new W;if(e)for(let u=0,m=e.count;u<m;u+=3){const x=e.getX(u+0),b=e.getX(u+1),p=e.getX(u+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,b),o.fromBufferAttribute(t,p),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,x),c.fromBufferAttribute(i,b),l.fromBufferAttribute(i,p),a.add(f),c.add(f),l.add(f),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(b,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,m=t.count;u<m;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,c){const l=a.array,f=a.itemSize,d=a.normalized,u=new l.constructor(c.length*f);let m=0,x=0;for(let b=0,p=c.length;b<p;b++){a.isInterleavedBufferAttribute?m=c[b]*a.data.stride+a.offset:m=c[b]*f;for(let h=0;h<f;h++)u[x++]=l[m++]}return new pn(u,f,d)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dn,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let f=0,d=l.length;f<d;f++){const u=l[f],m=e(u,i);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],f=[];for(let d=0,u=l.length;d<u;d++){const m=l[d];f.push(m.toJSON(e.data))}f.length>0&&(r[c]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const f=r[l];this.setAttribute(l,f.clone(t))}const s=e.morphAttributes;for(const l in s){const f=[],d=s[l];for(let u=0,m=d.length;u<m;u++)f.push(d[u].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,f=o.length;l<f;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let bg=0;class ps extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=lr(),this.name="",this.type="Material",this.blending=zi,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=po,this.blendDst=mo,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wi,this.stencilZFail=wi,this.stencilZPass=wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zi&&(i.blending=this.blending),this.side!==Kn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==po&&(i.blendSrc=this.blendSrc),this.blendDst!==mo&&(i.blendDst=this.blendDst),this.blendEquation!==ai&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Vi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==wi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==wi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Mn=new W,Zs=new W,Lr=new W,Vn=new W,Js=new W,Ir=new W,Qs=new W;class Sg{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mn.copy(this.origin).addScaledVector(this.direction,t),Mn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Zs.copy(e).add(t).multiplyScalar(.5),Lr.copy(t).sub(e).normalize(),Vn.copy(this.origin).sub(Zs);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Lr),a=Vn.dot(this.direction),c=-Vn.dot(Lr),l=Vn.lengthSq(),f=Math.abs(1-o*o);let d,u,m,x;if(f>0)if(d=o*c-a,u=o*a-c,x=s*f,d>=0)if(u>=-x)if(u<=x){const b=1/f;d*=b,u*=b,m=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=s,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*c)+l;else u=-s,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*c)+l;else u<=-x?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-c),s),m=-d*d+u*(u+2*c)+l):u<=x?(d=0,u=Math.min(Math.max(-s,-c),s),m=u*(u+2*c)+l):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-c),s),m=-d*d+u*(u+2*c)+l);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Zs).addScaledVector(Lr,u),m}intersectSphere(e,t){Mn.subVectors(e.center,this.origin);const i=Mn.dot(this.direction),r=Mn.dot(Mn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),f>=0?(s=(e.min.y-u.y)*f,o=(e.max.y-u.y)*f):(s=(e.max.y-u.y)*f,o=(e.min.y-u.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Mn)!==null}intersectTriangle(e,t,i,r,s){Js.subVectors(t,e),Ir.subVectors(i,e),Qs.crossVectors(Js,Ir);let o=this.direction.dot(Qs),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vn.subVectors(this.origin,e);const c=a*this.direction.dot(Ir.crossVectors(Vn,Ir));if(c<0)return null;const l=a*this.direction.dot(Js.cross(Vn));if(l<0||c+l>o)return null;const f=-a*Vn.dot(Qs);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vd extends ps{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=bd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Fl=new wt,ri=new Sg,Ur=new Ma,Ol=new W,Fr=new W,Or=new W,Br=new W,eo=new W,kr=new W,Bl=new W,zr=new W;class gn extends Ht{constructor(e=new Dn,t=new Vd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){kr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const f=a[c],d=s[c];f!==0&&(eo.fromBufferAttribute(d,e),o?kr.addScaledVector(eo,f):kr.addScaledVector(eo.sub(t),f))}t.add(kr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ur.copy(i.boundingSphere),Ur.applyMatrix4(s),ri.copy(e.ray).recast(e.near),!(Ur.containsPoint(ri.origin)===!1&&(ri.intersectSphere(Ur,Ol)===null||ri.origin.distanceToSquared(Ol)>(e.far-e.near)**2))&&(Fl.copy(s).invert(),ri.copy(e.ray).applyMatrix4(Fl),!(i.boundingBox!==null&&ri.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ri)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,u=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,b=u.length;x<b;x++){const p=u[x],h=o[p.materialIndex],y=Math.max(p.start,m.start),T=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let E=y,C=T;E<C;E+=3){const w=a.getX(E),R=a.getX(E+1),g=a.getX(E+2);r=Gr(this,h,e,i,l,f,d,w,R,g),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),b=Math.min(a.count,m.start+m.count);for(let p=x,h=b;p<h;p+=3){const y=a.getX(p),T=a.getX(p+1),E=a.getX(p+2);r=Gr(this,o,e,i,l,f,d,y,T,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,b=u.length;x<b;x++){const p=u[x],h=o[p.materialIndex],y=Math.max(p.start,m.start),T=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let E=y,C=T;E<C;E+=3){const w=E,R=E+1,g=E+2;r=Gr(this,h,e,i,l,f,d,w,R,g),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),b=Math.min(c.count,m.start+m.count);for(let p=x,h=b;p<h;p+=3){const y=p,T=p+1,E=p+2;r=Gr(this,o,e,i,l,f,d,y,T,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function yg(n,e,t,i,r,s,o,a){let c;if(e.side===Bt?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Kn,a),c===null)return null;zr.copy(a),zr.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(zr);return l<t.near||l>t.far?null:{distance:l,point:zr.clone(),object:n}}function Gr(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,Fr),n.getVertexPosition(c,Or),n.getVertexPosition(l,Br);const f=yg(n,e,t,i,Fr,Or,Br,Bl);if(f){const d=new W;Qt.getBarycoord(Bl,Fr,Or,Br,d),r&&(f.uv=Qt.getInterpolatedAttribute(r,a,c,l,d,new it)),s&&(f.uv1=Qt.getInterpolatedAttribute(s,a,c,l,d,new it)),o&&(f.normal=Qt.getInterpolatedAttribute(o,a,c,l,d,new W),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new W,materialIndex:0};Qt.getNormal(Fr,Or,Br,u.normal),f.face=u,f.barycoord=d}return f}class Mg extends Ut{constructor(e=null,t=1,i=1,r,s,o,a,c,l=Ct,f=Ct,d,u){super(null,o,a,c,l,f,r,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const to=new W,Eg=new W,wg=new ze;class oi{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=to.subVectors(i,t).cross(Eg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(to),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||wg.getNormalMatrix(e),r=this.coplanarPoint(to).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const si=new Ma,Tg=new it(.5,.5),Vr=new W;class Hd{constructor(e=new oi,t=new oi,i=new oi,r=new oi,s=new oi,o=new oi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=un,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],f=s[4],d=s[5],u=s[6],m=s[7],x=s[8],b=s[9],p=s[10],h=s[11],y=s[12],T=s[13],E=s[14],C=s[15];if(r[0].setComponents(l-o,m-f,h-x,C-y).normalize(),r[1].setComponents(l+o,m+f,h+x,C+y).normalize(),r[2].setComponents(l+a,m+d,h+b,C+T).normalize(),r[3].setComponents(l-a,m-d,h-b,C-T).normalize(),i)r[4].setComponents(c,u,p,E).normalize(),r[5].setComponents(l-c,m-u,h-p,C-E).normalize();else if(r[4].setComponents(l-c,m-u,h-p,C-E).normalize(),t===un)r[5].setComponents(l+c,m+u,h+p,C+E).normalize();else if(t===as)r[5].setComponents(c,u,p,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(si)}intersectsSprite(e){si.center.set(0,0,0);const t=Tg.distanceTo(e.center);return si.radius=.7071067811865476+t,si.applyMatrix4(e.matrixWorld),this.intersectsSphere(si)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Vr.x=r.normal.x>0?e.max.x:e.min.x,Vr.y=r.normal.y>0?e.max.y:e.min.y,Vr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wd extends Ut{constructor(e=[],t=fi,i,r,s,o,a,c,l,f){super(e,t,i,r,s,o,a,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wi extends Ut{constructor(e,t,i=mn,r,s,o,a=Ct,c=Ct,l,f=Pn,d=1){if(f!==Pn&&f!==di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,r,s,o,a,c,f,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ya(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ag extends Wi{constructor(e,t=mn,i=fi,r,s,o=Ct,a=Ct,c,l=Pn){const f={width:e,height:e,depth:1},d=[f,f,f,f,f,f];super(e,e,t,i,r,s,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class jd extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class dr extends Dn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],f=[],d=[];let u=0,m=0;x("z","y","x",-1,-1,i,t,e,o,s,0),x("z","y","x",1,-1,i,t,-e,o,s,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Rn(l,3)),this.setAttribute("normal",new Rn(f,3)),this.setAttribute("uv",new Rn(d,2));function x(b,p,h,y,T,E,C,w,R,g,A){const F=E/R,P=C/g,z=E/2,Y=C/2,K=w/2,L=R+1,I=g+1;let B=0,te=0;const ie=new W;for(let q=0;q<I;q++){const be=q*P-Y;for(let Ae=0;Ae<L;Ae++){const Se=Ae*F-z;ie[b]=Se*y,ie[p]=be*T,ie[h]=K,l.push(ie.x,ie.y,ie.z),ie[b]=0,ie[p]=0,ie[h]=w>0?1:-1,f.push(ie.x,ie.y,ie.z),d.push(Ae/R),d.push(1-q/g),B+=1}}for(let q=0;q<g;q++)for(let be=0;be<R;be++){const Ae=u+be+L*q,Se=u+be+L*(q+1),Ie=u+(be+1)+L*(q+1),he=u+(be+1)+L*q;c.push(Ae,Se,he),c.push(Se,Ie,he),te+=6}a.addGroup(m,te,A),m+=te,u+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ur extends Dn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,f=c+1,d=e/a,u=t/c,m=[],x=[],b=[],p=[];for(let h=0;h<f;h++){const y=h*u-o;for(let T=0;T<l;T++){const E=T*d-s;x.push(E,-y,0),b.push(0,0,1),p.push(T/a),p.push(1-h/c)}}for(let h=0;h<c;h++)for(let y=0;y<a;y++){const T=y+l*h,E=y+l*(h+1),C=y+1+l*(h+1),w=y+1+l*h;m.push(T,E,w),m.push(E,C,w)}this.setIndex(m),this.setAttribute("position",new Rn(x,3)),this.setAttribute("normal",new Rn(b,3)),this.setAttribute("uv",new Rn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ur(e.width,e.height,e.widthSegments,e.heightSegments)}}function ji(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(kl(r))r.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(kl(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function It(n){const e={};for(let t=0;t<n.length;t++){const i=ji(n[t]);for(const r in i)e[r]=i[r]}return e}function kl(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Rg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Xd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const Cg={clone:ji,merge:It};var Pg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ng=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tn extends ps{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pg,this.fragmentShader=Ng,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ji(e.uniforms),this.uniformsGroups=Rg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Dg extends tn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Lg extends ps{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ig extends ps{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Hr=new W,Wr=new Xi,an=new W;class qd extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Hr,Wr,an),an.x===1&&an.y===1&&an.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hr,Wr,an.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Hr,Wr,an),an.x===1&&an.y===1&&an.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hr,Wr,an.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Hn=new W,zl=new it,Gl=new it;class Jt extends qd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=na*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ds*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return na*2*Math.atan(Math.tan(Ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hn.x,Hn.y).multiplyScalar(-e/Hn.z),Hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hn.x,Hn.y).multiplyScalar(-e/Hn.z)}getViewSize(e,t){return this.getViewBounds(e,zl,Gl),t.subVectors(Gl,zl)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ds*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ea extends qd{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=f*this.view.offsetY,c=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Fi=-90,Oi=1;class Ug extends Ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Jt(Fi,Oi,e,t);r.layers=this.layers,this.add(r);const s=new Jt(Fi,Oi,e,t);s.layers=this.layers,this.add(s);const o=new Jt(Fi,Oi,e,t);o.layers=this.layers,this.add(o);const a=new Jt(Fi,Oi,e,t);a.layers=this.layers,this.add(a);const c=new Jt(Fi,Oi,e,t);c.layers=this.layers,this.add(c);const l=new Jt(Fi,Oi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===un)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===as)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,f]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(d,u,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Fg extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ca=class Ca{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};Ca.prototype.isMatrix2=!0;let Vl=Ca;function Hl(n,e,t,i){const r=Og(i);switch(t){case Ld:return n*e;case Ud:return n*e/r.components*r.byteLength;case xa:return n*e/r.components*r.byteLength;case hi:return n*e*2/r.components*r.byteLength;case va:return n*e*2/r.components*r.byteLength;case Id:return n*e*3/r.components*r.byteLength;case en:return n*e*4/r.components*r.byteLength;case _a:return n*e*4/r.components*r.byteLength;case Kr:case Zr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Jr:case Qr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case To:case Ro:return Math.max(n,16)*Math.max(e,8)/4;case wo:case Ao:return Math.max(n,8)*Math.max(e,8)/2;case Co:case Po:case Do:case Lo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case No:case is:case Io:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Uo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Oo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ko:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case zo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Go:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Vo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ho:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Wo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case jo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Xo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case qo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Yo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case $o:case Ko:case Zo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Jo:case Qo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case rs:case ea:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Og(n){switch(n){case qt:case Cd:return{byteLength:1,components:1};case or:case Pd:case Cn:return{byteLength:2,components:1};case ma:case ga:return{byteLength:2,components:4};case mn:case pa:case dn:return{byteLength:4,components:1};case Nd:case Dd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ha}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ha);function Yd(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Bg(n){const e=new WeakMap;function t(a,c){const l=a.array,f=a.usage,d=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,f),a.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const f=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,f);else{d.sort((m,x)=>m.start-x.start);let u=0;for(let m=1;m<d.length;m++){const x=d[u],b=d[m];b.start<=x.start+x.count+1?x.count=Math.max(x.count,b.start+b.count-x.start):(++u,d[u]=b)}d.length=u+1;for(let m=0,x=d.length;m<x;m++){const b=d[m];n.bufferSubData(l,b.start*f.BYTES_PER_ELEMENT,f,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var kg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zg=`#ifdef USE_ALPHAHASH
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
#endif`,Gg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jg=`#ifdef USE_AOMAP
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
#endif`,Xg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qg=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Yg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$g=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jg=`#ifdef USE_IRIDESCENCE
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
#endif`,Qg=`#ifdef USE_BUMPMAP
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
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,r0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,s0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,o0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,a0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,l0=`#define PI 3.141592653589793
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
} // validated`,c0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,d0=`vec3 transformedNormal = objectNormal;
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
#endif`,u0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,f0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,h0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,p0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,m0="gl_FragColor = linearToOutputTexel( gl_FragColor );",g0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,x0=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,v0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_0=`#ifdef USE_ENVMAP
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
#endif`,b0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,S0=`#ifdef USE_ENVMAP
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
#endif`,y0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,M0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,E0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,w0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,T0=`#ifdef USE_GRADIENTMAP
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
}`,A0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,R0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,C0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,P0=`uniform bool receiveShadow;
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
#endif
#include <lightprobes_pars_fragment>`,N0=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,D0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,L0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,I0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,U0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,F0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,O0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,B0=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,k0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,z0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,G0=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,V0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,H0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,X0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,q0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Y0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$0=`#if defined( USE_POINTS_UV )
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
#endif`,K0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Z0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,J0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Q0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ex=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tx=`#ifdef USE_MORPHTARGETS
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
#endif`,nx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ix=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ax=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lx=`#ifdef USE_NORMALMAP
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
#endif`,cx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ux=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,px=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,mx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_x=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,yx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,Ex=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,wx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tx=`#ifdef USE_SKINNING
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
#endif`,Ax=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rx=`#ifdef USE_SKINNING
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
#endif`,Cx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Px=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lx=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ix=`#ifdef USE_TRANSMISSION
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
#endif`,Ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zx=`uniform sampler2D t2D;
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
}`,Gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jx=`#include <common>
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
}`,Xx=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qx=`#define DISTANCE
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
}`,Yx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,$x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zx=`uniform float scale;
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
}`,Jx=`uniform vec3 diffuse;
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
}`,Qx=`#include <common>
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
}`,ev=`uniform vec3 diffuse;
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
}`,tv=`#define LAMBERT
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
}`,nv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,iv=`#define MATCAP
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
}`,rv=`#define MATCAP
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
}`,sv=`#define NORMAL
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
}`,ov=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,av=`#define PHONG
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
}`,lv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,cv=`#define STANDARD
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
}`,dv=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,uv=`#define TOON
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
}`,fv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,hv=`uniform float size;
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
}`,pv=`uniform vec3 diffuse;
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
}`,mv=`#include <common>
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
}`,gv=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,xv=`uniform float rotation;
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
}`,vv=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:kg,alphahash_pars_fragment:zg,alphamap_fragment:Gg,alphamap_pars_fragment:Vg,alphatest_fragment:Hg,alphatest_pars_fragment:Wg,aomap_fragment:jg,aomap_pars_fragment:Xg,batching_pars_vertex:qg,batching_vertex:Yg,begin_vertex:$g,beginnormal_vertex:Kg,bsdfs:Zg,iridescence_fragment:Jg,bumpmap_pars_fragment:Qg,clipping_planes_fragment:e0,clipping_planes_pars_fragment:t0,clipping_planes_pars_vertex:n0,clipping_planes_vertex:i0,color_fragment:r0,color_pars_fragment:s0,color_pars_vertex:o0,color_vertex:a0,common:l0,cube_uv_reflection_fragment:c0,defaultnormal_vertex:d0,displacementmap_pars_vertex:u0,displacementmap_vertex:f0,emissivemap_fragment:h0,emissivemap_pars_fragment:p0,colorspace_fragment:m0,colorspace_pars_fragment:g0,envmap_fragment:x0,envmap_common_pars_fragment:v0,envmap_pars_fragment:_0,envmap_pars_vertex:b0,envmap_physical_pars_fragment:N0,envmap_vertex:S0,fog_vertex:y0,fog_pars_vertex:M0,fog_fragment:E0,fog_pars_fragment:w0,gradientmap_pars_fragment:T0,lightmap_pars_fragment:A0,lights_lambert_fragment:R0,lights_lambert_pars_fragment:C0,lights_pars_begin:P0,lights_toon_fragment:D0,lights_toon_pars_fragment:L0,lights_phong_fragment:I0,lights_phong_pars_fragment:U0,lights_physical_fragment:F0,lights_physical_pars_fragment:O0,lights_fragment_begin:B0,lights_fragment_maps:k0,lights_fragment_end:z0,lightprobes_pars_fragment:G0,logdepthbuf_fragment:V0,logdepthbuf_pars_fragment:H0,logdepthbuf_pars_vertex:W0,logdepthbuf_vertex:j0,map_fragment:X0,map_pars_fragment:q0,map_particle_fragment:Y0,map_particle_pars_fragment:$0,metalnessmap_fragment:K0,metalnessmap_pars_fragment:Z0,morphinstance_vertex:J0,morphcolor_vertex:Q0,morphnormal_vertex:ex,morphtarget_pars_vertex:tx,morphtarget_vertex:nx,normal_fragment_begin:ix,normal_fragment_maps:rx,normal_pars_fragment:sx,normal_pars_vertex:ox,normal_vertex:ax,normalmap_pars_fragment:lx,clearcoat_normal_fragment_begin:cx,clearcoat_normal_fragment_maps:dx,clearcoat_pars_fragment:ux,iridescence_pars_fragment:fx,opaque_fragment:hx,packing:px,premultiplied_alpha_fragment:mx,project_vertex:gx,dithering_fragment:xx,dithering_pars_fragment:vx,roughnessmap_fragment:_x,roughnessmap_pars_fragment:bx,shadowmap_pars_fragment:Sx,shadowmap_pars_vertex:yx,shadowmap_vertex:Mx,shadowmask_pars_fragment:Ex,skinbase_vertex:wx,skinning_pars_vertex:Tx,skinning_vertex:Ax,skinnormal_vertex:Rx,specularmap_fragment:Cx,specularmap_pars_fragment:Px,tonemapping_fragment:Nx,tonemapping_pars_fragment:Dx,transmission_fragment:Lx,transmission_pars_fragment:Ix,uv_pars_fragment:Ux,uv_pars_vertex:Fx,uv_vertex:Ox,worldpos_vertex:Bx,background_vert:kx,background_frag:zx,backgroundCube_vert:Gx,backgroundCube_frag:Vx,cube_vert:Hx,cube_frag:Wx,depth_vert:jx,depth_frag:Xx,distance_vert:qx,distance_frag:Yx,equirect_vert:$x,equirect_frag:Kx,linedashed_vert:Zx,linedashed_frag:Jx,meshbasic_vert:Qx,meshbasic_frag:ev,meshlambert_vert:tv,meshlambert_frag:nv,meshmatcap_vert:iv,meshmatcap_frag:rv,meshnormal_vert:sv,meshnormal_frag:ov,meshphong_vert:av,meshphong_frag:lv,meshphysical_vert:cv,meshphysical_frag:dv,meshtoon_vert:uv,meshtoon_frag:fv,points_vert:hv,points_frag:pv,shadow_vert:mv,shadow_frag:gv,sprite_vert:xv,sprite_frag:vv},xe={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},cn={basic:{uniforms:It([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:It([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new ot(0)},envMapIntensity:{value:1}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:It([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:It([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:It([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new ot(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:It([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:It([xe.points,xe.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:It([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:It([xe.common,xe.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:It([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:It([xe.sprite,xe.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:It([xe.common,xe.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:It([xe.lights,xe.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};cn.physical={uniforms:It([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const jr={r:0,b:0,g:0},_v=new wt,$d=new ze;$d.set(-1,0,0,0,1,0,0,0,1);function bv(n,e,t,i,r,s){const o=new ot(0);let a=r===!0?0:1,c,l,f=null,d=0,u=null;function m(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){const E=y.backgroundBlurriness>0;T=e.get(T,E)}return T}function x(y){let T=!1;const E=m(y);E===null?p(o,a):E&&E.isColor&&(p(E,1),T=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function b(y,T){const E=m(T);E&&(E.isCubeTexture||E.mapping===hs)?(l===void 0&&(l=new gn(new dr(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:ji(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(C,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=E,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(_v.makeRotationFromEuler(T.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply($d),l.material.toneMapped=$e.getTransfer(E.colorSpace)!==rt,(f!==E||d!==E.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,f=E,d=E.version,u=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new gn(new ur(2,2),new tn({name:"BackgroundMaterial",uniforms:ji(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=$e.getTransfer(E.colorSpace)!==rt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||d!==E.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,f=E,d=E.version,u=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,T){y.getRGB(jr,Xd(n)),t.buffers.color.setClear(jr.r,jr.g,jr.b,T,s)}function h(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,T=1){o.set(y),a=T,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,p(o,a)},render:x,addToRenderList:b,dispose:h}}function Sv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,o=!1;function a(P,z,Y,K,L){let I=!1;const B=d(P,K,Y,z);s!==B&&(s=B,l(s.object)),I=m(P,K,Y,L),I&&x(P,K,Y,L),L!==null&&e.update(L,n.ELEMENT_ARRAY_BUFFER),(I||o)&&(o=!1,E(P,z,Y,K),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function c(){return n.createVertexArray()}function l(P){return n.bindVertexArray(P)}function f(P){return n.deleteVertexArray(P)}function d(P,z,Y,K){const L=K.wireframe===!0;let I=i[z.id];I===void 0&&(I={},i[z.id]=I);const B=P.isInstancedMesh===!0?P.id:0;let te=I[B];te===void 0&&(te={},I[B]=te);let ie=te[Y.id];ie===void 0&&(ie={},te[Y.id]=ie);let q=ie[L];return q===void 0&&(q=u(c()),ie[L]=q),q}function u(P){const z=[],Y=[],K=[];for(let L=0;L<t;L++)z[L]=0,Y[L]=0,K[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:Y,attributeDivisors:K,object:P,attributes:{},index:null}}function m(P,z,Y,K){const L=s.attributes,I=z.attributes;let B=0;const te=Y.getAttributes();for(const ie in te)if(te[ie].location>=0){const be=L[ie];let Ae=I[ie];if(Ae===void 0&&(ie==="instanceMatrix"&&P.instanceMatrix&&(Ae=P.instanceMatrix),ie==="instanceColor"&&P.instanceColor&&(Ae=P.instanceColor)),be===void 0||be.attribute!==Ae||Ae&&be.data!==Ae.data)return!0;B++}return s.attributesNum!==B||s.index!==K}function x(P,z,Y,K){const L={},I=z.attributes;let B=0;const te=Y.getAttributes();for(const ie in te)if(te[ie].location>=0){let be=I[ie];be===void 0&&(ie==="instanceMatrix"&&P.instanceMatrix&&(be=P.instanceMatrix),ie==="instanceColor"&&P.instanceColor&&(be=P.instanceColor));const Ae={};Ae.attribute=be,be&&be.data&&(Ae.data=be.data),L[ie]=Ae,B++}s.attributes=L,s.attributesNum=B,s.index=K}function b(){const P=s.newAttributes;for(let z=0,Y=P.length;z<Y;z++)P[z]=0}function p(P){h(P,0)}function h(P,z){const Y=s.newAttributes,K=s.enabledAttributes,L=s.attributeDivisors;Y[P]=1,K[P]===0&&(n.enableVertexAttribArray(P),K[P]=1),L[P]!==z&&(n.vertexAttribDivisor(P,z),L[P]=z)}function y(){const P=s.newAttributes,z=s.enabledAttributes;for(let Y=0,K=z.length;Y<K;Y++)z[Y]!==P[Y]&&(n.disableVertexAttribArray(Y),z[Y]=0)}function T(P,z,Y,K,L,I,B){B===!0?n.vertexAttribIPointer(P,z,Y,L,I):n.vertexAttribPointer(P,z,Y,K,L,I)}function E(P,z,Y,K){b();const L=K.attributes,I=Y.getAttributes(),B=z.defaultAttributeValues;for(const te in I){const ie=I[te];if(ie.location>=0){let q=L[te];if(q===void 0&&(te==="instanceMatrix"&&P.instanceMatrix&&(q=P.instanceMatrix),te==="instanceColor"&&P.instanceColor&&(q=P.instanceColor)),q!==void 0){const be=q.normalized,Ae=q.itemSize,Se=e.get(q);if(Se===void 0)continue;const Ie=Se.buffer,he=Se.type,X=Se.bytesPerElement,de=he===n.INT||he===n.UNSIGNED_INT||q.gpuType===pa;if(q.isInterleavedBufferAttribute){const ee=q.data,me=ee.stride,Fe=q.offset;if(ee.isInstancedInterleavedBuffer){for(let Ne=0;Ne<ie.locationSize;Ne++)h(ie.location+Ne,ee.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ne=0;Ne<ie.locationSize;Ne++)p(ie.location+Ne);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let Ne=0;Ne<ie.locationSize;Ne++)T(ie.location+Ne,Ae/ie.locationSize,he,be,me*X,(Fe+Ae/ie.locationSize*Ne)*X,de)}else{if(q.isInstancedBufferAttribute){for(let ee=0;ee<ie.locationSize;ee++)h(ie.location+ee,q.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ee=0;ee<ie.locationSize;ee++)p(ie.location+ee);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let ee=0;ee<ie.locationSize;ee++)T(ie.location+ee,Ae/ie.locationSize,he,be,Ae*X,Ae/ie.locationSize*ee*X,de)}}else if(B!==void 0){const be=B[te];if(be!==void 0)switch(be.length){case 2:n.vertexAttrib2fv(ie.location,be);break;case 3:n.vertexAttrib3fv(ie.location,be);break;case 4:n.vertexAttrib4fv(ie.location,be);break;default:n.vertexAttrib1fv(ie.location,be)}}}}y()}function C(){A();for(const P in i){const z=i[P];for(const Y in z){const K=z[Y];for(const L in K){const I=K[L];for(const B in I)f(I[B].object),delete I[B];delete K[L]}}delete i[P]}}function w(P){if(i[P.id]===void 0)return;const z=i[P.id];for(const Y in z){const K=z[Y];for(const L in K){const I=K[L];for(const B in I)f(I[B].object),delete I[B];delete K[L]}}delete i[P.id]}function R(P){for(const z in i){const Y=i[z];for(const K in Y){const L=Y[K];if(L[P.id]===void 0)continue;const I=L[P.id];for(const B in I)f(I[B].object),delete I[B];delete L[P.id]}}}function g(P){for(const z in i){const Y=i[z],K=P.isInstancedMesh===!0?P.id:0,L=Y[K];if(L!==void 0){for(const I in L){const B=L[I];for(const te in B)f(B[te].object),delete B[te];delete L[I]}delete Y[K],Object.keys(Y).length===0&&delete i[z]}}}function A(){F(),o=!0,s!==r&&(s=r,l(s.object))}function F(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:F,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfObject:g,releaseStatesOfProgram:R,initAttributes:b,enableAttribute:p,disableUnusedAttributes:y}}function yv(n,e,t){let i;function r(c){i=c}function s(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,f){f!==0&&(n.drawArraysInstanced(i,c,l,f),t.update(l,i,f))}function a(c,l,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,f);let u=0;for(let m=0;m<f;m++)u+=l[m];t.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Mv(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==en&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const g=R===Cn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==qt&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==dn&&!g)}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const f=c(l);f!==l&&(Be("WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:x,maxTextureSize:b,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:E,maxSamples:C,samples:w}}function Ev(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new oi,a=new ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const m=d.length!==0||u||i!==0||r;return r=u,i=d.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=f(d,u,0)},this.setState=function(d,u,m){const x=d.clippingPlanes,b=d.clipIntersection,p=d.clipShadows,h=n.get(d);if(!r||x===null||x.length===0||s&&!p)s?f(null):l();else{const y=s?0:i,T=y*4;let E=h.clippingState||null;c.value=E,E=f(x,u,T,m);for(let C=0;C!==T;++C)E[C]=t[C];h.clippingState=E,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,u,m,x){const b=d!==null?d.length:0;let p=null;if(b!==0){if(p=c.value,x!==!0||p===null){const h=m+b*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<h)&&(p=new Float32Array(h));for(let T=0,E=m;T!==b;++T,E+=4)o.copy(d[T]).applyMatrix4(y,a),o.normal.toArray(p,E),p[E+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,p}}const Yn=4,Wl=[.125,.215,.35,.446,.526,.582],li=20,wv=256,er=new Ea,jl=new ot;let no=null,io=0,ro=0,so=!1;const Tv=new W;class Xl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=Tv}=s;no=this._renderer.getRenderTarget(),io=this._renderer.getActiveCubeFace(),ro=this._renderer.getActiveMipmapLevel(),so=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$l(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(no,io,ro),this._renderer.xr.enabled=so,e.scissorTest=!1,Bi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fi||e.mapping===Hi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),no=this._renderer.getRenderTarget(),io=this._renderer.getActiveCubeFace(),ro=this._renderer.getActiveMipmapLevel(),so=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:Cn,format:en,colorSpace:ss,depthBuffer:!1},r=ql(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ql(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Av(s)),this._blurMaterial=Cv(s,e,t),this._ggxMaterial=Rv(s,e,t)}return r}_compileMaterial(e){const t=new gn(new Dn,e);this._renderer.compile(t,er)}_sceneToCubeUV(e,t,i,r,s){const c=new Jt(90,1,t,i),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,m=d.toneMapping;d.getClearColor(jl),d.toneMapping=fn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new gn(new dr,new Vd({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,p=b.material;let h=!1;const y=e.background;y?y.isColor&&(p.color.copy(y),e.background=null,h=!0):(p.color.copy(jl),h=!0);for(let T=0;T<6;T++){const E=T%3;E===0?(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+f[T],s.y,s.z)):E===1?(c.up.set(0,0,l[T]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+f[T],s.z)):(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+f[T]));const C=this._cubeSize;Bi(r,E*C,T>2?C:0,C,C),d.setRenderTarget(r),h&&d.render(b,c),d.render(e,c)}d.toneMapping=m,d.autoClear=u,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===fi||e.mapping===Hi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$l()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yl());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Bi(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,er)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const c=o.uniforms,l=i/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-f*f),u=0+l*1.25,m=d*u,{_lodMax:x}=this,b=this._sizeLods[i],p=3*b*(i>x-Yn?i-x+Yn:0),h=4*(this._cubeSize-b);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=x-t,Bi(s,p,h,3*b,2*b),r.setRenderTarget(s),r.render(a,er),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=x-i,Bi(e,p,h,3*b,2*b),r.setRenderTarget(e),r.render(a,er)}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&nt("blur direction must be either latitudinal or longitudinal!");const f=3,d=this._lodMeshes[r];d.material=l;const u=l.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*li-1),b=s/x,p=isFinite(s)?1+Math.floor(f*b):li;p>li&&Be(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${li}`);const h=[];let y=0;for(let R=0;R<li;++R){const g=R/b,A=Math.exp(-g*g/2);h.push(A),R===0?y+=A:R<p&&(y+=2*A)}for(let R=0;R<h.length;R++)h[R]=h[R]/y;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=h,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:T}=this;u.dTheta.value=x,u.mipInt.value=T-i;const E=this._sizeLods[r],C=3*E*(r>T-Yn?r-T+Yn:0),w=4*(this._cubeSize-E);Bi(t,C,w,3*E,2*E),c.setRenderTarget(t),c.render(d,er)}}function Av(n){const e=[],t=[],i=[];let r=n;const s=n-Yn+1+Wl.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>n-Yn?c=Wl[o-n+Yn-1]:o===0&&(c=0),t.push(c);const l=1/(a-2),f=-l,d=1+l,u=[f,f,d,f,d,d,f,f,d,d,f,d],m=6,x=6,b=3,p=2,h=1,y=new Float32Array(b*x*m),T=new Float32Array(p*x*m),E=new Float32Array(h*x*m);for(let w=0;w<m;w++){const R=w%3*2/3-1,g=w>2?0:-1,A=[R,g,0,R+2/3,g,0,R+2/3,g+1,0,R,g,0,R+2/3,g+1,0,R,g+1,0];y.set(A,b*x*w),T.set(u,p*x*w);const F=[w,w,w,w,w,w];E.set(F,h*x*w)}const C=new Dn;C.setAttribute("position",new pn(y,b)),C.setAttribute("uv",new pn(T,p)),C.setAttribute("faceIndex",new pn(E,h)),i.push(new gn(C,null)),r>Yn&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function ql(n,e,t){const i=new hn(n,e,t);return i.texture.mapping=hs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Bi(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Rv(n,e,t){return new tn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:wv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ms(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Cv(n,e,t){const i=new Float32Array(li),r=new W(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ms(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Yl(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ms(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function $l(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ms(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function ms(){return`

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
	`}class Kd extends hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Wd(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new dr(5,5,5),s=new tn({name:"CubemapFromEquirect",uniforms:ji(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bt,blending:Tn});s.uniforms.tEquirect.value=t;const o=new gn(r,s),a=t.minFilter;return t.minFilter===ci&&(t.minFilter=Lt),new Ug(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}function Pv(n){let e=new WeakMap,t=new WeakMap,i=null;function r(u,m=!1){return u==null?null:m?o(u):s(u)}function s(u){if(u&&u.isTexture){const m=u.mapping;if(m===Cs||m===Ps)if(e.has(u)){const x=e.get(u).texture;return a(x,u.mapping)}else{const x=u.image;if(x&&x.height>0){const b=new Kd(x.height);return b.fromEquirectangularTexture(n,u),e.set(u,b),u.addEventListener("dispose",l),a(b.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const m=u.mapping,x=m===Cs||m===Ps,b=m===fi||m===Hi;if(x||b){let p=t.get(u);const h=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return i===null&&(i=new Xl(n)),p=x?i.fromEquirectangular(u,p):i.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{const y=u.image;return x&&y&&y.height>0||b&&y&&c(y)?(i===null&&(i=new Xl(n)),p=x?i.fromEquirectangular(u):i.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",f),p.texture):null}}}return u}function a(u,m){return m===Cs?u.mapping=fi:m===Ps&&(u.mapping=Hi),u}function c(u){let m=0;const x=6;for(let b=0;b<x;b++)u[b]!==void 0&&m++;return m===x}function l(u){const m=u.target;m.removeEventListener("dispose",l);const x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function f(u){const m=u.target;m.removeEventListener("dispose",f);const x=t.get(m);x!==void 0&&(t.delete(m),x.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function Nv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ta("WebGLRenderer: "+i+" extension not supported."),r}}}function Dv(n,e,t,i){const r={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const x in u.attributes)e.remove(u.attributes[x]);u.removeEventListener("dispose",o),delete r[u.id];const m=s.get(u);m&&(e.remove(m),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,t.memory.geometries++),u}function c(d){const u=d.attributes;for(const m in u)e.update(u[m],n.ARRAY_BUFFER)}function l(d){const u=[],m=d.index,x=d.attributes.position;let b=0;if(x===void 0)return;if(m!==null){const y=m.array;b=m.version;for(let T=0,E=y.length;T<E;T+=3){const C=y[T+0],w=y[T+1],R=y[T+2];u.push(C,w,w,R,R,C)}}else{const y=x.array;b=x.version;for(let T=0,E=y.length/3-1;T<E;T+=3){const C=T+0,w=T+1,R=T+2;u.push(C,w,w,R,R,C)}}const p=new(x.count>=65535?Gd:zd)(u,1);p.version=b;const h=s.get(d);h&&e.remove(h),s.set(d,p)}function f(d){const u=s.get(d);if(u){const m=d.index;m!==null&&u.version<m.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:f}}function Lv(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,u){n.drawElements(i,u,s,d*o),t.update(u,i,1)}function l(d,u,m){m!==0&&(n.drawElementsInstanced(i,u,s,d*o,m),t.update(u,i,m))}function f(d,u,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,d,0,m);let b=0;for(let p=0;p<m;p++)b+=u[p];t.update(b,i,1)}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=f}function Iv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:nt("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Uv(n,e,t){const i=new WeakMap,r=new St;function s(o,a,c){const l=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=f!==void 0?f.length:0;let u=i.get(a);if(u===void 0||u.count!==d){let A=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();const m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let T=0;m===!0&&(T=1),x===!0&&(T=2),b===!0&&(T=3);let E=a.attributes.position.count*T,C=1;E>e.maxTextureSize&&(C=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const w=new Float32Array(E*C*4*d),R=new Od(w,E,C,d);R.type=dn,R.needsUpdate=!0;const g=T*4;for(let F=0;F<d;F++){const P=p[F],z=h[F],Y=y[F],K=E*C*4*F;for(let L=0;L<P.count;L++){const I=L*g;m===!0&&(r.fromBufferAttribute(P,L),w[K+I+0]=r.x,w[K+I+1]=r.y,w[K+I+2]=r.z,w[K+I+3]=0),x===!0&&(r.fromBufferAttribute(z,L),w[K+I+4]=r.x,w[K+I+5]=r.y,w[K+I+6]=r.z,w[K+I+7]=0),b===!0&&(r.fromBufferAttribute(Y,L),w[K+I+8]=r.x,w[K+I+9]=r.y,w[K+I+10]=r.z,w[K+I+11]=Y.itemSize===4?r.w:1)}}u={count:d,texture:R,size:new it(E,C)},i.set(a,u),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let m=0;for(let b=0;b<l.length;b++)m+=l[b];const x=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:s}}function Fv(n,e,t,i,r){let s=new WeakMap;function o(l){const f=r.render.frame,d=l.geometry,u=e.get(l,d);if(s.get(u)!==f&&(e.update(u),s.set(u,f)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==f&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,f))),l.isSkinnedMesh){const m=l.skeleton;s.get(m)!==f&&(m.update(),s.set(m,f))}return u}function a(){s=new WeakMap}function c(l){const f=l.target;f.removeEventListener("dispose",c),i.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:o,dispose:a}}const Ov={[Sd]:"LINEAR_TONE_MAPPING",[yd]:"REINHARD_TONE_MAPPING",[Md]:"CINEON_TONE_MAPPING",[Ed]:"ACES_FILMIC_TONE_MAPPING",[Td]:"AGX_TONE_MAPPING",[Ad]:"NEUTRAL_TONE_MAPPING",[wd]:"CUSTOM_TONE_MAPPING"};function Bv(n,e,t,i,r){const s=new hn(e,t,{type:n,depthBuffer:i,stencilBuffer:r,depthTexture:i?new Wi(e,t):void 0}),o=new hn(e,t,{type:Cn,depthBuffer:!1,stencilBuffer:!1}),a=new Dn;a.setAttribute("position",new Rn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Rn([0,2,0,0,2,0],2));const c=new Dg({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new gn(a,c),f=new Ea(-1,1,1,-1,0,1);let d=null,u=null,m=!1,x,b=null,p=[],h=!1;this.setSize=function(y,T){s.setSize(y,T),o.setSize(y,T);for(let E=0;E<p.length;E++){const C=p[E];C.setSize&&C.setSize(y,T)}},this.setEffects=function(y){p=y,h=p.length>0&&p[0].isRenderPass===!0;const T=s.width,E=s.height;for(let C=0;C<p.length;C++){const w=p[C];w.setSize&&w.setSize(T,E)}},this.begin=function(y,T){if(m||y.toneMapping===fn&&p.length===0)return!1;if(b=T,T!==null){const E=T.width,C=T.height;(s.width!==E||s.height!==C)&&this.setSize(E,C)}return h===!1&&y.setRenderTarget(s),x=y.toneMapping,y.toneMapping=fn,!0},this.hasRenderPass=function(){return h},this.end=function(y,T){y.toneMapping=x,m=!0;let E=s,C=o;for(let w=0;w<p.length;w++){const R=p[w];if(R.enabled!==!1&&(R.render(y,C,E,T),R.needsSwap!==!1)){const g=E;E=C,C=g}}if(d!==y.outputColorSpace||u!==y.toneMapping){d=y.outputColorSpace,u=y.toneMapping,c.defines={},$e.getTransfer(d)===rt&&(c.defines.SRGB_TRANSFER="");const w=Ov[u];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(b),y.render(l,f),b=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),a.dispose(),c.dispose()}}const Zd=new Ut,ia=new Wi(1,1),Jd=new Od,Qd=new lg,eu=new Wd,Kl=[],Zl=[],Jl=new Float32Array(16),Ql=new Float32Array(9),ec=new Float32Array(4);function qi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Kl[r];if(s===void 0&&(s=new Float32Array(r),Kl[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Tt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function At(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function gs(n,e){let t=Zl[e];t===void 0&&(t=new Int32Array(e),Zl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function kv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function zv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2fv(this.addr,e),At(t,e)}}function Gv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;n.uniform3fv(this.addr,e),At(t,e)}}function Vv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4fv(this.addr,e),At(t,e)}}function Hv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;ec.set(i),n.uniformMatrix2fv(this.addr,!1,ec),At(t,i)}}function Wv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;Ql.set(i),n.uniformMatrix3fv(this.addr,!1,Ql),At(t,i)}}function jv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;Jl.set(i),n.uniformMatrix4fv(this.addr,!1,Jl),At(t,i)}}function Xv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function qv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2iv(this.addr,e),At(t,e)}}function Yv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3iv(this.addr,e),At(t,e)}}function $v(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4iv(this.addr,e),At(t,e)}}function Kv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Zv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2uiv(this.addr,e),At(t,e)}}function Jv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3uiv(this.addr,e),At(t,e)}}function Qv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4uiv(this.addr,e),At(t,e)}}function e_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(ia.compareFunction=t.isReversedDepthBuffer()?Sa:ba,s=ia):s=Zd,t.setTexture2D(e||s,r)}function t_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Qd,r)}function n_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||eu,r)}function i_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Jd,r)}function r_(n){switch(n){case 5126:return kv;case 35664:return zv;case 35665:return Gv;case 35666:return Vv;case 35674:return Hv;case 35675:return Wv;case 35676:return jv;case 5124:case 35670:return Xv;case 35667:case 35671:return qv;case 35668:case 35672:return Yv;case 35669:case 35673:return $v;case 5125:return Kv;case 36294:return Zv;case 36295:return Jv;case 36296:return Qv;case 35678:case 36198:case 36298:case 36306:case 35682:return e_;case 35679:case 36299:case 36307:return t_;case 35680:case 36300:case 36308:case 36293:return n_;case 36289:case 36303:case 36311:case 36292:return i_}}function s_(n,e){n.uniform1fv(this.addr,e)}function o_(n,e){const t=qi(e,this.size,2);n.uniform2fv(this.addr,t)}function a_(n,e){const t=qi(e,this.size,3);n.uniform3fv(this.addr,t)}function l_(n,e){const t=qi(e,this.size,4);n.uniform4fv(this.addr,t)}function c_(n,e){const t=qi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function d_(n,e){const t=qi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function u_(n,e){const t=qi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function f_(n,e){n.uniform1iv(this.addr,e)}function h_(n,e){n.uniform2iv(this.addr,e)}function p_(n,e){n.uniform3iv(this.addr,e)}function m_(n,e){n.uniform4iv(this.addr,e)}function g_(n,e){n.uniform1uiv(this.addr,e)}function x_(n,e){n.uniform2uiv(this.addr,e)}function v_(n,e){n.uniform3uiv(this.addr,e)}function __(n,e){n.uniform4uiv(this.addr,e)}function b_(n,e,t){const i=this.cache,r=e.length,s=gs(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),At(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=ia:o=Zd;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function S_(n,e,t){const i=this.cache,r=e.length,s=gs(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Qd,s[o])}function y_(n,e,t){const i=this.cache,r=e.length,s=gs(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||eu,s[o])}function M_(n,e,t){const i=this.cache,r=e.length,s=gs(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Jd,s[o])}function E_(n){switch(n){case 5126:return s_;case 35664:return o_;case 35665:return a_;case 35666:return l_;case 35674:return c_;case 35675:return d_;case 35676:return u_;case 5124:case 35670:return f_;case 35667:case 35671:return h_;case 35668:case 35672:return p_;case 35669:case 35673:return m_;case 5125:return g_;case 36294:return x_;case 36295:return v_;case 36296:return __;case 35678:case 36198:case 36298:case 36306:case 35682:return b_;case 35679:case 36299:case 36307:return S_;case 35680:case 36300:case 36308:case 36293:return y_;case 36289:case 36303:case 36311:case 36292:return M_}}class w_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=r_(t.type)}}class T_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=E_(t.type)}}class A_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const oo=/(\w+)(\])?(\[|\.)?/g;function tc(n,e){n.seq.push(e),n.map[e.id]=e}function R_(n,e,t){const i=n.name,r=i.length;for(oo.lastIndex=0;;){const s=oo.exec(i),o=oo.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){tc(t,l===void 0?new w_(a,n,e):new T_(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new A_(a),tc(t,d)),t=d}}}class es{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);R_(a,c,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function nc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const C_=37297;let P_=0;function N_(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const ic=new ze;function D_(n){$e._getMatrix(ic,$e.workingColorSpace,n);const e=`mat3( ${ic.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(n)){case os:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function rc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+N_(n.getShaderSource(e),a)}else return s}function L_(n,e){const t=D_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const I_={[Sd]:"Linear",[yd]:"Reinhard",[Md]:"Cineon",[Ed]:"ACESFilmic",[Td]:"AgX",[Ad]:"Neutral",[wd]:"Custom"};function U_(n,e){const t=I_[e];return t===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Xr=new W;function F_(){$e.getLuminanceCoefficients(Xr);const n=Xr.x.toFixed(4),e=Xr.y.toFixed(4),t=Xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function O_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ir).join(`
`)}function B_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function k_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ir(n){return n!==""}function sc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function oc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const z_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ra(n){return n.replace(z_,V_)}const G_=new Map;function V_(n,e){let t=We[e];if(t===void 0){const i=G_.get(e);if(i!==void 0)t=We[i],Be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ra(t)}const H_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ac(n){return n.replace(H_,W_)}function W_(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function lc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const j_={[$r]:"SHADOWMAP_TYPE_PCF",[nr]:"SHADOWMAP_TYPE_VSM"};function X_(n){return j_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const q_={[fi]:"ENVMAP_TYPE_CUBE",[Hi]:"ENVMAP_TYPE_CUBE",[hs]:"ENVMAP_TYPE_CUBE_UV"};function Y_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":q_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const $_={[Hi]:"ENVMAP_MODE_REFRACTION"};function K_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":$_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Z_={[bd]:"ENVMAP_BLENDING_MULTIPLY",[Gm]:"ENVMAP_BLENDING_MIX",[Vm]:"ENVMAP_BLENDING_ADD"};function J_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Z_[n.combine]||"ENVMAP_BLENDING_NONE"}function Q_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function eb(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=X_(t),l=Y_(t),f=K_(t),d=J_(t),u=Q_(t),m=O_(t),x=B_(s),b=r.createProgram();let p,h,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ir).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ir).join(`
`),h.length>0&&(h+=`
`)):(p=[lc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ir).join(`
`),h=[lc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fn?"#define TONE_MAPPING":"",t.toneMapping!==fn?We.tonemapping_pars_fragment:"",t.toneMapping!==fn?U_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,L_("linearToOutputTexel",t.outputColorSpace),F_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ir).join(`
`)),o=ra(o),o=sc(o,t),o=oc(o,t),a=ra(a),a=sc(a,t),a=oc(a,t),o=ac(o),a=ac(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const T=y+p+o,E=y+h+a,C=nc(r,r.VERTEX_SHADER,T),w=nc(r,r.FRAGMENT_SHADER,E);r.attachShader(b,C),r.attachShader(b,w),t.index0AttributeName!==void 0?r.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function R(P){if(n.debug.checkShaderErrors){const z=r.getProgramInfoLog(b)||"",Y=r.getShaderInfoLog(C)||"",K=r.getShaderInfoLog(w)||"",L=z.trim(),I=Y.trim(),B=K.trim();let te=!0,ie=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(te=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,b,C,w);else{const q=rc(r,C,"vertex"),be=rc(r,w,"fragment");nt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+L+`
`+q+`
`+be)}else L!==""?Be("WebGLProgram: Program Info Log:",L):(I===""||B==="")&&(ie=!1);ie&&(P.diagnostics={runnable:te,programLog:L,vertexShader:{log:I,prefix:p},fragmentShader:{log:B,prefix:h}})}r.deleteShader(C),r.deleteShader(w),g=new es(r,b),A=k_(r,b)}let g;this.getUniforms=function(){return g===void 0&&R(this),g};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=r.getProgramParameter(b,C_)),F},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=P_++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=C,this.fragmentShader=w,this}let tb=0;class nb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ib(e),t.set(e,i)),i}}class ib{constructor(e){this.id=tb++,this.code=e,this.usedTimes=0}}function rb(n){return n===hi||n===is||n===rs}function sb(n,e,t,i,r,s){const o=new Bd,a=new nb,c=new Set,l=[],f=new Map,d=i.logarithmicDepthBuffer;let u=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(g){return c.add(g),g===0?"uv":`uv${g}`}function b(g,A,F,P,z,Y){const K=P.fog,L=z.geometry,I=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?P.environment:null,B=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,te=e.get(g.envMap||I,B),ie=te&&te.mapping===hs?te.image.height:null,q=m[g.type];g.precision!==null&&(u=i.getMaxPrecision(g.precision),u!==g.precision&&Be("WebGLProgram.getParameters:",g.precision,"not supported, using",u,"instead."));const be=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Ae=be!==void 0?be.length:0;let Se=0;L.morphAttributes.position!==void 0&&(Se=1),L.morphAttributes.normal!==void 0&&(Se=2),L.morphAttributes.color!==void 0&&(Se=3);let Ie,he,X,de;if(q){const Ce=cn[q];Ie=Ce.vertexShader,he=Ce.fragmentShader}else Ie=g.vertexShader,he=g.fragmentShader,a.update(g),X=a.getVertexShaderID(g),de=a.getFragmentShaderID(g);const ee=n.getRenderTarget(),me=n.state.buffers.depth.getReversed(),Fe=z.isInstancedMesh===!0,Ne=z.isBatchedMesh===!0,Ye=!!g.map,Ge=!!g.matcap,qe=!!te,at=!!g.aoMap,He=!!g.lightMap,ft=!!g.bumpMap,dt=!!g.normalMap,pt=!!g.displacementMap,D=!!g.emissiveMap,xt=!!g.metalnessMap,Oe=!!g.roughnessMap,Qe=g.anisotropy>0,pe=g.clearcoat>0,ht=g.dispersion>0,M=g.iridescence>0,v=g.sheen>0,O=g.transmission>0,Z=Qe&&!!g.anisotropyMap,ne=pe&&!!g.clearcoatMap,oe=pe&&!!g.clearcoatNormalMap,ae=pe&&!!g.clearcoatRoughnessMap,$=M&&!!g.iridescenceMap,J=M&&!!g.iridescenceThicknessMap,ge=v&&!!g.sheenColorMap,ye=v&&!!g.sheenRoughnessMap,ue=!!g.specularMap,se=!!g.specularColorMap,Ue=!!g.specularIntensityMap,ke=O&&!!g.transmissionMap,Ze=O&&!!g.thicknessMap,N=!!g.gradientMap,le=!!g.alphaMap,G=g.alphaTest>0,ce=!!g.alphaHash,re=!!g.extensions;let Q=fn;g.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Q=n.toneMapping);const Re={shaderID:q,shaderType:g.type,shaderName:g.name,vertexShader:Ie,fragmentShader:he,defines:g.defines,customVertexShaderID:X,customFragmentShaderID:de,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:u,batching:Ne,batchingColor:Ne&&z._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&z.instanceColor!==null,instancingMorph:Fe&&z.morphTexture!==null,outputColorSpace:ee===null?n.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:$e.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Ye,matcap:Ge,envMap:qe,envMapMode:qe&&te.mapping,envMapCubeUVHeight:ie,aoMap:at,lightMap:He,bumpMap:ft,normalMap:dt,displacementMap:pt,emissiveMap:D,normalMapObjectSpace:dt&&g.normalMapType===jm,normalMapTangentSpace:dt&&g.normalMapType===_l,packedNormalMap:dt&&g.normalMapType===_l&&rb(g.normalMap.format),metalnessMap:xt,roughnessMap:Oe,anisotropy:Qe,anisotropyMap:Z,clearcoat:pe,clearcoatMap:ne,clearcoatNormalMap:oe,clearcoatRoughnessMap:ae,dispersion:ht,iridescence:M,iridescenceMap:$,iridescenceThicknessMap:J,sheen:v,sheenColorMap:ge,sheenRoughnessMap:ye,specularMap:ue,specularColorMap:se,specularIntensityMap:Ue,transmission:O,transmissionMap:ke,thicknessMap:Ze,gradientMap:N,opaque:g.transparent===!1&&g.blending===zi&&g.alphaToCoverage===!1,alphaMap:le,alphaTest:G,alphaHash:ce,combine:g.combine,mapUv:Ye&&x(g.map.channel),aoMapUv:at&&x(g.aoMap.channel),lightMapUv:He&&x(g.lightMap.channel),bumpMapUv:ft&&x(g.bumpMap.channel),normalMapUv:dt&&x(g.normalMap.channel),displacementMapUv:pt&&x(g.displacementMap.channel),emissiveMapUv:D&&x(g.emissiveMap.channel),metalnessMapUv:xt&&x(g.metalnessMap.channel),roughnessMapUv:Oe&&x(g.roughnessMap.channel),anisotropyMapUv:Z&&x(g.anisotropyMap.channel),clearcoatMapUv:ne&&x(g.clearcoatMap.channel),clearcoatNormalMapUv:oe&&x(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&x(g.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&x(g.iridescenceMap.channel),iridescenceThicknessMapUv:J&&x(g.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&x(g.sheenColorMap.channel),sheenRoughnessMapUv:ye&&x(g.sheenRoughnessMap.channel),specularMapUv:ue&&x(g.specularMap.channel),specularColorMapUv:se&&x(g.specularColorMap.channel),specularIntensityMapUv:Ue&&x(g.specularIntensityMap.channel),transmissionMapUv:ke&&x(g.transmissionMap.channel),thicknessMapUv:Ze&&x(g.thicknessMap.channel),alphaMapUv:le&&x(g.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(dt||Qe),vertexNormals:!!L.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!L.attributes.uv&&(Ye||le),fog:!!K,useFog:g.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||L.attributes.normal===void 0&&dt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:me,skinning:z.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:Se,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:Q,decodeVideoTexture:Ye&&g.map.isVideoTexture===!0&&$e.getTransfer(g.map.colorSpace)===rt,decodeVideoTextureEmissive:D&&g.emissiveMap.isVideoTexture===!0&&$e.getTransfer(g.emissiveMap.colorSpace)===rt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===En,flipSided:g.side===Bt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:re&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&g.extensions.multiDraw===!0||Ne)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function p(g){const A=[];if(g.shaderID?A.push(g.shaderID):(A.push(g.customVertexShaderID),A.push(g.customFragmentShaderID)),g.defines!==void 0)for(const F in g.defines)A.push(F),A.push(g.defines[F]);return g.isRawShaderMaterial===!1&&(h(A,g),y(A,g),A.push(n.outputColorSpace)),A.push(g.customProgramCacheKey),A.join()}function h(g,A){g.push(A.precision),g.push(A.outputColorSpace),g.push(A.envMapMode),g.push(A.envMapCubeUVHeight),g.push(A.mapUv),g.push(A.alphaMapUv),g.push(A.lightMapUv),g.push(A.aoMapUv),g.push(A.bumpMapUv),g.push(A.normalMapUv),g.push(A.displacementMapUv),g.push(A.emissiveMapUv),g.push(A.metalnessMapUv),g.push(A.roughnessMapUv),g.push(A.anisotropyMapUv),g.push(A.clearcoatMapUv),g.push(A.clearcoatNormalMapUv),g.push(A.clearcoatRoughnessMapUv),g.push(A.iridescenceMapUv),g.push(A.iridescenceThicknessMapUv),g.push(A.sheenColorMapUv),g.push(A.sheenRoughnessMapUv),g.push(A.specularMapUv),g.push(A.specularColorMapUv),g.push(A.specularIntensityMapUv),g.push(A.transmissionMapUv),g.push(A.thicknessMapUv),g.push(A.combine),g.push(A.fogExp2),g.push(A.sizeAttenuation),g.push(A.morphTargetsCount),g.push(A.morphAttributeCount),g.push(A.numDirLights),g.push(A.numPointLights),g.push(A.numSpotLights),g.push(A.numSpotLightMaps),g.push(A.numHemiLights),g.push(A.numRectAreaLights),g.push(A.numDirLightShadows),g.push(A.numPointLightShadows),g.push(A.numSpotLightShadows),g.push(A.numSpotLightShadowsWithMaps),g.push(A.numLightProbes),g.push(A.shadowMapType),g.push(A.toneMapping),g.push(A.numClippingPlanes),g.push(A.numClipIntersection),g.push(A.depthPacking)}function y(g,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),g.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),g.push(o.mask)}function T(g){const A=m[g.type];let F;if(A){const P=cn[A];F=Cg.clone(P.uniforms)}else F=g.uniforms;return F}function E(g,A){let F=f.get(A);return F!==void 0?++F.usedTimes:(F=new eb(n,A,g,r),l.push(F),f.set(A,F)),F}function C(g){if(--g.usedTimes===0){const A=l.indexOf(g);l[A]=l[l.length-1],l.pop(),f.delete(g.cacheKey),g.destroy()}}function w(g){a.remove(g)}function R(){a.dispose()}return{getParameters:b,getProgramCacheKey:p,getUniforms:T,acquireProgram:E,releaseProgram:C,releaseShaderCache:w,programs:l,dispose:R}}function ob(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function ab(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function cc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function dc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function a(u,m,x,b,p,h){let y=n[e];return y===void 0?(y={id:u.id,object:u,geometry:m,material:x,materialVariant:o(u),groupOrder:b,renderOrder:u.renderOrder,z:p,group:h},n[e]=y):(y.id=u.id,y.object=u,y.geometry=m,y.material=x,y.materialVariant=o(u),y.groupOrder=b,y.renderOrder=u.renderOrder,y.z=p,y.group=h),e++,y}function c(u,m,x,b,p,h){const y=a(u,m,x,b,p,h);x.transmission>0?i.push(y):x.transparent===!0?r.push(y):t.push(y)}function l(u,m,x,b,p,h){const y=a(u,m,x,b,p,h);x.transmission>0?i.unshift(y):x.transparent===!0?r.unshift(y):t.unshift(y)}function f(u,m){t.length>1&&t.sort(u||ab),i.length>1&&i.sort(m||cc),r.length>1&&r.sort(m||cc)}function d(){for(let u=e,m=n.length;u<m;u++){const x=n[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:d,sort:f}}function lb(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new dc,n.set(i,[o])):r>=s.length?(o=new dc,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function cb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new ot};break;case"SpotLight":t={position:new W,direction:new W,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function db(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ub=0;function fb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function hb(n){const e=new cb,t=db(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new W);const r=new W,s=new wt,o=new wt;function a(l){let f=0,d=0,u=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let m=0,x=0,b=0,p=0,h=0,y=0,T=0,E=0,C=0,w=0,R=0;l.sort(fb);for(let A=0,F=l.length;A<F;A++){const P=l[A],z=P.color,Y=P.intensity,K=P.distance;let L=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===hi?L=P.shadow.map.texture:L=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)f+=z.r*Y,d+=z.g*Y,u+=z.b*Y;else if(P.isLightProbe){for(let I=0;I<9;I++)i.probe[I].addScaledVector(P.sh.coefficients[I],Y);R++}else if(P.isDirectionalLight){const I=e.get(P);if(I.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const B=P.shadow,te=t.get(P);te.shadowIntensity=B.intensity,te.shadowBias=B.bias,te.shadowNormalBias=B.normalBias,te.shadowRadius=B.radius,te.shadowMapSize=B.mapSize,i.directionalShadow[m]=te,i.directionalShadowMap[m]=L,i.directionalShadowMatrix[m]=P.shadow.matrix,y++}i.directional[m]=I,m++}else if(P.isSpotLight){const I=e.get(P);I.position.setFromMatrixPosition(P.matrixWorld),I.color.copy(z).multiplyScalar(Y),I.distance=K,I.coneCos=Math.cos(P.angle),I.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),I.decay=P.decay,i.spot[b]=I;const B=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,B.updateMatrices(P),P.castShadow&&w++),i.spotLightMatrix[b]=B.matrix,P.castShadow){const te=t.get(P);te.shadowIntensity=B.intensity,te.shadowBias=B.bias,te.shadowNormalBias=B.normalBias,te.shadowRadius=B.radius,te.shadowMapSize=B.mapSize,i.spotShadow[b]=te,i.spotShadowMap[b]=L,E++}b++}else if(P.isRectAreaLight){const I=e.get(P);I.color.copy(z).multiplyScalar(Y),I.halfWidth.set(P.width*.5,0,0),I.halfHeight.set(0,P.height*.5,0),i.rectArea[p]=I,p++}else if(P.isPointLight){const I=e.get(P);if(I.color.copy(P.color).multiplyScalar(P.intensity),I.distance=P.distance,I.decay=P.decay,P.castShadow){const B=P.shadow,te=t.get(P);te.shadowIntensity=B.intensity,te.shadowBias=B.bias,te.shadowNormalBias=B.normalBias,te.shadowRadius=B.radius,te.shadowMapSize=B.mapSize,te.shadowCameraNear=B.camera.near,te.shadowCameraFar=B.camera.far,i.pointShadow[x]=te,i.pointShadowMap[x]=L,i.pointShadowMatrix[x]=P.shadow.matrix,T++}i.point[x]=I,x++}else if(P.isHemisphereLight){const I=e.get(P);I.skyColor.copy(P.color).multiplyScalar(Y),I.groundColor.copy(P.groundColor).multiplyScalar(Y),i.hemi[h]=I,h++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=u;const g=i.hash;(g.directionalLength!==m||g.pointLength!==x||g.spotLength!==b||g.rectAreaLength!==p||g.hemiLength!==h||g.numDirectionalShadows!==y||g.numPointShadows!==T||g.numSpotShadows!==E||g.numSpotMaps!==C||g.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=b,i.rectArea.length=p,i.point.length=x,i.hemi.length=h,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=E+C-w,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,g.directionalLength=m,g.pointLength=x,g.spotLength=b,g.rectAreaLength=p,g.hemiLength=h,g.numDirectionalShadows=y,g.numPointShadows=T,g.numSpotShadows=E,g.numSpotMaps=C,g.numLightProbes=R,i.version=ub++)}function c(l,f){let d=0,u=0,m=0,x=0,b=0;const p=f.matrixWorldInverse;for(let h=0,y=l.length;h<y;h++){const T=l[h];if(T.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),d++}else if(T.isSpotLight){const E=i.spot[m];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),m++}else if(T.isRectAreaLight){const E=i.rectArea[x];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(p),o.identity(),s.copy(T.matrixWorld),s.premultiply(p),o.extractRotation(s),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),x++}else if(T.isPointLight){const E=i.point[u];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(p),u++}else if(T.isHemisphereLight){const E=i.hemi[b];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(p),b++}}}return{setup:a,setupView:c,state:i}}function uc(n){const e=new hb(n),t=[],i=[],r=[];function s(u){d.camera=u,t.length=0,i.length=0,r.length=0}function o(u){t.push(u)}function a(u){i.push(u)}function c(u){r.push(u)}function l(){e.setup(t)}function f(u){e.setupView(t,u)}const d={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:l,setupLightsView:f,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function pb(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new uc(n),e.set(r,[a])):s>=o.length?(a=new uc(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const mb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,xb=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],vb=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],fc=new wt,tr=new W,ao=new W;function _b(n,e,t){let i=new Hd;const r=new it,s=new it,o=new St,a=new Lg,c=new Ig,l={},f=t.maxTextureSize,d={[Kn]:Bt,[Bt]:Kn,[En]:En},u=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:mb,fragmentShader:gb}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const x=new Dn;x.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new gn(x,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$r;let h=this.type;this.render=function(w,R,g){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===ym&&(Be("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=$r);const A=n.getRenderTarget(),F=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Tn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const Y=h!==this.type;Y&&R.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(L=>L.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,L=w.length;K<L;K++){const I=w[K],B=I.shadow;if(B===void 0){Be("WebGLShadowMap:",I,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const te=B.getFrameExtents();r.multiply(te),s.copy(B.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/te.x),r.x=s.x*te.x,B.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/te.y),r.y=s.y*te.y,B.mapSize.y=s.y));const ie=n.state.buffers.depth.getReversed();if(B.camera._reversedDepth=ie,B.map===null||Y===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===nr){if(I.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new hn(r.x,r.y,{format:hi,type:Cn,minFilter:Lt,magFilter:Lt,generateMipmaps:!1}),B.map.texture.name=I.name+".shadowMap",B.map.depthTexture=new Wi(r.x,r.y,dn),B.map.depthTexture.name=I.name+".shadowMapDepth",B.map.depthTexture.format=Pn,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ct,B.map.depthTexture.magFilter=Ct}else I.isPointLight?(B.map=new Kd(r.x),B.map.depthTexture=new Ag(r.x,mn)):(B.map=new hn(r.x,r.y),B.map.depthTexture=new Wi(r.x,r.y,mn)),B.map.depthTexture.name=I.name+".shadowMap",B.map.depthTexture.format=Pn,this.type===$r?(B.map.depthTexture.compareFunction=ie?Sa:ba,B.map.depthTexture.minFilter=Lt,B.map.depthTexture.magFilter=Lt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ct,B.map.depthTexture.magFilter=Ct);B.camera.updateProjectionMatrix()}const q=B.map.isWebGLCubeRenderTarget?6:1;for(let be=0;be<q;be++){if(B.map.isWebGLCubeRenderTarget)n.setRenderTarget(B.map,be),n.clear();else{be===0&&(n.setRenderTarget(B.map),n.clear());const Ae=B.getViewport(be);o.set(s.x*Ae.x,s.y*Ae.y,s.x*Ae.z,s.y*Ae.w),z.viewport(o)}if(I.isPointLight){const Ae=B.camera,Se=B.matrix,Ie=I.distance||Ae.far;Ie!==Ae.far&&(Ae.far=Ie,Ae.updateProjectionMatrix()),tr.setFromMatrixPosition(I.matrixWorld),Ae.position.copy(tr),ao.copy(Ae.position),ao.add(xb[be]),Ae.up.copy(vb[be]),Ae.lookAt(ao),Ae.updateMatrixWorld(),Se.makeTranslation(-tr.x,-tr.y,-tr.z),fc.multiplyMatrices(Ae.projectionMatrix,Ae.matrixWorldInverse),B._frustum.setFromProjectionMatrix(fc,Ae.coordinateSystem,Ae.reversedDepth)}else B.updateMatrices(I);i=B.getFrustum(),E(R,g,B.camera,I,this.type)}B.isPointLightShadow!==!0&&this.type===nr&&y(B,g),B.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(A,F,P)};function y(w,R){const g=e.update(b);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new hn(r.x,r.y,{format:hi,type:Cn})),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(R,null,g,u,b,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(R,null,g,m,b,null)}function T(w,R,g,A){let F=null;const P=g.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)F=P;else if(F=g.isPointLight===!0?c:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const z=F.uuid,Y=R.uuid;let K=l[z];K===void 0&&(K={},l[z]=K);let L=K[Y];L===void 0&&(L=F.clone(),K[Y]=L,R.addEventListener("dispose",C)),F=L}if(F.visible=R.visible,F.wireframe=R.wireframe,A===nr?F.side=R.shadowSide!==null?R.shadowSide:R.side:F.side=R.shadowSide!==null?R.shadowSide:d[R.side],F.alphaMap=R.alphaMap,F.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,F.map=R.map,F.clipShadows=R.clipShadows,F.clippingPlanes=R.clippingPlanes,F.clipIntersection=R.clipIntersection,F.displacementMap=R.displacementMap,F.displacementScale=R.displacementScale,F.displacementBias=R.displacementBias,F.wireframeLinewidth=R.wireframeLinewidth,F.linewidth=R.linewidth,g.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const z=n.properties.get(F);z.light=g}return F}function E(w,R,g,A,F){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&F===nr)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,w.matrixWorld);const Y=e.update(w),K=w.material;if(Array.isArray(K)){const L=Y.groups;for(let I=0,B=L.length;I<B;I++){const te=L[I],ie=K[te.materialIndex];if(ie&&ie.visible){const q=T(w,ie,A,F);w.onBeforeShadow(n,w,R,g,Y,q,te),n.renderBufferDirect(g,null,Y,q,w,te),w.onAfterShadow(n,w,R,g,Y,q,te)}}}else if(K.visible){const L=T(w,K,A,F);w.onBeforeShadow(n,w,R,g,Y,L,null),n.renderBufferDirect(g,null,Y,L,w,null),w.onAfterShadow(n,w,R,g,Y,L,null)}}const z=w.children;for(let Y=0,K=z.length;Y<K;Y++)E(z[Y],R,g,A,F)}function C(w){w.target.removeEventListener("dispose",C);for(const g in l){const A=l[g],F=w.target.uuid;F in A&&(A[F].dispose(),delete A[F])}}}function bb(n,e){function t(){let N=!1;const le=new St;let G=null;const ce=new St(0,0,0,0);return{setMask:function(re){G!==re&&!N&&(n.colorMask(re,re,re,re),G=re)},setLocked:function(re){N=re},setClear:function(re,Q,Re,Ce,Je){Je===!0&&(re*=Ce,Q*=Ce,Re*=Ce),le.set(re,Q,Re,Ce),ce.equals(le)===!1&&(n.clearColor(re,Q,Re,Ce),ce.copy(le))},reset:function(){N=!1,G=null,ce.set(-1,0,0,0)}}}function i(){let N=!1,le=!1,G=null,ce=null,re=null;return{setReversed:function(Q){if(le!==Q){const Re=e.get("EXT_clip_control");Q?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),le=Q;const Ce=re;re=null,this.setClear(Ce)}},getReversed:function(){return le},setTest:function(Q){Q?ee(n.DEPTH_TEST):me(n.DEPTH_TEST)},setMask:function(Q){G!==Q&&!N&&(n.depthMask(Q),G=Q)},setFunc:function(Q){if(le&&(Q=tg[Q]),ce!==Q){switch(Q){case go:n.depthFunc(n.NEVER);break;case xo:n.depthFunc(n.ALWAYS);break;case vo:n.depthFunc(n.LESS);break;case Vi:n.depthFunc(n.LEQUAL);break;case _o:n.depthFunc(n.EQUAL);break;case bo:n.depthFunc(n.GEQUAL);break;case So:n.depthFunc(n.GREATER);break;case yo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=Q}},setLocked:function(Q){N=Q},setClear:function(Q){re!==Q&&(re=Q,le&&(Q=1-Q),n.clearDepth(Q))},reset:function(){N=!1,G=null,ce=null,re=null,le=!1}}}function r(){let N=!1,le=null,G=null,ce=null,re=null,Q=null,Re=null,Ce=null,Je=null;return{setTest:function(et){N||(et?ee(n.STENCIL_TEST):me(n.STENCIL_TEST))},setMask:function(et){le!==et&&!N&&(n.stencilMask(et),le=et)},setFunc:function(et,vt,mt){(G!==et||ce!==vt||re!==mt)&&(n.stencilFunc(et,vt,mt),G=et,ce=vt,re=mt)},setOp:function(et,vt,mt){(Q!==et||Re!==vt||Ce!==mt)&&(n.stencilOp(et,vt,mt),Q=et,Re=vt,Ce=mt)},setLocked:function(et){N=et},setClear:function(et){Je!==et&&(n.clearStencil(et),Je=et)},reset:function(){N=!1,le=null,G=null,ce=null,re=null,Q=null,Re=null,Ce=null,Je=null}}}const s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let f={},d={},u={},m=new WeakMap,x=[],b=null,p=!1,h=null,y=null,T=null,E=null,C=null,w=null,R=null,g=new ot(0,0,0),A=0,F=!1,P=null,z=null,Y=null,K=null,L=null;const I=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,te=0;const ie=n.getParameter(n.VERSION);ie.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(ie)[1]),B=te>=1):ie.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),B=te>=2);let q=null,be={};const Ae=n.getParameter(n.SCISSOR_BOX),Se=n.getParameter(n.VIEWPORT),Ie=new St().fromArray(Ae),he=new St().fromArray(Se);function X(N,le,G,ce){const re=new Uint8Array(4),Q=n.createTexture();n.bindTexture(N,Q),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Re=0;Re<G;Re++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(le,0,n.RGBA,1,1,ce,0,n.RGBA,n.UNSIGNED_BYTE,re):n.texImage2D(le+Re,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,re);return Q}const de={};de[n.TEXTURE_2D]=X(n.TEXTURE_2D,n.TEXTURE_2D,1),de[n.TEXTURE_CUBE_MAP]=X(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[n.TEXTURE_2D_ARRAY]=X(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),de[n.TEXTURE_3D]=X(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(n.DEPTH_TEST),o.setFunc(Vi),ft(!1),dt(ml),ee(n.CULL_FACE),at(Tn);function ee(N){f[N]!==!0&&(n.enable(N),f[N]=!0)}function me(N){f[N]!==!1&&(n.disable(N),f[N]=!1)}function Fe(N,le){return u[N]!==le?(n.bindFramebuffer(N,le),u[N]=le,N===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=le),N===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=le),!0):!1}function Ne(N,le){let G=x,ce=!1;if(N){G=m.get(le),G===void 0&&(G=[],m.set(le,G));const re=N.textures;if(G.length!==re.length||G[0]!==n.COLOR_ATTACHMENT0){for(let Q=0,Re=re.length;Q<Re;Q++)G[Q]=n.COLOR_ATTACHMENT0+Q;G.length=re.length,ce=!0}}else G[0]!==n.BACK&&(G[0]=n.BACK,ce=!0);ce&&n.drawBuffers(G)}function Ye(N){return b!==N?(n.useProgram(N),b=N,!0):!1}const Ge={[ai]:n.FUNC_ADD,[Em]:n.FUNC_SUBTRACT,[wm]:n.FUNC_REVERSE_SUBTRACT};Ge[Tm]=n.MIN,Ge[Am]=n.MAX;const qe={[Rm]:n.ZERO,[Cm]:n.ONE,[Pm]:n.SRC_COLOR,[po]:n.SRC_ALPHA,[Fm]:n.SRC_ALPHA_SATURATE,[Im]:n.DST_COLOR,[Dm]:n.DST_ALPHA,[Nm]:n.ONE_MINUS_SRC_COLOR,[mo]:n.ONE_MINUS_SRC_ALPHA,[Um]:n.ONE_MINUS_DST_COLOR,[Lm]:n.ONE_MINUS_DST_ALPHA,[Om]:n.CONSTANT_COLOR,[Bm]:n.ONE_MINUS_CONSTANT_COLOR,[km]:n.CONSTANT_ALPHA,[zm]:n.ONE_MINUS_CONSTANT_ALPHA};function at(N,le,G,ce,re,Q,Re,Ce,Je,et){if(N===Tn){p===!0&&(me(n.BLEND),p=!1);return}if(p===!1&&(ee(n.BLEND),p=!0),N!==Mm){if(N!==h||et!==F){if((y!==ai||C!==ai)&&(n.blendEquation(n.FUNC_ADD),y=ai,C=ai),et)switch(N){case zi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gl:n.blendFunc(n.ONE,n.ONE);break;case xl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:nt("WebGLState: Invalid blending: ",N);break}else switch(N){case zi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case xl:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vl:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",N);break}T=null,E=null,w=null,R=null,g.set(0,0,0),A=0,h=N,F=et}return}re=re||le,Q=Q||G,Re=Re||ce,(le!==y||re!==C)&&(n.blendEquationSeparate(Ge[le],Ge[re]),y=le,C=re),(G!==T||ce!==E||Q!==w||Re!==R)&&(n.blendFuncSeparate(qe[G],qe[ce],qe[Q],qe[Re]),T=G,E=ce,w=Q,R=Re),(Ce.equals(g)===!1||Je!==A)&&(n.blendColor(Ce.r,Ce.g,Ce.b,Je),g.copy(Ce),A=Je),h=N,F=!1}function He(N,le){N.side===En?me(n.CULL_FACE):ee(n.CULL_FACE);let G=N.side===Bt;le&&(G=!G),ft(G),N.blending===zi&&N.transparent===!1?at(Tn):at(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const ce=N.stencilWrite;a.setTest(ce),ce&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),D(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ee(n.SAMPLE_ALPHA_TO_COVERAGE):me(n.SAMPLE_ALPHA_TO_COVERAGE)}function ft(N){P!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),P=N)}function dt(N){N!==bm?(ee(n.CULL_FACE),N!==z&&(N===ml?n.cullFace(n.BACK):N===Sm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):me(n.CULL_FACE),z=N}function pt(N){N!==Y&&(B&&n.lineWidth(N),Y=N)}function D(N,le,G){N?(ee(n.POLYGON_OFFSET_FILL),(K!==le||L!==G)&&(K=le,L=G,o.getReversed()&&(le=-le),n.polygonOffset(le,G))):me(n.POLYGON_OFFSET_FILL)}function xt(N){N?ee(n.SCISSOR_TEST):me(n.SCISSOR_TEST)}function Oe(N){N===void 0&&(N=n.TEXTURE0+I-1),q!==N&&(n.activeTexture(N),q=N)}function Qe(N,le,G){G===void 0&&(q===null?G=n.TEXTURE0+I-1:G=q);let ce=be[G];ce===void 0&&(ce={type:void 0,texture:void 0},be[G]=ce),(ce.type!==N||ce.texture!==le)&&(q!==G&&(n.activeTexture(G),q=G),n.bindTexture(N,le||de[N]),ce.type=N,ce.texture=le)}function pe(){const N=be[q];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ht(){try{n.compressedTexImage2D(...arguments)}catch(N){nt("WebGLState:",N)}}function M(){try{n.compressedTexImage3D(...arguments)}catch(N){nt("WebGLState:",N)}}function v(){try{n.texSubImage2D(...arguments)}catch(N){nt("WebGLState:",N)}}function O(){try{n.texSubImage3D(...arguments)}catch(N){nt("WebGLState:",N)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(N){nt("WebGLState:",N)}}function ne(){try{n.compressedTexSubImage3D(...arguments)}catch(N){nt("WebGLState:",N)}}function oe(){try{n.texStorage2D(...arguments)}catch(N){nt("WebGLState:",N)}}function ae(){try{n.texStorage3D(...arguments)}catch(N){nt("WebGLState:",N)}}function $(){try{n.texImage2D(...arguments)}catch(N){nt("WebGLState:",N)}}function J(){try{n.texImage3D(...arguments)}catch(N){nt("WebGLState:",N)}}function ge(N){return d[N]!==void 0?d[N]:n.getParameter(N)}function ye(N,le){d[N]!==le&&(n.pixelStorei(N,le),d[N]=le)}function ue(N){Ie.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Ie.copy(N))}function se(N){he.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),he.copy(N))}function Ue(N,le){let G=l.get(le);G===void 0&&(G=new WeakMap,l.set(le,G));let ce=G.get(N);ce===void 0&&(ce=n.getUniformBlockIndex(le,N.name),G.set(N,ce))}function ke(N,le){const ce=l.get(le).get(N);c.get(le)!==ce&&(n.uniformBlockBinding(le,ce,N.__bindingPointIndex),c.set(le,ce))}function Ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),f={},d={},q=null,be={},u={},m=new WeakMap,x=[],b=null,p=!1,h=null,y=null,T=null,E=null,C=null,w=null,R=null,g=new ot(0,0,0),A=0,F=!1,P=null,z=null,Y=null,K=null,L=null,Ie.set(0,0,n.canvas.width,n.canvas.height),he.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ee,disable:me,bindFramebuffer:Fe,drawBuffers:Ne,useProgram:Ye,setBlending:at,setMaterial:He,setFlipSided:ft,setCullFace:dt,setLineWidth:pt,setPolygonOffset:D,setScissorTest:xt,activeTexture:Oe,bindTexture:Qe,unbindTexture:pe,compressedTexImage2D:ht,compressedTexImage3D:M,texImage2D:$,texImage3D:J,pixelStorei:ye,getParameter:ge,updateUBOMapping:Ue,uniformBlockBinding:ke,texStorage2D:oe,texStorage3D:ae,texSubImage2D:v,texSubImage3D:O,compressedTexSubImage2D:Z,compressedTexSubImage3D:ne,scissor:ue,viewport:se,reset:Ze}}function Sb(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new it,f=new WeakMap,d=new Set;let u;const m=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(M,v){return x?new OffscreenCanvas(M,v):ls("canvas")}function p(M,v,O){let Z=1;const ne=ht(M);if((ne.width>O||ne.height>O)&&(Z=O/Math.max(ne.width,ne.height)),Z<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const oe=Math.floor(Z*ne.width),ae=Math.floor(Z*ne.height);u===void 0&&(u=b(oe,ae));const $=v?b(oe,ae):u;return $.width=oe,$.height=ae,$.getContext("2d").drawImage(M,0,0,oe,ae),Be("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+oe+"x"+ae+")."),$}else return"data"in M&&Be("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),M;return M}function h(M){return M.generateMipmaps}function y(M){n.generateMipmap(M)}function T(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(M,v,O,Z,ne,oe=!1){if(M!==null){if(n[M]!==void 0)return n[M];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let ae;Z&&(ae=e.get("EXT_texture_norm16"),ae||Be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=v;if(v===n.RED&&(O===n.FLOAT&&($=n.R32F),O===n.HALF_FLOAT&&($=n.R16F),O===n.UNSIGNED_BYTE&&($=n.R8),O===n.UNSIGNED_SHORT&&ae&&($=ae.R16_EXT),O===n.SHORT&&ae&&($=ae.R16_SNORM_EXT)),v===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&($=n.R8UI),O===n.UNSIGNED_SHORT&&($=n.R16UI),O===n.UNSIGNED_INT&&($=n.R32UI),O===n.BYTE&&($=n.R8I),O===n.SHORT&&($=n.R16I),O===n.INT&&($=n.R32I)),v===n.RG&&(O===n.FLOAT&&($=n.RG32F),O===n.HALF_FLOAT&&($=n.RG16F),O===n.UNSIGNED_BYTE&&($=n.RG8),O===n.UNSIGNED_SHORT&&ae&&($=ae.RG16_EXT),O===n.SHORT&&ae&&($=ae.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&($=n.RG8UI),O===n.UNSIGNED_SHORT&&($=n.RG16UI),O===n.UNSIGNED_INT&&($=n.RG32UI),O===n.BYTE&&($=n.RG8I),O===n.SHORT&&($=n.RG16I),O===n.INT&&($=n.RG32I)),v===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&($=n.RGB8UI),O===n.UNSIGNED_SHORT&&($=n.RGB16UI),O===n.UNSIGNED_INT&&($=n.RGB32UI),O===n.BYTE&&($=n.RGB8I),O===n.SHORT&&($=n.RGB16I),O===n.INT&&($=n.RGB32I)),v===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&($=n.RGBA8UI),O===n.UNSIGNED_SHORT&&($=n.RGBA16UI),O===n.UNSIGNED_INT&&($=n.RGBA32UI),O===n.BYTE&&($=n.RGBA8I),O===n.SHORT&&($=n.RGBA16I),O===n.INT&&($=n.RGBA32I)),v===n.RGB&&(O===n.UNSIGNED_SHORT&&ae&&($=ae.RGB16_EXT),O===n.SHORT&&ae&&($=ae.RGB16_SNORM_EXT),O===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&($=n.R11F_G11F_B10F)),v===n.RGBA){const J=oe?os:$e.getTransfer(ne);O===n.FLOAT&&($=n.RGBA32F),O===n.HALF_FLOAT&&($=n.RGBA16F),O===n.UNSIGNED_BYTE&&($=J===rt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT&&ae&&($=ae.RGBA16_EXT),O===n.SHORT&&ae&&($=ae.RGBA16_SNORM_EXT),O===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function C(M,v){let O;return M?v===null||v===mn||v===ar?O=n.DEPTH24_STENCIL8:v===dn?O=n.DEPTH32F_STENCIL8:v===or&&(O=n.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===mn||v===ar?O=n.DEPTH_COMPONENT24:v===dn?O=n.DEPTH_COMPONENT32F:v===or&&(O=n.DEPTH_COMPONENT16),O}function w(M,v){return h(M)===!0||M.isFramebufferTexture&&M.minFilter!==Ct&&M.minFilter!==Lt?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function R(M){const v=M.target;v.removeEventListener("dispose",R),A(v),v.isVideoTexture&&f.delete(v),v.isHTMLTexture&&d.delete(v)}function g(M){const v=M.target;v.removeEventListener("dispose",g),P(v)}function A(M){const v=i.get(M);if(v.__webglInit===void 0)return;const O=M.source,Z=m.get(O);if(Z){const ne=Z[v.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&F(M),Object.keys(Z).length===0&&m.delete(O)}i.remove(M)}function F(M){const v=i.get(M);n.deleteTexture(v.__webglTexture);const O=M.source,Z=m.get(O);delete Z[v.__cacheKey],o.memory.textures--}function P(M){const v=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(v.__webglFramebuffer[Z]))for(let ne=0;ne<v.__webglFramebuffer[Z].length;ne++)n.deleteFramebuffer(v.__webglFramebuffer[Z][ne]);else n.deleteFramebuffer(v.__webglFramebuffer[Z]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[Z])}else{if(Array.isArray(v.__webglFramebuffer))for(let Z=0;Z<v.__webglFramebuffer.length;Z++)n.deleteFramebuffer(v.__webglFramebuffer[Z]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Z=0;Z<v.__webglColorRenderbuffer.length;Z++)v.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[Z]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=M.textures;for(let Z=0,ne=O.length;Z<ne;Z++){const oe=i.get(O[Z]);oe.__webglTexture&&(n.deleteTexture(oe.__webglTexture),o.memory.textures--),i.remove(O[Z])}i.remove(M)}let z=0;function Y(){z=0}function K(){return z}function L(M){z=M}function I(){const M=z;return M>=r.maxTextures&&Be("WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),z+=1,M}function B(M){const v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.wrapR||0),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.colorSpace),v.join()}function te(M,v){const O=i.get(M);if(M.isVideoTexture&&Qe(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&O.__version!==M.version){const Z=M.image;if(Z===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{me(O,M,v);return}}else M.isExternalTexture&&(O.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+v)}function ie(M,v){const O=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&O.__version!==M.version){me(O,M,v);return}else M.isExternalTexture&&(O.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+v)}function q(M,v){const O=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&O.__version!==M.version){me(O,M,v);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+v)}function be(M,v){const O=i.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&O.__version!==M.version){Fe(O,M,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+v)}const Ae={[Mo]:n.REPEAT,[wn]:n.CLAMP_TO_EDGE,[Eo]:n.MIRRORED_REPEAT},Se={[Ct]:n.NEAREST,[Hm]:n.NEAREST_MIPMAP_NEAREST,[Er]:n.NEAREST_MIPMAP_LINEAR,[Lt]:n.LINEAR,[Ns]:n.LINEAR_MIPMAP_NEAREST,[ci]:n.LINEAR_MIPMAP_LINEAR},Ie={[Xm]:n.NEVER,[Zm]:n.ALWAYS,[qm]:n.LESS,[ba]:n.LEQUAL,[Ym]:n.EQUAL,[Sa]:n.GEQUAL,[$m]:n.GREATER,[Km]:n.NOTEQUAL};function he(M,v){if(v.type===dn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Lt||v.magFilter===Ns||v.magFilter===Er||v.magFilter===ci||v.minFilter===Lt||v.minFilter===Ns||v.minFilter===Er||v.minFilter===ci)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,Ae[v.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,Ae[v.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,Ae[v.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,Se[v.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,Se[v.minFilter]),v.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,Ie[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ct||v.minFilter!==Er&&v.minFilter!==ci||v.type===dn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(M,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function X(M,v){let O=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",R));const Z=v.source;let ne=m.get(Z);ne===void 0&&(ne={},m.set(Z,ne));const oe=B(v);if(oe!==M.__cacheKey){ne[oe]===void 0&&(ne[oe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),ne[oe].usedTimes++;const ae=ne[M.__cacheKey];ae!==void 0&&(ne[M.__cacheKey].usedTimes--,ae.usedTimes===0&&F(v)),M.__cacheKey=oe,M.__webglTexture=ne[oe].texture}return O}function de(M,v,O){return Math.floor(Math.floor(M/O)/v)}function ee(M,v,O,Z){const oe=M.updateRanges;if(oe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,O,Z,v.data);else{oe.sort((ye,ue)=>ye.start-ue.start);let ae=0;for(let ye=1;ye<oe.length;ye++){const ue=oe[ae],se=oe[ye],Ue=ue.start+ue.count,ke=de(se.start,v.width,4),Ze=de(ue.start,v.width,4);se.start<=Ue+1&&ke===Ze&&de(se.start+se.count-1,v.width,4)===ke?ue.count=Math.max(ue.count,se.start+se.count-ue.start):(++ae,oe[ae]=se)}oe.length=ae+1;const $=t.getParameter(n.UNPACK_ROW_LENGTH),J=t.getParameter(n.UNPACK_SKIP_PIXELS),ge=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let ye=0,ue=oe.length;ye<ue;ye++){const se=oe[ye],Ue=Math.floor(se.start/4),ke=Math.ceil(se.count/4),Ze=Ue%v.width,N=Math.floor(Ue/v.width),le=ke,G=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ze),t.pixelStorei(n.UNPACK_SKIP_ROWS,N),t.texSubImage2D(n.TEXTURE_2D,0,Ze,N,le,G,O,Z,v.data)}M.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,$),t.pixelStorei(n.UNPACK_SKIP_PIXELS,J),t.pixelStorei(n.UNPACK_SKIP_ROWS,ge)}}function me(M,v,O){let Z=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Z=n.TEXTURE_3D);const ne=X(M,v),oe=v.source;t.bindTexture(Z,M.__webglTexture,n.TEXTURE0+O);const ae=i.get(oe);if(oe.version!==ae.__version||ne===!0){if(t.activeTexture(n.TEXTURE0+O),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const G=$e.getPrimaries($e.workingColorSpace),ce=v.colorSpace===Xn?null:$e.getPrimaries(v.colorSpace),re=v.colorSpace===Xn||G===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re)}t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let J=p(v.image,!1,r.maxTextureSize);J=pe(v,J);const ge=s.convert(v.format,v.colorSpace),ye=s.convert(v.type);let ue=E(v.internalFormat,ge,ye,v.normalized,v.colorSpace,v.isVideoTexture);he(Z,v);let se;const Ue=v.mipmaps,ke=v.isVideoTexture!==!0,Ze=ae.__version===void 0||ne===!0,N=oe.dataReady,le=w(v,J);if(v.isDepthTexture)ue=C(v.format===di,v.type),Ze&&(ke?t.texStorage2D(n.TEXTURE_2D,1,ue,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,ue,J.width,J.height,0,ge,ye,null));else if(v.isDataTexture)if(Ue.length>0){ke&&Ze&&t.texStorage2D(n.TEXTURE_2D,le,ue,Ue[0].width,Ue[0].height);for(let G=0,ce=Ue.length;G<ce;G++)se=Ue[G],ke?N&&t.texSubImage2D(n.TEXTURE_2D,G,0,0,se.width,se.height,ge,ye,se.data):t.texImage2D(n.TEXTURE_2D,G,ue,se.width,se.height,0,ge,ye,se.data);v.generateMipmaps=!1}else ke?(Ze&&t.texStorage2D(n.TEXTURE_2D,le,ue,J.width,J.height),N&&ee(v,J,ge,ye)):t.texImage2D(n.TEXTURE_2D,0,ue,J.width,J.height,0,ge,ye,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ke&&Ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,ue,Ue[0].width,Ue[0].height,J.depth);for(let G=0,ce=Ue.length;G<ce;G++)if(se=Ue[G],v.format!==en)if(ge!==null)if(ke){if(N)if(v.layerUpdates.size>0){const re=Hl(se.width,se.height,v.format,v.type);for(const Q of v.layerUpdates){const Re=se.data.subarray(Q*re/se.data.BYTES_PER_ELEMENT,(Q+1)*re/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,Q,se.width,se.height,1,ge,Re)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,0,se.width,se.height,J.depth,ge,se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,G,ue,se.width,se.height,J.depth,0,se.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,0,se.width,se.height,J.depth,ge,ye,se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,G,ue,se.width,se.height,J.depth,0,ge,ye,se.data)}else{ke&&Ze&&t.texStorage2D(n.TEXTURE_2D,le,ue,Ue[0].width,Ue[0].height);for(let G=0,ce=Ue.length;G<ce;G++)se=Ue[G],v.format!==en?ge!==null?ke?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,G,0,0,se.width,se.height,ge,se.data):t.compressedTexImage2D(n.TEXTURE_2D,G,ue,se.width,se.height,0,se.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?N&&t.texSubImage2D(n.TEXTURE_2D,G,0,0,se.width,se.height,ge,ye,se.data):t.texImage2D(n.TEXTURE_2D,G,ue,se.width,se.height,0,ge,ye,se.data)}else if(v.isDataArrayTexture)if(ke){if(Ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,ue,J.width,J.height,J.depth),N)if(v.layerUpdates.size>0){const G=Hl(J.width,J.height,v.format,v.type);for(const ce of v.layerUpdates){const re=J.data.subarray(ce*G/J.data.BYTES_PER_ELEMENT,(ce+1)*G/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ce,J.width,J.height,1,ge,ye,re)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ge,ye,J.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ue,J.width,J.height,J.depth,0,ge,ye,J.data);else if(v.isData3DTexture)ke?(Ze&&t.texStorage3D(n.TEXTURE_3D,le,ue,J.width,J.height,J.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ge,ye,J.data)):t.texImage3D(n.TEXTURE_3D,0,ue,J.width,J.height,J.depth,0,ge,ye,J.data);else if(v.isFramebufferTexture){if(Ze)if(ke)t.texStorage2D(n.TEXTURE_2D,le,ue,J.width,J.height);else{let G=J.width,ce=J.height;for(let re=0;re<le;re++)t.texImage2D(n.TEXTURE_2D,re,ue,G,ce,0,ge,ye,null),G>>=1,ce>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){const G=n.canvas;if(G.hasAttribute("layoutsubtree")||G.setAttribute("layoutsubtree","true"),J.parentNode!==G){G.appendChild(J),d.add(v),G.onpaint=Ce=>{const Je=Ce.changedElements;for(const et of d)Je.includes(et.image)&&(et.needsUpdate=!0)},G.requestPaint();return}const ce=0,re=n.RGBA,Q=n.RGBA,Re=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,ce,re,Q,Re,J),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(ke&&Ze){const G=ht(Ue[0]);t.texStorage2D(n.TEXTURE_2D,le,ue,G.width,G.height)}for(let G=0,ce=Ue.length;G<ce;G++)se=Ue[G],ke?N&&t.texSubImage2D(n.TEXTURE_2D,G,0,0,ge,ye,se):t.texImage2D(n.TEXTURE_2D,G,ue,ge,ye,se);v.generateMipmaps=!1}else if(ke){if(Ze){const G=ht(J);t.texStorage2D(n.TEXTURE_2D,le,ue,G.width,G.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,ye,J)}else t.texImage2D(n.TEXTURE_2D,0,ue,ge,ye,J);h(v)&&y(Z),ae.__version=oe.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function Fe(M,v,O){if(v.image.length!==6)return;const Z=X(M,v),ne=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+O);const oe=i.get(ne);if(ne.version!==oe.__version||Z===!0){t.activeTexture(n.TEXTURE0+O);const ae=$e.getPrimaries($e.workingColorSpace),$=v.colorSpace===Xn?null:$e.getPrimaries(v.colorSpace),J=v.colorSpace===Xn||ae===$?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const ge=v.isCompressedTexture||v.image[0].isCompressedTexture,ye=v.image[0]&&v.image[0].isDataTexture,ue=[];for(let Q=0;Q<6;Q++)!ge&&!ye?ue[Q]=p(v.image[Q],!0,r.maxCubemapSize):ue[Q]=ye?v.image[Q].image:v.image[Q],ue[Q]=pe(v,ue[Q]);const se=ue[0],Ue=s.convert(v.format,v.colorSpace),ke=s.convert(v.type),Ze=E(v.internalFormat,Ue,ke,v.normalized,v.colorSpace),N=v.isVideoTexture!==!0,le=oe.__version===void 0||Z===!0,G=ne.dataReady;let ce=w(v,se);he(n.TEXTURE_CUBE_MAP,v);let re;if(ge){N&&le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,Ze,se.width,se.height);for(let Q=0;Q<6;Q++){re=ue[Q].mipmaps;for(let Re=0;Re<re.length;Re++){const Ce=re[Re];v.format!==en?Ue!==null?N?G&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re,0,0,Ce.width,Ce.height,Ue,Ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re,Ze,Ce.width,Ce.height,0,Ce.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re,0,0,Ce.width,Ce.height,Ue,ke,Ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re,Ze,Ce.width,Ce.height,0,Ue,ke,Ce.data)}}}else{if(re=v.mipmaps,N&&le){re.length>0&&ce++;const Q=ht(ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,Ze,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ye){N?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ue[Q].width,ue[Q].height,Ue,ke,ue[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ze,ue[Q].width,ue[Q].height,0,Ue,ke,ue[Q].data);for(let Re=0;Re<re.length;Re++){const Je=re[Re].image[Q].image;N?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re+1,0,0,Je.width,Je.height,Ue,ke,Je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re+1,Ze,Je.width,Je.height,0,Ue,ke,Je.data)}}else{N?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ue,ke,ue[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ze,Ue,ke,ue[Q]);for(let Re=0;Re<re.length;Re++){const Ce=re[Re];N?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re+1,0,0,Ue,ke,Ce.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re+1,Ze,Ue,ke,Ce.image[Q])}}}h(v)&&y(n.TEXTURE_CUBE_MAP),oe.__version=ne.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function Ne(M,v,O,Z,ne,oe){const ae=s.convert(O.format,O.colorSpace),$=s.convert(O.type),J=E(O.internalFormat,ae,$,O.normalized,O.colorSpace),ge=i.get(v),ye=i.get(O);if(ye.__renderTarget=v,!ge.__hasExternalTextures){const ue=Math.max(1,v.width>>oe),se=Math.max(1,v.height>>oe);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,oe,J,ue,se,v.depth,0,ae,$,null):t.texImage2D(ne,oe,J,ue,se,0,ae,$,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),Oe(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,ne,ye.__webglTexture,0,xt(v)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,ne,ye.__webglTexture,oe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ye(M,v,O){if(n.bindRenderbuffer(n.RENDERBUFFER,M),v.depthBuffer){const Z=v.depthTexture,ne=Z&&Z.isDepthTexture?Z.type:null,oe=C(v.stencilBuffer,ne),ae=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Oe(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xt(v),oe,v.width,v.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,xt(v),oe,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,oe,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,M)}else{const Z=v.textures;for(let ne=0;ne<Z.length;ne++){const oe=Z[ne],ae=s.convert(oe.format,oe.colorSpace),$=s.convert(oe.type),J=E(oe.internalFormat,ae,$,oe.normalized,oe.colorSpace);Oe(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xt(v),J,v.width,v.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,xt(v),J,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,J,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ge(M,v,O){const Z=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=i.get(v.depthTexture);if(ne.__renderTarget=v,(!ne.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,v.depthTexture.addEventListener("dispose",R)),ne.__webglTexture===void 0){ne.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),he(n.TEXTURE_CUBE_MAP,v.depthTexture);const ge=s.convert(v.depthTexture.format),ye=s.convert(v.depthTexture.type);let ue;v.depthTexture.format===Pn?ue=n.DEPTH_COMPONENT24:v.depthTexture.format===di&&(ue=n.DEPTH24_STENCIL8);for(let se=0;se<6;se++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ue,v.width,v.height,0,ge,ye,null)}}else te(v.depthTexture,0);const oe=ne.__webglTexture,ae=xt(v),$=Z?n.TEXTURE_CUBE_MAP_POSITIVE_X+O:n.TEXTURE_2D,J=v.depthTexture.format===di?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===Pn)Oe(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,$,oe,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,J,$,oe,0);else if(v.depthTexture.format===di)Oe(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,$,oe,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,J,$,oe,0);else throw new Error("Unknown depthTexture format")}function qe(M){const v=i.get(M),O=M.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==M.depthTexture){const Z=M.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Z){const ne=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Z.removeEventListener("dispose",ne)};Z.addEventListener("dispose",ne),v.__depthDisposeCallback=ne}v.__boundDepthTexture=Z}if(M.depthTexture&&!v.__autoAllocateDepthBuffer)if(O)for(let Z=0;Z<6;Z++)Ge(v.__webglFramebuffer[Z],M,Z);else{const Z=M.texture.mipmaps;Z&&Z.length>0?Ge(v.__webglFramebuffer[0],M,0):Ge(v.__webglFramebuffer,M,0)}else if(O){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]===void 0)v.__webglDepthbuffer[Z]=n.createRenderbuffer(),Ye(v.__webglDepthbuffer[Z],M,!1);else{const ne=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=v.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,oe)}}else{const Z=M.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Ye(v.__webglDepthbuffer,M,!1);else{const ne=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,oe)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function at(M,v,O){const Z=i.get(M);v!==void 0&&Ne(Z.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&qe(M)}function He(M){const v=M.texture,O=i.get(M),Z=i.get(v);M.addEventListener("dispose",g);const ne=M.textures,oe=M.isWebGLCubeRenderTarget===!0,ae=ne.length>1;if(ae||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=v.version,o.memory.textures++),oe){O.__webglFramebuffer=[];for(let $=0;$<6;$++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[$]=[];for(let J=0;J<v.mipmaps.length;J++)O.__webglFramebuffer[$][J]=n.createFramebuffer()}else O.__webglFramebuffer[$]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let $=0;$<v.mipmaps.length;$++)O.__webglFramebuffer[$]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(ae)for(let $=0,J=ne.length;$<J;$++){const ge=i.get(ne[$]);ge.__webglTexture===void 0&&(ge.__webglTexture=n.createTexture(),o.memory.textures++)}if(M.samples>0&&Oe(M)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let $=0;$<ne.length;$++){const J=ne[$];O.__webglColorRenderbuffer[$]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[$]);const ge=s.convert(J.format,J.colorSpace),ye=s.convert(J.type),ue=E(J.internalFormat,ge,ye,J.normalized,J.colorSpace,M.isXRRenderTarget===!0),se=xt(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,se,ue,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.RENDERBUFFER,O.__webglColorRenderbuffer[$])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Ye(O.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),he(n.TEXTURE_CUBE_MAP,v);for(let $=0;$<6;$++)if(v.mipmaps&&v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)Ne(O.__webglFramebuffer[$][J],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+$,J);else Ne(O.__webglFramebuffer[$],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);h(v)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let $=0,J=ne.length;$<J;$++){const ge=ne[$],ye=i.get(ge);let ue=n.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ue=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,ye.__webglTexture),he(ue,ge),Ne(O.__webglFramebuffer,M,ge,n.COLOR_ATTACHMENT0+$,ue,0),h(ge)&&y(ue)}t.unbindTexture()}else{let $=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&($=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture($,Z.__webglTexture),he($,v),v.mipmaps&&v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)Ne(O.__webglFramebuffer[J],M,v,n.COLOR_ATTACHMENT0,$,J);else Ne(O.__webglFramebuffer,M,v,n.COLOR_ATTACHMENT0,$,0);h(v)&&y($),t.unbindTexture()}M.depthBuffer&&qe(M)}function ft(M){const v=M.textures;for(let O=0,Z=v.length;O<Z;O++){const ne=v[O];if(h(ne)){const oe=T(M),ae=i.get(ne).__webglTexture;t.bindTexture(oe,ae),y(oe),t.unbindTexture()}}}const dt=[],pt=[];function D(M){if(M.samples>0){if(Oe(M)===!1){const v=M.textures,O=M.width,Z=M.height;let ne=n.COLOR_BUFFER_BIT;const oe=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=i.get(M),$=v.length>1;if($)for(let ge=0;ge<v.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const J=M.texture.mipmaps;J&&J.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let ge=0;ge<v.length;ge++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),$){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ae.__webglColorRenderbuffer[ge]);const ye=i.get(v[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ye,0)}n.blitFramebuffer(0,0,O,Z,0,0,O,Z,ne,n.NEAREST),c===!0&&(dt.length=0,pt.length=0,dt.push(n.COLOR_ATTACHMENT0+ge),M.depthBuffer&&M.resolveDepthBuffer===!1&&(dt.push(oe),pt.push(oe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,pt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),$)for(let ge=0;ge<v.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,ae.__webglColorRenderbuffer[ge]);const ye=i.get(v[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&c){const v=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function xt(M){return Math.min(r.maxSamples,M.samples)}function Oe(M){const v=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Qe(M){const v=o.render.frame;f.get(M)!==v&&(f.set(M,v),M.update())}function pe(M,v){const O=M.colorSpace,Z=M.format,ne=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||O!==ss&&O!==Xn&&($e.getTransfer(O)===rt?(Z!==en||ne!==qt)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",O)),v}function ht(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(l.width=M.naturalWidth||M.width,l.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(l.width=M.displayWidth,l.height=M.displayHeight):(l.width=M.width,l.height=M.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=Y,this.getTextureUnits=K,this.setTextureUnits=L,this.setTexture2D=te,this.setTexture2DArray=ie,this.setTexture3D=q,this.setTextureCube=be,this.rebindTextures=at,this.setupRenderTarget=He,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=Oe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function yb(n,e){function t(i,r=Xn){let s;const o=$e.getTransfer(r);if(i===qt)return n.UNSIGNED_BYTE;if(i===ma)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ga)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Nd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Dd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Cd)return n.BYTE;if(i===Pd)return n.SHORT;if(i===or)return n.UNSIGNED_SHORT;if(i===pa)return n.INT;if(i===mn)return n.UNSIGNED_INT;if(i===dn)return n.FLOAT;if(i===Cn)return n.HALF_FLOAT;if(i===Ld)return n.ALPHA;if(i===Id)return n.RGB;if(i===en)return n.RGBA;if(i===Pn)return n.DEPTH_COMPONENT;if(i===di)return n.DEPTH_STENCIL;if(i===Ud)return n.RED;if(i===xa)return n.RED_INTEGER;if(i===hi)return n.RG;if(i===va)return n.RG_INTEGER;if(i===_a)return n.RGBA_INTEGER;if(i===Kr||i===Zr||i===Jr||i===Qr)if(o===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Kr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Zr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Jr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Qr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Kr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Zr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Jr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Qr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===wo||i===To||i===Ao||i===Ro)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===wo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===To)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ao)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ro)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Co||i===Po||i===No||i===Do||i===Lo||i===is||i===Io)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Co||i===Po)return o===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===No)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Do)return s.COMPRESSED_R11_EAC;if(i===Lo)return s.COMPRESSED_SIGNED_R11_EAC;if(i===is)return s.COMPRESSED_RG11_EAC;if(i===Io)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Uo||i===Fo||i===Oo||i===Bo||i===ko||i===zo||i===Go||i===Vo||i===Ho||i===Wo||i===jo||i===Xo||i===qo||i===Yo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Uo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Oo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ko)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Go)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ho)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===jo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$o||i===Ko||i===Zo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===$o)return o===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ko)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jo||i===Qo||i===rs||i===ea)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Jo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Qo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===rs)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ea)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ar?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Mb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Eb=`
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

}`;class wb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new jd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new tn({vertexShader:Mb,fragmentShader:Eb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gn(new ur(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Tb extends xi{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,f=null,d=null,u=null,m=null,x=null;const b=typeof XRWebGLBinding<"u",p=new wb,h={},y=t.getContextAttributes();let T=null,E=null;const C=[],w=[],R=new it;let g=null;const A=new Jt;A.viewport=new St;const F=new Jt;F.viewport=new St;const P=[A,F],z=new Fg;let Y=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let de=C[X];return de===void 0&&(de=new ks,C[X]=de),de.getTargetRaySpace()},this.getControllerGrip=function(X){let de=C[X];return de===void 0&&(de=new ks,C[X]=de),de.getGripSpace()},this.getHand=function(X){let de=C[X];return de===void 0&&(de=new ks,C[X]=de),de.getHandSpace()};function L(X){const de=w.indexOf(X.inputSource);if(de===-1)return;const ee=C[de];ee!==void 0&&(ee.update(X.inputSource,X.frame,l||o),ee.dispatchEvent({type:X.type,data:X.inputSource}))}function I(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",B);for(let X=0;X<C.length;X++){const de=w[X];de!==null&&(w[X]=null,C[X].disconnect(de))}Y=null,K=null,p.reset();for(const X in h)delete h[X];e.setRenderTarget(T),m=null,u=null,d=null,r=null,E=null,he.stop(),i.isPresenting=!1,e.setPixelRatio(g),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d===null&&b&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",I),r.addEventListener("inputsourceschange",B),y.xrCompatible!==!0&&await t.makeXRCompatible(),g=e.getPixelRatio(),e.getSize(R),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,me=null,Fe=null;y.depth&&(Fe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=y.stencil?di:Pn,me=y.stencil?ar:mn);const Ne={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Ne),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),E=new hn(u.textureWidth,u.textureHeight,{format:en,type:qt,depthTexture:new Wi(u.textureWidth,u.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ee={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new hn(m.framebufferWidth,m.framebufferHeight,{format:en,type:qt,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),he.setContext(r),he.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function B(X){for(let de=0;de<X.removed.length;de++){const ee=X.removed[de],me=w.indexOf(ee);me>=0&&(w[me]=null,C[me].disconnect(ee))}for(let de=0;de<X.added.length;de++){const ee=X.added[de];let me=w.indexOf(ee);if(me===-1){for(let Ne=0;Ne<C.length;Ne++)if(Ne>=w.length){w.push(ee),me=Ne;break}else if(w[Ne]===null){w[Ne]=ee,me=Ne;break}if(me===-1)break}const Fe=C[me];Fe&&Fe.connect(ee)}}const te=new W,ie=new W;function q(X,de,ee){te.setFromMatrixPosition(de.matrixWorld),ie.setFromMatrixPosition(ee.matrixWorld);const me=te.distanceTo(ie),Fe=de.projectionMatrix.elements,Ne=ee.projectionMatrix.elements,Ye=Fe[14]/(Fe[10]-1),Ge=Fe[14]/(Fe[10]+1),qe=(Fe[9]+1)/Fe[5],at=(Fe[9]-1)/Fe[5],He=(Fe[8]-1)/Fe[0],ft=(Ne[8]+1)/Ne[0],dt=Ye*He,pt=Ye*ft,D=me/(-He+ft),xt=D*-He;if(de.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(xt),X.translateZ(D),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Fe[10]===-1)X.projectionMatrix.copy(de.projectionMatrix),X.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Oe=Ye+D,Qe=Ge+D,pe=dt-xt,ht=pt+(me-xt),M=qe*Ge/Qe*Oe,v=at*Ge/Qe*Oe;X.projectionMatrix.makePerspective(pe,ht,M,v,Oe,Qe),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function be(X,de){de===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(de.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let de=X.near,ee=X.far;p.texture!==null&&(p.depthNear>0&&(de=p.depthNear),p.depthFar>0&&(ee=p.depthFar)),z.near=F.near=A.near=de,z.far=F.far=A.far=ee,(Y!==z.near||K!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),Y=z.near,K=z.far),z.layers.mask=X.layers.mask|6,A.layers.mask=z.layers.mask&-5,F.layers.mask=z.layers.mask&-3;const me=X.parent,Fe=z.cameras;be(z,me);for(let Ne=0;Ne<Fe.length;Ne++)be(Fe[Ne],me);Fe.length===2?q(z,A,F):z.projectionMatrix.copy(A.projectionMatrix),Ae(X,z,me)};function Ae(X,de,ee){ee===null?X.matrix.copy(de.matrixWorld):(X.matrix.copy(ee.matrixWorld),X.matrix.invert(),X.matrix.multiply(de.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(de.projectionMatrix),X.projectionMatrixInverse.copy(de.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=na*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&m===null))return c},this.setFoveation=function(X){c=X,u!==null&&(u.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(z)},this.getCameraTexture=function(X){return h[X]};let Se=null;function Ie(X,de){if(f=de.getViewerPose(l||o),x=de,f!==null){const ee=f.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let me=!1;ee.length!==z.cameras.length&&(z.cameras.length=0,me=!0);for(let Ge=0;Ge<ee.length;Ge++){const qe=ee[Ge];let at=null;if(m!==null)at=m.getViewport(qe);else{const ft=d.getViewSubImage(u,qe);at=ft.viewport,Ge===0&&(e.setRenderTargetTextures(E,ft.colorTexture,ft.depthStencilTexture),e.setRenderTarget(E))}let He=P[Ge];He===void 0&&(He=new Jt,He.layers.enable(Ge),He.viewport=new St,P[Ge]=He),He.matrix.fromArray(qe.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(qe.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(at.x,at.y,at.width,at.height),Ge===0&&(z.matrix.copy(He.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),me===!0&&z.cameras.push(He)}const Fe=r.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){d=i.getBinding();const Ge=d.getDepthInformation(ee[0]);Ge&&Ge.isValid&&Ge.texture&&p.init(Ge,r.renderState)}if(Fe&&Fe.includes("camera-access")&&b){e.state.unbindTexture(),d=i.getBinding();for(let Ge=0;Ge<ee.length;Ge++){const qe=ee[Ge].camera;if(qe){let at=h[qe];at||(at=new jd,h[qe]=at);const He=d.getCameraImage(qe);at.sourceTexture=He}}}}for(let ee=0;ee<C.length;ee++){const me=w[ee],Fe=C[ee];me!==null&&Fe!==void 0&&Fe.update(me,de,l||o)}Se&&Se(X,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),x=null}const he=new Yd;he.setAnimationLoop(Ie),this.setAnimationLoop=function(X){Se=X},this.dispose=function(){}}}const Ab=new wt,tu=new ze;tu.set(-1,0,0,0,1,0,0,0,1);function Rb(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,Xd(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,y,T,E){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(p,h):h.isMeshLambertMaterial?(s(p,h),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(p,h),d(p,h)):h.isMeshPhongMaterial?(s(p,h),f(p,h),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(p,h),u(p,h),h.isMeshPhysicalMaterial&&m(p,h,E)):h.isMeshMatcapMaterial?(s(p,h),x(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),b(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?c(p,h,y,T):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Bt&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Bt&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const y=e.get(h),T=y.envMap,E=y.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(Ab.makeRotationFromEuler(E)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(tu),p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function c(p,h,y,T){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*y,p.scale.value=T*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function f(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function u(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,y){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Bt&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,h){h.matcap&&(p.matcap.value=h.matcap)}function b(p,h){const y=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Cb(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,T){const E=T.program;i.uniformBlockBinding(y,E)}function l(y,T){let E=r[y.id];E===void 0&&(x(y),E=f(y),r[y.id]=E,y.addEventListener("dispose",p));const C=T.program;i.updateUBOMapping(y,C);const w=e.render.frame;s[y.id]!==w&&(u(y),s[y.id]=w)}function f(y){const T=d();y.__bindingPointIndex=T;const E=n.createBuffer(),C=y.__size,w=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,C,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,E),E}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const T=r[y.id],E=y.uniforms,C=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let w=0,R=E.length;w<R;w++){const g=Array.isArray(E[w])?E[w]:[E[w]];for(let A=0,F=g.length;A<F;A++){const P=g[A];if(m(P,w,A,C)===!0){const z=P.__offset,Y=Array.isArray(P.value)?P.value:[P.value];let K=0;for(let L=0;L<Y.length;L++){const I=Y[L],B=b(I);typeof I=="number"||typeof I=="boolean"?(P.__data[0]=I,n.bufferSubData(n.UNIFORM_BUFFER,z+K,P.__data)):I.isMatrix3?(P.__data[0]=I.elements[0],P.__data[1]=I.elements[1],P.__data[2]=I.elements[2],P.__data[3]=0,P.__data[4]=I.elements[3],P.__data[5]=I.elements[4],P.__data[6]=I.elements[5],P.__data[7]=0,P.__data[8]=I.elements[6],P.__data[9]=I.elements[7],P.__data[10]=I.elements[8],P.__data[11]=0):ArrayBuffer.isView(I)?P.__data.set(new I.constructor(I.buffer,I.byteOffset,P.__data.length)):(I.toArray(P.__data,K),K+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(y,T,E,C){const w=y.value,R=T+"_"+E;if(C[R]===void 0)return typeof w=="number"||typeof w=="boolean"?C[R]=w:ArrayBuffer.isView(w)?C[R]=w.slice():C[R]=w.clone(),!0;{const g=C[R];if(typeof w=="number"||typeof w=="boolean"){if(g!==w)return C[R]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(g.equals(w)===!1)return g.copy(w),!0}}return!1}function x(y){const T=y.uniforms;let E=0;const C=16;for(let R=0,g=T.length;R<g;R++){const A=Array.isArray(T[R])?T[R]:[T[R]];for(let F=0,P=A.length;F<P;F++){const z=A[F],Y=Array.isArray(z.value)?z.value:[z.value];for(let K=0,L=Y.length;K<L;K++){const I=Y[K],B=b(I),te=E%C,ie=te%B.boundary,q=te+ie;E+=ie,q!==0&&C-q<B.storage&&(E+=C-q),z.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=E,E+=B.storage}}}const w=E%C;return w>0&&(E+=C-w),y.__size=E,y.__cache={},this}function b(y){const T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(T.boundary=16,T.storage=y.byteLength):Be("WebGLRenderer: Unsupported uniform value type.",y),T}function p(y){const T=y.target;T.removeEventListener("dispose",p);const E=o.indexOf(T.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function h(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:c,update:l,dispose:h}}const Pb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ln=null;function Nb(){return ln===null&&(ln=new Mg(Pb,16,16,hi,Cn),ln.name="DFG_LUT",ln.minFilter=Lt,ln.magFilter=Lt,ln.wrapS=wn,ln.wrapT=wn,ln.generateMipmaps=!1,ln.needsUpdate=!0),ln}class Db{constructor(e={}){const{canvas:t=Qm(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:m=qt}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=o;const b=m,p=new Set([_a,va,xa]),h=new Set([qt,mn,or,ar,ma,ga]),y=new Uint32Array(4),T=new Int32Array(4),E=new W;let C=null,w=null;const R=[],g=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let P=!1,z=null;this._outputColorSpace=Xt;let Y=0,K=0,L=null,I=-1,B=null;const te=new St,ie=new St;let q=null;const be=new ot(0);let Ae=0,Se=t.width,Ie=t.height,he=1,X=null,de=null;const ee=new St(0,0,Se,Ie),me=new St(0,0,Se,Ie);let Fe=!1;const Ne=new Hd;let Ye=!1,Ge=!1;const qe=new wt,at=new W,He=new St,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function pt(){return L===null?he:1}let D=i;function xt(S,U){return t.getContext(S,U)}try{const S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ha}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),D===null){const U="webgl2";if(D=xt(U,S),D===null)throw xt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw nt("WebGLRenderer: "+S.message),S}let Oe,Qe,pe,ht,M,v,O,Z,ne,oe,ae,$,J,ge,ye,ue,se,Ue,ke,Ze,N,le,G;function ce(){Oe=new Nv(D),Oe.init(),N=new yb(D,Oe),Qe=new Mv(D,Oe,e,N),pe=new bb(D,Oe),Qe.reversedDepthBuffer&&u&&pe.buffers.depth.setReversed(!0),ht=new Iv(D),M=new ob,v=new Sb(D,Oe,pe,M,Qe,N,ht),O=new Pv(F),Z=new Bg(D),le=new Sv(D,Z),ne=new Dv(D,Z,ht,le),oe=new Fv(D,ne,Z,le,ht),Ue=new Uv(D,Qe,v),ye=new Ev(M),ae=new sb(F,O,Oe,Qe,le,ye),$=new Rb(F,M),J=new lb,ge=new pb(Oe),se=new bv(F,O,pe,oe,x,c),ue=new _b(F,oe,Qe),G=new Cb(D,ht,Qe,pe),ke=new yv(D,Oe,ht),Ze=new Lv(D,Oe,ht),ht.programs=ae.programs,F.capabilities=Qe,F.extensions=Oe,F.properties=M,F.renderLists=J,F.shadowMap=ue,F.state=pe,F.info=ht}ce(),b!==qt&&(A=new Bv(b,t.width,t.height,r,s));const re=new Tb(F,D);this.xr=re,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=Oe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Oe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(S){S!==void 0&&(he=S,this.setSize(Se,Ie,!1))},this.getSize=function(S){return S.set(Se,Ie)},this.setSize=function(S,U,j=!0){if(re.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=S,Ie=U,t.width=Math.floor(S*he),t.height=Math.floor(U*he),j===!0&&(t.style.width=S+"px",t.style.height=U+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(Se*he,Ie*he).floor()},this.setDrawingBufferSize=function(S,U,j){Se=S,Ie=U,he=j,t.width=Math.floor(S*j),t.height=Math.floor(U*j),this.setViewport(0,0,S,U)},this.setEffects=function(S){if(b===qt){nt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let U=0;U<S.length;U++)if(S[U].isOutputPass===!0){Be("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(te)},this.getViewport=function(S){return S.copy(ee)},this.setViewport=function(S,U,j,V){S.isVector4?ee.set(S.x,S.y,S.z,S.w):ee.set(S,U,j,V),pe.viewport(te.copy(ee).multiplyScalar(he).round())},this.getScissor=function(S){return S.copy(me)},this.setScissor=function(S,U,j,V){S.isVector4?me.set(S.x,S.y,S.z,S.w):me.set(S,U,j,V),pe.scissor(ie.copy(me).multiplyScalar(he).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(S){pe.setScissorTest(Fe=S)},this.setOpaqueSort=function(S){X=S},this.setTransparentSort=function(S){de=S},this.getClearColor=function(S){return S.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,j=!0){let V=0;if(S){let H=!1;if(L!==null){const _e=L.texture.format;H=p.has(_e)}if(H){const _e=L.texture.type,we=h.has(_e),ve=se.getClearColor(),Pe=se.getClearAlpha(),De=ve.r,Ve=ve.g,je=ve.b;we?(y[0]=De,y[1]=Ve,y[2]=je,y[3]=Pe,D.clearBufferuiv(D.COLOR,0,y)):(T[0]=De,T[1]=Ve,T[2]=je,T[3]=Pe,D.clearBufferiv(D.COLOR,0,T))}else V|=D.COLOR_BUFFER_BIT}U&&(V|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),z=S},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),se.dispose(),J.dispose(),ge.dispose(),M.dispose(),O.dispose(),oe.dispose(),le.dispose(),G.dispose(),ae.dispose(),re.dispose(),re.removeEventListener("sessionstart",xs),re.removeEventListener("sessionend",Pa),Qn.stop()};function Q(S){S.preventDefault(),El("WebGLRenderer: Context Lost."),P=!0}function Re(){El("WebGLRenderer: Context Restored."),P=!1;const S=ht.autoReset,U=ue.enabled,j=ue.autoUpdate,V=ue.needsUpdate,H=ue.type;ce(),ht.autoReset=S,ue.enabled=U,ue.autoUpdate=j,ue.needsUpdate=V,ue.type=H}function Ce(S){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Je(S){const U=S.target;U.removeEventListener("dispose",Je),et(U)}function et(S){vt(S),M.remove(S)}function vt(S){const U=M.get(S).programs;U!==void 0&&(U.forEach(function(j){ae.releaseProgram(j)}),S.isShaderMaterial&&ae.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,j,V,H,_e){U===null&&(U=ft);const we=H.isMesh&&H.matrixWorld.determinant()<0,ve=iu(S,U,j,V,H);pe.setMaterial(V,we);let Pe=j.index,De=1;if(V.wireframe===!0){if(Pe=ne.getWireframeAttribute(j),Pe===void 0)return;De=2}const Ve=j.drawRange,je=j.attributes.position;let Le=Ve.start*De,st=(Ve.start+Ve.count)*De;_e!==null&&(Le=Math.max(Le,_e.start*De),st=Math.min(st,(_e.start+_e.count)*De)),Pe!==null?(Le=Math.max(Le,0),st=Math.min(st,Pe.count)):je!=null&&(Le=Math.max(Le,0),st=Math.min(st,je.count));const _t=st-Le;if(_t<0||_t===1/0)return;le.setup(H,V,ve,j,Pe);let gt,lt=ke;if(Pe!==null&&(gt=Z.get(Pe),lt=Ze,lt.setIndex(gt)),H.isMesh)V.wireframe===!0?(pe.setLineWidth(V.wireframeLinewidth*pt()),lt.setMode(D.LINES)):lt.setMode(D.TRIANGLES);else if(H.isLine){let Pt=V.linewidth;Pt===void 0&&(Pt=1),pe.setLineWidth(Pt*pt()),H.isLineSegments?lt.setMode(D.LINES):H.isLineLoop?lt.setMode(D.LINE_LOOP):lt.setMode(D.LINE_STRIP)}else H.isPoints?lt.setMode(D.POINTS):H.isSprite&&lt.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(Oe.get("WEBGL_multi_draw"))lt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Pt=H._multiDrawStarts,Me=H._multiDrawCounts,kt=H._multiDrawCount,tt=Pe?Z.get(Pe).bytesPerElement:1,Wt=M.get(V).currentProgram.getUniforms();for(let rn=0;rn<kt;rn++)Wt.setValue(D,"_gl_DrawID",rn),lt.render(Pt[rn]/tt,Me[rn])}else if(H.isInstancedMesh)lt.renderInstances(Le,_t,H.count);else if(j.isInstancedBufferGeometry){const Pt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Me=Math.min(j.instanceCount,Pt);lt.renderInstances(Le,_t,Me)}else lt.render(Le,_t)};function mt(S,U,j){S.transparent===!0&&S.side===En&&S.forceSinglePass===!1?(S.side=Bt,S.needsUpdate=!0,hr(S,U,j),S.side=Kn,S.needsUpdate=!0,hr(S,U,j),S.side=En):hr(S,U,j)}this.compile=function(S,U,j=null){j===null&&(j=S),w=ge.get(j),w.init(U),g.push(w),j.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),S!==j&&S.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),w.setupLights();const V=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const _e=H.material;if(_e)if(Array.isArray(_e))for(let we=0;we<_e.length;we++){const ve=_e[we];mt(ve,j,H),V.add(ve)}else mt(_e,j,H),V.add(_e)}),w=g.pop(),V},this.compileAsync=function(S,U,j=null){const V=this.compile(S,U,j);return new Promise(H=>{function _e(){if(V.forEach(function(we){M.get(we).currentProgram.isReady()&&V.delete(we)}),V.size===0){H(S);return}setTimeout(_e,10)}Oe.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let vi=null;function xn(S){vi&&vi(S)}function xs(){Qn.stop()}function Pa(){Qn.start()}const Qn=new Yd;Qn.setAnimationLoop(xn),typeof self<"u"&&Qn.setContext(self),this.setAnimationLoop=function(S){vi=S,re.setAnimationLoop(S),S===null?Qn.stop():Qn.start()},re.addEventListener("sessionstart",xs),re.addEventListener("sessionend",Pa),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;z!==null&&z.renderStart(S,U);const j=re.enabled===!0&&re.isPresenting===!0,V=A!==null&&(L===null||j)&&A.begin(F,L);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(U),U=re.getCamera()),S.isScene===!0&&S.onBeforeRender(F,S,U,L),w=ge.get(S,g.length),w.init(U),w.state.textureUnits=v.getTextureUnits(),g.push(w),qe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ne.setFromProjectionMatrix(qe,un,U.reversedDepth),Ge=this.localClippingEnabled,Ye=ye.init(this.clippingPlanes,Ge),C=J.get(S,R.length),C.init(),R.push(C),re.enabled===!0&&re.isPresenting===!0){const we=F.xr.getDepthSensingMesh();we!==null&&vs(we,U,-1/0,F.sortObjects)}vs(S,U,0,F.sortObjects),C.finish(),F.sortObjects===!0&&C.sort(X,de),dt=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,dt&&se.addToRenderList(C,S),this.info.render.frame++,Ye===!0&&ye.beginShadows();const H=w.state.shadowsArray;if(ue.render(H,S,U),Ye===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&A.hasRenderPass())===!1){const we=C.opaque,ve=C.transmissive;if(w.setupLights(),U.isArrayCamera){const Pe=U.cameras;if(ve.length>0)for(let De=0,Ve=Pe.length;De<Ve;De++){const je=Pe[De];Da(we,ve,S,je)}dt&&se.render(S);for(let De=0,Ve=Pe.length;De<Ve;De++){const je=Pe[De];Na(C,S,je,je.viewport)}}else ve.length>0&&Da(we,ve,S,U),dt&&se.render(S),Na(C,S,U)}L!==null&&K===0&&(v.updateMultisampleRenderTarget(L),v.updateRenderTargetMipmap(L)),V&&A.end(F),S.isScene===!0&&S.onAfterRender(F,S,U),le.resetDefaultState(),I=-1,B=null,g.pop(),g.length>0?(w=g[g.length-1],v.setTextureUnits(w.state.textureUnits),Ye===!0&&ye.setGlobalState(F.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?C=R[R.length-1]:C=null,z!==null&&z.renderEnd()};function vs(S,U,j,V){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)j=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLightProbeGrid)w.pushLightProbeGrid(S);else if(S.isLight)w.pushLight(S),S.castShadow&&w.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Ne.intersectsSprite(S)){V&&He.setFromMatrixPosition(S.matrixWorld).applyMatrix4(qe);const we=oe.update(S),ve=S.material;ve.visible&&C.push(S,we,ve,j,He.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Ne.intersectsObject(S))){const we=oe.update(S),ve=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),He.copy(S.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),He.copy(we.boundingSphere.center)),He.applyMatrix4(S.matrixWorld).applyMatrix4(qe)),Array.isArray(ve)){const Pe=we.groups;for(let De=0,Ve=Pe.length;De<Ve;De++){const je=Pe[De],Le=ve[je.materialIndex];Le&&Le.visible&&C.push(S,we,Le,j,He.z,je)}}else ve.visible&&C.push(S,we,ve,j,He.z,null)}}const _e=S.children;for(let we=0,ve=_e.length;we<ve;we++)vs(_e[we],U,j,V)}function Na(S,U,j,V){const{opaque:H,transmissive:_e,transparent:we}=S;w.setupLightsView(j),Ye===!0&&ye.setGlobalState(F.clippingPlanes,j),V&&pe.viewport(te.copy(V)),H.length>0&&fr(H,U,j),_e.length>0&&fr(_e,U,j),we.length>0&&fr(we,U,j),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Da(S,U,j,V){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[V.id]===void 0){const Le=Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[V.id]=new hn(1,1,{generateMipmaps:!0,type:Le?Cn:qt,minFilter:ci,samples:Math.max(4,Qe.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace})}const _e=w.state.transmissionRenderTarget[V.id],we=V.viewport||te;_e.setSize(we.z*F.transmissionResolutionScale,we.w*F.transmissionResolutionScale);const ve=F.getRenderTarget(),Pe=F.getActiveCubeFace(),De=F.getActiveMipmapLevel();F.setRenderTarget(_e),F.getClearColor(be),Ae=F.getClearAlpha(),Ae<1&&F.setClearColor(16777215,.5),F.clear(),dt&&se.render(j);const Ve=F.toneMapping;F.toneMapping=fn;const je=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),w.setupLightsView(V),Ye===!0&&ye.setGlobalState(F.clippingPlanes,V),fr(S,j,V),v.updateMultisampleRenderTarget(_e),v.updateRenderTargetMipmap(_e),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let st=0,_t=U.length;st<_t;st++){const gt=U[st],{object:lt,geometry:Pt,material:Me,group:kt}=gt;if(Me.side===En&&lt.layers.test(V.layers)){const tt=Me.side;Me.side=Bt,Me.needsUpdate=!0,La(lt,j,V,Pt,Me,kt),Me.side=tt,Me.needsUpdate=!0,Le=!0}}Le===!0&&(v.updateMultisampleRenderTarget(_e),v.updateRenderTargetMipmap(_e))}F.setRenderTarget(ve,Pe,De),F.setClearColor(be,Ae),je!==void 0&&(V.viewport=je),F.toneMapping=Ve}function fr(S,U,j){const V=U.isScene===!0?U.overrideMaterial:null;for(let H=0,_e=S.length;H<_e;H++){const we=S[H],{object:ve,geometry:Pe,group:De}=we;let Ve=we.material;Ve.allowOverride===!0&&V!==null&&(Ve=V),ve.layers.test(j.layers)&&La(ve,U,j,Pe,Ve,De)}}function La(S,U,j,V,H,_e){S.onBeforeRender(F,U,j,V,H,_e),S.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(F,U,j,V,S,_e),H.transparent===!0&&H.side===En&&H.forceSinglePass===!1?(H.side=Bt,H.needsUpdate=!0,F.renderBufferDirect(j,U,V,H,S,_e),H.side=Kn,H.needsUpdate=!0,F.renderBufferDirect(j,U,V,H,S,_e),H.side=En):F.renderBufferDirect(j,U,V,H,S,_e),S.onAfterRender(F,U,j,V,H,_e)}function hr(S,U,j){U.isScene!==!0&&(U=ft);const V=M.get(S),H=w.state.lights,_e=w.state.shadowsArray,we=H.state.version,ve=ae.getParameters(S,H.state,_e,U,j,w.state.lightProbeGridArray),Pe=ae.getProgramCacheKey(ve);let De=V.programs;V.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?U.environment:null,V.fog=U.fog;const Ve=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;V.envMap=O.get(S.envMap||V.environment,Ve),V.envMapRotation=V.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,De===void 0&&(S.addEventListener("dispose",Je),De=new Map,V.programs=De);let je=De.get(Pe);if(je!==void 0){if(V.currentProgram===je&&V.lightsStateVersion===we)return Ua(S,ve),je}else ve.uniforms=ae.getUniforms(S),z!==null&&S.isNodeMaterial&&z.build(S,j,ve),S.onBeforeCompile(ve,F),je=ae.acquireProgram(ve,Pe),De.set(Pe,je),V.uniforms=ve.uniforms;const Le=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Le.clippingPlanes=ye.uniform),Ua(S,ve),V.needsLights=su(S),V.lightsStateVersion=we,V.needsLights&&(Le.ambientLightColor.value=H.state.ambient,Le.lightProbe.value=H.state.probe,Le.directionalLights.value=H.state.directional,Le.directionalLightShadows.value=H.state.directionalShadow,Le.spotLights.value=H.state.spot,Le.spotLightShadows.value=H.state.spotShadow,Le.rectAreaLights.value=H.state.rectArea,Le.ltc_1.value=H.state.rectAreaLTC1,Le.ltc_2.value=H.state.rectAreaLTC2,Le.pointLights.value=H.state.point,Le.pointLightShadows.value=H.state.pointShadow,Le.hemisphereLights.value=H.state.hemi,Le.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Le.spotLightMatrix.value=H.state.spotLightMatrix,Le.spotLightMap.value=H.state.spotLightMap,Le.pointShadowMatrix.value=H.state.pointShadowMatrix),V.lightProbeGrid=w.state.lightProbeGridArray.length>0,V.currentProgram=je,V.uniformsList=null,je}function Ia(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=es.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Ua(S,U){const j=M.get(S);j.outputColorSpace=U.outputColorSpace,j.batching=U.batching,j.batchingColor=U.batchingColor,j.instancing=U.instancing,j.instancingColor=U.instancingColor,j.instancingMorph=U.instancingMorph,j.skinning=U.skinning,j.morphTargets=U.morphTargets,j.morphNormals=U.morphNormals,j.morphColors=U.morphColors,j.morphTargetsCount=U.morphTargetsCount,j.numClippingPlanes=U.numClippingPlanes,j.numIntersection=U.numClipIntersection,j.vertexAlphas=U.vertexAlphas,j.vertexTangents=U.vertexTangents,j.toneMapping=U.toneMapping}function nu(S,U){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;E.setFromMatrixPosition(U.matrixWorld);for(let j=0,V=S.length;j<V;j++){const H=S[j];if(H.texture!==null&&H.boundingBox.containsPoint(E))return H}return null}function iu(S,U,j,V,H){U.isScene!==!0&&(U=ft),v.resetTextureUnits();const _e=U.fog,we=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?U.environment:null,ve=L===null?F.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:$e.workingColorSpace,Pe=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,De=O.get(V.envMap||we,Pe),Ve=V.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,je=!!j.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Le=!!j.morphAttributes.position,st=!!j.morphAttributes.normal,_t=!!j.morphAttributes.color;let gt=fn;V.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(gt=F.toneMapping);const lt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Pt=lt!==void 0?lt.length:0,Me=M.get(V),kt=w.state.lights;if(Ye===!0&&(Ge===!0||S!==B)){const ut=S===B&&V.id===I;ye.setState(V,S,ut)}let tt=!1;V.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==kt.state.version||Me.outputColorSpace!==ve||H.isBatchedMesh&&Me.batching===!1||!H.isBatchedMesh&&Me.batching===!0||H.isBatchedMesh&&Me.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Me.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Me.instancing===!1||!H.isInstancedMesh&&Me.instancing===!0||H.isSkinnedMesh&&Me.skinning===!1||!H.isSkinnedMesh&&Me.skinning===!0||H.isInstancedMesh&&Me.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Me.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Me.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Me.instancingMorph===!1&&H.morphTexture!==null||Me.envMap!==De||V.fog===!0&&Me.fog!==_e||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==ye.numPlanes||Me.numIntersection!==ye.numIntersection)||Me.vertexAlphas!==Ve||Me.vertexTangents!==je||Me.morphTargets!==Le||Me.morphNormals!==st||Me.morphColors!==_t||Me.toneMapping!==gt||Me.morphTargetsCount!==Pt||!!Me.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(tt=!0):(tt=!0,Me.__version=V.version);let Wt=Me.currentProgram;tt===!0&&(Wt=hr(V,U,H),z&&V.isNodeMaterial&&z.onUpdateProgram(V,Wt,Me));let rn=!1,Ln=!1,_i=!1;const ct=Wt.getUniforms(),bt=Me.uniforms;if(pe.useProgram(Wt.program)&&(rn=!0,Ln=!0,_i=!0),V.id!==I&&(I=V.id,Ln=!0),Me.needsLights){const ut=nu(w.state.lightProbeGridArray,H);Me.lightProbeGrid!==ut&&(Me.lightProbeGrid=ut,Ln=!0)}if(rn||B!==S){pe.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ct.setValue(D,"projectionMatrix",S.projectionMatrix),ct.setValue(D,"viewMatrix",S.matrixWorldInverse);const Un=ct.map.cameraPosition;Un!==void 0&&Un.setValue(D,at.setFromMatrixPosition(S.matrixWorld)),Qe.logarithmicDepthBuffer&&ct.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ct.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),B!==S&&(B=S,Ln=!0,_i=!0)}if(Me.needsLights&&(kt.state.directionalShadowMap.length>0&&ct.setValue(D,"directionalShadowMap",kt.state.directionalShadowMap,v),kt.state.spotShadowMap.length>0&&ct.setValue(D,"spotShadowMap",kt.state.spotShadowMap,v),kt.state.pointShadowMap.length>0&&ct.setValue(D,"pointShadowMap",kt.state.pointShadowMap,v)),H.isSkinnedMesh){ct.setOptional(D,H,"bindMatrix"),ct.setOptional(D,H,"bindMatrixInverse");const ut=H.skeleton;ut&&(ut.boneTexture===null&&ut.computeBoneTexture(),ct.setValue(D,"boneTexture",ut.boneTexture,v))}H.isBatchedMesh&&(ct.setOptional(D,H,"batchingTexture"),ct.setValue(D,"batchingTexture",H._matricesTexture,v),ct.setOptional(D,H,"batchingIdTexture"),ct.setValue(D,"batchingIdTexture",H._indirectTexture,v),ct.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&ct.setValue(D,"batchingColorTexture",H._colorsTexture,v));const In=j.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&Ue.update(H,j,Wt),(Ln||Me.receiveShadow!==H.receiveShadow)&&(Me.receiveShadow=H.receiveShadow,ct.setValue(D,"receiveShadow",H.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&U.environment!==null&&(bt.envMapIntensity.value=U.environmentIntensity),bt.dfgLUT!==void 0&&(bt.dfgLUT.value=Nb()),Ln){if(ct.setValue(D,"toneMappingExposure",F.toneMappingExposure),Me.needsLights&&ru(bt,_i),_e&&V.fog===!0&&$.refreshFogUniforms(bt,_e),$.refreshMaterialUniforms(bt,V,he,Ie,w.state.transmissionRenderTarget[S.id]),Me.needsLights&&Me.lightProbeGrid){const ut=Me.lightProbeGrid;bt.probesSH.value=ut.texture,bt.probesMin.value.copy(ut.boundingBox.min),bt.probesMax.value.copy(ut.boundingBox.max),bt.probesResolution.value.copy(ut.resolution)}es.upload(D,Ia(Me),bt,v)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(es.upload(D,Ia(Me),bt,v),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ct.setValue(D,"center",H.center),ct.setValue(D,"modelViewMatrix",H.modelViewMatrix),ct.setValue(D,"normalMatrix",H.normalMatrix),ct.setValue(D,"modelMatrix",H.matrixWorld),V.uniformsGroups!==void 0){const ut=V.uniformsGroups;for(let Un=0,bi=ut.length;Un<bi;Un++){const Fa=ut[Un];G.update(Fa,Wt),G.bind(Fa,Wt)}}return Wt}function ru(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function su(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(S,U,j){const V=M.get(S);V.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),M.get(S.texture).__webglTexture=U,M.get(S.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:j,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){const j=M.get(S);j.__webglFramebuffer=U,j.__useDefaultFramebuffer=U===void 0};const ou=D.createFramebuffer();this.setRenderTarget=function(S,U=0,j=0){L=S,Y=U,K=j;let V=null,H=!1,_e=!1;if(S){const ve=M.get(S);if(ve.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(D.FRAMEBUFFER,ve.__webglFramebuffer),te.copy(S.viewport),ie.copy(S.scissor),q=S.scissorTest,pe.viewport(te),pe.scissor(ie),pe.setScissorTest(q),I=-1;return}else if(ve.__webglFramebuffer===void 0)v.setupRenderTarget(S);else if(ve.__hasExternalTextures)v.rebindTextures(S,M.get(S.texture).__webglTexture,M.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ve=S.depthTexture;if(ve.__boundDepthTexture!==Ve){if(Ve!==null&&M.has(Ve)&&(S.width!==Ve.image.width||S.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");v.setupDepthRenderbuffer(S)}}const Pe=S.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(_e=!0);const De=M.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(De[U])?V=De[U][j]:V=De[U],H=!0):S.samples>0&&v.useMultisampledRTT(S)===!1?V=M.get(S).__webglMultisampledFramebuffer:Array.isArray(De)?V=De[j]:V=De,te.copy(S.viewport),ie.copy(S.scissor),q=S.scissorTest}else te.copy(ee).multiplyScalar(he).floor(),ie.copy(me).multiplyScalar(he).floor(),q=Fe;if(j!==0&&(V=ou),pe.bindFramebuffer(D.FRAMEBUFFER,V)&&pe.drawBuffers(S,V),pe.viewport(te),pe.scissor(ie),pe.setScissorTest(q),H){const ve=M.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,ve.__webglTexture,j)}else if(_e){const ve=U;for(let Pe=0;Pe<S.textures.length;Pe++){const De=M.get(S.textures[Pe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Pe,De.__webglTexture,j,ve)}}else if(S!==null&&j!==0){const ve=M.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ve.__webglTexture,j)}I=-1},this.readRenderTargetPixels=function(S,U,j,V,H,_e,we,ve=0){if(!(S&&S.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=M.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&we!==void 0&&(Pe=Pe[we]),Pe){pe.bindFramebuffer(D.FRAMEBUFFER,Pe);try{const De=S.textures[ve],Ve=De.format,je=De.type;if(S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ve),!Qe.textureFormatReadable(Ve)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(je)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-V&&j>=0&&j<=S.height-H&&D.readPixels(U,j,V,H,N.convert(Ve),N.convert(je),_e)}finally{const De=L!==null?M.get(L).__webglFramebuffer:null;pe.bindFramebuffer(D.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(S,U,j,V,H,_e,we,ve=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=M.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&we!==void 0&&(Pe=Pe[we]),Pe)if(U>=0&&U<=S.width-V&&j>=0&&j<=S.height-H){pe.bindFramebuffer(D.FRAMEBUFFER,Pe);const De=S.textures[ve],Ve=De.format,je=De.type;if(S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ve),!Qe.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qe.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Le=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Le),D.bufferData(D.PIXEL_PACK_BUFFER,_e.byteLength,D.STREAM_READ),D.readPixels(U,j,V,H,N.convert(Ve),N.convert(je),0);const st=L!==null?M.get(L).__webglFramebuffer:null;pe.bindFramebuffer(D.FRAMEBUFFER,st);const _t=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await eg(D,_t,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Le),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,_e),D.deleteBuffer(Le),D.deleteSync(_t),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,j=0){const V=Math.pow(2,-j),H=Math.floor(S.image.width*V),_e=Math.floor(S.image.height*V),we=U!==null?U.x:0,ve=U!==null?U.y:0;v.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,j,0,0,we,ve,H,_e),pe.unbindTexture()};const au=D.createFramebuffer(),lu=D.createFramebuffer();this.copyTextureToTexture=function(S,U,j=null,V=null,H=0,_e=0){let we,ve,Pe,De,Ve,je,Le,st,_t;const gt=S.isCompressedTexture?S.mipmaps[_e]:S.image;if(j!==null)we=j.max.x-j.min.x,ve=j.max.y-j.min.y,Pe=j.isBox3?j.max.z-j.min.z:1,De=j.min.x,Ve=j.min.y,je=j.isBox3?j.min.z:0;else{const bt=Math.pow(2,-H);we=Math.floor(gt.width*bt),ve=Math.floor(gt.height*bt),S.isDataArrayTexture?Pe=gt.depth:S.isData3DTexture?Pe=Math.floor(gt.depth*bt):Pe=1,De=0,Ve=0,je=0}V!==null?(Le=V.x,st=V.y,_t=V.z):(Le=0,st=0,_t=0);const lt=N.convert(U.format),Pt=N.convert(U.type);let Me;U.isData3DTexture?(v.setTexture3D(U,0),Me=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(v.setTexture2DArray(U,0),Me=D.TEXTURE_2D_ARRAY):(v.setTexture2D(U,0),Me=D.TEXTURE_2D),pe.activeTexture(D.TEXTURE0),pe.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),pe.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),pe.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const kt=pe.getParameter(D.UNPACK_ROW_LENGTH),tt=pe.getParameter(D.UNPACK_IMAGE_HEIGHT),Wt=pe.getParameter(D.UNPACK_SKIP_PIXELS),rn=pe.getParameter(D.UNPACK_SKIP_ROWS),Ln=pe.getParameter(D.UNPACK_SKIP_IMAGES);pe.pixelStorei(D.UNPACK_ROW_LENGTH,gt.width),pe.pixelStorei(D.UNPACK_IMAGE_HEIGHT,gt.height),pe.pixelStorei(D.UNPACK_SKIP_PIXELS,De),pe.pixelStorei(D.UNPACK_SKIP_ROWS,Ve),pe.pixelStorei(D.UNPACK_SKIP_IMAGES,je);const _i=S.isDataArrayTexture||S.isData3DTexture,ct=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){const bt=M.get(S),In=M.get(U),ut=M.get(bt.__renderTarget),Un=M.get(In.__renderTarget);pe.bindFramebuffer(D.READ_FRAMEBUFFER,ut.__webglFramebuffer),pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,Un.__webglFramebuffer);for(let bi=0;bi<Pe;bi++)_i&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,M.get(S).__webglTexture,H,je+bi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,M.get(U).__webglTexture,_e,_t+bi)),D.blitFramebuffer(De,Ve,we,ve,Le,st,we,ve,D.DEPTH_BUFFER_BIT,D.NEAREST);pe.bindFramebuffer(D.READ_FRAMEBUFFER,null),pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(H!==0||S.isRenderTargetTexture||M.has(S)){const bt=M.get(S),In=M.get(U);pe.bindFramebuffer(D.READ_FRAMEBUFFER,au),pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,lu);for(let ut=0;ut<Pe;ut++)_i?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,bt.__webglTexture,H,je+ut):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,bt.__webglTexture,H),ct?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,In.__webglTexture,_e,_t+ut):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,In.__webglTexture,_e),H!==0?D.blitFramebuffer(De,Ve,we,ve,Le,st,we,ve,D.COLOR_BUFFER_BIT,D.NEAREST):ct?D.copyTexSubImage3D(Me,_e,Le,st,_t+ut,De,Ve,we,ve):D.copyTexSubImage2D(Me,_e,Le,st,De,Ve,we,ve);pe.bindFramebuffer(D.READ_FRAMEBUFFER,null),pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ct?S.isDataTexture||S.isData3DTexture?D.texSubImage3D(Me,_e,Le,st,_t,we,ve,Pe,lt,Pt,gt.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(Me,_e,Le,st,_t,we,ve,Pe,lt,gt.data):D.texSubImage3D(Me,_e,Le,st,_t,we,ve,Pe,lt,Pt,gt):S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,_e,Le,st,we,ve,lt,Pt,gt.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,_e,Le,st,gt.width,gt.height,lt,gt.data):D.texSubImage2D(D.TEXTURE_2D,_e,Le,st,we,ve,lt,Pt,gt);pe.pixelStorei(D.UNPACK_ROW_LENGTH,kt),pe.pixelStorei(D.UNPACK_IMAGE_HEIGHT,tt),pe.pixelStorei(D.UNPACK_SKIP_PIXELS,Wt),pe.pixelStorei(D.UNPACK_SKIP_ROWS,rn),pe.pixelStorei(D.UNPACK_SKIP_IMAGES,Ln),_e===0&&U.generateMipmaps&&D.generateMipmap(Me),pe.unbindTexture()},this.initRenderTarget=function(S){M.get(S).__webglFramebuffer===void 0&&v.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?v.setTextureCube(S,0):S.isData3DTexture?v.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?v.setTexture2DArray(S,0):v.setTexture2D(S,0),pe.unbindTexture()},this.resetState=function(){Y=0,K=0,L=null,pe.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}const Lb=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`,Ib=`
precision highp float;
varying vec2 vUv;
uniform float uTime;
uniform float uScroll;
uniform vec2 uMouse;
uniform vec2 uResolution;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) {
    v += a * noise(p);
    p = p * 2.03 + vec2(13.7, 7.1);
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 p = (vUv - 0.5) * vec2(uResolution.x / uResolution.y, 1.0);

  float t = uTime * 0.035;
  vec2 drift = vec2(t * 0.55 + uScroll * 0.9, -t * 0.4 + uScroll * 0.6);

  // double domain warp — the source of the smoke-like motion
  vec2 q = vec2(
    fbm(p * 1.3 + drift),
    fbm(p * 1.3 + vec2(5.2, 1.3) - drift * 0.8)
  );
  vec2 r = vec2(
    fbm(p * 1.3 + 1.9 * q + vec2(1.7, 9.2) + uMouse * 0.35),
    fbm(p * 1.3 + 1.9 * q + vec2(8.3, 2.8) - uMouse * 0.25)
  );
  float f = fbm(p * 1.5 + 2.1 * r);

  // brighter toward the edges, calm in the center where content lives
  float edge = smoothstep(0.25, 1.05, length(p));

  // palette: near-black canvas, deep teal bands, rare bright wisps.
  // scroll cools the teal toward blue-green as you descend.
  vec3 base = vec3(0.052, 0.056, 0.064);
  vec3 teal = mix(vec3(0.07, 0.34, 0.32), vec3(0.05, 0.24, 0.30), uScroll);
  vec3 glow = vec3(0.42, 0.76, 0.73);

  float band = smoothstep(0.38, 0.85, f);
  float wisp = smoothstep(0.62, 0.98, f + q.x * 0.22);

  vec3 col = base;
  col = mix(col, teal, band * (0.16 + 0.5 * edge));
  col += glow * wisp * (0.05 + 0.16 * edge);

  // gentle breathing tied to scroll position
  col *= 0.96 + 0.06 * sin(uScroll * 3.14159);

  gl_FragColor = vec4(col, 1.0);
}
`;function Ub(){const n=k.useRef(null);return k.useEffect(()=>{const e=n.current;if(!e)return;const t=typeof window<"u"&&window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,i=.6,r=new Db({antialias:!1,alpha:!1,powerPreference:"low-power"});r.setPixelRatio(1),r.domElement.style.width="100%",r.domElement.style.height="100%",e.appendChild(r.domElement);const s=new gg,o=new Ea(-1,1,1,-1,0,1),a={uTime:{value:0},uScroll:{value:0},uMouse:{value:new it(0,0)},uResolution:{value:new it(1,1)}},c=new tn({vertexShader:Lb,fragmentShader:Ib,uniforms:a,depthTest:!1,depthWrite:!1}),l=new ur(2,2);s.add(new gn(l,c));const f=()=>{const g=Math.max(e.clientWidth,1),A=Math.max(e.clientHeight,1);r.setSize(Math.round(g*i),Math.round(A*i),!1),a.uResolution.value.set(g,A)};f();const d=new ResizeObserver(()=>{f(),t&&r.render(s,o)});d.observe(e);const u={x:0,y:0,tx:0,ty:0},m=g=>{u.tx=g.clientX/window.innerWidth-.5,u.ty=g.clientY/window.innerHeight-.5};let x=0,b=0;const p=()=>{const g=document.documentElement.scrollHeight-window.innerHeight;b=g>0?Math.min(1,window.scrollY/g):0},h=g=>{b=g.detail?.progress??b};if(t)return a.uTime.value=40,r.render(s,o),()=>{d.disconnect(),l.dispose(),c.dispose(),r.dispose(),r.domElement.parentNode===e&&e.removeChild(r.domElement)};window.addEventListener("mousemove",m),window.addEventListener("scroll",p,{passive:!0}),window.addEventListener("lenis-scroll",h),p();let y=0;const T=performance.now(),E=g=>{y=requestAnimationFrame(E),u.x+=(u.tx-u.x)*.03,u.y+=(u.ty-u.y)*.03,x+=(b-x)*.06,a.uTime.value=(g-T)/1e3,a.uScroll.value=x,a.uMouse.value.set(u.x,u.y),r.render(s,o)},C=()=>{y||(y=requestAnimationFrame(E))},w=()=>{cancelAnimationFrame(y),y=0},R=()=>{document.hidden?w():C()};return document.addEventListener("visibilitychange",R),C(),()=>{w(),document.removeEventListener("visibilitychange",R),window.removeEventListener("mousemove",m),window.removeEventListener("scroll",p),window.removeEventListener("lenis-scroll",h),d.disconnect(),l.dispose(),c.dispose(),r.dispose(),r.domElement.parentNode===e&&e.removeChild(r.domElement)}},[]),_.jsxs(_.Fragment,{children:[_.jsx("div",{ref:n,"aria-hidden":!0,className:"pointer-events-none fixed inset-0 -z-20"}),_.jsx("div",{"aria-hidden":!0,className:"pointer-events-none fixed inset-0 -z-10",style:{background:"radial-gradient(ellipse at center, color-mix(in oklab, var(--background) 55%, transparent) 0%, color-mix(in oklab, var(--background) 22%, transparent) 45%, transparent 75%)"}})]})}function Fb(){return _.jsx("div",{"aria-hidden":!0,className:"noise-overlay"})}function kb(){return _.jsxs("main",{className:"relative min-h-screen text-foreground",children:[_.jsx(_m,{}),_.jsx(Fb,{}),_.jsx(Ub,{}),_.jsx(sh,{}),_.jsx(ah,{}),_.jsx(ch,{}),_.jsx(im,{}),_.jsx(rm,{}),_.jsx(om,{}),_.jsx(am,{}),_.jsx(lm,{}),_.jsx(cm,{}),_.jsx(ku,{theme:"dark",position:"bottom-right"})]})}export{kb as component};
