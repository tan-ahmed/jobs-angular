import { NgOptimizedImage } from '@angular/common';
import { Component, signal } from '@angular/core';

import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMapPin, lucideSearch } from '@ng-icons/lucide';

import { ZardButtonComponent } from '@/shared/components/button';
import { ZardInputComponent } from '@/shared/components/input';
import { ZardInputGroupImports } from '@/shared/components/input-group';
import { ZardSelectImports } from '@/shared/components/select/select.imports';

const RADII = [
  { value: '0', label: 'Exact location' },
  { value: '5', label: 'Within 5 miles' },
  { value: '10', label: 'Within 10 miles' },
  { value: '25', label: 'Within 25 miles' },
  { value: '50', label: 'Within 50 miles' },
] as const;

@Component({
  selector: 'app-hero',
  imports: [
    NgOptimizedImage,
    NgIcon,
    ZardButtonComponent,
    ZardInputComponent,
    ...ZardInputGroupImports,
    ...ZardSelectImports,
  ],
  viewProviders: [provideIcons({ lucideMapPin, lucideSearch })],
  templateUrl: './hero.html',
})
export class Hero {
  protected readonly radii = RADII;

  protected readonly keyword = signal('');
  protected readonly location = signal('');
  protected readonly radius = signal('0');

  protected onRadiusChange(value: string | string[]): void {
    this.radius.set(Array.isArray(value) ? (value[0] ?? '0') : value);
  }

  protected onSearch(event: Event): void {
    event.preventDefault();
  }
}
