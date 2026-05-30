/**
 * A2 Playgrounds — Service Worker
 * Strategy: cache-first for all site assets (HTML, CSS, JS, fonts).
 * On install, precache every page. On fetch, serve from cache,
 * falling back to network and caching the response for next time.
 * Network failures return offline.html for navigation requests.
 */

const CACHE_VERSION = 'a2p-v8';
const OFFLINE_URL   = '/offline.html';

// Everything to precache on install — covers all pages and shared assets
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/about.html',
  '/map.html',
  '/404.html',
  '/offline.html',
  '/styles.css',
  '/u1.html',
  '/u2.html',
  '/u3.html',
  '/u4.html',
  '/u5.html',
  '/u6.html',
  '/u7.html',
  '/u9.html',
  // Shared scripts
  '/tools/fullscreen.js',
  '/tools/progress.js',
  '/tools/related.js',
  '/tools/url-state.js',
  '/tools/save-png.js',
  '/tools/replay.js',
  '/tools/math-fmt.js',
  '/tools/math-input.js',
  // All 50 tool pages (plus 2 orphaned prototypes kept for SW completeness)
  '/tools/abs-value-grapher.html',
  '/tools/adding-rationals.html',
  '/tools/box-plot-builder.html',
  '/tools/complete-square.html',
  '/tools/complex-plane.html',
  '/tools/composition-inverse.html',
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
  '/tools/function-xray.html',
  '/tools/growth-race.html',
  '/tools/imaginary-sandbox.html',
  '/tools/inequality-explorer.html',
  '/tools/inverse-function.html',
  '/tools/log-converter.html',
  '/tools/log-exp-mirror.html',
  '/tools/log-properties.html',
  '/tools/neg-exponent-flipper.html',
  '/tools/parent-function-atlas.html',
  '/tools/piecewise-grapher.html',
  '/tools/polynomial-division-stepper.html',
  '/tools/polynomial-roots.html',
  '/tools/polynomial-sketch.html',
  '/tools/probability-sandbox.html',
  '/tools/quadratic-forms-explorer.html',
  '/tools/quadratic-slider.html',
  '/tools/quadratic-standard.html',
  '/tools/quadratic-word-problems.html',
  '/tools/rational-behavior.html',
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
  '/tools/systems-explorer.html',
  '/tools/transformations.html',
  '/tools/trig-explorer.html',
  '/tools/unit-circle-wave.html',
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

// ── Fetch: cache-first, network fallback, offline page for navigation ──
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const toCache = response.clone();
        caches.open(CACHE_VERSION).then(cache => cache.put(event.request, toCache));
        return response;
      }).catch(() => {
        // Offline fallback: return offline.html for navigation requests
        if (event.request.mode === 'navigate') {
          return caches.match(OFFLINE_URL);
        }
      });
    })
  );
});
