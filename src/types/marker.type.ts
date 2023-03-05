import { CompanyData } from './company.type';

export interface MarkerData extends CompanyData {
  position: {
    lat: number;
    lng: number;
  };
}
