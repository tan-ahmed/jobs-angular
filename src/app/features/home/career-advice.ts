import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight, lucideClock } from '@ng-icons/lucide';

import { adviceArticles } from './data/jobs-data';

@Component({
  selector: 'app-career-advice',
  imports: [NgOptimizedImage, NgIcon],
  viewProviders: [provideIcons({ lucideArrowRight, lucideClock })],
  templateUrl: './career-advice.html',
})
export class CareerAdvice {
  protected readonly articles = adviceArticles;
}
