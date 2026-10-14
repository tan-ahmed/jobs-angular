import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SiteFooter } from '@/shared/layout/site-footer/site-footer';
import { SiteHeader } from '@/shared/layout/site-header/site-header';

@Component({
  imports: [RouterOutlet, SiteHeader, SiteFooter],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {}
