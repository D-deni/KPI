import { defineComponent, useSSRContext, mergeProps, createSlots, withCtx, openBlock, createBlock, createVNode, createTextVNode, toDisplayString, unref, ref, isRef, createCommentVNode, watchEffect, resolveComponent, withDirectives, Fragment, renderList, vModelSelect, withModifiers } from "vue";
import { r as useSeoMeta } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderSlot, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { u as useTaskList } from "./tasks-AOpCvdFT.js";
import { S as Sceleton } from "./TheSceleton-RMAy-i6X.js";
import "hookable";
import { _ as _sfc_main$c } from "./TheButton-Jrv5tshN.js";
import { _ as _sfc_main$d } from "./TheModal-1X0PcTyA.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-yVxbj29m.js";
import VueDatePicker from "@vuepic/vue-datepicker";
import { startOfMonth, endOfMonth, subMonths, startOfYear, endOfYear } from "date-fns";
import { _ as __nuxt_component_0 } from "./nuxt-link-nvHjMUuE.js";
import { u as useAuthStore } from "./auth-ltfjqTsG.js";
import { T as TaskContentCreateElems } from "./TaskContentCreateElems-ahclgbGt.js";
import { _ as _sfc_main$e } from "./TheSearch-0oEaP3Jw.js";
import { useRouter } from "vue-router";
import { toast } from "vue3-toastify";
import { _ as _sfc_main$f } from "./TheTextContent-rN29GJom.js";
import { _ as _sfc_main$g } from "./TheInput-6xiMcCQ9.js";
import { u as useCompanies } from "./companies-Vl6LYc-q.js";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "vue-chartjs";
import "#internal/nitro";
import "ofetch";
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
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "TasksReportBlock",
  __ssrInlineRender: true,
  props: {
    task: {
      type: Number,
      default: null
    }
  },
  setup(__props) {
    useTaskList();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="dark:shadow-gray-500 dark:border dark:border-gray-500 w-[250px] h-[250px] max-[400px]:w-400px transition-all hover:-translate-y-3 shadow-lg dark:shadow-md p-6 rounded-lg"${ssrRenderAttr("task", __props.task)}><div class="dark:bg-gray-100 shadow-lg rounded-full w-[80px] h-[80px] mx-auto flex justify-center items-center">`);
      ssrRenderSlot(_ctx.$slots, "TaskReportSvg", {}, null, _push, _parent);
      _push(`</div><div class="flex flex-col"><p class="mt-6 mb-12 font-bold text-lg text-blue-400 dark:text-white">`);
      ssrRenderSlot(_ctx.$slots, "TaskReportTitle", {}, null, _push, _parent);
      _push(`</p><p class="text-md dark:text-white text-blue-600">`);
      ssrRenderSlot(_ctx.$slots, "TaskReportSubtitle", {}, null, _push, _parent);
      _push(`</p><div>`);
      ssrRenderSlot(_ctx.$slots, "TaskSceleton", {}, null, _push, _parent);
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tasks/TaskUI/TasksReportBlock.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "TasksReport",
  __ssrInlineRender: true,
  props: {
    stats: {
      type: Object
    },
    taskNumber: {
      type: Number,
      default: null
    }
  },
  setup(__props) {
    const taskList = useTaskList();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center flex-wrap gap-x-6 gap-y-6" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$b, null, createSlots({
        TaskReportSvg: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="50px" height="50px" viewBox="0 0 91 91" id="Layer_1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"${_scopeId}><g${_scopeId}><g${_scopeId}><path d="M64.292,13.277c-0.002-0.025-0.01-0.047-0.01-0.072c0-0.024,0.008-0.047,0.01-0.072V6.758h-8.936    c-1.07,0-2.053-0.606-2.525-1.567c-1.402-2.841-4.217-4.605-7.338-4.605c-3.129,0-5.941,1.764-7.346,4.604    c-0.473,0.961-1.455,1.568-2.521,1.568h-8.938v6.41c0,0.013,0.004,0.024,0.004,0.037c0,0.013-0.004,0.024-0.004,0.036v6.412    h37.604V13.277z" fill="#3b82f6"${_scopeId}></path><path d="M69.923,16.021v6.448c0,1.554-1.26,2.815-2.814,2.815H23.876c-1.559,0-2.816-1.261-2.816-2.815v-6.448    H9.597v74.682h66.164c3.279,0,5.943-2.666,5.943-5.939V16.021H69.923z" fill="#647F94"${_scopeId}></path><path d="M29.911,75.561h-9.264c-1.555,0-2.814-1.26-2.814-2.813c0-1.557,1.26-2.816,2.814-2.816h9.264    c1.557,0,2.814,1.26,2.814,2.816C32.726,74.301,31.468,75.561,29.911,75.561z M45.894,75.561h-6.879    c-1.553,0-2.814-1.26-2.814-2.813c0-1.557,1.262-2.816,2.814-2.816h6.879c1.553,0,2.814,1.26,2.814,2.816    C48.708,74.301,47.446,75.561,45.894,75.561z M64.046,75.561h-8.781c-1.557,0-2.818-1.26-2.818-2.813    c0-1.557,1.262-2.816,2.818-2.816h8.781c1.551,0,2.814,1.26,2.814,2.816C66.86,74.301,65.597,75.561,64.046,75.561z     M70.649,58.609H20.647c-1.555,0-2.814-1.26-2.814-2.814c0-1.557,1.26-2.816,2.814-2.816h50.002c1.557,0,2.814,1.26,2.814,2.816    C73.464,57.35,72.206,58.609,70.649,58.609z M70.649,41.666H20.647c-1.555,0-2.814-1.26-2.814-2.815    c0-1.556,1.26-2.816,2.814-2.816h50.002c1.557,0,2.814,1.261,2.814,2.816C73.464,40.406,72.206,41.666,70.649,41.666z" fill="#95AEC2"${_scopeId}></path></g></g></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "50px",
                height: "50px",
                viewBox: "0 0 91 91",
                id: "Layer_1",
                "xml:space": "preserve",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("g", null, [
                  createVNode("g", null, [
                    createVNode("path", {
                      d: "M64.292,13.277c-0.002-0.025-0.01-0.047-0.01-0.072c0-0.024,0.008-0.047,0.01-0.072V6.758h-8.936    c-1.07,0-2.053-0.606-2.525-1.567c-1.402-2.841-4.217-4.605-7.338-4.605c-3.129,0-5.941,1.764-7.346,4.604    c-0.473,0.961-1.455,1.568-2.521,1.568h-8.938v6.41c0,0.013,0.004,0.024,0.004,0.037c0,0.013-0.004,0.024-0.004,0.036v6.412    h37.604V13.277z",
                      fill: "#3b82f6"
                    }),
                    createVNode("path", {
                      d: "M69.923,16.021v6.448c0,1.554-1.26,2.815-2.814,2.815H23.876c-1.559,0-2.816-1.261-2.816-2.815v-6.448    H9.597v74.682h66.164c3.279,0,5.943-2.666,5.943-5.939V16.021H69.923z",
                      fill: "#647F94"
                    }),
                    createVNode("path", {
                      d: "M29.911,75.561h-9.264c-1.555,0-2.814-1.26-2.814-2.813c0-1.557,1.26-2.816,2.814-2.816h9.264    c1.557,0,2.814,1.26,2.814,2.816C32.726,74.301,31.468,75.561,29.911,75.561z M45.894,75.561h-6.879    c-1.553,0-2.814-1.26-2.814-2.813c0-1.557,1.262-2.816,2.814-2.816h6.879c1.553,0,2.814,1.26,2.814,2.816    C48.708,74.301,47.446,75.561,45.894,75.561z M64.046,75.561h-8.781c-1.557,0-2.818-1.26-2.818-2.813    c0-1.557,1.262-2.816,2.818-2.816h8.781c1.551,0,2.814,1.26,2.814,2.816C66.86,74.301,65.597,75.561,64.046,75.561z     M70.649,58.609H20.647c-1.555,0-2.814-1.26-2.814-2.814c0-1.557,1.26-2.816,2.814-2.816h50.002c1.557,0,2.814,1.26,2.814,2.816    C73.464,57.35,72.206,58.609,70.649,58.609z M70.649,41.666H20.647c-1.555,0-2.814-1.26-2.814-2.815    c0-1.556,1.26-2.816,2.814-2.816h50.002c1.557,0,2.814,1.261,2.814,2.816C73.464,40.406,72.206,41.666,70.649,41.666z",
                      fill: "#95AEC2"
                    })
                  ])
                ])
              ]))
            ];
          }
        }),
        TaskReportTitle: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Общие задания"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Общие задания")), 1)
            ];
          }
        }),
        _: 2
      }, [
        !((_a = unref(taskList).get_stats) == null ? void 0 : _a.count) && unref(taskList).get_tasks.results ? {
          name: "TaskReportSubtitle",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b;
            if (_push2) {
              _push2(`${ssrInterpolate(((_a2 = unref(taskList).get_tasks) == null ? void 0 : _a2.count) + _ctx.$t(" заданий"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(((_b = unref(taskList).get_tasks) == null ? void 0 : _b.count) + _ctx.$t(" заданий")), 1)
              ];
            }
          }),
          key: "0"
        } : {
          name: "TaskSceleton",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(Sceleton, {
                "border-radius": "20px",
                width: "100px",
                height: "20px"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(Sceleton, {
                  "border-radius": "20px",
                  width: "100px",
                  height: "20px"
                })
              ];
            }
          }),
          key: "1"
        }
      ]), _parent));
      _push(ssrRenderComponent(_sfc_main$b, null, createSlots({
        TaskReportSvg: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="50px" height="50px" viewBox="0 0 91 91" enable-background="new 0 0 91 91" id="Layer_1" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"${_scopeId}><g${_scopeId}><g${_scopeId}><path d="M23.932,87.037V64.561c0-10.395,10.014-20.498,22.377-20.498h0.639c12.359,0,22.371,10.104,22.371,20.498    v22.477" fill="#95AEC2"${_scopeId}></path><path d="M23.932,3.638v22.48c0,10.395,10.014,20.501,22.377,20.501h0.639c12.359,0,22.371-10.106,22.371-20.501    V3.638" fill="#647F94"${_scopeId}></path><path d="M75.018,6.978H16.561c-1.846,0-3.34-1.496-3.34-3.34c0-1.846,1.494-3.34,3.34-3.34h58.457    c1.842,0,3.34,1.494,3.34,3.34C78.357,5.481,76.859,6.978,75.018,6.978z" fill="#45596B"${_scopeId}></path><path d="M75.018,90.377H16.561c-1.846,0-3.34-1.496-3.34-3.34s1.494-3.34,3.34-3.34h58.457    c1.842,0,3.34,1.496,3.34,3.34S76.859,90.377,75.018,90.377z" fill="#45596B"${_scopeId}></path></g></g></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "50px",
                height: "50px",
                viewBox: "0 0 91 91",
                "enable-background": "new 0 0 91 91",
                id: "Layer_1",
                version: "1.1",
                "xml:space": "preserve",
                xmlns: "http://www.w3.org/2000/svg",
                "xmlns:xlink": "http://www.w3.org/1999/xlink"
              }, [
                createVNode("g", null, [
                  createVNode("g", null, [
                    createVNode("path", {
                      d: "M23.932,87.037V64.561c0-10.395,10.014-20.498,22.377-20.498h0.639c12.359,0,22.371,10.104,22.371,20.498    v22.477",
                      fill: "#95AEC2"
                    }),
                    createVNode("path", {
                      d: "M23.932,3.638v22.48c0,10.395,10.014,20.501,22.377,20.501h0.639c12.359,0,22.371-10.106,22.371-20.501    V3.638",
                      fill: "#647F94"
                    }),
                    createVNode("path", {
                      d: "M75.018,6.978H16.561c-1.846,0-3.34-1.496-3.34-3.34c0-1.846,1.494-3.34,3.34-3.34h58.457    c1.842,0,3.34,1.494,3.34,3.34C78.357,5.481,76.859,6.978,75.018,6.978z",
                      fill: "#45596B"
                    }),
                    createVNode("path", {
                      d: "M75.018,90.377H16.561c-1.846,0-3.34-1.496-3.34-3.34s1.494-3.34,3.34-3.34h58.457    c1.842,0,3.34,1.496,3.34,3.34S76.859,90.377,75.018,90.377z",
                      fill: "#45596B"
                    })
                  ])
                ])
              ]))
            ];
          }
        }),
        TaskReportTitle: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("В процессе"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("В процессе")), 1)
            ];
          }
        }),
        _: 2
      }, [
        !unref(taskList).get_stats[0] ? {
          name: "TaskSceleton",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(Sceleton, {
                "border-radius": "20px",
                width: "100px",
                height: "20px"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(Sceleton, {
                  "border-radius": "20px",
                  width: "100px",
                  height: "20px"
                })
              ];
            }
          }),
          key: "0"
        } : {
          name: "TaskReportSubtitle",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b, _c, _d;
            if (_push2) {
              _push2(`${ssrInterpolate(((_b = (_a2 = unref(taskList)) == null ? void 0 : _a2.get_stats[0]) == null ? void 0 : _b.count) + _ctx.$t(" заданий"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(((_d = (_c = unref(taskList)) == null ? void 0 : _c.get_stats[0]) == null ? void 0 : _d.count) + _ctx.$t(" заданий")), 1)
              ];
            }
          }),
          key: "1"
        }
      ]), _parent));
      _push(ssrRenderComponent(_sfc_main$b, null, createSlots({
        TaskReportSvg: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="50px" height="50px" viewBox="0 0 91 91" enable-background="new 0 0 91 91" id="Layer_1" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"${_scopeId}><g${_scopeId}><g${_scopeId}><path d="M16.084,38.938h-0.332c-8.271,0-15.002-6.68-15.002-14.888V11.007c0-1.846,1.494-3.34,3.342-3.34h14.494    c1.844,0,3.34,1.494,3.34,3.34v23.664c0.018,0.266,0.027,0.424,0.029,0.586c0.025,1.588-1.072,2.975-2.625,3.314    C18.201,38.819,17.139,38.938,16.084,38.938z M7.432,14.347v9.703c0,4.359,3.461,7.935,7.814,8.193V14.347H7.432z" fill="#45596B"${_scopeId}></path><path d="M18.615,37.769c-1.34,0-2.438-1.076-2.459-2.424c-0.02-0.334-0.029-0.502-0.029-0.674V11.007    c0-1.359,1.1-2.459,2.459-2.459c1.357,0,2.459,1.1,2.459,2.459l0.01,23.832c0.01,0.145,0.018,0.287,0.02,0.432    c0.021,1.359-1.063,2.477-2.42,2.498C18.641,37.769,18.629,37.769,18.615,37.769z" fill="#647F94"${_scopeId}></path><path d="M75.32,38.938h-0.332c-1.057,0-2.121-0.119-3.25-0.367c-1.572-0.342-2.678-1.756-2.629-3.363    c0.004-0.152,0.016-0.303,0.027-0.453l0.01-23.748c0-1.846,1.494-3.34,3.34-3.34H86.98c1.844,0,3.34,1.494,3.34,3.34V24.05    C90.32,32.259,83.592,38.938,75.32,38.938z M75.826,14.347v17.896c4.352-0.258,7.814-3.833,7.814-8.193v-9.703H75.826z" fill="#45596B"${_scopeId}></path><path d="M45.535,88.495c-1.844,0-3.342-1.496-3.342-3.34V58.304c0-1.842,1.498-3.34,3.342-3.34    c1.846,0,3.34,1.498,3.34,3.34v26.852C48.875,86.999,47.381,88.495,45.535,88.495z" fill="#45596B"${_scopeId}></path><path d="M60.531,88.495H30.537c-1.844,0-3.34-1.496-3.34-3.34c0-1.846,1.496-3.34,3.34-3.34h29.994    c1.844,0,3.34,1.494,3.34,3.34C63.871,86.999,62.375,88.495,60.531,88.495z" fill="#45596B"${_scopeId}></path><g${_scopeId}><path d="M72.486,2.498H46.66v29.195c0,1.357-1.104,2.459-2.459,2.459H30.537c-1.357,0-2.459-1.102-2.459-2.459     V2.498h-9.492c-1.359,0-2.463,1.098-2.463,2.459l0.033,30.412c0.365,14.955,12.287,25.398,29,25.398h0.756     c16.711,0,28.635-10.443,28.994-25.453l0.039-30.357C74.945,3.595,73.844,2.498,72.486,2.498z" fill="#647F94"${_scopeId}></path><rect fill="#3b82f6" height="26.734" width="8.744" x="32.996" y="2.498"${_scopeId}></rect></g></g></g></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "50px",
                height: "50px",
                viewBox: "0 0 91 91",
                "enable-background": "new 0 0 91 91",
                id: "Layer_1",
                version: "1.1",
                "xml:space": "preserve",
                xmlns: "http://www.w3.org/2000/svg",
                "xmlns:xlink": "http://www.w3.org/1999/xlink"
              }, [
                createVNode("g", null, [
                  createVNode("g", null, [
                    createVNode("path", {
                      d: "M16.084,38.938h-0.332c-8.271,0-15.002-6.68-15.002-14.888V11.007c0-1.846,1.494-3.34,3.342-3.34h14.494    c1.844,0,3.34,1.494,3.34,3.34v23.664c0.018,0.266,0.027,0.424,0.029,0.586c0.025,1.588-1.072,2.975-2.625,3.314    C18.201,38.819,17.139,38.938,16.084,38.938z M7.432,14.347v9.703c0,4.359,3.461,7.935,7.814,8.193V14.347H7.432z",
                      fill: "#45596B"
                    }),
                    createVNode("path", {
                      d: "M18.615,37.769c-1.34,0-2.438-1.076-2.459-2.424c-0.02-0.334-0.029-0.502-0.029-0.674V11.007    c0-1.359,1.1-2.459,2.459-2.459c1.357,0,2.459,1.1,2.459,2.459l0.01,23.832c0.01,0.145,0.018,0.287,0.02,0.432    c0.021,1.359-1.063,2.477-2.42,2.498C18.641,37.769,18.629,37.769,18.615,37.769z",
                      fill: "#647F94"
                    }),
                    createVNode("path", {
                      d: "M75.32,38.938h-0.332c-1.057,0-2.121-0.119-3.25-0.367c-1.572-0.342-2.678-1.756-2.629-3.363    c0.004-0.152,0.016-0.303,0.027-0.453l0.01-23.748c0-1.846,1.494-3.34,3.34-3.34H86.98c1.844,0,3.34,1.494,3.34,3.34V24.05    C90.32,32.259,83.592,38.938,75.32,38.938z M75.826,14.347v17.896c4.352-0.258,7.814-3.833,7.814-8.193v-9.703H75.826z",
                      fill: "#45596B"
                    }),
                    createVNode("path", {
                      d: "M45.535,88.495c-1.844,0-3.342-1.496-3.342-3.34V58.304c0-1.842,1.498-3.34,3.342-3.34    c1.846,0,3.34,1.498,3.34,3.34v26.852C48.875,86.999,47.381,88.495,45.535,88.495z",
                      fill: "#45596B"
                    }),
                    createVNode("path", {
                      d: "M60.531,88.495H30.537c-1.844,0-3.34-1.496-3.34-3.34c0-1.846,1.496-3.34,3.34-3.34h29.994    c1.844,0,3.34,1.494,3.34,3.34C63.871,86.999,62.375,88.495,60.531,88.495z",
                      fill: "#45596B"
                    }),
                    createVNode("g", null, [
                      createVNode("path", {
                        d: "M72.486,2.498H46.66v29.195c0,1.357-1.104,2.459-2.459,2.459H30.537c-1.357,0-2.459-1.102-2.459-2.459     V2.498h-9.492c-1.359,0-2.463,1.098-2.463,2.459l0.033,30.412c0.365,14.955,12.287,25.398,29,25.398h0.756     c16.711,0,28.635-10.443,28.994-25.453l0.039-30.357C74.945,3.595,73.844,2.498,72.486,2.498z",
                        fill: "#647F94"
                      }),
                      createVNode("rect", {
                        fill: "#3b82f6",
                        height: "26.734",
                        width: "8.744",
                        x: "32.996",
                        y: "2.498"
                      })
                    ])
                  ])
                ])
              ]))
            ];
          }
        }),
        TaskReportTitle: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Выполненые"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Выполненые")), 1)
            ];
          }
        }),
        _: 2
      }, [
        !unref(taskList).get_stats[2] ? {
          name: "TaskSceleton",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(Sceleton, {
                "border-radius": "20px",
                width: "100px",
                height: "20px"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(Sceleton, {
                  "border-radius": "20px",
                  width: "100px",
                  height: "20px"
                })
              ];
            }
          }),
          key: "0"
        } : {
          name: "TaskReportSubtitle",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b, _c, _d;
            if (_push2) {
              _push2(`${ssrInterpolate(((_b = (_a2 = unref(taskList)) == null ? void 0 : _a2.get_stats[2]) == null ? void 0 : _b.count) + _ctx.$t(" заданий"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(((_d = (_c = unref(taskList)) == null ? void 0 : _c.get_stats[2]) == null ? void 0 : _d.count) + _ctx.$t(" заданий")), 1)
              ];
            }
          }),
          key: "1"
        }
      ]), _parent));
      _push(ssrRenderComponent(_sfc_main$b, null, createSlots({
        TaskReportSvg: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="50px" height="50px" viewBox="0 0 91 91" enable-background="new 0 0 91 91" id="Layer_1" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"${_scopeId}><g${_scopeId}><g${_scopeId}><path d="M16.142,90.613H68.39c3.418,0,6.197-2.779,6.197-6.195V29.52l-58.445-0.002V90.613z" fill="#647F94"${_scopeId}></path><path d="M58.431,42.701c0-1.547,1.254-2.801,2.801-2.801s2.803,1.254,2.803,2.801v37.295    c0,1.549-1.256,2.801-2.803,2.801s-2.801-1.252-2.801-2.801V42.701z M42.56,42.701c0-1.547,1.254-2.801,2.803-2.801    c1.545,0,2.799,1.254,2.799,2.801v37.295c0,1.549-1.254,2.801-2.799,2.801c-1.549,0-2.803-1.252-2.803-2.801V42.701z     M26.688,42.701c0-1.547,1.256-2.801,2.801-2.801c1.547,0,2.803,1.254,2.803,2.801v37.295c0,1.549-1.256,2.801-2.803,2.801    c-1.545,0-2.801-1.252-2.801-2.801V42.701z" fill="#95AEC2"${_scopeId}></path><rect fill="#3b82f6" height="9.438" width="66.611" x="12.056" y="14.479"${_scopeId}></rect><rect fill="#647F94" height="7.887" width="18.205" x="36.259" y="0.99"${_scopeId}></rect></g></g></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "50px",
                height: "50px",
                viewBox: "0 0 91 91",
                "enable-background": "new 0 0 91 91",
                id: "Layer_1",
                version: "1.1",
                "xml:space": "preserve",
                xmlns: "http://www.w3.org/2000/svg",
                "xmlns:xlink": "http://www.w3.org/1999/xlink"
              }, [
                createVNode("g", null, [
                  createVNode("g", null, [
                    createVNode("path", {
                      d: "M16.142,90.613H68.39c3.418,0,6.197-2.779,6.197-6.195V29.52l-58.445-0.002V90.613z",
                      fill: "#647F94"
                    }),
                    createVNode("path", {
                      d: "M58.431,42.701c0-1.547,1.254-2.801,2.801-2.801s2.803,1.254,2.803,2.801v37.295    c0,1.549-1.256,2.801-2.803,2.801s-2.801-1.252-2.801-2.801V42.701z M42.56,42.701c0-1.547,1.254-2.801,2.803-2.801    c1.545,0,2.799,1.254,2.799,2.801v37.295c0,1.549-1.254,2.801-2.799,2.801c-1.549,0-2.803-1.252-2.803-2.801V42.701z     M26.688,42.701c0-1.547,1.256-2.801,2.801-2.801c1.547,0,2.803,1.254,2.803,2.801v37.295c0,1.549-1.256,2.801-2.803,2.801    c-1.545,0-2.801-1.252-2.801-2.801V42.701z",
                      fill: "#95AEC2"
                    }),
                    createVNode("rect", {
                      fill: "#3b82f6",
                      height: "9.438",
                      width: "66.611",
                      x: "12.056",
                      y: "14.479"
                    }),
                    createVNode("rect", {
                      fill: "#647F94",
                      height: "7.887",
                      width: "18.205",
                      x: "36.259",
                      y: "0.99"
                    })
                  ])
                ])
              ]))
            ];
          }
        }),
        TaskReportTitle: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Отклоненные"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Отклоненные")), 1)
            ];
          }
        }),
        _: 2
      }, [
        !unref(taskList).get_stats[3] ? {
          name: "TaskSceleton",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(Sceleton, {
                "border-radius": "20px",
                width: "100px",
                height: "20px"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(Sceleton, {
                  "border-radius": "20px",
                  width: "100px",
                  height: "20px"
                })
              ];
            }
          }),
          key: "0"
        } : {
          name: "TaskReportSubtitle",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b, _c, _d;
            if (_push2) {
              _push2(`${ssrInterpolate(((_b = (_a2 = unref(taskList)) == null ? void 0 : _a2.get_stats[3]) == null ? void 0 : _b.count) + _ctx.$t(" заданий"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(((_d = (_c = unref(taskList)) == null ? void 0 : _c.get_stats[3]) == null ? void 0 : _d.count) + _ctx.$t(" заданий")), 1)
              ];
            }
          }),
          key: "1"
        }
      ]), _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tasks/TasksReport.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "cursor-pointer select-none" }, _attrs))}><div class="flex items-center gap-x-2"><div class="flex items-center gap-x-4"><div>`);
  ssrRenderSlot(_ctx.$slots, "filterIcon", {}, null, _push, _parent);
  _push(`</div><p class="uppercase dark:text-white tracking-widest font-bold">`);
  ssrRenderSlot(_ctx.$slots, "filterTitle", {}, null, _push, _parent);
  _push(`</p></div><div>`);
  ssrRenderSlot(_ctx.$slots, "filterChevron", {}, null, _push, _parent);
  _push(`</div></div></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tasks/TaskUI/TaskUIFilter/TaskFilter.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const TaskFilter = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$8 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-x-2 pb-2 border-opacity-5 border-black justify-between max-sm:justify-start max-sm:gap-x-10 my-4 items-center cursor-pointer rounded-lg p-2" }, _attrs))}><div>`);
  ssrRenderSlot(_ctx.$slots, "statusColor", {}, null, _push, _parent);
  _push(`</div><p>`);
  ssrRenderSlot(_ctx.$slots, "statusName", {}, null, _push, _parent);
  _push(`</p></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tasks/TaskUI/TaskUIFilter/TaskFilterStatus.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const TaskFilterStatus = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "TasksContentSearch",
  __ssrInlineRender: true,
  props: {
    moveElem: Boolean,
    showFilter: Boolean,
    showStatus: [String, Boolean],
    activeStatus: [String, Boolean],
    searchInput: String
  },
  setup(__props) {
    ref({
      query: ""
    });
    const date = ref();
    const presetRanges = ref([
      { label: "Сегодня", range: [/* @__PURE__ */ new Date(), /* @__PURE__ */ new Date()] },
      { label: "В этом месяце", range: [startOfMonth(/* @__PURE__ */ new Date()), endOfMonth(/* @__PURE__ */ new Date())] },
      {
        label: "В предидущем месяце",
        range: [startOfMonth(subMonths(/* @__PURE__ */ new Date(), 1)), endOfMonth(subMonths(/* @__PURE__ */ new Date(), 1))]
      },
      { label: "В этом году", range: [startOfYear(/* @__PURE__ */ new Date()), endOfYear(/* @__PURE__ */ new Date())] },
      { label: "По сроку выполнения", range: [/* @__PURE__ */ new Date(), /* @__PURE__ */ new Date()] }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex justify-center gap-x-10 max-md:flex-wrap max-md:gap-y-4 max-md:items-center"><div class="w-2/12 max-md:w-full flex max-md:justify-center items-center gap-x-2"><div class="cursor-pointer relative transition-all"><svg class="dark:stroke-gray-200 stroke-black" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke-width="1.5"></circle><path d="M10.125 8.875C10.125 7.83947 10.9645 7 12 7C13.0355 7 13.875 7.83947 13.875 8.875C13.875 9.56245 13.505 10.1635 12.9534 10.4899C12.478 10.7711 12 11.1977 12 11.75V13" stroke-width="1.5" stroke-linecap="round"></path><circle cx="12" cy="16" r="1" class="dark:fill-white fill-black"></circle></svg><div class="${ssrRenderClass([{ "hidden": !__props.moveElem, "block": __props.moveElem }, "absolute dark:bg-gray-400 bg-white w-[200px] max-md:left-0 right-0 top-10 z-10 shadow-md rounded-lg p-2"])}"><h3 class="text-center tracking-wider">${ssrInterpolate(_ctx.$t("Статусы выполнения"))}</h3>`);
      _push(ssrRenderComponent(TaskFilterStatus, null, {
        statusColor: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-orange-500 w-[25px] h-[25px] rounded-full"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "bg-orange-500 w-[25px] h-[25px] rounded-full" })
            ];
          }
        }),
        statusName: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Выполняется"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Выполняется")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(TaskFilterStatus, null, {
        statusColor: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-green-500 w-[25px] h-[25px] rounded-full"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "bg-green-500 w-[25px] h-[25px] rounded-full" })
            ];
          }
        }),
        statusName: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Выполнено"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Выполнено")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(TaskFilterStatus, null, {
        statusColor: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-red-500 w-[25px] h-[25px] rounded-full"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "bg-red-500 w-[25px] h-[25px] rounded-full" })
            ];
          }
        }),
        statusName: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Отклонено"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Отклонено")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(TaskFilterStatus, null, {
        statusColor: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-blue-500 w-[25px] h-[25px] rounded-full"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "bg-blue-500 w-[25px] h-[25px] rounded-full" })
            ];
          }
        }),
        statusName: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("На расмотрении"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("На расмотрении")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_sfc_main$c, {
        onClick: ($event) => __props.showFilter = !__props.showFilter,
        type: "button",
        class: "tracking-widest rounded-full dark:bg-gray-400 p-3 bg-gray-300 hover:bg-gray-400 transition-all duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Фильтр"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Фильтр")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (__props.showFilter) {
        _push(ssrRenderComponent(_sfc_main$d, {
          onShowModal: ($event) => __props.showFilter = !__props.showFilter
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div${_scopeId}><div class="relative"${_scopeId}><h2 class="text-center font-bold text-2xl max-md:text-xl dark:text-white tracking-widest"${_scopeId}>${ssrInterpolate(_ctx.$t("Фильтрация по поиску"))}</h2><div class="absolute top-0 right-0 max-md:-right-3 max-md:-top-2"${_scopeId}><svg class="dark:stroke-white stroke-black" width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><circle cx="12" cy="12" r="10" stroke-width="1.5"${_scopeId}></circle><path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke-width="1.5" stroke-linecap="round"${_scopeId}></path></svg></div></div><div class="flex justify-between mx-auto my-10 max-lg:flex-col items-center gap-y-10"${_scopeId}>`);
              _push2(ssrRenderComponent(TaskFilter, {
                class: ["p-4", { "box": __props.showStatus === "status" }],
                onShowEvent: ($event) => {
                  __props.showStatus = !__props.showStatus;
                  __props.showStatus = "status";
                }
              }, {
                filterIcon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<svg class="fill-black dark:fill-gray-100" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path fill-rule="evenodd" clip-rule="evenodd" d="M15.4013 7.5H19C19.2761 7.5 19.5 7.27614 19.5 7C19.5 6.72386 19.2761 6.5 19 6.5H15.0415C15.1017 6.85896 15.2257 7.19631 15.4013 7.5ZM13.2289 7.5C13.1282 7.17938 13.0589 6.84484 13.0247 6.5H5C4.72386 6.5 4.5 6.72386 4.5 7C4.5 7.27614 4.72386 7.5 5 7.5H13.2289ZM5 11.5C4.72386 11.5 4.5 11.7239 4.5 12C4.5 12.2761 4.72386 12.5 5 12.5H19C19.2761 12.5 19.5 12.2761 19.5 12C19.5 11.7239 19.2761 11.5 19 11.5H5ZM5 16.5C4.72386 16.5 4.5 16.7239 4.5 17C4.5 17.2761 4.72386 17.5 5 17.5H19C19.2761 17.5 19.5 17.2761 19.5 17C19.5 16.7239 19.2761 16.5 19 16.5H5Z"${_scopeId2}></path><circle cx="18" cy="6" r="3"${_scopeId2}></circle></svg>`);
                  } else {
                    return [
                      (openBlock(), createBlock("svg", {
                        class: "fill-black dark:fill-gray-100",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          "fill-rule": "evenodd",
                          "clip-rule": "evenodd",
                          d: "M15.4013 7.5H19C19.2761 7.5 19.5 7.27614 19.5 7C19.5 6.72386 19.2761 6.5 19 6.5H15.0415C15.1017 6.85896 15.2257 7.19631 15.4013 7.5ZM13.2289 7.5C13.1282 7.17938 13.0589 6.84484 13.0247 6.5H5C4.72386 6.5 4.5 6.72386 4.5 7C4.5 7.27614 4.72386 7.5 5 7.5H13.2289ZM5 11.5C4.72386 11.5 4.5 11.7239 4.5 12C4.5 12.2761 4.72386 12.5 5 12.5H19C19.2761 12.5 19.5 12.2761 19.5 12C19.5 11.7239 19.2761 11.5 19 11.5H5ZM5 16.5C4.72386 16.5 4.5 16.7239 4.5 17C4.5 17.2761 4.72386 17.5 5 17.5H19C19.2761 17.5 19.5 17.2761 19.5 17C19.5 16.7239 19.2761 16.5 19 16.5H5Z"
                        }),
                        createVNode("circle", {
                          cx: "18",
                          cy: "6",
                          r: "3"
                        })
                      ]))
                    ];
                  }
                }),
                filterTitle: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("По статусу"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("По статусу")), 1)
                    ];
                  }
                }),
                filterChevron: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<svg class="${ssrRenderClass([{ "rotate-180": __props.showStatus === "status" }, "transition-all dark:stroke-white stroke-black"])}" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path d="M17 9.5L12 14.5L7 9.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}></path></svg>`);
                  } else {
                    return [
                      (openBlock(), createBlock("svg", {
                        class: ["transition-all dark:stroke-white stroke-black", { "rotate-180": __props.showStatus === "status" }],
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M17 9.5L12 14.5L7 9.5",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        })
                      ], 2))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(TaskFilter, {
                class: ["p-4", { "box": __props.showStatus === "chart" }],
                onShowEvent: ($event) => {
                  __props.showStatus = !__props.showStatus;
                  __props.showStatus = "chart";
                }
              }, {
                filterIcon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<svg width="25px" class="stroke-black dark:stroke-white" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path d="M7 18V9" stroke-width="1.5" stroke-linecap="round"${_scopeId2}></path><path d="M12 18V6" stroke-width="1.5" stroke-linecap="round"${_scopeId2}></path><path d="M17 18V13" stroke-width="1.5" stroke-linecap="round"${_scopeId2}></path><path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke-width="1.5" stroke-linecap="round"${_scopeId2}></path></svg>`);
                  } else {
                    return [
                      (openBlock(), createBlock("svg", {
                        width: "25px",
                        class: "stroke-black dark:stroke-white",
                        height: "25px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M7 18V9",
                          "stroke-width": "1.5",
                          "stroke-linecap": "round"
                        }),
                        createVNode("path", {
                          d: "M12 18V6",
                          "stroke-width": "1.5",
                          "stroke-linecap": "round"
                        }),
                        createVNode("path", {
                          d: "M17 18V13",
                          "stroke-width": "1.5",
                          "stroke-linecap": "round"
                        }),
                        createVNode("path", {
                          d: "M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8",
                          "stroke-width": "1.5",
                          "stroke-linecap": "round"
                        })
                      ]))
                    ];
                  }
                }),
                filterTitle: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("По графику"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("По графику")), 1)
                    ];
                  }
                }),
                filterChevron: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<svg class="${ssrRenderClass([{ "rotate-180": __props.showStatus === "chart" }, "transition-all dark:stroke-white stroke-black"])}" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path d="M17 9.5L12 14.5L7 9.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}></path></svg>`);
                  } else {
                    return [
                      (openBlock(), createBlock("svg", {
                        class: ["transition-all dark:stroke-white stroke-black", { "rotate-180": __props.showStatus === "chart" }],
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M17 9.5L12 14.5L7 9.5",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        })
                      ], 2))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(TaskFilter, {
                class: ["p-4", { "box": __props.showStatus === "date" }],
                onShowEvent: ($event) => {
                  __props.showStatus = !__props.showStatus;
                  __props.showStatus = "date";
                }
              }, {
                filterIcon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<svg class="dark:fill-white" width="25px" height="25px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path d="M5.67326018,0 C6.0598595,0 6.37326018,0.31324366 6.37326018,0.699649298 L6.373,2.009 L13.89,2.009 L13.8901337,0.708141199 C13.8901337,0.321735562 14.2035343,0.00849190182 14.5901337,0.00849190182 C14.976733,0.00849190182 15.2901337,0.321735562 15.2901337,0.708141199 L15.29,2.009 L18,2.00901806 C19.1045695,2.00901806 20,2.90399995 20,4.00801605 L20,18.001002 C20,19.1050181 19.1045695,20 18,20 L2,20 C0.8954305,20 0,19.1050181 0,18.001002 L0,4.00801605 C0,2.90399995 0.8954305,2.00901806 2,2.00901806 L4.973,2.009 L4.97326018,0.699649298 C4.97326018,0.31324366 5.28666085,0 5.67326018,0 Z M1.4,7.742 L1.4,18.001002 C1.4,18.3322068 1.66862915,18.6007014 2,18.6007014 L18,18.6007014 C18.3313708,18.6007014 18.6,18.3322068 18.6,18.001002 L18.6,7.756 L1.4,7.742 Z M6.66666667,14.6186466 L6.66666667,16.284778 L5,16.284778 L5,14.6186466 L6.66666667,14.6186466 Z M10.8333333,14.6186466 L10.8333333,16.284778 L9.16666667,16.284778 L9.16666667,14.6186466 L10.8333333,14.6186466 Z M15,14.6186466 L15,16.284778 L13.3333333,16.284778 L13.3333333,14.6186466 L15,14.6186466 Z M6.66666667,10.6417617 L6.66666667,12.3078931 L5,12.3078931 L5,10.6417617 L6.66666667,10.6417617 Z M10.8333333,10.6417617 L10.8333333,12.3078931 L9.16666667,12.3078931 L9.16666667,10.6417617 L10.8333333,10.6417617 Z M15,10.6417617 L15,12.3078931 L13.3333333,12.3078931 L13.3333333,10.6417617 L15,10.6417617 Z M4.973,3.408 L2,3.40831666 C1.66862915,3.40831666 1.4,3.67681122 1.4,4.00801605 L1.4,6.343 L18.6,6.357 L18.6,4.00801605 C18.6,3.67681122 18.3313708,3.40831666 18,3.40831666 L15.29,3.408 L15.2901337,4.33697436 C15.2901337,4.72338 14.976733,5.03662366 14.5901337,5.03662366 C14.2035343,5.03662366 13.8901337,4.72338 13.8901337,4.33697436 L13.89,3.408 L6.373,3.408 L6.37326018,4.32848246 C6.37326018,4.7148881 6.0598595,5.02813176 5.67326018,5.02813176 C5.28666085,5.02813176 4.97326018,4.7148881 4.97326018,4.32848246 L4.973,3.408 Z"${_scopeId2}></path></svg>`);
                  } else {
                    return [
                      (openBlock(), createBlock("svg", {
                        class: "dark:fill-white",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 20 20",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", { d: "M5.67326018,0 C6.0598595,0 6.37326018,0.31324366 6.37326018,0.699649298 L6.373,2.009 L13.89,2.009 L13.8901337,0.708141199 C13.8901337,0.321735562 14.2035343,0.00849190182 14.5901337,0.00849190182 C14.976733,0.00849190182 15.2901337,0.321735562 15.2901337,0.708141199 L15.29,2.009 L18,2.00901806 C19.1045695,2.00901806 20,2.90399995 20,4.00801605 L20,18.001002 C20,19.1050181 19.1045695,20 18,20 L2,20 C0.8954305,20 0,19.1050181 0,18.001002 L0,4.00801605 C0,2.90399995 0.8954305,2.00901806 2,2.00901806 L4.973,2.009 L4.97326018,0.699649298 C4.97326018,0.31324366 5.28666085,0 5.67326018,0 Z M1.4,7.742 L1.4,18.001002 C1.4,18.3322068 1.66862915,18.6007014 2,18.6007014 L18,18.6007014 C18.3313708,18.6007014 18.6,18.3322068 18.6,18.001002 L18.6,7.756 L1.4,7.742 Z M6.66666667,14.6186466 L6.66666667,16.284778 L5,16.284778 L5,14.6186466 L6.66666667,14.6186466 Z M10.8333333,14.6186466 L10.8333333,16.284778 L9.16666667,16.284778 L9.16666667,14.6186466 L10.8333333,14.6186466 Z M15,14.6186466 L15,16.284778 L13.3333333,16.284778 L13.3333333,14.6186466 L15,14.6186466 Z M6.66666667,10.6417617 L6.66666667,12.3078931 L5,12.3078931 L5,10.6417617 L6.66666667,10.6417617 Z M10.8333333,10.6417617 L10.8333333,12.3078931 L9.16666667,12.3078931 L9.16666667,10.6417617 L10.8333333,10.6417617 Z M15,10.6417617 L15,12.3078931 L13.3333333,12.3078931 L13.3333333,10.6417617 L15,10.6417617 Z M4.973,3.408 L2,3.40831666 C1.66862915,3.40831666 1.4,3.67681122 1.4,4.00801605 L1.4,6.343 L18.6,6.357 L18.6,4.00801605 C18.6,3.67681122 18.3313708,3.40831666 18,3.40831666 L15.29,3.408 L15.2901337,4.33697436 C15.2901337,4.72338 14.976733,5.03662366 14.5901337,5.03662366 C14.2035343,5.03662366 13.8901337,4.72338 13.8901337,4.33697436 L13.89,3.408 L6.373,3.408 L6.37326018,4.32848246 C6.37326018,4.7148881 6.0598595,5.02813176 5.67326018,5.02813176 C5.28666085,5.02813176 4.97326018,4.7148881 4.97326018,4.32848246 L4.973,3.408 Z" })
                      ]))
                    ];
                  }
                }),
                filterTitle: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("По дате"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("По дате")), 1)
                    ];
                  }
                }),
                filterChevron: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<svg class="${ssrRenderClass([{ "rotate-180": __props.showStatus === "date" }, "transition-all dark:stroke-white stroke-black"])}" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path d="M17 9.5L12 14.5L7 9.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}></path></svg>`);
                  } else {
                    return [
                      (openBlock(), createBlock("svg", {
                        class: ["transition-all dark:stroke-white stroke-black", { "rotate-180": __props.showStatus === "date" }],
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M17 9.5L12 14.5L7 9.5",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        })
                      ], 2))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div${_scopeId}>`);
              if (__props.showStatus === "status") {
                _push2(`<div${_scopeId}><div class="flex justify-between dark:text-white tracking-widest max-sm:flex-col flex-wrap max-sm:flex-nowrap"${_scopeId}>`);
                _push2(ssrRenderComponent(TaskFilterStatus, {
                  class: { "dark:bg-gray-500 bg-gray-100": __props.activeStatus === "performed" },
                  onActiveStatus: ($event) => {
                    __props.activeStatus = !__props.activeStatus;
                    __props.activeStatus = "performed";
                  }
                }, {
                  statusColor: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="bg-orange-500 w-[25px] h-[25px] rounded-full"${_scopeId2}></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "bg-orange-500 w-[25px] h-[25px] rounded-full" })
                      ];
                    }
                  }),
                  statusName: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("Выполняется"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("Выполняется")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(TaskFilterStatus, {
                  class: { "dark:bg-gray-500 bg-gray-100": __props.activeStatus === "completed" },
                  onActiveStatus: ($event) => {
                    __props.activeStatus = !__props.activeStatus;
                    __props.activeStatus = "completed";
                  }
                }, {
                  statusColor: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="bg-green-500 w-[25px] h-[25px] rounded-full"${_scopeId2}></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "bg-green-500 w-[25px] h-[25px] rounded-full" })
                      ];
                    }
                  }),
                  statusName: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("Выполнено"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("Выполнено")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(TaskFilterStatus, {
                  class: { "dark:bg-gray-500 bg-gray-100": __props.activeStatus === "rejected" },
                  onActiveStatus: ($event) => {
                    __props.activeStatus = !__props.activeStatus;
                    __props.activeStatus = "rejected";
                  }
                }, {
                  statusColor: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="bg-red-500 w-[25px] h-[25px] rounded-full"${_scopeId2}></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "bg-red-500 w-[25px] h-[25px] rounded-full" })
                      ];
                    }
                  }),
                  statusName: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("Отклонено"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("Отклонено")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(TaskFilterStatus, {
                  class: { "dark:bg-gray-500 bg-gray-100": __props.activeStatus === "expectation" },
                  onActiveStatus: ($event) => {
                    __props.activeStatus = !__props.activeStatus;
                    __props.activeStatus = "expectation";
                  }
                }, {
                  statusColor: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="bg-blue-500 w-[25px] h-[25px] rounded-full"${_scopeId2}></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "bg-blue-500 w-[25px] h-[25px] rounded-full" })
                      ];
                    }
                  }),
                  statusName: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("На расмотрении"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("На расмотрении")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.showStatus === "name") {
                _push2(`<div${_scopeId}> Lorem ipsum dolor sit amet, c </div>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.showStatus === "date") {
                _push2(`<div class="flex items-center justify-center mx-auto w-full"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(VueDatePicker), {
                  class: "mx-auto max-md:flex-col flex justify-center",
                  modelValue: unref(date),
                  "onUpdate:modelValue": ($event) => isRef(date) ? date.value = $event : null,
                  range: "",
                  inline: "",
                  "preset-ranges": unref(presetRanges)
                }, {
                  yearly: withCtx(({ label, range, presetDateRange }, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span${_scopeId2}></span>`);
                    } else {
                      return [
                        createVNode("span", {
                          onClick: ($event) => presetDateRange(range)
                        }, null, 8, ["onClick"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="flex justify-evenly my-10"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$c, {
                type: "danger",
                class: "w-3/12 max-sm:w-5/12 py-2 rounded-lg",
                onClick: ($event) => __props.showFilter = false
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Отмена `);
                  } else {
                    return [
                      createTextVNode(" Отмена ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$c, {
                type: "button",
                class: "w-3/12 max-sm:w-5/12 py-2 rounded-lg bg-semiCyan"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Поиск`);
                  } else {
                    return [
                      createTextVNode("Поиск")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", null, [
                  createVNode("div", { class: "relative" }, [
                    createVNode("h2", { class: "text-center font-bold text-2xl max-md:text-xl dark:text-white tracking-widest" }, toDisplayString(_ctx.$t("Фильтрация по поиску")), 1),
                    createVNode("div", {
                      class: "absolute top-0 right-0 max-md:-right-3 max-md:-top-2",
                      onClick: ($event) => __props.showFilter = false
                    }, [
                      (openBlock(), createBlock("svg", {
                        class: "dark:stroke-white stroke-black",
                        width: "35px",
                        height: "35px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("circle", {
                          cx: "12",
                          cy: "12",
                          r: "10",
                          "stroke-width": "1.5"
                        }),
                        createVNode("path", {
                          d: "M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5",
                          "stroke-width": "1.5",
                          "stroke-linecap": "round"
                        })
                      ]))
                    ], 8, ["onClick"])
                  ]),
                  createVNode("div", { class: "flex justify-between mx-auto my-10 max-lg:flex-col items-center gap-y-10" }, [
                    createVNode(TaskFilter, {
                      class: ["p-4", { "box": __props.showStatus === "status" }],
                      onShowEvent: ($event) => {
                        __props.showStatus = !__props.showStatus;
                        __props.showStatus = "status";
                      }
                    }, {
                      filterIcon: withCtx(() => [
                        (openBlock(), createBlock("svg", {
                          class: "fill-black dark:fill-gray-100",
                          width: "25px",
                          height: "25px",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M15.4013 7.5H19C19.2761 7.5 19.5 7.27614 19.5 7C19.5 6.72386 19.2761 6.5 19 6.5H15.0415C15.1017 6.85896 15.2257 7.19631 15.4013 7.5ZM13.2289 7.5C13.1282 7.17938 13.0589 6.84484 13.0247 6.5H5C4.72386 6.5 4.5 6.72386 4.5 7C4.5 7.27614 4.72386 7.5 5 7.5H13.2289ZM5 11.5C4.72386 11.5 4.5 11.7239 4.5 12C4.5 12.2761 4.72386 12.5 5 12.5H19C19.2761 12.5 19.5 12.2761 19.5 12C19.5 11.7239 19.2761 11.5 19 11.5H5ZM5 16.5C4.72386 16.5 4.5 16.7239 4.5 17C4.5 17.2761 4.72386 17.5 5 17.5H19C19.2761 17.5 19.5 17.2761 19.5 17C19.5 16.7239 19.2761 16.5 19 16.5H5Z"
                          }),
                          createVNode("circle", {
                            cx: "18",
                            cy: "6",
                            r: "3"
                          })
                        ]))
                      ]),
                      filterTitle: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("По статусу")), 1)
                      ]),
                      filterChevron: withCtx(() => [
                        (openBlock(), createBlock("svg", {
                          class: ["transition-all dark:stroke-white stroke-black", { "rotate-180": __props.showStatus === "status" }],
                          width: "25px",
                          height: "25px",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            d: "M17 9.5L12 14.5L7 9.5",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          })
                        ], 2))
                      ]),
                      _: 1
                    }, 8, ["class", "onShowEvent"]),
                    createVNode(TaskFilter, {
                      class: ["p-4", { "box": __props.showStatus === "chart" }],
                      onShowEvent: ($event) => {
                        __props.showStatus = !__props.showStatus;
                        __props.showStatus = "chart";
                      }
                    }, {
                      filterIcon: withCtx(() => [
                        (openBlock(), createBlock("svg", {
                          width: "25px",
                          class: "stroke-black dark:stroke-white",
                          height: "25px",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            d: "M7 18V9",
                            "stroke-width": "1.5",
                            "stroke-linecap": "round"
                          }),
                          createVNode("path", {
                            d: "M12 18V6",
                            "stroke-width": "1.5",
                            "stroke-linecap": "round"
                          }),
                          createVNode("path", {
                            d: "M17 18V13",
                            "stroke-width": "1.5",
                            "stroke-linecap": "round"
                          }),
                          createVNode("path", {
                            d: "M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8",
                            "stroke-width": "1.5",
                            "stroke-linecap": "round"
                          })
                        ]))
                      ]),
                      filterTitle: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("По графику")), 1)
                      ]),
                      filterChevron: withCtx(() => [
                        (openBlock(), createBlock("svg", {
                          class: ["transition-all dark:stroke-white stroke-black", { "rotate-180": __props.showStatus === "chart" }],
                          width: "25px",
                          height: "25px",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            d: "M17 9.5L12 14.5L7 9.5",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          })
                        ], 2))
                      ]),
                      _: 1
                    }, 8, ["class", "onShowEvent"]),
                    createVNode(TaskFilter, {
                      class: ["p-4", { "box": __props.showStatus === "date" }],
                      onShowEvent: ($event) => {
                        __props.showStatus = !__props.showStatus;
                        __props.showStatus = "date";
                      }
                    }, {
                      filterIcon: withCtx(() => [
                        (openBlock(), createBlock("svg", {
                          class: "dark:fill-white",
                          width: "25px",
                          height: "25px",
                          viewBox: "0 0 20 20",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", { d: "M5.67326018,0 C6.0598595,0 6.37326018,0.31324366 6.37326018,0.699649298 L6.373,2.009 L13.89,2.009 L13.8901337,0.708141199 C13.8901337,0.321735562 14.2035343,0.00849190182 14.5901337,0.00849190182 C14.976733,0.00849190182 15.2901337,0.321735562 15.2901337,0.708141199 L15.29,2.009 L18,2.00901806 C19.1045695,2.00901806 20,2.90399995 20,4.00801605 L20,18.001002 C20,19.1050181 19.1045695,20 18,20 L2,20 C0.8954305,20 0,19.1050181 0,18.001002 L0,4.00801605 C0,2.90399995 0.8954305,2.00901806 2,2.00901806 L4.973,2.009 L4.97326018,0.699649298 C4.97326018,0.31324366 5.28666085,0 5.67326018,0 Z M1.4,7.742 L1.4,18.001002 C1.4,18.3322068 1.66862915,18.6007014 2,18.6007014 L18,18.6007014 C18.3313708,18.6007014 18.6,18.3322068 18.6,18.001002 L18.6,7.756 L1.4,7.742 Z M6.66666667,14.6186466 L6.66666667,16.284778 L5,16.284778 L5,14.6186466 L6.66666667,14.6186466 Z M10.8333333,14.6186466 L10.8333333,16.284778 L9.16666667,16.284778 L9.16666667,14.6186466 L10.8333333,14.6186466 Z M15,14.6186466 L15,16.284778 L13.3333333,16.284778 L13.3333333,14.6186466 L15,14.6186466 Z M6.66666667,10.6417617 L6.66666667,12.3078931 L5,12.3078931 L5,10.6417617 L6.66666667,10.6417617 Z M10.8333333,10.6417617 L10.8333333,12.3078931 L9.16666667,12.3078931 L9.16666667,10.6417617 L10.8333333,10.6417617 Z M15,10.6417617 L15,12.3078931 L13.3333333,12.3078931 L13.3333333,10.6417617 L15,10.6417617 Z M4.973,3.408 L2,3.40831666 C1.66862915,3.40831666 1.4,3.67681122 1.4,4.00801605 L1.4,6.343 L18.6,6.357 L18.6,4.00801605 C18.6,3.67681122 18.3313708,3.40831666 18,3.40831666 L15.29,3.408 L15.2901337,4.33697436 C15.2901337,4.72338 14.976733,5.03662366 14.5901337,5.03662366 C14.2035343,5.03662366 13.8901337,4.72338 13.8901337,4.33697436 L13.89,3.408 L6.373,3.408 L6.37326018,4.32848246 C6.37326018,4.7148881 6.0598595,5.02813176 5.67326018,5.02813176 C5.28666085,5.02813176 4.97326018,4.7148881 4.97326018,4.32848246 L4.973,3.408 Z" })
                        ]))
                      ]),
                      filterTitle: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("По дате")), 1)
                      ]),
                      filterChevron: withCtx(() => [
                        (openBlock(), createBlock("svg", {
                          class: ["transition-all dark:stroke-white stroke-black", { "rotate-180": __props.showStatus === "date" }],
                          width: "25px",
                          height: "25px",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            d: "M17 9.5L12 14.5L7 9.5",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          })
                        ], 2))
                      ]),
                      _: 1
                    }, 8, ["class", "onShowEvent"])
                  ]),
                  createVNode("div", null, [
                    __props.showStatus === "status" ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode("div", { class: "flex justify-between dark:text-white tracking-widest max-sm:flex-col flex-wrap max-sm:flex-nowrap" }, [
                        createVNode(TaskFilterStatus, {
                          class: { "dark:bg-gray-500 bg-gray-100": __props.activeStatus === "performed" },
                          onActiveStatus: ($event) => {
                            __props.activeStatus = !__props.activeStatus;
                            __props.activeStatus = "performed";
                          }
                        }, {
                          statusColor: withCtx(() => [
                            createVNode("div", { class: "bg-orange-500 w-[25px] h-[25px] rounded-full" })
                          ]),
                          statusName: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("Выполняется")), 1)
                          ]),
                          _: 1
                        }, 8, ["class", "onActiveStatus"]),
                        createVNode(TaskFilterStatus, {
                          class: { "dark:bg-gray-500 bg-gray-100": __props.activeStatus === "completed" },
                          onActiveStatus: ($event) => {
                            __props.activeStatus = !__props.activeStatus;
                            __props.activeStatus = "completed";
                          }
                        }, {
                          statusColor: withCtx(() => [
                            createVNode("div", { class: "bg-green-500 w-[25px] h-[25px] rounded-full" })
                          ]),
                          statusName: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("Выполнено")), 1)
                          ]),
                          _: 1
                        }, 8, ["class", "onActiveStatus"]),
                        createVNode(TaskFilterStatus, {
                          class: { "dark:bg-gray-500 bg-gray-100": __props.activeStatus === "rejected" },
                          onActiveStatus: ($event) => {
                            __props.activeStatus = !__props.activeStatus;
                            __props.activeStatus = "rejected";
                          }
                        }, {
                          statusColor: withCtx(() => [
                            createVNode("div", { class: "bg-red-500 w-[25px] h-[25px] rounded-full" })
                          ]),
                          statusName: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("Отклонено")), 1)
                          ]),
                          _: 1
                        }, 8, ["class", "onActiveStatus"]),
                        createVNode(TaskFilterStatus, {
                          class: { "dark:bg-gray-500 bg-gray-100": __props.activeStatus === "expectation" },
                          onActiveStatus: ($event) => {
                            __props.activeStatus = !__props.activeStatus;
                            __props.activeStatus = "expectation";
                          }
                        }, {
                          statusColor: withCtx(() => [
                            createVNode("div", { class: "bg-blue-500 w-[25px] h-[25px] rounded-full" })
                          ]),
                          statusName: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("На расмотрении")), 1)
                          ]),
                          _: 1
                        }, 8, ["class", "onActiveStatus"])
                      ])
                    ])) : createCommentVNode("", true),
                    __props.showStatus === "name" ? (openBlock(), createBlock("div", { key: 1 }, " Lorem ipsum dolor sit amet, c ")) : createCommentVNode("", true),
                    __props.showStatus === "date" ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "flex items-center justify-center mx-auto w-full"
                    }, [
                      createVNode(unref(VueDatePicker), {
                        class: "mx-auto max-md:flex-col flex justify-center",
                        modelValue: unref(date),
                        "onUpdate:modelValue": ($event) => isRef(date) ? date.value = $event : null,
                        range: "",
                        inline: "",
                        "preset-ranges": unref(presetRanges)
                      }, {
                        yearly: withCtx(({ label, range, presetDateRange }) => [
                          createVNode("span", {
                            onClick: ($event) => presetDateRange(range)
                          }, null, 8, ["onClick"])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue", "preset-ranges"])
                    ])) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "flex justify-evenly my-10" }, [
                    createVNode(_sfc_main$c, {
                      type: "danger",
                      class: "w-3/12 max-sm:w-5/12 py-2 rounded-lg",
                      onClick: ($event) => __props.showFilter = false
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Отмена ")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_sfc_main$c, {
                      type: "button",
                      class: "w-3/12 max-sm:w-5/12 py-2 rounded-lg bg-semiCyan"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Поиск")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tasks/TaskUI/TasksContentSearch.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><table><tr><th class="opacity-80 tracking-widest cursor-pointer">`);
  ssrRenderSlot(_ctx.$slots, "tableHead", {}, null, _push, _parent);
  _push(`</th></tr><tr><td class="text-sm tracking-widest">`);
  ssrRenderSlot(_ctx.$slots, "tableBody", {}, null, _push, _parent);
  _push(`</td></tr></table></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tasks/TaskUI/TasksTable.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const TaskTable = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "TasksContentBlock",
  __ssrInlineRender: true,
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const loadCurrentUser = useAuthStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-6" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/base/tasks/${__props.task.id}`,
        class: "shadow-xl dark:bg-gray-400 hover:bg-gray-100 dark:hover:bg-gray-300 dark:shadow-none dark:border-none cursor-pointer hover:translate-x-4 transition-all px-6 py-2 rounded-lg w-11/12 max-lg:w-full max-[425px]:flex-wrap flex flex-col justify-between"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex relative justify-between max-[425px]:gap-y-6"${_scopeId}><div class="flex w-full max-sm:flex-col max-sm:gap-y-6 max-sm:items-center max-sm:text-center justify-around"${_scopeId}>`);
            _push2(ssrRenderComponent(TaskTable, null, {
              tableHead: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("Наименование"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("Наименование")), 1)
                  ];
                }
              }),
              tableBody: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.task.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.task.title), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(TaskTable, null, {
              tableHead: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("Дата"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("Дата")), 1)
                  ];
                }
              }),
              tableBody: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(new Date(__props.task.created_at).toLocaleDateString())}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(new Date(__props.task.created_at).toLocaleDateString()), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(TaskTable, { class: "text-center" }, {
              tableHead: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("Срок выполнения"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("Срок выполнения")), 1)
                  ];
                }
              }),
              tableBody: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(new Date(__props.task.deadline).toLocaleDateString())}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(new Date(__props.task.deadline).toLocaleDateString()), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(loadCurrentUser).user.role_en === "company_admin") {
              _push2(ssrRenderComponent(TaskTable, { class: "text-center" }, {
                tableHead: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("Ответственный"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("Ответственный")), 1)
                    ];
                  }
                }),
                tableBody: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(__props.task.main_performer.first_name + " " + __props.task.main_performer.last_name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(__props.task.main_performer.first_name + " " + __props.task.main_performer.last_name), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="${ssrRenderClass([{ "bg-orange-500": __props.task.status === "performing", "bg-red-500": __props.task.status === "rejected", "bg-green-500": __props.task.status === "completed", "bg-blue-500": __props.task.status === "watching" }, "absolute z-0 -right-6 -top-2 w-[30px] h-[30px] opacity-80 rounded-bl-2xl rounded-tr-lg"])}"${_scopeId}></div></div><div class="my-10 font-bold tracking-widest"${_scopeId}><p${_scopeId}>${ssrInterpolate(__props.task.description)}</p></div>`);
          } else {
            return [
              createVNode("div", { class: "flex relative justify-between max-[425px]:gap-y-6" }, [
                createVNode("div", { class: "flex w-full max-sm:flex-col max-sm:gap-y-6 max-sm:items-center max-sm:text-center justify-around" }, [
                  createVNode(TaskTable, null, {
                    tableHead: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Наименование")), 1)
                    ]),
                    tableBody: withCtx(() => [
                      createTextVNode(toDisplayString(__props.task.title), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(TaskTable, null, {
                    tableHead: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Дата")), 1)
                    ]),
                    tableBody: withCtx(() => [
                      createTextVNode(toDisplayString(new Date(__props.task.created_at).toLocaleDateString()), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(TaskTable, { class: "text-center" }, {
                    tableHead: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Срок выполнения")), 1)
                    ]),
                    tableBody: withCtx(() => [
                      createTextVNode(toDisplayString(new Date(__props.task.deadline).toLocaleDateString()), 1)
                    ]),
                    _: 1
                  }),
                  unref(loadCurrentUser).user.role_en === "company_admin" ? (openBlock(), createBlock(TaskTable, {
                    key: 0,
                    class: "text-center"
                  }, {
                    tableHead: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Ответственный")), 1)
                    ]),
                    tableBody: withCtx(() => [
                      createTextVNode(toDisplayString(__props.task.main_performer.first_name + " " + __props.task.main_performer.last_name), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                createVNode("div", {
                  class: ["absolute z-0 -right-6 -top-2 w-[30px] h-[30px] opacity-80 rounded-bl-2xl rounded-tr-lg", { "bg-orange-500": __props.task.status === "performing", "bg-red-500": __props.task.status === "rejected", "bg-green-500": __props.task.status === "completed", "bg-blue-500": __props.task.status === "watching" }]
                }, null, 2)
              ]),
              createVNode("div", { class: "my-10 font-bold tracking-widest" }, [
                createVNode("p", null, toDisplayString(__props.task.description), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tasks/TaskUI/TasksContentBlock.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  props: {
    item: {
      type: Object,
      default: () => {
      }
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a, _b;
  _push(`<label${ssrRenderAttrs(mergeProps({ class: "container mt-4" }, _attrs))} data-v-6eafa395><span class="text-black dark:text-white" data-v-6eafa395>${ssrInterpolate(((_a = $props.item) == null ? void 0 : _a.first_name) + " " + ((_b = $props.item) == null ? void 0 : _b.last_name))}</span><input type="checkbox"${ssrIncludeBooleanAttr($props.item.value) ? " checked" : ""} data-v-6eafa395><span class="checkmark" data-v-6eafa395></span></label>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/User/UserUI/TheCheckboxCreateUser.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const TheCheckboxCreateUser = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-6eafa395"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TasksContent",
  __ssrInlineRender: true,
  props: {
    showTask: {
      type: Boolean,
      default: false
    },
    changeInfo: {
      type: Boolean,
      default: false
    },
    showConfirm: {
      type: Boolean,
      default: false
    },
    showCreate: {
      type: Boolean,
      default: false
    },
    task_info: {
      type: Object,
      required: true,
      default: () => {
      }
    },
    taskChecked: {
      type: String,
      default: "task-list"
    }
  },
  setup(__props) {
    useRouter();
    const loadCurrentUser = useAuthStore();
    const tasksList = useTaskList();
    const companies = useCompanies();
    const timezone = ref("UTC");
    const createForm = ref({
      title: "",
      description: "",
      deadline: "",
      author_file_file: "",
      performers: [],
      department: {},
      worth: 0,
      main_performer_id: {},
      performer_file: ""
    });
    const params = {
      page: 1,
      limit: 5,
      query: "",
      task_type: "task-list"
    };
    function validationForm() {
      if ((createForm == null ? void 0 : createForm.value.deadline) === "") {
        toast.error("Укажите срок", { theme: "auto", autoClose: 1500 });
      }
    }
    watchEffect(() => {
      tasksList.loadTasksLists({ page: params.page, limit: params.limit, task_type: params.task_type, query: params.query });
      tasksList.loadTasksStats({ task_filter: params.task_type });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e;
      const _component_TheCheckbox = resolveComponent("TheCheckbox");
      _push(`<!--[--><div class="my-6"><form><h3 class="dark:text-white mb-6 tracking-wider">${ssrInterpolate(_ctx.$t("Поиск по заданиям"))}</h3><div class="flex max-lg:flex-wrap max-md:justify-center max-md:gap-y-10">`);
      _push(ssrRenderComponent(_sfc_main$e, {
        class: "w-8/12 max-lg:w-6/12 max-md:w-full",
        "model-value": params.query,
        "onUpdate:modelValue": ($event) => params.query = $event,
        onSearch: ($event) => unref(tasksList).loadTasksLists({ ...params, task_type: __props.taskChecked, query: params.query })
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$7, null, null, _parent));
      _push(`</div></form>`);
      if (unref(tasksList).get_tasks.results) {
        _push(`<div id="content" class="mx-auto">`);
        if ((_a = unref(loadCurrentUser).user.permissions) == null ? void 0 : _a.find((value) => value.name_en === "task.create")) {
          _push(`<div class="flex gap-x-10 my-10 ml-10 flex-wrap max-md:mx-auto max-md:justify-center gap-y-5"><button class="${ssrRenderClass([{ "bg-blueDarkSemiLight text-white": __props.taskChecked === "task-list" }, "p-2 rounded-xl text-black dark:text-white tracking-widest font-bold"])}">${ssrInterpolate(_ctx.$t("Общее"))}</button><button class="${ssrRenderClass([{ "bg-blueDarkSemiLight text-white": __props.taskChecked === "to-me" }, "p-2 rounded-xl text-black dark:text-white tracking-widest font-bold"])}">${ssrInterpolate(_ctx.$t("Для Меня"))}</button><button class="${ssrRenderClass([{ "bg-blueDarkSemiLight text-white": __props.taskChecked === "from-me" }, "p-2 rounded-xl text-black dark:text-white tracking-widest font-bold"])}">${ssrInterpolate(_ctx.$t("От Меня"))}</button><button class="bg-blue-400 px-4 rounded-full text-white font-bold tracking-widest max-md:py-2 active:scale-95 transition-all duration-200">${ssrInterpolate(_ctx.$t("Создать задание"))}</button></div>`);
        } else {
          _push(`<!---->`);
        }
        if (params.query === "") {
          _push(`<!--[-->`);
          ssrRenderList((_b = unref(tasksList)) == null ? void 0 : _b.get_tasks.results, (task) => {
            _push(ssrRenderComponent(_sfc_main$5, { task }, null, _parent));
          });
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        if (params.query !== "") {
          _push(`<!--[-->`);
          ssrRenderList((_c = unref(tasksList)) == null ? void 0 : _c.get_search_task.results, (taskSearch) => {
            _push(ssrRenderComponent(_sfc_main$5, { task: taskSearch }, null, _parent));
          });
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<div class="">`);
        if ((_d = unref(loadCurrentUser).user.permissions) == null ? void 0 : _d.find((value) => value.name_en === "task.create")) {
          _push(`<div class="flex mt-10 items-center gap-x-10"><div class="flex gap-x-4"><!--[-->`);
          ssrRenderList(3, (i) => {
            _push(ssrRenderComponent(Sceleton, {
              "border-radius": "5px",
              width: "100px",
              height: "20px"
            }, null, _parent));
          });
          _push(`<!--]--></div>`);
          _push(ssrRenderComponent(Sceleton, {
            "border-radius": "10px",
            width: "150px",
            height: "30px"
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex mt-10 flex-col gap-y-6"><!--[-->`);
        ssrRenderList(5, (i) => {
          _push(ssrRenderComponent(Sceleton, {
            class: "opacity-50",
            "border-radius": "5px",
            width: "92%",
            height: "120px"
          }, null, _parent));
        });
        _push(`<!--]--></div></div>`);
      }
      if (((_e = unref(tasksList)) == null ? void 0 : _e.get_tasks.count) === 0) {
        _push(`<div class="text-center mt-10 flex flex-col items-center gap-y-6 gap-x-10"><p class="text-2xl dark:text-white font-bold tracking-widest">${ssrInterpolate(_ctx.$t("Ничего не найдено"))}</p><div><svg width="100px" height="100px" viewBox="0 -3.66 65.015 65.015" xmlns="http://www.w3.org/2000/svg"><g id="Group_99" data-name="Group 99" transform="translate(-107.858 -217.309)"><g id="Group_97" data-name="Group 97"><path id="Path_247" data-name="Path 247" d="M158.251,220.766H133.473l-5.725-3.457H114.226a2.911,2.911,0,0,0-2.912,2.912v30.934a2.911,2.911,0,0,0,2.912,2.912h44.025a2.911,2.911,0,0,0,2.911-2.912V223.676A2.911,2.911,0,0,0,158.251,220.766Z" fill="#48CAE4"></path><path id="Path_248" data-name="Path 248" d="M161.162,242.6V227.133a2.914,2.914,0,0,0-2.911-2.914H114.226a2.914,2.914,0,0,0-2.912,2.914V242.6Z" fill="#dce2e9"></path><path id="Path_249" data-name="Path 249" d="M158.251,220.766H133.473l-5.725-3.457H114.226a2.911,2.911,0,0,0-2.912,2.912V221.6a2.911,2.911,0,0,1,2.912-2.912h13.522l5.725,3.455h24.778a2.913,2.913,0,0,1,2.911,2.912v-1.383A2.911,2.911,0,0,0,158.251,220.766Z" fill="#ffc52f" opacity="0.5" style="${ssrRenderStyle({ "mix-blend-mode": "screen", "isolation": "isolate" })}"></path><path id="Path_250" data-name="Path 250" d="M161.707,226.293H110.771a2.913,2.913,0,0,0-2.913,2.913l3.456,30.933a2.911,2.911,0,0,0,2.912,2.912h44.025a2.911,2.911,0,0,0,2.911-2.912l3.455-30.933A2.912,2.912,0,0,0,161.707,226.293Z" fill="#48CAE4"></path><path id="Path_251" data-name="Path 251" d="M110.771,227.676h50.936a2.911,2.911,0,0,1,2.83,2.254l.08-.724a2.912,2.912,0,0,0-2.91-2.913H110.771a2.913,2.913,0,0,0-2.913,2.913l.081.724A2.911,2.911,0,0,1,110.771,227.676Z" fill="#ffc52f" opacity="0.5" style="${ssrRenderStyle({ "mix-blend-mode": "screen", "isolation": "isolate" })}"></path></g><path id="Path_252" data-name="Path 252" d="M161.162,260.139l.592-5.3a14.7,14.7,0,1,0-27.687,8.211h24.184A2.911,2.911,0,0,0,161.162,260.139Z" fill="#8c93a1" opacity="0.6" style="${ssrRenderStyle({ "mix-blend-mode": "multiply", "isolation": "isolate" })}"></path><g class="transition-all duration-200 eye-block" id="Group_98" data-name="Group 98"><rect id="Rectangle_36" data-name="Rectangle 36" width="4.156" height="12.401" transform="translate(157.7 262.706) rotate(-45)" fill="#dce2e9"></rect><path id="Path_253" data-name="Path 253" d="M165.421,252.721a14.7,14.7,0,1,1-14.7-14.7A14.7,14.7,0,0,1,165.421,252.721Z" fill="#dce2e9"></path><path id="Path_254" data-name="Path 254" d="M161.682,252.721a10.964,10.964,0,1,1-10.964-10.965A10.965,10.965,0,0,1,161.682,252.721Z" fill="#8c93a1"></path><path id="Path_255" data-name="Path 255" d="M150.718,262.616a9.895,9.895,0,1,1,9.894-9.9A9.9,9.9,0,0,1,150.718,262.616Z" fill="#5a6271" opacity="0.6"></path><path class="eye" id="Path_256" data-name="Path 256" d="M141.833,253.735a9.895,9.895,0,0,1,16.368-7.484A9.892,9.892,0,1,0,144.247,260.2,9.843,9.843,0,0,1,141.833,253.735Z" fill="#5a6271" opacity="0.6"></path><path class="eye" id="Path_257" data-name="Path 257" d="M150.718,257.606a4.885,4.885,0,1,1,4.885-4.885A4.888,4.888,0,0,1,150.718,257.606Z" fill="#5a6271"></path><path class="eye" id="Path_259" data-name="Path 259" d="M157.45,251.192c-.937.937-2.879.517-4.336-.94s-1.879-3.4-.942-4.335,2.879-.516,4.337.941S158.385,250.256,157.45,251.192Z" fill="#f3f3f3" opacity="0.5"></path><path id="Path_260" data-name="Path 260" d="M160.6,267.028l7.219,7.22a3.055,3.055,0,0,0,4.3-4.3l-7.219-7.219Z" fill="#5a6271"></path></g></g></svg></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex justify-center gap-x-4">`);
      if (unref(tasksList).get_tasks.count > 5) {
        _push(`<!--[-->`);
        ssrRenderList(unref(tasksList).get_tasks.links, (page, id) => {
          _push(`<div class="${ssrRenderClass([{ "bg-blue-400 text-white": page.active, "bg-gray-200 text-black hover:bg-blue-400 hover:text-white transition-all": !page.active }, "px-4 py-2 rounded-full cursor-pointer"])}">${ssrInterpolate(page.label)}</div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (__props.showCreate) {
        _push(ssrRenderComponent(_sfc_main$d, {
          onShowModal: ($event) => {
            __props.showCreate = !__props.showCreate;
            !__props.showCreate ? unref(createForm).description = "" : unref(createForm);
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$f, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("Создание задания"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("Создание задания")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<form${_scopeId}>`);
              _push2(ssrRenderComponent(TaskContentCreateElems, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (unref(loadCurrentUser).user.role_en === "department_director" || unref(loadCurrentUser).user.role_en === "vice_department_director") {
                      _push3(`<div class="w-full max-lg:w-full"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_sfc_main$g, {
                        type: "text",
                        label: _ctx.$t("Заголовок"),
                        modelValue: unref(createForm).title,
                        "onUpdate:modelValue": ($event) => unref(createForm).title = $event
                      }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      _push3(`<div class="w-6/12 max-lg:w-full"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_sfc_main$g, {
                        type: "text",
                        label: _ctx.$t("Заголовок"),
                        modelValue: unref(createForm).title,
                        "onUpdate:modelValue": ($event) => unref(createForm).title = $event
                      }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    }
                    if (unref(loadCurrentUser).user.role_en !== "department_director" || unref(loadCurrentUser).user.role_en !== "department_director") {
                      _push3(`<div class="w-6/12 max-lg:w-full flex flex-col gap-y-2"${_scopeId2}><p class="text-md dark:text-white tracking-wider"${_scopeId2}>${ssrInterpolate(_ctx.$t("Отдел"))}</p><select type="text" class="w-full text-black rounded-lg p-2.5 border dark:bg-gray-300 dark:border-none outline-semiCyan outline-1"${_scopeId2}><!--[-->`);
                      ssrRenderList(unref(companies).get_all_department.results, (department) => {
                        _push3(`<option${ssrRenderAttr("value", department)}${_scopeId2}>${ssrInterpolate(department.name)}</option>`);
                      });
                      _push3(`<!--]--></select></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      unref(loadCurrentUser).user.role_en === "department_director" || unref(loadCurrentUser).user.role_en === "vice_department_director" ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "w-full max-lg:w-full"
                      }, [
                        createVNode(_sfc_main$g, {
                          type: "text",
                          label: _ctx.$t("Заголовок"),
                          modelValue: unref(createForm).title,
                          "onUpdate:modelValue": ($event) => unref(createForm).title = $event
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
                      ])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "w-6/12 max-lg:w-full"
                      }, [
                        createVNode(_sfc_main$g, {
                          type: "text",
                          label: _ctx.$t("Заголовок"),
                          modelValue: unref(createForm).title,
                          "onUpdate:modelValue": ($event) => unref(createForm).title = $event
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
                      ])),
                      unref(loadCurrentUser).user.role_en !== "department_director" || unref(loadCurrentUser).user.role_en !== "department_director" ? (openBlock(), createBlock("div", {
                        key: 2,
                        class: "w-6/12 max-lg:w-full flex flex-col gap-y-2"
                      }, [
                        createVNode("p", { class: "text-md dark:text-white tracking-wider" }, toDisplayString(_ctx.$t("Отдел")), 1),
                        withDirectives(createVNode("select", {
                          type: "text",
                          "onUpdate:modelValue": ($event) => unref(createForm).department = $event,
                          class: "w-full text-black rounded-lg p-2.5 border dark:bg-gray-300 dark:border-none outline-semiCyan outline-1"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(companies).get_all_department.results, (department) => {
                            return openBlock(), createBlock("option", { value: department }, toDisplayString(department.name), 9, ["value"]);
                          }), 256))
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, unref(createForm).department]
                        ])
                      ])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(TaskContentCreateElems, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a2, _b2, _c2, _d2, _e2, _f;
                  if (_push3) {
                    if (unref(loadCurrentUser).user.role_en === "department_director" || unref(loadCurrentUser).user.role_en === "vice_department_director") {
                      _push3(`<div class="w-6/12 max-lg:w-full flex flex-col gap-y-2"${_scopeId2}><p class="text-md dark:text-white tracking-wider"${_scopeId2}>${ssrInterpolate(_ctx.$t("Ответственный"))}</p><select type="text" class="w-full text-black rounded-lg p-2.5 border dark:bg-gray-300 dark:border-none outline-semiCyan outline-1"${_scopeId2}><!--[-->`);
                      ssrRenderList(unref(companies).get_department.participants, (performer) => {
                        _push3(`<option class=""${ssrRenderAttr("value", performer.id)}${_scopeId2}>${ssrInterpolate(performer.first_name + " " + performer.last_name)}</option>`);
                      });
                      _push3(`<!--]--></select></div>`);
                    } else {
                      _push3(`<div class="w-6/12 max-lg:w-full flex flex-col gap-y-2"${_scopeId2}><p class="text-md dark:text-white tracking-wider"${_scopeId2}>${ssrInterpolate(_ctx.$t("Ответственный"))}</p><select type="text" class="w-full text-black rounded-lg p-2.5 border dark:bg-gray-300 dark:border-none outline-semiCyan outline-1"${_scopeId2}><!--[-->`);
                      ssrRenderList((_a2 = unref(createForm).department) == null ? void 0 : _a2.participants, (main_performer) => {
                        _push3(`<option${ssrRenderAttr("value", main_performer.id)}${_scopeId2}>${ssrInterpolate(main_performer.first_name + " " + main_performer.last_name)}</option>`);
                      });
                      _push3(`<!--]--></select></div>`);
                    }
                    if (unref(loadCurrentUser).user.role_en === "department_director" || unref(loadCurrentUser).user.role_en === "vice_department_director") {
                      _push3(`<div class="w-6/12 max-lg:w-full flex flex-col gap-y-2 border p-2 rounded-lg"${_scopeId2}><p class="text-md dark:text-white tracking-wider text-center"${_scopeId2}>${ssrInterpolate(_ctx.$t("Исполнители"))}</p><!--[-->`);
                      ssrRenderList((_b2 = unref(companies).current_department) == null ? void 0 : _b2.participants, (performer) => {
                        _push3(`<div${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_TheCheckbox, { item: performer }, null, _parent3, _scopeId2));
                        _push3(`<span class="ml-10"${_scopeId2}>${ssrInterpolate(performer.first_name + " " + performer.last_name)}</span></div>`);
                      });
                      _push3(`<!--]--></div>`);
                    } else {
                      _push3(`<div class="w-6/12 max-lg:w-full flex flex-col gap-y-2 border p-2 rounded-lg max-h-[300px] overflow-y-auto"${_scopeId2}><p class="text-md dark:text-white tracking-wider text-center"${_scopeId2}>${ssrInterpolate(_ctx.$t("Исполнители"))}</p>`);
                      if (((_c2 = unref(createForm).department.participants) == null ? void 0 : _c2.length) > 0) {
                        _push3(`<div${_scopeId2}><!--[-->`);
                        ssrRenderList(unref(createForm).department.participants, (performer) => {
                          var _a3;
                          _push3(`<div${_scopeId2}>`);
                          if (((_a3 = unref(loadCurrentUser).user) == null ? void 0 : _a3.priority) < performer.priority) {
                            _push3(ssrRenderComponent(TheCheckboxCreateUser, { item: performer }, null, _parent3, _scopeId2));
                          } else {
                            _push3(`<!---->`);
                          }
                          _push3(`</div>`);
                        });
                        _push3(`<!--]--></div>`);
                      } else {
                        _push3(`<p class="text-center tracking-widest text-gray-300 text-sm"${_scopeId2}>${ssrInterpolate(_ctx.$t("В департаменте пусто"))}</p>`);
                      }
                      _push3(`</div>`);
                    }
                  } else {
                    return [
                      unref(loadCurrentUser).user.role_en === "department_director" || unref(loadCurrentUser).user.role_en === "vice_department_director" ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "w-6/12 max-lg:w-full flex flex-col gap-y-2"
                      }, [
                        createVNode("p", { class: "text-md dark:text-white tracking-wider" }, toDisplayString(_ctx.$t("Ответственный")), 1),
                        withDirectives(createVNode("select", {
                          type: "text",
                          "onUpdate:modelValue": ($event) => unref(createForm).main_performer_id = $event,
                          class: "w-full text-black rounded-lg p-2.5 border dark:bg-gray-300 dark:border-none outline-semiCyan outline-1"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(companies).get_department.participants, (performer) => {
                            return openBlock(), createBlock("option", {
                              class: "",
                              value: performer.id
                            }, toDisplayString(performer.first_name + " " + performer.last_name), 9, ["value"]);
                          }), 256))
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, unref(createForm).main_performer_id]
                        ])
                      ])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "w-6/12 max-lg:w-full flex flex-col gap-y-2"
                      }, [
                        createVNode("p", { class: "text-md dark:text-white tracking-wider" }, toDisplayString(_ctx.$t("Ответственный")), 1),
                        withDirectives(createVNode("select", {
                          type: "text",
                          "onUpdate:modelValue": ($event) => unref(createForm).main_performer_id = $event,
                          class: "w-full text-black rounded-lg p-2.5 border dark:bg-gray-300 dark:border-none outline-semiCyan outline-1"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList((_d2 = unref(createForm).department) == null ? void 0 : _d2.participants, (main_performer) => {
                            return openBlock(), createBlock("option", {
                              value: main_performer.id
                            }, toDisplayString(main_performer.first_name + " " + main_performer.last_name), 9, ["value"]);
                          }), 256))
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, unref(createForm).main_performer_id]
                        ])
                      ])),
                      unref(loadCurrentUser).user.role_en === "department_director" || unref(loadCurrentUser).user.role_en === "vice_department_director" ? (openBlock(), createBlock("div", {
                        key: 2,
                        class: "w-6/12 max-lg:w-full flex flex-col gap-y-2 border p-2 rounded-lg"
                      }, [
                        createVNode("p", { class: "text-md dark:text-white tracking-wider text-center" }, toDisplayString(_ctx.$t("Исполнители")), 1),
                        (openBlock(true), createBlock(Fragment, null, renderList((_e2 = unref(companies).current_department) == null ? void 0 : _e2.participants, (performer) => {
                          return openBlock(), createBlock("div", null, [
                            createVNode(_component_TheCheckbox, { item: performer }, null, 8, ["item"]),
                            createVNode("span", { class: "ml-10" }, toDisplayString(performer.first_name + " " + performer.last_name), 1)
                          ]);
                        }), 256))
                      ])) : (openBlock(), createBlock("div", {
                        key: 3,
                        class: "w-6/12 max-lg:w-full flex flex-col gap-y-2 border p-2 rounded-lg max-h-[300px] overflow-y-auto"
                      }, [
                        createVNode("p", { class: "text-md dark:text-white tracking-wider text-center" }, toDisplayString(_ctx.$t("Исполнители")), 1),
                        ((_f = unref(createForm).department.participants) == null ? void 0 : _f.length) > 0 ? (openBlock(), createBlock("div", { key: 0 }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(createForm).department.participants, (performer) => {
                            var _a3;
                            return openBlock(), createBlock("div", null, [
                              ((_a3 = unref(loadCurrentUser).user) == null ? void 0 : _a3.priority) < performer.priority ? (openBlock(), createBlock(TheCheckboxCreateUser, {
                                key: 0,
                                item: performer
                              }, null, 8, ["item"])) : createCommentVNode("", true)
                            ]);
                          }), 256))
                        ])) : (openBlock(), createBlock("p", {
                          key: 1,
                          class: "text-center tracking-widest text-gray-300 text-sm"
                        }, toDisplayString(_ctx.$t("В департаменте пусто")), 1))
                      ]))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(TaskContentCreateElems, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="w-6/12 max-lg:w-full text-black"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$g, {
                      type: "textarea",
                      label: _ctx.$t("Описание задания"),
                      modelValue: unref(createForm).description,
                      "onUpdate:modelValue": ($event) => unref(createForm).description = $event
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="w-6/12 max-lg:w-full flex flex-col gap-y-2 rounded-lg border"${_scopeId2}><div class="text-center tracking-widest pt-4 pb-10"${_scopeId2}><h2 class="dark:text-white"${_scopeId2}>${ssrInterpolate(_ctx.$t("Прикрепите файлы к заданию"))}</h2><h2 class="text-gray-300"${_scopeId2}>(${ssrInterpolate(_ctx.$t("не обязательно"))})</h2></div>`);
                    _push3(ssrRenderComponent(_sfc_main$g, {
                      class: "",
                      type: "file",
                      id: "upload-file",
                      onInput: ($event) => unref(createForm).author_file_file = $event.target.files
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "w-6/12 max-lg:w-full text-black" }, [
                        createVNode(_sfc_main$g, {
                          type: "textarea",
                          label: _ctx.$t("Описание задания"),
                          modelValue: unref(createForm).description,
                          "onUpdate:modelValue": ($event) => unref(createForm).description = $event
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "w-6/12 max-lg:w-full flex flex-col gap-y-2 rounded-lg border" }, [
                        createVNode("div", { class: "text-center tracking-widest pt-4 pb-10" }, [
                          createVNode("h2", { class: "dark:text-white" }, toDisplayString(_ctx.$t("Прикрепите файлы к заданию")), 1),
                          createVNode("h2", { class: "text-gray-300" }, "(" + toDisplayString(_ctx.$t("не обязательно")) + ")", 1)
                        ]),
                        createVNode(_sfc_main$g, {
                          class: "",
                          type: "file",
                          id: "upload-file",
                          onInput: ($event) => unref(createForm).author_file_file = $event.target.files
                        }, null, 8, ["onInput"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(TaskContentCreateElems, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="text-center"${_scopeId2}><p class="text-md dark:text-white tracking-wider mb-2"${_scopeId2}>${ssrInterpolate(_ctx.$t("Срок до"))}</p>`);
                    _push3(ssrRenderComponent(unref(VueDatePicker), {
                      modelValue: unref(createForm).deadline,
                      "onUpdate:modelValue": ($event) => unref(createForm).deadline = $event,
                      "select-text": _ctx.$t("Выбрать"),
                      "min-date": /* @__PURE__ */ new Date(),
                      timezone: unref(timezone),
                      "cancel-text": _ctx.$t("Отменить"),
                      placeholder: "Start Typing ...",
                      "text-input": "",
                      class: "w-full rounded-lg p-2 dark:border-none outline-semiCyan outline-1",
                      "auto-apply": "",
                      inline: "",
                      "multi-calendars-solo": ""
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-center" }, [
                        createVNode("p", { class: "text-md dark:text-white tracking-wider mb-2" }, toDisplayString(_ctx.$t("Срок до")), 1),
                        createVNode(unref(VueDatePicker), {
                          modelValue: unref(createForm).deadline,
                          "onUpdate:modelValue": ($event) => unref(createForm).deadline = $event,
                          "select-text": _ctx.$t("Выбрать"),
                          "min-date": /* @__PURE__ */ new Date(),
                          timezone: unref(timezone),
                          "cancel-text": _ctx.$t("Отменить"),
                          placeholder: "Start Typing ...",
                          "text-input": "",
                          class: "w-full rounded-lg p-2 dark:border-none outline-semiCyan outline-1",
                          "auto-apply": "",
                          inline: "",
                          "multi-calendars-solo": ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "select-text", "min-date", "timezone", "cancel-text"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(TaskContentCreateElems, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$c, {
                      class: "py-2 px-6 rounded-full",
                      t: "button",
                      type: "danger",
                      onClick: ($event) => __props.showCreate = false
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$t("Отменить"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("Отменить")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_sfc_main$c, {
                      class: "py-2 px-6 rounded-full",
                      t: "submit",
                      type: "success",
                      onClick: ($event) => validationForm()
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$t("Создать"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("Создать")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$c, {
                        class: "py-2 px-6 rounded-full",
                        t: "button",
                        type: "danger",
                        onClick: ($event) => __props.showCreate = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("Отменить")), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_sfc_main$c, {
                        class: "py-2 px-6 rounded-full",
                        t: "submit",
                        type: "success",
                        onClick: ($event) => validationForm()
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("Создать")), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</form></div>`);
            } else {
              return [
                createVNode("div", null, [
                  createVNode(_sfc_main$f, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Создание задания")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode("form", {
                    onSubmit: withModifiers(($event) => {
                      var _a2;
                      unref(tasksList).create_task({ ...unref(createForm), performers_ids: (_a2 = unref(createForm).department.participants) == null ? void 0 : _a2.filter((e) => e.value).map((i) => i.id).join(",") });
                      __props.showCreate = false;
                    }, ["prevent"])
                  }, [
                    createVNode(TaskContentCreateElems, null, {
                      default: withCtx(() => [
                        unref(loadCurrentUser).user.role_en === "department_director" || unref(loadCurrentUser).user.role_en === "vice_department_director" ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "w-full max-lg:w-full"
                        }, [
                          createVNode(_sfc_main$g, {
                            type: "text",
                            label: _ctx.$t("Заголовок"),
                            modelValue: unref(createForm).title,
                            "onUpdate:modelValue": ($event) => unref(createForm).title = $event
                          }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
                        ])) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "w-6/12 max-lg:w-full"
                        }, [
                          createVNode(_sfc_main$g, {
                            type: "text",
                            label: _ctx.$t("Заголовок"),
                            modelValue: unref(createForm).title,
                            "onUpdate:modelValue": ($event) => unref(createForm).title = $event
                          }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
                        ])),
                        unref(loadCurrentUser).user.role_en !== "department_director" || unref(loadCurrentUser).user.role_en !== "department_director" ? (openBlock(), createBlock("div", {
                          key: 2,
                          class: "w-6/12 max-lg:w-full flex flex-col gap-y-2"
                        }, [
                          createVNode("p", { class: "text-md dark:text-white tracking-wider" }, toDisplayString(_ctx.$t("Отдел")), 1),
                          withDirectives(createVNode("select", {
                            type: "text",
                            "onUpdate:modelValue": ($event) => unref(createForm).department = $event,
                            class: "w-full text-black rounded-lg p-2.5 border dark:bg-gray-300 dark:border-none outline-semiCyan outline-1"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(companies).get_all_department.results, (department) => {
                              return openBlock(), createBlock("option", { value: department }, toDisplayString(department.name), 9, ["value"]);
                            }), 256))
                          ], 8, ["onUpdate:modelValue"]), [
                            [vModelSelect, unref(createForm).department]
                          ])
                        ])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    createVNode(TaskContentCreateElems, null, {
                      default: withCtx(() => {
                        var _a2, _b2, _c2;
                        return [
                          unref(loadCurrentUser).user.role_en === "department_director" || unref(loadCurrentUser).user.role_en === "vice_department_director" ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "w-6/12 max-lg:w-full flex flex-col gap-y-2"
                          }, [
                            createVNode("p", { class: "text-md dark:text-white tracking-wider" }, toDisplayString(_ctx.$t("Ответственный")), 1),
                            withDirectives(createVNode("select", {
                              type: "text",
                              "onUpdate:modelValue": ($event) => unref(createForm).main_performer_id = $event,
                              class: "w-full text-black rounded-lg p-2.5 border dark:bg-gray-300 dark:border-none outline-semiCyan outline-1"
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(companies).get_department.participants, (performer) => {
                                return openBlock(), createBlock("option", {
                                  class: "",
                                  value: performer.id
                                }, toDisplayString(performer.first_name + " " + performer.last_name), 9, ["value"]);
                              }), 256))
                            ], 8, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(createForm).main_performer_id]
                            ])
                          ])) : (openBlock(), createBlock("div", {
                            key: 1,
                            class: "w-6/12 max-lg:w-full flex flex-col gap-y-2"
                          }, [
                            createVNode("p", { class: "text-md dark:text-white tracking-wider" }, toDisplayString(_ctx.$t("Ответственный")), 1),
                            withDirectives(createVNode("select", {
                              type: "text",
                              "onUpdate:modelValue": ($event) => unref(createForm).main_performer_id = $event,
                              class: "w-full text-black rounded-lg p-2.5 border dark:bg-gray-300 dark:border-none outline-semiCyan outline-1"
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList((_a2 = unref(createForm).department) == null ? void 0 : _a2.participants, (main_performer) => {
                                return openBlock(), createBlock("option", {
                                  value: main_performer.id
                                }, toDisplayString(main_performer.first_name + " " + main_performer.last_name), 9, ["value"]);
                              }), 256))
                            ], 8, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(createForm).main_performer_id]
                            ])
                          ])),
                          unref(loadCurrentUser).user.role_en === "department_director" || unref(loadCurrentUser).user.role_en === "vice_department_director" ? (openBlock(), createBlock("div", {
                            key: 2,
                            class: "w-6/12 max-lg:w-full flex flex-col gap-y-2 border p-2 rounded-lg"
                          }, [
                            createVNode("p", { class: "text-md dark:text-white tracking-wider text-center" }, toDisplayString(_ctx.$t("Исполнители")), 1),
                            (openBlock(true), createBlock(Fragment, null, renderList((_b2 = unref(companies).current_department) == null ? void 0 : _b2.participants, (performer) => {
                              return openBlock(), createBlock("div", null, [
                                createVNode(_component_TheCheckbox, { item: performer }, null, 8, ["item"]),
                                createVNode("span", { class: "ml-10" }, toDisplayString(performer.first_name + " " + performer.last_name), 1)
                              ]);
                            }), 256))
                          ])) : (openBlock(), createBlock("div", {
                            key: 3,
                            class: "w-6/12 max-lg:w-full flex flex-col gap-y-2 border p-2 rounded-lg max-h-[300px] overflow-y-auto"
                          }, [
                            createVNode("p", { class: "text-md dark:text-white tracking-wider text-center" }, toDisplayString(_ctx.$t("Исполнители")), 1),
                            ((_c2 = unref(createForm).department.participants) == null ? void 0 : _c2.length) > 0 ? (openBlock(), createBlock("div", { key: 0 }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(createForm).department.participants, (performer) => {
                                var _a3;
                                return openBlock(), createBlock("div", null, [
                                  ((_a3 = unref(loadCurrentUser).user) == null ? void 0 : _a3.priority) < performer.priority ? (openBlock(), createBlock(TheCheckboxCreateUser, {
                                    key: 0,
                                    item: performer
                                  }, null, 8, ["item"])) : createCommentVNode("", true)
                                ]);
                              }), 256))
                            ])) : (openBlock(), createBlock("p", {
                              key: 1,
                              class: "text-center tracking-widest text-gray-300 text-sm"
                            }, toDisplayString(_ctx.$t("В департаменте пусто")), 1))
                          ]))
                        ];
                      }),
                      _: 1
                    }),
                    createVNode(TaskContentCreateElems, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "w-6/12 max-lg:w-full text-black" }, [
                          createVNode(_sfc_main$g, {
                            type: "textarea",
                            label: _ctx.$t("Описание задания"),
                            modelValue: unref(createForm).description,
                            "onUpdate:modelValue": ($event) => unref(createForm).description = $event
                          }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "w-6/12 max-lg:w-full flex flex-col gap-y-2 rounded-lg border" }, [
                          createVNode("div", { class: "text-center tracking-widest pt-4 pb-10" }, [
                            createVNode("h2", { class: "dark:text-white" }, toDisplayString(_ctx.$t("Прикрепите файлы к заданию")), 1),
                            createVNode("h2", { class: "text-gray-300" }, "(" + toDisplayString(_ctx.$t("не обязательно")) + ")", 1)
                          ]),
                          createVNode(_sfc_main$g, {
                            class: "",
                            type: "file",
                            id: "upload-file",
                            onInput: ($event) => unref(createForm).author_file_file = $event.target.files
                          }, null, 8, ["onInput"])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(TaskContentCreateElems, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-center" }, [
                          createVNode("p", { class: "text-md dark:text-white tracking-wider mb-2" }, toDisplayString(_ctx.$t("Срок до")), 1),
                          createVNode(unref(VueDatePicker), {
                            modelValue: unref(createForm).deadline,
                            "onUpdate:modelValue": ($event) => unref(createForm).deadline = $event,
                            "select-text": _ctx.$t("Выбрать"),
                            "min-date": /* @__PURE__ */ new Date(),
                            timezone: unref(timezone),
                            "cancel-text": _ctx.$t("Отменить"),
                            placeholder: "Start Typing ...",
                            "text-input": "",
                            class: "w-full rounded-lg p-2 dark:border-none outline-semiCyan outline-1",
                            "auto-apply": "",
                            inline: "",
                            "multi-calendars-solo": ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "select-text", "min-date", "timezone", "cancel-text"])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(TaskContentCreateElems, null, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$c, {
                          class: "py-2 px-6 rounded-full",
                          t: "button",
                          type: "danger",
                          onClick: ($event) => __props.showCreate = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("Отменить")), 1)
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_sfc_main$c, {
                          class: "py-2 px-6 rounded-full",
                          t: "submit",
                          type: "success",
                          onClick: ($event) => validationForm()
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("Создать")), 1)
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ], 40, ["onSubmit"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tasks/TasksContent.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "dark:bg-gray-400 dark:hover:bg-gray-300 border dark:border-none dark:shadow-none shadow-md hover:bg-gray-100 transition-all cursor-pointer w-full p-4 my-4 rounded-lg" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "flex justify-between tracking-widest"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p class="text-sm font-bold"${_scopeId}>Наименование</p><div class="text-center"${_scopeId}><p${_scopeId}>Дата</p><p${_scopeId}>${ssrInterpolate((/* @__PURE__ */ new Date()).toLocaleDateString())}</p></div>`);
      } else {
        return [
          createVNode("p", { class: "text-sm font-bold" }, "Наименование"),
          createVNode("div", { class: "text-center" }, [
            createVNode("p", null, "Дата"),
            createVNode("p", null, toDisplayString((/* @__PURE__ */ new Date()).toLocaleDateString()), 1)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="mt-4"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, id? </div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tasks/TaskUI/TheNotificationContent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TheNotificationContent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {
  name: "TasksNotification",
  components: { TheNotificationContent }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TheNotificationContent = resolveComponent("TheNotificationContent");
  _push(`<div${ssrRenderAttrs(_attrs)}><h3 class="text-center text-xl dark:text-white font-bold tracking-wider">${ssrInterpolate(_ctx.$t("Уведомления о заданиях"))}</h3><div>`);
  _push(ssrRenderComponent(_component_TheNotificationContent, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tasks/TasksNotification.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TasksNotification = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b, _c, _d;
    const statsList = useTaskList();
    Chart.register(ArcElement, Tooltip, Legend);
    Chart.defaults.color = "#b6b6b6";
    const chartData = ref({
      labels: ["Выполненые", "В процессе", "На расмотрении", "Отмененные"],
      datasets: [
        {
          backgroundColor: ["#41B883", "#E46651", "#3b82f6", "#DD1B16"],
          data: [(_a = statsList == null ? void 0 : statsList.get_stats[2]) == null ? void 0 : _a.count, (_b = statsList == null ? void 0 : statsList.get_stats[0]) == null ? void 0 : _b.count, (_c = statsList == null ? void 0 : statsList.get_stats[4]) == null ? void 0 : _c.count, (_d = statsList == null ? void 0 : statsList.get_stats[3]) == null ? void 0 : _d.count]
        }
      ]
    });
    const chartOptions = ref({
      responsive: true,
      maintainAspectRatio: false
    });
    useSeoMeta({
      title: "Задания",
      description: "Страница с заданиями пользователей платформы"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$f, { "text-type": "pageTitle" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Страница c заданиями"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Страница c заданиями")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex max-[1170px]:flex-col max-lg:items-center justify-between"><div class="flex flex-col w-full max-xl:flex-wrap gap-y-10 max-xl:items-center"><div class="w-full mx-auto">`);
      _push(ssrRenderComponent(_sfc_main$a, null, null, _parent));
      _push(`</div><div class="w-full">`);
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
      _push(`</div></div><div class="flex flex-col w-4/12 max-[1170px]:w-full gap-y-10">`);
      if (unref(chartData).datasets[0].data[0] != void 0) {
        _push(`<div class="${ssrRenderClass([{ "h-[400px]": unref(statsList).get_tasks.count > 0 }, "dark:border dark:border-gray-500 dark:shadow-md dark:shadow-gray-500 shadow-2xl rounded-lg p-4 w-full bg-blue-5"])}">`);
        if (unref(statsList).get_tasks.count > 0) {
          _push(ssrRenderComponent(unref(Pie), {
            class: "tracking-wider cursor-pointer",
            data: unref(chartData),
            options: unref(chartOptions)
          }, null, _parent));
        } else {
          _push(`<p class="text-2xl break-words dark:text-white tracking-widest text-center">${ssrInterpolate(_ctx.$t("Статистика отсутствует"))}</p>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="dark:border dark:border-gray-500 dark:shadow-md dark:shadow-gray-500 shadow-2xl rounded-lg p-4 w-full">`);
      _push(ssrRenderComponent(TasksNotification, { class: "" }, null, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base/tasks/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-9aYi-h8K.js.map
