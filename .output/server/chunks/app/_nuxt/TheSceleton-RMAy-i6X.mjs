import { useSSRContext, defineComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { _ as _export_sfc } from './_plugin-vue_export-helper-yVxbj29m.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TheSceleton",
  __ssrInlineRender: true,
  props: {
    height: String,
    width: String,
    borderRadius: String
  },
  setup(__props) {
    useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--7e06329c": __props.height,
        "--1dac09b1": __props.width,
        "--01f4f193": __props.borderRadius
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "placeholder" }, _attrs, _cssVars))} data-v-88f0b931>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/TheSceleton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Sceleton = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-88f0b931"]]);

export { Sceleton as S };
//# sourceMappingURL=TheSceleton-RMAy-i6X.mjs.map
