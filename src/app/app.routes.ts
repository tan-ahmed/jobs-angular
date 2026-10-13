import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'get-job-alerts',
  },
  {
    path: 'get-job-alerts',
    loadComponent: () =>
      import('./features/get-job-alerts/get-job-alerts').then(m => m.GetJobAlerts),
  },
];
