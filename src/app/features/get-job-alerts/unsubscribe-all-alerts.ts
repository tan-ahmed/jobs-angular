import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ZardAlertComponent } from '@/shared/components/alert';
import { ZardButtonComponent } from '@/shared/components/button';

import { JobAlertsService, fakeNetworkDelay } from './job-alerts.service';

@Component({
  selector: 'app-unsubscribe-all-alerts',
  imports: [RouterLink, ZardAlertComponent, ZardButtonComponent],
  templateUrl: './unsubscribe-all-alerts.html',
})
export class UnsubscribeAllAlerts {
  private readonly jobAlerts = inject(JobAlertsService);

  protected readonly alertCount = computed(() => this.jobAlerts.alerts().length);
  protected readonly submitting = signal(false);
  protected readonly done = signal(false);

  protected async confirmUnsubscribeAll(): Promise<void> {
    if (this.submitting()) {
      return;
    }

    this.submitting.set(true);
    await fakeNetworkDelay();
    this.jobAlerts.deleteAll();
    this.submitting.set(false);
    this.done.set(true);
  }
}
