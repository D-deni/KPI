import { z as useAppConfig, v as mergeConfig, x as appConfig, A as useDebounceFn, B as computedAsync, s as defineStore, o as useMouse, q as useWindowScroll, r as useSeoMeta } from "../server.mjs";
import { defineComponent, computed, mergeProps, useSSRContext, toRef, ref, watch, watchEffect, onMounted, cloneVNode, h as h$1, Fragment, inject, provide, reactive, onUnmounted, nextTick, toRaw, getCurrentInstance, resolveComponent, createVNode, resolveDynamicComponent, withCtx, renderSlot, openBlock, createBlock, createCommentVNode, toDisplayString, renderList, createTextVNode, Transition, onUpdated, unref, isRef, withModifiers, withDirectives, vModelText } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderSlot, ssrRenderVNode, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { _ as __nuxt_component_0$1 } from "./ContextMenu-h79wOi0R.js";
import __nuxt_component_0 from "./Icon-8OpWvKRl.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-yVxbj29m.js";
import { twMerge, twJoin } from "tailwind-merge";
import { u as useUI, b as usePopper, s as selectMenu, g as get } from "./selectMenu-J8vdu0Jm.js";
import { defu } from "defu";
import { useVirtualizer } from "@tanstack/vue-virtual";
import { a as axios } from "./axios-jpYG50U2.js";
import { toast } from "vue3-toastify";
import nuxtStorage from "nuxt-storage/nuxt-storage.js";
import { u as useAuthStore } from "./auth-ltfjqTsG.js";
import { useRouter } from "vue-router";
import { _ as _sfc_main$d } from "./TheTextContent-rN29GJom.js";
import { _ as _sfc_main$c } from "./TheModal-1X0PcTyA.js";
import { _ as _sfc_main$e } from "./TheInput-6xiMcCQ9.js";
import { _ as _sfc_main$f } from "./TheButton-Jrv5tshN.js";
import "vscode-languageserver-protocol";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "h3";
import "destr";
import "klona";
import "@vue/devtools-api";
import "devalue";
import "cookie-es";
import "ohash";
import "@sindresorhus/slugify";
import "animejs";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "./index-t-YpRPIN.js";
import "axios";
const avatar = {
  wrapper: "relative inline-flex items-center justify-center flex-shrink-0",
  background: "bg-gray-100 dark:bg-gray-800",
  rounded: "rounded-full",
  text: "font-medium leading-none text-gray-900 dark:text-white truncate",
  placeholder: "font-medium leading-none text-gray-500 dark:text-gray-400 truncate",
  size: {
    "3xs": "h-4 w-4 text-[8px]",
    "2xs": "h-5 w-5 text-[10px]",
    xs: "h-6 w-6 text-xs",
    sm: "h-8 w-8 text-sm",
    md: "h-10 w-10 text-base",
    lg: "h-12 w-12 text-lg",
    xl: "h-14 w-14 text-xl",
    "2xl": "h-16 w-16 text-2xl",
    "3xl": "h-20 w-20 text-3xl"
  },
  chip: {
    base: "absolute rounded-full ring-1 ring-white dark:ring-gray-900 flex items-center justify-center text-white dark:text-gray-900 font-medium",
    background: "bg-{color}-500 dark:bg-{color}-400",
    position: {
      "top-right": "top-0 right-0",
      "bottom-right": "bottom-0 right-0",
      "top-left": "top-0 left-0",
      "bottom-left": "bottom-0 left-0"
    },
    size: {
      "3xs": "h-[4px] min-w-[4px] text-[4px] p-px",
      "2xs": "h-[5px] min-w-[5px] text-[5px] p-px",
      xs: "h-1.5 min-w-[0.375rem] text-[6px] p-px",
      sm: "h-2 min-w-[0.5rem] text-[7px] p-0.5",
      md: "h-2.5 min-w-[0.625rem] text-[8px] p-0.5",
      lg: "h-3 min-w-[0.75rem] text-[10px] p-0.5",
      xl: "h-3.5 min-w-[0.875rem] text-[11px] p-1",
      "2xl": "h-4 min-w-[1rem] text-[12px] p-1",
      "3xl": "h-5 min-w-[1.25rem] text-[14px] p-1"
    }
  },
  icon: {
    base: "text-gray-500 dark:text-gray-400 flex-shrink-0",
    size: {
      "3xs": "h-2 w-2",
      "2xs": "h-2.5 w-2.5",
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
      xl: "h-7 w-7",
      "2xl": "h-8 w-8",
      "3xl": "h-10 w-10"
    }
  },
  default: {
    size: "sm",
    icon: null,
    chipColor: null,
    chipPosition: "top-right"
  }
};
const input = {
  wrapper: "relative",
  base: "relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0",
  form: "form-input",
  rounded: "rounded-md",
  placeholder: "placeholder-gray-400 dark:placeholder-gray-500",
  size: {
    "2xs": "text-xs",
    xs: "text-xs",
    sm: "text-sm",
    md: "text-sm",
    lg: "text-sm",
    xl: "text-base"
  },
  gap: {
    "2xs": "gap-x-1",
    xs: "gap-x-1.5",
    sm: "gap-x-1.5",
    md: "gap-x-2",
    lg: "gap-x-2.5",
    xl: "gap-x-2.5"
  },
  padding: {
    "2xs": "px-2 py-1",
    xs: "px-2.5 py-1.5",
    sm: "px-2.5 py-1.5",
    md: "px-3 py-2",
    lg: "px-3.5 py-2.5",
    xl: "px-3.5 py-2.5"
  },
  leading: {
    padding: {
      "2xs": "ps-7",
      xs: "ps-8",
      sm: "ps-9",
      md: "ps-10",
      lg: "ps-11",
      xl: "ps-12"
    }
  },
  trailing: {
    padding: {
      "2xs": "pe-7",
      xs: "pe-8",
      sm: "pe-9",
      md: "pe-10",
      lg: "pe-11",
      xl: "pe-12"
    }
  },
  color: {
    white: {
      outline: "shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
    },
    gray: {
      outline: "shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
    }
  },
  variant: {
    outline: "shadow-sm bg-transparent text-gray-900 dark:text-white ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400",
    none: "bg-transparent focus:ring-0 focus:shadow-none"
  },
  icon: {
    base: "flex-shrink-0 text-gray-400 dark:text-gray-500",
    color: "text-{color}-500 dark:text-{color}-400",
    loading: "animate-spin",
    size: {
      "2xs": "h-4 w-4",
      xs: "h-4 w-4",
      sm: "h-5 w-5",
      md: "h-5 w-5",
      lg: "h-5 w-5",
      xl: "h-6 w-6"
    },
    leading: {
      wrapper: "absolute inset-y-0 start-0 flex items-center",
      pointer: "pointer-events-none",
      padding: {
        "2xs": "px-2",
        xs: "px-2.5",
        sm: "px-2.5",
        md: "px-3",
        lg: "px-3.5",
        xl: "px-3.5"
      }
    },
    trailing: {
      wrapper: "absolute inset-y-0 end-0 flex items-center",
      pointer: "pointer-events-none",
      padding: {
        "2xs": "px-2",
        xs: "px-2.5",
        sm: "px-2.5",
        md: "px-3",
        lg: "px-3.5",
        xl: "px-3.5"
      }
    }
  },
  default: {
    size: "sm",
    color: "white",
    variant: "outline",
    loadingIcon: "i-heroicons-arrow-path-20-solid"
  }
};
const select = {
  ...input,
  form: "form-select",
  placeholder: "text-gray-900 dark:text-white",
  default: {
    size: "sm",
    color: "white",
    variant: "outline",
    loadingIcon: "i-heroicons-arrow-path-20-solid",
    trailingIcon: "i-heroicons-chevron-down-20-solid"
  }
};
const _sfc_main$b = defineComponent({
  props: {
    name: {
      type: String,
      required: true
    },
    dynamic: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const appConfig2 = useAppConfig();
    const dynamic = computed(() => {
      var _a, _b;
      return props.dynamic || ((_b = (_a = appConfig2.ui) == null ? void 0 : _a.icons) == null ? void 0 : _b.dynamic);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      dynamic
    };
  }
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = __nuxt_component_0;
  if (_ctx.dynamic) {
    _push(ssrRenderComponent(_component_Icon, mergeProps({ name: _ctx.name }, _attrs), null, _parent));
  } else {
    _push(`<span${ssrRenderAttrs(mergeProps({ class: _ctx.name }, _attrs))}></span>`);
  }
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Icon.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$3]]);
const config$1 = mergeConfig(appConfig.ui.strategy, appConfig.ui.avatar, avatar);
const _sfc_main$a = defineComponent({
  components: {
    UIcon: __nuxt_component_2
  },
  inheritAttrs: false,
  props: {
    src: {
      type: [String, Boolean],
      default: null
    },
    alt: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: () => config$1.default.icon
    },
    size: {
      type: String,
      default: () => config$1.default.size,
      validator(value) {
        return Object.keys(config$1.size).includes(value);
      }
    },
    chipColor: {
      type: String,
      default: () => config$1.default.chipColor,
      validator(value) {
        return ["gray", ...appConfig.ui.colors].includes(value);
      }
    },
    chipPosition: {
      type: String,
      default: () => config$1.default.chipPosition,
      validator(value) {
        return Object.keys(config$1.chip.position).includes(value);
      }
    },
    chipText: {
      type: [String, Number],
      default: null
    },
    imgClass: {
      type: String,
      default: ""
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("avatar", toRef(props, "ui"), config$1);
    const url = computed(() => {
      if (typeof props.src === "boolean") {
        return null;
      }
      return props.src;
    });
    const placeholder = computed(() => {
      return (props.alt || "").split(" ").map((word) => word.charAt(0)).join("").substring(0, 2);
    });
    const wrapperClass = computed(() => {
      return twMerge(twJoin(
        ui.value.wrapper,
        (error.value || !url.value) && ui.value.background,
        ui.value.rounded,
        ui.value.size[props.size]
      ), props.class);
    });
    const imgClass = computed(() => {
      return twMerge(twJoin(
        ui.value.rounded,
        ui.value.size[props.size]
      ), props.imgClass);
    });
    const iconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        ui.value.icon.size[props.size]
      );
    });
    const chipClass = computed(() => {
      return twJoin(
        ui.value.chip.base,
        ui.value.chip.size[props.size],
        ui.value.chip.position[props.chipPosition],
        ui.value.chip.background.replaceAll("{color}", props.chipColor)
      );
    });
    const error = ref(false);
    watch(() => props.src, () => {
      if (error.value) {
        error.value = false;
      }
    });
    function onError() {
      error.value = true;
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      wrapperClass,
      // eslint-disable-next-line vue/no-dupe-keys
      imgClass,
      iconClass,
      chipClass,
      url,
      placeholder,
      error,
      onError
    };
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_2;
  _push(`<span${ssrRenderAttrs(mergeProps({ class: _ctx.wrapperClass }, _attrs))}>`);
  if (_ctx.url && !_ctx.error) {
    _push(`<img${ssrRenderAttrs(mergeProps({
      class: _ctx.imgClass,
      alt: _ctx.alt,
      src: _ctx.url
    }, _ctx.attrs))}>`);
  } else if (_ctx.text) {
    _push(`<span class="${ssrRenderClass(_ctx.ui.text)}">${ssrInterpolate(_ctx.text)}</span>`);
  } else if (_ctx.icon) {
    _push(ssrRenderComponent(_component_UIcon, {
      name: _ctx.icon,
      class: _ctx.iconClass
    }, null, _parent));
  } else if (_ctx.placeholder) {
    _push(`<span class="${ssrRenderClass(_ctx.ui.placeholder)}">${ssrInterpolate(_ctx.placeholder)}</span>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.chipColor) {
    _push(`<span class="${ssrRenderClass(_ctx.chipClass)}">${ssrInterpolate(_ctx.chipText)}</span>`);
  } else {
    _push(`<!---->`);
  }
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</span>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Avatar.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$2]]);
function d$1(u2, e2, r2) {
  let i2 = ref(r2 == null ? void 0 : r2.value), f2 = computed(() => u2.value !== void 0);
  return [computed(() => f2.value ? u2.value : i2.value), function(t2) {
    return f2.value || (i2.value = t2), e2 == null ? void 0 : e2(t2);
  }];
}
let e$1 = 0;
function n$3() {
  return ++e$1;
}
function t$4() {
  return n$3();
}
function o$4(e2) {
  var l2;
  if (e2 == null || e2.value == null)
    return null;
  let n2 = (l2 = e2.value.$el) != null ? l2 : e2.value;
  return n2 instanceof Node ? n2 : null;
}
function u$3(r2, n2, ...a2) {
  if (r2 in n2) {
    let e2 = n2[r2];
    return typeof e2 == "function" ? e2(...a2) : e2;
  }
  let t2 = new Error(`Tried to handle "${r2}" but there is no handler defined. Only defined handlers are: ${Object.keys(n2).map((e2) => `"${e2}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t2, u$3), t2;
}
var i$4 = Object.defineProperty;
var d = (t2, e2, r2) => e2 in t2 ? i$4(t2, e2, { enumerable: true, configurable: true, writable: true, value: r2 }) : t2[e2] = r2;
var n$2 = (t2, e2, r2) => (d(t2, typeof e2 != "symbol" ? e2 + "" : e2, r2), r2);
let s$2 = class s {
  constructor() {
    n$2(this, "current", this.detect());
    n$2(this, "currentId", 0);
  }
  set(e2) {
    this.current !== e2 && (this.currentId = 0, this.current = e2);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return "server";
  }
};
let c$2 = new s$2();
function i$3(r2) {
  if (c$2.isServer)
    return null;
  if (r2 instanceof Node)
    return r2.ownerDocument;
  if (r2 != null && r2.hasOwnProperty("value")) {
    let n2 = o$4(r2);
    if (n2)
      return n2.ownerDocument;
  }
  return void 0;
}
let c$1 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e2) => `${e2}:not([tabindex='-1'])`).join(",");
var N$2 = ((n2) => (n2[n2.First = 1] = "First", n2[n2.Previous = 2] = "Previous", n2[n2.Next = 4] = "Next", n2[n2.Last = 8] = "Last", n2[n2.WrapAround = 16] = "WrapAround", n2[n2.NoScroll = 32] = "NoScroll", n2))(N$2 || {}), T$1 = ((o2) => (o2[o2.Error = 0] = "Error", o2[o2.Overflow = 1] = "Overflow", o2[o2.Success = 2] = "Success", o2[o2.Underflow = 3] = "Underflow", o2))(T$1 || {}), F = ((t2) => (t2[t2.Previous = -1] = "Previous", t2[t2.Next = 1] = "Next", t2))(F || {});
var h = ((t2) => (t2[t2.Strict = 0] = "Strict", t2[t2.Loose = 1] = "Loose", t2))(h || {});
function w$2(e2, r2 = 0) {
  var t2;
  return e2 === ((t2 = i$3(e2)) == null ? void 0 : t2.body) ? false : u$3(r2, { [0]() {
    return e2.matches(c$1);
  }, [1]() {
    let l2 = e2;
    for (; l2 !== null; ) {
      if (l2.matches(c$1))
        return true;
      l2 = l2.parentElement;
    }
    return false;
  } });
}
var y$1 = ((t2) => (t2[t2.Keyboard = 0] = "Keyboard", t2[t2.Mouse = 1] = "Mouse", t2))(y$1 || {});
function O(e2, r2 = (t2) => t2) {
  return e2.slice().sort((t2, l2) => {
    let o2 = r2(t2), i2 = r2(l2);
    if (o2 === null || i2 === null)
      return 0;
    let n2 = o2.compareDocumentPosition(i2);
    return n2 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n2 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function t$3() {
  return /iPhone/gi.test((void 0).navigator.platform) || /Mac/gi.test((void 0).navigator.platform) && (void 0).navigator.maxTouchPoints > 0;
}
function i$2() {
  return /Android/gi.test((void 0).navigator.userAgent);
}
function n$1() {
  return t$3() || i$2();
}
function u$2(e2, t2, n2) {
  c$2.isServer || watchEffect((o2) => {
    (void 0).addEventListener(e2, t2, n2), o2(() => (void 0).removeEventListener(e2, t2, n2));
  });
}
function w$1(e2, n2, t2) {
  c$2.isServer || watchEffect((o2) => {
    (void 0).addEventListener(e2, n2, t2), o2(() => (void 0).removeEventListener(e2, n2, t2));
  });
}
function w(f2, m, l2 = computed(() => true)) {
  function a2(e2, r2) {
    if (!l2.value || e2.defaultPrevented)
      return;
    let t2 = r2(e2);
    if (t2 === null || !t2.getRootNode().contains(t2))
      return;
    let c2 = function o2(n2) {
      return typeof n2 == "function" ? o2(n2()) : Array.isArray(n2) || n2 instanceof Set ? n2 : [n2];
    }(f2);
    for (let o2 of c2) {
      if (o2 === null)
        continue;
      let n2 = o2 instanceof HTMLElement ? o2 : o$4(o2);
      if (n2 != null && n2.contains(t2) || e2.composed && e2.composedPath().includes(n2))
        return;
    }
    return !w$2(t2, h.Loose) && t2.tabIndex !== -1 && e2.preventDefault(), m(e2, t2);
  }
  let u2 = ref(null);
  u$2("pointerdown", (e2) => {
    var r2, t2;
    l2.value && (u2.value = ((t2 = (r2 = e2.composedPath) == null ? void 0 : r2.call(e2)) == null ? void 0 : t2[0]) || e2.target);
  }, true), u$2("mousedown", (e2) => {
    var r2, t2;
    l2.value && (u2.value = ((t2 = (r2 = e2.composedPath) == null ? void 0 : r2.call(e2)) == null ? void 0 : t2[0]) || e2.target);
  }, true), u$2("click", (e2) => {
    n$1() || u2.value && (a2(e2, () => u2.value), u2.value = null);
  }, true), u$2("touchend", (e2) => a2(e2, () => e2.target instanceof HTMLElement ? e2.target : null), true), w$1("blur", (e2) => a2(e2, () => (void 0).document.activeElement instanceof HTMLIFrameElement ? (void 0).document.activeElement : null), true);
}
function r$1(t2, e2) {
  if (t2)
    return t2;
  let n2 = e2 != null ? e2 : "button";
  if (typeof n2 == "string" && n2.toLowerCase() === "button")
    return "button";
}
function s$1(t2, e2) {
  let n2 = ref(r$1(t2.value.type, t2.value.as));
  return onMounted(() => {
    n2.value = r$1(t2.value.type, t2.value.as);
  }), watchEffect(() => {
    var u2;
    n2.value || o$4(e2) && o$4(e2) instanceof HTMLButtonElement && !((u2 = o$4(e2)) != null && u2.hasAttribute("type")) && (n2.value = "button");
  }), n2;
}
function r(e2) {
  return [e2.screenX, e2.screenY];
}
function u$1() {
  let e2 = ref([-1, -1]);
  return { wasMoved(n2) {
    let t2 = r(n2);
    return e2.value[0] === t2[0] && e2.value[1] === t2[1] ? false : (e2.value = t2, true);
  }, update(n2) {
    e2.value = r(n2);
  } };
}
function i$1({ container: e2, accept: t2, walk: d2, enabled: o2 }) {
  watchEffect(() => {
    let r2 = e2.value;
    if (!r2 || o2 !== void 0 && !o2.value)
      return;
    let l2 = i$3(e2);
    if (!l2)
      return;
    let c2 = Object.assign((f2) => t2(f2), { acceptNode: t2 }), n2 = l2.createTreeWalker(r2, NodeFilter.SHOW_ELEMENT, c2, false);
    for (; n2.nextNode(); )
      d2(n2.currentNode);
  });
}
var N$1 = ((o2) => (o2[o2.None = 0] = "None", o2[o2.RenderStrategy = 1] = "RenderStrategy", o2[o2.Static = 2] = "Static", o2))(N$1 || {}), S = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(S || {});
function A$1({ visible: r2 = true, features: t2 = 0, ourProps: e2, theirProps: o2, ...i2 }) {
  var a2;
  let n2 = j(o2, e2), l2 = Object.assign(i2, { props: n2 });
  if (r2 || t2 & 2 && n2.static)
    return y(l2);
  if (t2 & 1) {
    let d2 = (a2 = n2.unmount) == null || a2 ? 0 : 1;
    return u$3(d2, { [0]() {
      return null;
    }, [1]() {
      return y({ ...i2, props: { ...n2, hidden: true, style: { display: "none" } } });
    } });
  }
  return y(l2);
}
function y({ props: r2, attrs: t2, slots: e2, slot: o2, name: i2 }) {
  var m, h2;
  let { as: n2, ...l2 } = T(r2, ["unmount", "static"]), a2 = (m = e2.default) == null ? void 0 : m.call(e2, o2), d2 = {};
  if (o2) {
    let u2 = false, c2 = [];
    for (let [p2, f2] of Object.entries(o2))
      typeof f2 == "boolean" && (u2 = true), f2 === true && c2.push(p2);
    u2 && (d2["data-headlessui-state"] = c2.join(" "));
  }
  if (n2 === "template") {
    if (a2 = b(a2 != null ? a2 : []), Object.keys(l2).length > 0 || Object.keys(t2).length > 0) {
      let [u2, ...c2] = a2 != null ? a2 : [];
      if (!v(u2) || c2.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i2} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l2).concat(Object.keys(t2)).map((s3) => s3.trim()).filter((s3, g2, R) => R.indexOf(s3) === g2).sort((s3, g2) => s3.localeCompare(g2)).map((s3) => `  - ${s3}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((s3) => `  - ${s3}`).join(`
`)].join(`
`));
      let p2 = j((h2 = u2.props) != null ? h2 : {}, l2, d2), f2 = cloneVNode(u2, p2, true);
      for (let s3 in p2)
        s3.startsWith("on") && (f2.props || (f2.props = {}), f2.props[s3] = p2[s3]);
      return f2;
    }
    return Array.isArray(a2) && a2.length === 1 ? a2[0] : a2;
  }
  return h$1(n2, Object.assign({}, l2, d2), { default: () => a2 });
}
function b(r2) {
  return r2.flatMap((t2) => t2.type === Fragment ? b(t2.children) : [t2]);
}
function j(...r2) {
  if (r2.length === 0)
    return {};
  if (r2.length === 1)
    return r2[0];
  let t2 = {}, e2 = {};
  for (let i2 of r2)
    for (let n2 in i2)
      n2.startsWith("on") && typeof i2[n2] == "function" ? (e2[n2] != null || (e2[n2] = []), e2[n2].push(i2[n2])) : t2[n2] = i2[n2];
  if (t2.disabled || t2["aria-disabled"])
    return Object.assign(t2, Object.fromEntries(Object.keys(e2).map((i2) => [i2, void 0])));
  for (let i2 in e2)
    Object.assign(t2, { [i2](n2, ...l2) {
      let a2 = e2[i2];
      for (let d2 of a2) {
        if (n2 instanceof Event && n2.defaultPrevented)
          return;
        d2(n2, ...l2);
      }
    } });
  return t2;
}
function E(r2) {
  let t2 = Object.assign({}, r2);
  for (let e2 in t2)
    t2[e2] === void 0 && delete t2[e2];
  return t2;
}
function T(r2, t2 = []) {
  let e2 = Object.assign({}, r2);
  for (let o2 of t2)
    o2 in e2 && delete e2[o2];
  return e2;
}
function v(r2) {
  return r2 == null ? false : typeof r2.type == "string" || typeof r2.type == "object" || typeof r2.type == "function";
}
var s2 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.Focusable = 2] = "Focusable", e2[e2.Hidden = 4] = "Hidden", e2))(s2 || {});
let f$2 = defineComponent({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(d2, { slots: o2, attrs: i2 }) {
  return () => {
    var t2;
    let { features: e2, ...r2 } = d2, n2 = { "aria-hidden": (e2 & 2) === 2 ? true : (t2 = r2["aria-hidden"]) != null ? t2 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e2 & 4) === 4 && (e2 & 2) !== 2 && { display: "none" } } };
    return A$1({ ourProps: n2, theirProps: r2, slot: {}, attrs: i2, slots: o2, name: "Hidden" });
  };
} });
let n = Symbol("Context");
var i = ((e2) => (e2[e2.Open = 1] = "Open", e2[e2.Closed = 2] = "Closed", e2[e2.Closing = 4] = "Closing", e2[e2.Opening = 8] = "Opening", e2))(i || {});
function l() {
  return inject(n, null);
}
function t$2(o2) {
  provide(n, o2);
}
var o$3 = ((r2) => (r2.Space = " ", r2.Enter = "Enter", r2.Escape = "Escape", r2.Backspace = "Backspace", r2.Delete = "Delete", r2.ArrowLeft = "ArrowLeft", r2.ArrowUp = "ArrowUp", r2.ArrowRight = "ArrowRight", r2.ArrowDown = "ArrowDown", r2.Home = "Home", r2.End = "End", r2.PageUp = "PageUp", r2.PageDown = "PageDown", r2.Tab = "Tab", r2))(o$3 || {});
let t$1 = [];
function u(l2) {
  throw new Error("Unexpected object: " + l2);
}
var c = ((i2) => (i2[i2.First = 0] = "First", i2[i2.Previous = 1] = "Previous", i2[i2.Next = 2] = "Next", i2[i2.Last = 3] = "Last", i2[i2.Specific = 4] = "Specific", i2[i2.Nothing = 5] = "Nothing", i2))(c || {});
function f$1(l2, n2) {
  let t2 = n2.resolveItems();
  if (t2.length <= 0)
    return null;
  let r2 = n2.resolveActiveIndex(), s3 = r2 != null ? r2 : -1;
  switch (l2.focus) {
    case 0: {
      for (let e2 = 0; e2 < t2.length; ++e2)
        if (!n2.resolveDisabled(t2[e2], e2, t2))
          return e2;
      return r2;
    }
    case 1: {
      s3 === -1 && (s3 = t2.length);
      for (let e2 = s3 - 1; e2 >= 0; --e2)
        if (!n2.resolveDisabled(t2[e2], e2, t2))
          return e2;
      return r2;
    }
    case 2: {
      for (let e2 = s3 + 1; e2 < t2.length; ++e2)
        if (!n2.resolveDisabled(t2[e2], e2, t2))
          return e2;
      return r2;
    }
    case 3: {
      for (let e2 = t2.length - 1; e2 >= 0; --e2)
        if (!n2.resolveDisabled(t2[e2], e2, t2))
          return e2;
      return r2;
    }
    case 4: {
      for (let e2 = 0; e2 < t2.length; ++e2)
        if (n2.resolveId(t2[e2], e2, t2) === l2.id)
          return e2;
      return r2;
    }
    case 5:
      return null;
    default:
      u(l2);
  }
}
function t(e2) {
  typeof queueMicrotask == "function" ? queueMicrotask(e2) : Promise.resolve().then(e2).catch((o2) => setTimeout(() => {
    throw o2;
  }));
}
function o$2() {
  let a2 = [], s3 = { addEventListener(e2, t2, r2, i2) {
    return e2.addEventListener(t2, r2, i2), s3.add(() => e2.removeEventListener(t2, r2, i2));
  }, requestAnimationFrame(...e2) {
    let t2 = requestAnimationFrame(...e2);
    s3.add(() => cancelAnimationFrame(t2));
  }, nextFrame(...e2) {
    s3.requestAnimationFrame(() => {
      s3.requestAnimationFrame(...e2);
    });
  }, setTimeout(...e2) {
    let t2 = setTimeout(...e2);
    s3.add(() => clearTimeout(t2));
  }, microTask(...e2) {
    let t$12 = { current: true };
    return t(() => {
      t$12.current && e2[0]();
    }), s3.add(() => {
      t$12.current = false;
    });
  }, style(e2, t2, r2) {
    let i2 = e2.style.getPropertyValue(t2);
    return Object.assign(e2.style, { [t2]: r2 }), this.add(() => {
      Object.assign(e2.style, { [t2]: i2 });
    });
  }, group(e2) {
    let t2 = o$2();
    return e2(t2), this.add(() => t2.dispose());
  }, add(e2) {
    return a2.push(e2), () => {
      let t2 = a2.indexOf(e2);
      if (t2 >= 0)
        for (let r2 of a2.splice(t2, 1))
          r2();
    };
  }, dispose() {
    for (let e2 of a2.splice(0))
      e2();
  } };
  return s3;
}
function e(i2 = {}, s3 = null, t2 = []) {
  for (let [r2, n2] of Object.entries(i2))
    o$1(t2, f(s3, r2), n2);
  return t2;
}
function f(i2, s3) {
  return i2 ? i2 + "[" + s3 + "]" : s3;
}
function o$1(i2, s3, t2) {
  if (Array.isArray(t2))
    for (let [r2, n2] of t2.entries())
      o$1(i2, f(s3, r2.toString()), n2);
  else
    t2 instanceof Date ? i2.push([s3, t2.toISOString()]) : typeof t2 == "boolean" ? i2.push([s3, t2 ? "1" : "0"]) : typeof t2 == "string" ? i2.push([s3, t2]) : typeof t2 == "number" ? i2.push([s3, `${t2}`]) : t2 == null ? i2.push([s3, ""]) : e(t2, s3, i2);
}
function Pe(a2, I) {
  return a2 === I;
}
var we = ((r2) => (r2[r2.Open = 0] = "Open", r2[r2.Closed = 1] = "Closed", r2))(we || {}), Ee = ((r2) => (r2[r2.Single = 0] = "Single", r2[r2.Multi = 1] = "Multi", r2))(Ee || {}), Ve = ((O2) => (O2[O2.Pointer = 0] = "Pointer", O2[O2.Focus = 1] = "Focus", O2[O2.Other = 2] = "Other", O2))(Ve || {});
let ne = Symbol("ComboboxContext");
function N(a2) {
  let I = inject(ne, null);
  if (I === null) {
    let r2 = new Error(`<${a2} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r2, N), r2;
  }
  return I;
}
let ie = Symbol("VirtualContext"), ke = defineComponent({ name: "VirtualProvider", setup(a2, { slots: I }) {
  let r2 = N("VirtualProvider"), O2 = computed(() => {
    let u2 = o$4(r2.optionsRef);
    if (!u2)
      return { start: 0, end: 0 };
    let d2 = (void 0).getComputedStyle(u2);
    return { start: parseFloat(d2.paddingBlockStart || d2.paddingTop), end: parseFloat(d2.paddingBlockEnd || d2.paddingBottom) };
  }), t2 = useVirtualizer(computed(() => ({ scrollPaddingStart: O2.value.start, scrollPaddingEnd: O2.value.end, count: r2.virtual.value.options.length, estimateSize() {
    return 40;
  }, getScrollElement() {
    return o$4(r2.optionsRef);
  }, overscan: 12 }))), e2 = computed(() => {
    var u2;
    return (u2 = r2.virtual.value) == null ? void 0 : u2.options;
  }), R = ref(0);
  return watch([e2], () => {
    R.value += 1;
  }), provide(ie, r2.virtual.value ? t2 : null), () => [h$1("div", { style: { position: "relative", width: "100%", height: `${t2.value.getTotalSize()}px` }, ref: (u2) => {
    if (u2) {
      if (typeof process != "undefined" && process.env.JEST_WORKER_ID !== void 0 || r2.activationTrigger.value === 0)
        return;
      r2.activeOptionIndex.value !== null && r2.virtual.value.options.length > r2.activeOptionIndex.value && t2.value.scrollToIndex(r2.activeOptionIndex.value);
    }
  } }, t2.value.getVirtualItems().map((u2) => cloneVNode(I.default({ option: r2.virtual.value.options[u2.index], open: r2.comboboxState.value === 0 })[0], { key: `${R.value}-${u2.index}`, "data-index": u2.index, "aria-setsize": r2.virtual.value.options.length, "aria-posinset": u2.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${u2.start}px)`, overflowAnchor: "none" } })))];
} }), Ze = defineComponent({ name: "Combobox", emits: { "update:modelValue": (a2) => true }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: false }, by: { type: [String, Function], nullable: true, default: null }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: true }, name: { type: String, optional: true }, nullable: { type: Boolean, default: false }, multiple: { type: [Boolean], default: false }, immediate: { type: [Boolean], default: false }, virtual: { type: Object, default: null } }, inheritAttrs: false, setup(a2, { slots: I, attrs: r2, emit: O$1 }) {
  let t2 = ref(1), e$12 = ref(null), R = ref(null), u2 = ref(null), d2 = ref(null), g2 = ref({ static: false, hold: false }), S2 = ref([]), m = ref(null), w$12 = ref(2), h2 = ref(false);
  function F2(l2 = (i2) => i2) {
    let i2 = m.value !== null ? S2.value[m.value] : null, s3 = l2(S2.value.slice()), f2 = s3.length > 0 && s3[0].dataRef.order.value !== null ? s3.sort((T2, L) => T2.dataRef.order.value - L.dataRef.order.value) : O(s3, (T2) => o$4(T2.dataRef.domRef)), y2 = i2 ? f2.indexOf(i2) : null;
    return y2 === -1 && (y2 = null), { options: f2, activeOptionIndex: y2 };
  }
  let M = computed(() => a2.multiple ? 1 : 0), K = computed(() => a2.nullable), [p2, o2] = d$1(computed(() => a2.modelValue), (l2) => O$1("update:modelValue", l2), computed(() => a2.defaultValue)), v2 = computed(() => p2.value === void 0 ? u$3(M.value, { [1]: [], [0]: void 0 }) : p2.value), c$12 = null, P = null;
  function C(l2) {
    return u$3(M.value, { [0]() {
      return o2 == null ? void 0 : o2(l2);
    }, [1]: () => {
      let i2 = toRaw(n2.value.value).slice(), s3 = toRaw(l2), f2 = i2.findIndex((y2) => n2.compare(s3, toRaw(y2)));
      return f2 === -1 ? i2.push(s3) : i2.splice(f2, 1), o2 == null ? void 0 : o2(i2);
    } });
  }
  let V = computed(() => {
  });
  watch([V], ([l2], [i2]) => {
    if (n2.virtual.value && l2 && i2 && m.value !== null) {
      let s3 = l2.indexOf(i2[m.value]);
      s3 !== -1 ? m.value = s3 : m.value = null;
    }
  });
  let n2 = { comboboxState: t2, value: v2, mode: M, compare(l2, i2) {
    if (typeof a2.by == "string") {
      let s3 = a2.by;
      return (l2 == null ? void 0 : l2[s3]) === (i2 == null ? void 0 : i2[s3]);
    }
    return a2.by === null ? Pe(l2, i2) : a2.by(l2, i2);
  }, calculateIndex(l2) {
    return n2.virtual.value ? a2.by === null ? n2.virtual.value.options.indexOf(l2) : n2.virtual.value.options.findIndex((i2) => n2.compare(i2, l2)) : S2.value.findIndex((i2) => n2.compare(i2.dataRef.value, l2));
  }, defaultValue: computed(() => a2.defaultValue), nullable: K, immediate: computed(() => false), virtual: computed(() => null), inputRef: R, labelRef: e$12, buttonRef: u2, optionsRef: d2, disabled: computed(() => a2.disabled), options: S2, change(l2) {
    o2(l2);
  }, activeOptionIndex: computed(() => {
    if (h2.value && m.value === null && (n2.virtual.value ? n2.virtual.value.options.length > 0 : S2.value.length > 0)) {
      if (n2.virtual.value) {
        let i2 = n2.virtual.value.options.findIndex((s3) => {
          var f2;
          return !((f2 = n2.virtual.value) != null && f2.disabled(s3));
        });
        if (i2 !== -1)
          return i2;
      }
      let l2 = S2.value.findIndex((i2) => !i2.dataRef.disabled);
      if (l2 !== -1)
        return l2;
    }
    return m.value;
  }), activationTrigger: w$12, optionsPropsRef: g2, closeCombobox() {
    h2.value = false, !a2.disabled && t2.value !== 1 && (t2.value = 1, m.value = null);
  }, openCombobox() {
    if (h2.value = true, !a2.disabled && t2.value !== 0) {
      if (n2.value.value) {
        let l2 = n2.calculateIndex(n2.value.value);
        l2 !== -1 && (m.value = l2);
      }
      t2.value = 0;
    }
  }, setActivationTrigger(l2) {
    w$12.value = l2;
  }, goToOption(l2, i2, s3) {
    h2.value = false, c$12 !== null && cancelAnimationFrame(c$12), c$12 = requestAnimationFrame(() => {
      if (a2.disabled || d2.value && !g2.value.static && t2.value === 1)
        return;
      if (n2.virtual.value) {
        m.value = l2 === c.Specific ? i2 : f$1({ focus: l2 }, { resolveItems: () => n2.virtual.value.options, resolveActiveIndex: () => {
          var T2, L;
          return (L = (T2 = n2.activeOptionIndex.value) != null ? T2 : n2.virtual.value.options.findIndex((W) => {
            var U;
            return !((U = n2.virtual.value) != null && U.disabled(W));
          })) != null ? L : null;
        }, resolveDisabled: (T2) => n2.virtual.value.disabled(T2), resolveId() {
          throw new Error("Function not implemented.");
        } }), w$12.value = s3 != null ? s3 : 2;
        return;
      }
      let f2 = F2();
      if (f2.activeOptionIndex === null) {
        let T2 = f2.options.findIndex((L) => !L.dataRef.disabled);
        T2 !== -1 && (f2.activeOptionIndex = T2);
      }
      let y2 = l2 === c.Specific ? i2 : f$1({ focus: l2 }, { resolveItems: () => f2.options, resolveActiveIndex: () => f2.activeOptionIndex, resolveId: (T2) => T2.id, resolveDisabled: (T2) => T2.dataRef.disabled });
      m.value = y2, w$12.value = s3 != null ? s3 : 2, S2.value = f2.options;
    });
  }, selectOption(l2) {
    let i2 = S2.value.find((f2) => f2.id === l2);
    if (!i2)
      return;
    let { dataRef: s3 } = i2;
    C(s3.value);
  }, selectActiveOption() {
    if (n2.activeOptionIndex.value !== null) {
      if (n2.virtual.value)
        C(n2.virtual.value.options[n2.activeOptionIndex.value]);
      else {
        let { dataRef: l2 } = S2.value[n2.activeOptionIndex.value];
        C(l2.value);
      }
      n2.goToOption(c.Specific, n2.activeOptionIndex.value);
    }
  }, registerOption(l2, i2) {
    let s3 = reactive({ id: l2, dataRef: i2 });
    if (n2.virtual.value) {
      S2.value.push(s3);
      return;
    }
    P && cancelAnimationFrame(P);
    let f2 = F2((y2) => (y2.push(s3), y2));
    m.value === null && n2.isSelected(i2.value.value) && (f2.activeOptionIndex = f2.options.indexOf(s3)), S2.value = f2.options, m.value = f2.activeOptionIndex, w$12.value = 2, f2.options.some((y2) => !o$4(y2.dataRef.domRef)) && (P = requestAnimationFrame(() => {
      let y2 = F2();
      S2.value = y2.options, m.value = y2.activeOptionIndex;
    }));
  }, unregisterOption(l2, i2) {
    if (c$12 !== null && cancelAnimationFrame(c$12), i2 && (h2.value = true), n2.virtual.value) {
      S2.value = S2.value.filter((f2) => f2.id !== l2);
      return;
    }
    let s3 = F2((f2) => {
      let y2 = f2.findIndex((T2) => T2.id === l2);
      return y2 !== -1 && f2.splice(y2, 1), f2;
    });
    S2.value = s3.options, m.value = s3.activeOptionIndex, w$12.value = 2;
  }, isSelected(l2) {
    return u$3(M.value, { [0]: () => n2.compare(toRaw(n2.value.value), toRaw(l2)), [1]: () => toRaw(n2.value.value).some((i2) => n2.compare(toRaw(i2), toRaw(l2))) });
  }, isActive(l2) {
    return m.value === n2.calculateIndex(l2);
  } };
  w([R, u2, d2], () => n2.closeCombobox(), computed(() => t2.value === 0)), provide(ne, n2), t$2(computed(() => u$3(t2.value, { [0]: i.Open, [1]: i.Closed })));
  let D = computed(() => {
    var l2;
    return (l2 = o$4(R)) == null ? void 0 : l2.closest("form");
  });
  return onMounted(() => {
    watch([D], () => {
      if (!D.value || a2.defaultValue === void 0)
        return;
      function l2() {
        n2.change(a2.defaultValue);
      }
      return D.value.addEventListener("reset", l2), () => {
        var i2;
        (i2 = D.value) == null || i2.removeEventListener("reset", l2);
      };
    }, { immediate: true });
  }), () => {
    var T$12, L, W;
    let { name: l2, disabled: i2, form: s$12, ...f2 } = a2, y2 = { open: t2.value === 0, disabled: i2, activeIndex: n2.activeOptionIndex.value, activeOption: n2.activeOptionIndex.value === null ? null : n2.virtual.value ? n2.virtual.value.options[(T$12 = n2.activeOptionIndex.value) != null ? T$12 : 0] : (W = (L = n2.options.value[n2.activeOptionIndex.value]) == null ? void 0 : L.dataRef.value.value) != null ? W : null, value: v2.value };
    return h$1(Fragment, [...l2 != null && v2.value != null ? e({ [l2]: v2.value }).map(([U, ue]) => h$1(f$2, E({ features: s2.Hidden, key: U, as: "input", type: "hidden", hidden: true, readOnly: true, form: s$12, name: U, value: ue }))) : [], A$1({ theirProps: { ...r2, ...T(f2, ["by", "defaultValue", "immediate", "modelValue", "multiple", "nullable", "onUpdate:modelValue", "virtual"]) }, ourProps: {}, slot: y2, slots: I, attrs: r2, name: "Combobox" })]);
  };
} });
defineComponent({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-combobox-label-${t$4()}` } }, setup(a2, { attrs: I, slots: r2 }) {
  let O2 = N("ComboboxLabel");
  function t2() {
    var e2;
    (e2 = o$4(O2.inputRef)) == null || e2.focus({ preventScroll: true });
  }
  return () => {
    let e2 = { open: O2.comboboxState.value === 0, disabled: O2.disabled.value }, { id: R, ...u2 } = a2, d2 = { id: R, ref: O2.labelRef, onClick: t2 };
    return A$1({ ourProps: d2, theirProps: u2, slot: e2, attrs: I, slots: r2, name: "ComboboxLabel" });
  };
} });
let tt = defineComponent({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-combobox-button-${t$4()}` } }, setup(a2, { attrs: I, slots: r2, expose: O2 }) {
  let t2 = N("ComboboxButton");
  O2({ el: t2.buttonRef, $el: t2.buttonRef });
  function e2(d2) {
    t2.disabled.value || (t2.comboboxState.value === 0 ? t2.closeCombobox() : (d2.preventDefault(), t2.openCombobox()), nextTick(() => {
      var g2;
      return (g2 = o$4(t2.inputRef)) == null ? void 0 : g2.focus({ preventScroll: true });
    }));
  }
  function R(d2) {
    switch (d2.key) {
      case o$3.ArrowDown:
        d2.preventDefault(), d2.stopPropagation(), t2.comboboxState.value === 1 && t2.openCombobox(), nextTick(() => {
          var g2;
          return (g2 = t2.inputRef.value) == null ? void 0 : g2.focus({ preventScroll: true });
        });
        return;
      case o$3.ArrowUp:
        d2.preventDefault(), d2.stopPropagation(), t2.comboboxState.value === 1 && (t2.openCombobox(), nextTick(() => {
          t2.value.value || t2.goToOption(c.Last);
        })), nextTick(() => {
          var g2;
          return (g2 = t2.inputRef.value) == null ? void 0 : g2.focus({ preventScroll: true });
        });
        return;
      case o$3.Escape:
        if (t2.comboboxState.value !== 0)
          return;
        d2.preventDefault(), t2.optionsRef.value && !t2.optionsPropsRef.value.static && d2.stopPropagation(), t2.closeCombobox(), nextTick(() => {
          var g2;
          return (g2 = t2.inputRef.value) == null ? void 0 : g2.focus({ preventScroll: true });
        });
        return;
    }
  }
  let u2 = s$1(computed(() => ({ as: a2.as, type: I.type })), t2.buttonRef);
  return () => {
    var w2, h2;
    let d2 = { open: t2.comboboxState.value === 0, disabled: t2.disabled.value, value: t2.value.value }, { id: g2, ...S2 } = a2, m = { ref: t2.buttonRef, id: g2, type: u2.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (w2 = o$4(t2.optionsRef)) == null ? void 0 : w2.id, "aria-expanded": t2.comboboxState.value === 0, "aria-labelledby": t2.labelRef.value ? [(h2 = o$4(t2.labelRef)) == null ? void 0 : h2.id, g2].join(" ") : void 0, disabled: t2.disabled.value === true ? true : void 0, onKeydown: R, onClick: e2 };
    return A$1({ ourProps: m, theirProps: S2, slot: d2, attrs: I, slots: r2, name: "ComboboxButton" });
  };
} }), ot = defineComponent({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: () => `headlessui-combobox-input-${t$4()}` } }, emits: { change: (a2) => true }, setup(a2, { emit: I, attrs: r2, slots: O2, expose: t2 }) {
  let e2 = N("ComboboxInput"), R = computed(() => i$3(o$4(e2.inputRef))), u2 = { value: false };
  t2({ el: e2.inputRef, $el: e2.inputRef });
  function d2() {
    e2.change(null);
    let o2 = o$4(e2.optionsRef);
    o2 && (o2.scrollTop = 0), e2.goToOption(c.Nothing);
  }
  let g2 = computed(() => {
    var v2;
    let o2 = e2.value.value;
    return o$4(e2.inputRef) ? typeof a2.displayValue != "undefined" && o2 !== void 0 ? (v2 = a2.displayValue(o2)) != null ? v2 : "" : typeof o2 == "string" ? o2 : "" : "";
  });
  onMounted(() => {
    watch([g2, e2.comboboxState, R], ([o2, v2], [c2, P]) => {
      if (u2.value)
        return;
      let C = o$4(e2.inputRef);
      C && ((P === 0 && v2 === 1 || o2 !== c2) && (C.value = o2), requestAnimationFrame(() => {
        var D;
        if (u2.value || !C || ((D = R.value) == null ? void 0 : D.activeElement) !== C)
          return;
        let { selectionStart: V, selectionEnd: n2 } = C;
        Math.abs((n2 != null ? n2 : 0) - (V != null ? V : 0)) === 0 && V === 0 && C.setSelectionRange(C.value.length, C.value.length);
      }));
    }, { immediate: true }), watch([e2.comboboxState], ([o2], [v2]) => {
      if (o2 === 0 && v2 === 1) {
        if (u2.value)
          return;
        let c2 = o$4(e2.inputRef);
        if (!c2)
          return;
        let P = c2.value, { selectionStart: C, selectionEnd: V, selectionDirection: n2 } = c2;
        c2.value = "", c2.value = P, n2 !== null ? c2.setSelectionRange(C, V, n2) : c2.setSelectionRange(C, V);
      }
    });
  });
  let S2 = ref(false);
  function m() {
    S2.value = true;
  }
  function w2() {
    o$2().nextFrame(() => {
      S2.value = false;
    });
  }
  function h2(o2) {
    switch (u2.value = true, o2.key) {
      case o$3.Enter:
        if (u2.value = false, e2.comboboxState.value !== 0 || S2.value)
          return;
        if (o2.preventDefault(), o2.stopPropagation(), e2.activeOptionIndex.value === null) {
          e2.closeCombobox();
          return;
        }
        e2.selectActiveOption(), e2.mode.value === 0 && e2.closeCombobox();
        break;
      case o$3.ArrowDown:
        return u2.value = false, o2.preventDefault(), o2.stopPropagation(), u$3(e2.comboboxState.value, { [0]: () => e2.goToOption(c.Next), [1]: () => e2.openCombobox() });
      case o$3.ArrowUp:
        return u2.value = false, o2.preventDefault(), o2.stopPropagation(), u$3(e2.comboboxState.value, { [0]: () => e2.goToOption(c.Previous), [1]: () => {
          e2.openCombobox(), nextTick(() => {
            e2.value.value || e2.goToOption(c.Last);
          });
        } });
      case o$3.Home:
        if (o2.shiftKey)
          break;
        return u2.value = false, o2.preventDefault(), o2.stopPropagation(), e2.goToOption(c.First);
      case o$3.PageUp:
        return u2.value = false, o2.preventDefault(), o2.stopPropagation(), e2.goToOption(c.First);
      case o$3.End:
        if (o2.shiftKey)
          break;
        return u2.value = false, o2.preventDefault(), o2.stopPropagation(), e2.goToOption(c.Last);
      case o$3.PageDown:
        return u2.value = false, o2.preventDefault(), o2.stopPropagation(), e2.goToOption(c.Last);
      case o$3.Escape:
        if (u2.value = false, e2.comboboxState.value !== 0)
          return;
        o2.preventDefault(), e2.optionsRef.value && !e2.optionsPropsRef.value.static && o2.stopPropagation(), e2.nullable.value && e2.mode.value === 0 && e2.value.value === null && d2(), e2.closeCombobox();
        break;
      case o$3.Tab:
        if (u2.value = false, e2.comboboxState.value !== 0)
          return;
        e2.mode.value === 0 && e2.activationTrigger.value !== 1 && e2.selectActiveOption(), e2.closeCombobox();
        break;
    }
  }
  function F2(o2) {
    I("change", o2), e2.nullable.value && e2.mode.value === 0 && o2.target.value === "" && d2(), e2.openCombobox();
  }
  function M(o2) {
    var c2, P, C;
    let v2 = (c2 = o2.relatedTarget) != null ? c2 : t$1.find((V) => V !== o2.currentTarget);
    if (u2.value = false, !((P = o$4(e2.optionsRef)) != null && P.contains(v2)) && !((C = o$4(e2.buttonRef)) != null && C.contains(v2)) && e2.comboboxState.value === 0)
      return o2.preventDefault(), e2.mode.value === 0 && (e2.nullable.value && e2.value.value === null ? d2() : e2.activationTrigger.value !== 1 && e2.selectActiveOption()), e2.closeCombobox();
  }
  function K(o2) {
    var c2, P, C;
    let v2 = (c2 = o2.relatedTarget) != null ? c2 : t$1.find((V) => V !== o2.currentTarget);
    (P = o$4(e2.buttonRef)) != null && P.contains(v2) || (C = o$4(e2.optionsRef)) != null && C.contains(v2) || e2.disabled.value || e2.immediate.value && e2.comboboxState.value !== 0 && (e2.openCombobox(), o$2().nextFrame(() => {
      e2.setActivationTrigger(1);
    }));
  }
  let p2 = computed(() => {
    var o2, v2, c2, P;
    return (P = (c2 = (v2 = a2.defaultValue) != null ? v2 : e2.defaultValue.value !== void 0 ? (o2 = a2.displayValue) == null ? void 0 : o2.call(a2, e2.defaultValue.value) : null) != null ? c2 : e2.defaultValue.value) != null ? P : "";
  });
  return () => {
    var n2, D, l2, i2, s3, f2, y2;
    let o2 = { open: e2.comboboxState.value === 0 }, { id: v2, displayValue: c2, onChange: P, ...C } = a2, V = { "aria-controls": (n2 = e2.optionsRef.value) == null ? void 0 : n2.id, "aria-expanded": e2.comboboxState.value === 0, "aria-activedescendant": e2.activeOptionIndex.value === null ? void 0 : e2.virtual.value ? (D = e2.options.value.find((T2) => !e2.virtual.value.disabled(T2.dataRef.value) && e2.compare(T2.dataRef.value, e2.virtual.value.options[e2.activeOptionIndex.value]))) == null ? void 0 : D.id : (l2 = e2.options.value[e2.activeOptionIndex.value]) == null ? void 0 : l2.id, "aria-labelledby": (f2 = (i2 = o$4(e2.labelRef)) == null ? void 0 : i2.id) != null ? f2 : (s3 = o$4(e2.buttonRef)) == null ? void 0 : s3.id, "aria-autocomplete": "list", id: v2, onCompositionstart: m, onCompositionend: w2, onKeydown: h2, onInput: F2, onFocus: K, onBlur: M, role: "combobox", type: (y2 = r2.type) != null ? y2 : "text", tabIndex: 0, ref: e2.inputRef, defaultValue: p2.value, disabled: e2.disabled.value === true ? true : void 0 };
    return A$1({ ourProps: V, theirProps: C, slot: o2, attrs: r2, slots: O2, features: N$1.RenderStrategy | N$1.Static, name: "ComboboxInput" });
  };
} }), lt = defineComponent({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, hold: { type: [Boolean], default: false } }, setup(a2, { attrs: I, slots: r2, expose: O2 }) {
  let t2 = N("ComboboxOptions"), e2 = `headlessui-combobox-options-${t$4()}`;
  O2({ el: t2.optionsRef, $el: t2.optionsRef }), watchEffect(() => {
    t2.optionsPropsRef.value.static = a2.static;
  }), watchEffect(() => {
    t2.optionsPropsRef.value.hold = a2.hold;
  });
  let R = l(), u2 = computed(() => R !== null ? (R.value & i.Open) === i.Open : t2.comboboxState.value === 0);
  return i$1({ container: computed(() => o$4(t2.optionsRef)), enabled: computed(() => t2.comboboxState.value === 0), accept(d2) {
    return d2.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : d2.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(d2) {
    d2.setAttribute("role", "none");
  } }), () => {
    var m, w2, h2;
    let d2 = { open: t2.comboboxState.value === 0 }, g2 = { "aria-labelledby": (h2 = (m = o$4(t2.labelRef)) == null ? void 0 : m.id) != null ? h2 : (w2 = o$4(t2.buttonRef)) == null ? void 0 : w2.id, id: e2, ref: t2.optionsRef, role: "listbox", "aria-multiselectable": t2.mode.value === 1 ? true : void 0 }, S2 = T(a2, ["hold"]);
    return A$1({ ourProps: g2, theirProps: S2, slot: d2, attrs: I, slots: t2.virtual.value && t2.comboboxState.value === 0 ? { ...r2, default: () => [h$1(ke, {}, r2.default)] } : r2, features: N$1.RenderStrategy | N$1.Static, visible: u2.value, name: "ComboboxOptions" });
  };
} }), at = defineComponent({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false }, order: { type: [Number], default: null } }, setup(a2, { slots: I, attrs: r2, expose: O2 }) {
  let t2 = N("ComboboxOption"), e2 = `headlessui-combobox-option-${t$4()}`, R = ref(null);
  O2({ el: R, $el: R });
  let u2 = computed(() => {
    var p2;
    return t2.virtual.value ? t2.activeOptionIndex.value === t2.calculateIndex(a2.value) : t2.activeOptionIndex.value === null ? false : ((p2 = t2.options.value[t2.activeOptionIndex.value]) == null ? void 0 : p2.id) === e2;
  }), d2 = computed(() => t2.isSelected(a2.value)), g2 = inject(ie, null), S2 = computed(() => ({ disabled: a2.disabled, value: a2.value, domRef: R, order: computed(() => a2.order) }));
  onMounted(() => t2.registerOption(e2, S2)), onUnmounted(() => t2.unregisterOption(e2, u2.value)), watchEffect(() => {
    let p2 = o$4(R);
    p2 && (g2 == null || g2.value.measureElement(p2));
  }), watchEffect(() => {
    t2.comboboxState.value === 0 && u2.value && (t2.virtual.value || t2.activationTrigger.value !== 0 && nextTick(() => {
      var p2, o2;
      return (o2 = (p2 = o$4(R)) == null ? void 0 : p2.scrollIntoView) == null ? void 0 : o2.call(p2, { block: "nearest" });
    }));
  });
  function m(p2) {
    var o2;
    if (a2.disabled || (o2 = t2.virtual.value) != null && o2.disabled(a2.value))
      return p2.preventDefault();
    t2.selectOption(e2), n$1() || requestAnimationFrame(() => {
      var v2;
      return (v2 = o$4(t2.inputRef)) == null ? void 0 : v2.focus({ preventScroll: true });
    }), t2.mode.value === 0 && requestAnimationFrame(() => t2.closeCombobox());
  }
  function w2() {
    var o2;
    if (a2.disabled || (o2 = t2.virtual.value) != null && o2.disabled(a2.value))
      return t2.goToOption(c.Nothing);
    let p2 = t2.calculateIndex(a2.value);
    t2.goToOption(c.Specific, p2);
  }
  let h2 = u$1();
  function F2(p2) {
    h2.update(p2);
  }
  function M(p2) {
    var v2;
    if (!h2.wasMoved(p2) || a2.disabled || (v2 = t2.virtual.value) != null && v2.disabled(a2.value) || u2.value)
      return;
    let o2 = t2.calculateIndex(a2.value);
    t2.goToOption(c.Specific, o2, 0);
  }
  function K(p2) {
    var o2;
    h2.wasMoved(p2) && (a2.disabled || (o2 = t2.virtual.value) != null && o2.disabled(a2.value) || u2.value && (t2.optionsPropsRef.value.hold || t2.goToOption(c.Nothing)));
  }
  return () => {
    let { disabled: p2 } = a2, o2 = { active: u2.value, selected: d2.value, disabled: p2 }, v2 = { id: e2, ref: R, role: "option", tabIndex: p2 === true ? void 0 : -1, "aria-disabled": p2 === true ? true : void 0, "aria-selected": d2.value, disabled: void 0, onClick: m, onFocus: w2, onPointerenter: F2, onMouseenter: F2, onPointermove: M, onMousemove: M, onPointerleave: K, onMouseleave: K }, c2 = T(a2, ["order", "value"]);
    return A$1({ ourProps: v2, theirProps: c2, slot: o2, attrs: r2, slots: I, name: "ComboboxOption" });
  };
} });
let a = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o(e2) {
  var r2, i2;
  let n2 = (r2 = e2.innerText) != null ? r2 : "", t2 = e2.cloneNode(true);
  if (!(t2 instanceof HTMLElement))
    return n2;
  let u2 = false;
  for (let f2 of t2.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    f2.remove(), u2 = true;
  let l2 = u2 ? (i2 = t2.innerText) != null ? i2 : "" : n2;
  return a.test(l2) && (l2 = l2.replace(a, "")), l2;
}
function g(e2) {
  let n2 = e2.getAttribute("aria-label");
  if (typeof n2 == "string")
    return n2.trim();
  let t2 = e2.getAttribute("aria-labelledby");
  if (t2) {
    let u2 = t2.split(" ").map((l2) => {
      let r2 = (void 0).getElementById(l2);
      if (r2) {
        let i2 = r2.getAttribute("aria-label");
        return typeof i2 == "string" ? i2.trim() : o(r2).trim();
      }
      return null;
    }).filter(Boolean);
    if (u2.length > 0)
      return u2.join(", ");
  }
  return o(e2).trim();
}
function p(a2) {
  let t2 = ref(""), r2 = ref("");
  return () => {
    let e2 = o$4(a2);
    if (!e2)
      return "";
    let l2 = e2.innerText;
    if (t2.value === l2)
      return r2.value;
    let u2 = g(e2).trim().toLowerCase();
    return t2.value = l2, r2.value = u2, u2;
  };
}
function pe(t2, c2) {
  return t2 === c2;
}
var ce = ((l2) => (l2[l2.Open = 0] = "Open", l2[l2.Closed = 1] = "Closed", l2))(ce || {}), ve = ((l2) => (l2[l2.Single = 0] = "Single", l2[l2.Multi = 1] = "Multi", l2))(ve || {}), be = ((l2) => (l2[l2.Pointer = 0] = "Pointer", l2[l2.Other = 1] = "Other", l2))(be || {});
function me(t2) {
  requestAnimationFrame(() => requestAnimationFrame(t2));
}
let $ = Symbol("ListboxContext");
function A(t2) {
  let c2 = inject($, null);
  if (c2 === null) {
    let l2 = new Error(`<${t2} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l2, A), l2;
  }
  return c2;
}
let Ie = defineComponent({ name: "Listbox", emits: { "update:modelValue": (t2) => true }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: false }, by: { type: [String, Function], default: () => pe }, horizontal: { type: [Boolean], default: false }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: true }, name: { type: String, optional: true }, multiple: { type: [Boolean], default: false } }, inheritAttrs: false, setup(t2, { slots: c$12, attrs: l2, emit: L }) {
  let e$12 = ref(1), d2 = ref(null), v2 = ref(null), b2 = ref(null), f2 = ref([]), o2 = ref(""), i$12 = ref(null), T$12 = ref(1);
  function D(a2 = (n2) => n2) {
    let n2 = i$12.value !== null ? f2.value[i$12.value] : null, u2 = O(a2(f2.value.slice()), (O2) => o$4(O2.dataRef.domRef)), s3 = n2 ? u2.indexOf(n2) : null;
    return s3 === -1 && (s3 = null), { options: u2, activeOptionIndex: s3 };
  }
  let y2 = computed(() => t2.multiple ? 1 : 0), [h$2, V] = d$1(computed(() => t2.modelValue), (a2) => L("update:modelValue", a2), computed(() => t2.defaultValue)), M = computed(() => h$2.value === void 0 ? u$3(y2.value, { [1]: [], [0]: void 0 }) : h$2.value), r2 = { listboxState: e$12, value: M, mode: y2, compare(a2, n2) {
    if (typeof t2.by == "string") {
      let u2 = t2.by;
      return (a2 == null ? void 0 : a2[u2]) === (n2 == null ? void 0 : n2[u2]);
    }
    return t2.by(a2, n2);
  }, orientation: computed(() => t2.horizontal ? "horizontal" : "vertical"), labelRef: d2, buttonRef: v2, optionsRef: b2, disabled: computed(() => t2.disabled), options: f2, searchQuery: o2, activeOptionIndex: i$12, activationTrigger: T$12, closeListbox() {
    t2.disabled || e$12.value !== 1 && (e$12.value = 1, i$12.value = null);
  }, openListbox() {
    t2.disabled || e$12.value !== 0 && (e$12.value = 0);
  }, goToOption(a2, n2, u2) {
    if (t2.disabled || e$12.value === 1)
      return;
    let s3 = D(), O2 = f$1(a2 === c.Specific ? { focus: c.Specific, id: n2 } : { focus: a2 }, { resolveItems: () => s3.options, resolveActiveIndex: () => s3.activeOptionIndex, resolveId: (k) => k.id, resolveDisabled: (k) => k.dataRef.disabled });
    o2.value = "", i$12.value = O2, T$12.value = u2 != null ? u2 : 1, f2.value = s3.options;
  }, search(a2) {
    if (t2.disabled || e$12.value === 1)
      return;
    let u2 = o2.value !== "" ? 0 : 1;
    o2.value += a2.toLowerCase();
    let O2 = (i$12.value !== null ? f2.value.slice(i$12.value + u2).concat(f2.value.slice(0, i$12.value + u2)) : f2.value).find((I) => I.dataRef.textValue.startsWith(o2.value) && !I.dataRef.disabled), k = O2 ? f2.value.indexOf(O2) : -1;
    k === -1 || k === i$12.value || (i$12.value = k, T$12.value = 1);
  }, clearSearch() {
    t2.disabled || e$12.value !== 1 && o2.value !== "" && (o2.value = "");
  }, registerOption(a2, n2) {
    let u2 = D((s3) => [...s3, { id: a2, dataRef: n2 }]);
    f2.value = u2.options, i$12.value = u2.activeOptionIndex;
  }, unregisterOption(a2) {
    let n2 = D((u2) => {
      let s3 = u2.findIndex((O2) => O2.id === a2);
      return s3 !== -1 && u2.splice(s3, 1), u2;
    });
    f2.value = n2.options, i$12.value = n2.activeOptionIndex, T$12.value = 1;
  }, theirOnChange(a2) {
    t2.disabled || V(a2);
  }, select(a2) {
    t2.disabled || V(u$3(y2.value, { [0]: () => a2, [1]: () => {
      let n2 = toRaw(r2.value.value).slice(), u2 = toRaw(a2), s3 = n2.findIndex((O2) => r2.compare(u2, toRaw(O2)));
      return s3 === -1 ? n2.push(u2) : n2.splice(s3, 1), n2;
    } }));
  } };
  w([v2, b2], (a2, n2) => {
    var u2;
    r2.closeListbox(), w$2(n2, h.Loose) || (a2.preventDefault(), (u2 = o$4(v2)) == null || u2.focus());
  }, computed(() => e$12.value === 0)), provide($, r2), t$2(computed(() => u$3(e$12.value, { [0]: i.Open, [1]: i.Closed })));
  let m = computed(() => {
    var a2;
    return (a2 = o$4(v2)) == null ? void 0 : a2.closest("form");
  });
  return onMounted(() => {
    watch([m], () => {
      if (!m.value || t2.defaultValue === void 0)
        return;
      function a2() {
        r2.theirOnChange(t2.defaultValue);
      }
      return m.value.addEventListener("reset", a2), () => {
        var n2;
        (n2 = m.value) == null || n2.removeEventListener("reset", a2);
      };
    }, { immediate: true });
  }), () => {
    let { name: a2, modelValue: n2, disabled: u2, form: s$12, ...O2 } = t2, k = { open: e$12.value === 0, disabled: u2, value: M.value };
    return h$1(Fragment, [...a2 != null && M.value != null ? e({ [a2]: M.value }).map(([I, Q]) => h$1(f$2, E({ features: s2.Hidden, key: I, as: "input", type: "hidden", hidden: true, readOnly: true, form: s$12, name: I, value: Q }))) : [], A$1({ ourProps: {}, theirProps: { ...l2, ...T(O2, ["defaultValue", "onUpdate:modelValue", "horizontal", "multiple", "by"]) }, slot: k, slots: c$12, attrs: l2, name: "Listbox" })]);
  };
} });
defineComponent({ name: "ListboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-listbox-label-${t$4()}` } }, setup(t2, { attrs: c2, slots: l2 }) {
  let L = A("ListboxLabel");
  function e2() {
    var d2;
    (d2 = o$4(L.buttonRef)) == null || d2.focus({ preventScroll: true });
  }
  return () => {
    let d2 = { open: L.listboxState.value === 0, disabled: L.disabled.value }, { id: v2, ...b2 } = t2, f2 = { id: v2, ref: L.labelRef, onClick: e2 };
    return A$1({ ourProps: f2, theirProps: b2, slot: d2, attrs: c2, slots: l2, name: "ListboxLabel" });
  };
} });
let je = defineComponent({ name: "ListboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-listbox-button-${t$4()}` } }, setup(t2, { attrs: c$12, slots: l2, expose: L }) {
  let e2 = A("ListboxButton");
  L({ el: e2.buttonRef, $el: e2.buttonRef });
  function d2(o2) {
    switch (o2.key) {
      case o$3.Space:
      case o$3.Enter:
      case o$3.ArrowDown:
        o2.preventDefault(), e2.openListbox(), nextTick(() => {
          var i2;
          (i2 = o$4(e2.optionsRef)) == null || i2.focus({ preventScroll: true }), e2.value.value || e2.goToOption(c.First);
        });
        break;
      case o$3.ArrowUp:
        o2.preventDefault(), e2.openListbox(), nextTick(() => {
          var i2;
          (i2 = o$4(e2.optionsRef)) == null || i2.focus({ preventScroll: true }), e2.value.value || e2.goToOption(c.Last);
        });
        break;
    }
  }
  function v2(o2) {
    switch (o2.key) {
      case o$3.Space:
        o2.preventDefault();
        break;
    }
  }
  function b2(o2) {
    e2.disabled.value || (e2.listboxState.value === 0 ? (e2.closeListbox(), nextTick(() => {
      var i2;
      return (i2 = o$4(e2.buttonRef)) == null ? void 0 : i2.focus({ preventScroll: true });
    })) : (o2.preventDefault(), e2.openListbox(), me(() => {
      var i2;
      return (i2 = o$4(e2.optionsRef)) == null ? void 0 : i2.focus({ preventScroll: true });
    })));
  }
  let f2 = s$1(computed(() => ({ as: t2.as, type: c$12.type })), e2.buttonRef);
  return () => {
    var y2, h2;
    let o2 = { open: e2.listboxState.value === 0, disabled: e2.disabled.value, value: e2.value.value }, { id: i2, ...T2 } = t2, D = { ref: e2.buttonRef, id: i2, type: f2.value, "aria-haspopup": "listbox", "aria-controls": (y2 = o$4(e2.optionsRef)) == null ? void 0 : y2.id, "aria-expanded": e2.listboxState.value === 0, "aria-labelledby": e2.labelRef.value ? [(h2 = o$4(e2.labelRef)) == null ? void 0 : h2.id, i2].join(" ") : void 0, disabled: e2.disabled.value === true ? true : void 0, onKeydown: d2, onKeyup: v2, onClick: b2 };
    return A$1({ ourProps: D, theirProps: T2, slot: o2, attrs: c$12, slots: l2, name: "ListboxButton" });
  };
} }), Ae = defineComponent({ name: "ListboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: () => `headlessui-listbox-options-${t$4()}` } }, setup(t2, { attrs: c$12, slots: l$1, expose: L }) {
  let e2 = A("ListboxOptions"), d2 = ref(null);
  L({ el: e2.optionsRef, $el: e2.optionsRef });
  function v2(o2) {
    switch (d2.value && clearTimeout(d2.value), o2.key) {
      case o$3.Space:
        if (e2.searchQuery.value !== "")
          return o2.preventDefault(), o2.stopPropagation(), e2.search(o2.key);
      case o$3.Enter:
        if (o2.preventDefault(), o2.stopPropagation(), e2.activeOptionIndex.value !== null) {
          let i2 = e2.options.value[e2.activeOptionIndex.value];
          e2.select(i2.dataRef.value);
        }
        e2.mode.value === 0 && (e2.closeListbox(), nextTick(() => {
          var i2;
          return (i2 = o$4(e2.buttonRef)) == null ? void 0 : i2.focus({ preventScroll: true });
        }));
        break;
      case u$3(e2.orientation.value, { vertical: o$3.ArrowDown, horizontal: o$3.ArrowRight }):
        return o2.preventDefault(), o2.stopPropagation(), e2.goToOption(c.Next);
      case u$3(e2.orientation.value, { vertical: o$3.ArrowUp, horizontal: o$3.ArrowLeft }):
        return o2.preventDefault(), o2.stopPropagation(), e2.goToOption(c.Previous);
      case o$3.Home:
      case o$3.PageUp:
        return o2.preventDefault(), o2.stopPropagation(), e2.goToOption(c.First);
      case o$3.End:
      case o$3.PageDown:
        return o2.preventDefault(), o2.stopPropagation(), e2.goToOption(c.Last);
      case o$3.Escape:
        o2.preventDefault(), o2.stopPropagation(), e2.closeListbox(), nextTick(() => {
          var i2;
          return (i2 = o$4(e2.buttonRef)) == null ? void 0 : i2.focus({ preventScroll: true });
        });
        break;
      case o$3.Tab:
        o2.preventDefault(), o2.stopPropagation();
        break;
      default:
        o2.key.length === 1 && (e2.search(o2.key), d2.value = setTimeout(() => e2.clearSearch(), 350));
        break;
    }
  }
  let b2 = l(), f2 = computed(() => b2 !== null ? (b2.value & i.Open) === i.Open : e2.listboxState.value === 0);
  return () => {
    var y2, h2;
    let o2 = { open: e2.listboxState.value === 0 }, { id: i2, ...T2 } = t2, D = { "aria-activedescendant": e2.activeOptionIndex.value === null || (y2 = e2.options.value[e2.activeOptionIndex.value]) == null ? void 0 : y2.id, "aria-multiselectable": e2.mode.value === 1 ? true : void 0, "aria-labelledby": (h2 = o$4(e2.buttonRef)) == null ? void 0 : h2.id, "aria-orientation": e2.orientation.value, id: i2, onKeydown: v2, role: "listbox", tabIndex: 0, ref: e2.optionsRef };
    return A$1({ ourProps: D, theirProps: T2, slot: o2, attrs: c$12, slots: l$1, features: N$1.RenderStrategy | N$1.Static, visible: f2.value, name: "ListboxOptions" });
  };
} }), Fe = defineComponent({ name: "ListboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false }, id: { type: String, default: () => `headlessui-listbox.option-${t$4()}` } }, setup(t2, { slots: c$12, attrs: l2, expose: L }) {
  let e2 = A("ListboxOption"), d2 = ref(null);
  L({ el: d2, $el: d2 });
  let v2 = computed(() => e2.activeOptionIndex.value !== null ? e2.options.value[e2.activeOptionIndex.value].id === t2.id : false), b2 = computed(() => u$3(e2.mode.value, { [0]: () => e2.compare(toRaw(e2.value.value), toRaw(t2.value)), [1]: () => toRaw(e2.value.value).some((r2) => e2.compare(toRaw(r2), toRaw(t2.value))) })), f2 = computed(() => u$3(e2.mode.value, { [1]: () => {
    var m;
    let r2 = toRaw(e2.value.value);
    return ((m = e2.options.value.find((a2) => r2.some((n2) => e2.compare(toRaw(n2), toRaw(a2.dataRef.value))))) == null ? void 0 : m.id) === t2.id;
  }, [0]: () => b2.value })), o2 = p(d2), i2 = computed(() => ({ disabled: t2.disabled, value: t2.value, get textValue() {
    return o2();
  }, domRef: d2 }));
  onMounted(() => e2.registerOption(t2.id, i2)), onUnmounted(() => e2.unregisterOption(t2.id)), onMounted(() => {
    watch([e2.listboxState, b2], () => {
      e2.listboxState.value === 0 && b2.value && u$3(e2.mode.value, { [1]: () => {
        f2.value && e2.goToOption(c.Specific, t2.id);
      }, [0]: () => {
        e2.goToOption(c.Specific, t2.id);
      } });
    }, { immediate: true });
  }), watchEffect(() => {
    e2.listboxState.value === 0 && v2.value && e2.activationTrigger.value !== 0 && nextTick(() => {
      var r2, m;
      return (m = (r2 = o$4(d2)) == null ? void 0 : r2.scrollIntoView) == null ? void 0 : m.call(r2, { block: "nearest" });
    });
  });
  function T2(r2) {
    if (t2.disabled)
      return r2.preventDefault();
    e2.select(t2.value), e2.mode.value === 0 && (e2.closeListbox(), nextTick(() => {
      var m;
      return (m = o$4(e2.buttonRef)) == null ? void 0 : m.focus({ preventScroll: true });
    }));
  }
  function D() {
    if (t2.disabled)
      return e2.goToOption(c.Nothing);
    e2.goToOption(c.Specific, t2.id);
  }
  let y2 = u$1();
  function h2(r2) {
    y2.update(r2);
  }
  function V(r2) {
    y2.wasMoved(r2) && (t2.disabled || v2.value || e2.goToOption(c.Specific, t2.id, 0));
  }
  function M(r2) {
    y2.wasMoved(r2) && (t2.disabled || v2.value && e2.goToOption(c.Nothing));
  }
  return () => {
    let { disabled: r2 } = t2, m = { active: v2.value, selected: b2.value, disabled: r2 }, { id: a2, value: n2, disabled: u2, ...s3 } = t2, O2 = { id: a2, ref: d2, role: "option", tabIndex: r2 === true ? void 0 : -1, "aria-disabled": r2 === true ? true : void 0, "aria-selected": b2.value, disabled: void 0, onClick: T2, onFocus: D, onPointerenter: h2, onMouseenter: h2, onPointermove: V, onMousemove: V, onPointerleave: M, onMouseleave: M };
    return A$1({ ourProps: O2, theirProps: s3, slot: m, attrs: l2, slots: c$12, name: "ListboxOption" });
  };
} });
const useFormGroup = (inputProps, config2) => {
  const formBus = inject("form-events", void 0);
  const formGroup = inject("form-group", void 0);
  inject("form-inputs", void 0);
  const inputId = ref(inputProps == null ? void 0 : inputProps.id);
  const blurred = ref(false);
  function emitFormEvent(type, path) {
    if (formBus) {
      formBus.emit({ type, path });
    }
  }
  function emitFormBlur() {
    emitFormEvent("blur", formGroup == null ? void 0 : formGroup.name.value);
    blurred.value = true;
  }
  function emitFormChange() {
    emitFormEvent("change", formGroup == null ? void 0 : formGroup.name.value);
  }
  const emitFormInput = useDebounceFn(() => {
    if (blurred.value || (formGroup == null ? void 0 : formGroup.eagerValidation.value)) {
      emitFormEvent("input", formGroup == null ? void 0 : formGroup.name.value);
    }
  }, 300);
  return {
    inputId,
    name: computed(() => (inputProps == null ? void 0 : inputProps.name) ?? (formGroup == null ? void 0 : formGroup.name.value)),
    size: computed(() => {
      var _a;
      const formGroupSize = config2.size[formGroup == null ? void 0 : formGroup.size.value] ? formGroup == null ? void 0 : formGroup.size.value : null;
      return (inputProps == null ? void 0 : inputProps.size) ?? formGroupSize ?? ((_a = config2 == null ? void 0 : config2.default) == null ? void 0 : _a.size);
    }),
    color: computed(() => {
      var _a;
      return ((_a = formGroup == null ? void 0 : formGroup.error) == null ? void 0 : _a.value) ? "red" : inputProps == null ? void 0 : inputProps.color;
    }),
    emitFormBlur,
    emitFormInput,
    emitFormChange
  };
};
function useInjectButtonGroup({ ui, props }) {
  const instance = getCurrentInstance();
  let parent = instance.parent;
  let groupContext;
  while (parent && !groupContext) {
    if (parent.type.name === "ButtonGroup") {
      groupContext = inject(`group-${parent.uid}`);
      break;
    }
    parent = parent.parent;
  }
  const positionInGroup = computed(() => groupContext == null ? void 0 : groupContext.value.children.indexOf(instance));
  onUnmounted(() => {
    groupContext == null ? void 0 : groupContext.value.unregister(instance);
  });
  return {
    size: computed(() => (groupContext == null ? void 0 : groupContext.value.size) || props.size),
    rounded: computed(() => {
      if (!groupContext || positionInGroup.value === -1)
        return ui.value.rounded;
      if (groupContext.value.children.length === 1)
        return groupContext.value.ui.rounded;
      if (positionInGroup.value === 0)
        return groupContext.value.rounded.start;
      if (positionInGroup.value === groupContext.value.children.length - 1)
        return groupContext.value.rounded.end;
      return "rounded-none";
    })
  };
}
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.select, select);
const configMenu = mergeConfig(appConfig.ui.strategy, appConfig.ui.selectMenu, selectMenu);
const _sfc_main$9 = defineComponent({
  components: {
    HCombobox: Ze,
    HComboboxButton: tt,
    HComboboxOptions: lt,
    HComboboxOption: at,
    HComboboxInput: ot,
    HListbox: Ie,
    HListboxButton: je,
    HListboxOptions: Ae,
    HListboxOption: Fe,
    UIcon: __nuxt_component_2,
    UAvatar: __nuxt_component_1$1
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number, Object, Array],
      default: ""
    },
    query: {
      type: String,
      default: null
    },
    by: {
      type: String,
      default: void 0
    },
    options: {
      type: Array,
      default: () => []
    },
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    loadingIcon: {
      type: String,
      default: () => config.default.loadingIcon
    },
    leadingIcon: {
      type: String,
      default: null
    },
    trailingIcon: {
      type: String,
      default: () => config.default.trailingIcon
    },
    trailing: {
      type: Boolean,
      default: false
    },
    leading: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    selectedIcon: {
      type: String,
      default: () => configMenu.default.selectedIcon
    },
    disabled: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    searchable: {
      type: [Boolean, Function],
      default: false
    },
    searchablePlaceholder: {
      type: String,
      default: "Search..."
    },
    clearSearchOnClose: {
      type: Boolean,
      default: () => configMenu.default.clearSearchOnClose
    },
    debounce: {
      type: Number,
      default: 200
    },
    creatable: {
      type: Boolean,
      default: false
    },
    showCreateOptionWhen: {
      type: String,
      default: () => configMenu.default.showCreateOptionWhen
    },
    placeholder: {
      type: String,
      default: null
    },
    padded: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: null,
      validator(value) {
        return Object.keys(config.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(config.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => config.default.variant,
      validator(value) {
        return [
          ...Object.keys(config.variant),
          ...Object.values(config.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    optionAttribute: {
      type: String,
      default: "label"
    },
    valueAttribute: {
      type: String,
      default: null
    },
    searchAttributes: {
      type: Array,
      default: null
    },
    popper: {
      type: Object,
      default: () => ({})
    },
    selectClass: {
      type: String,
      default: null
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    },
    uiMenu: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "update:query", "open", "close", "change"],
  setup(props, { emit, slots }) {
    const { ui, attrs } = useUI("select", toRef(props, "ui"), config, toRef(props, "class"));
    const { ui: uiMenu } = useUI("selectMenu", toRef(props, "uiMenu"), configMenu);
    const popper = computed(() => defu({}, props.popper, uiMenu.value.popper));
    const [trigger, container] = usePopper(popper.value);
    const { size: sizeButtonGroup, rounded } = useInjectButtonGroup({ ui, props });
    const { emitFormBlur, emitFormChange, inputId, color, size: sizeFormGroup, name } = useFormGroup(props, config);
    const size = computed(() => sizeButtonGroup.value || sizeFormGroup.value);
    const internalQuery = ref("");
    const query = computed({
      get() {
        return props.query ?? internalQuery.value;
      },
      set(value) {
        internalQuery.value = value;
        emit("update:query", value);
      }
    });
    const selectClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[color.value]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        uiMenu.value.select,
        rounded.value,
        ui.value.size[size.value],
        ui.value.gap[size.value],
        props.padded ? ui.value.padding[size.value] : "p-0",
        variant == null ? void 0 : variant.replaceAll("{color}", color.value),
        (isLeading.value || slots.leading) && ui.value.leading.padding[size.value],
        (isTrailing.value || slots.trailing) && ui.value.trailing.padding[size.value]
      ), props.selectClass);
    });
    const isLeading = computed(() => {
      return props.icon && props.leading || props.icon && !props.trailing || props.loading && !props.trailing || props.leadingIcon;
    });
    const isTrailing = computed(() => {
      return props.icon && props.trailing || props.loading && props.trailing || props.trailingIcon;
    });
    const leadingIconName = computed(() => {
      if (props.loading) {
        return props.loadingIcon;
      }
      return props.leadingIcon || props.icon;
    });
    const trailingIconName = computed(() => {
      if (props.loading && !isLeading.value) {
        return props.loadingIcon;
      }
      return props.trailingIcon || props.icon;
    });
    const leadingWrapperIconClass = computed(() => {
      return twJoin(
        ui.value.icon.leading.wrapper,
        ui.value.icon.leading.pointer,
        ui.value.icon.leading.padding[size.value]
      );
    });
    const leadingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        color.value && appConfig.ui.colors.includes(color.value) && ui.value.icon.color.replaceAll("{color}", color.value),
        ui.value.icon.size[size.value],
        props.loading && ui.value.icon.loading
      );
    });
    const trailingWrapperIconClass = computed(() => {
      return twJoin(
        ui.value.icon.trailing.wrapper,
        ui.value.icon.trailing.pointer,
        ui.value.icon.trailing.padding[size.value]
      );
    });
    const trailingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        color.value && appConfig.ui.colors.includes(color.value) && ui.value.icon.color.replaceAll("{color}", color.value),
        ui.value.icon.size[size.value],
        props.loading && !isLeading.value && ui.value.icon.loading
      );
    });
    const debouncedSearch = typeof props.searchable === "function" ? useDebounceFn(props.searchable, props.debounce) : void 0;
    const filteredOptions = computedAsync(async () => {
      if (props.searchable && debouncedSearch) {
        return await debouncedSearch(query.value);
      }
      if (query.value === "") {
        return props.options;
      }
      return props.options.filter((option) => {
        var _a;
        return (((_a = props.searchAttributes) == null ? void 0 : _a.length) ? props.searchAttributes : [props.optionAttribute]).some((searchAttribute) => {
          if (["string", "number"].includes(typeof option)) {
            return String(option).search(new RegExp(query.value, "i")) !== -1;
          }
          const child = get(option, searchAttribute);
          return child !== null && child !== void 0 && String(child).search(new RegExp(query.value, "i")) !== -1;
        });
      });
    });
    const createOption = computed(() => {
      if (query.value === "") {
        return null;
      }
      if (props.showCreateOptionWhen === "empty" && filteredOptions.value.length) {
        return null;
      }
      if (props.showCreateOptionWhen === "always") {
        const existingOption = filteredOptions.value.find((option) => ["string", "number"].includes(typeof option) ? option === query.value : option[props.optionAttribute] === query.value);
        if (existingOption) {
          return null;
        }
      }
      return ["string", "number"].includes(typeof props.modelValue) ? query.value : { [props.optionAttribute]: query.value };
    });
    function clearOnClose() {
      if (props.clearSearchOnClose) {
        query.value = "";
      }
    }
    watch(container, (value) => {
      if (value) {
        emit("open");
      } else {
        clearOnClose();
        emit("close");
        emitFormBlur();
      }
    });
    function onUpdate(event) {
      emit("update:modelValue", event);
      emit("change", event);
      emitFormChange();
    }
    function onChange(event) {
      query.value = event.target.value;
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      // eslint-disable-next-line vue/no-dupe-keys
      uiMenu,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      name,
      inputId,
      // eslint-disable-next-line vue/no-dupe-keys
      popper,
      trigger,
      container,
      isLeading,
      isTrailing,
      // eslint-disable-next-line vue/no-dupe-keys
      selectClass,
      leadingIconName,
      leadingIconClass,
      leadingWrapperIconClass,
      trailingIconName,
      trailingIconClass,
      trailingWrapperIconClass,
      filteredOptions,
      createOption,
      // eslint-disable-next-line vue/no-dupe-keys
      query,
      onUpdate,
      onChange
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_2;
  const _component_HComboboxInput = resolveComponent("HComboboxInput");
  const _component_UAvatar = __nuxt_component_1$1;
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.searchable ? "HCombobox" : "HListbox"), mergeProps({
    by: _ctx.by,
    name: _ctx.name,
    "model-value": _ctx.modelValue,
    multiple: _ctx.multiple,
    disabled: _ctx.disabled,
    as: "div",
    class: _ctx.ui.wrapper,
    "onUpdate:modelValue": _ctx.onUpdate
  }, _attrs), {
    default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (_ctx.required) {
          _push2(`<input${ssrRenderAttr("value", _ctx.modelValue)}${ssrIncludeBooleanAttr(_ctx.required) ? " required" : ""} class="${ssrRenderClass(_ctx.uiMenu.required)}" tabindex="-1" aria-hidden="true"${_scopeId}>`);
        } else {
          _push2(`<!---->`);
        }
        ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(_ctx.searchable ? "HComboboxButton" : "HListboxButton"), {
          ref: "trigger",
          as: "div",
          role: "button",
          class: _ctx.uiMenu.trigger
        }, {
          default: withCtx((_, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              ssrRenderSlot(_ctx.$slots, "default", {
                open,
                disabled: _ctx.disabled,
                loading: _ctx.loading
              }, () => {
                _push3(`<button${ssrRenderAttrs(mergeProps({
                  id: _ctx.inputId,
                  class: _ctx.selectClass,
                  disabled: _ctx.disabled,
                  type: "button"
                }, _ctx.attrs))}${_scopeId2}>`);
                if (_ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading) {
                  _push3(`<span class="${ssrRenderClass(_ctx.leadingWrapperIconClass)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "leading", {
                    disabled: _ctx.disabled,
                    loading: _ctx.loading
                  }, () => {
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: _ctx.leadingIconName,
                      class: _ctx.leadingIconClass
                    }, null, _parent3, _scopeId2));
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</span>`);
                } else {
                  _push3(`<!---->`);
                }
                ssrRenderSlot(_ctx.$slots, "label", {}, () => {
                  if (_ctx.multiple && Array.isArray(_ctx.modelValue) && _ctx.modelValue.length) {
                    _push3(`<span class="${ssrRenderClass(_ctx.uiMenu.label)}"${_scopeId2}>${ssrInterpolate(_ctx.modelValue.length)} selected</span>`);
                  } else if (!_ctx.multiple && _ctx.modelValue) {
                    _push3(`<span class="${ssrRenderClass(_ctx.uiMenu.label)}"${_scopeId2}>${ssrInterpolate(["string", "number"].includes(typeof _ctx.modelValue) ? _ctx.modelValue : _ctx.modelValue[_ctx.optionAttribute])}</span>`);
                  } else {
                    _push3(`<span class="${ssrRenderClass(_ctx.uiMenu.label)}"${_scopeId2}>${ssrInterpolate(_ctx.placeholder || " ")}</span>`);
                  }
                }, _push3, _parent3, _scopeId2);
                if (_ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing) {
                  _push3(`<span class="${ssrRenderClass(_ctx.trailingWrapperIconClass)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "trailing", {
                    disabled: _ctx.disabled,
                    loading: _ctx.loading
                  }, () => {
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: _ctx.trailingIconName,
                      class: _ctx.trailingIconClass,
                      "aria-hidden": "true"
                    }, null, _parent3, _scopeId2));
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</span>`);
                } else {
                  _push3(`<!---->`);
                }
                _push3(`</button>`);
              }, _push3, _parent3, _scopeId2);
            } else {
              return [
                renderSlot(_ctx.$slots, "default", {
                  open,
                  disabled: _ctx.disabled,
                  loading: _ctx.loading
                }, () => [
                  createVNode("button", mergeProps({
                    id: _ctx.inputId,
                    class: _ctx.selectClass,
                    disabled: _ctx.disabled,
                    type: "button"
                  }, _ctx.attrs), [
                    _ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: _ctx.leadingWrapperIconClass
                    }, [
                      renderSlot(_ctx.$slots, "leading", {
                        disabled: _ctx.disabled,
                        loading: _ctx.loading
                      }, () => [
                        createVNode(_component_UIcon, {
                          name: _ctx.leadingIconName,
                          class: _ctx.leadingIconClass
                        }, null, 8, ["name", "class"])
                      ])
                    ], 2)) : createCommentVNode("", true),
                    renderSlot(_ctx.$slots, "label", {}, () => [
                      _ctx.multiple && Array.isArray(_ctx.modelValue) && _ctx.modelValue.length ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: _ctx.uiMenu.label
                      }, toDisplayString(_ctx.modelValue.length) + " selected", 3)) : !_ctx.multiple && _ctx.modelValue ? (openBlock(), createBlock("span", {
                        key: 1,
                        class: _ctx.uiMenu.label
                      }, toDisplayString(["string", "number"].includes(typeof _ctx.modelValue) ? _ctx.modelValue : _ctx.modelValue[_ctx.optionAttribute]), 3)) : (openBlock(), createBlock("span", {
                        key: 2,
                        class: _ctx.uiMenu.label
                      }, toDisplayString(_ctx.placeholder || " "), 3))
                    ]),
                    _ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing ? (openBlock(), createBlock("span", {
                      key: 1,
                      class: _ctx.trailingWrapperIconClass
                    }, [
                      renderSlot(_ctx.$slots, "trailing", {
                        disabled: _ctx.disabled,
                        loading: _ctx.loading
                      }, () => [
                        createVNode(_component_UIcon, {
                          name: _ctx.trailingIconName,
                          class: _ctx.trailingIconClass,
                          "aria-hidden": "true"
                        }, null, 8, ["name", "class"])
                      ])
                    ], 2)) : createCommentVNode("", true)
                  ], 16, ["id", "disabled"])
                ])
              ];
            }
          }),
          _: 2
        }), _parent2, _scopeId);
        if (open) {
          _push2(`<div class="${ssrRenderClass([_ctx.uiMenu.container, _ctx.uiMenu.width])}"${_scopeId}><template><div${_scopeId}>`);
          if (_ctx.popper.arrow) {
            _push2(`<div data-popper-arrow class="${ssrRenderClass(Object.values(_ctx.uiMenu.arrow))}"${_scopeId}></div>`);
          } else {
            _push2(`<!---->`);
          }
          ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(_ctx.searchable ? "HComboboxOptions" : "HListboxOptions"), {
            static: "",
            class: [_ctx.uiMenu.base, _ctx.uiMenu.ring, _ctx.uiMenu.rounded, _ctx.uiMenu.shadow, _ctx.uiMenu.background, _ctx.uiMenu.padding, _ctx.uiMenu.height]
          }, {
            default: withCtx((_, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                if (_ctx.searchable) {
                  _push3(ssrRenderComponent(_component_HComboboxInput, {
                    "display-value": () => _ctx.query,
                    name: "q",
                    placeholder: _ctx.searchablePlaceholder,
                    autofocus: "",
                    autocomplete: "off",
                    class: _ctx.uiMenu.input,
                    onChange: _ctx.onChange
                  }, null, _parent3, _scopeId2));
                } else {
                  _push3(`<!---->`);
                }
                _push3(`<!--[-->`);
                ssrRenderList(_ctx.filteredOptions, (option, index) => {
                  ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                    key: index,
                    as: "template",
                    value: _ctx.valueAttribute ? option[_ctx.valueAttribute] : option,
                    disabled: option.disabled
                  }, {
                    default: withCtx(({ active, selected, disabled: optionDisabled }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<li class="${ssrRenderClass([_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, selected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled])}"${_scopeId3}><div class="${ssrRenderClass(_ctx.uiMenu.option.container)}"${_scopeId3}>`);
                        ssrRenderSlot(_ctx.$slots, "option", {
                          option,
                          active,
                          selected
                        }, () => {
                          if (option.icon) {
                            _push4(ssrRenderComponent(_component_UIcon, {
                              name: option.icon,
                              class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                              "aria-hidden": "true"
                            }, null, _parent4, _scopeId3));
                          } else if (option.avatar) {
                            _push4(ssrRenderComponent(_component_UAvatar, mergeProps({ size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                              class: _ctx.uiMenu.option.avatar.base,
                              "aria-hidden": "true"
                            }), null, _parent4, _scopeId3));
                          } else if (option.chip) {
                            _push4(`<span class="${ssrRenderClass(_ctx.uiMenu.option.chip.base)}" style="${ssrRenderStyle({ background: `#${option.chip}` })}"${_scopeId3}></span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<span class="truncate"${_scopeId3}>${ssrInterpolate(["string", "number"].includes(typeof option) ? option : option[_ctx.optionAttribute])}</span>`);
                        }, _push4, _parent4, _scopeId3);
                        _push4(`</div>`);
                        if (selected) {
                          _push4(`<span class="${ssrRenderClass([_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding])}"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_UIcon, {
                            name: _ctx.selectedIcon,
                            class: _ctx.uiMenu.option.selectedIcon.base,
                            "aria-hidden": "true"
                          }, null, _parent4, _scopeId3));
                          _push4(`</span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</li>`);
                      } else {
                        return [
                          createVNode("li", {
                            class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, selected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled]
                          }, [
                            createVNode("div", {
                              class: _ctx.uiMenu.option.container
                            }, [
                              renderSlot(_ctx.$slots, "option", {
                                option,
                                active,
                                selected
                              }, () => [
                                option.icon ? (openBlock(), createBlock(_component_UIcon, {
                                  key: 0,
                                  name: option.icon,
                                  class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                                  "aria-hidden": "true"
                                }, null, 8, ["name", "class"])) : option.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({ key: 1 }, { size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                                  class: _ctx.uiMenu.option.avatar.base,
                                  "aria-hidden": "true"
                                }), null, 16, ["class"])) : option.chip ? (openBlock(), createBlock("span", {
                                  key: 2,
                                  class: _ctx.uiMenu.option.chip.base,
                                  style: { background: `#${option.chip}` }
                                }, null, 6)) : createCommentVNode("", true),
                                createVNode("span", { class: "truncate" }, toDisplayString(["string", "number"].includes(typeof option) ? option : option[_ctx.optionAttribute]), 1)
                              ])
                            ], 2),
                            selected ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: [_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding]
                            }, [
                              createVNode(_component_UIcon, {
                                name: _ctx.selectedIcon,
                                class: _ctx.uiMenu.option.selectedIcon.base,
                                "aria-hidden": "true"
                              }, null, 8, ["name", "class"])
                            ], 2)) : createCommentVNode("", true)
                          ], 2)
                        ];
                      }
                    }),
                    _: 2
                  }), _parent3, _scopeId2);
                });
                _push3(`<!--]-->`);
                if (_ctx.creatable && _ctx.createOption) {
                  ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                    value: _ctx.createOption,
                    as: "template"
                  }, {
                    default: withCtx(({ active, selected }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<li class="${ssrRenderClass([_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive])}"${_scopeId3}><div class="${ssrRenderClass(_ctx.uiMenu.option.container)}"${_scopeId3}>`);
                        ssrRenderSlot(_ctx.$slots, "option-create", {
                          option: _ctx.createOption,
                          active,
                          selected
                        }, () => {
                          _push4(`<span class="${ssrRenderClass(_ctx.uiMenu.option.create)}"${_scopeId3}>Create &quot;${ssrInterpolate(_ctx.createOption[_ctx.optionAttribute])}&quot;</span>`);
                        }, _push4, _parent4, _scopeId3);
                        _push4(`</div></li>`);
                      } else {
                        return [
                          createVNode("li", {
                            class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive]
                          }, [
                            createVNode("div", {
                              class: _ctx.uiMenu.option.container
                            }, [
                              renderSlot(_ctx.$slots, "option-create", {
                                option: _ctx.createOption,
                                active,
                                selected
                              }, () => [
                                createVNode("span", {
                                  class: _ctx.uiMenu.option.create
                                }, 'Create "' + toDisplayString(_ctx.createOption[_ctx.optionAttribute]) + '"', 3)
                              ])
                            ], 2)
                          ], 2)
                        ];
                      }
                    }),
                    _: 2
                  }), _parent3, _scopeId2);
                } else if (_ctx.searchable && _ctx.query && !_ctx.filteredOptions.length) {
                  _push3(`<p class="${ssrRenderClass(_ctx.uiMenu.option.empty)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "option-empty", { query: _ctx.query }, () => {
                    _push3(` No results for &quot;${ssrInterpolate(_ctx.query)}&quot;. `);
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</p>`);
                } else if (!_ctx.filteredOptions.length) {
                  _push3(`<p class="${ssrRenderClass(_ctx.uiMenu.empty)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "empty", { query: _ctx.query }, () => {
                    _push3(` No options. `);
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</p>`);
                } else {
                  _push3(`<!---->`);
                }
              } else {
                return [
                  _ctx.searchable ? (openBlock(), createBlock(_component_HComboboxInput, {
                    key: 0,
                    "display-value": () => _ctx.query,
                    name: "q",
                    placeholder: _ctx.searchablePlaceholder,
                    autofocus: "",
                    autocomplete: "off",
                    class: _ctx.uiMenu.input,
                    onChange: _ctx.onChange
                  }, null, 8, ["display-value", "placeholder", "class", "onChange"])) : createCommentVNode("", true),
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.filteredOptions, (option, index) => {
                    return openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                      key: index,
                      as: "template",
                      value: _ctx.valueAttribute ? option[_ctx.valueAttribute] : option,
                      disabled: option.disabled
                    }, {
                      default: withCtx(({ active, selected, disabled: optionDisabled }) => [
                        createVNode("li", {
                          class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, selected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled]
                        }, [
                          createVNode("div", {
                            class: _ctx.uiMenu.option.container
                          }, [
                            renderSlot(_ctx.$slots, "option", {
                              option,
                              active,
                              selected
                            }, () => [
                              option.icon ? (openBlock(), createBlock(_component_UIcon, {
                                key: 0,
                                name: option.icon,
                                class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                                "aria-hidden": "true"
                              }, null, 8, ["name", "class"])) : option.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({ key: 1 }, { size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                                class: _ctx.uiMenu.option.avatar.base,
                                "aria-hidden": "true"
                              }), null, 16, ["class"])) : option.chip ? (openBlock(), createBlock("span", {
                                key: 2,
                                class: _ctx.uiMenu.option.chip.base,
                                style: { background: `#${option.chip}` }
                              }, null, 6)) : createCommentVNode("", true),
                              createVNode("span", { class: "truncate" }, toDisplayString(["string", "number"].includes(typeof option) ? option : option[_ctx.optionAttribute]), 1)
                            ])
                          ], 2),
                          selected ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: [_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding]
                          }, [
                            createVNode(_component_UIcon, {
                              name: _ctx.selectedIcon,
                              class: _ctx.uiMenu.option.selectedIcon.base,
                              "aria-hidden": "true"
                            }, null, 8, ["name", "class"])
                          ], 2)) : createCommentVNode("", true)
                        ], 2)
                      ]),
                      _: 2
                    }, 1032, ["value", "disabled"]);
                  }), 128)),
                  _ctx.creatable && _ctx.createOption ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                    key: 1,
                    value: _ctx.createOption,
                    as: "template"
                  }, {
                    default: withCtx(({ active, selected }) => [
                      createVNode("li", {
                        class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive]
                      }, [
                        createVNode("div", {
                          class: _ctx.uiMenu.option.container
                        }, [
                          renderSlot(_ctx.$slots, "option-create", {
                            option: _ctx.createOption,
                            active,
                            selected
                          }, () => [
                            createVNode("span", {
                              class: _ctx.uiMenu.option.create
                            }, 'Create "' + toDisplayString(_ctx.createOption[_ctx.optionAttribute]) + '"', 3)
                          ])
                        ], 2)
                      ], 2)
                    ]),
                    _: 3
                  }, 8, ["value"])) : _ctx.searchable && _ctx.query && !_ctx.filteredOptions.length ? (openBlock(), createBlock("p", {
                    key: 2,
                    class: _ctx.uiMenu.option.empty
                  }, [
                    renderSlot(_ctx.$slots, "option-empty", { query: _ctx.query }, () => [
                      createTextVNode(' No results for "' + toDisplayString(_ctx.query) + '". ', 1)
                    ])
                  ], 2)) : !_ctx.filteredOptions.length ? (openBlock(), createBlock("p", {
                    key: 3,
                    class: _ctx.uiMenu.empty
                  }, [
                    renderSlot(_ctx.$slots, "empty", { query: _ctx.query }, () => [
                      createTextVNode(" No options. ")
                    ])
                  ], 2)) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }), _parent2, _scopeId);
          _push2(`</div></template></div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          _ctx.required ? (openBlock(), createBlock("input", {
            key: 0,
            value: _ctx.modelValue,
            required: _ctx.required,
            class: _ctx.uiMenu.required,
            tabindex: "-1",
            "aria-hidden": "true"
          }, null, 10, ["value", "required"])) : createCommentVNode("", true),
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxButton" : "HListboxButton"), {
            ref: "trigger",
            as: "div",
            role: "button",
            class: _ctx.uiMenu.trigger
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default", {
                open,
                disabled: _ctx.disabled,
                loading: _ctx.loading
              }, () => [
                createVNode("button", mergeProps({
                  id: _ctx.inputId,
                  class: _ctx.selectClass,
                  disabled: _ctx.disabled,
                  type: "button"
                }, _ctx.attrs), [
                  _ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: _ctx.leadingWrapperIconClass
                  }, [
                    renderSlot(_ctx.$slots, "leading", {
                      disabled: _ctx.disabled,
                      loading: _ctx.loading
                    }, () => [
                      createVNode(_component_UIcon, {
                        name: _ctx.leadingIconName,
                        class: _ctx.leadingIconClass
                      }, null, 8, ["name", "class"])
                    ])
                  ], 2)) : createCommentVNode("", true),
                  renderSlot(_ctx.$slots, "label", {}, () => [
                    _ctx.multiple && Array.isArray(_ctx.modelValue) && _ctx.modelValue.length ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: _ctx.uiMenu.label
                    }, toDisplayString(_ctx.modelValue.length) + " selected", 3)) : !_ctx.multiple && _ctx.modelValue ? (openBlock(), createBlock("span", {
                      key: 1,
                      class: _ctx.uiMenu.label
                    }, toDisplayString(["string", "number"].includes(typeof _ctx.modelValue) ? _ctx.modelValue : _ctx.modelValue[_ctx.optionAttribute]), 3)) : (openBlock(), createBlock("span", {
                      key: 2,
                      class: _ctx.uiMenu.label
                    }, toDisplayString(_ctx.placeholder || " "), 3))
                  ]),
                  _ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: _ctx.trailingWrapperIconClass
                  }, [
                    renderSlot(_ctx.$slots, "trailing", {
                      disabled: _ctx.disabled,
                      loading: _ctx.loading
                    }, () => [
                      createVNode(_component_UIcon, {
                        name: _ctx.trailingIconName,
                        class: _ctx.trailingIconClass,
                        "aria-hidden": "true"
                      }, null, 8, ["name", "class"])
                    ])
                  ], 2)) : createCommentVNode("", true)
                ], 16, ["id", "disabled"])
              ])
            ]),
            _: 2
          }, 1032, ["class"])),
          open ? (openBlock(), createBlock("div", {
            key: 1,
            ref: "container",
            class: [_ctx.uiMenu.container, _ctx.uiMenu.width]
          }, [
            createVNode(Transition, mergeProps({ appear: "" }, _ctx.uiMenu.transition), {
              default: withCtx(() => [
                createVNode("div", null, [
                  _ctx.popper.arrow ? (openBlock(), createBlock("div", {
                    key: 0,
                    "data-popper-arrow": "",
                    class: Object.values(_ctx.uiMenu.arrow)
                  }, null, 2)) : createCommentVNode("", true),
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOptions" : "HListboxOptions"), {
                    static: "",
                    class: [_ctx.uiMenu.base, _ctx.uiMenu.ring, _ctx.uiMenu.rounded, _ctx.uiMenu.shadow, _ctx.uiMenu.background, _ctx.uiMenu.padding, _ctx.uiMenu.height]
                  }, {
                    default: withCtx(() => [
                      _ctx.searchable ? (openBlock(), createBlock(_component_HComboboxInput, {
                        key: 0,
                        "display-value": () => _ctx.query,
                        name: "q",
                        placeholder: _ctx.searchablePlaceholder,
                        autofocus: "",
                        autocomplete: "off",
                        class: _ctx.uiMenu.input,
                        onChange: _ctx.onChange
                      }, null, 8, ["display-value", "placeholder", "class", "onChange"])) : createCommentVNode("", true),
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.filteredOptions, (option, index) => {
                        return openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                          key: index,
                          as: "template",
                          value: _ctx.valueAttribute ? option[_ctx.valueAttribute] : option,
                          disabled: option.disabled
                        }, {
                          default: withCtx(({ active, selected, disabled: optionDisabled }) => [
                            createVNode("li", {
                              class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, selected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled]
                            }, [
                              createVNode("div", {
                                class: _ctx.uiMenu.option.container
                              }, [
                                renderSlot(_ctx.$slots, "option", {
                                  option,
                                  active,
                                  selected
                                }, () => [
                                  option.icon ? (openBlock(), createBlock(_component_UIcon, {
                                    key: 0,
                                    name: option.icon,
                                    class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                                    "aria-hidden": "true"
                                  }, null, 8, ["name", "class"])) : option.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({ key: 1 }, { size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                                    class: _ctx.uiMenu.option.avatar.base,
                                    "aria-hidden": "true"
                                  }), null, 16, ["class"])) : option.chip ? (openBlock(), createBlock("span", {
                                    key: 2,
                                    class: _ctx.uiMenu.option.chip.base,
                                    style: { background: `#${option.chip}` }
                                  }, null, 6)) : createCommentVNode("", true),
                                  createVNode("span", { class: "truncate" }, toDisplayString(["string", "number"].includes(typeof option) ? option : option[_ctx.optionAttribute]), 1)
                                ])
                              ], 2),
                              selected ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: [_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding]
                              }, [
                                createVNode(_component_UIcon, {
                                  name: _ctx.selectedIcon,
                                  class: _ctx.uiMenu.option.selectedIcon.base,
                                  "aria-hidden": "true"
                                }, null, 8, ["name", "class"])
                              ], 2)) : createCommentVNode("", true)
                            ], 2)
                          ]),
                          _: 2
                        }, 1032, ["value", "disabled"]);
                      }), 128)),
                      _ctx.creatable && _ctx.createOption ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                        key: 1,
                        value: _ctx.createOption,
                        as: "template"
                      }, {
                        default: withCtx(({ active, selected }) => [
                          createVNode("li", {
                            class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive]
                          }, [
                            createVNode("div", {
                              class: _ctx.uiMenu.option.container
                            }, [
                              renderSlot(_ctx.$slots, "option-create", {
                                option: _ctx.createOption,
                                active,
                                selected
                              }, () => [
                                createVNode("span", {
                                  class: _ctx.uiMenu.option.create
                                }, 'Create "' + toDisplayString(_ctx.createOption[_ctx.optionAttribute]) + '"', 3)
                              ])
                            ], 2)
                          ], 2)
                        ]),
                        _: 3
                      }, 8, ["value"])) : _ctx.searchable && _ctx.query && !_ctx.filteredOptions.length ? (openBlock(), createBlock("p", {
                        key: 2,
                        class: _ctx.uiMenu.option.empty
                      }, [
                        renderSlot(_ctx.$slots, "option-empty", { query: _ctx.query }, () => [
                          createTextVNode(' No results for "' + toDisplayString(_ctx.query) + '". ', 1)
                        ])
                      ], 2)) : !_ctx.filteredOptions.length ? (openBlock(), createBlock("p", {
                        key: 3,
                        class: _ctx.uiMenu.empty
                      }, [
                        renderSlot(_ctx.$slots, "empty", { query: _ctx.query }, () => [
                          createTextVNode(" No options. ")
                        ])
                      ], 2)) : createCommentVNode("", true)
                    ]),
                    _: 3
                  }, 8, ["class"]))
                ])
              ]),
              _: 3
            }, 16)
          ], 2)) : createCommentVNode("", true)
        ];
      }
    }),
    _: 3
  }), _parent);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/SelectMenu.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$1]]);
