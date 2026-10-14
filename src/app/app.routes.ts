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
];
