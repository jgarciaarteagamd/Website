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
- `src/assets/hospital-quironsalud-huelva.jpg`: foto de la fachada, retocada (fachada y calle uniformes, sin transeúntes, sin el coche aparcado del borde).
- `src/assets/hospital-quironsalud-huelva-holo.jpg`: la misma foto como holograma (contornos del edificio), que es la que muestra la página. Se regenera con `python3 scripts/make-holo-photo.py src/assets/hospital-quironsalud-huelva.jpg src/assets/hospital-quironsalud-huelva-holo.jpg` (necesita `opencv-python-headless`).

El estilo, el logotipo, el cursor y el modo claro/oscuro son copia de atlas-ent (`src/styles/global.css`, `src/data/mark.js`, `src/scripts/`): si cambian allí, se copian aquí.

## Desarrollo

```
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

## Puesta en marcha: mover el dominio

Hoy en Netlify, el proyecto **atlas-ent** sirve `jgarciaarteaga.pro` y el proyecto **jgarciaarteaga** sirve `bio.jgarciaarteaga.pro`.
Los cambios de código ya están hechos en la rama `ccr-627d6ce7-hz4b76` de cada repositorio (atlas-ent pasa a `info.`, la Bio enlaza los dos sitios); se fusionan en `main` en el paso indicado.

1. **Información para pacientes en `info.`** (proyecto atlas-ent)
   - *Domain management → Add a domain*: `info.jgarciaarteaga.pro`. Si el dominio usa Netlify DNS, el registro se crea solo; si no, crear en el proveedor del dominio un `CNAME` de `info` a `atlas-ent.netlify.app`.
   - Esperar a que el certificado HTTPS cubra `info.` y, en ese dominio, *Options → Set as primary domain*. Desde ese momento `jgarciaarteaga.pro` redirige a `info.`.
   - Fusionar la rama de atlas-ent en `main`.
2. **Proyecto nuevo para esta web**
   - Fusionar esta rama en `main`.
   - *Add new project → Import an existing project → GitHub → Website*. La configuración se lee de `netlify.toml`. Revisar la web en la dirección `….netlify.app` que asigna Netlify.
3. **Cambio de dominio** (un par de minutos sin servicio en el dominio principal)
   - En atlas-ent, *Domain management*: quitar `jgarciaarteaga.pro` y `www.jgarciaarteaga.pro` (*Options → Remove domain*).
   - En el proyecto nuevo, *Add a domain*: `jgarciaarteaga.pro` (y `www`). Como todo sigue en Netlify, no hay que tocar las DNS de esos dos.
   - Fusionar la rama de la Bio (Portfolio) en `main`.
   - `netlify.toml` redirige con 301 las direcciones antiguas (`/es/zonas/…`, `/en/areas/…`, `/es/`, avisos legales) a su nuevo sitio, así no se pierde posicionamiento.
4. **Google Search Console**: verificar el dominio (propiedad de tipo *Dominio*, cubre también `info.` y `bio.`), enviar `https://jgarciaarteaga.pro/sitemap-index.xml` y `https://info.jgarciaarteaga.pro/sitemap-index.xml`, y pasar la portada por la prueba de resultados enriquecidos.

## SEO local: lo que no está en el código

Lo que más pesa para «otorrino en Huelva» en Google Maps y en el bloque local es la **ficha de Google Business Profile**:

- Crear (o reclamar) la ficha «Dr. Juan García Arteaga – Otorrinolaringólogo», categoría *Otorrinolaringólogo*, en C/ Punta Umbría, 8, 21002 Huelva, con el teléfono de cita y la web `https://jgarciaarteaga.pro/`. Google permite fichas de profesionales que trabajan dentro de un centro.
- Nombre, dirección y teléfono idénticos a los de esta web (pie de página y `src/data/site.ts`).
- Pedir reseñas a los pacientes y responderlas.
- Dar de alta el mismo nombre, dirección y web en directorios médicos (Doctoralia, Top Doctors, cuadro médico de Quirónsalud y de las aseguradoras) y pedir a Instituto Otosur que enlace esta página desde otorrinohuelva.es.
