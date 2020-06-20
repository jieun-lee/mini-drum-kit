import Vue from 'vue'
import VueRouter from 'vue-router'
import PlayView from '../views/PlayView.vue'
import SequenceView from '../views/SequenceView.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/mini-drum-kit',
    name: 'Play',
    component: PlayView
  },
  {
    path: '/mini-drum-kit/sequence',
    name: 'Sequence',
    component: SequenceView
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
