// const lightCodeTheme = require('prism-react-renderer/themes/github');
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');

import { themes as prismThemes } from "prism-react-renderer";


// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: "MicroBlocks使用教程",
  tagline: '',
  url: 'https://github.com',
  baseUrl: "/",
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://gitlab.fabcloud.org/academany/fabacademy/2026/labs/chaihuo/students/dolphin-liu/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://gitlab.fabcloud.org/academany/fabacademy/2026/labs/chaihuo/students/dolphin-liu/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Dolphin',
        logo: {
          alt: 'Dolphin Logo',
          src: 'img/logo.svg',
        },
        items: [
           {
          label: " About Me",
          position: "left",
          to: "docs/aboutme",
        },
        {
          type: "dropdown",
          label: " Assignments ",
          position: "left",
          className: "navbar_doc_items_2",
          to: "docs/assign",
          items: [
            {
              label: "Week 01 - Project Management ✅",
              to: "docs/assign/week01",
            },
            {
              label: "Week 02 - Computer Aided design ",
              to: "docs/assign/week01",
            },
            
          ],
        },
        {
          type: "dropdown",
          label: " Final Project ",
          className: "navbar_doc_items_3",
          position: "left",
          to: "docs/final",
          items: [
            {
              label: "Idea ✅",
              to: "docs/final/01_idea",
            },
           
          ]
        },
        {
          href: "https://gitlab.fabcloud.org/academany/fabacademy/2026/labs/chaihuo/students/dolphin-liu",
          label: "GitLab",
          position: "right",
        },
        {
          href: "https://github.com/",
          label: "GitHub",
          position: "right",
        },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [

              {
                label: 'GitLab',
                href: 'https://gitlab.fabcloud.org/academany/fabacademy/2026/labs/chaihuo/students/dolphin-liu',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Dolphin. Built with Docusaurus.`,
      },
 

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

    }),
});
