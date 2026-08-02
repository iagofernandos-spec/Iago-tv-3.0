// ── Supabase Config ───────────────────────────────────────────────────────
const SUPABASE_URL = 'https://hxsjvjifglzpxtzbtijg.supabase.co';
const SUPABASE_ANON = 'sb_publishable__ng1U2_pc7nlAd_6tdCIww_yDQUT65p';
const TMDB_IMG = 'https://image.tmdb.org/t/p/w92';
const PROFILE_COLORS = ['#8B5CF6', '#1E88E5', '#E53935', '#00897B', '#F5C442', '#F4511E', '#6D4C41', '#E91E63'];

const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_ANON);

// ── i18n ──────────────────────────────────────────────────────────────────
const STRINGS = {
  pt: {
    nav_dashboard: 'Painel', nav_profiles: 'Perfis', nav_addons: 'Add-ons',
    nav_catalogs: 'Catálogos', nav_iptv: 'IPTV', nav_history: 'Histórico',
    nav_watchlist: 'Lista', nav_settings: 'Ajustes',
    sign_out: 'Sair', user_fallback: 'Usuário', loading: 'Carregando...',
    saved: 'Salvo ✓', save_err: 'Falha ao salvar', no_sync: 'Sem dados de sincronização',
    // auth
    auth_sub: 'Gerencie sua conta IagoTV — perfis, add-ons, IPTV & histórico',
    auth_google: 'Continuar com Google',
    // dashboard
    dash_sub: 'Uma visão rápida da sua conta IagoTV',
    stat_profiles: 'Perfis', stat_addons: 'Add-ons',
    stat_history: 'Histórico', stat_watchlist: 'Lista',
    recent_activity: 'Atividade recente', no_activity: 'Sem atividade recente',
    type_movie: '🎬 Filme', type_series: '📺 Série',
    // profiles
    profiles_title: 'Perfis',
    profiles_sub: (n) => `${n} perfil${n !== 1 ? 's' : ''} na conta`,
    profiles_empty: 'Nenhum perfil encontrado — abra o IagoTV na sua TV para criar um',
    profiles_tip: '💡 Altere o nome e a cor de cada perfil aqui. As mudanças sincronizam automaticamente com a TV.',
    badge_primary: 'Principal', badge_locked: '🔒 Bloqueado',
    badge_uses_primary: 'Usa add-ons do principal',
    profile_name_label: 'Nome',
    profile_color_label: 'Cor do avatar',
    profile_save: 'Salvar perfil',
    profile_created: 'Perfil criado ✓',
    profile_deleted: 'Perfil excluído ✓',
    profile_saved: 'Perfil salvo ✓',
    profile_photo_label: 'Foto do perfil (URL)',
    profile_photo_hint: 'Cole uma URL de imagem (opcional). Vazio mantém a inicial com cor.',
    profile_photo_clear: 'Remover foto',
    profile_name_required: 'Digite um nome',
    profile_delete_confirm: 'Excluir este perfil e todos os seus dados?',
    profile_delete_disabled: 'Não é possível excluir o perfil principal',
    add_profile: 'Novo perfil',
    profile_max: 'Limite de 5 perfis atingido',
    uses_primary_addons: 'Usar add-ons do perfil principal',
    uses_primary_addons_desc: 'Este perfil compartilha os add-ons do perfil principal',
    // addons
    addons_title: 'Add-ons',
    addons_sub: (a, t) => `${a} ativo${a !== 1 ? 's' : ''} de ${t}`,
    addons_empty: 'Nenhum add-on instalado',
    addons_tip: '💡 Instale add-ons informando a URL do manifest (ex.: https://.../manifest.json).',
    badge_enabled: 'Ativo', badge_disabled: 'Desativado',
    addon_url_label: 'URL do add-on (manifest)',
    addon_install: 'Instalar',
    addon_installed: 'Add-on instalado ✓',
    addon_fetch_err: 'Não foi possível ler o manifest do add-on',
    addon_removed: 'Add-on removido ✓',
    addon_toggle_err: 'Falha ao atualizar add-on',
    remove: 'Remover',
    // catalogs
    catalogs_title: 'Catálogos',
    catalogs_sub: 'Listas exibidas na Home, Filmes, Séries ou ocultas',
    catalogs_empty: 'Nenhum catálogo configurado para este perfil',
    catalogs_tip: '💡 Adicione catálogos dos add-ons instalados e escolha onde eles aparecem: Home, Filmes, Séries ou oculto.',
    catalog_tab_note: (d) => `Listas que aparecem na aba ${d}. Use ↑ ↓ para reordenar.`,
    catalogs_tab_empty: 'Nenhuma lista nesta aba ainda — adicione catálogos acima.',
    drag_hint: 'Reordenar',
    dest_home: 'Home', dest_movies: 'Filmes', dest_series: 'Séries', dest_none: 'Oculto',
    dest_all: 'Tudo',
    catalog_enabled: 'Visível', catalog_disabled: 'Oculto',
    catalog_title_label: 'Título exibido',
    catalog_add_title: 'Adicionar catálogo',
    catalog_addon_label: 'Add-on',
    catalog_list_label: 'Lista do add-on',
    catalog_dest_label: 'Onde exibir',
    catalog_add: 'Adicionar',
    catalog_added: 'Catálogo adicionado ✓',
    catalog_removed: 'Catálogo removido ✓',
    catalog_saved: 'Catálogos salvos ✓',
    catalog_manifest_err: 'Não foi possível carregar os catálogos deste add-on',
    catalog_choose_addon: 'Escolha um add-on primeiro',
    move_up: 'Subir', move_down: 'Descer',
    // collections
    nav_collections: 'Coleções',
    collections_title: 'Coleções',
    collections_sub: (n) => `${n} coleç${n !== 1 ? 'ões' : 'ão'} no perfil`,
    collections_empty: 'Nenhuma coleção criada — crie a sua primeira coleção',
    collections_tip: '💡 Coleções agrupam listas (fontes de add-ons, TMDB ou Trakt) em abas na Home da TV.',
    add_collection: 'Nova coleção',
    col_title_label: 'Título da coleção',
    col_pin_top: 'Fixar no topo da Home',
    col_view_mode: 'Modo de exibição',
    col_view_tabbed: 'Abas',
    col_view_tabs_only: 'Somente abas',
    col_view_tiles: 'Grade',
    col_view_carousel: 'Carrossel',
    col_created: 'Coleção criada ✓',
    col_updated: 'Coleção salva ✓',
    col_deleted: 'Coleção excluída ✓',
    col_save: 'Salvar coleção',
    col_edit: 'Editar',
    col_remove: 'Excluir coleção',
    col_delete_confirm: 'Excluir esta coleção?',
    col_name_required: 'Digite um título',
    col_no_folders: 'Sem abas ainda — adicione abas e fontes',
    col_folders_label: 'Abas da coleção',
    col_add_folder: 'Adicionar aba',
    col_folder_title: 'Título da aba',
    col_folder_shape: 'Formato do bloco',
    col_folder_emoji: 'Emoji da capa (opcional)',
    col_folder_sources: 'Fontes da aba',
    col_add_source: 'Adicionar fonte',
    col_source_kind: 'Tipo de fonte',
    col_source_kind_addon: 'Add-on',
    col_source_kind_tmdb: 'TMDB',
    col_source_kind_trakt: 'Trakt',
    col_source_addon: 'Add-on',
    col_source_catalog: 'Lista do add-on',
    col_source_tmdb_type: 'Tipo TMDB',
    col_source_tmdb_list: 'Lista',
    col_source_tmdb_collection: 'Coleção',
    col_source_tmdb_company: 'Produtora',
    col_source_tmdb_network: 'Canal',
    col_source_tmdb_discover: 'Descobrir',
    col_source_tmdb_person: 'Pessoa',
    col_source_tmdb_id: 'ID TMDB',
    col_source_media_type: 'Tipo de mídia',
    col_source_media_movie: 'Filmes',
    col_source_media_tv: 'Séries',
    col_source_title: 'Título',
    col_source_trakt_id: 'ID da lista Trakt',
    col_source_sort: 'Ordenação',
    col_source_sort_popular: 'Populares',
    col_source_sort_rank: 'Ranking',
    col_source_sort_original: 'Original',
    col_source_sort_recent: 'Recentes',
    col_source_sort_asc: 'Crescente',
    col_source_sort_desc: 'Decrescente',
    col_source_remove: 'Remover fonte',
    col_folder_remove: 'Remover aba',
    col_error: 'Falha ao salvar coleção',
    col_add_to_home: 'Adicionar à Home',
    col_in_home: 'Na Home',
    col_add_collection_to_catalog: 'Adicionar coleção como lista',
    col_no_collections: 'Nenhuma coleção criada ainda',
    // iptv
    iptv_title: 'IPTV',
    iptv_sub: (n) => `${n} fonte${n !== 1 ? 's' : ''}`,
    iptv_empty: 'Nenhuma fonte IPTV configurada',
    iptv_tip: '💡 Adicione listas M3U ou servidores Xtream. Cada perfil tem suas próprias fontes.',
    iptv_active: 'Ativo', iptv_disabled: 'Desativado',
    iptv_add_title: 'Adicionar fonte IPTV',
    iptv_name_label: 'Nome',
    iptv_type_label: 'Tipo',
    iptv_type_m3u: 'M3U',
    iptv_type_xtream: 'Xtream',
    iptv_m3u_label: 'URL M3U',
    iptv_server_label: 'URL do servidor',
    iptv_user_label: 'Usuário',
    iptv_pass_label: 'Senha',
    iptv_epg_label: 'URL EPG (opcional)',
    iptv_add: 'Adicionar',
    iptv_added: 'Fonte IPTV adicionada ✓',
    iptv_removed: 'Fonte IPTV removida ✓',
    iptv_toggle_err: 'Falha ao atualizar fonte',
    iptv_invalid: 'Preencha os campos obrigatórios',
    // history
    history_title: 'Histórico de exibição',
    tab_movies: 'Filmes', tab_tv: 'Séries', tab_all: 'Tudo',
    history_empty: 'Sem histórico', history_err: 'Falha ao carregar',
    delete_err: 'Falha ao excluir', deleted_history: 'Removido do histórico ✓',
    // watchlist
    watchlist_title: 'Lista',
    watchlist_sub: (n) => `${n} item${n !== 1 ? 's' : ''}`,
    watchlist_empty: 'Sua lista está vazia',
    wl_movies: '🎬 Filmes', wl_tv: '📺 Séries',
    wl_remove: 'Remover', wl_remove_err: 'Falha ao remover',
    wl_removed: 'Removido da lista ✓',
    // settings
    settings_title: 'Ajustes', settings_sub: 'Configurações gerais do perfil',
    appearance: 'Aparência',
    oled_label: 'Fundo preto OLED', oled_desc: 'Fundo preto puro para economizar bateria em telas OLED',
    theme_label: 'Tema do app', layout_label: 'Layout da Home', font_label: 'Fonte',
    settings_profile_label: 'Perfil',
    account_section: 'Conta', user_id_label: 'ID do usuário',
    // time
    just_now: 'agora', m_ago: (m) => `há ${m} min`, h_ago: (h) => `há ${h} h`, d_ago: (d) => `há ${d} d`,
  },
  en: {
    nav_dashboard: 'Dashboard', nav_profiles: 'Profiles', nav_addons: 'Add-ons',
    nav_catalogs: 'Catalogs', nav_iptv: 'IPTV', nav_history: 'History',
    nav_watchlist: 'Watchlist', nav_settings: 'Settings',
    sign_out: 'Sign out', user_fallback: 'User', loading: 'Loading...',
    saved: 'Saved ✓', save_err: 'Failed to save', no_sync: 'No sync data',
    auth_sub: 'Manage your IagoTV account — profiles, add-ons, IPTV & history',
    auth_google: 'Continue with Google',
    dash_sub: 'A quick overview of your IagoTV account',
    stat_profiles: 'Profiles', stat_addons: 'Add-ons',
    stat_history: 'Watch History', stat_watchlist: 'Watchlist',
    recent_activity: 'Recent Activity', no_activity: 'No recent activity',
    type_movie: '🎬 Movie', type_series: '📺 Series',
    profiles_title: 'Profiles',
    profiles_sub: (n) => `${n} profile${n !== 1 ? 's' : ''} in account`,
    profiles_empty: 'No profiles found — open IagoTV on your TV to create one',
    profiles_tip: '💡 Edit the name and color of each profile here. Changes sync automatically to your TV.',
    badge_primary: 'Primary', badge_locked: '🔒 Locked',
    badge_uses_primary: 'Uses primary add-ons',
    profile_name_label: 'Name',
    profile_color_label: 'Avatar color',
    profile_save: 'Save profile',
    profile_created: 'Profile created ✓',
    profile_deleted: 'Profile deleted ✓',
    profile_saved: 'Profile saved ✓',
    profile_photo_label: 'Profile photo (URL)',
    profile_photo_hint: 'Paste an image URL (optional). Empty keeps the initial with color.',
    profile_photo_clear: 'Remove photo',
    profile_name_required: 'Enter a name',
    profile_delete_confirm: 'Delete this profile and all its data?',
    profile_delete_disabled: 'The primary profile cannot be deleted',
    add_profile: 'New profile',
    profile_max: '5 profile limit reached',
    uses_primary_addons: 'Use primary profile add-ons',
    uses_primary_addons_desc: 'This profile shares the add-ons of the primary profile',
    addons_title: 'Add-ons',
    addons_sub: (a, t) => `${a} active of ${t}`,
    addons_empty: 'No add-ons installed',
    addons_tip: '💡 Install add-ons by entering the manifest URL (e.g. https://.../manifest.json).',
    badge_enabled: 'Enabled', badge_disabled: 'Disabled',
    addon_url_label: 'Add-on URL (manifest)',
    addon_install: 'Install',
    addon_installed: 'Add-on installed ✓',
    addon_fetch_err: 'Could not read the add-on manifest',
    addon_removed: 'Add-on removed ✓',
    addon_toggle_err: 'Failed to update add-on',
    remove: 'Remove',
    catalogs_title: 'Catalogs',
    catalogs_sub: 'Lists shown on Home, Movies, Series or hidden',
    catalogs_empty: 'No catalogs configured for this profile',
    catalogs_tip: '💡 Add catalogs from your installed add-ons and choose where they appear: Home, Movies, Series or hidden.',
    catalog_tab_note: (d) => `Lists that appear on the ${d} tab. Use ↑ ↓ to reorder.`,
    catalogs_tab_empty: 'No lists on this tab yet — add catalogs above.',
    drag_hint: 'Reorder',
    dest_home: 'Home', dest_movies: 'Movies', dest_series: 'Series', dest_none: 'Hidden',
    dest_all: 'All',
    catalog_enabled: 'Visible', catalog_disabled: 'Hidden',
    catalog_title_label: 'Display title',
    catalog_add_title: 'Add catalog',
    catalog_addon_label: 'Add-on',
    catalog_list_label: 'Add-on list',
    catalog_dest_label: 'Where to show',
    catalog_add: 'Add',
    catalog_added: 'Catalog added ✓',
    catalog_removed: 'Catalog removed ✓',
    catalog_saved: 'Catalogs saved ✓',
    catalog_manifest_err: 'Could not load this add-on catalogs',
    catalog_choose_addon: 'Choose an add-on first',
    move_up: 'Move up', move_down: 'Move down',
    // collections
    nav_collections: 'Collections',
    collections_title: 'Collections',
    collections_sub: (n) => `${n} collection${n !== 1 ? 's' : ''} on profile`,
    collections_empty: 'No collections yet — create your first collection',
    collections_tip: '💡 Collections group lists (add-on, TMDB or Trakt sources) into tabs on your TV Home.',
    add_collection: 'New collection',
    col_title_label: 'Collection title',
    col_pin_top: 'Pin to top of Home',
    col_view_mode: 'View mode',
    col_view_tabbed: 'Tabs',
    col_view_tabs_only: 'Tabs only',
    col_view_tiles: 'Grid',
    col_view_carousel: 'Carousel',
    col_created: 'Collection created ✓',
    col_updated: 'Collection saved ✓',
    col_deleted: 'Collection deleted ✓',
    col_save: 'Save collection',
    col_edit: 'Edit',
    col_remove: 'Delete collection',
    col_delete_confirm: 'Delete this collection?',
    col_name_required: 'Enter a title',
    col_no_folders: 'No tabs yet — add tabs and sources',
    col_folders_label: 'Collection tabs',
    col_add_folder: 'Add tab',
    col_folder_title: 'Tab title',
    col_folder_shape: 'Tile shape',
    col_folder_emoji: 'Cover emoji (optional)',
    col_folder_sources: 'Tab sources',
    col_add_source: 'Add source',
    col_source_kind: 'Source type',
    col_source_kind_addon: 'Add-on',
    col_source_kind_tmdb: 'TMDB',
    col_source_kind_trakt: 'Trakt',
    col_source_addon: 'Add-on',
    col_source_catalog: 'Add-on list',
    col_source_tmdb_type: 'TMDB type',
    col_source_tmdb_list: 'List',
    col_source_tmdb_collection: 'Collection',
    col_source_tmdb_company: 'Company',
    col_source_tmdb_network: 'Network',
    col_source_tmdb_discover: 'Discover',
    col_source_tmdb_person: 'Person',
    col_source_tmdb_id: 'TMDB ID',
    col_source_media_type: 'Media type',
    col_source_media_movie: 'Movies',
    col_source_media_tv: 'TV Shows',
    col_source_title: 'Title',
    col_source_trakt_id: 'Trakt list ID',
    col_source_sort: 'Sort',
    col_source_sort_popular: 'Popular',
    col_source_sort_rank: 'Ranking',
    col_source_sort_original: 'Original',
    col_source_sort_recent: 'Recent',
    col_source_sort_asc: 'Ascending',
    col_source_sort_desc: 'Descending',
    col_source_remove: 'Remove source',
    col_folder_remove: 'Remove tab',
    col_error: 'Failed to save collection',
    col_add_to_home: 'Add to Home',
    col_in_home: 'On Home',
    col_add_collection_to_catalog: 'Add collection as list',
    col_no_collections: 'No collections created yet',
    iptv_title: 'IPTV',
    iptv_sub: (n) => `${n} source${n !== 1 ? 's' : ''}`,
    iptv_empty: 'No IPTV sources configured',
    iptv_tip: '💡 Add M3U playlists or Xtream servers. Each profile has its own sources.',
    iptv_active: 'Active', iptv_disabled: 'Disabled',
    iptv_add_title: 'Add IPTV source',
    iptv_name_label: 'Name',
    iptv_type_label: 'Type',
    iptv_type_m3u: 'M3U',
    iptv_type_xtream: 'Xtream',
    iptv_m3u_label: 'M3U URL',
    iptv_server_label: 'Server URL',
    iptv_user_label: 'Username',
    iptv_pass_label: 'Password',
    iptv_epg_label: 'EPG URL (optional)',
    iptv_add: 'Add',
    iptv_added: 'IPTV source added ✓',
    iptv_removed: 'IPTV source removed ✓',
    iptv_toggle_err: 'Failed to update source',
    iptv_invalid: 'Fill in the required fields',
    history_title: 'Watch History',
    tab_movies: 'Movies', tab_tv: 'TV Shows', tab_all: 'All',
    history_empty: 'No watch history', history_err: 'Failed to load',
    delete_err: 'Failed to delete', deleted_history: 'Removed from history ✓',
    watchlist_title: 'Watchlist',
    watchlist_sub: (n) => `${n} item${n !== 1 ? 's' : ''}`,
    watchlist_empty: 'Your watchlist is empty',
    wl_movies: '🎬 Movies', wl_tv: '📺 TV Shows',
    wl_remove: 'Remove', wl_remove_err: 'Failed to remove',
    wl_removed: 'Removed from watchlist ✓',
    settings_title: 'Settings', settings_sub: 'General profile settings',
    appearance: 'Appearance',
    oled_label: 'OLED Black Background', oled_desc: 'Pure black background to save battery on OLED screens',
    theme_label: 'App Theme', layout_label: 'Home Layout', font_label: 'Font',
    settings_profile_label: 'Profile',
    account_section: 'Account', user_id_label: 'User ID',
    just_now: 'just now', m_ago: (m) => `${m}m ago`, h_ago: (h) => `${h}h ago`, d_ago: (d) => `${d}d ago`,
  },
  he: {
    nav_dashboard: 'לוח בקרה', nav_profiles: 'פרופילים', nav_addons: 'הרחבות',
    nav_catalogs: 'קטלוגים', nav_iptv: 'IPTV', nav_history: 'היסטוריה',
    nav_watchlist: 'רשימת צפייה', nav_settings: 'הגדרות',
    sign_out: 'התנתק', user_fallback: 'משתמש', loading: 'טוען...',
    saved: 'נשמר ✓', save_err: 'שגיאה בשמירה', no_sync: 'אין נתוני סנכרון',
    auth_sub: 'נהל את חשבון ה-IagoTV שלך — פרופילים, הרחבות, IPTV והיסטוריה',
    auth_google: 'המשך עם Google',
    dash_sub: 'סקירה מהירה של חשבון ה-IagoTV שלך',
    stat_profiles: 'פרופילים', stat_addons: 'הרחבות',
    stat_history: 'היסטוריית צפייה', stat_watchlist: 'רשימת צפייה',
    recent_activity: 'פעילות אחרונה', no_activity: 'אין פעילות אחרונה',
    type_movie: '🎬 סרט', type_series: '📺 סדרה',
    profiles_title: 'פרופילים',
    profiles_sub: (n) => `${n} פרופילים בחשבון`,
    profiles_empty: 'אין פרופילים — פתח את IagoTV בטלוויזיה ליצירת פרופיל',
    profiles_tip: '💡 ערוך את השם והצבע של כל פרופיל כאן. השינויים מסונכרנים אוטומטית לטלוויזיה.',
    badge_primary: 'ראשי', badge_locked: '🔒 נעול',
    badge_uses_primary: 'משתמש בהרחבות הפרופיל הראשי',
    profile_name_label: 'שם',
    profile_color_label: 'צבע אווטאר',
    profile_save: 'שמור פרופיל',
    profile_created: 'פרופיל נוצר ✓',
    profile_deleted: 'פרופיל נמחק ✓',
    profile_saved: 'פרופיל נשמר ✓',
    profile_photo_label: 'תמונת פרופיל (כתובת)',
    profile_photo_hint: 'הדבק כתובת תמונה (אופציונלי). ריק ישאיר את האות הראשונה עם צבע.',
    profile_photo_clear: 'הסר תמונה',
    profile_name_required: 'הזן שם',
    profile_delete_confirm: 'למחוק פרופיל זה וכל הנתונים שלו?',
    profile_delete_disabled: 'לא ניתן למחוק את הפרופיל הראשי',
    add_profile: 'פרופיל חדש',
    profile_max: 'הגעת למגבלת 5 פרופילים',
    uses_primary_addons: 'השתמש בהרחבות הפרופיל הראשי',
    uses_primary_addons_desc: 'פרופיל זה חולק את ההרחבות של הפרופיל הראשי',
    addons_title: 'הרחבות',
    addons_sub: (a, total) => `${a} פעילות מתוך ${total}`,
    addons_empty: 'אין הרחבות מותקנות',
    addons_tip: '💡 התקן הרחבות על ידי הזנת כתובת ה-manifest (לדוגמה https://.../manifest.json).',
    badge_enabled: 'פעיל', badge_disabled: 'כבוי',
    addon_url_label: 'כתובת ההרחבה (manifest)',
    addon_install: 'התקן',
    addon_installed: 'הרחבה הותקנה ✓',
    addon_fetch_err: 'לא ניתן לקרוא את ה-manifest של ההרחבה',
    addon_removed: 'הרחבה הוסרה ✓',
    addon_toggle_err: 'שגיאה בעדכון הרחבה',
    remove: 'הסר',
    catalogs_title: 'קטלוגים',
    catalogs_sub: 'רשימות המוצגות ב-Home, סרטים, סדרות או מוסתרות',
    catalogs_empty: 'אין קטלוגים מוגדרים לפרופיל זה',
    catalogs_tip: '💡 הוסף קטלוגים מההרחבות המותקנות ובחר היכן הם יופיעו: Home, סרטים, סדרות או מוסתר.',
    catalog_tab_note: (d) => `רשימות המופיעות בכרטיסייה ${d}. השתמש ב-↑ ↓ כדי לסדר מחדש.`,
    catalogs_tab_empty: 'אין רשימות בכרטיסייה זו עדיין — הוסף קטלוגים למעלה.',
    drag_hint: 'סדר מחדש',
    dest_home: 'Home', dest_movies: 'סרטים', dest_series: 'סדרות', dest_none: 'מוסתר',
    dest_all: 'הכל',
    catalog_enabled: 'גלוי', catalog_disabled: 'מוסתר',
    catalog_title_label: 'כותרת תצוגה',
    catalog_add_title: 'הוסף קטלוג',
    catalog_addon_label: 'הרחבה',
    catalog_list_label: 'רשימת ההרחבה',
    catalog_dest_label: 'היכן להציג',
    catalog_add: 'הוסף',
    catalog_added: 'קטלוג נוסף ✓',
    catalog_removed: 'קטלוג הוסר ✓',
    catalog_saved: 'הקטלוגים נשמרו ✓',
    catalog_manifest_err: 'לא ניתן לטעון את הקטלוגים של הרחבה זו',
    catalog_choose_addon: 'בחר הרחבה קודם',
    move_up: 'העלה', move_down: 'הורד',
    // collections
    nav_collections: 'אוספים',
    collections_title: 'אוספים',
    collections_sub: (n) => `${n} אוספים בפרופיל`,
    collections_empty: 'אין אוספים עדיין — צור את האוסף הראשון שלך',
    collections_tip: '💡 אוספים מקבצים רשימות (מקורות הרחבות, TMDB או Trakt) לכרטיסיות בבית בטלוויזיה.',
    add_collection: 'אוסף חדש',
    col_title_label: 'כותרת האוסף',
    col_pin_top: 'נעוץ לראש הבית',
    col_view_mode: 'מצב תצוגה',
    col_view_tabbed: 'כרטיסיות',
    col_view_tabs_only: 'כרטיסיות בלבד',
    col_view_tiles: 'רשת',
    col_view_carousel: 'קרוסלה',
    col_created: 'האוסף נוצר ✓',
    col_updated: 'האוסף נשמר ✓',
    col_deleted: 'האוסף נמחק ✓',
    col_save: 'שמור אוסף',
    col_edit: 'ערוך',
    col_remove: 'מחק אוסף',
    col_delete_confirm: 'למחוק אוסף זה?',
    col_name_required: 'הזן כותרת',
    col_no_folders: 'אין כרטיסיות עדיין — הוסף כרטיסיות ומקורות',
    col_folders_label: 'כרטיסיות האוסף',
    col_add_folder: 'הוסף כרטיסייה',
    col_folder_title: 'כותרת הכרטיסייה',
    col_folder_shape: 'צורת אריח',
    col_folder_emoji: 'אימוג׳י לעטיפה (אופציונלי)',
    col_folder_sources: 'מקורות הכרטיסייה',
    col_add_source: 'הוסף מקור',
    col_source_kind: 'סוג מקור',
    col_source_kind_addon: 'הרחבה',
    col_source_kind_tmdb: 'TMDB',
    col_source_kind_trakt: 'Trakt',
    col_source_addon: 'הרחבה',
    col_source_catalog: 'רשימת ההרחבה',
    col_source_tmdb_type: 'סוג TMDB',
    col_source_tmdb_list: 'רשימה',
    col_source_tmdb_collection: 'אוסף',
    col_source_tmdb_company: 'חברה',
    col_source_tmdb_network: 'רשת',
    col_source_tmdb_discover: 'גלה',
    col_source_tmdb_person: 'אדם',
    col_source_tmdb_id: 'מזהה TMDB',
    col_source_media_type: 'סוג מדיה',
    col_source_media_movie: 'סרטים',
    col_source_media_tv: 'סדרות',
    col_source_title: 'כותרת',
    col_source_trakt_id: 'מזהה רשימת Trakt',
    col_source_sort: 'מיון',
    col_source_sort_popular: 'פופולרי',
    col_source_sort_rank: 'דירוג',
    col_source_sort_original: 'מקורי',
    col_source_sort_recent: 'אחרון',
    col_source_sort_asc: 'עולה',
    col_source_sort_desc: 'יורד',
    col_source_remove: 'הסר מקור',
    col_folder_remove: 'הסר כרטיסייה',
    col_error: 'שגיאה בשמירת האוסף',
    col_add_to_home: 'הוסף לבית',
    col_in_home: 'בבית',
    col_add_collection_to_catalog: 'הוסף אוסף כרשימה',
    col_no_collections: 'עדיין לא נוצרו אוספים',
    iptv_title: 'IPTV',
    iptv_sub: (n) => `${n} מקורות`,
    iptv_empty: 'אין מקורות IPTV מוגדרים',
    iptv_tip: '💡 הוסף רשימות M3U או שרתי Xtream. לכל פרופיל מקורות משלו.',
    iptv_active: 'פעיל', iptv_disabled: 'כבוי',
    iptv_add_title: 'הוסף מקור IPTV',
    iptv_name_label: 'שם',
    iptv_type_label: 'סוג',
    iptv_type_m3u: 'M3U',
    iptv_type_xtream: 'Xtream',
    iptv_m3u_label: 'כתובת M3U',
    iptv_server_label: 'כתובת שרת',
    iptv_user_label: 'שם משתמש',
    iptv_pass_label: 'סיסמה',
    iptv_epg_label: 'כתובת EPG (אופציונלי)',
    iptv_add: 'הוסף',
    iptv_added: 'מקור IPTV נוסף ✓',
    iptv_removed: 'מקור IPTV הוסר ✓',
    iptv_toggle_err: 'שגיאה בעדכון מקור',
    iptv_invalid: 'מלא את השדות הנדרשים',
    history_title: 'היסטוריית צפייה',
    tab_movies: 'סרטים', tab_tv: 'סדרות', tab_all: 'הכל',
    history_empty: 'אין היסטוריית צפייה', history_err: 'שגיאה בטעינה',
    delete_err: 'שגיאה במחיקה', deleted_history: 'הוסר מההיסטוריה ✓',
    watchlist_title: 'רשימת צפייה',
    watchlist_sub: (n) => `${n} פריטים`,
    watchlist_empty: 'רשימת הצפייה ריקה',
    wl_movies: '🎬 סרטים', wl_tv: '📺 סדרות',
    wl_remove: 'הסר', wl_remove_err: 'שגיאה במחיקה',
    wl_removed: 'הוסר מהרשימה ✓',
    settings_title: 'הגדרות', settings_sub: 'הגדרות כלליות לפרופיל',
    appearance: 'מראה',
    oled_label: 'רקע OLED שחור', oled_desc: 'רקע שחור לחלוטין לחיסכון בסוללה',
    theme_label: 'ערכת נושא', layout_label: 'פריסת בית', font_label: 'גופן',
    settings_profile_label: 'פרופיל',
    account_section: 'חשבון', user_id_label: 'מזהה משתמש',
    just_now: 'עכשיו', m_ago: (m) => `לפני ${m} דק׳`, h_ago: (h) => `לפני ${h} שע׳`, d_ago: (d) => `לפני ${d} ימים`,
  },
};

