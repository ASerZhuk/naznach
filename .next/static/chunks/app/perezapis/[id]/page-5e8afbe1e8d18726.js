(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[663],{74201:function(e,t,s){Promise.resolve().then(s.bind(s,92119)),Promise.resolve().then(s.bind(s,39052))},92119:function(e,t,s){"use strict";var a=s(57437);s(2265),t.default=e=>{let{children:t}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"max-w-[2520px] min-h-screen mx-auto xl:px-20 md:px-10 sm:px-2 px-4",children:t})})}},39052:function(e,t,s){"use strict";var a,n,l=s(57437),i=s(92119),r=s(29057),c=s(89230),o=s(16463),d=s(2265),u=s(36463),m=s.n(u);s(54575),s(44222);var x=s(88788),h=s(3107),f=s(23580);s(44193),(0,u.registerLocale)("ru",c.ru),(a=n||(n={}))[a.DATE=0]="DATE",t.default=e=>{let t,{user:s,garfik:a,appointments:n}=e,c=(0,o.useRouter)(),[u,p]=(0,d.useState)(0),[j,y]=(0,d.useState)(null),[g,b]=(0,d.useState)([]),[v,N]=(0,d.useState)(null),[w,k]=(0,d.useState)(),[D,E]=(0,d.useState)({firstName:"",lastName:"",phone:""}),A=j?(0,x.WU)(j,"dd.MM.yyyy"):null;(0,d.useEffect)(()=>{var e;let t=window.Telegram.WebApp;t.ready();let n=null===(e=t.initDataUnsafe)||void 0===e?void 0:e.user;k(null==n?void 0:n.id),(async()=>{if(j){let e=j.getDay(),t=a.find(t=>t.dayOfWeek===e);if(t)try{let e=await fetch("/api/appointments?specialistId=".concat(null==s?void 0:s.userId,"&date=").concat(A));if(e.ok){let s=await e.json();if(Array.isArray(s)){let e=s.map(e=>e.time),a=t.time.filter(t=>!e.includes(t));b(a)}else console.error("Ответ от API не является массивом:",s),b([])}else console.error("Ошибка при загрузке записей"),b([])}catch(e){console.error("Ошибка при загрузке записей:",e),b([])}else b([])}})()},[j,a]);let C=e=>{N(e)},S=async()=>{try{let e=await fetch("/api/appointments?id=".concat(n.id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({date:A,time:v})});if(!e.ok)throw Error("Ошибка при создании записи");let t=await e.json();console.log("Запись успешно перезаписана:",t),f.Am.success("Запись перезаписана успешно"),c.push("/")}catch(e){console.error("Ошибка при перезаписи записи:",e)}};return 0===u&&(t=(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.xE,{onClick:()=>{c.back()}}),(0,l.jsx)(r.c7,{text:"Перезаписать",onClick:S}),(0,l.jsx)(f.Ix,{}),(0,l.jsxs)("div",{className:"flex-col bg-white rounded-lg shadow-md p-6 text-xl flex justify-center",children:[(0,l.jsxs)("div",{className:"border-b pb-4",children:[(0,l.jsx)("h2",{className:"text-xl font-normal mb-2",children:"Выбери дату и время"}),(0,l.jsx)("span",{className:"text-sm pb-2",children:"Выбери актуальную для тебя дату и время для записи на услугу"})]}),(0,l.jsx)("div",{className:"mt-4 flex justify-center",children:(0,l.jsx)(m(),{selected:j,onChange:e=>y(e),filterDate:e=>{let t=e.getDay();return a.some(e=>e.dayOfWeek===t)},minDate:new Date,maxDate:(0,h.z)(new Date,1),locale:"ru",inline:!0,className:"datepicker-custom"})}),j&&(0,l.jsx)("div",{className:"mt-4 p-6",children:(0,l.jsx)("div",{className:"grid grid-cols-4 gap-4 place-items-center text-sm",children:g.length>0?g.map((e,t)=>(0,l.jsx)("button",{onClick:()=>C(e),className:"px-3 py-2 rounded-full ".concat(v===e?"bg-blue-500 text-white":"bg-gray-200 hover:bg-gray-300"),children:e},t)):(0,l.jsx)("p",{children:"Нет доступного времени"})})})]})]})),(0,l.jsx)(i.default,{children:(0,l.jsx)("div",{children:t})})}},44222:function(){}},function(e){e.O(0,[223,612,143,544,127,693,971,23,744],function(){return e(e.s=74201)}),_N_E=e.O()}]);