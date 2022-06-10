import useSWR from 'swr';

import apiClient from 'libs/axios/axiosClient';
import { CompanyData } from 'types/company.type';

interface UseCompanyList {
  data: CompanyData[];
}

const useCompanyList = () => {
  const { data, error } = useSWR<UseCompanyList>(`/company`, apiClient.get);

  return {
    data: data?.data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useCompanyList;
