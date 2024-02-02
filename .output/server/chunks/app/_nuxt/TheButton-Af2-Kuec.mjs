import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { r as defineStore } from '../server.mjs';
import { a as axios, n as nuxtStorage } from '../../nuxt-storage.mjs';

const useTreeStore = defineStore("useTree", {
  state: () => ({
    tree: {},
    treeFullScreen: false
  }),
  getters: {
    get_list(tree) {
      return this.tree;
    }
  },
  actions: {
    async loadTreeList() {
      axios.get(`api/v1/user/tree`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        this.tree = res.data;
      });
    }
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TheButton",
  __ssrInlineRender: true,
  props: {
    type: String,
    t: String
  },
  setup(__props) {
    useTreeStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: __props.t,
        class: ["font-bold tracking-widest text-white", {
          "bg-blue-400 w-5/12 mx-auto py-4 rounded-xl": __props.type === "signIn",
          "bg-blueSemiLight": __props.type === "change",
          "bg-green-400": __props.type === "success",
          "bg-red-400": __props.type === "danger",
          "dark:hover:bg-gray-600 hover:bg-gray-100 rounded-lg !text-semiCyan transition-all p-2": __props.type === "chat",
          "!text-black dark:!text-white border border-semiCyan p-2 rounded-lg": __props.type === "treeBtn",
          "dark:hover:bg-gray-700 hover:bg-gray-100 rounded-lg !text-semiCyan transition-all p-2": __props.type === "documentBtn"
        }]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/TheButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _, useTreeStore as u };
//# sourceMappingURL=TheButton-Af2-Kuec.mjs.map
