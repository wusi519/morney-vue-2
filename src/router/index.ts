import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Home from '../views/Home.vue';
import Money from '@/Money.vue';
import Labels from '@/Labels.vue';
import Statistics from '@/Statistics.vue';
import NotFound from '@/NotFound.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/money'
  },
  {
    path: '/money',
    component: Money
  },
  {
    path: '/labels',
    component: Labels
  },
  {
    path: '/statistics',
    component: Statistics
  },
  {
    path: '*',
    component: NotFound
  },

];

const router = new VueRouter({
  routes
});

export default router;
