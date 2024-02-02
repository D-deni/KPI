import { defineComponent, ref, onUnmounted, mergeProps, unref, useSSRContext, toRef, computed, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, createVNode, resolveComponent, watchSyncEffect } from "vue";
import { v as mergeConfig, x as appConfig, r as useSeoMeta } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { u as useDocumentStore } from "./documents-mgmWsqju.js";
import { useRoute, useRouter } from "vue-router";
import { _ as _sfc_main$h } from "./TheBreadcrumbs-ms4_phBH.js";
import { T as TheContentBlock } from "./TheContentBlock-AeyxWvVh.js";
import { _ as _sfc_main$e } from "./TheTextContent-rN29GJom.js";
import { _ as _sfc_main$f } from "./TheButton-Jrv5tshN.js";
import { _ as _sfc_main$g } from "./TheModal-1X0PcTyA.js";
import { u as useAuthStore, a as useUserStore } from "./auth-ltfjqTsG.js";
import isEqual from "lodash/isEqual.js";
import { toast } from "vue3-toastify";
import { u as useCompanies } from "./companies-Vl6LYc-q.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-yVxbj29m.js";
import { twMerge, twJoin } from "tailwind-merge";
import { a as arrow, u as useUI, b as usePopper } from "./selectMenu-J8vdu0Jm.js";
import { defu } from "defu";
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
import "./axios-jpYG50U2.js";
import "axios";
import "nuxt-storage/nuxt-storage.js";
import "./nuxt-link-nvHjMUuE.js";
const kbd = {
  base: "inline-flex items-center justify-center text-gray-900 dark:text-white",
  padding: "px-1",
  size: {
    xs: "h-4 min-w-[16px] text-[10px]",
    sm: "h-5 min-w-[20px] text-[11px]",
    md: "h-6 min-w-[24px] text-[12px]"
  },
  rounded: "rounded",
  font: "font-medium font-sans",
  background: "bg-gray-100 dark:bg-gray-800",
  ring: "ring-1 ring-gray-300 dark:ring-gray-700 ring-inset",
  default: {
    size: "sm"
  }
};
const tooltip = {
  wrapper: "relative inline-flex",
  container: "z-20 group",
  width: "max-w-xs",
  background: "bg-white dark:bg-gray-900",
  color: "text-gray-900 dark:text-white",
  shadow: "shadow",
  rounded: "rounded",
  ring: "ring-1 ring-gray-200 dark:ring-gray-800",
  base: "[@media(pointer:coarse)]:hidden h-6 px-2 py-1 text-xs font-normal truncate relative",
  shortcuts: "hidden md:inline-flex flex-shrink-0 gap-0.5",
  middot: "mx-1 text-gray-700 dark:text-gray-200",
  // Syntax for `<Transition>` component https://vuejs.org/guide/built-ins/transition.html#css-based-transitions
  transition: {
    enterActiveClass: "transition ease-out duration-200",
    enterFromClass: "opacity-0 translate-y-1",
    enterToClass: "opacity-100 translate-y-0",
    leaveActiveClass: "transition ease-in duration-150",
    leaveFromClass: "opacity-100 translate-y-0",
    leaveToClass: "opacity-0 translate-y-1"
  },
  popper: {
    strategy: "fixed"
  },
  arrow
};
class Node {
  constructor(self, parent = null, previous = null) {
    this.self = self;
    this.parent = parent;
    this.previous = previous;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(self) {
    const node2 = new Node(self);
    if (this.tail) {
      this.tail.parent = node2;
    }
    if (!this.head) {
      this.head = node2;
    }
    this.tail = node2;
  }
  getPrevious(node2) {
    let current = this.head;
    while (current && current.parent !== node2) {
      current = current.parent;
    }
    return current;
  }
  prepend(self) {
    const node2 = new Node(self, this.parent);
    this.head = node2;
  }
  delete(value) {
    var _a;
    if (!this.head) {
      return null;
    }
    let deletedNode = null;
    while (this.head && isEqual(this.head.self, value)) {
      deletedNode = this.head;
      this.head = this.head.parent;
    }
    let currentNode = this.head;
    if (currentNode !== null) {
      while (currentNode.parent) {
        if (isEqual(currentNode.parent.self, value)) {
          deletedNode = currentNode.parent;
          currentNode.parent = currentNode.parent.parent;
        } else {
          currentNode = currentNode.parent;
        }
      }
    }
    if (isEqual((_a = this.tail) == null ? void 0 : _a.self, value)) {
      this.tail = currentNode;
    }
    return deletedNode;
  }
  deleteNodeValue(targetValue, removeObject) {
    let current = this.head;
    while (current) {
      if (isEqual(current.self, targetValue) && Array.isArray(current.self)) {
        const indexToRemove = current.self.findIndex((obj) => isEqual(obj, removeObject));
        if (indexToRemove !== -1) {
          current.self.splice(indexToRemove, 1);
          return;
        }
      }
      current = current.parent;
    }
  }
  replaceNodeValue(targetValue, newValue) {
    let current = this.head;
    while (current) {
      if (isEqual(current.self, targetValue)) {
        current.self = newValue;
        return;
      }
      current = current.parent;
    }
  }
  addContentToNode(targetValue, content) {
    let current = this.head;
    while (current) {
      if (isEqual(current.self, targetValue)) {
        current.self.push(content);
        return;
      }
      current = current.parent;
    }
  }
  find(value) {
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;
    while (currentNode) {
      if (isEqual(currentNode.self, value)) {
        return currentNode;
      }
      currentNode = currentNode.parent;
    }
    return null;
  }
  insertAfter(after, data) {
    const found = this.find(after);
    if (!found) {
      return this;
    }
    found.next = new Node(data, found.next);
  }
  swipeIfCondition() {
    let current = this.head;
    while (current && current.parent) {
      if (current.self[0].priority < current.parent.self[0].priority) {
        const tempSelf = current.self;
        current.self = current.parent.self;
        current.parent.self = tempSelf;
        const tempParent = current.self.parent;
        current.self.parent = current.parent.self.parent;
        current.parent.self.parent = tempParent;
        toast.info("Пользователь был перемещен", { theme: "auto", autoClose: 1500 });
      }
      console.log(current);
      current = current.parent;
    }
  }
  toArray() {
    const nodes = [];
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.parent;
    }
    return nodes;
  }
}
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "DocumentItemInfoChainScheduleItem",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      default: () => {
      }
    },
    currentUser: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    const company = useCompanies();
    const authStore = useAuthStore();
    ref(false);
    ref(new LinkedList());
    const documentStore = useDocumentStore();
    onUnmounted(() => {
      documentStore.showUsersNode = [];
      documentStore.showDepartment = [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        name: "list",
        class: "flex items-center"
      }, _attrs))} data-v-f2659d0b>`);
      ssrRenderList(unref(documentStore).userList, (userGroup, groupIndex) => {
        _push(`<div class="px-2 h-full z-20 relative flex items-center transition-all" data-v-f2659d0b><div class="transition-all" data-v-f2659d0b></div><div class="${ssrRenderClass([{ "border border-dashed border-blueSemiLight h-20 rounded-lg": userGroup.length === 0 || userGroup === null }, "w-[220px] gap-y-6 flex items-center flex-col justify-center relative"])}" data-v-f2659d0b>`);
        if (userGroup.length === 0) {
          _push(`<p class="absolute text-blueSemiLight tracking-widest text-sm w-full h-full flex items-center justify-center rounded-lg transition-all duration-200" data-v-f2659d0b>${ssrInterpolate(_ctx.$t("Область для добавления"))}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (groupIndex !== 0) {
          _push(`<div class="absolute top-0" data-v-f2659d0b><button class="rounded-lg border border-gray-500 dark:border-white absolute px-2.5 pt-1 -top-10 right-10 text-green-400 font-bold" data-v-f2659d0b> + </button><button class="rounded-lg border border-gray-500 dark:border-white absolute px-2.5 pt-1 -top-10 left-10 text-red-400 font-bold" data-v-f2659d0b> X </button></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(documentStore).showContext === groupIndex) {
          _push(`<div class="absolute rounded-lg dark:bg-gray-700 bg-gray-200 w-[220px] top-10 z-[5] p-2" data-v-f2659d0b><input type="text" class="pl-2 dark:bg-gray-600 rounded-lg outline-none w-full mb-4"${ssrRenderAttr("placeholder", _ctx.$t("Поиск..."))} data-v-f2659d0b><div class="overflow-auto max-h-[150px]" data-v-f2659d0b><!--[-->`);
          ssrRenderList(unref(company).get_all_department.results, (department) => {
            _push(`<div data-v-f2659d0b><button class="flex items-center justify-between gap-x-2 w-full break-words break-all" data-v-f2659d0b><span data-v-f2659d0b>${ssrInterpolate(department.name)}</span><div class="${ssrRenderClass({ "rotate-180": unref(documentStore).showContextDepartment === department.id })}" data-v-f2659d0b><svg class="dark:fill-white fill-black" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-f2659d0b><path fill-rule="evenodd" clip-rule="evenodd" d="M6.46967 8.96967C6.76256 8.67678 7.23744 8.67678 7.53033 8.96967L12 13.4393L16.4697 8.96967C16.7626 8.67678 17.2374 8.67678 17.5303 8.96967C17.8232 9.26256 17.8232 9.73744 17.5303 10.0303L12.5303 15.0303C12.3897 15.171 12.1989 15.25 12 15.25C11.8011 15.25 11.6103 15.171 11.4697 15.0303L6.46967 10.0303C6.17678 9.73744 6.17678 9.26256 6.46967 8.96967Z" data-v-f2659d0b></path></svg></div></button>`);
            if (unref(documentStore).showContextDepartment === department.id) {
              _push(`<div data-v-f2659d0b><!--[-->`);
              ssrRenderList(department.participants, (user) => {
                _push(`<div data-v-f2659d0b>`);
                if (department.participants && unref(documentStore).showUsersNode.every((e) => e.id !== user.id) && user.id !== unref(authStore).user.id && userGroup.every((e) => e.priority === user.priority)) {
                  _push(`<button class="px-2 py-1 w-full flex items-center text-start hover:bg-semiCyan rounded-lg transition-all" data-v-f2659d0b><span class="" data-v-f2659d0b>${ssrInterpolate(user.first_name + " " + user.last_name)}</span></button>`);
                } else {
                  _push(`<!---->`);
                }
                _push(`</div>`);
              });
              _push(`<!--]--></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<list${ssrRenderAttrs({
          name: "list",
          class: "flex flex-col gap-y-6 transition-all"
        })} data-v-f2659d0b>`);
        ssrRenderList(userGroup, (user, userIndex) => {
          _push(`<div class="h-24 w-[220px] border border-gray-500 dark:border-white px-2 rounded-lg text-center flex items-center justify-center mx-auto relative" data-v-f2659d0b><div class="flex items-center gap-x-2" data-v-f2659d0b>`);
          if (user.photo_url) {
            _push(`<div class="max-w-[50px]" data-v-f2659d0b><img class="w-full rounded-full"${ssrRenderAttr("src", unref(authStore).get_server_domain + user.photo_url)} alt="" data-v-f2659d0b></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="break-words" data-v-f2659d0b><p class="text-sm w-full" data-v-f2659d0b>${ssrInterpolate(user.first_name + " " + user.last_name)}</p></div></div>`);
          if (user.id !== unref(authStore).user.id && groupIndex !== 0) {
            _push(`<button class="absolute px-2.5 pt-1 top-0 right-0 border-l border-b border-gray-500 dark:border-white rounded rounded-tl-none rounded-br-none text-red-400 font-bold" data-v-f2659d0b> X </button>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`</list></div></div>`);
      });
      _push(`<button class="text-2xl px-4 py-2 ml-4 rounded-lg border border-blueSemiLight text-blueDarkSemiLight cursor-pointer hover:scale-95 transition-all" data-v-f2659d0b> + </button></div>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/documents/DocumentItemInfo/DocumentIemInfoChain/DocumentItemInfoChainScheduleItem.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const DocumentItemInfoChainScheduleItem = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-f2659d0b"]]);
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "DocumentItemInfoChainSchedule",
  __ssrInlineRender: true,
  setup(__props) {
    useAuthStore();
    useDocumentStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full" }, _attrs))}><div class="h-[500px] grid overflow-auto border grid-cols-1">`);
      _push(ssrRenderComponent(DocumentItemInfoChainScheduleItem, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/documents/DocumentItemInfo/DocumentIemInfoChain/DocumentItemInfoChainSchedule.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const config$1 = mergeConfig(appConfig.ui.strategy, appConfig.ui.kbd, kbd);
const _sfc_main$b = defineComponent({
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: () => config$1.default.size,
      validator(value) {
        return Object.keys(config$1.size).includes(value);
      }
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
    const { ui, attrs } = useUI("kbd", toRef(props, "ui"), config$1);
    const kbdClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.size[props.size],
        ui.value.padding,
        ui.value.rounded,
        ui.value.font,
        ui.value.background,
        ui.value.ring
      ), props.class);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      kbdClass
    };
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<kbd${ssrRenderAttrs(mergeProps({ class: _ctx.kbdClass }, _ctx.attrs, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
    _push(`${ssrInterpolate(_ctx.value)}`);
  }, _push, _parent);
  _push(`</kbd>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Kbd.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$2]]);
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.tooltip, tooltip);
const _sfc_main$a = defineComponent({
  components: {
    UKbd: __nuxt_component_0$1
  },
  inheritAttrs: false,
  props: {
    text: {
      type: String,
      default: null
    },
    prevent: {
      type: Boolean,
      default: false
    },
    shortcuts: {
      type: Array,
      default: () => []
    },
    openDelay: {
      type: Number,
      default: 0
    },
    closeDelay: {
      type: Number,
      default: 0
    },
    popper: {
      type: Object,
      default: () => ({})
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
    const { ui, attrs } = useUI("tooltip", toRef(props, "ui"), config, toRef(props, "class"));
    const popper = computed(() => defu({}, props.popper, ui.value.popper));
    const [trigger, container] = usePopper(popper.value);
    const open = ref(false);
    let openTimeout = null;
    let closeTimeout = null;
    function onMouseOver() {
      if (closeTimeout) {
        clearTimeout(closeTimeout);
        closeTimeout = null;
      }
      if (open.value) {
        return;
      }
      openTimeout = openTimeout || setTimeout(() => {
        open.value = true;
        openTimeout = null;
      }, props.openDelay);
    }
    function onMouseLeave() {
      if (openTimeout) {
        clearTimeout(openTimeout);
        openTimeout = null;
      }
      if (!open.value) {
        return;
      }
      closeTimeout = closeTimeout || setTimeout(() => {
        open.value = false;
        closeTimeout = null;
      }, props.closeDelay);
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      popper,
      trigger,
      container,
      open,
      onMouseOver,
      onMouseLeave
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  const _component_UKbd = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    ref: "trigger",
    class: _ctx.ui.wrapper
  }, _ctx.attrs, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", { open: _ctx.open }, () => {
    _push(` Hover `);
  }, _push, _parent);
  if (_ctx.open && !_ctx.prevent) {
    _push(`<div class="${ssrRenderClass([_ctx.ui.container, _ctx.ui.width])}"><template><div>`);
    if (_ctx.popper.arrow) {
      _push(`<div data-popper-arrow class="${ssrRenderClass(Object.values(_ctx.ui.arrow))}"></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="${ssrRenderClass([_ctx.ui.base, _ctx.ui.background, _ctx.ui.color, _ctx.ui.rounded, _ctx.ui.shadow, _ctx.ui.ring])}">`);
    ssrRenderSlot(_ctx.$slots, "text", {}, () => {
      _push(`${ssrInterpolate(_ctx.text)}`);
    }, _push, _parent);
    if ((_a = _ctx.shortcuts) == null ? void 0 : _a.length) {
      _push(`<span class="${ssrRenderClass(_ctx.ui.shortcuts)}"><span class="${ssrRenderClass(_ctx.ui.middot)}">·</span><!--[-->`);
      ssrRenderList(_ctx.shortcuts, (shortcut) => {
        _push(ssrRenderComponent(_component_UKbd, {
          key: shortcut,
          size: "xs"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(shortcut)}`);
            } else {
              return [
                createTextVNode(toDisplayString(shortcut), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div></template></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/overlays/Tooltip.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$9 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "rounded-lg transition-all duration-200" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/documents/DocumentItemInfo/DocumentIemInfoChain/DocumentItemInfoChainFileBtn.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const DocumentItemInfoChainFileBtn = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "DocumentItemInfoChainFile",
  __ssrInlineRender: true,
  props: {
    item: Object,
    default: () => {
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_UTooltip = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><p class="text-center tracking-widest">${ssrInterpolate(_ctx.$t("Прикреплённый файл:"))}</p><div class="flex items-center gap-x-4 mt-4"><button class="flex items-center gap-x-4 tracking-widest hover:bg-blueSemiLight p-1 rounded-lg transition-all hover:text-white">`);
      if (((_a = __props.item.file_name) == null ? void 0 : _a.substr(-3)) === "pdf") {
        _push(`<div><svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 56 64" enable-background="new 0 0 56 64" xml:space="preserve"><g><path fill="#8C181A" d="M5.1,0C2.3,0,0,2.3,0,5.1v53.8C0,61.7,2.3,64,5.1,64h45.8c2.8,0,5.1-2.3,5.1-5.1V20.3L37.1,0H5.1z"></path><path fill="#6B0D12" d="M56,20.4v1H43.2c0,0-6.3-1.3-6.1-6.7c0,0,0.2,5.7,6,5.7H56z"></path><path opacity="0.5" fill="#FFFFFF" enable-background="new" d="M37.1,0v14.6c0,1.7,1.1,5.8,6.1,5.8H56L37.1,0z"></path></g><path fill="#FFFFFF" d="M14.9,49h-3.3v4.1c0,0.4-0.3,0.7-0.8,0.7c-0.4,0-0.7-0.3-0.7-0.7V42.9c0-0.6,0.5-1.1,1.1-1.1h3.7
            c2.4,0,3.8,1.7,3.8,3.6C18.7,47.4,17.3,49,14.9,49z M14.8,43.1h-3.2v4.6h3.2c1.4,0,2.4-0.9,2.4-2.3C17.2,44,16.2,43.1,14.8,43.1z
             M25.2,53.8h-3c-0.6,0-1.1-0.5-1.1-1.1v-9.8c0-0.6,0.5-1.1,1.1-1.1h3c3.7,0,6.2,2.6,6.2,6C31.4,51.2,29,53.8,25.2,53.8z M25.2,43.1
            h-2.6v9.3h2.6c2.9,0,4.6-2.1,4.6-4.7C29.9,45.2,28.2,43.1,25.2,43.1z M41.5,43.1h-5.8V47h5.7c0.4,0,0.6,0.3,0.6,0.7
            s-0.3,0.6-0.6,0.6h-5.7v4.8c0,0.4-0.3,0.7-0.8,0.7c-0.4,0-0.7-0.3-0.7-0.7V42.9c0-0.6,0.5-1.1,1.1-1.1h6.2c0.4,0,0.6,0.3,0.6,0.7
            C42.2,42.8,41.9,43.1,41.5,43.1z"></path></svg></div>`);
      } else {
        _push(`<!---->`);
      }
      if (((_b = __props.item.file_name) == null ? void 0 : _b.substr(-3)) === "doc" || ((_c = __props.item.file_name) == null ? void 0 : _c.substr(-4)) === "docx") {
        _push(`<div><svg width="50px" height="50px" viewBox="-4 0 64 64" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="m5.11 0a5.07 5.07 0 0 0 -5.11 5v53.88a5.07 5.07 0 0 0 5.11 5.12h45.78a5.07 5.07 0 0 0 5.11-5.12v-38.6l-18.94-20.28z" fill="#107cad"></path><path d="m56 20.35v1h-12.82s-6.31-1.26-6.13-6.71c0 0 .21 5.71 6 5.71z" fill="#084968"></path><path d="m37.07 0v14.56a5.78 5.78 0 0 0 6.11 5.79h12.82z" fill="#90d0fe" opacity=".5"></path></g><path d="m14.24 53.86h-3a1.08 1.08 0 0 1 -1.08-1.08v-9.85a1.08 1.08 0 0 1 1.08-1.08h3a6 6 0 1 1 0 12zm0-10.67h-2.61v9.34h2.61a4.41 4.41 0 0 0 4.61-4.66 4.38 4.38 0 0 0 -4.61-4.68zm14.42 10.89a5.86 5.86 0 0 1 -6-6.21 6 6 0 1 1 11.92 0 5.87 5.87 0 0 1 -5.92 6.21zm0-11.09c-2.7 0-4.41 2.07-4.41 4.88s1.71 4.88 4.41 4.88 4.41-2.09 4.41-4.88-1.72-4.87-4.41-4.87zm18.45.38a.75.75 0 0 1 .2.52.71.71 0 0 1 -.7.72.64.64 0 0 1 -.51-.24 4.06 4.06 0 0 0 -3-1.38 4.61 4.61 0 0 0 -4.63 4.88 4.63 4.63 0 0 0 4.63 4.88 4 4 0 0 0 3-1.37.7.7 0 0 1 .51-.24.72.72 0 0 1 .7.74.78.78 0 0 1 -.2.51 5.33 5.33 0 0 1 -4 1.69 6.22 6.22 0 0 1 0-12.43 5.26 5.26 0 0 1 4 1.72z" fill="#ffffff"></path></svg></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span>${ssrInterpolate(__props.item.file_name)}</span></button><div class="flex items-center gap-x-6">`);
      _push(ssrRenderComponent(DocumentItemInfoChainFileBtn, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UTooltip, {
              text: _ctx.$t("Скачать"),
              class: "tracking-widest"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg class="stroke-black dark:stroke-white hover:!stroke-semiCyan transition" width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path d="M12 7L12 14M12 14L15 11M12 14L9 11" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}></path><path d="M16 17H12H8" stroke-width="1.5" stroke-linecap="round"${_scopeId2}></path><path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke-width="1.5" stroke-linecap="round"${_scopeId2}></path></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      class: "stroke-black dark:stroke-white hover:!stroke-semiCyan transition",
                      width: "40px",
                      height: "40px",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", {
                        d: "M12 7L12 14M12 14L15 11M12 14L9 11",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      createVNode("path", {
                        d: "M16 17H12H8",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round"
                      }),
                      createVNode("path", {
                        d: "M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round"
                      })
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UTooltip, {
                text: _ctx.$t("Скачать"),
                class: "tracking-widest"
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock("svg", {
                    class: "stroke-black dark:stroke-white hover:!stroke-semiCyan transition",
                    width: "40px",
                    height: "40px",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      d: "M12 7L12 14M12 14L15 11M12 14L9 11",
                      "stroke-width": "1.5",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }),
                    createVNode("path", {
                      d: "M16 17H12H8",
                      "stroke-width": "1.5",
                      "stroke-linecap": "round"
                    }),
                    createVNode("path", {
                      d: "M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8",
                      "stroke-width": "1.5",
                      "stroke-linecap": "round"
                    })
                  ]))
                ]),
                _: 1
              }, 8, ["text"])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (!((_d = __props.item.chain) == null ? void 0 : _d.self)) {
        _push(ssrRenderComponent(DocumentItemInfoChainFileBtn, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UTooltip, {
                text: _ctx.$t("Изменить файл"),
                class: "tracking-widest"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<svg class="dark:fill-white fill-black hover:!fill-semiCyan transition" height="30px" width="30px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 452.025 452.025" xml:space="preserve"${_scopeId2}><path d="M147.912,363.325c-4.7-4.7-12.3-4.7-17,0c-4.7,4.7-4.7,12.3,0,17l13.6,13.6h-55.2c-35.9,0-65-29.2-65-65v-40.3
                      c0-6.6-5.4-12-12-12s-12,5.4-12,12v40.3c0,49.1,39.9,89,89,89h55.2l-13.6,13.6c-4.7,4.7-4.7,12.3,0,17c2.3,2.3,5.4,3.5,8.5,3.5
                      s6.1-1.2,8.5-3.5l34.1-34.1c4.7-4.7,4.7-12.3,0-17L147.912,363.325z"${_scopeId2}></path><path d="M210.312,0.025h-197.1c-6.6,0-12,5.4-12,12v197.1c0,6.6,5.4,12,12,12h197.1c6.6,0,12-5.4,12-12v-197.1
                      C222.312,5.425,217.012,0.025,210.312,0.025z M198.312,197.125h-173.1v-173.1h173.1V197.125z"${_scopeId2}></path><path d="M362.612,34.125h-55.2l13.6-13.6c4.7-4.7,4.7-12.3,0-17s-12.3-4.7-17,0l-34,34.1c-4.7,4.7-4.7,12.3,0,17l34.1,34.1
                      c2.3,2.3,5.4,3.5,8.5,3.5s6.1-1.2,8.5-3.5c4.7-4.7,4.7-12.3,0-17l-13.6-13.6h55.2c35.9,0,65,29.2,65,65v40.3c0,6.6,5.4,12,12,12
                      s12-5.4,12-12v-40.3C451.712,74.025,411.712,34.125,362.612,34.125z"${_scopeId2}></path><path d="M438.812,428.025c-3.2,0-6.3,1.3-8.5,3.5s-3.5,5.3-3.5,8.5c0,3.1,1.3,6.3,3.5,8.5s5.3,3.5,8.5,3.5s6.3-1.3,8.5-3.5
                      s3.5-5.3,3.5-8.5s-1.3-6.3-3.5-8.5C445.012,429.325,441.912,428.025,438.812,428.025z"${_scopeId2}></path><path d="M389.512,428.025c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S396.112,428.025,389.512,428.025z"${_scopeId2}></path><path d="M290.912,428.025c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S297.612,428.025,290.912,428.025z"${_scopeId2}></path><path d="M340.212,428.025c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S346.812,428.025,340.212,428.025z"${_scopeId2}></path><path d="M241.713,428.025c-3.2,0-6.3,1.3-8.5,3.5s-3.5,5.3-3.5,8.5c0,3.1,1.3,6.3,3.5,8.5s5.3,3.5,8.5,3.5c3.1,0,6.3-1.3,8.5-3.5
                      s3.5-5.3,3.5-8.5s-1.3-6.3-3.5-8.5S244.812,428.025,241.713,428.025z"${_scopeId2}></path><path d="M241.713,378.725c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S248.312,378.725,241.713,378.725z"${_scopeId2}></path><path d="M241.713,329.425c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S248.312,329.425,241.713,329.425z"${_scopeId2}></path><path d="M241.713,280.125c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S248.312,280.125,241.713,280.125z"${_scopeId2}></path><path d="M241.713,230.925c-3.2,0-6.3,1.3-8.5,3.5s-3.5,5.3-3.5,8.5s1.3,6.3,3.5,8.5s5.3,3.5,8.5,3.5c3.1,0,6.3-1.3,8.5-3.5
                      s3.5-5.3,3.5-8.5c0-3.1-1.3-6.3-3.5-8.5C247.912,232.125,244.812,230.925,241.713,230.925z"${_scopeId2}></path><path d="M389.512,230.925c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S396.112,230.925,389.512,230.925z"${_scopeId2}></path><path d="M340.212,230.925c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S346.812,230.925,340.212,230.925z"${_scopeId2}></path><path d="M290.912,230.925c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S297.612,230.925,290.912,230.925z"${_scopeId2}></path><path d="M438.812,230.925c-3.2,0-6.3,1.3-8.5,3.5s-3.5,5.3-3.5,8.5s1.3,6.3,3.5,8.5s5.3,3.5,8.5,3.5s6.3-1.3,8.5-3.5
                      s3.5-5.3,3.5-8.5c0-3.1-1.3-6.3-3.5-8.5C445.012,232.225,441.912,230.925,438.812,230.925z"${_scopeId2}></path><path d="M438.812,280.125c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S445.412,280.125,438.812,280.125z"${_scopeId2}></path><path d="M438.812,378.725c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S445.412,378.725,438.812,378.725z"${_scopeId2}></path><path d="M438.812,329.425c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S445.412,329.425,438.812,329.425z"${_scopeId2}></path></svg>`);
                  } else {
                    return [
                      (openBlock(), createBlock("svg", {
                        class: "dark:fill-white fill-black hover:!fill-semiCyan transition",
                        height: "30px",
                        width: "30px",
                        version: "1.1",
                        id: "Capa_1",
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        viewBox: "0 0 452.025 452.025",
                        "xml:space": "preserve"
                      }, [
                        createVNode("path", { d: "M147.912,363.325c-4.7-4.7-12.3-4.7-17,0c-4.7,4.7-4.7,12.3,0,17l13.6,13.6h-55.2c-35.9,0-65-29.2-65-65v-40.3\r\n                      c0-6.6-5.4-12-12-12s-12,5.4-12,12v40.3c0,49.1,39.9,89,89,89h55.2l-13.6,13.6c-4.7,4.7-4.7,12.3,0,17c2.3,2.3,5.4,3.5,8.5,3.5\r\n                      s6.1-1.2,8.5-3.5l34.1-34.1c4.7-4.7,4.7-12.3,0-17L147.912,363.325z" }),
                        createVNode("path", { d: "M210.312,0.025h-197.1c-6.6,0-12,5.4-12,12v197.1c0,6.6,5.4,12,12,12h197.1c6.6,0,12-5.4,12-12v-197.1\r\n                      C222.312,5.425,217.012,0.025,210.312,0.025z M198.312,197.125h-173.1v-173.1h173.1V197.125z" }),
                        createVNode("path", { d: "M362.612,34.125h-55.2l13.6-13.6c4.7-4.7,4.7-12.3,0-17s-12.3-4.7-17,0l-34,34.1c-4.7,4.7-4.7,12.3,0,17l34.1,34.1\r\n                      c2.3,2.3,5.4,3.5,8.5,3.5s6.1-1.2,8.5-3.5c4.7-4.7,4.7-12.3,0-17l-13.6-13.6h55.2c35.9,0,65,29.2,65,65v40.3c0,6.6,5.4,12,12,12\r\n                      s12-5.4,12-12v-40.3C451.712,74.025,411.712,34.125,362.612,34.125z" }),
                        createVNode("path", { d: "M438.812,428.025c-3.2,0-6.3,1.3-8.5,3.5s-3.5,5.3-3.5,8.5c0,3.1,1.3,6.3,3.5,8.5s5.3,3.5,8.5,3.5s6.3-1.3,8.5-3.5\r\n                      s3.5-5.3,3.5-8.5s-1.3-6.3-3.5-8.5C445.012,429.325,441.912,428.025,438.812,428.025z" }),
                        createVNode("path", { d: "M389.512,428.025c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S396.112,428.025,389.512,428.025z" }),
                        createVNode("path", { d: "M290.912,428.025c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S297.612,428.025,290.912,428.025z" }),
                        createVNode("path", { d: "M340.212,428.025c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S346.812,428.025,340.212,428.025z" }),
                        createVNode("path", { d: "M241.713,428.025c-3.2,0-6.3,1.3-8.5,3.5s-3.5,5.3-3.5,8.5c0,3.1,1.3,6.3,3.5,8.5s5.3,3.5,8.5,3.5c3.1,0,6.3-1.3,8.5-3.5\r\n                      s3.5-5.3,3.5-8.5s-1.3-6.3-3.5-8.5S244.812,428.025,241.713,428.025z" }),
                        createVNode("path", { d: "M241.713,378.725c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S248.312,378.725,241.713,378.725z" }),
                        createVNode("path", { d: "M241.713,329.425c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S248.312,329.425,241.713,329.425z" }),
                        createVNode("path", { d: "M241.713,280.125c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S248.312,280.125,241.713,280.125z" }),
                        createVNode("path", { d: "M241.713,230.925c-3.2,0-6.3,1.3-8.5,3.5s-3.5,5.3-3.5,8.5s1.3,6.3,3.5,8.5s5.3,3.5,8.5,3.5c3.1,0,6.3-1.3,8.5-3.5\r\n                      s3.5-5.3,3.5-8.5c0-3.1-1.3-6.3-3.5-8.5C247.912,232.125,244.812,230.925,241.713,230.925z" }),
                        createVNode("path", { d: "M389.512,230.925c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S396.112,230.925,389.512,230.925z" }),
                        createVNode("path", { d: "M340.212,230.925c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S346.812,230.925,340.212,230.925z" }),
                        createVNode("path", { d: "M290.912,230.925c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S297.612,230.925,290.912,230.925z" }),
                        createVNode("path", { d: "M438.812,230.925c-3.2,0-6.3,1.3-8.5,3.5s-3.5,5.3-3.5,8.5s1.3,6.3,3.5,8.5s5.3,3.5,8.5,3.5s6.3-1.3,8.5-3.5\r\n                      s3.5-5.3,3.5-8.5c0-3.1-1.3-6.3-3.5-8.5C445.012,232.225,441.912,230.925,438.812,230.925z" }),
                        createVNode("path", { d: "M438.812,280.125c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S445.412,280.125,438.812,280.125z" }),
                        createVNode("path", { d: "M438.812,378.725c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S445.412,378.725,438.812,378.725z" }),
                        createVNode("path", { d: "M438.812,329.425c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S445.412,329.425,438.812,329.425z" })
                      ]))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UTooltip, {
                  text: _ctx.$t("Изменить файл"),
                  class: "tracking-widest"
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock("svg", {
                      class: "dark:fill-white fill-black hover:!fill-semiCyan transition",
                      height: "30px",
                      width: "30px",
                      version: "1.1",
                      id: "Capa_1",
                      xmlns: "http://www.w3.org/2000/svg",
                      "xmlns:xlink": "http://www.w3.org/1999/xlink",
                      viewBox: "0 0 452.025 452.025",
                      "xml:space": "preserve"
                    }, [
                      createVNode("path", { d: "M147.912,363.325c-4.7-4.7-12.3-4.7-17,0c-4.7,4.7-4.7,12.3,0,17l13.6,13.6h-55.2c-35.9,0-65-29.2-65-65v-40.3\r\n                      c0-6.6-5.4-12-12-12s-12,5.4-12,12v40.3c0,49.1,39.9,89,89,89h55.2l-13.6,13.6c-4.7,4.7-4.7,12.3,0,17c2.3,2.3,5.4,3.5,8.5,3.5\r\n                      s6.1-1.2,8.5-3.5l34.1-34.1c4.7-4.7,4.7-12.3,0-17L147.912,363.325z" }),
                      createVNode("path", { d: "M210.312,0.025h-197.1c-6.6,0-12,5.4-12,12v197.1c0,6.6,5.4,12,12,12h197.1c6.6,0,12-5.4,12-12v-197.1\r\n                      C222.312,5.425,217.012,0.025,210.312,0.025z M198.312,197.125h-173.1v-173.1h173.1V197.125z" }),
                      createVNode("path", { d: "M362.612,34.125h-55.2l13.6-13.6c4.7-4.7,4.7-12.3,0-17s-12.3-4.7-17,0l-34,34.1c-4.7,4.7-4.7,12.3,0,17l34.1,34.1\r\n                      c2.3,2.3,5.4,3.5,8.5,3.5s6.1-1.2,8.5-3.5c4.7-4.7,4.7-12.3,0-17l-13.6-13.6h55.2c35.9,0,65,29.2,65,65v40.3c0,6.6,5.4,12,12,12\r\n                      s12-5.4,12-12v-40.3C451.712,74.025,411.712,34.125,362.612,34.125z" }),
                      createVNode("path", { d: "M438.812,428.025c-3.2,0-6.3,1.3-8.5,3.5s-3.5,5.3-3.5,8.5c0,3.1,1.3,6.3,3.5,8.5s5.3,3.5,8.5,3.5s6.3-1.3,8.5-3.5\r\n                      s3.5-5.3,3.5-8.5s-1.3-6.3-3.5-8.5C445.012,429.325,441.912,428.025,438.812,428.025z" }),
                      createVNode("path", { d: "M389.512,428.025c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S396.112,428.025,389.512,428.025z" }),
                      createVNode("path", { d: "M290.912,428.025c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S297.612,428.025,290.912,428.025z" }),
                      createVNode("path", { d: "M340.212,428.025c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S346.812,428.025,340.212,428.025z" }),
                      createVNode("path", { d: "M241.713,428.025c-3.2,0-6.3,1.3-8.5,3.5s-3.5,5.3-3.5,8.5c0,3.1,1.3,6.3,3.5,8.5s5.3,3.5,8.5,3.5c3.1,0,6.3-1.3,8.5-3.5\r\n                      s3.5-5.3,3.5-8.5s-1.3-6.3-3.5-8.5S244.812,428.025,241.713,428.025z" }),
                      createVNode("path", { d: "M241.713,378.725c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S248.312,378.725,241.713,378.725z" }),
                      createVNode("path", { d: "M241.713,329.425c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S248.312,329.425,241.713,329.425z" }),
                      createVNode("path", { d: "M241.713,280.125c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S248.312,280.125,241.713,280.125z" }),
                      createVNode("path", { d: "M241.713,230.925c-3.2,0-6.3,1.3-8.5,3.5s-3.5,5.3-3.5,8.5s1.3,6.3,3.5,8.5s5.3,3.5,8.5,3.5c3.1,0,6.3-1.3,8.5-3.5\r\n                      s3.5-5.3,3.5-8.5c0-3.1-1.3-6.3-3.5-8.5C247.912,232.125,244.812,230.925,241.713,230.925z" }),
                      createVNode("path", { d: "M389.512,230.925c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S396.112,230.925,389.512,230.925z" }),
                      createVNode("path", { d: "M340.212,230.925c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S346.812,230.925,340.212,230.925z" }),
                      createVNode("path", { d: "M290.912,230.925c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S297.612,230.925,290.912,230.925z" }),
                      createVNode("path", { d: "M438.812,230.925c-3.2,0-6.3,1.3-8.5,3.5s-3.5,5.3-3.5,8.5s1.3,6.3,3.5,8.5s5.3,3.5,8.5,3.5s6.3-1.3,8.5-3.5\r\n                      s3.5-5.3,3.5-8.5c0-3.1-1.3-6.3-3.5-8.5C445.012,232.225,441.912,230.925,438.812,230.925z" }),
                      createVNode("path", { d: "M438.812,280.125c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S445.412,280.125,438.812,280.125z" }),
                      createVNode("path", { d: "M438.812,378.725c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S445.412,378.725,438.812,378.725z" }),
                      createVNode("path", { d: "M438.812,329.425c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S445.412,329.425,438.812,329.425z" })
                    ]))
                  ]),
                  _: 1
                }, 8, ["text"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<button></button></div></div></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/documents/DocumentItemInfo/DocumentIemInfoChain/DocumentItemInfoChainFile.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "DocumentItemInfoChain",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const documentStore = useDocumentStore();
    const authStore = useAuthStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-x-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$e, { class: "my-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Выстраивание цепочки для подписания документа"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Выстраивание цепочки для подписания документа")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="">`);
      _push(ssrRenderComponent(_sfc_main$c, {
        item: unref(documentStore).documentItem
      }, null, _parent));
      _push(`</div><div class="justify-center gap-x-10 border-b border-l border-r p-4 rounded-b-xl rounded-t-sm"><div class="flex gap-x-6 justify-center items-center">`);
      _push(ssrRenderComponent(_sfc_main$8, {
        item: unref(documentStore).documentItem
      }, null, _parent));
      _push(`</div><div class="flex justify-center gap-x-10 mt-4">`);
      _push(ssrRenderComponent(_sfc_main$f, {
        type: "documentBtn",
        onClick: ($event) => unref(documentStore).showWarn = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Удалить документ"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Удалить документ")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$f, {
        type: "documentBtn",
        onClick: ($event) => unref(documentStore).docUpdate({ users: unref(documentStore).userList.map((innerArray) => innerArray.filter((item) => item.id !== unref(authStore).user.id).map((item) => item.id)).filter((innerArray) => innerArray.length > 0), id: unref(route).params.id }).then((res) => unref(documentStore).loadDocument({ id: unref(route).params.id }))
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Запустить цепь"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Запустить цепь")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="my-6"><p class="text-center tracking-widest text-lg">${ssrInterpolate(_ctx.$t("Описание:"))}</p><p>${ssrInterpolate(unref(documentStore).documentItem.description)}</p></div>`);
      if (unref(documentStore).showWarn) {
        _push(ssrRenderComponent(_sfc_main$g, {
          type: "resize",
          onShowModal: ($event) => unref(documentStore).showWarn = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$e, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("Удалить данный документ?"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("Удалить данный документ?")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<p class="text-sm tracking-widest text-gray-300 my-6"${_scopeId}>${ssrInterpolate(_ctx.$t("Содержимое данного документа пропадёт и черновик не будет сохранён"))}</p><div class="flex justify-center gap-x-10"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$f, {
                type: "chat",
                onClick: ($event) => unref(documentStore).showWarn = false
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
                type: "chat",
                onClick: ($event) => {
                  unref(documentStore).docDelete({ id: unref(route).params.id }).then((res) => {
                    unref(router).push("/base/documents");
                    unref(documentStore).showWarn = false;
                  });
                }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("Удалить"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("Удалить")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode(_sfc_main$e, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("Удалить данный документ?")), 1)
                  ]),
                  _: 1
                }),
                createVNode("p", { class: "text-sm tracking-widest text-gray-300 my-6" }, toDisplayString(_ctx.$t("Содержимое данного документа пропадёт и черновик не будет сохранён")), 1),
                createVNode("div", { class: "flex justify-center gap-x-10" }, [
                  createVNode(_sfc_main$f, {
                    type: "chat",
                    onClick: ($event) => unref(documentStore).showWarn = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Отмена")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_sfc_main$f, {
                    type: "chat",
                    onClick: ($event) => {
                      unref(documentStore).docDelete({ id: unref(route).params.id }).then((res) => {
                        unref(router).push("/base/documents");
                        unref(documentStore).showWarn = false;
                      });
                    }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Удалить")), 1)
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
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/documents/DocumentItemInfo/DocumentItemInfoChain.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "DocumentItemInfoChainContentElems",
  __ssrInlineRender: true,
  props: ["item"],
  setup(__props) {
    const authStore = useAuthStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DocumentItemInfoChainContentElems = resolveComponent("DocumentItemInfoChainContentElems", true);
      if (__props.item.self) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "transition-all" }, _attrs))}><div class="flex items-center gap-x-6"><list${ssrRenderAttrs({
          name: "list",
          class: "flex flex-col gap-y-6 transition-all"
        })}>`);
        ssrRenderList(__props.item.self, (user, userIndex) => {
          _push(`<div class="h-24 border border-gray-500 dark:border-white w-[220px] px-2 rounded-lg text-center flex items-center justify-center mx-auto relative"><div class="flex gap-x-4 items-center"><div class="max-w-[50px]"><img class="w-full rounded-full"${ssrRenderAttr("src", unref(authStore).get_server_domain + user.photo)} alt=""></div><p class="text-[15px] w-full">${ssrInterpolate(user.first_name + " " + user.last_name)}</p></div></div>`);
        });
        _push(`</list>`);
        _push(ssrRenderComponent(_component_DocumentItemInfoChainContentElems, {
          item: __props.item.parent
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/documents/DocumentItemInfo/DocumentIemInfoChain/DocumentItemInfoChainContentElems.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "DocumentItemInfoChainContent",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    const documentStore = useDocumentStore();
    const authStore = useAuthStore();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(mergeProps({
        name: "list",
        class: "flex overflow-x-auto w-full items-center gap-x-6"
      }, _attrs))}><div class="h-24 border border-gray-500 dark:border-white px-2 rounded-lg text-center flex items-center relative"><div class="flex gap-x-4 items-center w-[220px]"><div class="max-w-[50px]"><img class="w-full rounded-full"${ssrRenderAttr("src", unref(authStore).get_server_domain + __props.item.author.photo)} alt=""></div><p class="text-[15px] w-full">${ssrInterpolate(((_a = __props.item.author) == null ? void 0 : _a.first_name) + " " + ((_b = __props.item.author) == null ? void 0 : _b.last_name))}</p></div></div>`);
      _push(ssrRenderComponent(_sfc_main$6, {
        item: unref(documentStore).documentItem.chain
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/documents/DocumentItemInfo/DocumentIemInfoChain/DocumentItemInfoChainContent.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DocumentItemInfoContent",
  __ssrInlineRender: true,
  setup(__props) {
    const documentStore = useDocumentStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><div class="border rounded-t-lg rounded-b-sm h-[500px] grid gap-x-10 px-2 mt-10 overflow-auto">`);
      _push(ssrRenderComponent(_sfc_main$5, {
        item: unref(documentStore).documentItem
      }, null, _parent));
      _push(`</div><div class="border-b border-l border-r p-4 rounded-b-xl rounded-t-sm"><div class="flex gap-x-6 justify-center items-center">`);
      _push(ssrRenderComponent(_sfc_main$8, {
        item: unref(documentStore).documentItem
      }, null, _parent));
      _push(`</div><div class="flex justify-center gap-x-10 mt-6">`);
      _push(ssrRenderComponent(_sfc_main$f, {
        class: "px-2 py-1 rounded-full",
        type: "danger"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Отклонить"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Отклонить")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$f, {
        class: "px-2 py-1 rounded-full",
        type: "success"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Подтвердить"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Подтвердить")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="my-6"><p class="text-center tracking-widest text-lg">${ssrInterpolate(_ctx.$t("Описание:"))}</p><p class="text-sm">${ssrInterpolate(unref(documentStore).documentItem.description)}</p></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/documents/DocumentItemInfo/DocumentItemInfoContent.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DocumentItemInfo",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}>`);
      if ((_a = __props.item.chain) == null ? void 0 : _a.self) {
        _push(`<div>`);
        _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="overflow-x-hidden">`);
        _push(ssrRenderComponent(_sfc_main$7, null, null, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/documents/DocumentItemInfo.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DocumentItemInfoUserListElem",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    const documentStore = useDocumentStore();
    const authStore = useAuthStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))} data-v-013015fa><div class="border-b p-2 pt-0" data-v-013015fa><div class="flex items-center justify-between" data-v-013015fa><p class="tracking-wider text-sm" data-v-013015fa>${ssrInterpolate(__props.item.name)}</p><div class="${ssrRenderClass({ "rotate-180 transition-all": unref(documentStore).showDepartment.every((e) => {
        var _a;
        return e.id !== ((_a = __props.item) == null ? void 0 : _a.id);
      }) })}" data-v-013015fa><svg class="dark:fill-white fill-black" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-013015fa><path fill-rule="evenodd" clip-rule="evenodd" d="M6.46967 8.96967C6.76256 8.67678 7.23744 8.67678 7.53033 8.96967L12 13.4393L16.4697 8.96967C16.7626 8.67678 17.2374 8.67678 17.5303 8.96967C17.8232 9.26256 17.8232 9.73744 17.5303 10.0303L12.5303 15.0303C12.3897 15.171 12.1989 15.25 12 15.25C11.8011 15.25 11.6103 15.171 11.4697 15.0303L6.46967 10.0303C6.17678 9.73744 6.17678 9.26256 6.46967 8.96967Z" data-v-013015fa></path></svg></div></div>`);
      if (unref(documentStore).showDepartment.every((e) => {
        var _a;
        return e.id !== ((_a = __props.item) == null ? void 0 : _a.id);
      })) {
        _push(`<div class="flex flex-col gap-y-2 select-none" data-v-013015fa><!--[-->`);
        ssrRenderList(__props.item.participants.filter((e) => e.id !== unref(authStore).user.id), (user) => {
          _push(`<div data-v-013015fa>`);
          if (unref(documentStore).showUsersNode.every((el) => el.id != user.id)) {
            _push(`<div class="p-2 flex gap-x-4 rounded-lg relative" draggable="true" data-v-013015fa><div class="w-[50px] h-[50px]" data-v-013015fa><img draggable="false" class="w-full rounded-full"${ssrRenderAttr("src", unref(authStore).get_server_domain + user.photo_url)} alt="" data-v-013015fa></div><div class="text-base" data-v-013015fa><p data-v-013015fa>${ssrInterpolate(user.first_name + " " + user.last_name)}</p><p class="text-[13px] tracking-widest text-gray-400" data-v-013015fa>(${ssrInterpolate(user.role)})</p></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/documents/DocumentItemInfo/DocumentItemInfoUserListElem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const DocumentItemInfoUserListElem = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-013015fa"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DocumentItemInfoUserList",
  __ssrInlineRender: true,
  setup(__props) {
    useDocumentStore();
    useUserStore();
    const company = useCompanies();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><p class="text-center tracking-widest font-bold">${ssrInterpolate(_ctx.$t("Список сотрудников"))}</p><div class="flex flex-col gap-y-2 my-2 overflow-y-auto h-screen"><!--[-->`);
      ssrRenderList(unref(company).get_all_department.results, (item) => {
        _push(ssrRenderComponent(DocumentItemInfoUserListElem, {
          class: "rounded-full cursor-pointer",
          item,
          onDrag: () => {
          }
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/documents/DocumentItemInfo/DocumentItemInfoUserList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const documentStore = useDocumentStore();
    useRoute();
    useCompanies();
    useUserStore();
    watchSyncEffect(() => {
      useSeoMeta({
        title: `${documentStore.documentItem.title}`
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center gap-x-6 h-full" }, _attrs))}>`);
      _push(ssrRenderComponent(TheContentBlock, { class: "w-8/12 h-max" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$e, { class: "mx-auto text-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(documentStore).documentItem.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(documentStore).documentItem.title), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex items-center gap-x-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$h, { "breadcrumb-link": "/base/documents" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("Документы"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("Документы")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}><svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path class="dark:stroke-white stroke-black" d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5" stroke-width="2" stroke-linecap="round"${_scopeId}></path></svg></div>`);
            _push2(ssrRenderComponent(_sfc_main$h, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(documentStore).documentItem.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(documentStore).documentItem.title), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              item: unref(documentStore).documentItem
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$e, { class: "mx-auto text-center" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(documentStore).documentItem.title), 1)
                ]),
                _: 1
              }),
              createVNode("div", { class: "flex items-center gap-x-4" }, [
                createVNode(_sfc_main$h, { "breadcrumb-link": "/base/documents" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("Документы")), 1)
                  ]),
                  _: 1
                }),
                createVNode("div", null, [
                  (openBlock(), createBlock("svg", {
                    width: "15px",
                    height: "15px",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      class: "dark:stroke-white stroke-black",
                      d: "M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5",
                      "stroke-width": "2",
                      "stroke-linecap": "round"
                    })
                  ]))
                ]),
                createVNode(_sfc_main$h, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(documentStore).documentItem.title), 1)
                  ]),
                  _: 1
                })
              ]),
              createVNode(_sfc_main$3, {
                item: unref(documentStore).documentItem
              }, null, 8, ["item"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(TheContentBlock, { class: "w-3/12" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base/documents/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-RKOfK9i7.js.map
