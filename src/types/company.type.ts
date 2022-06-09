export interface CompanyData {
  companyId: number;
  name: string;
  location: string;
  homepageUri: string;
  companyImgUri?: string;
}

export type CompanyReqData = Omit<CompanyData, 'companyId'>;
