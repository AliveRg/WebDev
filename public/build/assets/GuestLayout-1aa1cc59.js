import{A as ie,x as P,u as F,B as ue,C as q,D as ce,E as U,l as X,y as Y,k as V,G as de,H as fe,h as S,I as pe,J as me,o as ge,f as _e,b as _,r as ve,F as he,L as Z}from"./app-def6793b.js";function ee(e){return de()?(fe(e),!0):!1}function $(e){return typeof e=="function"?e():F(e)}const ye=typeof window<"u",te=()=>{};function we(e,t){function r(...n){return new Promise((a,s)=>{Promise.resolve(e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})).then(a).catch(s)})}return r}const re=e=>e();function xe(e=re){const t=P(!0);function r(){t.value=!1}function n(){t.value=!0}const a=(...s)=>{t.value&&e(...s)};return{isActive:q(t),pause:r,resume:n,eventFilter:a}}function ne(...e){if(e.length!==1)return ue(...e);const t=e[0];return typeof t=="function"?q(ce(()=>({get:t,set:te}))):P(t)}function be(e,t=!0){U()?X(e):t?e():Y(e)}function Oe(e=!1,t={}){const{truthyValue:r=!0,falsyValue:n=!1}=t,a=ie(e),s=P(e);function l(i){if(arguments.length)return s.value=i,s.value;{const h=$(r);return s.value=s.value===h?$(n):h,s.value}}return a?l:[s,l]}var I=Object.getOwnPropertySymbols,Pe=Object.prototype.hasOwnProperty,ke=Object.prototype.propertyIsEnumerable,Se=(e,t)=>{var r={};for(var n in e)Pe.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&I)for(var n of I(e))t.indexOf(n)<0&&ke.call(e,n)&&(r[n]=e[n]);return r};function $e(e,t,r={}){const n=r,{eventFilter:a=re}=n,s=Se(n,["eventFilter"]);return V(e,we(a,t),s)}var je=Object.defineProperty,De=Object.defineProperties,Ee=Object.getOwnPropertyDescriptors,N=Object.getOwnPropertySymbols,ae=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable,R=(e,t,r)=>t in e?je(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ce=(e,t)=>{for(var r in t||(t={}))ae.call(t,r)&&R(e,r,t[r]);if(N)for(var r of N(t))se.call(t,r)&&R(e,r,t[r]);return e},Le=(e,t)=>De(e,Ee(t)),Ae=(e,t)=>{var r={};for(var n in e)ae.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&N)for(var n of N(e))t.indexOf(n)<0&&se.call(e,n)&&(r[n]=e[n]);return r};function Ne(e,t,r={}){const n=r,{eventFilter:a}=n,s=Ae(n,["eventFilter"]),{eventFilter:l,pause:i,resume:h,isActive:y}=xe(a);return{stop:$e(e,t,Le(Ce({},s),{eventFilter:l})),pause:i,resume:h,isActive:y}}function oe(e){var t;const r=$(e);return(t=r==null?void 0:r.$el)!=null?t:r}const j=ye?window:void 0;function T(...e){let t,r,n,a;if(typeof e[0]=="string"||Array.isArray(e[0])?([r,n,a]=e,t=j):[t,r,n,a]=e,!t)return te;Array.isArray(r)||(r=[r]),Array.isArray(n)||(n=[n]);const s=[],l=()=>{s.forEach(d=>d()),s.length=0},i=(d,f,w,v)=>(d.addEventListener(f,w,v),()=>d.removeEventListener(f,w,v)),h=V(()=>[oe(t),$(a)],([d,f])=>{l(),d&&s.push(...r.flatMap(w=>n.map(v=>i(d,w,v,f))))},{immediate:!0,flush:"post"}),y=()=>{h(),l()};return ee(y),y}function Me(){const e=P(!1);return U()&&X(()=>{e.value=!0}),e}function Fe(e){const t=Me();return S(()=>(t.value,!!e()))}function Ve(e,t={}){const{window:r=j}=t,n=Fe(()=>r&&"matchMedia"in r&&typeof r.matchMedia=="function");let a;const s=P(!1),l=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",i):a.removeListener(i))},i=()=>{n.value&&(l(),a=r.matchMedia(ne(e).value),s.value=!!(a!=null&&a.matches),a&&("addEventListener"in a?a.addEventListener("change",i):a.addListener(i)))};return me(i),ee(()=>l()),s}const L=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},A="__vueuse_ssr_handlers__",Ie=Re();function Re(){return A in L||(L[A]=L[A]||{}),L[A]}function le(e,t){return Ie[e]||t}function Te(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var Je=Object.defineProperty,J=Object.getOwnPropertySymbols,ze=Object.prototype.hasOwnProperty,Be=Object.prototype.propertyIsEnumerable,z=(e,t,r)=>t in e?Je(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,B=(e,t)=>{for(var r in t||(t={}))ze.call(t,r)&&z(e,r,t[r]);if(J)for(var r of J(t))Be.call(t,r)&&z(e,r,t[r]);return e};const We={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},W="vueuse-storage";function Ge(e,t,r,n={}){var a;const{flush:s="pre",deep:l=!0,listenToStorageChanges:i=!0,writeDefaults:h=!0,mergeDefaults:y=!1,shallow:d,window:f=j,eventFilter:w,onError:v=o=>{console.error(o)}}=n,m=(d?pe:P)(t);if(!r)try{r=le("getDefaultStorage",()=>{var o;return(o=j)==null?void 0:o.localStorage})()}catch(o){v(o)}if(!r)return m;const g=$(t),D=Te(g),b=(a=n.serializer)!=null?a:We[D],{pause:E,resume:k}=Ne(m,()=>c(m.value),{flush:s,deep:l,eventFilter:w});return f&&i&&(T(f,"storage",x),T(f,W,C)),x(),m;function c(o){try{if(o==null)r.removeItem(e);else{const u=b.write(o),p=r.getItem(e);p!==u&&(r.setItem(e,u),f&&f.dispatchEvent(new CustomEvent(W,{detail:{key:e,oldValue:p,newValue:u,storageArea:r}})))}}catch(u){v(u)}}function O(o){const u=o?o.newValue:r.getItem(e);if(u==null)return h&&g!==null&&r.setItem(e,b.write(g)),g;if(!o&&y){const p=b.read(u);return typeof y=="function"?y(p,g):D==="object"&&!Array.isArray(p)?B(B({},g),p):p}else return typeof u!="string"?u:b.read(u)}function C(o){x(o.detail)}function x(o){if(!(o&&o.storageArea!==r)){if(o&&o.key==null){m.value=g;return}if(!(o&&o.key!==e)){E();try{m.value=O(o)}catch(u){v(u)}finally{o?Y(k):k()}}}}}function He(e){return Ve("(prefers-color-scheme: dark)",e)}var Ke=Object.defineProperty,G=Object.getOwnPropertySymbols,Qe=Object.prototype.hasOwnProperty,qe=Object.prototype.propertyIsEnumerable,H=(e,t,r)=>t in e?Ke(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ue=(e,t)=>{for(var r in t||(t={}))Qe.call(t,r)&&H(e,r,t[r]);if(G)for(var r of G(t))qe.call(t,r)&&H(e,r,t[r]);return e};function Xe(e={}){const{selector:t="html",attribute:r="class",initialValue:n="auto",window:a=j,storage:s,storageKey:l="vueuse-color-scheme",listenToStorageChanges:i=!0,storageRef:h,emitAuto:y,disableTransition:d=!0}=e,f=Ue({auto:"",light:"light",dark:"dark"},e.modes||{}),w=He({window:a}),v=S(()=>w.value?"dark":"light"),m=h||(l==null?ne(n):Ge(l,n,s,{window:a,listenToStorageChanges:i})),g=S(()=>m.value==="auto"?v.value:m.value),D=le("updateHTMLAttrs",(c,O,C)=>{const x=typeof c=="string"?a==null?void 0:a.document.querySelector(c):oe(c);if(!x)return;let o;if(d&&(o=a.document.createElement("style"),o.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),a.document.head.appendChild(o)),O==="class"){const u=C.split(/\s/g);Object.values(f).flatMap(p=>(p||"").split(/\s/g)).filter(Boolean).forEach(p=>{u.includes(p)?x.classList.add(p):x.classList.remove(p)})}else x.setAttribute(O,C);d&&(a.getComputedStyle(o).opacity,document.head.removeChild(o))});function b(c){var O;D(t,r,(O=f[c])!=null?O:c)}function E(c){e.onChanged?e.onChanged(c,b):b(c)}V(g,E,{flush:"post",immediate:!0}),be(()=>E(g.value));const k=S({get(){return y?m.value:g.value},set(c){m.value=c}});try{return Object.assign(k,{store:m,system:v,state:g})}catch{return k}}var Ye=Object.defineProperty,Ze=Object.defineProperties,et=Object.getOwnPropertyDescriptors,K=Object.getOwnPropertySymbols,tt=Object.prototype.hasOwnProperty,rt=Object.prototype.propertyIsEnumerable,Q=(e,t,r)=>t in e?Ye(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,nt=(e,t)=>{for(var r in t||(t={}))tt.call(t,r)&&Q(e,r,t[r]);if(K)for(var r of K(t))rt.call(t,r)&&Q(e,r,t[r]);return e},at=(e,t)=>Ze(e,et(t));function st(e={}){const{valueDark:t="dark",valueLight:r=""}=e,n=Xe(at(nt({},e),{onChanged:(s,l)=>{var i;e.onChanged?(i=e.onChanged)==null||i.call(e,s==="dark",l,s):l(s)},modes:{dark:t,light:r}}));return S({get(){return n.value==="dark"},set(s){const l=s?"dark":"light";n.system.value===l?n.value="auto":n.value=l}})}const ot={class:"w-full px-2 py-8 bg-bgLight dark:bg-bgDark"},lt={class:"w-full grid grid-flow-row gap-[20px] md:gap-2 max-w-sm sm:max-w-lg sm:grid-cols-2 mx-auto md:grid-cols-4 md:max-w-4xl lg:max-w-[1380px]"},it=Z('<div class="text-2xl text-textLight dark:text-textDark font-extrabold uppercase flex items-center justify-between gap-8 sm:flex-col sm:items-start sm:gap-2 md:order-1 md:text-3xl md:w-2/3 lg:text-5xl"><p class="">R &amp; G</p><p class="text-sm font-normal sm:text-xs md:text-sm lg:text-xl md:hidden"> Студия создания сайтов </p></div><div class="text-lg text-textLight dark:text-textDark font-extrabold leading-7 flex justify-start sm:justify-end md:order-3 md:items-center lg:text-2xl animate-pulse"><a class="md:hidden flex items-center gap-2" href=""><span class="material-symbols-outlined"> phone_forwarded </span> +7 (919) 289 75 05</a><a class="hidden md:flex md:items-center md:gap-4" href=""><span class="material-symbols-outlined"> phone_forwarded </span> +7 (919) 28...</a></div>',2),ut={class:"w-full flex md: sm:col-span-2 md:order-4 md:col-span-4 md:justify-start"},ct={class:"flex w-full justify-between items-center sm:col-span-2 md:order-4 md:col-span-4 md:justify-start md:gap-10 md:flex-row-reverse"},dt=_("div",{class:"text-black text-md text-center grid gap-2"},[_("p",{class:"bg-accentLight dark:bg-accentDark py-1 px-3 rounded-xl text-textLight dark:text-textDark"}," Обратный Звонок ")],-1),ft={class:"switch relative inline-block w-[60px] h-[34px]"},pt=["checked"],mt=_("div",{class:"slider round"},null,-1),gt=_("div",{class:"hidden md:block text-textLight dark:text-textDark justify-self-start"},[_("p",{class:"text-sm font-normal sm:text-xs md:text-lg lg:text-xl"}," Студия создания сайтов ")],-1),_t=Z('<div class="flex justify-between items-center font-bold text-sm text-textLight dark:text-textDark sm:col-span-2 md:order-2 md:text-lg lg:text-2xl"><a class="" href="">Расчет стоимости</a><a class="" href="">Услуги</a><a class="" href="">Портфолио</a></div><hr class="w-full border-black dark:border-accentDark outline-2 mt-2 sm:col-span-2 md:order-5 md:col-span-4">',2),vt={class:""},M=st(),ht=Oe(M);console.log(M);const yt={data(){return{checkbox:M}},methods:{toggleCheckbox(){this.$emit("setCheckboxVal",this.isDark)}}},xt=Object.assign(yt,{__name:"GuestLayout",setup(e){return(t,r)=>(ge(),_e(he,null,[_("header",ot,[_("section",lt,[it,_("div",ut,[_("div",ct,[dt,_("label",ft,[_("input",{type:"checkbox",class:"hidden",checked:F(M),onClick:r[0]||(r[0]=n=>(F(ht)(),t.toggleCheckbox))},null,8,pt),mt])]),gt]),_t])]),_("div",vt,[ve(t.$slots,"default")])],64))}});export{xt as _};