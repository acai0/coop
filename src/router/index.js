import Vue from 'vue'
import VueRouter from 'vue-router'
//import CreationCompte from '../views/CreationCompte.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Conversations',
    component:()=> import('../views/Conversation.vue')
  },
  {
    path: '/creation-compte',
    name: 'CreationCompte',
    component:()=> import('../views/CreationCompte.vue')
  },
  {
    path: '/connection',
    name: 'Connection',
    component:()=> import('../views/Connection.vue')
  },
  {
    path: '/creer-conversation',
    name: 'Creer-conversation',
    component:()=> import('../views/CreationConversation.vue')
  },
  {
    path: '/deconnexion',
    name: 'deconnexion',
    component:()=> import('../views/Deconnexion.vue')
  },
  {
    path: '/conversation/:idConversation',
    name: 'Conversation',
    component:()=> import('../views/Conversation.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: "is-active",
  routes
})

export default router
