import compression from 'compression';

export default defineNuxtConfig({
    ssr: true,
    serverMiddleware: [
        compression({
            threshold: 10240, // Mindestgröße in Bytes, ab der Dateien komprimiert werden (z.B. 10 KB)
            level: 6,         // Kompressionslevel (zwischen 1 und 9, wobei 9 das stärkste ist)
        })
    ],
    target: 'server',
    vite: {
        define: {
            global: 'window',
        },
    },
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: ['@pinia/nuxt', 'vuetify-nuxt-module'],
});
