import { defineComponent, ref, unref, useSSRContext, reactive, computed, mergeProps, withCtx, createTextVNode, toDisplayString, isRef, createVNode, withModifiers, openBlock, createBlock, createCommentVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
import { Chart, ArcElement, Tooltip, Legend, RadialLinearScale } from "chart.js";
import { PolarArea } from "vue-chartjs";
import { u as useCompanies } from "./companies-Vl6LYc-q.js";
import { u as useAuthStore } from "./auth-ltfjqTsG.js";
import { E as useMediaQuery, F as useParallax, r as useSeoMeta } from "../server.mjs";
import { _ as _sfc_main$6 } from "./TheModal-1X0PcTyA.js";
import { _ as _sfc_main$8 } from "./TheButton-Jrv5tshN.js";
import { _ as _sfc_main$7 } from "./TheInput-6xiMcCQ9.js";
import VueDatePicker from "@vuepic/vue-datepicker";
import { S as Sceleton } from "./TheSceleton-RMAy-i6X.js";
import { T as ThePreloader } from "./ThePreloader-2eDA1OlC.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-yVxbj29m.js";
import { _ as _sfc_main$9 } from "./TheTextContent-rN29GJom.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-nvHjMUuE.js";
import { T as TheContentBlock } from "./TheContentBlock-AeyxWvVh.js";
import "./axios-jpYG50U2.js";
import "axios";
import "vue3-toastify";
import "nuxt-storage/nuxt-storage.js";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
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
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ProfileContentChart",
  __ssrInlineRender: true,
  setup(__props) {
    Chart.register(ArcElement, Tooltip, Legend, RadialLinearScale);
    Chart.defaults.color = "#b6b6b6";
    const chartData = ref({
      labels: ["Выполненные задания", "Выполненные IQ тесты", "Активность", "Посещаемость"],
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Profile/ProfileUI/ProfileContentChart.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ProfileContentUserInfo",
  __ssrInlineRender: true,
  props: {
    showInfo: {
      type: Boolean,
      default: false
    },
    getCode: {
      type: Boolean,
      default: false
    },
    userEdit: {
      type: Object,
      required: true,
      default: () => {
      }
    }
  },
  setup(__props) {
    const company = useCompanies();
    const target = ref(null);
    useMediaQuery("(max-width: 700px)");
    const parallax = reactive(useParallax(target));
    computed(() => ({
      transition: ".3s ease-out all",
      transform: `rotateX(${parallax.roll * 1}deg) rotateY(${parallax.tilt * 1}deg)`
    }));
    const container = ref(null);
    useParallax(container);
    const loadCurrentUser = useAuthStore();
    const birth = new Date(loadCurrentUser.user.date_of_birth).toLocaleDateString();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full p-6 relative col-span-2 max-sm:col-auto shadow-lg dark:shadow-md dark:border-t dark:border-t-gray-500 cursor-pointer dark:shadow-gray-500 rounded-md transition-all duration-200" }, _attrs))}><h2 class="mb-8 dark:text-white tracking-widest">${ssrInterpolate(_ctx.$t("Личные данные"))}</h2><div class="${ssrRenderClass([{ "blur": !unref(loadCurrentUser).user.id }, "flex gap-x-10 max-lg:flex-wrap gap-y-10 justify-around"])}"><div class="flex flex-col gap-y-6">`);
      if (unref(loadCurrentUser).user.id) {
        _push(`<div class="flex max-sm:flex-wrap max-sm:justify-center select-none text-gray-600 gap-x-2"><div class=""><img class="w-[100px] h-[100px] rounded-full shadow-lg dark:shadow-none"${ssrRenderAttr("src", unref(loadCurrentUser).get_server_domain + unref(loadCurrentUser).user.photo_url)} alt=""></div><div class="my-2 mx-2"><h3 class="text-xl dark:text-white select-none tracking-wide">${ssrInterpolate(unref(loadCurrentUser).user.first_name)} ${ssrInterpolate(unref(loadCurrentUser).user.last_name)}</h3><p class="dark:text-white">${ssrInterpolate(Math.trunc((/* @__PURE__ */ new Date() - new Date(unref(loadCurrentUser).user.date_of_birth)) / 1e3 / 3600 / 24 / 365) + " лет")}</p>`);
        if (unref(loadCurrentUser).user.role === "Администратор сайта") {
          _push(`<p class="dark:text-white tracking-widest font-bold">${ssrInterpolate(unref(loadCurrentUser).user.role)}</p>`);
        } else if (unref(loadCurrentUser).user.role === "Сотрудник") {
          _push(`<p class="dark:text-white tracking-widest font-bold">${ssrInterpolate(unref(loadCurrentUser).user.position)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<div class="flex items-center gap-x-4">`);
        _push(ssrRenderComponent(Sceleton, {
          "border-radius": "100px",
          width: "100px",
          height: "100px"
        }, null, _parent));
        _push(`<div class="flex flex-col gap-y-2">`);
        _push(ssrRenderComponent(Sceleton, {
          width: "150px",
          height: "20px",
          "border-radius": "5px"
        }, null, _parent));
        _push(ssrRenderComponent(Sceleton, {
          width: "60px",
          height: "15px",
          "border-radius": "5px"
        }, null, _parent));
        _push(`</div></div>`);
      }
      _push(`<div class="flex flex-col gap-y-2 ml-2 w-full"><div class="text-sm"><p class="text-gray-500 dark:text-white font-mono">${ssrInterpolate(_ctx.$t("Email"))}: `);
      if (unref(loadCurrentUser).user.id) {
        _push(`<span class="font-bold tracking-widest">${ssrInterpolate(unref(loadCurrentUser).user.email)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</p></div><div class="text-sm"><p class="text-gray-500 dark:text-white font-mono">${ssrInterpolate(_ctx.$t("Номер"))}: <span class="font-bold tracking-widest">${ssrInterpolate((_a = unref(loadCurrentUser).user.phone) == null ? void 0 : _a.slice(4, 13))}</span></p></div><div class="text-sm"><p class="text-gray-500 flex gap-x-2 dark:text-white font-mono">${ssrInterpolate(_ctx.$t("Зароботная плата"))}: `);
      if (unref(loadCurrentUser).user.id) {
        _push(`<span class="font-bold tracking-widest">${ssrInterpolate(unref(loadCurrentUser).user.salary + " сум")}</span>`);
      } else {
        _push(`<span></span>`);
      }
      _push(`</p></div></div></div><div class="w-6/12 max-lg:w-full flex flex-col gap-y-10"><div class=""><p class="text-gray-500 dark:text-white font-mono">${ssrInterpolate(_ctx.$t("Компания"))}:</p><p class="dark:text-white font-bold tracking-wide mt-2">${ssrInterpolate(unref(company).company.description)}</p></div></div></div>`);
      if (!unref(loadCurrentUser).user.id) {
        _push(`<div><div class="bg-black w-full h-full absolute top-0 left-0 opacity-40 rounded-lg"></div>`);
        _push(ssrRenderComponent(ThePreloader, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.showInfo) {
        _push(ssrRenderComponent(_sfc_main$6, {
          onShowModal: ($event) => {
            __props.showInfo = !__props.showInfo;
            __props.getCode = false;
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<form${_scopeId}><div${_scopeId}><h2 class="text-center text-xl tracking-widest font-bold dark:text-white"${_scopeId}>Личная информация</h2></div><div class="w-full"${_scopeId}><div class="mt-10 flex items-center justify-around"${_scopeId}><div class="flex flex-col text-center w-3/12 dark:text-white tracking-widest"${_scopeId}><p class="dark:text-gray-200 text-gray-400 font-bold text-[14px]"${_scopeId}>${ssrInterpolate(_ctx.$t("Должность:"))}</p><p class=""${_scopeId}>${ssrInterpolate(__props.userEdit.position)}</p></div><div class="flex flex-col text-center w-3/12 dark:text-white tracking-widest"${_scopeId}><p class="dark:text-gray-200 text-gray-400 font-bold text-[14px]"${_scopeId}>${ssrInterpolate(_ctx.$t("Заработная плата:"))}</p><p class=""${_scopeId}>${ssrInterpolate(__props.userEdit.salary + " " + _ctx.$t("сум"))}</p></div></div><div class="px-10 max-sm:px-0"${_scopeId}><div class="my-10 flex max-lg:gap-x-2 max-md:gap-y-2 max-md:flex-wrap max-md:justify-center justify-between"${_scopeId}><div class="gap-y-2 flex flex-col w-5/12 max-lg:w-full justify-center"${_scopeId}><p class="dark:text-white ml-1 tracking-widest font-bold"${_scopeId}>${ssrInterpolate(_ctx.$t("Имя") + ":")}</p>`);
              _push2(ssrRenderComponent(_sfc_main$7, {
                type: "text",
                modelValue: __props.userEdit.first_name,
                "onUpdate:modelValue": ($event) => __props.userEdit.first_name = $event
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="gap-y-2 flex flex-col w-5/12 max-lg:w-full justify-center"${_scopeId}><p class="dark:text-white ml-1 tracking-widest font-bold"${_scopeId}>${ssrInterpolate(_ctx.$t("Фамилия") + ":")}</p>`);
              _push2(ssrRenderComponent(_sfc_main$7, {
                type: "text",
                modelValue: __props.userEdit.last_name,
                "onUpdate:modelValue": ($event) => __props.userEdit.last_name = $event
              }, null, _parent2, _scopeId));
              _push2(`</div></div><div class="my-10 flex max-lg:gap-x-2 max-lg:gap-y-4 max-lg:flex-wrap max-md:justify-center justify-between items-center"${_scopeId}><div class="gap-y-2 flex flex-col w-5/12 max-lg:w-full justify-center"${_scopeId}><p class="dark:text-white ml-1 tracking-widest font-bold"${_scopeId}>${ssrInterpolate(_ctx.$t("Телефон") + ":")}</p>`);
              _push2(ssrRenderComponent(_sfc_main$7, {
                type: "tel",
                modelValue: __props.userEdit.phone,
                "onUpdate:modelValue": ($event) => __props.userEdit.phone = $event
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="gap-y-2 flex flex-col w-5/12 max-lg:w-full justify-center border p-4 rounded-xl shadow-md dark:shadow-none text-center"${_scopeId}><div${_scopeId}>`);
              if (!__props.getCode) {
                _push2(`<p class="dark:text-white ml-1 tracking-widest font-bold text-sm"${_scopeId}>${ssrInterpolate(_ctx.$t("Изменить номер") + ":")}</p>`);
              } else {
                _push2(`<p class="dark:text-white ml-1 tracking-widest font-bold text-sm"${_scopeId}>${ssrInterpolate(_ctx.$t("Введите Код") + ":")}</p>`);
              }
              _push2(`</div>`);
              if (__props.getCode) {
                _push2(`<div class="flex gap-x-1 justify-center"${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$7, {
                  type: "text",
                  maxlength: "1",
                  class: "w-[40px] h-[45px] rounded text-center font-bold text-xl"
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$7, {
                  type: "text",
                  maxlength: "1",
                  class: "w-[40px] h-[45px] rounded text-center font-bold text-xl"
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$7, {
                  type: "text",
                  maxlength: "1",
                  class: "w-[40px] h-[45px] rounded text-center font-bold text-xl"
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$7, {
                  type: "text",
                  maxlength: "1",
                  class: "w-[40px] h-[45px] rounded text-center font-bold text-xl"
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div${_scopeId}>`);
              if (!__props.getCode) {
                _push2(ssrRenderComponent(_sfc_main$8, {
                  t: "button",
                  type: "change",
                  class: "p-2 text-sm rounded-xl border shadow-md dark:shadow-none font-bold tracking-widest",
                  onClick: ($event) => {
                    __props.getCode = true;
                  }
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("Изменить"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("Изменить")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (__props.getCode) {
                _push2(ssrRenderComponent(_sfc_main$8, {
                  t: "button",
                  type: "change",
                  class: "p-2 text-sm rounded-xl border shadow-md dark:shadow-none font-bold tracking-widest",
                  onClick: ($event) => {
                    __props.getCode = true;
                  }
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("Подвердить"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("Подвердить")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div></div><div class="my-10 flex max-lg:gap-x-2 max-md:flex-wrap max-md:justify-center justify-between"${_scopeId}><div class="gap-y-2 flex flex-col w-5/12 max-lg:w-full justify-center"${_scopeId}><p class="dark:text-white ml-1 tracking-widest font-bold"${_scopeId}>${ssrInterpolate(_ctx.$t("Дата рождения") + ":")}</p>`);
              _push2(ssrRenderComponent(unref(VueDatePicker), {
                type: "text",
                modelValue: unref(birth),
                "onUpdate:modelValue": ($event) => isRef(birth) ? birth.value = $event : null
              }, null, _parent2, _scopeId));
              _push2(`</div></div></div><div class="flex justify-around max-sm:flex-col max-sm:gap-y-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$8, {
                class: "w-4/12 max-sm:w-full py-2 rounded-full",
                t: "button",
                type: "danger",
                onClick: ($event) => {
                  __props.showInfo = false;
                  __props.getCode = false;
                }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("Отмена"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("Отмена")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$8, {
                class: "w-4/12 max-sm:w-full py-2 rounded-full",
                t: "submit",
                type: "success"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("Сохранить"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("Сохранить")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div></form>`);
            } else {
              return [
                createVNode("form", {
                  onSubmit: withModifiers(($event) => {
                    var _a2;
                    return (_a2 = unref(loadCurrentUser)) == null ? void 0 : _a2.update_user({ user: __props.userEdit, update_type: "update-my" });
                  }, ["prevent"])
                }, [
                  createVNode("div", null, [
                    createVNode("h2", { class: "text-center text-xl tracking-widest font-bold dark:text-white" }, "Личная информация")
                  ]),
                  createVNode("div", { class: "w-full" }, [
                    createVNode("div", { class: "mt-10 flex items-center justify-around" }, [
                      createVNode("div", { class: "flex flex-col text-center w-3/12 dark:text-white tracking-widest" }, [
                        createVNode("p", { class: "dark:text-gray-200 text-gray-400 font-bold text-[14px]" }, toDisplayString(_ctx.$t("Должность:")), 1),
                        createVNode("p", { class: "" }, toDisplayString(__props.userEdit.position), 1)
                      ]),
                      createVNode("div", { class: "flex flex-col text-center w-3/12 dark:text-white tracking-widest" }, [
                        createVNode("p", { class: "dark:text-gray-200 text-gray-400 font-bold text-[14px]" }, toDisplayString(_ctx.$t("Заработная плата:")), 1),
                        createVNode("p", { class: "" }, toDisplayString(__props.userEdit.salary + " " + _ctx.$t("сум")), 1)
                      ])
                    ]),
                    createVNode("div", { class: "px-10 max-sm:px-0" }, [
                      createVNode("div", { class: "my-10 flex max-lg:gap-x-2 max-md:gap-y-2 max-md:flex-wrap max-md:justify-center justify-between" }, [
                        createVNode("div", { class: "gap-y-2 flex flex-col w-5/12 max-lg:w-full justify-center" }, [
                          createVNode("p", { class: "dark:text-white ml-1 tracking-widest font-bold" }, toDisplayString(_ctx.$t("Имя") + ":"), 1),
                          createVNode(_sfc_main$7, {
                            type: "text",
                            modelValue: __props.userEdit.first_name,
                            "onUpdate:modelValue": ($event) => __props.userEdit.first_name = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "gap-y-2 flex flex-col w-5/12 max-lg:w-full justify-center" }, [
                          createVNode("p", { class: "dark:text-white ml-1 tracking-widest font-bold" }, toDisplayString(_ctx.$t("Фамилия") + ":"), 1),
                          createVNode(_sfc_main$7, {
                            type: "text",
                            modelValue: __props.userEdit.last_name,
                            "onUpdate:modelValue": ($event) => __props.userEdit.last_name = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      createVNode("div", { class: "my-10 flex max-lg:gap-x-2 max-lg:gap-y-4 max-lg:flex-wrap max-md:justify-center justify-between items-center" }, [
                        createVNode("div", { class: "gap-y-2 flex flex-col w-5/12 max-lg:w-full justify-center" }, [
                          createVNode("p", { class: "dark:text-white ml-1 tracking-widest font-bold" }, toDisplayString(_ctx.$t("Телефон") + ":"), 1),
                          createVNode(_sfc_main$7, {
                            type: "tel",
                            modelValue: __props.userEdit.phone,
                            "onUpdate:modelValue": ($event) => __props.userEdit.phone = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "gap-y-2 flex flex-col w-5/12 max-lg:w-full justify-center border p-4 rounded-xl shadow-md dark:shadow-none text-center" }, [
                          createVNode("div", null, [
                            !__props.getCode ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "dark:text-white ml-1 tracking-widest font-bold text-sm"
                            }, toDisplayString(_ctx.$t("Изменить номер") + ":"), 1)) : (openBlock(), createBlock("p", {
                              key: 1,
                              class: "dark:text-white ml-1 tracking-widest font-bold text-sm"
                            }, toDisplayString(_ctx.$t("Введите Код") + ":"), 1))
                          ]),
                          __props.getCode ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "flex gap-x-1 justify-center"
                          }, [
                            createVNode(_sfc_main$7, {
                              type: "text",
                              maxlength: "1",
                              class: "w-[40px] h-[45px] rounded text-center font-bold text-xl"
                            }),
                            createVNode(_sfc_main$7, {
                              type: "text",
                              maxlength: "1",
                              class: "w-[40px] h-[45px] rounded text-center font-bold text-xl"
                            }),
                            createVNode(_sfc_main$7, {
                              type: "text",
                              maxlength: "1",
                              class: "w-[40px] h-[45px] rounded text-center font-bold text-xl"
                            }),
                            createVNode(_sfc_main$7, {
                              type: "text",
                              maxlength: "1",
                              class: "w-[40px] h-[45px] rounded text-center font-bold text-xl"
                            })
                          ])) : createCommentVNode("", true),
                          createVNode("div", null, [
                            !__props.getCode ? (openBlock(), createBlock(_sfc_main$8, {
                              key: 0,
                              t: "button",
                              type: "change",
                              class: "p-2 text-sm rounded-xl border shadow-md dark:shadow-none font-bold tracking-widest",
                              onClick: ($event) => {
                                __props.getCode = true;
                              }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("Изменить")), 1)
                              ]),
                              _: 1
                            }, 8, ["onClick"])) : createCommentVNode("", true),
                            __props.getCode ? (openBlock(), createBlock(_sfc_main$8, {
                              key: 1,
                              t: "button",
                              type: "change",
                              class: "p-2 text-sm rounded-xl border shadow-md dark:shadow-none font-bold tracking-widest",
                              onClick: ($event) => {
                                __props.getCode = true;
                              }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("Подвердить")), 1)
                              ]),
                              _: 1
                            }, 8, ["onClick"])) : createCommentVNode("", true)
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "my-10 flex max-lg:gap-x-2 max-md:flex-wrap max-md:justify-center justify-between" }, [
                        createVNode("div", { class: "gap-y-2 flex flex-col w-5/12 max-lg:w-full justify-center" }, [
                          createVNode("p", { class: "dark:text-white ml-1 tracking-widest font-bold" }, toDisplayString(_ctx.$t("Дата рождения") + ":"), 1),
                          createVNode(unref(VueDatePicker), {
                            type: "text",
                            modelValue: unref(birth),
                            "onUpdate:modelValue": ($event) => isRef(birth) ? birth.value = $event : null
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "flex justify-around max-sm:flex-col max-sm:gap-y-2" }, [
                      createVNode(_sfc_main$8, {
                        class: "w-4/12 max-sm:w-full py-2 rounded-full",
                        t: "button",
                        type: "danger",
                        onClick: ($event) => {
                          __props.showInfo = false;
                          __props.getCode = false;
                        }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("Отмена")), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_sfc_main$8, {
                        class: "w-4/12 max-sm:w-full py-2 rounded-full",
                        t: "submit",
                        type: "success"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("Сохранить")), 1)
                        ]),
                        _: 1
                      })
                    ])
                  ])
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Profile/ProfileUI/ProfileContentUserInfo.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Profile/ProfileUI/ProfileContentNotification.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ProfileContentNotification = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Nuxt_Link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Nuxt_Link, { to: " " }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Profile/ProfileUI/ProfileTasks.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ProfileTasks = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProfileContent",
  __ssrInlineRender: true,
  props: {
    activeNav: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const target = ref(null);
    useMediaQuery("(max-width: 700px)");
    const parallax = reactive(useParallax(target));
    computed(() => ({
      transition: ".3s ease-out all",
      transform: `rotateX(${parallax.roll * 1}deg) rotateY(${parallax.tilt * 1}deg)`
    }));
    const parallaxContainer = ref(null);
    useParallax(parallaxContainer);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["w-full grid gap-y-10 gap-x-10 grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1", { "max-[1150px]:grid-cols-2": __props.activeNav, "max-[1150px]:grid-cols-3": !__props.activeNav }]
      }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$4, { "get-code": _ctx.getCode }, null, _parent));
      _push(`<div class="w-full p-6 dark:border-t dark:border-t-gray-500 dark:shadow-md shadow-lg dark:shadow-gray-500 cursor-pointer rounded-md hover:transform hover:-translate-y-2 transition-all duration-200"><h2 class="dark:text-white tracking-widest">${ssrInterpolate(_ctx.$t("Личная статистика"))}</h2>`);
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(TheContentBlock, { class: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$9, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("Последние задания"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("Последние задания")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(ProfileTasks, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_sfc_main$9, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("Последние задания")), 1)
                ]),
                _: 1
              }),
              createVNode("div", null, [
                createVNode(ProfileTasks)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(TheContentBlock, { class: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$9, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("Уведомления"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("Уведомления")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(ProfileContentNotification, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$9, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("Уведомления")), 1)
                ]),
                _: 1
              }),
              createVNode(ProfileContentNotification)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(TheContentBlock, { class: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$9, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t(""))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$9, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("")), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Profile/ProfileContent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "profile",
  __ssrInlineRender: true,
  props: {
    activeNav: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    useSeoMeta({
      title: "Профиль",
      description: "Личный кабинет | Текущая информация обо мне"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProfileContent = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$9, { "text-type": "pageTitle" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Страница профиля"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Страница профиля")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="w-full mx-auto">`);
      _push(ssrRenderComponent(_component_ProfileContent, { activeNav: __props.activeNav }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=profile-WeBSzQcV.js.map
