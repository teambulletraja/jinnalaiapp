const VERSION = 'wellness-v1';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(clients.claim()));

// Scheduled notification timers
const timers = [];

function clearTimers() {
  timers.forEach(clearTimeout);
  timers.length = 0;
}

function scheduleNotifications(list) {
  clearTimers();
  const now = Date.now();
  list.forEach(n => {
    const delay = n.ts - now;
    if (delay > 500 && delay < 86400000) {
      timers.push(setTimeout(() => fireNotification(n), delay));
    }
  });
}

function fireNotification(n) {
  self.registration.showNotification(n.title, {
    body: n.body,
    icon: n.icon || './icon.svg',
    tag: n.tag || 'wellness',
    requireInteraction: false,
    data: { url: './' }
  });
}

// Messages from main thread
self.addEventListener('message', e => {
  if (e.data?.type === 'SCHEDULE') scheduleNotifications(e.data.list);
  if (e.data?.type === 'FIRE_NOW') fireNotification(e.data.n);
});

// Notification tap → open app
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(cs => {
      for (const c of cs) {
        if (c.url.includes('wellness') && 'focus' in c) return c.focus();
      }
      return clients.openWindow('./');
    })
  );
});
