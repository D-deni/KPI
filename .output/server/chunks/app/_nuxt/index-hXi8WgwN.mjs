import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { useSSRContext, defineComponent, watchSyncEffect, withCtx, createTextVNode, toDisplayString, unref, createVNode, openBlock, createBlock, Fragment, renderList, ref, onUpdated, mergeProps, createCommentVNode, withDirectives, vModelSelect, TransitionGroup, vModelText, withModifiers } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { u as useTestList } from './test-WJMVHpv_.mjs';
import { u as useAuthStore } from './auth-a24Q8VGa.mjs';
import { _ as _sfc_main$5 } from './TheTextContent-rN29GJom.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-nvHjMUuE.mjs';
import { T as TheContentBlock } from './TheContentBlock-AeyxWvVh.mjs';
import { _ as _sfc_main$6 } from './TheButton-Af2-Kuec.mjs';
import { n as nuxtStorage } from '../../nuxt-storage.mjs';
import { _ as _sfc_main$7 } from './TheModal-1X0PcTyA.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-yVxbj29m.mjs';
import { _ as _sfc_main$8 } from './TheInput-6xiMcCQ9.mjs';
import { u as useCompanies } from './companies-WRcY7KOy.mjs';
import { toast } from 'vue3-toastify';
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
import '../server.mjs';
import 'vue-router';
import '@sindresorhus/slugify';
import 'tailwind-merge';
import 'animejs';
import 'axios';

