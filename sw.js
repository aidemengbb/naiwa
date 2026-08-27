// Service Worker：stale-while-revalidate
// 先秒开返回本地缓存，同时后台拉取新版更新缓存——内容更新自动生效
// 每次部署请更新 BUILD 标记（deploy 时自动写入日期版本）
var BUILD = "naigua-20260827-4";
var CACHE = "naigua-sw";

self.addEventListener("install", function (e) {
  self.skipWaiting();
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;
  if (req.url.indexOf("github.io") < 0) return;
  e.respondWith(
    caches.match(req).then(function (hit) {
      // 后台拉取新版并更新缓存（stale-while-revalidate）
      var fetchPromise = fetch(req).then(function (res) {
        if (res && res.status === 200) {
          var clone = res.clone();
          caches.open(CACHE).then(function (c) { c.put(req, clone); });
        }
        return res;
      }).catch(function () { return hit; });
      if (hit) return hit;                 // 有缓存：秒开，后台更新
      return fetchPromise;                 // 无缓存：直接拉取
    })
  );
});
