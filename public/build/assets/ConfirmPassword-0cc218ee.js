import{T as m,o as d,c as l,w as t,a,u as o,Z as c,b as e,d as p,n as u,e as f}from"./app-8fd43e02.js";import{_}from"./GuestLayout-e212b6f3.js";import{_ as w,a as b,b as x}from"./TextInput-8cf61345.js";import{P as g}from"./PrimaryButton-069c5c50.js";import"./ApplicationLogo-beb26911.js";import"./_plugin-vue_export-helper-c27b6911.js";const h=e("div",{class:"mb-4 text-sm text-gray-600 dark:text-gray-400"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),y=["onSubmit"],P={class:"flex justify-end mt-4"},S={__name:"ConfirmPassword",setup(V){const s=m({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return(v,r)=>(d(),l(_,null,{default:t(()=>[a(o(c),{title:"Confirm Password"}),h,e("form",{onSubmit:f(i,["prevent"])},[e("div",null,[a(w,{for:"password",value:"Password"}),a(b,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:o(s).password,"onUpdate:modelValue":r[0]||(r[0]=n=>o(s).password=n),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),a(x,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),e("div",P,[a(g,{class:u(["ml-4",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:t(()=>[p(" Confirm ")]),_:1},8,["class","disabled"])])],40,y)]),_:1}))}};export{S as default};
