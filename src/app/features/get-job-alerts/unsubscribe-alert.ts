import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { ZardAlertComponent } from '@/shared/components/alert';
import { ZardButtonComponent } from '@/shared/components/button';

import { JobAlertsService, fakeNetworkDelay } from './job-alerts.service';

@Component({
  selector: 'app-unsubscribe-alert',
  imports: [RouterLink, ZardAlertComponent, ZardButtonComponent],
  templateUrl: './unsubscribe-alert.html',
})
export class UnsubscribeAlert {
  private readonly route = inject(ActivatedRoute);
  private readonly jobAlerts = inject(JobAlertsService);

  private readonly alertId = toSignal(this.route.paramMap.pipe(map(params => params.get('alertId'))), {
    initialValue: null,
  });

  protected readonly alert = computed(() => {
    const id = this.alertId();
    return id ? this.jobAlerts.getById(id) : undefined;
  });

  protected readonly submitting = signal(false);
  protected readonly done = signal(false);
  protected readonly missing = computed(() => !this.submitting() && !this.done() && !this.alert());

  protected async confirmUnsubscribe(): Promise<void> {
    const id = this.alertId();
    if (!id || this.submitting()) {
      return;
    }

    this.submitting.set(true);
    await fakeNetworkDelay();
    this.jobAlerts.delete(id);
    this.submitting.set(false);
    this.done.set(true);
  }
}
