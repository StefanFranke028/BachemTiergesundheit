import compression from 'compression';

export default defineEventHandler((event) => {
    // Überprüfen, ob eine Antwort vorhanden ist
    if (event.res) {
        // Kompressions-Handler anwenden
        compression()(event.req, event.res, () => {
        });
    }
});
