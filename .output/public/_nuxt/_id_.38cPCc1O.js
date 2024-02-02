import{u as v}from"./index.3ZLbimt4.js";import{u as g}from"./objects.69eamX1G.js";import{h as w}from"./entry.mbXDUFAE.js";import{T as d}from"./TheContentBlock.9Z60fJaS.js";import{_ as q}from"./nuxt-link.ft5LyyVp.js";import{u as $}from"./auth._46xZgze.js";import{j as x,N as u,O as c,J as s,V as o,u as n,Z as e,_ as t,an as j,am as k,w as y,a9 as S,$ as r,I as C,a7 as B,P as O}from"./swiper-vue.VD2cd0Tn.js";import{_ as T}from"./_plugin-vue_export-helper.x3n3nnut.js";import{_ as h}from"./TheBreadcrumbs.vue.tn5850Gm.js";import{_ as m}from"./TheTextContent.vue.4zzZJEtM.js";import"./index.aX4wazua.js";const E={class:"w-[50px] h-[50px]"},N=["src"],A=x({__name:"ObjectParticipants",props:{user:{type:Object,default:()=>{}}},setup(l){const p=$();return g(),(a,i)=>{const _=q;return u(),c("div",null,[s(_,{class:"flex dark:hover:bg-gray-700 p-2 rounded-lg transition-all items-center gap-x-2",to:`/base/users/${l.user.id}`},{default:o(()=>[e("div",E,[e("img",{class:"w-full rounded-full",src:n(p).get_server_domain+l.user.photo_url,alt:""},null,8,N)]),e("p",null,t(l.user.first_name+" "+l.user.last_name),1)]),_:1},8,["to"])])}}}),H={};function L(l,p){const a=j,i=k;return u(),c("div",null,[s(i,null,{default:o(()=>[s(a)]),_:1})])}const M=T(H,[["render",L]]),V={class:"text-center"},D={class:"bg-semiCyan px-2 py-1 rounded-full text-white"},P={class:"flex max-sm:flex-col max-sm:my-6 items-center gap-x-4"},F=e("div",null,[e("svg",{width:"15px",height:"15px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{class:"dark:stroke-white stroke-black",d:"M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5","stroke-width":"2","stroke-linecap":"round"})])],-1),I={class:"flex mt-6 gap-x-4"},J={class:"flex justify-between gap-x-2"},R=e("div",null,[e("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequatur exercitationem fugiat in minus non suscipit velit voluptatum? Expedita facere itaque iusto magni possimus quis reiciendis rem tenetur totam voluptatibus. Beatae commodi corporis culpa hic iusto, natus numquam perferendis quas repellat saepe sed totam, vel voluptatum. Amet architecto at commodi consequuntur culpa delectus deleniti dicta dolore ea eius eos est eum explicabo, id impedit ipsam itaque necessitatibus nemo neque officia pariatur perspiciatis placeat praesentium quaerat quam quas quos repellat repudiandae saepe sint soluta tenetur vel voluptatum. Aliquam asperiores incidunt omnis repellendus. Beatae eaque exercitationem quia sed tempore? Maiores quia, quo!")],-1),Z={key:1},ae=x({__name:"[id]",setup(l){const p=w(),a=g();return y(()=>{a.loadObject({id:p.params.id})}),S(()=>{v({title:`${a.objects.name}`})}),(i,_)=>(u(),c("div",V,[s(m,{"text-type":"pageTitle"},{default:o(()=>[r(t(i.$t("Страница объекта "))+" ",1),e("span",D,t(n(a).get_objects.name),1)]),_:1}),e("div",P,[s(h,{"breadcrumb-link":"/base/objects"},{default:o(()=>[r(t(i.$t("Список объектов")),1)]),_:1}),F,s(h,null,{default:o(()=>[r(t(n(a).get_objects.name),1)]),_:1})]),e("div",I,[s(d,{class:"w-9/12"},{default:o(()=>[e("div",J,[e("div",null,[e("p",null,t(i.$t("Дата создания:")),1),e("p",null,t(new Date(n(a).get_objects.created_at).toLocaleDateString()),1)]),s(m,{"text-type":"pageTitle"},{default:o(()=>[r(t(i.$t("Описание")),1)]),_:1}),e("div",null,[e("p",null,t(i.$t("Email:")),1),e("p",null,t(n(a).get_objects.email),1)])]),R]),_:1}),s(d,{class:"w-3/12"},{default:o(()=>{var f;return[s(m,null,{default:o(()=>[r(t(i.$t("Участники")),1)]),_:1}),e("div",null,[((f=n(a).get_objects.participants)==null?void 0:f.length)>0?(u(!0),c(C,{key:0},B(n(a).get_objects.participants,b=>(u(),O(A,{user:b},null,8,["user"]))),256)):(u(),c("div",Z,[e("p",null,t(i.$t("Участники отсутствуют")),1)]))])]}),_:1})]),s(d,{class:"my-10"},{default:o(()=>[s(m,{"text-type":"pageTitle"},{default:o(()=>[r(t(i.$t("Изображения объекта")),1)]),_:1}),s(M)]),_:1})]))}});export{ae as default};