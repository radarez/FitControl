import FCHomePage from './pages/FC_home.vue';
import FCChronometer from './pages/FC_chronometer.vue';
import FCRange from './pages/FC_range.vue';
import HomePageComponents from './pages/home.vue';
import AboutPage from './pages/about.vue';
import FormPage from './pages/form.vue';
import DynamicRoutePage from './pages/dynamic-route.vue';
import NotFoundPage from './pages/not-found.vue';

import PanelLeftPage from './pages/panel-left.vue';
import PanelRightPage from './pages/panel-right.vue';

export default [
  {
    path: '/',
    component: FCHomePage,
  },
  {
    path: '/chronometer',
    component: FCChronometer,
  },
  {
    path: '/range',
    component: FCRange,
  },
  {
    path: '/components',
    component: HomePageComponents,
  },
  {
    path: '/panel-left/',
    component: PanelLeftPage,
  },
  {
    path: '/panel-right/',
    component: PanelRightPage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