const LANGS = [
  { code: 'pt', label: 'Português' },
  { code: 'en', label: 'English' },
  { code: 'he', label: 'עברית' },
];

function detectLang() {
  const stored = localStorage.getItem('iagotv_lang');
  if (stored && STRINGS[stored]) return stored;
  const nav = (navigator.language || 'en').toLowerCase();
  if (nav.startsWith('pt')) return 'pt';
  if (nav.startsWith('he') || nav.startsWith('iw')) return 'he';
  return 'en';
}

let currentLang = detectLang();

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
  const authSub = document.querySelector('.auth-sub');
  if (authSub) authSub.textContent = t('auth_sub');
  const authBtn = document.querySelector('.btn-google');
  if (authBtn) authBtn.childNodes[authBtn.childNodes.length - 1].textContent = ' ' + t('auth_google');
  const langSelect = document.getElementById('lang-select');
  if (langSelect) langSelect.value = lang;
  if (state.session) {
    buildShell(state.session.user);
    renderSection();
  }
}

// ── State ─────────────────────────────────────────────────────────────────
let state = {
  session: null,
  userId: null,
  activeProfileId: 1,
  profiles: [],
  addons: [],
  iptv: [],
  watched: [],
  library: [],
  settings: {},
  catalogs: { hide_unreleased_content: false, items: [] },
  collections: [],
  catalogAddons: [], // addons with their manifest catalogs loaded
  activeSection: 'dashboard',
  historyTab: 'movies',
  catalogTab: 'home',
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

// ── Cloud Data Loading (IagoTV schema, per profile) ──────────────────────
async function loadData() {
  const pid = state.activeProfileId;
  const [profiles, addons, iptv, watched, library, settings, catalogs, collections] = await Promise.all([
    loadProfiles(),
    loadAddons(pid),
    loadIptv(pid),
    loadWatched(pid),
    loadLibrary(pid),
    loadSettingsBlob(pid),
    loadCatalogs(pid),
    loadCollections(pid),
  ]);
  state.profiles = profiles;
  state.addons = addons;
  state.iptv = iptv;
  state.watched = watched;
  state.library = library;
  state.settings = settings;
  state.catalogs = catalogs;
  state.collections = collections;
  state.catalogAddons = [];
  if (addons.length) {
    loadCatalogAddons(addons, pid);
  }
}

async function loadProfiles() {
  try {
    const { data, error } = await db.rpc('sync_pull_profiles');
    if (error) throw error;
    const list = (data ?? []).map(p => ({
      id: p.profile_index,
      name: p.name || `Profile ${p.profile_index}`,
      avatarColorHex: p.avatar_color_hex || '#8B5CF6',
      avatarUrl: p.avatar_url || '',
      avatarId: p.avatar_id || '',
      pinEnabled: p.pin_enabled === true,
      usesPrimaryAddons: p.uses_primary_addons === true,
    }));
    if (list.length && !list.some(p => p.id === state.activeProfileId)) {
      state.activeProfileId = list[0].id;
    }
    return list;
  } catch (e) {
    console.error('loadProfiles', e);
    return [];
  }
}

async function loadAddons(profileId) {
  try {
    let q = db.from('addons').select('*').eq('profile_id', profileId);
    const { data, error } = await q.order('sort_order', { ascending: true });
    if (error) throw error;
    return data ?? [];
  } catch (e) {
    console.error('loadAddons', e);
    return [];
  }
}

async function loadIptv(profileId) {
  try {
    let q = db.from('iptv_sources').select('*').eq('profile_id', profileId);
    const { data, error } = await q.order('sort_order', { ascending: true });
    if (error) throw error;
    return data ?? [];
  } catch (e) {
    console.error('loadIptv', e);
    return [];
  }
}

async function loadWatched(profileId) {
  try {
    let q = db.from('watched_items').select('*').eq('profile_id', profileId).order('watched_at', { ascending: false }).limit(200);
    const { data, error } = await q;
    if (error) throw error;
    return data ?? [];
  } catch (e) {
    console.error('loadWatched', e);
    return [];
  }
}

async function loadLibrary(profileId) {
  try {
    const { data, error } = await db.from('library_items').select('*').eq('profile_id', profileId).order('added_at', { ascending: false }).limit(200);
    if (error) throw error;
    return data ?? [];
  } catch (e) {
    console.error('loadLibrary', e);
    return [];
  }
}

async function loadSettingsBlob(profileId) {
  try {
    const { data, error } = await db.rpc('sync_pull_profile_settings_blob', {
      p_profile_id: profileId,
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

async function loadCatalogs(profileId) {
  try {
    const { data, error } = await db.rpc('sync_pull_home_catalog_settings', {
      p_profile_id: profileId,
      p_platform: 'home_catalog_shared',
    });
    if (error) throw error;
    const row = (data ?? [])[0];
    const settings = row?.settings_json;
    if (settings && Array.isArray(settings.items)) return settings;
    return { hide_unreleased_content: false, items: [] };
  } catch (e) {
    console.error('loadCatalogs', e);
    return { hide_unreleased_content: false, items: [] };
  }
}

async function loadCatalogAddons(addons, profileId) {
  const enriched = [];
  for (const addon of addons) {
    if (!addon.enabled) continue;
    let manifests = [];
    try {
      const base = addon.url.replace(/\/manifest\.json$/, '').replace(/\/+$/, '');
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 12000);
      const res = await fetch(base + '/manifest.json', { signal: ctrl.signal });
      clearTimeout(timer);
      if (res.ok) {
        const manifest = await res.json();
        manifests = Array.isArray(manifest.catalogs) ? manifest.catalogs : [];
      }
    } catch (e) {
      manifests = [];
    }
    enriched.push({
      ...addon,
      manifests,
      addonId: addon.id || addon.url,
    });
  }
  state.catalogAddons = enriched;
}

async function saveCatalogs(profileId) {
  try {
    const { error } = await db.rpc('sync_push_home_catalog_settings', {
      p_profile_id: profileId,
      p_settings_json: state.catalogs,
      p_platform: 'home_catalog_shared',
      p_origin_client_id: 'iagotv-companion',
    });
    if (error) throw error;
    return true;
  } catch (e) {
    console.error('saveCatalogs', e);
    return false;
  }
}

async function loadCollections(profileId) {
  try {
    const { data, error } = await db.rpc('sync_pull_collections', {
      p_profile_id: profileId,
    });
    if (error) throw error;
    const row = (data ?? [])[0];
    const list = row?.collections_json;
    if (Array.isArray(list)) return list;
    return [];
  } catch (e) {
    console.error('loadCollections', e);
    return [];
  }
}

async function saveCollections(profileId) {
  try {
    const { error } = await db.rpc('sync_push_collections', {
      p_profile_id: profileId,
      p_collections_json: state.collections,
      p_origin_client_id: 'iagotv-companion',
    });
    if (error) throw error;
    return true;
  } catch (e) {
    console.error('saveCollections', e);
    return false;
  }
}

function genId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

// ── Sections ──────────────────────────────────────────────────────────────
const sections = {
  dashboard: renderDashboard,
  profiles: renderProfiles,
  addons: renderAddons,
  catalogs: renderCatalogs,
  collections: renderCollections,
  iptv: renderIPTV,
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
  const profile = profiles.find(p => p.id === state.activeProfileId);

  main.innerHTML = `
    <div class="section-header">
      <div>
        <div class="section-title">${t('nav_dashboard')}</div>
        <div class="section-sub">${t('dash_sub')} — ${profile ? escapeHtml(profile.name) : ''}</div>
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

// ── Profiles (editable) ───────────────────────────────────────────────────
function renderProfileAvatar(profile, size = 'big') {
  const color = /^#[0-9a-fA-F]{6}$/.test(profile.avatarColorHex || '') ? profile.avatarColorHex : '#8B5CF6';
  const letter = escapeHtml((profile.name || '?')[0].toUpperCase());
  if (profile.avatarUrl && /^https?:\/\//i.test(profile.avatarUrl)) {
    return `<div class="profile-avatar-${size}" style="background:${color}22;color:${color};overflow:hidden"><img src="${safeUrl(profile.avatarUrl)}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:50%" onerror="this.parentNode.innerHTML='${letter}'"></div>`;
  }
  return `<div class="profile-avatar-${size}" style="background:${color}22;color:${color}">${letter}</div>`;
}

async function renderProfiles() {
  const main = document.getElementById('main-content');
  const profiles = state.profiles;

  const cards = profiles.length ? `
    <div class="profiles-grid">
      ${profiles.map(p => `
        <div class="profile-card ${p.id === 1 ? 'active-profile' : ''}" style="cursor:pointer" onclick="editProfile(${p.id})">
          ${renderProfileAvatar(p)}
          <div class="profile-name">${escapeHtml(p.name)}</div>
          <div style="display:flex;gap:6px;flex-wrap:wrap;justify-content:center">
            ${p.id === 1 ? `<span class="badge badge-gold">${t('badge_primary')}</span>` : ''}
            ${p.pinEnabled ? `<span class="badge badge-gray">${t('badge_locked')}</span>` : ''}
            ${p.usesPrimaryAddons && p.id !== 1 ? `<span class="badge badge-blue">${t('badge_uses_primary')}</span>` : ''}
          </div>
          <div style="font-size:12px;color:var(--text-muted)">✏️ ${t('profile_save')}</div>
        </div>
      `).join('')}
    </div>
    ${profiles.length < 5 ? `
      <button class="btn btn-ghost" style="margin-top:16px;width:100%;justify-content:center" onclick="createProfile()">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M12 5v14M5 12h14"/></svg>
        ${t('add_profile')}
      </button>
    ` : `<div style="font-size:12px;color:var(--text-muted);margin-top:16px;text-align:center">${t('profile_max')}</div>`}
    <div class="card" style="margin-top:16px"><div style="font-size:13px;color:var(--text-muted)">${t('profiles_tip')}</div></div>
  ` : emptyState(t('profiles_empty'));

  main.innerHTML = `
    <div class="section-header">
      <div><div class="section-title">${t('profiles_title')}</div><div class="section-sub">${t('profiles_sub', profiles.length)}</div></div>
    </div>
    ${cards}
    <div id="profile-editor"></div>
  `;
}

async function editProfile(profileId) {
  const profile = state.profiles.find(p => p.id === profileId);
  if (!profile) return;
  const editor = document.getElementById('profile-editor');
  if (!editor) return;
  const isPrimary = profile.id === 1;
  editor.innerHTML = `
    <div class="card" id="editor-card-${profile.id}">
      <div style="font-size:16px;font-weight:700;margin-bottom:16px">${escapeHtml(profile.name)} — ${t('profile_save')}</div>
      <div style="display:flex;gap:16px;align-items:center;margin-bottom:16px">
        ${renderProfileAvatar(profile)}
        <div style="flex:1">
          <div class="form-group" style="margin-bottom:0">
            <label class="form-label">${t('profile_name_label')}</label>
            <input class="form-input" id="pf-name-${profile.id}" value="${escapeHtml(profile.name)}">
          </div>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">${t('profile_photo_label')}</label>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <input class="form-input" id="pf-photo-${profile.id}" value="${escapeHtml(profile.avatarUrl || '')}" placeholder="https://example.com/foto.jpg" style="flex:1;min-width:200px">
          <button type="button" class="btn btn-ghost" onclick="clearProfilePhoto(${profile.id})">${t('profile_photo_clear')}</button>
        </div>
        <div class="form-hint">${t('profile_photo_hint')}</div>
      </div>
      <div class="form-group">
        <label class="form-label">${t('profile_color_label')}</label>
        <div class="color-swatches">
          ${PROFILE_COLORS.map(c => `
            <button type="button" class="color-swatch ${(profile.avatarColorHex || '').toLowerCase() === c.toLowerCase() ? 'selected' : ''}"
              data-color="${c}" onclick="pickProfileColor(${profile.id}, '${c}', this)">
              <span style="background:${c}"></span>
            </button>
          `).join('')}
        </div>
      </div>
      ${!isPrimary ? `
      <div class="form-group">
        <div style="display:flex;align-items:center;justify-content:space-between">
          <div>
            <div style="font-weight:600">${t('uses_primary_addons')}</div>
            <div style="font-size:12px;color:var(--text-muted);margin-top:2px">${t('uses_primary_addons_desc')}</div>
          </div>
          <label class="toggle">
            <input type="checkbox" id="pf-primary-${profile.id}" ${profile.usesPrimaryAddons ? 'checked' : ''}>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>` : ''}
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <button class="btn btn-primary" onclick="saveProfile(${profile.id})">${t('profile_save')}</button>
        ${!isPrimary ? `
          <button class="btn btn-danger" onclick="deleteProfile(${profile.id})">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/></svg>
            ${t('remove')}
          </button>
        ` : ''}
      </div>
    </div>
  `;
  editor.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function pickProfileColor(profileId, color, btn) {
  const editor = document.getElementById('editor-card-' + profileId);
  if (editor) {
    editor.querySelectorAll('.color-swatch').forEach(s => s.classList.toggle('selected', s.dataset.color.toLowerCase() === color.toLowerCase()));
  }
  const hidden = document.getElementById('pf-color-' + profileId);
  if (hidden) hidden.value = color;
}

function clearProfilePhoto(profileId) {
  const input = document.getElementById('pf-photo-' + profileId);
  if (input) input.value = '';
}

async function createProfile() {
  if (state.profiles.length >= 5) { toast(t('profile_max'), 'err'); return; }
  const used = new Set(state.profiles.map(p => p.id));
  const nextId = [2, 3, 4, 5].find(id => !used.has(id));
  if (!nextId) return;
  const name = prompt(t('profile_name_label'));
  if (!name || !name.trim()) { toast(t('profile_name_required'), 'err'); return; }
  try {
    const p = {
      profile_index: nextId,
      name: name.trim(),
      avatar_color_hex: PROFILE_COLORS[0],
      uses_primary_addons: false,
      uses_primary_plugins: false,
    };
    const { error } = await db.rpc('sync_push_profiles', {
      p_profiles: [p],
      p_client_max_profiles: 5,
      p_origin_client_id: 'iagotv-companion',
    });
    if (error) throw error;
    toast(t('profile_created'));
    state.activeProfileId = nextId;
    await loadData();
    await renderSection();
  } catch (e) {
    console.error('createProfile', e);
    toast(t('save_err'), 'err');
  }
}

async function saveProfile(profileId) {
  const profile = state.profiles.find(p => p.id === profileId);
  if (!profile) return;
  const name = (document.getElementById('pf-name-' + profileId)?.value || '').trim();
  if (!name) { toast(t('profile_name_required'), 'err'); return; }
  let color = profile.avatarColorHex;
  const colorInput = document.getElementById('pf-color-' + profileId);
  if (colorInput && colorInput.value) color = colorInput.value;
  const selectedSwatch = document.querySelector(`#editor-card-${profileId} .color-swatch.selected`);
  if (selectedSwatch) color = selectedSwatch.dataset.color;
  const usesPrimary = profileId !== 1 && document.getElementById('pf-primary-' + profileId)?.checked === true;
  const avatarUrl = (document.getElementById('pf-photo-' + profileId)?.value || '').trim();

  try {
    const p = {
      profile_index: profileId,
      name,
      avatar_color_hex: color,
      uses_primary_addons: usesPrimary,
      uses_primary_plugins: false,
    };
    if (avatarUrl && /^https?:\/\//i.test(avatarUrl)) {
      p.avatar_url = avatarUrl;
      p.avatar_id = null;
    } else {
      p.avatar_url = null;
    }
    const { error } = await db.rpc('sync_push_profiles', {
      p_profiles: [p],
      p_client_max_profiles: 5,
      p_origin_client_id: 'iagotv-companion',
    });
    if (error) throw error;
    toast(t('profile_saved'));
    await loadData();
    await renderSection();
  } catch (e) {
    console.error('saveProfile', e);
    toast(t('save_err'), 'err');
  }
}

async function deleteProfile(profileId) {
  if (profileId === 1) { toast(t('profile_delete_disabled'), 'err'); return; }
  if (!confirm(t('profile_delete_confirm'))) return;
  try {
    const { error } = await db.rpc('sync_delete_profile_data', {
      p_profile_id: profileId,
      p_origin_client_id: 'iagotv-companion',
    });
    if (error) throw error;
    toast(t('profile_deleted'));
    if (state.activeProfileId === profileId) state.activeProfileId = 1;
    await loadData();
    await renderSection();
  } catch (e) {
    console.error('deleteProfile', e);
    toast(t('save_err'), 'err');
  }
}

// ── Addons (editable) ─────────────────────────────────────────────────────
function addonIcon(a) {
  const logo = safeUrl(a.logo || a.logo_url || '');
  if (logo) return `<img src="${logo}" alt="" onerror="this.style.display='none'">`;
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 9h6M9 12h6M9 15h4"/></svg>`;
}

async function renderAddons() {
  const main = document.getElementById('main-content');
  const addons = state.addons;

  main.innerHTML = `
    <div class="section-header">
      <div><div class="section-title">${t('addons_title')}</div><div class="section-sub">${t('addons_sub', addons.filter(a=>a.enabled).length, addons.length)}</div></div>
    </div>

    <div class="card">
      <div style="font-size:16px;font-weight:700;margin-bottom:16px">${t('addon_install')}</div>
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <input class="form-input" id="addon-url" style="flex:1;min-width:220px" placeholder="https://example.com/manifest.json">
        <button class="btn btn-primary" onclick="installAddon()">${t('addon_install')}</button>
      </div>
    </div>

    ${addons.length === 0 ? emptyState(t('addons_empty')) : `
    <div class="card" style="padding:0 20px">
      ${addons.map(a => `
        <div class="list-item">
          <div class="item-icon">${addonIcon(a)}</div>
          <div class="item-info">
            <div class="item-title">${escapeHtml(a.name || a.url)}</div>
            <div class="item-sub" style="font-family:monospace;font-size:11px;max-width:420px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${escapeHtml(a.url)}</div>
          </div>
          <div style="display:flex;gap:8px;align-items:center">
            <label class="toggle" title="${a.enabled ? t('badge_enabled') : t('badge_disabled')}">
              <input type="checkbox" ${a.enabled ? 'checked' : ''} onchange="toggleAddon('${escapeAttr(a.id)}', this.checked)">
              <span class="toggle-slider"></span>
            </label>
            <button class="btn btn-danger" style="padding:6px 10px" onclick="removeAddon('${escapeAttr(a.id)}')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/></svg>
            </button>
          </div>
        </div>
      `).join('')}
    </div>`}

    <div class="card" style="margin-top:16px">
      <div style="font-size:13px;color:var(--text-muted)">${t('addons_tip')}</div>
    </div>
  `;
}

async function installAddon() {
  const input = document.getElementById('addon-url');
  const raw = (input?.value || '').trim();
  if (!raw) return;
  let url = raw;
  if (url.startsWith('stremio://')) url = url.replace('stremio://', 'https://');
  if (!/^https?:\/\//i.test(url)) url = 'https://' + url;
  if (!/\/manifest\.json$/i.test(url)) url = url.replace(/\/+$/, '') + '/manifest.json';

  let name = null;
  try {
    const base = url.replace(/\/manifest\.json$/i, '').replace(/\/+$/, '');
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 12000);
    const res = await fetch(base + '/manifest.json', { signal: ctrl.signal });
    clearTimeout(timer);
    if (res.ok) {
      const manifest = await res.json();
      name = manifest.name || null;
    } else {
      toast(t('addon_fetch_err'), 'err');
      return;
    }
  } catch (e) {
    toast(t('addon_fetch_err'), 'err');
    return;
  }

  try {
    const pid = state.activeProfileId;
    const sortOrder = state.addons.length;
    const { error } = await db.from('addons').insert({
      user_id: state.userId,
      profile_id: pid,
      url,
      name,
      enabled: true,
      sort_order: sortOrder,
    });
    if (error) throw error;
    await db.rpc('emit_sync_invalidation', { p_profile_id: pid, p_surface: 'addons', p_origin_client_id: 'iagotv-companion' });
    toast(t('addon_installed'));
    if (input) input.value = '';
    await loadData();
    await renderSection();
  } catch (e) {
    console.error('installAddon', e);
    toast(t('save_err'), 'err');
  }
}

async function toggleAddon(id, enabled) {
  try {
    const { error } = await db.from('addons').update({ enabled }).eq('id', id);
    if (error) throw error;
    await db.rpc('emit_sync_invalidation', { p_profile_id: state.activeProfileId, p_surface: 'addons', p_origin_client_id: 'iagotv-companion' });
    const addon = state.addons.find(a => a.id === id);
    if (addon) addon.enabled = enabled;
    toast(t('saved'));
  } catch (e) {
    console.error('toggleAddon', e);
    toast(t('addon_toggle_err'), 'err');
    await loadData();
    await renderSection();
  }
}

async function removeAddon(id) {
  if (!confirm(t('addon_removed'))) return;
  try {
    const { error } = await db.from('addons').delete().eq('id', id);
    if (error) throw error;
    await db.rpc('emit_sync_invalidation', { p_profile_id: state.activeProfileId, p_surface: 'addons', p_origin_client_id: 'iagotv-companion' });
    toast(t('addon_removed'));
    await loadData();
    await renderSection();
  } catch (e) {
    console.error('removeAddon', e);
    toast(t('save_err'), 'err');
  }
}

// ── Catalogs (Home / Movies / Series) ────────────────────────────────────
function catalogItemDisplayName(item) {
  if (item.is_collection) return item.custom_title || item.name || t('nav_collections');
  if (item.custom_title && item.custom_title.trim()) return item.custom_title;
  return item.name || `${item.addon_id} · ${item.catalog_id}`;
}

function catalogItemSub(item) {
  if (item.is_collection) {
    const collection = state.collections.find(c => c.id === item.collection_id);
    const folderCount = collection?.folders?.length || 0;
    return `${t('nav_collections')} · ${folderCount} aba${folderCount !== 1 ? 's' : ''}`;
  }
  const addon = state.catalogAddons.find(a => a.addonId === item.addon_id || a.id === item.addon_id);
  const addonName = addon?.name || item.addon_id || '';
  const type = item.type || '';
  const parts = [];
  if (addonName) parts.push(addonName);
  if (type) parts.push(type === 'movie' ? t('type_movie') : type === 'series' ? t('type_series') : type);
  return parts.join(' · ');
}

function catalogDestinationLabel(dest) {
  const map = {
    home: t('dest_home'),
    movies: t('dest_movies'),
    series: t('dest_series'),
    none: t('dest_none'),
    all: t('dest_all'),
  };
  return map[dest] || t('dest_home');
}

async function renderCatalogs() {
  const main = document.getElementById('main-content');
  const items = state.catalogs.items || [];
  const addonOptions = state.catalogAddons.length
    ? state.catalogAddons.map(a => `<option value="${escapeAttr(a.id)}">${escapeHtml(a.name || a.url)}</option>`).join('')
    : `<option value="">—</option>`;

  const tabs = [
    { id: 'home', label: t('dest_home'), icon: '<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>' },
    { id: 'movies', label: t('dest_movies'), icon: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>' },
    { id: 'series', label: t('dest_series'), icon: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 9h6M9 12h6M9 15h4"/>' },
    { id: 'none', label: t('dest_none'), icon: '<circle cx="12" cy="12" r="10"/><path d="M4.93 4.93l14.14 14.14"/>' },
  ];

  const visibleItems = items.filter(i => (i.destination || 'home') === state.catalogTab);
  const tabCounts = {};
  tabs.forEach(tb => { tabCounts[tb.id] = items.filter(i => (i.destination || 'home') === tb.id).length; });

  main.innerHTML = `
    <div class="section-header">
      <div><div class="section-title">${t('catalogs_title')}</div><div class="section-sub">${t('catalogs_sub')}</div></div>
    </div>

    <div class="tabs catalog-tabs">
      ${tabs.map(tb => `
        <button class="tab ${state.catalogTab === tb.id ? 'active' : ''}" onclick="state.catalogTab='${tb.id}';renderSection()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="14" height="14">${tb.icon}</svg>
          ${tb.label}
          <span class="tab-count">${tabCounts[tb.id] || 0}</span>
        </button>
      `).join('')}
    </div>

    <div class="card">
      <div style="font-size:16px;font-weight:700;margin-bottom:12px">${t('catalog_add_title')} → ${t('dest_' + state.catalogTab)}</div>
      ${state.collections.length ? `
      <div class="form-group" style="margin-bottom:12px">
        <label class="form-label">${t('col_add_collection_to_catalog')}</label>
        <div style="display:flex;gap:10px;flex-wrap:wrap">
          <select class="form-select" id="catalog-collection" style="flex:1;min-width:180px">
            ${state.collections.map(c => `<option value="${escapeAttr(c.id)}">${escapeHtml(c.title)}</option>`).join('')}
          </select>
          <button class="btn btn-primary" onclick="addCollectionAsCatalog()">${t('catalog_add')}</button>
        </div>
      </div>
      <div style="font-size:12px;color:var(--text-muted);margin-bottom:14px">— ${t('catalogs_tip')} —</div>` : ''}
      <div class="form-group" style="margin-bottom:12px">
        <label class="form-label">${t('catalog_addon_label')}</label>
        <select class="form-select" id="catalog-addon" onchange="onCatalogAddonChange()">
          <option value="">${t('catalog_choose_addon')}</option>
          ${addonOptions}
        </select>
      </div>
      <div class="form-group" style="margin-bottom:12px;display:none" id="catalog-list-group">
        <label class="form-label">${t('catalog_list_label')}</label>
        <select class="form-select" id="catalog-list"></select>
      </div>
      <button class="btn btn-primary" onclick="addCatalogItem()">${t('catalog_add')}</button>
    </div>

    ${items.length === 0 ? emptyState(t('catalogs_empty')) : `
    <div class="catalog-tab-note">${t('catalog_tab_note', state.catalogTab)}</div>
    <div class="card" style="padding:0 20px">
      ${visibleItems.length === 0 ? emptyState(t('catalogs_tab_empty')) : visibleItems.map((item, idx) => `
        <div class="list-item" style="flex-wrap:wrap" id="cat-${escapeAttr(item.addon_id)}-${escapeAttr(item.catalog_id)}">
          <div class="item-drag-handle" title="${t('drag_hint')}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></svg>
          </div>
          <div style="display:flex;gap:10px;flex-direction:column;flex:1;min-width:200px">
            <div class="item-title">${escapeHtml(catalogItemDisplayName(item))}</div>
            <div class="item-sub">${escapeHtml(catalogItemSub(item))}</div>
          </div>
          <div style="display:flex;flex-direction:column;gap:6px;align-items:flex-end">
            <div style="display:flex;gap:6px;align-items:center">
              <label class="toggle" title="${item.enabled !== false ? t('catalog_enabled') : t('catalog_disabled')}">
                <input type="checkbox" ${item.enabled !== false ? 'checked' : ''} onchange="setCatalogEnabled(${idx}, this.checked)">
                <span class="toggle-slider"></span>
              </label>
              <select class="form-select" style="width:auto;padding:6px 10px;font-size:12px" onchange="setCatalogDest(${idx}, this.value)">
                <option value="home" ${item.destination === 'home' ? 'selected' : ''}>${t('dest_home')}</option>
                <option value="movies" ${item.destination === 'movies' ? 'selected' : ''}>${t('dest_movies')}</option>
                <option value="series" ${item.destination === 'series' ? 'selected' : ''}>${t('dest_series')}</option>
                <option value="none" ${item.destination === 'none' ? 'selected' : ''}>${t('dest_none')}</option>
              </select>
            </div>
            <div style="display:flex;gap:6px;align-items:center">
              <button class="btn btn-ghost" style="padding:4px 8px;font-size:11px" onclick="moveCatalog(${idx}, -1)" ${idx === 0 ? 'disabled' : ''}>↑</button>
              <button class="btn btn-ghost" style="padding:4px 8px;font-size:11px" onclick="moveCatalog(${idx}, 1)" ${idx === visibleItems.length - 1 ? 'disabled' : ''}>↓</button>
              <button class="btn btn-danger" style="padding:4px 10px;font-size:11px" onclick="removeCatalogItem(${idx})">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/></svg>
              </button>
            </div>
          </div>
        </div>
      `).join('')}
    </div>`}

    <div class="card" style="margin-top:16px">
      <div style="font-size:13px;color:var(--text-muted)">${t('catalogs_tip')}</div>
    </div>
  `;
}

function onCatalogAddonChange() {
  const addonId = document.getElementById('catalog-addon')?.value;
  const listGroup = document.getElementById('catalog-list-group');
  const list = document.getElementById('catalog-list');
  if (!listGroup || !list) return;
  if (!addonId) {
    listGroup.style.display = 'none';
    list.innerHTML = '';
    return;
  }
  const addon = state.catalogAddons.find(a => a.id === addonId || a.addonId === addonId);
  if (!addon || !addon.manifests.length) {
    listGroup.style.display = 'none';
    list.innerHTML = `<option value="">${t('catalog_manifest_err')}</option>`;
    return;
  }
  listGroup.style.display = 'block';
  list.innerHTML = addon.manifests.map(c => `
    <option value="${escapeAttr(c.id)}" data-name="${escapeAttr(c.name || c.id)}" data-type="${escapeAttr(c.type)}">
      ${escapeHtml(c.name || c.id)} (${escapeHtml(c.type)})
    </option>
  `).join('');
}

async function addCatalogItem() {
  const addonId = document.getElementById('catalog-addon')?.value;
  const list = document.getElementById('catalog-list');
  const dest = state.catalogTab || 'home';
  if (!addonId || !list || !list.value) { toast(t('catalog_choose_addon'), 'err'); return; }
  const addon = state.catalogAddons.find(a => a.id === addonId || a.addonId === addonId);
  if (!addon) { toast(t('catalog_manifest_err'), 'err'); return; }
  const option = list.selectedOptions[0];
  const catalogId = list.value;
  const type = option?.dataset?.type || '';
  const name = option?.dataset?.name || catalogId;

  const existing = (state.catalogs.items || []).find(i =>
    i.addon_id === addon.addonId && i.catalog_id === catalogId && i.type === type && !i.is_collection
  );
  if (existing) { toast(t('catalog_added')); return; }

  const items = state.catalogs.items || [];
  items.push({
    addon_id: addon.addonId,
    type,
    catalog_id: catalogId,
    enabled: true,
    order: items.length,
    custom_title: '',
    is_collection: false,
    collection_id: '',
    destination: dest,
    name,
  });
  normalizeCatalogOrder();
  state.catalogs.items = items;
  const ok = await saveCatalogs(state.activeProfileId);
  toast(ok ? t('catalog_added') : t('save_err'), ok ? 'ok' : 'err');
  await loadData();
  await renderSection();
}

async function addCollectionAsCatalog() {
  const select = document.getElementById('catalog-collection');
  const collectionId = select?.value;
  if (!collectionId) { toast(t('col_no_collections'), 'err'); return; }
  const collection = state.collections.find(c => c.id === collectionId);
  if (!collection) return;
  const dest = state.catalogTab || 'home';
  const items = state.catalogs.items || [];
  const existing = items.find(i => i.is_collection && i.collection_id === collectionId);
  if (existing) { toast(t('catalog_added')); return; }
  items.push({
    addon_id: '',
    type: '',
    catalog_id: '',
    enabled: true,
    order: items.length,
    custom_title: collection.title || '',
    is_collection: true,
    collection_id: collection.id,
    destination: dest,
    name: collection.title || t('nav_collections'),
  });
  normalizeCatalogOrder();
  state.catalogs.items = items;
  const ok = await saveCatalogs(state.activeProfileId);
  toast(ok ? t('catalog_added') : t('save_err'), ok ? 'ok' : 'err');
  await loadData();
  await renderSection();
}

async function setCatalogEnabled(idx, enabled) {
  const items = visibleCatalogItems();
  const item = items[idx];
  if (!item) return;
  item.enabled = enabled;
  const ok = await saveCatalogs(state.activeProfileId);
  toast(ok ? t('catalog_saved') : t('save_err'), ok ? 'ok' : 'err');
  if (!ok) await loadData();
}

async function setCatalogDest(idx, dest) {
  const items = visibleCatalogItems();
  const item = items[idx];
  if (!item) return;
  item.destination = dest;
  normalizeCatalogOrder();
  const ok = await saveCatalogs(state.activeProfileId);
  toast(ok ? t('catalog_saved') : t('save_err'), ok ? 'ok' : 'err');
  await loadData();
  await renderSection();
}

function visibleCatalogItems() {
  return (state.catalogs.items || []).filter(i => (i.destination || 'home') === state.catalogTab);
}

function normalizeCatalogOrder() {
  // Reorder global items so each destination group keeps contiguous order
  // (home → movies → series → none), preserving relative order within a group.
  const items = state.catalogs.items || [];
  const destOrder = ['home', 'movies', 'series', 'none'];
  const grouped = destOrder
    .map(d => items.filter(i => (i.destination || 'home') === d))
    .flat();
  grouped.forEach((it, i) => { it.order = i; });
  state.catalogs.items = grouped;
}

async function moveCatalog(idx, dir) {
  const items = visibleCatalogItems();
  const target = idx + dir;
  if (target < 0 || target >= items.length) return;
  const tmp = items[idx];
  items[idx] = items[target];
  items[target] = tmp;
  normalizeCatalogOrder();
  const ok = await saveCatalogs(state.activeProfileId);
  toast(ok ? t('catalog_saved') : t('save_err'), ok ? 'ok' : 'err');
  await loadData();
  await renderSection();
}

async function removeCatalogItem(idx) {
  const items = visibleCatalogItems();
  const item = items[idx];
  if (!item) return;
  if (!confirm(t('catalog_removed'))) return;
  const allItems = state.catalogs.items || [];
  const realIdx = allItems.indexOf(item);
  if (realIdx >= 0) allItems.splice(realIdx, 1);
  normalizeCatalogOrder();
  const ok = await saveCatalogs(state.activeProfileId);
  toast(ok ? t('catalog_removed') : t('save_err'), ok ? 'ok' : 'err');
  await loadData();
  await renderSection();
}

// ── Collections (editable) ────────────────────────────────────────────────
const COL_VIEW_MODES = [
  { value: 'TABBED_GRID', label: null, key: 'col_view_tabbed' },
  { value: 'ROWS', label: null, key: 'col_view_tabs_only' },
  { value: 'FOLLOW_LAYOUT', label: null, key: 'col_view_tiles' },
];
const COL_TILE_SHAPES = ['SQUARE', 'POSTER', 'LANDSCAPE'];
const COL_TMDB_TYPES = [
  { value: 'LIST', key: 'col_source_tmdb_list' },
  { value: 'COLLECTION', key: 'col_source_tmdb_collection' },
  { value: 'COMPANY', key: 'col_source_tmdb_company' },
  { value: 'NETWORK', key: 'col_source_tmdb_network' },
  { value: 'DISCOVER', key: 'col_source_tmdb_discover' },
  { value: 'PERSON', key: 'col_source_tmdb_person' },
  { value: 'DIRECTOR', key: 'col_source_tmdb_director' },
];
const COL_TMDB_SORTS = [
  { value: 'popularity.desc', key: 'col_source_sort_popular' },
  { value: 'vote_average.desc', key: 'col_source_sort_rank' },
  { value: 'vote_count.desc', key: 'col_source_sort_popular' },
  { value: 'primary_release_date.desc', key: 'col_source_sort_recent' },
  { value: 'first_air_date.desc', key: 'col_source_sort_recent' },
];
const COL_TRAKT_SORTS = [
  { value: 'rank', key: 'col_source_sort_rank' },
  { value: 'popularity', key: 'col_source_sort_popular' },
  { value: 'released', key: 'col_source_sort_recent' },
  { value: 'title', key: 'col_source_title' },
];
const COL_MEDIA_TYPES = [
  { value: 'MOVIE', key: 'col_source_media_movie' },
  { value: 'TV', key: 'col_source_media_tv' },
];

function colViewModeLabel(value) {
  const item = COL_VIEW_MODES.find(m => m.value === value);
  return item ? t(item.key) : value;
}

function sourceKindLabel(provider) {
  if (provider === 'addon') return t('col_source_kind_addon');
  if (provider === 'tmdb') return t('col_source_kind_tmdb');
  if (provider === 'trakt') return t('col_source_kind_trakt');
  return provider;
}

function sourceSummary(src) {
  if (!src) return '';
  if (src.provider === 'addon') {
    const addon = state.catalogAddons.find(a => a.addonId === src.addonId || a.id === src.addonId);
    return `${addon?.name || src.addonId} · ${src.catalogId}${src.type ? ' (' + src.type + ')' : ''}`;
  }
  if (src.provider === 'tmdb') {
    return `TMDB · ${src.title || src.tmdbSourceType}${src.tmdbId ? ' #' + src.tmdbId : ''}`;
  }
  if (src.provider === 'trakt') {
    return `Trakt · ${src.title || src.traktListId}${src.mediaType ? ' · ' + src.mediaType : ''}`;
  }
  return '';
}

async function renderCollections() {
  const main = document.getElementById('main-content');
  const collections = state.collections;
  const catalogs = state.catalogs.items || [];

  main.innerHTML = `
    <div class="section-header">
      <div><div class="section-title">${t('collections_title')}</div><div class="section-sub">${t('collections_sub', collections.length)}</div></div>
    </div>

    ${collections.length === 0 ? emptyState(t('collections_empty')) : `
    <div class="card" style="padding:0 20px">
      ${collections.map(c => {
        const folderCount = c.folders?.length || 0;
        const inHome = catalogs.some(i => i.is_collection && i.collection_id === c.id);
        return `
        <div class="list-item" style="flex-wrap:wrap">
          <div class="item-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 7h10M7 12h10M7 17h6"/></svg>
          </div>
          <div class="item-info">
            <div class="item-title">${escapeHtml(c.title)}</div>
            <div class="item-sub">${folderCount} aba${folderCount !== 1 ? 's' : ''} · ${colViewModeLabel(c.viewMode)} ${c.pinToTop ? '· 📌 ' + t('col_pin_top') : ''}</div>
          </div>
          <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
            ${inHome ? `<span class="badge badge-gold">${t('col_in_home')}</span>` : ''}
            <button class="btn btn-ghost" style="padding:6px 12px" onclick="openCollectionEditor('${escapeAttr(c.id)}')">✏️ ${t('col_edit')}</button>
            <button class="btn btn-primary" style="padding:6px 12px" onclick="toggleCollectionOnHome('${escapeAttr(c.id)}')">${inHome ? '−' : '+'} ${t('col_add_to_home')}</button>
            <button class="btn btn-danger" style="padding:6px 10px" onclick="deleteCollection('${escapeAttr(c.id)}')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/></svg>
            </button>
          </div>
        </div>`;
      }).join('')}
    </div>`}

    <button class="btn btn-primary" style="margin-top:16px;justify-content:center;width:100%" onclick="createCollection()">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M12 5v14M5 12h14"/></svg>
      ${t('add_collection')}
    </button>

    <div id="collection-editor"></div>

    <div class="card" style="margin-top:16px"><div style="font-size:13px;color:var(--text-muted)">${t('collections_tip')}</div></div>
  `;
}

async function createCollection() {
  const collection = {
    id: genId(),
    title: '',
    backdropImageUrl: null,
    pinToTop: false,
    focusGlowEnabled: true,
    viewMode: 'TABBED_GRID',
    showAllTab: true,
    folders: [],
  };
  state.collections.push(collection);
  await renderCollections();
  openCollectionEditor(collection.id);
}

function openCollectionEditor(collectionId) {
  const collection = state.collections.find(c => c.id === collectionId);
  if (!collection) return;
  const editor = document.getElementById('collection-editor');
  if (!editor) return;
  editor.innerHTML = `
    <div class="card" id="col-editor-${escapeAttr(collection.id)}">
      <div style="font-size:16px;font-weight:700;margin-bottom:16px">${escapeHtml(collection.title) || t('col_edit')}</div>

      <div class="form-group">
        <label class="form-label">${t('col_title_label')}</label>
        <input class="form-input" id="col-title-${escapeAttr(collection.id)}" value="${escapeHtml(collection.title)}">
      </div>

      <div class="form-group">
        <div style="display:flex;align-items:center;justify-content:space-between">
          <div>
            <div style="font-weight:600">${t('col_pin_top')}</div>
            <div style="font-size:12px;color:var(--text-muted);margin-top:2px">${t('col_in_home')}</div>
          </div>
          <label class="toggle">
            <input type="checkbox" id="col-pin-${escapeAttr(collection.id)}" ${collection.pinToTop ? 'checked' : ''}>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">${t('col_view_mode')}</label>
        <select class="form-select" id="col-mode-${escapeAttr(collection.id)}">
          ${COL_VIEW_MODES.map(m => `<option value="${m.value}" ${collection.viewMode === m.value ? 'selected' : ''}>${t(m.key)}</option>`).join('')}
        </select>
      </div>

      <div style="font-size:13px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.5px;margin:18px 0 12px">${t('col_folders_label')}</div>
      <div id="col-folders-${escapeAttr(collection.id)}">
        ${(collection.folders || []).map((folder, fi) => renderFolderEditor(collection.id, folder, fi)).join('')}
      </div>
      <button class="btn btn-ghost" onclick="addFolderToCollection('${escapeAttr(collection.id)}')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M12 5v14M5 12h14"/></svg>
        ${t('col_add_folder')}
      </button>

      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:20px">
        <button class="btn btn-primary" onclick="saveCollectionEditor('${escapeAttr(collection.id)}')">${t('col_save')}</button>
      </div>
    </div>
  `;
  editor.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function renderFolderEditor(collectionId, folder, fi) {
  const sources = folder.sources || [];
  return `
    <div class="folder-editor" data-folder-id="${escapeAttr(folder.id)}">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
        <div style="font-weight:600;font-size:14px">${escapeHtml(folder.title) || 'Aba ' + (fi + 1)}</div>
        <button class="btn btn-danger" style="padding:4px 10px;font-size:11px" onclick="removeFolderFromCollection('${escapeAttr(collectionId)}','${escapeAttr(folder.id)}')">${t('col_folder_remove')}</button>
      </div>
      <div class="form-group" style="margin-bottom:10px">
        <label class="form-label">${t('col_folder_title')}</label>
        <input class="form-input" data-field="folder-title" value="${escapeHtml(folder.title)}">
      </div>
      <div class="form-group" style="margin-bottom:10px">
        <label class="form-label">${t('col_folder_shape')}</label>
        <select class="form-select" data-field="folder-shape">
          ${COL_TILE_SHAPES.map(s => `<option value="${s}" ${folder.tileShape === s ? 'selected' : ''}>${s}</option>`).join('')}
        </select>
      </div>
      <div class="form-group" style="margin-bottom:10px">
        <label class="form-label">${t('col_folder_emoji')}</label>
        <input class="form-input" data-field="folder-emoji" value="${escapeHtml(folder.coverEmoji || '')}" placeholder="🎬">
      </div>

      <div style="font-size:12px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.4px;margin:12px 0 8px">${t('col_folder_sources')} (${sources.length})</div>
      <div data-sources-list>
        ${sources.map((src, si) => renderSourceEditor(collectionId, folder.id, src, si)).join('')}
      </div>
      <div style="display:flex;gap:8px;margin:10px 0 16px;flex-wrap:wrap">
        <button class="btn btn-ghost" style="padding:5px 12px;font-size:12px" onclick="addSourceToFolder('${escapeAttr(collectionId)}','${escapeAttr(folder.id)}','addon')">+ ${t('col_source_kind_addon')}</button>
        <button class="btn btn-ghost" style="padding:5px 12px;font-size:12px" onclick="addSourceToFolder('${escapeAttr(collectionId)}','${escapeAttr(folder.id)}','tmdb')">+ TMDB</button>
        <button class="btn btn-ghost" style="padding:5px 12px;font-size:12px" onclick="addSourceToFolder('${escapeAttr(collectionId)}','${escapeAttr(folder.id)}','trakt')">+ Trakt</button>
      </div>
    </div>
  `;
}

function renderSourceEditor(collectionId, folderId, src, si) {
  if (src.provider === 'addon') {
    const addonOptions = state.catalogAddons.length
      ? state.catalogAddons.map(a => `<option value="${escapeAttr(a.addonId)}" ${src.addonId === a.addonId ? 'selected' : ''}>${escapeHtml(a.name || a.url)}</option>`).join('')
      : `<option value="">—</option>`;
    const catalogs = state.catalogAddons.find(a => a.addonId === src.addonId || a.id === src.addonId)?.manifests || [];
    const catalogOptions = catalogs.map(c => `<option value="${escapeAttr(c.id)}" ${src.catalogId === c.id ? 'selected' : ''}>${escapeHtml(c.name || c.id)} (${escapeHtml(c.type)})</option>`).join('');
    return `
      <div class="source-editor" style="border:1px solid var(--border);border-radius:10px;padding:12px;margin-bottom:10px;background:var(--bg-card2)">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
          <span class="badge badge-blue">${t('col_source_kind_addon')}</span>
          <button class="btn btn-danger" style="padding:4px 8px;font-size:11px" onclick="removeSourceFromFolder('${escapeAttr(collectionId)}','${escapeAttr(folderId)}','${escapeAttr(src.id)}')">${t('col_source_remove')}</button>
        </div>
        <div class="form-group" style="margin-bottom:8px">
          <label class="form-label">${t('col_source_addon')}</label>
          <select class="form-select" data-field="src-addon" onchange="onSrcAddonChange('${escapeAttr(collectionId)}','${escapeAttr(folderId)}','${escapeAttr(src.id)}',this.value)">
            ${addonOptions}
          </select>
        </div>
        <div class="form-group" style="margin-bottom:8px">
          <label class="form-label">${t('col_source_catalog')}</label>
          <select class="form-select" data-field="src-catalog">
            ${catalogOptions || `<option value="">${t('catalog_manifest_err')}</option>`}
          </select>
        </div>
        <input type="hidden" data-field="src-provider" value="addon">
        <input type="hidden" data-field="src-type" value="${escapeHtml(src.type || '')}">
      </div>
    `;
  }
  if (src.provider === 'tmdb') {
    return `
      <div class="source-editor" style="border:1px solid var(--border);border-radius:10px;padding:12px;margin-bottom:10px;background:var(--bg-card2)">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
          <span class="badge badge-gold">TMDB</span>
          <button class="btn btn-danger" style="padding:4px 8px;font-size:11px" onclick="removeSourceFromFolder('${escapeAttr(collectionId)}','${escapeAttr(folderId)}','${escapeAttr(src.id)}')">${t('col_source_remove')}</button>
        </div>
        <div class="form-group" style="margin-bottom:8px">
          <label class="form-label">${t('col_source_title')}</label>
          <input class="form-input" data-field="src-title" value="${escapeHtml(src.title || '')}">
        </div>
        <div class="form-group" style="margin-bottom:8px">
          <label class="form-label">${t('col_source_tmdb_type')}</label>
          <select class="form-select" data-field="src-tmdb-type">
            ${COL_TMDB_TYPES.map(tp => `<option value="${tp.value}" ${src.tmdbSourceType === tp.value ? 'selected' : ''}>${t(tp.key)}</option>`).join('')}
          </select>
        </div>
        <div class="form-group" style="margin-bottom:8px">
          <label class="form-label">${t('col_source_tmdb_id')}</label>
          <input class="form-input" data-field="src-tmdb-id" type="number" value="${src.tmdbId != null ? src.tmdbId : ''}">
        </div>
        <div class="form-group" style="margin-bottom:8px">
          <label class="form-label">${t('col_source_media_type')}</label>
          <select class="form-select" data-field="src-media-type">
            ${COL_MEDIA_TYPES.map(mt => `<option value="${mt.value}" ${src.mediaType === mt.value ? 'selected' : ''}>${t(mt.key)}</option>`).join('')}
          </select>
        </div>
        <div class="form-group" style="margin-bottom:8px">
          <label class="form-label">${t('col_source_sort')}</label>
          <select class="form-select" data-field="src-sort">
            ${COL_TMDB_SORTS.map(s => `<option value="${s.value}" ${src.sortBy === s.value ? 'selected' : ''}>${t(s.key)}</option>`).join('')}
          </select>
        </div>
        <input type="hidden" data-field="src-provider" value="tmdb">
      </div>
    `;
  }
  // trakt
  return `
    <div class="source-editor" style="border:1px solid var(--border);border-radius:10px;padding:12px;margin-bottom:10px;background:var(--bg-card2)">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
        <span class="badge badge-gray">Trakt</span>
        <button class="btn btn-danger" style="padding:4px 8px;font-size:11px" onclick="removeSourceFromFolder('${escapeAttr(collectionId)}','${escapeAttr(folderId)}','${escapeAttr(src.id)}')">${t('col_source_remove')}</button>
      </div>
      <div class="form-group" style="margin-bottom:8px">
        <label class="form-label">${t('col_source_title')}</label>
        <input class="form-input" data-field="src-title" value="${escapeHtml(src.title || '')}">
      </div>
      <div class="form-group" style="margin-bottom:8px">
        <label class="form-label">${t('col_source_trakt_id')}</label>
        <input class="form-input" data-field="src-trakt-id" type="number" value="${src.traktListId != null ? src.traktListId : ''}">
      </div>
      <div class="form-group" style="margin-bottom:8px">
        <label class="form-label">${t('col_source_media_type')}</label>
        <select class="form-select" data-field="src-media-type">
          ${COL_MEDIA_TYPES.map(mt => `<option value="${mt.value}" ${src.mediaType === mt.value ? 'selected' : ''}>${t(mt.key)}</option>`).join('')}
        </select>
      </div>
      <div class="form-group" style="margin-bottom:8px">
        <label class="form-label">${t('col_source_sort')}</label>
        <select class="form-select" data-field="src-sort">
          ${COL_TRAKT_SORTS.map(s => `<option value="${s.value}" ${src.sortBy === s.value ? 'selected' : ''}>${t(s.key)}</option>`).join('')}
        </select>
      </div>
      <div class="form-group" style="margin-bottom:8px">
        <label class="form-label">${t('col_source_sort')} ↑↓</label>
        <select class="form-select" data-field="src-sort-how">
          <option value="asc" ${src.sortHow !== 'desc' ? 'selected' : ''}>${t('col_source_sort_asc')}</option>
          <option value="desc" ${src.sortHow === 'desc' ? 'selected' : ''}>${t('col_source_sort_desc')}</option>
        </select>
      </div>
      <input type="hidden" data-field="src-provider" value="trakt">
    </div>
  `;
}

function onSrcAddonChange(collectionId, folderId, sourceId, addonId) {
  const editor = document.getElementById('col-editor-' + collectionId);
  if (!editor) return;
  const src = findCollectionSource(collectionId, folderId, sourceId);
  if (!src) return;
  const addon = state.catalogAddons.find(a => a.addonId === addonId || a.id === addonId);
  const catalogSelect = editor.querySelector(`.source-editor:has(input[value="${sourceId}"]) [data-field="src-catalog"]`);
  if (!addon || !catalogSelect) return;
  src.addonId = addon.addonId;
  catalogSelect.innerHTML = (addon.manifests || []).map(c => `
    <option value="${escapeAttr(c.id)}" data-type="${escapeAttr(c.type)}">${escapeHtml(c.name || c.id)} (${escapeHtml(c.type)})</option>
  `).join('') || `<option value="">${t('catalog_manifest_err')}</option>`;
}

function findCollectionSource(collectionId, folderId, sourceId) {
  const collection = state.collections.find(c => c.id === collectionId);
  const folder = collection?.folders?.find(f => f.id === folderId);
  return folder?.sources?.find(s => s.id === sourceId);
}

function findCollectionFolder(collectionId, folderId) {
  const collection = state.collections.find(c => c.id === collectionId);
  return collection?.folders?.find(f => f.id === folderId);
}

function addFolderToCollection(collectionId) {
  const collection = state.collections.find(c => c.id === collectionId);
  if (!collection) return;
  if (!collection.folders) collection.folders = [];
  const folder = {
    id: genId(),
    title: '',
    coverImageUrl: null,
    focusGifUrl: null,
    focusGifEnabled: true,
    coverEmoji: null,
    tileShape: 'SQUARE',
    hideTitle: false,
    heroBackdropUrl: null,
    heroVideoUrl: null,
    titleLogoUrl: null,
    sources: [],
    catalogSources: [],
  };
  collection.folders.push(folder);
  openCollectionEditor(collectionId);
}

function removeFolderFromCollection(collectionId, folderId) {
  const collection = state.collections.find(c => c.id === collectionId);
  if (!collection) return;
  collection.folders = (collection.folders || []).filter(f => f.id !== folderId);
  openCollectionEditor(collectionId);
}

function addSourceToFolder(collectionId, folderId, provider) {
  const folder = findCollectionFolder(collectionId, folderId);
  if (!folder) return;
  if (!folder.sources) folder.sources = [];
  let src = { id: genId(), provider };
  if (provider === 'addon') {
    src.addonId = state.catalogAddons[0]?.addonId || '';
    src.type = '';
    src.catalogId = '';
    src.genre = null;
  } else if (provider === 'tmdb') {
    src.tmdbSourceType = 'LIST';
    src.title = '';
    src.tmdbId = null;
    src.mediaType = 'MOVIE';
    src.sortBy = 'popularity.desc';
    src.filters = null;
  } else {
    src.title = '';
    src.traktListId = null;
    src.mediaType = 'MOVIE';
    src.sortBy = 'rank';
    src.sortHow = 'asc';
  }
  folder.sources.push(src);
  openCollectionEditor(collectionId);
}

function removeSourceFromFolder(collectionId, folderId, sourceId) {
  const folder = findCollectionFolder(collectionId, folderId);
  if (!folder) return;
  folder.sources = (folder.sources || []).filter(s => s.id !== sourceId);
  openCollectionEditor(collectionId);
}

async function saveCollectionEditor(collectionId) {
  const collection = state.collections.find(c => c.id === collectionId);
  if (!collection) return;
  const editor = document.getElementById('col-editor-' + collectionId);
  if (!editor) return;

  const title = (editor.querySelector('#col-title-' + collectionId)?.value || '').trim();
  if (!title) { toast(t('col_name_required'), 'err'); return; }

  collection.title = title;
  collection.pinToTop = editor.querySelector('#col-pin-' + collectionId)?.checked === true;
  collection.viewMode = editor.querySelector('#col-mode-' + collectionId)?.value || 'TABBED_GRID';

  for (const folder of (collection.folders || [])) {
    const folderEl = editor.querySelector(`.folder-editor[data-folder-id="${CSS.escape(folder.id)}"]`);
    if (!folderEl) continue;
    folder.title = (folderEl.querySelector('[data-field="folder-title"]')?.value || '').trim();
    folder.tileShape = folderEl.querySelector('[data-field="folder-shape"]')?.value || 'SQUARE';
    const emoji = (folderEl.querySelector('[data-field="folder-emoji"]')?.value || '').trim();
    folder.coverEmoji = emoji || null;
    folder.coverImageUrl = folder.coverImageUrl || null;

    const sources = folder.sources || [];
    const srcEls = folderEl.querySelectorAll('.source-editor');
    srcEls.forEach((el, i) => {
      const src = sources[i];
      if (!src) return;
      const provider = el.querySelector('[data-field="src-provider"]')?.value || src.provider;
      if (provider === 'addon') {
        const addonSel = el.querySelector('[data-field="src-addon"]');
        const catSel = el.querySelector('[data-field="src-catalog"]');
        src.provider = 'addon';
        src.addonId = addonSel?.value || src.addonId;
        src.catalogId = catSel?.value || '';
        const option = catSel?.selectedOptions?.[0];
        src.type = option?.dataset?.type || '';
        src.genre = null;
        delete src.tmdbSourceType; delete src.title; delete src.tmdbId; delete src.mediaType; delete src.sortBy; delete src.sortHow; delete src.traktListId; delete src.filters;
      } else if (provider === 'tmdb') {
        src.provider = 'tmdb';
        src.title = (el.querySelector('[data-field="src-title"]')?.value || '').trim();
        src.tmdbSourceType = el.querySelector('[data-field="src-tmdb-type"]')?.value || 'LIST';
        const rawId = (el.querySelector('[data-field="src-tmdb-id"]')?.value || '').trim();
        src.tmdbId = rawId ? Number(rawId) : null;
        src.mediaType = el.querySelector('[data-field="src-media-type"]')?.value || 'MOVIE';
        src.sortBy = el.querySelector('[data-field="src-sort"]')?.value || 'popularity.desc';
        src.filters = src.filters || null;
        delete src.addonId; delete src.catalogId; delete src.type; delete src.genre; delete src.traktListId; delete src.sortHow;
      } else {
        src.provider = 'trakt';
        src.title = (el.querySelector('[data-field="src-title"]')?.value || '').trim();
        const rawId = (el.querySelector('[data-field="src-trakt-id"]')?.value || '').trim();
        src.traktListId = rawId ? Number(rawId) : null;
        src.mediaType = el.querySelector('[data-field="src-media-type"]')?.value || 'MOVIE';
        src.sortBy = el.querySelector('[data-field="src-sort"]')?.value || 'rank';
        src.sortHow = el.querySelector('[data-field="src-sort-how"]')?.value || 'asc';
        delete src.addonId; delete src.catalogId; delete src.type; delete src.genre; delete src.tmdbSourceType; delete src.tmdbId; delete src.filters;
      }
    });
  }

  const ok = await saveCollections(state.activeProfileId);
  toast(ok ? t('col_updated') : t('col_error'), ok ? 'ok' : 'err');
  await loadData();
  await renderSection();
}

async function deleteCollection(collectionId) {
  if (!confirm(t('col_delete_confirm'))) return;
  state.collections = state.collections.filter(c => c.id !== collectionId);
  // Remove from home catalogs if present
  const catalogs = state.catalogs.items || [];
  const filtered = catalogs.filter(i => !(i.is_collection && i.collection_id === collectionId));
  if (filtered.length !== catalogs.length) {
    state.catalogs.items = filtered;
    normalizeCatalogOrder();
    await saveCatalogs(state.activeProfileId);
  }
  const ok = await saveCollections(state.activeProfileId);
  toast(ok ? t('col_deleted') : t('col_error'), ok ? 'ok' : 'err');
  await loadData();
  await renderSection();
}

async function toggleCollectionOnHome(collectionId) {
  const collection = state.collections.find(c => c.id === collectionId);
  if (!collection) return;
  const items = state.catalogs.items || [];
  const existing = items.find(i => i.is_collection && i.collection_id === collectionId);
  if (existing) {
    const realIdx = items.indexOf(existing);
    if (realIdx >= 0) items.splice(realIdx, 1);
    toast(t('catalog_removed'), 'ok');
  } else {
    items.push({
      addon_id: '',
      type: '',
      catalog_id: '',
      enabled: true,
      order: items.length,
      custom_title: collection.title || '',
      is_collection: true,
      collection_id: collection.id,
      destination: 'home',
      name: collection.title || t('nav_collections'),
    });
    toast(t('catalog_added'), 'ok');
  }
  normalizeCatalogOrder();
  state.catalogs.items = items;
  const ok = await saveCatalogs(state.activeProfileId);
  if (!ok) toast(t('save_err'), 'err');
  await loadData();
  await renderSection();
}

// ── IPTV (editable) ───────────────────────────────────────────────────────
async function renderIPTV() {
  const main = document.getElementById('main-content');
  const sources = state.iptv;
  const profiles = state.profiles;
  const pName = (pid) => profiles.find(p => p.id === pid)?.name ?? `P${pid ?? 1}`;

  main.innerHTML = `
    <div class="section-header">
      <div><div class="section-title">IPTV</div><div class="section-sub">${t('iptv_sub', sources.length)}</div></div>
    </div>

    <div class="card">
      <div style="font-size:16px;font-weight:700;margin-bottom:16px">${t('iptv_add_title')}</div>
      <div class="form-group" style="margin-bottom:12px">
        <label class="form-label">${t('iptv_name_label')}</label>
        <input class="form-input" id="iptv-name" placeholder="Minha TV">
      </div>
      <div class="form-group" style="margin-bottom:12px">
        <label class="form-label">${t('iptv_type_label')}</label>
        <select class="form-select" id="iptv-type" onchange="onIptvTypeChange()">
          <option value="M3U">${t('iptv_type_m3u')}</option>
          <option value="XTREAM">${t('iptv_type_xtream')}</option>
        </select>
      </div>
      <div class="form-group" style="margin-bottom:12px" id="iptv-m3u-group">
        <label class="form-label">${t('iptv_m3u_label')}</label>
        <input class="form-input" id="iptv-m3u" placeholder="https://example.com/playlist.m3u">
      </div>
      <div class="form-group" style="margin-bottom:12px" id="iptv-server-group" style="display:none">
        <label class="form-label">${t('iptv_server_label')}</label>
        <input class="form-input" id="iptv-server" placeholder="http://server:port">
        <label class="form-label" style="margin-top:10px">${t('iptv_user_label')}</label>
        <input class="form-input" id="iptv-user">
        <label class="form-label" style="margin-top:10px">${t('iptv_pass_label')}</label>
        <input class="form-input" id="iptv-pass" type="password">
      </div>
      <div class="form-group" style="margin-bottom:12px">
        <label class="form-label">${t('iptv_epg_label')}</label>
        <input class="form-input" id="iptv-epg" placeholder="https://example.com/epg.xml">
      </div>
      <button class="btn btn-primary" onclick="addIptvSource()">${t('iptv_add')}</button>
    </div>

    ${sources.length === 0 ? emptyState(t('iptv_empty')) : `
    <div class="card" style="padding:0 20px">
      ${sources.map(s => `
        <div class="list-item" style="flex-wrap:wrap">
          <div class="item-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <div class="item-info">
            <div class="item-title">${escapeHtml(s.name) || 'IPTV'}</div>
            <div class="item-sub" style="font-family:monospace;font-size:11px;max-width:380px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${escapeHtml(s.m3u_url || s.server_url || '')}</div>
            <div class="item-sub">${escapeHtml(s.source_type || 'M3U')} · ${escapeHtml(pName(s.profile_id))}</div>
          </div>
          <div style="display:flex;gap:8px;align-items:center">
            <label class="toggle">
              <input type="checkbox" ${s.enabled !== false ? 'checked' : ''} onchange="toggleIptv('${escapeAttr(s.id)}', this.checked)">
              <span class="toggle-slider"></span>
            </label>
            <button class="btn btn-danger" style="padding:6px 10px" onclick="removeIptv('${escapeAttr(s.id)}')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/></svg>
            </button>
          </div>
        </div>
      `).join('')}
    </div>`}

    <div class="card" style="margin-top:16px">
      <div style="font-size:13px;color:var(--text-muted)">${t('iptv_tip')}</div>
    </div>
  `;
}

function onIptvTypeChange() {
  const type = document.getElementById('iptv-type')?.value;
  const m3u = document.getElementById('iptv-m3u-group');
  const server = document.getElementById('iptv-server-group');
  if (!m3u || !server) return;
  m3u.style.display = type === 'M3U' ? 'block' : 'none';
  server.style.display = type === 'XTREAM' ? 'block' : 'none';
}

async function addIptvSource() {
  const type = document.getElementById('iptv-type')?.value || 'M3U';
  const name = (document.getElementById('iptv-name')?.value || '').trim() || 'IPTV';
  const m3u = (document.getElementById('iptv-m3u')?.value || '').trim();
  const server = (document.getElementById('iptv-server')?.value || '').trim();
  const username = (document.getElementById('iptv-user')?.value || '').trim();
  const password = (document.getElementById('iptv-pass')?.value || '').trim();
  const epg = (document.getElementById('iptv-epg')?.value || '').trim();

  if (type === 'M3U' && !m3u) { toast(t('iptv_invalid'), 'err'); return; }
  if (type === 'XTREAM' && !server) { toast(t('iptv_invalid'), 'err'); return; }

  try {
    const pid = state.activeProfileId;
    const sortOrder = state.iptv.length;
    const row = {
      user_id: state.userId,
      profile_id: pid,
      name,
      source_type: type,
      enabled: true,
      live_enabled: true,
      vod_enabled: true,
      series_enabled: true,
      sort_order: sortOrder,
      epg_url: epg || null,
    };
    if (type === 'M3U') row.m3u_url = m3u;
    else {
      row.server_url = server;
      row.username = username || null;
      row.password = password || null;
    }
    const { error } = await db.from('iptv_sources').insert(row);
    if (error) throw error;
    toast(t('iptv_added'));
    await loadData();
    await renderSection();
  } catch (e) {
    console.error('addIptvSource', e);
    toast(t('save_err'), 'err');
  }
}

async function toggleIptv(id, enabled) {
  try {
    const { error } = await db.from('iptv_sources').update({ enabled }).eq('id', id);
    if (error) throw error;
    const src = state.iptv.find(s => s.id === id);
    if (src) src.enabled = enabled;
    toast(t('saved'));
  } catch (e) {
    console.error('toggleIptv', e);
    toast(t('iptv_toggle_err'), 'err');
    await loadData();
    await renderSection();
  }
}

async function removeIptv(id) {
  if (!confirm(t('iptv_removed'))) return;
  try {
    const { error } = await db.from('iptv_sources').delete().eq('id', id);
    if (error) throw error;
    toast(t('iptv_removed'));
    await loadData();
    await renderSection();
  } catch (e) {
    console.error('removeIptv', e);
    toast(t('save_err'), 'err');
  }
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
          <button class="btn btn-danger" style="padding:4px 10px;font-size:11px" onclick="deleteHistory('${escapeAttr(r.id)}',this)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/></svg>
          </button>
        </div>
      </div>
    `).join('')}
  </div>`;
}

async function deleteHistory(id, btn) {
  btn.disabled = true;
  const { error } = await db.from('watched_items').delete().eq('id', id).eq('profile_id', state.activeProfileId);
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
            <button class="btn btn-danger" style="padding:6px 10px" onclick="removeWatchlist('${escapeAttr(i.id)}',this)">${t('wl_remove')}</button>
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
  const { error } = await db.from('library_items').delete().eq('id', id).eq('profile_id', state.activeProfileId);
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
  state.activeProfileId = Number(profileId);
  await loadData();
  renderSettings();
}

async function updateSetting(feature, key, value) {
  setFeatureValue(feature, key, value);
  const { error } = await db.rpc('sync_push_profile_settings_blob', {
    p_profile_id: state.activeProfileId,
    p_settings_json: state.settings,
    p_platform: 'tv',
    p_origin_client_id: 'iagotv-companion',
  });
  toast(error ? t('save_err') : t('saved'), error ? 'err' : 'ok');
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

function escapeAttr(str) {
  return escapeHtml(str).replace(/"/g, '&quot;');
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
  return new Date(Number(epochMs)).toLocaleDateString(currentLang === 'he' ? 'he-IL' : currentLang === 'pt' ? 'pt-BR' : 'en-US');
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
  const profile = state.profiles.find(p => p.id === state.activeProfileId);

  const navItems = [
    { id: 'dashboard', label: t('nav_dashboard'), icon: '<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>' },
    { id: 'profiles', label: t('nav_profiles'), icon: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>' },
    { id: 'addons', label: t('nav_addons'), icon: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 9h6M9 12h6M9 15h4"/>' },
    { id: 'catalogs', label: t('nav_catalogs'), icon: '<path d="M4 6h16M4 12h16M4 18h16"/><path d="M8 6l2 4M16 6l-2 4"/>' },
    { id: 'collections', label: t('nav_collections'), icon: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 7h10M7 12h10M7 17h6"/>' },
    { id: 'iptv', label: 'IPTV', icon: '<path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>' },
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
      <div class="profile-switcher">
        <label class="form-label" style="margin-bottom:6px">${t('settings_profile_label')}</label>
        <select class="form-select" id="profile-select" onchange="switchProfile(this.value)">
          ${state.profiles.map(p => `<option value="${p.id}" ${p.id === state.activeProfileId ? 'selected' : ''}>${escapeHtml(p.name)}</option>`).join('')}
        </select>
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
        <select class="lang-select" id="lang-select" onchange="setLang(this.value)" title="Language">
          ${LANGS.map(l => `<option value="${l.code}" ${l.code === currentLang ? 'selected' : ''}>${l.label}</option>`).join('')}
        </select>
        <button class="btn-logout" onclick="signOut()" title="${t('sign_out')}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
        </button>
      </div>
    </aside>
    <main class="main" id="main-content"></main>
  `;
}

async function switchProfile(profileId) {
  state.activeProfileId = Number(profileId);
  state.settingsProfileId = Number(profileId);
  state.catalogs = { hide_unreleased_content: false, items: [] };
  state.catalogAddons = [];
  await loadData();
  await renderSection();
  buildShell(state.session.user);
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

  await loadData();

  buildShell(session.user);

  await renderSection();

  db.auth.onAuthStateChange((_e, s) => {
    if (!s) location.reload();
  });
}

boot();
