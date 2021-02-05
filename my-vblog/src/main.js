// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import './assets/css/main.css'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
    Vue.mixin({
    data() {
      return {
        baseUrl: process.env.GRIDSOME_API_URL
      }
    }
  })
  Vue.component('Layout', DefaultLayout)
}