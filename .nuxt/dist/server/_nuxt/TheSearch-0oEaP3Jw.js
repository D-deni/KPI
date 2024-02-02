import { defineComponent, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TheSearch",
  __ssrInlineRender: true,
  props: {
    modelValue: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><input class="w-full px-4 py-3 rounded-full bg-gray-100 focus:bg-gray-200 text-black tracking-widest dark:focus:opacity-100 transition-all dark:opacity-40 outline-none" type="text" placeholder="Найти..."></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/TheSearch.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=TheSearch-0oEaP3Jw.js.map
