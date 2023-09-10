import Vue from 'vue'
import VueRouter from 'vue-router'
import StudentView from '../views/StudentView.vue'
import AboutView from '../views/AboutView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/student',  // 首页重定向
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/student',
    name: 'student',
    component: StudentView
  }
]

const router = new VueRouter({
  routes
})

export default router
