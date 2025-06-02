import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  
});

export default withNextra({
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/capalyze-docs' : '', // Only use basePath in production
  images: {
    unoptimized: true // mandatory, otherwise won't export
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  reactStrictMode: true,
});
