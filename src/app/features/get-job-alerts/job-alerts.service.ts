import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Service, inject, signal } from '@angular/core';

import type { CreateJobAlertInput, JobAlert } from './job-alert.model';

const STORAGE_KEY = 'jobs-ac-uk-job-alerts';

function createId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }
  return `alert-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

@Service()
export class JobAlertsService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly alertsState = signal<JobAlert[]>([]);

  readonly alerts = this.alertsState.asReadonly();

  constructor() {
    this.alertsState.set(this.readStorage());
  }

  getById(id: string): JobAlert | undefined {
    return this.alertsState().find(alert => alert.id === id);
  }

  create(input: CreateJobAlertInput): JobAlert {
    const alert: JobAlert = {
      id: createId(),
      email: input.email.trim(),
      jobTitle: input.jobTitle.trim(),
      location: input.location.trim(),
      searchRadius: input.searchRadius,
      frequency: input.frequency,
      weeklyDay: input.weeklyDay,
      contractTypes: input.contractTypes ?? [],
      createdAt: new Date().toISOString(),
    };

    this.alertsState.update(alerts => [alert, ...alerts]);
    this.writeStorage();
    return alert;
  }

  delete(id: string): boolean {
    const before = this.alertsState().length;
    this.alertsState.update(alerts => alerts.filter(alert => alert.id !== id));
    const changed = this.alertsState().length !== before;
    if (changed) {
      this.writeStorage();
    }
    return changed;
  }

  deleteAll(): void {
    this.alertsState.set([]);
    this.writeStorage();
  }

  private readStorage(): JobAlert[] {
    if (!isPlatformBrowser(this.platformId)) {
      return [];
    }

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        return [];
      }
      const parsed: unknown = JSON.parse(raw);
      return Array.isArray(parsed) ? (parsed as JobAlert[]) : [];
    } catch {
      return [];
    }
  }

  private writeStorage(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.alertsState()));
  }
}

export function fakeNetworkDelay(ms = 700): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
