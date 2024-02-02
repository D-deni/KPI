import { _ as __nuxt_component_0 } from './client-only-uY1C8Tgt.mjs';
import { defineComponent, ref, useSSRContext } from 'vue';
import { u as useHead } from '../server.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useAuthStore } from './auth-ltfjqTsG.mjs';
import { useRouter } from 'vue-router';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    loginShow: Boolean,
    activeEyes: Boolean
  },
  setup(__props) {
    useRouter();
    useAuthStore();
    ref({
      email: "",
      password: ""
    });
    useHead(
      {
        titleTemplate: "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F \u2022 ERP"
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-uw1Lgw1N.mjs.map
