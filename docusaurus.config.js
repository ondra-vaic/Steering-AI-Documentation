// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SteeringAI',
  tagline: 'High-Performance Steering and Flocking Framework Powered by Unity DOTS.',
  favicon: 'img/favicon.svg',

  url: 'https://steeringai.ondrejvaic.com',
  baseUrl: '/',  // root for custom domain
  
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ondra-vaic', // Usually your GitHub org/user name.
  projectName: 'Steering-AI-Documentation',
  trailingSlash: false,
  
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          
        },
        
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [require.resolve("docusaurus-plugin-image-zoom")],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',

      colorMode: {
        defaultMode: 'dark', // or 'dark'
        disableSwitch: true, // we'll keep this for now
        respectPrefersColorScheme: false, // ignore user's system preference
      },

      zoom: {
      selector: '.markdown :not(em) > img',
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
          }
        }
      },

      navbar: {
        title: 'SteeringAI',
        logo: {
          alt: 'SteeringAI Logo',
          src: 'img/favicon.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Ondřej Vaic Project, Steering AI.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['csharp'],
      },
    }),
};

export default config;
