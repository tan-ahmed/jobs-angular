import { DatePipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucidePlus } from '@ng-icons/lucide';

import { ZardAlertComponent } from '@/shared/components/alert';
import { ZardAlertDialogImports } from '@/shared/components/alert-dialog';
import { ZardButtonComponent } from '@/shared/components/button';
import { ZardSkeletonComponent } from '@/shared/components/skeleton';

import type { JobAlert } from './job-alert.model';
import { JobAlertsService, fakeNetworkDelay } from './job-alerts.service';

@Component({
  selector: 'app-manage-job-alerts',
  imports: [
    DatePipe,
    NgIcon,
    RouterLink,
    ZardAlertComponent,
    ZardButtonComponent,
    ZardSkeletonComponent,
    ...ZardAlertDialogImports,
  ],
  viewProviders: [provideIcons({ lucidePlus })],
  templateUrl: './manage-job-alerts.html',
})
export class ManageJobAlerts {
  private readonly jobAlerts = inject(JobAlertsService);

  protected readonly loading = signal(true);
  protected readonly deleteDialogOpen = signal(false);
  protected readonly unsubscribeAllDialogOpen = signal(false);
  protected readonly pendingDeleteId = signal<string | null>(null);
  protected readonly deleting = signal(false);
  protected readonly unsubscribingAll = signal(false);
  protected readonly statusMessage = signal<string | null>(null);

  protected readonly alerts = this.jobAlerts.alerts;
  protected readonly hasAlerts = computed(() => this.alerts().length > 0);

  protected readonly pendingDeleteAlert = computed(() => {
    const id = this.pendingDeleteId();
    return id ? this.alerts().find(alert => alert.id === id) : undefined;
  });

  constructor() {
    void this.hydrate();
  }

  protected frequencyLabel(alert: JobAlert): string {
    if (alert.frequency === 'weekly' && alert.weeklyDay) {
      return `Weekly (${alert.weeklyDay})`;
    }
    return alert.frequency === 'weekly' ? 'Weekly' : 'Daily';
  }

  protected criteriaLabel(alert: JobAlert): string {
    const parts = [
      alert.jobTitle || 'Any job title',
      alert.location
        ? `${alert.location}${alert.searchRadius ? ` · within ${alert.searchRadius} miles` : ''}`
        : 'Any location',
    ];
    if (alert.contractTypes.length) {
      parts.push(alert.contractTypes.join(', '));
    }
    return parts.join(' · ');
  }

  protected requestDelete(id: string): void {
    this.statusMessage.set(null);
    this.unsubscribeAllDialogOpen.set(false);
    this.pendingDeleteId.set(id);
    this.deleteDialogOpen.set(true);
  }

  protected onDeleteDialogVisibleChange(visible: boolean): void {
    this.deleteDialogOpen.set(visible);
    if (!visible && !this.deleting()) {
      this.pendingDeleteId.set(null);
    }
  }

  protected async confirmDelete(): Promise<void> {
    const id = this.pendingDeleteId();
    if (!id || this.deleting()) {
      return;
    }

    this.deleting.set(true);
    this.statusMessage.set(null);
    await fakeNetworkDelay();
    this.jobAlerts.delete(id);
    this.deleting.set(false);
    this.deleteDialogOpen.set(false);
    this.pendingDeleteId.set(null);
    this.statusMessage.set('Alert deleted.');
  }

  protected requestUnsubscribeAll(): void {
    this.statusMessage.set(null);
    this.deleteDialogOpen.set(false);
    this.pendingDeleteId.set(null);
    this.unsubscribeAllDialogOpen.set(true);
  }

  protected async confirmUnsubscribeAll(): Promise<void> {
    if (this.unsubscribingAll()) {
      return;
    }

    this.unsubscribingAll.set(true);
    this.statusMessage.set(null);
    await fakeNetworkDelay();
    this.jobAlerts.deleteAll();
    this.unsubscribingAll.set(false);
    this.unsubscribeAllDialogOpen.set(false);
    this.statusMessage.set('You have been unsubscribed from all job alerts.');
  }

  private async hydrate(): Promise<void> {
    this.loading.set(true);
    await fakeNetworkDelay(450);
    this.loading.set(false);
  }
}
