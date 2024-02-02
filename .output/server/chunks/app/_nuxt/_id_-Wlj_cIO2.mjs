import { useSSRContext, defineComponent, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, Transition, openBlock, createBlock, Fragment, renderList, createCommentVNode, computed, ref, watch, watchEffect, isRef, watchSyncEffect, getCurrentInstance } from 'vue';
import { g as directiveHooks, r as useSeoMeta, t as toValue, i as notNullish, k as noop, l as tryOnScopeDispose, o as useMouse, q as useWindowScroll, m as toRef } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderSlot, ssrGetDirectiveProps } from 'vue/server-renderer';
import { u as useChat } from './chat-qdbzpL4c.mjs';
import { useRoute, useRouter } from 'vue-router';
import { u as useAuthStore } from './auth-ltfjqTsG.mjs';
import { _ as __nuxt_component_0 } from './ContextMenu-h79wOi0R.mjs';
import { toast } from 'vue3-toastify';
import { _ as _sfc_main$q } from './TheModal-1X0PcTyA.mjs';
import { _ as _sfc_main$s } from './TheButton-Jrv5tshN.mjs';
import { _ as _sfc_main$t } from './TheTextContent-rN29GJom.mjs';
import { _ as _sfc_main$u } from './TheChatAvatar-s-0p0zbn.mjs';
import { T as ThePreloader } from './ThePreloader-2eDA1OlC.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-yVxbj29m.mjs';
import { T as TheCheckbox } from './TheCheckbox-isfvX3ct.mjs';
import { S as Sceleton } from './TheSceleton-RMAy-i6X.mjs';
import { Preview } from 'vue-advanced-cropper';
import { _ as _sfc_main$r } from './TheInput-6xiMcCQ9.mjs';
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
import './selectMenu-J8vdu0Jm.mjs';