const _imports_0 = "" + publicAssetsURL("img/2.png");
const _imports_1 = "" + publicAssetsURL("img/3.webp");
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TestContent",
  __ssrInlineRender: true,
  setup(__props) {
    const loadCurrentUser = useAuthStore();
    const testList = useTestList();
    testList.loadExam();
    const testType = ref({
      type: ""
    });
    onUpdated(() => {
      if (loadCurrentUser.user.exam_active === true) {
        testList.loadCurrentTest();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-y-10 w-full" }, _attrs))}><div class="w-full flex max-sm:flex-col max-sm:gap-y-4 gap-x-10 justify-center"><div class="w-5/12 max-sm:w-11/12 mx-auto">`);
      _push(ssrRenderComponent(TheContentBlock, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$5, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("\u041F\u043E \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("\u041F\u043E \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="justify-center flex"${_scopeId}><img class="rounded-lg"${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId}></div><div class="my-2"${_scopeId}><p class="text-sm tracking-wider"${_scopeId}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid atque commodi consectetur cupiditate distinctio dolores earum eius esse eum ipsam iste minus molestiae, natus necessitatibus neque nulla optio pariatur placeat porro quasi quia quibusdam, ratione reiciendis rem rerum sunt suscipit tempore unde velit! Accusantium amet asperiores assumenda atque dolorem dolores enim explicabo impedit iste magnam modi necessitatibus omnis placeat quae quidem quo repellendus reprehenderit, saepe soluta voluptates. Deleniti dolores eligendi, error laboriosam minima quasi quod repellendus temporibus unde. Debitis earum incidunt maiores vitae. Accusantium alias deleniti doloremque illo illum, itaque, nemo pariatur quidem ratione sapiente sunt tempora veritatis voluptate.</p></div><div class="mt-4 flex justify-center"${_scopeId}>`);
            if (!unref(loadCurrentUser).user.exam_active) {
              _push2(ssrRenderComponent(_sfc_main$6, {
                type: "success",
                class: "px-10 py-2 rounded-lg",
                onClick: ($event) => unref(testList).testStart({ usual: 0 }, _ctx.$router)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u041D\u0430\u0447\u0430\u0442\u044C"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u041D\u0430\u0447\u0430\u0442\u044C")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode(_sfc_main$5, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("\u041F\u043E \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438")), 1)
                ]),
                _: 1
              }),
              createVNode("div", { class: "justify-center flex" }, [
                createVNode("img", {
                  class: "rounded-lg",
                  src: _imports_0,
                  alt: ""
                })
              ]),
              createVNode("div", { class: "my-2" }, [
                createVNode("p", { class: "text-sm tracking-wider" }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid atque commodi consectetur cupiditate distinctio dolores earum eius esse eum ipsam iste minus molestiae, natus necessitatibus neque nulla optio pariatur placeat porro quasi quia quibusdam, ratione reiciendis rem rerum sunt suscipit tempore unde velit! Accusantium amet asperiores assumenda atque dolorem dolores enim explicabo impedit iste magnam modi necessitatibus omnis placeat quae quidem quo repellendus reprehenderit, saepe soluta voluptates. Deleniti dolores eligendi, error laboriosam minima quasi quod repellendus temporibus unde. Debitis earum incidunt maiores vitae. Accusantium alias deleniti doloremque illo illum, itaque, nemo pariatur quidem ratione sapiente sunt tempora veritatis voluptate.")
              ]),
              createVNode("div", {
                class: "mt-4 flex justify-center",
                onClick: ($event) => {
                  unref(testType).type = "testSpecial";
                  unref(nuxtStorage).localStorage.setData("testType", unref(testType).type);
                }
              }, [
                !unref(loadCurrentUser).user.exam_active ? (openBlock(), createBlock(_sfc_main$6, {
                  key: 0,
                  type: "success",
                  class: "px-10 py-2 rounded-lg",
                  onClick: ($event) => unref(testList).testStart({ usual: 0 }, _ctx.$router)
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("\u041D\u0430\u0447\u0430\u0442\u044C")), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"])) : createCommentVNode("", true)
              ], 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-5/12 max-sm:w-11/12 mx-auto">`);
      _push(ssrRenderComponent(TheContentBlock, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$5, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("\u041D\u0430 \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("\u041D\u0430 \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="justify-center h-full flex"${_scopeId}><img class="rounded-lg h-full"${ssrRenderAttr("src", _imports_1)} alt=""${_scopeId}></div><div class="my-2"${_scopeId}><p class="text-sm tracking-wider"${_scopeId}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid atque commodi consectetur cupiditate distinctio dolores earum eius esse eum ipsam iste minus molestiae, natus necessitatibus neque nulla optio pariatur placeat porro quasi quia quibusdam, ratione reiciendis rem rerum sunt suscipit tempore unde velit! Accusantium amet asperiores assumenda atque dolorem dolores enim explicabo impedit iste magnam modi necessitatibus omnis placeat quae quidem quo repellendus reprehenderit, saepe soluta voluptates. Deleniti dolores eligendi, error laboriosam minima quasi quod repellendus temporibus unde. Debitis earum incidunt maiores vitae. Accusantium alias deleniti doloremque illo illum, itaque, nemo pariatur quidem ratione sapiente sunt tempora veritatis voluptate.</p></div><div class="mt-4 flex justify-center"${_scopeId}>`);
            if (!unref(loadCurrentUser).user.exam_active) {
              _push2(ssrRenderComponent(_sfc_main$6, {
                type: "success",
                class: "px-10 py-2 rounded-lg",
                onClick: ($event) => unref(testList).testStart({ usual: 1 }, _ctx.$router)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u041D\u0430\u0447\u0430\u0442\u044C"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u041D\u0430\u0447\u0430\u0442\u044C")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode(_sfc_main$5, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("\u041D\u0430 \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442")), 1)
                ]),
                _: 1
              }),
              createVNode("div", { class: "justify-center h-full flex" }, [
                createVNode("img", {
                  class: "rounded-lg h-full",
                  src: _imports_1,
                  alt: ""
                })
              ]),
              createVNode("div", { class: "my-2" }, [
                createVNode("p", { class: "text-sm tracking-wider" }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid atque commodi consectetur cupiditate distinctio dolores earum eius esse eum ipsam iste minus molestiae, natus necessitatibus neque nulla optio pariatur placeat porro quasi quia quibusdam, ratione reiciendis rem rerum sunt suscipit tempore unde velit! Accusantium amet asperiores assumenda atque dolorem dolores enim explicabo impedit iste magnam modi necessitatibus omnis placeat quae quidem quo repellendus reprehenderit, saepe soluta voluptates. Deleniti dolores eligendi, error laboriosam minima quasi quod repellendus temporibus unde. Debitis earum incidunt maiores vitae. Accusantium alias deleniti doloremque illo illum, itaque, nemo pariatur quidem ratione sapiente sunt tempora veritatis voluptate.")
              ]),
              createVNode("div", {
                class: "mt-4 flex justify-center",
                onClick: ($event) => {
                  unref(testType).type = "testIq";
                  unref(nuxtStorage).localStorage.setData("testType", unref(testType).type);
                }
              }, [
                !unref(loadCurrentUser).user.exam_active ? (openBlock(), createBlock(_sfc_main$6, {
                  key: 0,
                  type: "success",
                  class: "px-10 py-2 rounded-lg",
                  onClick: ($event) => unref(testList).testStart({ usual: 1 }, _ctx.$router)
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("\u041D\u0430\u0447\u0430\u0442\u044C")), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"])) : createCommentVNode("", true)
              ], 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      if (unref(loadCurrentUser).user.exam_active) {
        _push(`<div>`);
        _push(ssrRenderComponent(TheContentBlock, { class: "w-10/12 mx-auto" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a, _b, _c, _d, _e, _f;
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$5, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0442\u0435\u0441\u0442"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0442\u0435\u0441\u0442")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<p class="text-center"${_scopeId}>`);
              if (unref(nuxtStorage).localStorage.getData("testType")) {
                _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("\u043F\u043E") + " ")}</span>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(nuxtStorage).localStorage.getData("testType") === "testIq") {
                _push2(`<span${_scopeId}>${ssrInterpolate("IQ")}</span>`);
              } else if (unref(nuxtStorage).localStorage.getData("testType") === "testSpecial") {
                _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("\u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"))}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</p><div class="p-4 w-full h-full flex max-md:flex-wrap border-t gap-x-4 dark:border-gray-500 mt-2"${_scopeId}><div class="w-5/12 max-md:w-full"${_scopeId}><div class="w-[250px] max-md:w-9/12 max-sm:w-full mx-auto"${_scopeId}>`);
              if (unref(nuxtStorage).localStorage.getData("testType") === "testSpecial") {
                _push2(`<img class="w-full h-full"${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId}>`);
              } else if (unref(nuxtStorage).localStorage.getData("testType") === "testIq") {
                _push2(`<img class="w-full h-full"${ssrRenderAttr("src", _imports_1)} alt=""${_scopeId}>`);
              } else {
                _push2(`<img class="w-full h-full"${ssrRenderAttr("src", _imports_1)} alt=""${_scopeId}>`);
              }
              _push2(`</div></div><div class="flex max-lg:flex-col items-center justify-around max-md:justify-center w-8/12 max-md:w-full gap-x-10 max-md:gap-y-4"${_scopeId}><div class="w-7/12 max-md:w-full"${_scopeId}><p class="text-gray-400 max-sm:text-sm tracking-widest"${_scopeId}>${ssrInterpolate(_ctx.$t("\u0412\u043E\u043F\u0440\u043E\u0441:"))}</p><p class="text-2xl max-sm:text-lg break-words"${_scopeId}>${ssrInterpolate(((_a = unref(testList).get_current_test.test) == null ? void 0 : _a.question.length) > 80 ? ((_b = unref(testList).get_current_test.test) == null ? void 0 : _b.question.slice(0, 80)) + "..." : (_c = unref(testList).get_current_test.test) == null ? void 0 : _c.question)}</p></div>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "/base/tests/exam",
                class: "text-2xl text-white max-sm:text-lg py-2 bg-blueDarkSemiLight rounded-full text-center w-4/12 max-lg:w-7/12 max-md:w-full"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              return [
                createVNode(_sfc_main$5, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0442\u0435\u0441\u0442")), 1)
                  ]),
                  _: 1
                }),
                createVNode("p", { class: "text-center" }, [
                  unref(nuxtStorage).localStorage.getData("testType") ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(_ctx.$t("\u043F\u043E") + " "), 1)) : createCommentVNode("", true),
                  unref(nuxtStorage).localStorage.getData("testType") === "testIq" ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString("IQ"))) : unref(nuxtStorage).localStorage.getData("testType") === "testSpecial" ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(_ctx.$t("\u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438")), 1)) : createCommentVNode("", true)
                ]),
                createVNode("div", {
                  class: "p-4 w-full h-full flex max-md:flex-wrap border-t gap-x-4 dark:border-gray-500 mt-2",
                  onClick: ($event) => console.log(unref(nuxtStorage).localStorage.getData("testType"))
                }, [
                  createVNode("div", { class: "w-5/12 max-md:w-full" }, [
                    createVNode("div", { class: "w-[250px] max-md:w-9/12 max-sm:w-full mx-auto" }, [
                      unref(nuxtStorage).localStorage.getData("testType") === "testSpecial" ? (openBlock(), createBlock("img", {
                        key: 0,
                        class: "w-full h-full",
                        src: _imports_0,
                        alt: ""
                      })) : unref(nuxtStorage).localStorage.getData("testType") === "testIq" ? (openBlock(), createBlock("img", {
                        key: 1,
                        class: "w-full h-full",
                        src: _imports_1,
                        alt: ""
                      })) : (openBlock(), createBlock("img", {
                        key: 2,
                        class: "w-full h-full",
                        src: _imports_1,
                        alt: ""
                      }))
                    ])
                  ]),
                  createVNode("div", { class: "flex max-lg:flex-col items-center justify-around max-md:justify-center w-8/12 max-md:w-full gap-x-10 max-md:gap-y-4" }, [
                    createVNode("div", { class: "w-7/12 max-md:w-full" }, [
                      createVNode("p", { class: "text-gray-400 max-sm:text-sm tracking-widest" }, toDisplayString(_ctx.$t("\u0412\u043E\u043F\u0440\u043E\u0441:")), 1),
                      createVNode("p", { class: "text-2xl max-sm:text-lg break-words" }, toDisplayString(((_d = unref(testList).get_current_test.test) == null ? void 0 : _d.question.length) > 80 ? ((_e = unref(testList).get_current_test.test) == null ? void 0 : _e.question.slice(0, 80)) + "..." : (_f = unref(testList).get_current_test.test) == null ? void 0 : _f.question), 1)
                    ]),
                    createVNode(_component_NuxtLink, {
                      to: "/base/tests/exam",
                      class: "text-2xl text-white max-sm:text-lg py-2 bg-blueDarkSemiLight rounded-full text-center w-4/12 max-lg:w-7/12 max-md:w-full"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C")), 1)
                      ]),
                      _: 1
                    })
                  ])
                ], 8, ["onClick"])
              ];
            }
          }),
          _: 1
        }, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tests/TestContent.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex max-lg:flex-wrap gap-y-4 justify-center gap-x-10 my-10 mx-auto w-full" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tests/TestUI/TestContentCreateElems.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const TestContentCreateElems = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TestCreate",
  __ssrInlineRender: true,
  props: {
    showCreate: {
      type: Boolean,
      default: false
    },
    trimi: {
      type: Boolean,
      default: null
    },
    checkAnswer: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    const department = useCompanies();
    const test = useTestList();
    const selectedTestType = ref("");
    const props = __props;
    const createForm = ref({
      answer: "",
      options_list: [
        {},
        {}
      ],
      department_id: null,
      question: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><button class="font-bold tracking-widest text-white bg-blue-400 mx-auto py-4 rounded-xl px-4 text-sm">${ssrInterpolate(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0442\u0435\u0441\u0442"))}</button>`);
      if (__props.showCreate) {
        _push(ssrRenderComponent(_sfc_main$7, {
          onShowModal: ($event) => __props.showCreate = !__props.showCreate
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$5, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0442\u0435\u0441\u0442"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0442\u0435\u0441\u0442")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<form class="!overflow-x-hidden p-2"${_scopeId}>`);
              _push2(ssrRenderComponent(TestContentCreateElems, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex flex-wrap gap-y-2 justify-center gap-x-10"${_scopeId2}><button type="button" class="${ssrRenderClass([{ "bg-gray-700 text-white": unref(selectedTestType) === "testIQ", "bg-red-400 text-white": unref(selectedTestType) === "error" }, "border px-6 py-4 rounded-lg transition-all"])}"${_scopeId2}>${ssrInterpolate(_ctx.$t("\u041F\u043E IQ"))}</button><button type="button" class="${ssrRenderClass([{ "bg-gray-700 text-white": unref(selectedTestType) === "testSpecial", "bg-red-400 text-white": unref(selectedTestType) === "error" }, "border px-6 py-4 rounded-lg transition-all"])}"${_scopeId2}>${ssrInterpolate(_ctx.$t("\u041F\u043E \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"))}</button></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex flex-wrap gap-y-2 justify-center gap-x-10" }, [
                        createVNode("button", {
                          type: "button",
                          class: ["border px-6 py-4 rounded-lg transition-all", { "bg-gray-700 text-white": unref(selectedTestType) === "testIQ", "bg-red-400 text-white": unref(selectedTestType) === "error" }],
                          onClick: ($event) => {
                            selectedTestType.value = "testIQ";
                            unref(createForm).department_id = null;
                          }
                        }, toDisplayString(_ctx.$t("\u041F\u043E IQ")), 11, ["onClick"]),
                        createVNode("button", {
                          type: "button",
                          class: ["border px-6 py-4 rounded-lg transition-all", { "bg-gray-700 text-white": unref(selectedTestType) === "testSpecial", "bg-red-400 text-white": unref(selectedTestType) === "error" }],
                          onClick: ($event) => selectedTestType.value = "testSpecial"
                        }, toDisplayString(_ctx.$t("\u041F\u043E \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438")), 11, ["onClick"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              if (unref(selectedTestType) === "testSpecial") {
                _push2(ssrRenderComponent(TestContentCreateElems, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    var _a, _b;
                    if (_push3) {
                      _push3(`<div class="flex flex-col w-full items-center"${_scopeId2}><p${_scopeId2}>${ssrInterpolate(_ctx.$t("\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442"))}<span class="text-red-500 ml-2"${_scopeId2}>*</span></p><select class="w-7/12 max-lg:w-full dark:bg-gray-300 dark:border-none border dark:text-black text-sm rounded-lg py-4 px-2"${_scopeId2}><!--[-->`);
                      ssrRenderList((_a = unref(department).get_all_department) == null ? void 0 : _a.results, (item) => {
                        _push3(`<option${ssrRenderAttr("value", item.id)}${_scopeId2}>${ssrInterpolate(item.name)}</option>`);
                      });
                      _push3(`<!--]--></select></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "flex flex-col w-full items-center" }, [
                          createVNode("p", null, [
                            createTextVNode(toDisplayString(_ctx.$t("\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442")), 1),
                            createVNode("span", { class: "text-red-500 ml-2" }, "*")
                          ]),
                          withDirectives(createVNode("select", {
                            class: "w-7/12 max-lg:w-full dark:bg-gray-300 dark:border-none border dark:text-black text-sm rounded-lg py-4 px-2",
                            "onUpdate:modelValue": ($event) => unref(createForm).department_id = $event
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList((_b = unref(department).get_all_department) == null ? void 0 : _b.results, (item) => {
                              return openBlock(), createBlock("option", {
                                value: item.id
                              }, toDisplayString(item.name), 9, ["value"]);
                            }), 256))
                          ], 8, ["onUpdate:modelValue"]), [
                            [vModelSelect, unref(createForm).department_id]
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
              _push2(ssrRenderComponent(TestContentCreateElems, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="w-full"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$8, {
                      type: "textarea",
                      required: true,
                      label: _ctx.$t("\u0412\u043E\u043F\u0440\u043E\u0441"),
                      trimi: unref(createForm).question.trim() == "" && unref(createForm).question.length !== 0 ? true : false,
                      modelValue: unref(createForm).question,
                      "onUpdate:modelValue": ($event) => unref(createForm).question = $event
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "w-full" }, [
                        createVNode(_sfc_main$8, {
                          type: "textarea",
                          required: true,
                          label: _ctx.$t("\u0412\u043E\u043F\u0440\u043E\u0441"),
                          trimi: unref(createForm).question.trim() == "" && unref(createForm).question.length !== 0 ? true : false,
                          modelValue: unref(createForm).question,
                          "onUpdate:modelValue": ($event) => unref(createForm).question = $event
                        }, null, 8, ["label", "trimi", "modelValue", "onUpdate:modelValue"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(TestContentCreateElems, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="w-full"${_scopeId2}><div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$6, {
                      class: "px-10 py-2 mx-auto flex justify-center rounded-full",
                      type: "change",
                      t: "button",
                      onClick: ($event) => unref(createForm).options_list.push({ text: "" })
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$t("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0432\u0435\u0442"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0432\u0435\u0442")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<p class="text-center text-sm text-gray-300 my-2"${_scopeId2}>(${ssrInterpolate(_ctx.$t("\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442"))})</p></div><ul${ssrRenderAttrs({
                      clas: "=",
                      name: "list",
                      class: "w-full flex flex-col gap-y-4"
                    })}>`);
                    ssrRenderList(unref(createForm).options_list, (item, id) => {
                      var _a;
                      _push3(`<li class="flex max-[400px]:flex-col max-[400px]: gap-x-2 items-center w-full"${_scopeId2}><div class="flex flex-col w-full"${_scopeId2}><span${_scopeId2}>\u041E\u0442\u0432\u0435\u0442 `);
                      if (id === 0 || id === 1) {
                        _push3(`<span class="text-red-500"${_scopeId2}>*</span>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</span><input class="${ssrRenderClass([{ "!bg-green-500 text-white": ((_a = __props.checkAnswer) == null ? void 0 : _a.id) === id }, "w-full p-2 rounded-lg dark:bg-gray-500 bg-gray-200"])}" type="text"${ssrRenderAttr("value", item.text)}${_scopeId2}></div><div class="flex gap-x-2 mt-8"${_scopeId2}><div class="cursor-pointer bg-blueSemiLight p-2 rounded-lg"${_scopeId2}><svg class="fill-white" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path fill-rule="evenodd" clip-rule="evenodd" d="M21.2287 6.60355C21.6193 6.99407 21.6193 7.62723 21.2287 8.01776L10.2559 18.9906C9.86788 19.3786 9.23962 19.3814 8.84811 18.9969L2.66257 12.9218C2.26855 12.5349 2.26284 11.9017 2.64983 11.5077L3.35054 10.7942C3.73753 10.4002 4.37067 10.3945 4.7647 10.7815L9.53613 15.4677L19.1074 5.89644C19.4979 5.50592 20.1311 5.50591 20.5216 5.89644L21.2287 6.60355Z"${_scopeId2}></path></svg></div>`);
                      if (id !== 0 && id !== 1) {
                        _push3(`<div class="cursor-pointer bg-red-400 p-2 rounded-lg"${_scopeId2}><svg class="fill-white" width="20px" height="20px" viewBox="-3.5 0 19 19" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z"${_scopeId2}></path></svg></div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div></li>`);
                    });
                    _push3(`</ul></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "w-full" }, [
                        createVNode("div", null, [
                          createVNode(_sfc_main$6, {
                            class: "px-10 py-2 mx-auto flex justify-center rounded-full",
                            type: "change",
                            t: "button",
                            onClick: ($event) => unref(createForm).options_list.push({ text: "" })
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0432\u0435\u0442")), 1)
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode("p", { class: "text-center text-sm text-gray-300 my-2" }, "(" + toDisplayString(_ctx.$t("\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442")) + ")", 1)
                        ]),
                        createVNode(TransitionGroup, {
                          clas: "=",
                          name: "list",
                          class: "w-full flex flex-col gap-y-4",
                          tag: "ul"
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(createForm).options_list, (item, id) => {
                              var _a;
                              return openBlock(), createBlock("li", {
                                class: "flex max-[400px]:flex-col max-[400px]: gap-x-2 items-center w-full",
                                key: id
                              }, [
                                createVNode("div", { class: "flex flex-col w-full" }, [
                                  createVNode("span", null, [
                                    createTextVNode("\u041E\u0442\u0432\u0435\u0442 "),
                                    id === 0 || id === 1 ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "text-red-500"
                                    }, "*")) : createCommentVNode("", true)
                                  ]),
                                  withDirectives((openBlock(), createBlock("input", {
                                    class: ["w-full p-2 rounded-lg dark:bg-gray-500 bg-gray-200", { "!bg-green-500 text-white": ((_a = __props.checkAnswer) == null ? void 0 : _a.id) === id }],
                                    key: id,
                                    type: "text",
                                    "onUpdate:modelValue": ($event) => item.text = $event
                                  }, null, 10, ["onUpdate:modelValue"])), [
                                    [vModelText, item.text]
                                  ])
                                ]),
                                createVNode("div", { class: "flex gap-x-2 mt-8" }, [
                                  createVNode("div", {
                                    class: "cursor-pointer bg-blueSemiLight p-2 rounded-lg",
                                    onClick: ($event) => __props.checkAnswer = { id, item }
                                  }, [
                                    (openBlock(), createBlock("svg", {
                                      class: "fill-white",
                                      width: "20px",
                                      height: "20px",
                                      viewBox: "0 0 24 24",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg"
                                    }, [
                                      createVNode("path", {
                                        "fill-rule": "evenodd",
                                        "clip-rule": "evenodd",
                                        d: "M21.2287 6.60355C21.6193 6.99407 21.6193 7.62723 21.2287 8.01776L10.2559 18.9906C9.86788 19.3786 9.23962 19.3814 8.84811 18.9969L2.66257 12.9218C2.26855 12.5349 2.26284 11.9017 2.64983 11.5077L3.35054 10.7942C3.73753 10.4002 4.37067 10.3945 4.7647 10.7815L9.53613 15.4677L19.1074 5.89644C19.4979 5.50592 20.1311 5.50591 20.5216 5.89644L21.2287 6.60355Z"
                                      })
                                    ]))
                                  ], 8, ["onClick"]),
                                  id !== 0 && id !== 1 ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    onClick: ($event) => unref(createForm).options_list.splice(id, 1),
                                    class: "cursor-pointer bg-red-400 p-2 rounded-lg"
                                  }, [
                                    (openBlock(), createBlock("svg", {
                                      class: "fill-white",
                                      width: "20px",
                                      height: "20px",
                                      viewBox: "-3.5 0 19 19",
                                      xmlns: "http://www.w3.org/2000/svg"
                                    }, [
                                      createVNode("path", { d: "M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z" })
                                    ]))
                                  ], 8, ["onClick"])) : createCommentVNode("", true)
                                ])
                              ]);
                            }), 128))
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(TestContentCreateElems, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$6, {
                      class: "py-2 max-sm:w-full px-6 rounded-full",
                      t: "button",
                      type: "danger",
                      onClick: ($event) => __props.showCreate = false
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_sfc_main$6, {
                      class: "py-2 max-sm:w-full px-6 rounded-full",
                      t: "submit",
                      type: "change"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$6, {
                        class: "py-2 max-sm:w-full px-6 rounded-full",
                        t: "button",
                        type: "danger",
                        onClick: ($event) => __props.showCreate = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C")), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_sfc_main$6, {
                        class: "py-2 max-sm:w-full px-6 rounded-full",
                        t: "submit",
                        type: "change"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")), 1)
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</form>`);
            } else {
              return [
                createVNode(_sfc_main$5, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0442\u0435\u0441\u0442")), 1)
                  ]),
                  _: 1
                }),
                createVNode("form", {
                  class: "!overflow-x-hidden p-2",
                  onSubmit: withModifiers(() => {
                    var _a;
                    if (unref(createForm).options_list.find((e) => e.text.trim() == "")) {
                      unref(toast).error("\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u043F\u0443\u0441\u0442\u044B\u0435 \u043F\u043E\u043B\u044F", { autoClose: 1500, theme: "auto" });
                    } else if (unref(selectedTestType) === "") {
                      selectedTestType.value = "error";
                      unref(toast).error("\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0442\u0438\u043F \u0442\u0435\u0441\u0442\u0430", { autoClose: 1500, theme: "auto" });
                    } else if (unref(selectedTestType) === "testSpecial" && !unref(createForm).department_id) {
                      unref(toast).error("\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442", { autoClose: 1500, theme: "auto" });
                    } else {
                      unref(test).createTest({ test: unref(createForm), answer: (_a = props.checkAnswer.item) == null ? void 0 : _a.text, options: unref(createForm).options_list.filter((e) => e.text).map((e) => e.text) }).then((res) => {
                        unref(test).loadAllTest({ page: 1, limit: 20 });
                      });
                    }
                  }, ["prevent"])
                }, [
                  createVNode(TestContentCreateElems, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex flex-wrap gap-y-2 justify-center gap-x-10" }, [
                        createVNode("button", {
                          type: "button",
                          class: ["border px-6 py-4 rounded-lg transition-all", { "bg-gray-700 text-white": unref(selectedTestType) === "testIQ", "bg-red-400 text-white": unref(selectedTestType) === "error" }],
                          onClick: ($event) => {
                            selectedTestType.value = "testIQ";
                            unref(createForm).department_id = null;
                          }
                        }, toDisplayString(_ctx.$t("\u041F\u043E IQ")), 11, ["onClick"]),
                        createVNode("button", {
                          type: "button",
                          class: ["border px-6 py-4 rounded-lg transition-all", { "bg-gray-700 text-white": unref(selectedTestType) === "testSpecial", "bg-red-400 text-white": unref(selectedTestType) === "error" }],
                          onClick: ($event) => selectedTestType.value = "testSpecial"
                        }, toDisplayString(_ctx.$t("\u041F\u043E \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438")), 11, ["onClick"])
                      ])
                    ]),
                    _: 1
                  }),
                  unref(selectedTestType) === "testSpecial" ? (openBlock(), createBlock(TestContentCreateElems, { key: 0 }, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        createVNode("div", { class: "flex flex-col w-full items-center" }, [
                          createVNode("p", null, [
                            createTextVNode(toDisplayString(_ctx.$t("\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442")), 1),
                            createVNode("span", { class: "text-red-500 ml-2" }, "*")
                          ]),
                          withDirectives(createVNode("select", {
                            class: "w-7/12 max-lg:w-full dark:bg-gray-300 dark:border-none border dark:text-black text-sm rounded-lg py-4 px-2",
                            "onUpdate:modelValue": ($event) => unref(createForm).department_id = $event
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList((_a = unref(department).get_all_department) == null ? void 0 : _a.results, (item) => {
                              return openBlock(), createBlock("option", {
                                value: item.id
                              }, toDisplayString(item.name), 9, ["value"]);
                            }), 256))
                          ], 8, ["onUpdate:modelValue"]), [
                            [vModelSelect, unref(createForm).department_id]
                          ])
                        ])
                      ];
                    }),
                    _: 1
                  })) : createCommentVNode("", true),
                  createVNode(TestContentCreateElems, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "w-full" }, [
                        createVNode(_sfc_main$8, {
                          type: "textarea",
                          required: true,
                          label: _ctx.$t("\u0412\u043E\u043F\u0440\u043E\u0441"),
                          trimi: unref(createForm).question.trim() == "" && unref(createForm).question.length !== 0 ? true : false,
                          modelValue: unref(createForm).question,
                          "onUpdate:modelValue": ($event) => unref(createForm).question = $event
                        }, null, 8, ["label", "trimi", "modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(TestContentCreateElems, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "w-full" }, [
                        createVNode("div", null, [
                          createVNode(_sfc_main$6, {
                            class: "px-10 py-2 mx-auto flex justify-center rounded-full",
                            type: "change",
                            t: "button",
                            onClick: ($event) => unref(createForm).options_list.push({ text: "" })
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0432\u0435\u0442")), 1)
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode("p", { class: "text-center text-sm text-gray-300 my-2" }, "(" + toDisplayString(_ctx.$t("\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442")) + ")", 1)
                        ]),
                        createVNode(TransitionGroup, {
                          clas: "=",
                          name: "list",
                          class: "w-full flex flex-col gap-y-4",
                          tag: "ul"
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(createForm).options_list, (item, id) => {
                              var _a;
                              return openBlock(), createBlock("li", {
                                class: "flex max-[400px]:flex-col max-[400px]: gap-x-2 items-center w-full",
                                key: id
                              }, [
                                createVNode("div", { class: "flex flex-col w-full" }, [
                                  createVNode("span", null, [
                                    createTextVNode("\u041E\u0442\u0432\u0435\u0442 "),
                                    id === 0 || id === 1 ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "text-red-500"
                                    }, "*")) : createCommentVNode("", true)
                                  ]),
                                  withDirectives((openBlock(), createBlock("input", {
                                    class: ["w-full p-2 rounded-lg dark:bg-gray-500 bg-gray-200", { "!bg-green-500 text-white": ((_a = __props.checkAnswer) == null ? void 0 : _a.id) === id }],
                                    key: id,
                                    type: "text",
                                    "onUpdate:modelValue": ($event) => item.text = $event
                                  }, null, 10, ["onUpdate:modelValue"])), [
                                    [vModelText, item.text]
                                  ])
                                ]),
                                createVNode("div", { class: "flex gap-x-2 mt-8" }, [
                                  createVNode("div", {
                                    class: "cursor-pointer bg-blueSemiLight p-2 rounded-lg",
                                    onClick: ($event) => __props.checkAnswer = { id, item }
                                  }, [
                                    (openBlock(), createBlock("svg", {
                                      class: "fill-white",
                                      width: "20px",
                                      height: "20px",
                                      viewBox: "0 0 24 24",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg"
                                    }, [
                                      createVNode("path", {
                                        "fill-rule": "evenodd",
                                        "clip-rule": "evenodd",
                                        d: "M21.2287 6.60355C21.6193 6.99407 21.6193 7.62723 21.2287 8.01776L10.2559 18.9906C9.86788 19.3786 9.23962 19.3814 8.84811 18.9969L2.66257 12.9218C2.26855 12.5349 2.26284 11.9017 2.64983 11.5077L3.35054 10.7942C3.73753 10.4002 4.37067 10.3945 4.7647 10.7815L9.53613 15.4677L19.1074 5.89644C19.4979 5.50592 20.1311 5.50591 20.5216 5.89644L21.2287 6.60355Z"
                                      })
                                    ]))
                                  ], 8, ["onClick"]),
                                  id !== 0 && id !== 1 ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    onClick: ($event) => unref(createForm).options_list.splice(id, 1),
                                    class: "cursor-pointer bg-red-400 p-2 rounded-lg"
                                  }, [
                                    (openBlock(), createBlock("svg", {
                                      class: "fill-white",
                                      width: "20px",
                                      height: "20px",
                                      viewBox: "-3.5 0 19 19",
                                      xmlns: "http://www.w3.org/2000/svg"
                                    }, [
                                      createVNode("path", { d: "M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z" })
                                    ]))
                                  ], 8, ["onClick"])) : createCommentVNode("", true)
                                ])
                              ]);
                            }), 128))
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(TestContentCreateElems, null, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$6, {
                        class: "py-2 max-sm:w-full px-6 rounded-full",
                        t: "button",
                        type: "danger",
                        onClick: ($event) => __props.showCreate = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C")), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_sfc_main$6, {
                        class: "py-2 max-sm:w-full px-6 rounded-full",
                        t: "submit",
                        type: "change"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ], 40, ["onSubmit"])
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tests/TestCreate.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TestLists",
  __ssrInlineRender: true,
  props: {
    test: {
      type: Object,
      default: () => {
      }
    },
    openTest: {
      type: Boolean,
      default: false
    },
    showTestError: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const testList = useTestList();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="p-2 border flex items-center justify-between cursor-pointer rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"><div class="w-full"><p>${ssrInterpolate(((_a = __props.test) == null ? void 0 : _a.question.length) > 20 ? ((_b = __props.test.question) == null ? void 0 : _b.slice(0, 20)) + "..." : (_c = __props.test) == null ? void 0 : _c.question)}</p></div><div><div class="cursor-pointer bg-red-400 p-2 rounded-lg"><svg class="fill-white" width="20px" height="20px" viewBox="-3.5 0 19 19" xmlns="http://www.w3.org/2000/svg"><path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z"></path></svg></div></div></div>`);
      if (__props.openTest) {
        _push(ssrRenderComponent(_sfc_main$7, {
          onShowModal: ($event) => __props.openTest = !__props.openTest
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$5, { class: "break-words" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u0422\u0435\u0441\u0442:") + " " + __props.test.question)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u0422\u0435\u0441\u0442:") + " " + __props.test.question), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<p class="my-2"${_scopeId}>${ssrInterpolate(_ctx.$t("\u0412\u0430\u0440\u0438\u0430\u043D\u0442\u044B \u043E\u0442\u0432\u0435\u0442\u0430:"))}</p><div class="flex gap-x-2 w-full justify-center max-lg:flex-wrap gap-y-2"${_scopeId}><!--[-->`);
              ssrRenderList(__props.test.options, (item) => {
                _push2(`<div class="max-lg:w-full w-6/12"${_scopeId}><p class="border p-2 rounded-lg break-words"${_scopeId}>${ssrInterpolate(item.text)}</p></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                createVNode(_sfc_main$5, { class: "break-words" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("\u0422\u0435\u0441\u0442:") + " " + __props.test.question), 1)
                  ]),
                  _: 1
                }),
                createVNode("p", { class: "my-2" }, toDisplayString(_ctx.$t("\u0412\u0430\u0440\u0438\u0430\u043D\u0442\u044B \u043E\u0442\u0432\u0435\u0442\u0430:")), 1),
                createVNode("div", { class: "flex gap-x-2 w-full justify-center max-lg:flex-wrap gap-y-2" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.test.options, (item) => {
                    return openBlock(), createBlock("div", { class: "max-lg:w-full w-6/12" }, [
                      createVNode("p", { class: "border p-2 rounded-lg break-words" }, toDisplayString(item.text), 1)
                    ]);
                  }), 256))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.showTestError) {
        _push(ssrRenderComponent(_sfc_main$7, {
          onShowModal: ($event) => __props.showTestError = !__props.showTestError
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$5, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0442\u0435\u0441\u0442?"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0442\u0435\u0441\u0442?")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<p class="text-center text-xl tracking-widest"${_scopeId}>${ssrInterpolate(_ctx.$t("\u0423\u0434\u0430\u043B\u0451\u043D\u043D\u044B\u0435 \u0442\u0435\u0441\u0442\u044B \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0443") + " ")}<span class="font-bold underline"${_scopeId}>${ssrInterpolate(_ctx.$t("\u043D\u0435 \u043F\u043E\u0434\u043B\u0435\u0436\u0430\u0442"))}</span></p><div class="flex justify-center gap-x-10 mt-10"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$6, {
                class: "px-10 py-2 rounded-full",
                type: "danger",
                onClick: ($event) => __props.showTestError = false
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
              _push2(ssrRenderComponent(_sfc_main$6, {
                class: "px-10 py-2 rounded-full",
                type: "success",
                onClick: ($event) => {
                  var _a2;
                  return unref(testList).deleteTest({ test_id: (_a2 = __props.test) == null ? void 0 : _a2.id });
                }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u0423\u0434\u0430\u043B\u0438\u0442\u044C"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u0423\u0434\u0430\u043B\u0438\u0442\u044C")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode(_sfc_main$5, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0442\u0435\u0441\u0442?")), 1)
                  ]),
                  _: 1
                }),
                createVNode("p", { class: "text-center text-xl tracking-widest" }, [
                  createTextVNode(toDisplayString(_ctx.$t("\u0423\u0434\u0430\u043B\u0451\u043D\u043D\u044B\u0435 \u0442\u0435\u0441\u0442\u044B \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0443") + " "), 1),
                  createVNode("span", { class: "font-bold underline" }, toDisplayString(_ctx.$t("\u043D\u0435 \u043F\u043E\u0434\u043B\u0435\u0436\u0430\u0442")), 1)
                ]),
                createVNode("div", { class: "flex justify-center gap-x-10 mt-10" }, [
                  createVNode(_sfc_main$6, {
                    class: "px-10 py-2 rounded-full",
                    type: "danger",
                    onClick: ($event) => __props.showTestError = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0430")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_sfc_main$6, {
                    class: "px-10 py-2 rounded-full",
                    type: "success",
                    onClick: ($event) => {
                      var _a2;
                      return unref(testList).deleteTest({ test_id: (_a2 = __props.test) == null ? void 0 : _a2.id });
                    }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u0423\u0434\u0430\u043B\u0438\u0442\u044C")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tests/TestLists.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    testElem: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    const user = useAuthStore();
    const testContent = useTestList();
    watchSyncEffect(() => {
      var _a;
      if ((_a = user.get_user.permissions) == null ? void 0 : _a.find((e) => e.name_en === "test.create")) {
        testContent.loadAllTest({ limit: 20, page: 1, usual: 0 });
        testContent.loadAllTest({ limit: 20, page: 1, usual: 1 });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$5, { "text-type": "pageTitle" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0441 \u0442\u0435\u0441\u0442\u0430\u043C\u0438"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0441 \u0442\u0435\u0441\u0442\u0430\u043C\u0438")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center gap-x-6">`);
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(`</div>`);
      if ((_b = (_a = unref(user).get_user) == null ? void 0 : _a.permissions) == null ? void 0 : _b.find((e) => e.name_en === "task.create")) {
        _push(`<div class="flex my-10 gap-x-2 justify-center">`);
        _push(ssrRenderComponent(TheContentBlock, { class: "w-11/12 mx-auto" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$2, { class: "mx-auto mb-4" }, null, _parent2, _scopeId));
              _push2(`<div class="flex max-md:flex-wrap max-md:gap-y-4 gap-x-4"${_scopeId}>`);
              _push2(ssrRenderComponent(TheContentBlock, { class: "w-6/12 max-md:w-full" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a2, _b2;
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$5, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$t("IQ \u0442\u0435\u0441\u0442\u044B"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("IQ \u0442\u0435\u0441\u0442\u044B")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<div class="flex flex-col gap-y-2"${_scopeId2}><!--[-->`);
                    ssrRenderList((_a2 = unref(testContent).get_test_iq) == null ? void 0 : _a2.results, (item) => {
                      _push3(ssrRenderComponent(_sfc_main$1, { test: item }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    return [
                      createVNode(_sfc_main$5, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("IQ \u0442\u0435\u0441\u0442\u044B")), 1)
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "flex flex-col gap-y-2" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList((_b2 = unref(testContent).get_test_iq) == null ? void 0 : _b2.results, (item) => {
                          return openBlock(), createBlock(_sfc_main$1, { test: item }, null, 8, ["test"]);
                        }), 256))
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(TheContentBlock, { class: "w-6/12 max-md:w-full" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a2, _b2;
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$5, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$t("\u0422\u0435\u0441\u0442\u044B \u043F\u043E \u0421\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("\u0422\u0435\u0441\u0442\u044B \u043F\u043E \u0421\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<div class="flex flex-col gap-y-2"${_scopeId2}><!--[-->`);
                    ssrRenderList((_a2 = unref(testContent).get_test_special) == null ? void 0 : _a2.results, (item) => {
                      _push3(ssrRenderComponent(_sfc_main$1, { test: item }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    return [
                      createVNode(_sfc_main$5, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("\u0422\u0435\u0441\u0442\u044B \u043F\u043E \u0421\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438")), 1)
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "flex flex-col gap-y-2" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList((_b2 = unref(testContent).get_test_special) == null ? void 0 : _b2.results, (item) => {
                          return openBlock(), createBlock(_sfc_main$1, { test: item }, null, 8, ["test"]);
                        }), 256))
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode(_sfc_main$2, { class: "mx-auto mb-4" }),
                createVNode("div", { class: "flex max-md:flex-wrap max-md:gap-y-4 gap-x-4" }, [
                  createVNode(TheContentBlock, { class: "w-6/12 max-md:w-full" }, {
                    default: withCtx(() => {
                      var _a2;
                      return [
                        createVNode(_sfc_main$5, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("IQ \u0442\u0435\u0441\u0442\u044B")), 1)
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "flex flex-col gap-y-2" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList((_a2 = unref(testContent).get_test_iq) == null ? void 0 : _a2.results, (item) => {
                            return openBlock(), createBlock(_sfc_main$1, { test: item }, null, 8, ["test"]);
                          }), 256))
                        ])
                      ];
                    }),
                    _: 1
                  }),
                  createVNode(TheContentBlock, { class: "w-6/12 max-md:w-full" }, {
                    default: withCtx(() => {
                      var _a2;
                      return [
                        createVNode(_sfc_main$5, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("\u0422\u0435\u0441\u0442\u044B \u043F\u043E \u0421\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438")), 1)
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "flex flex-col gap-y-2" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList((_a2 = unref(testContent).get_test_special) == null ? void 0 : _a2.results, (item) => {
                            return openBlock(), createBlock(_sfc_main$1, { test: item }, null, 8, ["test"]);
                          }), 256))
                        ])
                      ];
                    }),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base/tests/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-hXi8WgwN.mjs.map
