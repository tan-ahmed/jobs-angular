import { NgOptimizedImage, isPlatformBrowser } from '@angular/common';
import {
  Component,
  DestroyRef,
  PLATFORM_ID,
  effect,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';

import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMenu, lucideUserRound, lucideX } from '@ng-icons/lucide';
import { filter } from 'rxjs';

import { ZardButtonComponent } from '@/shared/components/button';

const NAV_ITEMS = [
  { label: 'Find a Job', link: '/', kind: 'route' as const },
  { label: 'Find PhDs', link: '#phds', kind: 'hash' as const },
  { label: 'Career Advice', link: '#advice', kind: 'hash' as const },
  { label: 'Jobs by Email', link: '/get-job-alerts', kind: 'route' as const },
  { label: 'Advertise a Job', link: '#advertise', kind: 'hash' as const },
];

@Component({
  selector: 'app-site-header',
  imports: [NgOptimizedImage, NgIcon, RouterLink, RouterLinkActive, ZardButtonComponent],
  viewProviders: [provideIcons({ lucideMenu, lucideUserRound, lucideX })],
  templateUrl: './site-header.html',
})
export class SiteHeader {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);
  private readonly router = inject(Router);

  protected readonly navItems = NAV_ITEMS;
  protected readonly menuOpen = signal(false);

  constructor() {
    effect(() => {
      if (!isPlatformBrowser(this.platformId)) {
        return;
      }
      document.body.style.overflow = this.menuOpen() ? 'hidden' : '';
    });

    this.destroyRef.onDestroy(() => {
      if (isPlatformBrowser(this.platformId)) {
        document.body.style.overflow = '';
      }
    });

    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => this.closeMenu());
  }

  protected toggleMenu(): void {
    this.menuOpen.update(open => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
