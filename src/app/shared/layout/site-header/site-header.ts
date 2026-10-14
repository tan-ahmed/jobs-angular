import { NgOptimizedImage } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMenu, lucideUserRound, lucideX } from '@ng-icons/lucide';

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
  protected readonly navItems = NAV_ITEMS;
  protected readonly menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update(open => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
