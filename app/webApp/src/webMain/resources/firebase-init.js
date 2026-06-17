// Firebase init via CDN ESM module (loaded as type="module" from index.html)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAnalytics, isSupported as analyticsIsSupported } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDhyByCxyTJxfTYfKJgKPfE9DLZpnBrfTA",
  authDomain: "tasqcal-md.firebaseapp.com",
  projectId: "tasqcal-md",
  storageBucket: "tasqcal-md.firebasestorage.app",
  messagingSenderId: "328211170939",
  appId: "1:328211170939:web:461c5f50c58406de2544de",
  measurementId: "G-Y15TEH48DT"
};

try {
  const app = initializeApp(firebaseConfig);
  if (typeof window !== 'undefined') {
    analyticsIsSupported().then(supported => {
      if (supported) {
        try { getAnalytics(app); } catch (e) { console.warn('Analytics init failed', e); }
      }
    }).catch(() => {/* ignore */});
  }
} catch (e) {
  console.error('Firebase initialization failed', e);
}
