import { CompanyData } from './company.type';

export interface WorkerData {
  workerId: number;
  name: string;
  email: string;
  introduction: string;
  profileImgUri: string;
  giveLink?: string;
  devYear: number;
  position: string;
  company: CompanyData;
  userType: 'WORKER' | 'MENTOR';
}

export interface WorkerReqData {
  email: string;
  name: string;
  worker: {
    companyId: number;
    devYear: number;
    giveLink?: string;
    introduction: string;
    position: string;
  };
}

export interface WorkerEditReqData {
  companyId?: number;
  devYear?: number;
  giveLink?: string;
  introduction?: string;
  position?: string;
  updateColumns?: string[];
}
