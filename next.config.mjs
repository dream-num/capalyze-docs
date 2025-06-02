import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  
});

export default withNextra({
  output: 'export',
  basePath: '/capalyze-docs', // If you deploy in a subpath, please set it to the warehouse name
  images: {
    unoptimized: true // mandatory, otherwise won't export
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  reactStrictMode: true,
});
