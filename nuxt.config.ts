// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/fonts.css'],
  modules: ["@nuxtjs/tailwindcss"],
  routeRules:{
    '/': { prerender: true }
  }
})
