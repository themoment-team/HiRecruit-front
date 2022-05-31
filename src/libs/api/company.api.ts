import axiosClient from 'libs/axios/axiosClient';
import { CompanyData } from 'types/company.type';

/**
 * 전체 회사 데이터 조회.
 */
export const getCompanyList = async (): Promise<CompanyData[]> => {
  const url = `/company`;
  const { data } = await axiosClient.get<CompanyData[]>(url);
  return data;
};
