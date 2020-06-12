import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Message from '../views/Message.vue'
import CaseHall from '../views/CaseHall.vue'
import Search from '../views/Search.vue'
import Registered from '../views/Registered.vue'
import Release from '../views/Release.vue'
import Personal from '../views/Personal.vue'
import ProjectHall from '../views/ProjectHall.vue'
import Login from '../views/Login.vue'
import Details from '../views/Details.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    meta:{
      showTab:true
    }
  },
  {
    path: '/message',
    name: 'Message',
    component: Message,
    meta:{
      showTab:true
    }
  },
  {
    path: '/caseHall',
    name: 'CaseHall',
    component: CaseHall
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/registered',
    name: 'Registered',
    component: Registered
  },
  {
    path: '/release',
    name: 'Release',
    component: Release,
    meta:{
      showTab:true
    }
  },
  {
    path: '/personal',
    name: 'Personal',
    component: Personal,
  },
  {
    path: '/projectHall',
    name: 'ProjectHall',
    component: ProjectHall
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/details',
    name: 'Details',
    component: Details
  },
  // {
  //   path: '/details',
  //   name: 'Details',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Details.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
