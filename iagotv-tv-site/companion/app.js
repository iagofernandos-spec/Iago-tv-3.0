// ── Supabase Config ───────────────────────────────────────────────────────
const SUPABASE_URL = 'https://hxsjvjifglzpxtzbtijg.supabase.co';
const SUPABASE_ANON = 'sb_publishable__ng1U2_pc7nlAd_6tdCIww_yDQUT65p';
const TMDB_IMG = 'https://image.tmdb.org/t/p/w92';

const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_ANON);

// ── i18n ──────────────────────────────────────────────────────────────────
const STRINGS = {
  en: {
    nav_dashboard: 'Dashboard', nav_profiles: 'Profiles', nav_addons: 'Add-ons',
    nav_iptv: 'IPTV', nav_plugins: 'Plugins', nav_history: 'History',
    nav_watchlist: 'Watchlist', nav_settings: 'Settings',
    sign_out: 'Sign out', user_fallback: 'User', loading: 'Loading...',
    saved: 'Saved ✓', save_err: 'Failed to save', no_sync: 'No sync data',
    // auth
    auth_sub: 'Manage your IagoTV account — profiles, add-ons, IPTV & history',
    auth_google: 'Continue with Google',
    // dashboard
    dash_sub: 'A quick overview of your IagoTV account',
    stat_profiles: 'Profiles', stat_addons: 'Add-ons',
    stat_history: 'Watch History', stat_watchlist: 'Watchlist',
    recent_activity: 'Recent Activity', no_activity: 'No recent activity',
    type_movie: '🎬 Movie', type_series: '📺 Series',
    // profiles
    profiles_title: 'Profiles',
    profiles_sub: (n) => `${n} profile${n !== 1 ? 's' : ''} in account`,
    profiles_empty: 'No profiles found — open IagoTV on your TV to create one',
    profiles_tip: '💡 Profile management (create, delete, rename) is available in IagoTV on your TV.<br>Changes sync automatically to the cloud.',
    badge_primary: 'Primary', badge_locked: '🔒 Locked',
    // addons
    addons_title: 'Add-ons',
    addons_sub: (a, t) => `${a} active of ${t}`,
    addons_empty: 'No add-ons installed',
    addons_tip: '💡 To add or remove add-ons, go to Settings in IagoTV on your TV. Data syncs automatically.',
    badge_enabled: 'Enabled', badge_disabled: 'Disabled',
    // iptv
    iptv_sub: (n) => `${n} source${n !== 1 ? 's' : ''}`,
    iptv_empty: 'No IPTV sources configured — go to IagoTV → Settings → IPTV',
    iptv_active: 'Active', iptv_disabled: 'Disabled',
    iptv_tip: '💡 To add M3U playlists and manage channels — go to IPTV Settings in IagoTV. Changes sync automatically to the cloud.',
    // plugins
    plugins_title: 'Plugins (Sideload)',
    plugins_sub: (r, s) => `${r} repositor${r !== 1 ? 'ies' : 'y'} · ${s} scrapers`,
    plugins_status_on: 'Plugins enabled', plugins_status_off: 'Plugins disabled',
    plugins_empty: 'No plugin repositories — add one in IagoTV → Settings → Plugins',
    repos_label: (n) => `Repositories (${n})`,
    scrapers_label: (n) => `Scrapers (${n})`,
    plugin_active: 'Active', plugin_disabled: 'Disabled',
    plugins_tip: '💡 Plugins sync to the cloud automatically. Each scraper\'s JS code stays local on your TV only and is never uploaded to the cloud.',
    // history
    history_title: 'Watch History',
    tab_movies: 'Movies', tab_tv: 'TV Shows', tab_all: 'All',
    history_empty: 'No watch history', history_err: 'Failed to load',
    delete_err: 'Failed to delete', deleted_history: 'Removed from history ✓',
    // watchlist
    watchlist_title: 'Watchlist',
    watchlist_sub: (n) => `${n} item${n !== 1 ? 's' : ''}`,
    watchlist_empty: 'Your watchlist is empty',
    wl_movies: '🎬 Movies', wl_tv: '📺 TV Shows',
    wl_remove: 'Remove', wl_remove_err: 'Failed to remove',
    wl_removed: 'Removed from watchlist ✓',
    // settings
    settings_title: 'Settings', settings_sub: 'General account settings',
    appearance: 'Appearance',
    oled_label: 'OLED Black Background', oled_desc: 'Pure black background to save battery on OLED screens',
    theme_label: 'App Theme', layout_label: 'Home Layout', font_label: 'Font',
    settings_profile_label: 'Profile',
    account_section: 'Account', user_id_label: 'User ID',
    // time
    just_now: 'just now', m_ago: (m) => `${m}m ago`, h_ago: (h) => `${h}h ago`, d_ago: (d) => `${d}d ago`,
  },
  he: {
    nav_dashboard: 'דשבורד', nav_profiles: 'פרופילים', nav_addons: 'הרחבות',
    nav_iptv: 'IPTV', nav_plugins: 'פלאגינים', nav_history: 'היסטוריה',
    nav_watchlist: 'רשימת צפייה', nav_settings: 'הגדרות',
    sign_out: 'התנתק', user_fallback: 'משתמש', loading: 'טוען...',
    saved: 'נשמר ✓', save_err: 'שגיאה בשמירה', no_sync: 'אין נתוני סנכרון',
    // auth
    auth_sub: 'נהל את חשבון ה-IagoTV שלך — פרופילים, הרחבות, IPTV והיסטוריה',
    auth_google: 'המשך עם Google',
    // dashboard
    dash_sub: 'סקירה מהירה של חשבון ה-IagoTV שלך',
    stat_profiles: 'פרופילים', stat_addons: 'הרחבות',
    stat_history: 'היסטוריית צפייה', stat_watchlist: 'רשימת צפייה',
    recent_activity: 'פעילות אחרונה', no_activity: 'אין פעילות אחרונה',
    type_movie: '🎬 סרט', type_series: '📺 סדרה',
    // profiles
    profiles_title: 'פרופילים',
    profiles_sub: (n) => `${n} פרופילים בחשבון`,
    profiles_empty: 'אין פרופילים — פתח את IagoTV בטלוויזיה ליצירת פרופיל',
    profiles_tip: '💡 ניהול פרופילים (יצירה, מחיקה, שינוי שם) זמין ב-IagoTV על הטלוויזיה.<br>שינויים מסונכרנים אוטומטית עם הענן.',
    badge_primary: 'ראשי', badge_locked: '🔒 נעול',
    // addons
    addons_title: 'הרחבות',
    addons_sub: (a, total) => `${a} פעילות מתוך ${total}`,
    addons_empty: 'אין הרחבות מותקנות',
    addons_tip: '💡 להוספה/הסרה של הרחבות — גש להגדרות ב-IagoTV. הנתונים מסונכרנים אוטומטית.',
    badge_enabled: 'פעיל', badge_disabled: 'כבוי',
    // iptv
    iptv_sub: (n) => `${n} מקורות`,
    iptv_empty: 'אין מקורות IPTV מוגדרים — הגדר ב-IagoTV ← הגדרות ← IPTV',
    iptv_active: 'פעיל', iptv_disabled: 'כבוי',
    iptv_tip: '💡 להוספת רשימות M3U ולניהול ערוצים — גש להגדרות IPTV ב-IagoTV. השינויים מסונכרנים אוטומטית לענן.',
    // plugins
    plugins_title: 'פלאגינים (Sideload)',
    plugins_sub: (r, s) => `${r} מאגרים · ${s} scrapers`,
    plugins_status_on: 'פלאגינים פעילים', plugins_status_off: 'פלאגינים כבויים',
    plugins_empty: 'אין מאגרי פלאגינים — הוסף ב-IagoTV ← הגדרות ← פלאגינים',
    repos_label: (n) => `מאגרים (${n})`,
    scrapers_label: (n) => `Scrapers (${n})`,
    plugin_active: 'פעיל', plugin_disabled: 'כבוי',
    plugins_tip: '💡 הפלאגינים מסונכרנים לענן אוטומטית. קוד ה-JS של כל scraper נשמר מקומית בטלוויזיה בלבד ולא עולה לענן.',
    // history
    history_title: 'היסטוריית צפייה',
    tab_movies: 'סרטים', tab_tv: 'סדרות', tab_all: 'הכל',
    history_empty: 'אין היסטוריית צפייה', history_err: 'שגיאה בטעינה',
    delete_err: 'שגיאה במחיקה', deleted_history: 'הוסר מההיסטוריה ✓',
    // watchlist
    watchlist_title: 'רשימת צפייה',
    watchlist_sub: (n) => `${n} פריטים`,
    watchlist_empty: 'רשימת הצפייה ריקה',
    wl_movies: '🎬 סרטים', wl_tv: '📺 סדרות',
    wl_remove: 'הסר', wl_remove_err: 'שגיאה במחיקה',
    wl_removed: 'הוסר מהרשימה ✓',
    // settings
    settings_title: 'הגדרות', settings_sub: 'הגדרות כלליות לחשבון',
    appearance: 'מראה',
    oled_label: 'רקע OLED שחור', oled_desc: 'רקע שחור לחלוטין לחיסכון בסוללה',
    theme_label: 'ערכת נושא', layout_label: 'פריסת בית', font_label: 'גופן',
    settings_profile_label: 'פרופיל',
    account_section: 'חשבון', user_id_label: 'מזהה משתמש',
    // time
    just_now: 'עכשיו', m_ago: (m) => `לפני ${m} דק׳`, h_ago: (h) => `לפני ${h} שע׳`, d_ago: (d) => `לפני ${d} ימים`,
  },
};

