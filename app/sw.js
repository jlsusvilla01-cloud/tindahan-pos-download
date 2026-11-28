// Tindahan POS phone page: a tiny service worker, only so the phone can show alerts (Android shows them only through
// a service worker). Tapping an alert opens the phone page. It caches nothing.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("notificationclick", e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({type: "window"}).then(list => list.length ? list[0].focus() : self.clients.openWindow("./")));
});
