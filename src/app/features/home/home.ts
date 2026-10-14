import { Component } from '@angular/core';

import { BrowseDisciplines } from './browse-disciplines';
import { CareerAdvice } from './career-advice';
import { FeaturedEmployers } from './featured-employers';
import { Hero } from './hero';

@Component({
  selector: 'app-home',
  imports: [Hero, BrowseDisciplines, FeaturedEmployers, CareerAdvice],
  template: `
    <main>
      <app-hero />
      <app-browse-disciplines />
      <app-featured-employers />
      <app-career-advice />
    </main>
  `,
})
export class Home {}
