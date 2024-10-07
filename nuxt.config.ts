// https://nuxt.com/docs/api/configuration/nuxt-config
import compression from 'compression';
export default defineNuxtConfig({
    ssr: true,
    serverMiddleware: [
        compression({ threshold: 0 })
    ],
    target: 'server',
    vite: {
        define: {
            global: 'window',
        },
    },
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: ['@pinia/nuxt', 'vuetify-nuxt-module']
})