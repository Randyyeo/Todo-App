import { wrapFunctional } from './utils'

export { default as VuetifyLogo } from '../../components/VuetifyLogo.vue'
export { default as Date } from '../../components/date.vue'
export { default as TaskList } from '../../components/task-list.vue'
export { default as Task } from '../../components/task.vue'
export { default as Toolbar } from '../../components/toolbar.vue'

export const LazyVuetifyLogo = import('../../components/VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => wrapFunctional(c.default || c))
export const LazyDate = import('../../components/date.vue' /* webpackChunkName: "components/date" */).then(c => wrapFunctional(c.default || c))
export const LazyTaskList = import('../../components/task-list.vue' /* webpackChunkName: "components/task-list" */).then(c => wrapFunctional(c.default || c))
export const LazyTask = import('../../components/task.vue' /* webpackChunkName: "components/task" */).then(c => wrapFunctional(c.default || c))
export const LazyToolbar = import('../../components/toolbar.vue' /* webpackChunkName: "components/toolbar" */).then(c => wrapFunctional(c.default || c))
