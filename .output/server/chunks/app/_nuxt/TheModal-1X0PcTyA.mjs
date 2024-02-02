import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TheModal",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed left-0 top-0 h-screen w-screen flex justify-center items-center z-[110]" }, _attrs))}><div class="opacity-60 bg-black absolute left-0 top-0 w-screen h-screen"></div><div class="${ssrRenderClass([{ "!w-max dark:!bg-gray-700": __props.type === "resize", "!w-max dark:!bg-gray-700 !p-0": __props.type === "resizeSendWindow", "!w-[400px] dark:!bg-gray-700 !p-0": __props.type === "resizeInfoWindow" }, "dark:bg-gray-400 bg-white rounded-lg w-7/12 max-md:w-10/12 max-sm:w-11/12 max-h-[70%] relative p-5 max-sm:p-3 overflow-y-auto"])}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/TheModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=TheModal-1X0PcTyA.mjs.map
