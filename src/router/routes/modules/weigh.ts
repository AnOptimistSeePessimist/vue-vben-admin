import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const weigh: AppRouteModule = {
  path: '/weigh',
  name: 'Weigh',
  component: LAYOUT,
  redirect: '/weigh/bulk',
  meta: {
    orderNo: 12,
    icon: 'mdi:weight-kilogram',
    title: t('routes.weigh.weigh'),
  },
  children: [
    {
      path: 'bulk',
      name: 'Bulk',
      component: () => import('/@/views/weigh/bulk/index.vue'),
      meta: {
        title: t('routes.weigh.bulk'),
      },
    },
    {
      path: 'box',
      name: 'Box',
      component: () => import('/@/views/weigh/box/index.vue'),
      meta: {
        title: t('routes.weigh.box'),
      },
    },
  ],
};

export default weigh;
