import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TheInput",
  __ssrInlineRender: true,
  props: {
    modelValue: String,
    label: String,
    placeholder: String,
    type: String,
    required: Boolean,
    trimi: {
      type: Boolean,
      default: null
    },
    answer: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<label${ssrRenderAttrs(mergeProps({ class: "flex flex-col outline-none font-medium gap-y-2 text-md dark:text-white tracking-wider" }, _attrs))}>`);
      if (__props.type !== "default") {
        _push(`<span>${ssrInterpolate(__props.label)} `);
        if (__props.required) {
          _push(`<span class="text-red-500">*</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.type === "textarea") {
        _push(`<textarea name="" id="" cols="30" rows="10"${ssrIncludeBooleanAttr(__props.required) ? " required" : ""} class="${ssrRenderClass([{ "!bg-red-200 border-red-400 dark:border !outline-none": __props.trimi && __props.required }, "text-lg dark:text-black resize-none border outline-3 rounded-lg focus:outline-semiCyan focus:outline-1 outline-none px-4 py-2 dark:bg-gray-300"])}"${ssrRenderAttr("placeholder", __props.label)}>${ssrInterpolate(__props.modelValue)}</textarea>`);
      } else if (__props.type === "file") {
        _push(`<input${ssrRenderAttr("value", __props.modelValue)}${ssrIncludeBooleanAttr(__props.required) ? " required" : ""}${ssrRenderAttr("type", __props.type)} class="w-full rounded-lg p-2 dark:border-none text-black border outline-semiCyan outline-1"${ssrRenderAttr("placeholder", __props.placeholder)} multiple>`);
      } else {
        _push(`<input${ssrRenderAttr("value", __props.modelValue)}${ssrIncludeBooleanAttr(__props.required) ? " required" : ""}${ssrRenderAttr("type", __props.type)} class="${ssrRenderClass([{ "!bg-red-200 !outline-none": __props.trimi, "!bg-green-400 text-white": __props.answer, "!dark:bg-gray-500": __props.type === "createInput", "!bg-transparent dark:text-white text-black !outline-none !border-none": __props.type === "default" }, "w-full rounded-lg p-2 dark:border-none text-black border focus:outline-semiCyan focus:outline-1 outline-none dark:bg-gray-300"])}"${ssrRenderAttr("placeholder", __props.placeholder)}>`);
      }
      _push(`</label>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/TheInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=TheInput-6xiMcCQ9.mjs.map
