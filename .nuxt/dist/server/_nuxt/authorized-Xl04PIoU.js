import { G as defineNuxtRouteMiddleware, H as useRequestHeader, e as navigateTo } from "../server.mjs";
import "vue";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "destr";
import "defu";
import "klona";
import "@vue/devtools-api";
import "devalue";
import "cookie-es";
import "ohash";
import "@sindresorhus/slugify";
import "tailwind-merge";
import "animejs";
import "vue/server-renderer";
const authorized = defineNuxtRouteMiddleware((to, from) => {
  if (!useRequestHeader("Authorization"))
    ;
  return navigateTo("/");
});
export {
  authorized as default
};
//# sourceMappingURL=authorized-Xl04PIoU.js.map
