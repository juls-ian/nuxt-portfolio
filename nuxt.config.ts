// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    "@nuxt/image"
  ],
  //dark mode
  colorMode: {
  classSuffix: ''
  },

  content: {
    highlight: {
      theme: {
        default: 'min-light',
        dark: 'min-dark'
      }
    }
  },
  //transition
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  //nitro
  nitro: {
  prerender: {
    routes: ['/sitemap.xml']
    }
  },

  future: {
    compatibilityVersion:4
  },

})