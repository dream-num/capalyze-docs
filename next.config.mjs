import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

export default withNextra({
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  redirects: () => [
    {
      source: '/',
      destination: `/en`,
      permanent: true,
    },
  ],
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '"res.cloudinary.com"',
      },
      {
        protocol: 'https',
        hostname: '"assets.vercel.com"',
      },
    ],
  },
});
