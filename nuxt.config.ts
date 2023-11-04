// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {strict: true,},
  strapi: {url: process.env.STRAPI_URL || 'https://api.shots-arw.de'},
  plugins: ['./plugins/markdown.ts'],
  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/strapi',
    '@nuxtjs/i18n'
  ],
  i18n: {
    vueI18n: './i18n.config.ts'
  },
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  },
  // routeRules: {
  //   // https://nuxt.com/docs/guide/concepts/rendering#hybrid-rendering
  //   '/': { prerender: true },
  // },
  app: {
    head: {
      title: 'kyrillix.dev',
      link: [
        {rel: 'icon', href: '/favicon.ico'},
        {rel: 'shortcut icon', href: '/faviconOLD/favicon.ico', type: 'image/x-icon'},
        {rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png'},
        {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png'},
        {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png'},
        {rel: 'manifest', href: '/favicon/site.webmanifest'},
        {rel: 'mask-icon', href: '/favicon/safari-pinned-tab.svg', color: '#3ec4d6'},
        {rel: 'shortcut icon', href: '/favicon/favicon.ico'},
      ],
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {name: 'msapplication-TileColor', content: '#f9f9f9'},
        {name: 'msapplication-config', content: '/favicon/browserconfig.xml'},
        {name: 'theme-color', content: '#f9f9f9'},
      ],
    },
  },
  css: [
    "/assets/css/index.css", // global css
    "/assets/css/theme.css", // theme colors
    "/assets/css/Montserrat.css", // Montserrat font
    "/assets/css/Roboto.css", // Roboto font
    "/assets/css/FontAwesome.css", // FontAwesome
  ],
})
