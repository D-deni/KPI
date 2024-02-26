export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      API_BASE_URL:  process.env.API_BASE_URL || "http://127.0.0.1:10005/"
    }
  },
  ssr: true,
  app: {
    head: {
      charset: 'urf-8',
      viewport: 'width=device-width, initial-scale=1'
    }
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

  modules: ["@nuxtjs/color-mode", "@tresjs/nuxt", [
    "@nuxtjs/i18n",
    {
      i18n: {
        vueI18n: '/composables/i18n.config.ts'
      }
    },
  ], "@hypernym/nuxt-anime", "@pinia/nuxt", "@nuxt/ui", "@vueuse/nuxt", "nuxt-swiper", "nuxt-anchorscroll", "@dargmuesli/nuxt-cookie-control", "@nuxt/image", "nuxt-svgo"],
  anchorscroll: {
    hooks: [
      // Or any valid hook if needed
      // Default is `page:finish`
      'page:transition:finish',
    ],
  },
  svgo: {
    defaultImport: 'url',
    svgoConfig: {
      path: './img/svg/',
    },
    global: true
  },
})