import { Component, computed, signal } from '@angular/core';

import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowUpRight } from '@ng-icons/lucide';

import {
  academicDisciplines,
  professionalDisciplines,
  researchDisciplines,
  type Discipline,
} from './data/jobs-data';

type BrowseTab = {
  id: string;
  label: string;
  data: Discipline[];
};

const TABS: BrowseTab[] = [
  { id: 'academic', label: 'Academic & Research', data: academicDisciplines },
  { id: 'professional', label: 'Professional & Support', data: professionalDisciplines },
  { id: 'phd', label: 'PhDs & Studentships', data: researchDisciplines },
];

@Component({
  selector: 'app-browse-disciplines',
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideArrowUpRight })],
  templateUrl: './browse-disciplines.html',
})
export class BrowseDisciplines {
  protected readonly tabs = TABS;
  protected readonly activeId = signal(TABS[0].id);

  protected readonly current = computed(
    () => this.tabs.find(tab => tab.id === this.activeId()) ?? this.tabs[0],
  );

  protected selectTab(id: string): void {
    this.activeId.set(id);
  }
}
