import compression from 'compression';

export default defineNuxtConfig({
    ssr: true,
    target: 'server',
    serverHandlers: [
        {
            route: '/*', // Anwenden auf alle Routen
            handler: (req, res, next) => compression()(req, res, next), // Sicherstellen, dass der Handler korrekt als Funktion definiert ist
        },
    ],
    vite: {
        define: {
            global: 'window',
        },
    },
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: ['@pinia/nuxt', 'vuetify-nuxt-module'],
});
