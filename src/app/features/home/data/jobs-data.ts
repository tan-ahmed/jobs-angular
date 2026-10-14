export type Discipline = { name: string; count: number };

export const academicDisciplines: Discipline[] = [
  { name: 'Health & Medical', count: 336 },
  { name: 'Computer Sciences', count: 286 },
  { name: 'Biological Sciences', count: 279 },
  { name: 'Physical & Environmental Sciences', count: 247 },
  { name: 'Engineering & Technology', count: 241 },
  { name: 'Mathematics & Statistics', count: 137 },
  { name: 'Business & Management Studies', count: 113 },
  { name: 'Psychology', count: 113 },
  { name: 'Social Sciences & Social Care', count: 93 },
  { name: 'Economics', count: 66 },
  { name: 'Creative Arts & Design', count: 61 },
  { name: 'Education Studies (inc. TEFL)', count: 56 },
  { name: 'Law', count: 56 },
  { name: 'Historical & Philosophical Studies', count: 53 },
  { name: 'Languages, Literature & Culture', count: 49 },
  { name: 'Politics & Government', count: 42 },
  { name: 'Media & Communications', count: 37 },
  { name: 'Agriculture, Food & Veterinary', count: 32 },
  { name: 'Architecture, Building & Planning', count: 21 },
  { name: 'Information Management & Librarianship', count: 19 },
  { name: 'Sport & Leisure', count: 8 },
];

export const professionalDisciplines: Discipline[] = [
  { name: 'Administrative', count: 206 },
  { name: 'Senior Management', count: 163 },
  { name: 'PR, Marketing, Sales & Communication', count: 121 },
  { name: 'Student Services', count: 105 },
  { name: 'Laboratory, Clinical & Technician', count: 102 },
  { name: 'Project Management & Consulting', count: 100 },
  { name: 'Legal, Compliance & Policy', count: 76 },
  { name: 'Estates & Facilities Management', count: 74 },
  { name: 'Finance & Procurement', count: 72 },
  { name: 'Hospitality, Retail, Conferences & Events', count: 70 },
  { name: 'Library Services, Data & Information', count: 59 },
  { name: 'IT Services', count: 57 },
  { name: 'Fundraising, Alumni, Bids & Grants', count: 50 },
  { name: 'Health, Wellbeing & Care', count: 40 },
  { name: 'Human Resources', count: 34 },
  { name: 'International Activities', count: 20 },
  { name: 'Sports & Leisure', count: 16 },
  { name: 'Web Design & Development', count: 5 },
];

export const researchDisciplines: Discipline[] = [
  { name: 'PhDs', count: 128 },
  { name: 'Masters', count: 9 },
];

export const employers: string[] = [
  'Imperial College London',
  'University of Liverpool',
  'Newcastle University',
  'Cardiff University',
  'University of Auckland',
  'De Montfort University',
  'Lincoln Bishop University',
  'University of Wales Trinity Saint David',
];

export const adviceArticles = [
  {
    kicker: 'Interviews',
    title: 'How to secure your first postdoc role',
    excerpt:
      'A practical guide to standing out on the academic job market, from applications to the final interview.',
    image: '/images/advice-interview.png',
    minutes: 6,
  },
  {
    kicker: 'Applications',
    title: 'Writing an academic CV that gets read',
    excerpt:
      'Structure, length and the details that hiring panels actually look for when shortlisting candidates.',
    image: '/images/advice-cv.png',
    minutes: 8,
  },
  {
    kicker: 'PhD & Research',
    title: 'Choosing the right PhD studentship',
    excerpt:
      'How to weigh funding, supervision and research fit before committing to a doctoral programme.',
    image: '/images/advice-phd.png',
    minutes: 5,
  },
] as const;
