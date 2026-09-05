(function () {
  const KEY = 'schoolSmartDemo_v2';
  const SESSION = 'schoolSmartSession_v2';
  const COOKIE_MAX_AGE = 86400;

  function clone(value) { return JSON.parse(JSON.stringify(value)); }

  window.Store = {
    init() {
      if (!localStorage.getItem(KEY)) localStorage.setItem(KEY, JSON.stringify(clone(window.DEMO_SEED)));
    },
    reset() {
      localStorage.setItem(KEY, JSON.stringify(clone(window.DEMO_SEED)));
      document.cookie = 'schoolSmartSession_v2=; Max-Age=0; Path=/; SameSite=Lax';
      localStorage.removeItem(SESSION);
    },
    get() {
      this.init();
      return JSON.parse(localStorage.getItem(KEY));
    },
    save(data) { localStorage.setItem(KEY, JSON.stringify(data)); return data; },
    session() {
      // Cookie is the primary demo session. Some browsers restrict cookies on file:// pages,
      // so LocalStorage is a safe fallback for local double-click demos.
      const match = document.cookie.match(/(?:^|;\s*)schoolSmartSession_v2=([^;]+)/);
      return match ? decodeURIComponent(match[1]) : (localStorage.getItem(SESSION) || null);
    },
    setSession(username) {
      const value = encodeURIComponent(username);
      document.cookie = `schoolSmartSession_v2=${value}; Max-Age=${COOKIE_MAX_AGE}; Path=/; SameSite=Lax`;
      localStorage.setItem(SESSION, username);
    },
    clearSession() {
      document.cookie = 'schoolSmartSession_v2=; Max-Age=0; Path=/; SameSite=Lax';
      localStorage.removeItem(SESSION);
    }
  };
})();
