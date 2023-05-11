import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'
import JobDetail from '../views/Jobs/JobDetail.vue'
import MemberView from '../views/Members/MemberView.vue'
import MemberDetail from '../views/Members/MemberDetail.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component:()=> import ('../views/AboutView.vue')
  },
  {
    path: '/job',
    name : 'job',
    component : ()=> import ('../views/Jobs/JobView.vue')
  },
  {
    path : '/job/jobdetail/:id',
    name : 'jobdetail',
    component : JobDetail,
    props : true
  },
  {
    path: '/member',
    name : 'member',
    component : MemberView ,
  },
  {
    path : '/member/memberdetail/:id',
    name : 'memberdetail',
    component : MemberDetail,
    props : true
  },
  {
    path: '/all-jobs',
    redirect : '/job'
  },
  {
    path: "/:catchAll(.*)",
    name : 'notfound',
    component : NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
