import { createRouter, createWebHistory } from 'vue-router';
import ConnectWallet from '../components/ConnectWallet.vue';

const routes = [
  {
    path: '/',
    name: 'ConnectWallet',
    component: ConnectWallet,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
