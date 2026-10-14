import { Component } from '@angular/core';

const STATS = [
  { value: '2,600+', label: 'Live vacancies' },
  { value: '4,700+', label: 'Employers' },
  { value: '160+', label: 'Countries' },
] as const;

@Component({
  selector: 'app-trust-stats',
  template: `
    <section aria-label="Platform stats" class="border-b border-border bg-secondary/40">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <dl class="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-5 sm:py-6">
          @for (stat of stats; track stat.label) {
            <div class="flex items-baseline gap-2">
              <dt class="sr-only">{{ stat.label }}</dt>
              <dd class="font-serif text-xl font-semibold text-foreground sm:text-2xl">
                {{ stat.value }}
              </dd>
              <span class="text-sm text-muted-foreground">{{ stat.label }}</span>
            </div>
          }
        </dl>
      </div>
    </section>
  `,
})
export class TrustStats {
  protected readonly stats = STATS;
}