let currentLang = localStorage.getItem('iagotv_lang') || 'en';

function t(key, ...args) {
  const s = STRINGS[currentLang][key];
  return typeof s === 'function' ? s(...args) : (s ?? key);
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('iagotv_lang', lang);
  const isRTL = lang === 'he';
  document.documentElement.lang = lang;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  // Re-render auth text if on auth screen
  const authSub = document.querySelector('.auth-sub');
  if (authSub) authSub.textContent = t('auth_sub');
  const authBtn = document.querySelector('.btn-google');
  if (authBtn) authBtn.childNodes[authBtn.childNodes.length - 1].textContent = ' ' + t('auth_google');
  // Re-render app if logged in
  if (state.session) {
    buildShell(state.session.user);
    renderSection();
  }
}

// ── State ─────────────────────────────────────────────────────────────────
let state = {
  session: null,
  userId: null,
  profiles: [],
  addons: [],
  plugins: [],
  iptv: [],
  watched: [],
  library: [],
  settings: {},
  activeSection: 'dashboard',
  historyTab: 'movies',
  settingsProfileId: 1,
};

// ── Toast ─────────────────────────────────────────────────────────────────
function toast(msg, type = 'ok') {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.className = `show toast-${type}`;
  clearTimeout(el._t);
  el._t = setTimeout(() => { el.className = ''; }, 3000);
}

