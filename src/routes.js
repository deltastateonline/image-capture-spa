import HomePage from './pages/home.vue';
import ImagesPage from './pages/images.vue';
import ThankuPage from './pages/thanku.vue';
import SorryPage from './pages/sorry.vue';

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
    component: ImagesPage,
  },
  {
    path: '/thanku/',
    component: ThankuPage,
  },
  {
    path: '/sorry/',
    component: SorryPage,
  },  
  {
    path: '(.*)',
    component: SorryPage,
  },
];
