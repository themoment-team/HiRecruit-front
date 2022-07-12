export const handleAuth = () => {
  window.location.href =
    process.env.baseUrl + '/api/v1/auth/oauth2/authorization/github';
};

export const handleLogout = () => {
  window.location.href = process.env.baseUrl + '/api/v1/auth/logout';
};
