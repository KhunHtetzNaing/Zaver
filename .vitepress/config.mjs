import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Zaver",
  description: "🚀 Instantly save videos, images, and stories from TikTok, Instagram, Facebook, Twitter, and more—with just one tap! Effortlessly download your favorite content without watermarks or sign-ups.",
  base: '/Zaver/',
  head: [
      [
      'link',
      {
          ref: 'manifest',
          href: 'manifest.json'
      }
    ],
[
      'link',
      {
          ref: 'apple-touch-icon',
          href: 'icons/icon-192.png'
      }
    ],
    // Meta keywords (not widely used in modern SEO but can still help)
    [
      'meta',
      {
          name: 'keywords',
          content: 'facebook video downloader, download facebook video, tiktok video downloader no watermark, instagram video downloader, download instagram video in HD, social media downloader, media saver app, download videos from social media, download Instagram stories, save TikTok videos, save Facebook videos, save Twitter videos, free media downloader, fast video downloader, Instagram video downloader, TikTok photo downloader, download videos in HD, one-tap download app, social media content downloader, no watermark downloader, download Instagram photos, multi-platform downloader, free social media downloader, quick media downloader, Zaver app, Zaver media downloader'
      }
    ],
    // Open Graph tags for better social media sharing
    [
      'meta',
      {
        property: 'og:title',
        content: 'Zaver - All In One Media Downloader'
      }
    ],
    [
      'meta',
      {
        property: 'og:description',
        content: '🚀 Instantly save videos, images, and stories from TikTok, Instagram, Facebook, Twitter, and more—with just one tap! Effortlessly download your favorite content without watermarks or sign-ups.'
      }
    ],
    [
      'meta',
      {
        property: 'og:image',
        content: '/icons/play_store_feature_graphic.png'
      }
    ],
    [
      'meta',
      {
        property: 'og:url',
        content: 'https://khunhtetznaing.github.io/Zaver'
      }
    ],
      ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/icons/icon-192.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Privacy Policy', link: '/privacy' },
      { text: 'Term & Conditions', link: '/terms' },
    ],

    sidebar: [
      {
        text: 'Legal Information',
        items: [
          { text: 'Privacy Policy', link: '/privacy' },
          { text: 'Term & Conditions', link: '/terms' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/khunhtetznaing/Zaver' }
    ]
  }
})