const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "ChatContentUserElem",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      default: () => {
      }
    },
    textType: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const chat = useChat();
    const currentUser = useAuthStore();
    new (void 0)();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: __props.item.id
      }, _attrs))}><div class="${ssrRenderClass([{ "max-md:justify-end": __props.item.sender.id === unref(currentUser).user.id, "w-7/12 max-md:w-full text-center ": __props.item.message_type !== "default" }, "flex items-end gap-x-2 p-1 rounded-lg"])}">`);
      if (__props.item.message_type === "default") {
        _push(`<div class="${ssrRenderClass([{ "max-md:!block": unref(chat).userChat.is_group, "max-md:!hidden": __props.item.sender.id === unref(currentUser).user.id }, "rounded-full max-md:hidden w-[30px]"])}">`);
        ssrRenderSlot(_ctx.$slots, "userImage", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass({
        "mx-auto py-1 px-4 dark:text-gray-300 text-gray-500 tracking-wider rounded-full dark:!bg-black dark:!bg-opacity-30": __props.item.message_type !== "default",
        "!bg-transparent dark:!bg-transparent !p-0 !shadow-none": __props.item.message_type === "change" && __props.item.file,
        "flex flex-col py-1 px-2 gap-x-2 rounded-xl max-w-[40%] max-lg:max-w-[50%] max-md:max-w-[80%] relative before:absolute before:border-l-[5px] before:border-l-transparent before:border-r-[10px] before:border-b-[10px] before:border-r-transparent before:w-[3px] before:h-[3px] before:bottom-0": __props.item.message_type === "default",
        "dark:bg-gray-600 bg-gray-200 dark:shadow-none shadow-md max-md:rounded-r-xl max-md:rounded-l-lg": __props.item.sender.id !== unref(currentUser).user.id,
        "dark:bg-gray-700 bg-gray-200 dark:shadow-none shadow-md max-md:rounded-l-xl max-md:rounded-r-lg": __props.item.sender.id === unref(currentUser).user.id,
        "before:dark:border-b-gray-700 before:border-gray-200 before:-left-1 max-md:before:-right-2 max-md:before:left-auto": __props.item.sender.id === unref(currentUser).user.id,
        "before:dark:border-b-gray-600 before:border-gray-200 before:-left-1 max-md:before:-left-1": __props.item.sender.id !== unref(currentUser).user.id
      })}">`);
      if (((_a = __props.item.forwarded_from) == null ? void 0 : _a.id) && __props.item.message_type === "default") {
        _push(`<p class="text-semiCyan font-bold text-[12px]">`);
        ssrRenderSlot(_ctx.$slots, "userForwarded", {}, null, _push, _parent);
        _push(`</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="break-words relative">`);
      if (unref(chat).userChat.is_group && !((_b = __props.item.forwarded_from) == null ? void 0 : _b.id) && __props.item.sender.id !== unref(currentUser).user.id && __props.item.message_type === "default") {
        _push(`<p class="text-[12px] text-blueSemiLight tracking-widest">`);
        ssrRenderSlot(_ctx.$slots, "userSenderName", {}, null, _push, _parent);
        _push(`</p>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.item.file && __props.item.message_type === "default") {
        _push(`<div class="">`);
        if (__props.item.file_name.substr(-4) !== ".png") {
          _push(`<div class="flex gap-x-4 p-2 items-center cursor-pointer"><div class="bg-blueSemiLight rounded-full p-3"><svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.23869 2 10.0298 2C10.6358 2 11.1214 2 11.53 2.01666C11.5166 2.09659 11.5095 2.17813 11.5092 2.26057L11.5 5.09497C11.4999 6.19207 11.4998 7.16164 11.6049 7.94316C11.7188 8.79028 11.9803 9.63726 12.6716 10.3285C13.3628 11.0198 14.2098 11.2813 15.0569 11.3952C15.8385 11.5003 16.808 11.5002 17.9051 11.5001L18 11.5001H21.9574C22 12.0344 22 12.6901 22 13.5629V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22Z" fill="#1C274C"></path></g><path d="M11.5092 2.2601L11.5 5.0945C11.4999 6.1916 11.4998 7.16117 11.6049 7.94269C11.7188 8.78981 11.9803 9.6368 12.6716 10.3281C13.3629 11.0193 14.2098 11.2808 15.057 11.3947C15.8385 11.4998 16.808 11.4997 17.9051 11.4996L21.9574 11.4996C21.9698 11.6552 21.9786 11.821 21.9848 11.9995H22C22 11.732 22 11.5983 21.9901 11.4408C21.9335 10.5463 21.5617 9.52125 21.0315 8.79853C20.9382 8.6713 20.8743 8.59493 20.7467 8.44218C19.9542 7.49359 18.911 6.31193 18 5.49953C17.1892 4.77645 16.0787 3.98536 15.1101 3.3385C14.2781 2.78275 13.862 2.50487 13.2915 2.29834C13.1403 2.24359 12.9408 2.18311 12.7846 2.14466C12.4006 2.05013 12.0268 2.01725 11.5 2.00586L11.5092 2.2601Z" fill="#1C274C"></path></svg></div><div class="float-start break-all"><p>${ssrInterpolate(((_c = __props.item.file_name) == null ? void 0 : _c.length) > 20 ? __props.item.file_name.slice(0, 15) + "..." + __props.item.file_name.substr(-6) : __props.item.file_name)}</p><span class="text-sm dark:text-gray-500 text-gray-400 font-bold">${ssrInterpolate(__props.item.file_size)} <span>${ssrInterpolate(__props.item.file_size > 1e3 ? _ctx.$t("\u041A\u0411") : _ctx.$t("\u0411"))}</span></span></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.item.file_name.substr(-4) === ".png") {
          _push(`<div class="cursor-pointer max-w-[300px]"><img class="w-full"${ssrRenderAttr("src", unref(currentUser).get_server_domain + __props.item.file)} alt=""></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([{ "flex flex-col items-center justify-center": __props.item.message_type === "change" && __props.item.file }, "text-sm break-all"])}">`);
      if (__props.item.text) {
        _push(`<span class="${ssrRenderClass({ "dark:!bg-black dark:!bg-opacity-30 py-1 px-4 rounded-full bg-gray-200": __props.item.message_type === "change" && __props.item.file })}">`);
        ssrRenderSlot(_ctx.$slots, "userMessage", {}, null, _push, _parent);
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.item.message_type === "change" && __props.item.file) {
        _push(`<div><img class="rounded-full w-[80px] h-[80px] cursor-pointer"${ssrRenderAttr("src", unref(currentUser).get_server_domain + __props.item.file)} alt=""></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.item.message_type === "default") {
        _push(`<div class="${ssrRenderClass([{ "mt-1": ((_d = __props.item.text) == null ? void 0 : _d.length) <= 70 }, "flex items-center justify-end gap-x-1 float-right ml-2"])}">`);
        if (__props.item.pinned === true && !unref(chat).showPinnedWindow) {
          _push(`<div><svg class="fill-semiCyan" width="13px" height="13px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><path d="M231.999,107.31445,173.47168,165.8418c4.55664,12.67968,6.44531,33.88965-13.18945,59.98584a15.96991,15.96991,0,0,1-11.64649,6.33007q-.5625.03955-1.124.03956a16.0039,16.0039,0,0,1-11.31934-4.69141L88,179.314,53.65723,213.65674a8.00018,8.00018,0,0,1-11.31446-11.31348L76.686,168,28.2959,119.60986a16.01339,16.01339,0,0,1,1.2832-23.78613C55.00488,75.312,79.34082,79.35205,89.99316,82.69287L148.68555,24l.001-.001a16.02135,16.02135,0,0,1,22.627,0L232,84.68652a15.99888,15.99888,0,0,1-.001,22.62793Z"></path></svg></div>`);
        } else {
          _push(`<!---->`);
        }
        if (new Date(__props.item.updated_at).toLocaleString() !== new Date(__props.item.created_at).toLocaleString()) {
          _push(`<p class="text-[12px] tracking-wider font-light dark:text-gray-400 text-gray-400">${ssrInterpolate(_ctx.$t("\u0438\u0437\u043C\u0435\u043D\u0435\u043D\u043E"))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<p class="text-[12px] text-end text-gray-400">`);
        ssrRenderSlot(_ctx.$slots, "userDate", {}, null, _push, _parent);
        _push(`</p><div>`);
        if (__props.item.sender.id === unref(currentUser).user.id) {
          _push(`<svg class="fill-semiCyan" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.4933 6.93502C15.8053 7.20743 15.8374 7.68122 15.565 7.99325L7.70786 16.9933C7.56543 17.1564 7.35943 17.25 7.14287 17.25C6.9263 17.25 6.72031 17.1564 6.57788 16.9933L3.43502 13.3933C3.16261 13.0812 3.19473 12.6074 3.50677 12.335C3.8188 12.0626 4.29259 12.0947 4.565 12.4068L7.14287 15.3596L14.435 7.00677C14.7074 6.69473 15.1812 6.66261 15.4933 6.93502Z"></path>`);
          if (__props.item.read && __props.item.sender.id === unref(currentUser).user.id) {
            _push(`<path fill-rule="evenodd" clip-rule="evenodd" d="M20.5175 7.01946C20.8174 7.30513 20.829 7.77986 20.5433 8.07981L11.9716 17.0798C11.8201 17.2389 11.6065 17.3235 11.3872 17.3114C11.1679 17.2993 10.9649 17.1917 10.8318 17.0169L10.4035 16.4544C10.1526 16.1249 10.2163 15.6543 10.5458 15.4034C10.8289 15.1878 11.2161 15.2044 11.4787 15.4223L19.4571 7.04531C19.7428 6.74537 20.2175 6.73379 20.5175 7.01946Z"></path>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/ChatContent/ChatContentUserElem.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
const defaultWindow = void 0;
function useMounted() {
  const isMounted = ref(false);
  if (getCurrentInstance())
    ;
  return isMounted;
}
function useSupported(callback) {
  const isMounted = useMounted();
  return computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}
function useIntersectionObserver(target, callback, options = {}) {
  const {
    root,
    rootMargin = "0px",
    threshold = 0.1,
    window: window2 = defaultWindow,
    immediate = true
  } = options;
  const isSupported = useSupported(() => window2 && "IntersectionObserver" in window2);
  const targets = computed(() => {
    const _target = toValue(target);
    return (Array.isArray(_target) ? _target : [_target]).map(unrefElement).filter(notNullish);
  });
  let cleanup = noop;
  const isActive = ref(immediate);
  const stopWatch = isSupported.value ? watch(
    () => [targets.value, unrefElement(root), isActive.value],
    ([targets2, root2]) => {
      cleanup();
      if (!isActive.value)
        return;
      if (!targets2.length)
        return;
      const observer = new IntersectionObserver(
        callback,
        {
          root: unrefElement(root2),
          rootMargin,
          threshold
        }
      );
      targets2.forEach((el) => el && observer.observe(el));
      cleanup = () => {
        observer.disconnect();
        cleanup = noop;
      };
    },
    { immediate, flush: "post" }
  ) : noop;
  const stop = () => {
    cleanup();
    stopWatch();
    isActive.value = false;
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    isActive,
    pause() {
      cleanup();
      isActive.value = false;
    },
    resume() {
      isActive.value = true;
    },
    stop
  };
}
function resolveElement(el) {
  if (typeof Window !== "undefined" && el instanceof Window)
    return el.document.documentElement;
  if (typeof Document !== "undefined" && el instanceof Document)
    return el.documentElement;
  return el;
}
const vIntersectionObserver = {
  [directiveHooks.mounted](el, binding) {
    if (typeof binding.value === "function")
      useIntersectionObserver(el, binding.value);
    else
      useIntersectionObserver(el, ...binding.value);
  }
};
const elInitialOverflow = /* @__PURE__ */ new WeakMap();
function useScrollLock(element, initialState = false) {
  const isLocked = ref(initialState);
  let initialOverflow;
  watch(toRef(element), (el) => {
    const target = resolveElement(toValue(el));
    if (target) {
      const ele = target;
      if (!elInitialOverflow.get(ele))
        elInitialOverflow.set(ele, initialOverflow);
      if (isLocked.value)
        ele.style.overflow = "hidden";
    }
  }, {
    immediate: true
  });
  const lock = () => {
    const el = resolveElement(toValue(element));
    if (!el || isLocked.value)
      return;
    el.style.overflow = "hidden";
    isLocked.value = true;
  };
  const unlock = () => {
    var _a;
    const el = resolveElement(toValue(element));
    if (!el || !isLocked.value)
      return;
    el.style.overflow = (_a = elInitialOverflow.get(el)) != null ? _a : "";
    elInitialOverflow.delete(el);
    isLocked.value = false;
  };
  tryOnScopeDispose(unlock);
  return computed({
    get() {
      return isLocked.value;
    },
    set(v) {
      if (v)
        lock();
      else
        unlock();
    }
  });
}
function onScrollLock() {
  let isMounted = false;
  const state = ref(false);
  return (el, binding) => {
    state.value = binding.value;
    if (isMounted)
      return;
    isMounted = true;
    const isLocked = useScrollLock(el, binding.value);
    watch(state, (v) => isLocked.value = v);
  };
}
onScrollLock();
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "ChatContentContextMenuItem",
  __ssrInlineRender: true,
  props: {
    itemType: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.itemType === "uploadMessageFiles") {
        _push(`<label${ssrRenderAttrs(mergeProps({
          for: "uploadMessageFiles",
          class: "dark:hover:bg-gray-700 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10"
        }, _attrs))}><div>`);
        ssrRenderSlot(_ctx.$slots, "ContextMenuSvg", {}, null, _push, _parent);
        _push(`</div><span>`);
        ssrRenderSlot(_ctx.$slots, "ContextMenuText", {}, null, _push, _parent);
        _push(`</span><div>`);
        ssrRenderSlot(_ctx.$slots, "ContextMenuContent", {}, null, _push, _parent);
        _push(`</div></label>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "dark:hover:bg-gray-700 hover:bg-gray-200 py-2 px-6 cursor-pointer flex items-center" }, _attrs))}><div class="flex gap-x-6"><div>`);
        ssrRenderSlot(_ctx.$slots, "ContextMenuSvg", {}, null, _push, _parent);
        _push(`</div><p class="text-[15px] font-mono">`);
        ssrRenderSlot(_ctx.$slots, "ContextMenuText", {}, null, _push, _parent);
        _push(`</p></div><div>`);
        ssrRenderSlot(_ctx.$slots, "ContextMenuContent", {}, null, _push, _parent);
        _push(`</div></div>`);
      }
    };
  }
});
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/ChatContent/ChatContentContextMenuItem.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "TheChatContentEmpty",
  __ssrInlineRender: true,
  setup(__props) {
    const chat = useChat();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(chat).userChat.messages.length === 0) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "my-auto dark:bg-gray-700 dark:shadow-gray-600 shadow-md rounded-lg dark:border-none border-t border-opacity-20 border-gray-400 mt-20 h-20 items-center flex justify-center w-4/12 max-lg:w-6/12 max-md:w-10/12 max-ms:w-full mx-auto" }, _attrs))}><p class="tracking-widest text-lg max-sm:text-base">${ssrInterpolate(_ctx.$t("\u041F\u043E\u043A\u0430 \u0447\u0442\u043E \u0442\u0443\u0442 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435\u0442"))}</p></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/ChatNav/UI/TheChatContentEmpty.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "ChatContentUser",
  __ssrInlineRender: true,
  props: {
    messageObject: {
      type: Object,
      default: () => {
      }
    },
    showDeleteWarn: {
      type: Boolean,
      default: false
    },
    showPinnedWarn: {
      type: Boolean,
      default: false
    },
    showUnPinWarn: {
      type: Boolean,
      default: false
    },
    showDateModal: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const router = useRouter();
    useRoute();
    const chat = useChat();
    const currentUser = useAuthStore();
    const { x, y } = useMouse();
    const { y: windowY } = useWindowScroll();
    const isOpen = ref(false);
    const virtualElement = ref({ getBoundingClientRect: () => ({}) });
    const scrollPosition = ref(null);
    ref(1);
    ref(99);
    const messages_block = ref({
      scrollTop: "",
      scrollHeight: "",
      clientHeight: "",
      root: null
    });
    watchEffect(() => {
      setTimeout(() => {
        const el = messages_block.value;
        el.scrollTop = el == null ? void 0 : el.scrollHeight;
      }, 500);
    });
    let to = ref(null);
    function onIntersectionObserver([{ target }]) {
      if (target.dataset.read === "0" && target.dataset.senderId !== `${currentUser.user.id}`) {
        if (chat.messagesMakeRead.indexOf(target.id) === -1) {
          chat.messagesMakeRead.push(target.id);
          clearTimeout(to);
          to = setTimeout(() => {
            chat.makeRead({ messages: chat.messagesMakeRead });
          }, 1e3);
        }
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_UContextMenu = __nuxt_component_0;
      const _component_ChatChatContentUserElem = _sfc_main$p;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "flex flex-col !overflow-x-hidden gap-y-2 check overflow-y-auto",
        ref_key: "messages_block",
        ref: messages_block,
        id: "messages_block"
      }, _attrs))}>`);
      if (unref(scrollPosition) < ((_a = this.$refs.messages_block) == null ? void 0 : _a.scrollHeight) - ((_b = this.$refs.messages_block) == null ? void 0 : _b.clientHeight)) {
        _push(`<button class="absolute bottom-20 right-3 dark:bg-gray-700 bg-white rounded-full"><svg class="stroke-blueSemiLight" width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 9.5L12 14.5L7 9.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(chat).showVoiceInfo) {
        _push(`<div class="mr-4 absolute bottom-10 right-0 bg-black dark:bg-opacity-70 z-50 bg-opacity-20 dark:text-white text-white tracking-wide p-4 rounded-lg mb-4 max-[400px]:mx-4 break-words"><p class="text-sm">${ssrInterpolate(_ctx.$t("\u0423\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439\u0442\u0435 \u0434\u043B\u044F \u0437\u0430\u043F\u0438\u0441\u0438 \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u043E\u0433\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F"))}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_UContextMenu, {
        onContextmenu: () => {
        },
        modelValue: unref(isOpen),
        "onUpdate:modelValue": ($event) => isRef(isOpen) ? isOpen.value = $event : null,
        "virtual-element": unref(virtualElement)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c2, _d;
          if (_push2) {
            if (((_a2 = unref(currentUser).user) == null ? void 0 : _a2.id) === ((_b2 = __props.messageObject.sender) == null ? void 0 : _b2.id) && !__props.messageObject.forwarded_from && __props.messageObject.message_type === "default") {
              _push2(ssrRenderComponent(_sfc_main$o, {
                onClick: ($event) => {
                  var _a3;
                  unref(chat).messageUpdate = { ...__props.messageObject, updateText: (_a3 = __props.messageObject) == null ? void 0 : _a3.text };
                  unref(chat).messageText = "";
                  unref(chat).messageReplied = {};
                  unref(chat).messagePinned = {};
                  unref(chat).messageForwarded = {};
                  isOpen.value = false;
                }
              }, {
                ContextMenuSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<svg class="stroke-black dark:stroke-white" width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path data-v-a06cf116="" d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}></path><path data-v-a06cf116="" d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}></path></svg>`);
                  } else {
                    return [
                      (openBlock(), createBlock("svg", {
                        class: "stroke-black dark:stroke-white",
                        width: "22px",
                        height: "22px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          "data-v-a06cf116": "",
                          d: "M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z",
                          "stroke-width": "1.5",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          "data-v-a06cf116": "",
                          d: "M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13",
                          "stroke-width": "1.5",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        })
                      ]))
                    ];
                  }
                }),
                ContextMenuText: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (__props.messageObject.message_type === "default") {
              _push2(ssrRenderComponent(_sfc_main$o, {
                onClick: ($event) => {
                  unref(chat).messageReplied = __props.messageObject;
                  __props.messageObject = {};
                  unref(chat).messageUpdate = {};
                  isOpen.value = false;
                }
              }, {
                ContextMenuSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" xml:space="preserve" fill="none" width="22px" height="22px" class="dark:stroke-white stroke-black"${_scopeId2}><path class="st0" d="M11.7,8.1V6c0-0.8-0.9-1.3-1.5-0.8l-6.8,6c-0.5,0.4-0.5,1.2,0,1.6l6.8,6c0.6,0.5,1.5,0,1.5-0.8v-2h0.9
              c7.1,0,13.5,4.3,16.5,11C29,16.8,21.3,8.6,11.7,8.1z"${_scopeId2}></path></svg>`);
                  } else {
                    return [
                      (openBlock(), createBlock("svg", {
                        version: "1.1",
                        id: "Icons",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 32 32",
                        "xml:space": "preserve",
                        fill: "none",
                        width: "22px",
                        height: "22px",
                        class: "dark:stroke-white stroke-black"
                      }, [
                        createVNode("path", {
                          class: "st0",
                          d: "M11.7,8.1V6c0-0.8-0.9-1.3-1.5-0.8l-6.8,6c-0.5,0.4-0.5,1.2,0,1.6l6.8,6c0.6,0.5,1.5,0,1.5-0.8v-2h0.9\r\n              c7.1,0,13.5,4.3,16.5,11C29,16.8,21.3,8.6,11.7,8.1z"
                        })
                      ]))
                    ];
                  }
                }),
                ContextMenuText: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (__props.messageObject.message_type === "default") {
              _push2(ssrRenderComponent(_sfc_main$o, {
                onClick: ($event) => {
                  unref(chat).showSendWindow = true;
                  isOpen.value = false;
                  unref(chat).messageReplied = {};
                  unref(chat).messageUpdate = {};
                }
              }, {
                ContextMenuSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<svg class="dark:stroke-white stroke-black fill-none" width="22px" height="22px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" xml:space="preserve"${_scopeId2}><path d="M20.3,8.1V6c0-0.8,0.9-1.3,1.5-0.8l6.8,6c0.5,0.4,0.5,1.2,0,1.6l-6.8,6c-0.6,0.5-1.5,0-1.5-0.8v-2h-0.9
              C12.4,16,5.9,20.3,3,27C3,16.8,10.7,8.6,20.3,8.1z"${_scopeId2}></path></svg>`);
                  } else {
                    return [
                      (openBlock(), createBlock("svg", {
                        class: "dark:stroke-white stroke-black fill-none",
                        width: "22px",
                        height: "22px",
                        version: "1.1",
                        id: "Icons",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 32 32",
                        "xml:space": "preserve"
                      }, [
                        createVNode("path", { d: "M20.3,8.1V6c0-0.8,0.9-1.3,1.5-0.8l6.8,6c0.5,0.4,0.5,1.2,0,1.6l-6.8,6c-0.6,0.5-1.5,0-1.5-0.8v-2h-0.9\r\n              C12.4,16,5.9,20.3,3,27C3,16.8,10.7,8.6,20.3,8.1z" })
                      ]))
                    ];
                  }
                }),
                ContextMenuText: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u041F\u0435\u0440\u0435\u0441\u043B\u0430\u0442\u044C"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u041F\u0435\u0440\u0435\u0441\u043B\u0430\u0442\u044C")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (!__props.messageObject.pinned && __props.messageObject.message_type === "default") {
              _push2(ssrRenderComponent(_sfc_main$o, {
                onClick: ($event) => {
                  unref(chat).messagePinned = { ...__props.messageObject };
                  __props.showPinnedWarn = true;
                  isOpen.value = false;
                }
              }, {
                ContextMenuSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<svg class="dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 261.811 261.811" xml:space="preserve"${_scopeId2}><g${_scopeId2}><g${_scopeId2}><path d="M24.715,261.811c-5.492,0-10.645-2.133-14.521-6.01c-8.011-8.017-8.011-21.054-0.006-29.064
                      l70.375-70.372L38.51,113.785c-7.073-7.179-7.928-18.303-2.039-26.466c0.855-1.184,21.314-28.839,58.964-28.839
                      c2.224,0,4.492,0.101,6.756,0.295L180.62,3.597c8.103-5.729,20.081-4.48,26.863,2.796l44.675,48.037
                      c6.919,7.436,7.319,19.006,0.926,26.906l-55.882,69.151c1.979,23.759,1.052,63.069-23.901,77.725
                      c-7.959,4.666-18.578,3.26-25.021-3.282l-38.837-39.316l-70.206,70.183C35.365,259.678,30.208,261.811,24.715,261.811z
                       M95.43,70.194c-31.735,0-48.763,23.009-49.472,23.987c-2.53,3.502-2.159,8.291,0.883,11.376l50.227,50.865l-78.6,78.594
                      c-3.442,3.448-3.442,9.058,0,12.505c3.319,3.328,9.157,3.328,12.482,0l78.531-78.52l47.122,47.7
                      c2.762,2.813,7.325,3.407,10.761,1.412c20.957-12.316,19.539-52.303,17.961-68.919l-0.229-2.373l58.878-72.854
                      c2.745-3.402,2.573-8.371-0.406-11.567l-44.663-48.031c-2.904-3.116-8.062-3.671-11.545-1.212l-82.042,57.726l-2.213-0.251
                      C100.536,70.34,97.952,70.194,95.43,70.194z"${_scopeId2}></path></g></g></svg>`);
                  } else {
                    return [
                      (openBlock(), createBlock("svg", {
                        class: "dark:fill-white",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "22px",
                        height: "22px",
                        viewBox: "0 0 261.811 261.811",
                        "xml:space": "preserve"
                      }, [
                        createVNode("g", null, [
                          createVNode("g", null, [
                            createVNode("path", { d: "M24.715,261.811c-5.492,0-10.645-2.133-14.521-6.01c-8.011-8.017-8.011-21.054-0.006-29.064\r\n                      l70.375-70.372L38.51,113.785c-7.073-7.179-7.928-18.303-2.039-26.466c0.855-1.184,21.314-28.839,58.964-28.839\r\n                      c2.224,0,4.492,0.101,6.756,0.295L180.62,3.597c8.103-5.729,20.081-4.48,26.863,2.796l44.675,48.037\r\n                      c6.919,7.436,7.319,19.006,0.926,26.906l-55.882,69.151c1.979,23.759,1.052,63.069-23.901,77.725\r\n                      c-7.959,4.666-18.578,3.26-25.021-3.282l-38.837-39.316l-70.206,70.183C35.365,259.678,30.208,261.811,24.715,261.811z\r\n                       M95.43,70.194c-31.735,0-48.763,23.009-49.472,23.987c-2.53,3.502-2.159,8.291,0.883,11.376l50.227,50.865l-78.6,78.594\r\n                      c-3.442,3.448-3.442,9.058,0,12.505c3.319,3.328,9.157,3.328,12.482,0l78.531-78.52l47.122,47.7\r\n                      c2.762,2.813,7.325,3.407,10.761,1.412c20.957-12.316,19.539-52.303,17.961-68.919l-0.229-2.373l58.878-72.854\r\n                      c2.745-3.402,2.573-8.371-0.406-11.567l-44.663-48.031c-2.904-3.116-8.062-3.671-11.545-1.212l-82.042,57.726l-2.213-0.251\r\n                      C100.536,70.34,97.952,70.194,95.43,70.194z" })
                          ])
                        ])
                      ]))
                    ];
                  }
                }),
                ContextMenuText: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u0417\u0430\u043A\u0440\u0435\u043F\u0438\u0442\u044C"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u0417\u0430\u043A\u0440\u0435\u043F\u0438\u0442\u044C")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else if (__props.messageObject.pinned && __props.messageObject.message_type === "default") {
              _push2(ssrRenderComponent(_sfc_main$o, {
                onClick: ($event) => {
                  __props.showUnPinWarn = true;
                  isOpen.value = false;
                }
              }, {
                ContextMenuSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<svg class="dark:fill-white fill-black" width="22px" height="22px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path d="M50.96,37.30957A4,4,0,0,0,45.04,42.69043l38.59424,42.4541c-11.416-2.39062-31.02295-2.76172-51.54444,13.79248a12.01279,12.01279,0,0,0-.96484,17.84424L82.34326,168,45.17188,205.17139a3.99992,3.99992,0,1,0,5.65625,5.65722L88,173.65674l51.02051,51.021a12.00814,12.00814,0,0,0,8.49219,3.51954q.42041,0,.84277-.02979a11.97039,11.97039,0,0,0,8.73047-4.74512c6.33252-8.4165,15.40625-23.479,15.38379-40.55859L205.04,218.69043a4,4,0,1,0,5.91992-5.38086Zm99.7334,181.30322a3.99357,3.99357,0,0,1-6.01563.40821L36.78125,111.124a4.01376,4.01376,0,0,1,.332-5.96045c27.17188-21.91943,52.06543-10.09375,53.09766-9.58593a3.99477,3.99477,0,0,0,3.08984.20019l69.71729,76.689C168.36816,191.2041,157.64355,209.374,150.69336,218.61279ZM232.68652,96a11.92292,11.92292,0,0,1-3.51562,8.48584l-41.4043,41.40381a3.99975,3.99975,0,1,1-5.65625-5.65674l41.4043-41.4043a3.99915,3.99915,0,0,0,0-5.65674L162.8291,32.48535a4.00621,4.00621,0,0,0-5.6582.00049l-37.97559,37.9751a3.99957,3.99957,0,1,1-5.65625-5.65625l37.97559-37.97608a12.01526,12.01526,0,0,1,16.9707-.00049L229.1709,87.51465A11.921,11.921,0,0,1,232.68652,96Z"${_scopeId2}></path></svg>`);
                  } else {
                    return [
                      (openBlock(), createBlock("svg", {
                        class: "dark:fill-white fill-black",
                        width: "22px",
                        height: "22px",
                        viewBox: "0 0 256 256",
                        id: "Flat",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", { d: "M50.96,37.30957A4,4,0,0,0,45.04,42.69043l38.59424,42.4541c-11.416-2.39062-31.02295-2.76172-51.54444,13.79248a12.01279,12.01279,0,0,0-.96484,17.84424L82.34326,168,45.17188,205.17139a3.99992,3.99992,0,1,0,5.65625,5.65722L88,173.65674l51.02051,51.021a12.00814,12.00814,0,0,0,8.49219,3.51954q.42041,0,.84277-.02979a11.97039,11.97039,0,0,0,8.73047-4.74512c6.33252-8.4165,15.40625-23.479,15.38379-40.55859L205.04,218.69043a4,4,0,1,0,5.91992-5.38086Zm99.7334,181.30322a3.99357,3.99357,0,0,1-6.01563.40821L36.78125,111.124a4.01376,4.01376,0,0,1,.332-5.96045c27.17188-21.91943,52.06543-10.09375,53.09766-9.58593a3.99477,3.99477,0,0,0,3.08984.20019l69.71729,76.689C168.36816,191.2041,157.64355,209.374,150.69336,218.61279ZM232.68652,96a11.92292,11.92292,0,0,1-3.51562,8.48584l-41.4043,41.40381a3.99975,3.99975,0,1,1-5.65625-5.65674l41.4043-41.4043a3.99915,3.99915,0,0,0,0-5.65674L162.8291,32.48535a4.00621,4.00621,0,0,0-5.6582.00049l-37.97559,37.9751a3.99957,3.99957,0,1,1-5.65625-5.65625l37.97559-37.97608a12.01526,12.01526,0,0,1,16.9707-.00049L229.1709,87.51465A11.921,11.921,0,0,1,232.68652,96Z" })
                      ]))
                    ];
                  }
                }),
                ContextMenuText: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u041E\u0442\u043A\u0440\u0435\u043F\u0438\u0442\u044C"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043A\u0440\u0435\u043F\u0438\u0442\u044C")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_sfc_main$o, {
              onClick: ($event) => {
                __props.showDeleteWarn = true;
                isOpen.value = false;
              }
            }, {
              ContextMenuSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg class="dark:stroke-white stroke-black" width="23px" height="23px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path data-v-a06cf116="" d="M10 12V17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}></path><path data-v-a06cf116="" d="M14 12V17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}></path><path data-v-a06cf116="" d="M4 7H20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}></path><path data-v-a06cf116="" d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}></path><path data-v-a06cf116="" d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}></path></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      class: "dark:stroke-white stroke-black",
                      width: "23px",
                      height: "23px",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", {
                        "data-v-a06cf116": "",
                        d: "M10 12V17",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        "data-v-a06cf116": "",
                        d: "M14 12V17",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        "data-v-a06cf116": "",
                        d: "M4 7H20",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        "data-v-a06cf116": "",
                        d: "M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        "data-v-a06cf116": "",
                        d: "M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ]))
                  ];
                }
              }),
              ContextMenuText: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("\u0423\u0434\u0430\u043B\u0438\u0442\u044C"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("\u0423\u0434\u0430\u043B\u0438\u0442\u044C")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              ((_c2 = unref(currentUser).user) == null ? void 0 : _c2.id) === ((_d = __props.messageObject.sender) == null ? void 0 : _d.id) && !__props.messageObject.forwarded_from && __props.messageObject.message_type === "default" ? (openBlock(), createBlock(_sfc_main$o, {
                key: 0,
                onClick: ($event) => {
                  var _a3;
                  unref(chat).messageUpdate = { ...__props.messageObject, updateText: (_a3 = __props.messageObject) == null ? void 0 : _a3.text };
                  unref(chat).messageText = "";
                  unref(chat).messageReplied = {};
                  unref(chat).messagePinned = {};
                  unref(chat).messageForwarded = {};
                  isOpen.value = false;
                }
              }, {
                ContextMenuSvg: withCtx(() => [
                  (openBlock(), createBlock("svg", {
                    class: "stroke-black dark:stroke-white",
                    width: "22px",
                    height: "22px",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      "data-v-a06cf116": "",
                      d: "M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z",
                      "stroke-width": "1.5",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }),
                    createVNode("path", {
                      "data-v-a06cf116": "",
                      d: "M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13",
                      "stroke-width": "1.5",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    })
                  ]))
                ]),
                ContextMenuText: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C")), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : createCommentVNode("", true),
              __props.messageObject.message_type === "default" ? (openBlock(), createBlock(_sfc_main$o, {
                key: 1,
                onClick: ($event) => {
                  unref(chat).messageReplied = __props.messageObject;
                  __props.messageObject = {};
                  unref(chat).messageUpdate = {};
                  isOpen.value = false;
                }
              }, {
                ContextMenuSvg: withCtx(() => [
                  (openBlock(), createBlock("svg", {
                    version: "1.1",
                    id: "Icons",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 32 32",
                    "xml:space": "preserve",
                    fill: "none",
                    width: "22px",
                    height: "22px",
                    class: "dark:stroke-white stroke-black"
                  }, [
                    createVNode("path", {
                      class: "st0",
                      d: "M11.7,8.1V6c0-0.8-0.9-1.3-1.5-0.8l-6.8,6c-0.5,0.4-0.5,1.2,0,1.6l6.8,6c0.6,0.5,1.5,0,1.5-0.8v-2h0.9\r\n              c7.1,0,13.5,4.3,16.5,11C29,16.8,21.3,8.6,11.7,8.1z"
                    })
                  ]))
                ]),
                ContextMenuText: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C")), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : createCommentVNode("", true),
              __props.messageObject.message_type === "default" ? (openBlock(), createBlock(_sfc_main$o, {
                key: 2,
                onClick: ($event) => {
                  unref(chat).showSendWindow = true;
                  isOpen.value = false;
                  unref(chat).messageReplied = {};
                  unref(chat).messageUpdate = {};
                }
              }, {
                ContextMenuSvg: withCtx(() => [
                  (openBlock(), createBlock("svg", {
                    class: "dark:stroke-white stroke-black fill-none",
                    width: "22px",
                    height: "22px",
                    version: "1.1",
                    id: "Icons",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 32 32",
                    "xml:space": "preserve"
                  }, [
                    createVNode("path", { d: "M20.3,8.1V6c0-0.8,0.9-1.3,1.5-0.8l6.8,6c0.5,0.4,0.5,1.2,0,1.6l-6.8,6c-0.6,0.5-1.5,0-1.5-0.8v-2h-0.9\r\n              C12.4,16,5.9,20.3,3,27C3,16.8,10.7,8.6,20.3,8.1z" })
                  ]))
                ]),
                ContextMenuText: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("\u041F\u0435\u0440\u0435\u0441\u043B\u0430\u0442\u044C")), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : createCommentVNode("", true),
              !__props.messageObject.pinned && __props.messageObject.message_type === "default" ? (openBlock(), createBlock(_sfc_main$o, {
                key: 3,
                onClick: ($event) => {
                  unref(chat).messagePinned = { ...__props.messageObject };
                  __props.showPinnedWarn = true;
                  isOpen.value = false;
                }
              }, {
                ContextMenuSvg: withCtx(() => [
                  (openBlock(), createBlock("svg", {
                    class: "dark:fill-white",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "22px",
                    height: "22px",
                    viewBox: "0 0 261.811 261.811",
                    "xml:space": "preserve"
                  }, [
                    createVNode("g", null, [
                      createVNode("g", null, [
                        createVNode("path", { d: "M24.715,261.811c-5.492,0-10.645-2.133-14.521-6.01c-8.011-8.017-8.011-21.054-0.006-29.064\r\n                      l70.375-70.372L38.51,113.785c-7.073-7.179-7.928-18.303-2.039-26.466c0.855-1.184,21.314-28.839,58.964-28.839\r\n                      c2.224,0,4.492,0.101,6.756,0.295L180.62,3.597c8.103-5.729,20.081-4.48,26.863,2.796l44.675,48.037\r\n                      c6.919,7.436,7.319,19.006,0.926,26.906l-55.882,69.151c1.979,23.759,1.052,63.069-23.901,77.725\r\n                      c-7.959,4.666-18.578,3.26-25.021-3.282l-38.837-39.316l-70.206,70.183C35.365,259.678,30.208,261.811,24.715,261.811z\r\n                       M95.43,70.194c-31.735,0-48.763,23.009-49.472,23.987c-2.53,3.502-2.159,8.291,0.883,11.376l50.227,50.865l-78.6,78.594\r\n                      c-3.442,3.448-3.442,9.058,0,12.505c3.319,3.328,9.157,3.328,12.482,0l78.531-78.52l47.122,47.7\r\n                      c2.762,2.813,7.325,3.407,10.761,1.412c20.957-12.316,19.539-52.303,17.961-68.919l-0.229-2.373l58.878-72.854\r\n                      c2.745-3.402,2.573-8.371-0.406-11.567l-44.663-48.031c-2.904-3.116-8.062-3.671-11.545-1.212l-82.042,57.726l-2.213-0.251\r\n                      C100.536,70.34,97.952,70.194,95.43,70.194z" })
                      ])
                    ])
                  ]))
                ]),
                ContextMenuText: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("\u0417\u0430\u043A\u0440\u0435\u043F\u0438\u0442\u044C")), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : __props.messageObject.pinned && __props.messageObject.message_type === "default" ? (openBlock(), createBlock(_sfc_main$o, {
                key: 4,
                onClick: ($event) => {
                  __props.showUnPinWarn = true;
                  isOpen.value = false;
                }
              }, {
                ContextMenuSvg: withCtx(() => [
                  (openBlock(), createBlock("svg", {
                    class: "dark:fill-white fill-black",
                    width: "22px",
                    height: "22px",
                    viewBox: "0 0 256 256",
                    id: "Flat",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", { d: "M50.96,37.30957A4,4,0,0,0,45.04,42.69043l38.59424,42.4541c-11.416-2.39062-31.02295-2.76172-51.54444,13.79248a12.01279,12.01279,0,0,0-.96484,17.84424L82.34326,168,45.17188,205.17139a3.99992,3.99992,0,1,0,5.65625,5.65722L88,173.65674l51.02051,51.021a12.00814,12.00814,0,0,0,8.49219,3.51954q.42041,0,.84277-.02979a11.97039,11.97039,0,0,0,8.73047-4.74512c6.33252-8.4165,15.40625-23.479,15.38379-40.55859L205.04,218.69043a4,4,0,1,0,5.91992-5.38086Zm99.7334,181.30322a3.99357,3.99357,0,0,1-6.01563.40821L36.78125,111.124a4.01376,4.01376,0,0,1,.332-5.96045c27.17188-21.91943,52.06543-10.09375,53.09766-9.58593a3.99477,3.99477,0,0,0,3.08984.20019l69.71729,76.689C168.36816,191.2041,157.64355,209.374,150.69336,218.61279ZM232.68652,96a11.92292,11.92292,0,0,1-3.51562,8.48584l-41.4043,41.40381a3.99975,3.99975,0,1,1-5.65625-5.65674l41.4043-41.4043a3.99915,3.99915,0,0,0,0-5.65674L162.8291,32.48535a4.00621,4.00621,0,0,0-5.6582.00049l-37.97559,37.9751a3.99957,3.99957,0,1,1-5.65625-5.65625l37.97559-37.97608a12.01526,12.01526,0,0,1,16.9707-.00049L229.1709,87.51465A11.921,11.921,0,0,1,232.68652,96Z" })
                  ]))
                ]),
                ContextMenuText: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043A\u0440\u0435\u043F\u0438\u0442\u044C")), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : createCommentVNode("", true),
              createVNode(_sfc_main$o, {
                onClick: ($event) => {
                  __props.showDeleteWarn = true;
                  isOpen.value = false;
                }
              }, {
                ContextMenuSvg: withCtx(() => [
                  (openBlock(), createBlock("svg", {
                    class: "dark:stroke-white stroke-black",
                    width: "23px",
                    height: "23px",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      "data-v-a06cf116": "",
                      d: "M10 12V17",
                      "stroke-width": "1.5",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }),
                    createVNode("path", {
                      "data-v-a06cf116": "",
                      d: "M14 12V17",
                      "stroke-width": "1.5",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }),
                    createVNode("path", {
                      "data-v-a06cf116": "",
                      d: "M4 7H20",
                      "stroke-width": "1.5",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }),
                    createVNode("path", {
                      "data-v-a06cf116": "",
                      d: "M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10",
                      "stroke-width": "1.5",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }),
                    createVNode("path", {
                      "data-v-a06cf116": "",
                      d: "M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z",
                      "stroke-width": "1.5",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    })
                  ]))
                ]),
                ContextMenuText: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("\u0423\u0434\u0430\u043B\u0438\u0442\u044C")), 1)
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="p-2"><!--[-->`);
      ssrRenderList((_c = unref(chat).userChat) == null ? void 0 : _c.messages, (date, i) => {
        _push(`<div><div class="w-6/12 mx-auto max-md:w-3/12"><p class="bg-white bg-opacity-20 w-[120px] max-[450px]:w-[90px] py-1 text-sm text-center rounded-full">${ssrInterpolate(date.date)}</p></div><!--[-->`);
        ssrRenderList(date.messages, (item, id) => {
          _push(ssrRenderComponent(_component_ChatChatContentUserElem, mergeProps({
            class: "",
            id: item.id,
            "data-read": item.read ? 1 : 0,
            "data-sender-id": item.sender.id,
            item,
            key: id,
            onClick: ($event) => __props.messageObject = {},
            onContextmenu: () => {
              const top = ("unref" in _ctx ? _ctx.unref : unref(unref))(unref(y)) - ("unref" in _ctx ? _ctx.unref : unref(unref))(unref(windowY));
              const left = ("unref" in _ctx ? _ctx.unref : unref(unref))(unref(x));
              unref(virtualElement).getBoundingClientRect = () => ({
                width: 0,
                height: 0,
                top,
                left
              });
              isOpen.value = true;
              __props.messageObject = { ...item };
            }
          }, ssrGetDirectiveProps(_ctx, unref(vIntersectionObserver), [onIntersectionObserver, { item }])), {
            userForwarded: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("\u041F\u0435\u0440\u0435\u0441\u043B\u0430\u043D\u043E \u043E\u0442") + " " + item.forwarded_from.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("\u041F\u0435\u0440\u0435\u0441\u043B\u0430\u043D\u043E \u043E\u0442") + " " + item.forwarded_from.name), 1)
                ];
              }
            }),
            userImage: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img class="w-[30px] h-[30px] rounded-full"${ssrRenderAttr("src", unref(currentUser).get_server_domain + item.sender.photo)} alt=""${_scopeId}>`);
              } else {
                return [
                  createVNode("img", {
                    class: "w-[30px] h-[30px] rounded-full",
                    src: unref(currentUser).get_server_domain + item.sender.photo,
                    alt: ""
                  }, null, 8, ["src"])
                ];
              }
            }),
            userSenderName: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.sender.first_name + " " + item.sender.last_name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.sender.first_name + " " + item.sender.last_name), 1)
                ];
              }
            }),
            userMessage: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (item.message_type !== "default" && item.message_type !== "change") {
                  _push2(`<span class=""${_scopeId}><button class="hover:underline hover:text-blueDarkSemiLight cursor-pointer"${_scopeId}>${ssrInterpolate(item.text.split(" ").slice(0, 1)[0])}</button><span${_scopeId}>${ssrInterpolate(" " + item.text.split(" ").slice(0, 2)[1] + " ")}</span><button class="hover:underline hover:text-blueDarkSemiLight cursor-pointer"${_scopeId}>${ssrInterpolate(item.text.split(" ").slice(2, 3)[0])}</button></span>`);
                } else {
                  _push2(`<span${_scopeId}>${ssrInterpolate(item.text)}</span>`);
                }
              } else {
                return [
                  item.message_type !== "default" && item.message_type !== "change" ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: ""
                  }, [
                    createVNode("button", {
                      onClick: ($event) => {
                        var _a2, _b2, _c2;
                        return unref(router).push(((_b2 = (_a2 = unref(chat).chatList.results[i]) == null ? void 0 : _a2.user) == null ? void 0 : _b2.id) === item.sender.id ? `/base/chat/${(_c2 = unref(chat).chatList.results[i]) == null ? void 0 : _c2.id}` : ``);
                      },
                      class: "hover:underline hover:text-blueDarkSemiLight cursor-pointer"
                    }, toDisplayString(item.text.split(" ").slice(0, 1)[0]), 9, ["onClick"]),
                    createVNode("span", null, toDisplayString(" " + item.text.split(" ").slice(0, 2)[1] + " "), 1),
                    createVNode("button", { class: "hover:underline hover:text-blueDarkSemiLight cursor-pointer" }, toDisplayString(item.text.split(" ").slice(2, 3)[0]), 1)
                  ])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(item.text), 1))
                ];
              }
            }),
            userDate: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(new Date(item.updated_at).toLocaleTimeString().slice(0, 5))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(new Date(item.updated_at).toLocaleTimeString().slice(0, 5)), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_sfc_main$n, null, null, _parent));
      _push(`<div>`);
      if (__props.showDeleteWarn) {
        _push(ssrRenderComponent(_sfc_main$q, {
          type: "resize",
          onShowModal: ($event) => {
            __props.showDeleteWarn = false;
            __props.messageObject = {};
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div${_scopeId}><p class="text-lg tracking-wider"${_scopeId}>${ssrInterpolate(_ctx.$t("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435?"))}</p></div><div class="flex mt-4 gap-x-4 justify-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$s, {
                class: "py-2 px-4 rounded-lg",
                type: "change",
                onClick: ($event) => __props.showDeleteWarn = false
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0430"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0430")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$s, {
                class: "py-2 px-4 rounded-lg",
                type: "change",
                onClick: ($event) => {
                  var _a2;
                  unref(chat).deleteMessage({ id: (_a2 = __props.messageObject) == null ? void 0 : _a2.id });
                  isOpen.value = false;
                  __props.showDeleteWarn = false;
                }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u0423\u0434\u0430\u043B\u0438\u0442\u044C"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u0423\u0434\u0430\u043B\u0438\u0442\u044C")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", null, [
                  createVNode("p", { class: "text-lg tracking-wider" }, toDisplayString(_ctx.$t("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435?")), 1)
                ]),
                createVNode("div", { class: "flex mt-4 gap-x-4 justify-center" }, [
                  createVNode(_sfc_main$s, {
                    class: "py-2 px-4 rounded-lg",
                    type: "change",
                    onClick: ($event) => __props.showDeleteWarn = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0430")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_sfc_main$s, {
                    class: "py-2 px-4 rounded-lg",
                    type: "change",
                    onClick: ($event) => {
                      var _a2;
                      unref(chat).deleteMessage({ id: (_a2 = __props.messageObject) == null ? void 0 : _a2.id });
                      isOpen.value = false;
                      __props.showDeleteWarn = false;
                    }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u0423\u0434\u0430\u043B\u0438\u0442\u044C")), 1)
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
      if (unref(chat).showSendWindow) {
        _push(ssrRenderComponent(_sfc_main$q, {
          type: "resizeSendWindow",
          class: "overflow-hidden",
          onShowModal: ($event) => {
            unref(chat).showSendWindow = false;
            __props.messageObject = {};
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$t, { class: "mt-2" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u041F\u0435\u0440\u0435\u0441\u043B\u0430\u0442\u044C"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u041F\u0435\u0440\u0435\u0441\u043B\u0430\u0442\u044C")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="w-full relative flex items-center"${_scopeId}><div class="absolute rotate-90 ml-2"${_scopeId}><svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></div><input type="text" class="w-full dark:bg-gray-700 outline-none pl-10 h-[50px]" placeholder="\u041F\u043E\u0438\u0441\u043A..."${_scopeId}></div><div class="dark:bg-gray-800 bg-gray-200 flex flex-col gap-y-3 py-4 h-[400px] overflow-y-auto"${_scopeId}><!--[-->`);
              ssrRenderList(unref(chat).get_chat_list.results, (item) => {
                var _a2, _b2, _c2, _d;
                _push2(`<div class="flex bg-transparent border-none gap-x-4 items-center w-full dark:hover:bg-gray-600 hover:bg-gray-300 cursor-pointer transition-all px-5"${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$u, {
                  user: unref(currentUser),
                  chat: item
                }, null, _parent2, _scopeId));
                _push2(`<div class="w-9/12 break-words"${_scopeId}>`);
                if (((_a2 = item.user) == null ? void 0 : _a2.id) || item.is_group) {
                  _push2(`<p class="text-sm"${_scopeId}>${ssrInterpolate(((_b2 = item.user) == null ? void 0 : _b2.id) && !item.is_group ? ((_c2 = item.user) == null ? void 0 : _c2.first_name) + " " + ((_d = item.user) == null ? void 0 : _d.last_name) : item.name)}</p>`);
                } else {
                  _push2(`<p class="text-sm"${_scopeId}>${ssrInterpolate(_ctx.$t("\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435"))}</p>`);
                }
                _push2(`</div></div>`);
              });
              _push2(`<!--]--></div><div class="w-full h-[50px] flex items-center justify-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$s, {
                type: "chat",
                onClick: ($event) => unref(chat).showSendWindow = false
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0430"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0430")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode(_sfc_main$t, { class: "mt-2" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("\u041F\u0435\u0440\u0435\u0441\u043B\u0430\u0442\u044C")), 1)
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "w-full relative flex items-center" }, [
                  createVNode("div", { class: "absolute rotate-90 ml-2" }, [
                    (openBlock(), createBlock("svg", {
                      class: "dark:stroke-white stroke-black",
                      width: "25px",
                      height: "25px",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", {
                        d: "M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",
                        "stroke-width": "1.2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ]))
                  ]),
                  createVNode("input", {
                    type: "text",
                    class: "w-full dark:bg-gray-700 outline-none pl-10 h-[50px]",
                    placeholder: "\u041F\u043E\u0438\u0441\u043A..."
                  })
                ]),
                createVNode("div", { class: "dark:bg-gray-800 bg-gray-200 flex flex-col gap-y-3 py-4 h-[400px] overflow-y-auto" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(chat).get_chat_list.results, (item) => {
                    var _a2, _b2, _c2, _d;
                    return openBlock(), createBlock("div", {
                      onClick: ($event) => {
                        __props.messageObject.id ? unref(chat).messageForwarded = __props.messageObject : unref(chat).messageForwarded;
                        unref(router).push(`/base/chat/${item.id}`);
                        unref(chat).showSendWindow = false;
                      },
                      class: "flex bg-transparent border-none gap-x-4 items-center w-full dark:hover:bg-gray-600 hover:bg-gray-300 cursor-pointer transition-all px-5"
                    }, [
                      createVNode(_sfc_main$u, {
                        user: unref(currentUser),
                        chat: item
                      }, null, 8, ["user", "chat"]),
                      createVNode("div", { class: "w-9/12 break-words" }, [
                        ((_a2 = item.user) == null ? void 0 : _a2.id) || item.is_group ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-sm"
                        }, toDisplayString(((_b2 = item.user) == null ? void 0 : _b2.id) && !item.is_group ? ((_c2 = item.user) == null ? void 0 : _c2.first_name) + " " + ((_d = item.user) == null ? void 0 : _d.last_name) : item.name), 1)) : (openBlock(), createBlock("p", {
                          key: 1,
                          class: "text-sm"
                        }, toDisplayString(_ctx.$t("\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435")), 1))
                      ])
                    ], 8, ["onClick"]);
                  }), 256))
                ]),
                createVNode("div", { class: "w-full h-[50px] flex items-center justify-center" }, [
                  createVNode(_sfc_main$s, {
                    type: "chat",
                    onClick: ($event) => unref(chat).showSendWindow = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0430")), 1)
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
      if (__props.showPinnedWarn) {
        _push(ssrRenderComponent(_sfc_main$q, {
          type: "resize",
          onShowModal: ($event) => {
            __props.showPinnedWarn = false;
            __props.messageObject = {};
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div${_scopeId}><p class="text-lg tracking-wider"${_scopeId}>${ssrInterpolate(_ctx.$t("\u0417\u0430\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u044D\u0442\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435?"))}</p></div><div class="flex mt-4 gap-x-4 justify-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$s, {
                type: "chat",
                onClick: ($event) => {
                  __props.showPinnedWarn = false;
                  unref(chat).messagePinned = {};
                }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0430"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0430")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$s, {
                type: "chat",
                onClick: ($event) => {
                  var _a2;
                  unref(chat).makePinned({ messages: [(_a2 = unref(chat).messagePinned) == null ? void 0 : _a2.id] }).then((res) => {
                    unref(chat).messagePinned = {};
                    unref(toast).info("\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u043E", { autoClose: 1500, theme: "auto" });
                  });
                  isOpen.value = false;
                  __props.showPinnedWarn = false;
                }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u0417\u0430\u043A\u0440\u0435\u043F\u0438\u0442\u044C"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u0417\u0430\u043A\u0440\u0435\u043F\u0438\u0442\u044C")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", null, [
                  createVNode("p", { class: "text-lg tracking-wider" }, toDisplayString(_ctx.$t("\u0417\u0430\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u044D\u0442\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435?")), 1)
                ]),
                createVNode("div", { class: "flex mt-4 gap-x-4 justify-center" }, [
                  createVNode(_sfc_main$s, {
                    type: "chat",
                    onClick: ($event) => {
                      __props.showPinnedWarn = false;
                      unref(chat).messagePinned = {};
                    }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0430")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_sfc_main$s, {
                    type: "chat",
                    onClick: ($event) => {
                      var _a2;
                      unref(chat).makePinned({ messages: [(_a2 = unref(chat).messagePinned) == null ? void 0 : _a2.id] }).then((res) => {
                        unref(chat).messagePinned = {};
                        unref(toast).info("\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u043E", { autoClose: 1500, theme: "auto" });
                      });
                      isOpen.value = false;
                      __props.showPinnedWarn = false;
                    }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u0417\u0430\u043A\u0440\u0435\u043F\u0438\u0442\u044C")), 1)
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
      if (__props.showUnPinWarn) {
        _push(ssrRenderComponent(_sfc_main$q, {
          type: "resize",
          onShowModal: ($event) => {
            __props.showUnPinWarn = false;
            __props.messageObject = {};
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div${_scopeId}><p class="text-lg tracking-wider"${_scopeId}>${ssrInterpolate(_ctx.$t("\u041E\u0442\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u044D\u0442\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435?"))}</p></div><div class="flex mt-4 gap-x-4 justify-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$s, {
                type: "chat",
                onClick: ($event) => __props.showUnPinWarn = false
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0430"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0430")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$s, {
                type: "chat",
                onClick: ($event) => {
                  var _a2;
                  unref(chat).makePinned({ messages: [(_a2 = __props.messageObject) == null ? void 0 : _a2.id] }).then((res) => {
                    unref(toast).info("\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043E\u0442\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u043E", { autoClose: 1500, theme: "auto" });
                  });
                  isOpen.value = false;
                  __props.showUnPinWarn = false;
                }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u041E\u0442\u043A\u0440\u0435\u043F\u0438\u0442\u044C"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043A\u0440\u0435\u043F\u0438\u0442\u044C")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", null, [
                  createVNode("p", { class: "text-lg tracking-wider" }, toDisplayString(_ctx.$t("\u041E\u0442\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u044D\u0442\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435?")), 1)
                ]),
                createVNode("div", { class: "flex mt-4 gap-x-4 justify-center" }, [
                  createVNode(_sfc_main$s, {
                    type: "chat",
                    onClick: ($event) => __props.showUnPinWarn = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0430")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_sfc_main$s, {
                    type: "chat",
                    onClick: ($event) => {
                      var _a2;
                      unref(chat).makePinned({ messages: [(_a2 = __props.messageObject) == null ? void 0 : _a2.id] }).then((res) => {
                        unref(toast).info("\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043E\u0442\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u043E", { autoClose: 1500, theme: "auto" });
                      });
                      isOpen.value = false;
                      __props.showUnPinWarn = false;
                    }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043A\u0440\u0435\u043F\u0438\u0442\u044C")), 1)
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
      if (__props.showDateModal) {
        _push(ssrRenderComponent(_sfc_main$q, {
          type: "resize",
          onShowModal: ($event) => __props.showDateModal = false
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/ChatContent/ChatContentUser.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "TheTextareaAutosize",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const el = ref();
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<textarea${ssrRenderAttrs(_temp0 = mergeProps({
        "v-model": __props.modelValue,
        value: __props.modelValue,
        ref_key: "el",
        ref: el,
        class: "placeholder-style p-4 resize-none example break-words dark:bg-gray-700 bg-gray-200 w-full max-h-[300px] items-center border-l border-black dark:border-opacity-20 border-opacity-10 outline-none text-sm tracking-wide",
        placeholder: "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435..."
      }, _attrs), "textarea")} data-v-541381ba>${ssrInterpolate("value" in _temp0 ? _temp0.value : "")}</textarea>`);
    };
  }
});
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/TheTextareaAutosize.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const TheTextareaAutosize = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-541381ba"]]);
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "TheChatContentPinned",
  __ssrInlineRender: true,
  props: {
    arrayPin: {
      type: Array,
      default: () => []
    },
    showWarnPinned: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    useRoute();
    const chat = useChat();
    const activePin = ref({});
    watchSyncEffect(() => {
      chat.arrayPin = chat.get_pinned_list;
      activePin.value = chat.arrayPin[0];
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      if (unref(chat).arrayPin.length) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-[60px] dark:bg-gray-700 bg-gray-200 border-t border-l border-black dark:border-opacity-20 border-opacity-10 z-10" }, _attrs))}><div class="flex items-center p-3 gap-x-2"><div class="w-[2px] h-[40px] bg-semiCyan"></div><div class="text-sm w-full"><p class="dark:text-semiCyan text-blueSemiLight tracking-wide">${ssrInterpolate(_ctx.$t("\u0417\u0430\u043A\u0440\u0435\u043F\u043B\u0451\u043D\u043D\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"))}</p><p>${ssrInterpolate(((_a = unref(activePin)) == null ? void 0 : _a.text.length) > 30 ? ((_b = unref(activePin).text) == null ? void 0 : _b.slice(0, 30)) + "..." : (_c = unref(activePin)) == null ? void 0 : _c.text)}</p></div><div>`);
        if (unref(chat).arrayPin.length < 2) {
          _push(`<button><svg class="fill-gray-500" width="30px" height="30px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-inspector="components/Chat/ChatContent.vue:55:17"><path d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z" data-v-inspector="components/Chat/ChatContent.vue:57:19"></path></svg></button>`);
        } else {
          _push(`<button><svg class="stroke-gray-500" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.6318 8.22382L13.2654 7.85744C11.7353 6.32736 10.9703 5.56232 10.1409 5.56299C9.86995 5.56321 9.60189 5.61847 9.35297 5.72542C8.59095 6.05283 8.19087 7.05807 7.39072 9.06855L7.33281 9.21406C7.10596 9.78403 6.99254 10.069 6.8104 10.2989C6.67221 10.4733 6.50589 10.6235 6.31829 10.7431C6.071 10.9009 5.77593 10.9846 5.18578 11.1521C4.27067 11.4118 3.81311 11.5417 3.61005 11.8186C3.45915 12.0244 3.39264 12.2802 3.42416 12.5334C3.46657 12.8742 3.80289 13.2105 4.47554 13.8832L7.60603 17.0137C8.27867 17.6863 8.61499 18.0226 8.95577 18.065C9.20903 18.0966 9.46475 18.03 9.67057 17.8791C9.94751 17.6761 10.0774 17.2185 10.3371 16.3034C10.5046 15.7133 10.5883 15.4182 10.7461 15.1709C10.8657 14.9833 11.0159 14.817 11.1903 14.6788C11.4202 14.4967 11.7052 14.3832 12.2751 14.1564L12.4206 14.0985C14.4311 13.2983 15.4364 12.8982 15.7638 12.1362C15.8707 11.8873 15.926 11.6192 15.9262 11.3483C15.9269 10.5189 15.1618 9.7539 13.6318 8.22382Z" stroke-width="1.5"></path><path d="M3.34679 18.142L6.04053 15.4482" stroke-width="1.5" stroke-linecap="round"></path><path d="M22 8H17" stroke-width="1.5" stroke-linecap="round"></path><path d="M22 12.5H18" stroke-width="1.5" stroke-linecap="round"></path><path d="M22 17H13" stroke-width="1.5" stroke-linecap="round"></path></svg></button>`);
        }
        _push(`</div></div>`);
        if (__props.showWarnPinned) {
          _push(ssrRenderComponent(_sfc_main$q, {
            type: "resize",
            onShowModal: ($event) => __props.showWarnPinned = false
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div${_scopeId}><p class="text-lg tracking-wider"${_scopeId}>${ssrInterpolate(_ctx.$t("\u041E\u0442\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u044D\u0442\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435?"))}</p></div><div class="flex mt-4 gap-x-4 justify-center"${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$s, {
                  type: "chat",
                  onClick: ($event) => __props.showWarnPinned = false
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0430"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0430")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$s, {
                  type: "chat",
                  onClick: ($event) => {
                    unref(chat).makePinned({ messages: [unref(activePin).id] }).then((res) => {
                      unref(toast).info("\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043E\u0442\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u043E", { autoClose: 1500, theme: "auto" });
                    });
                    __props.showWarnPinned = false;
                  }
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("\u041E\u0442\u043A\u0440\u0435\u043F\u0438\u0442\u044C"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043A\u0440\u0435\u043F\u0438\u0442\u044C")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                return [
                  createVNode("div", null, [
                    createVNode("p", { class: "text-lg tracking-wider" }, toDisplayString(_ctx.$t("\u041E\u0442\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u044D\u0442\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435?")), 1)
                  ]),
                  createVNode("div", { class: "flex mt-4 gap-x-4 justify-center" }, [
                    createVNode(_sfc_main$s, {
                      type: "chat",
                      onClick: ($event) => __props.showWarnPinned = false
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0430")), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_sfc_main$s, {
                      type: "chat",
                      onClick: ($event) => {
                        unref(chat).makePinned({ messages: [unref(activePin).id] }).then((res) => {
                          unref(toast).info("\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043E\u0442\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u043E", { autoClose: 1500, theme: "auto" });
                        });
                        __props.showWarnPinned = false;
                      }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043A\u0440\u0435\u043F\u0438\u0442\u044C")), 1)
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
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/ChatNav/UI/TheChatContentPinned.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "ChatUploadInfo",
  __ssrInlineRender: true,
  setup(__props) {
    const chat = useChat();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(chat).showDragInfo) {
        _push(`<p${ssrRenderAttrs(mergeProps({ class: "bg-black flex bg-opacity-60 z-20 backdrop-blur-sm w-full h-full absolute top-0 bottom-0 right-0 justify-center items-center my-auto text-white tracking-widest" }, _attrs))}>${ssrInterpolate(_ctx.$t("\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0441\u044E\u0434\u0430 \u0444\u0430\u0439\u043B\u044B \u0434\u043B\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438"))}</p>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/UI/Upload/ChatUploadInfo.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "ChatUploadFile",
  __ssrInlineRender: true,
  setup(__props) {
    const chat = useChat();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<label${ssrRenderAttrs(mergeProps({
        for: "loadFiles",
        class: ["mx-auto absolute bottom-2 z-0 cursor-pointer flex justify-center", { "right-12": !unref(chat).messageUpdate.file }]
      }, _attrs))}>`);
      if (!unref(chat).messageUpdate.file && !unref(chat).messageUpdate.id) {
        _push(`<div class="flex justify-center w-full mx-auto ml-2"><svg class="fill-gray-500 dark:hover:fill-gray-300 hover:fill-gray-700 transition-all" width="35px" height="35px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M5.469 16.688l8.75-8.75c0.094-0.094 0.844-0.844 2.031-1.25 1.656-0.531 3.344-0.094 4.688 1.25 1.375 1.344 1.781 3 1.25 4.656-0.375 1.188-1.156 2-1.25 2.094l-9.406 9.406c-1.625 1.625-5.688 3.719-9.438 0-3.719-3.719-1.594-7.813 0-9.406l10.094-10.125c0.375-0.375 0.969-0.375 1.344 0s0.375 0.969 0 1.344l-10.063 10.125c-0.156 0.125-3.313 3.406 0 6.719 3.219 3.219 6.375 0.344 6.719 0l9.406-9.438s0.531-0.531 0.781-1.281c0.313-1 0.094-1.875-0.781-2.75-1.875-1.875-3.688-0.313-4.031 0l-8.75 8.719c-0.313 0.313-0.531 0.844 0 1.375s1.031 0.281 1.344 0l6.063-6.063c0.375-0.344 1-0.344 1.344 0 0.375 0.375 0.375 1 0 1.375l-6.063 6.031c-0.844 0.813-2.563 1.469-4.031 0-1.5-1.469-0.844-3.219 0-4.031z"></path></svg></div>`);
      } else if (unref(chat).messageUpdate.file) {
        _push(`<div class="flex justify-center items-centerw-full mx-auto ml-3 mb-2"><svg class="fill-semiCyan hover:fill-blueSemiLight transition-all" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452.025 452.025" xml:space="preserve"><g><g><path d="M147.912,363.325c-4.7-4.7-12.3-4.7-17,0c-4.7,4.7-4.7,12.3,0,17l13.6,13.6h-55.2c-35.9,0-65-29.2-65-65v-40.3
              c0-6.6-5.4-12-12-12s-12,5.4-12,12v40.3c0,49.1,39.9,89,89,89h55.2l-13.6,13.6c-4.7,4.7-4.7,12.3,0,17c2.3,2.3,5.4,3.5,8.5,3.5
              s6.1-1.2,8.5-3.5l34.1-34.1c4.7-4.7,4.7-12.3,0-17L147.912,363.325z"></path><path d="M210.312,0.025h-197.1c-6.6,0-12,5.4-12,12v197.1c0,6.6,5.4,12,12,12h197.1c6.6,0,12-5.4,12-12v-197.1
              C222.312,5.425,217.012,0.025,210.312,0.025z M198.312,197.125h-173.1v-173.1h173.1V197.125z"></path><path d="M362.612,34.125h-55.2l13.6-13.6c4.7-4.7,4.7-12.3,0-17s-12.3-4.7-17,0l-34,34.1c-4.7,4.7-4.7,12.3,0,17l34.1,34.1
              c2.3,2.3,5.4,3.5,8.5,3.5s6.1-1.2,8.5-3.5c4.7-4.7,4.7-12.3,0-17l-13.6-13.6h55.2c35.9,0,65,29.2,65,65v40.3c0,6.6,5.4,12,12,12
              s12-5.4,12-12v-40.3C451.712,74.025,411.712,34.125,362.612,34.125z"></path><path d="M438.812,428.025c-3.2,0-6.3,1.3-8.5,3.5s-3.5,5.3-3.5,8.5c0,3.1,1.3,6.3,3.5,8.5s5.3,3.5,8.5,3.5s6.3-1.3,8.5-3.5
              s3.5-5.3,3.5-8.5s-1.3-6.3-3.5-8.5C445.012,429.325,441.912,428.025,438.812,428.025z"></path><path d="M389.512,428.025c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S396.112,428.025,389.512,428.025z"></path><path d="M290.912,428.025c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S297.612,428.025,290.912,428.025z"></path><path d="M340.212,428.025c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S346.812,428.025,340.212,428.025z"></path><path d="M241.713,428.025c-3.2,0-6.3,1.3-8.5,3.5s-3.5,5.3-3.5,8.5c0,3.1,1.3,6.3,3.5,8.5s5.3,3.5,8.5,3.5c3.1,0,6.3-1.3,8.5-3.5
              s3.5-5.3,3.5-8.5s-1.3-6.3-3.5-8.5S244.812,428.025,241.713,428.025z"></path><path d="M241.713,378.725c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S248.312,378.725,241.713,378.725z"></path><path d="M241.713,329.425c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S248.312,329.425,241.713,329.425z"></path><path d="M241.713,280.125c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S248.312,280.125,241.713,280.125z"></path><path d="M241.713,230.925c-3.2,0-6.3,1.3-8.5,3.5s-3.5,5.3-3.5,8.5s1.3,6.3,3.5,8.5s5.3,3.5,8.5,3.5c3.1,0,6.3-1.3,8.5-3.5
              s3.5-5.3,3.5-8.5c0-3.1-1.3-6.3-3.5-8.5C247.912,232.125,244.812,230.925,241.713,230.925z"></path><path d="M389.512,230.925c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S396.112,230.925,389.512,230.925z"></path><path d="M340.212,230.925c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S346.812,230.925,340.212,230.925z"></path><path d="M290.912,230.925c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S297.612,230.925,290.912,230.925z"></path><path d="M438.812,230.925c-3.2,0-6.3,1.3-8.5,3.5s-3.5,5.3-3.5,8.5s1.3,6.3,3.5,8.5s5.3,3.5,8.5,3.5s6.3-1.3,8.5-3.5
              s3.5-5.3,3.5-8.5c0-3.1-1.3-6.3-3.5-8.5C445.012,232.225,441.912,230.925,438.812,230.925z"></path><path d="M438.812,280.125c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S445.412,280.125,438.812,280.125z"></path><path d="M438.812,378.725c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S445.412,378.725,438.812,378.725z"></path><path d="M438.812,329.425c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S445.412,329.425,438.812,329.425z"></path></g></g></svg></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<input id="loadFiles" class="hidden" type="file"></label>`);
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/UI/Upload/ChatUploadFile.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "ChatContent",
  __ssrInlineRender: true,
  props: {
    messageId: {
      type: Number,
      default: null
    },
    showArrowBtn: {
      type: Boolean,
      default: false
    },
    showForwardedSetting: {
      type: Boolean,
      default: false
    },
    check: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    useRoute();
    const chat = useChat();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full relative h-[92%]" }, _attrs))}>`);
      if (!unref(chat).userChat.id) {
        _push(ssrRenderComponent(ThePreloader, null, null, _parent));
      } else {
        _push(`<div class="${ssrRenderClass([{ "z-20": unref(chat).showDragInfo }, "flex relative h-full flex-col"])}">`);
        _push(ssrRenderComponent(_sfc_main$k, null, null, _parent));
        _push(ssrRenderComponent(_sfc_main$m, null, null, _parent));
        _push(`<form class="flex mt-auto relative"><div class="flex flex-col h-full w-full">`);
        if (unref(chat).messageUpdate.id || unref(chat).messageForwarded.id || unref(chat).messageReplied.id) {
          _push(`<div class="dark:bg-gray-700 flex justify-between items-center bg-gray-200 border-l border-black dark:border-opacity-20 border-opacity-10 w-full h-[50px] max-sm:h-[70px]"><div class="flex items-center"><div class="ml-2">`);
          if (unref(chat).messageUpdate.id) {
            _push(`<svg class="fill-semiCyan" width="25px" height="25px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M13.8 2.2a2.51 2.51 0 0 0-3.54 0l-6.9 6.91-1.76 3.62a1.26 1.26 0 0 0 1.12 1.8 1.23 1.23 0 0 0 .55-.13l3.62-1.76 6-6 .83-.82.06-.06a2.52 2.52 0 0 0 .02-3.56zm-.89.89a1.25 1.25 0 0 1 0 1.77l-1.77-1.77a1.24 1.24 0 0 1 .86-.37 1.22 1.22 0 0 1 .91.37zM2.73 13.27 4.29 10 6 11.71zm4.16-2.4L5.13 9.11 10.26 4 12 5.74z"></path></svg>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(chat).messageForwarded.id) {
            _push(`<svg class="stroke-semiCyan" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.48 18.5368H21M4.68 12L3 12.044M4.68 12C4.68 13.3255 5.75451 14.4 7.08 14.4C8.40548 14.4 9.48 13.3255 9.48 12C9.48 10.6745 8.40548 9.6 7.08 9.6C5.75451 9.6 4.68 10.6745 4.68 12ZM10.169 12.0441H21M12.801 5.55124L3 5.55124M21 5.55124H18.48M3 18.5368H12.801M17.88 18.6C17.88 19.9255 16.8055 21 15.48 21C14.1545 21 13.08 19.9255 13.08 18.6C13.08 17.2745 14.1545 16.2 15.48 16.2C16.8055 16.2 17.88 17.2745 17.88 18.6ZM17.88 5.4C17.88 6.72548 16.8055 7.8 15.48 7.8C14.1545 7.8 13.08 6.72548 13.08 5.4C13.08 4.07452 14.1545 3 15.48 3C16.8055 3 17.88 4.07452 17.88 5.4Z" stroke-width="1.5" stroke-linecap="round"></path></svg>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(chat).messageReplied.id) {
            _push(`<svg width="25px" height="25px" viewBox="-0.5 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g class="fill-semiCyan" id="Icon-Set-Filled" transform="translate(-102.000000, -1195.000000)"><path d="M113.983,1202.01 L113.983,1196.11 C114.017,1195.81 113.936,1195.51 113.708,1195.28 C113.312,1194.89 112.67,1194.89 112.274,1195.28 L102.285,1206.24 C102.074,1206.45 101.984,1206.72 101.998,1207 C101.984,1207.27 102.074,1207.55 102.285,1207.76 L112.219,1218.65 C112.59,1218.97 113.271,1219.15 113.708,1218.71 C113.935,1218.49 114.035,1218.29 114,1218 L114,1212 C120.6,1212 126.569,1216.75 127.754,1223.01 C128.552,1221.17 129,1219.15 129,1217.02 C129,1208.73 122.276,1202.01 113.983,1202.01" id="reply"></path></g></g></svg>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="py-2 px-4 text-sm tracking-widest">`);
          if (unref(chat).messageUpdate.id) {
            _push(`<div><p class="text-semiCyan">${ssrInterpolate(_ctx.$t("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435"))}</p></div>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(chat).messageForwarded.id) {
            _push(`<div><p class="text-semiCyan">${ssrInterpolate(unref(chat).checkboxForwarded ? unref(chat).messageForwarded.sender.first_name + " " + unref(chat).messageForwarded.sender.last_name : _ctx.$t("\u0418\u043C\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044F \u0441\u043A\u0440\u044B\u0442\u043E"))}</p></div>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(chat).messageReplied.id) {
            _push(`<div><p class="text-semiCyan text-[12px]">${ssrInterpolate(_ctx.$t("\u0412 \u043E\u0442\u0432\u0435\u0442") + " " + unref(chat).messageReplied.sender.first_name + " " + unref(chat).messageReplied.sender.last_name)}</p><p class="">${ssrInterpolate(unref(chat).messageReplied.text.length > 20 ? unref(chat).messageReplied.text.slice(0, 20) + "..." : unref(chat).messageReplied.text)}</p></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div>`);
          if (unref(chat).messageUpdate.id) {
            _push(`<p>`);
            if (unref(chat).messageUpdate.file_name) {
              _push(`<span class="text-[12px] text-gray-400">${ssrInterpolate(unref(chat).messageUpdate.file_name.slice(0, 20) + "..." + unref(chat).messageUpdate.file_name.substr(-6) + ",")}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(` ${ssrInterpolate(((_a = unref(chat).messageUpdate.text) == null ? void 0 : _a.length) > 50 ? ((_b = unref(chat).messageUpdate) == null ? void 0 : _b.text.slice(0, 50)) + "..." : (_c = unref(chat).messageUpdate) == null ? void 0 : _c.text)}</p>`);
          } else {
            _push(`<p>${ssrInterpolate(((_d = unref(chat).messageForwarded.text) == null ? void 0 : _d.length) > 50 ? ((_e = unref(chat).messageForwarded) == null ? void 0 : _e.text.slice(0, 50)) + "..." : (_f = unref(chat).messageForwarded) == null ? void 0 : _f.text)}</p>`);
          }
          _push(`</div></div></div><div class="mr-4 cursor-pointer"><svg class="fill-gray-500" width="30px" height="30px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z"></path></svg></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="bg-gray-600">`);
        if (unref(chat).messageUpdate.id) {
          _push(ssrRenderComponent(TheTextareaAutosize, {
            modelValue: unref(chat).messageUpdate.updateText,
            "onUpdate:modelValue": ($event) => unref(chat).messageUpdate.updateText = $event,
            onKeydown: [($event) => unref(chat).updateMessage({ id: unref(chat).messageUpdate.id, text: unref(chat).messageUpdate.updateText }).then((res) => {
              unref(chat).messageUpdate = {};
            }), () => {
            }],
            class: ["h-[50px] -mb-2 pr-24 pl-5", { "!pl-12": unref(chat).messageUpdate.id }],
            placeholder: "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435..."
          }, null, _parent));
        } else if (!unref(chat).messageUpdate.id) {
          _push(ssrRenderComponent(TheTextareaAutosize, {
            modelValue: unref(chat).messageText,
            "onUpdate:modelValue": ($event) => unref(chat).messageText = $event,
            onKeydown: [() => {
            }, () => {
            }],
            onKeyup: [() => {
            }, ($event) => {
              var _a2, _b2;
              ((_a2 = unref(chat).messageText) == null ? void 0 : _a2.length) > 0 && ((_b2 = unref(chat).messageText) == null ? void 0 : _b2.trim()) !== "" || unref(chat).messageForwarded.id ? unref(chat).createMessage({ id: unref(chat).get_user_chat.id, text: unref(chat).messageText, message_id: unref(chat).messageForwarded.id }).then((res) => {
                unref(chat).messageText = "";
              }) : unref(chat).messageForwarded = {};
              unref(chat).messageText = "";
              console.log(1243);
            }],
            class: "h-[50px] -mb-2 pr-24 pl-5",
            placeholder: "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435..."
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (!unref(chat).messageUpdate.id || !unref(chat).messageForwarded.id) {
          _push(ssrRenderComponent(_sfc_main$i, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (((_g = unref(chat).messageText) == null ? void 0 : _g.length) > 0 && ((_h = unref(chat).messageText) == null ? void 0 : _h.trim()) !== "" || unref(chat).messageForwarded.id) {
          _push(`<button class="absolute right-2 bottom-2"><div><svg width="35px" height="35px" viewBox="0 0 24 24" fill="cyan" xmlns="http://www.w3.org/2000/svg"><path d="M11.5003 12H5.41872M5.24634 12.7972L4.24158 15.7986C3.69128 17.4424 3.41613 18.2643 3.61359 18.7704C3.78506 19.21 4.15335 19.5432 4.6078 19.6701C5.13111 19.8161 5.92151 19.4604 7.50231 18.7491L17.6367 14.1886C19.1797 13.4942 19.9512 13.1471 20.1896 12.6648C20.3968 12.2458 20.3968 11.7541 20.1896 11.3351C19.9512 10.8529 19.1797 10.5057 17.6367 9.81135L7.48483 5.24303C5.90879 4.53382 5.12078 4.17921 4.59799 4.32468C4.14397 4.45101 3.77572 4.78336 3.60365 5.22209C3.40551 5.72728 3.67772 6.54741 4.22215 8.18767L5.24829 11.2793C5.34179 11.561 5.38855 11.7019 5.407 11.8459C5.42338 11.9738 5.42321 12.1032 5.40651 12.231C5.38768 12.375 5.34057 12.5157 5.24634 12.7972Z" stroke="#000000" stroke-width="0.6" stroke-linecap="round" stroke-linejoin="round"></path></svg></div></button>`);
        } else if (((_i = unref(chat).messageUpdate.updateText) == null ? void 0 : _i.length) > 0 && ((_j = unref(chat).messageUpdate.updateText) == null ? void 0 : _j.trim()) !== "" || unref(chat).messageUpdate.file) {
          _push(`<button class="absolute right-2 bottom-2"><div><svg class="fill-semiCyan" width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.4933 6.93502C15.8053 7.20743 15.8374 7.68122 15.565 7.99325L7.70786 16.9933C7.56543 17.1564 7.35943 17.25 7.14287 17.25C6.9263 17.25 6.72031 17.1564 6.57788 16.9933L3.43502 13.3933C3.16261 13.0812 3.19473 12.6074 3.50677 12.335C3.8188 12.0626 4.29259 12.0947 4.565 12.4068L7.14287 15.3596L14.435 7.00677C14.7074 6.69473 15.1812 6.66261 15.4933 6.93502Z"></path></svg></div></button>`);
        } else {
          _push(`<div class="absolute right-2 bottom-0.5"><button><svg class="fill-gray-500 dark:hover:fill-gray-300 hover:fill-gray-700 transition-all" width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.5C10.314 4.5 9 5.80455 9 7.35V12.15C9 13.6955 10.314 15 12 15C13.686 15 15 13.6955 15 12.15L15 7.35C15 5.80455 13.686 4.5 12 4.5ZM7.5 7.35C7.5 4.919 9.54387 3 12 3C14.4561 3 16.5 4.919 16.5 7.35L16.5 12.15C16.5 14.581 14.4561 16.5 12 16.5C9.54387 16.5 7.5 14.581 7.5 12.15V7.35ZM6.75 12.75C6.75 15.1443 9.0033 17.25 12 17.25C14.9967 17.25 17.25 15.1443 17.25 12.75H18.75C18.75 15.9176 16.0499 18.3847 12.75 18.7129V21H11.25V18.7129C7.95007 18.3847 5.25 15.9176 5.25 12.75H6.75Z"></path></svg></button></div>`);
        }
        _push(`</div></div></form>`);
        _push(ssrRenderComponent(_sfc_main$j, {
          onDragleave: ($event) => unref(chat).showDragInfo = false
        }, null, _parent));
        _push(`</div>`);
      }
      if (__props.showForwardedSetting) {
        _push(ssrRenderComponent(_sfc_main$q, {
          type: "resizeInfoWindow",
          class: "p-4",
          onShowModal: ($event) => __props.showForwardedSetting = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="my-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$t, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u041F\u0435\u0440\u0435\u0441\u043B\u0430\u0442\u044C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u041F\u0435\u0440\u0435\u0441\u043B\u0430\u0442\u044C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="px-4 py-2 !font-light"${_scopeId}><div${_scopeId}><p${_scopeId}>${ssrInterpolate(_ctx.$t("\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0443\u0431\u0440\u0430\u0442\u044C \u0438\u043C\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044F. \u0412 \u044D\u0442\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u0432\u044B\u0433\u043B\u044F\u0434\u0435\u0442\u044C \u043A\u0430\u043A \u0412\u0430\u0448\u0435."))}</p><div${_scopeId}>`);
              _push2(ssrRenderComponent(TheCheckbox, {
                t: "checkboxChat",
                checked: __props.check
              }, null, _parent2, _scopeId));
              _push2(`</div><button class="text-sm font-light text-semiCyan hover:underline tracking-wider"${_scopeId}>${ssrInterpolate(_ctx.$t("\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044F"))}</button></div><div class="flex justify-end"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$s, {
                type: "chat",
                onClick: ($event) => {
                  __props.showForwardedSetting = false;
                }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u0413\u043E\u0442\u043E\u0432\u043E"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u0413\u043E\u0442\u043E\u0432\u043E")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "my-2" }, [
                  createVNode(_sfc_main$t, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("\u041F\u0435\u0440\u0435\u0441\u043B\u0430\u0442\u044C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "px-4 py-2 !font-light" }, [
                    createVNode("div", null, [
                      createVNode("p", null, toDisplayString(_ctx.$t("\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0443\u0431\u0440\u0430\u0442\u044C \u0438\u043C\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044F. \u0412 \u044D\u0442\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u0432\u044B\u0433\u043B\u044F\u0434\u0435\u0442\u044C \u043A\u0430\u043A \u0412\u0430\u0448\u0435.")), 1),
                      createVNode("div", null, [
                        createVNode(TheCheckbox, {
                          t: "checkboxChat",
                          checked: __props.check
                        }, null, 8, ["checked"])
                      ]),
                      createVNode("button", {
                        class: "text-sm font-light text-semiCyan hover:underline tracking-wider",
                        onClick: ($event) => {
                          __props.showForwardedSetting = false;
                          unref(chat).showSendWindow = true;
                        }
                      }, toDisplayString(_ctx.$t("\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044F")), 9, ["onClick"])
                    ]),
                    createVNode("div", { class: "flex justify-end" }, [
                      createVNode(_sfc_main$s, {
                        type: "chat",
                        onClick: ($event) => {
                          __props.showForwardedSetting = false;
                        }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("\u0413\u043E\u0442\u043E\u0432\u043E")), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ])
                  ])
                ])
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
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/ChatContent.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "TheChatContentPinnedMessages",
  __ssrInlineRender: true,
  setup(__props) {
    const chat = useChat();
    const currentUser = useAuthStore();
    const { x, y } = useMouse();
    const { y: windowY } = useWindowScroll();
    const isOpen = ref(false);
    const virtualElement = ref({ getBoundingClientRect: () => ({}) });
    ref(null);
    const pinned_block = ref({
      scrollTop: "",
      scrollHeight: "",
      clientHeight: "",
      root: null
    });
    watchEffect(() => {
      setTimeout(() => {
        const el = pinned_block.value;
        el.scrollTop = el == null ? void 0 : el.scrollHeight;
      }, 500);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContextMenu = __nuxt_component_0;
      const _component_ChatChatContentUserElem = _sfc_main$p;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "overflow-x-hidden gap-y-2 check overflow-y-auto",
        ref_key: "pinned_block",
        ref: pinned_block,
        id: "pinned_block"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UContextMenu, {
        onContextmenu: () => {
        },
        modelValue: unref(isOpen),
        "onUpdate:modelValue": ($event) => isRef(isOpen) ? isOpen.value = $event : null,
        "virtual-element": unref(virtualElement)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class=""${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$o, null, {
              ContextMenuSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg class="stroke-black dark:stroke-white" width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path data-v-a06cf116="" d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}></path><path data-v-a06cf116="" d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}></path></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      class: "stroke-black dark:stroke-white",
                      width: "22px",
                      height: "22px",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", {
                        "data-v-a06cf116": "",
                        d: "M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        "data-v-a06cf116": "",
                        d: "M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ]))
                  ];
                }
              }),
              ContextMenuText: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$o, null, {
              ContextMenuSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg class="dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 261.811 261.811" xml:space="preserve"${_scopeId2}><g${_scopeId2}><g${_scopeId2}><path d="M24.715,261.811c-5.492,0-10.645-2.133-14.521-6.01c-8.011-8.017-8.011-21.054-0.006-29.064
                      l70.375-70.372L38.51,113.785c-7.073-7.179-7.928-18.303-2.039-26.466c0.855-1.184,21.314-28.839,58.964-28.839
                      c2.224,0,4.492,0.101,6.756,0.295L180.62,3.597c8.103-5.729,20.081-4.48,26.863,2.796l44.675,48.037
                      c6.919,7.436,7.319,19.006,0.926,26.906l-55.882,69.151c1.979,23.759,1.052,63.069-23.901,77.725
                      c-7.959,4.666-18.578,3.26-25.021-3.282l-38.837-39.316l-70.206,70.183C35.365,259.678,30.208,261.811,24.715,261.811z
                       M95.43,70.194c-31.735,0-48.763,23.009-49.472,23.987c-2.53,3.502-2.159,8.291,0.883,11.376l50.227,50.865l-78.6,78.594
                      c-3.442,3.448-3.442,9.058,0,12.505c3.319,3.328,9.157,3.328,12.482,0l78.531-78.52l47.122,47.7
                      c2.762,2.813,7.325,3.407,10.761,1.412c20.957-12.316,19.539-52.303,17.961-68.919l-0.229-2.373l58.878-72.854
                      c2.745-3.402,2.573-8.371-0.406-11.567l-44.663-48.031c-2.904-3.116-8.062-3.671-11.545-1.212l-82.042,57.726l-2.213-0.251
                      C100.536,70.34,97.952,70.194,95.43,70.194z"${_scopeId2}></path></g></g></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      class: "dark:fill-white",
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "22px",
                      height: "22px",
                      viewBox: "0 0 261.811 261.811",
                      "xml:space": "preserve"
                    }, [
                      createVNode("g", null, [
                        createVNode("g", null, [
                          createVNode("path", { d: "M24.715,261.811c-5.492,0-10.645-2.133-14.521-6.01c-8.011-8.017-8.011-21.054-0.006-29.064\r\n                      l70.375-70.372L38.51,113.785c-7.073-7.179-7.928-18.303-2.039-26.466c0.855-1.184,21.314-28.839,58.964-28.839\r\n                      c2.224,0,4.492,0.101,6.756,0.295L180.62,3.597c8.103-5.729,20.081-4.48,26.863,2.796l44.675,48.037\r\n                      c6.919,7.436,7.319,19.006,0.926,26.906l-55.882,69.151c1.979,23.759,1.052,63.069-23.901,77.725\r\n                      c-7.959,4.666-18.578,3.26-25.021-3.282l-38.837-39.316l-70.206,70.183C35.365,259.678,30.208,261.811,24.715,261.811z\r\n                       M95.43,70.194c-31.735,0-48.763,23.009-49.472,23.987c-2.53,3.502-2.159,8.291,0.883,11.376l50.227,50.865l-78.6,78.594\r\n                      c-3.442,3.448-3.442,9.058,0,12.505c3.319,3.328,9.157,3.328,12.482,0l78.531-78.52l47.122,47.7\r\n                      c2.762,2.813,7.325,3.407,10.761,1.412c20.957-12.316,19.539-52.303,17.961-68.919l-0.229-2.373l58.878-72.854\r\n                      c2.745-3.402,2.573-8.371-0.406-11.567l-44.663-48.031c-2.904-3.116-8.062-3.671-11.545-1.212l-82.042,57.726l-2.213-0.251\r\n                      C100.536,70.34,97.952,70.194,95.43,70.194z" })
                        ])
                      ])
                    ]))
                  ];
                }
              }),
              ContextMenuText: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("\u0417\u0430\u043A\u0440\u0435\u043F\u0438\u0442\u044C"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("\u0417\u0430\u043A\u0440\u0435\u043F\u0438\u0442\u044C")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$o, null, {
              ContextMenuSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg class="dark:fill-white fill-black" width="22px" height="22px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path d="M50.96,37.30957A4,4,0,0,0,45.04,42.69043l38.59424,42.4541c-11.416-2.39062-31.02295-2.76172-51.54444,13.79248a12.01279,12.01279,0,0,0-.96484,17.84424L82.34326,168,45.17188,205.17139a3.99992,3.99992,0,1,0,5.65625,5.65722L88,173.65674l51.02051,51.021a12.00814,12.00814,0,0,0,8.49219,3.51954q.42041,0,.84277-.02979a11.97039,11.97039,0,0,0,8.73047-4.74512c6.33252-8.4165,15.40625-23.479,15.38379-40.55859L205.04,218.69043a4,4,0,1,0,5.91992-5.38086Zm99.7334,181.30322a3.99357,3.99357,0,0,1-6.01563.40821L36.78125,111.124a4.01376,4.01376,0,0,1,.332-5.96045c27.17188-21.91943,52.06543-10.09375,53.09766-9.58593a3.99477,3.99477,0,0,0,3.08984.20019l69.71729,76.689C168.36816,191.2041,157.64355,209.374,150.69336,218.61279ZM232.68652,96a11.92292,11.92292,0,0,1-3.51562,8.48584l-41.4043,41.40381a3.99975,3.99975,0,1,1-5.65625-5.65674l41.4043-41.4043a3.99915,3.99915,0,0,0,0-5.65674L162.8291,32.48535a4.00621,4.00621,0,0,0-5.6582.00049l-37.97559,37.9751a3.99957,3.99957,0,1,1-5.65625-5.65625l37.97559-37.97608a12.01526,12.01526,0,0,1,16.9707-.00049L229.1709,87.51465A11.921,11.921,0,0,1,232.68652,96Z"${_scopeId2}></path></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      class: "dark:fill-white fill-black",
                      width: "22px",
                      height: "22px",
                      viewBox: "0 0 256 256",
                      id: "Flat",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", { d: "M50.96,37.30957A4,4,0,0,0,45.04,42.69043l38.59424,42.4541c-11.416-2.39062-31.02295-2.76172-51.54444,13.79248a12.01279,12.01279,0,0,0-.96484,17.84424L82.34326,168,45.17188,205.17139a3.99992,3.99992,0,1,0,5.65625,5.65722L88,173.65674l51.02051,51.021a12.00814,12.00814,0,0,0,8.49219,3.51954q.42041,0,.84277-.02979a11.97039,11.97039,0,0,0,8.73047-4.74512c6.33252-8.4165,15.40625-23.479,15.38379-40.55859L205.04,218.69043a4,4,0,1,0,5.91992-5.38086Zm99.7334,181.30322a3.99357,3.99357,0,0,1-6.01563.40821L36.78125,111.124a4.01376,4.01376,0,0,1,.332-5.96045c27.17188-21.91943,52.06543-10.09375,53.09766-9.58593a3.99477,3.99477,0,0,0,3.08984.20019l69.71729,76.689C168.36816,191.2041,157.64355,209.374,150.69336,218.61279ZM232.68652,96a11.92292,11.92292,0,0,1-3.51562,8.48584l-41.4043,41.40381a3.99975,3.99975,0,1,1-5.65625-5.65674l41.4043-41.4043a3.99915,3.99915,0,0,0,0-5.65674L162.8291,32.48535a4.00621,4.00621,0,0,0-5.6582.00049l-37.97559,37.9751a3.99957,3.99957,0,1,1-5.65625-5.65625l37.97559-37.97608a12.01526,12.01526,0,0,1,16.9707-.00049L229.1709,87.51465A11.921,11.921,0,0,1,232.68652,96Z" })
                    ]))
                  ];
                }
              }),
              ContextMenuText: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("\u041E\u0442\u043A\u0440\u0435\u043F\u0438\u0442\u044C"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043A\u0440\u0435\u043F\u0438\u0442\u044C")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$o, null, {
              ContextMenuSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg class="dark:stroke-white stroke-black" width="23px" height="23px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path data-v-a06cf116="" d="M10 12V17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}></path><path data-v-a06cf116="" d="M14 12V17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}></path><path data-v-a06cf116="" d="M4 7H20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}></path><path data-v-a06cf116="" d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}></path><path data-v-a06cf116="" d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}></path></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      class: "dark:stroke-white stroke-black",
                      width: "23px",
                      height: "23px",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", {
                        "data-v-a06cf116": "",
                        d: "M10 12V17",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        "data-v-a06cf116": "",
                        d: "M14 12V17",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        "data-v-a06cf116": "",
                        d: "M4 7H20",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        "data-v-a06cf116": "",
                        d: "M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        "data-v-a06cf116": "",
                        d: "M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ]))
                  ];
                }
              }),
              ContextMenuText: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("\u0423\u0434\u0430\u043B\u0438\u0442\u044C"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("\u0423\u0434\u0430\u043B\u0438\u0442\u044C")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "" }, [
                createVNode(_sfc_main$o, null, {
                  ContextMenuSvg: withCtx(() => [
                    (openBlock(), createBlock("svg", {
                      class: "stroke-black dark:stroke-white",
                      width: "22px",
                      height: "22px",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", {
                        "data-v-a06cf116": "",
                        d: "M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        "data-v-a06cf116": "",
                        d: "M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ]))
                  ]),
                  ContextMenuText: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C")), 1)
                  ]),
                  _: 1
                }),
                createVNode(_sfc_main$o, null, {
                  ContextMenuSvg: withCtx(() => [
                    (openBlock(), createBlock("svg", {
                      class: "dark:fill-white",
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "22px",
                      height: "22px",
                      viewBox: "0 0 261.811 261.811",
                      "xml:space": "preserve"
                    }, [
                      createVNode("g", null, [
                        createVNode("g", null, [
                          createVNode("path", { d: "M24.715,261.811c-5.492,0-10.645-2.133-14.521-6.01c-8.011-8.017-8.011-21.054-0.006-29.064\r\n                      l70.375-70.372L38.51,113.785c-7.073-7.179-7.928-18.303-2.039-26.466c0.855-1.184,21.314-28.839,58.964-28.839\r\n                      c2.224,0,4.492,0.101,6.756,0.295L180.62,3.597c8.103-5.729,20.081-4.48,26.863,2.796l44.675,48.037\r\n                      c6.919,7.436,7.319,19.006,0.926,26.906l-55.882,69.151c1.979,23.759,1.052,63.069-23.901,77.725\r\n                      c-7.959,4.666-18.578,3.26-25.021-3.282l-38.837-39.316l-70.206,70.183C35.365,259.678,30.208,261.811,24.715,261.811z\r\n                       M95.43,70.194c-31.735,0-48.763,23.009-49.472,23.987c-2.53,3.502-2.159,8.291,0.883,11.376l50.227,50.865l-78.6,78.594\r\n                      c-3.442,3.448-3.442,9.058,0,12.505c3.319,3.328,9.157,3.328,12.482,0l78.531-78.52l47.122,47.7\r\n                      c2.762,2.813,7.325,3.407,10.761,1.412c20.957-12.316,19.539-52.303,17.961-68.919l-0.229-2.373l58.878-72.854\r\n                      c2.745-3.402,2.573-8.371-0.406-11.567l-44.663-48.031c-2.904-3.116-8.062-3.671-11.545-1.212l-82.042,57.726l-2.213-0.251\r\n                      C100.536,70.34,97.952,70.194,95.43,70.194z" })
                        ])
                      ])
                    ]))
                  ]),
                  ContextMenuText: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("\u0417\u0430\u043A\u0440\u0435\u043F\u0438\u0442\u044C")), 1)
                  ]),
                  _: 1
                }),
                createVNode(_sfc_main$o, null, {
                  ContextMenuSvg: withCtx(() => [
                    (openBlock(), createBlock("svg", {
                      class: "dark:fill-white fill-black",
                      width: "22px",
                      height: "22px",
                      viewBox: "0 0 256 256",
                      id: "Flat",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", { d: "M50.96,37.30957A4,4,0,0,0,45.04,42.69043l38.59424,42.4541c-11.416-2.39062-31.02295-2.76172-51.54444,13.79248a12.01279,12.01279,0,0,0-.96484,17.84424L82.34326,168,45.17188,205.17139a3.99992,3.99992,0,1,0,5.65625,5.65722L88,173.65674l51.02051,51.021a12.00814,12.00814,0,0,0,8.49219,3.51954q.42041,0,.84277-.02979a11.97039,11.97039,0,0,0,8.73047-4.74512c6.33252-8.4165,15.40625-23.479,15.38379-40.55859L205.04,218.69043a4,4,0,1,0,5.91992-5.38086Zm99.7334,181.30322a3.99357,3.99357,0,0,1-6.01563.40821L36.78125,111.124a4.01376,4.01376,0,0,1,.332-5.96045c27.17188-21.91943,52.06543-10.09375,53.09766-9.58593a3.99477,3.99477,0,0,0,3.08984.20019l69.71729,76.689C168.36816,191.2041,157.64355,209.374,150.69336,218.61279ZM232.68652,96a11.92292,11.92292,0,0,1-3.51562,8.48584l-41.4043,41.40381a3.99975,3.99975,0,1,1-5.65625-5.65674l41.4043-41.4043a3.99915,3.99915,0,0,0,0-5.65674L162.8291,32.48535a4.00621,4.00621,0,0,0-5.6582.00049l-37.97559,37.9751a3.99957,3.99957,0,1,1-5.65625-5.65625l37.97559-37.97608a12.01526,12.01526,0,0,1,16.9707-.00049L229.1709,87.51465A11.921,11.921,0,0,1,232.68652,96Z" })
                    ]))
                  ]),
                  ContextMenuText: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043A\u0440\u0435\u043F\u0438\u0442\u044C")), 1)
                  ]),
                  _: 1
                }),
                createVNode(_sfc_main$o, null, {
                  ContextMenuSvg: withCtx(() => [
                    (openBlock(), createBlock("svg", {
                      class: "dark:stroke-white stroke-black",
                      width: "23px",
                      height: "23px",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", {
                        "data-v-a06cf116": "",
                        d: "M10 12V17",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        "data-v-a06cf116": "",
                        d: "M14 12V17",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        "data-v-a06cf116": "",
                        d: "M4 7H20",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        "data-v-a06cf116": "",
                        d: "M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        "data-v-a06cf116": "",
                        d: "M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ]))
                  ]),
                  ContextMenuText: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("\u0423\u0434\u0430\u043B\u0438\u0442\u044C")), 1)
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="p-2"><!--[-->`);
      ssrRenderList(unref(chat).arrayPin, (item) => {
        _push(ssrRenderComponent(_component_ChatChatContentUserElem, {
          class: "dark:text-white text-black",
          item,
          onContextmenu: () => {
            const top = ("unref" in _ctx ? _ctx.unref : unref(unref))(unref(y)) - ("unref" in _ctx ? _ctx.unref : unref(unref))(unref(windowY));
            const left = ("unref" in _ctx ? _ctx.unref : unref(unref))(unref(x));
            unref(virtualElement).getBoundingClientRect = () => ({
              width: 0,
              height: 0,
              top,
              left
            });
            isOpen.value = true;
          }
        }, {
          userImage: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a, _b;
            if (_push2) {
              _push2(`<img class="w-[30px] h-[30px] rounded-full"${ssrRenderAttr("src", item.sender.id === ((_a = unref(currentUser).user) == null ? void 0 : _a.id) ? unref(currentUser).get_server_domain + unref(currentUser).user.photo_url : unref(currentUser).get_server_domain + item.sender.photo)} alt=""${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  class: "w-[30px] h-[30px] rounded-full",
                  src: item.sender.id === ((_b = unref(currentUser).user) == null ? void 0 : _b.id) ? unref(currentUser).get_server_domain + unref(currentUser).user.photo_url : unref(currentUser).get_server_domain + item.sender.photo,
                  alt: ""
                }, null, 8, ["src"])
              ];
            }
          }),
          userMessage: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.text)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.text), 1)
              ];
            }
          }),
          userDate: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(new Date(item.created_at).toLocaleTimeString().slice(0, 5))}`);
            } else {
              return [
                createTextVNode(toDisplayString(new Date(item.created_at).toLocaleTimeString().slice(0, 5)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/UI/Pinned/TheChatContentPinnedMessages.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "TheChatContentPinnedHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const chat = useChat();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-[60px] dark:bg-gray-700 bg-gray-200 border-t border-l border-black dark:border-opacity-20 border-opacity-10 z-10" }, _attrs))}><div class="p-4 flex items-center gap-x-3 cursor-pointer"><div><svg class="dark:stroke-white stroke-black" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.9998 19.9201L8.47984 13.4001C7.70984 12.6301 7.70984 11.3701 8.47984 10.6001L14.9998 4.08008" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><p class="text-black dark:text-white tracking-wider">${ssrInterpolate(unref(chat).arrayPin.length + " " + _ctx.$t("\u0437\u0430\u043A\u0440\u0435\u043F\u043B\u0451\u043D\u043D\u044B\u0445 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F"))}</p></div></div>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/UI/Pinned/TheChatContentPinnedHeader.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "TheChatContentPinnedFooter",
  __ssrInlineRender: true,
  props: {
    showWarnPinned: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const chat = useChat();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(chat).showPinnedWindow) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-[50px] dark:bg-gray-700 bg-gray-200 border-t border-l border-black dark:border-opacity-20 border-opacity-10 z-10 hover:dark:bg-gray-600 cursor-pointer hover:bg-gray-100" }, _attrs))}><button class="flex mx-auto mt-4 uppercase text-[12px] tracking-widest text-blueSemiLight font-bold">${ssrInterpolate(_ctx.$t("\u041E\u0442\u043A\u0440\u0435\u043F\u0438\u0442\u044C") + " " + unref(chat).arrayPin.length + " " + _ctx.$t("\u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F"))}</button>`);
        if (__props.showWarnPinned) {
          _push(ssrRenderComponent(_sfc_main$q, {
            type: "resize",
            onShowModal: ($event) => __props.showWarnPinned = false
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div${_scopeId}><p class="text-lg tracking-wider"${_scopeId}>${ssrInterpolate(_ctx.$t("\u041E\u0442\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u0432\u0441\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F?"))}</p></div><div class="flex mt-4 gap-x-4 justify-center"${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$s, {
                  type: "chat",
                  onClick: ($event) => __props.showWarnPinned = false
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0430"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0430")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$s, {
                  type: "chat",
                  onClick: ($event) => {
                    unref(chat).makePinned({ messages: unref(chat).arrayPin.filter((e) => e.id).map((e) => e.id) }).then((res) => unref(toast).info("\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u043E\u0442\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u044B", { autoClose: 1500, theme: "auto" }));
                    __props.showWarnPinned = false;
                    unref(chat).showPinnedWindow = false;
                  }
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("\u041E\u0442\u043A\u0440\u0435\u043F\u0438\u0442\u044C"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043A\u0440\u0435\u043F\u0438\u0442\u044C")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                return [
                  createVNode("div", null, [
                    createVNode("p", { class: "text-lg tracking-wider" }, toDisplayString(_ctx.$t("\u041E\u0442\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u0432\u0441\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F?")), 1)
                  ]),
                  createVNode("div", { class: "flex mt-4 gap-x-4 justify-center" }, [
                    createVNode(_sfc_main$s, {
                      type: "chat",
                      onClick: ($event) => __props.showWarnPinned = false
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0430")), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_sfc_main$s, {
                      type: "chat",
                      onClick: ($event) => {
                        unref(chat).makePinned({ messages: unref(chat).arrayPin.filter((e) => e.id).map((e) => e.id) }).then((res) => unref(toast).info("\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u043E\u0442\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u044B", { autoClose: 1500, theme: "auto" }));
                        __props.showWarnPinned = false;
                        unref(chat).showPinnedWindow = false;
                      }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043A\u0440\u0435\u043F\u0438\u0442\u044C")), 1)
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
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/UI/Pinned/TheChatContentPinnedFooter.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "ChatContentUserPinned",
  __ssrInlineRender: true,
  setup(__props) {
    const chat = useChat();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["absolute z-[11] top-0 dark:bg-[#1F2937] bg-gray-300 right-0 h-full text-white transition-all duration-200", { "w-full": unref(chat).showPinnedWindow, "w-0": !unref(chat).showPinnedWindow }]
      }, _attrs))}><div class="flex flex-col h-full">`);
      _push(ssrRenderComponent(_sfc_main$f, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$g, { class: "h-full" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$e, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/ChatContent/ChatContentUserPinned.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="text-sm flex items-center gap-x-4 dark:hover:bg-gray-500 hover:bg-gray-300 px-3 py-1 cursor-pointer"><div>`);
  ssrRenderSlot(_ctx.$slots, "chatWindowSettingContentSvg", {}, null, _push, _parent);
  _push(`</div><p>`);
  ssrRenderSlot(_ctx.$slots, "chatWindowSettingContentText", {}, null, _push, _parent);
  _push(`</p></div></div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/ChatContent/ChatWindowSetting/ChatWindowSettingContent/ChatWindowSettingContentHeaderUI/ChatWindowSettingContentHeadersElems.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const ChatWindowSettingContentHeadersElems = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "ChatCropperFileInput",
  __ssrInlineRender: true,
  setup(__props) {
    const chat = useChat();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(chat).showImageChange) {
        _push(`<label${ssrRenderAttrs(mergeProps({
          for: "updateImage",
          class: "bg-black mx-auto flex justify-center items-center w-full h-full absolute z-20 rounded-full bg-opacity-40 cursor-pointer"
        }, _attrs))}><div><svg width="30px" height="30px" viewBox="0 -2 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g class="fill-white" id="Icon-Set-Filled" transform="translate(-258.000000, -467.000000)"><path d="M286,471 L283,471 L282,469 C281.411,467.837 281.104,467 280,467 L268,467 C266.896,467 266.53,467.954 266,469 L265,471 L262,471 C259.791,471 258,472.791 258,475 L258,491 C258,493.209 259.791,495 262,495 L286,495 C288.209,495 290,493.209 290,491 L290,475 C290,472.791 288.209,471 286,471 Z M274,491 C269.582,491 266,487.418 266,483 C266,478.582 269.582,475 274,475 C278.418,475 282,478.582 282,483 C282,487.418 278.418,491 274,491 Z M274,477 C270.687,477 268,479.687 268,483 C268,486.313 270.687,489 274,489 C277.313,489 280,486.313 280,483 C280,479.687 277.313,477 274,477 L274,477 Z" id="camera"></path></g></g></svg></div><input id="updateImage" class="hidden" type="file" accept=".webp, .png, .jpeg, .jpg"></label>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/UI/ChatCropperFileInput.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "ChatFileError",
  __ssrInlineRender: true,
  setup(__props) {
    const chat = useChat();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(chat).fileChecked) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "cursor-pointer" }, _attrs))}><div class="bg-black w-full h-full absolute top-0 left-0 bg-opacity-40 rounded-lg"></div><div class="absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center backdrop-blur-[2px]"><p class="dark:bg-gray-700 bg-gray-200 px-4 py-2 rounded-lg tracking-widest">${ssrInterpolate(_ctx.$t("\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u0444\u0430\u0439\u043B\u0430"))}</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/UI/ChatFileError.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "ChatWindowSettingContentHeaderChange",
  __ssrInlineRender: true,
  setup(__props) {
    const chat = useChat();
    const route = useRoute();
    const loadAuthStore = useAuthStore();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      if (unref(chat).showChatChangeInfo) {
        _push(`<div${ssrRenderAttrs(_attrs)}><div class="fixed w-screen h-screen top-0 left-0"></div><div class="bg-black w-full h-full absolute left-0 top-0 opacity-50"></div><div class="absolute dark:bg-gray-700 bg-gray-200 rounded-lg bottom-0 top-0 h-max left-0 right-0 w-10/12 mx-auto my-auto"><div class="p-4"><div class="pb-2"><p class="text-lg">${ssrInterpolate(_ctx.$t("\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0433\u0440\u0443\u043F\u043F\u044B"))}</p></div><div class="flex items-center gap-x-6 select-none"><div class="relative">`);
        _push(ssrRenderComponent(_sfc_main$b, null, null, _parent));
        if (!unref(chat).src && !unref(chat).results.image) {
          _push(`<div class="w-[80px] h-[80px] max-sm:w-[70px] max-sm:h-[70px]">`);
          if (((_a = unref(chat).get_user_chat.user) == null ? void 0 : _a.id) || unref(chat).get_user_chat.photo_url) {
            _push(`<img class="w-full rounded-full"${ssrRenderAttr("src", !unref(chat).get_user_chat.is_group ? unref(loadAuthStore).get_server_domain + ((_b = unref(chat).get_user_chat.user) == null ? void 0 : _b.photo) : unref(loadAuthStore).get_server_domain + ((_c = unref(chat).get_user_chat) == null ? void 0 : _c.photo_url))} alt="">`);
          } else {
            _push(`<div><div class="w-[80px] flex justify-center items-center text-xl h-[80px] rounded-full bg-blueSemiLight"><!--[-->`);
            ssrRenderList(unref(chat).get_user_chat.name.split(" ").slice(0, 2), (chatName) => {
              _push(`<p class="uppercase">${ssrInterpolate(chatName[0])}</p>`);
            });
            _push(`<!--]--></div></div>`);
          }
          _push(`</div>`);
        } else if (unref(chat).results.image) {
          _push(`<div>`);
          _push(ssrRenderComponent(unref(Preview), {
            class: "w-[80px] h-[80px] rounded-full",
            image: unref(chat).results.image,
            coordinates: unref(chat).results.coordinates
          }, null, _parent));
          _push(`</div>`);
        } else if (unref(chat).src && !unref(chat).results.image) {
          _push(`<div><img class="w-[80px] flex justify-center items-center text-xl h-[80px] rounded-full"${ssrRenderAttr("src", unref(chat).src)}></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div><div><p class="text-sm tracking-wider text-semiCyan">${ssrInterpolate(_ctx.$t("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0433\u0440\u0443\u043F\u043F\u044B"))}</p>`);
        _push(ssrRenderComponent(_sfc_main$r, {
          type: "default",
          modelValue: unref(chat).updateChatName,
          "onUpdate:modelValue": ($event) => unref(chat).updateChatName = $event,
          class: "bg-transparent bg-opacity-0 border-b-2 border-b-semiCyan outline-none"
        }, null, _parent));
        _push(`</div></div></div><div></div></div><div class="flex justify-end gap-x-2 p-4 !text-sm">`);
        _push(ssrRenderComponent(_sfc_main$s, {
          type: "chat",
          onClick: ($event) => {
            unref(chat).showChatChangeInfo = false;
            unref(chat).file = "";
            unref(chat).src = "";
            unref(chat).fileUpload = null;
            unref(chat).results = { image: null, coordinates: null };
            unref(chat).updateChatName = unref(chat).userChat.name;
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0430"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0430")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_sfc_main$s, {
          type: "chat",
          onClick: ($event) => {
            unref(chat).updateChatName !== unref(chat).userChat.name || unref(chat).updateDescription !== unref(chat).userChat.description || unref(chat).fileUpload ? unref(chat).chatUpdate({ id: unref(route).params.id, update: { name: unref(chat).updateChatName, description: "", photo: unref(chat).fileUpload } }).then((res) => {
              unref(chat).showChatChangeInfo = false;
              unref(chat).fileUpload = null;
              unref(chat).userChat.name = unref(chat).updateChatName;
              unref(chat).updateChatName = "";
            }) : unref(toast).info(_ctx.$t("\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u0434\u043B\u044F \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F"), { autoClose: 1500, theme: "auto" });
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_sfc_main$a, null, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/ChatContent/ChatWindowSetting/ChatWindowSettingContent/ChatWindowSettingContentHeaderUI/ChatWindowSettingContentHeaderChange.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "ChatWindowSettingContentHeader",
  __ssrInlineRender: true,
  setup(__props) {
    useAuthStore();
    const route = useRoute();
    const router = useRouter();
    const chat = useChat();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="p-4 flex justify-between tracking-wider items-center"><p class="tracking-widest">${ssrInterpolate(_ctx.$t("\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u0433\u0440\u0443\u043F\u043F\u0435"))}</p><div class="flex gap-x-4 items-center"><div class="${ssrRenderClass([{ "dark:bg-gray-500 bg-gray-200": unref(chat).showSettingChat }, "p-1 rounded-full transition-all duration-200 cursor-pointer dark:hover:bg-gray-500 hover:bg-gray-200"])}"><svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12H12.01M12 6H12.01M12 18H12.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>`);
      if (unref(chat).showSettingChat) {
        _push(`<div class="absolute top-10 right-16 py-1 dark:bg-gray-800 bg-gray-200 flex flex-col gap-y-2">`);
        _push(ssrRenderComponent(ChatWindowSettingContentHeadersElems, {
          onClick: ($event) => unref(chat).showGroupCreateChoice = true
        }, {
          chatWindowSettingContentSvg: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg class="stroke-black dark:stroke-white" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId}><title${_scopeId}>i</title><g id="Complete"${_scopeId}><g id="user-add"${_scopeId}><g${_scopeId}><path d="M17,21V19a4,4,0,0,0-4-4H5a4,4,0,0,0-4,4v2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${_scopeId}></path><circle cx="9" cy="7" r="4" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${_scopeId}></circle><line x1="17" y1="11" x2="23" y2="11" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${_scopeId}></line><line x1="20" y1="8" x2="20" y2="14" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${_scopeId}></line></g></g></g></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  class: "stroke-black dark:stroke-white",
                  width: "20px",
                  height: "20px",
                  viewBox: "0 0 24 24",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("title", null, "i"),
                  createVNode("g", { id: "Complete" }, [
                    createVNode("g", { id: "user-add" }, [
                      createVNode("g", null, [
                        createVNode("path", {
                          d: "M17,21V19a4,4,0,0,0-4-4H5a4,4,0,0,0-4,4v2",
                          fill: "none",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2"
                        }),
                        createVNode("circle", {
                          cx: "9",
                          cy: "7",
                          r: "4",
                          fill: "none",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2"
                        }),
                        createVNode("line", {
                          x1: "17",
                          y1: "11",
                          x2: "23",
                          y2: "11",
                          fill: "none",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2"
                        }),
                        createVNode("line", {
                          x1: "20",
                          y1: "8",
                          x2: "20",
                          y2: "14",
                          fill: "none",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2"
                        })
                      ])
                    ])
                  ])
                ]))
              ];
            }
          }),
          chatWindowSettingContentText: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(ChatWindowSettingContentHeadersElems, {
          onClick: ($event) => {
            unref(chat).showChatChangeInfo = true;
            unref(chat).showSettingChat = false;
            unref(chat).updateChatName = unref(chat).userChat.name;
          }
        }, {
          chatWindowSettingContentSvg: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg class="stroke-black dark:stroke-white" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M18.48 18.5368H21M4.68 12L3 12.044M4.68 12C4.68 13.3255 5.75451 14.4 7.08 14.4C8.40548 14.4 9.48 13.3255 9.48 12C9.48 10.6745 8.40548 9.6 7.08 9.6C5.75451 9.6 4.68 10.6745 4.68 12ZM10.169 12.0441H21M12.801 5.55124L3 5.55124M21 5.55124H18.48M3 18.5368H12.801M17.88 18.6C17.88 19.9255 16.8055 21 15.48 21C14.1545 21 13.08 19.9255 13.08 18.6C13.08 17.2745 14.1545 16.2 15.48 16.2C16.8055 16.2 17.88 17.2745 17.88 18.6ZM17.88 5.4C17.88 6.72548 16.8055 7.8 15.48 7.8C14.1545 7.8 13.08 6.72548 13.08 5.4C13.08 4.07452 14.1545 3 15.48 3C16.8055 3 17.88 4.07452 17.88 5.4Z" stroke-width="1.5" stroke-linecap="round"${_scopeId}></path></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  class: "stroke-black dark:stroke-white",
                  width: "20px",
                  height: "20px",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    d: "M18.48 18.5368H21M4.68 12L3 12.044M4.68 12C4.68 13.3255 5.75451 14.4 7.08 14.4C8.40548 14.4 9.48 13.3255 9.48 12C9.48 10.6745 8.40548 9.6 7.08 9.6C5.75451 9.6 4.68 10.6745 4.68 12ZM10.169 12.0441H21M12.801 5.55124L3 5.55124M21 5.55124H18.48M3 18.5368H12.801M17.88 18.6C17.88 19.9255 16.8055 21 15.48 21C14.1545 21 13.08 19.9255 13.08 18.6C13.08 17.2745 14.1545 16.2 15.48 16.2C16.8055 16.2 17.88 17.2745 17.88 18.6ZM17.88 5.4C17.88 6.72548 16.8055 7.8 15.48 7.8C14.1545 7.8 13.08 6.72548 13.08 5.4C13.08 4.07452 14.1545 3 15.48 3C16.8055 3 17.88 4.07452 17.88 5.4Z",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round"
                  })
                ]))
              ];
            }
          }),
          chatWindowSettingContentText: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0433\u0440\u0443\u043F\u043F\u043E\u0439"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0433\u0440\u0443\u043F\u043F\u043E\u0439")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(ChatWindowSettingContentHeadersElems, {
          class: "text-red-400",
          onClick: ($event) => {
            unref(chat).chatDelete({ id: unref(route).params.id }).then((res) => {
              unref(chat).showSettingChat = false;
              unref(chat).showGroupCreateChoice = false;
              unref(chat).showChatInfo = false;
              unref(router).push("/base/chat").then((response) => {
                unref(toast).success("\u0427\u0430\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0451\u043D", { theme: "auto", autoClose: 1e3 });
              });
            });
          }
        }, {
          chatWindowSettingContentSvg: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg class="stroke-red-400" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M10 12V17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M14 12V17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M4 7H20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  class: "stroke-red-400",
                  width: "20px",
                  height: "20px",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    d: "M10 12V17",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }),
                  createVNode("path", {
                    d: "M14 12V17",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }),
                  createVNode("path", {
                    d: "M4 7H20",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }),
                  createVNode("path", {
                    d: "M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }),
                  createVNode("path", {
                    d: "M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                ]))
              ];
            }
          }),
          chatWindowSettingContentText: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0433\u0440\u0443\u043F\u043F\u0443"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0433\u0440\u0443\u043F\u043F\u0443")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="cursor-pointer p-1.5 rounded-full transition-all duration-200"><svg class="dark:stroke-white stroke-black" width="20px" height="20px" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 21.32L21 3.32001" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 3.32001L21 21.32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div></div></div>`);
      _push(ssrRenderComponent(_sfc_main$9, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/ChatContent/ChatWindowSetting/ChatWindowSettingContent/ChatWindowSettingContentHeader.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "ChatWindowSettingContentMain",
  __ssrInlineRender: true,
  setup(__props) {
    const chat = useChat();
    const loadAuthStore = useAuthStore();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4" }, _attrs))}><div class="flex items-center tracking-wider gap-x-4"><div>`);
      if (((_a = unref(chat).get_user_chat.user) == null ? void 0 : _a.id) || unref(chat).get_user_chat.photo_url) {
        _push(`<img class="w-[80px] h-[80px] rounded-full"${ssrRenderAttr("src", !unref(chat).get_user_chat.is_group ? unref(loadAuthStore).get_server_domain + ((_b = unref(chat).get_user_chat.user) == null ? void 0 : _b.photo) : unref(loadAuthStore).get_server_domain + ((_c = unref(chat).get_user_chat) == null ? void 0 : _c.photo_url))} alt="">`);
      } else {
        _push(`<div><div class="w-[80px] flex justify-center items-center text-xl h-[80px] rounded-full bg-blueSemiLight"><!--[-->`);
        ssrRenderList(unref(chat).get_user_chat.name.split(" ").slice(0, 2), (chatName) => {
          _push(`<p class="uppercase">${ssrInterpolate(chatName[0])}</p>`);
        });
        _push(`<!--]--></div></div>`);
      }
      _push(`</div><div><p class="text-lg tracking-widest">${ssrInterpolate(unref(chat).get_user_chat.name)}</p><p class="text-sm text-gray-400">${ssrInterpolate(((_d = unref(chat).get_user_chat.users) == null ? void 0 : _d.length) + " " + _ctx.$t("\u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432"))}</p></div></div></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/ChatContent/ChatWindowSetting/ChatWindowSettingContent/ChatWindowSettingContentMain.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ChatWindowSettingContentUserList",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    useMouse();
    useWindowScroll();
    const isOpen = ref(false);
    const virtualElement = ref({ getBoundingClientRect: () => ({}) });
    const chat = useChat();
    const loadAuthStore = useAuthStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContextMenu = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="border-t cursor-pointer dark:hover:bg-gray-600 hover:bg-gray-300 transition-all duration-200 flex gap-x-2 border-black border-opacity-20 px-4 py-3"><div><svg class="fill-gray-600 dark:fill-gray-300" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459.863 459.863" xml:space="preserve"><g><g><g><path d="M395.988,193.977c-18.629,24.992-45.641,41.956-77.406,44.25c26.626,31.04,43.84,70.378,47.152,113.55
                c1.243,16.197,0.369,24.083-0.932,30.599c16.064-2.497,30.815-6.128,43.488-10.794c42.626-15.694,51.573-38.891,51.573-55.586
                C459.863,265.521,434.565,220.849,395.988,193.977z"></path><path d="M276.72,199.407c10.642,5.952,22.36,9.093,34.525,9.093c45.83,0,81.115-44.3,81.115-96.677
                c0-52.382-35.29-96.677-81.115-96.677c-18.734,0-36.411,7.436-50.724,21.145c20.03,25.65,31.446,59.072,31.446,94.667
                C291.967,154.544,286.961,178.037,276.72,199.407z"></path><path d="M259.999,226.279c-24.558,31.058-57.739,46.482-91.839,46.482c-36.232,0-68.69-17.206-91.839-46.482
                C30.403,256.333,0,308.217,0,367.076c0,18.127,9.926,43.389,57.213,60.8c29.496,10.861,68.898,16.841,110.947,16.841
                c42.049,0,81.451-5.98,110.947-16.841c47.287-17.411,57.213-42.673,57.213-60.8C336.32,308.217,305.918,256.333,259.999,226.279z
                "></path><path d="M168.16,242.763c53.003,0,93.806-51.234,93.806-111.804c0-60.571-40.808-111.804-93.806-111.804
                c-52.995,0-93.806,51.223-93.806,111.804C74.354,191.541,115.169,242.763,168.16,242.763z"></path></g></g></g></svg></div><p class="uppercase text-[12px] tracking-wider ml-4">${ssrInterpolate(unref(chat).get_user_chat.users.length + " ")}<span>${ssrInterpolate(_ctx.$t("\u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432"))}</span></p></div><div class="dark:bg-gray-800 bg-gray-200 flex flex-col gap-y-3 py-4 h-[300px] overflow-y-auto"><!--[-->`);
      ssrRenderList(unref(chat).get_user_chat.users, (item) => {
        _push(`<div class="flex bg-transparent border-none gap-x-4 items-center w-full dark:hover:bg-gray-600 hover:bg-gray-300 cursor-pointer transition-all px-5"><div>`);
        if ((item == null ? void 0 : item.id) || item.is_group) {
          _push(`<img class="w-[45px] h-[45px] rounded-full"${ssrRenderAttr("src", unref(loadAuthStore).get_server_domain + (item == null ? void 0 : item.photo))} alt="">`);
        } else {
          _push(`<div class="rounded-full bg-blueSemiLight flex items-center justify-center w-[45px] h-[45px]"><svg class="stroke-white" width="30px" height="30px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.507 19.853V6.034C18.5116 5.49905 18.3034 4.98422 17.9283 4.60277C17.5532 4.22131 17.042 4.00449 16.507 4H8.50705C7.9721 4.00449 7.46085 4.22131 7.08577 4.60277C6.7107 4.98422 6.50252 5.49905 6.50705 6.034V19.853C6.45951 20.252 6.65541 20.6407 7.00441 20.8399C7.35342 21.039 7.78773 21.0099 8.10705 20.766L11.907 17.485C12.2496 17.1758 12.7705 17.1758 13.113 17.485L16.9071 20.767C17.2265 21.0111 17.6611 21.0402 18.0102 20.8407C18.3593 20.6413 18.5551 20.2522 18.507 19.853Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>`);
        }
        _push(`</div><div class="w-9/12 break-words"><p class="text-[12px] tracking-widest">${ssrInterpolate((item == null ? void 0 : item.id) && !item.is_group ? (item == null ? void 0 : item.first_name) + " " + (item == null ? void 0 : item.last_name) : item.name)}</p></div></div>`);
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_UContextMenu, {
        onContextmenu: () => {
        },
        modelValue: unref(isOpen),
        "onUpdate:modelValue": ($event) => isRef(isOpen) ? isOpen.value = $event : null,
        "virtual-element": unref(virtualElement)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$o, {
              onClick: ($event) => {
                var _a;
                unref(router).push(`/base/chat/${(_a = _ctx.item) == null ? void 0 : _a.id}`);
                isOpen.value = false;
              }
            }, {
              ContextMenuSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg class="dark:stroke-white stroke-black" width="23px" height="23px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><circle opacity="0.5" cx="12" cy="9" r="3" stroke-width="1.2"${_scopeId2}></circle><circle cx="12" cy="12" r="10" stroke-width="1"${_scopeId2}></circle><path opacity="0.5" d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20" stroke-width="1.2" stroke-linecap="round"${_scopeId2}></path></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      class: "dark:stroke-white stroke-black",
                      width: "23px",
                      height: "23px",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("circle", {
                        opacity: "0.5",
                        cx: "12",
                        cy: "9",
                        r: "3",
                        "stroke-width": "1.2"
                      }),
                      createVNode("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        "stroke-width": "1"
                      }),
                      createVNode("path", {
                        opacity: "0.5",
                        d: "M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20",
                        "stroke-width": "1.2",
                        "stroke-linecap": "round"
                      })
                    ]))
                  ];
                }
              }),
              ContextMenuText: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0447\u0430\u0442"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0447\u0430\u0442")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$o, null, {
              ContextMenuSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg class="dark:stroke-white stroke-black" width="23px" height="23px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path data-v-a06cf116="" d="M10 12V17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}></path><path data-v-a06cf116="" d="M14 12V17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}></path><path data-v-a06cf116="" d="M4 7H20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}></path><path data-v-a06cf116="" d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}></path><path data-v-a06cf116="" d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}></path></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      class: "dark:stroke-white stroke-black",
                      width: "23px",
                      height: "23px",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", {
                        "data-v-a06cf116": "",
                        d: "M10 12V17",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        "data-v-a06cf116": "",
                        d: "M14 12V17",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        "data-v-a06cf116": "",
                        d: "M4 7H20",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        "data-v-a06cf116": "",
                        d: "M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        "data-v-a06cf116": "",
                        d: "M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ]))
                  ];
                }
              }),
              ContextMenuText: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("\u0423\u0434\u0430\u043B\u0438\u0442\u044C"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("\u0423\u0434\u0430\u043B\u0438\u0442\u044C")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$o, {
                onClick: ($event) => {
                  var _a;
                  unref(router).push(`/base/chat/${(_a = _ctx.item) == null ? void 0 : _a.id}`);
                  isOpen.value = false;
                }
              }, {
                ContextMenuSvg: withCtx(() => [
                  (openBlock(), createBlock("svg", {
                    class: "dark:stroke-white stroke-black",
                    width: "23px",
                    height: "23px",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("circle", {
                      opacity: "0.5",
                      cx: "12",
                      cy: "9",
                      r: "3",
                      "stroke-width": "1.2"
                    }),
                    createVNode("circle", {
                      cx: "12",
                      cy: "12",
                      r: "10",
                      "stroke-width": "1"
                    }),
                    createVNode("path", {
                      opacity: "0.5",
                      d: "M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20",
                      "stroke-width": "1.2",
                      "stroke-linecap": "round"
                    })
                  ]))
                ]),
                ContextMenuText: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0447\u0430\u0442")), 1)
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_sfc_main$o, null, {
                ContextMenuSvg: withCtx(() => [
                  (openBlock(), createBlock("svg", {
                    class: "dark:stroke-white stroke-black",
                    width: "23px",
                    height: "23px",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      "data-v-a06cf116": "",
                      d: "M10 12V17",
                      "stroke-width": "1.5",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }),
                    createVNode("path", {
                      "data-v-a06cf116": "",
                      d: "M14 12V17",
                      "stroke-width": "1.5",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }),
                    createVNode("path", {
                      "data-v-a06cf116": "",
                      d: "M4 7H20",
                      "stroke-width": "1.5",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }),
                    createVNode("path", {
                      "data-v-a06cf116": "",
                      d: "M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10",
                      "stroke-width": "1.5",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }),
                    createVNode("path", {
                      "data-v-a06cf116": "",
                      d: "M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z",
                      "stroke-width": "1.5",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    })
                  ]))
                ]),
                ContextMenuText: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("\u0423\u0434\u0430\u043B\u0438\u0442\u044C")), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/ChatContent/ChatWindowSetting/ChatWindowSettingContent/ChatWindowSettingContentUserList.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ChatWindowSettingContent",
  __ssrInlineRender: true,
  setup(__props) {
    useChat();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$8, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$7, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/ChatContent/ChatWindowSetting/ChatWindowSettingContent.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="text-sm tracking-wider flex items-center gap-x-4 dark:hover:bg-gray-500 hover:bg-gray-300 px-3 py-1 cursor-pointer"><div>`);
  ssrRenderSlot(_ctx.$slots, "chatWindowSettingContentSvg", {}, null, _push, _parent);
  _push(`</div><p class="">`);
  ssrRenderSlot(_ctx.$slots, "chatWindowSettingContentText", {}, null, _push, _parent);
  _push(`</p></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/UI/ChatChangeWindowElem.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ChatChangeWindowElem = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ChatChangeWindow",
  __ssrInlineRender: true,
  setup(__props) {
    const chat = useChat();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><div class="${ssrRenderClass([{ "dark:bg-gray-500 bg-gray-200": unref(chat).showChangeWindowChat }, "p-1 rounded-full transition-all duration-200 cursor-pointer dark:hover:bg-gray-500 hover:bg-gray-200"])}"><svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12H12.01M12 6H12.01M12 18H12.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>`);
      if (unref(chat).showChangeWindowChat) {
        _push(`<div class="absolute top-14 right-8 z-50 dark:bg-gray-600 bg-gray-200 border border-gray-300 dark:border dark:border-gray-500">`);
        if (unref(chat).get_user_chat.is_group) {
          _push(ssrRenderComponent(ChatChangeWindowElem, {
            onClick: ($event) => unref(chat).showChatInfo = true
          }, {
            chatWindowSettingContentSvg: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<svg class="dark:fill-white fill-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75Z"${_scopeId}></path><path d="M12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z"${_scopeId}></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75Z"${_scopeId}></path></svg>`);
              } else {
                return [
                  (openBlock(), createBlock("svg", {
                    class: "dark:fill-white fill-black",
                    width: "25px",
                    height: "25px",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", { d: "M12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75Z" }),
                    createVNode("path", { d: "M12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z" }),
                    createVNode("path", {
                      "fill-rule": "evenodd",
                      "clip-rule": "evenodd",
                      d: "M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75Z"
                    })
                  ]))
                ];
              }
            }),
            chatWindowSettingContentText: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u0433\u0440\u0443\u043F\u043F\u0435"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u0433\u0440\u0443\u043F\u043F\u0435")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(ssrRenderComponent(ChatChangeWindowElem, {
            onClick: ($event) => unref(chat).showChatInfo = true
          }, {
            chatWindowSettingContentSvg: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><circle opacity="0.5" cx="12" cy="9" r="3" stroke-width="1"${_scopeId}></circle><circle cx="12" cy="12" r="10" stroke-width="1"${_scopeId}></circle><path opacity="0.5" d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20" stroke-width="1" stroke-linecap="round"${_scopeId}></path></svg>`);
              } else {
                return [
                  (openBlock(), createBlock("svg", {
                    class: "dark:stroke-white stroke-black",
                    width: "25px",
                    height: "25px",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("circle", {
                      opacity: "0.5",
                      cx: "12",
                      cy: "9",
                      r: "3",
                      "stroke-width": "1"
                    }),
                    createVNode("circle", {
                      cx: "12",
                      cy: "12",
                      r: "10",
                      "stroke-width": "1"
                    }),
                    createVNode("path", {
                      opacity: "0.5",
                      d: "M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20",
                      "stroke-width": "1",
                      "stroke-linecap": "round"
                    })
                  ]))
                ];
              }
            }),
            chatWindowSettingContentText: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u0440\u043E\u0444\u0438\u043B\u044C"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u0440\u043E\u0444\u0438\u043B\u044C")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        }
        if (unref(chat).get_user_chat.is_group) {
          _push(ssrRenderComponent(ChatChangeWindowElem, {
            onClick: ($event) => {
              unref(chat).showChatChangeInfoModal = true;
              unref(chat).updateChatName = unref(chat).userChat.name;
            }
          }, {
            chatWindowSettingContentSvg: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><circle opacity="0.5" cx="12" cy="9" r="3" stroke-width="1"${_scopeId}></circle><circle cx="12" cy="12" r="10" stroke-width="1"${_scopeId}></circle><path opacity="0.5" d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20" stroke-width="1" stroke-linecap="round"${_scopeId}></path></svg>`);
              } else {
                return [
                  (openBlock(), createBlock("svg", {
                    class: "dark:stroke-white stroke-black",
                    width: "25px",
                    height: "25px",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("circle", {
                      opacity: "0.5",
                      cx: "12",
                      cy: "9",
                      r: "3",
                      "stroke-width": "1"
                    }),
                    createVNode("circle", {
                      cx: "12",
                      cy: "12",
                      r: "10",
                      "stroke-width": "1"
                    }),
                    createVNode("path", {
                      opacity: "0.5",
                      d: "M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20",
                      "stroke-width": "1",
                      "stroke-linecap": "round"
                    })
                  ]))
                ];
              }
            }),
            chatWindowSettingContentText: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0433\u0440\u0443\u043F\u043F\u043E\u0439"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0433\u0440\u0443\u043F\u043F\u043E\u0439")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/UI/ChatChangeWindow.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ChatUploadWindow",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const chat = useChat();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      if (unref(chat).showUploadWindow && unref(chat).file.size > 0) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed left-0 top-0 h-screen w-screen flex justify-center items-center z-[110] backdrop-blur-sm" }, _attrs))}><div class="opacity-60 bg-black absolute left-0 top-0 w-screen h-screen backdrop-blur"></div><div class="!w-max dark:!bg-gray-700 bg-white rounded-lg relative p-5 max-sm:p-3 overflow-y-auto">`);
        if (!unref(chat).messageUpdate.file) {
          _push(`<p class="tracking-widest">${ssrInterpolate(_ctx.$t("\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043A\u0430\u043A \u0444\u0430\u0439\u043B"))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex gap-x-12 mt-6"><div class="flex gap-x-4"><div class="bg-blueSemiLight rounded-full p-3"><svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.23869 2 10.0298 2C10.6358 2 11.1214 2 11.53 2.01666C11.5166 2.09659 11.5095 2.17813 11.5092 2.26057L11.5 5.09497C11.4999 6.19207 11.4998 7.16164 11.6049 7.94316C11.7188 8.79028 11.9803 9.63726 12.6716 10.3285C13.3628 11.0198 14.2098 11.2813 15.0569 11.3952C15.8385 11.5003 16.808 11.5002 17.9051 11.5001L18 11.5001H21.9574C22 12.0344 22 12.6901 22 13.5629V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22Z" fill="#1C274C"></path></g><path d="M11.5092 2.2601L11.5 5.0945C11.4999 6.1916 11.4998 7.16117 11.6049 7.94269C11.7188 8.78981 11.9803 9.6368 12.6716 10.3281C13.3629 11.0193 14.2098 11.2808 15.057 11.3947C15.8385 11.4998 16.808 11.4997 17.9051 11.4996L21.9574 11.4996C21.9698 11.6552 21.9786 11.821 21.9848 11.9995H22C22 11.732 22 11.5983 21.9901 11.4408C21.9335 10.5463 21.5617 9.52125 21.0315 8.79853C20.9382 8.6713 20.8743 8.59493 20.7467 8.44218C19.9542 7.49359 18.911 6.31193 18 5.49953C17.1892 4.77645 16.0787 3.98536 15.1101 3.3385C14.2781 2.78275 13.862 2.50487 13.2915 2.29834C13.1403 2.24359 12.9408 2.18311 12.7846 2.14466C12.4006 2.05013 12.0268 2.01725 11.5 2.00586L11.5092 2.2601Z" fill="#1C274C"></path></svg></div><div class="break-words"><p>${ssrInterpolate(((_a = unref(chat).file.name) == null ? void 0 : _a.length) > 25 ? unref(chat).file.name.slice(0, 20) + "..." + unref(chat).file.name.substr(-5) : unref(chat).file.name)}</p><p class="text-gray-500 font-bold text-sm">${ssrInterpolate(unref(chat).file.size < 1e3 ? unref(chat).file.size + " " + _ctx.$t("\u0411") : unref(chat).file.size + " " + _ctx.$t("\u041A\u0411"))}</p></div></div><div><svg class="stroke-white" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 12V17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 12V17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 7H20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div></div><div class="my-2"><p class="text-sm tracking-wider text-semiCyan">${ssrInterpolate(_ctx.$t("\u041F\u043E\u0434\u043F\u0438\u0441\u044C"))}</p>`);
        if (!unref(chat).messageUpdate.file) {
          _push(ssrRenderComponent(_sfc_main$r, {
            type: "default",
            modelValue: unref(chat).signature,
            "onUpdate:modelValue": ($event) => unref(chat).signature = $event,
            class: "bg-transparent bg-opacity-0 border-b-2 border-b-semiCyan outline-none"
          }, null, _parent));
        } else {
          _push(ssrRenderComponent(_sfc_main$r, {
            type: "default",
            modelValue: unref(chat).messageUpdate.updateText,
            "onUpdate:modelValue": ($event) => unref(chat).messageUpdate.updateText = $event,
            class: "bg-transparent bg-opacity-0 border-b-2 border-b-semiCyan outline-none"
          }, null, _parent));
        }
        _push(`</div><div class="flex justify-end text-sm">`);
        _push(ssrRenderComponent(_sfc_main$s, {
          type: "chat",
          onClick: ($event) => {
            unref(chat).showUploadWindow = false;
            unref(chat).file = "";
            unref(chat).src = "";
            unref(chat).signature = "";
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0430"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0430")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        if (!unref(chat).messageUpdate.file) {
          _push(ssrRenderComponent(_sfc_main$s, {
            type: "chat",
            onClick: ($event) => {
              unref(chat).createMessage({ id: unref(route).params.id, file: unref(chat).file, text: unref(chat).signature }).then((res) => {
                unref(chat).showUploadWindow = false;
                unref(chat).file = "";
                unref(chat).src = "";
                unref(chat).signature = "";
              });
            }
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(ssrRenderComponent(_sfc_main$s, {
            type: "chat",
            onClick: ($event) => {
              unref(chat).updateMessage({ id: unref(chat).messageUpdate.id, text: unref(chat).messageUpdate.updateText }).then((res) => {
                unref(chat).showUploadWindow = false;
                unref(chat).file = "";
                unref(chat).src = "";
                unref(chat).signature = "";
              });
            }
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        }
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/UI/Upload/ChatUploadWindow.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ChatUploadError",
  __ssrInlineRender: true,
  setup(__props) {
    const chat = useChat();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(chat).fileSizeInfo) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "absolute top-0 bottom-0 left-0 right-0 z-20 w-full my-auto mx-auto flex justify-center items-center backdrop-blur-sm" }, _attrs))}><div class="dark:bg-black dark:bg-opacity-70 bg-gray-200 p-4 text-center break-words rounded-lg"><p>${ssrInterpolate(_ctx.$t("\u041D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043F\u0443\u0441\u0442\u043E\u0439 \u0444\u0430\u0439\u043B"))}: <span>${ssrInterpolate(unref(chat).file.name)}</span></p></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/UI/Upload/ChatUploadError.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  props: {
    activeNav: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    const loadAuthStore = useAuthStore();
    const route = useRoute();
    useRouter();
    const chat = useChat();
    useSeoMeta({
      title: "\u0427\u0430\u0442"
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full w-full" }, _attrs))}><div class="w-full flex items-center border-l max-h-[8%] max-md:pt-3 max-md:px-14 max-sm:px-2 h-[100px] px-10 border-black dark:border-opacity-20 border-opacity-10 bg-gray-200 dark:bg-gray-700">`);
      if (!unref(chat).get_user_chat.user && !unref(chat).get_user_chat.is_group || ((_a = unref(chat).get_user_chat.users) == null ? void 0 : _a.id)) {
        _push(`<div class="flex gap-x-4 justify-center relative items-center mb-2">`);
        _push(ssrRenderComponent(Sceleton, {
          class: "opacity-50",
          width: "40px",
          height: "40px",
          "border-radius": "100%"
        }, null, _parent));
        _push(ssrRenderComponent(Sceleton, {
          class: "opacity-50",
          width: "150px",
          height: "10px",
          "border-radius": "4px"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="flex items-center justify-between w-full"><div class="flex items-center gap-x-2 cursor-pointer"><div class="hidden max-md:block"><svg class="dark:fill-gray-400 fill-black" width="30px" height="30px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M604.7 759.2l61.8-61.8L481.1 512l185.4-185.4-61.8-61.8L357.5 512z"></path></svg></div>`);
        if (((_b = unref(chat).get_user_chat.user) == null ? void 0 : _b.id) || unref(chat).get_user_chat.photo_url) {
          _push(`<img class="w-[40px] h-[40px] rounded-full"${ssrRenderAttr("src", !unref(chat).get_user_chat.is_group ? unref(loadAuthStore).get_server_domain + ((_c = unref(chat).get_user_chat.user) == null ? void 0 : _c.photo) : unref(loadAuthStore).get_server_domain + ((_d = unref(chat).get_user_chat) == null ? void 0 : _d.photo_url))} alt="">`);
        } else {
          _push(`<div class="rounded-full bg-blueSemiLight flex items-center justify-center w-[42px] h-[42px]">`);
          if (!unref(chat).get_user_chat.photo_url && !unref(chat).get_user_chat.is_group) {
            _push(`<svg class="stroke-white" width="32px" height="32px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.507 19.853V6.034C18.5116 5.49905 18.3034 4.98422 17.9283 4.60277C17.5532 4.22131 17.042 4.00449 16.507 4H8.50705C7.9721 4.00449 7.46085 4.22131 7.08577 4.60277C6.7107 4.98422 6.50252 5.49905 6.50705 6.034V19.853C6.45951 20.252 6.65541 20.6407 7.00441 20.8399C7.35342 21.039 7.78773 21.0099 8.10705 20.766L11.907 17.485C12.2496 17.1758 12.7705 17.1758 13.113 17.485L16.9071 20.767C17.2265 21.0111 17.6611 21.0402 18.0102 20.8407C18.3593 20.6413 18.5551 20.2522 18.507 19.853Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
          } else {
            _push(`<!--[-->`);
            ssrRenderList(unref(chat).get_user_chat.name.split(" ").slice(0, 2), (chatName) => {
              _push(`<p class="uppercase font-bold">${ssrInterpolate(chatName[0])}</p>`);
            });
            _push(`<!--]-->`);
          }
          _push(`</div>`);
        }
        if (!unref(chat).get_user_chat.is_group) {
          _push(`<p>${ssrInterpolate(((_e = unref(chat).get_user_chat.user) == null ? void 0 : _e.last_name) === "" ? _ctx.$t("\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435") : ((_f = unref(chat).get_user_chat.user) == null ? void 0 : _f.first_name) + " " + ((_g = unref(chat).get_user_chat.user) == null ? void 0 : _g.last_name))}</p>`);
        } else {
          _push(`<p>${ssrInterpolate(((_h = unref(chat).get_user_chat) == null ? void 0 : _h.name.length) > 30 ? ((_i = unref(chat).get_user_chat) == null ? void 0 : _i.name.slice(0, 30)) + "..." : (_j = unref(chat).get_user_chat) == null ? void 0 : _j.name)}</p>`);
        }
        _push(`</div>`);
        _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$d, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$h, null, null, _parent));
      if (unref(chat).showChatInfo && ((_k = unref(chat).userChat) == null ? void 0 : _k.is_group)) {
        _push(ssrRenderComponent(_sfc_main$q, {
          type: "resizeInfoWindow",
          onShowModal: ($event) => {
            unref(chat).showChatInfo = false;
            unref(chat).showSettingChat = false;
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$5, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$5)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(chat).showChatChangeInfoModal) {
        _push(ssrRenderComponent(_sfc_main$q, {
          type: "resize",
          onShowModal: ($event) => {
            unref(chat).showChatChangeInfoModal = false;
            unref(chat).file = "";
            unref(chat).src = "";
            unref(chat).fileUpload = null;
            unref(chat).results = { image: null, coordinates: null };
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b2, _c2, _d2, _e2, _f2;
            if (_push2) {
              _push2(`<div class="dark:bg-gray-700 rounded-lg h-max relative mx-auto my-auto"${_scopeId}><div class=""${_scopeId}><p class="text-lg"${_scopeId}>${ssrInterpolate(_ctx.$t("\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0433\u0440\u0443\u043F\u043F\u044B"))}</p></div><div class="py-1 flex items-center gap-x-6 select-none"${_scopeId}><div class="relative"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$b, null, null, _parent2, _scopeId));
              if (!unref(chat).src && !unref(chat).results.image) {
                _push2(`<div${_scopeId}>`);
                if (((_a2 = unref(chat).get_user_chat.user) == null ? void 0 : _a2.id) || unref(chat).get_user_chat.photo_url) {
                  _push2(`<img class="w-[80px] h-[80px] rounded-full"${ssrRenderAttr("src", !unref(chat).get_user_chat.is_group ? unref(loadAuthStore).get_server_domain + ((_b2 = unref(chat).get_user_chat.user) == null ? void 0 : _b2.photo) : unref(loadAuthStore).get_server_domain + ((_c2 = unref(chat).get_user_chat) == null ? void 0 : _c2.photo_url))} alt=""${_scopeId}>`);
                } else {
                  _push2(`<div${_scopeId}><div class="w-[80px] flex justify-center items-center text-xl h-[80px] rounded-full bg-blueSemiLight"${_scopeId}><!--[-->`);
                  ssrRenderList(unref(chat).get_user_chat.name.split(" ").slice(0, 2), (chatName) => {
                    _push2(`<p class="uppercase"${_scopeId}>${ssrInterpolate(chatName[0])}</p>`);
                  });
                  _push2(`<!--]--></div></div>`);
                }
                _push2(`</div>`);
              } else if (unref(chat).results.image) {
                _push2(`<div${_scopeId}>`);
                _push2(ssrRenderComponent(unref(Preview), {
                  class: "w-[80px] h-[80px] rounded-full",
                  image: unref(chat).results.image,
                  coordinates: unref(chat).results.coordinates
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else if (unref(chat).src && !unref(chat).results.image) {
                _push2(`<div${_scopeId}><img class="w-[80px] flex justify-center items-center text-xl h-[80px] rounded-full"${ssrRenderAttr("src", unref(chat).src)}${_scopeId}></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div${_scopeId}><div${_scopeId}><p class="text-sm tracking-wider text-semiCyan"${_scopeId}>${ssrInterpolate(_ctx.$t("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0433\u0440\u0443\u043F\u043F\u044B"))}</p>`);
              _push2(ssrRenderComponent(_sfc_main$r, {
                type: "default",
                modelValue: unref(chat).updateChatName,
                "onUpdate:modelValue": ($event) => unref(chat).updateChatName = $event,
                class: "bg-transparent bg-opacity-0 border-b-2 border-b-semiCyan outline-none"
              }, null, _parent2, _scopeId));
              _push2(`</div></div></div><div class="flex justify-end gap-x-2 !text-sm"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$s, {
                type: "chat",
                onClick: ($event) => {
                  unref(chat).showChatChangeInfoModal = false;
                  unref(chat).file = "";
                  unref(chat).src = "";
                  unref(chat).fileUpload = null;
                  unref(chat).results = { image: null, coordinates: null };
                }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0430"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0430")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$s, {
                type: "chat",
                onClick: ($event) => {
                  unref(chat).updateChatName !== unref(chat).userChat.name || unref(chat).updateDescription !== unref(chat).userChat.description || unref(chat).fileUpload ? unref(chat).chatUpdate({ id: unref(route).params.id, update: { name: unref(chat).updateChatName, description: "", photo: unref(chat).fileUpload } }).then((res) => {
                    unref(chat).showChatChangeInfoModal = false;
                    unref(chat).fileUpload = null;
                    unref(chat).userChat.name = unref(chat).updateChatName;
                    unref(chat).updateChatName = "";
                  }) : unref(toast).info(_ctx.$t("\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u0434\u043B\u044F \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F"), { autoClose: 1500, theme: "auto" });
                }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
              _push2(ssrRenderComponent(_sfc_main$a, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("div", { class: "dark:bg-gray-700 rounded-lg h-max relative mx-auto my-auto" }, [
                  createVNode("div", { class: "" }, [
                    createVNode("p", { class: "text-lg" }, toDisplayString(_ctx.$t("\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0433\u0440\u0443\u043F\u043F\u044B")), 1)
                  ]),
                  createVNode("div", { class: "py-1 flex items-center gap-x-6 select-none" }, [
                    createVNode("div", {
                      class: "relative",
                      onMouseenter: ($event) => unref(chat).showImageChange = true,
                      onMouseleave: ($event) => unref(chat).showImageChange = false
                    }, [
                      createVNode(Transition, { name: "fade" }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$b)
                        ]),
                        _: 1
                      }),
                      !unref(chat).src && !unref(chat).results.image ? (openBlock(), createBlock("div", { key: 0 }, [
                        ((_d2 = unref(chat).get_user_chat.user) == null ? void 0 : _d2.id) || unref(chat).get_user_chat.photo_url ? (openBlock(), createBlock("img", {
                          key: 0,
                          class: "w-[80px] h-[80px] rounded-full",
                          src: !unref(chat).get_user_chat.is_group ? unref(loadAuthStore).get_server_domain + ((_e2 = unref(chat).get_user_chat.user) == null ? void 0 : _e2.photo) : unref(loadAuthStore).get_server_domain + ((_f2 = unref(chat).get_user_chat) == null ? void 0 : _f2.photo_url),
                          alt: ""
                        }, null, 8, ["src"])) : (openBlock(), createBlock("div", { key: 1 }, [
                          createVNode("div", { class: "w-[80px] flex justify-center items-center text-xl h-[80px] rounded-full bg-blueSemiLight" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(chat).get_user_chat.name.split(" ").slice(0, 2), (chatName) => {
                              return openBlock(), createBlock("p", {
                                class: "uppercase",
                                onClick: ($event) => console.log(chatName[0])
                              }, toDisplayString(chatName[0]), 9, ["onClick"]);
                            }), 256))
                          ])
                        ]))
                      ])) : unref(chat).results.image ? (openBlock(), createBlock("div", { key: 1 }, [
                        createVNode(unref(Preview), {
                          class: "w-[80px] h-[80px] rounded-full",
                          image: unref(chat).results.image,
                          coordinates: unref(chat).results.coordinates
                        }, null, 8, ["image", "coordinates"])
                      ])) : unref(chat).src && !unref(chat).results.image ? (openBlock(), createBlock("div", { key: 2 }, [
                        createVNode("img", {
                          class: "w-[80px] flex justify-center items-center text-xl h-[80px] rounded-full",
                          src: unref(chat).src
                        }, null, 8, ["src"])
                      ])) : createCommentVNode("", true)
                    ], 40, ["onMouseenter", "onMouseleave"]),
                    createVNode("div", null, [
                      createVNode("div", null, [
                        createVNode("p", { class: "text-sm tracking-wider text-semiCyan" }, toDisplayString(_ctx.$t("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0433\u0440\u0443\u043F\u043F\u044B")), 1),
                        createVNode(_sfc_main$r, {
                          type: "default",
                          modelValue: unref(chat).updateChatName,
                          "onUpdate:modelValue": ($event) => unref(chat).updateChatName = $event,
                          class: "bg-transparent bg-opacity-0 border-b-2 border-b-semiCyan outline-none"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "flex justify-end gap-x-2 !text-sm" }, [
                    createVNode(_sfc_main$s, {
                      type: "chat",
                      onClick: ($event) => {
                        unref(chat).showChatChangeInfoModal = false;
                        unref(chat).file = "";
                        unref(chat).src = "";
                        unref(chat).fileUpload = null;
                        unref(chat).results = { image: null, coordinates: null };
                      }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("\u041E\u0442\u043C\u0435\u043D\u0430")), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_sfc_main$s, {
                      type: "chat",
                      onClick: ($event) => {
                        unref(chat).updateChatName !== unref(chat).userChat.name || unref(chat).updateDescription !== unref(chat).userChat.description || unref(chat).fileUpload ? unref(chat).chatUpdate({ id: unref(route).params.id, update: { name: unref(chat).updateChatName, description: "", photo: unref(chat).fileUpload } }).then((res) => {
                          unref(chat).showChatChangeInfoModal = false;
                          unref(chat).fileUpload = null;
                          unref(chat).userChat.name = unref(chat).updateChatName;
                          unref(chat).updateChatName = "";
                        }) : unref(toast).info(_ctx.$t("\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u0434\u043B\u044F \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F"), { autoClose: 1500, theme: "auto" });
                      }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ]),
                createVNode(_sfc_main$a)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(chat).showChatGallery) {
        _push(`<div class="fixed left-0 top-0 h-screen w-screen flex justify-center items-center z-[110]"><div class="opacity-60 bg-black absolute left-0 top-0 w-screen h-screen"></div><div class="bg-gray-300 w-20 h-20"></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base/chat/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-Wlj_cIO2.mjs.map
