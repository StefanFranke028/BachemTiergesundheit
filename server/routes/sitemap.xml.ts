// Auto-generated sitemap inkl. dynamischer Seiten (Content & Berichte/Städte).
// Aufruf: GET /sitemap.xml

const BASE_URL = 'https://tier-gesundheitszentrum.com';

const STATIC_ROUTES: { loc: string; changefreq?: string; priority?: number }[] = [
    { loc: '/', changefreq: 'weekly', priority: 1.0 },
    { loc: '/service', changefreq: 'weekly', priority: 0.9 },
    { loc: '/preise', changefreq: 'monthly', priority: 0.8 },
    { loc: '/produkte', changefreq: 'weekly', priority: 0.7 },
    { loc: '/berichte', changefreq: 'weekly', priority: 0.8 },
    { loc: '/osteopathie', changefreq: 'monthly', priority: 0.9 },
    { loc: '/chiropraktik', changefreq: 'monthly', priority: 0.9 },
    { loc: '/werbepartner', changefreq: 'monthly', priority: 0.5 },
    { loc: '/podcast', changefreq: 'weekly', priority: 0.6 },
    { loc: '/ueberuns', changefreq: 'monthly', priority: 0.6 },
    { loc: '/impressum', changefreq: 'yearly', priority: 0.2 },
    { loc: '/datenschutz', changefreq: 'yearly', priority: 0.2 },
    // Feste Stadt-Pages
    { loc: '/tiergesundheit-bonn', changefreq: 'monthly', priority: 0.7 },
    { loc: '/tiergesundheit-koeln', changefreq: 'monthly', priority: 0.7 },
    { loc: '/tiergesundheit-erftstadt', changefreq: 'monthly', priority: 0.7 },
    { loc: '/tiergesundheit-liblar', changefreq: 'monthly', priority: 0.7 },
    { loc: '/tiergesundheit-lechenich', changefreq: 'monthly', priority: 0.7 },
    { loc: '/tiergesundheit-kierdorf', changefreq: 'monthly', priority: 0.7 },
    { loc: '/tiergesundheit-koettingen', changefreq: 'monthly', priority: 0.7 },
    { loc: '/tiergesundheit-gymnich', changefreq: 'monthly', priority: 0.7 },
    { loc: '/tiergesundheit-bliesheim', changefreq: 'monthly', priority: 0.7 },
    { loc: '/tiergesundheit-friesheim', changefreq: 'monthly', priority: 0.7 },
];

function xmlEscape(s: string): string {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

function urlNode(loc: string, changefreq?: string, priority?: number, lastmod?: string): string {
    const parts = [`    <url>`, `      <loc>${xmlEscape(BASE_URL + loc)}</loc>`];
    if (lastmod) parts.push(`      <lastmod>${lastmod}</lastmod>`);
    if (changefreq) parts.push(`      <changefreq>${changefreq}</changefreq>`);
    if (typeof priority === 'number') parts.push(`      <priority>${priority.toFixed(1)}</priority>`);
    parts.push('    </url>');
    return parts.join('\n');
}

async function fetchSafe<T = unknown>(url: string): Promise<T | null> {
    try {
        return await $fetch<T>(url, { timeout: 8000, headers: { accept: '*/*' } });
    } catch (e: any) {
        console.error('[sitemap] fetch error:', url, e?.message || e);
        return null;
    }
}

export default defineEventHandler(async (event) => {
    const today = new Date().toISOString().split('T')[0];

    // 1) Statische Routen
    const urls: string[] = STATIC_ROUTES.map((r) =>
        urlNode(r.loc, r.changefreq, r.priority, today)
    );

    // 2) Dynamische Content-Pages (/content/<url>)
    type PageMeta = { url: string; title?: string };
    const contentList = await fetchSafe<PageMeta[]>(
        'https://tier-gesundheitszentrum.com:8080/auth/page/meta/all'
    );
    if (Array.isArray(contentList)) {
        for (const p of contentList) {
            if (!p?.url) continue;
            urls.push(urlNode(`/content/${encodeURIComponent(p.url)}`, 'monthly', 0.7, today));
        }
    }


    type StadtItem = { name?: string };
    const stadtList = await fetchSafe<StadtItem[]>(
        'https://tier-gesundheitszentrum.com:8080/auth/stadt'
    );
    if (Array.isArray(stadtList)) {
        for (const s of stadtList) {
            if (!s?.name) continue;
            urls.push(urlNode(`/tiergesundheit-${encodeURIComponent(s.name)}`, 'monthly', 0.6, today));
        }
    }

    const xml =
        `<?xml version="1.0" encoding="UTF-8"?>\n` +
        `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
        urls.join('\n') +
        `\n</urlset>\n`;

    setResponseHeader(event, 'Content-Type', 'application/xml; charset=utf-8');
    // 1h CDN/Browser-Cache, eine Stunde Stale-While-Revalidate
    setResponseHeader(event, 'Cache-Control', 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=3600');
    return xml;
});
