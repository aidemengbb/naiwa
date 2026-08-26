// Service Worker：首次访问自动缓存全部资源，之后秒开/离线可玩
// 更新游戏时请同步修改 CACHE 版本号（如 naigua-v2）
var CACHE = "naigua-v1";

self.addEventListener("install", function (e) {
  self.skipWaiting();
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;
  if (req.url.indexOf("github.io") < 0) return;  // 只处理本站资源
  e.respondWith(
    caches.match(req).then(function (hit) {
      if (hit) return hit;   // 命中本地缓存：秒开
      return fetch(req).then(function (res) {
        if (res && res.status === 200) {
          var clone = res.clone();
          caches.open(CACHE).then(function (c) { c.put(req, clone); });
        }
        return res;
      }).catch(function () { return hit; });   // 离线时回退缓存
    })
  );
});
