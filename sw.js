// Oracle Mode Service Worker - Enhanced Version Management
const APP_VERSION = "1.0.3";
const CACHE_NAME = `oracle-mode-cache-v${APP_VERSION}`;
const CACHE_PREFIX = "oracle-mode-cache-v";

// Build timestamp for cache busting
const BUILD_TIMESTAMP = Date.now();
const CACHE_EXPIRY = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

// Environment detection
const isLocalhost =
  self.location.hostname === "localhost" ||
  self.location.hostname === "127.0.0.1" ||
  self.location.hostname === "0.0.0.0";

const isProduction = !isLocalhost;

// Dynamic base URL configuration
let baseUrl = "./";
if (isProduction) {
  baseUrl = "/futuristic_ai_prophecy_app/";
}

// Resources to cache with version tracking
const urlsToCache = [
  `${baseUrl}index.html`,
  `${baseUrl}assets/css/oracle-styles.css`,
  `${baseUrl}assets/js/oracle-main.js`,
  `${baseUrl}manifest.json`,
  `${baseUrl}version.json`,
  // External dependencies with fallbacks
  "https://cdn.tailwindcss.com",
  "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js",
];

// Critical resources that must be cached
const criticalResources = [
  `${baseUrl}index.html`,
  `${baseUrl}assets/css/oracle-styles.css`,
  `${baseUrl}assets/js/oracle-main.js`,
  `${baseUrl}manifest.json`,
];

// Version check and update notification
async function checkForUpdates() {
  try {
    const response = await fetch(`${baseUrl}version.json?t=${BUILD_TIMESTAMP}`);
    if (response.ok) {
      const versionData = await response.json();
      if (versionData.version !== APP_VERSION) {
        console.log(
          `🔄 New version available: ${versionData.version} (current: ${APP_VERSION})`
        );
        // Notify clients about update
        const clients = await self.clients.matchAll();
        clients.forEach((client) => {
          client.postMessage({
            type: "NEW_VERSION_AVAILABLE",
            version: versionData.version,
            currentVersion: APP_VERSION,
          });
        });
        return true;
      }
    }
  } catch (error) {
    console.warn("⚠️ Version check failed:", error);
  }
  return false;
}

// Enhanced cache cleanup - removes ALL old versions
async function cleanupOldCaches() {
  const cacheNames = await caches.keys();
  const oldCaches = cacheNames.filter(
    (name) => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME
  );

  const deletePromises = oldCaches.map((cacheName) => {
    console.log(`🗑️ Deleting old cache: ${cacheName}`);
    return caches.delete(cacheName);
  });

  if (deletePromises.length > 0) {
    console.log(`🧹 Cleaned up ${deletePromises.length} old cache(s)`);
  }

  return Promise.all(deletePromises);
}

// Check if cache is expired
async function isCacheExpired() {
  try {
    const cache = await caches.open(CACHE_NAME);
    const cachedResponse = await cache.match(`${baseUrl}version.json`);

    if (!cachedResponse) return true;

    const cacheDate = new Date(cachedResponse.headers.get("date"));
    const now = new Date();

    return now.getTime() - cacheDate.getTime() > CACHE_EXPIRY;
  } catch (error) {
    console.warn("⚠️ Cache expiry check failed:", error);
    return true;
  }
}

