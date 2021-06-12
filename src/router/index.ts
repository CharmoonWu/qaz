import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const dogView = () => import("@/views/dogView.vue");
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: dogView
  },
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
