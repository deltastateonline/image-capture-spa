import HomePage from './pages/home.vue';
import imagesPage from './pages/images.vue';
import thankUPage from './pages/thanku.vue';
import sorryPage from './pages/sorry.vue';

import PanelRightPage from './pages/panel-right.vue';

export default [
  {
    path: '/',
    component: HomePage,
  },  
  {
    path: '/panel-right/',
    component: PanelRightPage,
  },
  {
    path: '/images/',
    component: imagesPage,
  },
  {
    path: '/thanku/',
    component: thankUPage,
  },
  {
    path: '/sorry/',
    component: sorryPage,
  },  
  {
    path: '(.*)',
    component: sorryPage,
  },
];
