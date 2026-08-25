export default defineNuxtConfig({
    ssr: true,
    target: 'server',
    app: {
        head: {
            meta: [
                { name: 'author', content: 'Andrea Bachem' },
                { name: 'publisher', content: 'Andrea Bachem' },
            ],
            // Meta-Pixel Fallback fuer Besucher ohne JavaScript.
            noscript: [
                {
                    tagPosition: 'bodyOpen',
                    innerHTML: '<img height="1" width="1" style="display:none" alt="" src="https://www.facebook.com/tr?id=1350014756913022&ev=PageView&noscript=1"/>',
                },
            ],
        },
    },
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
    modules: ['@pinia/nuxt', 'vuetify-nuxt-module', '@nuxt/image'],

});
