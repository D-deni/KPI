import { _ as __nuxt_component_0 } from "./nuxt-link-nvHjMUuE.js";
import { defineComponent, useSSRContext, ref, watchEffect, watchSyncEffect, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, withModifiers, Fragment, renderList, Transition, createCommentVNode, withDirectives, vModelText } from "vue";
import { r as useSeoMeta } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { useRoute } from "vue-router";
import { u as useTaskList } from "./tasks-AOpCvdFT.js";
import { u as useAuthStore } from "./auth-ltfjqTsG.js";
import { u as useCompanies } from "./companies-Vl6LYc-q.js";
import { _ as _sfc_main$3 } from "./TheTextContent-rN29GJom.js";
import { _ as _sfc_main$2 } from "./TheBreadcrumbs-ms4_phBH.js";
import { T as TheContentBlock } from "./TheContentBlock-AeyxWvVh.js";
import { _ as _sfc_main$5 } from "./TheButton-Jrv5tshN.js";
import { _ as _sfc_main$4 } from "./TheInput-6xiMcCQ9.js";
import { _ as _sfc_main$6 } from "./TheModal-1X0PcTyA.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-yVxbj29m.js";
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
import "vue3-toastify";
import "nuxt-storage/nuxt-storage.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TasksUserCheckbox",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-30216c86><label class="${ssrRenderClass([{ "bg-blueSemiLight text-white": __props.item.value === true }, "container w-full relative py-2 px-6 text-black transition-all rounded-lg border"])}" data-v-30216c86><span class="relative z-10 dark:text-white" data-v-30216c86>${ssrInterpolate(((_a = __props.item) == null ? void 0 : _a.first_name) + " " + ((_b = __props.item) == null ? void 0 : _b.last_name))}</span><input type="checkbox"${ssrIncludeBooleanAttr(__props.item.value) ? " checked" : ""} data-v-30216c86><span class="checkmark w-full h-full absolute top-0 left-0" data-v-30216c86></span></label></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tasks/TaskUI/TasksUserCheckbox.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TasksUserCheckbox = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-30216c86"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  props: {
    showCancelError: {
      type: Boolean,
      default: false
    },
    showAddPerformer: {
      type: Boolean,
      default: false
    },
    showDeleteTask: {
      type: Boolean,
      default: false
    },
    model_value: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    const currentUser = useAuthStore();
    const route = useRoute();
    const currentTask = useTaskList();
    const department = useCompanies();
    department.loadDepartmentList();
    const updateForm = ref({});
    const files = ref({});
    watchEffect(() => {
      currentTask.loadCurrentTask({ id: route.params.id });
    });
    watchSyncEffect(() => {
      useSeoMeta({
        title: `${currentTask.task.title}`
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-hidden" }, _attrs))} data-v-8f2bc59e>`);
      _push(ssrRenderComponent(TheContentBlock, { class: "w-11/12 mx-auto relative" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
          if (_push2) {
            _push2(`<div class="w-full mx-auto flex justify-center" data-v-8f2bc59e${_scopeId}><div class="${ssrRenderClass([{ "bg-orange-500": unref(currentTask).task.status === "performing", "bg-red-500": unref(currentTask).task.status === "rejected", "bg-green-500": unref(currentTask).task.status === "completed", "bg-blue-500": unref(currentTask).task.status === "watching" }, "absolute top-10 flex justify-center w-2/12 max-lg:w-4/12 h-4 rounded-b-full"])}" data-v-8f2bc59e${_scopeId}></div><p class="text-sm text-gray-400" data-v-8f2bc59e${_scopeId}>${ssrInterpolate(_ctx.$t("Последние изменения"))} ${ssrInterpolate(new Date(unref(currentTask).task.updated_at).toLocaleDateString() + ", " + new Date(unref(currentTask).task.updated_at).toLocaleTimeString())}</p></div><div class="flex items-center gap-x-4" data-v-8f2bc59e${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, { "breadcrumb-link": "/base/tasks" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("Список заданий"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("Список заданий")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div data-v-8f2bc59e${_scopeId}><svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-8f2bc59e${_scopeId}><path class="dark:stroke-white stroke-black" d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5" stroke-width="2" stroke-linecap="round" data-v-8f2bc59e${_scopeId}></path></svg></div>`);
            _push2(ssrRenderComponent(_sfc_main$2, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(currentTask).task.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(currentTask).task.title), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-center gap-x-10" data-v-8f2bc59e${_scopeId}><p class="text-[12px] text-gray-400" data-v-8f2bc59e${_scopeId}>${ssrInterpolate(new Date(unref(currentTask).task.created_at).toLocaleDateString())}</p>`);
            _push2(ssrRenderComponent(_sfc_main$3, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(currentTask).task.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(currentTask).task.title), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p class="text-[12px] text-gray-400" data-v-8f2bc59e${_scopeId}>${ssrInterpolate(new Date(unref(currentTask).task.deadline).toLocaleDateString())}</p></div><div class="flex mx-6 max-sm:mx-0 gap-x-10 max-lg:flex-col" data-v-8f2bc59e${_scopeId}><div class="my-10 w-10/12 max-lg:w-full" data-v-8f2bc59e${_scopeId}><div data-v-8f2bc59e${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("Описание"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("Описание")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="w-full mx-auto border p-10 my-6 border-gray-400 rounded-lg" data-v-8f2bc59e${_scopeId}>${ssrInterpolate(unref(currentTask).task.description)}</div></div><div data-v-8f2bc59e${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("Прикреплённые файлы"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("Прикреплённые файлы")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="w-full flex flex-wrap gap-x-4 gap-y-2 items-center mx-auto border p-10 my-6 border-gray-400 rounded-lg" data-v-8f2bc59e${_scopeId}><!--[-->`);
            ssrRenderList(unref(currentTask).task.author_files_urls, (files2) => {
              var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m, _n, _o, _p;
              _push2(`<a class="flex dark:hover:bg-gray-700 hover:bg-gray-100 rounded-lg p-2 transition-all flex-col items-center"${ssrRenderAttr("href", unref(currentUser).get_server_domain + files2.file_url)}${ssrRenderAttr("download", files2.file_name)}${ssrRenderAttr("title", files2.file_name)} data-v-8f2bc59e${_scopeId}><div data-v-8f2bc59e${_scopeId}>`);
              if (((_a2 = files2.file_name) == null ? void 0 : _a2.slice(0 - 3)) === "pdf") {
                _push2(`<div data-v-8f2bc59e${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 56 64" enable-background="new 0 0 56 64" xml:space="preserve" data-v-8f2bc59e${_scopeId}><g data-v-8f2bc59e${_scopeId}><path fill="#8C181A" d="M5.1,0C2.3,0,0,2.3,0,5.1v53.8C0,61.7,2.3,64,5.1,64h45.8c2.8,0,5.1-2.3,5.1-5.1V20.3L37.1,0H5.1z" data-v-8f2bc59e${_scopeId}></path><path fill="#6B0D12" d="M56,20.4v1H43.2c0,0-6.3-1.3-6.1-6.7c0,0,0.2,5.7,6,5.7H56z" data-v-8f2bc59e${_scopeId}></path><path opacity="0.5" fill="#FFFFFF" enable-background="new" d="M37.1,0v14.6c0,1.7,1.1,5.8,6.1,5.8H56L37.1,0z" data-v-8f2bc59e${_scopeId}></path></g><path fill="#FFFFFF" d="M14.9,49h-3.3v4.1c0,0.4-0.3,0.7-0.8,0.7c-0.4,0-0.7-0.3-0.7-0.7V42.9c0-0.6,0.5-1.1,1.1-1.1h3.7
                          c2.4,0,3.8,1.7,3.8,3.6C18.7,47.4,17.3,49,14.9,49z M14.8,43.1h-3.2v4.6h3.2c1.4,0,2.4-0.9,2.4-2.3C17.2,44,16.2,43.1,14.8,43.1z
                           M25.2,53.8h-3c-0.6,0-1.1-0.5-1.1-1.1v-9.8c0-0.6,0.5-1.1,1.1-1.1h3c3.7,0,6.2,2.6,6.2,6C31.4,51.2,29,53.8,25.2,53.8z M25.2,43.1
                          h-2.6v9.3h2.6c2.9,0,4.6-2.1,4.6-4.7C29.9,45.2,28.2,43.1,25.2,43.1z M41.5,43.1h-5.8V47h5.7c0.4,0,0.6,0.3,0.6,0.7
                          s-0.3,0.6-0.6,0.6h-5.7v4.8c0,0.4-0.3,0.7-0.8,0.7c-0.4,0-0.7-0.3-0.7-0.7V42.9c0-0.6,0.5-1.1,1.1-1.1h6.2c0.4,0,0.6,0.3,0.6,0.7
                          C42.2,42.8,41.9,43.1,41.5,43.1z" data-v-8f2bc59e${_scopeId}></path></svg></div>`);
              } else if (((_b2 = files2.file_name) == null ? void 0 : _b2.slice(0 - 3)) === "doc" || ((_c2 = files2.file_name) == null ? void 0 : _c2.slice(0 - 4)) === "docx") {
                _push2(`<div data-v-8f2bc59e${_scopeId}><svg width="60px" height="60px" viewBox="-4 0 64 64" xmlns="http://www.w3.org/2000/svg" data-v-8f2bc59e${_scopeId}><g fill-rule="evenodd" data-v-8f2bc59e${_scopeId}><path d="m5.11 0a5.07 5.07 0 0 0 -5.11 5v53.88a5.07 5.07 0 0 0 5.11 5.12h45.78a5.07 5.07 0 0 0 5.11-5.12v-38.6l-18.94-20.28z" fill="#107cad" data-v-8f2bc59e${_scopeId}></path><path d="m56 20.35v1h-12.82s-6.31-1.26-6.13-6.71c0 0 .21 5.71 6 5.71z" fill="#084968" data-v-8f2bc59e${_scopeId}></path><path d="m37.07 0v14.56a5.78 5.78 0 0 0 6.11 5.79h12.82z" fill="#90d0fe" opacity=".5" data-v-8f2bc59e${_scopeId}></path></g><path d="m14.24 53.86h-3a1.08 1.08 0 0 1 -1.08-1.08v-9.85a1.08 1.08 0 0 1 1.08-1.08h3a6 6 0 1 1 0 12zm0-10.67h-2.61v9.34h2.61a4.41 4.41 0 0 0 4.61-4.66 4.38 4.38 0 0 0 -4.61-4.68zm14.42 10.89a5.86 5.86 0 0 1 -6-6.21 6 6 0 1 1 11.92 0 5.87 5.87 0 0 1 -5.92 6.21zm0-11.09c-2.7 0-4.41 2.07-4.41 4.88s1.71 4.88 4.41 4.88 4.41-2.09 4.41-4.88-1.72-4.87-4.41-4.87zm18.45.38a.75.75 0 0 1 .2.52.71.71 0 0 1 -.7.72.64.64 0 0 1 -.51-.24 4.06 4.06 0 0 0 -3-1.38 4.61 4.61 0 0 0 -4.63 4.88 4.63 4.63 0 0 0 4.63 4.88 4 4 0 0 0 3-1.37.7.7 0 0 1 .51-.24.72.72 0 0 1 .7.74.78.78 0 0 1 -.2.51 5.33 5.33 0 0 1 -4 1.69 6.22 6.22 0 0 1 0-12.43 5.26 5.26 0 0 1 4 1.72z" fill="#ffffff" data-v-8f2bc59e${_scopeId}></path></svg></div>`);
              } else if (((_d2 = files2.file_name) == null ? void 0 : _d2.slice(0 - 3)) === "xls" || ((_e2 = files2.file_name) == null ? void 0 : _e2.slice(0 - 4)) === "xlsx") {
                _push2(`<div data-v-8f2bc59e${_scopeId}><svg width="60px" height="60px" viewBox="-4 0 64 64" xmlns="http://www.w3.org/2000/svg" data-v-8f2bc59e${_scopeId}><path d="M5.112.006c-2.802 0-5.073 2.273-5.073 5.074v53.841c0 2.803 2.271 5.074 5.073 5.074h45.774c2.801 0 5.074-2.271 5.074-5.074v-38.605l-18.902-20.31h-31.946z" fill-rule="evenodd" clip-rule="evenodd" fill="#45B058" data-v-8f2bc59e${_scopeId}></path><path d="M19.429 53.938c-.216 0-.415-.09-.54-.27l-3.728-4.97-3.745 4.97c-.126.18-.324.27-.54.27-.396 0-.72-.306-.72-.72 0-.144.035-.306.144-.432l3.89-5.131-3.619-4.826c-.09-.126-.145-.27-.145-.414 0-.342.288-.72.721-.72.216 0 .432.108.576.288l3.438 4.628 3.438-4.646c.127-.18.324-.27.541-.27.378 0 .738.306.738.72 0 .144-.036.288-.127.414l-3.619 4.808 3.891 5.149c.09.126.125.27.125.414 0 .396-.324.738-.719.738zm9.989-.126h-5.455c-.595 0-1.081-.486-1.081-1.08v-10.317c0-.396.324-.72.774-.72.396 0 .721.324.721.72v10.065h5.041c.359 0 .648.288.648.648 0 .396-.289.684-.648.684zm6.982.216c-1.782 0-3.188-.594-4.213-1.495-.162-.144-.234-.342-.234-.54 0-.36.27-.756.702-.756.144 0 .306.036.433.144.828.738 1.98 1.314 3.367 1.314 2.143 0 2.826-1.152 2.826-2.071 0-3.097-7.111-1.386-7.111-5.672 0-1.98 1.764-3.331 4.123-3.331 1.548 0 2.881.468 3.853 1.278.162.144.253.342.253.54 0 .36-.307.72-.703.72-.145 0-.307-.054-.432-.162-.883-.72-1.98-1.044-3.079-1.044-1.44 0-2.467.774-2.467 1.909 0 2.701 7.112 1.152 7.112 5.636 0 1.748-1.188 3.53-4.43 3.53z" fill="#ffffff" data-v-8f2bc59e${_scopeId}></path><path d="M55.953 20.352v1h-12.801s-6.312-1.26-6.127-6.707c0 0 .207 5.707 6.002 5.707h12.926z" fill-rule="evenodd" clip-rule="evenodd" fill="#349C42" data-v-8f2bc59e${_scopeId}></path><path d="M37.049 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.801l-18.905-20.352z" opacity=".5" fill-rule="evenodd" clip-rule="evenodd" fill="#ffffff" data-v-8f2bc59e${_scopeId}></path></svg></div>`);
              } else if (((_f2 = files2.file_name) == null ? void 0 : _f2.slice(0 - 3)) === "txt") {
                _push2(`<div data-v-8f2bc59e${_scopeId}><svg width="60px" height="60px" viewBox="-4 0 64 64" xmlns="http://www.w3.org/2000/svg" data-v-8f2bc59e${_scopeId}><path d="M5.151-.036c-2.803 0-5.074 2.272-5.074 5.074v53.841c0 2.803 2.271 5.074 5.074 5.074h45.774c2.801 0 5.074-2.271 5.074-5.074v-38.605l-18.902-20.31h-31.946z" fill-rule="evenodd" clip-rule="evenodd" fill="#F9CA06" data-v-8f2bc59e${_scopeId}></path><g fill-rule="evenodd" clip-rule="evenodd" data-v-8f2bc59e${_scopeId}><path d="M56.008 20.316v1h-12.799s-6.312-1.26-6.129-6.708c0 0 .208 5.708 6.004 5.708h12.924z" fill="#F7BC04" data-v-8f2bc59e${_scopeId}></path><path d="M37.106-.036v14.561c0 1.656 1.104 5.792 6.104 5.792h12.799l-18.903-20.353z" opacity=".5" fill="#ffffff" data-v-8f2bc59e${_scopeId}></path></g><path d="M18.763 43.045h-3.277v10.047c0 .414-.324.738-.756.738-.414 0-.738-.324-.738-.738v-10.047h-3.259c-.36 0-.648-.288-.648-.684 0-.36.288-.648.648-.648h8.03c.36 0 .648.288.648.685 0 .359-.288.647-.648.647zm11.7 10.803c-.216 0-.415-.089-.541-.27l-3.727-4.97-3.745 4.97c-.126.181-.324.27-.54.27-.396 0-.72-.306-.72-.72 0-.144.036-.306.144-.432l3.889-5.131-3.619-4.826c-.09-.126-.144-.27-.144-.414 0-.343.288-.721.72-.721.216 0 .432.108.576.288l3.439 4.627 3.439-4.646c.126-.18.324-.27.541-.27.378 0 .738.306.738.721 0 .144-.036.288-.126.414l-3.619 4.808 3.89 5.149c.09.126.126.27.126.415 0 .396-.325.738-.721.738zm11.195-10.803h-3.277v10.047c0 .414-.323.738-.756.738-.414 0-.738-.324-.738-.738v-10.047h-3.259c-.36 0-.648-.288-.648-.684 0-.36.288-.648.648-.648h8.03c.36 0 .648.288.648.685.001.359-.287.647-.648.647z" fill="#ffffff" data-v-8f2bc59e${_scopeId}></path></svg></div>`);
              } else if (((_g2 = files2.file_name) == null ? void 0 : _g2.slice(0 - 3)) === "svg" || ((_h2 = files2.file_name) == null ? void 0 : _h2.slice(0 - 3)) === "png" || ((_i2 = files2.file_name) == null ? void 0 : _i2.slice(0 - 3)) === "jpeg" || ((_j2 = files2.file_name) == null ? void 0 : _j2.slice(0 - 3)) === "jpg" || ((_k2 = files2.file_name) == null ? void 0 : _k2.slice(0 - 4)) === "webp") {
                _push2(`<div data-v-8f2bc59e${_scopeId}><svg width="60px" height="60px" viewBox="-4 0 64 64" xmlns="http://www.w3.org/2000/svg" data-v-8f2bc59e${_scopeId}><g fill-rule="evenodd" clip-rule="evenodd" data-v-8f2bc59e${_scopeId}><path d="M5.125.042c-2.801 0-5.072 2.273-5.072 5.074v53.841c0 2.803 2.271 5.073 5.072 5.073h45.775c2.801 0 5.074-2.271 5.074-5.073v-38.604l-18.904-20.311h-31.945z" fill="#49C9A7" data-v-8f2bc59e${_scopeId}></path><path d="M55.977 20.352v1h-12.799s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z" fill="#37BB91" data-v-8f2bc59e${_scopeId}></path><path d="M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799l-18.903-20.352z" opacity=".5" fill="#ffffff" data-v-8f2bc59e${_scopeId}></path></g><path d="M10.119 53.739v-20.904h20.906v20.904h-20.906zm18.799-18.843h-16.691v12.6h16.691v-12.6zm-9.583 8.384l3.909-5.256 1.207 2.123 1.395-.434.984 5.631h-13.082l3.496-3.32 2.091 1.256zm-3.856-3.64c-.91 0-1.649-.688-1.649-1.538 0-.849.739-1.538 1.649-1.538.912 0 1.65.689 1.65 1.538 0 .85-.738 1.538-1.65 1.538z" fill-rule="evenodd" clip-rule="evenodd" fill="#ffffff" data-v-8f2bc59e${_scopeId}></path></svg></div>`);
              } else if (((_l2 = files2.file_name) == null ? void 0 : _l2.slice(0 - 3)) === "rar" || ((_m = files2.file_name) == null ? void 0 : _m.slice(0 - 3)) === "zip") {
                _push2(`<div data-v-8f2bc59e${_scopeId}><svg width="60px" height="60px" viewBox="-4 0 64 64" xmlns="http://www.w3.org/2000/svg" data-v-8f2bc59e${_scopeId}><path d="M5.113-.026c-2.803 0-5.074 2.272-5.074 5.074v53.841c0 2.803 2.271 5.074 5.074 5.074h45.773c2.801 0 5.074-2.271 5.074-5.074v-38.605l-18.901-20.31h-31.946z" fill-rule="evenodd" clip-rule="evenodd" fill="#8199AF" data-v-8f2bc59e${_scopeId}></path><g fill-rule="evenodd" clip-rule="evenodd" data-v-8f2bc59e${_scopeId}><path d="M55.977 20.352v1h-12.799s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z" fill="#617F9B" data-v-8f2bc59e${_scopeId}></path><path d="M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799l-18.903-20.352z" opacity=".5" fill="#ffffff" data-v-8f2bc59e${_scopeId}></path></g><path d="M18.438 53.906h-7.581c-.378 0-.756-.342-.756-.828 0-.18.054-.36.162-.504l6.68-9.345h-6.212c-.36 0-.648-.288-.648-.684 0-.36.288-.648.648-.648h7.454c.378 0 .756.342.756.829 0 .18-.054.36-.162.504l-6.68 9.345h6.338c.36 0 .648.288.648.648.001.395-.287.683-.647.683zm4.012.108c-.414 0-.738-.324-.738-.738v-10.767c0-.396.324-.721.774-.721.396 0 .72.324.72.721v10.767c0 .413-.324.738-.756.738zm8.839-4.879h-3.331v4.141c0 .414-.324.738-.756.738-.414 0-.738-.324-.738-.738v-10.299c0-.594.486-1.081 1.081-1.081h3.745c2.413 0 3.763 1.657 3.763 3.619s-1.387 3.62-3.764 3.62zm-.18-5.906h-3.151v4.573h3.151c1.422 0 2.395-.936 2.395-2.287-.001-1.35-.973-2.286-2.395-2.286z" fill="#ffffff" data-v-8f2bc59e${_scopeId}></path></svg></div>`);
              } else if (((_n = files2.file_name) == null ? void 0 : _n.slice(0 - 4)) === "html") {
                _push2(`<div data-v-8f2bc59e${_scopeId}><svg width="60px" height="60px" viewBox="-4 0 64 64" xmlns="http://www.w3.org/2000/svg" data-v-8f2bc59e${_scopeId}><path d="M5.135.008c-2.803 0-5.074 2.272-5.074 5.074v53.84c0 2.803 2.271 5.074 5.074 5.074h45.775c2.801 0 5.074-2.271 5.074-5.074v-38.605l-18.903-20.309h-31.946z" fill-rule="evenodd" clip-rule="evenodd" fill="#F7622C" data-v-8f2bc59e${_scopeId}></path><g fill-rule="evenodd" clip-rule="evenodd" data-v-8f2bc59e${_scopeId}><path d="M55.976 20.352v1h-12.799s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z" fill="#F54921" data-v-8f2bc59e${_scopeId}></path><path d="M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799l-18.903-20.352z" opacity=".5" fill="#ffffff" data-v-8f2bc59e${_scopeId}></path></g><path d="M18.942 50.841c-.126 0-.231-.021-.336-.063l-7.58-3.38c-.483-.21-.798-.714-.798-1.28 0-.504.315-1.008.798-1.219l7.58-3.4c.105-.043.21-.063.336-.063.441 0 .882.356.882.903 0 .336-.189.672-.525.818l-7.034 3.002 7.034 2.982c.336.146.525.461.525.818 0 .546-.462.882-.882.882zm8.464-11.044l-4.43 13.291c-.126.398-.504.629-.903.629-.525 0-.924-.398-.924-.881 0-.105.021-.189.063-.295l4.43-13.29c.126-.378.483-.63.903-.63.525 0 .903.42.903.902l-.042.274zm10.184 7.6l-7.58 3.38c-.105.043-.231.063-.336.063-.441 0-.882-.356-.882-.882 0-.357.189-.672.525-.818l7.034-2.982-7.034-3.002c-.357-.146-.546-.482-.546-.818-.021-.547.441-.903.903-.903.105 0 .231.021.336.063l7.58 3.4c.483.211.798.715.798 1.219 0 .567-.315 1.071-.798 1.28z" fill="#ffffff" data-v-8f2bc59e${_scopeId}></path></svg></div>`);
              } else if (((_o = unref(currentTask).task.author_file) == null ? void 0 : _o.length) > 0) {
                _push2(`<div data-v-8f2bc59e${_scopeId}><svg width="60px" height="60px" viewBox="-4 0 64 64" xmlns="http://www.w3.org/2000/svg" data-v-8f2bc59e${_scopeId}><g fill-rule="evenodd" clip-rule="evenodd" data-v-8f2bc59e${_scopeId}><path d="M5.113.007c-2.803 0-5.074 2.271-5.074 5.074v53.84c0 2.803 2.271 5.074 5.074 5.074h45.774c2.801 0 5.074-2.271 5.074-5.074v-38.606l-18.903-20.308h-31.945z" fill="#8199AF" data-v-8f2bc59e${_scopeId}></path><path d="M55.976 20.352v1h-12.799s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z" fill="#617F9B" data-v-8f2bc59e${_scopeId}></path><path d="M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799l-18.903-20.352z" opacity=".5" fill="#ffffff" data-v-8f2bc59e${_scopeId}></path></g></svg></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><p class="mt-2" data-v-8f2bc59e${_scopeId}>${ssrInterpolate(((_p = files2.file_name) == null ? void 0 : _p.length) > 10 ? files2.file_name.slice(0, 10) + "..." : files2.file_name)}</p></a>`);
            });
            _push2(`<!--]-->`);
            if (((_a = unref(currentTask).task.author_files_urls) == null ? void 0 : _a.length) === 0) {
              _push2(`<div class="w-full text-center mb-4" data-v-8f2bc59e${_scopeId}><p class="tracking-widest" data-v-8f2bc59e${_scopeId}>${ssrInterpolate(_ctx.$t("Файлы отсутствуют"))}</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div data-v-8f2bc59e${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("Прикреплённые файлы исполнителей"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("Прикреплённые файлы исполнителей")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<form enctype="multipart/form-data" class="w-full mx-auto border p-10 my-6 border-gray-400 rounded-lg" data-v-8f2bc59e${_scopeId}><div class="flex gap-x-4 flex-wrap" data-v-8f2bc59e${_scopeId}><!--[-->`);
            ssrRenderList(unref(currentTask).task.performer_files_urls, (performer_file) => {
              var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m, _n, _o;
              _push2(`<a class="flex justify-center dark:hover:bg-gray-700 hover:bg-gray-100 rounded-lg p-2 transition-all flex-col items-center"${ssrRenderAttr("href", unref(currentUser).get_server_domain + performer_file.file_url)}${ssrRenderAttr("download", performer_file.file_name)}${ssrRenderAttr("title", performer_file.file_name)} data-v-8f2bc59e${_scopeId}><div data-v-8f2bc59e${_scopeId}>`);
              if (((_a2 = performer_file.file_name) == null ? void 0 : _a2.slice(0 - 3)) === "pdf") {
                _push2(`<div data-v-8f2bc59e${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 56 64" enable-background="new 0 0 56 64" xml:space="preserve" data-v-8f2bc59e${_scopeId}><g data-v-8f2bc59e${_scopeId}><path fill="#8C181A" d="M5.1,0C2.3,0,0,2.3,0,5.1v53.8C0,61.7,2.3,64,5.1,64h45.8c2.8,0,5.1-2.3,5.1-5.1V20.3L37.1,0H5.1z" data-v-8f2bc59e${_scopeId}></path><path fill="#6B0D12" d="M56,20.4v1H43.2c0,0-6.3-1.3-6.1-6.7c0,0,0.2,5.7,6,5.7H56z" data-v-8f2bc59e${_scopeId}></path><path opacity="0.5" fill="#FFFFFF" enable-background="new" d="M37.1,0v14.6c0,1.7,1.1,5.8,6.1,5.8H56L37.1,0z" data-v-8f2bc59e${_scopeId}></path></g><path fill="#FFFFFF" d="M14.9,49h-3.3v4.1c0,0.4-0.3,0.7-0.8,0.7c-0.4,0-0.7-0.3-0.7-0.7V42.9c0-0.6,0.5-1.1,1.1-1.1h3.7
                      c2.4,0,3.8,1.7,3.8,3.6C18.7,47.4,17.3,49,14.9,49z M14.8,43.1h-3.2v4.6h3.2c1.4,0,2.4-0.9,2.4-2.3C17.2,44,16.2,43.1,14.8,43.1z
                       M25.2,53.8h-3c-0.6,0-1.1-0.5-1.1-1.1v-9.8c0-0.6,0.5-1.1,1.1-1.1h3c3.7,0,6.2,2.6,6.2,6C31.4,51.2,29,53.8,25.2,53.8z M25.2,43.1
                      h-2.6v9.3h2.6c2.9,0,4.6-2.1,4.6-4.7C29.9,45.2,28.2,43.1,25.2,43.1z M41.5,43.1h-5.8V47h5.7c0.4,0,0.6,0.3,0.6,0.7
                      s-0.3,0.6-0.6,0.6h-5.7v4.8c0,0.4-0.3,0.7-0.8,0.7c-0.4,0-0.7-0.3-0.7-0.7V42.9c0-0.6,0.5-1.1,1.1-1.1h6.2c0.4,0,0.6,0.3,0.6,0.7
                      C42.2,42.8,41.9,43.1,41.5,43.1z" data-v-8f2bc59e${_scopeId}></path></svg></div>`);
              } else if (((_b2 = performer_file.file_name) == null ? void 0 : _b2.slice(0 - 3)) === "doc" || ((_c2 = performer_file.file_name) == null ? void 0 : _c2.slice(0 - 4)) === "docs") {
                _push2(`<div data-v-8f2bc59e${_scopeId}><svg width="60px" height="60px" viewBox="-4 0 64 64" xmlns="http://www.w3.org/2000/svg" data-v-8f2bc59e${_scopeId}><g fill-rule="evenodd" data-v-8f2bc59e${_scopeId}><path d="m5.11 0a5.07 5.07 0 0 0 -5.11 5v53.88a5.07 5.07 0 0 0 5.11 5.12h45.78a5.07 5.07 0 0 0 5.11-5.12v-38.6l-18.94-20.28z" fill="#107cad" data-v-8f2bc59e${_scopeId}></path><path d="m56 20.35v1h-12.82s-6.31-1.26-6.13-6.71c0 0 .21 5.71 6 5.71z" fill="#084968" data-v-8f2bc59e${_scopeId}></path><path d="m37.07 0v14.56a5.78 5.78 0 0 0 6.11 5.79h12.82z" fill="#90d0fe" opacity=".5" data-v-8f2bc59e${_scopeId}></path></g><path d="m14.24 53.86h-3a1.08 1.08 0 0 1 -1.08-1.08v-9.85a1.08 1.08 0 0 1 1.08-1.08h3a6 6 0 1 1 0 12zm0-10.67h-2.61v9.34h2.61a4.41 4.41 0 0 0 4.61-4.66 4.38 4.38 0 0 0 -4.61-4.68zm14.42 10.89a5.86 5.86 0 0 1 -6-6.21 6 6 0 1 1 11.92 0 5.87 5.87 0 0 1 -5.92 6.21zm0-11.09c-2.7 0-4.41 2.07-4.41 4.88s1.71 4.88 4.41 4.88 4.41-2.09 4.41-4.88-1.72-4.87-4.41-4.87zm18.45.38a.75.75 0 0 1 .2.52.71.71 0 0 1 -.7.72.64.64 0 0 1 -.51-.24 4.06 4.06 0 0 0 -3-1.38 4.61 4.61 0 0 0 -4.63 4.88 4.63 4.63 0 0 0 4.63 4.88 4 4 0 0 0 3-1.37.7.7 0 0 1 .51-.24.72.72 0 0 1 .7.74.78.78 0 0 1 -.2.51 5.33 5.33 0 0 1 -4 1.69 6.22 6.22 0 0 1 0-12.43 5.26 5.26 0 0 1 4 1.72z" fill="#ffffff" data-v-8f2bc59e${_scopeId}></path></svg></div>`);
              } else if (((_d2 = performer_file.file_name) == null ? void 0 : _d2.slice(0 - 3)) === "xls" || ((_e2 = performer_file.file_name) == null ? void 0 : _e2.slice(0 - 4)) === "xlsx") {
                _push2(`<div data-v-8f2bc59e${_scopeId}><svg width="60px" height="60px" viewBox="-4 0 64 64" xmlns="http://www.w3.org/2000/svg" data-v-8f2bc59e${_scopeId}><path d="M5.112.006c-2.802 0-5.073 2.273-5.073 5.074v53.841c0 2.803 2.271 5.074 5.073 5.074h45.774c2.801 0 5.074-2.271 5.074-5.074v-38.605l-18.902-20.31h-31.946z" fill-rule="evenodd" clip-rule="evenodd" fill="#45B058" data-v-8f2bc59e${_scopeId}></path><path d="M19.429 53.938c-.216 0-.415-.09-.54-.27l-3.728-4.97-3.745 4.97c-.126.18-.324.27-.54.27-.396 0-.72-.306-.72-.72 0-.144.035-.306.144-.432l3.89-5.131-3.619-4.826c-.09-.126-.145-.27-.145-.414 0-.342.288-.72.721-.72.216 0 .432.108.576.288l3.438 4.628 3.438-4.646c.127-.18.324-.27.541-.27.378 0 .738.306.738.72 0 .144-.036.288-.127.414l-3.619 4.808 3.891 5.149c.09.126.125.27.125.414 0 .396-.324.738-.719.738zm9.989-.126h-5.455c-.595 0-1.081-.486-1.081-1.08v-10.317c0-.396.324-.72.774-.72.396 0 .721.324.721.72v10.065h5.041c.359 0 .648.288.648.648 0 .396-.289.684-.648.684zm6.982.216c-1.782 0-3.188-.594-4.213-1.495-.162-.144-.234-.342-.234-.54 0-.36.27-.756.702-.756.144 0 .306.036.433.144.828.738 1.98 1.314 3.367 1.314 2.143 0 2.826-1.152 2.826-2.071 0-3.097-7.111-1.386-7.111-5.672 0-1.98 1.764-3.331 4.123-3.331 1.548 0 2.881.468 3.853 1.278.162.144.253.342.253.54 0 .36-.307.72-.703.72-.145 0-.307-.054-.432-.162-.883-.72-1.98-1.044-3.079-1.044-1.44 0-2.467.774-2.467 1.909 0 2.701 7.112 1.152 7.112 5.636 0 1.748-1.188 3.53-4.43 3.53z" fill="#ffffff" data-v-8f2bc59e${_scopeId}></path><path d="M55.953 20.352v1h-12.801s-6.312-1.26-6.127-6.707c0 0 .207 5.707 6.002 5.707h12.926z" fill-rule="evenodd" clip-rule="evenodd" fill="#349C42" data-v-8f2bc59e${_scopeId}></path><path d="M37.049 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.801l-18.905-20.352z" opacity=".5" fill-rule="evenodd" clip-rule="evenodd" fill="#ffffff" data-v-8f2bc59e${_scopeId}></path></svg></div>`);
              } else if (((_f2 = performer_file.file_name) == null ? void 0 : _f2.slice(0 - 3)) === "txt") {
                _push2(`<div data-v-8f2bc59e${_scopeId}><svg width="60px" height="60px" viewBox="-4 0 64 64" xmlns="http://www.w3.org/2000/svg" data-v-8f2bc59e${_scopeId}><path d="M5.151-.036c-2.803 0-5.074 2.272-5.074 5.074v53.841c0 2.803 2.271 5.074 5.074 5.074h45.774c2.801 0 5.074-2.271 5.074-5.074v-38.605l-18.902-20.31h-31.946z" fill-rule="evenodd" clip-rule="evenodd" fill="#F9CA06" data-v-8f2bc59e${_scopeId}></path><g fill-rule="evenodd" clip-rule="evenodd" data-v-8f2bc59e${_scopeId}><path d="M56.008 20.316v1h-12.799s-6.312-1.26-6.129-6.708c0 0 .208 5.708 6.004 5.708h12.924z" fill="#F7BC04" data-v-8f2bc59e${_scopeId}></path><path d="M37.106-.036v14.561c0 1.656 1.104 5.792 6.104 5.792h12.799l-18.903-20.353z" opacity=".5" fill="#ffffff" data-v-8f2bc59e${_scopeId}></path></g><path d="M18.763 43.045h-3.277v10.047c0 .414-.324.738-.756.738-.414 0-.738-.324-.738-.738v-10.047h-3.259c-.36 0-.648-.288-.648-.684 0-.36.288-.648.648-.648h8.03c.36 0 .648.288.648.685 0 .359-.288.647-.648.647zm11.7 10.803c-.216 0-.415-.089-.541-.27l-3.727-4.97-3.745 4.97c-.126.181-.324.27-.54.27-.396 0-.72-.306-.72-.72 0-.144.036-.306.144-.432l3.889-5.131-3.619-4.826c-.09-.126-.144-.27-.144-.414 0-.343.288-.721.72-.721.216 0 .432.108.576.288l3.439 4.627 3.439-4.646c.126-.18.324-.27.541-.27.378 0 .738.306.738.721 0 .144-.036.288-.126.414l-3.619 4.808 3.89 5.149c.09.126.126.27.126.415 0 .396-.325.738-.721.738zm11.195-10.803h-3.277v10.047c0 .414-.323.738-.756.738-.414 0-.738-.324-.738-.738v-10.047h-3.259c-.36 0-.648-.288-.648-.684 0-.36.288-.648.648-.648h8.03c.36 0 .648.288.648.685.001.359-.287.647-.648.647z" fill="#ffffff" data-v-8f2bc59e${_scopeId}></path></svg></div>`);
              } else if (((_g2 = performer_file.file_name) == null ? void 0 : _g2.slice(0 - 3)) === "svg" || ((_h2 = performer_file.file_name) == null ? void 0 : _h2.slice(0 - 3)) === "png" || ((_i2 = performer_file.file_name) == null ? void 0 : _i2.slice(0 - 3)) === "jpeg" || ((_j2 = performer_file.file_name) == null ? void 0 : _j2.slice(0 - 3)) === "jpg" || ((_k2 = performer_file.file_name) == null ? void 0 : _k2.slice(0 - 4)) === "webp") {
                _push2(`<div data-v-8f2bc59e${_scopeId}><svg width="60px" height="60px" viewBox="-4 0 64 64" xmlns="http://www.w3.org/2000/svg" data-v-8f2bc59e${_scopeId}><g fill-rule="evenodd" clip-rule="evenodd" data-v-8f2bc59e${_scopeId}><path d="M5.125.042c-2.801 0-5.072 2.273-5.072 5.074v53.841c0 2.803 2.271 5.073 5.072 5.073h45.775c2.801 0 5.074-2.271 5.074-5.073v-38.604l-18.904-20.311h-31.945z" fill="#49C9A7" data-v-8f2bc59e${_scopeId}></path><path d="M55.977 20.352v1h-12.799s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z" fill="#37BB91" data-v-8f2bc59e${_scopeId}></path><path d="M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799l-18.903-20.352z" opacity=".5" fill="#ffffff" data-v-8f2bc59e${_scopeId}></path></g><path d="M10.119 53.739v-20.904h20.906v20.904h-20.906zm18.799-18.843h-16.691v12.6h16.691v-12.6zm-9.583 8.384l3.909-5.256 1.207 2.123 1.395-.434.984 5.631h-13.082l3.496-3.32 2.091 1.256zm-3.856-3.64c-.91 0-1.649-.688-1.649-1.538 0-.849.739-1.538 1.649-1.538.912 0 1.65.689 1.65 1.538 0 .85-.738 1.538-1.65 1.538z" fill-rule="evenodd" clip-rule="evenodd" fill="#ffffff" data-v-8f2bc59e${_scopeId}></path></svg></div>`);
              } else if (((_l2 = performer_file.file_name) == null ? void 0 : _l2.slice(0 - 3)) === "rar" || ((_m = performer_file.file_name) == null ? void 0 : _m.slice(0 - 3)) === "zip") {
                _push2(`<div data-v-8f2bc59e${_scopeId}><svg width="60px" height="60px" viewBox="-4 0 64 64" xmlns="http://www.w3.org/2000/svg" data-v-8f2bc59e${_scopeId}><path d="M5.113-.026c-2.803 0-5.074 2.272-5.074 5.074v53.841c0 2.803 2.271 5.074 5.074 5.074h45.773c2.801 0 5.074-2.271 5.074-5.074v-38.605l-18.901-20.31h-31.946z" fill-rule="evenodd" clip-rule="evenodd" fill="#8199AF" data-v-8f2bc59e${_scopeId}></path><g fill-rule="evenodd" clip-rule="evenodd" data-v-8f2bc59e${_scopeId}><path d="M55.977 20.352v1h-12.799s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z" fill="#617F9B" data-v-8f2bc59e${_scopeId}></path><path d="M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799l-18.903-20.352z" opacity=".5" fill="#ffffff" data-v-8f2bc59e${_scopeId}></path></g><path d="M18.438 53.906h-7.581c-.378 0-.756-.342-.756-.828 0-.18.054-.36.162-.504l6.68-9.345h-6.212c-.36 0-.648-.288-.648-.684 0-.36.288-.648.648-.648h7.454c.378 0 .756.342.756.829 0 .18-.054.36-.162.504l-6.68 9.345h6.338c.36 0 .648.288.648.648.001.395-.287.683-.647.683zm4.012.108c-.414 0-.738-.324-.738-.738v-10.767c0-.396.324-.721.774-.721.396 0 .72.324.72.721v10.767c0 .413-.324.738-.756.738zm8.839-4.879h-3.331v4.141c0 .414-.324.738-.756.738-.414 0-.738-.324-.738-.738v-10.299c0-.594.486-1.081 1.081-1.081h3.745c2.413 0 3.763 1.657 3.763 3.619s-1.387 3.62-3.764 3.62zm-.18-5.906h-3.151v4.573h3.151c1.422 0 2.395-.936 2.395-2.287-.001-1.35-.973-2.286-2.395-2.286z" fill="#ffffff" data-v-8f2bc59e${_scopeId}></path></svg></div>`);
              } else if (((_n = unref(currentTask).task.performer_file) == null ? void 0 : _n.length) > 0) {
                _push2(`<div data-v-8f2bc59e${_scopeId}><svg width="60px" height="60px" viewBox="-4 0 64 64" xmlns="http://www.w3.org/2000/svg" data-v-8f2bc59e${_scopeId}><g fill-rule="evenodd" clip-rule="evenodd" data-v-8f2bc59e${_scopeId}><path d="M5.113.007c-2.803 0-5.074 2.271-5.074 5.074v53.84c0 2.803 2.271 5.074 5.074 5.074h45.774c2.801 0 5.074-2.271 5.074-5.074v-38.606l-18.903-20.308h-31.945z" fill="#8199AF" data-v-8f2bc59e${_scopeId}></path><path d="M55.976 20.352v1h-12.799s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z" fill="#617F9B" data-v-8f2bc59e${_scopeId}></path><path d="M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799l-18.903-20.352z" opacity=".5" fill="#ffffff" data-v-8f2bc59e${_scopeId}></path></g></svg></div>`);
              } else {
                _push2(`<div data-v-8f2bc59e${_scopeId}><svg width="60px" height="60px" viewBox="-4 0 64 64" xmlns="http://www.w3.org/2000/svg" data-v-8f2bc59e${_scopeId}><g fill-rule="evenodd" clip-rule="evenodd" data-v-8f2bc59e${_scopeId}><path d="M5.113.007c-2.803 0-5.074 2.271-5.074 5.074v53.84c0 2.803 2.271 5.074 5.074 5.074h45.774c2.801 0 5.074-2.271 5.074-5.074v-38.606l-18.903-20.308h-31.945z" fill="#8199AF" data-v-8f2bc59e${_scopeId}></path><path d="M55.976 20.352v1h-12.799s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z" fill="#617F9B" data-v-8f2bc59e${_scopeId}></path><path d="M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799l-18.903-20.352z" opacity=".5" fill="#ffffff" data-v-8f2bc59e${_scopeId}></path></g></svg></div>`);
              }
              _push2(`</div><p class="mt-2" data-v-8f2bc59e${_scopeId}>${ssrInterpolate(((_o = performer_file.file_name) == null ? void 0 : _o.length) > 10 ? performer_file.file_name.slice(0, 10) + "..." : performer_file.file_name)}</p></a>`);
            });
            _push2(`<!--]--></div>`);
            if (((_b = unref(currentTask).task.performer_files_urls) == null ? void 0 : _b.length) === 0) {
              _push2(`<div class="w-full text-center mb-4" data-v-8f2bc59e${_scopeId}><p class="tracking-widest" data-v-8f2bc59e${_scopeId}>${ssrInterpolate(_ctx.$t("Файлы отсутствуют"))}</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(currentTask).task.status === "performing" && ((_c = unref(currentTask).task.main_performer) == null ? void 0 : _c.id) === unref(currentUser).user.id) {
              _push2(`<div data-v-8f2bc59e${_scopeId}><div class="flex flex-col items-center border dark:border-gray-500 rounded-lg p-4 w-4/212 mx-auto" data-v-8f2bc59e${_scopeId}><p class="mb-4" data-v-8f2bc59e${_scopeId}>${ssrInterpolate(_ctx.$t("Прикрепить файлы"))}</p>`);
              _push2(ssrRenderComponent(_sfc_main$4, {
                type: "file",
                onInput: ($event) => files.value = $event.target.files
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="text-center mt-10" data-v-8f2bc59e${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$5, {
                type: "success",
                class: "px-4 py-2 rounded-full",
                onClick: () => {
                }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("Отправить"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("Отправить")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<p class="mt-2 text-gray-400" data-v-8f2bc59e${_scopeId}>${ssrInterpolate(_ctx.$t("Отправлять файлы может только"))} <span class="font-bold dark:text-gray-300 text-black tracking-widest" data-v-8f2bc59e${_scopeId}>${ssrInterpolate(((_d = unref(currentTask).task.main_performer) == null ? void 0 : _d.first_name) + " " + ((_e = unref(currentTask).task.main_performer) == null ? void 0 : _e.last_name))}</span></p><p class="mt-2 text-gray-400" data-v-8f2bc59e${_scopeId}>${ssrInterpolate(_ctx.$t("После отправления файлов, статус поменяется на"))} <span class="text-semiCyan font-bold tracking-widest" data-v-8f2bc59e${_scopeId}>(${ssrInterpolate(_ctx.$t("Просматривается"))})</span></p></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</form></div></div><div class="w-4/12 max-lg:w-full overflow-hidden h-1/2 max-sm:p-4 border p-10 max-2xl:p-6 my-6 border-gray-400 rounded-lg" data-v-8f2bc59e${_scopeId}><div class="text-center mb-4 tracking-widest text-sm text-gray-400" data-v-8f2bc59e${_scopeId}><p data-v-8f2bc59e${_scopeId}>${ssrInterpolate(_ctx.$t("Автор задания"))}</p><p data-v-8f2bc59e${_scopeId}>${ssrInterpolate(unref(currentTask).task.author_name)}</p></div>`);
            _push2(ssrRenderComponent(_sfc_main$3, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("Исполнители"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("Исполнители")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-2" data-v-8f2bc59e${_scopeId}><p class="text-sm" data-v-8f2bc59e${_scopeId}>${ssrInterpolate(_ctx.$t("Главный исполнитель"))}</p>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: `/base/users/${(_f = unref(currentTask).task.main_performer) == null ? void 0 : _f.id}`,
              class: "flex mt-4 max-lg:justify-center gap-x-3 items-center border border-gray-400 rounded-lg p-2 dark:hover:bg-gray-500 hover:bg-gray-200 transition-all duration-200"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b2, _c2, _d2, _e2, _f2;
                if (_push3) {
                  _push3(`<div class="max-md:w-full" data-v-8f2bc59e${_scopeId2}><img class="w-[60px] h-[60px] rounded-full"${ssrRenderAttr("src", unref(currentUser).get_server_domain + ((_a2 = unref(currentTask).task.main_performer) == null ? void 0 : _a2.photo_url))} alt="" data-v-8f2bc59e${_scopeId2}></div><p data-v-8f2bc59e${_scopeId2}>${ssrInterpolate(((_b2 = unref(currentTask).task.main_performer) == null ? void 0 : _b2.first_name) + " " + ((_c2 = unref(currentTask).task.main_performer) == null ? void 0 : _c2.last_name))}</p>`);
                } else {
                  return [
                    createVNode("div", { class: "max-md:w-full" }, [
                      createVNode("img", {
                        class: "w-[60px] h-[60px] rounded-full",
                        src: unref(currentUser).get_server_domain + ((_d2 = unref(currentTask).task.main_performer) == null ? void 0 : _d2.photo_url),
                        alt: ""
                      }, null, 8, ["src"])
                    ]),
                    createVNode("p", null, toDisplayString(((_e2 = unref(currentTask).task.main_performer) == null ? void 0 : _e2.first_name) + " " + ((_f2 = unref(currentTask).task.main_performer) == null ? void 0 : _f2.last_name)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div data-v-8f2bc59e${_scopeId}><p class="text-sm mt-6" data-v-8f2bc59e${_scopeId}>${ssrInterpolate(_ctx.$t("Список исполнителей"))}</p>`);
            if (unref(currentTask).task.status === "performing" && unref(currentTask).task.author_id === unref(currentUser).user.id) {
              _push2(`<div class="mt-4 flex gap-x-6 justify-around" data-v-8f2bc59e${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$5, {
                class: "w-6/12 dark:hover:bg-gray-500 hover:bg-gray-300 !text-black dark:!text-white rounded-full border dark:border-gray-500 transition-all duration-200",
                onClick: ($event) => {
                  __props.showAddPerformer = true;
                  unref(updateForm).department.participants = unref(department).get_all_department.participants.map((e) => {
                    var _a2;
                    e.value = ((_a2 = unref(updateForm).participants) == null ? void 0 : _a2.filter((i) => i.id == e.id).length) != 0;
                  });
                }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("Добавить"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("Добавить")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="mt-4 flex flex-col max-lg:w-full max-lg:gap-x-4 max-h-[500px] h-full gap-y-4 overflow-y-auto px-2" data-v-8f2bc59e${_scopeId}><!--[-->`);
            ssrRenderList(unref(currentTask).task.performers_list, (user) => {
              _push2(`<div class="flex relative items-center p-2 max-lg:w-full gap-x-6 border rounded-lg border-gray-400 dark:hover:bg-gray-500 hover:bg-gray-200 transition-all duration-200" data-v-8f2bc59e${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: `/base/users/${user.id}`,
                class: "w-11/12 flex items-center gap-x-4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img class="w-[60px] h-[60px] rounded-full"${ssrRenderAttr("src", unref(currentUser).get_server_domain + (user == null ? void 0 : user.photo_url))} alt="" data-v-8f2bc59e${_scopeId2}><p class="" data-v-8f2bc59e${_scopeId2}>${ssrInterpolate(user.last_name.slice(0, 1) + ". " + user.first_name)}</p>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "w-[60px] h-[60px] rounded-full",
                        src: unref(currentUser).get_server_domain + (user == null ? void 0 : user.photo_url),
                        alt: ""
                      }, null, 8, ["src"]),
                      createVNode("p", { class: "" }, toDisplayString(user.last_name.slice(0, 1) + ". " + user.first_name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              if (unref(currentTask).task.status === "performing" && unref(currentTask).task.author_id === unref(currentUser).user.id) {
                _push2(`<div class="absolute cursor-pointer dark:stroke-white stroke-black right-0 px-2 py-1 hover:bg-red-400 max-sm:hidden transition-all duration-200 rounded-l-lg hover:stroke-white" name="fade" data-v-8f2bc59e${_scopeId}><div data-v-8f2bc59e${_scopeId}><svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-8f2bc59e${_scopeId}><path d="M10 11V17" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" data-v-8f2bc59e${_scopeId}></path><path d="M14 11V17" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" data-v-8f2bc59e${_scopeId}></path><path d="M4 7H20" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" data-v-8f2bc59e${_scopeId}></path><path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" data-v-8f2bc59e${_scopeId}></path><path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" data-v-8f2bc59e${_scopeId}></path></svg></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(currentTask).task.status === "performing" && unref(currentTask).task.author_id === unref(currentUser).user.id) {
                _push2(`<div class="absolute cursor-pointer dark:stroke-white stroke-black right-0 top-0 px-2 py-1 bg-red-400 hidden max-sm:block transition-all duration-200 rounded-tr-lg rounded-l-lg hover:stroke-white" name="fade" data-v-8f2bc59e${_scopeId}><div data-v-8f2bc59e${_scopeId}><p data-v-8f2bc59e${_scopeId}>X</p></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div></div></div>`);
            if (unref(currentTask).task.status === "watching" && unref(currentTask).task.author_id === unref(currentUser).user.id) {
              _push2(`<div class="flex flex-wrap gap-y-4 justify-center mb-10 gap-x-4" data-v-8f2bc59e${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$5, {
                class: "px-10 py-2 rounded-full",
                type: "danger",
                onClick: ($event) => __props.showCancelError = true
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("Отклонить"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("Отклонить")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$5, {
                class: "px-10 py-2 rounded-full",
                type: "success",
                onClick: ($event) => unref(currentTask).change_taskStatus({ id: unref(currentTask).task.id, task_status: "make-completed" })
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("Подтвердить"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("Подтвердить")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="absolute max-md:fixed max-md:top-0 max-md:bottom-6 max-md:items-end stroke-white flex items-center top-14 right-6 gap-x-6" data-v-8f2bc59e${_scopeId}><div class="rounded-full cursor-pointer bg-blueDarkSemiLight p-2" data-v-8f2bc59e${_scopeId}><svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-8f2bc59e${_scopeId}><path d="M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H10M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M19 9V10M9 17H11.5M9 13H14M9 9H10M14 21L16.025 20.595C16.2015 20.5597 16.2898 20.542 16.3721 20.5097C16.4452 20.4811 16.5147 20.4439 16.579 20.399C16.6516 20.3484 16.7152 20.2848 16.8426 20.1574L21 16C21.5523 15.4477 21.5523 14.5523 21 14C20.4477 13.4477 19.5523 13.4477 19 14L14.8426 18.1574C14.7152 18.2848 14.6516 18.3484 14.601 18.421C14.5561 18.4853 14.5189 18.5548 14.4903 18.6279C14.458 18.7102 14.4403 18.7985 14.405 18.975L14 21Z" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" data-v-8f2bc59e${_scopeId}></path></svg></div><div class="rounded-full cursor-pointer bg-red-400 p-2" data-v-8f2bc59e${_scopeId}><svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-8f2bc59e${_scopeId}><path d="M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" data-v-8f2bc59e${_scopeId}></path></svg></div></div>`);
            if (__props.showAddPerformer) {
              _push2(ssrRenderComponent(_sfc_main$6, {
                onShowModal: ($event) => __props.showAddPerformer = !__props.showAddPerformer
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$3, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$t("Добавление Исполнителей"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("Добавление Исполнителей")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    if (unref(currentUser).user.role_en === "company_admin" || unref(currentUser).user.role_en === "director" || unref(currentUser).user.role_en === "vice_director") {
                      _push3(`<form class="mt-6" data-v-8f2bc59e${_scopeId2}><div data-v-8f2bc59e${_scopeId2}><p data-v-8f2bc59e${_scopeId2}>${ssrInterpolate(_ctx.$t("Выберите департамент"))}</p><div class="flex flex-wrap max-md:justify-center gap-x-4 gap-y-4 my-6" data-v-8f2bc59e${_scopeId2}><!--[-->`);
                      ssrRenderList(unref(department).get_all_department.results, (item) => {
                        _push3(`<div class="${ssrRenderClass([{ "dark:bg-gray-500 bg-gray-200": unref(updateForm) === item }, "border cursor-pointer px-4 py-2 rounded-lg transition-all duration-200"])}" data-v-8f2bc59e${_scopeId2}>${ssrInterpolate(item.name)}</div>`);
                      });
                      _push3(`<!--]--></div></div><div data-v-8f2bc59e${_scopeId2}><p data-v-8f2bc59e${_scopeId2}>${ssrInterpolate(_ctx.$t("Выберите исполнителей"))}</p><div class="flex flex-wrap max-md:justify-center items-center gap-x-4 gap-y-4 my-6" data-v-8f2bc59e${_scopeId2}><!--[-->`);
                      ssrRenderList(unref(updateForm).participants, (performer) => {
                        _push3(ssrRenderComponent(TasksUserCheckbox, { item: performer }, null, _parent3, _scopeId2));
                      });
                      _push3(`<!--]--></div></div><div class="flex justify-center gap-x-10" data-v-8f2bc59e${_scopeId2}>`);
                      _push3(ssrRenderComponent(_sfc_main$5, {
                        class: "w-3/12 max-md:w-6/12 rounded-full py-2",
                        type: "danger",
                        onClick: ($event) => __props.showAddPerformer = false
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
                      _push3(ssrRenderComponent(_sfc_main$5, {
                        class: "w-3/12 max-md:w-6/12 rounded-full py-2",
                        type: "success"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(_ctx.$t("Добавить"))}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(_ctx.$t("Добавить")), 1)
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                      _push3(`</div></form>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      createVNode(_sfc_main$3, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("Добавление Исполнителей")), 1)
                        ]),
                        _: 1
                      }),
                      unref(currentUser).user.role_en === "company_admin" || unref(currentUser).user.role_en === "director" || unref(currentUser).user.role_en === "vice_director" ? (openBlock(), createBlock("form", {
                        key: 0,
                        class: "mt-6",
                        onSubmit: withModifiers(($event) => {
                          var _a2;
                          unref(currentTask).addUser_task({ id: unref(currentTask).task.id, performers: (_a2 = unref(updateForm).participants) == null ? void 0 : _a2.filter((e) => e.value).map((i) => i.id).join(",") });
                          __props.showAddPerformer = false;
                        }, ["prevent"])
                      }, [
                        createVNode("div", null, [
                          createVNode("p", null, toDisplayString(_ctx.$t("Выберите департамент")), 1),
                          createVNode("div", { class: "flex flex-wrap max-md:justify-center gap-x-4 gap-y-4 my-6" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(department).get_all_department.results, (item) => {
                              return openBlock(), createBlock("div", {
                                class: ["border cursor-pointer px-4 py-2 rounded-lg transition-all duration-200", { "dark:bg-gray-500 bg-gray-200": unref(updateForm) === item }],
                                onClick: ($event) => updateForm.value = item
                              }, toDisplayString(item.name), 11, ["onClick"]);
                            }), 256))
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode("p", null, toDisplayString(_ctx.$t("Выберите исполнителей")), 1),
                          createVNode(Transition, { name: "left-fade" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex flex-wrap max-md:justify-center items-center gap-x-4 gap-y-4 my-6" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(updateForm).participants, (performer) => {
                                  return openBlock(), createBlock(TasksUserCheckbox, { item: performer }, null, 8, ["item"]);
                                }), 256))
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "flex justify-center gap-x-10" }, [
                          createVNode(_sfc_main$5, {
                            class: "w-3/12 max-md:w-6/12 rounded-full py-2",
                            type: "danger",
                            onClick: ($event) => __props.showAddPerformer = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Отменить")), 1)
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_sfc_main$5, {
                            class: "w-3/12 max-md:w-6/12 rounded-full py-2",
                            type: "success"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Добавить")), 1)
                            ]),
                            _: 1
                          })
                        ])
                      ], 40, ["onSubmit"])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (__props.showCancelError) {
              _push2(ssrRenderComponent(_sfc_main$6, {
                class: "!w-[200px]",
                onShowModal: ($event) => __props.showCancelError = !__props.showCancelError
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$3, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$t("Предупреждение"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("Предупреждение")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<form class="mt-10" data-v-8f2bc59e${_scopeId2}><div data-v-8f2bc59e${_scopeId2}><p class="mb-4" data-v-8f2bc59e${_scopeId2}>${ssrInterpolate(_ctx.$t("Опишите причину отклонения"))}</p><textarea class="w-full resize-none h-[300px] p-4 border dark:border-none rounded-lg" data-v-8f2bc59e${_scopeId2}>${ssrInterpolate(unref(updateForm).comment)}</textarea></div><div class="flex justify-center gap-x-10" data-v-8f2bc59e${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$5, {
                      class: "py-2 w-2/12 rounded-full",
                      type: "danger",
                      onClick: ($event) => __props.showCancelError = false
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$t("Отмена"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("Отмена")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_sfc_main$5, {
                      class: "py-2 w-2/12 rounded-full",
                      type: "success"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$t("Подтвердить"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("Подтвердить")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div></form>`);
                  } else {
                    return [
                      createVNode(_sfc_main$3, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("Предупреждение")), 1)
                        ]),
                        _: 1
                      }),
                      createVNode("form", {
                        onSubmit: withModifiers(($event) => {
                          unref(currentTask).change_taskStatus({ task_status: "make-rejected", id: unref(currentTask).task.id, comment: unref(updateForm).comment });
                          __props.showCancelError = false;
                        }, ["prevent"]),
                        class: "mt-10"
                      }, [
                        createVNode("div", null, [
                          createVNode("p", { class: "mb-4" }, toDisplayString(_ctx.$t("Опишите причину отклонения")), 1),
                          withDirectives(createVNode("textarea", {
                            class: "w-full resize-none h-[300px] p-4 border dark:border-none rounded-lg",
                            "onUpdate:modelValue": ($event) => unref(updateForm).comment = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(updateForm).comment]
                          ])
                        ]),
                        createVNode("div", { class: "flex justify-center gap-x-10" }, [
                          createVNode(_sfc_main$5, {
                            class: "py-2 w-2/12 rounded-full",
                            type: "danger",
                            onClick: ($event) => __props.showCancelError = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Отмена")), 1)
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_sfc_main$5, {
                            class: "py-2 w-2/12 rounded-full",
                            type: "success"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Подтвердить")), 1)
                            ]),
                            _: 1
                          })
                        ])
                      ], 40, ["onSubmit"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (__props.showDeleteTask) {
              _push2(ssrRenderComponent(_sfc_main$6, {
                onShowModal: ($event) => __props.showDeleteTask = !__props.showDeleteTask
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$3, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$t("Предупреждение"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("Предупреждение")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<p class="text-center mt-2 text-base tracking-widest" data-v-8f2bc59e${_scopeId2}>${ssrInterpolate(_ctx.$t("Удалённые задания не подлежат восстановке"))}</p><div class="my-6" data-v-8f2bc59e${_scopeId2}><p class="text-center tracking-wider" data-v-8f2bc59e${_scopeId2}>${ssrInterpolate(_ctx.$t("Вы уверены что хотите удалить?"))}</p><div class="flex gap-4 mt-2 justify-center" data-v-8f2bc59e${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$5, {
                      type: "danger",
                      class: "py-2 px-10 rounded-full",
                      onClick: ($event) => __props.showDeleteTask = false
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
                    _push3(ssrRenderComponent(_sfc_main$5, {
                      type: "success",
                      class: "py-2 px-10 rounded-full",
                      onClick: ($event) => {
                        unref(currentTask).delete_task({ id: unref(currentTask).task.id }, _ctx.$router);
                      }
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$t("Удалить"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("Удалить")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else {
                    return [
                      createVNode(_sfc_main$3, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("Предупреждение")), 1)
                        ]),
                        _: 1
                      }),
                      createVNode("p", { class: "text-center mt-2 text-base tracking-widest" }, toDisplayString(_ctx.$t("Удалённые задания не подлежат восстановке")), 1),
                      createVNode("div", { class: "my-6" }, [
                        createVNode("p", { class: "text-center tracking-wider" }, toDisplayString(_ctx.$t("Вы уверены что хотите удалить?")), 1),
                        createVNode("div", { class: "flex gap-4 mt-2 justify-center" }, [
                          createVNode(_sfc_main$5, {
                            type: "danger",
                            class: "py-2 px-10 rounded-full",
                            onClick: ($event) => __props.showDeleteTask = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Отменить")), 1)
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_sfc_main$5, {
                            type: "success",
                            class: "py-2 px-10 rounded-full",
                            onClick: ($event) => {
                              unref(currentTask).delete_task({ id: unref(currentTask).task.id }, _ctx.$router);
                            }
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Удалить")), 1)
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "w-full mx-auto flex justify-center" }, [
                createVNode("div", {
                  class: ["absolute top-10 flex justify-center w-2/12 max-lg:w-4/12 h-4 rounded-b-full", { "bg-orange-500": unref(currentTask).task.status === "performing", "bg-red-500": unref(currentTask).task.status === "rejected", "bg-green-500": unref(currentTask).task.status === "completed", "bg-blue-500": unref(currentTask).task.status === "watching" }]
                }, null, 2),
                createVNode("p", { class: "text-sm text-gray-400" }, toDisplayString(_ctx.$t("Последние изменения")) + " " + toDisplayString(new Date(unref(currentTask).task.updated_at).toLocaleDateString() + ", " + new Date(unref(currentTask).task.updated_at).toLocaleTimeString()), 1)
              ]),
              createVNode("div", { class: "flex items-center gap-x-4" }, [
                createVNode(_sfc_main$2, { "breadcrumb-link": "/base/tasks" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("Список заданий")), 1)
                  ]),
                  _: 1
                }),
                createVNode("div", null, [
                  (openBlock(), createBlock("svg", {
                    width: "15px",
                    height: "15px",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      class: "dark:stroke-white stroke-black",
                      d: "M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5",
                      "stroke-width": "2",
                      "stroke-linecap": "round"
                    })
                  ]))
                ]),
                createVNode(_sfc_main$2, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(currentTask).task.title), 1)
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "flex items-center justify-center gap-x-10" }, [
                createVNode("p", { class: "text-[12px] text-gray-400" }, toDisplayString(new Date(unref(currentTask).task.created_at).toLocaleDateString()), 1),
                createVNode(_sfc_main$3, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(currentTask).task.title), 1)
                  ]),
                  _: 1
                }),
                createVNode("p", { class: "text-[12px] text-gray-400" }, toDisplayString(new Date(unref(currentTask).task.deadline).toLocaleDateString()), 1)
              ]),
              createVNode("div", { class: "flex mx-6 max-sm:mx-0 gap-x-10 max-lg:flex-col" }, [
                createVNode("div", { class: "my-10 w-10/12 max-lg:w-full" }, [
                  createVNode("div", null, [
                    createVNode(_sfc_main$3, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("Описание")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "w-full mx-auto border p-10 my-6 border-gray-400 rounded-lg" }, toDisplayString(unref(currentTask).task.description), 1)
                  ]),
                  createVNode("div", null, [
                    createVNode(_sfc_main$3, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("Прикреплённые файлы")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "w-full flex flex-wrap gap-x-4 gap-y-2 items-center mx-auto border p-10 my-6 border-gray-400 rounded-lg" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(currentTask).task.author_files_urls, (files2) => {
                        var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m, _n, _o, _p;
                        return openBlock(), createBlock("a", {
                          class: "flex dark:hover:bg-gray-700 hover:bg-gray-100 rounded-lg p-2 transition-all flex-col items-center",
                          href: unref(currentUser).get_server_domain + files2.file_url,
                          download: files2.file_name,
                          title: files2.file_name
                        }, [
                          createVNode("div", null, [
                            ((_a2 = files2.file_name) == null ? void 0 : _a2.slice(0 - 3)) === "pdf" ? (openBlock(), createBlock("div", { key: 0 }, [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "60px",
                                height: "60px",
                                viewBox: "0 0 56 64",
                                "enable-background": "new 0 0 56 64",
                                "xml:space": "preserve"
                              }, [
                                createVNode("g", null, [
                                  createVNode("path", {
                                    fill: "#8C181A",
                                    d: "M5.1,0C2.3,0,0,2.3,0,5.1v53.8C0,61.7,2.3,64,5.1,64h45.8c2.8,0,5.1-2.3,5.1-5.1V20.3L37.1,0H5.1z"
                                  }),
                                  createVNode("path", {
                                    fill: "#6B0D12",
                                    d: "M56,20.4v1H43.2c0,0-6.3-1.3-6.1-6.7c0,0,0.2,5.7,6,5.7H56z"
                                  }),
                                  createVNode("path", {
                                    opacity: "0.5",
                                    fill: "#FFFFFF",
                                    "enable-background": "new",
                                    d: "M37.1,0v14.6c0,1.7,1.1,5.8,6.1,5.8H56L37.1,0z"
                                  })
                                ]),
                                createVNode("path", {
                                  fill: "#FFFFFF",
                                  d: "M14.9,49h-3.3v4.1c0,0.4-0.3,0.7-0.8,0.7c-0.4,0-0.7-0.3-0.7-0.7V42.9c0-0.6,0.5-1.1,1.1-1.1h3.7\r\n                          c2.4,0,3.8,1.7,3.8,3.6C18.7,47.4,17.3,49,14.9,49z M14.8,43.1h-3.2v4.6h3.2c1.4,0,2.4-0.9,2.4-2.3C17.2,44,16.2,43.1,14.8,43.1z\r\n                           M25.2,53.8h-3c-0.6,0-1.1-0.5-1.1-1.1v-9.8c0-0.6,0.5-1.1,1.1-1.1h3c3.7,0,6.2,2.6,6.2,6C31.4,51.2,29,53.8,25.2,53.8z M25.2,43.1\r\n                          h-2.6v9.3h2.6c2.9,0,4.6-2.1,4.6-4.7C29.9,45.2,28.2,43.1,25.2,43.1z M41.5,43.1h-5.8V47h5.7c0.4,0,0.6,0.3,0.6,0.7\r\n                          s-0.3,0.6-0.6,0.6h-5.7v4.8c0,0.4-0.3,0.7-0.8,0.7c-0.4,0-0.7-0.3-0.7-0.7V42.9c0-0.6,0.5-1.1,1.1-1.1h6.2c0.4,0,0.6,0.3,0.6,0.7\r\n                          C42.2,42.8,41.9,43.1,41.5,43.1z"
                                })
                              ]))
                            ])) : ((_b2 = files2.file_name) == null ? void 0 : _b2.slice(0 - 3)) === "doc" || ((_c2 = files2.file_name) == null ? void 0 : _c2.slice(0 - 4)) === "docx" ? (openBlock(), createBlock("div", { key: 1 }, [
                              (openBlock(), createBlock("svg", {
                                width: "60px",
                                height: "60px",
                                viewBox: "-4 0 64 64",
                                xmlns: "http://www.w3.org/2000/svg"
                              }, [
                                createVNode("g", { "fill-rule": "evenodd" }, [
                                  createVNode("path", {
                                    d: "m5.11 0a5.07 5.07 0 0 0 -5.11 5v53.88a5.07 5.07 0 0 0 5.11 5.12h45.78a5.07 5.07 0 0 0 5.11-5.12v-38.6l-18.94-20.28z",
                                    fill: "#107cad"
                                  }),
                                  createVNode("path", {
                                    d: "m56 20.35v1h-12.82s-6.31-1.26-6.13-6.71c0 0 .21 5.71 6 5.71z",
                                    fill: "#084968"
                                  }),
                                  createVNode("path", {
                                    d: "m37.07 0v14.56a5.78 5.78 0 0 0 6.11 5.79h12.82z",
                                    fill: "#90d0fe",
                                    opacity: ".5"
                                  })
                                ]),
                                createVNode("path", {
                                  d: "m14.24 53.86h-3a1.08 1.08 0 0 1 -1.08-1.08v-9.85a1.08 1.08 0 0 1 1.08-1.08h3a6 6 0 1 1 0 12zm0-10.67h-2.61v9.34h2.61a4.41 4.41 0 0 0 4.61-4.66 4.38 4.38 0 0 0 -4.61-4.68zm14.42 10.89a5.86 5.86 0 0 1 -6-6.21 6 6 0 1 1 11.92 0 5.87 5.87 0 0 1 -5.92 6.21zm0-11.09c-2.7 0-4.41 2.07-4.41 4.88s1.71 4.88 4.41 4.88 4.41-2.09 4.41-4.88-1.72-4.87-4.41-4.87zm18.45.38a.75.75 0 0 1 .2.52.71.71 0 0 1 -.7.72.64.64 0 0 1 -.51-.24 4.06 4.06 0 0 0 -3-1.38 4.61 4.61 0 0 0 -4.63 4.88 4.63 4.63 0 0 0 4.63 4.88 4 4 0 0 0 3-1.37.7.7 0 0 1 .51-.24.72.72 0 0 1 .7.74.78.78 0 0 1 -.2.51 5.33 5.33 0 0 1 -4 1.69 6.22 6.22 0 0 1 0-12.43 5.26 5.26 0 0 1 4 1.72z",
                                  fill: "#ffffff"
                                })
                              ]))
                            ])) : ((_d2 = files2.file_name) == null ? void 0 : _d2.slice(0 - 3)) === "xls" || ((_e2 = files2.file_name) == null ? void 0 : _e2.slice(0 - 4)) === "xlsx" ? (openBlock(), createBlock("div", { key: 2 }, [
                              (openBlock(), createBlock("svg", {
                                width: "60px",
                                height: "60px",
                                viewBox: "-4 0 64 64",
                                xmlns: "http://www.w3.org/2000/svg"
                              }, [
                                createVNode("path", {
                                  d: "M5.112.006c-2.802 0-5.073 2.273-5.073 5.074v53.841c0 2.803 2.271 5.074 5.073 5.074h45.774c2.801 0 5.074-2.271 5.074-5.074v-38.605l-18.902-20.31h-31.946z",
                                  "fill-rule": "evenodd",
                                  "clip-rule": "evenodd",
                                  fill: "#45B058"
                                }),
                                createVNode("path", {
                                  d: "M19.429 53.938c-.216 0-.415-.09-.54-.27l-3.728-4.97-3.745 4.97c-.126.18-.324.27-.54.27-.396 0-.72-.306-.72-.72 0-.144.035-.306.144-.432l3.89-5.131-3.619-4.826c-.09-.126-.145-.27-.145-.414 0-.342.288-.72.721-.72.216 0 .432.108.576.288l3.438 4.628 3.438-4.646c.127-.18.324-.27.541-.27.378 0 .738.306.738.72 0 .144-.036.288-.127.414l-3.619 4.808 3.891 5.149c.09.126.125.27.125.414 0 .396-.324.738-.719.738zm9.989-.126h-5.455c-.595 0-1.081-.486-1.081-1.08v-10.317c0-.396.324-.72.774-.72.396 0 .721.324.721.72v10.065h5.041c.359 0 .648.288.648.648 0 .396-.289.684-.648.684zm6.982.216c-1.782 0-3.188-.594-4.213-1.495-.162-.144-.234-.342-.234-.54 0-.36.27-.756.702-.756.144 0 .306.036.433.144.828.738 1.98 1.314 3.367 1.314 2.143 0 2.826-1.152 2.826-2.071 0-3.097-7.111-1.386-7.111-5.672 0-1.98 1.764-3.331 4.123-3.331 1.548 0 2.881.468 3.853 1.278.162.144.253.342.253.54 0 .36-.307.72-.703.72-.145 0-.307-.054-.432-.162-.883-.72-1.98-1.044-3.079-1.044-1.44 0-2.467.774-2.467 1.909 0 2.701 7.112 1.152 7.112 5.636 0 1.748-1.188 3.53-4.43 3.53z",
                                  fill: "#ffffff"
                                }),
                                createVNode("path", {
                                  d: "M55.953 20.352v1h-12.801s-6.312-1.26-6.127-6.707c0 0 .207 5.707 6.002 5.707h12.926z",
                                  "fill-rule": "evenodd",
                                  "clip-rule": "evenodd",
                                  fill: "#349C42"
                                }),
                                createVNode("path", {
                                  d: "M37.049 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.801l-18.905-20.352z",
                                  opacity: ".5",
                                  "fill-rule": "evenodd",
                                  "clip-rule": "evenodd",
                                  fill: "#ffffff"
                                })
                              ]))
                            ])) : ((_f2 = files2.file_name) == null ? void 0 : _f2.slice(0 - 3)) === "txt" ? (openBlock(), createBlock("div", { key: 3 }, [
                              (openBlock(), createBlock("svg", {
                                width: "60px",
                                height: "60px",
                                viewBox: "-4 0 64 64",
                                xmlns: "http://www.w3.org/2000/svg"
                              }, [
                                createVNode("path", {
                                  d: "M5.151-.036c-2.803 0-5.074 2.272-5.074 5.074v53.841c0 2.803 2.271 5.074 5.074 5.074h45.774c2.801 0 5.074-2.271 5.074-5.074v-38.605l-18.902-20.31h-31.946z",
                                  "fill-rule": "evenodd",
                                  "clip-rule": "evenodd",
                                  fill: "#F9CA06"
                                }),
                                createVNode("g", {
                                  "fill-rule": "evenodd",
                                  "clip-rule": "evenodd"
                                }, [
                                  createVNode("path", {
                                    d: "M56.008 20.316v1h-12.799s-6.312-1.26-6.129-6.708c0 0 .208 5.708 6.004 5.708h12.924z",
                                    fill: "#F7BC04"
                                  }),
                                  createVNode("path", {
                                    d: "M37.106-.036v14.561c0 1.656 1.104 5.792 6.104 5.792h12.799l-18.903-20.353z",
                                    opacity: ".5",
                                    fill: "#ffffff"
                                  })
                                ]),
                                createVNode("path", {
                                  d: "M18.763 43.045h-3.277v10.047c0 .414-.324.738-.756.738-.414 0-.738-.324-.738-.738v-10.047h-3.259c-.36 0-.648-.288-.648-.684 0-.36.288-.648.648-.648h8.03c.36 0 .648.288.648.685 0 .359-.288.647-.648.647zm11.7 10.803c-.216 0-.415-.089-.541-.27l-3.727-4.97-3.745 4.97c-.126.181-.324.27-.54.27-.396 0-.72-.306-.72-.72 0-.144.036-.306.144-.432l3.889-5.131-3.619-4.826c-.09-.126-.144-.27-.144-.414 0-.343.288-.721.72-.721.216 0 .432.108.576.288l3.439 4.627 3.439-4.646c.126-.18.324-.27.541-.27.378 0 .738.306.738.721 0 .144-.036.288-.126.414l-3.619 4.808 3.89 5.149c.09.126.126.27.126.415 0 .396-.325.738-.721.738zm11.195-10.803h-3.277v10.047c0 .414-.323.738-.756.738-.414 0-.738-.324-.738-.738v-10.047h-3.259c-.36 0-.648-.288-.648-.684 0-.36.288-.648.648-.648h8.03c.36 0 .648.288.648.685.001.359-.287.647-.648.647z",
                                  fill: "#ffffff"
                                })
                              ]))
                            ])) : ((_g2 = files2.file_name) == null ? void 0 : _g2.slice(0 - 3)) === "svg" || ((_h2 = files2.file_name) == null ? void 0 : _h2.slice(0 - 3)) === "png" || ((_i2 = files2.file_name) == null ? void 0 : _i2.slice(0 - 3)) === "jpeg" || ((_j2 = files2.file_name) == null ? void 0 : _j2.slice(0 - 3)) === "jpg" || ((_k2 = files2.file_name) == null ? void 0 : _k2.slice(0 - 4)) === "webp" ? (openBlock(), createBlock("div", { key: 4 }, [
                              (openBlock(), createBlock("svg", {
                                width: "60px",
                                height: "60px",
                                viewBox: "-4 0 64 64",
                                xmlns: "http://www.w3.org/2000/svg"
                              }, [
                                createVNode("g", {
                                  "fill-rule": "evenodd",
                                  "clip-rule": "evenodd"
                                }, [
                                  createVNode("path", {
                                    d: "M5.125.042c-2.801 0-5.072 2.273-5.072 5.074v53.841c0 2.803 2.271 5.073 5.072 5.073h45.775c2.801 0 5.074-2.271 5.074-5.073v-38.604l-18.904-20.311h-31.945z",
                                    fill: "#49C9A7"
                                  }),
                                  createVNode("path", {
                                    d: "M55.977 20.352v1h-12.799s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z",
                                    fill: "#37BB91"
                                  }),
                                  createVNode("path", {
                                    d: "M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799l-18.903-20.352z",
                                    opacity: ".5",
                                    fill: "#ffffff"
                                  })
                                ]),
                                createVNode("path", {
                                  d: "M10.119 53.739v-20.904h20.906v20.904h-20.906zm18.799-18.843h-16.691v12.6h16.691v-12.6zm-9.583 8.384l3.909-5.256 1.207 2.123 1.395-.434.984 5.631h-13.082l3.496-3.32 2.091 1.256zm-3.856-3.64c-.91 0-1.649-.688-1.649-1.538 0-.849.739-1.538 1.649-1.538.912 0 1.65.689 1.65 1.538 0 .85-.738 1.538-1.65 1.538z",
                                  "fill-rule": "evenodd",
                                  "clip-rule": "evenodd",
                                  fill: "#ffffff"
                                })
                              ]))
                            ])) : ((_l2 = files2.file_name) == null ? void 0 : _l2.slice(0 - 3)) === "rar" || ((_m = files2.file_name) == null ? void 0 : _m.slice(0 - 3)) === "zip" ? (openBlock(), createBlock("div", { key: 5 }, [
                              (openBlock(), createBlock("svg", {
                                width: "60px",
                                height: "60px",
                                viewBox: "-4 0 64 64",
                                xmlns: "http://www.w3.org/2000/svg"
                              }, [
                                createVNode("path", {
                                  d: "M5.113-.026c-2.803 0-5.074 2.272-5.074 5.074v53.841c0 2.803 2.271 5.074 5.074 5.074h45.773c2.801 0 5.074-2.271 5.074-5.074v-38.605l-18.901-20.31h-31.946z",
                                  "fill-rule": "evenodd",
                                  "clip-rule": "evenodd",
                                  fill: "#8199AF"
                                }),
                                createVNode("g", {
                                  "fill-rule": "evenodd",
                                  "clip-rule": "evenodd"
                                }, [
                                  createVNode("path", {
                                    d: "M55.977 20.352v1h-12.799s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z",
                                    fill: "#617F9B"
                                  }),
                                  createVNode("path", {
                                    d: "M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799l-18.903-20.352z",
                                    opacity: ".5",
                                    fill: "#ffffff"
                                  })
                                ]),
                                createVNode("path", {
                                  d: "M18.438 53.906h-7.581c-.378 0-.756-.342-.756-.828 0-.18.054-.36.162-.504l6.68-9.345h-6.212c-.36 0-.648-.288-.648-.684 0-.36.288-.648.648-.648h7.454c.378 0 .756.342.756.829 0 .18-.054.36-.162.504l-6.68 9.345h6.338c.36 0 .648.288.648.648.001.395-.287.683-.647.683zm4.012.108c-.414 0-.738-.324-.738-.738v-10.767c0-.396.324-.721.774-.721.396 0 .72.324.72.721v10.767c0 .413-.324.738-.756.738zm8.839-4.879h-3.331v4.141c0 .414-.324.738-.756.738-.414 0-.738-.324-.738-.738v-10.299c0-.594.486-1.081 1.081-1.081h3.745c2.413 0 3.763 1.657 3.763 3.619s-1.387 3.62-3.764 3.62zm-.18-5.906h-3.151v4.573h3.151c1.422 0 2.395-.936 2.395-2.287-.001-1.35-.973-2.286-2.395-2.286z",
                                  fill: "#ffffff"
                                })
                              ]))
                            ])) : ((_n = files2.file_name) == null ? void 0 : _n.slice(0 - 4)) === "html" ? (openBlock(), createBlock("div", { key: 6 }, [
                              (openBlock(), createBlock("svg", {
                                width: "60px",
                                height: "60px",
                                viewBox: "-4 0 64 64",
                                xmlns: "http://www.w3.org/2000/svg"
                              }, [
                                createVNode("path", {
                                  d: "M5.135.008c-2.803 0-5.074 2.272-5.074 5.074v53.84c0 2.803 2.271 5.074 5.074 5.074h45.775c2.801 0 5.074-2.271 5.074-5.074v-38.605l-18.903-20.309h-31.946z",
                                  "fill-rule": "evenodd",
                                  "clip-rule": "evenodd",
                                  fill: "#F7622C"
                                }),
                                createVNode("g", {
                                  "fill-rule": "evenodd",
                                  "clip-rule": "evenodd"
                                }, [
                                  createVNode("path", {
                                    d: "M55.976 20.352v1h-12.799s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z",
                                    fill: "#F54921"
                                  }),
                                  createVNode("path", {
                                    d: "M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799l-18.903-20.352z",
                                    opacity: ".5",
                                    fill: "#ffffff"
                                  })
                                ]),
                                createVNode("path", {
                                  d: "M18.942 50.841c-.126 0-.231-.021-.336-.063l-7.58-3.38c-.483-.21-.798-.714-.798-1.28 0-.504.315-1.008.798-1.219l7.58-3.4c.105-.043.21-.063.336-.063.441 0 .882.356.882.903 0 .336-.189.672-.525.818l-7.034 3.002 7.034 2.982c.336.146.525.461.525.818 0 .546-.462.882-.882.882zm8.464-11.044l-4.43 13.291c-.126.398-.504.629-.903.629-.525 0-.924-.398-.924-.881 0-.105.021-.189.063-.295l4.43-13.29c.126-.378.483-.63.903-.63.525 0 .903.42.903.902l-.042.274zm10.184 7.6l-7.58 3.38c-.105.043-.231.063-.336.063-.441 0-.882-.356-.882-.882 0-.357.189-.672.525-.818l7.034-2.982-7.034-3.002c-.357-.146-.546-.482-.546-.818-.021-.547.441-.903.903-.903.105 0 .231.021.336.063l7.58 3.4c.483.211.798.715.798 1.219 0 .567-.315 1.071-.798 1.28z",
                                  fill: "#ffffff"
                                })
                              ]))
                            ])) : ((_o = unref(currentTask).task.author_file) == null ? void 0 : _o.length) > 0 ? (openBlock(), createBlock("div", { key: 7 }, [
                              (openBlock(), createBlock("svg", {
                                width: "60px",
                                height: "60px",
                                viewBox: "-4 0 64 64",
                                xmlns: "http://www.w3.org/2000/svg"
                              }, [
                                createVNode("g", {
                                  "fill-rule": "evenodd",
                                  "clip-rule": "evenodd"
                                }, [
                                  createVNode("path", {
                                    d: "M5.113.007c-2.803 0-5.074 2.271-5.074 5.074v53.84c0 2.803 2.271 5.074 5.074 5.074h45.774c2.801 0 5.074-2.271 5.074-5.074v-38.606l-18.903-20.308h-31.945z",
                                    fill: "#8199AF"
                                  }),
                                  createVNode("path", {
                                    d: "M55.976 20.352v1h-12.799s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z",
                                    fill: "#617F9B"
                                  }),
                                  createVNode("path", {
                                    d: "M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799l-18.903-20.352z",
                                    opacity: ".5",
                                    fill: "#ffffff"
                                  })
                                ])
                              ]))
                            ])) : createCommentVNode("", true)
                          ]),
                          createVNode("p", { class: "mt-2" }, toDisplayString(((_p = files2.file_name) == null ? void 0 : _p.length) > 10 ? files2.file_name.slice(0, 10) + "..." : files2.file_name), 1)
                        ], 8, ["href", "download", "title"]);
                      }), 256)),
                      ((_g = unref(currentTask).task.author_files_urls) == null ? void 0 : _g.length) === 0 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "w-full text-center mb-4"
                      }, [
                        createVNode("p", { class: "tracking-widest" }, toDisplayString(_ctx.$t("Файлы отсутствуют")), 1)
                      ])) : createCommentVNode("", true)
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode(_sfc_main$3, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("Прикреплённые файлы исполнителей")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode("form", {
                      enctype: "multipart/form-data",
                      onSubmit: withModifiers(($event) => unref(currentTask).change_taskStatus({ performer_files: unref(files), task_status: "make-watching", id: unref(currentTask).task.id }), ["prevent"]),
                      class: "w-full mx-auto border p-10 my-6 border-gray-400 rounded-lg"
                    }, [
                      createVNode("div", { class: "flex gap-x-4 flex-wrap" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(currentTask).task.performer_files_urls, (performer_file) => {
                          var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m, _n, _o;
                          return openBlock(), createBlock("a", {
                            class: "flex justify-center dark:hover:bg-gray-700 hover:bg-gray-100 rounded-lg p-2 transition-all flex-col items-center",
                            href: unref(currentUser).get_server_domain + performer_file.file_url,
                            download: performer_file.file_name,
                            title: performer_file.file_name
                          }, [
                            createVNode("div", null, [
                              ((_a2 = performer_file.file_name) == null ? void 0 : _a2.slice(0 - 3)) === "pdf" ? (openBlock(), createBlock("div", { key: 0 }, [
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "60px",
                                  height: "60px",
                                  viewBox: "0 0 56 64",
                                  "enable-background": "new 0 0 56 64",
                                  "xml:space": "preserve"
                                }, [
                                  createVNode("g", null, [
                                    createVNode("path", {
                                      fill: "#8C181A",
                                      d: "M5.1,0C2.3,0,0,2.3,0,5.1v53.8C0,61.7,2.3,64,5.1,64h45.8c2.8,0,5.1-2.3,5.1-5.1V20.3L37.1,0H5.1z"
                                    }),
                                    createVNode("path", {
                                      fill: "#6B0D12",
                                      d: "M56,20.4v1H43.2c0,0-6.3-1.3-6.1-6.7c0,0,0.2,5.7,6,5.7H56z"
                                    }),
                                    createVNode("path", {
                                      opacity: "0.5",
                                      fill: "#FFFFFF",
                                      "enable-background": "new",
                                      d: "M37.1,0v14.6c0,1.7,1.1,5.8,6.1,5.8H56L37.1,0z"
                                    })
                                  ]),
                                  createVNode("path", {
                                    fill: "#FFFFFF",
                                    d: "M14.9,49h-3.3v4.1c0,0.4-0.3,0.7-0.8,0.7c-0.4,0-0.7-0.3-0.7-0.7V42.9c0-0.6,0.5-1.1,1.1-1.1h3.7\r\n                      c2.4,0,3.8,1.7,3.8,3.6C18.7,47.4,17.3,49,14.9,49z M14.8,43.1h-3.2v4.6h3.2c1.4,0,2.4-0.9,2.4-2.3C17.2,44,16.2,43.1,14.8,43.1z\r\n                       M25.2,53.8h-3c-0.6,0-1.1-0.5-1.1-1.1v-9.8c0-0.6,0.5-1.1,1.1-1.1h3c3.7,0,6.2,2.6,6.2,6C31.4,51.2,29,53.8,25.2,53.8z M25.2,43.1\r\n                      h-2.6v9.3h2.6c2.9,0,4.6-2.1,4.6-4.7C29.9,45.2,28.2,43.1,25.2,43.1z M41.5,43.1h-5.8V47h5.7c0.4,0,0.6,0.3,0.6,0.7\r\n                      s-0.3,0.6-0.6,0.6h-5.7v4.8c0,0.4-0.3,0.7-0.8,0.7c-0.4,0-0.7-0.3-0.7-0.7V42.9c0-0.6,0.5-1.1,1.1-1.1h6.2c0.4,0,0.6,0.3,0.6,0.7\r\n                      C42.2,42.8,41.9,43.1,41.5,43.1z"
                                  })
                                ]))
                              ])) : ((_b2 = performer_file.file_name) == null ? void 0 : _b2.slice(0 - 3)) === "doc" || ((_c2 = performer_file.file_name) == null ? void 0 : _c2.slice(0 - 4)) === "docs" ? (openBlock(), createBlock("div", { key: 1 }, [
                                (openBlock(), createBlock("svg", {
                                  width: "60px",
                                  height: "60px",
                                  viewBox: "-4 0 64 64",
                                  xmlns: "http://www.w3.org/2000/svg"
                                }, [
                                  createVNode("g", { "fill-rule": "evenodd" }, [
                                    createVNode("path", {
                                      d: "m5.11 0a5.07 5.07 0 0 0 -5.11 5v53.88a5.07 5.07 0 0 0 5.11 5.12h45.78a5.07 5.07 0 0 0 5.11-5.12v-38.6l-18.94-20.28z",
                                      fill: "#107cad"
                                    }),
                                    createVNode("path", {
                                      d: "m56 20.35v1h-12.82s-6.31-1.26-6.13-6.71c0 0 .21 5.71 6 5.71z",
                                      fill: "#084968"
                                    }),
                                    createVNode("path", {
                                      d: "m37.07 0v14.56a5.78 5.78 0 0 0 6.11 5.79h12.82z",
                                      fill: "#90d0fe",
                                      opacity: ".5"
                                    })
                                  ]),
                                  createVNode("path", {
                                    d: "m14.24 53.86h-3a1.08 1.08 0 0 1 -1.08-1.08v-9.85a1.08 1.08 0 0 1 1.08-1.08h3a6 6 0 1 1 0 12zm0-10.67h-2.61v9.34h2.61a4.41 4.41 0 0 0 4.61-4.66 4.38 4.38 0 0 0 -4.61-4.68zm14.42 10.89a5.86 5.86 0 0 1 -6-6.21 6 6 0 1 1 11.92 0 5.87 5.87 0 0 1 -5.92 6.21zm0-11.09c-2.7 0-4.41 2.07-4.41 4.88s1.71 4.88 4.41 4.88 4.41-2.09 4.41-4.88-1.72-4.87-4.41-4.87zm18.45.38a.75.75 0 0 1 .2.52.71.71 0 0 1 -.7.72.64.64 0 0 1 -.51-.24 4.06 4.06 0 0 0 -3-1.38 4.61 4.61 0 0 0 -4.63 4.88 4.63 4.63 0 0 0 4.63 4.88 4 4 0 0 0 3-1.37.7.7 0 0 1 .51-.24.72.72 0 0 1 .7.74.78.78 0 0 1 -.2.51 5.33 5.33 0 0 1 -4 1.69 6.22 6.22 0 0 1 0-12.43 5.26 5.26 0 0 1 4 1.72z",
                                    fill: "#ffffff"
                                  })
                                ]))
                              ])) : ((_d2 = performer_file.file_name) == null ? void 0 : _d2.slice(0 - 3)) === "xls" || ((_e2 = performer_file.file_name) == null ? void 0 : _e2.slice(0 - 4)) === "xlsx" ? (openBlock(), createBlock("div", { key: 2 }, [
                                (openBlock(), createBlock("svg", {
                                  width: "60px",
                                  height: "60px",
                                  viewBox: "-4 0 64 64",
                                  xmlns: "http://www.w3.org/2000/svg"
                                }, [
                                  createVNode("path", {
                                    d: "M5.112.006c-2.802 0-5.073 2.273-5.073 5.074v53.841c0 2.803 2.271 5.074 5.073 5.074h45.774c2.801 0 5.074-2.271 5.074-5.074v-38.605l-18.902-20.31h-31.946z",
                                    "fill-rule": "evenodd",
                                    "clip-rule": "evenodd",
                                    fill: "#45B058"
                                  }),
                                  createVNode("path", {
                                    d: "M19.429 53.938c-.216 0-.415-.09-.54-.27l-3.728-4.97-3.745 4.97c-.126.18-.324.27-.54.27-.396 0-.72-.306-.72-.72 0-.144.035-.306.144-.432l3.89-5.131-3.619-4.826c-.09-.126-.145-.27-.145-.414 0-.342.288-.72.721-.72.216 0 .432.108.576.288l3.438 4.628 3.438-4.646c.127-.18.324-.27.541-.27.378 0 .738.306.738.72 0 .144-.036.288-.127.414l-3.619 4.808 3.891 5.149c.09.126.125.27.125.414 0 .396-.324.738-.719.738zm9.989-.126h-5.455c-.595 0-1.081-.486-1.081-1.08v-10.317c0-.396.324-.72.774-.72.396 0 .721.324.721.72v10.065h5.041c.359 0 .648.288.648.648 0 .396-.289.684-.648.684zm6.982.216c-1.782 0-3.188-.594-4.213-1.495-.162-.144-.234-.342-.234-.54 0-.36.27-.756.702-.756.144 0 .306.036.433.144.828.738 1.98 1.314 3.367 1.314 2.143 0 2.826-1.152 2.826-2.071 0-3.097-7.111-1.386-7.111-5.672 0-1.98 1.764-3.331 4.123-3.331 1.548 0 2.881.468 3.853 1.278.162.144.253.342.253.54 0 .36-.307.72-.703.72-.145 0-.307-.054-.432-.162-.883-.72-1.98-1.044-3.079-1.044-1.44 0-2.467.774-2.467 1.909 0 2.701 7.112 1.152 7.112 5.636 0 1.748-1.188 3.53-4.43 3.53z",
                                    fill: "#ffffff"
                                  }),
                                  createVNode("path", {
                                    d: "M55.953 20.352v1h-12.801s-6.312-1.26-6.127-6.707c0 0 .207 5.707 6.002 5.707h12.926z",
                                    "fill-rule": "evenodd",
                                    "clip-rule": "evenodd",
                                    fill: "#349C42"
                                  }),
                                  createVNode("path", {
                                    d: "M37.049 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.801l-18.905-20.352z",
                                    opacity: ".5",
                                    "fill-rule": "evenodd",
                                    "clip-rule": "evenodd",
                                    fill: "#ffffff"
                                  })
                                ]))
                              ])) : ((_f2 = performer_file.file_name) == null ? void 0 : _f2.slice(0 - 3)) === "txt" ? (openBlock(), createBlock("div", { key: 3 }, [
                                (openBlock(), createBlock("svg", {
                                  width: "60px",
                                  height: "60px",
                                  viewBox: "-4 0 64 64",
                                  xmlns: "http://www.w3.org/2000/svg"
                                }, [
                                  createVNode("path", {
                                    d: "M5.151-.036c-2.803 0-5.074 2.272-5.074 5.074v53.841c0 2.803 2.271 5.074 5.074 5.074h45.774c2.801 0 5.074-2.271 5.074-5.074v-38.605l-18.902-20.31h-31.946z",
                                    "fill-rule": "evenodd",
                                    "clip-rule": "evenodd",
                                    fill: "#F9CA06"
                                  }),
                                  createVNode("g", {
                                    "fill-rule": "evenodd",
                                    "clip-rule": "evenodd"
                                  }, [
                                    createVNode("path", {
                                      d: "M56.008 20.316v1h-12.799s-6.312-1.26-6.129-6.708c0 0 .208 5.708 6.004 5.708h12.924z",
                                      fill: "#F7BC04"
                                    }),
                                    createVNode("path", {
                                      d: "M37.106-.036v14.561c0 1.656 1.104 5.792 6.104 5.792h12.799l-18.903-20.353z",
                                      opacity: ".5",
                                      fill: "#ffffff"
                                    })
                                  ]),
                                  createVNode("path", {
                                    d: "M18.763 43.045h-3.277v10.047c0 .414-.324.738-.756.738-.414 0-.738-.324-.738-.738v-10.047h-3.259c-.36 0-.648-.288-.648-.684 0-.36.288-.648.648-.648h8.03c.36 0 .648.288.648.685 0 .359-.288.647-.648.647zm11.7 10.803c-.216 0-.415-.089-.541-.27l-3.727-4.97-3.745 4.97c-.126.181-.324.27-.54.27-.396 0-.72-.306-.72-.72 0-.144.036-.306.144-.432l3.889-5.131-3.619-4.826c-.09-.126-.144-.27-.144-.414 0-.343.288-.721.72-.721.216 0 .432.108.576.288l3.439 4.627 3.439-4.646c.126-.18.324-.27.541-.27.378 0 .738.306.738.721 0 .144-.036.288-.126.414l-3.619 4.808 3.89 5.149c.09.126.126.27.126.415 0 .396-.325.738-.721.738zm11.195-10.803h-3.277v10.047c0 .414-.323.738-.756.738-.414 0-.738-.324-.738-.738v-10.047h-3.259c-.36 0-.648-.288-.648-.684 0-.36.288-.648.648-.648h8.03c.36 0 .648.288.648.685.001.359-.287.647-.648.647z",
                                    fill: "#ffffff"
                                  })
                                ]))
                              ])) : ((_g2 = performer_file.file_name) == null ? void 0 : _g2.slice(0 - 3)) === "svg" || ((_h2 = performer_file.file_name) == null ? void 0 : _h2.slice(0 - 3)) === "png" || ((_i2 = performer_file.file_name) == null ? void 0 : _i2.slice(0 - 3)) === "jpeg" || ((_j2 = performer_file.file_name) == null ? void 0 : _j2.slice(0 - 3)) === "jpg" || ((_k2 = performer_file.file_name) == null ? void 0 : _k2.slice(0 - 4)) === "webp" ? (openBlock(), createBlock("div", { key: 4 }, [
                                (openBlock(), createBlock("svg", {
                                  width: "60px",
                                  height: "60px",
                                  viewBox: "-4 0 64 64",
                                  xmlns: "http://www.w3.org/2000/svg"
                                }, [
                                  createVNode("g", {
                                    "fill-rule": "evenodd",
                                    "clip-rule": "evenodd"
                                  }, [
                                    createVNode("path", {
                                      d: "M5.125.042c-2.801 0-5.072 2.273-5.072 5.074v53.841c0 2.803 2.271 5.073 5.072 5.073h45.775c2.801 0 5.074-2.271 5.074-5.073v-38.604l-18.904-20.311h-31.945z",
                                      fill: "#49C9A7"
                                    }),
                                    createVNode("path", {
                                      d: "M55.977 20.352v1h-12.799s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z",
                                      fill: "#37BB91"
                                    }),
                                    createVNode("path", {
                                      d: "M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799l-18.903-20.352z",
                                      opacity: ".5",
                                      fill: "#ffffff"
                                    })
                                  ]),
                                  createVNode("path", {
                                    d: "M10.119 53.739v-20.904h20.906v20.904h-20.906zm18.799-18.843h-16.691v12.6h16.691v-12.6zm-9.583 8.384l3.909-5.256 1.207 2.123 1.395-.434.984 5.631h-13.082l3.496-3.32 2.091 1.256zm-3.856-3.64c-.91 0-1.649-.688-1.649-1.538 0-.849.739-1.538 1.649-1.538.912 0 1.65.689 1.65 1.538 0 .85-.738 1.538-1.65 1.538z",
                                    "fill-rule": "evenodd",
                                    "clip-rule": "evenodd",
                                    fill: "#ffffff"
                                  })
                                ]))
                              ])) : ((_l2 = performer_file.file_name) == null ? void 0 : _l2.slice(0 - 3)) === "rar" || ((_m = performer_file.file_name) == null ? void 0 : _m.slice(0 - 3)) === "zip" ? (openBlock(), createBlock("div", { key: 5 }, [
                                (openBlock(), createBlock("svg", {
                                  width: "60px",
                                  height: "60px",
                                  viewBox: "-4 0 64 64",
                                  xmlns: "http://www.w3.org/2000/svg"
                                }, [
                                  createVNode("path", {
                                    d: "M5.113-.026c-2.803 0-5.074 2.272-5.074 5.074v53.841c0 2.803 2.271 5.074 5.074 5.074h45.773c2.801 0 5.074-2.271 5.074-5.074v-38.605l-18.901-20.31h-31.946z",
                                    "fill-rule": "evenodd",
                                    "clip-rule": "evenodd",
                                    fill: "#8199AF"
                                  }),
                                  createVNode("g", {
                                    "fill-rule": "evenodd",
                                    "clip-rule": "evenodd"
                                  }, [
                                    createVNode("path", {
                                      d: "M55.977 20.352v1h-12.799s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z",
                                      fill: "#617F9B"
                                    }),
                                    createVNode("path", {
                                      d: "M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799l-18.903-20.352z",
                                      opacity: ".5",
                                      fill: "#ffffff"
                                    })
                                  ]),
                                  createVNode("path", {
                                    d: "M18.438 53.906h-7.581c-.378 0-.756-.342-.756-.828 0-.18.054-.36.162-.504l6.68-9.345h-6.212c-.36 0-.648-.288-.648-.684 0-.36.288-.648.648-.648h7.454c.378 0 .756.342.756.829 0 .18-.054.36-.162.504l-6.68 9.345h6.338c.36 0 .648.288.648.648.001.395-.287.683-.647.683zm4.012.108c-.414 0-.738-.324-.738-.738v-10.767c0-.396.324-.721.774-.721.396 0 .72.324.72.721v10.767c0 .413-.324.738-.756.738zm8.839-4.879h-3.331v4.141c0 .414-.324.738-.756.738-.414 0-.738-.324-.738-.738v-10.299c0-.594.486-1.081 1.081-1.081h3.745c2.413 0 3.763 1.657 3.763 3.619s-1.387 3.62-3.764 3.62zm-.18-5.906h-3.151v4.573h3.151c1.422 0 2.395-.936 2.395-2.287-.001-1.35-.973-2.286-2.395-2.286z",
                                    fill: "#ffffff"
                                  })
                                ]))
                              ])) : ((_n = unref(currentTask).task.performer_file) == null ? void 0 : _n.length) > 0 ? (openBlock(), createBlock("div", { key: 6 }, [
                                (openBlock(), createBlock("svg", {
                                  width: "60px",
                                  height: "60px",
                                  viewBox: "-4 0 64 64",
                                  xmlns: "http://www.w3.org/2000/svg"
                                }, [
                                  createVNode("g", {
                                    "fill-rule": "evenodd",
                                    "clip-rule": "evenodd"
                                  }, [
                                    createVNode("path", {
                                      d: "M5.113.007c-2.803 0-5.074 2.271-5.074 5.074v53.84c0 2.803 2.271 5.074 5.074 5.074h45.774c2.801 0 5.074-2.271 5.074-5.074v-38.606l-18.903-20.308h-31.945z",
                                      fill: "#8199AF"
                                    }),
                                    createVNode("path", {
                                      d: "M55.976 20.352v1h-12.799s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z",
                                      fill: "#617F9B"
                                    }),
                                    createVNode("path", {
                                      d: "M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799l-18.903-20.352z",
                                      opacity: ".5",
                                      fill: "#ffffff"
                                    })
                                  ])
                                ]))
                              ])) : (openBlock(), createBlock("div", { key: 7 }, [
                                (openBlock(), createBlock("svg", {
                                  width: "60px",
                                  height: "60px",
                                  viewBox: "-4 0 64 64",
                                  xmlns: "http://www.w3.org/2000/svg"
                                }, [
                                  createVNode("g", {
                                    "fill-rule": "evenodd",
                                    "clip-rule": "evenodd"
                                  }, [
                                    createVNode("path", {
                                      d: "M5.113.007c-2.803 0-5.074 2.271-5.074 5.074v53.84c0 2.803 2.271 5.074 5.074 5.074h45.774c2.801 0 5.074-2.271 5.074-5.074v-38.606l-18.903-20.308h-31.945z",
                                      fill: "#8199AF"
                                    }),
                                    createVNode("path", {
                                      d: "M55.976 20.352v1h-12.799s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z",
                                      fill: "#617F9B"
                                    }),
                                    createVNode("path", {
                                      d: "M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799l-18.903-20.352z",
                                      opacity: ".5",
                                      fill: "#ffffff"
                                    })
                                  ])
                                ]))
                              ]))
                            ]),
                            createVNode("p", { class: "mt-2" }, toDisplayString(((_o = performer_file.file_name) == null ? void 0 : _o.length) > 10 ? performer_file.file_name.slice(0, 10) + "..." : performer_file.file_name), 1)
                          ], 8, ["href", "download", "title"]);
                        }), 256))
                      ]),
                      ((_h = unref(currentTask).task.performer_files_urls) == null ? void 0 : _h.length) === 0 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "w-full text-center mb-4"
                      }, [
                        createVNode("p", { class: "tracking-widest" }, toDisplayString(_ctx.$t("Файлы отсутствуют")), 1)
                      ])) : createCommentVNode("", true),
                      unref(currentTask).task.status === "performing" && ((_i = unref(currentTask).task.main_performer) == null ? void 0 : _i.id) === unref(currentUser).user.id ? (openBlock(), createBlock("div", { key: 1 }, [
                        createVNode("div", { class: "flex flex-col items-center border dark:border-gray-500 rounded-lg p-4 w-4/212 mx-auto" }, [
                          createVNode("p", { class: "mb-4" }, toDisplayString(_ctx.$t("Прикрепить файлы")), 1),
                          createVNode(_sfc_main$4, {
                            type: "file",
                            onInput: ($event) => files.value = $event.target.files
                          }, null, 8, ["onInput"])
                        ]),
                        createVNode("div", { class: "text-center mt-10" }, [
                          createVNode(_sfc_main$5, {
                            type: "success",
                            class: "px-4 py-2 rounded-full",
                            onClick: () => {
                            }
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Отправить")), 1)
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode("p", { class: "mt-2 text-gray-400" }, [
                            createTextVNode(toDisplayString(_ctx.$t("Отправлять файлы может только")) + " ", 1),
                            createVNode("span", { class: "font-bold dark:text-gray-300 text-black tracking-widest" }, toDisplayString(((_j = unref(currentTask).task.main_performer) == null ? void 0 : _j.first_name) + " " + ((_k = unref(currentTask).task.main_performer) == null ? void 0 : _k.last_name)), 1)
                          ]),
                          createVNode("p", { class: "mt-2 text-gray-400" }, [
                            createTextVNode(toDisplayString(_ctx.$t("После отправления файлов, статус поменяется на")) + " ", 1),
                            createVNode("span", { class: "text-semiCyan font-bold tracking-widest" }, "(" + toDisplayString(_ctx.$t("Просматривается")) + ")", 1)
                          ])
                        ])
                      ])) : createCommentVNode("", true)
                    ], 40, ["onSubmit"])
                  ])
                ]),
                createVNode("div", { class: "w-4/12 max-lg:w-full overflow-hidden h-1/2 max-sm:p-4 border p-10 max-2xl:p-6 my-6 border-gray-400 rounded-lg" }, [
                  createVNode("div", { class: "text-center mb-4 tracking-widest text-sm text-gray-400" }, [
                    createVNode("p", null, toDisplayString(_ctx.$t("Автор задания")), 1),
                    createVNode("p", null, toDisplayString(unref(currentTask).task.author_name), 1)
                  ]),
                  createVNode(_sfc_main$3, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Исполнители")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "mt-2" }, [
                    createVNode("p", { class: "text-sm" }, toDisplayString(_ctx.$t("Главный исполнитель")), 1),
                    createVNode(_component_NuxtLink, {
                      to: `/base/users/${(_l = unref(currentTask).task.main_performer) == null ? void 0 : _l.id}`,
                      class: "flex mt-4 max-lg:justify-center gap-x-3 items-center border border-gray-400 rounded-lg p-2 dark:hover:bg-gray-500 hover:bg-gray-200 transition-all duration-200"
                    }, {
                      default: withCtx(() => {
                        var _a2, _b2, _c2;
                        return [
                          createVNode("div", { class: "max-md:w-full" }, [
                            createVNode("img", {
                              class: "w-[60px] h-[60px] rounded-full",
                              src: unref(currentUser).get_server_domain + ((_a2 = unref(currentTask).task.main_performer) == null ? void 0 : _a2.photo_url),
                              alt: ""
                            }, null, 8, ["src"])
                          ]),
                          createVNode("p", null, toDisplayString(((_b2 = unref(currentTask).task.main_performer) == null ? void 0 : _b2.first_name) + " " + ((_c2 = unref(currentTask).task.main_performer) == null ? void 0 : _c2.last_name)), 1)
                        ];
                      }),
                      _: 1
                    }, 8, ["to"])
                  ]),
                  createVNode("div", null, [
                    createVNode("p", { class: "text-sm mt-6" }, toDisplayString(_ctx.$t("Список исполнителей")), 1),
                    unref(currentTask).task.status === "performing" && unref(currentTask).task.author_id === unref(currentUser).user.id ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mt-4 flex gap-x-6 justify-around"
                    }, [
                      createVNode(_sfc_main$5, {
                        class: "w-6/12 dark:hover:bg-gray-500 hover:bg-gray-300 !text-black dark:!text-white rounded-full border dark:border-gray-500 transition-all duration-200",
                        onClick: ($event) => {
                          __props.showAddPerformer = true;
                          unref(updateForm).department.participants = unref(department).get_all_department.participants.map((e) => {
                            var _a2;
                            e.value = ((_a2 = unref(updateForm).participants) == null ? void 0 : _a2.filter((i) => i.id == e.id).length) != 0;
                          });
                        }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("Добавить")), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "mt-4 flex flex-col max-lg:w-full max-lg:gap-x-4 max-h-[500px] h-full gap-y-4 overflow-y-auto px-2" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(currentTask).task.performers_list, (user) => {
                        return openBlock(), createBlock("div", { class: "flex relative items-center p-2 max-lg:w-full gap-x-6 border rounded-lg border-gray-400 dark:hover:bg-gray-500 hover:bg-gray-200 transition-all duration-200" }, [
                          createVNode(_component_NuxtLink, {
                            to: `/base/users/${user.id}`,
                            class: "w-11/12 flex items-center gap-x-4"
                          }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                class: "w-[60px] h-[60px] rounded-full",
                                src: unref(currentUser).get_server_domain + (user == null ? void 0 : user.photo_url),
                                alt: ""
                              }, null, 8, ["src"]),
                              createVNode("p", { class: "" }, toDisplayString(user.last_name.slice(0, 1) + ". " + user.first_name), 1)
                            ]),
                            _: 2
                          }, 1032, ["to"]),
                          unref(currentTask).task.status === "performing" && unref(currentTask).task.author_id === unref(currentUser).user.id ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "absolute cursor-pointer dark:stroke-white stroke-black right-0 px-2 py-1 hover:bg-red-400 max-sm:hidden transition-all duration-200 rounded-l-lg hover:stroke-white",
                            name: "fade"
                          }, [
                            createVNode("div", {
                              onClick: ($event) => unref(currentTask).deleteUser_task({ id: unref(currentTask).task.id, user_id: user.id })
                            }, [
                              (openBlock(), createBlock("svg", {
                                width: "40px",
                                height: "40px",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                              }, [
                                createVNode("path", {
                                  d: "M10 11V17",
                                  "stroke-width": "1.2",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round"
                                }),
                                createVNode("path", {
                                  d: "M14 11V17",
                                  "stroke-width": "1.2",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round"
                                }),
                                createVNode("path", {
                                  d: "M4 7H20",
                                  "stroke-width": "1.2",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round"
                                }),
                                createVNode("path", {
                                  d: "M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z",
                                  "stroke-width": "1.2",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round"
                                }),
                                createVNode("path", {
                                  d: "M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z",
                                  "stroke-width": "1.2",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round"
                                })
                              ]))
                            ], 8, ["onClick"])
                          ])) : createCommentVNode("", true),
                          unref(currentTask).task.status === "performing" && unref(currentTask).task.author_id === unref(currentUser).user.id ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: "absolute cursor-pointer dark:stroke-white stroke-black right-0 top-0 px-2 py-1 bg-red-400 hidden max-sm:block transition-all duration-200 rounded-tr-lg rounded-l-lg hover:stroke-white",
                            name: "fade"
                          }, [
                            createVNode("div", {
                              onClick: ($event) => unref(currentTask).deleteUser_task({ id: unref(currentTask).task.id, user_id: user.id })
                            }, [
                              createVNode("p", null, "X")
                            ], 8, ["onClick"])
                          ])) : createCommentVNode("", true)
                        ]);
                      }), 256))
                    ])
                  ])
                ])
              ]),
              unref(currentTask).task.status === "watching" && unref(currentTask).task.author_id === unref(currentUser).user.id ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex flex-wrap gap-y-4 justify-center mb-10 gap-x-4"
              }, [
                createVNode(_sfc_main$5, {
                  class: "px-10 py-2 rounded-full",
                  type: "danger",
                  onClick: ($event) => __props.showCancelError = true
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("Отклонить")), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_sfc_main$5, {
                  class: "px-10 py-2 rounded-full",
                  type: "success",
                  onClick: ($event) => unref(currentTask).change_taskStatus({ id: unref(currentTask).task.id, task_status: "make-completed" })
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("Подтвердить")), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])) : createCommentVNode("", true),
              createVNode("div", { class: "absolute max-md:fixed max-md:top-0 max-md:bottom-6 max-md:items-end stroke-white flex items-center top-14 right-6 gap-x-6" }, [
                createVNode("div", { class: "rounded-full cursor-pointer bg-blueDarkSemiLight p-2" }, [
                  (openBlock(), createBlock("svg", {
                    width: "40px",
                    height: "40px",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      d: "M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H10M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M19 9V10M9 17H11.5M9 13H14M9 9H10M14 21L16.025 20.595C16.2015 20.5597 16.2898 20.542 16.3721 20.5097C16.4452 20.4811 16.5147 20.4439 16.579 20.399C16.6516 20.3484 16.7152 20.2848 16.8426 20.1574L21 16C21.5523 15.4477 21.5523 14.5523 21 14C20.4477 13.4477 19.5523 13.4477 19 14L14.8426 18.1574C14.7152 18.2848 14.6516 18.3484 14.601 18.421C14.5561 18.4853 14.5189 18.5548 14.4903 18.6279C14.458 18.7102 14.4403 18.7985 14.405 18.975L14 21Z",
                      "stroke-width": "1.4",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    })
                  ]))
                ]),
                createVNode("div", {
                  class: "rounded-full cursor-pointer bg-red-400 p-2",
                  onClick: ($event) => __props.showDeleteTask = true
                }, [
                  (openBlock(), createBlock("svg", {
                    width: "40px",
                    height: "40px",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      d: "M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6",
                      "stroke-width": "1.4",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    })
                  ]))
                ], 8, ["onClick"])
              ]),
              __props.showAddPerformer ? (openBlock(), createBlock(_sfc_main$6, {
                key: 1,
                onShowModal: ($event) => __props.showAddPerformer = !__props.showAddPerformer
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$3, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Добавление Исполнителей")), 1)
                    ]),
                    _: 1
                  }),
                  unref(currentUser).user.role_en === "company_admin" || unref(currentUser).user.role_en === "director" || unref(currentUser).user.role_en === "vice_director" ? (openBlock(), createBlock("form", {
                    key: 0,
                    class: "mt-6",
                    onSubmit: withModifiers(($event) => {
                      var _a2;
                      unref(currentTask).addUser_task({ id: unref(currentTask).task.id, performers: (_a2 = unref(updateForm).participants) == null ? void 0 : _a2.filter((e) => e.value).map((i) => i.id).join(",") });
                      __props.showAddPerformer = false;
                    }, ["prevent"])
                  }, [
                    createVNode("div", null, [
                      createVNode("p", null, toDisplayString(_ctx.$t("Выберите департамент")), 1),
                      createVNode("div", { class: "flex flex-wrap max-md:justify-center gap-x-4 gap-y-4 my-6" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(department).get_all_department.results, (item) => {
                          return openBlock(), createBlock("div", {
                            class: ["border cursor-pointer px-4 py-2 rounded-lg transition-all duration-200", { "dark:bg-gray-500 bg-gray-200": unref(updateForm) === item }],
                            onClick: ($event) => updateForm.value = item
                          }, toDisplayString(item.name), 11, ["onClick"]);
                        }), 256))
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("p", null, toDisplayString(_ctx.$t("Выберите исполнителей")), 1),
                      createVNode(Transition, { name: "left-fade" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex flex-wrap max-md:justify-center items-center gap-x-4 gap-y-4 my-6" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(updateForm).participants, (performer) => {
                              return openBlock(), createBlock(TasksUserCheckbox, { item: performer }, null, 8, ["item"]);
                            }), 256))
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "flex justify-center gap-x-10" }, [
                      createVNode(_sfc_main$5, {
                        class: "w-3/12 max-md:w-6/12 rounded-full py-2",
                        type: "danger",
                        onClick: ($event) => __props.showAddPerformer = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("Отменить")), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_sfc_main$5, {
                        class: "w-3/12 max-md:w-6/12 rounded-full py-2",
                        type: "success"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("Добавить")), 1)
                        ]),
                        _: 1
                      })
                    ])
                  ], 40, ["onSubmit"])) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["onShowModal"])) : createCommentVNode("", true),
              __props.showCancelError ? (openBlock(), createBlock(_sfc_main$6, {
                key: 2,
                class: "!w-[200px]",
                onShowModal: ($event) => __props.showCancelError = !__props.showCancelError
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$3, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Предупреждение")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode("form", {
                    onSubmit: withModifiers(($event) => {
                      unref(currentTask).change_taskStatus({ task_status: "make-rejected", id: unref(currentTask).task.id, comment: unref(updateForm).comment });
                      __props.showCancelError = false;
                    }, ["prevent"]),
                    class: "mt-10"
                  }, [
                    createVNode("div", null, [
                      createVNode("p", { class: "mb-4" }, toDisplayString(_ctx.$t("Опишите причину отклонения")), 1),
                      withDirectives(createVNode("textarea", {
                        class: "w-full resize-none h-[300px] p-4 border dark:border-none rounded-lg",
                        "onUpdate:modelValue": ($event) => unref(updateForm).comment = $event
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(updateForm).comment]
                      ])
                    ]),
                    createVNode("div", { class: "flex justify-center gap-x-10" }, [
                      createVNode(_sfc_main$5, {
                        class: "py-2 w-2/12 rounded-full",
                        type: "danger",
                        onClick: ($event) => __props.showCancelError = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("Отмена")), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_sfc_main$5, {
                        class: "py-2 w-2/12 rounded-full",
                        type: "success"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("Подтвердить")), 1)
                        ]),
                        _: 1
                      })
                    ])
                  ], 40, ["onSubmit"])
                ]),
                _: 1
              }, 8, ["onShowModal"])) : createCommentVNode("", true),
              __props.showDeleteTask ? (openBlock(), createBlock(_sfc_main$6, {
                key: 3,
                onShowModal: ($event) => __props.showDeleteTask = !__props.showDeleteTask
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$3, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Предупреждение")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode("p", { class: "text-center mt-2 text-base tracking-widest" }, toDisplayString(_ctx.$t("Удалённые задания не подлежат восстановке")), 1),
                  createVNode("div", { class: "my-6" }, [
                    createVNode("p", { class: "text-center tracking-wider" }, toDisplayString(_ctx.$t("Вы уверены что хотите удалить?")), 1),
                    createVNode("div", { class: "flex gap-4 mt-2 justify-center" }, [
                      createVNode(_sfc_main$5, {
                        type: "danger",
                        class: "py-2 px-10 rounded-full",
                        onClick: ($event) => __props.showDeleteTask = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("Отменить")), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_sfc_main$5, {
                        type: "success",
                        class: "py-2 px-10 rounded-full",
                        onClick: ($event) => {
                          unref(currentTask).delete_task({ id: unref(currentTask).task.id }, _ctx.$router);
                        }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("Удалить")), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["onShowModal"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base/tasks/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8f2bc59e"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-9ch-LTiO.js.map
