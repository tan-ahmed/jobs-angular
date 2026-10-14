import { ViewportScroller, isPlatformBrowser } from '@angular/common';
import { Component, Injector, PLATFORM_ID, afterNextRender, inject, signal } from '@angular/core';
import { email, form, FormField, required, submit } from '@angular/forms/signals';
import { RouterLink } from '@angular/router';

import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucidePlus } from '@ng-icons/lucide';

import { ZardAlertComponent } from '@/shared/components/alert';
import { ZardButtonComponent } from '@/shared/components/button';
import { ZardFieldImports } from '@/shared/components/field/field.imports';
import { ZardInputComponent } from '@/shared/components/input';
import { ZardSelectImports } from '@/shared/components/select/select.imports';

import type { AlertFrequency } from './job-alert.model';
import { JobAlertsService, fakeNetworkDelay } from './job-alerts.service';

interface JobAlertFormModel {
  email: string;
  jobTitle: string;
  location: string;
  searchRadius: string;
  frequency: AlertFrequency;
}

@Component({
  selector: 'app-get-job-alerts',
  imports: [
    FormField,
    NgIcon,
    RouterLink,
    ZardAlertComponent,
    ZardButtonComponent,
    ZardInputComponent,
    ...ZardFieldImports,
    ...ZardSelectImports,
  ],
  viewProviders: [provideIcons({ lucidePlus })],
  templateUrl: './get-job-alerts.html',
})
export class GetJobAlerts {
  private readonly jobAlerts = inject(JobAlertsService);
  private readonly viewport = inject(ViewportScroller);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly injector = inject(Injector);

  protected readonly radiusOptions = [
    '5',
    '10',
    '15',
    '20',
    '25',
    '30',
    '35',
    '40',
    '45',
    '50',
    '60',
    '70',
    '80',
    '90',
    '100',
  ] as const;

  protected readonly submitting = signal(false);
  protected readonly submitted = signal(false);
  protected readonly showValidationHint = signal(false);

  protected readonly alertModel = signal<JobAlertFormModel>({
    email: '',
    jobTitle: '',
    location: '',
    searchRadius: '30',
    frequency: 'daily',
  });

  protected readonly alertForm = form(this.alertModel, schemaPath => {
    required(schemaPath.email, { message: 'Email address is required' });
    email(schemaPath.email, { message: 'Enter a valid email address' });
    required(schemaPath.frequency, { message: 'Please choose how often to receive jobs' });
  });

  protected onSubmit(event: Event): void {
    event.preventDefault();
    this.submitted.set(false);
    this.showValidationHint.set(false);

    void submit(this.alertForm, {
      action: async () => {
        this.submitting.set(true);
        await fakeNetworkDelay();
        this.jobAlerts.create(this.alertModel());
        this.submitting.set(false);
        this.submitted.set(true);
        this.scrollToTop();
      },
      onInvalid: () => {
        this.showValidationHint.set(true);
        this.focusFirstInvalidField();
      },
    });
  }

  protected createAnother(): void {
    const email = this.alertModel().email;
    this.alertModel.set({
      email,
      jobTitle: '',
      location: '',
      searchRadius: '30',
      frequency: 'daily',
    });
    this.submitted.set(false);
    this.showValidationHint.set(false);
    this.scrollToTop();
  }

  private focusFirstInvalidField(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    afterNextRender(
      () => {
        document
          .getElementById('form-validation-alert')
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' });

        const targetId = this.alertForm.email().invalid()
          ? 'email'
          : this.alertForm.frequency().invalid()
            ? 'frequency-daily'
            : null;

        if (!targetId) {
          return;
        }

        document.getElementById(targetId)?.focus({ preventScroll: true });
      },
      { injector: this.injector },
    );
  }

  private scrollToTop(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    afterNextRender(
      () => {
        this.viewport.scrollToPosition([0, 0]);
      },
      { injector: this.injector },
    );
  }
}