// ── Auth ──────────────────────────────────────────────────────────────────
async function signInGoogle() {
  // Redirect to the site root, which the Supabase project's allowlist accepts.
  // The landing page then forwards the OAuth callback hash to /companion/.
  const redirectTo = window.location.origin + '/';
  const { error } = await db.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo },
  });
  if (error) toast(error.message, 'err');
}

async function signOut() {
  await db.auth.signOut();
  location.reload();
}

// ── Cloud Data Loading (IagoTV schema) ────────────────────────────────────
async function loadData() {
  const [profiles, addons, plugins, iptv, watched, library, settings] = await Promise.all([
    loadProfiles(),
    loadAll('addons', 'sort_order'),
    loadAll('plugins', 'sort_order'),
    loadAll('iptv_sources', 'sort_order'),
    loadWatched(),
    loadLibrary(),
    loadSettingsBlob(),
  ]);
  state.profiles = profiles;
  state.addons = addons;
  state.plugins = plugins;
  state.iptv = iptv;
  state.watched = watched;
  state.library = library;
  state.settings = settings;
}

async function loadProfiles() {
  try {
    const { data, error } = await db.rpc('sync_pull_profiles');
    if (error) throw error;
    return (data ?? []).map(p => ({
      id: p.profile_index,
      name: p.name || `Profile ${p.profile_index}`,
      avatarColorHex: p.avatar_color_hex || '#1E88E5',
      pinEnabled: p.pin_enabled === true,
      usesPrimaryAddons: p.uses_primary_addons === true,
      usesPrimaryPlugins: p.uses_primary_plugins === true,
    }));
  } catch (e) {
    console.error('loadProfiles', e);
    return [];
  }
}

async function loadAll(table, orderBy) {
  try {
    let q = db.from(table).select('*');
    if (orderBy) q = q.order(orderBy, { ascending: true });
    const { data, error } = await q;
    if (error) throw error;
    return data ?? [];
  } catch (e) {
    console.error(`loadAll(${table})`, e);
    return [];
  }
}

async function loadWatched() {
  try {
    let q = db.from('watched_items').select('*').order('watched_at', { ascending: false }).limit(200);
    const { data, error } = await q;
    if (error) throw error;
    return data ?? [];
  } catch (e) {
    console.error('loadWatched', e);
    return [];
  }
}

async function loadLibrary() {
  try {
    const { data, error } = await db.from('library_items').select('*').order('added_at', { ascending: false }).limit(200);
    if (error) throw error;
    return data ?? [];
  } catch (e) {
    console.error('loadLibrary', e);
    return [];
  }
}

async function loadSettingsBlob() {
  try {
    const { data, error } = await db.rpc('sync_pull_profile_settings_blob', {
      p_profile_id: state.settingsProfileId,
      p_platform: 'tv',
    });
    if (error) throw error;
    const row = (data ?? [])[0];
    return row?.settings_json ?? { version: 1, features: {} };
  } catch (e) {
    console.error('loadSettingsBlob', e);
    return { version: 1, features: {} };
  }
}

async function saveSettingsBlob() {
  try {
    const { error } = await db.rpc('sync_push_profile_settings_blob', {
      p_profile_id: state.settingsProfileId,
      p_settings_json: state.settings,
      p_platform: 'tv',
      p_origin_client_id: 'iagotv-companion',
    });
    if (error) throw error;
    return true;
  } catch (e) {
    console.error('saveSettingsBlob', e);
    return false;
  }
}

