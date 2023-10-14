import PrimeVue from "primevue/config";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { 
    ripple: false,
    unstyled: true,
    pt: useDesignSystem(),
  });
});
