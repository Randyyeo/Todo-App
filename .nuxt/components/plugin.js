import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  VuetifyLogo: () => import('../../components/VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => wrapFunctional(c.default || c)),
  Date: () => import('../../components/date.vue' /* webpackChunkName: "components/date" */).then(c => wrapFunctional(c.default || c)),
  TaskList: () => import('../../components/task-list.vue' /* webpackChunkName: "components/task-list" */).then(c => wrapFunctional(c.default || c)),
  Task: () => import('../../components/task.vue' /* webpackChunkName: "components/task" */).then(c => wrapFunctional(c.default || c)),
  Toolbar: () => import('../../components/toolbar.vue' /* webpackChunkName: "components/toolbar" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
