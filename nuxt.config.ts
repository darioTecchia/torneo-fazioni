// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      title: 'Torneo Fazioni',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Torneo Fazioni' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg', href: '/favicon.svg' }
      ]
    },
    baseURL: '/torneo-fazioni/'
  },
  modules: [
  ],
  css: [
    'mapbox-gl/dist/mapbox-gl.css',
    '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css',
    "bootstrap/dist/css/bootstrap.min.css",
    "bootstrap-vue-3/dist/bootstrap-vue-3.css",
    '@/assets/style/main.scss',
  ]
})