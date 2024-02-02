import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-nvHjMUuE.mjs';
import { useSSRContext, defineComponent, onUpdated, mergeProps, unref, withCtx, createVNode, renderSlot, openBlock, createBlock, toDisplayString, createCommentVNode, createTextVNode, ref, watchSyncEffect } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { u as useAuthStore } from './auth-ltfjqTsG.mjs';
import { u as useTreeStore, _ as _sfc_main$7 } from './TheButton-Jrv5tshN.mjs';
import { useRouter, useRoute } from 'vue-router';
import { u as useTaskList } from './tasks-AOpCvdFT.mjs';
import { u as useCompanies } from './companies-Vl6LYc-q.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-yVxbj29m.mjs';
import { s as defineStore, u as useHead, _ as __nuxt_component_2, C as useState } from '../server.mjs';
import { a as axios, n as nuxtStorage } from '../../nuxt-storage.mjs';
import { toast } from 'vue3-toastify';
import { _ as _sfc_main$8 } from './TheTextContent-rN29GJom.mjs';
import { S as Sceleton } from './TheSceleton-RMAy-i6X.mjs';
import { u as useChat } from './chat-qdbzpL4c.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import '@sindresorhus/slugify';
import 'tailwind-merge';
import 'animejs';
import 'axios';

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "HeaderNavLinks",
  __ssrInlineRender: true,
  props: {
    to: String,
    activeNav: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const authUser = useAuthStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: __props.to,
        onClick: ($event) => {
          unref(authUser).openSettings = false;
          unref(authUser).openNotification = false;
        },
        class: ["flex transition-all hover:bg-cyan dark:hover:bg-semiCyan dark:hover:border-r-cyan hover:border-r-4 hover:border-r-semiCyan p-4 w-full rounded-l-lg items-center gap-x-6 dark:text-white text-black", { "rounded-l-none pl-[22px]": !__props.activeNav }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="dark:fill-white fill-black"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "navIcon", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div><div class="${ssrRenderClass({ "hidden": !__props.activeNav })}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "navLink", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "dark:fill-white fill-black" }, [
                renderSlot(_ctx.$slots, "navIcon")
              ]),
              createVNode("div", {
                class: { "hidden": !__props.activeNav }
              }, [
                renderSlot(_ctx.$slots, "navLink")
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/HeaderNavLinks.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _imports_0 = "" + publicAssetsURL("img/Logo.webp");
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "TheHeader",
  __ssrInlineRender: true,
  props: {
    activeNav: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const loadCurrentUser = useAuthStore();
    useTaskList();
    useCompanies();
    const router = useRouter();
    const logOut = () => {
      localStorage.removeItem("token");
      router.push("/");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeaderNavLinks = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["container z-50 relative dark:shadow-lg border-r dark:border-none dark:shadow-gray-400", { "blur": unref(useTreeStore)().treeFullScreen === true }]
      }, _attrs))} data-v-d29c54ff><div class="${ssrRenderClass([{ "px-3 py-[33px]": !__props.activeNav, "px-6 py-[25px]": __props.activeNav }, "flex w-full items-center transition-all justify-between text-center bg-cyan"])}" data-v-d29c54ff><img${ssrRenderAttr("src", _imports_0)} alt="" class="${ssrRenderClass([{ "w-[80px]": __props.activeNav, "w-[50px]": !__props.activeNav }, "transition-all mx-auto"])}" data-v-d29c54ff></div><div class="${ssrRenderClass([{ "pl-0": !__props.activeNav, "pl-3 max-md:w-full overflow-x-hidden ": __props.activeNav, "top-0 fixed dark:shadow-lg dark:shadow-gray-400 dark:border-none border-r": unref(loadCurrentUser).my_scroll > 90, "max-[1151px]:w-[27%] max-[1149px]:w-full max-lg:w-full": __props.activeNav && unref(loadCurrentUser).my_scroll > 100 }, "py-2 flex flex-col gap-y-4 transition-all duration-300 dark:bg-gray-600 max-h-screen h-screen max-[1150px]:pb-24 overflow-y-auto h-screen"])}" data-v-d29c54ff>`);
      _push(ssrRenderComponent(_component_HeaderNavLinks, {
        activeNav: __props.activeNav,
        to: "/base/profile"
      }, {
        navIcon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="25px" height="25px" class="stroke-black dark:stroke-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-d29c54ff${_scopeId}><circle cx="12" cy="6" r="4" stroke-width="1.5" data-v-d29c54ff${_scopeId}></circle><path d="M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634" stroke="" stroke-width="1.5" stroke-linecap="round" data-v-d29c54ff${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "25px",
                height: "25px",
                class: "stroke-black dark:stroke-white",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("circle", {
                  cx: "12",
                  cy: "6",
                  r: "4",
                  "stroke-width": "1.5"
                }),
                createVNode("path", {
                  d: "M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634",
                  stroke: "",
                  "stroke-width": "1.5",
                  "stroke-linecap": "round"
                })
              ]))
            ];
          }
        }),
        navLink: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p data-v-d29c54ff${_scopeId}>${ssrInterpolate(_ctx.$t("\u041F\u0440\u043E\u0444\u0438\u043B\u044C"))}</p>`);
          } else {
            return [
              createVNode("p", null, toDisplayString(_ctx.$t("\u041F\u0440\u043E\u0444\u0438\u043B\u044C")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_HeaderNavLinks, {
        activeNav: __props.activeNav,
        to: "/base/users"
      }, {
        navIcon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-d29c54ff${_scopeId}><g id="User / Users_Group" data-v-d29c54ff${_scopeId}><path id="Vector" class="dark:stroke-white stroke-black" d="M17 20C17 18.3431 14.7614 17 12 17C9.23858 17 7 18.3431 7 20M21 17.0004C21 15.7702 19.7659 14.7129 18 14.25M3 17.0004C3 15.7702 4.2341 14.7129 6 14.25M18 10.2361C18.6137 9.68679 19 8.8885 19 8C19 6.34315 17.6569 5 16 5C15.2316 5 14.5308 5.28885 14 5.76389M6 10.2361C5.38625 9.68679 5 8.8885 5 8C5 6.34315 6.34315 5 8 5C8.76835 5 9.46924 5.28885 10 5.76389M12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14Z" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" data-v-d29c54ff${_scopeId}></path></g></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "25px",
                height: "25px",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("g", { id: "User / Users_Group" }, [
                  createVNode("path", {
                    id: "Vector",
                    class: "dark:stroke-white stroke-black",
                    d: "M17 20C17 18.3431 14.7614 17 12 17C9.23858 17 7 18.3431 7 20M21 17.0004C21 15.7702 19.7659 14.7129 18 14.25M3 17.0004C3 15.7702 4.2341 14.7129 6 14.25M18 10.2361C18.6137 9.68679 19 8.8885 19 8C19 6.34315 17.6569 5 16 5C15.2316 5 14.5308 5.28885 14 5.76389M6 10.2361C5.38625 9.68679 5 8.8885 5 8C5 6.34315 6.34315 5 8 5C8.76835 5 9.46924 5.28885 10 5.76389M12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14Z",
                    "stroke-width": "1",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                ])
              ]))
            ];
          }
        }),
        navLink: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p data-v-d29c54ff${_scopeId}>${ssrInterpolate(_ctx.$t("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438"))}</p>`);
          } else {
            return [
              createVNode("p", null, toDisplayString(_ctx.$t("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(loadCurrentUser).user.role_en !== "admin") {
        _push(ssrRenderComponent(_component_HeaderNavLinks, {
          activeNav: __props.activeNav,
          to: `/base/tasks`,
          class: "flex items-center gap-x-6"
        }, {
          navIcon: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg width="25px" height="25px" class="dark:fill-white fill-black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-d29c54ff${_scopeId}><path d="M13.25 8.5C12.8358 8.5 12.5 8.83579 12.5 9.25C12.5 9.66421 12.8358 10 13.25 10H16.75C17.1642 10 17.5 9.66421 17.5 9.25C17.5 8.83579 17.1642 8.5 16.75 8.5H13.25Z" data-v-d29c54ff${_scopeId}></path><path d="M12.5001 14.75C12.5001 14.3358 12.8358 14 13.2501 14H16.7499C17.1642 14 17.4999 14.3358 17.4999 14.75C17.4999 15.1642 17.1642 15.5 16.7499 15.5H13.2501C12.8358 15.5 12.5001 15.1642 12.5001 14.75Z" data-v-d29c54ff${_scopeId}></path><path d="M10.7803 7.71967C11.0732 8.01256 11.0732 8.48744 10.7803 8.78033L8.78033 10.7803C8.48744 11.0732 8.01256 11.0732 7.71967 10.7803L6.71967 9.78033C6.42678 9.48744 6.42678 9.01256 6.71967 8.71967C7.01256 8.42678 7.48744 8.42678 7.78033 8.71967L8.25 9.18934L9.71967 7.71967C10.0126 7.42678 10.4874 7.42678 10.7803 7.71967Z" data-v-d29c54ff${_scopeId}></path><path d="M10.7803 14.2803C11.0732 13.9874 11.0732 13.5126 10.7803 13.2197C10.4874 12.9268 10.0126 12.9268 9.71967 13.2197L8.25 14.6893L7.78033 14.2197C7.48744 13.9268 7.01256 13.9268 6.71967 14.2197C6.42678 14.5126 6.42678 14.9874 6.71967 15.2803L7.71967 16.2803C8.01256 16.5732 8.48744 16.5732 8.78033 16.2803L10.7803 14.2803Z" data-v-d29c54ff${_scopeId}></path><path d="M5.25 3C4.00736 3 3 4.00736 3 5.25V18.75C3 19.9926 4.00736 21 5.25 21H18.75C19.9926 21 21 19.9926 21 18.75V5.25C21 4.00736 19.9926 3 18.75 3H5.25ZM4.5 5.25C4.5 4.83579 4.83579 4.5 5.25 4.5H18.75C19.1642 4.5 19.5 4.83579 19.5 5.25V18.75C19.5 19.1642 19.1642 19.5 18.75 19.5H5.25C4.83579 19.5 4.5 19.1642 4.5 18.75V5.25Z" data-v-d29c54ff${_scopeId}></path></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  width: "25px",
                  height: "25px",
                  class: "dark:fill-white fill-black",
                  viewBox: "0 0 24 24",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", { d: "M13.25 8.5C12.8358 8.5 12.5 8.83579 12.5 9.25C12.5 9.66421 12.8358 10 13.25 10H16.75C17.1642 10 17.5 9.66421 17.5 9.25C17.5 8.83579 17.1642 8.5 16.75 8.5H13.25Z" }),
                  createVNode("path", { d: "M12.5001 14.75C12.5001 14.3358 12.8358 14 13.2501 14H16.7499C17.1642 14 17.4999 14.3358 17.4999 14.75C17.4999 15.1642 17.1642 15.5 16.7499 15.5H13.2501C12.8358 15.5 12.5001 15.1642 12.5001 14.75Z" }),
                  createVNode("path", { d: "M10.7803 7.71967C11.0732 8.01256 11.0732 8.48744 10.7803 8.78033L8.78033 10.7803C8.48744 11.0732 8.01256 11.0732 7.71967 10.7803L6.71967 9.78033C6.42678 9.48744 6.42678 9.01256 6.71967 8.71967C7.01256 8.42678 7.48744 8.42678 7.78033 8.71967L8.25 9.18934L9.71967 7.71967C10.0126 7.42678 10.4874 7.42678 10.7803 7.71967Z" }),
                  createVNode("path", { d: "M10.7803 14.2803C11.0732 13.9874 11.0732 13.5126 10.7803 13.2197C10.4874 12.9268 10.0126 12.9268 9.71967 13.2197L8.25 14.6893L7.78033 14.2197C7.48744 13.9268 7.01256 13.9268 6.71967 14.2197C6.42678 14.5126 6.42678 14.9874 6.71967 15.2803L7.71967 16.2803C8.01256 16.5732 8.48744 16.5732 8.78033 16.2803L10.7803 14.2803Z" }),
                  createVNode("path", { d: "M5.25 3C4.00736 3 3 4.00736 3 5.25V18.75C3 19.9926 4.00736 21 5.25 21H18.75C19.9926 21 21 19.9926 21 18.75V5.25C21 4.00736 19.9926 3 18.75 3H5.25ZM4.5 5.25C4.5 4.83579 4.83579 4.5 5.25 4.5H18.75C19.1642 4.5 19.5 4.83579 19.5 5.25V18.75C19.5 19.1642 19.1642 19.5 18.75 19.5H5.25C4.83579 19.5 4.5 19.1642 4.5 18.75V5.25Z" })
                ]))
              ];
            }
          }),
          navLink: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p data-v-d29c54ff${_scopeId}>${ssrInterpolate(_ctx.$t("\u0417\u0430\u0434\u0430\u043D\u0438\u044F"))}</p>`);
            } else {
              return [
                createVNode("p", null, toDisplayString(_ctx.$t("\u0417\u0430\u0434\u0430\u043D\u0438\u044F")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(loadCurrentUser).user.role_en !== "admin") {
        _push(ssrRenderComponent(_component_HeaderNavLinks, {
          activeNav: __props.activeNav,
          to: `/base/graph`,
          class: "flex items-center gap-x-6"
        }, {
          navIcon: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-d29c54ff${_scopeId}><path d="M2.99902 3V16.2C2.99902 17.8802 2.99902 18.7202 3.326 19.362C3.61362 19.9265 4.07257 20.3854 4.63705 20.673C5.27879 21 6.11887 21 7.79902 21H20.999M19.9998 15H15.9998M12.9998 7.00002H6.99978M17.9998 11H8.99978" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-d29c54ff${_scopeId}></path></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  class: "dark:stroke-white stroke-black",
                  width: "25px",
                  height: "25px",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    d: "M2.99902 3V16.2C2.99902 17.8802 2.99902 18.7202 3.326 19.362C3.61362 19.9265 4.07257 20.3854 4.63705 20.673C5.27879 21 6.11887 21 7.79902 21H20.999M19.9998 15H15.9998M12.9998 7.00002H6.99978M17.9998 11H8.99978",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                ]))
              ];
            }
          }),
          navLink: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p data-v-d29c54ff${_scopeId}>${ssrInterpolate(_ctx.$t("\u0413\u0440\u0430\u0444\u0438\u043A"))}</p>`);
            } else {
              return [
                createVNode("p", null, toDisplayString(_ctx.$t("\u0413\u0440\u0430\u0444\u0438\u043A")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(loadCurrentUser).user.role_en !== "admin") {
        _push(ssrRenderComponent(_component_HeaderNavLinks, {
          activeNav: __props.activeNav,
          to: `/base/tests`,
          class: "flex items-center gap-x-6"
        }, {
          navIcon: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg class="dark:fill-white fill-black" width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-d29c54ff${_scopeId}><path d="M4,23a1,1,0,0,1-1-1V19a1,1,0,0,1,2,0v3A1,1,0,0,1,4,23Zm9-1V15a1,1,0,0,0-2,0v7a1,1,0,0,0,2,0Zm7-11a1,1,0,0,0-1,1V22a1,1,0,0,0,2,0V12A1,1,0,0,0,20,11Zm.382-9.923A.991.991,0,0,0,20,1H16a1,1,0,0,0,0,2h1.586L12,8.586,8.707,5.293a1,1,0,0,0-1.414,0l-4,4a1,1,0,0,0,1.414,1.414L8,7.414l3.293,3.293a1,1,0,0,0,1.414,0L19,4.414V6a1,1,0,0,0,2,0V2a1,1,0,0,0-.618-.923Z" data-v-d29c54ff${_scopeId}></path></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  class: "dark:fill-white fill-black",
                  width: "25px",
                  height: "25px",
                  viewBox: "0 0 24 24",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", { d: "M4,23a1,1,0,0,1-1-1V19a1,1,0,0,1,2,0v3A1,1,0,0,1,4,23Zm9-1V15a1,1,0,0,0-2,0v7a1,1,0,0,0,2,0Zm7-11a1,1,0,0,0-1,1V22a1,1,0,0,0,2,0V12A1,1,0,0,0,20,11Zm.382-9.923A.991.991,0,0,0,20,1H16a1,1,0,0,0,0,2h1.586L12,8.586,8.707,5.293a1,1,0,0,0-1.414,0l-4,4a1,1,0,0,0,1.414,1.414L8,7.414l3.293,3.293a1,1,0,0,0,1.414,0L19,4.414V6a1,1,0,0,0,2,0V2a1,1,0,0,0-.618-.923Z" })
                ]))
              ];
            }
          }),
          navLink: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p data-v-d29c54ff${_scopeId}>${ssrInterpolate(_ctx.$t("\u0422\u0435\u0441\u0442\u044B"))}</p>`);
            } else {
              return [
                createVNode("p", null, toDisplayString(_ctx.$t("\u0422\u0435\u0441\u0442\u044B")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(loadCurrentUser).user.role_en !== "admin") {
        _push(ssrRenderComponent(_component_HeaderNavLinks, {
          activeNav: __props.activeNav,
          to: `/base/documents`,
          class: "flex items-center gap-x-6"
        }, {
          navIcon: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-d29c54ff${_scopeId}><path d="M5 8C5 5.17157 5 3.75736 5.87868 2.87868C6.75736 2 8.17157 2 11 2H13C15.8284 2 17.2426 2 18.1213 2.87868C19 3.75736 19 5.17157 19 8V16C19 18.8284 19 20.2426 18.1213 21.1213C17.2426 22 15.8284 22 13 22H11C8.17157 22 6.75736 22 5.87868 21.1213C5 20.2426 5 18.8284 5 16V8Z" stroke-width="1.5" data-v-d29c54ff${_scopeId}></path><path d="M5 4.07617C4.02491 4.17208 3.36857 4.38885 2.87868 4.87873C2 5.75741 2 7.17163 2 10.0001V14.0001C2 16.8285 2 18.2427 2.87868 19.1214C3.36857 19.6113 4.02491 19.828 5 19.9239" stroke-width="1.5" data-v-d29c54ff${_scopeId}></path><path d="M19 4.07617C19.9751 4.17208 20.6314 4.38885 21.1213 4.87873C22 5.75741 22 7.17163 22 10.0001V14.0001C22 16.8285 22 18.2427 21.1213 19.1214C20.6314 19.6113 19.9751 19.828 19 19.9239" stroke-width="1.5" data-v-d29c54ff${_scopeId}></path><path d="M9 13H15" stroke-width="1.5" stroke-linecap="round" data-v-d29c54ff${_scopeId}></path><path d="M9 9H15" stroke-width="1.5" stroke-linecap="round" data-v-d29c54ff${_scopeId}></path><path d="M9 17H12" stroke-width="1.5" stroke-linecap="round" data-v-d29c54ff${_scopeId}></path></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  class: "dark:stroke-white stroke-black",
                  width: "25px",
                  height: "25px",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    d: "M5 8C5 5.17157 5 3.75736 5.87868 2.87868C6.75736 2 8.17157 2 11 2H13C15.8284 2 17.2426 2 18.1213 2.87868C19 3.75736 19 5.17157 19 8V16C19 18.8284 19 20.2426 18.1213 21.1213C17.2426 22 15.8284 22 13 22H11C8.17157 22 6.75736 22 5.87868 21.1213C5 20.2426 5 18.8284 5 16V8Z",
                    "stroke-width": "1.5"
                  }),
                  createVNode("path", {
                    d: "M5 4.07617C4.02491 4.17208 3.36857 4.38885 2.87868 4.87873C2 5.75741 2 7.17163 2 10.0001V14.0001C2 16.8285 2 18.2427 2.87868 19.1214C3.36857 19.6113 4.02491 19.828 5 19.9239",
                    "stroke-width": "1.5"
                  }),
                  createVNode("path", {
                    d: "M19 4.07617C19.9751 4.17208 20.6314 4.38885 21.1213 4.87873C22 5.75741 22 7.17163 22 10.0001V14.0001C22 16.8285 22 18.2427 21.1213 19.1214C20.6314 19.6113 19.9751 19.828 19 19.9239",
                    "stroke-width": "1.5"
                  }),
                  createVNode("path", {
                    d: "M9 13H15",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round"
                  }),
                  createVNode("path", {
                    d: "M9 9H15",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round"
                  }),
                  createVNode("path", {
                    d: "M9 17H12",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round"
                  })
                ]))
              ];
            }
          }),
          navLink: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p data-v-d29c54ff${_scopeId}>${ssrInterpolate(_ctx.$t("\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B"))}</p>`);
            } else {
              return [
                createVNode("p", null, toDisplayString(_ctx.$t("\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_HeaderNavLinks, {
        activeNav: __props.activeNav,
        to: "/base/companies",
        class: "flex items-center gap-x-6"
      }, {
        navIcon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="fill-black dark:fill-white" width="25px" height="25px" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" data-v-d29c54ff${_scopeId}><path d="M7 2L7 7L2 7L2 46L14 46L14 44L4 44L4 9L9 9L9 4L29 4L29 7L11 7L11 9L34 9L34 20L36 20L36 7L31 7L31 2 Z M 8 12L8 14L12 14L12 12 Z M 17 12L17 14L21 14L21 12 Z M 26 12L26 14L30 14L30 12 Z M 8 17L8 19L12 19L12 17 Z M 17 17L17 19L21 19L21 17 Z M 26 17L26 19L30 19L30 17 Z M 29 20C25.742188 20 23.328125 21.324219 22.074219 23.296875C20.929688 25.09375 20.875 27.339844 21.59375 29.433594C21.515625 29.566406 21.402344 29.679688 21.328125 29.839844C21.171875 30.191406 21.035156 30.589844 21.054688 31.097656L21.054688 31.101563C21.109375 32.378906 21.851563 33.046875 22.398438 33.421875C22.628906 34.640625 23.207031 35.660156 24 36.390625L24 38.53125C23.824219 38.953125 23.472656 39.308594 22.796875 39.679688C22.089844 40.070313 21.132813 40.4375 20.144531 40.917969C19.15625 41.398438 18.125 42.011719 17.324219 42.988281C16.519531 43.96875 16 45.308594 16 47L16 48L48.050781 48L47.992188 46.941406C47.902344 45.363281 47.316406 44.117188 46.488281 43.222656C45.664063 42.328125 44.644531 41.765625 43.679688 41.320313C42.714844 40.875 41.785156 40.535156 41.109375 40.171875C40.464844 39.832031 40.148438 39.511719 40 39.160156L40 37.472656C40.597656 36.609375 40.859375 35.617188 40.9375 34.6875C41.414063 34.265625 41.96875 33.617188 42.125 32.457031C42.230469 31.625 42.019531 30.996094 41.695313 30.464844C42.144531 29.277344 42.328125 27.84375 41.933594 26.417969C41.707031 25.589844 41.277344 24.777344 40.5625 24.171875C40.003906 23.691406 39.238281 23.425781 38.390625 23.308594L37.75 22L37.125 22C36.097656 22 35.085938 22.238281 34.214844 22.578125C33.871094 22.714844 33.558594 22.863281 33.265625 23.027344C33.101563 22.808594 32.921875 22.601563 32.714844 22.414063C32.105469 21.863281 31.261719 21.550781 30.324219 21.421875L29.621094 20 Z M 8 22L8 24L12 24L12 22 Z M 17 22L17 24L19.484375 24L20.761719 22 Z M 28.4375 22.113281L29.027344 23.300781L29.644531 23.300781C30.464844 23.300781 30.96875 23.535156 31.371094 23.894531C31.773438 24.257813 32.066406 24.796875 32.238281 25.429688C32.582031 26.695313 32.289063 28.339844 32.007813 28.792969L31.644531 29.371094L32.050781 29.921875C32.289063 30.238281 32.441406 30.566406 32.363281 31.007813C32.253906 31.625 32.03125 31.707031 31.589844 32.089844L31.257813 32.375L31.246094 32.8125C31.210938 33.792969 30.871094 34.777344 30.300781 35.339844L30 35.632813L30 38.988281L30.058594 39.152344C30.453125 40.25 31.335938 40.933594 32.234375 41.429688C33.132813 41.925781 34.101563 42.289063 34.976563 42.714844C35.851563 43.140625 36.609375 43.625 37.132813 44.261719C37.496094 44.699219 37.71875 45.289063 37.855469 46L18.144531 46C18.28125 45.289063 18.503906 44.699219 18.867188 44.261719C19.390625 43.625 20.148438 43.140625 21.023438 42.714844C21.898438 42.289063 22.867188 41.925781 23.765625 41.429688C24.664063 40.933594 25.546875 40.25 25.941406 39.152344L26 38.988281L26 35.523438L25.5625 35.226563C25.101563 34.914063 24.34375 33.769531 24.238281 32.742188L24.183594 32.1875L23.683594 31.945313C23.398438 31.808594 23.082031 31.753906 23.050781 31.015625C23.050781 31.015625 23.082031 30.824219 23.15625 30.65625C23.234375 30.484375 23.375 30.304688 23.332031 30.347656L23.8125 29.867188L23.542969 29.242188C22.796875 27.523438 22.898438 25.722656 23.761719 24.367188C24.550781 23.125 26.097656 22.269531 28.4375 22.113281 Z M 36.558594 24.113281L37.089844 25.199219L37.714844 25.199219C38.472656 25.199219 38.921875 25.398438 39.265625 25.691406C39.613281 25.984375 39.859375 26.414063 40.003906 26.949219C40.300781 28.019531 40.085938 29.480469 39.746094 30.144531L39.417969 30.796875L39.933594 31.308594C39.867188 31.242188 40.195313 31.785156 40.140625 32.195313C40.011719 33.175781 39.871094 33.113281 39.449219 33.390625L39.03125 33.667969L39 34.171875C38.953125 35.042969 38.515625 36.351563 38.28125 36.589844L38 36.878906L38 39.621094L38.058594 39.78125C38.4375 40.835938 39.296875 41.476563 40.167969 41.9375C41.035156 42.398438 41.980469 42.738281 42.84375 43.136719C43.707031 43.535156 44.476563 43.984375 45.019531 44.578125C45.367188 44.953125 45.601563 45.433594 45.769531 46L39.921875 46C39.757813 44.777344 39.3125 43.765625 38.675781 42.988281C37.875 42.011719 36.84375 41.398438 35.855469 40.917969C34.867188 40.4375 33.910156 40.070313 33.203125 39.679688C32.527344 39.308594 32.175781 38.953125 32 38.53125L32 36.296875C32.691406 35.421875 33.054688 34.390625 33.15625 33.34375C33.542969 33.003906 34.144531 32.417969 34.332031 31.359375C34.484375 30.492188 34.226563 29.785156 33.90625 29.210938C34.4375 27.988281 34.59375 26.460938 34.167969 24.902344C34.164063 24.886719 34.15625 24.871094 34.152344 24.855469C34.367188 24.71875 34.640625 24.5625 34.949219 24.441406C35.4375 24.25 36.007813 24.179688 36.558594 24.113281 Z M 8 27L8 29L12 29L12 27 Z M 17 27L17 29L19.753906 29L19.394531 27 Z M 8 32L8 34L12 34L12 32 Z M 17 32L17 34L20.449219 34L19.613281 32 Z M 8 37L8 39L12 39L12 37 Z M 17 37L17 39L21 39L21 37Z" data-v-d29c54ff${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "fill-black dark:fill-white",
                width: "25px",
                height: "25px",
                viewBox: "0 0 50 50",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", { d: "M7 2L7 7L2 7L2 46L14 46L14 44L4 44L4 9L9 9L9 4L29 4L29 7L11 7L11 9L34 9L34 20L36 20L36 7L31 7L31 2 Z M 8 12L8 14L12 14L12 12 Z M 17 12L17 14L21 14L21 12 Z M 26 12L26 14L30 14L30 12 Z M 8 17L8 19L12 19L12 17 Z M 17 17L17 19L21 19L21 17 Z M 26 17L26 19L30 19L30 17 Z M 29 20C25.742188 20 23.328125 21.324219 22.074219 23.296875C20.929688 25.09375 20.875 27.339844 21.59375 29.433594C21.515625 29.566406 21.402344 29.679688 21.328125 29.839844C21.171875 30.191406 21.035156 30.589844 21.054688 31.097656L21.054688 31.101563C21.109375 32.378906 21.851563 33.046875 22.398438 33.421875C22.628906 34.640625 23.207031 35.660156 24 36.390625L24 38.53125C23.824219 38.953125 23.472656 39.308594 22.796875 39.679688C22.089844 40.070313 21.132813 40.4375 20.144531 40.917969C19.15625 41.398438 18.125 42.011719 17.324219 42.988281C16.519531 43.96875 16 45.308594 16 47L16 48L48.050781 48L47.992188 46.941406C47.902344 45.363281 47.316406 44.117188 46.488281 43.222656C45.664063 42.328125 44.644531 41.765625 43.679688 41.320313C42.714844 40.875 41.785156 40.535156 41.109375 40.171875C40.464844 39.832031 40.148438 39.511719 40 39.160156L40 37.472656C40.597656 36.609375 40.859375 35.617188 40.9375 34.6875C41.414063 34.265625 41.96875 33.617188 42.125 32.457031C42.230469 31.625 42.019531 30.996094 41.695313 30.464844C42.144531 29.277344 42.328125 27.84375 41.933594 26.417969C41.707031 25.589844 41.277344 24.777344 40.5625 24.171875C40.003906 23.691406 39.238281 23.425781 38.390625 23.308594L37.75 22L37.125 22C36.097656 22 35.085938 22.238281 34.214844 22.578125C33.871094 22.714844 33.558594 22.863281 33.265625 23.027344C33.101563 22.808594 32.921875 22.601563 32.714844 22.414063C32.105469 21.863281 31.261719 21.550781 30.324219 21.421875L29.621094 20 Z M 8 22L8 24L12 24L12 22 Z M 17 22L17 24L19.484375 24L20.761719 22 Z M 28.4375 22.113281L29.027344 23.300781L29.644531 23.300781C30.464844 23.300781 30.96875 23.535156 31.371094 23.894531C31.773438 24.257813 32.066406 24.796875 32.238281 25.429688C32.582031 26.695313 32.289063 28.339844 32.007813 28.792969L31.644531 29.371094L32.050781 29.921875C32.289063 30.238281 32.441406 30.566406 32.363281 31.007813C32.253906 31.625 32.03125 31.707031 31.589844 32.089844L31.257813 32.375L31.246094 32.8125C31.210938 33.792969 30.871094 34.777344 30.300781 35.339844L30 35.632813L30 38.988281L30.058594 39.152344C30.453125 40.25 31.335938 40.933594 32.234375 41.429688C33.132813 41.925781 34.101563 42.289063 34.976563 42.714844C35.851563 43.140625 36.609375 43.625 37.132813 44.261719C37.496094 44.699219 37.71875 45.289063 37.855469 46L18.144531 46C18.28125 45.289063 18.503906 44.699219 18.867188 44.261719C19.390625 43.625 20.148438 43.140625 21.023438 42.714844C21.898438 42.289063 22.867188 41.925781 23.765625 41.429688C24.664063 40.933594 25.546875 40.25 25.941406 39.152344L26 38.988281L26 35.523438L25.5625 35.226563C25.101563 34.914063 24.34375 33.769531 24.238281 32.742188L24.183594 32.1875L23.683594 31.945313C23.398438 31.808594 23.082031 31.753906 23.050781 31.015625C23.050781 31.015625 23.082031 30.824219 23.15625 30.65625C23.234375 30.484375 23.375 30.304688 23.332031 30.347656L23.8125 29.867188L23.542969 29.242188C22.796875 27.523438 22.898438 25.722656 23.761719 24.367188C24.550781 23.125 26.097656 22.269531 28.4375 22.113281 Z M 36.558594 24.113281L37.089844 25.199219L37.714844 25.199219C38.472656 25.199219 38.921875 25.398438 39.265625 25.691406C39.613281 25.984375 39.859375 26.414063 40.003906 26.949219C40.300781 28.019531 40.085938 29.480469 39.746094 30.144531L39.417969 30.796875L39.933594 31.308594C39.867188 31.242188 40.195313 31.785156 40.140625 32.195313C40.011719 33.175781 39.871094 33.113281 39.449219 33.390625L39.03125 33.667969L39 34.171875C38.953125 35.042969 38.515625 36.351563 38.28125 36.589844L38 36.878906L38 39.621094L38.058594 39.78125C38.4375 40.835938 39.296875 41.476563 40.167969 41.9375C41.035156 42.398438 41.980469 42.738281 42.84375 43.136719C43.707031 43.535156 44.476563 43.984375 45.019531 44.578125C45.367188 44.953125 45.601563 45.433594 45.769531 46L39.921875 46C39.757813 44.777344 39.3125 43.765625 38.675781 42.988281C37.875 42.011719 36.84375 41.398438 35.855469 40.917969C34.867188 40.4375 33.910156 40.070313 33.203125 39.679688C32.527344 39.308594 32.175781 38.953125 32 38.53125L32 36.296875C32.691406 35.421875 33.054688 34.390625 33.15625 33.34375C33.542969 33.003906 34.144531 32.417969 34.332031 31.359375C34.484375 30.492188 34.226563 29.785156 33.90625 29.210938C34.4375 27.988281 34.59375 26.460938 34.167969 24.902344C34.164063 24.886719 34.15625 24.871094 34.152344 24.855469C34.367188 24.71875 34.640625 24.5625 34.949219 24.441406C35.4375 24.25 36.007813 24.179688 36.558594 24.113281 Z M 8 27L8 29L12 29L12 27 Z M 17 27L17 29L19.753906 29L19.394531 27 Z M 8 32L8 34L12 34L12 32 Z M 17 32L17 34L20.449219 34L19.613281 32 Z M 8 37L8 39L12 39L12 37 Z M 17 37L17 39L21 39L21 37Z" })
              ]))
            ];
          }
        }),
        navLink: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(loadCurrentUser).user.role === "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u0430\u0439\u0442\u0430") {
              _push2(`<p data-v-d29c54ff${_scopeId}>${ssrInterpolate(_ctx.$t("\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"))}</p>`);
            } else {
              _push2(`<p data-v-d29c54ff${_scopeId}>${ssrInterpolate(_ctx.$t("\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F"))}</p>`);
            }
          } else {
            return [
              unref(loadCurrentUser).user.role === "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u0430\u0439\u0442\u0430" ? (openBlock(), createBlock("p", { key: 0 }, toDisplayString(_ctx.$t("\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0438")), 1)) : (openBlock(), createBlock("p", { key: 1 }, toDisplayString(_ctx.$t("\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F")), 1))
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(loadCurrentUser).user.role_en !== "admin") {
        _push(ssrRenderComponent(_component_HeaderNavLinks, {
          activeNav: __props.activeNav,
          to: "/base/companies/department",
          class: "flex items-center gap-x-6"
        }, {
          navIcon: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg class="dark:stroke-white stroke-black" fill="none" width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-d29c54ff${_scopeId}><path d="M5.04146 3C5.22009 2.6906 5.55022 2.5 5.90748 2.5L9.75278 2.5C10.11 2.5 10.4402 2.6906 10.6188 3L12.5415 6.33013C12.7201 6.63953 12.7201 7.02073 12.5415 7.33013L10.6188 10.6603C10.4402 10.9697 10.11 11.1603 9.75278 11.1603H5.90748C5.55022 11.1603 5.22009 10.9697 5.04146 10.6603L3.11881 7.33013C2.94017 7.02073 2.94017 6.63953 3.11881 6.33013L5.04146 3Z" data-v-d29c54ff${_scopeId}></path><path d="M5.1216 13.2272C5.30023 12.9178 5.63036 12.7272 5.98762 12.7272H9.83292C10.1902 12.7272 10.5203 12.9178 10.6989 13.2272L12.6216 16.5574C12.8002 16.8668 12.8002 17.248 12.6216 17.5574L10.6989 20.8875C10.5203 21.1969 10.1902 21.3875 9.83292 21.3875H5.98762C5.63036 21.3875 5.30023 21.1969 5.1216 20.8875L3.19895 17.5574C3.02031 17.248 3.02031 16.8668 3.19895 16.5574L5.1216 13.2272Z" data-v-d29c54ff${_scopeId}></path><path d="M14.1216 8.22723C14.3002 7.91783 14.6304 7.72723 14.9876 7.72723L18.8329 7.72723C19.1902 7.72723 19.5203 7.91783 19.6989 8.22723L21.6216 11.5574C21.8002 11.8668 21.8002 12.248 21.6216 12.5574L19.6989 15.8875C19.5203 16.1969 19.1902 16.3875 18.8329 16.3875H14.9876C14.6304 16.3875 14.3002 16.1969 14.1216 15.8875L12.1989 12.5574C12.0203 12.248 12.0203 11.8668 12.1989 11.5574L14.1216 8.22723Z" data-v-d29c54ff${_scopeId}></path></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  class: "dark:stroke-white stroke-black",
                  fill: "none",
                  width: "25px",
                  height: "25px",
                  viewBox: "0 0 24 24",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", { d: "M5.04146 3C5.22009 2.6906 5.55022 2.5 5.90748 2.5L9.75278 2.5C10.11 2.5 10.4402 2.6906 10.6188 3L12.5415 6.33013C12.7201 6.63953 12.7201 7.02073 12.5415 7.33013L10.6188 10.6603C10.4402 10.9697 10.11 11.1603 9.75278 11.1603H5.90748C5.55022 11.1603 5.22009 10.9697 5.04146 10.6603L3.11881 7.33013C2.94017 7.02073 2.94017 6.63953 3.11881 6.33013L5.04146 3Z" }),
                  createVNode("path", { d: "M5.1216 13.2272C5.30023 12.9178 5.63036 12.7272 5.98762 12.7272H9.83292C10.1902 12.7272 10.5203 12.9178 10.6989 13.2272L12.6216 16.5574C12.8002 16.8668 12.8002 17.248 12.6216 17.5574L10.6989 20.8875C10.5203 21.1969 10.1902 21.3875 9.83292 21.3875H5.98762C5.63036 21.3875 5.30023 21.1969 5.1216 20.8875L3.19895 17.5574C3.02031 17.248 3.02031 16.8668 3.19895 16.5574L5.1216 13.2272Z" }),
                  createVNode("path", { d: "M14.1216 8.22723C14.3002 7.91783 14.6304 7.72723 14.9876 7.72723L18.8329 7.72723C19.1902 7.72723 19.5203 7.91783 19.6989 8.22723L21.6216 11.5574C21.8002 11.8668 21.8002 12.248 21.6216 12.5574L19.6989 15.8875C19.5203 16.1969 19.1902 16.3875 18.8329 16.3875H14.9876C14.6304 16.3875 14.3002 16.1969 14.1216 15.8875L12.1989 12.5574C12.0203 12.248 12.0203 11.8668 12.1989 11.5574L14.1216 8.22723Z" })
                ]))
              ];
            }
          }),
          navLink: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p data-v-d29c54ff${_scopeId}>${ssrInterpolate(_ctx.$t("\u0414\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442\u044B"))}</p>`);
            } else {
              return [
                createVNode("p", null, toDisplayString(_ctx.$t("\u0414\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442\u044B")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(loadCurrentUser).user.role_en !== "admin") {
        _push(ssrRenderComponent(_component_HeaderNavLinks, {
          activeNav: __props.activeNav,
          to: "/base/tree",
          class: "flex items-center gap-x-6"
        }, {
          navIcon: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg class="fill-black dark:fill-white" width="25px" height="25px" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg" data-v-d29c54ff${_scopeId}><path d="M23,9h6a2,2,0,0,0,2-2V3a2,2,0,0,0-2-2H23a2,2,0,0,0-2,2V4H11V3A2,2,0,0,0,9,1H3A2,2,0,0,0,1,3V7A2,2,0,0,0,3,9H9a2,2,0,0,0,2-2V6h4V26a2.0023,2.0023,0,0,0,2,2h4v1a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V25a2,2,0,0,0-2-2H23a2,2,0,0,0-2,2v1H17V17h4v1a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V14a2,2,0,0,0-2-2H23a2,2,0,0,0-2,2v1H17V6h4V7A2,2,0,0,0,23,9Zm0-6h6V7H23ZM9,7H3V3H9ZM23,25h6v4H23Zm0-11h6v4H23Z" transform="translate(0 0.0049)" data-v-d29c54ff${_scopeId}></path><rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" fill="none" width="32" height="32" data-v-d29c54ff${_scopeId}></rect></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  class: "fill-black dark:fill-white",
                  width: "25px",
                  height: "25px",
                  viewBox: "0 0 32 32",
                  id: "icon",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    d: "M23,9h6a2,2,0,0,0,2-2V3a2,2,0,0,0-2-2H23a2,2,0,0,0-2,2V4H11V3A2,2,0,0,0,9,1H3A2,2,0,0,0,1,3V7A2,2,0,0,0,3,9H9a2,2,0,0,0,2-2V6h4V26a2.0023,2.0023,0,0,0,2,2h4v1a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V25a2,2,0,0,0-2-2H23a2,2,0,0,0-2,2v1H17V17h4v1a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V14a2,2,0,0,0-2-2H23a2,2,0,0,0-2,2v1H17V6h4V7A2,2,0,0,0,23,9Zm0-6h6V7H23ZM9,7H3V3H9ZM23,25h6v4H23Zm0-11h6v4H23Z",
                    transform: "translate(0 0.0049)"
                  }),
                  createVNode("rect", {
                    id: "_Transparent_Rectangle_",
                    "data-name": "<Transparent Rectangle>",
                    fill: "none",
                    width: "32",
                    height: "32"
                  })
                ]))
              ];
            }
          }),
          navLink: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p data-v-d29c54ff${_scopeId}>${ssrInterpolate(_ctx.$t("\u0414\u0435\u0440\u0435\u0432\u043E"))}</p>`);
            } else {
              return [
                createVNode("p", null, toDisplayString(_ctx.$t("\u0414\u0435\u0440\u0435\u0432\u043E")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(loadCurrentUser).user.role_en !== "admin") {
        _push(ssrRenderComponent(_component_HeaderNavLinks, {
          activeNav: __props.activeNav,
          to: "/base/objects",
          class: "flex items-center gap-x-6"
        }, {
          navIcon: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg width="25px" height="25px" class="stroke-black dark:stroke-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-d29c54ff${_scopeId}><path d="M20.3873 7.1575L11.9999 12L3.60913 7.14978" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" data-v-d29c54ff${_scopeId}></path><path d="M12 12V21" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" data-v-d29c54ff${_scopeId}></path><path d="M11 2.57735C11.6188 2.22008 12.3812 2.22008 13 2.57735L19.6603 6.42265C20.2791 6.77992 20.6603 7.44017 20.6603 8.1547V15.8453C20.6603 16.5598 20.2791 17.2201 19.6603 17.5774L13 21.4226C12.3812 21.7799 11.6188 21.7799 11 21.4226L4.33975 17.5774C3.72094 17.2201 3.33975 16.5598 3.33975 15.8453V8.1547C3.33975 7.44017 3.72094 6.77992 4.33975 6.42265L11 2.57735Z" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" data-v-d29c54ff${_scopeId}></path></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  width: "25px",
                  height: "25px",
                  class: "stroke-black dark:stroke-white",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    d: "M20.3873 7.1575L11.9999 12L3.60913 7.14978",
                    "stroke-width": "1.3",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }),
                  createVNode("path", {
                    d: "M12 12V21",
                    "stroke-width": "1.3",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }),
                  createVNode("path", {
                    d: "M11 2.57735C11.6188 2.22008 12.3812 2.22008 13 2.57735L19.6603 6.42265C20.2791 6.77992 20.6603 7.44017 20.6603 8.1547V15.8453C20.6603 16.5598 20.2791 17.2201 19.6603 17.5774L13 21.4226C12.3812 21.7799 11.6188 21.7799 11 21.4226L4.33975 17.5774C3.72094 17.2201 3.33975 16.5598 3.33975 15.8453V8.1547C3.33975 7.44017 3.72094 6.77992 4.33975 6.42265L11 2.57735Z",
                    "stroke-width": "1.3",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                ]))
              ];
            }
          }),
          navLink: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p data-v-d29c54ff${_scopeId}>${ssrInterpolate(_ctx.$t("\u041E\u0431\u044A\u0435\u043A\u0442\u044B"))}</p>`);
            } else {
              return [
                createVNode("p", null, toDisplayString(_ctx.$t("\u041E\u0431\u044A\u0435\u043A\u0442\u044B")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(loadCurrentUser).user.role_en !== "admin") {
        _push(ssrRenderComponent(_component_HeaderNavLinks, {
          activeNav: __props.activeNav,
          to: "/base/chat",
          class: "flex items-center gap-x-6"
        }, {
          navIcon: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg width="25px" height="25px" class="dark:stroke-white stroke-black" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000" data-v-d29c54ff${_scopeId}><line x1="16" y1="20" x2="48" y2="20" stroke-width="2" data-v-d29c54ff${_scopeId}></line><line x1="16" y1="30" x2="48" y2="30" stroke-width="2" data-v-d29c54ff${_scopeId}></line><line x1="16" y1="40" x2="48" y2="40" stroke-width="2" data-v-d29c54ff${_scopeId}></line><path d="m56 56-12-4H17.16A9.16 9.16 0 0 1 8 42.84V17.16A9.16 9.16 0 0 1 17.16 8h29.68A9.16 9.16 0 0 1 56 17.16z" stroke-width="2" data-v-d29c54ff${_scopeId}></path></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  width: "25px",
                  height: "25px",
                  class: "dark:stroke-white stroke-black",
                  viewBox: "0 0 60 60",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  stroke: "#000000"
                }, [
                  createVNode("line", {
                    x1: "16",
                    y1: "20",
                    x2: "48",
                    y2: "20",
                    "stroke-width": "2"
                  }),
                  createVNode("line", {
                    x1: "16",
                    y1: "30",
                    x2: "48",
                    y2: "30",
                    "stroke-width": "2"
                  }),
                  createVNode("line", {
                    x1: "16",
                    y1: "40",
                    x2: "48",
                    y2: "40",
                    "stroke-width": "2"
                  }),
                  createVNode("path", {
                    d: "m56 56-12-4H17.16A9.16 9.16 0 0 1 8 42.84V17.16A9.16 9.16 0 0 1 17.16 8h29.68A9.16 9.16 0 0 1 56 17.16z",
                    "stroke-width": "2"
                  })
                ]))
              ];
            }
          }),
          navLink: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p data-v-d29c54ff${_scopeId}>${ssrInterpolate(_ctx.$t("\u0427\u0430\u0442"))}</p>`);
            } else {
              return [
                createVNode("p", null, toDisplayString(_ctx.$t("\u0427\u0430\u0442")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(loadCurrentUser).user.role_en !== "admin") {
        _push(ssrRenderComponent(_component_HeaderNavLinks, {
          activeNav: __props.activeNav,
          to: "/base/cloud",
          class: "flex items-center gap-x-6"
        }, {
          navIcon: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg width="25px" class="dark:stroke-white stroke-black" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-d29c54ff${_scopeId}><path d="M9.34 21H6C4.93913 21 3.92172 20.5785 3.17157 19.8284C2.42142 19.0782 2 18.0609 2 17V7C2 5.93913 2.42142 4.92165 3.17157 4.17151C3.92172 3.42136 4.93913 3 6 3H8C8.69805 3.00421 9.38284 3.19101 9.98633 3.54187C10.5898 3.89273 11.091 4.39545 11.44 5C11.797 5.60635 12.3055 6.10947 12.9156 6.46008C13.5256 6.8107 14.2164 6.99678 14.92 7H18C19.0609 7 20.0783 7.42136 20.8284 8.17151C21.5786 8.92165 22 9.93913 22 11V12.5499" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-d29c54ff${_scopeId}></path><path d="M20 21C20.663 21.0437 21.3163 20.8223 21.8161 20.3844C22.3159 19.9465 22.6212 19.3279 22.665 18.6649C22.7088 18.0019 22.4873 17.3486 22.0494 16.8489C21.6115 16.3491 20.993 16.0437 20.33 16C20.0949 15.3317 19.6309 14.768 19.0201 14.409C18.4092 14.0501 17.6911 13.9189 16.9928 14.0387C16.2945 14.1585 15.6612 14.5215 15.2049 15.0635C14.7487 15.6055 14.4989 16.2915 14.5 17C13.9696 17 13.4609 17.2107 13.0858 17.5858C12.7107 17.9609 12.5 18.4696 12.5 19C12.5 19.5304 12.7107 20.0391 13.0858 20.4142C13.4609 20.7892 13.9696 21 14.5 21H20Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-d29c54ff${_scopeId}></path></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  width: "25px",
                  class: "dark:stroke-white stroke-black",
                  height: "25px",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    d: "M9.34 21H6C4.93913 21 3.92172 20.5785 3.17157 19.8284C2.42142 19.0782 2 18.0609 2 17V7C2 5.93913 2.42142 4.92165 3.17157 4.17151C3.92172 3.42136 4.93913 3 6 3H8C8.69805 3.00421 9.38284 3.19101 9.98633 3.54187C10.5898 3.89273 11.091 4.39545 11.44 5C11.797 5.60635 12.3055 6.10947 12.9156 6.46008C13.5256 6.8107 14.2164 6.99678 14.92 7H18C19.0609 7 20.0783 7.42136 20.8284 8.17151C21.5786 8.92165 22 9.93913 22 11V12.5499",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }),
                  createVNode("path", {
                    d: "M20 21C20.663 21.0437 21.3163 20.8223 21.8161 20.3844C22.3159 19.9465 22.6212 19.3279 22.665 18.6649C22.7088 18.0019 22.4873 17.3486 22.0494 16.8489C21.6115 16.3491 20.993 16.0437 20.33 16C20.0949 15.3317 19.6309 14.768 19.0201 14.409C18.4092 14.0501 17.6911 13.9189 16.9928 14.0387C16.2945 14.1585 15.6612 14.5215 15.2049 15.0635C14.7487 15.6055 14.4989 16.2915 14.5 17C13.9696 17 13.4609 17.2107 13.0858 17.5858C12.7107 17.9609 12.5 18.4696 12.5 19C12.5 19.5304 12.7107 20.0391 13.0858 20.4142C13.4609 20.7892 13.9696 21 14.5 21H20Z",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                ]))
              ];
            }
          }),
          navLink: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p data-v-d29c54ff${_scopeId}>${ssrInterpolate(_ctx.$t("\u041E\u0431\u043B\u0430\u043A\u043E"))}</p>`);
            } else {
              return [
                createVNode("p", null, toDisplayString(_ctx.$t("\u041E\u0431\u043B\u0430\u043A\u043E")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([{ "mx-auto": !__props.activeNav }, "h-full transition-all duration-500"])}" data-v-d29c54ff>`);
      _push(ssrRenderComponent(_sfc_main$7, {
        class: "rounded-full flex items-center gap-x-2 hover:dark:bg-cyan hover:bg-cyan transition-all duration-200 p-2",
        onClick: ($event) => logOut()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-d29c54ff${_scopeId}><svg width="30px" class="stroke-red-400" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-d29c54ff${_scopeId}><path d="M9 4.5H8C5.64298 4.5 4.46447 4.5 3.73223 5.23223C3 5.96447 3 7.14298 3 9.5V14.5C3 16.857 3 18.0355 3.73223 18.7678C4.46447 19.5 5.64298 19.5 8 19.5H9" stroke-width="1.5" data-v-d29c54ff${_scopeId}></path><path d="M9 6.4764C9 4.18259 9 3.03569 9.70725 2.4087C10.4145 1.78171 11.4955 1.97026 13.6576 2.34736L15.9864 2.75354C18.3809 3.17118 19.5781 3.37999 20.2891 4.25826C21 5.13652 21 6.40672 21 8.94711V15.0529C21 17.5933 21 18.8635 20.2891 19.7417C19.5781 20.62 18.3809 20.8288 15.9864 21.2465L13.6576 21.6526C11.4955 22.0297 10.4145 22.2183 9.70725 21.5913C9 20.9643 9 19.8174 9 17.5236V6.4764Z" stroke-width="1.5" data-v-d29c54ff${_scopeId}></path><path d="M12 11V13" stroke-width="1.5" stroke-linecap="round" data-v-d29c54ff${_scopeId}></path></svg></div>`);
            if (__props.activeNav) {
              _push2(`<p class="font-medium dark:text-white text-black" data-v-d29c54ff${_scopeId}>${ssrInterpolate(_ctx.$t("\u0412\u044B\u0439\u0442\u0438"))}</p>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", null, [
                (openBlock(), createBlock("svg", {
                  width: "30px",
                  class: "stroke-red-400",
                  height: "30px",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    d: "M9 4.5H8C5.64298 4.5 4.46447 4.5 3.73223 5.23223C3 5.96447 3 7.14298 3 9.5V14.5C3 16.857 3 18.0355 3.73223 18.7678C4.46447 19.5 5.64298 19.5 8 19.5H9",
                    "stroke-width": "1.5"
                  }),
                  createVNode("path", {
                    d: "M9 6.4764C9 4.18259 9 3.03569 9.70725 2.4087C10.4145 1.78171 11.4955 1.97026 13.6576 2.34736L15.9864 2.75354C18.3809 3.17118 19.5781 3.37999 20.2891 4.25826C21 5.13652 21 6.40672 21 8.94711V15.0529C21 17.5933 21 18.8635 20.2891 19.7417C19.5781 20.62 18.3809 20.8288 15.9864 21.2465L13.6576 21.6526C11.4955 22.0297 10.4145 22.2183 9.70725 21.5913C9 20.9643 9 19.8174 9 17.5236V6.4764Z",
                    "stroke-width": "1.5"
                  }),
                  createVNode("path", {
                    d: "M12 11V13",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round"
                  })
                ]))
              ]),
              __props.activeNav ? (openBlock(), createBlock("p", {
                key: 0,
                class: "font-medium dark:text-white text-black"
              }, toDisplayString(_ctx.$t("\u0412\u044B\u0439\u0442\u0438")), 1)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheHeader.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-d29c54ff"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "HeaderContentLink",
  __ssrInlineRender: true,
  props: {
    to: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: __props.to,
        class: "flex select-none items-center gap-x-6 hover:bg-semiCyan p-2 rounded-lg transition-all duration-200 cursor-pointer"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="dark:fill-white"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "headerContentIcon", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div><p class="dark:text-white"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "headerContentText", {}, null, _push2, _parent2, _scopeId);
            _push2(`</p>`);
          } else {
            return [
              createVNode("div", { class: "dark:fill-white" }, [
                renderSlot(_ctx.$slots, "headerContentIcon")
              ]),
              createVNode("p", { class: "dark:text-white" }, [
                renderSlot(_ctx.$slots, "headerContentText")
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/HeaderUI/HeaderContentLink.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const useColorMode = () => {
  return useState("color-mode").value;
};
const useNotification = defineStore("notification", {
  state: () => ({
    notification: []
  }),
  getters: {
    get_notification(notification) {
      return this.notification;
    }
  },
  actions: {
    loadNotification() {
      axios.get(`api/v1/notification/notification-list`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        this.notification = res.data;
      });
    },
    readNotice(params) {
      axios.post(`api/v1/notification/make-read/${params.id}`, {}, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        this.notification = res.data;
        this.loadNotification();
        toast.success("\u041F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043E", { autoClose: 1500, theme: "auto" });
      });
    }
  }
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "HeaderContentNotification",
  __ssrInlineRender: true,
  setup(__props) {
    const notification = useNotification();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div><svg width="25px" height="25px" class="fill-gray-400 dark:fill-white ml-auto" viewBox="-2 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" data-v-inspector="components/Header/HeaderContent.vue:24:15"><g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd" data-v-inspector="components/Header/HeaderContent.vue:26:17"><g id="Icon-Set" transform="translate(-466.000000, -931.000000)" data-v-inspector="components/Header/HeaderContent.vue:27:19"><path d="M490,931 L470,931 C467.791,931 466,932.791 466,935 L466,955 C466,957.209 467.791,959 470,959 L473,959 L473,957 L470,957 C468.896,957 468,956.104 468,955 L468,935 C468,933.896 468.896,933 470,933 L490,933 C491.104,933 492,933.896 492,935 L492,955 C492,956.104 491.104,957 490,957 L487,957 L487,959 L490,959 C492.209,959 494,957.209 494,955 L494,935 C494,932.791 492.209,931 490,931 L490,931 Z M487.657,944.243 L480.758,937.343 C480.549,937.135 480.272,937.046 480,937.06 C479.728,937.046 479.451,937.135 479.243,937.343 L472.343,944.243 C471.952,944.633 471.952,945.267 472.343,945.657 C472.733,946.048 473.367,946.048 473.758,945.657 L479,940.414 L479,962 C479,962.553 479.447,963 480,963 C480.552,963 481,962.553 481,962 L481,940.414 L486.243,945.657 C486.633,946.048 487.267,946.048 487.657,945.657 C488.048,945.267 488.048,944.633 487.657,944.243 L487.657,944.243 Z" id="arrow-top" data-v-inspector="components/Header/HeaderContent.vue:28:21"></path></g></g></svg></div>`);
      _push(ssrRenderComponent(_sfc_main$8, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="my-2 flex flex-col gap-y-4 h-full max-md:h-full max-md:max-h-[90%] max-h-[400px] overflow-y-scroll pr-2"><!--[-->`);
      ssrRenderList(unref(notification).get_notification, (notice, i) => {
        _push(`<div class="${ssrRenderClass([{ "dark:bg-gray-700 bg-gray-300": notice.read === true }, "p-2 border relative dark:hover:bg-gray-700 hover:bg-gray-200 cursor-pointer transition-all duration-200 rounded-lg dark:border-gray-500"])}">`);
        if (notice.read) {
          _push(`<div class="absolute bottom-1 left-2 text-[11px]"><svg class="fill-semiCyan" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.4933 6.93502C15.8053 7.20743 15.8374 7.68122 15.565 7.99325L7.70786 16.9933C7.56543 17.1564 7.35943 17.25 7.14287 17.25C6.9263 17.25 6.72031 17.1564 6.57788 16.9933L3.43502 13.3933C3.16261 13.0812 3.19473 12.6074 3.50677 12.335C3.8188 12.0626 4.29259 12.0947 4.565 12.4068L7.14287 15.3596L14.435 7.00677C14.7074 6.69473 15.1812 6.66261 15.4933 6.93502Z"></path>`);
          if (notice.read === true) {
            _push(`<path fill-rule="evenodd" clip-rule="evenodd" d="M20.5175 7.01946C20.8174 7.30513 20.829 7.77986 20.5433 8.07981L11.9716 17.0798C11.8201 17.2389 11.6065 17.3235 11.3872 17.3114C11.1679 17.2993 10.9649 17.1917 10.8318 17.0169L10.4035 16.4544C10.1526 16.1249 10.2163 15.6543 10.5458 15.4034C10.8289 15.1878 11.2161 15.2044 11.4787 15.4223L19.4571 7.04531C19.7428 6.74537 20.2175 6.73379 20.5175 7.01946Z"></path>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</svg></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex justify-between gap-x-4 dark:text-white text-black"><div class="w-full"><p class="text-center">${ssrInterpolate(notice.text)}</p></div><div class="border-r"></div><div class="text-end text-[12px]"><p>${ssrInterpolate(new Date(notice.created_at).toLocaleDateString())}</p><p>${ssrInterpolate(new Date(notice.created_at).toLocaleTimeString().slice(0, 5))}</p></div></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/HeaderUI/HeaderContentNotification.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "HeaderContentElems",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    const route = useRoute();
    const router = useRouter();
    const loadNotification = useNotification();
    const loadCurrentUser = useAuthStore();
    const colorMode = useColorMode();
    let readCount = 0;
    watchSyncEffect(() => {
      var _a, _b;
      for (let i = 0; i < ((_a = loadNotification.get_notification) == null ? void 0 : _a.length); i++) {
        if (((_b = loadNotification.get_notification[i]) == null ? void 0 : _b.read) === false) {
          readCount += 1;
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center max-md:justify-center gap-x-8" }, _attrs))}><div class="cursor-pointer transition-all duration-300">`);
      if (unref(colorMode).preference === "light") {
        _push(`<div class="hover:rounded-full hover:bg-gray-100 max-[800px]:p-2 transition-all"><svg version="1.1" width="30px" height="30px" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 438.2 438.2" xml:space="preserve"><g><g id="XMLID_2_"><g><path style="${ssrRenderStyle({ "fill": "#F4581B" })}" d="M327.884,124.839c32.8,18.61,54.92,53.85,54.92,94.26s-22.12,75.65-54.92,94.25
                        c-42.33-10.46-73.71-48.69-73.71-94.25c0-45.57,31.38-83.79,73.71-94.25V124.839z"></path><path style="${ssrRenderStyle({ "fill": "#F7CF52" })}" d="M327.884,124.839v0.01c-42.33,10.46-73.71,48.68-73.71,94.25c0,45.56,31.38,83.79,73.71,94.25
                        c-15.76,8.95-33.98,14.06-53.39,14.06c-59.82,0-108.31-48.49-108.31-108.31s48.49-108.32,108.31-108.32
                        C293.904,110.779,312.124,115.889,327.884,124.839z"></path></g></g><rect x="266.996" y="348.358" style="${ssrRenderStyle({ "fill": "#F7CF52" })}" width="15" height="89.842"></rect><rect x="266.996" style="${ssrRenderStyle({ "fill": "#F7CF52" })}" width="15" height="89.842"></rect><rect x="143.838" y="297.341" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 16.3354 691.2888)" style="${ssrRenderStyle({ "fill": "#F7CF52" })}" width="15" height="89.841"></rect><rect x="55.396" y="211.6" style="${ssrRenderStyle({ "fill": "#F7CF52" })}" width="89.842" height="15"></rect><rect x="106.412" y="88.435" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 190.5049 270.7802)" style="${ssrRenderStyle({ "fill": "#F7CF52" })}" width="89.841" height="15"></rect><g><rect x="313.124" y="347.297" transform="matrix(-0.3826 -0.9239 0.9239 -0.3826 129.4419 796.0912)" style="${ssrRenderStyle({ "fill": "#F4581B" })}" width="35.174" height="15"></rect><rect x="200.701" y="75.897" transform="matrix(-0.3826 -0.9239 0.9239 -0.3826 224.7537 316.9841)" style="${ssrRenderStyle({ "fill": "#F4581B" })}" width="35.174" height="15"></rect><rect x="210.785" y="337.209" transform="matrix(-0.9239 -0.3826 0.3826 -0.9239 284.2135 766.1119)" style="${ssrRenderStyle({ "fill": "#F4581B" })}" width="15" height="35.174"></rect><rect x="323.201" y="65.81" transform="matrix(-0.9239 -0.3826 0.3826 -0.9239 604.3321 286.9755)" style="${ssrRenderStyle({ "fill": "#F4581B" })}" width="15" height="35.174"></rect><rect x="131.296" y="257.715" transform="matrix(-0.3826 -0.9239 0.9239 -0.3826 -62.4538 508.8688)" style="${ssrRenderStyle({ "fill": "#F4581B" })}" width="15" height="35.174"></rect><rect x="121.209" y="155.389" transform="matrix(-0.9239 -0.3826 0.3826 -0.9239 204.7084 366.4883)" style="${ssrRenderStyle({ "fill": "#F4581B" })}" width="35.174" height="15"></rect></g></g></svg></div>`);
      } else {
        _push(`<div class="hover:dark:bg-gray-500 hover:rounded-full hover:bg-gray-100 hover:p-2 max-[800px]:p-2 transition-all"><svg height="25px" width="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 380.446 380.446" xml:space="preserve"><g><path style="${ssrRenderStyle({ "fill": "#F7CF52" })}" d="M363.262,116.333c-2.68-1.227-6.508-2.734-11.101-4.075c-4.594-1.346-9.953-2.546-15.695-3.34
                  c-2.472-0.353-5.024-0.611-7.607-0.81c-0.199-2.583-0.457-5.135-0.81-7.607c-0.795-5.742-1.994-11.101-3.34-15.695
                  c-1.341-4.594-2.848-8.422-4.075-11.101c-1.214-2.68-2.16-4.211-2.16-4.211s-0.946,1.531-2.16,4.211
                  c-1.227,2.679-2.734,6.508-4.075,11.101c-1.347,4.594-2.546,9.953-3.34,15.695c-0.352,2.466-0.609,5.011-0.808,7.589
                  c-2.584,0.196-5.136,0.451-7.609,0.802c-2.871,0.399-5.646,0.892-8.278,1.456c-2.632,0.552-5.12,1.229-7.417,1.881
                  c-2.297,0.684-4.402,1.386-6.268,2.087c-1.866,0.706-3.493,1.383-4.833,2.005c-2.68,1.22-4.211,2.172-4.211,2.172
                  s1.531,0.952,4.211,2.172c1.34,0.622,2.967,1.299,4.833,2.005c1.866,0.702,3.972,1.404,6.268,2.088
                  c2.297,0.652,4.785,1.329,7.417,1.881c2.632,0.565,5.407,1.057,8.278,1.456c2.467,0.349,5.013,0.604,7.59,0.8
                  c0.196,2.577,0.451,5.124,0.8,7.59c0.399,2.871,0.891,5.646,1.456,8.278c0.552,2.632,1.229,5.12,1.881,7.417
                  c0.684,2.297,1.386,4.402,2.088,6.269c0.706,1.866,1.383,3.493,2.005,4.833c1.22,2.68,2.172,4.211,2.172,4.211
                  s0.952-1.531,2.172-4.211c0.622-1.34,1.299-2.967,2.005-4.833c0.701-1.866,1.404-3.972,2.088-6.269
                  c0.651-2.297,1.328-4.785,1.881-7.417c0.565-2.632,1.057-5.407,1.456-8.278c0.35-2.473,0.606-5.025,0.802-7.609
                  c2.577-0.199,5.122-0.457,7.589-0.808c5.742-0.794,11.101-1.994,15.695-3.34c4.594-1.341,8.422-2.848,11.101-4.075
                  c2.68-1.214,4.211-2.16,4.211-2.16S365.942,117.547,363.262,116.333z"></path><path style="${ssrRenderStyle({ "fill": "#F7CF52" })}" d="M299.845,229.947c-0.41-0.309-1.012-0.843-1.777-1.362c-1.531-1.083-3.719-2.415-6.344-3.599
                  c-2.625-1.189-5.687-2.248-8.969-2.95c-0.504-0.111-1.022-0.197-1.535-0.291c-0.094-0.513-0.179-1.031-0.29-1.535
                  c-0.702-3.281-1.76-6.344-2.95-8.969c-1.184-2.625-2.515-4.813-3.599-6.344c-0.519-0.766-1.053-1.367-1.362-1.777
                  c-0.332-0.41-0.546-0.629-0.546-0.629s-0.213,0.219-0.546,0.629c-0.309,0.41-0.843,1.012-1.362,1.777
                  c-1.083,1.531-2.414,3.719-3.599,6.344c-1.189,2.625-2.248,5.687-2.95,8.969c-0.109,0.497-0.194,1.007-0.286,1.513
                  c-0.515,0.093-1.034,0.178-1.539,0.289c-1.641,0.353-3.227,0.787-4.73,1.286c-1.504,0.488-2.926,1.086-4.238,1.661
                  c-1.313,0.604-2.516,1.224-3.582,1.844c-1.066,0.623-1.996,1.221-2.762,1.771c-0.766,0.523-1.367,1.058-1.777,1.37
                  c-0.41,0.334-0.629,0.549-0.629,0.549s0.219,0.215,0.629,0.549c0.41,0.311,1.012,0.847,1.777,1.37
                  c0.766,0.549,1.695,1.147,2.762,1.771c1.066,0.62,2.27,1.24,3.582,1.843c1.313,0.576,2.734,1.173,4.238,1.661
                  c1.504,0.499,3.09,0.934,4.73,1.286c0.498,0.109,1.01,0.193,1.517,0.285c0.092,0.507,0.176,1.019,0.285,1.517
                  c0.353,1.641,0.787,3.226,1.286,4.73c0.488,1.504,1.086,2.926,1.661,4.238c0.604,1.313,1.224,2.516,1.844,3.582
                  c0.623,1.066,1.221,1.996,1.771,2.762c0.522,0.766,1.058,1.367,1.369,1.777c0.334,0.41,0.549,0.629,0.549,0.629
                  s0.215-0.219,0.549-0.629c0.311-0.41,0.847-1.012,1.369-1.777c0.549-0.766,1.147-1.695,1.771-2.762
                  c0.619-1.066,1.24-2.27,1.844-3.582c0.575-1.313,1.173-2.734,1.661-4.238c0.499-1.504,0.933-3.09,1.286-4.73
                  c0.111-0.506,0.196-1.024,0.289-1.54c0.506-0.092,1.016-0.177,1.513-0.286c3.281-0.702,6.344-1.76,8.969-2.95
                  c2.625-1.184,4.813-2.515,6.344-3.599c0.766-0.519,1.367-1.053,1.777-1.362c0.41-0.333,0.629-0.546,0.629-0.546
                  S300.255,230.279,299.845,229.947z"></path><path style="${ssrRenderStyle({ "fill": "#F7CF52" })}" d="M71.311,47.918c-0.432-0.325-1.066-0.888-1.873-1.434c-1.613-1.142-3.918-2.544-6.683-3.792
                  c-2.766-1.253-5.992-2.368-9.449-3.108c-0.531-0.117-1.076-0.207-1.617-0.306c-0.099-0.541-0.189-1.086-0.306-1.617
                  c-0.739-3.457-1.855-6.683-3.108-9.449c-1.248-2.766-2.65-5.07-3.791-6.684c-0.547-0.806-1.11-1.44-1.435-1.872
                  c-0.35-0.432-0.575-0.663-0.575-0.663s-0.225,0.23-0.575,0.663c-0.325,0.432-0.888,1.066-1.435,1.872
                  c-1.141,1.613-2.544,3.918-3.791,6.684c-1.253,2.766-2.369,5.992-3.108,9.449c-0.115,0.523-0.204,1.061-0.301,1.594
                  c-0.543,0.098-1.089,0.188-1.622,0.304c-1.728,0.372-3.399,0.83-4.984,1.355c-1.584,0.514-3.083,1.144-4.465,1.75
                  c-1.383,0.636-2.65,1.29-3.774,1.942c-1.124,0.657-2.103,1.286-2.91,1.865c-0.807,0.551-1.44,1.115-1.873,1.443
                  c-0.432,0.352-0.663,0.578-0.663,0.578s0.23,0.227,0.663,0.578c0.432,0.328,1.066,0.892,1.873,1.443
                  c0.807,0.579,1.786,1.209,2.91,1.865c1.124,0.653,2.391,1.306,3.774,1.942c1.383,0.606,2.881,1.236,4.465,1.75
                  c1.584,0.525,3.255,0.983,4.984,1.355c0.525,0.115,1.064,0.203,1.598,0.3c0.097,0.534,0.185,1.073,0.3,1.598
                  c0.372,1.729,0.829,3.399,1.355,4.984c0.514,1.584,1.144,3.083,1.75,4.465c0.636,1.383,1.29,2.65,1.942,3.774
                  c0.656,1.124,1.287,2.103,1.865,2.909c0.551,0.807,1.115,1.44,1.443,1.873c0.352,0.432,0.578,0.663,0.578,0.663
                  s0.227-0.23,0.578-0.663c0.328-0.432,0.892-1.066,1.443-1.873c0.579-0.807,1.209-1.786,1.865-2.909
                  c0.653-1.124,1.306-2.391,1.942-3.774c0.606-1.383,1.236-2.881,1.75-4.465c0.526-1.584,0.983-3.255,1.355-4.984
                  c0.116-0.532,0.206-1.079,0.304-1.622c0.533-0.097,1.071-0.186,1.594-0.301c3.457-0.739,6.683-1.855,9.449-3.108
                  c2.766-1.248,5.07-2.65,6.683-3.792c0.807-0.547,1.44-1.109,1.873-1.435c0.432-0.35,0.663-0.575,0.663-0.575
                  S71.743,48.268,71.311,47.918z"></path><g><path style="${ssrRenderStyle({ "fill": "#F7CF52" })}" d="M257.193,0c21.254,0,41.693,3.488,60.778,9.919c-75.252,25.357-129.446,96.501-129.446,180.304
                    c0,83.804,54.193,154.947,129.446,180.304c-19.085,6.431-39.524,9.919-60.778,9.919c-105.058,0-190.224-85.166-190.224-190.224
                    S152.136,0,257.193,0z"></path></g><path style="${ssrRenderStyle({ "fill": "#E2BC50" })}" d="M257.2,0.003c5.8,0,11.54,0.26,17.2,0.77c-96.95,8.74-172.93,90.22-172.93,189.45
                  c0,99.25,76.01,180.74,172.99,189.45c-5.68,0.51-11.44,0.77-17.26,0.77c-105.06,0-190.23-85.16-190.23-190.22
                  S152.14,0.003,257.2,0.003z"></path></g></svg></div>`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/base/chat",
        class: [{ "!bg-opacity-0 hover:!bg-opacity-100 border-none": unref(route).path === "/base/chat" || unref(route).path === `/base/chat/${unref(route).params.id}` }, "hover:bg-gray-100 dark:hover:bg-gray-500 hover:rounded-full px-2 py-2 transition-all cursor-pointer"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="25px" height="25px" class="dark:stroke-white stroke-black" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000" data-v-inspector="components/TheHeader.vue:163:11"${_scopeId}><line x1="16" y1="20" x2="48" y2="20" stroke-width="2" data-v-inspector="components/TheHeader.vue:165:13"${_scopeId}></line><line x1="16" y1="30" x2="48" y2="30" stroke-width="2" data-v-inspector="components/TheHeader.vue:166:13"${_scopeId}></line><line x1="16" y1="40" x2="48" y2="40" stroke-width="2" data-v-inspector="components/TheHeader.vue:167:13"${_scopeId}></line><path d="m56 56-12-4H17.16A9.16 9.16 0 0 1 8 42.84V17.16A9.16 9.16 0 0 1 17.16 8h29.68A9.16 9.16 0 0 1 56 17.16z" stroke-width="2" data-v-inspector="components/TheHeader.vue:168:13"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "25px",
                height: "25px",
                class: "dark:stroke-white stroke-black",
                viewBox: "0 0 60 60",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                stroke: "#000000",
                "data-v-inspector": "components/TheHeader.vue:163:11"
              }, [
                createVNode("line", {
                  x1: "16",
                  y1: "20",
                  x2: "48",
                  y2: "20",
                  "stroke-width": "2",
                  "data-v-inspector": "components/TheHeader.vue:165:13"
                }),
                createVNode("line", {
                  x1: "16",
                  y1: "30",
                  x2: "48",
                  y2: "30",
                  "stroke-width": "2",
                  "data-v-inspector": "components/TheHeader.vue:166:13"
                }),
                createVNode("line", {
                  x1: "16",
                  y1: "40",
                  x2: "48",
                  y2: "40",
                  "stroke-width": "2",
                  "data-v-inspector": "components/TheHeader.vue:167:13"
                }),
                createVNode("path", {
                  d: "m56 56-12-4H17.16A9.16 9.16 0 0 1 8 42.84V17.16A9.16 9.16 0 0 1 17.16 8h29.68A9.16 9.16 0 0 1 56 17.16z",
                  "stroke-width": "2",
                  "data-v-inspector": "components/TheHeader.vue:168:13"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="relative"><div class="hover:bg-gray-100 dark:hover:bg-gray-500 hover:rounded-full hover:p-2 p-2 max-[800px]:p-2 transition-all cursor-pointer"><div class="relative"><svg class="dark:fill-white fill-gray-500" height="25" width="25" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 611.999 611.999" xml:space="preserve"><g><g><g><path d="M570.107,500.254c-65.037-29.371-67.511-155.441-67.559-158.622v-84.578c0-81.402-49.742-151.399-120.427-181.203
                  C381.969,34,347.883,0,306.001,0c-41.883,0-75.968,34.002-76.121,75.849c-70.682,29.804-120.425,99.801-120.425,181.203v84.578
                  c-0.046,3.181-2.522,129.251-67.561,158.622c-7.409,3.347-11.481,11.412-9.768,19.36c1.711,7.949,8.74,13.626,16.871,13.626
                  h164.88c3.38,18.594,12.172,35.892,25.619,49.903c17.86,18.608,41.479,28.856,66.502,28.856
                  c25.025,0,48.644-10.248,66.502-28.856c13.449-14.012,22.241-31.311,25.619-49.903h164.88c8.131,0,15.159-5.676,16.872-13.626
                  C581.586,511.664,577.516,503.6,570.107,500.254z M484.434,439.859c6.837,20.728,16.518,41.544,30.246,58.866H97.32
                  c13.726-17.32,23.407-38.135,30.244-58.866H484.434z M306.001,34.515c18.945,0,34.963,12.73,39.975,30.082
                  c-12.912-2.678-26.282-4.09-39.975-4.09s-27.063,1.411-39.975,4.09C271.039,47.246,287.057,34.515,306.001,34.515z
                   M143.97,341.736v-84.685c0-89.343,72.686-162.029,162.031-162.029s162.031,72.686,162.031,162.029v84.826
                  c0.023,2.596,0.427,29.879,7.303,63.465H136.663C143.543,371.724,143.949,344.393,143.97,341.736z M306.001,577.485
                  c-26.341,0-49.33-18.992-56.709-44.246h113.416C355.329,558.493,332.344,577.485,306.001,577.485z"></path><path d="M306.001,119.235c-74.25,0-134.657,60.405-134.657,134.654c0,9.531,7.727,17.258,17.258,17.258
                  c9.531,0,17.258-7.727,17.258-17.258c0-55.217,44.923-100.139,100.142-100.139c9.531,0,17.258-7.727,17.258-17.258
                  C323.259,126.96,315.532,119.235,306.001,119.235z"></path></g></g></g></svg>`);
      if (unref(readCount) !== 0) {
        _push(`<div class="text-center text-[10px] rounded-full absolute -top-[2px] -right-[2px]"><div class="animate-ping absolute inline-flex w-full h-full min-w-[14px] min-h-[14px] max-w-full max-h-full rounded-full bg-sky-400 opacity-75"></div><div class="relative inline-flex justify-center rounded-full min-w-[14px] min-h-[14px] max-w-full max-h-full w-full h-full bg-sky-500 text-white">${ssrInterpolate(unref(readCount))}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (unref(loadCurrentUser).openNotification) {
        _push(ssrRenderComponent(_sfc_main$3, {
          class: "select-none",
          key: unref(readCount),
          onOpenNotification: ($event) => unref(loadCurrentUser).openNotification = false
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex max-[800px]:hidden select-none text-gray-600 items-center transition-all duration-200 gap-x-2 cursor-pointer hover:transform hover:-translate-y-2">`);
      if (unref(loadCurrentUser).user.id) {
        _push(`<div class=""><img class="w-[50px] h-[50px] rounded-full shadow-lg border border-gray-100 dark:border-none"${ssrRenderAttr("src", unref(loadCurrentUser).get_server_domain + unref(loadCurrentUser).user.photo_url)} alt=""></div>`);
      } else {
        _push(`<div class="flex items-center gap-x-2">`);
        _push(ssrRenderComponent(Sceleton, {
          "border-radius": "100px",
          width: "50px",
          height: "50px"
        }, null, _parent));
        _push(ssrRenderComponent(Sceleton, {
          "border-radius": "5px",
          width: "150px",
          height: "15px"
        }, null, _parent));
        _push(`</div>`);
      }
      _push(`<h3 class="dark:text-white select-none tracking-wider">${ssrInterpolate(unref(loadCurrentUser).user.first_name)} ${ssrInterpolate(unref(loadCurrentUser).user.last_name)}</h3></div><div class="relative max-md:hidden"><div class="hover:rotate-90 transition-all cursor-pointer hover:bg-gray-100 hover:dark:bg-gray-500 hover:rounded-full max-[800px]:p-1 hover:p-1"><svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle class="dark:stroke-white" cx="12" cy="12" r="3" stroke="#1C274C" stroke-width="1.5"></circle><path d="M3.66122 10.6392C4.13377 10.9361 4.43782 11.4419 4.43782 11.9999C4.43781 12.558 4.13376 13.0638 3.66122 13.3607C3.33966 13.5627 3.13248 13.7242 2.98508 13.9163C2.66217 14.3372 2.51966 14.869 2.5889 15.3949C2.64082 15.7893 2.87379 16.1928 3.33973 16.9999C3.80568 17.8069 4.03865 18.2104 4.35426 18.4526C4.77508 18.7755 5.30694 18.918 5.83284 18.8488C6.07287 18.8172 6.31628 18.7185 6.65196 18.5411C7.14544 18.2803 7.73558 18.2699 8.21895 18.549C8.70227 18.8281 8.98827 19.3443 9.00912 19.902C9.02332 20.2815 9.05958 20.5417 9.15224 20.7654C9.35523 21.2554 9.74458 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8478 20.7654C14.9404 20.5417 14.9767 20.2815 14.9909 19.9021C15.0117 19.3443 15.2977 18.8281 15.7811 18.549C16.2644 18.27 16.8545 18.2804 17.3479 18.5412C17.6837 18.7186 17.9271 18.8173 18.1671 18.8489C18.693 18.9182 19.2249 18.7756 19.6457 18.4527C19.9613 18.2106 20.1943 17.807 20.6603 17C20.8677 16.6407 21.029 16.3614 21.1486 16.1272M20.3387 13.3608C19.8662 13.0639 19.5622 12.5581 19.5621 12.0001C19.5621 11.442 19.8662 10.9361 20.3387 10.6392C20.6603 10.4372 20.8674 10.2757 21.0148 10.0836C21.3377 9.66278 21.4802 9.13092 21.411 8.60502C21.3591 8.2106 21.1261 7.80708 20.6601 7.00005C20.1942 6.19301 19.9612 5.7895 19.6456 5.54732C19.2248 5.22441 18.6929 5.0819 18.167 5.15113C17.927 5.18274 17.6836 5.2814 17.3479 5.45883C16.8544 5.71964 16.2643 5.73004 15.781 5.45096C15.2977 5.1719 15.0117 4.6557 14.9909 4.09803C14.9767 3.71852 14.9404 3.45835 14.8478 3.23463C14.6448 2.74458 14.2554 2.35523 13.7654 2.15224C13.3978 2 12.9319 2 12 2C11.0681 2 10.6022 2 10.2346 2.15224C9.74458 2.35523 9.35523 2.74458 9.15224 3.23463C9.05958 3.45833 9.02332 3.71848 9.00912 4.09794C8.98826 4.65566 8.70225 5.17191 8.21891 5.45096C7.73557 5.73002 7.14548 5.71959 6.65205 5.4588C6.31633 5.28136 6.0729 5.18269 5.83285 5.15108C5.30695 5.08185 4.77509 5.22436 4.35427 5.54727C4.03866 5.78945 3.80569 6.19297 3.33974 7C3.13231 7.35929 2.97105 7.63859 2.85138 7.87273" stroke="#1C274C" class="dark:stroke-white" stroke-width="1.5" stroke-linecap="round"></path></svg></div>`);
      if (unref(loadCurrentUser).openSettings) {
        _push(`<div class="flex flex-col gap-y-6 select-none"><div class="ml-auto justify-end hidden w-2/12 max-[800px]:flex"><svg width="25px" height="25px" class="fill-gray-400 dark:fill-white" viewBox="-2 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd"><g id="Icon-Set" transform="translate(-466.000000, -931.000000)"><path d="M490,931 L470,931 C467.791,931 466,932.791 466,935 L466,955 C466,957.209 467.791,959 470,959 L473,959 L473,957 L470,957 C468.896,957 468,956.104 468,955 L468,935 C468,933.896 468.896,933 470,933 L490,933 C491.104,933 492,933.896 492,935 L492,955 C492,956.104 491.104,957 490,957 L487,957 L487,959 L490,959 C492.209,959 494,957.209 494,955 L494,935 C494,932.791 492.209,931 490,931 L490,931 Z M487.657,944.243 L480.758,937.343 C480.549,937.135 480.272,937.046 480,937.06 C479.728,937.046 479.451,937.135 479.243,937.343 L472.343,944.243 C471.952,944.633 471.952,945.267 472.343,945.657 C472.733,946.048 473.367,946.048 473.758,945.657 L479,940.414 L479,962 C479,962.553 479.447,963 480,963 C480.552,963 481,962.553 481,962 L481,940.414 L486.243,945.657 C486.633,946.048 487.267,946.048 487.657,945.657 C488.048,945.267 488.048,944.633 487.657,944.243 L487.657,944.243 Z" id="arrow-top"></path></g></g></svg></div>`);
        _push(ssrRenderComponent(_sfc_main$4, null, {
          headerContentIcon: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div${_scopeId}><svg width="30px" height="30px" viewBox="0 -4 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><g clip-path="url(#clip0_503_2726)"${_scopeId}><rect x="0.25" y="0.25" width="27.5" height="19.5" rx="1.75" fill="white" stroke="#F5F5F5" stroke-width="0.5"${_scopeId}></rect><mask id="mask0_503_2726" style="${ssrRenderStyle({ "mask-type": "alpha" })}" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20"${_scopeId}><rect x="0.25" y="0.25" width="27.5" height="19.5" rx="1.75" fill="white" stroke="white" stroke-width="0.5"${_scopeId}></rect></mask><g mask="url(#mask0_503_2726)"${_scopeId}><path fill-rule="evenodd" clip-rule="evenodd" d="M0 13.3333H28V6.66667H0V13.3333Z" fill="#0C47B7"${_scopeId}></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 20H28V13.3333H0V20Z" fill="#E53B35"${_scopeId}></path></g></g><defs${_scopeId}><clipPath id="clip0_503_2726"${_scopeId}><rect width="28" height="20" rx="2" fill="white"${_scopeId}></rect></clipPath></defs></svg></div>`);
            } else {
              return [
                createVNode("div", null, [
                  (openBlock(), createBlock("svg", {
                    width: "30px",
                    height: "30px",
                    viewBox: "0 -4 28 28",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("g", { "clip-path": "url(#clip0_503_2726)" }, [
                      createVNode("rect", {
                        x: "0.25",
                        y: "0.25",
                        width: "27.5",
                        height: "19.5",
                        rx: "1.75",
                        fill: "white",
                        stroke: "#F5F5F5",
                        "stroke-width": "0.5"
                      }),
                      createVNode("mask", {
                        id: "mask0_503_2726",
                        style: { "mask-type": "alpha" },
                        maskUnits: "userSpaceOnUse",
                        x: "0",
                        y: "0",
                        width: "28",
                        height: "20"
                      }, [
                        createVNode("rect", {
                          x: "0.25",
                          y: "0.25",
                          width: "27.5",
                          height: "19.5",
                          rx: "1.75",
                          fill: "white",
                          stroke: "white",
                          "stroke-width": "0.5"
                        })
                      ]),
                      createVNode("g", { mask: "url(#mask0_503_2726)" }, [
                        createVNode("path", {
                          "fill-rule": "evenodd",
                          "clip-rule": "evenodd",
                          d: "M0 13.3333H28V6.66667H0V13.3333Z",
                          fill: "#0C47B7"
                        }),
                        createVNode("path", {
                          "fill-rule": "evenodd",
                          "clip-rule": "evenodd",
                          d: "M0 20H28V13.3333H0V20Z",
                          fill: "#E53B35"
                        })
                      ])
                    ]),
                    createVNode("defs", null, [
                      createVNode("clipPath", { id: "clip0_503_2726" }, [
                        createVNode("rect", {
                          width: "28",
                          height: "20",
                          rx: "2",
                          fill: "white"
                        })
                      ])
                    ])
                  ]))
                ])
              ];
            }
          }),
          headerContentText: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h3${_scopeId}>${ssrInterpolate(_ctx.$t("\u0420\u0443\u0441\u0441\u043A\u0438\u0439"))}</h3>`);
            } else {
              return [
                createVNode("h3", null, toDisplayString(_ctx.$t("\u0420\u0443\u0441\u0441\u043A\u0438\u0439")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_sfc_main$4, { to: "profile" }, {
          headerContentIcon: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M3 21C3 21.5523 3.44772 22 4 22C4.55228 22 5 21.5523 5 21H3ZM11.8584 15.0608C12.4051 15.139 12.9117 14.7592 12.9899 14.2125C13.0681 13.6658 12.6883 13.1592 12.1416 13.081L11.8584 15.0608ZM17.29 17.2929C16.8994 17.6834 16.8994 18.3166 17.29 18.7071C17.6805 19.0976 18.3137 19.0976 18.7042 18.7071L17.29 17.2929ZM15.0916 14.7507C14.954 15.2856 15.2759 15.8308 15.8108 15.9684C16.3457 16.1061 16.8908 15.7841 17.0285 15.2493L15.0916 14.7507ZM17.9971 20C17.4448 20 16.9971 20.4477 16.9971 21C16.9971 21.5523 17.4448 22 17.9971 22V20ZM18.0071 22C18.5594 22 19.0071 21.5523 19.0071 21C19.0071 20.4477 18.5594 20 18.0071 20V22ZM14 7C14 8.65685 12.6569 10 11 10V12C13.7614 12 16 9.76142 16 7H14ZM11 10C9.34315 10 8 8.65685 8 7H6C6 9.76142 8.23858 12 11 12V10ZM8 7C8 5.34315 9.34315 4 11 4V2C8.23858 2 6 4.23858 6 7H8ZM11 4C12.6569 4 14 5.34315 14 7H16C16 4.23858 13.7614 2 11 2V4ZM5 21C5 17.6863 7.68629 15 11 15V13C6.58172 13 3 16.5817 3 21H5ZM11 15C11.292 15 11.5786 15.0208 11.8584 15.0608L12.1416 13.081C11.7682 13.0276 11.387 13 11 13V15ZM18.997 15.5C18.997 15.6732 18.9516 15.8053 18.6776 16.0697C18.5239 16.218 18.3429 16.3653 18.0919 16.574C17.8536 16.7723 17.5741 17.0087 17.29 17.2929L18.7042 18.7071C18.92 18.4913 19.1405 18.3033 19.3709 18.1116C19.5887 17.9305 19.8452 17.7223 20.0665 17.5087C20.5426 17.0493 20.997 16.4314 20.997 15.5H18.997ZM17.997 14.5C18.5493 14.5 18.997 14.9477 18.997 15.5H20.997C20.997 13.8431 19.6539 12.5 17.997 12.5V14.5ZM17.0285 15.2493C17.1396 14.8177 17.5325 14.5 17.997 14.5V12.5C16.5978 12.5 15.4246 13.457 15.0916 14.7507L17.0285 15.2493ZM17.9971 22H18.0071V20H17.9971V22Z"${_scopeId}></path></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  width: "30px",
                  height: "30px",
                  viewBox: "0 0 24 24",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", { d: "M3 21C3 21.5523 3.44772 22 4 22C4.55228 22 5 21.5523 5 21H3ZM11.8584 15.0608C12.4051 15.139 12.9117 14.7592 12.9899 14.2125C13.0681 13.6658 12.6883 13.1592 12.1416 13.081L11.8584 15.0608ZM17.29 17.2929C16.8994 17.6834 16.8994 18.3166 17.29 18.7071C17.6805 19.0976 18.3137 19.0976 18.7042 18.7071L17.29 17.2929ZM15.0916 14.7507C14.954 15.2856 15.2759 15.8308 15.8108 15.9684C16.3457 16.1061 16.8908 15.7841 17.0285 15.2493L15.0916 14.7507ZM17.9971 20C17.4448 20 16.9971 20.4477 16.9971 21C16.9971 21.5523 17.4448 22 17.9971 22V20ZM18.0071 22C18.5594 22 19.0071 21.5523 19.0071 21C19.0071 20.4477 18.5594 20 18.0071 20V22ZM14 7C14 8.65685 12.6569 10 11 10V12C13.7614 12 16 9.76142 16 7H14ZM11 10C9.34315 10 8 8.65685 8 7H6C6 9.76142 8.23858 12 11 12V10ZM8 7C8 5.34315 9.34315 4 11 4V2C8.23858 2 6 4.23858 6 7H8ZM11 4C12.6569 4 14 5.34315 14 7H16C16 4.23858 13.7614 2 11 2V4ZM5 21C5 17.6863 7.68629 15 11 15V13C6.58172 13 3 16.5817 3 21H5ZM11 15C11.292 15 11.5786 15.0208 11.8584 15.0608L12.1416 13.081C11.7682 13.0276 11.387 13 11 13V15ZM18.997 15.5C18.997 15.6732 18.9516 15.8053 18.6776 16.0697C18.5239 16.218 18.3429 16.3653 18.0919 16.574C17.8536 16.7723 17.5741 17.0087 17.29 17.2929L18.7042 18.7071C18.92 18.4913 19.1405 18.3033 19.3709 18.1116C19.5887 17.9305 19.8452 17.7223 20.0665 17.5087C20.5426 17.0493 20.997 16.4314 20.997 15.5H18.997ZM17.997 14.5C18.5493 14.5 18.997 14.9477 18.997 15.5H20.997C20.997 13.8431 19.6539 12.5 17.997 12.5V14.5ZM17.0285 15.2493C17.1396 14.8177 17.5325 14.5 17.997 14.5V12.5C16.5978 12.5 15.4246 13.457 15.0916 14.7507L17.0285 15.2493ZM17.9971 22H18.0071V20H17.9971V22Z" })
                ]))
              ];
            }
          }),
          headerContentText: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("\u041B\u0438\u0447\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("\u041B\u0438\u0447\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_sfc_main$4, { to: "companies" }, {
          headerContentIcon: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg width="30px" height="30px" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"${_scopeId}><path d="M8 2L8 6L4 6L4 48L46 48L46 14L30 14L30 6L26 6L26 2 Z M 10 4L24 4L24 8L28 8L28 46L19 46L19 39L15 39L15 46L6 46L6 8L10 8 Z M 10 10L10 12L12 12L12 10 Z M 14 10L14 12L16 12L16 10 Z M 18 10L18 12L20 12L20 10 Z M 22 10L22 12L24 12L24 10 Z M 10 15L10 19L12 19L12 15 Z M 14 15L14 19L16 19L16 15 Z M 18 15L18 19L20 19L20 15 Z M 22 15L22 19L24 19L24 15 Z M 30 16L44 16L44 46L30 46 Z M 32 18L32 20L34 20L34 18 Z M 36 18L36 20L38 20L38 18 Z M 40 18L40 20L42 20L42 18 Z M 10 21L10 25L12 25L12 21 Z M 14 21L14 25L16 25L16 21 Z M 18 21L18 25L20 25L20 21 Z M 22 21L22 25L24 25L24 21 Z M 32 22L32 24L34 24L34 22 Z M 36 22L36 24L38 24L38 22 Z M 40 22L40 24L42 24L42 22 Z M 32 26L32 28L34 28L34 26 Z M 36 26L36 28L38 28L38 26 Z M 40 26L40 28L42 28L42 26 Z M 10 27L10 31L12 31L12 27 Z M 14 27L14 31L16 31L16 27 Z M 18 27L18 31L20 31L20 27 Z M 22 27L22 31L24 31L24 27 Z M 32 30L32 32L34 32L34 30 Z M 36 30L36 32L38 32L38 30 Z M 40 30L40 32L42 32L42 30 Z M 10 33L10 37L12 37L12 33 Z M 14 33L14 37L16 37L16 33 Z M 18 33L18 37L20 37L20 33 Z M 22 33L22 37L24 37L24 33 Z M 32 34L32 36L34 36L34 34 Z M 36 34L36 36L38 36L38 34 Z M 40 34L40 36L42 36L42 34 Z M 32 38L32 40L34 40L34 38 Z M 36 38L36 40L38 40L38 38 Z M 40 38L40 40L42 40L42 38 Z M 10 39L10 44L12 44L12 39 Z M 22 39L22 44L24 44L24 39 Z M 32 42L32 44L34 44L34 42 Z M 36 42L36 44L38 44L38 42 Z M 40 42L40 44L42 44L42 42Z"${_scopeId}></path></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  width: "30px",
                  height: "30px",
                  viewBox: "0 0 50 50",
                  xmlns: "http://www.w3.org/2000/svg",
                  "xmlns:xlink": "http://www.w3.org/1999/xlink"
                }, [
                  createVNode("path", { d: "M8 2L8 6L4 6L4 48L46 48L46 14L30 14L30 6L26 6L26 2 Z M 10 4L24 4L24 8L28 8L28 46L19 46L19 39L15 39L15 46L6 46L6 8L10 8 Z M 10 10L10 12L12 12L12 10 Z M 14 10L14 12L16 12L16 10 Z M 18 10L18 12L20 12L20 10 Z M 22 10L22 12L24 12L24 10 Z M 10 15L10 19L12 19L12 15 Z M 14 15L14 19L16 19L16 15 Z M 18 15L18 19L20 19L20 15 Z M 22 15L22 19L24 19L24 15 Z M 30 16L44 16L44 46L30 46 Z M 32 18L32 20L34 20L34 18 Z M 36 18L36 20L38 20L38 18 Z M 40 18L40 20L42 20L42 18 Z M 10 21L10 25L12 25L12 21 Z M 14 21L14 25L16 25L16 21 Z M 18 21L18 25L20 25L20 21 Z M 22 21L22 25L24 25L24 21 Z M 32 22L32 24L34 24L34 22 Z M 36 22L36 24L38 24L38 22 Z M 40 22L40 24L42 24L42 22 Z M 32 26L32 28L34 28L34 26 Z M 36 26L36 28L38 28L38 26 Z M 40 26L40 28L42 28L42 26 Z M 10 27L10 31L12 31L12 27 Z M 14 27L14 31L16 31L16 27 Z M 18 27L18 31L20 31L20 27 Z M 22 27L22 31L24 31L24 27 Z M 32 30L32 32L34 32L34 30 Z M 36 30L36 32L38 32L38 30 Z M 40 30L40 32L42 32L42 30 Z M 10 33L10 37L12 37L12 33 Z M 14 33L14 37L16 37L16 33 Z M 18 33L18 37L20 37L20 33 Z M 22 33L22 37L24 37L24 33 Z M 32 34L32 36L34 36L34 34 Z M 36 34L36 36L38 36L38 34 Z M 40 34L40 36L42 36L42 34 Z M 32 38L32 40L34 40L34 38 Z M 36 38L36 40L38 40L38 38 Z M 40 38L40 40L42 40L42 38 Z M 10 39L10 44L12 44L12 39 Z M 22 39L22 44L24 44L24 39 Z M 32 42L32 44L34 44L34 42 Z M 36 42L36 44L38 44L38 42 Z M 40 42L40 44L42 44L42 42Z" })
                ]))
              ];
            }
          }),
          headerContentText: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0438")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_sfc_main$4, { to: "tasks" }, {
          headerContentIcon: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg width="30px" class="dark:stroke-white stroke-black" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M12.37 8.87988H17.62" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M6.38 8.87988L7.13 9.62988L9.38 7.37988" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M12.37 15.8799H17.62" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M6.38 15.8799L7.13 16.6299L9.38 14.3799" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  width: "30px",
                  class: "dark:stroke-white stroke-black",
                  height: "30px",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    d: "M12.37 8.87988H17.62",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }),
                  createVNode("path", {
                    d: "M6.38 8.87988L7.13 9.62988L9.38 7.37988",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }),
                  createVNode("path", {
                    d: "M12.37 15.8799H17.62",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }),
                  createVNode("path", {
                    d: "M6.38 15.8799L7.13 16.6299L9.38 14.3799",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }),
                  createVNode("path", {
                    d: "M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                ]))
              ];
            }
          }),
          headerContentText: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("\u041C\u043E\u0438 \u0437\u0430\u0434\u0430\u043D\u0438\u044F"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("\u041C\u043E\u0438 \u0437\u0430\u0434\u0430\u043D\u0438\u044F")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_sfc_main$7, {
          class: "rounded-full py-2",
          type: "danger",
          onClick: ($event) => {
            unref(nuxtStorage).localStorage.removeItem("token");
            unref(router).push("/");
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("\u0412\u044B\u0439\u0442\u0438"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("\u0412\u044B\u0439\u0442\u0438")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/HeaderUI/HeaderContentElems.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "HeaderContent",
  __ssrInlineRender: true,
  setup(__props) {
    const windowWidth = ref(null);
    useChat();
    const activeHeader = ref(true);
    const loadCurrentUser = useAuthStore();
    const route = useRoute();
    const router = useRouter();
    watchSyncEffect(() => {
      windowWidth.value < 800 && route.path === "/base/chat" || windowWidth.value < 800 && route.path === `/base/chat/${route.params.id}` ? activeHeader.value = false : activeHeader.value = true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [{ "blur": unref(useTreeStore)().treeFullScreen === true }, "w-full bg-white py-4 px-10 flex dark:bg-gray-600 shadow-lg transition-all duration-300 dark:shadow-gray-500 dark:shadow-lg justify-end relative z-30"]
      }, _attrs))}><div class="flex items-center gap-x-8">`);
      _push(ssrRenderComponent(unref(_sfc_main$2), { class: "max-[800px]:hidden" }, null, _parent));
      _push(`<div class="relative hidden max-[800px]:block"><div class="hover:rotate-90 transition-all cursor-pointer hover:bg-gray-100 hover:dark:bg-gray-500 hover:rounded-full max-[800px]:p-1 hover:p-1"><svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle class="dark:stroke-white" cx="12" cy="12" r="3" stroke="#1C274C" stroke-width="1.5"></circle><path d="M3.66122 10.6392C4.13377 10.9361 4.43782 11.4419 4.43782 11.9999C4.43781 12.558 4.13376 13.0638 3.66122 13.3607C3.33966 13.5627 3.13248 13.7242 2.98508 13.9163C2.66217 14.3372 2.51966 14.869 2.5889 15.3949C2.64082 15.7893 2.87379 16.1928 3.33973 16.9999C3.80568 17.8069 4.03865 18.2104 4.35426 18.4526C4.77508 18.7755 5.30694 18.918 5.83284 18.8488C6.07287 18.8172 6.31628 18.7185 6.65196 18.5411C7.14544 18.2803 7.73558 18.2699 8.21895 18.549C8.70227 18.8281 8.98827 19.3443 9.00912 19.902C9.02332 20.2815 9.05958 20.5417 9.15224 20.7654C9.35523 21.2554 9.74458 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8478 20.7654C14.9404 20.5417 14.9767 20.2815 14.9909 19.9021C15.0117 19.3443 15.2977 18.8281 15.7811 18.549C16.2644 18.27 16.8545 18.2804 17.3479 18.5412C17.6837 18.7186 17.9271 18.8173 18.1671 18.8489C18.693 18.9182 19.2249 18.7756 19.6457 18.4527C19.9613 18.2106 20.1943 17.807 20.6603 17C20.8677 16.6407 21.029 16.3614 21.1486 16.1272M20.3387 13.3608C19.8662 13.0639 19.5622 12.5581 19.5621 12.0001C19.5621 11.442 19.8662 10.9361 20.3387 10.6392C20.6603 10.4372 20.8674 10.2757 21.0148 10.0836C21.3377 9.66278 21.4802 9.13092 21.411 8.60502C21.3591 8.2106 21.1261 7.80708 20.6601 7.00005C20.1942 6.19301 19.9612 5.7895 19.6456 5.54732C19.2248 5.22441 18.6929 5.0819 18.167 5.15113C17.927 5.18274 17.6836 5.2814 17.3479 5.45883C16.8544 5.71964 16.2643 5.73004 15.781 5.45096C15.2977 5.1719 15.0117 4.6557 14.9909 4.09803C14.9767 3.71852 14.9404 3.45835 14.8478 3.23463C14.6448 2.74458 14.2554 2.35523 13.7654 2.15224C13.3978 2 12.9319 2 12 2C11.0681 2 10.6022 2 10.2346 2.15224C9.74458 2.35523 9.35523 2.74458 9.15224 3.23463C9.05958 3.45833 9.02332 3.71848 9.00912 4.09794C8.98826 4.65566 8.70225 5.17191 8.21891 5.45096C7.73557 5.73002 7.14548 5.71959 6.65205 5.4588C6.31633 5.28136 6.0729 5.18269 5.83285 5.15108C5.30695 5.08185 4.77509 5.22436 4.35427 5.54727C4.03866 5.78945 3.80569 6.19297 3.33974 7C3.13231 7.35929 2.97105 7.63859 2.85138 7.87273" stroke="#1C274C" class="dark:stroke-white" stroke-width="1.5" stroke-linecap="round"></path></svg></div>`);
      if (unref(loadCurrentUser).openSettings) {
        _push(`<div class="flex flex-col gap-y-6 select-none"><div class="ml-auto justify-end hidden w-2/12 max-[800px]:flex"><svg width="25px" height="25px" class="fill-gray-400 dark:fill-white" viewBox="-2 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd"><g id="Icon-Set" transform="translate(-466.000000, -931.000000)"><path d="M490,931 L470,931 C467.791,931 466,932.791 466,935 L466,955 C466,957.209 467.791,959 470,959 L473,959 L473,957 L470,957 C468.896,957 468,956.104 468,955 L468,935 C468,933.896 468.896,933 470,933 L490,933 C491.104,933 492,933.896 492,935 L492,955 C492,956.104 491.104,957 490,957 L487,957 L487,959 L490,959 C492.209,959 494,957.209 494,955 L494,935 C494,932.791 492.209,931 490,931 L490,931 Z M487.657,944.243 L480.758,937.343 C480.549,937.135 480.272,937.046 480,937.06 C479.728,937.046 479.451,937.135 479.243,937.343 L472.343,944.243 C471.952,944.633 471.952,945.267 472.343,945.657 C472.733,946.048 473.367,946.048 473.758,945.657 L479,940.414 L479,962 C479,962.553 479.447,963 480,963 C480.552,963 481,962.553 481,962 L481,940.414 L486.243,945.657 C486.633,946.048 487.267,946.048 487.657,945.657 C488.048,945.267 488.048,944.633 487.657,944.243 L487.657,944.243 Z" id="arrow-top"></path></g></g></svg></div><div class="mx-auto flex flex-col gap-y-6"><div class="max-[800px]:flex max-[800px]:justify-center hidden w-full select-none text-gray-600 items-center transition-all duration-200 gap-x-2 cursor-pointer"><div class=""><img class="rounded-full w-[100px] h-[100px]"${ssrRenderAttr("src", unref(loadCurrentUser).get_server_domain + unref(loadCurrentUser).user.photo_url)} alt=""></div><h3 class="select-none dark:text-white">${ssrInterpolate(unref(loadCurrentUser).user.first_name)} ${ssrInterpolate(unref(loadCurrentUser).user.last_name)}</h3></div></div>`);
        _push(ssrRenderComponent(unref(_sfc_main$2), { class: "hidden max-[800px]:flex" }, null, _parent));
        _push(ssrRenderComponent(unref(_sfc_main$4), null, {
          headerContentIcon: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div${_scopeId}><svg width="30px" height="30px" viewBox="0 -4 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><g clip-path="url(#clip0_503_2726)"${_scopeId}><rect x="0.25" y="0.25" width="27.5" height="19.5" rx="1.75" fill="white" stroke="#F5F5F5" stroke-width="0.5"${_scopeId}></rect><mask id="mask0_503_2726" style="${ssrRenderStyle({ "mask-type": "alpha" })}" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20"${_scopeId}><rect x="0.25" y="0.25" width="27.5" height="19.5" rx="1.75" fill="white" stroke="white" stroke-width="0.5"${_scopeId}></rect></mask><g mask="url(#mask0_503_2726)"${_scopeId}><path fill-rule="evenodd" clip-rule="evenodd" d="M0 13.3333H28V6.66667H0V13.3333Z" fill="#0C47B7"${_scopeId}></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 20H28V13.3333H0V20Z" fill="#E53B35"${_scopeId}></path></g></g><defs${_scopeId}><clipPath id="clip0_503_2726"${_scopeId}><rect width="28" height="20" rx="2" fill="white"${_scopeId}></rect></clipPath></defs></svg></div>`);
            } else {
              return [
                createVNode("div", null, [
                  (openBlock(), createBlock("svg", {
                    width: "30px",
                    height: "30px",
                    viewBox: "0 -4 28 28",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("g", { "clip-path": "url(#clip0_503_2726)" }, [
                      createVNode("rect", {
                        x: "0.25",
                        y: "0.25",
                        width: "27.5",
                        height: "19.5",
                        rx: "1.75",
                        fill: "white",
                        stroke: "#F5F5F5",
                        "stroke-width": "0.5"
                      }),
                      createVNode("mask", {
                        id: "mask0_503_2726",
                        style: { "mask-type": "alpha" },
                        maskUnits: "userSpaceOnUse",
                        x: "0",
                        y: "0",
                        width: "28",
                        height: "20"
                      }, [
                        createVNode("rect", {
                          x: "0.25",
                          y: "0.25",
                          width: "27.5",
                          height: "19.5",
                          rx: "1.75",
                          fill: "white",
                          stroke: "white",
                          "stroke-width": "0.5"
                        })
                      ]),
                      createVNode("g", { mask: "url(#mask0_503_2726)" }, [
                        createVNode("path", {
                          "fill-rule": "evenodd",
                          "clip-rule": "evenodd",
                          d: "M0 13.3333H28V6.66667H0V13.3333Z",
                          fill: "#0C47B7"
                        }),
                        createVNode("path", {
                          "fill-rule": "evenodd",
                          "clip-rule": "evenodd",
                          d: "M0 20H28V13.3333H0V20Z",
                          fill: "#E53B35"
                        })
                      ])
                    ]),
                    createVNode("defs", null, [
                      createVNode("clipPath", { id: "clip0_503_2726" }, [
                        createVNode("rect", {
                          width: "28",
                          height: "20",
                          rx: "2",
                          fill: "white"
                        })
                      ])
                    ])
                  ]))
                ])
              ];
            }
          }),
          headerContentText: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h3${_scopeId}>${ssrInterpolate(_ctx.$t("\u0420\u0443\u0441\u0441\u043A\u0438\u0439"))}</h3>`);
            } else {
              return [
                createVNode("h3", null, toDisplayString(_ctx.$t("\u0420\u0443\u0441\u0441\u043A\u0438\u0439")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(_sfc_main$4), { to: "profile" }, {
          headerContentIcon: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M3 21C3 21.5523 3.44772 22 4 22C4.55228 22 5 21.5523 5 21H3ZM11.8584 15.0608C12.4051 15.139 12.9117 14.7592 12.9899 14.2125C13.0681 13.6658 12.6883 13.1592 12.1416 13.081L11.8584 15.0608ZM17.29 17.2929C16.8994 17.6834 16.8994 18.3166 17.29 18.7071C17.6805 19.0976 18.3137 19.0976 18.7042 18.7071L17.29 17.2929ZM15.0916 14.7507C14.954 15.2856 15.2759 15.8308 15.8108 15.9684C16.3457 16.1061 16.8908 15.7841 17.0285 15.2493L15.0916 14.7507ZM17.9971 20C17.4448 20 16.9971 20.4477 16.9971 21C16.9971 21.5523 17.4448 22 17.9971 22V20ZM18.0071 22C18.5594 22 19.0071 21.5523 19.0071 21C19.0071 20.4477 18.5594 20 18.0071 20V22ZM14 7C14 8.65685 12.6569 10 11 10V12C13.7614 12 16 9.76142 16 7H14ZM11 10C9.34315 10 8 8.65685 8 7H6C6 9.76142 8.23858 12 11 12V10ZM8 7C8 5.34315 9.34315 4 11 4V2C8.23858 2 6 4.23858 6 7H8ZM11 4C12.6569 4 14 5.34315 14 7H16C16 4.23858 13.7614 2 11 2V4ZM5 21C5 17.6863 7.68629 15 11 15V13C6.58172 13 3 16.5817 3 21H5ZM11 15C11.292 15 11.5786 15.0208 11.8584 15.0608L12.1416 13.081C11.7682 13.0276 11.387 13 11 13V15ZM18.997 15.5C18.997 15.6732 18.9516 15.8053 18.6776 16.0697C18.5239 16.218 18.3429 16.3653 18.0919 16.574C17.8536 16.7723 17.5741 17.0087 17.29 17.2929L18.7042 18.7071C18.92 18.4913 19.1405 18.3033 19.3709 18.1116C19.5887 17.9305 19.8452 17.7223 20.0665 17.5087C20.5426 17.0493 20.997 16.4314 20.997 15.5H18.997ZM17.997 14.5C18.5493 14.5 18.997 14.9477 18.997 15.5H20.997C20.997 13.8431 19.6539 12.5 17.997 12.5V14.5ZM17.0285 15.2493C17.1396 14.8177 17.5325 14.5 17.997 14.5V12.5C16.5978 12.5 15.4246 13.457 15.0916 14.7507L17.0285 15.2493ZM17.9971 22H18.0071V20H17.9971V22Z"${_scopeId}></path></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  width: "30px",
                  height: "30px",
                  viewBox: "0 0 24 24",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", { d: "M3 21C3 21.5523 3.44772 22 4 22C4.55228 22 5 21.5523 5 21H3ZM11.8584 15.0608C12.4051 15.139 12.9117 14.7592 12.9899 14.2125C13.0681 13.6658 12.6883 13.1592 12.1416 13.081L11.8584 15.0608ZM17.29 17.2929C16.8994 17.6834 16.8994 18.3166 17.29 18.7071C17.6805 19.0976 18.3137 19.0976 18.7042 18.7071L17.29 17.2929ZM15.0916 14.7507C14.954 15.2856 15.2759 15.8308 15.8108 15.9684C16.3457 16.1061 16.8908 15.7841 17.0285 15.2493L15.0916 14.7507ZM17.9971 20C17.4448 20 16.9971 20.4477 16.9971 21C16.9971 21.5523 17.4448 22 17.9971 22V20ZM18.0071 22C18.5594 22 19.0071 21.5523 19.0071 21C19.0071 20.4477 18.5594 20 18.0071 20V22ZM14 7C14 8.65685 12.6569 10 11 10V12C13.7614 12 16 9.76142 16 7H14ZM11 10C9.34315 10 8 8.65685 8 7H6C6 9.76142 8.23858 12 11 12V10ZM8 7C8 5.34315 9.34315 4 11 4V2C8.23858 2 6 4.23858 6 7H8ZM11 4C12.6569 4 14 5.34315 14 7H16C16 4.23858 13.7614 2 11 2V4ZM5 21C5 17.6863 7.68629 15 11 15V13C6.58172 13 3 16.5817 3 21H5ZM11 15C11.292 15 11.5786 15.0208 11.8584 15.0608L12.1416 13.081C11.7682 13.0276 11.387 13 11 13V15ZM18.997 15.5C18.997 15.6732 18.9516 15.8053 18.6776 16.0697C18.5239 16.218 18.3429 16.3653 18.0919 16.574C17.8536 16.7723 17.5741 17.0087 17.29 17.2929L18.7042 18.7071C18.92 18.4913 19.1405 18.3033 19.3709 18.1116C19.5887 17.9305 19.8452 17.7223 20.0665 17.5087C20.5426 17.0493 20.997 16.4314 20.997 15.5H18.997ZM17.997 14.5C18.5493 14.5 18.997 14.9477 18.997 15.5H20.997C20.997 13.8431 19.6539 12.5 17.997 12.5V14.5ZM17.0285 15.2493C17.1396 14.8177 17.5325 14.5 17.997 14.5V12.5C16.5978 12.5 15.4246 13.457 15.0916 14.7507L17.0285 15.2493ZM17.9971 22H18.0071V20H17.9971V22Z" })
                ]))
              ];
            }
          }),
          headerContentText: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("\u041B\u0438\u0447\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("\u041B\u0438\u0447\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(_sfc_main$4), { to: "companies" }, {
          headerContentIcon: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg width="30px" height="30px" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"${_scopeId}><path d="M8 2L8 6L4 6L4 48L46 48L46 14L30 14L30 6L26 6L26 2 Z M 10 4L24 4L24 8L28 8L28 46L19 46L19 39L15 39L15 46L6 46L6 8L10 8 Z M 10 10L10 12L12 12L12 10 Z M 14 10L14 12L16 12L16 10 Z M 18 10L18 12L20 12L20 10 Z M 22 10L22 12L24 12L24 10 Z M 10 15L10 19L12 19L12 15 Z M 14 15L14 19L16 19L16 15 Z M 18 15L18 19L20 19L20 15 Z M 22 15L22 19L24 19L24 15 Z M 30 16L44 16L44 46L30 46 Z M 32 18L32 20L34 20L34 18 Z M 36 18L36 20L38 20L38 18 Z M 40 18L40 20L42 20L42 18 Z M 10 21L10 25L12 25L12 21 Z M 14 21L14 25L16 25L16 21 Z M 18 21L18 25L20 25L20 21 Z M 22 21L22 25L24 25L24 21 Z M 32 22L32 24L34 24L34 22 Z M 36 22L36 24L38 24L38 22 Z M 40 22L40 24L42 24L42 22 Z M 32 26L32 28L34 28L34 26 Z M 36 26L36 28L38 28L38 26 Z M 40 26L40 28L42 28L42 26 Z M 10 27L10 31L12 31L12 27 Z M 14 27L14 31L16 31L16 27 Z M 18 27L18 31L20 31L20 27 Z M 22 27L22 31L24 31L24 27 Z M 32 30L32 32L34 32L34 30 Z M 36 30L36 32L38 32L38 30 Z M 40 30L40 32L42 32L42 30 Z M 10 33L10 37L12 37L12 33 Z M 14 33L14 37L16 37L16 33 Z M 18 33L18 37L20 37L20 33 Z M 22 33L22 37L24 37L24 33 Z M 32 34L32 36L34 36L34 34 Z M 36 34L36 36L38 36L38 34 Z M 40 34L40 36L42 36L42 34 Z M 32 38L32 40L34 40L34 38 Z M 36 38L36 40L38 40L38 38 Z M 40 38L40 40L42 40L42 38 Z M 10 39L10 44L12 44L12 39 Z M 22 39L22 44L24 44L24 39 Z M 32 42L32 44L34 44L34 42 Z M 36 42L36 44L38 44L38 42 Z M 40 42L40 44L42 44L42 42Z"${_scopeId}></path></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  width: "30px",
                  height: "30px",
                  viewBox: "0 0 50 50",
                  xmlns: "http://www.w3.org/2000/svg",
                  "xmlns:xlink": "http://www.w3.org/1999/xlink"
                }, [
                  createVNode("path", { d: "M8 2L8 6L4 6L4 48L46 48L46 14L30 14L30 6L26 6L26 2 Z M 10 4L24 4L24 8L28 8L28 46L19 46L19 39L15 39L15 46L6 46L6 8L10 8 Z M 10 10L10 12L12 12L12 10 Z M 14 10L14 12L16 12L16 10 Z M 18 10L18 12L20 12L20 10 Z M 22 10L22 12L24 12L24 10 Z M 10 15L10 19L12 19L12 15 Z M 14 15L14 19L16 19L16 15 Z M 18 15L18 19L20 19L20 15 Z M 22 15L22 19L24 19L24 15 Z M 30 16L44 16L44 46L30 46 Z M 32 18L32 20L34 20L34 18 Z M 36 18L36 20L38 20L38 18 Z M 40 18L40 20L42 20L42 18 Z M 10 21L10 25L12 25L12 21 Z M 14 21L14 25L16 25L16 21 Z M 18 21L18 25L20 25L20 21 Z M 22 21L22 25L24 25L24 21 Z M 32 22L32 24L34 24L34 22 Z M 36 22L36 24L38 24L38 22 Z M 40 22L40 24L42 24L42 22 Z M 32 26L32 28L34 28L34 26 Z M 36 26L36 28L38 28L38 26 Z M 40 26L40 28L42 28L42 26 Z M 10 27L10 31L12 31L12 27 Z M 14 27L14 31L16 31L16 27 Z M 18 27L18 31L20 31L20 27 Z M 22 27L22 31L24 31L24 27 Z M 32 30L32 32L34 32L34 30 Z M 36 30L36 32L38 32L38 30 Z M 40 30L40 32L42 32L42 30 Z M 10 33L10 37L12 37L12 33 Z M 14 33L14 37L16 37L16 33 Z M 18 33L18 37L20 37L20 33 Z M 22 33L22 37L24 37L24 33 Z M 32 34L32 36L34 36L34 34 Z M 36 34L36 36L38 36L38 34 Z M 40 34L40 36L42 36L42 34 Z M 32 38L32 40L34 40L34 38 Z M 36 38L36 40L38 40L38 38 Z M 40 38L40 40L42 40L42 38 Z M 10 39L10 44L12 44L12 39 Z M 22 39L22 44L24 44L24 39 Z M 32 42L32 44L34 44L34 42 Z M 36 42L36 44L38 44L38 42 Z M 40 42L40 44L42 44L42 42Z" })
                ]))
              ];
            }
          }),
          headerContentText: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0438")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(_sfc_main$4), { to: "tasks" }, {
          headerContentIcon: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg width="30px" class="dark:stroke-white stroke-black" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M12.37 8.87988H17.62" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M6.38 8.87988L7.13 9.62988L9.38 7.37988" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M12.37 15.8799H17.62" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M6.38 15.8799L7.13 16.6299L9.38 14.3799" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  width: "30px",
                  class: "dark:stroke-white stroke-black",
                  height: "30px",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    d: "M12.37 8.87988H17.62",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }),
                  createVNode("path", {
                    d: "M6.38 8.87988L7.13 9.62988L9.38 7.37988",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }),
                  createVNode("path", {
                    d: "M12.37 15.8799H17.62",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }),
                  createVNode("path", {
                    d: "M6.38 15.8799L7.13 16.6299L9.38 14.3799",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }),
                  createVNode("path", {
                    d: "M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                ]))
              ];
            }
          }),
          headerContentText: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("\u041C\u043E\u0438 \u0437\u0430\u0434\u0430\u043D\u0438\u044F"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("\u041C\u043E\u0438 \u0437\u0430\u0434\u0430\u043D\u0438\u044F")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(_sfc_main$7), {
          class: "rounded-full py-2",
          type: "danger",
          onClick: () => {
            _ctx.localStorage.removeItem("token");
            unref(router).push("/");
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("\u0412\u044B\u0439\u0442\u0438"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("\u0412\u044B\u0439\u0442\u0438")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/HeaderContent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "base",
  __ssrInlineRender: true,
  props: {
    activeNav: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const treeStore = useTreeStore();
    useChat();
    useNotification();
    const route = useRouter();
    const router = useRoute();
    const user = useAuthStore();
    onUpdated(() => {
      if (!nuxtStorage.localStorage.getData("token")) {
        route.push("/").then((e) => {
          toast.info("\u0414\u043B\u044F \u043D\u0430\u0447\u0430\u043B\u043E \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0443\u0439\u0442\u0435\u0441\u044C", { autoClose: 1500, theme: "auto" });
        });
      }
    });
    console.log(router.meta);
    useHead({
      titleTemplate: (title) => {
        return title ? `${title} \u2022 ERP` : "ERP";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TheHeader = __nuxt_component_0;
      const _component_HeaderContent = __nuxt_component_1;
      const _component_NuxtPage = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><div class="${ssrRenderClass([{ "hidden": !__props.activeNav, "max-[1150px]:block": __props.activeNav }, "w-screen h-screen z-50 fixed bg-black opacity-30 hidden"])}"></div><div class="flex w-full h-full dark:bg-bgPages"><div class="${ssrRenderClass([{ "max-[1150px]:-translate-x-24 transition-all duration-200": !__props.activeNav, "max-[600px]:w-full transition-all": __props.activeNav }, "bg-white transition-all duration-300 dark:bg-gray-600 max-[880px]:h-screen max-[1150px]:fixed z-[70]"])}"><div class="absolute bg-gray-300 rounded-l-lg px-2 py-1 z-[100] hidden max-[1150px]:block max-md:block right-2 top-6"><svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9995 15.9995L20.9995 11.9995M20.9995 11.9995L16.9995 7.99951M20.9995 11.9995H8.99951M12.9995 20.9995H6.20029C5.08019 20.9995 4.52014 20.9995 4.09231 20.7815C3.71599 20.5898 3.41003 20.2838 3.21828 19.9075C3.00029 19.4797 3.00029 18.9196 3.00029 17.7995V6.19951C3.00029 5.07941 3.00029 4.51935 3.21828 4.09153C3.41003 3.71521 3.71599 3.40925 4.09231 3.2175C4.52014 2.99951 5.08019 2.99951 6.20029 2.99951L12.9995 2.99951" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>`);
      _push(ssrRenderComponent(_component_TheHeader, {
        class: ["max-md:overflow-x-hidden", { "mr-24": __props.activeNav && unref(user).my_scroll > 90 }],
        activeNav: __props.activeNav
      }, null, _parent));
      _push(`</div><div class="w-full relative"><div class="${ssrRenderClass([{ "blur": unref(treeStore).treeFullScreen === true }, "cursor-pointer absolute top-8 max-[800px]:top-6 left-5 z-50 dark:fill-white fill-black"])}"><svg width="22" height="16" viewBox="0 0 22 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.999776 1.99957H20.9998C21.5177 1.99957 21.9845 1.46089 21.9845 0.9431C21.9845 0.425798 21.5607 0.00261796 21.0428 0.00261796H0.956408C0.43868 0.00261796 0.014912 0.425798 0.014912 0.9431C0.014912 1.46089 0.482048 1.99957 0.999776 1.99957ZM0.999776 8.99956H20.9998C21.5177 8.99956 21.9845 8.51664 21.9845 7.99933C21.9845 7.48203 21.5177 6.99958 20.9998 6.99958H0.999776C0.482048 6.99958 0.014912 7.48203 0.014912 7.99933C0.014912 8.51664 0.482048 8.99956 0.999776 8.99956ZM21.0428 15.9962H0.956408C0.43868 15.9962 0.014912 15.5727 0.014912 15.0551C0.014912 14.5379 0.482048 13.9997 0.999776 13.9997H20.9998C21.5177 13.9997 21.9845 14.5379 21.9845 15.0551C21.9845 15.5727 21.5607 15.9962 21.0428 15.9962Z"></path></svg></div>`);
      _push(ssrRenderComponent(_component_HeaderContent, { class: "pl-14" }, null, _parent));
      _push(`<div class="relative">`);
      _push(ssrRenderComponent(_component_NuxtPage, {
        class: "mx-6 max-sm:mx-1 py-10 h-full",
        activeNav: __props.activeNav
      }, null, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=base-F6kPUp9H.mjs.map
