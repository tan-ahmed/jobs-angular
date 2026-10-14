import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

const COLUMNS = [
  {
    title: 'Job seekers',
    links: ['Find a Job', 'Find PhDs', 'Jobs by Email', 'Your Account', 'Saved Jobs'],
  },
  {
    title: 'Employers',
    links: ['Advertise a Job', 'Recruiter Login', 'Products & Pricing', 'Featured Employers'],
  },
  {
    title: 'Resources',
    links: ['Career Advice', 'PhD Advice', 'Salary Guides', 'Careers in China'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Contact Us', 'Accessibility', 'Privacy Policy'],
  },
] as const;

@Component({
  selector: 'app-site-footer',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './site-footer.html',
})
export class SiteFooter {
  protected readonly columns = COLUMNS;
  protected readonly year = new Date().getFullYear();
}
