export const handleLogout = () => {
  window.location.href = process.env.baseUrl + '/api/v1/auth/logout';
};
