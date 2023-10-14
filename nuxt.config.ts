// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@unocss/nuxt', '@sfxcode/nuxt-primevue'],
  css: ['@unocss/reset/tailwind-compat.css'],
  build: {
    transpile: ['primevue'],
  },
  primevue: {
    config: {
      unstyled: true,
      pt: DesignSystem,
    },
  },
});
