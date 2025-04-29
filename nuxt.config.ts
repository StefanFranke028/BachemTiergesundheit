export default defineNuxtConfig({
    ssr: true,
    target: 'server',
    build: {
        extend(config, ctx) {
            if (ctx.isClient) {
                config.devtool = 'source-map'
            }
        }
    },
    vite: {
        build: {
            sourcemap: true
        },
        define: {
            global: 'window',
        },
    },
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: ['@pinia/nuxt', 'vuetify-nuxt-module'],

});
