import { useSSRContext, defineComponent, watchEffect, unref, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, createVNode, ref, withModifiers, mergeProps, createCommentVNode, Fragment, renderList, Transition } from 'vue';
import { r as useSeoMeta } from '../server.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _sfc_main$c } from './TheTextContent-rN29GJom.mjs';
import { _ as _sfc_main$d } from './TheSearch-0oEaP3Jw.mjs';
import { _ as _sfc_main$e } from './TheButton-Jrv5tshN.mjs';
import { _ as _sfc_main$f } from './TheModal-1X0PcTyA.mjs';
import { _ as _sfc_main$g } from './TheInput-6xiMcCQ9.mjs';
import { u as useCompanies } from './companies-Vl6LYc-q.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-yVxbj29m.mjs';
import { u as useAuthStore } from './auth-ltfjqTsG.mjs';
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { _ as __nuxt_component_0 } from './nuxt-link-nvHjMUuE.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectCreative } from 'swiper/modules';
import { Chart, ArcElement, Tooltip, Legend, RadialLinearScale } from 'chart.js';
import { PolarArea } from 'vue-chartjs';
import { T as TheContentBlock } from './TheContentBlock-AeyxWvVh.mjs';
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
import 'vue-router';
import '@sindresorhus/slugify';
import 'tailwind-merge';
import 'animejs';
import '../../nuxt-storage.mjs';
import 'axios';
import 'vue3-toastify';

