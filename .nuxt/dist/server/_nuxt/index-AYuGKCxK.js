import { r as useSeoMeta } from "../server.mjs";
import { mergeProps, useSSRContext, ref, unref, withCtx, openBlock, createBlock, createVNode, toDisplayString, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderClass, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$4 } from "./TheTextContent-rN29GJom.js";
import VueTree from "@ssthouse/vue3-tree-chart";
import { u as useTreeStore, _ as _sfc_main$3 } from "./TheButton-Jrv5tshN.js";
import { u as useAuthStore } from "./auth-ltfjqTsG.js";
import { useRoute, useRouter } from "vue-router";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-yVxbj29m.js";
import { u as useCompanies } from "./companies-Vl6LYc-q.js";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "h3";
import "destr";
import "defu";
import "klona";
import "@vue/devtools-api";
import "devalue";
import "cookie-es";
import "ohash";
import "@sindresorhus/slugify";
import "tailwind-merge";
import "animejs";
import "./axios-jpYG50U2.js";
import "axios";
import "nuxt-storage/nuxt-storage.js";
import "vue3-toastify";
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "tree-button flex justify-center" }, _attrs))} data-v-94e45fd2>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/TheTreeButton.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TheTreeButton = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-94e45fd2"]]);
const _sfc_main$1 = {
  __name: "TreeContent",
  __ssrInlineRender: true,
  props: {
    treeConfig: {},
    treeFullScreen: {
      type: Boolean,
      default: false
    },
    treeShowUserInfo: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const authStore = useAuthStore();
    const treeStore = useTreeStore();
    useRoute();
    const router = useRouter();
    const richMediaData = ref();
    const treeUserInfo = ref();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-86decce9><div class="${ssrRenderClass([{ "z-[101] fixed": unref(treeStore).treeFullScreen === true }, "hidden max-md:flex max-md:justify-center select-none gap-x-2 top-10 right-10 z-10"])}" data-v-86decce9>`);
      _push(ssrRenderComponent(TheTreeButton, {
        onClick: ($event) => unref(treeStore).treeFullScreen = !unref(treeStore).treeFullScreen
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="stroke-white" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-86decce9${_scopeId}><path d="M9.99999 20.9585C6.88841 20.8286 4.41431 20.4143 4.00001 20C3.5857 19.5857 3.17139 17.1116 3.04155 14M20.9585 14C20.8286 17.1116 20.4143 19.5857 20 20C19.5857 20.4143 17.1116 20.8286 14 20.9585M14 3.04155C17.1116 3.17139 19.5857 3.5857 20 4.00001C20.4143 4.41431 20.8286 6.88842 20.9585 10M10 3.04155C6.88842 3.17139 4.41431 3.5857 4.00001 4.00001C3.5857 4.41431 3.17139 6.88842 3.04155 10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-86decce9${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "stroke-white",
                width: "30px",
                height: "30px",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M9.99999 20.9585C6.88841 20.8286 4.41431 20.4143 4.00001 20C3.5857 19.5857 3.17139 17.1116 3.04155 14M20.9585 14C20.8286 17.1116 20.4143 19.5857 20 20C19.5857 20.4143 17.1116 20.8286 14 20.9585M14 3.04155C17.1116 3.17139 19.5857 3.5857 20 4.00001C20.4143 4.41431 20.8286 6.88842 20.9585 10M10 3.04155C6.88842 3.17139 4.41431 3.5857 4.00001 4.00001C3.5857 4.41431 3.17139 6.88842 3.04155 10",
                  "stroke-width": "1.5",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(TheTreeButton, {
        onClick: ($event) => this.$refs.scaleTree.zoomIn()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="fill-white" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-86decce9${_scopeId}><path fill-rule="evenodd" clip-rule="evenodd" d="M5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10C15 11.381 14.4415 12.6296 13.5355 13.5355C12.6296 14.4415 11.381 15 10 15C7.23858 15 5 12.7614 5 10ZM10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C11.5719 17 13.0239 16.481 14.1921 15.6063L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L15.6063 14.1921C16.481 13.0239 17 11.5719 17 10C17 6.13401 13.866 3 10 3ZM11 8C11 7.44772 10.5523 7 10 7C9.44772 7 9 7.44772 9 8V9H8C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11H9V12C9 12.5523 9.44772 13 10 13C10.5523 13 11 12.5523 11 12V11H12C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9H11V8Z" data-v-86decce9${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "fill-white",
                width: "30px",
                height: "30px",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10C15 11.381 14.4415 12.6296 13.5355 13.5355C12.6296 14.4415 11.381 15 10 15C7.23858 15 5 12.7614 5 10ZM10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C11.5719 17 13.0239 16.481 14.1921 15.6063L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L15.6063 14.1921C16.481 13.0239 17 11.5719 17 10C17 6.13401 13.866 3 10 3ZM11 8C11 7.44772 10.5523 7 10 7C9.44772 7 9 7.44772 9 8V9H8C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11H9V12C9 12.5523 9.44772 13 10 13C10.5523 13 11 12.5523 11 12V11H12C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9H11V8Z"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(TheTreeButton, {
        onClick: ($event) => this.$refs.scaleTree.zoomOut()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="fill-white" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-86decce9${_scopeId}><path fill-rule="evenodd" clip-rule="evenodd" d="M5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10C15 11.381 14.4415 12.6296 13.5355 13.5355C12.6296 14.4415 11.381 15 10 15C7.23858 15 5 12.7614 5 10ZM10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C11.5719 17 13.0239 16.481 14.1921 15.6063L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L15.6063 14.1921C16.481 13.0239 17 11.5719 17 10C17 6.13401 13.866 3 10 3ZM8 9C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11H12C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9H8Z" data-v-86decce9${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "fill-white",
                width: "30px",
                height: "30px",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10C15 11.381 14.4415 12.6296 13.5355 13.5355C12.6296 14.4415 11.381 15 10 15C7.23858 15 5 12.7614 5 10ZM10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C11.5719 17 13.0239 16.481 14.1921 15.6063L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L15.6063 14.1921C16.481 13.0239 17 11.5719 17 10C17 6.13401 13.866 3 10 3ZM8 9C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11H12C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9H8Z"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(TheTreeButton, {
        onClick: ($event) => this.$refs.scaleTree.restoreScale()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="fill-white" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-86decce9${_scopeId}><path d="M14.4697 10.5303C14.7626 10.8232 15.2374 10.8232 15.5303 10.5303C15.8232 10.2374 15.8232 9.76256 15.5303 9.46967L14.4697 10.5303ZM12 7L12.5303 6.46967C12.2374 6.17678 11.7626 6.17678 11.4697 6.46967L12 7ZM8.46967 9.46967C8.17678 9.76256 8.17678 10.2374 8.46967 10.5303C8.76256 10.8232 9.23744 10.8232 9.53033 10.5303L8.46967 9.46967ZM9.53033 13.4697C9.23744 13.1768 8.76256 13.1768 8.46967 13.4697C8.17678 13.7626 8.17678 14.2374 8.46967 14.5303L9.53033 13.4697ZM12 17L11.4697 17.5303C11.7626 17.8232 12.2374 17.8232 12.5303 17.5303L12 17ZM15.5303 14.5303C15.8232 14.2374 15.8232 13.7626 15.5303 13.4697C15.2374 13.1768 14.7626 13.1768 14.4697 13.4697L15.5303 14.5303ZM15.5303 9.46967L12.5303 6.46967L11.4697 7.53033L14.4697 10.5303L15.5303 9.46967ZM11.4697 6.46967L8.46967 9.46967L9.53033 10.5303L12.5303 7.53033L11.4697 6.46967ZM8.46967 14.5303L11.4697 17.5303L12.5303 16.4697L9.53033 13.4697L8.46967 14.5303ZM12.5303 17.5303L15.5303 14.5303L14.4697 13.4697L11.4697 16.4697L12.5303 17.5303ZM8 4.75H16V3.25H8V4.75ZM19.25 8V16H20.75V8H19.25ZM16 19.25H8V20.75H16V19.25ZM4.75 16V8H3.25V16H4.75ZM8 19.25C6.20507 19.25 4.75 17.7949 4.75 16H3.25C3.25 18.6234 5.37665 20.75 8 20.75V19.25ZM19.25 16C19.25 17.7949 17.7949 19.25 16 19.25V20.75C18.6234 20.75 20.75 18.6234 20.75 16H19.25ZM16 4.75C17.7949 4.75 19.25 6.20507 19.25 8H20.75C20.75 5.37665 18.6234 3.25 16 3.25V4.75ZM8 3.25C5.37665 3.25 3.25 5.37665 3.25 8H4.75C4.75 6.20507 6.20507 4.75 8 4.75V3.25Z" data-v-86decce9${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "fill-white",
                width: "30px",
                height: "30px",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", { d: "M14.4697 10.5303C14.7626 10.8232 15.2374 10.8232 15.5303 10.5303C15.8232 10.2374 15.8232 9.76256 15.5303 9.46967L14.4697 10.5303ZM12 7L12.5303 6.46967C12.2374 6.17678 11.7626 6.17678 11.4697 6.46967L12 7ZM8.46967 9.46967C8.17678 9.76256 8.17678 10.2374 8.46967 10.5303C8.76256 10.8232 9.23744 10.8232 9.53033 10.5303L8.46967 9.46967ZM9.53033 13.4697C9.23744 13.1768 8.76256 13.1768 8.46967 13.4697C8.17678 13.7626 8.17678 14.2374 8.46967 14.5303L9.53033 13.4697ZM12 17L11.4697 17.5303C11.7626 17.8232 12.2374 17.8232 12.5303 17.5303L12 17ZM15.5303 14.5303C15.8232 14.2374 15.8232 13.7626 15.5303 13.4697C15.2374 13.1768 14.7626 13.1768 14.4697 13.4697L15.5303 14.5303ZM15.5303 9.46967L12.5303 6.46967L11.4697 7.53033L14.4697 10.5303L15.5303 9.46967ZM11.4697 6.46967L8.46967 9.46967L9.53033 10.5303L12.5303 7.53033L11.4697 6.46967ZM8.46967 14.5303L11.4697 17.5303L12.5303 16.4697L9.53033 13.4697L8.46967 14.5303ZM12.5303 17.5303L15.5303 14.5303L14.4697 13.4697L11.4697 16.4697L12.5303 17.5303ZM8 4.75H16V3.25H8V4.75ZM19.25 8V16H20.75V8H19.25ZM16 19.25H8V20.75H16V19.25ZM4.75 16V8H3.25V16H4.75ZM8 19.25C6.20507 19.25 4.75 17.7949 4.75 16H3.25C3.25 18.6234 5.37665 20.75 8 20.75V19.25ZM19.25 16C19.25 17.7949 17.7949 19.25 16 19.25V20.75C18.6234 20.75 20.75 18.6234 20.75 16H19.25ZM16 4.75C17.7949 4.75 19.25 6.20507 19.25 8H20.75C20.75 5.37665 18.6234 3.25 16 3.25V4.75ZM8 3.25C5.37665 3.25 3.25 5.37665 3.25 8H4.75C4.75 6.20507 6.20507 4.75 8 4.75V3.25Z" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div data-v-86decce9><div class="${ssrRenderClass([{ "!fixed left-0 top-0 !h-screen !w-screen flex !bg-opacity-60 !rounded-none !border-0 !bg-black z-[100] justify-center items-center": unref(treeStore).treeFullScreen === true }, "relative border w-11/12 h-[80vh] mx-auto rounded-2xl overflow-hidden dark:border-gray-400 shadow dark:shadow-gray-400 transition-all duration-300"])}" data-v-86decce9>`);
      _push(ssrRenderComponent(unref(VueTree), {
        ref: "scaleTree",
        class: "mx-auto select-none relative rounded-2xl w-full h-full",
        dataset: richMediaData.value = { ...unref(treeStore).get_list },
        config: __props.treeConfig = { nodeWidth: 170, nodeHeight: 80, levelHeight: 170 }
      }, {
        node: withCtx(({ node, collapsed }, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c2, _d2, _e2, _f;
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([{ "shadow-md dark:shadow-gray-400 ": node.id === ((_a2 = unref(treeUserInfo)) == null ? void 0 : _a2.id) }, "p-2 bg-blueDarkSemiLight transition-all rounded-lg"])}" data-v-86decce9${_scopeId}><img alt="photo"${ssrRenderAttr("src", unref(authStore).get_server_domain + node.photo_url)} class="w-[50px] h-[50px] rounded-full mx-auto" data-v-86decce9${_scopeId}><p class="text-white text-center break-words" style="${ssrRenderStyle({ "font-weight": "bold" })}" data-v-86decce9${_scopeId}>${ssrInterpolate(((_b2 = node.first_name) == null ? void 0 : _b2.length) > 10 && ((_c2 = node.last_name) == null ? void 0 : _c2.length) > 10 ? node.first_name + " " + node.last_name.slice(0, 9) + "..." : node.first_name + " " + node.last_name)}</p><p class="text-sm text-white" data-v-86decce9${_scopeId}>${ssrInterpolate(node.position)}</p></div>`);
          } else {
            return [
              createVNode("div", {
                onDblclick: ($event) => treeUserInfo.value = { id: node.id, first_name: node.first_name, last_name: node.last_name, photo_url: node.photo_url, position: node.position, department_id: node.department_id, department: node.department, role: node.role },
                class: ["p-2 bg-blueDarkSemiLight transition-all rounded-lg", { "shadow-md dark:shadow-gray-400 ": node.id === ((_d2 = unref(treeUserInfo)) == null ? void 0 : _d2.id) }]
              }, [
                createVNode("img", {
                  alt: "photo",
                  src: unref(authStore).get_server_domain + node.photo_url,
                  class: "w-[50px] h-[50px] rounded-full mx-auto"
                }, null, 8, ["src"]),
                createVNode("p", {
                  class: "text-white text-center break-words",
                  style: { "font-weight": "bold" }
                }, toDisplayString(((_e2 = node.first_name) == null ? void 0 : _e2.length) > 10 && ((_f = node.last_name) == null ? void 0 : _f.length) > 10 ? node.first_name + " " + node.last_name.slice(0, 9) + "..." : node.first_name + " " + node.last_name), 1),
                createVNode("p", { class: "text-sm text-white" }, toDisplayString(node.position), 1)
              ], 42, ["onDblclick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="absolute max-md:hidden flex select-none gap-x-2 top-10 right-10 z-10" data-v-86decce9>`);
      _push(ssrRenderComponent(TheTreeButton, {
        onClick: ($event) => unref(treeStore).treeFullScreen = !unref(treeStore).treeFullScreen
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="stroke-white" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-86decce9${_scopeId}><path d="M9.99999 20.9585C6.88841 20.8286 4.41431 20.4143 4.00001 20C3.5857 19.5857 3.17139 17.1116 3.04155 14M20.9585 14C20.8286 17.1116 20.4143 19.5857 20 20C19.5857 20.4143 17.1116 20.8286 14 20.9585M14 3.04155C17.1116 3.17139 19.5857 3.5857 20 4.00001C20.4143 4.41431 20.8286 6.88842 20.9585 10M10 3.04155C6.88842 3.17139 4.41431 3.5857 4.00001 4.00001C3.5857 4.41431 3.17139 6.88842 3.04155 10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-86decce9${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "stroke-white",
                width: "30px",
                height: "30px",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M9.99999 20.9585C6.88841 20.8286 4.41431 20.4143 4.00001 20C3.5857 19.5857 3.17139 17.1116 3.04155 14M20.9585 14C20.8286 17.1116 20.4143 19.5857 20 20C19.5857 20.4143 17.1116 20.8286 14 20.9585M14 3.04155C17.1116 3.17139 19.5857 3.5857 20 4.00001C20.4143 4.41431 20.8286 6.88842 20.9585 10M10 3.04155C6.88842 3.17139 4.41431 3.5857 4.00001 4.00001C3.5857 4.41431 3.17139 6.88842 3.04155 10",
                  "stroke-width": "1.5",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(TheTreeButton, {
        onClick: ($event) => this.$refs.scaleTree.zoomIn()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="fill-white" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-86decce9${_scopeId}><path fill-rule="evenodd" clip-rule="evenodd" d="M5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10C15 11.381 14.4415 12.6296 13.5355 13.5355C12.6296 14.4415 11.381 15 10 15C7.23858 15 5 12.7614 5 10ZM10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C11.5719 17 13.0239 16.481 14.1921 15.6063L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L15.6063 14.1921C16.481 13.0239 17 11.5719 17 10C17 6.13401 13.866 3 10 3ZM11 8C11 7.44772 10.5523 7 10 7C9.44772 7 9 7.44772 9 8V9H8C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11H9V12C9 12.5523 9.44772 13 10 13C10.5523 13 11 12.5523 11 12V11H12C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9H11V8Z" data-v-86decce9${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "fill-white",
                width: "30px",
                height: "30px",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10C15 11.381 14.4415 12.6296 13.5355 13.5355C12.6296 14.4415 11.381 15 10 15C7.23858 15 5 12.7614 5 10ZM10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C11.5719 17 13.0239 16.481 14.1921 15.6063L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L15.6063 14.1921C16.481 13.0239 17 11.5719 17 10C17 6.13401 13.866 3 10 3ZM11 8C11 7.44772 10.5523 7 10 7C9.44772 7 9 7.44772 9 8V9H8C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11H9V12C9 12.5523 9.44772 13 10 13C10.5523 13 11 12.5523 11 12V11H12C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9H11V8Z"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(TheTreeButton, {
        onClick: ($event) => this.$refs.scaleTree.zoomOut()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="fill-white" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-86decce9${_scopeId}><path fill-rule="evenodd" clip-rule="evenodd" d="M5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10C15 11.381 14.4415 12.6296 13.5355 13.5355C12.6296 14.4415 11.381 15 10 15C7.23858 15 5 12.7614 5 10ZM10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C11.5719 17 13.0239 16.481 14.1921 15.6063L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L15.6063 14.1921C16.481 13.0239 17 11.5719 17 10C17 6.13401 13.866 3 10 3ZM8 9C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11H12C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9H8Z" data-v-86decce9${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "fill-white",
                width: "30px",
                height: "30px",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10C15 11.381 14.4415 12.6296 13.5355 13.5355C12.6296 14.4415 11.381 15 10 15C7.23858 15 5 12.7614 5 10ZM10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C11.5719 17 13.0239 16.481 14.1921 15.6063L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L15.6063 14.1921C16.481 13.0239 17 11.5719 17 10C17 6.13401 13.866 3 10 3ZM8 9C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11H12C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9H8Z"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(TheTreeButton, {
        onClick: ($event) => this.$refs.scaleTree.restoreScale()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="fill-white" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-86decce9${_scopeId}><path d="M14.4697 10.5303C14.7626 10.8232 15.2374 10.8232 15.5303 10.5303C15.8232 10.2374 15.8232 9.76256 15.5303 9.46967L14.4697 10.5303ZM12 7L12.5303 6.46967C12.2374 6.17678 11.7626 6.17678 11.4697 6.46967L12 7ZM8.46967 9.46967C8.17678 9.76256 8.17678 10.2374 8.46967 10.5303C8.76256 10.8232 9.23744 10.8232 9.53033 10.5303L8.46967 9.46967ZM9.53033 13.4697C9.23744 13.1768 8.76256 13.1768 8.46967 13.4697C8.17678 13.7626 8.17678 14.2374 8.46967 14.5303L9.53033 13.4697ZM12 17L11.4697 17.5303C11.7626 17.8232 12.2374 17.8232 12.5303 17.5303L12 17ZM15.5303 14.5303C15.8232 14.2374 15.8232 13.7626 15.5303 13.4697C15.2374 13.1768 14.7626 13.1768 14.4697 13.4697L15.5303 14.5303ZM15.5303 9.46967L12.5303 6.46967L11.4697 7.53033L14.4697 10.5303L15.5303 9.46967ZM11.4697 6.46967L8.46967 9.46967L9.53033 10.5303L12.5303 7.53033L11.4697 6.46967ZM8.46967 14.5303L11.4697 17.5303L12.5303 16.4697L9.53033 13.4697L8.46967 14.5303ZM12.5303 17.5303L15.5303 14.5303L14.4697 13.4697L11.4697 16.4697L12.5303 17.5303ZM8 4.75H16V3.25H8V4.75ZM19.25 8V16H20.75V8H19.25ZM16 19.25H8V20.75H16V19.25ZM4.75 16V8H3.25V16H4.75ZM8 19.25C6.20507 19.25 4.75 17.7949 4.75 16H3.25C3.25 18.6234 5.37665 20.75 8 20.75V19.25ZM19.25 16C19.25 17.7949 17.7949 19.25 16 19.25V20.75C18.6234 20.75 20.75 18.6234 20.75 16H19.25ZM16 4.75C17.7949 4.75 19.25 6.20507 19.25 8H20.75C20.75 5.37665 18.6234 3.25 16 3.25V4.75ZM8 3.25C5.37665 3.25 3.25 5.37665 3.25 8H4.75C4.75 6.20507 6.20507 4.75 8 4.75V3.25Z" data-v-86decce9${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "fill-white",
                width: "30px",
                height: "30px",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", { d: "M14.4697 10.5303C14.7626 10.8232 15.2374 10.8232 15.5303 10.5303C15.8232 10.2374 15.8232 9.76256 15.5303 9.46967L14.4697 10.5303ZM12 7L12.5303 6.46967C12.2374 6.17678 11.7626 6.17678 11.4697 6.46967L12 7ZM8.46967 9.46967C8.17678 9.76256 8.17678 10.2374 8.46967 10.5303C8.76256 10.8232 9.23744 10.8232 9.53033 10.5303L8.46967 9.46967ZM9.53033 13.4697C9.23744 13.1768 8.76256 13.1768 8.46967 13.4697C8.17678 13.7626 8.17678 14.2374 8.46967 14.5303L9.53033 13.4697ZM12 17L11.4697 17.5303C11.7626 17.8232 12.2374 17.8232 12.5303 17.5303L12 17ZM15.5303 14.5303C15.8232 14.2374 15.8232 13.7626 15.5303 13.4697C15.2374 13.1768 14.7626 13.1768 14.4697 13.4697L15.5303 14.5303ZM15.5303 9.46967L12.5303 6.46967L11.4697 7.53033L14.4697 10.5303L15.5303 9.46967ZM11.4697 6.46967L8.46967 9.46967L9.53033 10.5303L12.5303 7.53033L11.4697 6.46967ZM8.46967 14.5303L11.4697 17.5303L12.5303 16.4697L9.53033 13.4697L8.46967 14.5303ZM12.5303 17.5303L15.5303 14.5303L14.4697 13.4697L11.4697 16.4697L12.5303 17.5303ZM8 4.75H16V3.25H8V4.75ZM19.25 8V16H20.75V8H19.25ZM16 19.25H8V20.75H16V19.25ZM4.75 16V8H3.25V16H4.75ZM8 19.25C6.20507 19.25 4.75 17.7949 4.75 16H3.25C3.25 18.6234 5.37665 20.75 8 20.75V19.25ZM19.25 16C19.25 17.7949 17.7949 19.25 16 19.25V20.75C18.6234 20.75 20.75 18.6234 20.75 16H19.25ZM16 4.75C17.7949 4.75 19.25 6.20507 19.25 8H20.75C20.75 5.37665 18.6234 3.25 16 3.25V4.75ZM8 3.25C5.37665 3.25 3.25 5.37665 3.25 8H4.75C4.75 6.20507 6.20507 4.75 8 4.75V3.25Z" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="${ssrRenderClass([{ "!rounded-none dark:!bg-gray-700": unref(treeStore).treeFullScreen, "!w-0 ": !unref(treeUserInfo), "!w-[25%] dark:border-r-gray-400 border-r ": unref(treeUserInfo) }, "absolute left-0 top-0 rounded-tl-2xl rounded-bl-2xl dark:bg-gray-700 bg-white z-50 h-full transition-all duration-200"])}" data-v-86decce9>`);
      if (unref(treeUserInfo)) {
        _push(`<div class="relative" data-v-86decce9><button class="${ssrRenderClass([{ "fixed !top-1 !p-[3px]": unref(treeStore).treeFullScreen }, "absolute top-2 right-0 p-1 border-t border-l border-b"])}" data-v-86decce9><svg class="dark:stroke-white stroke-black" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-86decce9><path d="M10 7L15 12L10 17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-86decce9></path></svg></button><div class="mx-auto mt-4 gap-y-2 px-2 flex flex-col justify-center items-center" data-v-86decce9><img class="w-[70px] h-[70px] rounded-full mt-10 dark:border-none border"${ssrRenderAttr("src", unref(authStore).get_server_domain + ((_a = unref(treeUserInfo)) == null ? void 0 : _a.photo_url))} alt="" data-v-86decce9><div class="dark:text-white text-black text-center" data-v-86decce9><p class="text-xl break-words" data-v-86decce9>${ssrInterpolate(((_b = unref(treeUserInfo)) == null ? void 0 : _b.first_name) + " " + ((_c = unref(treeUserInfo)) == null ? void 0 : _c.last_name))}</p><p class="text-sm" data-v-86decce9>${ssrInterpolate((_d = unref(treeUserInfo)) == null ? void 0 : _d.position)}</p></div><div data-v-86decce9><p class="break-words text-center" data-v-86decce9>${ssrInterpolate(_ctx.$t("Департамент:"))} <span data-v-86decce9>${ssrInterpolate((_e = unref(treeUserInfo)) == null ? void 0 : _e.department)}</span></p></div></div><div class="px-2 my-6 flex flex-wrap justify-center gap-2" data-v-86decce9>`);
        _push(ssrRenderComponent(_sfc_main$3, {
          type: "treeBtn",
          onClick: ($event) => {
            var _a2;
            return unref(router).push(`/base/users/${(_a2 = unref(treeUserInfo)) == null ? void 0 : _a2.id}`);
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("Перейти"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("Перейти")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_sfc_main$3, { type: "treeBtn" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("Департамент"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("Департамент")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_sfc_main$3, { type: "treeBtn" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("Выдать задание"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("Выдать задание")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_sfc_main$3, { type: "treeBtn" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("Выдать задание"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("Выдать задание")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tree/TreeContent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TreeContent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-86decce9"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    treeFullScreen: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    useTreeStore();
    const companies = useCompanies();
    companies.loadCurrentCompany();
    useSeoMeta({
      title: "Дерево",
      description: `Древовидная структура компании ${companies.company.name}`
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$4, {
        "text-type": "pageTitle",
        class: { "blur": unref(useTreeStore)().treeFullScreen === true }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Дерево " + unref(companies).company.name))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Дерево " + unref(companies).company.name)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(TreeContent, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base/tree/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-AYuGKCxK.js.map
