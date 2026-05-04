const VERSION = 'wellness-v2';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(clients.claim()));

const timers = [];
function clearTimers(){ timers.forEach(clearTimeout); timers.length = 0; }

function scheduleAll(list){
  clearTimers();
  const now = Date.now();
  list.forEach(n => {
    const delay = n.ts - now;
    if(delay > 500 && delay < 86400000){
      timers.push(setTimeout(() => fire(n), delay));
    }
  });
}

function fire(n){
  self.registration.showNotification(n.title, {
    body: n.body,
    icon: './icon.svg',
    tag: n.tag || 'wellness',
    requireInteraction: false,
    data: { url: './' }
  });
}

self.addEventListener('message', e => {
  if(e.data?.type === 'SCHEDULE') scheduleAll(e.data.list);
  if(e.data?.type === 'FIRE_NOW') fire(e.data.n);
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(cs => {
      for(const c of cs){ if(c.url.includes('wellness') && 'focus' in c) return c.focus(); }
      return clients.openWindow('./');
    })
  );
});
