# IagoTV Dashboard

Dashboard web do IagoTV (rebranding do projeto ARVIO). Contém **2 sites Netlify**
publicáveis a partir de subpastas deste repositório.

## Estrutura

```
├── iagotv-tv-site/   → SITE 1 (estático): landing page + companion + crash report
└── auth-site/        → SITE 2 (backend): auth IagoTV Cloud + 32 Netlify Functions + DB migrations
```

## SITE 1 — `iagotv-tv-site` (estático)

- **Base directory:** `iagotv-tv-site`
- **Build:** nenhum (100% estático)
- **Publish:** `.`
- Sem variáveis de ambiente obrigatórias.
- `/companion/` é o dashboard de gerenciamento (Supabase Google OAuth direto).

## SITE 2 — `auth-site` (backend)

- **Base directory:** `auth-site`
- **Build:** nenhum (Netlify instala deps do `package.json` e compila
  `netlify/functions/`)
- **Publish:** `.`

### Variáveis de ambiente obrigatórias

| Variável | Valor |
|---|---|
| `IAGOTV_AUTH_SECRET` | string longa secreta (gerar nova; ver netlify dashboard) |
| `APP_ANON_KEY` | `sb_publishable__ng1U2_pc7nlAd_6tdCIww_yDQUT65p` |
| `NETLIFY_DB_URL` | connection string do Postgres (Netlify Database) |
| `TMDB_API_KEY` | `eae39fb47f1b74ea09c9c10da4eeed4d` |
| `TRAKT_CLIENT_ID` | `8ec4beaed19283be57516e8128af5c46b7ccb073a07969037532b24c4661590b` |
| `TRAKT_CLIENT_SECRET` | `92beb9551f02dc84393bcb5854060c41094a8a36bfa6c42e91260a02c90a9c79` |

E-mail (para reset de senha / delete account): configurar **um** de
`RESEND_API_KEY`, `POSTMARK_SERVER_TOKEN` ou `SENDGRID_API_KEY`.

### Banco de dados

Migrations em `auth-site/netlify/database/migrations/` — aplicar as 3 reais
(`20260618165000_iagotv_cloud_backend`, `20260721110000_catalog_packs`,
`20260722120000_catalog_pack_submission_guards`). Pular `create_planets` e
`seed_planets` (exemplo do scaffold).

## Supabase

- Projeto: `hxsjvjifglzpxtzbtijg` (já tem schema + Google OAuth).
- **Redirect URLs** (Authentication → URL Configuration): adicionar
  `https://<site1>.netlify.app/**` para o login Google do companion.

## Importante

- Não commitar segredos; o `IAGOTV_AUTH_SECRET` vai apenas nas env vars.
- O app Android IagoTV usa Supabase nativo e não depende destes sites.
