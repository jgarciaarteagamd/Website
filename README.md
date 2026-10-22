# Juan García Arteaga, ORL — jgarciaarteaga.pro

Página profesional del Dr. Juan García Arteaga, otorrinolaringólogo en Huelva (Instituto Otosur, Hospital Quirónsalud Huelva).
Su objetivo es aparecer en Google cuando se busca «otorrinolaringólogo en Huelva» u «otorrino Huelva» y llevar al paciente a pedir cita.

Forma parte de tres sitios con el mismo diseño:

| Sitio | Dominio | Repositorio |
|---|---|---|
| Página profesional (este) | `jgarciaarteaga.pro` | Website |
| Información para pacientes | `info.jgarciaarteaga.pro` | atlas-ent |
| Trayectoria / CV | `bio.jgarciaarteaga.pro` | Portfolio |

Español en `/` (el idioma en que se busca en Huelva) e inglés en `/en/`.

## Dónde se cambia cada cosa

- `src/data/site.ts`: teléfonos, correo, dirección, horario de consulta y enlaces a los otros dos sitios. Lo leen la página y los datos estructurados para Google.
- `src/i18n/ui.ts`: todos los textos en español e inglés (qué trato, pruebas, sobre mí, preguntas frecuentes).
- `src/components/LandingPage.astro`: la página y los datos estructurados (schema.org `Physician`, `MedicalClinic`, `Hospital`, `FAQPage`).
- `src/pages/*.md` y `src/pages/en/*.md`: aviso legal, privacidad y cookies.
- `public/og.jpg`, `public/og-en.jpg`: imagen al compartir en redes. Se regeneran con `npm run og` (necesita Playwright con Chromium).

El estilo, el logotipo, el cursor y el modo claro/oscuro son copia de atlas-ent (`src/styles/global.css`, `src/data/mark.js`, `src/scripts/`): si cambian allí, se copian aquí.

## Desarrollo

```
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

## Puesta en marcha: mover el dominio

Hoy `jgarciaarteaga.pro` sirve la información para pacientes (atlas-ent). Para que esta página ocupe el dominio principal:

1. **atlas-ent → info.jgarciaarteaga.pro**
   - `astro.config.mjs`: `site: 'https://info.jgarciaarteaga.pro'`.
   - `public/robots.txt`: la línea `Sitemap` con el nuevo dominio.
   - `src/pages/index.astro`: el `canonical` con el nuevo dominio.
   - Textos legales que nombran `jgarciaarteaga.pro` como ese sitio.
   - En Netlify, cambiar el dominio del proyecto a `info.jgarciaarteaga.pro`.
2. **Portfolio (bio)**: los enlaces a `https://jgarciaarteaga.pro/${language}/` (cabecera, pie e inicio) pasan a `https://info.jgarciaarteaga.pro/${language}/` para la información para pacientes, y se añade un enlace a esta página.
3. **Este repositorio**: crear el proyecto en Netlify y asignarle `jgarciaarteaga.pro` y `www.jgarciaarteaga.pro`. `netlify.toml` ya redirige con 301 las direcciones antiguas (`/es/zonas/…`, `/en/areas/…`, `/es/`, avisos legales) al nuevo sitio, para no perder posicionamiento.
4. **Google Search Console**: verificar el dominio, enviar `https://jgarciaarteaga.pro/sitemap-index.xml` y `https://info.jgarciaarteaga.pro/sitemap-index.xml`, y comprobar la página con la prueba de resultados enriquecidos.

## SEO local: lo que no está en el código

Lo que más pesa para «otorrino en Huelva» en Google Maps y en el bloque local es la **ficha de Google Business Profile**:

- Crear (o reclamar) la ficha «Dr. Juan García Arteaga – Otorrinolaringólogo», categoría *Otorrinolaringólogo*, en C/ Punta Umbría, 8, 21002 Huelva, con el teléfono de cita y la web `https://jgarciaarteaga.pro/`. Google permite fichas de profesionales que trabajan dentro de un centro.
- Nombre, dirección y teléfono idénticos a los de esta web (pie de página y `src/data/site.ts`).
- Pedir reseñas a los pacientes y responderlas.
- Dar de alta el mismo nombre, dirección y web en directorios médicos (Doctoralia, Top Doctors, cuadro médico de Quirónsalud y de las aseguradoras) y pedir a Instituto Otosur que enlace esta página desde otorrinohuelva.es.
