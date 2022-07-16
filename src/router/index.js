import Vue from 'vue'
import VueRouter from 'vue-router'
import logIn from '../components/logIn.vue'
import navMenuHome from '../components/navMenuHome.vue'
import AccountData from '../components/AccountData.vue'
import AnswerData from '../components/AnswerData.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: 'logIn'
},
{
  path: '/logIn',
  component: logIn,
  name: 'logIn'
},
{
  path: '/navMenuHome',
  component: navMenuHome,
  redirect: '/AnswerData',
  children: [
    {
      path: '/AnswerData',
      component: AnswerData
    },
    {
      path: '/AccountData',
      component: AccountData
    }
  ]
}
]

const router = new VueRouter({
  routes
})

export default router
