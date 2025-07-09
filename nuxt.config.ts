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
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/variables.scss";'
                }
            }
        },
        build: {
            sourcemap: true,
            extractCSS: true,
            cssMinify: true
        },
        define: {
            global: 'window',
        },
    },
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: ['@pinia/nuxt', 'vuetify-nuxt-module'],

});