// ── Sections ──────────────────────────────────────────────────────────────
const sections = {
  dashboard: renderDashboard,
  profiles: renderProfiles,
  addons: renderAddons,
  iptv: renderIPTV,
  plugins: renderPlugins,
  history: renderHistory,
  watchlist: renderWatchlist,
  settings: renderSettings,
};

function navigate(id) {
  state.activeSection = id;
  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.section === id);
  });
  renderSection();
}

async function renderSection() {
  const main = document.getElementById('main-content');
  main.innerHTML = `<div class="loading"><div class="spinner"></div> ${t('loading')}</div>`;
  await sections[state.activeSection]?.();
}

// ── Dashboard ─────────────────────────────────────────────────────────────
async function renderDashboard() {
  const main = document.getElementById('main-content');
  const profiles = state.profiles;
  const addons = state.addons;
  const watched = state.watched;

  const libraryCount = state.library.length;

  main.innerHTML = `
    <div class="section-header">
      <div>
        <div class="section-title">${t('nav_dashboard')}</div>
        <div class="section-sub">${t('dash_sub')}</div>
      </div>
    </div>
    <div class="card-grid">
      <div class="stat-card"><div class="stat-label">${t('stat_profiles')}</div><div class="stat-value gold">${profiles.length || 1}</div></div>
      <div class="stat-card"><div class="stat-label">${t('stat_addons')}</div><div class="stat-value">${addons.filter(a => a.enabled).length}</div></div>
      <div class="stat-card"><div class="stat-label">${t('stat_history')}</div><div class="stat-value">${watched.length || '—'}</div></div>
      <div class="stat-card"><div class="stat-label">${t('stat_watchlist')}</div><div class="stat-value">${libraryCount || '—'}</div></div>
    </div>
    <div class="card">
      <div style="font-size:13px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:14px">${t('recent_activity')}</div>
      <div id="recent-activity"><div class="loading"><div class="spinner"></div></div></div>
    </div>
  `;

  const recent = watched.slice(0, 6);
  const ra = document.getElementById('recent-activity');
  if (!recent?.length) {
    ra.innerHTML = emptyState(t('no_activity'));
    return;
  }
  ra.innerHTML = recent.map(r => `
    <div class="list-item">
      <div class="item-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">${r.content_type === 'movie' ? '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 9h6M9 12h6M9 15h4"/>' : '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>'}</svg>
      </div>
      <div class="item-info">
        <div class="item-title">${escapeHtml(r.title) || '—'}</div>
        <div class="item-sub">${r.content_type === 'movie' ? t('type_movie') : t('type_series')} · ${timeAgoMs(r.watched_at)}</div>
      </div>
      <span class="badge badge-gray">${r.content_type === 'movie' ? t('type_movie') : t('type_series')}</span>
    </div>
  `).join('');
}

// ── Profiles ──────────────────────────────────────────────────────────────
function renderProfileAvatar(profile) {
  const color = /^#[0-9a-fA-F]{6}$/.test(profile.avatarColorHex || '') ? profile.avatarColorHex : '#1E88E5';
  const letter = escapeHtml((profile.name || '?')[0].toUpperCase());
  return `<div class="profile-avatar-big" style="background:${color}22;color:${color}">${letter}</div>`;
}

async function renderProfiles() {
  const main = document.getElementById('main-content');
  const profiles = state.profiles;

  if (!profiles.length) {
    main.innerHTML = `
      <div class="section-header"><div class="section-title">${t('profiles_title')}</div></div>
      ${emptyState(t('profiles_empty'))}`;
    return;
  }

  main.innerHTML = `
    <div class="section-header">
      <div><div class="section-title">${t('profiles_title')}</div><div class="section-sub">${t('profiles_sub', profiles.length)}</div></div>
    </div>
    <div class="profiles-grid">
      ${profiles.map(p => `
        <div class="profile-card ${p.id === 1 ? 'active-profile' : ''}">
          ${renderProfileAvatar(p)}
          <div class="profile-name">${escapeHtml(p.name)}</div>
          <div style="display:flex;gap:6px;flex-wrap:wrap;justify-content:center">
            ${p.id === 1 ? `<span class="badge badge-gold">${t('badge_primary')}</span>` : ''}
            ${p.pinEnabled ? `<span class="badge badge-gray">${t('badge_locked')}</span>` : ''}
          </div>
        </div>
      `).join('')}
    </div>
    <div class="card">
      <div style="font-size:13px;color:var(--text-muted)">${t('profiles_tip')}</div>
    </div>
  `;
}

// ── Addons ────────────────────────────────────────────────────────────────
function addonIcon(a) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 9h6M9 12h6M9 15h4"/></svg>`;
}

