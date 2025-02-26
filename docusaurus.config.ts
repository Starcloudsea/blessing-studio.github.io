import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This works in Node.js - don't use client-side code (browser API, JSX, etc.) here.

const config: Config = {
  title: 'Blessing.Docs',
  tagline: 'Blessing Studio 官方文档站！🥳🥳🥳',
  favicon: 'img/BlessingStudio.png',

  // Set up your website's production URL here
  url: 'https://blessing-studio.github.io',
  // Set <baseUrl>the // pathname of the providing site
  // For GitHub page deployments, it's usually '/<projectName>/'
  baseUrl: '/',

  // GitHub 页面部署配置。
  // 如果您不使用 GitHub 页面，则不需要这些。
  organizationName: 'Blessing-Studio', // This is usually your GitHub organization/username.
  projectName: 'blessing-studio.github.io', // It is usually the name of the warehouse.
  deploymentBranch: 'master',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // You can use this field setting even if you don't use internationalization
  // Useful metadata, such as HTML lang. For example, if your website is a Chinese website, you
  // You may want to replace "en" with "zh-hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // 请将其更改为您的存储库。
          // Delete this link （删除此链接） 以删除 Edit this page （编辑此页面） 链接。
          editUrl:
            'https://github.com/Blessing-Studio/blessing-studio.github.io/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // 请将其更改为您的存储库。
          // Delete this link （删除此链接） 以删除 Edit this page （编辑此页面） 链接。
          editUrl:
            'https://github.com/Blessing-Studio/blessing-studio.github.io/',
          // 实施博客最佳实践的有用选项
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // 替换为项目的社交卡片
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Blessing.Docs',
      logo: {
        alt: 'Blessing.Docs Logo',
        src: 'img/BlessingStudio.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'minecraftLaunchSidebar',
          position: 'left',
          label: 'MinecraftLaunch',
        },
        {
          type: 'docSidebar',
          sidebarId: 'wonderLabSidebar',
          position: 'left',
          label: 'WonderLab',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'docSidebar',
          sidebarId: 'aboutSidebar',
          position: 'right',
          label: '关于',
        },
        {
          type: 'dropdown',
          label: '社交链接',
          position: 'right',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Blessing-Studio/blessing-studio.github.io',
            },
            {
              label: '官网',
              href: 'https://blessing-studio.cn',
            },
          ],
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: '文档',
          items: [
            {
              label: 'MinecraftLaunch',
              to: '/docs/MinecraftLaunch/intro',
            },
          ],
        },
        {
          title: '社交链接',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Blessing-Studio/blessing-studio.github.io',
            },
            {
              label: '官网',
              href: 'https://blessing-studio.cn',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Blessing Studio. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.github,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
