import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  outDir: 'public',
  cleanUrls: true,
  lastUpdated: true,
  title: "OPNSense",
  description: "Tutorial 2024/02: HAProxy + Let's Encrypt Wildcard Certificates + 100% A+ Rating",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // editLink: {
    //   pattern: 'https://github.com/grnspc/HAProxy/blob/master/:path',
    //   // https://github.com/grnspc/HAProxy/blob/master/guides/haproxy/part-2/008-dyn-dns-conclusion.md
    //   text: 'Edit this page on GitHub'
    // },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2021-present GRNSPC & TheHellSite'
    },
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Guide', link: '/guides/haproxy/' },
      { text: 'Changelog', link: '/changelog' },
      { text: 'FAQ', link: '/faq' },
      { text: 'Forum', link: 'https://forum.opnsense.org/index.php?topic=23339.0' }
    ],

    sidebar: [
      {
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Changelog', link: '/changelog' },
          { text: 'FAQ', link: '/faq' },
        ],
      },
      {
        text: 'Guide',
        items: [
          { text: 'Current Ciphers', link: '/guides/haproxy/current-ciphers' },
          { text: 'Introduction', link: '/guides/haproxy/' },
          { text: 'The Configuration',
            items: [

              { text: 'Part 1 - Plugin Installation', link: '/guides/haproxy/part-1/'},
              { text: 'Part 2 - DynDNS Configuration',
                link: '/guides/haproxy/part-2/',
                collapsed: true,
                items: [
                  { text: '2.1 - Create Account', link: '/guides/haproxy/part-2/001-dyn-dns-account' },
                  { text: '2.2 - Create Domain', link: '/guides/haproxy/part-2/002-dyn-dns-domain' },
                  { text: '2.3 - Create Token', link: '/guides/haproxy/part-2/003-dyn-dns-token' },
                  { text: '2.4 - Save Token', link: '/guides/haproxy/part-2/004-dyn-dns-token' },
                  { text: '2.5 - Add CAA Record', link: '/guides/haproxy/part-2/005-dyn-dns-caa' },
                  { text: '2.6 - Add CNAME Record', link: '/guides/haproxy/part-2/006-dyn-dns-cname' },
                  { text: '2.7 - OPNsense DynDNS Client', link: '/guides/haproxy/part-2/007-dyn-dns-opnsense' },
                  { text: '2.8 - Conclusion', link: '/guides/haproxy/part-2/008-dyn-dns-conclusion' },
                ]
              },
              { text: 'Part 3 - ACME Client',
                link: '/guides/haproxy/part-3/',
                collapsed: true,
                items: [
                  { text: '3.1 - Settings', link: '/guides/haproxy/part-3/001-acme-settings' },
                  { text: '3.2 - Schedule', link: '/guides/haproxy/part-3/002-acme-schedule' },
                  { text: '3.3 - Accounts', link: '/guides/haproxy/part-3/003-acme-accounts' },
                  { text: '3.4 - Automations', link: '/guides/haproxy/part-3/004-acme-automations' },
                  { text: '3.5 - Challenge Types', link: '/guides/haproxy/part-3/005-acme-challenge-types' },
                  { text: '3.6 - Add Certificate', link: '/guides/haproxy/part-3/006-acme-certificates' },
                  { text: '3.7 - Test Certificate', link: '/guides/haproxy/part-3/007-acme-certificates' },
                  { text: '3.8 - ACME Log', link: '/guides/haproxy/part-3/008-acme-log' },
                  { text: '3.9 - Update Account', link: '/guides/haproxy/part-3/009-acme-accounts' },
                  { text: '3.10 - Production Certificate', link: '/guides/haproxy/part-3/010-acme-certificates' },
                  { text: '3.11 - Conclusion', link: '/guides/haproxy/part-3/011-acme-conclusion' },
                ]
              },
              { text: 'Part 4 - System Preparation',
                link: '/guides/haproxy/part-4/',
                collapsed: true,
                items: [
                  { text: '4.1 - Administration', link: '/guides/haproxy/part-4/001-opnsense-administration' },
                  { text: '4.2 - Virtual IP', link: '/guides/haproxy/part-4/002-opnsense-virtual-ip' },
                  { text: '4.3 - Aliases', link: '/guides/haproxy/part-4/003-opnsense-aliases' },
                  { text: '4.4 - Firewall (WAN)', link: '/guides/haproxy/part-4/004-opnsense-firewall' },
                  { text: '4.5 - Conclusion', link: '/guides/haproxy/part-4/005-opnsense-conclusion' },

                ]
              },
              { text: 'Part 5 - HAProxy Configuration',
                link: '/guides/haproxy/part-5/',
                collapsed: true,
                items: [
                  { text: '5.1 - Service', link: '/guides/haproxy/part-5/001-haproxy-service' },
                  { text: '5.2 - Global Parameters', link: '/guides/haproxy/part-5/002-haproxy-global-parameters' },
                  { text: '5.3 - Default Parameters', link: '/guides/haproxy/part-5/003-haproxy-default-parameters' },
                  { text: '5.4 - Real Servers', link: '/guides/haproxy/part-5/004-haproxy-real-servers' },
                  { text: '5.5 - Backend Pools', link: '/guides/haproxy/part-5/005-haproxy-backend-pools' },
                  { text: '5.6 - Conditions', link: '/guides/haproxy/part-5/006-haproxy-conditions' },
                  { text: '5.7 - Map Files', link: '/guides/haproxy/part-5/007-haproxy-map-files' },
                  { text: '5.8 - Rules', link: '/guides/haproxy/part-5/008-haproxy-rules' },
                  { text: '5.9 - Public Services', link: '/guides/haproxy/part-5/009-haproxy-public-services' },
                  { text: '5.10 - Conclusion', link: '/guides/haproxy/part-5/010-haproxy-conclusion' },
                ]
              },
              { text: 'Part 6 - Access from Internal Networks',
                link: '/guides/haproxy/part-6/',
                collapsed: true,
                items: [
                  { text: 'A - Split DNS', link: '/guides/haproxy/part-6/a-split-dns' },
                  { text: 'B - NAT Reflection', link: '/guides/haproxy/part-6/b-nat-reflection' }
                ]
              },
              { text: 'Part 7 - Advanced Configuration: local-access-only subdomains',
                link: '/guides/haproxy/part-7/',
                collapsed: true,
                items: [
                  { text: '7.1 - Map Files', link: '/guides/haproxy/part-7/001-haproxy-mapfiles' },
                  { text: '7.2 - Conditions', link: '/guides/haproxy/part-7/002-haproxy-conditions' },
                  { text: '7.3 - Rules', link: '/guides/haproxy/part-7/003-haproxy-rules' },
                  { text: '7.4 - Public Services', link: '/guides/haproxy/part-7/004-haproxy-public-services' },
                  { text: '7.5 - Conclusion', link: '/guides/haproxy/part-7/005-haproxy-conclusion' },
                ]
              },
              { text: 'Part 8 - Advanced Configuration: Hide Your Certificate on Access by IP', link: '/guides/haproxy/part-8/'}
            ]
          }
        ],
      }

    ],

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