// Intelligent caching strategy
async function cacheResources() {
  const cache = await caches.open(CACHE_NAME);

  // Cache critical resources first
  try {
    await cache.addAll(criticalResources);
    console.log("✅ Critical resources cached successfully");
  } catch (error) {
    console.error("❌ Failed to cache critical resources:", error);
    throw error;
  }

  // Cache remaining resources with error handling
  const remainingResources = urlsToCache.filter(
    (url) => !criticalResources.includes(url)
  );

  for (const url of remainingResources) {
    try {
      await cache.add(url);
      console.log(`✅ Cached: ${url}`);
    } catch (error) {
      console.warn(`⚠️ Failed to cache ${url}:`, error);
      // Continue with other resources
    }
  }

  // Cache version metadata
  const versionResponse = new Response(
    JSON.stringify({
      version: APP_VERSION,
      timestamp: BUILD_TIMESTAMP,
      cached: new Date().toISOString(),
    }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );

  await cache.put(`${baseUrl}sw-version.json`, versionResponse);
}

// Install event - Enhanced caching with version management
self.addEventListener("install", (event) => {
  console.log(`🚀 Installing Oracle Mode Service Worker v${APP_VERSION}`);

  event.waitUntil(
    (async () => {
      try {
        await cacheResources();
        console.log(`✅ Oracle Mode v${APP_VERSION} installed successfully`);
        // Skip waiting to activate immediately
        self.skipWaiting();
      } catch (error) {
        console.error("❌ Installation failed:", error);
        throw error;
      }
    })()
  );
});

// Activate event - Enhanced cleanup and client claiming
self.addEventListener("activate", (event) => {
  console.log(`🔄 Activating Oracle Mode Service Worker v${APP_VERSION}`);

  event.waitUntil(
    (async () => {
      try {
        // Clean up old caches
        await cleanupOldCaches();

        // Claim all clients immediately
        await self.clients.claim();

        // Check for updates
        await checkForUpdates();

        console.log(`✅ Oracle Mode v${APP_VERSION} activated successfully`);

        // Notify clients of successful activation
        const clients = await self.clients.matchAll();
        clients.forEach((client) => {
          client.postMessage({
            type: "SW_ACTIVATED",
            version: APP_VERSION,
          });
        });
      } catch (error) {
        console.error("❌ Activation failed:", error);
      }
    })()
  );
});

// Enhanced fetch event with intelligent caching strategy
self.addEventListener("fetch", (event) => {
  // Skip non-GET requests
  if (event.request.method !== "GET") return;

  // Skip cross-origin requests for external APIs
  if (
    !event.request.url.startsWith(self.location.origin) &&
    !event.request.url.includes("cdn.tailwindcss.com") &&
    !event.request.url.includes("cdnjs.cloudflare.com")
  ) {
    return;
  }

  event.respondWith(
    (async () => {
      try {
        // For version.json, always try network first
        if (event.request.url.includes("version.json")) {
          try {
            const networkResponse = await fetch(event.request);
            if (networkResponse.ok) {
              const cache = await caches.open(CACHE_NAME);
              cache.put(event.request, networkResponse.clone());
              return networkResponse;
            }
          } catch (error) {
            console.log("📡 Network unavailable, serving cached version.json");
          }
        }

        // Check cache first for other resources
        const cachedResponse = await caches.match(event.request);

        if (cachedResponse) {
          // Serve from cache and update in background for critical resources
          if (
            criticalResources.some((url) => event.request.url.includes(url))
          ) {
            // Background update for critical resources
            fetch(event.request)
              .then(async (response) => {
                if (response.ok) {
                  const cache = await caches.open(CACHE_NAME);
                  await cache.put(event.request, response.clone());
                }
              })
              .catch(() => {});
          }
          return cachedResponse;
        }

        // If not in cache, fetch from network
        const networkResponse = await fetch(event.request);

        if (networkResponse.ok) {
          // Cache successful responses
          const cache = await caches.open(CACHE_NAME);
          cache.put(event.request, networkResponse.clone());
        }

        return networkResponse;
      } catch (error) {
        console.warn(`⚠️ Fetch failed for ${event.request.url}:`, error);

        // Return offline fallback for navigation requests
        if (event.request.mode === "navigate") {
          const cache = await caches.open(CACHE_NAME);
          return cache.match(`${baseUrl}index.html`);
        }

        throw error;
      }
    })()
  );
});

// Background sync for offline prophecy generation and updates
self.addEventListener("sync", (event) => {
  console.log(`🔄 Background sync triggered: ${event.tag}`);

  if (event.tag === "background-sync") {
    event.waitUntil(doBackgroundSync());
  } else if (event.tag === "version-check") {
    event.waitUntil(checkForUpdates());
  }
});

async function doBackgroundSync() {
  try {
    console.log("📡 Background sync: Checking for updates...");

    // Check for app updates
    const hasUpdates = await checkForUpdates();

    // Clean expired cache entries
    const isExpired = await isCacheExpired();
    if (isExpired) {
      console.log("🧹 Cache expired, refreshing...");
      await cacheResources();
    }

    // Notify clients of sync completion
    const clients = await self.clients.matchAll();
    clients.forEach((client) => {
      client.postMessage({
        type: "BACKGROUND_SYNC_COMPLETE",
        hasUpdates,
        timestamp: new Date().toISOString(),
      });
    });

    console.log("✅ Background sync completed");
  } catch (error) {
    console.error("❌ Background sync failed:", error);
  }
}

// Push notifications for prophecy alerts
self.addEventListener("push", (event) => {
  console.log("📩 Push notification received");

  const defaultOptions = {
    body: "New mystical prophecy awaits your discovery...",
    icon: `${baseUrl}assets/images/icon-192.jpg`,
    badge: `${baseUrl}assets/images/icon-192.jpg`,
    vibrate: [100, 50, 100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: Math.random(),
      version: APP_VERSION,
    },
    actions: [
      {
        action: "explore",
        title: "🔮 View Prophecy",
        icon: `${baseUrl}assets/images/icon-192.jpg`,
      },
      {
        action: "later",
        title: "⏰ Remind Later",
        icon: `${baseUrl}assets/images/icon-192.jpg`,
      },
      {
        action: "close",
        title: "✖️ Close",
        icon: `${baseUrl}assets/images/icon-192.jpg`,
      },
    ],
    tag: "oracle-prophecy",
    requireInteraction: false,
    silent: false,
  };

  let options = defaultOptions;

  if (event.data) {
    try {
      const payload = event.data.json();
      options = { ...defaultOptions, ...payload };
    } catch (error) {
      options.body = event.data.text() || defaultOptions.body;
    }
  }

  event.waitUntil(
    self.registration.showNotification("🔮 Oracle Mode", options)
  );
});

// Enhanced notification click handling
self.addEventListener("notificationclick", (event) => {
  console.log(`🖱️ Notification clicked: ${event.action}`);

  event.notification.close();

  event.waitUntil(
    (async () => {
      const clients = await self.clients.matchAll({ type: "window" });

      if (event.action === "explore") {
        // Open or focus existing window
        if (clients.length > 0) {
          const client = clients[0];
          if ("focus" in client) {
            await client.focus();
          }
          client.postMessage({
            type: "NOTIFICATION_ACTION",
            action: "explore",
          });
        } else {
          await self.clients.openWindow(baseUrl);
        }
      } else if (event.action === "later") {
        // Schedule reminder (register background sync)
        await self.registration.sync.register("reminder-prophecy");
      } else if (event.action === "close" || !event.action) {
        // Just close notification (default behavior)
        console.log("📴 Notification dismissed");
      }
    })()
  );
});

// Message handling from clients
self.addEventListener("message", (event) => {
  console.log(`📨 Message received from client:`, event.data);

  if (event.data && event.data.type) {
    switch (event.data.type) {
      case "SKIP_WAITING":
        self.skipWaiting();
        break;

      case "GET_VERSION":
        event.ports[0].postMessage({
          type: "VERSION_INFO",
          version: APP_VERSION,
          buildTimestamp: BUILD_TIMESTAMP,
        });
        break;

      case "FORCE_UPDATE":
        event.waitUntil(checkForUpdates());
        break;

      case "CLEAR_CACHE":
        event.waitUntil(
          caches.delete(CACHE_NAME).then(() => {
            console.log("🗑️ Cache cleared by user request");
            return cacheResources();
          })
        );
        break;

      default:
        console.log(`⚠️ Unknown message type: ${event.data.type}`);
    }
  }
});

// Global error handling
self.addEventListener("error", (event) => {
  console.error("❌ Service Worker error:", event.error);
});

self.addEventListener("unhandledrejection", (event) => {
  console.error("❌ Service Worker unhandled rejection:", event.reason);
});

// Periodic background sync (if supported)
if ("periodicsync" in self.registration) {
  self.addEventListener("periodicsync", (event) => {
    if (event.tag === "oracle-update-check") {
      event.waitUntil(checkForUpdates());
    }
  });
}

console.log(
  `🔮 Oracle Mode Service Worker v${APP_VERSION} loaded successfully`
);
console.log(`📅 Build timestamp: ${new Date(BUILD_TIMESTAMP).toISOString()}`);
console.log(`🌍 Environment: ${isProduction ? "Production" : "Development"}`);
console.log(`📁 Base URL: ${baseUrl}`);

// Report ready status
self.addEventListener(
  "fetch",
  () => {
    // This will only run once, when the SW is ready
    if (!self.__ORACLE_SW_READY) {
      self.__ORACLE_SW_READY = true;
      console.log(
        "🎯 Oracle Mode Service Worker is ready to serve prophecies!"
      );
    }
  },
  { once: true }
);
