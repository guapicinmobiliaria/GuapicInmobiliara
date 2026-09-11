# Guapic Inmobiliaria — sitio web

Sitio construido con Eleventy (11ty) + Decap CMS, listo para desplegar en Netlify vía GitHub — igual que la página anterior de Franklin Zeas Real Estate.

## Estructura
- `src/` — páginas y plantillas (Nunjucks)
- `src/propiedades/*.md` — cada propiedad es un archivo Markdown con datos (precio, sector, m², etc.)
- `src/blog/*.md` — entradas de blog
- `admin/` — panel de Decap CMS para publicar sin tocar código
- `css/style.css` — estilos con la identidad de marca (navy #071525, dorado #C4954A, Poppins)

## Cómo publicar (paso a paso)

1. **Sube este proyecto a un repositorio nuevo en GitHub.**
   ```
   git init
   git add .
   git commit -m "Sitio Guapic Inmobiliaria"
   git branch -M main
   git remote add origin <URL_DE_TU_REPO>
   git push -u origin main
   ```

2. **Conecta el repo a Netlify.**
   - En Netlify: "Add new site" → "Import an existing project" → elige el repo.
   - Build command: `npx @11ty/eleventy`
   - Publish directory: `_site`

3. **Activa Netlify Identity + Git Gateway** (para que el panel `/admin` funcione):
   - En el sitio de Netlify: Site settings → Identity → Enable Identity.
   - Identity → Registration: "Invite only" (recomendado).
   - Identity → Services → Git Gateway → Enable Git Gateway.
   - Invítate a ti mismo como usuario desde la pestaña Identity.

4. **Activa Netlify Forms** (para el formulario de contacto):
   - Ya viene configurado con `data-netlify="true"` en `contacto.njk`. Netlify lo detecta automáticamente al hacer deploy.

5. Entra a `tudominio.netlify.app/admin` para publicar propiedades y posts del blog desde el navegador, sin tocar código.

## Desarrollo local
```
npm install
npx @11ty/eleventy --serve
```

## Pendiente
- Reemplazar las imágenes placeholder en `src/images/` por fotos reales de cada propiedad.
- Configurar dominio propio en Netlify (opcional).
- Conectar Google Analytics o Meta Pixel si se necesita medir tráfico.
