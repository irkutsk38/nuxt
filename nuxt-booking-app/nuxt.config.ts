export default defineNuxtConfig({
  css: ['vuetify/styles'],
  build: {
    transpile: ['vuetify']
  },
  modules: ['@pinia/nuxt'],
  vite: {
    define: {
      'process.env.DEBUG': false,
    }
  }
})