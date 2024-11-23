export default defineNuxtConfig({
    ssr: true,
    target: 'server',
    vite: {
        define: {
            global: 'window',
        },
    },
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: ['@pinia/nuxt', 'vuetify-nuxt-module'],
    sitemap: {
        hostname: 'https://maxi-escort.de', // Deine Website-URL
        routes: async () => {
            // Dynamische Routen, falls erforderlich
            return [
                '/seite1',
                '/seite2',
                '/dynamisch/route1',
            ];
        },
    },
});
