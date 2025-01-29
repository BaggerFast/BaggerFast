import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BaggerFast",
  description: "Personal page",
  base: '/BaggerFast',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Linux', link: '/linux/debian.md' },
      { text: 'Tools', link: '/tools/git/aliases.md' },
      { text: 'Others', link: '/others/apps/windows.md' }
    ],
    sidebar: {
      '/linux/': [
        {
          text: 'Installation',
          items: [
            {text: 'Debian based', link: '/linux/debian.md'},
          ]
        },
        {
          text: 'Tools',
          items: [
            {text: 'Ssh', link: '/linux/tools/ssh.md'},
            {text: 'Systemd', link: '/linux/tools/systemd.md'},
          ]
        },
        {
          text: 'Mounts',
          items: [
            {text: 'Usb', link: '/linux/mount/usb.md'},
            {text: 'Network storage', link: ''},
          ]
        }
      ],
      '/tools/': [
        {
          text: 'Git',
          items: [
            { text: 'Aliases', link: '/tools/git/aliases.md' },
            { text: 'Commit style', link: '/tools/git/commit-style.md' },
            { text: 'Commit sign', link: '/tools/git/sign-commits.md' },
          ]
        },
        {
          text: 'Docker',
          items: [
            { text: 'Install', link: '/tools/docker/install.md' },
            { text: 'Examples', items: [
                { text: 'Home', link: '/tools/docker/examples/home.md' },
                { text: 'Databases', link: '/tools/docker/examples/databases.md' },
                { text: 'Development', link: '/tools/docker/examples/dev.md' },
            ]},
          ]
        },
      ],
      '/others/': [
        {
          text: 'Apps',
          items: [
            { text: 'Windows', link: '/others/apps/windows.md' },
            { text: 'MacOs', link: '/others/apps/macos.md' },
            { text: 'Universal', link: '/others/apps/universal.md' },
            { text: 'Self Hosted', link: '/others/apps/self-hosted.md' },
            { text: 'Sites', link: '/others/apps/sites.md' },
          ]
        }
      ],
    },
    socialLinks: [
      { icon: 'telegram', link: 'https://t.me/BaggerFast' },
      { icon: 'youtube', link: 'https://www.youtube.com/c/baggerfast' },
      { icon: 'github', link: 'https://github.com/BaggerFast' }
    ]
  }
})
