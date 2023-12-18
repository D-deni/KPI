// https://nuxt.com/docs/api/configuration/nuxt-config
import {useAuthStore} from "~/stores/auth";

export default defineNuxtConfig({
  routeRules: {
    '/base': {
      redirect: '/base/profile',
    },
  },
  devtools: {
    enabled: true,
  },
  colorMode: {
    classSuffix: ''
  },
  // app: {
  //   pageTransition: {name: 'page', mode: 'out-in'}
  // },

  modules: ["@nuxtjs/color-mode", "@tresjs/nuxt", 'nuxt-socket-io',[
    "@nuxtjs/i18n",
    {
      i18n: {
        vueI18n: '/composables/i18n.config.ts'
      }
    },
  ], "@hypernym/nuxt-anime", "@pinia/nuxt", "@nuxt/ui", "@vueuse/nuxt", "nuxt-swiper"],
})