import Vue from 'vue'
import VueRouter from 'vue-router'
import Play from '../views/Play.vue'
import Sequence from '../views/Sequence.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/mini-drum-kit',
    name: 'Play',
    component: Play
  },
  {
    path: '/mini-drum-kit/sequence',
    name: 'Sequence',
    component: Sequence
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
