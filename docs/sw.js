// const cacheName = "thoras-v2.0.0";
// const staticAssets = [
//   "./index.html",
//   "./index.css",
//   "./index.js",
//   "./manifest.webmanifest",
//   "./images",
// ];

// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     caches
//       .open(cacheName)
//       .then((cache) => {
//         return cache.addAll(staticAssets);
//       })
//       .then(() => {
//         self.skipWaiting(); // Immediately activate the new service worker after installing
//       })
//       .catch((error) => {
//         console.error("Failed to cache assets during install:", error);
//       })
//   );
// });

// self.addEventListener("activate", (event) => {
//   event.waitUntil(
//     caches
//       .keys()
//       .then((keys) => {
//         return Promise.all(
//           keys.map((key) => {
//             if (key !== cacheName) {
//               return caches.delete(key); // Delete old caches
//             }
//           })
//         );
//       })
//       .then(() => {
//         return self.clients.claim(); // Take control of all open clients
//       })
//       .catch((error) => {
//         console.error("Failed to activate new service worker:", error);
//       })
//   );
// });

// self.addEventListener("fetch", (event) => {
//   const { request } = event;
//   if (request.url.includes("firestore.googleapis.com")) {
//     return; // Bypass caching for Firestore requests
//   }
//   event.respondWith(
//     caches
//       .match(request)
//       .then((cachedResponse) => {
//         return cachedResponse || fetch(request);
//       })
//       .catch((error) => {
//         console.error("Failed to fetch resource:", error);
//         return fetch(request);
//       })
//   );
// });

const cacheName = "thoras-v2.0.7";
const staticAssets = [
  "./index.html",
  "./index.css",
  "./index.js",
  "./manifest.webmanifest",
  "./images",
  "./images/offline.png", // Fallback image for offline scenarios
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        return cache.addAll(staticAssets);
      })
      .then(() => self.skipWaiting()) // Immediately activate the new service worker
      .catch((error) => {
        console.error("Failed to cache assets during install:", error);
      })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => {
        return Promise.all(
          keys.map((key) => {
            if (key !== cacheName) {
              return caches.delete(key); // Delete old caches
            }
          })
        );
      })
      .then(() => self.clients.claim()) // Take control of all open clients
      .catch((error) => {
        console.error("Failed to activate new service worker:", error);
      })
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.url.includes("firestore.googleapis.com")) {
    return; // Bypass caching for Firestore requests
  }

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      return (
        cachedResponse ||
        fetch(request)
          .then((networkResponse) => {
            return caches.open(cacheName).then((cache) => {
              cache.put(request, networkResponse.clone());
              return networkResponse;
            });
          })
          .catch(() => {
            if (request.headers.get("accept").includes("text/html")) {
              return caches.match("./index.html"); // Fallback to index.html for navigation requests
            }
            if (request.headers.get("accept").includes("image")) {
              return caches.match("./images/offline.png"); // Fallback image for images
            }
            return new Response("You are offline"); // Generic fallback for other types of requests
          })
      );
    })
  );
});
