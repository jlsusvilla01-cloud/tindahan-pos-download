// Tindahan POS phone page: a tiny service worker, only so the phone can show alerts (Android shows them only through
// a service worker). Tapping an alert opens the phone page. It caches nothing.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
// Push alerts from the store computers (through the website's /api/push), even with the browser closed.
self.addEventListener("push", e => {
  let d = {}; try { d = e.data ? e.data.json() : {}; } catch (x) {}
  e.waitUntil(self.registration.showNotification(d.title || "Tindahan POS", {body: d.body || "", tag: d.tag || undefined, icon: "icon.png"}));
});
self.addEventListener("notificationclick", e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({type: "window"}).then(list => list.length ? list[0].focus() : self.clients.openWindow("./")));
});
