importScripts("/precache-manifest.a59f1e3875ba66bf255e4a1a4b2e9617.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

/* eslint-disable no-undef */
workbox.core.setCacheNameDetails({prefix: "SW"});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(
    new RegExp("https://fonts.(?:googleapis|gstatic).com/(.*)"),
    workbox.strategies.cacheFirst({
        cacheName: "googleapis",
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 30
            })
        ],
        method: 'GET',
        cacheableResponse: { statuses: [0, 200]}
    })
)
workbox.routing.registerRoute(
    /.*\.js/,
    workbox.strategies.networkFirst()
)

workbox.routing.registerRoute(
    /.*\.css/,
    workbox.strategies.staleWhileRevalidate({
      cacheName: 'css-cache'
    })
)

workbox.routing.registerRoute(
/.*\.(?:png|jpg|jpeg|svg|gif)/,
workbox.strategies.cacheFirst({
    cacheName: 'image-cache',
    plugins: [
    new workbox.expiration.Plugin({
        maxEntries: 20,
        maxAgeSeconds: 7 * 24 * 60 * 60
    })
    ]
})
)

self.addEventListener("notificationclick", function (event){
    const notificationData = event.notification.data;
    var url = notificationData.url
    self.clients.openWindow(url);
    event.notification.close();
})

self.addEventListener('push', function (e) {
    if (!(self.Notification && self.Notification.permission === 'granted')) {
        //notifications aren't supported or permission not granted!
        return;
    }

    if (e.data) {
        var msg = e.data.json();
        e.waitUntil(self.registration.showNotification(msg.title, {
            body: msg.body,
            icon: msg.icon,
            vibrate: msg.vibrate,
            data: msg.data
        }));
    }
});

  
