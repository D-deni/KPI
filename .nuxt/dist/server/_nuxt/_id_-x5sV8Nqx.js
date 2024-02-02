import { defineComponent, mergeProps, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext, watchEffect, watchSyncEffect, createTextVNode } from "vue";
import { r as useSeoMeta } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$3 } from "./TheBreadcrumbs-ms4_phBH.js";
import { u as useCompanies } from "./companies-Vl6LYc-q.js";
import { useRoute } from "vue-router";
import { T as TheContentBlock } from "./TheContentBlock-AeyxWvVh.js";
import { _ as _sfc_main$4 } from "./TheSearch-0oEaP3Jw.js";
import { _ as _sfc_main$5 } from "./TheFilter-_NjUA2jw.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-nvHjMUuE.js";
import { u as useAuthStore } from "./auth-ltfjqTsG.js";
import { _ as _sfc_main$2 } from "./TheTextContent-rN29GJom.js";
import { _ as _sfc_main$6 } from "./TheButton-Jrv5tshN.js";
import { _ as _sfc_main$7 } from "./TheModal-1X0PcTyA.js";
import { S as Sceleton } from "./TheSceleton-RMAy-i6X.js";
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
import "./_plugin-vue_export-helper-yVxbj29m.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DepartmentUserList",
  __ssrInlineRender: true,
  props: {
    userItem: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const loadCurrentUser = useAuthStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "my-6" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/base/users/${__props.userItem.id}`,
        class: "transition-all shadow-md hover:shadow-lg border dark:border-none dark:shadow-none dark:bg-gray-400 dark:hover:bg-gray-300 p-4 rounded-lg flex max-[1241px]:flex-col max-[1241px]:gap-y-4 justify-between items-center cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-x-4 w-3/12 max-lg:w-full max-lg:x-mx-auto"${_scopeId}><img class="w-14 h-14 rounded-full"${ssrRenderAttr("src", unref(loadCurrentUser).get_server_domain + __props.userItem.photo_url)} alt=""${_scopeId}><h2 class="tracking-widest font-bold max-xl:text-center"${_scopeId}>${ssrInterpolate(__props.userItem.first_name + " " + __props.userItem.last_name)}</h2></div><div class="flex flex-col items-center justify-center w-5/12 max-lg:w-full mx-auto"${_scopeId}>`);
            if (unref(loadCurrentUser).user.role === "Администратор сайта") {
              _push2(`<p class="text-lg font-bold tracking-widest mb-2"${_scopeId}>${ssrInterpolate(_ctx.$t("Роль | Должность"))}</p>`);
            } else {
              _push2(`<p class="text-lg font-bold tracking-widest mb-2"${_scopeId}>${ssrInterpolate(_ctx.$t("Должность"))}</p>`);
            }
            _push2(`<div class="text-center flex flex-col gap-y-2"${_scopeId}>`);
            if (unref(loadCurrentUser).user.role === "Администратор сайта") {
              _push2(`<h2 class="tracking-widest text-sm text-gray-600"${_scopeId}>(${ssrInterpolate(__props.userItem.role)})</h2>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<h2 class="tracking-widest text-md"${_scopeId}>${ssrInterpolate(__props.userItem.position)}</h2></div></div><div class="w-2/12 max-[1241px]:w-full max-lg:x-mx-auto text-center"${_scopeId}>`);
            if (unref(loadCurrentUser).user.role === "Администратор сайта" || unref(loadCurrentUser).user.role === "Администратор компании") {
              _push2(`<h2 class="tracking-widest font-bold"${_scopeId}>${ssrInterpolate(_ctx.$t("Дата регистрации"))}</h2>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-x-4 w-3/12 max-lg:w-full max-lg:x-mx-auto" }, [
                createVNode("img", {
                  class: "w-14 h-14 rounded-full",
                  src: unref(loadCurrentUser).get_server_domain + __props.userItem.photo_url,
                  alt: ""
                }, null, 8, ["src"]),
                createVNode("h2", { class: "tracking-widest font-bold max-xl:text-center" }, toDisplayString(__props.userItem.first_name + " " + __props.userItem.last_name), 1)
              ]),
              createVNode("div", { class: "flex flex-col items-center justify-center w-5/12 max-lg:w-full mx-auto" }, [
                unref(loadCurrentUser).user.role === "Администратор сайта" ? (openBlock(), createBlock("p", {
                  key: 0,
                  class: "text-lg font-bold tracking-widest mb-2"
                }, toDisplayString(_ctx.$t("Роль | Должность")), 1)) : (openBlock(), createBlock("p", {
                  key: 1,
                  class: "text-lg font-bold tracking-widest mb-2"
                }, toDisplayString(_ctx.$t("Должность")), 1)),
                createVNode("div", { class: "text-center flex flex-col gap-y-2" }, [
                  unref(loadCurrentUser).user.role === "Администратор сайта" ? (openBlock(), createBlock("h2", {
                    key: 0,
                    class: "tracking-widest text-sm text-gray-600"
                  }, "(" + toDisplayString(__props.userItem.role) + ")", 1)) : createCommentVNode("", true),
                  createVNode("h2", { class: "tracking-widest text-md" }, toDisplayString(__props.userItem.position), 1)
                ])
              ]),
              createVNode("div", { class: "w-2/12 max-[1241px]:w-full max-lg:x-mx-auto text-center" }, [
                unref(loadCurrentUser).user.role === "Администратор сайта" || unref(loadCurrentUser).user.role === "Администратор компании" ? (openBlock(), createBlock("h2", {
                  key: 0,
                  class: "tracking-widest font-bold"
                }, toDisplayString(_ctx.$t("Дата регистрации")), 1)) : createCommentVNode("", true)
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Company/department/DepartmentUserList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  props: {
    showWarning: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const currentDepartment = useCompanies();
    const route = useRoute();
    watchEffect(() => {
      currentDepartment.loadDepartment({ id: route.params.id });
    });
    watchSyncEffect(() => {
      useSeoMeta({
        title: `${currentDepartment.current_department.name}`
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-10">`);
      _push(ssrRenderComponent(_sfc_main$2, { "text-type": "pageTitle" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Департамент"))} <span class="text-base text-white bg-blueSemiLight py-2 px-4 rounded-full"${_scopeId}>${ssrInterpolate(unref(currentDepartment).get_department.name)}</span>`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Департамент")) + " ", 1),
              createVNode("span", { class: "text-base text-white bg-blueSemiLight py-2 px-4 rounded-full" }, toDisplayString(unref(currentDepartment).get_department.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center gap-x-4">`);
      _push(ssrRenderComponent(_sfc_main$3, { "breadcrumb-link": `/base/companies` }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Компания"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Компания")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div><svg width="15px" height="15px" viewBox="0 0 24 24" fill="none"><path class="dark:stroke-white stroke-black" d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5" stroke-width="2" stroke-linecap="round"></path></svg></div>`);
      _push(ssrRenderComponent(_sfc_main$3, { "breadcrumb-link": `/base/companies/department` }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Департаменты"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Департаменты")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div><svg width="15px" height="15px" viewBox="0 0 24 24" fill="none"><path class="dark:stroke-white stroke-black" d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5" stroke-width="2" stroke-linecap="round"></path></svg></div>`);
      _push(ssrRenderComponent(_sfc_main$3, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(currentDepartment).get_department.name)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(currentDepartment).get_department.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center gap-x-10"><div class="flex items-center w-11/12 gap-x-10">`);
      _push(ssrRenderComponent(_sfc_main$4, { class: "w-7/12" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$6, {
        type: "danger",
        class: "px-10 py-2 rounded-full",
        onClick: ($event) => __props.showWarning = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Удалить"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Удалить")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (__props.showWarning) {
        _push(ssrRenderComponent(_sfc_main$7, {
          onShowModal: ($event) => __props.showWarning = !__props.showWarning
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("Предупреждение"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("Предупреждение")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="text-center text-lg mt-2 tracking-widest"${_scopeId}><p${_scopeId}>${ssrInterpolate(_ctx.$t("Вы действительно хотите удалить департамент?"))}</p><p class="!text-base"${_scopeId}>${ssrInterpolate(_ctx.$t("Удалённые департаменты восстановке не подлежат"))}</p></div></div><div class="flex justify-center gap-x-10 mt-10"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$6, {
                type: "danger",
                class: "w-3/12 py-2 rounded-full",
                onClick: ($event) => __props.showWarning = false
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
              _push2(ssrRenderComponent(_sfc_main$6, {
                type: "success",
                class: "w-3/12 py-2 rounded-full",
                onClick: ($event) => unref(currentDepartment).deleteDepartment({ id: unref(currentDepartment).get_department.id }, _ctx.$router)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("Удалить"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("Удалить")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", null, [
                  createVNode(_sfc_main$2, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Предупреждение")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "text-center text-lg mt-2 tracking-widest" }, [
                    createVNode("p", null, toDisplayString(_ctx.$t("Вы действительно хотите удалить департамент?")), 1),
                    createVNode("p", { class: "!text-base" }, toDisplayString(_ctx.$t("Удалённые департаменты восстановке не подлежат")), 1)
                  ])
                ]),
                createVNode("div", { class: "flex justify-center gap-x-10 mt-10" }, [
                  createVNode(_sfc_main$6, {
                    type: "danger",
                    class: "w-3/12 py-2 rounded-full",
                    onClick: ($event) => __props.showWarning = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Отмена")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_sfc_main$6, {
                    type: "success",
                    class: "w-3/12 py-2 rounded-full",
                    onClick: ($event) => unref(currentDepartment).deleteDepartment({ id: unref(currentDepartment).get_department.id }, _ctx.$router)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Удалить")), 1)
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
      _push(`</div><div class="flex gap-x-10 w-full">`);
      if (!((_a = unref(currentDepartment).get_department) == null ? void 0 : _a.id)) {
        _push(`<div class="flex w-full gap-y-4 flex-col"><!--[-->`);
        ssrRenderList(5, (i) => {
          _push(ssrRenderComponent(Sceleton, {
            "border-radius": "10px",
            width: "90%",
            height: "80px"
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="w-full"><!--[-->`);
        ssrRenderList((_c = (_b = unref(currentDepartment)) == null ? void 0 : _b.get_department) == null ? void 0 : _c.participants, (userItem) => {
          _push(ssrRenderComponent(_sfc_main$1, { "user-item": userItem }, null, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(`<div class="w-3/12">`);
      _push(ssrRenderComponent(TheContentBlock, { class: "w-full" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Информация`);
                } else {
                  return [
                    createTextVNode("Информация")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}><div class="flex items-center my-4 gap-x-5 justify-center"${_scopeId}><div class="flex items-center gap-x-2 w-8/12 max-md:w-9/12"${_scopeId}><div${_scopeId}><svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-inspector="components/TheHeader.vue:26:11"${_scopeId}><g id="User / Users_Group" data-v-inspector="components/TheHeader.vue:27:13"${_scopeId}><path id="Vector" class="dark:stroke-white stroke-black" d="M17 20C17 18.3431 14.7614 17 12 17C9.23858 17 7 18.3431 7 20M21 17.0004C21 15.7702 19.7659 14.7129 18 14.25M3 17.0004C3 15.7702 4.2341 14.7129 6 14.25M18 10.2361C18.6137 9.68679 19 8.8885 19 8C19 6.34315 17.6569 5 16 5C15.2316 5 14.5308 5.28885 14 5.76389M6 10.2361C5.38625 9.68679 5 8.8885 5 8C5 6.34315 6.34315 5 8 5C8.76835 5 9.46924 5.28885 10 5.76389M12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14Z" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" data-v-inspector="components/TheHeader.vue:28:15"${_scopeId}></path></g></svg></div><p class="tracking-widest"${_scopeId}>${ssrInterpolate(_ctx.$t("Сотрудников"))}: </p></div><div${_scopeId}><p class="rounded-full border border-gray-400 dark:border-white w-10 h-10 flex items-center justify-center dark:text-white"${_scopeId}>${ssrInterpolate((_a2 = unref(currentDepartment).get_department.participants) == null ? void 0 : _a2.length)}</p></div></div></div>`);
          } else {
            return [
              createVNode(_sfc_main$2, null, {
                default: withCtx(() => [
                  createTextVNode("Информация")
                ]),
                _: 1
              }),
              createVNode("div", null, [
                createVNode("div", { class: "flex items-center my-4 gap-x-5 justify-center" }, [
                  createVNode("div", { class: "flex items-center gap-x-2 w-8/12 max-md:w-9/12" }, [
                    createVNode("div", null, [
                      (openBlock(), createBlock("svg", {
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        "data-v-inspector": "components/TheHeader.vue:26:11"
                      }, [
                        createVNode("g", {
                          id: "User / Users_Group",
                          "data-v-inspector": "components/TheHeader.vue:27:13"
                        }, [
                          createVNode("path", {
                            id: "Vector",
                            class: "dark:stroke-white stroke-black",
                            d: "M17 20C17 18.3431 14.7614 17 12 17C9.23858 17 7 18.3431 7 20M21 17.0004C21 15.7702 19.7659 14.7129 18 14.25M3 17.0004C3 15.7702 4.2341 14.7129 6 14.25M18 10.2361C18.6137 9.68679 19 8.8885 19 8C19 6.34315 17.6569 5 16 5C15.2316 5 14.5308 5.28885 14 5.76389M6 10.2361C5.38625 9.68679 5 8.8885 5 8C5 6.34315 6.34315 5 8 5C8.76835 5 9.46924 5.28885 10 5.76389M12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14Z",
                            "stroke-width": "1",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "data-v-inspector": "components/TheHeader.vue:28:15"
                          })
                        ])
                      ]))
                    ]),
                    createVNode("p", { class: "tracking-widest" }, toDisplayString(_ctx.$t("Сотрудников")) + ": ", 1)
                  ]),
                  createVNode("div", null, [
                    createVNode("p", { class: "rounded-full border border-gray-400 dark:border-white w-10 h-10 flex items-center justify-center dark:text-white" }, toDisplayString((_b2 = unref(currentDepartment).get_department.participants) == null ? void 0 : _b2.length), 1)
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base/companies/department/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-x5sV8Nqx.js.map