const useCloudStore = defineStore("folder", {
  state: () => ({
    bin: {
      folders: [],
      files: []
    },
    folder: {
      name: "",
      parent_id: "",
      updated_at: "",
      id: null,
      folders: {
        id: "",
        name: ""
      },
      files: {
        file_url: "",
        name: "",
        updated_at: ""
      }
    },
    moveObject: {},
    showObjectElem: false,
    showAccessSetting: false,
    hasFileInBin: false
  }),
  getters: {
    get_hasFileInBin: (state) => state.hasFileInBin,
    get_all_folders(folder) {
      return this.folder;
    },
    get_folder(folder) {
      return this.folder;
    },
    get_bin(folder) {
      return this.bin;
    },
    get_all_files(files) {
      return this.folder.files;
    }
  },
  actions: {
    async loadAllFolders() {
      await axios.get(`api/v1/folder/main-folder`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.folder = response.data;
      });
    },
    async loadFolder(params) {
      await axios.get(`api/v1/folder/${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.folder = response.data;
      });
    },
    async loadFiles(params) {
      await axios.get(`api/v1/files/${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        this.folder.files = res.data;
      });
    },
    async loadhasFileInBin() {
      await axios.get(`api/v1/bin`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        if (response.data.folders.length > 0 || response.data.files.length > 0) {
          this.hasFileInBin = true;
        } else {
          this.hasFileInBin = false;
        }
      });
    },
    async loadBin(params) {
      await axios.get(`api/v1/bin`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.bin = response.data;
        this.folder = this.bin;
      });
    },
    async moveToBin(params) {
      await axios.delete(`api/v1/bin/move?${params.elem_type}=${params.elem_id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        toast.success("Перемещен в корзину", { theme: "auto", autoClose: 1500 });
        this.hasFileInBin = true;
        if (this.folder.parent_id) {
          this.loadFolder({ id: this.folder.id });
        } else if (!this.folder.parent_id) {
          this.loadAllFolders();
        }
      });
    },
    async moveFromBin(params) {
      await axios.delete(`api/v1/bin/move?${params.elem_type}=${params.elem_id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        toast.success("Успешно восстановлен", { theme: "auto", autoClose: 1500 });
        this.hasFileInBin = true;
        this.folder = res.data;
        this.loadBin({ bin: this.bin });
      });
    },
    async deleteInBin(params) {
      await axios.delete(`api/v1/bin/delete?${params.delete_type}=${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        toast.success("Успешно удалён", { theme: "auto", autoClose: 1500 });
        this.folder = res.data;
        this.loadBin();
      });
    },
    async delete(params) {
      await axios.delete(`api/v1/folder-file/delete/${params.id}`, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        toast.success("Успешно удалён", { theme: "auto", autoClose: 1500 });
        this.folder = res.data;
        this.loadBin();
      });
    },
    async create_folder(params) {
      await axios.post(`api/v1/folder/create`, {
        name: params.name,
        parent_id: params.parent_id
      }, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        this.folder = response.data;
        this.loadAllFolders();
      });
    },
    async update_folder(params) {
      await axios.patch(`api/v1/folder/update/${params.folder_id}`, {
        name: params.name,
        parent_id: params.parent_id
      }, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((response) => {
        if (!this.folder.parent_id) {
          this.loadAllFolders();
        } else if (this.folder.parent_id) {
          this.loadFolder({ id: this.folder.id });
        }
        toast.success("Папка успешно изменена", { autoClose: 1500, theme: "auto" });
      });
    },
    async update_file(params) {
      await axios.patch(`api/v1/file/update/${params.file_id}`, {
        name: params.name,
        folder_id: params.folder_id
      }, {
        headers: {
          Authorization: `Bearer ${nuxtStorage.localStorage.getData("token")}`
        }
      }).then((res) => {
        if (!this.folder.parent_id) {
          this.loadAllFolders();
        } else if (this.folder.parent_id) {
          this.loadFolder({ id: this.folder.id });
        }
        toast.success("Успешно изменён", { autoClose: 1500, theme: "auto" });
      });
    }
  }
});
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "TheCloudUIFoldersItem",
  __ssrInlineRender: true,
  props: {
    folderLink: {
      type: String,
      default: ""
    },
    activeFolder: {
      type: String,
      default: ""
    },
    changeView: {
      type: String,
      default: "list"
    },
    typeElem: {
      type: String,
      default: ""
    },
    contextMenu: {
      type: Number,
      default: null
    },
    showRead: {
      type: Boolean,
      default: false
    },
    showInfo: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["flex relative cursor-pointer rounded-xl p-2 hover:bg-gray-200 dark:hover:bg-gray-700 items-center justify-between tracking-widest text-sm dark:text-white", { "flex-col": __props.changeView === "tile" }]
      }, _attrs))}><div class="${ssrRenderClass([{ "flex-col": __props.changeView === "tile" }, "flex items-center gap-x-6"])}"><div>`);
      ssrRenderSlot(_ctx.$slots, "folderSvg", {}, null, _push, _parent);
      _push(`</div><div class="">`);
      ssrRenderSlot(_ctx.$slots, "folderName", {
        class: { "text-base": __props.changeView === "tile" }
      }, null, _push, _parent);
      _push(`</div></div><div class="${ssrRenderClass([{ "hidden": __props.changeView === "tile" }, "flex justify-evenly gap-x-10 items-center"])}"><p>`);
      ssrRenderSlot(_ctx.$slots, "folderDate", {}, null, _push, _parent);
      _push(`</p><p>`);
      ssrRenderSlot(_ctx.$slots, "folderMemory", {}, null, _push, _parent);
      _push(`</p></div></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cloud/CloudUI/TheCloudUIFoldersItem.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "TheCloudUIFilesItem",
  __ssrInlineRender: true,
  props: {
    folderLink: {
      type: String,
      default: ""
    },
    changeView: {
      type: String,
      default: "list"
    },
    typeElem: {
      type: String,
      default: ""
    },
    contextMenu: {
      type: Number,
      default: null
    },
    showRead: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        draggable: __props.typeElem === "file",
        class: ["flex relative transition-all duration-200 cursor-pointer rounded-xl p-2 hover:bg-gray-200 dark:hover:bg-gray-700 items-center justify-between tracking-widest text-sm dark:text-white", { "flex-col": __props.changeView === "tile" }]
      }, _attrs))}><div class="${ssrRenderClass([{ "flex-col": __props.changeView === "tile" }, "flex items-center gap-x-6"])}"><div>`);
      ssrRenderSlot(_ctx.$slots, "fileSvg", {}, null, _push, _parent);
      _push(`</div><div>`);
      ssrRenderSlot(_ctx.$slots, "fileName", {
        class: { "text-base": __props.changeView === "tile" }
      }, null, _push, _parent);
      _push(`</div></div><div class="${ssrRenderClass([{ "hidden": __props.changeView === "tile" }, "flex justify-evenly gap-x-10 items-center"])}"><p>`);
      ssrRenderSlot(_ctx.$slots, "fileDate", {}, null, _push, _parent);
      _push(`</p><p>`);
      ssrRenderSlot(_ctx.$slots, "fileMemory", {}, null, _push, _parent);
      _push(`</p></div></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cloud/CloudUI/TheCloudUIFilesItem.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "TheCloudUIContextMenuItem",
  __ssrInlineRender: true,
  props: {
    menuType: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.menuType === "uploadCloudFiles") {
        _push(`<label${ssrRenderAttrs(mergeProps({
          for: "uploadCloudFiles",
          class: "dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10"
        }, _attrs))}><div>`);
        ssrRenderSlot(_ctx.$slots, "ContextMenuSvg", {}, null, _push, _parent);
        _push(`</div><span>`);
        ssrRenderSlot(_ctx.$slots, "ContextMenuText", {}, null, _push, _parent);
        _push(`</span><div>`);
        ssrRenderSlot(_ctx.$slots, "ContextMenuContent", {}, null, _push, _parent);
        _push(`</div></label>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10" }, _attrs))}><div>`);
        ssrRenderSlot(_ctx.$slots, "ContextMenuSvg", {}, null, _push, _parent);
        _push(`</div><p>`);
        ssrRenderSlot(_ctx.$slots, "ContextMenuText", {}, null, _push, _parent);
        _push(`</p><div>`);
        ssrRenderSlot(_ctx.$slots, "ContextMenuContent", {}, null, _push, _parent);
        _push(`</div></div>`);
      }
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cloud/CloudUI/TheCloudUIContextMenuItem.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "TheCloudUIFolders",
  __ssrInlineRender: true,
  props: {
    createShow: {
      type: Boolean,
      default: false
    },
    showRead: {
      type: Boolean,
      default: false
    },
    folderObject: {
      type: Object,
      default: () => {
      }
    },
    elemObject: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    const currentUser = useAuthStore();
    useRouter();
    const cloudStore = useCloudStore();
    cloudStore.loadAllFolders();
    const accessControl = {
      text: "У вас нет доступа",
      autoClose: 1e3,
      theme: "auto"
    };
    const activeElem = ref({ id: 0, type: "" });
    const cart = ref(true);
    const uploadFile = ref();
    const createFolder = ref({
      name: ""
    });
    const props = __props;
    const view = [
      {
        label: "Список",
        icon: "i-heroicons-list-bullet",
        type: "list"
      },
      {
        label: "Плитка",
        icon: "i-heroicons-squares-2x2",
        type: "tile"
      }
    ];
    const selected = ref(view[0]);
    const { x, y: y2 } = useMouse();
    const { y: windowY } = useWindowScroll();
    const folderSettingShow = ref(false);
    const fileSettingShow = ref(false);
    const cloudSettingShow = ref(false);
    const folderVirtualElem = ref({ getBoundingClientRect: () => ({}) });
    const fileVirtualElem = ref({ getBoundingClientRect: () => ({}) });
    const cloudVirtualElem = ref({ getBoundingClientRect: () => ({}) });
    ref({ getBoundingClientRect: () => ({}) });
    watchEffect(() => {
      props.createShow ? cloudSettingShow.value = false : cloudSettingShow.value;
      props.createShow ? fileSettingShow.value = false : fileSettingShow.value;
      props.showRead ? folderSettingShow.value = false : folderSettingShow.value;
      props.showRead ? fileSettingShow.value = false : fileSettingShow.value;
    });
    onUpdated(() => {
      cloudStore.loadhasFileInBin();
    });
    const startDrag = (event, elem) => {
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("elemID", elem.id);
      event.dataTransfer.setData("elemName", elem.name);
      activeElem.value.id = elem.id;
    };
    const onDrop = (event, elem) => {
      const elemID = event.dataTransfer.getData("elemID");
      const elemName = event.dataTransfer.getData("elemName");
      if (activeElem.value.type === "folder" && activeElem.value.id !== elem.id) {
        cloudStore == null ? void 0 : cloudStore.update_folder({ folder_id: elemID, parent_id: elem.id, name: elemName });
      } else if (activeElem.value.type === "file") {
        cloudStore == null ? void 0 : cloudStore.update_file({ folder_id: elem.id, name: elemName, file_id: elemID });
      } else {
        toast.info("Не получится, не пытайся!", { theme: "auto", autoClose: 1e3 });
      }
      event.target.classList.remove("dragged-over");
    };
    const onDropCart = (event, elem) => {
      console.log(elem);
      const elemID = event.dataTransfer.getData("elemID");
      event.dataTransfer.getData("elemName");
      if (activeElem.value.type === "folder") {
        cloudStore == null ? void 0 : cloudStore.moveToBin({ elem_type: "folder_id", elem_id: elemID });
      } else if (activeElem.value.type === "file") {
        cloudStore == null ? void 0 : cloudStore.moveToBin({ elem_type: "file_id", elem_id: elemID });
      }
      event.target.classList.remove("dragged-over");
    };
    function dragOver(event) {
      event.target.classList.add("dragged-over");
      event.preventDefault();
    }
    function dragEnter(event) {
      event.target.classList.add("dragged-enter");
      event.preventDefault();
    }
    function dragLeave(event) {
      event.target.classList.remove("dragged-over");
      event.target.classList.remove("dragged-enter");
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e;
      const _component_UContextMenu = __nuxt_component_0$1;
      const _component_USelectMenu = __nuxt_component_1;
      const _component_UIcon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full select-none" }, _attrs))} data-v-4eed748a><div class="absolute w-full h-full z-0 left-0 top-0" data-v-4eed748a></div>`);
      _push(ssrRenderComponent(_component_UContextMenu, {
        class: "",
        modelValue: unref(cloudSettingShow),
        "onUpdate:modelValue": ($event) => isRef(cloudSettingShow) ? cloudSettingShow.value = $event : null,
        "virtual-element": unref(cloudVirtualElem)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$6, {
              onClick: ($event) => __props.createShow = true,
              class: "dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10"
            }, {
              ContextMenuSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg data-v-965c8b16="" class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-4eed748a${_scopeId2}><path data-v-965c8b16="" d="M12 11L12 16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4eed748a${_scopeId2}></path><path data-v-965c8b16="" d="M14.5 13.5L9.5 13.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4eed748a${_scopeId2}></path><path data-v-965c8b16="" d="M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z" stroke-width="2" data-v-4eed748a${_scopeId2}></path></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      "data-v-965c8b16": "",
                      class: "dark:stroke-white stroke-black",
                      width: "25px",
                      height: "25px",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", {
                        "data-v-965c8b16": "",
                        d: "M12 11L12 16",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        "data-v-965c8b16": "",
                        d: "M14.5 13.5L9.5 13.5",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        "data-v-965c8b16": "",
                        d: "M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z",
                        "stroke-width": "2"
                      })
                    ]))
                  ];
                }
              }),
              ContextMenuText: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("Создать папку"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("Создать папку")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              onClick: () => {
              },
              "menu-type": "uploadCloudFiles"
            }, {
              ContextMenuSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-4eed748a${_scopeId2}><path d="M8 16L12 12M12 12L16 16M12 12V21M20 16.7428C21.2215 15.734 22 14.2079 22 12.5C22 9.46243 19.5376 7 16.5 7C16.2815 7 16.0771 6.886 15.9661 6.69774C14.6621 4.48484 12.2544 3 9.5 3C5.35786 3 2 6.35786 2 10.5C2 12.5661 2.83545 14.4371 4.18695 15.7935" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4eed748a${_scopeId2}></path></svg>`);
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
                      createVNode("path", {
                        d: "M8 16L12 12M12 12L16 16M12 12V21M20 16.7428C21.2215 15.734 22 14.2079 22 12.5C22 9.46243 19.5376 7 16.5 7C16.2815 7 16.0771 6.886 15.9661 6.69774C14.6621 4.48484 12.2544 3 9.5 3C5.35786 3 2 6.35786 2 10.5C2 12.5661 2.83545 14.4371 4.18695 15.7935",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ]))
                  ];
                }
              }),
              ContextMenuText: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span data-v-4eed748a${_scopeId2}>${ssrInterpolate(_ctx.$t("Загрузить файлы"))}</span>`);
                } else {
                  return [
                    createVNode("span", null, toDisplayString(_ctx.$t("Загрузить файлы")), 1)
                  ];
                }
              }),
              ContextMenuContent: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<input id="uploadCloudFiles" class="hidden" type="file" multiple data-v-4eed748a${_scopeId2}>`);
                } else {
                  return [
                    createVNode("input", {
                      onClick: ($event) => cloudSettingShow.value = false,
                      onInput: ($event) => uploadFile.value = $event.target.files,
                      id: "uploadCloudFiles",
                      class: "hidden",
                      type: "file",
                      multiple: ""
                    }, null, 40, ["onClick", "onInput"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$6, {
                onClick: ($event) => __props.createShow = true,
                class: "dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10"
              }, {
                ContextMenuSvg: withCtx(() => [
                  (openBlock(), createBlock("svg", {
                    "data-v-965c8b16": "",
                    class: "dark:stroke-white stroke-black",
                    width: "25px",
                    height: "25px",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      "data-v-965c8b16": "",
                      d: "M12 11L12 16",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }),
                    createVNode("path", {
                      "data-v-965c8b16": "",
                      d: "M14.5 13.5L9.5 13.5",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }),
                    createVNode("path", {
                      "data-v-965c8b16": "",
                      d: "M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z",
                      "stroke-width": "2"
                    })
                  ]))
                ]),
                ContextMenuText: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("Создать папку")), 1)
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_sfc_main$6, {
                onClick: () => {
                },
                "menu-type": "uploadCloudFiles"
              }, {
                ContextMenuSvg: withCtx(() => [
                  (openBlock(), createBlock("svg", {
                    class: "dark:stroke-white stroke-black",
                    width: "25px",
                    height: "25px",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      d: "M8 16L12 12M12 12L16 16M12 12V21M20 16.7428C21.2215 15.734 22 14.2079 22 12.5C22 9.46243 19.5376 7 16.5 7C16.2815 7 16.0771 6.886 15.9661 6.69774C14.6621 4.48484 12.2544 3 9.5 3C5.35786 3 2 6.35786 2 10.5C2 12.5661 2.83545 14.4371 4.18695 15.7935",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    })
                  ]))
                ]),
                ContextMenuText: withCtx(() => [
                  createVNode("span", null, toDisplayString(_ctx.$t("Загрузить файлы")), 1)
                ]),
                ContextMenuContent: withCtx(() => [
                  createVNode("input", {
                    onClick: ($event) => cloudSettingShow.value = false,
                    onInput: ($event) => uploadFile.value = $event.target.files,
                    id: "uploadCloudFiles",
                    class: "hidden",
                    type: "file",
                    multiple: ""
                  }, null, 40, ["onClick", "onInput"])
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="my-10 w-full h-full" data-v-4eed748a><div class="flex max-[500px]:flex-col justify-between items-center" data-v-4eed748a><h2 class="text-lg dark:text-white tracking-widest mb-6" data-v-4eed748a>${ssrInterpolate(_ctx.$t("Файлы и папки"))}</h2><div data-v-4eed748a>`);
      _push(ssrRenderComponent(_component_USelectMenu, {
        modelValue: unref(selected),
        "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
        options: view
      }, {
        label: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: unref(selected).icon,
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(unref(selected).label)}`);
          } else {
            return [
              createVNode(_component_UIcon, {
                name: unref(selected).icon,
                class: "w-4 h-4"
              }, null, 8, ["name"]),
              createTextVNode(" " + toDisplayString(unref(selected).label), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      if (unref(cloudStore).showObjectElem && ((_a = __props.elemObject) == null ? void 0 : _a.id) !== ((_b = unref(cloudStore).get_all_folders) == null ? void 0 : _b.id)) {
        _push(`<div class="relative z-[20] w-7/12 flex justify-center mx-auto px-4 py-3 h-[50px] border rounded-lg text-center" data-v-4eed748a><p class="tracking-widest w-full" data-v-4eed748a>${ssrInterpolate(_ctx.$t("Наименование") + ": " + ((_c = __props.elemObject) == null ? void 0 : _c.name))}</p><div class="flex gap-x-10" data-v-4eed748a><button type="button" class="px-4 tracking-wider bg-blueSemiLight rounded-full" data-v-4eed748a>${ssrInterpolate(_ctx.$t("Отмена"))}</button><button type="button" class="px-4 tracking-wider bg-blueSemiLight rounded-full" data-v-4eed748a>${ssrInterpolate(_ctx.$t("Переместить"))}</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="relative flex items-center max-md:justify-center max-md:mt-6 gap-x-2 overflow-hidden" data-v-4eed748a><button data-v-4eed748a><span class="text-sm tracking-widest" data-v-4eed748a>${ssrInterpolate(_ctx.$t("Главная"))}</span></button>`);
      if (unref(cloudStore).get_folder.parent_id !== null) {
        _push(`<button class="flex items-center" data-v-4eed748a><div data-v-4eed748a><svg class="dark:fill-gray-400 fill-black" width="30px" height="30px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-inspector="pages/base/chat/[id].vue:25:11" data-v-4eed748a><path d="M604.7 759.2l61.8-61.8L481.1 512l185.4-185.4-61.8-61.8L357.5 512z" data-v-inspector="pages/base/chat/[id].vue:25:140" data-v-4eed748a></path></svg></div><span class="text-sm tracking-widest" data-v-4eed748a>${ssrInterpolate(unref(cloudStore).folder.name)}</span></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="${ssrRenderClass([{ "flex-col flex w-full ": unref(selected).type === "list", "flex-wrap max-[400px]:flex-col max-[400px]:items-center ": unref(selected).type === "tile" }, "flex mt-4 gap-x-2 gap-y-3 max-md:justify-center select-none pr-2 mb-20"])}" data-v-4eed748a><!--[-->`);
      ssrRenderList((_d = unref(cloudStore)) == null ? void 0 : _d.get_folder.folders, (folders, i2) => {
        var _a2, _b2, _c2, _d2;
        _push(`<div class="${ssrRenderClass({ "w-2/12 max-[1300px]:w-3/12 max-lg:w-4/12 max-md:w-6/12 max-sm:w-8/12": unref(selected).type === "tile" })}" data-v-4eed748a><div class="${ssrRenderClass([{ "w-full": unref(selected).type === "list" }, "relative"])}" data-v-4eed748a>`);
        _push(ssrRenderComponent(_sfc_main$8, {
          onDrop: ($event) => onDrop($event, folders),
          onDragover: dragOver,
          onDragleave: dragLeave,
          onDrag: dragEnter,
          onDragend: dragLeave,
          draggable: !((_a2 = unref(currentUser).user.permissions) == null ? void 0 : _a2.find((e2) => e2.name_en === "folder.create")) || !((_b2 = unref(cloudStore).get_folder) == null ? void 0 : _b2.active) ? false : true,
          onDragstart: ($event) => {
            startDrag($event, folders);
            unref(activeElem).type = "folder";
          },
          class: ["w-full transition-all rounded-full duration-200", { "dark:bg-gray-700 bg-gray-200": ((_c2 = unref(activeElem)) == null ? void 0 : _c2.id) === (folders == null ? void 0 : folders.id), "hover:dark:bg-gray-700 hover:bg-gray-100": ((_d2 = unref(activeElem)) == null ? void 0 : _d2.id) === (folders == null ? void 0 : folders.id), "relative": unref(selected).type === "tile" }],
          onDblclick: ($event) => !__props.showRead ? unref(cloudStore).loadFolder({ id: folders == null ? void 0 : folders.id }) : __props.showRead,
          "change-view": unref(selected).type,
          onContextmenu: async () => {
            var _a3;
            const top = ("unref" in _ctx ? _ctx.unref : unref(unref))(unref(y2)) - ("unref" in _ctx ? _ctx.unref : unref(unref))(unref(windowY));
            const left = ("unref" in _ctx ? _ctx.unref : unref(unref))(unref(x));
            unref(folderVirtualElem).getBoundingClientRect = () => ({
              width: 0,
              height: 0,
              top,
              left
            });
            unref(activeElem).id = folders == null ? void 0 : folders.id;
            unref(activeElem).type = "folder";
            __props.folderObject = { ...folders };
            unref(folderSettingShow) ? cloudSettingShow.value = false : cloudSettingShow.value = false;
            unref(folderSettingShow) ? fileSettingShow.value = false : fileSettingShow.value = false;
            __props.showRead = false;
            if ((_a3 = unref(currentUser).user.permissions) == null ? void 0 : _a3.find((e2) => e2.name_en === "folder.create")) {
              folderSettingShow.value = true;
            } else {
              unref(toast).info(`${accessControl.text}`, { ...accessControl });
              folderSettingShow.value = false;
            }
          },
          onClick: ($event) => {
            var _a3;
            unref(activeElem).id = folders == null ? void 0 : folders.id;
            unref(activeElem).type = "folder";
            unref(activeElem).id === ((_a3 = __props.folderObject) == null ? void 0 : _a3.id) ? __props.showRead = true : __props.showRead = false;
            __props.showRead && __props.folderObject ? __props.folderObject = {} : __props.folderObject;
          }
        }, {
          folderSvg: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div data-v-4eed748a${_scopeId}><svg class="${ssrRenderClass([{ "w-[100px] h-[100px]": unref(selected).type === "tile" }, "icon"])}" width="50px" height="50px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" data-v-4eed748a${_scopeId}><path d="M853.333333 256H469.333333l-85.333333-85.333333H170.666667c-46.933333 0-85.333333   38.4-85.333334 85.333333v170.666667h853.333334v-85.333334c0-46.933333-38.4-85.333333-85.333334-85.333333z" fill="#FFA000" data-v-4eed748a${_scopeId}></path><path d="M853.333333 256H170.666667c-46.933333 0-85.333333 38.4-85.333334 85.333333v426.666667c0 46.933333 38.4 85.333333 85.333334 85.333333h682.666666c46.933333 0 85.333333-38.4 85.333334-85.333333V341.333333c0-46.933333-38.4-85.333333-85.333334-85.333333z" fill="#FFCA28" data-v-4eed748a${_scopeId}></path></svg></div>`);
            } else {
              return [
                createVNode("div", null, [
                  (openBlock(), createBlock("svg", {
                    class: [{ "w-[100px] h-[100px]": unref(selected).type === "tile" }, "icon"],
                    width: "50px",
                    height: "50px",
                    viewBox: "0 0 1024 1024",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      d: "M853.333333 256H469.333333l-85.333333-85.333333H170.666667c-46.933333 0-85.333333   38.4-85.333334 85.333333v170.666667h853.333334v-85.333334c0-46.933333-38.4-85.333333-85.333334-85.333333z",
                      fill: "#FFA000"
                    }),
                    createVNode("path", {
                      d: "M853.333333 256H170.666667c-46.933333 0-85.333333 38.4-85.333334 85.333333v426.666667c0 46.933333 38.4 85.333333 85.333334 85.333333h682.666666c46.933333 0 85.333333-38.4 85.333334-85.333333V341.333333c0-46.933333-38.4-85.333333-85.333334-85.333333z",
                      fill: "#FFCA28"
                    })
                  ], 2))
                ])
              ];
            }
          }),
          folderName: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a3, _b3, _c3, _d3;
            if (_push2) {
              if (((_a3 = __props.folderObject) == null ? void 0 : _a3.id) === (folders == null ? void 0 : folders.id) && __props.showRead) {
                _push2(`<form class="flex items-center" data-v-4eed748a${_scopeId}><input class="${ssrRenderClass([{ "w-2/12 mx-auto text-center": unref(selected).type === "tile" }, "tracking-widest border-0 px-1 py-1 w-9/12 rounded-lg transition-all"])}" type="text"${ssrRenderAttr("value", unref(createFolder).name)}${ssrRenderAttr("placeholder", __props.folderObject.name)} data-v-4eed748a${_scopeId}><button type="submit" class="${ssrRenderClass({ "absolute top-2 left-2": unref(selected).type === "tile" })}" data-v-4eed748a${_scopeId}><svg class="stroke-green-500" width="30px" height="30px" viewBox="0 0 24 24" fill="none" data-v-4eed748a${_scopeId}><path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke-width="1.5" data-v-4eed748a${_scopeId}></path><path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-4eed748a${_scopeId}></path></svg></button></form>`);
              } else {
                _push2(`<div data-v-4eed748a${_scopeId}>${ssrInterpolate(((_b3 = folders.name) == null ? void 0 : _b3.length) > 20 ? folders.name.slice(0, 30) + "..." : folders.name)}</div>`);
              }
            } else {
              return [
                ((_c3 = __props.folderObject) == null ? void 0 : _c3.id) === (folders == null ? void 0 : folders.id) && __props.showRead ? (openBlock(), createBlock("form", {
                  key: 0,
                  onClick: withModifiers(() => {
                  }, ["stop"]),
                  onSubmit: withModifiers(($event) => {
                    var _a4;
                    unref(cloudStore).update_folder({ folder_id: (_a4 = __props.folderObject) == null ? void 0 : _a4.id, name: unref(createFolder).name, parent_id: folders.id });
                    __props.showRead = false;
                    unref(createFolder).name = "";
                  }, ["prevent"]),
                  class: "flex items-center"
                }, [
                  withDirectives(createVNode("input", {
                    ref_for: true,
                    ref: "target",
                    class: [{ "w-2/12 mx-auto text-center": unref(selected).type === "tile" }, "tracking-widest border-0 px-1 py-1 w-9/12 rounded-lg transition-all"],
                    type: "text",
                    "onUpdate:modelValue": ($event) => unref(createFolder).name = $event,
                    placeholder: __props.folderObject.name
                  }, null, 10, ["onUpdate:modelValue", "placeholder"]), [
                    [vModelText, unref(createFolder).name]
                  ]),
                  createVNode("button", {
                    type: "submit",
                    class: { "absolute top-2 left-2": unref(selected).type === "tile" }
                  }, [
                    (openBlock(), createBlock("svg", {
                      class: "stroke-green-500",
                      width: "30px",
                      height: "30px",
                      viewBox: "0 0 24 24",
                      fill: "none"
                    }, [
                      createVNode("path", {
                        d: "M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z",
                        "stroke-width": "1.5"
                      }),
                      createVNode("path", {
                        d: "M8.5 12.5L10.5 14.5L15.5 9.5",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ]))
                  ], 2)
                ], 40, ["onClick", "onSubmit"])) : (openBlock(), createBlock("div", { key: 1 }, toDisplayString(((_d3 = folders.name) == null ? void 0 : _d3.length) > 20 ? folders.name.slice(0, 30) + "..." : folders.name), 1))
              ];
            }
          }),
          _: 2
        }, _parent));
        if (unref(selected).type === "tile" && unref(activeElem).id === (folders == null ? void 0 : folders.id)) {
          _push(`<div class="absolute top-2 right-2" data-v-4eed748a><svg class="dark:stroke-white stroke-black dark:hover:bg-gray-600 hover:bg-gray-300 rounded-full cursor-pointer transition-all duration-200" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-4eed748a><path d="M12 12H12.01M12 6H12.01M12 18H12.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4eed748a></path></svg></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        _push(ssrRenderComponent(_component_UContextMenu, {
          modelValue: unref(folderSettingShow),
          "onUpdate:modelValue": ($event) => isRef(folderSettingShow) ? folderSettingShow.value = $event : null,
          "virtual-element": unref(folderVirtualElem)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (folders.active === true) {
                _push2(`<div class="relative z-[100]" data-v-4eed748a${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$6, {
                  onClick: ($event) => {
                    __props.showRead = true;
                  }
                }, {
                  ContextMenuSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<svg class="stroke-black dark:stroke-white" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-4eed748a${_scopeId2}><path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-4eed748a${_scopeId2}></path><path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-4eed748a${_scopeId2}></path></svg>`);
                    } else {
                      return [
                        (openBlock(), createBlock("svg", {
                          class: "stroke-black dark:stroke-white",
                          width: "25px",
                          height: "25px",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            d: "M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z",
                            "stroke-width": "1.5",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
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
                      _push3(`${ssrInterpolate(_ctx.$t("Переименовать"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("Переименовать")), 1)
                      ];
                    }
                  }),
                  ContextMenuContent: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3)
                      ;
                    else {
                      return [];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$6, null, {
                  ContextMenuSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<svg data-v-965c8b16="" class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-4eed748a${_scopeId2}><path data-v-965c8b16="" d="M12 11L12 16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4eed748a${_scopeId2}></path><path data-v-965c8b16="" d="M14.5 13.5L9.5 13.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4eed748a${_scopeId2}></path><path data-v-965c8b16="" d="M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z" stroke-width="2" data-v-4eed748a${_scopeId2}></path></svg>`);
                    } else {
                      return [
                        (openBlock(), createBlock("svg", {
                          "data-v-965c8b16": "",
                          class: "dark:stroke-white stroke-black",
                          width: "25px",
                          height: "25px",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            "data-v-965c8b16": "",
                            d: "M12 11L12 16",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            "data-v-965c8b16": "",
                            d: "M14.5 13.5L9.5 13.5",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            "data-v-965c8b16": "",
                            d: "M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z",
                            "stroke-width": "2"
                          })
                        ]))
                      ];
                    }
                  }),
                  ContextMenuText: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("Создать папку"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("Создать папку")), 1)
                      ];
                    }
                  }),
                  ContextMenuContent: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3)
                      ;
                    else {
                      return [];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$6, {
                  onClick: ($event) => {
                    __props.elemObject = { ...__props.folderObject, type: "folder" };
                    unref(cloudStore).showObjectElem = true;
                    fileSettingShow.value = false;
                  }
                }, {
                  ContextMenuSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-4eed748a${_scopeId2}><path d="M22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2.51839 20.1752 2.22937 19.3001 2.10149 18M2 12V6.94975C2 6.06722 2 5.62595 2.06935 5.25839C2.37464 3.64031 3.64031 2.37464 5.25839 2.06935C5.62595 2 6.06722 2 6.94975 2C7.33642 2 7.52976 2 7.71557 2.01738C8.51665 2.09229 9.27652 2.40704 9.89594 2.92051C10.0396 3.03961 10.1763 3.17633 10.4497 3.44975L11 4C11.8158 4.81578 12.2237 5.22367 12.7121 5.49543C12.9804 5.64471 13.2651 5.7626 13.5604 5.84678C14.0979 6 14.6747 6 15.8284 6H16.2021C18.8345 6 20.1506 6 21.0062 6.76946C21.0849 6.84024 21.1598 6.91514 21.2305 6.99383C21.8004 7.62741 21.9482 8.51364 21.9866 10" stroke-width="1.5" stroke-linecap="round" data-v-4eed748a${_scopeId2}></path><path d="M2 15C8.44365 15 6.55635 15 13 15M13 15L8.875 12M13 15L8.875 18" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-4eed748a${_scopeId2}></path></svg>`);
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
                          createVNode("path", {
                            d: "M22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2.51839 20.1752 2.22937 19.3001 2.10149 18M2 12V6.94975C2 6.06722 2 5.62595 2.06935 5.25839C2.37464 3.64031 3.64031 2.37464 5.25839 2.06935C5.62595 2 6.06722 2 6.94975 2C7.33642 2 7.52976 2 7.71557 2.01738C8.51665 2.09229 9.27652 2.40704 9.89594 2.92051C10.0396 3.03961 10.1763 3.17633 10.4497 3.44975L11 4C11.8158 4.81578 12.2237 5.22367 12.7121 5.49543C12.9804 5.64471 13.2651 5.7626 13.5604 5.84678C14.0979 6 14.6747 6 15.8284 6H16.2021C18.8345 6 20.1506 6 21.0062 6.76946C21.0849 6.84024 21.1598 6.91514 21.2305 6.99383C21.8004 7.62741 21.9482 8.51364 21.9866 10",
                            "stroke-width": "1.5",
                            "stroke-linecap": "round"
                          }),
                          createVNode("path", {
                            d: "M2 15C8.44365 15 6.55635 15 13 15M13 15L8.875 12M13 15L8.875 18",
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
                      _push3(`${ssrInterpolate(_ctx.$t("Переместить"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("Переместить")), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$6, {
                  onClick: ($event) => unref(cloudStore).moveToBin({ elem_type: "folder_id", elem_id: __props.folderObject.id })
                }, {
                  ContextMenuSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-4eed748a${_scopeId2}><path d="M10 12V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4eed748a${_scopeId2}></path><path d="M14 12V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4eed748a${_scopeId2}></path><path d="M4 7H20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4eed748a${_scopeId2}></path><path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4eed748a${_scopeId2}></path><path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4eed748a${_scopeId2}></path></svg>`);
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
                          createVNode("path", {
                            d: "M10 12V17",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            d: "M14 12V17",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            d: "M4 7H20",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            d: "M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            d: "M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          })
                        ]))
                      ];
                    }
                  }),
                  ContextMenuText: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("Убрать в корзину"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("Убрать в корзину")), 1)
                      ];
                    }
                  }),
                  ContextMenuContent: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3)
                      ;
                    else {
                      return [];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$6, {
                  onClick: ($event) => unref(cloudStore).showAccessSetting = true
                }, {
                  ContextMenuSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-4eed748a${_scopeId2}><path d="M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4eed748a${_scopeId2}></path></svg>`);
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
                          createVNode("path", {
                            d: "M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          })
                        ]))
                      ];
                    }
                  }),
                  ContextMenuText: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("Настроить доступ"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("Настроить доступ")), 1)
                      ];
                    }
                  }),
                  ContextMenuContent: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3)
                      ;
                    else {
                      return [];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (folders.active === false) {
                _push2(`<div class="relative z-[100]" data-v-4eed748a${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$6, { class: "dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10" }, {
                  ContextMenuSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<svg class="stroke-black dark:stroke-white" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-4eed748a${_scopeId2}><path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-4eed748a${_scopeId2}></path><path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-4eed748a${_scopeId2}></path></svg>`);
                    } else {
                      return [
                        (openBlock(), createBlock("svg", {
                          class: "stroke-black dark:stroke-white",
                          width: "25px",
                          height: "25px",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            d: "M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z",
                            "stroke-width": "1.5",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
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
                      _push3(`${ssrInterpolate(_ctx.$t("Переименовать"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("Переименовать")), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$6, {
                  onClick: ($event) => {
                    unref(cloudStore).moveFromBin({ elem_type: "folder_id", elem_id: __props.folderObject.id });
                  },
                  class: "dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10"
                }, {
                  ContextMenuSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<svg data-v-965c8b16="" class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-4eed748a${_scopeId2}><path data-v-965c8b16="" d="M12 11L12 16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4eed748a${_scopeId2}></path><path data-v-965c8b16="" d="M14.5 13.5L9.5 13.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4eed748a${_scopeId2}></path><path data-v-965c8b16="" d="M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z" stroke-width="2" data-v-4eed748a${_scopeId2}></path></svg>`);
                    } else {
                      return [
                        (openBlock(), createBlock("svg", {
                          "data-v-965c8b16": "",
                          class: "dark:stroke-white stroke-black",
                          width: "25px",
                          height: "25px",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            "data-v-965c8b16": "",
                            d: "M12 11L12 16",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            "data-v-965c8b16": "",
                            d: "M14.5 13.5L9.5 13.5",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            "data-v-965c8b16": "",
                            d: "M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z",
                            "stroke-width": "2"
                          })
                        ]))
                      ];
                    }
                  }),
                  ContextMenuText: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("Восстановить"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("Восстановить")), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$6, {
                  onClick: ($event) => {
                    unref(cloudStore).deleteInBin({ delete_type: "folder_id", id: unref(activeElem).id });
                  },
                  class: "dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10"
                }, {
                  ContextMenuSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-4eed748a${_scopeId2}><path d="M10 12V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4eed748a${_scopeId2}></path><path d="M14 12V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4eed748a${_scopeId2}></path><path d="M4 7H20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4eed748a${_scopeId2}></path><path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4eed748a${_scopeId2}></path><path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4eed748a${_scopeId2}></path></svg>`);
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
                          createVNode("path", {
                            d: "M10 12V17",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            d: "M14 12V17",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            d: "M4 7H20",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            d: "M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            d: "M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          })
                        ]))
                      ];
                    }
                  }),
                  ContextMenuText: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("Удалить навсегда"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("Удалить навсегда")), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                folders.active === true ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "relative z-[100]"
                }, [
                  createVNode(_sfc_main$6, {
                    onClick: ($event) => {
                      __props.showRead = true;
                    }
                  }, {
                    ContextMenuSvg: withCtx(() => [
                      (openBlock(), createBlock("svg", {
                        class: "stroke-black dark:stroke-white",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z",
                          "stroke-width": "1.5",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          d: "M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13",
                          "stroke-width": "1.5",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        })
                      ]))
                    ]),
                    ContextMenuText: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Переименовать")), 1)
                    ]),
                    ContextMenuContent: withCtx(() => []),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_sfc_main$6, null, {
                    ContextMenuSvg: withCtx(() => [
                      (openBlock(), createBlock("svg", {
                        "data-v-965c8b16": "",
                        class: "dark:stroke-white stroke-black",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          "data-v-965c8b16": "",
                          d: "M12 11L12 16",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          "data-v-965c8b16": "",
                          d: "M14.5 13.5L9.5 13.5",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          "data-v-965c8b16": "",
                          d: "M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z",
                          "stroke-width": "2"
                        })
                      ]))
                    ]),
                    ContextMenuText: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Создать папку")), 1)
                    ]),
                    ContextMenuContent: withCtx(() => []),
                    _: 1
                  }),
                  createVNode(_sfc_main$6, {
                    onClick: ($event) => {
                      __props.elemObject = { ...__props.folderObject, type: "folder" };
                      unref(cloudStore).showObjectElem = true;
                      fileSettingShow.value = false;
                    }
                  }, {
                    ContextMenuSvg: withCtx(() => [
                      (openBlock(), createBlock("svg", {
                        class: "dark:stroke-white stroke-black",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2.51839 20.1752 2.22937 19.3001 2.10149 18M2 12V6.94975C2 6.06722 2 5.62595 2.06935 5.25839C2.37464 3.64031 3.64031 2.37464 5.25839 2.06935C5.62595 2 6.06722 2 6.94975 2C7.33642 2 7.52976 2 7.71557 2.01738C8.51665 2.09229 9.27652 2.40704 9.89594 2.92051C10.0396 3.03961 10.1763 3.17633 10.4497 3.44975L11 4C11.8158 4.81578 12.2237 5.22367 12.7121 5.49543C12.9804 5.64471 13.2651 5.7626 13.5604 5.84678C14.0979 6 14.6747 6 15.8284 6H16.2021C18.8345 6 20.1506 6 21.0062 6.76946C21.0849 6.84024 21.1598 6.91514 21.2305 6.99383C21.8004 7.62741 21.9482 8.51364 21.9866 10",
                          "stroke-width": "1.5",
                          "stroke-linecap": "round"
                        }),
                        createVNode("path", {
                          d: "M2 15C8.44365 15 6.55635 15 13 15M13 15L8.875 12M13 15L8.875 18",
                          "stroke-width": "1.5",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        })
                      ]))
                    ]),
                    ContextMenuText: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Переместить")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_sfc_main$6, {
                    onClick: ($event) => unref(cloudStore).moveToBin({ elem_type: "folder_id", elem_id: __props.folderObject.id })
                  }, {
                    ContextMenuSvg: withCtx(() => [
                      (openBlock(), createBlock("svg", {
                        class: "dark:stroke-white stroke-black",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M10 12V17",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          d: "M14 12V17",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          d: "M4 7H20",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          d: "M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          d: "M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        })
                      ]))
                    ]),
                    ContextMenuText: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Убрать в корзину")), 1)
                    ]),
                    ContextMenuContent: withCtx(() => []),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_sfc_main$6, {
                    onClick: ($event) => unref(cloudStore).showAccessSetting = true
                  }, {
                    ContextMenuSvg: withCtx(() => [
                      (openBlock(), createBlock("svg", {
                        class: "dark:stroke-white stroke-black",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        })
                      ]))
                    ]),
                    ContextMenuText: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Настроить доступ")), 1)
                    ]),
                    ContextMenuContent: withCtx(() => []),
                    _: 1
                  }, 8, ["onClick"])
                ])) : createCommentVNode("", true),
                folders.active === false ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "relative z-[100]"
                }, [
                  createVNode(_sfc_main$6, { class: "dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10" }, {
                    ContextMenuSvg: withCtx(() => [
                      (openBlock(), createBlock("svg", {
                        class: "stroke-black dark:stroke-white",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z",
                          "stroke-width": "1.5",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          d: "M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13",
                          "stroke-width": "1.5",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        })
                      ]))
                    ]),
                    ContextMenuText: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Переименовать")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$6, {
                    onClick: ($event) => {
                      unref(cloudStore).moveFromBin({ elem_type: "folder_id", elem_id: __props.folderObject.id });
                    },
                    class: "dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10"
                  }, {
                    ContextMenuSvg: withCtx(() => [
                      (openBlock(), createBlock("svg", {
                        "data-v-965c8b16": "",
                        class: "dark:stroke-white stroke-black",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          "data-v-965c8b16": "",
                          d: "M12 11L12 16",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          "data-v-965c8b16": "",
                          d: "M14.5 13.5L9.5 13.5",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          "data-v-965c8b16": "",
                          d: "M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z",
                          "stroke-width": "2"
                        })
                      ]))
                    ]),
                    ContextMenuText: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Восстановить")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_sfc_main$6, {
                    onClick: ($event) => {
                      unref(cloudStore).deleteInBin({ delete_type: "folder_id", id: unref(activeElem).id });
                    },
                    class: "dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10"
                  }, {
                    ContextMenuSvg: withCtx(() => [
                      (openBlock(), createBlock("svg", {
                        class: "dark:stroke-white stroke-black",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M10 12V17",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          d: "M14 12V17",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          d: "M4 7H20",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          d: "M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          d: "M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        })
                      ]))
                    ]),
                    ContextMenuText: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Удалить навсегда")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList((_e = unref(cloudStore)) == null ? void 0 : _e.get_all_files, (file) => {
        var _a2, _b2;
        _push(`<div class="${ssrRenderClass({ "w-2/12 max-[1300px]:w-3/12 max-lg:w-4/12 max-md:w-6/12 max-sm:w-8/12": unref(selected).type === "tile" })}" data-v-4eed748a><div class="${ssrRenderClass([{ "w-full": unref(selected).type === "list" }, "relative"])}" data-v-4eed748a>`);
        _push(ssrRenderComponent(_sfc_main$7, {
          onDragstart: ($event) => {
            startDrag($event, file);
            unref(activeElem).type = "file";
          },
          draggable: !((_a2 = unref(currentUser).user.permissions) == null ? void 0 : _a2.find((e2) => e2.name_en === "folder.create")) || !((_b2 = unref(cloudStore).get_folder) == null ? void 0 : _b2.active) ? false : true,
          "change-view": unref(selected).type,
          onDragleave: dragLeave,
          onDrag: dragEnter,
          onDragend: dragLeave,
          onContextmenu: () => {
            var _a3;
            const top = ("unref" in _ctx ? _ctx.unref : unref(unref))(unref(y2)) - ("unref" in _ctx ? _ctx.unref : unref(unref))(unref(windowY));
            const left = ("unref" in _ctx ? _ctx.unref : unref(unref))(unref(x));
            unref(fileVirtualElem).getBoundingClientRect = () => ({
              width: 0,
              height: 0,
              top,
              left
            });
            __props.folderObject = { ...file };
            unref(activeElem).id = file.id;
            unref(activeElem).type = "file";
            fileSettingShow.value = true;
            unref(fileSettingShow) ? cloudSettingShow.value = false : cloudSettingShow.value = false;
            unref(fileSettingShow) ? folderSettingShow.value = false : folderSettingShow.value = false;
            __props.showRead = false;
            if ((_a3 = unref(currentUser).user.permissions) == null ? void 0 : _a3.find((e2) => e2.name_en === "folder.create")) {
              fileSettingShow.value = true;
            } else {
              unref(toast).info(`${accessControl.text}`, { ...accessControl });
              fileSettingShow.value = false;
            }
          },
          onClick: ($event) => {
            unref(activeElem).id = file == null ? void 0 : file.id;
            unref(activeElem).type = "file";
          },
          class: { "dark:bg-gray-700 bg-gray-200": unref(activeElem).id === (file == null ? void 0 : file.id), "hover:dark:bg-gray-700 hover:bg-gray-100": unref(activeElem).id === (file == null ? void 0 : file.id), "relative": unref(selected).type === "tile" }
        }, {
          fileSvg: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="${ssrRenderClass({ "w-[100px] h-[100px]": unref(selected).type === "tile" })}" width="50px" height="50px" viewBox="0 0 56 64" enable-background="new 0 0 56 64" xml:space="preserve" data-v-4eed748a${_scopeId}><g data-v-4eed748a${_scopeId}><path fill="#8C181A" d="M5.1,0C2.3,0,0,2.3,0,5.1v53.8C0,61.7,2.3,64,5.1,64h45.8c2.8,0,5.1-2.3,5.1-5.1V20.3L37.1,0H5.1z" data-v-4eed748a${_scopeId}></path><path fill="#6B0D12" d="M56,20.4v1H43.2c0,0-6.3-1.3-6.1-6.7c0,0,0.2,5.7,6,5.7H56z" data-v-4eed748a${_scopeId}></path><path opacity="0.5" fill="#FFFFFF" enable-background="new" d="M37.1,0v14.6c0,1.7,1.1,5.8,6.1,5.8H56L37.1,0z" data-v-4eed748a${_scopeId}></path></g><path fill="#FFFFFF" d="M14.9,49h-3.3v4.1c0,0.4-0.3,0.7-0.8,0.7c-0.4,0-0.7-0.3-0.7-0.7V42.9c0-0.6,0.5-1.1,1.1-1.1h3.7
                      c2.4,0,3.8,1.7,3.8,3.6C18.7,47.4,17.3,49,14.9,49z M14.8,43.1h-3.2v4.6h3.2c1.4,0,2.4-0.9,2.4-2.3C17.2,44,16.2,43.1,14.8,43.1z
                       M25.2,53.8h-3c-0.6,0-1.1-0.5-1.1-1.1v-9.8c0-0.6,0.5-1.1,1.1-1.1h3c3.7,0,6.2,2.6,6.2,6C31.4,51.2,29,53.8,25.2,53.8z M25.2,43.1
                      h-2.6v9.3h2.6c2.9,0,4.6-2.1,4.6-4.7C29.9,45.2,28.2,43.1,25.2,43.1z M41.5,43.1h-5.8V47h5.7c0.4,0,0.6,0.3,0.6,0.7
                      s-0.3,0.6-0.6,0.6h-5.7v4.8c0,0.4-0.3,0.7-0.8,0.7c-0.4,0-0.7-0.3-0.7-0.7V42.9c0-0.6,0.5-1.1,1.1-1.1h6.2c0.4,0,0.6,0.3,0.6,0.7
                      C42.2,42.8,41.9,43.1,41.5,43.1z" data-v-4eed748a${_scopeId}></path></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  class: { "w-[100px] h-[100px]": unref(selected).type === "tile" },
                  width: "50px",
                  height: "50px",
                  viewBox: "0 0 56 64",
                  "enable-background": "new 0 0 56 64",
                  "xml:space": "preserve"
                }, [
                  createVNode("g", null, [
                    createVNode("path", {
                      fill: "#8C181A",
                      d: "M5.1,0C2.3,0,0,2.3,0,5.1v53.8C0,61.7,2.3,64,5.1,64h45.8c2.8,0,5.1-2.3,5.1-5.1V20.3L37.1,0H5.1z"
                    }),
                    createVNode("path", {
                      fill: "#6B0D12",
                      d: "M56,20.4v1H43.2c0,0-6.3-1.3-6.1-6.7c0,0,0.2,5.7,6,5.7H56z"
                    }),
                    createVNode("path", {
                      opacity: "0.5",
                      fill: "#FFFFFF",
                      "enable-background": "new",
                      d: "M37.1,0v14.6c0,1.7,1.1,5.8,6.1,5.8H56L37.1,0z"
                    })
                  ]),
                  createVNode("path", {
                    fill: "#FFFFFF",
                    d: "M14.9,49h-3.3v4.1c0,0.4-0.3,0.7-0.8,0.7c-0.4,0-0.7-0.3-0.7-0.7V42.9c0-0.6,0.5-1.1,1.1-1.1h3.7\r\n                      c2.4,0,3.8,1.7,3.8,3.6C18.7,47.4,17.3,49,14.9,49z M14.8,43.1h-3.2v4.6h3.2c1.4,0,2.4-0.9,2.4-2.3C17.2,44,16.2,43.1,14.8,43.1z\r\n                       M25.2,53.8h-3c-0.6,0-1.1-0.5-1.1-1.1v-9.8c0-0.6,0.5-1.1,1.1-1.1h3c3.7,0,6.2,2.6,6.2,6C31.4,51.2,29,53.8,25.2,53.8z M25.2,43.1\r\n                      h-2.6v9.3h2.6c2.9,0,4.6-2.1,4.6-4.7C29.9,45.2,28.2,43.1,25.2,43.1z M41.5,43.1h-5.8V47h5.7c0.4,0,0.6,0.3,0.6,0.7\r\n                      s-0.3,0.6-0.6,0.6h-5.7v4.8c0,0.4-0.3,0.7-0.8,0.7c-0.4,0-0.7-0.3-0.7-0.7V42.9c0-0.6,0.5-1.1,1.1-1.1h6.2c0.4,0,0.6,0.3,0.6,0.7\r\n                      C42.2,42.8,41.9,43.1,41.5,43.1z"
                  })
                ], 2))
              ];
            }
          }),
          fileName: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a3, _b3;
            if (_push2) {
              if (((_a3 = __props.folderObject) == null ? void 0 : _a3.id) === (file == null ? void 0 : file.id) && __props.showRead) {
                _push2(`<form class="flex items-center" data-v-4eed748a${_scopeId}><input class="${ssrRenderClass([{ "w-2/12 mx-auto text-center": unref(selected).type === "tile" }, "tracking-widest border-0 px-1 py-1 w-9/12 rounded-lg transition-all"])}" type="text"${ssrRenderAttr("value", unref(createFolder).name)}${ssrRenderAttr("placeholder", __props.folderObject.name)} data-v-4eed748a${_scopeId}><button type="submit" class="${ssrRenderClass({ "absolute top-2 left-2": unref(selected).type === "tile" })}" data-v-4eed748a${_scopeId}><svg class="stroke-green-500" width="30px" height="30px" viewBox="0 0 24 24" fill="none" data-v-4eed748a${_scopeId}><path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke-width="1.5" data-v-4eed748a${_scopeId}></path><path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-4eed748a${_scopeId}></path></svg></button></form>`);
              } else {
                _push2(`<div data-v-4eed748a${_scopeId}>${ssrInterpolate(file.name)}</div>`);
              }
            } else {
              return [
                ((_b3 = __props.folderObject) == null ? void 0 : _b3.id) === (file == null ? void 0 : file.id) && __props.showRead ? (openBlock(), createBlock("form", {
                  key: 0,
                  onClick: withModifiers(() => {
                  }, ["stop"]),
                  onSubmit: withModifiers(($event) => {
                    var _a4, _b4;
                    unref(cloudStore).update_file({ file_id: (_a4 = __props.folderObject) == null ? void 0 : _a4.id, name: unref(createFolder).name, folder_id: (_b4 = _ctx.folder) == null ? void 0 : _b4.id });
                    __props.showRead = false;
                    unref(createFolder).name = "";
                  }, ["prevent"]),
                  class: "flex items-center"
                }, [
                  withDirectives(createVNode("input", {
                    ref_for: true,
                    ref: "target",
                    class: [{ "w-2/12 mx-auto text-center": unref(selected).type === "tile" }, "tracking-widest border-0 px-1 py-1 w-9/12 rounded-lg transition-all"],
                    type: "text",
                    "onUpdate:modelValue": ($event) => unref(createFolder).name = $event,
                    placeholder: __props.folderObject.name
                  }, null, 10, ["onUpdate:modelValue", "placeholder"]), [
                    [vModelText, unref(createFolder).name]
                  ]),
                  createVNode("button", {
                    type: "submit",
                    class: { "absolute top-2 left-2": unref(selected).type === "tile" }
                  }, [
                    (openBlock(), createBlock("svg", {
                      class: "stroke-green-500",
                      width: "30px",
                      height: "30px",
                      viewBox: "0 0 24 24",
                      fill: "none"
                    }, [
                      createVNode("path", {
                        d: "M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z",
                        "stroke-width": "1.5"
                      }),
                      createVNode("path", {
                        d: "M8.5 12.5L10.5 14.5L15.5 9.5",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ]))
                  ], 2)
                ], 40, ["onClick", "onSubmit"])) : (openBlock(), createBlock("div", { key: 1 }, toDisplayString(file.name), 1))
              ];
            }
          }),
          _: 2
        }, _parent));
        if (unref(selected).type === "tile" && unref(activeElem).id === (file == null ? void 0 : file.id)) {
          _push(`<div class="absolute top-2 right-2" data-v-4eed748a><svg class="dark:stroke-white stroke-black dark:hover:bg-gray-600 hover:bg-gray-300 rounded-full cursor-pointer transition-all duration-200" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-4eed748a><path d="M12 12H12.01M12 6H12.01M12 18H12.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4eed748a></path></svg></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        _push(ssrRenderComponent(_component_UContextMenu, {
          modelValue: unref(fileSettingShow),
          "onUpdate:modelValue": ($event) => isRef(fileSettingShow) ? fileSettingShow.value = $event : null,
          "virtual-element": unref(fileVirtualElem)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (file.active === true) {
                _push2(`<div class="relative z-[100]" data-v-4eed748a${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$6, {
                  onClick: ($event) => {
                    __props.showRead = true;
                    _ctx.email.focus();
                  }
                }, {
                  ContextMenuSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<svg class="stroke-black dark:stroke-white" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-4eed748a${_scopeId2}><path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-4eed748a${_scopeId2}></path><path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-4eed748a${_scopeId2}></path></svg>`);
                    } else {
                      return [
                        (openBlock(), createBlock("svg", {
                          class: "stroke-black dark:stroke-white",
                          width: "25px",
                          height: "25px",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            d: "M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z",
                            "stroke-width": "1.5",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
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
                      _push3(`${ssrInterpolate(_ctx.$t("Переименовать"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("Переименовать")), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$6, {
                  onClick: ($event) => {
                    unref(cloudStore).moveToBin({ elem_type: "file_id", elem_id: file.id });
                  }
                }, {
                  ContextMenuSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-4eed748a${_scopeId2}><path d="M10 12V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4eed748a${_scopeId2}></path><path d="M14 12V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4eed748a${_scopeId2}></path><path d="M4 7H20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4eed748a${_scopeId2}></path><path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4eed748a${_scopeId2}></path><path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4eed748a${_scopeId2}></path></svg>`);
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
                          createVNode("path", {
                            d: "M10 12V17",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            d: "M14 12V17",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            d: "M4 7H20",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            d: "M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            d: "M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          })
                        ]))
                      ];
                    }
                  }),
                  ContextMenuText: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("Убрать в корзину"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("Убрать в корзину")), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$6, {
                  onClick: ($event) => {
                    __props.elemObject = { ...file, type: "file" };
                    unref(cloudStore).showObjectElem = true;
                    fileSettingShow.value = false;
                  }
                }, {
                  ContextMenuSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-4eed748a${_scopeId2}><path d="M22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2.51839 20.1752 2.22937 19.3001 2.10149 18M2 12V6.94975C2 6.06722 2 5.62595 2.06935 5.25839C2.37464 3.64031 3.64031 2.37464 5.25839 2.06935C5.62595 2 6.06722 2 6.94975 2C7.33642 2 7.52976 2 7.71557 2.01738C8.51665 2.09229 9.27652 2.40704 9.89594 2.92051C10.0396 3.03961 10.1763 3.17633 10.4497 3.44975L11 4C11.8158 4.81578 12.2237 5.22367 12.7121 5.49543C12.9804 5.64471 13.2651 5.7626 13.5604 5.84678C14.0979 6 14.6747 6 15.8284 6H16.2021C18.8345 6 20.1506 6 21.0062 6.76946C21.0849 6.84024 21.1598 6.91514 21.2305 6.99383C21.8004 7.62741 21.9482 8.51364 21.9866 10" stroke-width="1.5" stroke-linecap="round" data-v-4eed748a${_scopeId2}></path><path d="M2 15C8.44365 15 6.55635 15 13 15M13 15L8.875 12M13 15L8.875 18" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-4eed748a${_scopeId2}></path></svg>`);
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
                          createVNode("path", {
                            d: "M22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2.51839 20.1752 2.22937 19.3001 2.10149 18M2 12V6.94975C2 6.06722 2 5.62595 2.06935 5.25839C2.37464 3.64031 3.64031 2.37464 5.25839 2.06935C5.62595 2 6.06722 2 6.94975 2C7.33642 2 7.52976 2 7.71557 2.01738C8.51665 2.09229 9.27652 2.40704 9.89594 2.92051C10.0396 3.03961 10.1763 3.17633 10.4497 3.44975L11 4C11.8158 4.81578 12.2237 5.22367 12.7121 5.49543C12.9804 5.64471 13.2651 5.7626 13.5604 5.84678C14.0979 6 14.6747 6 15.8284 6H16.2021C18.8345 6 20.1506 6 21.0062 6.76946C21.0849 6.84024 21.1598 6.91514 21.2305 6.99383C21.8004 7.62741 21.9482 8.51364 21.9866 10",
                            "stroke-width": "1.5",
                            "stroke-linecap": "round"
                          }),
                          createVNode("path", {
                            d: "M2 15C8.44365 15 6.55635 15 13 15M13 15L8.875 12M13 15L8.875 18",
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
                      _push3(`${ssrInterpolate(_ctx.$t("Переместить"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("Переместить")), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$6, {
                  onClick: ($event) => unref(cloudStore).showAccessSetting = true
                }, {
                  ContextMenuSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-4eed748a${_scopeId2}><path d="M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4eed748a${_scopeId2}></path></svg>`);
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
                          createVNode("path", {
                            d: "M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          })
                        ]))
                      ];
                    }
                  }),
                  ContextMenuText: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("Настроить доступ"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("Настроить доступ")), 1)
                      ];
                    }
                  }),
                  ContextMenuContent: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3)
                      ;
                    else {
                      return [];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (file.active === false) {
                _push2(`<div class="relative z-[100]" data-v-4eed748a${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$6, null, {
                  ContextMenuSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<svg class="stroke-black dark:stroke-white" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-4eed748a${_scopeId2}><path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-4eed748a${_scopeId2}></path><path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-4eed748a${_scopeId2}></path></svg>`);
                    } else {
                      return [
                        (openBlock(), createBlock("svg", {
                          class: "stroke-black dark:stroke-white",
                          width: "25px",
                          height: "25px",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            d: "M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z",
                            "stroke-width": "1.5",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
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
                      _push3(`${ssrInterpolate(_ctx.$t("Переименовать"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("Переименовать")), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$6, {
                  onClick: ($event) => unref(cloudStore).moveFromBin({ elem_type: "file_id", elem_id: file.id })
                }, {
                  ContextMenuSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<svg data-v-965c8b16="" class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-4eed748a${_scopeId2}><path data-v-965c8b16="" d="M12 11L12 16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4eed748a${_scopeId2}></path><path data-v-965c8b16="" d="M14.5 13.5L9.5 13.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4eed748a${_scopeId2}></path><path data-v-965c8b16="" d="M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z" stroke-width="2" data-v-4eed748a${_scopeId2}></path></svg>`);
                    } else {
                      return [
                        (openBlock(), createBlock("svg", {
                          "data-v-965c8b16": "",
                          class: "dark:stroke-white stroke-black",
                          width: "25px",
                          height: "25px",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            "data-v-965c8b16": "",
                            d: "M12 11L12 16",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            "data-v-965c8b16": "",
                            d: "M14.5 13.5L9.5 13.5",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            "data-v-965c8b16": "",
                            d: "M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z",
                            "stroke-width": "2"
                          })
                        ]))
                      ];
                    }
                  }),
                  ContextMenuText: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("Восстановить"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("Восстановить")), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$6, {
                  onClick: ($event) => {
                    unref(cloudStore).deleteInBin({ delete_type: "file_id", id: unref(activeElem).id });
                  }
                }, {
                  ContextMenuSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-4eed748a${_scopeId2}><path d="M10 12V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4eed748a${_scopeId2}></path><path d="M14 12V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4eed748a${_scopeId2}></path><path d="M4 7H20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4eed748a${_scopeId2}></path><path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4eed748a${_scopeId2}></path><path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4eed748a${_scopeId2}></path></svg>`);
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
                          createVNode("path", {
                            d: "M10 12V17",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            d: "M14 12V17",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            d: "M4 7H20",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            d: "M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            d: "M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          })
                        ]))
                      ];
                    }
                  }),
                  ContextMenuText: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("Удалить навсегда"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("Удалить навсегда")), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                file.active === true ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "relative z-[100]"
                }, [
                  createVNode(_sfc_main$6, {
                    onClick: ($event) => {
                      __props.showRead = true;
                      _ctx.email.focus();
                    }
                  }, {
                    ContextMenuSvg: withCtx(() => [
                      (openBlock(), createBlock("svg", {
                        class: "stroke-black dark:stroke-white",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z",
                          "stroke-width": "1.5",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          d: "M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13",
                          "stroke-width": "1.5",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        })
                      ]))
                    ]),
                    ContextMenuText: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Переименовать")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_sfc_main$6, {
                    onClick: ($event) => {
                      unref(cloudStore).moveToBin({ elem_type: "file_id", elem_id: file.id });
                    }
                  }, {
                    ContextMenuSvg: withCtx(() => [
                      (openBlock(), createBlock("svg", {
                        class: "dark:stroke-white stroke-black",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M10 12V17",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          d: "M14 12V17",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          d: "M4 7H20",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          d: "M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          d: "M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        })
                      ]))
                    ]),
                    ContextMenuText: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Убрать в корзину")), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClick"]),
                  createVNode(_sfc_main$6, {
                    onClick: ($event) => {
                      __props.elemObject = { ...file, type: "file" };
                      unref(cloudStore).showObjectElem = true;
                      fileSettingShow.value = false;
                    }
                  }, {
                    ContextMenuSvg: withCtx(() => [
                      (openBlock(), createBlock("svg", {
                        class: "dark:stroke-white stroke-black",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2.51839 20.1752 2.22937 19.3001 2.10149 18M2 12V6.94975C2 6.06722 2 5.62595 2.06935 5.25839C2.37464 3.64031 3.64031 2.37464 5.25839 2.06935C5.62595 2 6.06722 2 6.94975 2C7.33642 2 7.52976 2 7.71557 2.01738C8.51665 2.09229 9.27652 2.40704 9.89594 2.92051C10.0396 3.03961 10.1763 3.17633 10.4497 3.44975L11 4C11.8158 4.81578 12.2237 5.22367 12.7121 5.49543C12.9804 5.64471 13.2651 5.7626 13.5604 5.84678C14.0979 6 14.6747 6 15.8284 6H16.2021C18.8345 6 20.1506 6 21.0062 6.76946C21.0849 6.84024 21.1598 6.91514 21.2305 6.99383C21.8004 7.62741 21.9482 8.51364 21.9866 10",
                          "stroke-width": "1.5",
                          "stroke-linecap": "round"
                        }),
                        createVNode("path", {
                          d: "M2 15C8.44365 15 6.55635 15 13 15M13 15L8.875 12M13 15L8.875 18",
                          "stroke-width": "1.5",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        })
                      ]))
                    ]),
                    ContextMenuText: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Переместить")), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClick"]),
                  createVNode(_sfc_main$6, {
                    onClick: ($event) => unref(cloudStore).showAccessSetting = true
                  }, {
                    ContextMenuSvg: withCtx(() => [
                      (openBlock(), createBlock("svg", {
                        class: "dark:stroke-white stroke-black",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        })
                      ]))
                    ]),
                    ContextMenuText: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Настроить доступ")), 1)
                    ]),
                    ContextMenuContent: withCtx(() => []),
                    _: 1
                  }, 8, ["onClick"])
                ])) : createCommentVNode("", true),
                file.active === false ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "relative z-[100]"
                }, [
                  createVNode(_sfc_main$6, null, {
                    ContextMenuSvg: withCtx(() => [
                      (openBlock(), createBlock("svg", {
                        class: "stroke-black dark:stroke-white",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z",
                          "stroke-width": "1.5",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          d: "M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13",
                          "stroke-width": "1.5",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        })
                      ]))
                    ]),
                    ContextMenuText: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Переименовать")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$6, {
                    onClick: ($event) => unref(cloudStore).moveFromBin({ elem_type: "file_id", elem_id: file.id })
                  }, {
                    ContextMenuSvg: withCtx(() => [
                      (openBlock(), createBlock("svg", {
                        "data-v-965c8b16": "",
                        class: "dark:stroke-white stroke-black",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          "data-v-965c8b16": "",
                          d: "M12 11L12 16",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          "data-v-965c8b16": "",
                          d: "M14.5 13.5L9.5 13.5",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          "data-v-965c8b16": "",
                          d: "M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z",
                          "stroke-width": "2"
                        })
                      ]))
                    ]),
                    ContextMenuText: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Восстановить")), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClick"]),
                  createVNode(_sfc_main$6, {
                    onClick: ($event) => {
                      unref(cloudStore).deleteInBin({ delete_type: "file_id", id: unref(activeElem).id });
                    }
                  }, {
                    ContextMenuSvg: withCtx(() => [
                      (openBlock(), createBlock("svg", {
                        class: "dark:stroke-white stroke-black",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M10 12V17",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          d: "M14 12V17",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          d: "M4 7H20",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          d: "M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        createVNode("path", {
                          d: "M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        })
                      ]))
                    ]),
                    ContextMenuText: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Удалить навсегда")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]-->`);
      if (unref(cart)) {
        _push(ssrRenderComponent(_sfc_main$8, {
          onDrop: ($event) => onDropCart($event, _ctx.folders),
          onDragover: dragOver,
          onDragleave: dragLeave,
          onDrag: dragEnter,
          onDragend: dragLeave,
          "type-elem": "cart",
          "change-view": unref(selected).type,
          class: ["", { "w-full": unref(selected).type === "list", "w-2/12 max-[1300px]:w-4/12 max-md:w-5/12": unref(selected).type === "tile" }],
          onDblclick: ($event) => {
            var _a2;
            unref(cloudStore).loadBin({ bin: (_a2 = unref(cloudStore)) == null ? void 0 : _a2.get_bin });
            cart.value = false;
          }
        }, {
          folderSvg: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(cloudStore).get_hasFileInBin || unref(cloudStore).get_bin.files.length > 0 || unref(cloudStore).get_bin.folders.length > 0) {
                _push2(`<svg class="" class="${ssrRenderClass([{ "w-[100px] h-[100px]": unref(selected).type === "tile" }, ""])}" width="50px" height="50px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" data-v-4eed748a${_scopeId}><path d="M512 454.4L270.933333 213.333333 554.666667 36.266667 817.066667 213.333333z" fill="#FFA000" data-v-4eed748a${_scopeId}></path><path d="M512 454.4L270.933333 213.333333 362.666667 100.266667 817.066667 213.333333z" fill="#FFCA28" data-v-4eed748a${_scopeId}></path><path d="M652.8 938.666667H371.2c-42.666667 0-78.933333-29.866667-85.333333-72.533334L192 234.666667h640l-96 631.466666c-6.4 42.666667-42.666667 72.533333-83.2 72.533334z" fill="#3fb1c9" data-v-4eed748a${_scopeId}></path><path d="M810.666667 277.333333H213.333333c-23.466667 0-42.666667-19.2-42.666666-42.666666s19.2-42.666667 42.666666-42.666667h597.333334c23.466667 0 42.666667 19.2 42.666666 42.666667s-19.2 42.666667-42.666666 42.666666z" fill="#0077B6" data-v-4eed748a${_scopeId}></path></svg>`);
              } else {
                _push2(`<svg class="${ssrRenderClass({ "w-[100px] h-[100px]": unref(selected).type == "tile", "w-[50px] h-[50px]": unref(selected).type == "list" })}" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" data-v-4eed748a${_scopeId}><path d="M652.8 938.666667H371.2c-42.666667 0-78.933333-29.866667-85.333333-72.533334L192 234.666667h640l-96 631.466666c-6.4 42.666667-42.666667 72.533333-83.2 72.533334z" fill="#3fb1c9" data-v-4eed748a${_scopeId}></path><path d="M810.666667 277.333333H213.333333c-23.466667 0-42.666667-19.2-42.666666-42.666666s19.2-42.666667 42.666666-42.666667h597.333334c23.466667 0 42.666667 19.2 42.666666 42.666667s-19.2 42.666667-42.666666 42.666666z" fill="#0077B6" data-v-4eed748a${_scopeId}></path></svg>`);
              }
            } else {
              return [
                unref(cloudStore).get_hasFileInBin || unref(cloudStore).get_bin.files.length > 0 || unref(cloudStore).get_bin.folders.length > 0 ? (openBlock(), createBlock("svg", {
                  key: 0,
                  class: ["", { "w-[100px] h-[100px]": unref(selected).type === "tile" }],
                  width: "50px",
                  height: "50px",
                  viewBox: "0 0 1024 1024",
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    d: "M512 454.4L270.933333 213.333333 554.666667 36.266667 817.066667 213.333333z",
                    fill: "#FFA000"
                  }),
                  createVNode("path", {
                    d: "M512 454.4L270.933333 213.333333 362.666667 100.266667 817.066667 213.333333z",
                    fill: "#FFCA28"
                  }),
                  createVNode("path", {
                    d: "M652.8 938.666667H371.2c-42.666667 0-78.933333-29.866667-85.333333-72.533334L192 234.666667h640l-96 631.466666c-6.4 42.666667-42.666667 72.533333-83.2 72.533334z",
                    fill: "#3fb1c9"
                  }),
                  createVNode("path", {
                    d: "M810.666667 277.333333H213.333333c-23.466667 0-42.666667-19.2-42.666666-42.666666s19.2-42.666667 42.666666-42.666667h597.333334c23.466667 0 42.666667 19.2 42.666666 42.666667s-19.2 42.666667-42.666666 42.666666z",
                    fill: "#0077B6"
                  })
                ], 2)) : (openBlock(), createBlock("svg", {
                  key: 1,
                  class: { "w-[100px] h-[100px]": unref(selected).type == "tile", "w-[50px] h-[50px]": unref(selected).type == "list" },
                  viewBox: "0 0 1024 1024",
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    d: "M652.8 938.666667H371.2c-42.666667 0-78.933333-29.866667-85.333333-72.533334L192 234.666667h640l-96 631.466666c-6.4 42.666667-42.666667 72.533333-83.2 72.533334z",
                    fill: "#3fb1c9"
                  }),
                  createVNode("path", {
                    d: "M810.666667 277.333333H213.333333c-23.466667 0-42.666667-19.2-42.666666-42.666666s19.2-42.666667 42.666666-42.666667h597.333334c23.466667 0 42.666667 19.2 42.666666 42.666667s-19.2 42.666667-42.666666 42.666666z",
                    fill: "#0077B6"
                  })
                ], 2))
              ];
            }
          }),
          folderName: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("Корзина"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("Корзина")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (unref(cloudStore).showAccessSetting) {
        _push(ssrRenderComponent(_sfc_main$c, {
          onShowModal: unref(cloudStore).showAccessSetting
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.createShow) {
        _push(ssrRenderComponent(_sfc_main$c, {
          onShowModal: ($event) => __props.createShow = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$d, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("Создание папки"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("Создание папки")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div data-v-4eed748a${_scopeId}><form data-v-4eed748a${_scopeId}><h3 data-v-4eed748a${_scopeId}>Наименование</h3>`);
              _push2(ssrRenderComponent(_sfc_main$e, {
                type: "text",
                modelValue: unref(createFolder).name,
                "onUpdate:modelValue": ($event) => unref(createFolder).name = $event
              }, null, _parent2, _scopeId));
              _push2(`<div class="flex justify-center gap-x-10 mt-10" data-v-4eed748a${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$f, {
                class: "px-10 py-2 rounded-full",
                t: "submit",
                type: "danger",
                onClick: ($event) => __props.createShow = false
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
              _push2(ssrRenderComponent(_sfc_main$f, {
                class: "px-10 py-2 rounded-full",
                t: "submit",
                type: "success"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("Создать"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("Создать")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></form></div>`);
            } else {
              return [
                createVNode(_sfc_main$d, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("Создание папки")), 1)
                  ]),
                  _: 1
                }),
                createVNode("div", null, [
                  createVNode("form", {
                    onSubmit: withModifiers(($event) => {
                      unref(cloudStore).create_folder({ parent_id: unref(activeElem).id, name: unref(createFolder).name });
                      __props.createShow = false;
                    }, ["prevent"])
                  }, [
                    createVNode("h3", null, "Наименование"),
                    createVNode(_sfc_main$e, {
                      type: "text",
                      modelValue: unref(createFolder).name,
                      "onUpdate:modelValue": ($event) => unref(createFolder).name = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("div", { class: "flex justify-center gap-x-10 mt-10" }, [
                      createVNode(_sfc_main$f, {
                        class: "px-10 py-2 rounded-full",
                        t: "submit",
                        type: "danger",
                        onClick: ($event) => __props.createShow = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("Отмена")), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_sfc_main$f, {
                        class: "px-10 py-2 rounded-full",
                        t: "submit",
                        type: "success"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("Создать")), 1)
                        ]),
                        _: 1
                      })
                    ])
                  ], 40, ["onSubmit"])
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cloud/CloudUI/TheCloudUIFolders.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const TheCloudUIFolders = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-4eed748a"]]);
const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full transition-all duration-300 rounded-md dark:border-t-gray-500 border dark:border-t dark:border-0 p-4 shadow-lg dark:shadow-gray-500" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cloud/CloudUI/TheCloudUIBlock.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const TheCloudUIBlock = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TheCloudUIStructureFolder",
  __ssrInlineRender: true,
  props: {
    showFolder: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "p-2 flex items-center gap-x-4 hover:bg-gray-700 transition-all duration-200 cursor-pointer rounded-lg"
      }, _attrs))}><div>`);
      ssrRenderSlot(_ctx.$slots, "structureSvg", {}, null, _push, _parent);
      _push(`</div><p class="tracking-widest text-sm">`);
      ssrRenderSlot(_ctx.$slots, "structureName", {}, null, _push, _parent);
      _push(`</p></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cloud/CloudUI/CloudUIStructure/TheCloudUIStructureFolder.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TheCloudUiStructure",
  __ssrInlineRender: true,
  props: {
    showFolder: {
      type: Array,
      default: () => []
    },
    showCreateFolder: {
      type: Boolean,
      default: false
    },
    activeStructure: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    useMouse();
    useWindowScroll();
    const isOpen = ref(false);
    const virtualElement = ref({ getBoundingClientRect: () => ({}) });
    const loadCloud = useCloudStore();
    const createFolderForm = ref({
      name: "",
      parent_id: loadCloud.folder.id
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContextMenu = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["max-[840px]:hidden h-full", { "max-[840px]:!block": __props.activeStructure === true }]
      }, _attrs))} data-v-b918363c>`);
      _push(ssrRenderComponent(_component_UContextMenu, {
        modelValue: unref(isOpen),
        "onUpdate:modelValue": ($event) => isRef(isOpen) ? isOpen.value = $event : null,
        "virtual-element": unref(virtualElement)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="" data-v-b918363c${_scopeId}><div class="dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10" data-v-b918363c${_scopeId}><div data-v-b918363c${_scopeId}><svg class="stroke-black dark:stroke-white" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b918363c${_scopeId}><path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-b918363c${_scopeId}></path><path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-b918363c${_scopeId}></path></svg></div><p data-v-b918363c${_scopeId}>${ssrInterpolate(_ctx.$t("Переименовать"))}</p></div><div class="dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10" data-v-b918363c${_scopeId}><div data-v-b918363c${_scopeId}><svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b918363c${_scopeId}><path data-v-965c8b16="" d="M12 11L12 16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-b918363c${_scopeId}></path><path data-v-965c8b16="" d="M14.5 13.5L9.5 13.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-b918363c${_scopeId}></path><path data-v-965c8b16="" d="M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z" stroke-width="2" data-v-b918363c${_scopeId}></path></svg></div><p data-v-b918363c${_scopeId}>${ssrInterpolate(_ctx.$t("Создать папку"))}</p></div><div class="dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10" data-v-b918363c${_scopeId}><div data-v-b918363c${_scopeId}><svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b918363c${_scopeId}><path d="M10 12V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-b918363c${_scopeId}></path><path d="M14 12V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-b918363c${_scopeId}></path><path d="M4 7H20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-b918363c${_scopeId}></path><path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-b918363c${_scopeId}></path><path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-b918363c${_scopeId}></path></svg></div><p data-v-b918363c${_scopeId}>${ssrInterpolate(_ctx.$t("Убрать в корзину"))}</p></div></div>`);
          } else {
            return [
              createVNode("div", { class: "" }, [
                createVNode("div", { class: "dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10" }, [
                  createVNode("div", null, [
                    (openBlock(), createBlock("svg", {
                      class: "stroke-black dark:stroke-white",
                      width: "25px",
                      height: "25px",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", {
                        d: "M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        d: "M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ]))
                  ]),
                  createVNode("p", null, toDisplayString(_ctx.$t("Переименовать")), 1)
                ]),
                createVNode("div", { class: "dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10" }, [
                  createVNode("div", null, [
                    (openBlock(), createBlock("svg", {
                      class: "dark:stroke-white stroke-black",
                      width: "25px",
                      height: "25px",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", {
                        "data-v-965c8b16": "",
                        d: "M12 11L12 16",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        "data-v-965c8b16": "",
                        d: "M14.5 13.5L9.5 13.5",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        "data-v-965c8b16": "",
                        d: "M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z",
                        "stroke-width": "2"
                      })
                    ]))
                  ]),
                  createVNode("p", null, toDisplayString(_ctx.$t("Создать папку")), 1)
                ]),
                createVNode("div", { class: "dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10" }, [
                  createVNode("div", null, [
                    (openBlock(), createBlock("svg", {
                      class: "dark:stroke-white stroke-black",
                      width: "25px",
                      height: "25px",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", {
                        d: "M10 12V17",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        d: "M14 12V17",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        d: "M4 7H20",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        d: "M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        d: "M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ]))
                  ]),
                  createVNode("p", null, toDisplayString(_ctx.$t("Убрать в корзину")), 1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(TheCloudUIBlock, {
        class: ["max-[840px]:rounded-r-none", { "max-[840px]:shadow-none max-[840px]:border-r-0": !__props.activeStructure }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-b918363c${_scopeId}><div class="${ssrRenderClass([{ "max-[840px]:hidden": __props.activeStructure === false }, "absolute bg-gray-300 rounded-l-lg px-2 hidden max-[840px]:block right-0 top-0"])}" data-v-b918363c${_scopeId}><svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b918363c${_scopeId}><path d="M16.9995 15.9995L20.9995 11.9995M20.9995 11.9995L16.9995 7.99951M20.9995 11.9995H8.99951M12.9995 20.9995H6.20029C5.08019 20.9995 4.52014 20.9995 4.09231 20.7815C3.71599 20.5898 3.41003 20.2838 3.21828 19.9075C3.00029 19.4797 3.00029 18.9196 3.00029 17.7995V6.19951C3.00029 5.07941 3.00029 4.51935 3.21828 4.09153C3.41003 3.71521 3.71599 3.40925 4.09231 3.2175C4.52014 2.99951 5.08019 2.99951 6.20029 2.99951L12.9995 2.99951" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-b918363c${_scopeId}></path></svg></div></div><div class="${ssrRenderClass([{ "max-[840px]:hidden": !__props.activeStructure }, "flex cursor-pointer dark:hover:bg-gray-500 p-2 transition-all duration-200 items-center gap-x-4 my-4 justify-center mx-auto"])}" data-v-b918363c${_scopeId}><div data-v-b918363c${_scopeId}><svg class="dark:stroke-white stroke-black" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b918363c${_scopeId}><path d="M12 11L12 16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-b918363c${_scopeId}></path><path d="M14.5 13.5L9.5 13.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-b918363c${_scopeId}></path><path d="M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z" stroke-width="2" data-v-b918363c${_scopeId}></path></svg></div><p class="tracking-widest dark:text-white" data-v-b918363c${_scopeId}>${ssrInterpolate(_ctx.$t("Создать папку"))}</p></div>`);
            if (__props.showCreateFolder) {
              _push2(ssrRenderComponent(_sfc_main$c, {
                onShowModal: ($event) => __props.showCreateFolder = !__props.showCreateFolder
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$d, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$t("Создание папки"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("Создание папки")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<form data-v-b918363c${_scopeId2}><div class="flex items-center justify-center gap-x-10 my-10" data-v-b918363c${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$e, {
                      class: "w-6/12",
                      label: _ctx.$t("Название"),
                      modelValue: unref(createFolderForm).name,
                      "onUpdate:modelValue": ($event) => unref(createFolderForm).name = $event
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="w-6/12 flex flex-col gap-y-2" data-v-b918363c${_scopeId2}><p class="tracking-widest dark:text-white" data-v-b918363c${_scopeId2}>${ssrInterpolate(_ctx.$t("Расположение папки"))}</p><select class="w-full p-2.5 rounded-md dark:bg-gray-300" data-v-b918363c${_scopeId2}><option value="" data-v-b918363c${_scopeId2}>${ssrInterpolate(_ctx.$t("Наименование"))}</option></select></div></div><div class="flex justify-center gap-x-10" data-v-b918363c${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$f, {
                      class: "py-2 px-6 rounded-full",
                      type: "danger",
                      onClick: ($event) => __props.showCreateFolder = false
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$t("Отменить"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("Отменить")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_sfc_main$f, {
                      class: "py-2 px-6 rounded-full",
                      type: "success"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$t("Создать"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("Создать")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div></form>`);
                  } else {
                    return [
                      createVNode(_sfc_main$d, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("Создание папки")), 1)
                        ]),
                        _: 1
                      }),
                      createVNode("form", {
                        onSubmit: withModifiers(($event) => unref(loadCloud).create_folder(unref(createFolderForm)), ["prevent"])
                      }, [
                        createVNode("div", { class: "flex items-center justify-center gap-x-10 my-10" }, [
                          createVNode(_sfc_main$e, {
                            class: "w-6/12",
                            label: _ctx.$t("Название"),
                            modelValue: unref(createFolderForm).name,
                            "onUpdate:modelValue": ($event) => unref(createFolderForm).name = $event
                          }, null, 8, ["label", "modelValue", "onUpdate:modelValue"]),
                          createVNode("div", { class: "w-6/12 flex flex-col gap-y-2" }, [
                            createVNode("p", { class: "tracking-widest dark:text-white" }, toDisplayString(_ctx.$t("Расположение папки")), 1),
                            createVNode("select", { class: "w-full p-2.5 rounded-md dark:bg-gray-300" }, [
                              createVNode("option", { value: "" }, toDisplayString(_ctx.$t("Наименование")), 1)
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "flex justify-center gap-x-10" }, [
                          createVNode(_sfc_main$f, {
                            class: "py-2 px-6 rounded-full",
                            type: "danger",
                            onClick: ($event) => __props.showCreateFolder = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Отменить")), 1)
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_sfc_main$f, {
                            class: "py-2 px-6 rounded-full",
                            type: "success"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Создать")), 1)
                            ]),
                            _: 1
                          })
                        ])
                      ], 40, ["onSubmit"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="${ssrRenderClass({ "max-[840px]:hidden": !__props.activeStructure })}" data-v-b918363c${_scopeId}><div data-v-b918363c${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, null, {
              structureName: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Недавние `);
                } else {
                  return [
                    createTextVNode(" Недавние ")
                  ];
                }
              }),
              structureSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b918363c${_scopeId2}><path d="M12 7V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-b918363c${_scopeId2}></path></svg>`);
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
                      createVNode("path", {
                        d: "M12 7V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, null, {
              structureName: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Избранные `);
                } else {
                  return [
                    createTextVNode(" Избранные ")
                  ];
                }
              }),
              structureSvg: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b918363c${_scopeId2}><path d="M11.245 4.174C11.4765 3.50808 11.5922 3.17513 11.7634 3.08285C11.9115 3.00298 12.0898 3.00298 12.238 3.08285C12.4091 3.17513 12.5248 3.50808 12.7563 4.174L14.2866 8.57639C14.3525 8.76592 14.3854 8.86068 14.4448 8.93125C14.4972 8.99359 14.5641 9.04218 14.6396 9.07278C14.725 9.10743 14.8253 9.10947 15.0259 9.11356L19.6857 9.20852C20.3906 9.22288 20.743 9.23007 20.8837 9.36432C21.0054 9.48051 21.0605 9.65014 21.0303 9.81569C20.9955 10.007 20.7146 10.2199 20.1528 10.6459L16.4387 13.4616C16.2788 13.5829 16.1989 13.6435 16.1501 13.7217C16.107 13.7909 16.0815 13.8695 16.0757 13.9507C16.0692 14.0427 16.0982 14.1387 16.1563 14.3308L17.506 18.7919C17.7101 19.4667 17.8122 19.8041 17.728 19.9793C17.6551 20.131 17.5108 20.2358 17.344 20.2583C17.1513 20.2842 16.862 20.0829 16.2833 19.6802L12.4576 17.0181C12.2929 16.9035 12.2106 16.8462 12.1211 16.8239C12.042 16.8043 11.9593 16.8043 11.8803 16.8239C11.7908 16.8462 11.7084 16.9035 11.5437 17.0181L7.71805 19.6802C7.13937 20.0829 6.85003 20.2842 6.65733 20.2583C6.49056 20.2358 6.34626 20.131 6.27337 19.9793C6.18915 19.8041 6.29123 19.4667 6.49538 18.7919L7.84503 14.3308C7.90313 14.1387 7.93218 14.0427 7.92564 13.9507C7.91986 13.8695 7.89432 13.7909 7.85123 13.7217C7.80246 13.6435 7.72251 13.5829 7.56262 13.4616L3.84858 10.6459C3.28678 10.2199 3.00588 10.007 2.97101 9.81569C2.94082 9.65014 2.99594 9.48051 3.11767 9.36432C3.25831 9.23007 3.61074 9.22289 4.31559 9.20852L8.9754 9.11356C9.176 9.10947 9.27631 9.10743 9.36177 9.07278C9.43726 9.04218 9.50414 8.99359 9.55657 8.93125C9.61593 8.86068 9.64887 8.76592 9.71475 8.57639L11.245 4.174Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-b918363c${_scopeId2}></path></svg>`);
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
                      createVNode("path", {
                        d: "M11.245 4.174C11.4765 3.50808 11.5922 3.17513 11.7634 3.08285C11.9115 3.00298 12.0898 3.00298 12.238 3.08285C12.4091 3.17513 12.5248 3.50808 12.7563 4.174L14.2866 8.57639C14.3525 8.76592 14.3854 8.86068 14.4448 8.93125C14.4972 8.99359 14.5641 9.04218 14.6396 9.07278C14.725 9.10743 14.8253 9.10947 15.0259 9.11356L19.6857 9.20852C20.3906 9.22288 20.743 9.23007 20.8837 9.36432C21.0054 9.48051 21.0605 9.65014 21.0303 9.81569C20.9955 10.007 20.7146 10.2199 20.1528 10.6459L16.4387 13.4616C16.2788 13.5829 16.1989 13.6435 16.1501 13.7217C16.107 13.7909 16.0815 13.8695 16.0757 13.9507C16.0692 14.0427 16.0982 14.1387 16.1563 14.3308L17.506 18.7919C17.7101 19.4667 17.8122 19.8041 17.728 19.9793C17.6551 20.131 17.5108 20.2358 17.344 20.2583C17.1513 20.2842 16.862 20.0829 16.2833 19.6802L12.4576 17.0181C12.2929 16.9035 12.2106 16.8462 12.1211 16.8239C12.042 16.8043 11.9593 16.8043 11.8803 16.8239C11.7908 16.8462 11.7084 16.9035 11.5437 17.0181L7.71805 19.6802C7.13937 20.0829 6.85003 20.2842 6.65733 20.2583C6.49056 20.2358 6.34626 20.131 6.27337 19.9793C6.18915 19.8041 6.29123 19.4667 6.49538 18.7919L7.84503 14.3308C7.90313 14.1387 7.93218 14.0427 7.92564 13.9507C7.91986 13.8695 7.89432 13.7909 7.85123 13.7217C7.80246 13.6435 7.72251 13.5829 7.56262 13.4616L3.84858 10.6459C3.28678 10.2199 3.00588 10.007 2.97101 9.81569C2.94082 9.65014 2.99594 9.48051 3.11767 9.36432C3.25831 9.23007 3.61074 9.22289 4.31559 9.20852L8.9754 9.11356C9.176 9.10947 9.27631 9.10743 9.36177 9.07278C9.43726 9.04218 9.50414 8.99359 9.55657 8.93125C9.61593 8.86068 9.64887 8.76592 9.71475 8.57639L11.245 4.174Z",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", {
                onClick: ($event) => this.$emit("activeStructures")
              }, [
                createVNode("div", {
                  class: ["absolute bg-gray-300 rounded-l-lg px-2 hidden max-[840px]:block right-0 top-0", { "max-[840px]:hidden": __props.activeStructure === false }]
                }, [
                  (openBlock(), createBlock("svg", {
                    width: "30px",
                    height: "30px",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      d: "M16.9995 15.9995L20.9995 11.9995M20.9995 11.9995L16.9995 7.99951M20.9995 11.9995H8.99951M12.9995 20.9995H6.20029C5.08019 20.9995 4.52014 20.9995 4.09231 20.7815C3.71599 20.5898 3.41003 20.2838 3.21828 19.9075C3.00029 19.4797 3.00029 18.9196 3.00029 17.7995V6.19951C3.00029 5.07941 3.00029 4.51935 3.21828 4.09153C3.41003 3.71521 3.71599 3.40925 4.09231 3.2175C4.52014 2.99951 5.08019 2.99951 6.20029 2.99951L12.9995 2.99951",
                      stroke: "#000000",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    })
                  ]))
                ], 2)
              ], 8, ["onClick"]),
              createVNode("div", {
                class: [{ "max-[840px]:hidden": !__props.activeStructure }, "flex cursor-pointer dark:hover:bg-gray-500 p-2 transition-all duration-200 items-center gap-x-4 my-4 justify-center mx-auto"],
                onClick: ($event) => __props.showCreateFolder = true
              }, [
                createVNode("div", null, [
                  (openBlock(), createBlock("svg", {
                    class: "dark:stroke-white stroke-black",
                    width: "30px",
                    height: "30px",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      d: "M12 11L12 16",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }),
                    createVNode("path", {
                      d: "M14.5 13.5L9.5 13.5",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }),
                    createVNode("path", {
                      d: "M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z",
                      "stroke-width": "2"
                    })
                  ]))
                ]),
                createVNode("p", { class: "tracking-widest dark:text-white" }, toDisplayString(_ctx.$t("Создать папку")), 1)
              ], 10, ["onClick"]),
              __props.showCreateFolder ? (openBlock(), createBlock(_sfc_main$c, {
                key: 0,
                onShowModal: ($event) => __props.showCreateFolder = !__props.showCreateFolder
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$d, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Создание папки")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode("form", {
                    onSubmit: withModifiers(($event) => unref(loadCloud).create_folder(unref(createFolderForm)), ["prevent"])
                  }, [
                    createVNode("div", { class: "flex items-center justify-center gap-x-10 my-10" }, [
                      createVNode(_sfc_main$e, {
                        class: "w-6/12",
                        label: _ctx.$t("Название"),
                        modelValue: unref(createFolderForm).name,
                        "onUpdate:modelValue": ($event) => unref(createFolderForm).name = $event
                      }, null, 8, ["label", "modelValue", "onUpdate:modelValue"]),
                      createVNode("div", { class: "w-6/12 flex flex-col gap-y-2" }, [
                        createVNode("p", { class: "tracking-widest dark:text-white" }, toDisplayString(_ctx.$t("Расположение папки")), 1),
                        createVNode("select", { class: "w-full p-2.5 rounded-md dark:bg-gray-300" }, [
                          createVNode("option", { value: "" }, toDisplayString(_ctx.$t("Наименование")), 1)
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "flex justify-center gap-x-10" }, [
                      createVNode(_sfc_main$f, {
                        class: "py-2 px-6 rounded-full",
                        type: "danger",
                        onClick: ($event) => __props.showCreateFolder = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("Отменить")), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_sfc_main$f, {
                        class: "py-2 px-6 rounded-full",
                        type: "success"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("Создать")), 1)
                        ]),
                        _: 1
                      })
                    ])
                  ], 40, ["onSubmit"])
                ]),
                _: 1
              }, 8, ["onShowModal"])) : createCommentVNode("", true),
              createVNode("div", {
                class: { "max-[840px]:hidden": !__props.activeStructure }
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$3, null, {
                    structureName: withCtx(() => [
                      createTextVNode(" Недавние ")
                    ]),
                    structureSvg: withCtx(() => [
                      (openBlock(), createBlock("svg", {
                        class: "dark:stroke-white stroke-black",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M12 7V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        })
                      ]))
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$3, null, {
                    structureName: withCtx(() => [
                      createTextVNode(" Избранные ")
                    ]),
                    structureSvg: withCtx(() => [
                      (openBlock(), createBlock("svg", {
                        class: "dark:stroke-white stroke-black",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M11.245 4.174C11.4765 3.50808 11.5922 3.17513 11.7634 3.08285C11.9115 3.00298 12.0898 3.00298 12.238 3.08285C12.4091 3.17513 12.5248 3.50808 12.7563 4.174L14.2866 8.57639C14.3525 8.76592 14.3854 8.86068 14.4448 8.93125C14.4972 8.99359 14.5641 9.04218 14.6396 9.07278C14.725 9.10743 14.8253 9.10947 15.0259 9.11356L19.6857 9.20852C20.3906 9.22288 20.743 9.23007 20.8837 9.36432C21.0054 9.48051 21.0605 9.65014 21.0303 9.81569C20.9955 10.007 20.7146 10.2199 20.1528 10.6459L16.4387 13.4616C16.2788 13.5829 16.1989 13.6435 16.1501 13.7217C16.107 13.7909 16.0815 13.8695 16.0757 13.9507C16.0692 14.0427 16.0982 14.1387 16.1563 14.3308L17.506 18.7919C17.7101 19.4667 17.8122 19.8041 17.728 19.9793C17.6551 20.131 17.5108 20.2358 17.344 20.2583C17.1513 20.2842 16.862 20.0829 16.2833 19.6802L12.4576 17.0181C12.2929 16.9035 12.2106 16.8462 12.1211 16.8239C12.042 16.8043 11.9593 16.8043 11.8803 16.8239C11.7908 16.8462 11.7084 16.9035 11.5437 17.0181L7.71805 19.6802C7.13937 20.0829 6.85003 20.2842 6.65733 20.2583C6.49056 20.2358 6.34626 20.131 6.27337 19.9793C6.18915 19.8041 6.29123 19.4667 6.49538 18.7919L7.84503 14.3308C7.90313 14.1387 7.93218 14.0427 7.92564 13.9507C7.91986 13.8695 7.89432 13.7909 7.85123 13.7217C7.80246 13.6435 7.72251 13.5829 7.56262 13.4616L3.84858 10.6459C3.28678 10.2199 3.00588 10.007 2.97101 9.81569C2.94082 9.65014 2.99594 9.48051 3.11767 9.36432C3.25831 9.23007 3.61074 9.22289 4.31559 9.20852L8.9754 9.11356C9.176 9.10947 9.27631 9.10743 9.36177 9.07278C9.43726 9.04218 9.50414 8.99359 9.55657 8.93125C9.61593 8.86068 9.64887 8.76592 9.71475 8.57639L11.245 4.174Z",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        })
                      ]))
                    ]),
                    _: 1
                  })
                ])
              ], 2)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cloud/CloudUI/CloudUIStructure/TheCloudUiStructure.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TheCloudUiStructure = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-b918363c"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CloudContent",
  __ssrInlineRender: true,
  props: {
    activeStructure: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContextMenu = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex w-full gap-x-10 h-full relative" }, _attrs))}><div class="${ssrRenderClass([{ "!hidden": !__props.activeStructure }, "absolute top-0 right-0 w-full bg-black bg-opacity-40 rounded-lg z-[22] hidden max-[840px]:block"])}"></div><div class="${ssrRenderClass([{ "max-[425px]:w-full": __props.activeStructure }, "flex flex-col h-full max-[840px]:absolute max-[840px]:z-40 max-[840px]:dark:bg-gray-600 max-[840px]:bg-white gap-y-10 !z-[23]"])}">`);
      _push(ssrRenderComponent(TheCloudUiStructure, {
        "active-structure": __props.activeStructure,
        onActiveStructures: ($event) => __props.activeStructure = !__props.activeStructure
      }, null, _parent));
      _push(`<div class="${ssrRenderClass([{ "max-[840px]:!block": !__props.activeStructure }, "hidden"])}"><div class="cursor-pointer absolute top-8 max-[840px]:top-6 left-5 !z-0 dark:fill-white fill-black"><svg width="22" height="16" viewBox="0 0 22 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.999776 1.99957H20.9998C21.5177 1.99957 21.9845 1.46089 21.9845 0.9431C21.9845 0.425798 21.5607 0.00261796 21.0428 0.00261796H0.956408C0.43868 0.00261796 0.014912 0.425798 0.014912 0.9431C0.014912 1.46089 0.482048 1.99957 0.999776 1.99957ZM0.999776 8.99956H20.9998C21.5177 8.99956 21.9845 8.51664 21.9845 7.99933C21.9845 7.48203 21.5177 6.99958 20.9998 6.99958H0.999776C0.482048 6.99958 0.014912 7.48203 0.014912 7.99933C0.014912 8.51664 0.482048 8.99956 0.999776 8.99956ZM21.0428 15.9962H0.956408C0.43868 15.9962 0.014912 15.5727 0.014912 15.0551C0.014912 14.5379 0.482048 13.9997 0.999776 13.9997H20.9998C21.5177 13.9997 21.9845 14.5379 21.9845 15.0551C21.9845 15.5727 21.5607 15.9962 21.0428 15.9962Z"></path></svg></div></div></div><div class="w-full overflow-x-hidden relative border dark:border-gray-500 dark:shadow-lg dark:shadow-gray-500 p-10 max-[500px]:p-2 rounded-lg z-20">`);
      _push(ssrRenderComponent(_sfc_main$d, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Структура файлов"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Структура файлов")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(TheCloudUIFolders, { class: "z-10" }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UContextMenu, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class=""${_scopeId}><div class="dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10"${_scopeId}><div${_scopeId}><svg data-v-965c8b16="" class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path data-v-965c8b16="" d="M12 11L12 16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path data-v-965c8b16="" d="M14.5 13.5L9.5 13.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path data-v-965c8b16="" d="M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z" stroke-width="2"${_scopeId}></path></svg></div><p${_scopeId}>${ssrInterpolate(_ctx.$t("Создать папку"))}</p></div><div class="dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10"${_scopeId}><div${_scopeId}><svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M10 12V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M14 12V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M4 7H20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></div><p${_scopeId}>${ssrInterpolate(_ctx.$t("Убрать в корзину"))}</p></div></div>`);
          } else {
            return [
              createVNode("div", { class: "" }, [
                createVNode("div", { class: "dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10" }, [
                  createVNode("div", null, [
                    (openBlock(), createBlock("svg", {
                      "data-v-965c8b16": "",
                      class: "dark:stroke-white stroke-black",
                      width: "25px",
                      height: "25px",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", {
                        "data-v-965c8b16": "",
                        d: "M12 11L12 16",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        "data-v-965c8b16": "",
                        d: "M14.5 13.5L9.5 13.5",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        "data-v-965c8b16": "",
                        d: "M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z",
                        "stroke-width": "2"
                      })
                    ]))
                  ]),
                  createVNode("p", null, toDisplayString(_ctx.$t("Создать папку")), 1)
                ]),
                createVNode("div", { class: "dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10" }, [
                  createVNode("div", null, [
                    (openBlock(), createBlock("svg", {
                      class: "dark:stroke-white stroke-black",
                      width: "25px",
                      height: "25px",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", {
                        d: "M10 12V17",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        d: "M14 12V17",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        d: "M4 7H20",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        d: "M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        d: "M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ]))
                  ]),
                  createVNode("p", null, toDisplayString(_ctx.$t("Убрать в корзину")), 1)
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cloud/CloudContent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Файл менеджер",
      description: "Файловый менеджер для хранения или взаимодействия с файлами"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base/cloud/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-BgdBmkKw.js.map
