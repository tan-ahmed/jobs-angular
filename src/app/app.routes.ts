import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./features/home/home').then(m => m.Home),
  },
  {
    path: 'get-job-alerts',
    loadComponent: () =>
      import('./features/get-job-alerts/get-job-alerts').then(m => m.GetJobAlerts),
  },
  {
    path: 'get-job-alerts/manage',
    loadComponent: () =>
      import('./features/get-job-alerts/manage-job-alerts').then(m => m.ManageJobAlerts),
  },
  {
    path: 'get-job-alerts/unsubscribe/:alertId',
    loadComponent: () =>
      import('./features/get-job-alerts/unsubscribe-alert').then(m => m.UnsubscribeAlert),
  },
  {
    path: 'get-job-alerts/unsubscribe-all',
    loadComponent: () =>
      import('./features/get-job-alerts/unsubscribe-all-alerts').then(m => m.UnsubscribeAllAlerts),
  },
];
