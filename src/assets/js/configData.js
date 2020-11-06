function getDevConfigData() {
  var config = {
    API_Url: "http://localhost:63926/",
    Server: "http://localhost:63926/",
    TOKEN_ENDPOINT: "http://localhost:63926/connect/token",
    REVOCATION_ENDPOINT: "http://localhost:63926/connect/revocation",
    USERINFO_ENDPOINT: "http://localhost:63926/Profile/GetCurrentUserInfo",
    CLIENT_ID : "AndroidClient",
    CLIENT_SECRET:"secret",
    GRANT_TYPE : "password",
    SCOPE : "api offline_access",
    Token : 'sofa_token',
    Refresh_Token : 'sofa_refresh_token',
    ClientUserId : "sofa_client_userid",
    ClientUserTitle : "sofa_client_usertitle",
    ClientUserRole : "sofa_client_userrole"
  };
  return config;
}

function getProdConfigData() {
  var config = {
    API_Url: "http://localhost:44306/api",
    Server: "http://localhost:63926/connect/token",
    TOKEN_ENDPOINT: "http://localhost:63926/connect/token",
    REVOCATION_ENDPOINT: "http://localhost:63926/connect/revocation",
    USERINFO_ENDPOINT: "http://localhost:44306/api/Profile/GetCurrentUserInfo",
    CLIENT_ID : "AndroidClient",
    CLIENT_SECRET:"secret",
    GRANT_TYPE : "password",
    SCOPE : "api offline_access",
    Token : 'sofa_token',
    Refresh_Token : 'sofa_refresh_token',
    ClientUserId : "sofa_client_userid",
    ClientUserTitle : "sofa_client_usertitle",
    ClientUserRole : "sofa_client_userrole"
  };
  return config;
}
