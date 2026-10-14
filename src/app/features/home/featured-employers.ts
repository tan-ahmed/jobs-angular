import { Component } from '@angular/core';

import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight, lucideBuilding2 } from '@ng-icons/lucide';

import { employers } from './data/jobs-data';

@Component({
  selector: 'app-featured-employers',
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideArrowRight, lucideBuilding2 })],
  templateUrl: './featured-employers.html',
})
export class FeaturedEmployers {
  protected readonly employers = employers;
}
