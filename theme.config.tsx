import React from 'react';
import Image from 'next/image';
import { useRouter } from 'nextra/hooks';
import { LocaleSwitch, useConfig, DocsThemeConfig, Link, ThemeSwitch } from 'nextra-theme-docs';

const DEFAULT_DESCRIPTION = 'Capalyze is a leading data analytics agent built for individuals and businesses. It supports linking multiple data sources and crawling network data, describing analysis needs, and presenting intelligent insights, helping e-commerce operations, real estate sales, self-media operations, and local life merchants extract valuable information from massive data and empower business decisions.'

const DEFAULT_KEYWORDS = 'Capalyze, Data Analysis, Tables, DeepSeek, ChatGPT, AI Agent, Data Crawling, Text Analysis, Sentiment Analysis, Keyword Extraction, OLAP Analysis, Descriptive Statistical Analysis';

const BANNER_TEXT = {
  vi: '🎉 Nextra Personal Website Template v1.1.0 được phát hành',
  en: '🎉 Capalyze supports web scraping',
};

const TOC_TITLE_TEXT = {
  en: 'On This Page',
  vi: 'Mục Lục',
};

const EDIT_TEXT = {
  en: 'Edit this page on GitHub →',
  vi: 'Chỉnh sửa trên GitHub →',
};

const FEEDBACK_TEXT = {
  en: 'Question? Give us feedback →',
  vi: 'Câu hỏi? Hãy đặt cho mình →',
};

const SEARCH_TEXT = {
  en: 'Search documentation...',
  vi: 'Tìm kiếm...',
};

const THEME_SWITCH_TEXT = {
  en: {
    light: 'Light',
    dark: 'Dark',
    system: 'System',
  },
  vi: {
    light: 'Sáng',
    dark: 'Tối',
    system: 'Hệ Thống',
  },
};

const config: DocsThemeConfig = {
  docsRepositoryBase: 'https://github.com/dream-num/capalyze-docs/',
  // project: {
  //   link: 'https://github.com/dream-num/capalyze-docs/',
  // },
  // i18n: [
  //   { name: 'Tiếng Việt', locale: 'vi' },
  //   { name: 'English', locale: 'en' },
  // ],
  banner: {
    key: 'announcement',
    content: function useText() {
      const { locale } = useRouter();
      return BANNER_TEXT[locale];
    },
    dismissible: false,
  },
  navbar: {
    extraContent: LocaleSwitch,
  },
  search: {
    placeholder: function useText() {
      const { locale } = useRouter();
      return SEARCH_TEXT[locale];
    },
  },
  logo: function useRouterLogo() {
    const { locale } = useRouter();
    return (
      <Link
        href={`/${locale}`}
        className="flex items-center text-current no-underline hover:opacity-75 ltr:mr-auto rtl:ml-auto"
      >
        <Image src="./logo/logo.png" alt="logo" width={45} height={45} />
        <span className="hidden select-none font-extrabold ltr:ml-2 rtl:mr-2 md:inline">Capalyze</span>
      </Link>
    );
  },
  logoLink: false,
  darkMode: true,
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 1,
  },
  toc: {
    backToTop: true,
    title: function useText() {
      const { locale } = useRouter();
      return TOC_TITLE_TEXT[locale];
    },
  },
  themeSwitch: {
    useOptions() {
      const { locale } = useRouter();
      return THEME_SWITCH_TEXT[locale];
    },
  },
  editLink: {
    content: function useText() {
      const { locale } = useRouter();
      return EDIT_TEXT[locale];
    },
  },
  feedback: {
    content: function useText() {
      const { locale } = useRouter();
      return FEEDBACK_TEXT[locale];
    },
  },
  footer: {
    component: (
      <footer className="bg-white dark:bg-black">
        <div className="text-right mx-auto max-w-[1440px] p-6 py-2">
          <LocaleSwitch />
          <ThemeSwitch />
        </div>
        <hr className="dark:nx-border-neutral-800" />
        <div className="mx-auto max-w-[1440px] p-6 lg:py-10">
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © {new Date().getFullYear()} Capalyze.{' '}
              <Link href="https://capalyze.ai/" className="hover:underline" target="_blank">
                Made by Dream Number
              </Link>
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <Link href="https://discord.gg/3BrwmnvN4D" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.1.1 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.1 16.1 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"/></svg>
                <span className="sr-only">Discord</span>
              </Link>
              <Link href="https://x.com/Capalyze" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m3 21l7.548-7.548M21 3l-7.548 7.548m0 0L8 3H3l7.548 10.452m2.904-2.904L21 21h-5l-5.452-7.548" color="currentColor"/></svg>
                <span className="sr-only">X</span>
              </Link>
              <Link href="https://www.youtube.com/@Capalyze" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M22.54 6.42a2.77 2.77 0 0 0-1.945-1.957C18.88 4 12 4 12 4s-6.88 0-8.595.463A2.77 2.77 0 0 0 1.46 6.42C1 8.148 1 11.75 1 11.75s0 3.602.46 5.33a2.77 2.77 0 0 0 1.945 1.958C5.121 19.5 12 19.5 12 19.5s6.88 0 8.595-.462a2.77 2.77 0 0 0 1.945-1.958c.46-1.726.46-5.33.46-5.33s0-3.602-.46-5.33M9.75 8.479v6.542l5.75-3.271z" clip-rule="evenodd"/></svg>
                <span className="sr-only">Youtube</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    ),
  },
  head: function useHead() {
    const config = useConfig<{ description?: string; image?: string, keywords?: string }>();
    const { locale } = useRouter();
    const description = config.frontMatter.description || DEFAULT_DESCRIPTION;
    const keywords = config.frontMatter.keywords || DEFAULT_KEYWORDS;
    const image =
      config.frontMatter.image;
    const title = `${config.title}`;
    return (
      <>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:description" content={description} />
        {/* Favicons, meta */}
        <link rel="apple-touch-icon" sizes="180x180" href="/logo/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo/favicon.ico" />
        <link rel="mask-icon" href="/logo/favicon.ico" color="#000000" />
        <meta name="msapplication-TileColor" content="#fff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Capalyze" />
        <meta property="og:image" content={image} />
        <meta name="apple-mobile-web-app-title" content="Capalyze" />
      </>
    );
  },
};

export default config;
