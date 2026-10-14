export type AlertFrequency = 'daily' | 'weekly';

export type ContractType = 'permanent' | 'temporary' | 'contract';

export interface JobAlert {
  id: string;
  email: string;
  jobTitle: string;
  location: string;
  searchRadius: string;
  frequency: AlertFrequency;
  weeklyDay?: string;
  contractTypes: ContractType[];
  createdAt: string;
}

export interface CreateJobAlertInput {
  email: string;
  jobTitle: string;
  location: string;
  searchRadius: string;
  frequency: AlertFrequency;
  weeklyDay?: string;
  contractTypes?: ContractType[];
}
