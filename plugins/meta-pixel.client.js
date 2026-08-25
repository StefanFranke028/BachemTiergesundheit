// Meta-Pixel (Facebook). Laedt auf jeder Seite direkt beim Aufruf.
const PIXEL_ID = '1350014756913022';

export default defineNuxtPlugin(() => {
  if (window.fbq) return;

  // Offizieller Meta-Basiscode.
  !function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

  window.fbq('init', PIXEL_ID);
  window.fbq('track', 'PageView');

  // Die Seite ist eine SPA: Seitenwechsel loesen keinen Reload aus,
  // deshalb PageView bei jeder Navigation nachfeuern.
  const router = useRouter();
  let lastPath = router.currentRoute.value.fullPath;
  router.afterEach((to) => {
    if (to.fullPath === lastPath) return;
    lastPath = to.fullPath;
    window.fbq('track', 'PageView');
  });
});
