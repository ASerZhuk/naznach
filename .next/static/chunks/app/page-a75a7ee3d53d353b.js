(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{33571:function(e,t,n){Promise.resolve().then(n.bind(n,51131))},92119:function(e,t,n){"use strict";var o=n(57437);n(2265),t.default=e=>{let{children:t}=e;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:"max-w-[2520px] min-h-screen mx-auto xl:px-20 md:px-10 sm:px-2 px-4",children:t})})}},55418:function(e,t,n){"use strict";var o=n(2265);t.Z=()=>{let[e,t]=(0,o.useState)(null),[n,i]=(0,o.useState)(),[a,r]=(0,o.useState)(!0),[l,c]=(0,o.useState)(null);return(0,o.useEffect)(()=>{var e;let n=window.Telegram.WebApp;n.ready();let o=null===(e=n.initDataUnsafe)||void 0===e?void 0:e.user;if(o){t(o);let e="6874087551:AAHHCPMYy9JXgHVBavUdce_YjoXWgd0Fuew";fetch("https://api.telegram.org/bot".concat(e,"/getUserProfilePhotos?user_id=").concat(o.id)).then(e=>{if(!e.ok)throw Error("Ошибка получения данных от Telegram API");return e.json()}).then(t=>{var n,o;if((null==t?void 0:null===(o=t.result)||void 0===o?void 0:null===(n=o.photos)||void 0===n?void 0:n.length)>0){let n=t.result.photos[0][0].file_id;return fetch("https://api.telegram.org/bot".concat(e,"/getFile?file_id=").concat(n))}throw Error("Фотографии профиля не найдены")}).then(e=>{if(!e.ok)throw Error("Ошибка получения файла с Telegram API");return e.json()}).then(t=>{var n;if(null==t?void 0:null===(n=t.result)||void 0===n?void 0:n.file_path)i("https://api.telegram.org/file/bot".concat(e,"/").concat(t.result.file_path));else throw Error("Путь к файлу не найден")}).catch(e=>{console.error("Ошибка получения фото профиля:",e),c(e.message),i("/placeholder-image.jpg")}).finally(()=>r(!1))}else r(!1)},[]),{telegram_user:e,userPhoto:n,loading:a,error:l}}},51131:function(e,t,n){"use strict";let o;n.r(t),n.d(t,{default:function(){return A}});var i=n(57437),a=n(92119),r=n(2265),l=n(56800),c=n.n(l),s=n(38750),d=n(76415),u=n(89534);let m=80*Math.PI,p=e=>{let{dotClassName:t,style:n,hasCircleCls:o}=e;return r.createElement("circle",{className:c()("".concat(t,"-circle"),{["".concat(t,"-circle-bg")]:o}),r:40,cx:50,cy:50,strokeWidth:20,style:n})};var f=e=>{let{percent:t,prefixCls:n}=e,o="".concat(n,"-dot"),i="".concat(o,"-holder"),a="".concat(i,"-hidden"),[l,s]=r.useState(!1);(0,u.Z)(()=>{0!==t&&s(!0)},[0!==t]);let d=Math.max(Math.min(t,100),0);if(!l)return null;let f={strokeDashoffset:"".concat(m/4),strokeDasharray:"".concat(m*d/100," ").concat(m*(100-d)/100)};return r.createElement("span",{className:c()(i,"".concat(o,"-progress"),d<=0&&a)},r.createElement("svg",{viewBox:"0 0 ".concat(100," ").concat(100),role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":d},r.createElement(p,{dotClassName:o,hasCircleCls:!0}),r.createElement(p,{dotClassName:o,style:f})))};function h(e){let{prefixCls:t,percent:n=0}=e,o="".concat(t,"-dot"),i="".concat(o,"-holder"),a="".concat(i,"-hidden");return r.createElement(r.Fragment,null,r.createElement("span",{className:c()(i,n>0&&a)},r.createElement("span",{className:c()(o,"".concat(t,"-dot-spin"))},[1,2,3,4].map(e=>r.createElement("i",{className:"".concat(t,"-dot-item"),key:e})))),r.createElement(f,{prefixCls:t,percent:n}))}function g(e){let{prefixCls:t,indicator:n,percent:o}=e;return n&&r.isValidElement(n)?(0,d.Tm)(n,{className:c()(n.props.className,"".concat(t,"-dot")),percent:o}):r.createElement(h,{prefixCls:t,percent:o})}var v=n(37540),b=n(98170),y=n(2330),x=n(35413);let w=new v.E4("antSpinMove",{to:{opacity:1}}),S=new v.E4("antRotate",{to:{transform:"rotate(405deg)"}}),j=e=>{let{componentCls:t,calc:n}=e;return{[t]:Object.assign(Object.assign({},(0,b.Wf)(e)),{position:"absolute",display:"none",color:e.colorPrimary,fontSize:0,textAlign:"center",verticalAlign:"middle",opacity:0,transition:"transform ".concat(e.motionDurationSlow," ").concat(e.motionEaseInOutCirc),"&-spinning":{position:"relative",display:"inline-block",opacity:1},["".concat(t,"-text")]:{fontSize:e.fontSize,paddingTop:n(n(e.dotSize).sub(e.fontSize)).div(2).add(2).equal()},"&-fullscreen":{position:"fixed",width:"100vw",height:"100vh",backgroundColor:e.colorBgMask,zIndex:e.zIndexPopupBase,inset:0,display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",opacity:0,visibility:"hidden",transition:"all ".concat(e.motionDurationMid),"&-show":{opacity:1,visibility:"visible"},[t]:{["".concat(t,"-dot-holder")]:{color:e.colorWhite},["".concat(t,"-text")]:{color:e.colorTextLightSolid}}},"&-nested-loading":{position:"relative",["> div > ".concat(t)]:{position:"absolute",top:0,insetInlineStart:0,zIndex:4,display:"block",width:"100%",height:"100%",maxHeight:e.contentHeight,["".concat(t,"-dot")]:{position:"absolute",top:"50%",insetInlineStart:"50%",margin:n(e.dotSize).mul(-1).div(2).equal()},["".concat(t,"-text")]:{position:"absolute",top:"50%",width:"100%",textShadow:"0 1px 2px ".concat(e.colorBgContainer)},["&".concat(t,"-show-text ").concat(t,"-dot")]:{marginTop:n(e.dotSize).div(2).mul(-1).sub(10).equal()},"&-sm":{["".concat(t,"-dot")]:{margin:n(e.dotSizeSM).mul(-1).div(2).equal()},["".concat(t,"-text")]:{paddingTop:n(n(e.dotSizeSM).sub(e.fontSize)).div(2).add(2).equal()},["&".concat(t,"-show-text ").concat(t,"-dot")]:{marginTop:n(e.dotSizeSM).div(2).mul(-1).sub(10).equal()}},"&-lg":{["".concat(t,"-dot")]:{margin:n(e.dotSizeLG).mul(-1).div(2).equal()},["".concat(t,"-text")]:{paddingTop:n(n(e.dotSizeLG).sub(e.fontSize)).div(2).add(2).equal()},["&".concat(t,"-show-text ").concat(t,"-dot")]:{marginTop:n(e.dotSizeLG).div(2).mul(-1).sub(10).equal()}}},["".concat(t,"-container")]:{position:"relative",transition:"opacity ".concat(e.motionDurationSlow),"&::after":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,zIndex:10,width:"100%",height:"100%",background:e.colorBgContainer,opacity:0,transition:"all ".concat(e.motionDurationSlow),content:'""',pointerEvents:"none"}},["".concat(t,"-blur")]:{clear:"both",opacity:.5,userSelect:"none",pointerEvents:"none","&::after":{opacity:.4,pointerEvents:"auto"}}},"&-tip":{color:e.spinDotDefault},["".concat(t,"-dot-holder")]:{width:"1em",height:"1em",fontSize:e.dotSize,display:"inline-block",transition:"transform ".concat(e.motionDurationSlow," ease, opacity ").concat(e.motionDurationSlow," ease"),transformOrigin:"50% 50%",lineHeight:1,color:e.colorPrimary,"&-hidden":{transform:"scale(0.3)",opacity:0}},["".concat(t,"-dot-progress")]:{position:"absolute",top:"50%",transform:"translate(-50%, -50%)",insetInlineStart:"50%"},["".concat(t,"-dot")]:{position:"relative",display:"inline-block",fontSize:e.dotSize,width:"1em",height:"1em","&-item":{position:"absolute",display:"block",width:n(e.dotSize).sub(n(e.marginXXS).div(2)).div(2).equal(),height:n(e.dotSize).sub(n(e.marginXXS).div(2)).div(2).equal(),background:"currentColor",borderRadius:"100%",transform:"scale(0.75)",transformOrigin:"50% 50%",opacity:.3,animationName:w,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear",animationDirection:"alternate","&:nth-child(1)":{top:0,insetInlineStart:0,animationDelay:"0s"},"&:nth-child(2)":{top:0,insetInlineEnd:0,animationDelay:"0.4s"},"&:nth-child(3)":{insetInlineEnd:0,bottom:0,animationDelay:"0.8s"},"&:nth-child(4)":{bottom:0,insetInlineStart:0,animationDelay:"1.2s"}},"&-spin":{transform:"rotate(45deg)",animationName:S,animationDuration:"1.2s",animationIterationCount:"infinite",animationTimingFunction:"linear"},"&-circle":{strokeLinecap:"round",transition:["stroke-dashoffset","stroke-dasharray","stroke","stroke-width","opacity"].map(t=>"".concat(t," ").concat(e.motionDurationSlow," ease")).join(","),fillOpacity:0,stroke:"currentcolor"},"&-circle-bg":{stroke:e.colorFillSecondary}},["&-sm ".concat(t,"-dot")]:{"&, &-holder":{fontSize:e.dotSizeSM}},["&-sm ".concat(t,"-dot-holder")]:{i:{width:n(n(e.dotSizeSM).sub(n(e.marginXXS).div(2))).div(2).equal(),height:n(n(e.dotSizeSM).sub(n(e.marginXXS).div(2))).div(2).equal()}},["&-lg ".concat(t,"-dot")]:{"&, &-holder":{fontSize:e.dotSizeLG}},["&-lg ".concat(t,"-dot-holder")]:{i:{width:n(n(e.dotSizeLG).sub(e.marginXXS)).div(2).equal(),height:n(n(e.dotSizeLG).sub(e.marginXXS)).div(2).equal()}},["&".concat(t,"-show-text ").concat(t,"-text")]:{display:"block"}})}};var N=(0,y.I$)("Spin",e=>[j((0,x.IX)(e,{spinDotDefault:e.colorTextDescription}))],e=>{let{controlHeightLG:t,controlHeight:n}=e;return{contentHeight:400,dotSize:t/2,dotSizeSM:.35*t,dotSizeLG:n}});let O=[[30,.05],[70,.03],[96,.01]];var E=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,o=Object.getOwnPropertySymbols(e);i<o.length;i++)0>t.indexOf(o[i])&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(n[o[i]]=e[o[i]]);return n};let z=e=>{var t;let{prefixCls:n,spinning:i=!0,delay:a=0,className:l,rootClassName:d,size:u="default",tip:m,wrapperClassName:p,style:f,children:h,fullscreen:v=!1,indicator:b,percent:y}=e,x=E(e,["prefixCls","spinning","delay","className","rootClassName","size","tip","wrapperClassName","style","children","fullscreen","indicator","percent"]),{getPrefixCls:w,direction:S,spin:j}=r.useContext(s.E_),z=w("spin",n),[k,C,I]=N(z),[D,P]=r.useState(()=>i&&(!i||!a||!!isNaN(Number(a)))),M=function(e,t){let[n,o]=r.useState(0),i=r.useRef(),a="auto"===t;return r.useEffect(()=>(a&&e&&(o(0),i.current=setInterval(()=>{o(e=>{let t=100-e;for(let n=0;n<O.length;n+=1){let[o,i]=O[n];if(e<=o)return e+t*i}return e})},200)),()=>{clearInterval(i.current)}),[a,e]),a?n:t}(D,y);r.useEffect(()=>{if(i){var e;let t=function(e,t,n){var o,i=n||{},a=i.noTrailing,r=void 0!==a&&a,l=i.noLeading,c=void 0!==l&&l,s=i.debounceMode,d=void 0===s?void 0:s,u=!1,m=0;function p(){o&&clearTimeout(o)}function f(){for(var n=arguments.length,i=Array(n),a=0;a<n;a++)i[a]=arguments[a];var l=this,s=Date.now()-m;function f(){m=Date.now(),t.apply(l,i)}function h(){o=void 0}!u&&(c||!d||o||f(),p(),void 0===d&&s>e?c?(m=Date.now(),r||(o=setTimeout(d?h:f,e))):f():!0!==r&&(o=setTimeout(d?h:f,void 0===d?e-s:e)))}return f.cancel=function(e){var t=(e||{}).upcomingOnly;p(),u=!(void 0!==t&&t)},f}(a,()=>{P(!0)},{debounceMode:!1!==(void 0!==(e=({}).atBegin)&&e)});return t(),()=>{var e;null===(e=null==t?void 0:t.cancel)||void 0===e||e.call(t)}}P(!1)},[a,i]);let T=r.useMemo(()=>void 0!==h&&!v,[h,v]),_=c()(z,null==j?void 0:j.className,{["".concat(z,"-sm")]:"small"===u,["".concat(z,"-lg")]:"large"===u,["".concat(z,"-spinning")]:D,["".concat(z,"-show-text")]:!!m,["".concat(z,"-rtl")]:"rtl"===S},l,!v&&d,C,I),q=c()("".concat(z,"-container"),{["".concat(z,"-blur")]:D}),X=null!==(t=null!=b?b:null==j?void 0:j.indicator)&&void 0!==t?t:o,A=Object.assign(Object.assign({},null==j?void 0:j.style),f),B=r.createElement("div",Object.assign({},x,{style:A,className:_,"aria-live":"polite","aria-busy":D}),r.createElement(g,{prefixCls:z,indicator:X,percent:M}),m&&(T||v)?r.createElement("div",{className:"".concat(z,"-text")},m):null);return k(T?r.createElement("div",Object.assign({},x,{className:c()("".concat(z,"-nested-loading"),p,C,I)}),D&&r.createElement("div",{key:"loading"},B),r.createElement("div",{className:q,key:"container"},h)):v?r.createElement("div",{className:c()("".concat(z,"-fullscreen"),{["".concat(z,"-fullscreen-show")]:D},d,C,I)},B):B)};z.setDefaultIndicator=e=>{o=e};var k=n(9851),C=n(61572),I=n(16463),D=n(41942),P=n(85097),M=n(16356),T=n(55418);let _=e=>{let{onClick:t,icon:n,label:o}=e;return(0,i.jsx)("div",{className:"bg-white p-4 rounded-lg shadow flex justify-center items-center cursor-pointer",onClick:t,children:(0,i.jsxs)("div",{className:"flex flex-col justify-center items-center text-sm",children:[n,(0,i.jsx)("span",{children:o})]})})};var q=e=>{let{user:t}=e,{userPhoto:n,loading:o,error:a}=(0,T.Z)(),l=(0,I.useRouter)();return((0,r.useEffect)(()=>{let e=window.Telegram.WebApp;e.ready(),e.MainButton.hide(),e.BackButton.hide()},[]),t)?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"bg-white shadow-md rounded-lg flex items-center justify-between",children:[(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsx)("div",{className:"p-2",children:(0,i.jsx)(k.C,{src:n||"/placeholder-image.jpg",size:48})}),(0,i.jsx)("div",{className:"pl-2 font-medium",children:null==t?void 0:t.firstName})]}),(0,i.jsx)("div",{className:"pr-2",children:(0,i.jsx)(C.Z,{width:150,src:"/logo.svg",alt:"Логотип"})})]}),(null==t?void 0:t.isMaster)&&(0,i.jsxs)("div",{className:"bg-white shadow-md rounded-lg flex flex-col items-center justify-center mt-4 p-2 mx-4 text-sm",children:[(0,i.jsx)("span",{className:"font-semibold",children:"Запись клиента"}),(0,i.jsx)("span",{className:"pt-2",children:"Запишите клиента к себе на услугу"}),(0,i.jsx)("button",{onClick:()=>l.push("/profile_zapis/".concat(null==t?void 0:t.telegramId)),className:"bg-green-500 rounded-full px-12 py-3 mt-4 text-white text-sm",children:"Записать"})]}),(0,i.jsxs)("div",{className:"mt-4 mx-4 grid grid-cols-2 gap-4",children:[(null==t?void 0:t.isMaster)&&(0,i.jsx)(_,{onClick:()=>l.push("/grafik/".concat(null==t?void 0:t.telegramId)),icon:(0,i.jsx)(D.IiJ,{size:32,className:"bg-orange-500 p-1 mb-2 rounded-lg",color:"white"}),label:"Мой график"}),(null==t?void 0:t.isMaster)&&(0,i.jsx)(_,{onClick:()=>l.push("/profile/".concat(null==t?void 0:t.telegramId)),icon:(0,i.jsx)(P.zfW,{size:32,className:"bg-yellow-500 p-1 mb-2 rounded-lg",color:"white"}),label:"Моя информация"}),(0,i.jsx)(_,{onClick:()=>l.push("/my_specialist/".concat(null==t?void 0:t.telegramId)),icon:(0,i.jsx)(D.I$,{size:32,className:"bg-red-500 p-1 mb-2 rounded-lg",color:"white"}),label:"Мои мастера"}),(0,i.jsx)(_,{onClick:()=>l.push("/my_list/".concat(null==t?void 0:t.telegramId)),icon:(0,i.jsx)(D.Mp$,{size:32,className:"bg-blue-500 p-1 mb-2 rounded-lg",color:"white"}),label:"Мои записи"}),(null==t?void 0:t.isMaster)&&(0,i.jsx)(_,{onClick:()=>l.push("/my_booking/".concat(null==t?void 0:t.telegramId)),icon:(0,i.jsx)(M.Egn,{size:32,className:"bg-green-500 p-1 mb-2 rounded-lg",color:"white"}),label:"Запись ко мне"})]})]}):(0,i.jsx)("div",{className:"flex justify-center items-center h-screen",children:(0,i.jsx)("span",{className:"text-lg font-medium",children:(0,i.jsx)(z,{size:"large"})})})};async function X(e){try{let t=await fetch("/api/getUser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:e})});if(!t.ok)throw Error("Ошибка загрузки данных пользователя");return await t.json()}catch(e){return console.error("Ошибка при получении данных пользователя:",e),null}}function A(){let[e,t]=(0,r.useState)(),[n,o]=(0,r.useState)(!0),[l,c]=(0,r.useState)(null);return(0,r.useEffect)(()=>{var e,n;let o=window.Telegram.WebApp;o.ready(),t(null===(n=o.initDataUnsafe)||void 0===n?void 0:null===(e=n.user)||void 0===e?void 0:e.id.toString())},[]),(0,r.useEffect)(()=>{(async()=>{if(e)try{let t=await X(e);c(t)}catch(e){console.error("Ошибка при загрузке пользователя:",e)}finally{o(!1)}})()},[e]),(0,i.jsx)(a.default,{children:(0,i.jsx)(q,{user:l})})}},91810:function(e,t,n){"use strict";n.d(t,{w_:function(){return d}});var o=n(2265),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=o.createContext&&o.createContext(i),r=["attr","size","title"];function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach(function(t){var o,i;o=t,i=n[t],(o=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=typeof o)return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(o))in e?Object.defineProperty(e,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[o]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function d(e){return t=>o.createElement(u,l({attr:s({},e.attr)},t),function e(t){return t&&t.map((t,n)=>o.createElement(t.tag,s({key:n},t.attr),e(t.child)))}(e.child))}function u(e){var t=t=>{var n,{attr:i,size:a,title:c}=e,d=function(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n={};for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){if(t.indexOf(o)>=0)continue;n[o]=e[o]}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,r),u=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),o.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,d,{className:n,style:s(s({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&o.createElement("title",null,c),e.children)};return void 0!==a?o.createElement(a.Consumer,null,e=>t(e)):t(i)}}},function(e){e.O(0,[51,699,706,209,971,23,744],function(){return e(e.s=33571)}),_N_E=e.O()}]);