import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'get-job-alerts/manage',
    renderMode: RenderMode.Client,
  },
  {
    path: 'get-job-alerts/unsubscribe/:alertId',
    renderMode: RenderMode.Client,
  },
  {
    path: 'get-job-alerts/unsubscribe-all',
    renderMode: RenderMode.Client,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
