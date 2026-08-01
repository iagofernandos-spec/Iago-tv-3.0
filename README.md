# IagoTV Dashboard

Dashboard web do IagoTV (rebranding do projeto ARVIO). O **site estático** é
hospedado no **Vercel** (plano gratuito) — não depende de backend próprio.

## Estrutura

```
├── iagotv-tv-site/   → SITE PRINCIPAL (estático, hospedado no Vercel)
│   ├── index.html         → landing page
│   ├── companion/         → dashboard de gerenciamento (Supabase Google OAuth)
│   ├── report/            → crash diagnostics
│   └── vercel.json        → config de rotas/headers do Vercel
└── auth-site/        → (referência) backend Netlify do ARVIO original — NÃO usado
```

## Deploy no Vercel (grátis)

1. Crie/entre na conta em https://vercel.com
2. **Add New → Project → Import Git Repository** → escolha este repositório
   (ou use **Deploy manually** arrastando a pasta `iagotv-tv-site`)
3. Framework preset: **Other** · Root Directory: `iagotv-tv-site`
4. Deploy — não precisa de variáveis de ambiente.

Depois de pegar a URL (`https://<seu-projeto>.vercel.app`), no Supabase
(Authentication → URL Configuration → Redirect URLs) adicione:
`https://<seu-projeto>.vercel.app/**`

Isso é o que permite o login "Continue with Google" do companion funcionar.

## Por que não migrar o `auth-site`

O `auth-site` é o backend Netlify do ARVIO original (32 functions usando
`@netlify/blobs` + Netlify Database). Ele é **dispensável** para o IagoTV:

- O app Android usa **Supabase nativo** (RPCs `sync_*`, edge function
  `tv-logins-exchange`) — não usa o auth-site.
- O companion usa **Supabase direto** (Google OAuth) — não usa o auth-site.
- TV login usa a **edge function do Supabase** — não o auth-site.

Portanto, o dashboard web funciona 100% só com Supabase + Vercel estático.

## Supabase

- Projeto: `hxsjvjifglzpxtzbtijg` (já tem schema + Google OAuth habilitado).
- O companion (`iagotv-tv-site/companion/app.js`) já aponta para este projeto.

## Importante

- Não commitar segredos.
- O app Android IagoTV usa Supabase nativo e não depende deste site.
