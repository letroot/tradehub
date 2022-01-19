export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Home :: Joe Elite TradeHub',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
    'vue-slick-carousel/dist/vue-slick-carousel.css',
    'vue-slick-carousel/dist/vue-slick-carousel-theme.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: './plugins/vue-slick-carousel.js' },
    { src: '~/plugins/vue-agile', mode: 'client' },
  ],

  build: {
    transpile: ['vue-agile'],
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-facebook-pixel-module',
  ],

  facebook: {
    pixelId: '984424319024714',
    pixels: [
      {
        autoPageView: true,
        disabled: false,
        pixelId: '984424319024714',
        routes: ['/community', '/communityplus'],
      },
      {
        autoPageView: true,
        disabled: false,
        pixelId: '606022610772008',
        routes: ['/freebook', 'bookthankyou'],
      },
      {
        autoPageView: true,
        disabled: false,
        pixelId: '596402361537328',
        routes: ['/maxprofit-course'],
      },
    ],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
