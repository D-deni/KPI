import { _ as __nuxt_component_0 } from './client-only-uY1C8Tgt.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref, withCtx, openBlock, createBlock, createVNode, createTextVNode, toDisplayString, Transition, createCommentVNode, withDirectives, isRef, vModelText, Fragment, renderList, nextTick } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderSlot } from 'vue/server-renderer';
import { a as useUserStore, u as useAuthStore } from './auth-a24Q8VGa.mjs';
import { u as useChat } from './chat-a-SYr8I7.mjs';
import { useRoute, useRouter } from 'vue-router';
import { _ as _export_sfc } from './_plugin-vue_export-helper-yVxbj29m.mjs';
import { _ as _sfc_main$9 } from './TheButton-Af2-Kuec.mjs';
import { _ as _sfc_main$a } from './TheModal-1X0PcTyA.mjs';
import { _ as _sfc_main$b } from './TheFileInput-7jsAaCm9.mjs';
import { Preview } from 'vue-advanced-cropper';
import { _ as __nuxt_component_0$1 } from './nuxt-link-nvHjMUuE.mjs';
import { S as Sceleton } from './TheSceleton-RMAy-i6X.mjs';
import { _ as _sfc_main$c } from './TheChatAvatar-aI20SOJf.mjs';
import '../server.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import '@sindresorhus/slugify';
import 'tailwind-merge';
import 'animejs';
import '../../nuxt-storage.mjs';
import 'axios';
import 'vue3-toastify';
import './documents-4eUXzrVb.mjs';

