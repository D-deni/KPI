import { useSSRContext, defineComponent, watchEffect, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { u as useObjects } from './objects-Bnj9l-O8.mjs';
import { useRoute } from 'vue-router';
import { T as TheContentBlock } from './TheContentBlock-AeyxWvVh.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-nvHjMUuE.mjs';
import { u as useAuthStore } from './auth-a24Q8VGa.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { _ as _export_sfc } from './_plugin-vue_export-helper-yVxbj29m.mjs';
import { _ as _sfc_main$4 } from './TheBreadcrumbs-ms4_phBH.mjs';
import { _ as _sfc_main$3 } from './TheTextContent-rN29GJom.mjs';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ObjectParticipants",
  __ssrInlineRender: true,
  props: {
    user: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    const url = useAuthStore();
    useObjects();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "flex dark:hover:bg-gray-700 p-2 rounded-lg transition-all items-center gap-x-2",
        to: `/base/users/${__props.user.id}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-[50px] h-[50px]"${_scopeId}><img class="w-full rounded-full"${ssrRenderAttr("src", unref(url).get_server_domain + __props.user.photo_url)} alt=""${_scopeId}></div><p${_scopeId}>${ssrInterpolate(__props.user.first_name + " " + __props.user.last_name)}</p>`);
          } else {
            return [
              createVNode("div", { class: "w-[50px] h-[50px]" }, [
                createVNode("img", {
                  class: "w-full rounded-full",
                  src: unref(url).get_server_domain + __props.user.photo_url,
                  alt: ""
                }, null, 8, ["src"])
              ]),
              createVNode("p", null, toDisplayString(__props.user.first_name + " " + __props.user.last_name), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Objects/ObjectParticipants.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Swiper = Swiper;
  const _component_SwiperSlide = SwiperSlide;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Swiper, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_SwiperSlide, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_SwiperSlide)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Objects/ObjectSwiper.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ObjectSwiper = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const currentObject = useObjects();
    watchEffect(() => {
      currentObject.loadObject({ id: route.params.id });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$3, { "text-type": "pageTitle" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043E\u0431\u044A\u0435\u043A\u0442\u0430 "))} <span class="bg-semiCyan px-2 py-1 rounded-full text-white"${_scopeId}>${ssrInterpolate(unref(currentObject).get_objects.name)}</span>`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043E\u0431\u044A\u0435\u043A\u0442\u0430 ")) + " ", 1),
              createVNode("span", { class: "bg-semiCyan px-2 py-1 rounded-full text-white" }, toDisplayString(unref(currentObject).get_objects.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex max-sm:flex-col max-sm:my-6 items-center gap-x-4">`);
      _push(ssrRenderComponent(_sfc_main$4, { "breadcrumb-link": "/base/objects" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u0421\u043F\u0438\u0441\u043E\u043A \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u0421\u043F\u0438\u0441\u043E\u043A \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div><svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="dark:stroke-white stroke-black" d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5" stroke-width="2" stroke-linecap="round"></path></svg></div>`);
      _push(ssrRenderComponent(_sfc_main$4, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(currentObject).get_objects.name)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(currentObject).get_objects.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex mt-6 gap-x-4">`);
      _push(ssrRenderComponent(TheContentBlock, { class: "w-9/12" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-between gap-x-2"${_scopeId}><div${_scopeId}><p${_scopeId}>${ssrInterpolate(_ctx.$t("\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F:"))}</p><p${_scopeId}>${ssrInterpolate(new Date(unref(currentObject).get_objects.created_at).toLocaleDateString())}</p></div>`);
            _push2(ssrRenderComponent(_sfc_main$3, { "text-type": "pageTitle" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p${_scopeId}>${ssrInterpolate(_ctx.$t("Email:"))}</p><p${_scopeId}>${ssrInterpolate(unref(currentObject).get_objects.email)}</p></div></div><div${_scopeId}><p${_scopeId}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequatur exercitationem fugiat in minus non suscipit velit voluptatum? Expedita facere itaque iusto magni possimus quis reiciendis rem tenetur totam voluptatibus. Beatae commodi corporis culpa hic iusto, natus numquam perferendis quas repellat saepe sed totam, vel voluptatum. Amet architecto at commodi consequuntur culpa delectus deleniti dicta dolore ea eius eos est eum explicabo, id impedit ipsam itaque necessitatibus nemo neque officia pariatur perspiciatis placeat praesentium quaerat quam quas quos repellat repudiandae saepe sint soluta tenetur vel voluptatum. Aliquam asperiores incidunt omnis repellendus. Beatae eaque exercitationem quia sed tempore? Maiores quia, quo!</p></div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-between gap-x-2" }, [
                createVNode("div", null, [
                  createVNode("p", null, toDisplayString(_ctx.$t("\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F:")), 1),
                  createVNode("p", null, toDisplayString(new Date(unref(currentObject).get_objects.created_at).toLocaleDateString()), 1)
                ]),
                createVNode(_sfc_main$3, { "text-type": "pageTitle" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435")), 1)
                  ]),
                  _: 1
                }),
                createVNode("div", null, [
                  createVNode("p", null, toDisplayString(_ctx.$t("Email:")), 1),
                  createVNode("p", null, toDisplayString(unref(currentObject).get_objects.email), 1)
                ])
              ]),
              createVNode("div", null, [
                createVNode("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequatur exercitationem fugiat in minus non suscipit velit voluptatum? Expedita facere itaque iusto magni possimus quis reiciendis rem tenetur totam voluptatibus. Beatae commodi corporis culpa hic iusto, natus numquam perferendis quas repellat saepe sed totam, vel voluptatum. Amet architecto at commodi consequuntur culpa delectus deleniti dicta dolore ea eius eos est eum explicabo, id impedit ipsam itaque necessitatibus nemo neque officia pariatur perspiciatis placeat praesentium quaerat quam quas quos repellat repudiandae saepe sint soluta tenetur vel voluptatum. Aliquam asperiores incidunt omnis repellendus. Beatae eaque exercitationem quia sed tempore? Maiores quia, quo!")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(TheContentBlock, { class: "w-3/12" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$3, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            if (((_a = unref(currentObject).get_objects.participants) == null ? void 0 : _a.length) > 0) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(currentObject).get_objects.participants, (user) => {
                _push2(ssrRenderComponent(_sfc_main$2, { user }, null, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              _push2(`<div${_scopeId}><p${_scopeId}>${ssrInterpolate(_ctx.$t("\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0442"))}</p></div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode(_sfc_main$3, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438")), 1)
                ]),
                _: 1
              }),
              createVNode("div", null, [
                ((_b = unref(currentObject).get_objects.participants) == null ? void 0 : _b.length) > 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(currentObject).get_objects.participants, (user) => {
                  return openBlock(), createBlock(_sfc_main$2, { user }, null, 8, ["user"]);
                }), 256)) : (openBlock(), createBlock("div", { key: 1 }, [
                  createVNode("p", null, toDisplayString(_ctx.$t("\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0442")), 1)
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(TheContentBlock, { class: "my-10" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$3, { "text-type": "pageTitle" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043E\u0431\u044A\u0435\u043A\u0442\u0430"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043E\u0431\u044A\u0435\u043A\u0442\u0430")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(ObjectSwiper, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$3, { "text-type": "pageTitle" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043E\u0431\u044A\u0435\u043A\u0442\u0430")), 1)
                ]),
                _: 1
              }),
              createVNode(ObjectSwiper)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base/objects/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-w74T4vFr.mjs.map
