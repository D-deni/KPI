import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useAuthStore } from './auth-ltfjqTsG.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TheChatAvatar",
  __ssrInlineRender: true,
  props: {
    chat: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    const domain = useAuthStore();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}>`);
      if (((_a = __props.chat.user) == null ? void 0 : _a.id) !== unref(domain).user.id && ((_b = __props.chat.user) == null ? void 0 : _b.id)) {
        _push(`<div class="w-[50px]"><img class="w-[50px] h-[50px] rounded-full"${ssrRenderAttr("src", unref(domain).get_server_domain + __props.chat.user.photo)} alt=""></div>`);
      } else if (__props.chat.is_group) {
        _push(`<div>`);
        if ((_c = __props.chat) == null ? void 0 : _c.photo_url) {
          _push(`<img${ssrRenderAttr("src", unref(domain).get_server_domain + ((_d = __props.chat) == null ? void 0 : _d.photo_url))} class="w-[50px] h-[50px] rounded-full" alt="">`);
        } else {
          _push(`<div class="rounded-full bg-blueSemiLight flex items-center justify-center w-[50px] h-[50px]"><!--[-->`);
          ssrRenderList(__props.chat.name.split(" ").slice(0, 2), (chatName) => {
            _push(`<p class="uppercase font-bold">${ssrInterpolate(chatName[0])}</p>`);
          });
          _push(`<!--]--></div>`);
        }
        _push(`</div>`);
      } else if (!((_e = __props.chat.user) == null ? void 0 : _e.id) && !__props.chat.is_group) {
        _push(`<div class="rounded-full bg-blueSemiLight flex items-center justify-center w-[50px] h-[50px]"><svg class="stroke-white" width="35px" height="35px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.507 19.853V6.034C18.5116 5.49905 18.3034 4.98422 17.9283 4.60277C17.5532 4.22131 17.042 4.00449 16.507 4H8.50705C7.9721 4.00449 7.46085 4.22131 7.08577 4.60277C6.7107 4.98422 6.50252 5.49905 6.50705 6.034V19.853C6.45951 20.252 6.65541 20.6407 7.00441 20.8399C7.35342 21.039 7.78773 21.0099 8.10705 20.766L11.907 17.485C12.2496 17.1758 12.7705 17.1758 13.113 17.485L16.9071 20.767C17.2265 21.0111 17.6611 21.0402 18.0102 20.8407C18.3593 20.6413 18.5551 20.2522 18.507 19.853Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/ChatNav/UI/TheChatAvatar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=TheChatAvatar-s-0p0zbn.mjs.map