const _sfc_main$8 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-2 cursor-pointer flex flex-col items-center" }, _attrs))}><div>`);
  ssrRenderSlot(_ctx.$slots, "ChatNavHeaderSvg", {}, null, _push, _parent);
  _push(`</div><p class="text-[12px] text-center tracking-widest">`);
  ssrRenderSlot(_ctx.$slots, "ChatNavHeaderText", {}, null, _push, _parent);
  _push(`</p></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/ChatNav/UI/ChatNavHeaderSlot.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const ChatNavHeaderSlot = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "ChatNavHeaderElem",
  __ssrInlineRender: true,
  props: {
    activeNav: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const chat = useChat();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "select-none" }, _attrs))}><div class="${ssrRenderClass([{ "after:left-[0%]": unref(chat).displayChat === "all", "after:left-[36%] max-md:after:left-[45%] max-[625px]:after:left-[43%] max-[500px]:after:left-[42%] max-[488px]:after:left-[41.5%] max-[414px]:after:left-[40%] max-[385px]:after:left-[38%]": unref(chat).displayChat === "users", "after:left-[75%] max-md:after:left-[91%] max-[700px]:after:left-[89%] max-[580px]:after:left-[87%] max-[500px]:after:left-[85%] max-[500px]:after:left-[83%] max-[390px]:after:left-[81%] max-[345px]:after:left-[79%]": unref(chat).displayChat === "groups" }, "flex items-center relative justify-between transition-all duration-200 after:w-[60px] after:h-[5px] after:bg-semiCyan after:rounded-t-full after:transition-all after:absolute after:bottom-0"])}">`);
      _push(ssrRenderComponent(ChatNavHeaderSlot, {
        class: { "text-semiCyan": unref(chat).displayChat === "all" },
        onClick: ($event) => unref(chat).displayChat = "all"
      }, {
        ChatNavHeaderSvg: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="${ssrRenderClass([{ "!fill-semiCyan": unref(chat).displayChat === "all" }, "fill-gray-500 dark:fill-gray-300"])}" fill="none" width="40px" height="40px" viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M22.5,10.05v10.5l-2.86-2.87H11.05a3.81,3.81,0,0,1-3.7-2.86,3.77,3.77,0,0,1-.12-1V10.05a3.82,3.82,0,0,1,3.82-3.82h7.63A3.82,3.82,0,0,1,22.5,10.05Z"${_scopeId}></path><path d="M16.77,5.27v1H11.05a3.82,3.82,0,0,0-3.82,3.82v2.86H4.36L1.5,15.77V5.27A3.82,3.82,0,0,1,5.32,1.45H13A3.82,3.82,0,0,1,16.77,5.27Z"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: ["fill-gray-500 dark:fill-gray-300", { "!fill-semiCyan": unref(chat).displayChat === "all" }],
                fill: "none",
                width: "40px",
                height: "40px",
                viewBox: "0 0 24 24",
                id: "Layer_1",
                "data-name": "Layer 1",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", { d: "M22.5,10.05v10.5l-2.86-2.87H11.05a3.81,3.81,0,0,1-3.7-2.86,3.77,3.77,0,0,1-.12-1V10.05a3.82,3.82,0,0,1,3.82-3.82h7.63A3.82,3.82,0,0,1,22.5,10.05Z" }),
                createVNode("path", { d: "M16.77,5.27v1H11.05a3.82,3.82,0,0,0-3.82,3.82v2.86H4.36L1.5,15.77V5.27A3.82,3.82,0,0,1,5.32,1.45H13A3.82,3.82,0,0,1,16.77,5.27Z" })
              ], 2))
            ];
          }
        }),
        ChatNavHeaderText: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u0412\u0441\u0435"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u0412\u0441\u0435")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(ChatNavHeaderSlot, {
        class: { "text-semiCyan": unref(chat).displayChat === "users" },
        onClick: ($event) => unref(chat).displayChat = "users"
      }, {
        ChatNavHeaderSvg: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="${ssrRenderClass([{ "!fill-semiCyan": unref(chat).displayChat === "users" }, "fill-gray-600 dark:fill-white"])}" width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path opacity="0.5" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"${_scopeId}></path><path d="M16.807 19.0112C15.4398 19.9504 13.7841 20.5 12 20.5C10.2159 20.5 8.56023 19.9503 7.193 19.0111C6.58915 18.5963 6.33109 17.8062 6.68219 17.1632C7.41001 15.8302 8.90973 15 12 15C15.0903 15 16.59 15.8303 17.3178 17.1632C17.6689 17.8062 17.4108 18.5964 16.807 19.0112Z"${_scopeId}></path><path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3432 6 9.00004 7.34315 9.00004 9C9.00004 10.6569 10.3432 12 12 12Z"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: ["fill-gray-600 dark:fill-white", { "!fill-semiCyan": unref(chat).displayChat === "users" }],
                width: "40px",
                height: "40px",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  opacity: "0.5",
                  d: "M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                }),
                createVNode("path", { d: "M16.807 19.0112C15.4398 19.9504 13.7841 20.5 12 20.5C10.2159 20.5 8.56023 19.9503 7.193 19.0111C6.58915 18.5963 6.33109 17.8062 6.68219 17.1632C7.41001 15.8302 8.90973 15 12 15C15.0903 15 16.59 15.8303 17.3178 17.1632C17.6689 17.8062 17.4108 18.5964 16.807 19.0112Z" }),
                createVNode("path", { d: "M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3432 6 9.00004 7.34315 9.00004 9C9.00004 10.6569 10.3432 12 12 12Z" })
              ], 2))
            ];
          }
        }),
        ChatNavHeaderText: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u041B\u0438\u0447\u043D\u044B\u0435"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u041B\u0438\u0447\u043D\u044B\u0435")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(ChatNavHeaderSlot, {
        class: { "text-semiCyan": unref(chat).displayChat === "groups" },
        onClick: ($event) => unref(chat).displayChat = "groups"
      }, {
        ChatNavHeaderSvg: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="${ssrRenderClass([{ "!fill-semiCyan": unref(chat).displayChat === "groups" }, "fill-gray-600 dark:fill-gray-300"])}" height="40px" width="40px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 611.998 611.998" xml:space="preserve"${_scopeId}><g${_scopeId}><g${_scopeId}><path d="M382.167,150.945c9.702,10.875,16.557,24.306,20.381,39.921c3.629,14.822,4.44,31.308,2.414,49.006
                  c-0.751,6.546-1.861,13.96-3.479,21.802c12.532,12.135,28.95,19.839,50.296,19.838c59.22-0.005,80.529-59.3,86.105-108.006
                  c6.872-60.004-21.498-105.163-86.105-105.163c-50.698,0-79.079,27.82-85.628,68.798
                  C372.076,141.062,377.449,145.655,382.167,150.945z"${_scopeId}></path><path d="M611.973,422.704c-0.645-18.899-2.861-37.887-6.161-56.495c-3.992-22.539-9.08-55.585-28.759-70.275
                  c-11.38-8.491-26.117-11.278-39.143-16.398c-6.343-2.492-12.024-4.967-17.354-7.784c-17.995,19.734-41.459,30.055-68.782,30.057
                  c-21.261,0-40.172-6.281-56.001-18.358c-3.644,11.272-8.522,22.623-15.044,32.994c5.728,3.449,11.923,6.204,19.451,9.162
                  c3.332,1.31,6.99,2.506,10.864,3.771c10.472,3.422,22.339,7.301,32.994,15.255c25.329,18.907,31.564,54.336,36.117,80.207
                  l0.49,2.792c2.355,13.266,4.084,26.299,5.197,38.961c20.215-2.071,40.327-5.61,60.047-9.774
                  c15.941-3.365,31.774-7.471,47.109-13.003C605.247,439.397,612.476,437.343,611.973,422.704z"${_scopeId}></path><path d="M160.216,281.511c21.345,0.002,37.762-7.703,50.295-19.838c-1.618-7.841-2.728-15.256-3.479-21.802
                  c-2.026-17.697-1.214-34.184,2.414-49.006c3.823-15.614,10.679-29.046,20.381-39.921c4.718-5.291,10.09-9.884,16.014-13.805
                  c-6.549-40.978-34.93-68.798-85.628-68.798c-64.606,0-92.977,45.16-86.106,105.163
                  C79.687,222.212,100.996,281.507,160.216,281.511z"${_scopeId}></path><path d="M167.957,344.634c10.655-7.954,22.524-11.833,32.994-15.255c3.875-1.265,7.531-2.461,10.864-3.771
                  c7.528-2.957,13.725-5.711,19.451-9.162c-6.52-10.369-11.4-21.722-15.043-32.994c-15.829,12.077-34.741,18.358-56.001,18.358
                  c-27.322-0.001-50.788-10.324-68.782-30.057c-5.329,2.817-11.012,5.291-17.354,7.784c-13.026,5.12-27.763,7.907-39.143,16.398
                  c-19.678,14.691-24.767,47.735-28.759,70.275c-3.3,18.607-5.516,37.595-6.161,56.495c-0.502,14.64,6.726,16.693,18.974,21.112
                  c15.334,5.531,31.17,9.637,47.109,13.003c19.72,4.165,39.833,7.704,60.047,9.774c1.112-12.662,2.841-25.693,5.197-38.961
                  l0.49-2.792C136.394,398.971,142.628,363.541,167.957,344.634z"${_scopeId}></path><path d="M470.351,429.405l-0.493-2.805c-4.258-24.197-10.091-57.334-32.191-73.832c-9.321-6.957-19.872-10.404-30.078-13.74
                  c-4.019-1.313-7.812-2.554-11.427-3.974c-5.269-2.07-10.016-4.097-14.464-6.338c-18.684,24.932-44.58,38.059-75.383,38.062
                  c-30.795,0-56.687-13.128-75.371-38.062c-4.449,2.243-9.196,4.269-14.467,6.34c-3.61,1.418-7.406,2.659-11.424,3.972
                  c-10.207,3.335-20.761,6.784-30.079,13.74c-22.107,16.5-27.936,49.645-32.193,73.846l-0.493,2.795
                  c-3.557,20.086-5.68,39.572-6.308,57.914c-0.737,21.519,12.62,26.316,24.403,30.55l1.269,0.457
                  c14.17,5.112,30.021,9.492,48.457,13.388c37.646,7.946,68.197,11.74,96.138,11.938h0.072h0.072
                  c27.946-0.199,58.495-3.992,96.135-11.938c18.439-3.894,34.289-8.274,48.453-13.387l1.268-0.456
                  c11.786-4.233,25.147-9.029,24.41-30.553C476.03,468.931,473.906,449.447,470.351,429.405z"${_scopeId}></path><path d="M221.005,243.009c5.577,48.709,26.883,108.009,86.103,108.006s80.529-59.297,86.106-108.006
                  c6.871-60.002-21.503-105.16-86.106-105.16C242.515,137.847,214.123,183.002,221.005,243.009z"${_scopeId}></path></g></g></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: ["fill-gray-600 dark:fill-gray-300", { "!fill-semiCyan": unref(chat).displayChat === "groups" }],
                height: "40px",
                width: "40px",
                version: "1.1",
                id: "Capa_1",
                xmlns: "http://www.w3.org/2000/svg",
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                viewBox: "0 0 611.998 611.998",
                "xml:space": "preserve"
              }, [
                createVNode("g", null, [
                  createVNode("g", null, [
                    createVNode("path", { d: "M382.167,150.945c9.702,10.875,16.557,24.306,20.381,39.921c3.629,14.822,4.44,31.308,2.414,49.006\r\n                  c-0.751,6.546-1.861,13.96-3.479,21.802c12.532,12.135,28.95,19.839,50.296,19.838c59.22-0.005,80.529-59.3,86.105-108.006\r\n                  c6.872-60.004-21.498-105.163-86.105-105.163c-50.698,0-79.079,27.82-85.628,68.798\r\n                  C372.076,141.062,377.449,145.655,382.167,150.945z" }),
                    createVNode("path", { d: "M611.973,422.704c-0.645-18.899-2.861-37.887-6.161-56.495c-3.992-22.539-9.08-55.585-28.759-70.275\r\n                  c-11.38-8.491-26.117-11.278-39.143-16.398c-6.343-2.492-12.024-4.967-17.354-7.784c-17.995,19.734-41.459,30.055-68.782,30.057\r\n                  c-21.261,0-40.172-6.281-56.001-18.358c-3.644,11.272-8.522,22.623-15.044,32.994c5.728,3.449,11.923,6.204,19.451,9.162\r\n                  c3.332,1.31,6.99,2.506,10.864,3.771c10.472,3.422,22.339,7.301,32.994,15.255c25.329,18.907,31.564,54.336,36.117,80.207\r\n                  l0.49,2.792c2.355,13.266,4.084,26.299,5.197,38.961c20.215-2.071,40.327-5.61,60.047-9.774\r\n                  c15.941-3.365,31.774-7.471,47.109-13.003C605.247,439.397,612.476,437.343,611.973,422.704z" }),
                    createVNode("path", { d: "M160.216,281.511c21.345,0.002,37.762-7.703,50.295-19.838c-1.618-7.841-2.728-15.256-3.479-21.802\r\n                  c-2.026-17.697-1.214-34.184,2.414-49.006c3.823-15.614,10.679-29.046,20.381-39.921c4.718-5.291,10.09-9.884,16.014-13.805\r\n                  c-6.549-40.978-34.93-68.798-85.628-68.798c-64.606,0-92.977,45.16-86.106,105.163\r\n                  C79.687,222.212,100.996,281.507,160.216,281.511z" }),
                    createVNode("path", { d: "M167.957,344.634c10.655-7.954,22.524-11.833,32.994-15.255c3.875-1.265,7.531-2.461,10.864-3.771\r\n                  c7.528-2.957,13.725-5.711,19.451-9.162c-6.52-10.369-11.4-21.722-15.043-32.994c-15.829,12.077-34.741,18.358-56.001,18.358\r\n                  c-27.322-0.001-50.788-10.324-68.782-30.057c-5.329,2.817-11.012,5.291-17.354,7.784c-13.026,5.12-27.763,7.907-39.143,16.398\r\n                  c-19.678,14.691-24.767,47.735-28.759,70.275c-3.3,18.607-5.516,37.595-6.161,56.495c-0.502,14.64,6.726,16.693,18.974,21.112\r\n                  c15.334,5.531,31.17,9.637,47.109,13.003c19.72,4.165,39.833,7.704,60.047,9.774c1.112-12.662,2.841-25.693,5.197-38.961\r\n                  l0.49-2.792C136.394,398.971,142.628,363.541,167.957,344.634z" }),
                    createVNode("path", { d: "M470.351,429.405l-0.493-2.805c-4.258-24.197-10.091-57.334-32.191-73.832c-9.321-6.957-19.872-10.404-30.078-13.74\r\n                  c-4.019-1.313-7.812-2.554-11.427-3.974c-5.269-2.07-10.016-4.097-14.464-6.338c-18.684,24.932-44.58,38.059-75.383,38.062\r\n                  c-30.795,0-56.687-13.128-75.371-38.062c-4.449,2.243-9.196,4.269-14.467,6.34c-3.61,1.418-7.406,2.659-11.424,3.972\r\n                  c-10.207,3.335-20.761,6.784-30.079,13.74c-22.107,16.5-27.936,49.645-32.193,73.846l-0.493,2.795\r\n                  c-3.557,20.086-5.68,39.572-6.308,57.914c-0.737,21.519,12.62,26.316,24.403,30.55l1.269,0.457\r\n                  c14.17,5.112,30.021,9.492,48.457,13.388c37.646,7.946,68.197,11.74,96.138,11.938h0.072h0.072\r\n                  c27.946-0.199,58.495-3.992,96.135-11.938c18.439-3.894,34.289-8.274,48.453-13.387l1.268-0.456\r\n                  c11.786-4.233,25.147-9.029,24.41-30.553C476.03,468.931,473.906,449.447,470.351,429.405z" }),
                    createVNode("path", { d: "M221.005,243.009c5.577,48.709,26.883,108.009,86.103,108.006s80.529-59.297,86.106-108.006\r\n                  c6.871-60.002-21.503-105.16-86.106-105.16C242.515,137.847,214.123,183.002,221.005,243.009z" })
                  ])
                ])
              ], 2))
            ];
          }
        }),
        ChatNavHeaderText: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u0413\u0440\u0443\u043F\u043F\u044B"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u0413\u0440\u0443\u043F\u043F\u044B")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/ChatNav/UI/ChatNavHeaderElem.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ChatUserCheckbox",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    const user = useAuthStore();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      if (!__props.item.is_group && __props.item.user.department) {
        _push(`<label${ssrRenderAttrs(mergeProps({ class: "flex w-full items-center gap-x-4 relative py-2 px-6 text-black transition-all cursor-pointer dark:hover:bg-gray-600 hover:bg-gray-200" }, _attrs))}><div class="relative"><img${ssrRenderAttr("src", unref(user).get_server_domain + __props.item.user.photo)} class="${ssrRenderClass([{ "!p-[2px] transition-all !border": __props.item.value }, "rounded-full w-[50px] h-[50px] dark:border-0 border"])}" alt="">`);
        if (__props.item.value) {
          _push(`<div class="${ssrRenderClass([{ "!border-2 !border-semiCyan text-white transition-all": __props.item.value === true, "dark:border-none": __props.item.value === false }, "absolute top-0 rounded-full w-[50px] h-[50px]"])}"></div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.item.value) {
          _push(`<div class="absolute bottom-0 right-0"><svg class="bg-semiCyan rounded-full stroke-white" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 13L10 16L17 9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><span class="relative z-10 dark:text-white">${ssrInterpolate(((_b = (_a = __props.item) == null ? void 0 : _a.user) == null ? void 0 : _b.first_name) + " " + ((_d = (_c = __props.item) == null ? void 0 : _c.user) == null ? void 0 : _d.last_name))}</span><input type="checkbox" class="hidden"${ssrIncludeBooleanAttr(__props.item.value) ? " checked" : ""}><span class="w-full h-full absolute top-0 left-0"></span></label>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/UI/ChatUserCheckbox.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ChatGroupCreate",
  __ssrInlineRender: true,
  setup(__props) {
    const userCount = ref([]);
    const groupName = ref(null);
    const groupTitle = ref("");
    ref({});
    const chat = useChat();
    useRouter();
    useAuthStore();
    const setFocus = () => {
      nextTick(() => {
        var _a;
        (_a = groupName.value) == null ? void 0 : _a.focus();
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$9, {
        class: "mb-2 flex items-center gap-x-4 mx-auto",
        type: "treeBtn",
        onClick: ($event) => {
          unref(chat).showGroupCreate = true;
          setFocus();
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="fill-gray-600 dark:fill-gray-300" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459.863 459.863" xml:space="preserve"${_scopeId}><g${_scopeId}><g${_scopeId}><g${_scopeId}><path d="M395.988,193.977c-18.629,24.992-45.641,41.956-77.406,44.25c26.626,31.04,43.84,70.378,47.152,113.55
                c1.243,16.197,0.369,24.083-0.932,30.599c16.064-2.497,30.815-6.128,43.488-10.794c42.626-15.694,51.573-38.891,51.573-55.586
                C459.863,265.521,434.565,220.849,395.988,193.977z"${_scopeId}></path><path d="M276.72,199.407c10.642,5.952,22.36,9.093,34.525,9.093c45.83,0,81.115-44.3,81.115-96.677
                c0-52.382-35.29-96.677-81.115-96.677c-18.734,0-36.411,7.436-50.724,21.145c20.03,25.65,31.446,59.072,31.446,94.667
                C291.967,154.544,286.961,178.037,276.72,199.407z"${_scopeId}></path><path d="M259.999,226.279c-24.558,31.058-57.739,46.482-91.839,46.482c-36.232,0-68.69-17.206-91.839-46.482
                C30.403,256.333,0,308.217,0,367.076c0,18.127,9.926,43.389,57.213,60.8c29.496,10.861,68.898,16.841,110.947,16.841
                c42.049,0,81.451-5.98,110.947-16.841c47.287-17.411,57.213-42.673,57.213-60.8C336.32,308.217,305.918,256.333,259.999,226.279z
                "${_scopeId}></path><path d="M168.16,242.763c53.003,0,93.806-51.234,93.806-111.804c0-60.571-40.808-111.804-93.806-111.804
                c-52.995,0-93.806,51.223-93.806,111.804C74.354,191.541,115.169,242.763,168.16,242.763z"${_scopeId}></path></g></g></g></svg><p class="text-sm"${_scopeId}>${ssrInterpolate(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0433\u0440\u0443\u043F\u043F\u0443"))}</p>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "fill-gray-600 dark:fill-gray-300",
                height: "20px",
                width: "20px",
                version: "1.1",
                id: "Layer_1",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 459.863 459.863",
                "xml:space": "preserve"
              }, [
                createVNode("g", null, [
                  createVNode("g", null, [
                    createVNode("g", null, [
                      createVNode("path", { d: "M395.988,193.977c-18.629,24.992-45.641,41.956-77.406,44.25c26.626,31.04,43.84,70.378,47.152,113.55\r\n                c1.243,16.197,0.369,24.083-0.932,30.599c16.064-2.497,30.815-6.128,43.488-10.794c42.626-15.694,51.573-38.891,51.573-55.586\r\n                C459.863,265.521,434.565,220.849,395.988,193.977z" }),
                      createVNode("path", { d: "M276.72,199.407c10.642,5.952,22.36,9.093,34.525,9.093c45.83,0,81.115-44.3,81.115-96.677\r\n                c0-52.382-35.29-96.677-81.115-96.677c-18.734,0-36.411,7.436-50.724,21.145c20.03,25.65,31.446,59.072,31.446,94.667\r\n                C291.967,154.544,286.961,178.037,276.72,199.407z" }),
                      createVNode("path", { d: "M259.999,226.279c-24.558,31.058-57.739,46.482-91.839,46.482c-36.232,0-68.69-17.206-91.839-46.482\r\n                C30.403,256.333,0,308.217,0,367.076c0,18.127,9.926,43.389,57.213,60.8c29.496,10.861,68.898,16.841,110.947,16.841\r\n                c42.049,0,81.451-5.98,110.947-16.841c47.287-17.411,57.213-42.673,57.213-60.8C336.32,308.217,305.918,256.333,259.999,226.279z\r\n                " }),
                      createVNode("path", { d: "M168.16,242.763c53.003,0,93.806-51.234,93.806-111.804c0-60.571-40.808-111.804-93.806-111.804\r\n                c-52.995,0-93.806,51.223-93.806,111.804C74.354,191.541,115.169,242.763,168.16,242.763z" })
                    ])
                  ])
                ])
              ])),
              createVNode("p", { class: "text-sm" }, toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0433\u0440\u0443\u043F\u043F\u0443")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(chat).showGroupCreate) {
        _push(ssrRenderComponent(_sfc_main$a, {
          onClick: ($event) => setFocus(),
          onShowModal: ($event) => {
            unref(chat).showGroupCreate = false;
            unref(chat).showGroupCreateChoice = false;
          },
          type: "resize"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex select-none gap-x-6 items-center"${_scopeId}><div class="relative"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$b, { toward: unref(chat) }, null, _parent2, _scopeId));
              if (unref(chat).results.image) {
                _push2(`<div${_scopeId}>`);
                _push2(ssrRenderComponent(unref(Preview), {
                  class: "w-[80px] h-[80px] rounded-full",
                  image: unref(chat).results.image,
                  coordinates: unref(chat).results.coordinates
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div${_scopeId}><p class="text-sm tracking-wider text-semiCyan"${_scopeId}>${ssrInterpolate(_ctx.$t("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0433\u0440\u0443\u043F\u043F\u044B"))}</p><input${ssrRenderAttr("value", unref(groupTitle))} class="bg-transparent border-b-2 border-b-semiCyan !outline-none" type="text"${_scopeId}></div></div><div class="flex select-none text-sm justify-end gap-x-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$9, {
                type: "chat",
                onClick: ($event) => {
                  unref(chat).showGroupCreate = false;
                  unref(chat).showGroupCreateChoice = false;
                  unref(chat).isGroup = false;
                  unref(chat).file = "";
                  unref(chat).src = "";
                  unref(chat).fileUpload = null;
                  unref(chat).results = { coordinates: null, image: null };
                }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0430"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0430")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$9, {
                type: "chat",
                onClick: ($event) => {
                  unref(chat).showGroupCreate = false;
                  unref(chat).showGroupCreateChoice = true;
                }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u0414\u0430\u043B\u0435\u0435"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u0414\u0430\u043B\u0435\u0435")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", {
                  onClick: ($event) => setFocus(),
                  class: "flex select-none gap-x-6 items-center"
                }, [
                  createVNode("div", {
                    class: "relative",
                    onMouseenter: ($event) => unref(chat).showImageChange = true,
                    onMouseleave: ($event) => unref(chat).showImageChange = false
                  }, [
                    createVNode(Transition, { name: "fade" }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$b, { toward: unref(chat) }, null, 8, ["toward"])
                      ]),
                      _: 1
                    }),
                    unref(chat).results.image ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode(unref(Preview), {
                        class: "w-[80px] h-[80px] rounded-full",
                        image: unref(chat).results.image,
                        coordinates: unref(chat).results.coordinates
                      }, null, 8, ["image", "coordinates"])
                    ])) : createCommentVNode("", true)
                  ], 40, ["onMouseenter", "onMouseleave"]),
                  createVNode("div", null, [
                    createVNode("p", { class: "text-sm tracking-wider text-semiCyan" }, toDisplayString(_ctx.$t("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0433\u0440\u0443\u043F\u043F\u044B")), 1),
                    withDirectives(createVNode("input", {
                      ref_key: "groupName",
                      ref: groupName,
                      "onUpdate:modelValue": ($event) => isRef(groupTitle) ? groupTitle.value = $event : null,
                      class: "bg-transparent border-b-2 border-b-semiCyan !outline-none",
                      type: "text"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(groupTitle)]
                    ])
                  ])
                ], 8, ["onClick"]),
                createVNode("div", {
                  onClick: ($event) => setFocus(),
                  class: "flex select-none text-sm justify-end gap-x-4"
                }, [
                  createVNode(_sfc_main$9, {
                    type: "chat",
                    onClick: ($event) => {
                      unref(chat).showGroupCreate = false;
                      unref(chat).showGroupCreateChoice = false;
                      unref(chat).isGroup = false;
                      unref(chat).file = "";
                      unref(chat).src = "";
                      unref(chat).fileUpload = null;
                      unref(chat).results = { coordinates: null, image: null };
                    }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0430")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_sfc_main$9, {
                    type: "chat",
                    onClick: ($event) => {
                      unref(chat).showGroupCreate = false;
                      unref(chat).showGroupCreateChoice = true;
                    }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u0414\u0430\u043B\u0435\u0435")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, ["onClick"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(chat).showGroupCreateChoice) {
        _push(ssrRenderComponent(_sfc_main$a, {
          type: "resizeSendWindow",
          onShowModal: ($event) => {
            unref(chat).showGroupCreateChoice = false;
            unref(chat).showGroupCreate = false;
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="tracking-wider px-4 pt-4"${_scopeId}>${ssrInterpolate(_ctx.$t("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432"))} <span class="text-sm text-gray-400 ml-2"${_scopeId}>${ssrInterpolate(unref(userCount).length + "/1000")}</span></p><div class="w-full px-4 relative flex items-center"${_scopeId}><div class="absolute rotate-90 ml-2"${_scopeId}><svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></div><input type="text" class="w-full dark:bg-gray-700 outline-none pl-10 h-[50px]" placeholder="\u041F\u043E\u0438\u0441\u043A..."${_scopeId}></div><!--[-->`);
              ssrRenderList(unref(chat).get_chat_list.results.filter((e) => !e.is_group), (item) => {
                _push2(ssrRenderComponent(_sfc_main$6, { item }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--><div class="w-full px-4 h-[50px] flex items-center justify-end text-sm gap-x-4"${_scopeId}>`);
              if (!unref(chat).showSettingChat) {
                _push2(ssrRenderComponent(_sfc_main$9, {
                  type: "chat",
                  onClick: ($event) => {
                    unref(chat).showGroupCreateChoice = false;
                    unref(chat).showGroupCreate = true;
                    setFocus();
                  }
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("\u041D\u0430\u0437\u0430\u0434"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("\u041D\u0430\u0437\u0430\u0434")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_sfc_main$9, {
                  type: "chat",
                  onClick: ($event) => unref(chat).showGroupCreateChoice = false
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0430"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0430")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              }
              if (!unref(chat).showSettingChat) {
                _push2(ssrRenderComponent(_sfc_main$9, {
                  type: "chat",
                  onClick: ($event) => {
                    unref(chat).showGroupCreateChoice = false;
                    unref(chat).isGroup = true;
                    unref(chat).createChatUser({ users: unref(userCount).filter((e) => e.id).map((e) => e.id), name: unref(groupTitle), photo: unref(chat).fileUpload }).then((res) => {
                      unref(chat).isGroup = false;
                    });
                  }
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_sfc_main$9, {
                  type: "chat",
                  onClick: () => {
                  }
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("p", { class: "tracking-wider px-4 pt-4" }, [
                  createTextVNode(toDisplayString(_ctx.$t("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432")) + " ", 1),
                  createVNode("span", { class: "text-sm text-gray-400 ml-2" }, toDisplayString(unref(userCount).length + "/1000"), 1)
                ]),
                createVNode("div", { class: "w-full px-4 relative flex items-center" }, [
                  createVNode("div", { class: "absolute rotate-90 ml-2" }, [
                    (openBlock(), createBlock("svg", {
                      class: "dark:stroke-white stroke-black",
                      width: "25px",
                      height: "25px",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", {
                        d: "M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",
                        "stroke-width": "1.2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ]))
                  ]),
                  createVNode("input", {
                    type: "text",
                    class: "w-full dark:bg-gray-700 outline-none pl-10 h-[50px]",
                    placeholder: "\u041F\u043E\u0438\u0441\u043A..."
                  })
                ]),
                (openBlock(true), createBlock(Fragment, null, renderList(unref(chat).get_chat_list.results.filter((e) => !e.is_group), (item) => {
                  return openBlock(), createBlock(_sfc_main$6, { item }, null, 8, ["item"]);
                }), 256)),
                createVNode("div", { class: "w-full px-4 h-[50px] flex items-center justify-end text-sm gap-x-4" }, [
                  !unref(chat).showSettingChat ? (openBlock(), createBlock(_sfc_main$9, {
                    key: 0,
                    type: "chat",
                    onClick: ($event) => {
                      unref(chat).showGroupCreateChoice = false;
                      unref(chat).showGroupCreate = true;
                      setFocus();
                    }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u041D\u0430\u0437\u0430\u0434")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : (openBlock(), createBlock(_sfc_main$9, {
                    key: 1,
                    type: "chat",
                    onClick: ($event) => unref(chat).showGroupCreateChoice = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0430")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])),
                  !unref(chat).showSettingChat ? (openBlock(), createBlock(_sfc_main$9, {
                    key: 2,
                    type: "chat",
                    onClick: ($event) => {
                      unref(chat).showGroupCreateChoice = false;
                      unref(chat).isGroup = true;
                      unref(chat).createChatUser({ users: unref(userCount).filter((e) => e.id).map((e) => e.id), name: unref(groupTitle), photo: unref(chat).fileUpload }).then((res) => {
                        unref(chat).isGroup = false;
                      });
                    }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : (openBlock(), createBlock(_sfc_main$9, {
                    key: 3,
                    type: "chat",
                    onClick: () => {
                    }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/ChatGroup/ChatGroupCreate.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ChatNavHeader",
  __ssrInlineRender: true,
  props: {
    activeNav: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    useUserStore();
    const chat = useChat();
    const route = useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><form class="px-4 mb-2 pb-4"><input${ssrRenderAttr("value", unref(chat).searchElem)} type="text" placeholder="\u041F\u043E\u0438\u0441\u043A..." class="${ssrRenderClass([{ "max-md:hidden": !unref(chat).activeChatNav && unref(route).path !== "/base/chat" }, "w-full hover:bg-active px-4 py-1 rounded-full max-md:w-9/12 max-md:mx-auto block text-sm bg-gray-100 focus:bg-gray-300 text-black tracking-widest dark:focus:opacity-100 transition-all dark:bg-gray-600 dark:text-white outline-none"])}"></form>`);
      if (unref(chat).windowWidth < 768 || unref(chat).windowWidth > 768) {
        _push(`<div class="mx-4">`);
        _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
        _push(ssrRenderComponent(_sfc_main$7, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/ChatNav/ChatNavHeader.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ChatNavContentUser",
  __ssrInlineRender: true,
  props: {
    dragClass: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    useUserStore();
    const chatStore = useChat();
    const user = useAuthStore();
    const route = useRoute();
    function message(chat_id) {
      let socket = new WebSocket(`wss://buildwithus.ai-softdev.com/ws/chat/${chat_id}?token=${nuxtStorage.localStorage.getData("token")}`);
      socket.onmessage = (data) => {
        let msg = JSON.parse(data.data.message);
        console.log(msg);
      };
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<!--[-->`);
      ssrRenderList((_a = unref(chatStore).get_chat_list.results) == null ? void 0 : _a.filter((e) => unref(chatStore).displayChat === "all" || e.is_group === true && unref(chatStore).displayChat === "groups" || e.is_group === false && unref(chatStore).displayChat === "users"), (chat) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/base/chat/${chat.id}`,
          onClick: ($event) => {
            unref(chatStore).activeChatNav = false;
            message(chat.id);
            unref(chatStore).showPinnedWindow = false;
            unref(chatStore).messageUpdate = {};
            unref(chatStore).messageForwarded = {};
            unref(chatStore).messageReplied = {};
            unref(chatStore).showChatInfo = false;
            unref(chatStore).showGroupCreateChoice = false;
          },
          class: ["flex justify-between px-4 gap-x-2 dark:hover:bg-gray-500 hover:bg-gray-300 cursor-pointer transition-all duration-200 py-2", { "dark:hover:!bg-semiCyan ": unref(route).path === `/base/chat/${chat.id}`, "hover:!bg-cyan": unref(route).path === `/base/chat/${chat.id}`, "!bg-blue-400": __props.dragClass && chat.id === chat.id }],
          onDragenter: ($event) => chat.id ? __props.dragClass = true : __props.dragClass = false,
          onDragleave: ($event) => __props.dragClass = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
            if (_push2) {
              _push2(`<div class="flex gap-x-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$c, { chat }, null, _parent2, _scopeId));
              _push2(`<div class="text-sm break-words"${_scopeId}>`);
              if (((_a2 = chat.user) == null ? void 0 : _a2.id) !== unref(user).user.id && ((_b = chat.user) == null ? void 0 : _b.id)) {
                _push2(`<p class="text-black dark:text-white"${_scopeId}>${ssrInterpolate(unref(user).user.id !== ((_c = chat.user) == null ? void 0 : _c.id) ? chat.user.first_name + " " + chat.user.last_name : unref(user).user.first_name + " " + unref(user).user.last_name)}</p>`);
              } else if (!((_d = chat.user) == null ? void 0 : _d.id) && !chat.is_group) {
                _push2(`<p class="tracking-wider text-black dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435"))}</p>`);
              } else if (chat.is_group) {
                _push2(`<p class="text-black dark:text-white"${_scopeId}>${ssrInterpolate(chat.name)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              if (chat.last_message.text && !chat.last_message.file_name) {
                _push2(`<p class="${ssrRenderClass([{ "text-gray-500 dark:text-white": unref(route).path === `/base/chat/${chat.id}` }, "text-gray-400"])}"${_scopeId}>${ssrInterpolate(((_e = chat.last_message.text) == null ? void 0 : _e.length) > 15 ? chat.last_message.text.slice(0, 15) + "..." : chat.last_message.text)}</p>`);
              } else if (chat.last_message.text && chat.last_message.file_name) {
                _push2(`<p class="${ssrRenderClass([{ "text-gray-500 dark:text-white": unref(route).path === `/base/chat/${chat.id}` }, "text-gray-400"])}"${_scopeId}><span${_scopeId}>${ssrInterpolate(chat.last_message.file_name.length > 20 ? chat.last_message.file_name.slice(0, 15) + "..." : chat.last_message.file_name)}</span>${ssrInterpolate(", " + chat.last_message.text)}</p>`);
              } else if (!chat.last_message.text && chat.last_message.file_name) {
                _push2(`<p class="${ssrRenderClass([{ "text-gray-500 dark:text-white": unref(route).path === `/base/chat/${chat.id}` }, "text-gray-400"])}"${_scopeId}>${ssrInterpolate(chat.last_message.file_name.length > 20 ? chat.last_message.file_name.slice(0, 20) + "..." : chat.last_message.file_name)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div><div class="text-[12px] flex gap-x-1"${_scopeId}>`);
              if ((_f = chat.user) == null ? void 0 : _f.id) {
                _push2(`<div${_scopeId}>`);
                if (chat.last_message.sender.id === unref(user).user.id) {
                  _push2(`<svg class="${ssrRenderClass([{ "fill-white": unref(route).path === `/base/chat/${chat.id}` }, "fill-semiCyan"])}" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}>`);
                  if (((_g = chat.last_message.text) == null ? void 0 : _g.length) > 0) {
                    _push2(`<path fill-rule="evenodd" clip-rule="evenodd" d="M15.4933 6.93502C15.8053 7.20743 15.8374 7.68122 15.565 7.99325L7.70786 16.9933C7.56543 17.1564 7.35943 17.25 7.14287 17.25C6.9263 17.25 6.72031 17.1564 6.57788 16.9933L3.43502 13.3933C3.16261 13.0812 3.19473 12.6074 3.50677 12.335C3.8188 12.0626 4.29259 12.0947 4.565 12.4068L7.14287 15.3596L14.435 7.00677C14.7074 6.69473 15.1812 6.66261 15.4933 6.93502Z"${_scopeId}></path>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  if (chat.last_message.read !== false) {
                    _push2(`<path fill-rule="evenodd" clip-rule="evenodd" d="M20.5175 7.01946C20.8174 7.30513 20.829 7.77986 20.5433 8.07981L11.9716 17.0798C11.8201 17.2389 11.6065 17.3235 11.3872 17.3114C11.1679 17.2993 10.9649 17.1917 10.8318 17.0169L10.4035 16.4544C10.1526 16.1249 10.2163 15.6543 10.5458 15.4034C10.8289 15.1878 11.2161 15.2044 11.4787 15.4223L19.4571 7.04531C19.7428 6.74537 20.2175 6.73379 20.5175 7.01946Z"${_scopeId}></path>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</svg>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<p class="${ssrRenderClass([{ "text-white": unref(route).path === `/base/chat/${chat.id}` }, "text-gray-400"])}"${_scopeId}>${ssrInterpolate(chat.last_message.created_at ? new Date(chat.last_message.created_at).toLocaleTimeString().slice(0, 5) : "")}</p></div>`);
            } else {
              return [
                createVNode("div", { class: "flex gap-x-2" }, [
                  createVNode(_sfc_main$c, { chat }, null, 8, ["chat"]),
                  createVNode("div", { class: "text-sm break-words" }, [
                    ((_h = chat.user) == null ? void 0 : _h.id) !== unref(user).user.id && ((_i = chat.user) == null ? void 0 : _i.id) ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "text-black dark:text-white"
                    }, toDisplayString(unref(user).user.id !== ((_j = chat.user) == null ? void 0 : _j.id) ? chat.user.first_name + " " + chat.user.last_name : unref(user).user.first_name + " " + unref(user).user.last_name), 1)) : !((_k = chat.user) == null ? void 0 : _k.id) && !chat.is_group ? (openBlock(), createBlock("p", {
                      key: 1,
                      class: "tracking-wider text-black dark:text-white"
                    }, toDisplayString(_ctx.$t("\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435")), 1)) : chat.is_group ? (openBlock(), createBlock("p", {
                      key: 2,
                      class: "text-black dark:text-white"
                    }, toDisplayString(chat.name), 1)) : createCommentVNode("", true),
                    chat.last_message.text && !chat.last_message.file_name ? (openBlock(), createBlock("p", {
                      key: 3,
                      class: ["text-gray-400", { "text-gray-500 dark:text-white": unref(route).path === `/base/chat/${chat.id}` }]
                    }, toDisplayString(((_l = chat.last_message.text) == null ? void 0 : _l.length) > 15 ? chat.last_message.text.slice(0, 15) + "..." : chat.last_message.text), 3)) : chat.last_message.text && chat.last_message.file_name ? (openBlock(), createBlock("p", {
                      key: 4,
                      class: ["text-gray-400", { "text-gray-500 dark:text-white": unref(route).path === `/base/chat/${chat.id}` }]
                    }, [
                      createVNode("span", null, toDisplayString(chat.last_message.file_name.length > 20 ? chat.last_message.file_name.slice(0, 15) + "..." : chat.last_message.file_name), 1),
                      createTextVNode(toDisplayString(", " + chat.last_message.text), 1)
                    ], 2)) : !chat.last_message.text && chat.last_message.file_name ? (openBlock(), createBlock("p", {
                      key: 5,
                      class: ["text-gray-400", { "text-gray-500 dark:text-white": unref(route).path === `/base/chat/${chat.id}` }]
                    }, toDisplayString(chat.last_message.file_name.length > 20 ? chat.last_message.file_name.slice(0, 20) + "..." : chat.last_message.file_name), 3)) : createCommentVNode("", true)
                  ])
                ]),
                createVNode("div", { class: "text-[12px] flex gap-x-1" }, [
                  ((_m = chat.user) == null ? void 0 : _m.id) ? (openBlock(), createBlock("div", { key: 0 }, [
                    chat.last_message.sender.id === unref(user).user.id ? (openBlock(), createBlock("svg", {
                      key: 0,
                      class: ["fill-semiCyan", { "fill-white": unref(route).path === `/base/chat/${chat.id}` }],
                      width: "20px",
                      height: "20px",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      ((_n = chat.last_message.text) == null ? void 0 : _n.length) > 0 ? (openBlock(), createBlock("path", {
                        key: 0,
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M15.4933 6.93502C15.8053 7.20743 15.8374 7.68122 15.565 7.99325L7.70786 16.9933C7.56543 17.1564 7.35943 17.25 7.14287 17.25C6.9263 17.25 6.72031 17.1564 6.57788 16.9933L3.43502 13.3933C3.16261 13.0812 3.19473 12.6074 3.50677 12.335C3.8188 12.0626 4.29259 12.0947 4.565 12.4068L7.14287 15.3596L14.435 7.00677C14.7074 6.69473 15.1812 6.66261 15.4933 6.93502Z"
                      })) : createCommentVNode("", true),
                      chat.last_message.read !== false ? (openBlock(), createBlock("path", {
                        key: 1,
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M20.5175 7.01946C20.8174 7.30513 20.829 7.77986 20.5433 8.07981L11.9716 17.0798C11.8201 17.2389 11.6065 17.3235 11.3872 17.3114C11.1679 17.2993 10.9649 17.1917 10.8318 17.0169L10.4035 16.4544C10.1526 16.1249 10.2163 15.6543 10.5458 15.4034C10.8289 15.1878 11.2161 15.2044 11.4787 15.4223L19.4571 7.04531C19.7428 6.74537 20.2175 6.73379 20.5175 7.01946Z"
                      })) : createCommentVNode("", true)
                    ], 2)) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true),
                  createVNode("p", {
                    class: ["text-gray-400", { "text-white": unref(route).path === `/base/chat/${chat.id}` }]
                  }, toDisplayString(chat.last_message.created_at ? new Date(chat.last_message.created_at).toLocaleTimeString().slice(0, 5) : ""), 3)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/ChatNav/ChatNavContentUser.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ChatNavContent",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const chatStore = useChat();
    const user = useAuthStore();
    const route = useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-[80%] max-md:h-[80%] overflow-y-auto mt-4 max-md:w-full" }, _attrs))}>`);
      if (unref(chatStore).searchElem === "") {
        _push(`<div class="flex flex-col mb-20">`);
        if (unref(userStore).get_user_list.results) {
          _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
        } else {
          _push(`<!--[-->`);
          ssrRenderList(4, (i) => {
            _push(`<div class="flex justify-center relative flex-col items-center mb-2">`);
            _push(ssrRenderComponent(Sceleton, {
              class: "dark:opacity-20 opacity-60",
              width: "90%",
              height: "70px",
              "border-radius": "10px"
            }, null, _parent));
            _push(`<div class="absolute left-6 max-md:left-10 flex items-center">`);
            _push(ssrRenderComponent(Sceleton, {
              class: "dark:opacity-20",
              width: "50px",
              height: "50px",
              "border-radius": "100%"
            }, null, _parent));
            _push(`<div class="ml-4 flex flex-col dark:opacity-20 gap-y-2">`);
            _push(ssrRenderComponent(Sceleton, {
              class: "",
              width: "150px",
              height: "10px",
              "border-radius": "4px"
            }, null, _parent));
            _push(ssrRenderComponent(Sceleton, {
              class: "",
              width: "150px",
              height: "10px",
              "border-radius": "4px"
            }, null, _parent));
            _push(`</div></div></div>`);
          });
          _push(`<!--]-->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(chatStore).searchElem !== "") {
        _push(`<div class=""><!--[-->`);
        ssrRenderList(unref(userStore).get_user_search.results, (userSearchList) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            onClick: ($event) => {
              var _a;
              userSearchList.id !== ((_a = unref(chatStore).get_user_chat.user) == null ? void 0 : _a.id) ? unref(chatStore).createChatUser({ user_id: userSearchList.id }) : () => {
                var _a2;
                unref(chatStore).flag = false;
                ("nextTick" in _ctx ? _ctx.nextTick : unref(nextTick))(() => {
                  unref(chatStore).flag = true;
                });
                _ctx.router.push(`/base/chat/${(_a2 = unref(chatStore).get_user_chat) == null ? void 0 : _a2.id}`);
              };
              unref(chatStore).showPinnedWindow = false;
              unref(chatStore).searchElem = "";
              unref(chatStore).activeChatNav = false;
            },
            class: ["flex items-center px-4 gap-x-2 dark:hover:bg-gray-500 hover:bg-gray-300 cursor-pointer transition-all duration-200 p-1", { "dark:hover:!bg-semiCyan": unref(route).path === `/base/chat/${userSearchList.id}`, "hover:!bg-cyan": unref(route).path === `/base/chat/${userSearchList.id}` }]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img class="w-[50px] h-[50px] rounded-full"${ssrRenderAttr("src", unref(user).get_server_domain + userSearchList.photo_url)} alt=""${_scopeId}><p class="text-sm break-words"${_scopeId}>${ssrInterpolate(userSearchList.first_name + " " + userSearchList.last_name)}</p>`);
              } else {
                return [
                  createVNode("img", {
                    class: "w-[50px] h-[50px] rounded-full",
                    src: unref(user).get_server_domain + userSearchList.photo_url,
                    alt: ""
                  }, null, 8, ["src"]),
                  createVNode("p", { class: "text-sm break-words" }, toDisplayString(userSearchList.first_name + " " + userSearchList.last_name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/ChatNav/ChatNavContent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ChatNav",
  __ssrInlineRender: true,
  props: {
    activeNav: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    useRouter();
    useRoute();
    useUserStore();
    const chatStore = useChat();
    useAuthStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full" }, _attrs))} data-v-a2cc5a54>`);
      _push(ssrRenderComponent(_sfc_main$4, { class: "pt-6" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        class: "",
        onDragenter: ($event) => unref(chatStore).showDragInfo = false
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/ChatNav.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ChatNav = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-a2cc5a54"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "chat",
  __ssrInlineRender: true,
  setup(__props) {
    ref(0);
    ref(true);
    const route = useRoute();
    const chatStore = useChat();
    const userStore = useUserStore();
    chatStore.loadChatList({ page: 1, limit: 100 });
    userStore.loadUserList({ query: "", user_type: "user-list/my-company", page: 1, limit: 1e4 });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "!mx-0 !py-0" }, _attrs))}><div class="dark:border-t-gray-500 dark:shadow-gray-500 dark:bg-gray-800 bg-gray-300 flex w-full border-t border-t-gray-100 dark:text-white rounded-lg shadow-md"><div class="${ssrRenderClass([{ "max-md:w-0": !unref(chatStore).activeChatNav || unref(route).path === `/base/chat/${unref(route).params.id}`, "max-md:w-full ": unref(route).path === `/base/chat`, "w-[320px]": !unref(userStore).get_user_list.results || !unref(chatStore).activeChatNav }, "max-md:absolute h-screen overflow-hidden relative z-[12] rounded-l-lg dark:bg-gray-700 bg-gray-200 transition-all duration-300 w-[320px]"])}">`);
      _push(ssrRenderComponent(ChatNav, { class: "" }, null, _parent));
      _push(`</div><div class="w-11/12 relative overflow-hidden max-lg:w-9/12 max-md:w-full h-screen">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      if (unref(route).path === "/base/chat") {
        _push(`<div class="flex items-center justify-center my-auto w-full h-full text-center rounded-full px-2"><p class="bg-black text-white bg-opacity-40 px-10 py-2 rounded-full">${ssrInterpolate(_ctx.$t("\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0434\u043B\u044F \u0442\u043E\u0433\u043E \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u0447\u0430\u0442"))}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base/chat.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=chat-yzRogImG.mjs.map
