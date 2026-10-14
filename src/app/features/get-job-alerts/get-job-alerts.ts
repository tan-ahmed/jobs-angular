import { Component, signal } from '@angular/core';
import { email, form, FormField, required, submit } from '@angular/forms/signals';

import { ZardButtonComponent } from '@/shared/components/button';
import { ZardFieldImports } from '@/shared/components/field/field.imports';
import { ZardInputComponent } from '@/shared/components/input';
import { ZardSelectImports } from '@/shared/components/select/select.imports';

type AlertFrequency = 'daily' | 'weekly';

interface JobAlertModel {
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
    ZardButtonComponent,
    ZardInputComponent,
    ...ZardFieldImports,
    ...ZardSelectImports,
  ],
  templateUrl: './get-job-alerts.html',
})
export class GetJobAlerts {
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

  protected readonly submitted = signal(false);

  protected readonly alertModel = signal<JobAlertModel>({
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

    void submit(this.alertForm, async () => {
      // Dummy submit — no backend yet
      console.log('Job alert created', this.alertModel());
      this.submitted.set(true);
    });
  }
}
