# Jinnal · Wellness PWA

Personal wellness tracker — Cancer Lagna · Magha Moon · Moon Mahadasha

## Files
- `index.html` — complete app
- `sw.js` — service worker (local notifications)
- `manifest.json` — PWA config

## Deploy to GitHub Pages (5 minutes)

### Step 1 — Create GitHub repo
1. Go to github.com → New repository
2. Name it: `wellness`
3. Set to **Private** (your personal data)
4. Click **Create repository**

### Step 2 — Upload files
1. Click **Add file → Upload files**
2. Drag all 3 files: `index.html`, `sw.js`, `manifest.json`
3. Click **Commit changes**

### Step 3 — Enable GitHub Pages
1. Go to repo **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` → folder: `/ (root)`
4. Click **Save**
5. Wait ~2 minutes

### Step 4 — Your URL
`https://YOUR-USERNAME.github.io/wellness/`

### Step 5 — Add to iPhone Home Screen
1. Open the URL in **Safari** (must be Safari, not Chrome)
2. Tap the **Share button** (box with arrow)
3. Tap **Add to Home Screen**
4. Name it: `Jinnal`
5. Tap **Add**

### Step 6 — Enable Notifications
1. Open app from Home Screen (not Safari)
2. Go to **Settings tab** (⚙)
3. Tap **Enable Notifications**
4. Allow when iOS prompts

## Notification Schedule
| Time | Message |
|------|---------|
| 7:30 AM | Morning oracle — moon phase / cycle phase / Dasha insight |
| 3:00 PM | Afternoon check — water, back, energy |
| 10:15 PM | Sleep nudge — cycle-phase aware |
| Day before Mercury Rx | ☿ Advance warning |
| 7 days before June 2026 | ♃ Jupiter Cancer alert |

## Notes
- All data stored locally on your phone (localStorage)
- No server, no account, no data leaves your device
- If phone restarts, open app once to re-register notifications
- iOS 16.4+ required for notifications (iPhone 14 Pro Max ✓)
