# Guia Completa: Despliegue Gratuito de Next.js (2025-2026)

> Guia paso a paso para desplegar tu aplicacion Next.js sin gastar un centavo.
> Informacion actualizada a 2025-2026.

---

## Indice

1. [Despliegue en Vercel (Recomendado)](#1-despliegue-en-vercel-recomendado)
   - [Paso 1: Subir codigo a GitHub](#paso-1-subir-codigo-a-github)
   - [Paso 2: Crear cuenta en Vercel](#paso-2-crear-cuenta-en-vercel)
   - [Paso 3: Desplegar desde GitHub](#paso-3-desplegar-desde-github)
   - [Dominio gratuito de Vercel](#dominio-gratuito-de-vercel)
   - [Limites del plan Hobby (Gratis)](#limites-del-plan-hobby-gratis)
2. [Alternativa: Netlify](#2-alternativa-netlify)
3. [Alternativa: Cloudflare Pages](#3-alternativa-cloudflare-pages)
4. [Tabla Comparativa](#4-tabla-comparativa)
5. [Recomendacion Final](#5-recomendacion-final)

---

## 1. Despliegue en Vercel (Recomendado)

Vercel es la plataforma creada por los mismos desarrolladores de Next.js, por lo que ofrece la mejor compatibilidad y experiencia de despliegue.

### Paso 1: Subir codigo a GitHub

#### 1.1 Instalar Git (si no lo tienes)

```bash
# Verificar si ya tienes Git
git --version

# Si no lo tienes, instalalo:
# Ubuntu/Debian:
sudo apt install git

# macOS (viene preinstalado, o usa Homebrew):
brew install git

# Windows: descarga desde https://git-scm.com
```

#### 1.2 Configurar Git

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

#### 1.3 Crear un repositorio en GitHub

1. Ve a [github.com](https://github.com) y crea una cuenta (si no tienes una)
2. Haz clic en el boton **"+"** (esquina superior derecha) y selecciona **"New repository"**
3. Llena los datos:
   - **Repository name**: `mi-app-nextjs` (o el nombre que prefieras)
   - **Description**: descripcion opcional
   - **Public** o **Private**: selecciona Public (necesario para el plan gratuito de Vercel sin problemas)
   - **NO** marques "Add a README file" si ya tienes codigo localmente
4. Haz clic en **"Create repository"**

#### 1.4 Inicializar Git en tu proyecto local

```bash
# Navega a la carpeta de tu proyecto
cd mi-app-nextjs

# Inicializa el repositorio Git
git init

# Agrega todos los archivos
git add .

# Haz tu primer commit
git commit -m "Primer commit: proyecto Next.js"
```

#### 1.5 Conectar con GitHub y subir el codigo

```bash
# Agrega el remote de GitHub (usa la URL que te da GitHub)
git remote add origin https://github.com/TU-USUARIO/mi-app-nextjs.git

# Cambia a la rama principal
git branch -M main

# Sube el codigo a GitHub
git push -u origin main
```

> **Tip**: Si prefieres usar SSH en lugar de HTTPS:
> ```bash
> git remote add origin git@github.com:TU-USUARIO/mi-app-nextjs.git
> ```
> Necesitaras configurar una [clave SSH en GitHub](https://docs.github.com/es/authentication/connecting-to-github-with-ssh).

#### 1.6 Actualizaciones futuras (cada vez que cambies codigo)

```bash
git add .
git commit -m "Descripcion del cambio"
git push
```

---

### Paso 2: Crear cuenta en Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en **"Sign Up"**
3. Selecciona **"Continue with GitHub"**
4. Autoriza a Vercel para acceder a tu cuenta de GitHub
5. Listo! Tu cuenta esta creada en el plan **Hobby** (gratuito)

> **Nota importante**: Con el plan Hobby, la persona que hace push a GitHub debe ser miembro de la cuenta de Vercel. Para proyectos personales no hay problema.

---

### Paso 3: Desplegar desde GitHub

1. En el dashboard de Vercel, haz clic en **"Add New..."** -> **"Project"**
2. En la seccion **"Import Git Repository"**, veras tus repositorios de GitHub
3. Si no ves tu repo, haz clic en **"Adjust GitHub App Permissions"** y agrega acceso al repositorio
4. Haz clic en **"Import"** junto al repositorio que quieres desplegar
5. Vercel detectara automaticamente que es un proyecto Next.js
6. Configura las opciones (normalmente los valores por defecto estan bien):
   - **Framework Preset**: Next.js (se detecta solo)
   - **Root Directory**: `./` (o la subcarpeta si aplica)
   - **Build Command**: `next build` (automatico)
   - **Output Directory**: `.next` (automatico)
   - **Environment Variables**: agrega las variables de entorno que necesites (ej: claves de API, URL de base de datos)
7. Haz clic en **"Deploy"**
8. Espera 1-3 minutos mientras se construye y despliega
9. Veras un mensaje de exito con confeti! 🎉

> **Despliegues automaticos**: A partir de ahora, cada vez que hagas `git push` a la rama `main`, Vercel desplegara automaticamente la nueva version. Tambien se crean previews para pull requests.

---

### Dominio gratuito de Vercel

Vercel te asigna automaticamente un dominio con el formato:

```
tu-proyecto.vercel.app
```

Por ejemplo, si tu proyecto se llama `mi-app-nextjs`, tu URL sera:

```
mi-app-nextjs.vercel.app
```

- El dominio `.vercel.app` incluye **SSL/HTTPS automatico**
- Puedes agregar un dominio personalizado (como `mipagina.com`) si compras uno
- Cada proyecto obtiene su propio subdominio `.vercel.app`
- Tambien se generan URLs de preview unicas por cada deploy: `tu-proyecto-git-branch-tuusuario.vercel.app`

---

### Limites del plan Hobby (Gratis)

| Recurso | Limite (Hobby/Gratis) |
|---|---|
| **Ancho de banda** | 100 GB / mes |
| **Edge Requests** | 1,000,000 / mes |
| **CPU activa** | 4 horas / mes |
| **Invocaciones Serverless** | Incluidas dentro del CPU time |
| **Duracion maxima de funcion** | 60 segundos (configurable hasta 300s) |
| **Memoria de funciones** | Hasta 2 GB |
| **Duracion del build** | Maximo 45 minutos por build |
| **Tamano de source (CLI)** | 100 MB maximo |
| **Deployments concurrentes** | 1 a la vez |
| **Dominios personalizados** | Si (sin limite explicito en Hobby) |
| **SSL/HTTPS** | Incluido (automatico) |
| **Preview deployments** | Incluidos (por cada PR) |
| **Analytics** | No incluido (solo Pro+) |
| **Logs** | Limitados (no persistentes) |
| **Soporte** | Comunidad (sin soporte dedicado) |

> **Que pasa si superas los limites?** Vercel no te cobra automaticamente en el plan Hobby. Si excedes los limites, tu sitio puede ser pausado o las requests fallaran hasta el siguiente ciclo de facturacion. Recibiras notificaciones por email.

---

## 2. Alternativa: Netlify

Netlify es otra excelente opcion para desplegar Next.js de forma gratuita.

### Como desplegar Next.js en Netlify

1. Ve a [netlify.com](https://www.netlify.com) y cre una cuenta con GitHub
2. Haz clic en **"Add new site"** -> **"Import an existing project"**
3. Conecta tu repositorio de GitHub
4. Netlify detectara Next.js y usara el adaptador **OpenNext** automaticamente
5. Configura las variables de entorno si necesitas
6. Haz clic en **"Deploy site"**

> **Compatibilidad Next.js**: Netlify soporta todas las funciones principales de Next.js a traves del adaptador OpenNext, incluyendo SSR, API routes, middleware, y image optimization. Sin embargo, algunas funciones avanzadas pueden tener limitaciones comparadas con Vercel.

### Limites del plan Free (Gratis) de Netlify

| Recurso | Limite (Free) |
|---|---|
| **Ancho de banda** | 100 GB / mes |
| **Minutos de build** | 300 / mes |
| **Invocaciones de funciones** | 125,000 / mes |
| **Invocaciones de edge functions** | 1,000,000 / mes |
| **Dominios personalizados** | Si (incluido) |
| **SSL/HTTPS** | Incluido (automatico) |
| **Deploy previews** | Incluidos |
| **Concurrent builds** | 1 a la vez |
| **Serverless function duration** | 10 segundos (por defecto) |
| **Formularios** | 100 / mes |
| **Identity users** | 1,000 |
| **Analiticas** | No incluidas |
| **Soporte** | Comunidad |

**Dominio gratuito**: `tu-proyecto.netlify.app`

### Ventajas de Netlify
- Plan gratuito con limites duros (nunca te cobran de sorpresa)
- Excelente soporte para sitios estaticos y JAMstack
- Formularios integrados (sin backend)
- Split testing integrado

### Desventajas de Netlify
- Solo 300 minutos de build al mes (puede quedarte corto si haces muchos deploys)
- Solo 125,000 invocaciones de funciones serverless
- Compatibilidad con Next.js no es nativa (depende del adaptador OpenNext)
- Duracion de funciones limitada a 10s por defecto

---

## 3. Alternativa: Cloudflare Pages

Cloudflare Pages ofrece la opcion mas generosa en terminos de ancho de banda (ilimitado) pero con restricciones importantes para Next.js SSR.

### Como desplegar Next.js en Cloudflare Pages

Existen **dos formas** de desplegar Next.js en Cloudflare:

#### Opcion A: Sitio estatico (SSG - Static Site Generation)
Para sitios completamente estaticos (sin SSR, sin API routes):

1. Ve a [dash.cloudflare.com](https://dash.cloudflare.com) y crea una cuenta
2. Ve a **Workers & Pages** -> **Create application** -> **Pages**
3. Conecta tu repositorio de GitHub
4. Configura:
   - **Build command**: `npx next build`
   - **Build output directory**: `out`
5. Antes, necesitas agregar `output: 'export'` en tu `next.config.js`:
   ```js
   // next.config.js
   const nextConfig = {
     output: 'export',
     // Nota: esto deshabilita funciones como SSR, API routes, etc.
   }
   module.exports = nextConfig
   ```
6. Haz clic en **Save and Deploy**

#### Opcion B: SSR con Cloudflare Workers (Next.js completo)
Para aplicaciones con Server-Side Rendering y API routes:

1. Instala el adaptador de Cloudflare:
   ```bash
   npm install @opennextjs/cloudflare
   ```
2. Configura tu proyecto:
   ```js
   // open-next.config.ts
   import { defineCloudflareConfig } from '@opennextjs/cloudflare';
   export default defineCloudflareConfig({});
   ```
3. Despliega con Wrangler CLI:
   ```bash
   npx wrangler@latest deploy
   ```
4. O conecta tu repo de GitHub en el dashboard de Cloudflare

> **ADVERTENCIA**: El plan gratuito de Workers tiene un limite estricto de **1 MB** para el bundle comprimido de tu aplicacion (API routes + Server Components). Esto puede ser muy restrictivo para aplicaciones Next.js completas. El plan pago ($5/mes) lo sube a 10 MB.

### Limites del plan Free de Cloudflare Pages + Workers

| Recurso | Limite (Free) |
|---|---|
| **Ancho de banda** | **Ilimitado** (la mejor oferta!) |
| **Requests (Workers/Pages Functions)** | 100,000 / dia (se resetea a medianoche UTC) |
| **Builds por mes** | 500 |
| **Builds concurrentes** | 1 a la vez |
| **Duracion del build** | 20 minutos maximo |
| **CPU time por invocacion** | 10 milisegundos (free) / 30s (paid) |
| **Tamano de archivos** | 25 MB por archivo |
| **Archivos por sitio** | 20,000 |
| **Proyectos** | 100 por cuenta |
| **Dominios personalizados** | 100 por proyecto |
| **SSL/HTTPS** | Incluido (automatico) |
| **Deploy previews** | Incluidos |
| **Tamano del Worker bundle** | 1 MB comprimido (free) |
| **KV storage** | 100,000 reads/dia, 1,000 writes/dia |
| **R2 storage** | 10 GB, 1M reads clase A/mes, 1M writes clase B/mes |

**Dominio gratuito**: `tu-proyecto.pages.dev`

### Ventajas de Cloudflare Pages
- **Ancho de banda ilimitado** (la unica plataforma que ofrece esto gratis)
- Red CDN global mas grande del mundo
- 100,000 requests/dia es generoso para proyectos pequeños
- Workers KV incluido para almacenamiento clave-valor
- No hay cobros sorpresa (limites duros)

### Desventajas de Cloudflare Pages
- **Limite de 1 MB** para el bundle de Workers (muy restrictivo para Next.js SSR)
- Solo 10ms de CPU time por invocacion en el plan gratuito (muy poco para operaciones complejas)
- El soporte completo de Next.js requiere configuracion adicional con OpenNext
- Las funciones avanzadas de Next.js pueden no funcionar correctamente
- Si excedes las 100,000 requests/dia, el sitio deja de responder (y se reporta que puede exponer codigo del servidor como fallback)

---

## 4. Tabla Comparativa

| Caracteristica | Vercel (Hobby) | Netlify (Free) | Cloudflare Pages (Free) |
|---|---|---|---|
| **Precio** | $0 | $0 | $0 |
| **Ancho de banda** | 100 GB/mes | 100 GB/mes | **Ilimitado** |
| **Requests** | 1M Edge/mes | 125K funciones/mes | 100K/dia (~3M/mes) |
| **CPU/Build** | 4h CPU activa/mes | 300 min build/mes | 500 builds/mes |
| **Duracion funcion** | 60s (hasta 300s) | 10s | 10ms CPU time |
| **Bundle size** | Sin limite explicito | Sin limite explicito | **1 MB** (muy restrictivo) |
| **Dominio gratis** | `.vercel.app` | `.netlify.app` | `.pages.dev` |
| **SSL automatico** | Si | Si | Si |
| **Compatibilidad Next.js** | **Excelente** (nativo) | Buena (OpenNext) | Limitada (1MB) |
| **SSR** | Completo | Completo | Restringido |
| **API Routes** | Completo | Completo | Restringido |
| **Image Optimization** | Completo | Completo | Parcial |
| **Deploy previews** | Si | Si | Si |
| **Auto-deploy en push** | Si | Si | Si |
| **Cobros sorpresa** | No (pausa el sitio) | **No** (limites duros) | **No** (limites duros) |
| **Cold starts** | Si | Si | **No** (edge) |

---

## 5. Recomendacion Final

### Para la mayoria de proyectos Next.js: **Vercel** 🏆

Vercel es la mejor opcion porque:
- Es el creador de Next.js, asi que la compatibilidad es perfecta
- El despliegue es literalmente 3 clics
- Soporte completo para todas las funciones de Next.js
- 100 GB de ancho de banda es suficiente para proyectos personales
- Despliegues automaticos con cada push

### Si necesitas ancho de banda ilimitado: **Cloudflare Pages** (solo estatico)

Si tu sitio es completamente estatico (SSG/export) y necesitas servir mucho trafico sin preocuparte por el ancho de banda, Cloudflare Pages es insuperable. Pero **no es recomendado para Next.js con SSR** debido al limite de 1 MB.

### Si quieres limites duros sin sorpresas: **Netlify**

Netlify nunca te cobrara de mas porque tiene limites duros. Si excedes los limites, el sitio simplemente se pausa hasta el siguiente mes. Es una buena opcion si quieres tranquilidad financiera absoluta.

### Resumen rapido de decision:

```
Tu proyecto es Next.js con SSR? → Vercel
Tu proyecto es estatico con mucho trafico? → Cloudflare Pages
Quieres limites duros garantizados? → Netlify
```

---

## Comandos Rapidos (Cheat Sheet)

### Crear proyecto Next.js desde cero y desplegar

```bash
# 1. Crear proyecto Next.js
npx create-next-app@latest mi-app
cd mi-app

# 2. Inicializar Git
git init
git add .
git commit -m "Primer commit"

# 3. Crear repo en GitHub (necesitas GitHub CLI)
gh repo create mi-app --public --source=. --push

# 4. Ir a vercel.com, importar el repo, y listo!

# --- Alternativa: Desplegar con Vercel CLI ---
npm i -g vercel
vercel
# Sigue las instrucciones en pantalla
```

### Desplegar en Netlify por CLI

```bash
npm i -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

### Desplegar en Cloudflare Pages por CLI

```bash
npm i -g wrangler
wrangler login
# Para sitio estatico:
wrangler pages deploy ./out --project-name=mi-app

# Para Next.js SSR con OpenNext:
npx @opennextjs/cloudflare build
npx wrangler@latest deploy
```

---

*Guia investigada y compilada con datos actualizados a marzo 2025-2026.*
*Los limites pueden cambiar; consulta siempre las paginas oficiales:*
- *https://vercel.com/pricing*
- *https://www.netlify.com/pricing*
- *https://www.cloudflare.com/plans/developer-platform*
