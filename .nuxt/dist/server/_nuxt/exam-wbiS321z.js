import { defineComponent, watchSyncEffect, withCtx, createTextVNode, toDisplayString, unref, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { r as useSeoMeta } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { T as TheContentBlock } from "./TheContentBlock-AeyxWvVh.js";
import { _ as _sfc_main$1 } from "./TheBreadcrumbs-ms4_phBH.js";
import { u as useTestList } from "./test-9MC9KWoe.js";
import { useRoute, useRouter } from "vue-router";
import { u as useAuthStore } from "./auth-ltfjqTsG.js";
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
import "./_plugin-vue_export-helper-yVxbj29m.js";
import "./nuxt-link-nvHjMUuE.js";
import "vue3-toastify";
import "./axios-jpYG50U2.js";
import "axios";
import "nuxt-storage/nuxt-storage.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "exam",
  __ssrInlineRender: true,
  setup(__props) {
    useAuthStore();
    useRoute();
    useRouter();
    const testStore = useTestList();
    watchSyncEffect(() => {
      useSeoMeta({
        title: "Тест"
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex items-center gap-x-4">`);
      _push(ssrRenderComponent(_sfc_main$1, { "breadcrumb-link": "/base/tests" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Страница с тестами"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Страница с тестами")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div><svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="dark:stroke-white stroke-black" d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5" stroke-width="2" stroke-linecap="round"></path></svg></div>`);
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f;
          if (_push2) {
            _push2(`${ssrInterpolate(((_a = unref(testStore).get_current_test.test) == null ? void 0 : _a.question.length) > 10 ? ((_b = unref(testStore).get_current_test.test) == null ? void 0 : _b.question.slice(0, 10)) + "..." : (_c = unref(testStore).get_current_test.test) == null ? void 0 : _c.question)}`);
          } else {
            return [
              createTextVNode(toDisplayString(((_d = unref(testStore).get_current_test.test) == null ? void 0 : _d.question.length) > 10 ? ((_e = unref(testStore).get_current_test.test) == null ? void 0 : _e.question.slice(0, 10)) + "..." : (_f = unref(testStore).get_current_test.test) == null ? void 0 : _f.question), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mx-auto w-10/12 my-10">Progressbar</div>`);
      _push(ssrRenderComponent(TheContentBlock, { class: "w-10/12 mx-auto" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            _push2(`<div class="flex max-md:flex-wrap"${_scopeId}><h1 class="w-8/12 max-md:w-full max-md:text-center max-md:text-lg max-md:p-0 max-md:mb-4 p-10 text-2xl"${_scopeId}>${ssrInterpolate((_a = unref(testStore).get_current_test.test) == null ? void 0 : _a.question)}</h1><div class="w-4/12 max-md:w-full flex flex-col gap-y-2"${_scopeId}><!--[-->`);
            ssrRenderList((_b = unref(testStore).get_current_test.test) == null ? void 0 : _b.options, (item) => {
              _push2(`<div class="border text-xl rounded-lg p-2 w-full dark:hover:bg-gray-700 hover:bg-gray-200 cursor-pointer transition-all"${_scopeId}><p${_scopeId}>${ssrInterpolate(item.text)}</p></div>`);
            });
            _push2(`<!--]--></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex max-md:flex-wrap" }, [
                createVNode("h1", { class: "w-8/12 max-md:w-full max-md:text-center max-md:text-lg max-md:p-0 max-md:mb-4 p-10 text-2xl" }, toDisplayString((_c = unref(testStore).get_current_test.test) == null ? void 0 : _c.question), 1),
                createVNode("div", { class: "w-4/12 max-md:w-full flex flex-col gap-y-2" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList((_d = unref(testStore).get_current_test.test) == null ? void 0 : _d.options, (item) => {
                    return openBlock(), createBlock("div", {
                      class: "border text-xl rounded-lg p-2 w-full dark:hover:bg-gray-700 hover:bg-gray-200 cursor-pointer transition-all",
                      onClick: ($event) => {
                        var _a2;
                        return unref(testStore).testAnswer({ test_id: (_a2 = unref(testStore).get_current_test.test) == null ? void 0 : _a2.test_id, answer: item.text }, _ctx.$router);
                      },
                      key: item.id
                    }, [
                      createVNode("p", null, toDisplayString(item.text), 1)
                    ], 8, ["onClick"]);
                  }), 128))
                ])
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base/tests/exam.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=exam-wbiS321z.js.map
