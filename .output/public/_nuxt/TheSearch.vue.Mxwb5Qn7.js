import{j as n,N as o,O as r,Z as l,aa as s}from"./swiper-vue.VD2cd0Tn.js";const i=n({__name:"TheSearch",props:{modelValue:String},setup(u){return(t,e)=>(o(),r("div",null,[l("input",{class:"w-full px-4 py-3 rounded-full bg-gray-100 focus:bg-gray-200 text-black tracking-widest dark:focus:opacity-100 transition-all dark:opacity-40 outline-none",type:"text",placeholder:"Найти...",onInput:e[0]||(e[0]=a=>t.$emit("update:modelValue",a.target.value)),onFocusout:e[1]||(e[1]=a=>t.$emit("search")),onKeyup:e[2]||(e[2]=s(a=>t.$emit("search"),["enter"]))},null,32)]))}});export{i as _};
