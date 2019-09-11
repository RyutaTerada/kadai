import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ae899978 = () => interopDefault(import('..\\pages\\dentaku.vue' /* webpackChunkName: "pages_dentaku" */))
const _1fdb70fa = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages_inspire" */))
const _31b6ecf2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/dentaku",
      component: _ae899978,
      name: "dentaku"
    }, {
      path: "/inspire",
      component: _1fdb70fa,
      name: "inspire"
    }, {
      path: "/",
      component: _31b6ecf2,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
