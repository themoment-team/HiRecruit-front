import useSWR from 'swr';

import axios from 'axios';

type SiteStateToken = 'INSPECTION' | 'NORMAL';

interface SiteStateData {
  range: string;
  majorDimension: string;
  values: [[string], [SiteStateToken], [string]];
}

interface UseSiteState {
  data: SiteStateData;
}

const useSiteState = () => {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.gssIdKey}/values/sheet1?key=${process.env.gssApiKey}`;
  const { data, error } = useSWR<UseSiteState>(url, axios.get);

  const siteData = data?.data?.values[1][0];

  return {
    data: siteData,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useSiteState;