async function renderAddons() {
  const main = document.getElementById('main-content');
  const addons = state.addons;

  if (!addons.length) {
    main.innerHTML = `
      <div class="section-header"><div class="section-title">${t('addons_title')}</div></div>
      ${emptyState(t('addons_empty'))}`;
    return;
  }

  function renderAddonList(list) {
    if (!list.length) return '';
    return `
      <div class="card" style="padding:0 20px">
        ${list.map(a => `
          <div class="list-item">
            <div class="item-icon">${addonIcon(a)}</div>
            <div class="item-info">
              <div class="item-title">${escapeHtml(a.name || a.url)}</div>
              <div class="item-sub" style="font-family:monospace;font-size:11px;max-width:420px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${escapeHtml(a.url)}</div>
            </div>
            <div style="display:flex;gap:8px;align-items:center">
              <span class="badge badge-gray">P${a.profile_id ?? 1}</span>
              <span class="badge ${a.enabled ? 'badge-green' : 'badge-red'}">${a.enabled ? t('badge_enabled') : t('badge_disabled')}</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  main.innerHTML = `
    <div class="section-header">
      <div><div class="section-title">${t('addons_title')}</div><div class="section-sub">${t('addons_sub', addons.filter(a=>a.enabled).length, addons.length)}</div></div>
    </div>
    ${renderAddonList(addons)}
    <div class="card" style="margin-top:16px">
      <div style="font-size:13px;color:var(--text-muted)">${t('addons_tip')}</div>
    </div>
  `;
}

// ── IPTV ──────────────────────────────────────────────────────────────────
async function renderIPTV() {
  const main = document.getElementById('main-content');
  const sources = state.iptv;

  const profiles = state.profiles;
  const pName = (pid) => profiles.find(p => p.id === pid)?.name ?? `P${pid ?? 1}`;

  main.innerHTML = `
    <div class="section-header">
      <div><div class="section-title">IPTV</div><div class="section-sub">${t('iptv_sub', sources.length)}</div></div>
    </div>

    ${sources.length === 0 ? emptyState(t('iptv_empty')) : `
    <div style="font-size:13px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:12px">${t('nav_iptv')}</div>
    <div class="card" style="padding:0 20px">
      ${sources.map(s => {
        const url = s.m3u_url || (s.server_url ? `${s.server_url}${s.username ? ` · ${s.username}` : ''}` : null);
        return `
        <div class="list-item">
          <div class="item-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <div class="item-info">
            <div class="item-title">${escapeHtml(s.name) || 'IPTV'}</div>
            ${url ? `<div class="item-sub" style="font-family:monospace;font-size:11px;max-width:380px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${escapeHtml(url)}</div>` : ''}
            <div class="item-sub">${escapeHtml(s.source_type || 'M3U')}${s.epg_url ? ` · EPG ${escapeHtml(s.epg_url)}` : ''}</div>
          </div>
          <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px">
            <span class="badge ${s.enabled !== false ? 'badge-green' : 'badge-red'}">${s.enabled !== false ? t('iptv_active') : t('iptv_disabled')}</span>
            <span class="badge badge-gray">${escapeHtml(pName(s.profile_id))}</span>
          </div>
        </div>`;
      }).join('')}
    </div>`}

    <div class="card" style="margin-top:16px">
      <div style="font-size:13px;color:var(--text-muted)">${t('iptv_tip')}</div>
    </div>
  `;
}

// ── Plugins ───────────────────────────────────────────────────────────────
async function renderPlugins() {
  const main = document.getElementById('main-content');
  const plugins = state.plugins;
  const enabled = plugins.filter(p => p.enabled).length;
  const scraperCount = plugins.reduce((acc, p) => acc + (Array.isArray(p.active_scraper_ids) ? p.active_scraper_ids.length : 0), 0);

  main.innerHTML = `
    <div class="section-header">
      <div><div class="section-title">${t('plugins_title')}</div><div class="section-sub">${t('plugins_sub', plugins.length, scraperCount)}</div></div>
      <div style="display:flex;align-items:center;gap:10px">
        <span style="font-size:13px;color:var(--text-muted)">${enabled > 0 ? t('plugins_status_on') : t('plugins_status_off')}</span>
      </div>
    </div>

    ${plugins.length === 0 ? emptyState(t('plugins_empty')) : `
    <div style="font-size:13px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:12px">${t('repos_label', plugins.length)}</div>
    <div class="card" style="padding:0 20px">
      ${plugins.map(p => `
        <div class="list-item">
          <div class="item-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 7h18M3 12h18M3 17h18"/></svg>
          </div>
          <div class="item-info">
            <div class="item-title">${escapeHtml(p.name || p.url)}</div>
            <div class="item-sub" style="font-family:monospace;font-size:11px">${escapeHtml(p.url)}</div>
            <div class="item-sub">${Array.isArray(p.active_scraper_ids) ? p.active_scraper_ids.length : 0} scrapers${p.repo_type ? ` · ${escapeHtml(p.repo_type)}` : ''}</div>
          </div>
          <span class="badge ${p.enabled ? 'badge-green' : 'badge-red'}">${p.enabled ? t('plugin_active') : t('plugin_disabled')}</span>
        </div>
      `).join('')}
    </div>`}

    <div class="card" style="margin-top:16px">
      <div style="font-size:13px;color:var(--text-muted)">${t('plugins_tip')}</div>
    </div>
  `;
}

// ── Watch History ─────────────────────────────────────────────────────────
async function renderHistory() {
  const main = document.getElementById('main-content');

  main.innerHTML = `
    <div class="section-header">
      <div><div class="section-title">${t('history_title')}</div></div>
    </div>
    <div class="tabs">
      <button class="tab ${state.historyTab==='movies'?'active':''}" onclick="state.historyTab='movies';renderHistoryContent()">${t('tab_movies')}</button>
      <button class="tab ${state.historyTab==='tv'?'active':''}" onclick="state.historyTab='tv';renderHistoryContent()">${t('tab_tv')}</button>
      <button class="tab ${state.historyTab==='all'?'active':''}" onclick="state.historyTab='all';renderHistoryContent()">${t('tab_all')}</button>
    </div>
    <div id="history-content"><div class="loading"><div class="spinner"></div></div></div>
  `;
  await renderHistoryContent();
}

async function renderHistoryContent() {
  document.querySelectorAll('.tab').forEach(tab => {
    const map = { movies: t('tab_movies'), tv: t('tab_tv'), all: t('tab_all') };
    tab.classList.toggle('active', tab.textContent.trim() === map[state.historyTab]);
  });

  const el = document.getElementById('history-content');
  if (!el) return;
  el.innerHTML = `<div class="loading"><div class="spinner"></div></div>`;

  let items = state.watched;
  if (state.historyTab === 'movies') items = items.filter(r => r.content_type === 'movie');
  if (state.historyTab === 'tv') items = items.filter(r => r.content_type === 'tv');

  if (!items.length) { el.innerHTML = emptyState(t('history_empty')); return; }

  el.innerHTML = `<div class="card" style="padding:0 20px">
    ${items.map(r => `
      <div class="list-item">
        <div class="item-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">${r.content_type === 'movie' ? '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 9h6M9 12h6M9 15h4"/>' : '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>'}</svg>
        </div>
        <div class="item-info">
          <div class="item-title">${escapeHtml(r.title) || '—'}${r.season != null ? ` S${String(Number(r.season)||0).padStart(2,'0')}E${String(Number(r.episode)||0).padStart(2,'0')}` : ''}</div>
          <div class="item-sub">${timeAgoMs(r.watched_at)} · ${r.content_type === 'movie' ? t('type_movie') : t('type_series')}</div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px">
          <span class="badge badge-gray">${r.content_type === 'movie' ? t('type_movie') : t('type_series')}</span>
          <button class="btn btn-danger" style="padding:4px 10px;font-size:11px" onclick="deleteHistory('${r.id}',this)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/></svg>
          </button>
        </div>
      </div>
    `).join('')}
  </div>`;
}

async function deleteHistory(id, btn) {
  btn.disabled = true;
  const { error } = await db.from('watched_items').delete().eq('id', id);
  if (error) { toast(t('delete_err'), 'err'); btn.disabled = false; return; }
  toast(t('deleted_history'));
  btn.closest('.list-item').remove();
  state.watched = state.watched.filter(r => r.id !== id);
}

// ── Watchlist ─────────────────────────────────────────────────────────────
async function renderWatchlist() {
  const main = document.getElementById('main-content');
  main.innerHTML = `<div class="section-header"><div class="section-title">${t('watchlist_title')}</div></div><div class="loading"><div class="spinner"></div></div>`;

  const data = state.library;

  if (!data?.length) {
    main.innerHTML = `<div class="section-header"><div class="section-title">${t('watchlist_title')}</div></div>${emptyState(t('watchlist_empty'))}`;
    return;
  }

  const movies = data.filter(i => i.content_type === 'movie');
  const shows = data.filter(i => i.content_type === 'tv');

  function renderWLSection(items, label) {
    if (!items.length) return '';
    return `
      <div style="font-size:13px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.5px;margin:20px 0 12px">${label} (${items.length})</div>
      <div class="card" style="padding:0 20px">
        ${items.map(i => `
          <div class="list-item" id="wl-${i.content_id}-${i.content_type}">
            <div class="item-icon">
              ${i.poster ? `<img src="${safeUrl(i.poster)}" onerror="this.style.display='none'" alt="">` : ''}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" ${i.poster ? 'style="display:none"' : ''}>${i.content_type==='movie'?'<path d="M15 10l4.553-2.069A1 1 0 0121 8.882v6.236a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>':'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>'}
              </svg>
            </div>
            <div class="item-info">
              <div class="item-title">${escapeHtml(i.name) || '—'}</div>
              <div class="item-sub">${timeAgoMs(i.added_at)}</div>
            </div>
            <button class="btn btn-danger" style="padding:6px 10px" onclick="removeWatchlist('${i.id}',this)">${t('wl_remove')}</button>
          </div>
        `).join('')}
      </div>`;
  }

  main.innerHTML = `
    <div class="section-header">
      <div><div class="section-title">${t('watchlist_title')}</div><div class="section-sub">${t('watchlist_sub', data.length)}</div></div>
    </div>
    ${renderWLSection(movies, t('wl_movies'))}
    ${renderWLSection(shows, t('wl_tv'))}
  `;
}

async function removeWatchlist(id, btn) {
  btn.disabled = true;
  const { error } = await db.from('library_items').delete().eq('id', id);
  if (error) { toast(t('wl_remove_err'), 'err'); btn.disabled = false; return; }
  toast(t('wl_removed'));
  btn.closest('.list-item').remove();
  state.library = state.library.filter(i => i.id !== id);
}

// ── Settings ──────────────────────────────────────────────────────────────
function featureValue(feature, key, fallback) {
  const v = state.settings?.features?.[feature]?.[key];
  return v == null ? fallback : v;
}

function setFeatureValue(feature, key, value) {
  if (!state.settings?.features) state.settings = { version: 1, features: {} };
  if (!state.settings.features[feature]) state.settings.features[feature] = {};
  state.settings.features[feature][key] = value;
}

async function renderSettings() {
  const main = document.getElementById('main-content');

  const oled = featureValue('theme_settings', 'amoled_mode', false);
  const theme = featureValue('theme_settings', 'selected_theme', 'OCEAN');
  const font = featureValue('theme_settings', 'selected_font', 'INTER');
  const layout = featureValue('layout_settings', 'selected_layout', 'MODERN');

  const profiles = state.profiles;
  const profileSelect = profiles.length > 0 ? `
    <div class="form-group">
      <label class="form-label">${t('settings_profile_label')}</label>
      <select class="form-select" onchange="switchSettingsProfile(this.value)">
        ${profiles.map(p => `<option value="${p.id}" ${p.id === state.settingsProfileId ? 'selected' : ''}>${escapeHtml(p.name)}</option>`).join('')}
      </select>
    </div>` : '';

  main.innerHTML = `
    <div class="section-header">
      <div><div class="section-title">${t('settings_title')}</div><div class="section-sub">${t('settings_sub')}</div></div>
    </div>

    <div class="card">
      <div style="font-size:16px;font-weight:700;margin-bottom:16px">${t('appearance')}</div>
      ${profileSelect}

      <div class="form-group">
        <div style="display:flex;align-items:center;justify-content:space-between">
          <div>
            <div style="font-weight:600">${t('oled_label')}</div>
            <div style="font-size:12px;color:var(--text-muted);margin-top:2px">${t('oled_desc')}</div>
          </div>
          <label class="toggle">
            <input type="checkbox" ${oled?'checked':''} onchange="updateSetting('theme_settings','amoled_mode',this.checked)">
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">${t('theme_label')}</label>
        <select class="form-select" onchange="updateSetting('theme_settings','selected_theme',this.value)">
          ${['CRIMSON','OCEAN','VIOLET','EMERALD','AMBER','ROSE','WHITE'].map(v =>
            `<option value="${v}" ${theme===v?'selected':''}>${v}</option>`).join('')}
        </select>
      </div>

      <div class="form-group">
        <label class="form-label">${t('layout_label')}</label>
        <select class="form-select" onchange="updateSetting('layout_settings','selected_layout',this.value)">
          ${['CLASSIC','GRID','MODERN'].map(v =>
            `<option value="${v}" ${layout===v?'selected':''}>${v}</option>`).join('')}
        </select>
      </div>

      <div class="form-group">
        <label class="form-label">${t('font_label')}</label>
        <select class="form-select" onchange="updateSetting('theme_settings','selected_font',this.value)">
          ${['INTER','DM_SANS','OPEN_SANS'].map(v =>
            `<option value="${v}" ${font===v?'selected':''}>${v}</option>`).join('')}
        </select>
      </div>
    </div>

    <div class="card">
      <div style="font-size:16px;font-weight:700;margin-bottom:16px">${t('account_section')}</div>
      <div class="list-item" style="padding:10px 0;border:none">
        <div class="item-info">
          <div class="item-title">${t('user_id_label')}</div>
          <div class="item-sub" style="font-family:monospace;font-size:11px">${escapeHtml(state.userId)}</div>
        </div>
      </div>
      <button class="btn btn-danger" onclick="signOut()" style="margin-top:8px">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
        ${t('sign_out')}
      </button>
    </div>
  `;
}

async function switchSettingsProfile(profileId) {
  state.settingsProfileId = Number(profileId);
  state.settings = await loadSettingsBlob();
  toast(t('saved'));
  renderSettings();
}

async function updateSetting(feature, key, value) {
  setFeatureValue(feature, key, value);
  const ok = await saveSettingsBlob();
  toast(ok ? t('saved') : t('save_err'), ok ? 'ok' : 'err');
}

// ── Helpers ───────────────────────────────────────────────────────────────
function escapeHtml(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function safeUrl(url) {
  if (!url) return '';
  try {
    const u = new URL(url);
    return (u.protocol === 'https:' || u.protocol === 'http:') ? escapeHtml(u.href) : '';
  } catch { return ''; }
}

function timeAgoMs(epochMs) {
  if (!epochMs) return '';
  const d = Date.now() - Number(epochMs);
  const m = Math.floor(d / 60000);
  if (m < 1) return t('just_now');
  if (m < 60) return t('m_ago', m);
  const h = Math.floor(m / 60);
  if (h < 24) return t('h_ago', h);
  const days = Math.floor(h / 24);
  if (days < 30) return t('d_ago', days);
  return new Date(Number(epochMs)).toLocaleDateString(currentLang === 'he' ? 'he-IL' : 'en-US');
}

function emptyState(msg) {
  return `<div class="empty">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>
    <div class="empty-title">${msg}</div>
  </div>`;
}

// ── Shell ─────────────────────────────────────────────────────────────────
function buildShell(user) {
  const name = user.user_metadata?.full_name || user.email || t('user_fallback');
  const avatar = safeUrl(user.user_metadata?.avatar_url || '');
  const email = user.email || '';
  const initial = escapeHtml(name[0].toUpperCase());

  const navItems = [
    { id: 'dashboard', label: t('nav_dashboard'), icon: '<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>' },
    { id: 'profiles', label: t('nav_profiles'), icon: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>' },
    { id: 'addons', label: t('nav_addons'), icon: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 9h6M9 12h6M9 15h4"/>' },
    { id: 'iptv', label: 'IPTV', icon: '<path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>' },
    { id: 'plugins', label: t('nav_plugins'), icon: '<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>' },
    { id: 'history', label: t('nav_history'), icon: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>' },
    { id: 'watchlist', label: t('nav_watchlist'), icon: '<path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/>' },
    { id: 'settings', label: t('nav_settings'), icon: '<circle cx="12" cy="12" r="3"/><path d="M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M19.07 19.07l-1.41-1.41M4.93 19.07l1.41-1.41M1 12h2M21 12h2M12 1v2M12 21v2"/>' },
  ];

  document.getElementById('app-screen').innerHTML = `
    <aside class="sidebar">
      <div class="sidebar-logo">
        <img src="../assets/iagotv-icon-512.png" class="auth-logo" style="width:32px;height:32px" onerror="this.style.display='none'" alt="IagoTV">
        <span>IagoTV</span>
      </div>
      <nav>
        ${navItems.map(n => `
          <button class="nav-item ${n.id === state.activeSection ? 'active' : ''}" data-section="${n.id}" onclick="navigate('${n.id}')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">${n.icon}</svg>
            ${n.label}
          </button>
        `).join('')}
      </nav>
      <div class="sidebar-user">
        <div class="user-avatar">
          ${avatar ? `<img src="${avatar}" alt="">` : initial}
        </div>
        <div class="user-info">
          <div class="user-name">${escapeHtml(name)}</div>
          <div class="user-email">${escapeHtml(email)}</div>
        </div>
        <button class="btn-lang" onclick="setLang(currentLang==='en'?'he':'en')" title="Switch language" style="background:none;border:1px solid var(--border);border-radius:6px;color:var(--text-muted);cursor:pointer;padding:4px 8px;font-size:12px;font-weight:600;margin-left:4px">
          ${currentLang === 'en' ? 'עב' : 'EN'}
        </button>
        <button class="btn-logout" onclick="signOut()" title="${t('sign_out')}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
        </button>
      </div>
    </aside>
    <main class="main" id="main-content"></main>
  `;
}

// ── Boot ──────────────────────────────────────────────────────────────────
async function boot() {
  const { data: { session } } = await db.auth.getSession();

  if (!session) {
    document.getElementById('auth-screen').style.display = 'flex';
    document.getElementById('app-screen').style.display = 'none';
    return;
  }

  state.session = session;
  state.userId = session.user.id;

  document.getElementById('auth-screen').style.display = 'none';
  document.getElementById('app-screen').style.display = 'flex';

  buildShell(session.user);

  await loadData();

  await renderSection();

  db.auth.onAuthStateChange((_e, s) => {
    if (!s) location.reload();
  });
}

boot();
