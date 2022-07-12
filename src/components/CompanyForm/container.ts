export interface InputListType {
  companyName: string;
  companyLocation: string;
  homepageUri: string;
  companyImgUri: string;
}

export const handleLogout = () => {
  window.location.href = process.env.baseUrl + '/api/v1/auth/logout';
};
