/**
 * A2 Playgrounds — Service Worker
 * Strategy: cache-first for all site assets (HTML, CSS, JS, fonts).
 * On install, precache every page. On fetch, serve from cache,
 * falling back to network and caching the response for next time.
 */

const CACHE_VERSION = 'a2p-v3';

// Everything to precache on install — covers all pages and shared assets
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/about.html',
  '/styles.css',
  '/u1.html',
  '/u2.html',
  '/u3.html',
  '/u4.html',
  '/u5.html',
  '/u6.html',
  '/u7.html',
  '/u9.html',
  '/tools/save-png.js',
  '/tools/url-state.js',
  '/tools/abs-value-grapher.html',
  '/tools/adding-rationals.html',
  '/tools/box-plot-builder.html',
  '/tools/complete-square.html',
  '/tools/composition.html',
  '/tools/cubic-radical.html',
  '/tools/diff-of-cubes.html',
  '/tools/diff-of-squares.html',
  '/tools/elimination-race.html',
  '/tools/exponential-equation-solver.html',
  '/tools/exponential-equations.html',
  '/tools/exponential-explorer.html',
  '/tools/exponential-model-builder.html',
  '/tools/factoring-lab.html',
  '/tools/imaginary-sandbox.html',
  '/tools/inverse-function.html',
  '/tools/log-converter.html',
  '/tools/log-properties.html',
  '/tools/neg-exponent-flipper.html',
  '/tools/piecewise-grapher.html',
  '/tools/polynomial-division-stepper.html',
  '/tools/polynomial-sketch.html',
  '/tools/probability-sandbox.html',
  '/tools/quadratic-slider.html',
  '/tools/quadratic-standard.html',
  '/tools/quadratic-word-problems.html',
  '/tools/rational-equations.html',
  '/tools/rational-exponents.html',
  '/tools/rational-expressions.html',
  '/tools/rational-multdiv.html',
  '/tools/rational-simplifier.html',
  '/tools/rationalizing-denominators.html',
  '/tools/sampling-bias-lab.html',
  '/tools/sincos-grapher.html',
  '/tools/sine-cosine-builder.html',
  '/tools/soh-cah-toa.html',
  '/tools/substitution-stepper.html',
  '/tools/transformations.html',
  '/tools/unit-circle.html'
];

// ── Install: cache everything ──
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// ── Activate: remove old caches ──
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_VERSION)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// ── Fetch: cache-first, network fallback ──
self.addEventListener('fetch', event => {
  // Only handle GET requests for same-origin resources
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      // Not in cache — fetch from network and cache for next time
      return fetch(event.request).then(response => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const toCache = response.clone();
        caches.open(CACHE_VERSION).then(cache => cache.put(event.request, toCache));
        return response;
      });
    })
  );
});