const _sfc_main$b = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex max-lg:flex-wrap gap-y-4 justify-center gap-x-10 my-10 mx-auto w-full" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Company/admin/adminUI/CompanyContentCreateElems.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const CompanyContentCreateElems = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "CompanyCreate",
  __ssrInlineRender: true,
  props: {
    showCreateCompany: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const createCompany = useCompanies();
    const createForm = ref({
      name: "",
      address: "",
      description: "",
      email: "",
      logo_file: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$e, {
        class: "w-full h-full",
        type: "signIn",
        onClick: ($event) => __props.showCreateCompany = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044E"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044E")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (__props.showCreateCompany) {
        _push(ssrRenderComponent(_sfc_main$f, {
          onShowModal: ($event) => {
            __props.showCreateCompany = !__props.showCreateCompany;
            !__props.showCreateCompany ? createForm.value = {} : createForm.value = {};
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<form${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$c, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(CompanyContentCreateElems, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="w-6/12"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$g, {
                      type: "text",
                      label: _ctx.$t("\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"),
                      modelValue: unref(createForm).name,
                      "onUpdate:modelValue": ($event) => unref(createForm).name = $event
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="w-6/12"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$g, {
                      type: "text",
                      label: _ctx.$t("\u0410\u0434\u0440\u0435\u0441"),
                      modelValue: unref(createForm).address,
                      "onUpdate:modelValue": ($event) => unref(createForm).address = $event
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "w-6/12" }, [
                        createVNode(_sfc_main$g, {
                          type: "text",
                          label: _ctx.$t("\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"),
                          modelValue: unref(createForm).name,
                          "onUpdate:modelValue": ($event) => unref(createForm).name = $event
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "w-6/12" }, [
                        createVNode(_sfc_main$g, {
                          type: "text",
                          label: _ctx.$t("\u0410\u0434\u0440\u0435\u0441"),
                          modelValue: unref(createForm).address,
                          "onUpdate:modelValue": ($event) => unref(createForm).address = $event
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(CompanyContentCreateElems, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="w-6/12"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$g, {
                      type: "text",
                      label: _ctx.$t("Email"),
                      modelValue: unref(createForm).email,
                      "onUpdate:modelValue": ($event) => unref(createForm).email = $event
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="w-6/12"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$g, {
                      type: "file",
                      label: _ctx.$t("\u041F\u0440\u0438\u043A\u0440\u0435\u043F\u0438\u0442\u0435 \u043B\u043E\u0433\u043E\u0442\u0438\u043F \u0434\u043B\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"),
                      onInput: ($event) => unref(createForm).logo_file = $event.target.files[0]
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "w-6/12" }, [
                        createVNode(_sfc_main$g, {
                          type: "text",
                          label: _ctx.$t("Email"),
                          modelValue: unref(createForm).email,
                          "onUpdate:modelValue": ($event) => unref(createForm).email = $event
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "w-6/12" }, [
                        createVNode(_sfc_main$g, {
                          type: "file",
                          label: _ctx.$t("\u041F\u0440\u0438\u043A\u0440\u0435\u043F\u0438\u0442\u0435 \u043B\u043E\u0433\u043E\u0442\u0438\u043F \u0434\u043B\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"),
                          onInput: ($event) => unref(createForm).logo_file = $event.target.files[0]
                        }, null, 8, ["label", "onInput"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(CompanyContentCreateElems, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="w-full"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$g, {
                      type: "textarea",
                      label: _ctx.$t("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"),
                      modelValue: unref(createForm).description,
                      "onUpdate:modelValue": ($event) => unref(createForm).description = $event
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "w-full" }, [
                        createVNode(_sfc_main$g, {
                          type: "textarea",
                          label: _ctx.$t("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"),
                          modelValue: unref(createForm).description,
                          "onUpdate:modelValue": ($event) => unref(createForm).description = $event
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(CompanyContentCreateElems, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$e, {
                      class: "py-2 px-6 rounded-full",
                      t: "button",
                      type: "danger",
                      onClick: ($event) => __props.showCreateCompany = false
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
                    _push3(ssrRenderComponent(_sfc_main$e, {
                      class: "py-2 px-6 rounded-full",
                      t: "submit",
                      type: "success"
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
                      createVNode(_sfc_main$e, {
                        class: "py-2 px-6 rounded-full",
                        t: "button",
                        type: "danger",
                        onClick: ($event) => __props.showCreateCompany = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C")), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_sfc_main$e, {
                        class: "py-2 px-6 rounded-full",
                        t: "submit",
                        type: "success"
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
                createVNode("form", {
                  onSubmit: withModifiers(($event) => unref(createCompany).createCompany(unref(createForm)), ["prevent"])
                }, [
                  createVNode(_sfc_main$c, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(CompanyContentCreateElems, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "w-6/12" }, [
                        createVNode(_sfc_main$g, {
                          type: "text",
                          label: _ctx.$t("\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"),
                          modelValue: unref(createForm).name,
                          "onUpdate:modelValue": ($event) => unref(createForm).name = $event
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "w-6/12" }, [
                        createVNode(_sfc_main$g, {
                          type: "text",
                          label: _ctx.$t("\u0410\u0434\u0440\u0435\u0441"),
                          modelValue: unref(createForm).address,
                          "onUpdate:modelValue": ($event) => unref(createForm).address = $event
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(CompanyContentCreateElems, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "w-6/12" }, [
                        createVNode(_sfc_main$g, {
                          type: "text",
                          label: _ctx.$t("Email"),
                          modelValue: unref(createForm).email,
                          "onUpdate:modelValue": ($event) => unref(createForm).email = $event
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "w-6/12" }, [
                        createVNode(_sfc_main$g, {
                          type: "file",
                          label: _ctx.$t("\u041F\u0440\u0438\u043A\u0440\u0435\u043F\u0438\u0442\u0435 \u043B\u043E\u0433\u043E\u0442\u0438\u043F \u0434\u043B\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"),
                          onInput: ($event) => unref(createForm).logo_file = $event.target.files[0]
                        }, null, 8, ["label", "onInput"])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(CompanyContentCreateElems, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "w-full" }, [
                        createVNode(_sfc_main$g, {
                          type: "textarea",
                          label: _ctx.$t("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"),
                          modelValue: unref(createForm).description,
                          "onUpdate:modelValue": ($event) => unref(createForm).description = $event
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(CompanyContentCreateElems, null, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$e, {
                        class: "py-2 px-6 rounded-full",
                        t: "button",
                        type: "danger",
                        onClick: ($event) => __props.showCreateCompany = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C")), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_sfc_main$e, {
                        class: "py-2 px-6 rounded-full",
                        t: "submit",
                        type: "success"
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
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Company/admin/CompanyCreate.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "dark:shadow-md dark:shadow-gray-500 dark:border-t-gray-500 border-t border-t-gray-100 shadow-lg dark:text-white text-black bg-opacity-80 p-4 rounded-lg" }, _attrs))}><p class="font-bold text-md tracking-widest text-center text-md mb-2">`);
  ssrRenderSlot(_ctx.$slots, "blockTitle", {}, null, _push, _parent);
  _push(`</p><div>`);
  ssrRenderSlot(_ctx.$slots, "blockContent", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Company/CompanyUI/CurrentCompanyElems.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const CurrentCompanyElems = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "CurrentCompanyNewsList",
  __ssrInlineRender: true,
  props: {
    newsItem: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-10" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/base/companies/news/${__props.newsItem.id}`,
        class: "transition-all cursor-pointer p-4 dark:border-gray-500 dark:hover:bg-gray-700 hover:bg-gray-200 hover:rounded-lg flex gap-x-4 border-b"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class=""${_scopeId}>`);
            if (__props.newsItem.photo) {
              _push2(`<img class="w-[150px] h-[150px] rounded-lg"${ssrRenderAttr("src", __props.newsItem.photo)} alt=""${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="w-7/12"${_scopeId}><h1 class="tracking-widest text-2xl"${_scopeId}>${ssrInterpolate(__props.newsItem.title)}</h1><p class="break-words my-4"${_scopeId}>${ssrInterpolate(__props.newsItem.description)}</p></div>`);
          } else {
            return [
              createVNode("div", { class: "" }, [
                __props.newsItem.photo ? (openBlock(), createBlock("img", {
                  key: 0,
                  class: "w-[150px] h-[150px] rounded-lg",
                  src: __props.newsItem.photo,
                  alt: ""
                }, null, 8, ["src"])) : createCommentVNode("", true)
              ]),
              createVNode("div", { class: "w-7/12" }, [
                createVNode("h1", { class: "tracking-widest text-2xl" }, toDisplayString(__props.newsItem.title), 1),
                createVNode("p", { class: "break-words my-4" }, toDisplayString(__props.newsItem.description), 1)
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
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Company/User/News/CurrentCompanyNewsList.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "CurrentCompanyNews",
  __ssrInlineRender: true,
  setup(__props) {
    useAuthStore();
    const companyNews = useCompanies();
    watchEffect(() => {
      companyNews.loadNewsList();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-11/12 mx-auto" }, _attrs))}>`);
      _push(ssrRenderComponent(CurrentCompanyElems, null, {
        blockTitle: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438")), 1)
            ];
          }
        }),
        blockContent: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><!--[-->`);
            ssrRenderList(unref(companyNews).get_all_news, (companyItem) => {
              _push2(ssrRenderComponent(_sfc_main$8, { "news-item": companyItem }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", null, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(companyNews).get_all_news, (companyItem) => {
                  return openBlock(), createBlock(_sfc_main$8, { "news-item": companyItem }, null, 8, ["news-item"]);
                }), 256))
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Company/User/CurrentCompanyNews.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "CurrentCompanyFiles",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    const companies = useCompanies();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex max-[900px]:flex-wrap gap-y-10 w-full justify-center mx-auto container gap-x-10" }, _attrs))} data-v-a06afbbe>`);
      _push(ssrRenderComponent(CurrentCompanyElems, { class: "w-9/12 max-[900px]:w-full" }, {
        blockTitle: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$c, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("\u0413\u0430\u043B\u0435\u0440\u0435\u044F"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("\u0413\u0430\u043B\u0435\u0440\u0435\u044F")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$c, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("\u0413\u0430\u043B\u0435\u0440\u0435\u044F")), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        blockContent: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Swiper, {
              modules: ["SwiperAutoplay" in _ctx ? _ctx.SwiperAutoplay : unref(Autoplay), "SwiperEffectCreative" in _ctx ? _ctx.SwiperEffectCreative : unref(EffectCreative)],
              "slides-per-view": 1,
              loop: true,
              effect: "creative",
              autoplay: {
                delay: 4e3,
                disableOnInteraction: true
              },
              "creative-effect": {
                prev: {
                  shadow: true,
                  translate: ["-100%", 0, -1]
                },
                next: {
                  shadow: true,
                  translate: ["100%", 0, 0]
                }
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList((_a = unref(companies).company) == null ? void 0 : _a.pictures, (item) => {
                    _push3(ssrRenderComponent(_component_SwiperSlide, { class: "rounded-lg" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<img class="w-full h-[500px]"${ssrRenderAttr("src", unref(authStore).get_server_domain + item.photo_url)} alt="" data-v-a06afbbe${_scopeId3}>`);
                        } else {
                          return [
                            createVNode("img", {
                              class: "w-full h-[500px]",
                              src: unref(authStore).get_server_domain + item.photo_url,
                              alt: ""
                            }, null, 8, ["src"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList((_b = unref(companies).company) == null ? void 0 : _b.pictures, (item) => {
                      return openBlock(), createBlock(_component_SwiperSlide, { class: "rounded-lg" }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "w-full h-[500px]",
                            src: unref(authStore).get_server_domain + item.photo_url,
                            alt: ""
                          }, null, 8, ["src"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 256))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Swiper, {
                modules: ["SwiperAutoplay" in _ctx ? _ctx.SwiperAutoplay : unref(Autoplay), "SwiperEffectCreative" in _ctx ? _ctx.SwiperEffectCreative : unref(EffectCreative)],
                "slides-per-view": 1,
                loop: true,
                effect: "creative",
                autoplay: {
                  delay: 4e3,
                  disableOnInteraction: true
                },
                "creative-effect": {
                  prev: {
                    shadow: true,
                    translate: ["-100%", 0, -1]
                  },
                  next: {
                    shadow: true,
                    translate: ["100%", 0, 0]
                  }
                }
              }, {
                default: withCtx(() => {
                  var _a;
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList((_a = unref(companies).company) == null ? void 0 : _a.pictures, (item) => {
                      return openBlock(), createBlock(_component_SwiperSlide, { class: "rounded-lg" }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "w-full h-[500px]",
                            src: unref(authStore).get_server_domain + item.photo_url,
                            alt: ""
                          }, null, 8, ["src"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 256))
                  ];
                }),
                _: 1
              }, 8, ["modules"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(CurrentCompanyElems, { class: "w-4/12 max-[900px]:w-full ml-auto" }, {
        blockTitle: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$c, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("\u0424\u0430\u0439\u043B\u044B"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("\u0424\u0430\u0439\u043B\u044B")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$c, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("\u0424\u0430\u0439\u043B\u044B")), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        blockContent: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2)
            ;
          else {
            return [];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Company/User/CurrentCompanyFiles.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const CurrentCompanyFiles = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-a06afbbe"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "CurrentCompanyDepartment",
  __ssrInlineRender: true,
  props: {
    more: {
      type: Number,
      default: null
    }
  },
  setup(__props) {
    const departments = useCompanies();
    departments.loadDepartmentList();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(CurrentCompanyElems, null, {
        blockTitle: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u041E\u0442\u0434\u0435\u043B\u044B \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u0434\u0435\u043B\u044B \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438")), 1)
            ];
          }
        }),
        blockContent: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-4 max-[1750px]:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 mt-10 items-center gap-x-4 gap-y-4"${_scopeId}><!--[-->`);
            ssrRenderList(unref(departments).get_all_department.results, (department) => {
              _push2(`<div class="relative border p-2 h-full rounded-lg dark:border-gray-400"${_scopeId}><div class="${ssrRenderClass({ "blur-[1px]": __props.more === department.id })}"${_scopeId}><div class="text-center text-base tracking-widest"${_scopeId}><h2${_scopeId}>${ssrInterpolate(department.name)}</h2></div><div class="p-2"${_scopeId}><div class="flex h-[50px] flex-col gap-y-2 my-4"${_scopeId}><div class=""${_scopeId}><p class="tracking-widest"${_scopeId}>${ssrInterpolate(_ctx.$t("\u0420\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C"))}</p></div><div${_scopeId}><p class="break-words tracking-wider text-sm"${_scopeId}>${ssrInterpolate(department.department_director_name ? department.department_director_name : "\u041E\u0442\u0441\u0443\u0442\u0441\u0432\u0443\u0435\u0442")}</p></div></div><div class="flex h-[50px] flex-col gap-y-2 my-4"${_scopeId}><div class=""${_scopeId}><p class="tracking-widest"${_scopeId}>${ssrInterpolate(_ctx.$t("\u0417\u0430\u043C\u0435\u0441\u0442\u0438\u0442\u0435\u043B\u044C"))}</p></div><div${_scopeId}><p class="break-words tracking-wider text-sm"${_scopeId}>${ssrInterpolate(department.vice_department_director_name ? department.vice_department_director_name : "\u041E\u0442\u0441\u0443\u0442\u0441\u0432\u0443\u0435\u0442")}</p></div></div></div></div>`);
              if (__props.more === department.id) {
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  to: `/base/companies/department/${department.id}`,
                  class: "cursor-pointer absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 rounded-lg"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<p class="text-center mt-20 mx-auto uppercase text-sm rounded-full dark:bg-gray-400 bg-white w-4/12"${_scopeId2}>${ssrInterpolate(_ctx.$t("\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"))}</p>`);
                    } else {
                      return [
                        createVNode("p", { class: "text-center mt-20 mx-auto uppercase text-sm rounded-full dark:bg-gray-400 bg-white w-4/12" }, toDisplayString(_ctx.$t("\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435")), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-4 max-[1750px]:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 mt-10 items-center gap-x-4 gap-y-4" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(departments).get_all_department.results, (department) => {
                  return openBlock(), createBlock("div", {
                    class: "relative border p-2 h-full rounded-lg dark:border-gray-400",
                    onMouseenter: ($event) => __props.more = department.id,
                    onMouseleave: ($event) => __props.more = null
                  }, [
                    createVNode("div", {
                      class: { "blur-[1px]": __props.more === department.id }
                    }, [
                      createVNode("div", { class: "text-center text-base tracking-widest" }, [
                        createVNode("h2", null, toDisplayString(department.name), 1)
                      ]),
                      createVNode("div", { class: "p-2" }, [
                        createVNode("div", { class: "flex h-[50px] flex-col gap-y-2 my-4" }, [
                          createVNode("div", { class: "" }, [
                            createVNode("p", { class: "tracking-widest" }, toDisplayString(_ctx.$t("\u0420\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C")), 1)
                          ]),
                          createVNode("div", null, [
                            createVNode("p", { class: "break-words tracking-wider text-sm" }, toDisplayString(department.department_director_name ? department.department_director_name : "\u041E\u0442\u0441\u0443\u0442\u0441\u0432\u0443\u0435\u0442"), 1)
                          ])
                        ]),
                        createVNode("div", { class: "flex h-[50px] flex-col gap-y-2 my-4" }, [
                          createVNode("div", { class: "" }, [
                            createVNode("p", { class: "tracking-widest" }, toDisplayString(_ctx.$t("\u0417\u0430\u043C\u0435\u0441\u0442\u0438\u0442\u0435\u043B\u044C")), 1)
                          ]),
                          createVNode("div", null, [
                            createVNode("p", { class: "break-words tracking-wider text-sm" }, toDisplayString(department.vice_department_director_name ? department.vice_department_director_name : "\u041E\u0442\u0441\u0443\u0442\u0441\u0432\u0443\u0435\u0442"), 1)
                          ])
                        ])
                      ])
                    ], 2),
                    createVNode(Transition, { name: "fade" }, {
                      default: withCtx(() => [
                        __props.more === department.id ? (openBlock(), createBlock(_component_NuxtLink, {
                          key: 0,
                          to: `/base/companies/department/${department.id}`,
                          class: "cursor-pointer absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 rounded-lg"
                        }, {
                          default: withCtx(() => [
                            createVNode("p", { class: "text-center mt-20 mx-auto uppercase text-sm rounded-full dark:bg-gray-400 bg-white w-4/12" }, toDisplayString(_ctx.$t("\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435")), 1)
                          ]),
                          _: 2
                        }, 1032, ["to"])) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ], 40, ["onMouseenter", "onMouseleave"]);
                }), 256))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Company/User/CurrentCompanyDepartment.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "CurrentCompanyChart",
  __ssrInlineRender: true,
  setup(__props) {
    Chart.register(ArcElement, Tooltip, Legend, RadialLinearScale);
    Chart.defaults.color = "#b6b6b6";
    const chartData = ref({
      labels: ["\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F", "\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0435 IQ \u0442\u0435\u0441\u0442\u044B", "\u0410\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C", "\u041F\u043E\u0441\u0435\u0449\u0430\u0435\u043C\u043E\u0441\u0442\u044C"],
      datasets: [
        {
          backgroundColor: ["rgba(109,252,118,0.4)", "rgba(252,155,0,0.91)", "rgba(0,121,255,0.4)", "rgba(255,9,0,0.68)"],
          data: [70, 70, 90, 100]
        }
      ]
    });
    const chartOptions = ref({
      responsive: true,
      maintainAspectRatio: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(PolarArea), {
        class: "text-white",
        style: { "{color": "white" },
        data: unref(chartData),
        options: unref(chartOptions)
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Company/User/CurrentCompanyChart.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CurrentCompanyInfo",
  __ssrInlineRender: true,
  setup(__props) {
    const currentCompany = useCompanies();
    const calendarOptions = {
      plugins: [dayGridPlugin, interactionPlugin],
      theme: "darkly",
      events: [
        { title: "event 1", date: "2022-12-26" },
        { title: "event 2", date: "2022-12-27" }
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col overflow-hidden gap-y-10" }, _attrs))}><div class="flex w-11/12 max-[1400px]:flex-wrap gap-x-6 max-[1400px]:gap-y-10 mx-auto">`);
      _push(ssrRenderComponent(CurrentCompanyElems, { class: "w-4/12 ml-auto max-[1400px]:mx-auto max-[1400px]:w-6/12 max-md:w-full max-[1400px]:order-3" }, {
        blockTitle: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u0413\u0440\u0430\u0444\u0438\u043A"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u0413\u0440\u0430\u0444\u0438\u043A")), 1)
            ];
          }
        }),
        blockContent: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode(_sfc_main$4)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(CurrentCompanyElems, { class: "w-full mx-auto max-[1400px]:mx-auto max-[1400px]:w-full" }, {
        blockTitle: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438")), 1)
            ];
          }
        }),
        blockContent: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>${ssrInterpolate(unref(currentCompany).company.description)}</div>`);
          } else {
            return [
              createVNode("div", null, toDisplayString(unref(currentCompany).company.description), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(CurrentCompanyElems, { class: "w-5/12 mr-auto max-[1400px]:mx-auto max-[1400px]:w-5/12 max-md:w-full" }, {
        blockTitle: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438")), 1)
            ];
          }
        }),
        blockContent: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center my-4 gap-x-5 justify-center"${_scopeId}><div class="flex items-center gap-x-2 w-8/12 max-md:w-9/12"${_scopeId}><div${_scopeId}><svg width="35px" height="35px" class="stroke-black dark:stroke-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M20.3873 7.1575L11.9999 12L3.60913 7.14978" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M12 12V21" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M11 2.57735C11.6188 2.22008 12.3812 2.22008 13 2.57735L19.6603 6.42265C20.2791 6.77992 20.6603 7.44017 20.6603 8.1547V15.8453C20.6603 16.5598 20.2791 17.2201 19.6603 17.5774L13 21.4226C12.3812 21.7799 11.6188 21.7799 11 21.4226L4.33975 17.5774C3.72094 17.2201 3.33975 16.5598 3.33975 15.8453V8.1547C3.33975 7.44017 3.72094 6.77992 4.33975 6.42265L11 2.57735Z" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></div><p class="tracking-widest"${_scopeId}>${ssrInterpolate(_ctx.$t("\u041E\u0431\u044A\u0435\u043A\u0442\u044B"))}: ${ssrInterpolate()}</p></div><div${_scopeId}><p class="rounded-full border border-gray-400 dark:border-white w-10 h-10 flex items-center justify-center dark:text-white"${_scopeId}>${ssrInterpolate(unref(currentCompany).company.objects_count)}</p></div></div><div class="flex items-center my-4 gap-x-5 justify-center"${_scopeId}><div class="flex items-center gap-x-2 w-8/12 max-md:w-9/12"${_scopeId}><div${_scopeId}><svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><g id="User / Users_Group"${_scopeId}><path id="Vector" class="dark:stroke-white stroke-black" d="M17 20C17 18.3431 14.7614 17 12 17C9.23858 17 7 18.3431 7 20M21 17.0004C21 15.7702 19.7659 14.7129 18 14.25M3 17.0004C3 15.7702 4.2341 14.7129 6 14.25M18 10.2361C18.6137 9.68679 19 8.8885 19 8C19 6.34315 17.6569 5 16 5C15.2316 5 14.5308 5.28885 14 5.76389M6 10.2361C5.38625 9.68679 5 8.8885 5 8C5 6.34315 6.34315 5 8 5C8.76835 5 9.46924 5.28885 10 5.76389M12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14Z" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></g></svg></div><p class="tracking-widest"${_scopeId}>${ssrInterpolate(_ctx.$t("\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438"))}:</p></div><div${_scopeId}><p class="rounded-full border border-gray-400 dark:border-white w-10 h-10 flex items-center justify-center dark:text-white"${_scopeId}>${ssrInterpolate(unref(currentCompany).company.users_count)}</p></div></div><div class="flex items-center my-4 gap-x-5 justify-center"${_scopeId}><div class="flex items-center gap-x-2 w-8/12 max-md:w-9/12"${_scopeId}><div${_scopeId}><svg class="dark:stroke-white stroke-black" fill="none" width="35px" height="35px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M5.04146 3C5.22009 2.6906 5.55022 2.5 5.90748 2.5L9.75278 2.5C10.11 2.5 10.4402 2.6906 10.6188 3L12.5415 6.33013C12.7201 6.63953 12.7201 7.02073 12.5415 7.33013L10.6188 10.6603C10.4402 10.9697 10.11 11.1603 9.75278 11.1603H5.90748C5.55022 11.1603 5.22009 10.9697 5.04146 10.6603L3.11881 7.33013C2.94017 7.02073 2.94017 6.63953 3.11881 6.33013L5.04146 3Z"${_scopeId}></path><path d="M5.1216 13.2272C5.30023 12.9178 5.63036 12.7272 5.98762 12.7272H9.83292C10.1902 12.7272 10.5203 12.9178 10.6989 13.2272L12.6216 16.5574C12.8002 16.8668 12.8002 17.248 12.6216 17.5574L10.6989 20.8875C10.5203 21.1969 10.1902 21.3875 9.83292 21.3875H5.98762C5.63036 21.3875 5.30023 21.1969 5.1216 20.8875L3.19895 17.5574C3.02031 17.248 3.02031 16.8668 3.19895 16.5574L5.1216 13.2272Z"${_scopeId}></path><path d="M14.1216 8.22723C14.3002 7.91783 14.6304 7.72723 14.9876 7.72723L18.8329 7.72723C19.1902 7.72723 19.5203 7.91783 19.6989 8.22723L21.6216 11.5574C21.8002 11.8668 21.8002 12.248 21.6216 12.5574L19.6989 15.8875C19.5203 16.1969 19.1902 16.3875 18.8329 16.3875H14.9876C14.6304 16.3875 14.3002 16.1969 14.1216 15.8875L12.1989 12.5574C12.0203 12.248 12.0203 11.8668 12.1989 11.5574L14.1216 8.22723Z"${_scopeId}></path></svg></div><p class="tracking-widest"${_scopeId}>${ssrInterpolate(_ctx.$t("\u0414\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442\u044B"))}: ${ssrInterpolate()}</p></div><div${_scopeId}><p class="rounded-full border border-gray-400 dark:border-white w-10 h-10 flex items-center justify-center dark:text-white"${_scopeId}>${ssrInterpolate(unref(currentCompany).company.departments_count)}</p></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center my-4 gap-x-5 justify-center" }, [
                createVNode("div", { class: "flex items-center gap-x-2 w-8/12 max-md:w-9/12" }, [
                  createVNode("div", null, [
                    (openBlock(), createBlock("svg", {
                      width: "35px",
                      height: "35px",
                      class: "stroke-black dark:stroke-white",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", {
                        d: "M20.3873 7.1575L11.9999 12L3.60913 7.14978",
                        "stroke-width": "1",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        d: "M12 12V21",
                        "stroke-width": "1",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        d: "M11 2.57735C11.6188 2.22008 12.3812 2.22008 13 2.57735L19.6603 6.42265C20.2791 6.77992 20.6603 7.44017 20.6603 8.1547V15.8453C20.6603 16.5598 20.2791 17.2201 19.6603 17.5774L13 21.4226C12.3812 21.7799 11.6188 21.7799 11 21.4226L4.33975 17.5774C3.72094 17.2201 3.33975 16.5598 3.33975 15.8453V8.1547C3.33975 7.44017 3.72094 6.77992 4.33975 6.42265L11 2.57735Z",
                        "stroke-width": "1",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ]))
                  ]),
                  createVNode("p", { class: "tracking-widest" }, toDisplayString(_ctx.$t("\u041E\u0431\u044A\u0435\u043A\u0442\u044B")) + ": " + toDisplayString(), 1)
                ]),
                createVNode("div", null, [
                  createVNode("p", { class: "rounded-full border border-gray-400 dark:border-white w-10 h-10 flex items-center justify-center dark:text-white" }, toDisplayString(unref(currentCompany).company.objects_count), 1)
                ])
              ]),
              createVNode("div", { class: "flex items-center my-4 gap-x-5 justify-center" }, [
                createVNode("div", { class: "flex items-center gap-x-2 w-8/12 max-md:w-9/12" }, [
                  createVNode("div", null, [
                    (openBlock(), createBlock("svg", {
                      width: "35px",
                      height: "35px",
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
                  ]),
                  createVNode("p", { class: "tracking-widest" }, toDisplayString(_ctx.$t("\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438")) + ":", 1)
                ]),
                createVNode("div", null, [
                  createVNode("p", { class: "rounded-full border border-gray-400 dark:border-white w-10 h-10 flex items-center justify-center dark:text-white" }, toDisplayString(unref(currentCompany).company.users_count), 1)
                ])
              ]),
              createVNode("div", { class: "flex items-center my-4 gap-x-5 justify-center" }, [
                createVNode("div", { class: "flex items-center gap-x-2 w-8/12 max-md:w-9/12" }, [
                  createVNode("div", null, [
                    (openBlock(), createBlock("svg", {
                      class: "dark:stroke-white stroke-black",
                      fill: "none",
                      width: "35px",
                      height: "35px",
                      viewBox: "0 0 24 24",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", { d: "M5.04146 3C5.22009 2.6906 5.55022 2.5 5.90748 2.5L9.75278 2.5C10.11 2.5 10.4402 2.6906 10.6188 3L12.5415 6.33013C12.7201 6.63953 12.7201 7.02073 12.5415 7.33013L10.6188 10.6603C10.4402 10.9697 10.11 11.1603 9.75278 11.1603H5.90748C5.55022 11.1603 5.22009 10.9697 5.04146 10.6603L3.11881 7.33013C2.94017 7.02073 2.94017 6.63953 3.11881 6.33013L5.04146 3Z" }),
                      createVNode("path", { d: "M5.1216 13.2272C5.30023 12.9178 5.63036 12.7272 5.98762 12.7272H9.83292C10.1902 12.7272 10.5203 12.9178 10.6989 13.2272L12.6216 16.5574C12.8002 16.8668 12.8002 17.248 12.6216 17.5574L10.6989 20.8875C10.5203 21.1969 10.1902 21.3875 9.83292 21.3875H5.98762C5.63036 21.3875 5.30023 21.1969 5.1216 20.8875L3.19895 17.5574C3.02031 17.248 3.02031 16.8668 3.19895 16.5574L5.1216 13.2272Z" }),
                      createVNode("path", { d: "M14.1216 8.22723C14.3002 7.91783 14.6304 7.72723 14.9876 7.72723L18.8329 7.72723C19.1902 7.72723 19.5203 7.91783 19.6989 8.22723L21.6216 11.5574C21.8002 11.8668 21.8002 12.248 21.6216 12.5574L19.6989 15.8875C19.5203 16.1969 19.1902 16.3875 18.8329 16.3875H14.9876C14.6304 16.3875 14.3002 16.1969 14.1216 15.8875L12.1989 12.5574C12.0203 12.248 12.0203 11.8668 12.1989 11.5574L14.1216 8.22723Z" })
                    ]))
                  ]),
                  createVNode("p", { class: "tracking-widest" }, toDisplayString(_ctx.$t("\u0414\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442\u044B")) + ": " + toDisplayString(), 1)
                ]),
                createVNode("div", null, [
                  createVNode("p", { class: "rounded-full border border-gray-400 dark:border-white w-10 h-10 flex items-center justify-center dark:text-white" }, toDisplayString(unref(currentCompany).company.departments_count), 1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-11/12 mx-auto">`);
      _push(ssrRenderComponent(CurrentCompanyFiles, null, null, _parent));
      _push(`</div><div class="w-11/12 mx-auto">`);
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$7, null, null, _parent));
      _push(`</div><div class="w-11/12 mx-auto">`);
      _push(ssrRenderComponent(CurrentCompanyElems, { class: "w-10/12 mx-auto" }, {
        blockTitle: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u041A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C \u0441\u043E\u0431\u044B\u0442\u0438\u0439"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u041A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C \u0441\u043E\u0431\u044B\u0442\u0438\u0439")), 1)
            ];
          }
        }),
        blockContent: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(unref(FullCalendar), { options: calendarOptions }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode(unref(FullCalendar), { options: calendarOptions })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Company/User/CurrentCompanyInfo.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CompanyList",
  __ssrInlineRender: true,
  props: {
    companyBlock: {
      type: Object,
      required: true,
      default: () => {
      }
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/base/companies/${__props.companyBlock.id}`,
        class: "transition-all cursor-pointer dark:bg-gray-400 dark:hover:bg-gray-300 dark:shadow-none shadow-xl hover:bg-gray-100 dark:border-none border-t border-t-gray-100 p-4 rounded-xl flex items-center gap-x-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.companyBlock.logo) {
              _push2(`<img class="w-[50px] h-[50px] rounded-full"${ssrRenderAttr("src", __props.companyBlock.logo.replace(/\/png/g, "/webp"))} alt=""${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<h1 class="tracking-widest"${_scopeId}>${ssrInterpolate(__props.companyBlock.name)}</h1>`);
          } else {
            return [
              __props.companyBlock.logo ? (openBlock(), createBlock("img", {
                key: 0,
                class: "w-[50px] h-[50px] rounded-full",
                src: __props.companyBlock.logo.replace(/\/png/g, "/webp"),
                alt: ""
              }, null, 8, ["src"])) : createCommentVNode("", true),
              createVNode("h1", { class: "tracking-widest" }, toDisplayString(__props.companyBlock.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Company/admin/CompanyList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "my-10 dark:text-white tracking-wider flex flex-col gap-y-4" }, _attrs))}><p class="flex items-center w-11/12 justify-between gap-x-10">`);
  ssrRenderSlot(_ctx.$slots, "statsName", {}, null, _push, _parent);
  _push(` <span class="bg-gray-300 py-2 px-4 rounded-full font-bold">`);
  ssrRenderSlot(_ctx.$slots, "statsValue", {}, null, _push, _parent);
  _push(`</span></p></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Company/CompanyUI/CompanyStats.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CompanyStats = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const currentUser = useAuthStore();
    const companies = useCompanies();
    const params = {
      page: 1,
      limit: 5,
      query: ""
    };
    watchEffect(() => {
      if (currentUser.user.role_en === "employee" || currentUser.user.role_en === "company_admin") {
        companies.loadCurrentCompany();
      } else if (currentUser.user.role_en === "admin") {
        companies.loadCompanyList({ page: params.page, limit: params.limit, query: params.query });
      }
    });
    useSeoMeta({
      title: "\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438",
      description: "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0441 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0435\u0439 \u043E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(currentUser).user.role_en !== "admin") {
        _push(`<div><div class="text-center flex items-center tracking-widest gap-x-2 justify-center max-sm:flex-col mb-10"><p class="text-lg">${ssrInterpolate(_ctx.$t("\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E "))}</p><p class="font-bold text-white bg-blueSemiLight p-2 px-4 rounded-full">${ssrInterpolate(unref(companies).company.name)}</p></div><div class="">`);
        _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
        _push(`</div></div>`);
      } else if (unref(currentUser).user.role_en === "admin") {
        _push(`<div>`);
        _push(ssrRenderComponent(_sfc_main$c, { "text-type": "pageTitle" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0441\u043F\u0438\u0441\u043A\u0430 \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0439"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0441\u043F\u0438\u0441\u043A\u0430 \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0439")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="flex justify-between items-center">`);
        _push(ssrRenderComponent(_sfc_main$d, { class: "my-10 w-6/12" }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$a, { class: "w-2/12" }, null, _parent));
        _push(`</div><div class="flex gap-x-10"><div class="w-full gap-y-10 flex flex-col"><!--[-->`);
        ssrRenderList((_a = unref(companies)) == null ? void 0 : _a.get_all_company.results, (item) => {
          _push(ssrRenderComponent(_sfc_main$2, { "company-block": item }, null, _parent));
        });
        _push(`<!--]--></div>`);
        _push(ssrRenderComponent(TheContentBlock, { class: "w-3/12 h-full transition-all rounded-md p-4" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h2 class="text-center text-lg tracking-widest font-bold dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0439"))}</h2>`);
              _push2(ssrRenderComponent(CompanyStats, null, {
                statsName: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439")), 1)
                    ];
                  }
                }),
                statsValue: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (unref(companies).get_all_company.count > 0) {
                      _push3(`<p${_scopeId2}>${ssrInterpolate(unref(companies).get_all_company.count)}</p>`);
                    } else {
                      _push3(`<p${_scopeId2}>${ssrInterpolate("0")}</p>`);
                    }
                  } else {
                    return [
                      unref(companies).get_all_company.count > 0 ? (openBlock(), createBlock("p", { key: 0 }, toDisplayString(unref(companies).get_all_company.count), 1)) : (openBlock(), createBlock("p", { key: 1 }, toDisplayString("0")))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode("h2", { class: "text-center text-lg tracking-widest font-bold dark:text-white" }, toDisplayString(_ctx.$t("\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0439")), 1),
                createVNode(CompanyStats, null, {
                  statsName: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439")), 1)
                  ]),
                  statsValue: withCtx(() => [
                    unref(companies).get_all_company.count > 0 ? (openBlock(), createBlock("p", { key: 0 }, toDisplayString(unref(companies).get_all_company.count), 1)) : (openBlock(), createBlock("p", { key: 1 }, toDisplayString("0")))
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="flex justify-center gap-x-4 mt-10">`);
        if (((_b = unref(companies)) == null ? void 0 : _b.get_all_company.count) > 5) {
          _push(`<!--[-->`);
          ssrRenderList((_c = unref(companies)) == null ? void 0 : _c.get_all_company.links, (page, id) => {
            _push(`<div class="${ssrRenderClass([{ "bg-blue-400 text-white": page.active, "bg-gray-200 text-black hover:bg-blue-400 hover:text-white transition-all": !page.active }, "px-4 py-2 rounded-full cursor-pointer"])}">${ssrInterpolate(page.label)}</div>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base/companies/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-s23hEhpk.mjs.map
