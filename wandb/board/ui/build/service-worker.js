"use strict";var precacheConfig=[["/index.html","c7f3971e2928023b8a0de0695240ec38"],["/static/css/main.2a27e927.css","beaec4fdb4ea5209205ed8d4660f0704"],["/static/js/main.534c7eb9.js","3a042b0abf8e5cf7cf1a6d82fa318a6d"],["/static/js/polyfills.1db40e1c.js","a1110cecc45a12d5d5c9436264711f3f"],["/static/js/vendor.1db40e1c.js","dfd032acc767a6c71ced352adbc5d294"],["/static/media/flags.9c74e172.png","9c74e172f87984c48ddf5c8108cabe67"],["/static/media/grapheinpro-bold-webfont.2cf4c15e.woff","2cf4c15e179d63141d4dc8d6c5f54ebe"],["/static/media/grapheinpro-bolditalic-webfont.60ca4eb5.woff","60ca4eb5b86b9f9e5b836d16103d3682"],["/static/media/grapheinpro-book-webfont.10877bca.woff","10877bca1f9360e388dba1717a8325cb"],["/static/media/grapheinpro-italic-webfont.cdb675ea.woff","cdb675eac2da9059eebc660cf98a28ee"],["/static/media/grapheinpro-light-webfont.b5fe7c39.woff","b5fe7c39ba2da3ff75a0529756b0edb8"],["/static/media/grapheinpro-lightitalic-webfont.cd17fa64.woff","cd17fa64c944eec729aa738603d05416"],["/static/media/icons.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/static/media/icons.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/static/media/icons.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/static/media/icons.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/static/media/icons.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/static/media/wandb-long-white.05455c9e.svg","05455c9e31c885872473150a1c164408"],["/static/media/wandb-long.b28c05c1.svg","b28c05c139da1c5ed7b7a670c2db2d06"],["/static/media/wandb-pattern.6cbb0bbf.svg","6cbb0bbfcb5d0ec1e034754780e1c086"],["/static/media/wandb.c6d7637a.svg","c6d7637ae6a1258d3bba9452c60753a1"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var c="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(c,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});