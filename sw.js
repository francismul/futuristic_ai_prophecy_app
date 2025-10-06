const version = "1.0.2";
const CACHE_NAME = "oracle-mode-cache-v" + version;

const isLocalhost =
  self.location.hostname === "localhost" ||
  self.location.hostname === "127.0.0.1";

const isProduction = !isLocalhost;

let baseUrl = "./";

if (isProduction) {
  baseUrl = "/futuristic_ai_prophecy_app/";
}

const urlsToCache = [
  `${baseUrl}index.html`,
  `${baseUrl}assets/styles.css`,
  `${baseUrl}assets/scripts.js`,
  `${baseUrl}manifest.json`,
  "https://cdn.tailwindcss.com",
  "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js",
];

// Install event - cache resources
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("Opened cache");
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.log("Cache failed:", error);
      })
  );
});

// Fetch event - serve from cache when offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached version or fetch from network
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("Deleting old cache:", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Background sync for offline prophecy generation
self.addEventListener("sync", (event) => {
  if (event.tag === "background-sync") {
    event.waitUntil(doBackgroundSync());
  }
});

function doBackgroundSync() {
  return new Promise((resolve) => {
    console.log("Background sync triggered");
    resolve();
  });
}

// Push notifications (optional feature)
self.addEventListener("push", (event) => {
  const options = {
    body: event.data ? event.data.text() : "New prophecy available!",
    icon: "/assets/icon-192.png",
    badge: "/assets/icon-192.png",
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1,
    },
    actions: [
      {
        action: "explore",
        title: "View Prophecy",
        icon: "/assets/icon-192.png",
      },
      {
        action: "close",
        title: "Close",
        icon: "/assets/icon-192.png",
      },
    ],
  };

  event.waitUntil(self.registration.showNotification("Oracle Mode", options));
});

// Handle notification clicks
self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  if (event.action === "explore") {
    event.waitUntil(clients.openWindow("/"));
  }
});
