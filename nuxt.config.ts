// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    target: 'server',
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: ['@pinia/nuxt', 'vuetify-nuxt-module']
})