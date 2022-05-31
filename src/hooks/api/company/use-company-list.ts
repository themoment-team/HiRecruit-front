import { useCallback, useEffect, useState } from 'react';

import { getCompanyList } from 'libs/api/company.api';
import { CompanyData } from 'types/company.type';

const useCompanyList = () => {
  const [companyList, setCompanyList] = useState<CompanyData[]>();

  const handleGetCompanyList = useCallback(async () => {
    try {
      const data = await getCompanyList();
      setCompanyList(data);
    } catch (e: any) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    handleGetCompanyList();
  }, [handleGetCompanyList]);

  return companyList;
};

export default useCompanyList;
