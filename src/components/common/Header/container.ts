export const handleAuth = () => {
  window.location.href =
    process.env.baseUrl + '/api/v1/auth/oauth2/authorization/github';
};
