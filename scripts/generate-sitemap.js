const fs = require('fs');

const globby = require('globby');
const prettier = require('prettier');

(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');

  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const pages = await globby([
    'pages/**/*{.js,.mdx}',
    '!pages/_*.js',
    '!pages/api',
  ]);
  const today = new Date().toISOString().slice(0, 10);
  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page
                  .replace('pages', '')
                  .replace('.js', '')
                  .replace('.mdx', '');
                let route = path === '/index' ? '' : path;

                // For pages inside their own folders
                if (route.endsWith('/index')) {
                  route = route.substring(0, route.indexOf('/index'));
                }

                return `
                        <url>
                            <loc>${`https://nextjs-tailwind-starter.netlify.app${route}`}</loc>
                            <lastmod>${today}</lastmod>
                            <changefreq>daily</changefreq>
                            <priority>${
                              route === '/' ? '1.0' : '0.9'
                            }</priority>
                        </url>
                    `;
              })
              .join('')}
        </urlset>
    `;

  // If you're not using Prettier, you can remove this.
  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });

  fs.writeFileSync('public/sitemap.xml', formatted);
})();
