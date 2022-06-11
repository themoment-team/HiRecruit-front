import useSWR from 'swr';

import apiClient from 'libs/axios/axiosClient';
import { companyUrl } from 'libs/api/apiUrlControllers';
import { CompanyData } from 'types/company.type';

interface UseCompanyList {
  data: CompanyData[];
}

const useCompanyList = () => {
  const { data, error } = useSWR<UseCompanyList>(
    companyUrl.getAllCompany(),
    apiClient.get,
  );

  return {
    data: data?.data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useCompanyList;
