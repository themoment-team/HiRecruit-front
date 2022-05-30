import { CompanyData } from './company.type';

export interface UserData {
  workerId: number;
  name: string;
  email: string;
  introduction: string;
  profileImgUri: string;
  giveLink?: string;
  devYear: number;
  position: string;
  company: CompanyData;
}
