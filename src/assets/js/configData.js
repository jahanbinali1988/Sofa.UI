function getDevConfigData() {
  var config = {
    API_Url: "http://localhost:63926/",
    server: "http://localhost:63926/",
    TOKEN_ENDPOINT: "http://localhost:63926/connect/token",
    REVOCATION_ENDPOINT: "http://localhost:63926/connect/revocation",
    USERINFO_ENDPOINT: "http://localhost:63926/connect/userinfo",
    CLIENT_ID : "AndroidClient",
    CLIENT_SECRET:"secret",
    GRANT_TYPE : "password",
    SCOPE : "api offline_access",
    id_token : 'id_token',
    refresh_token : 'refresh_token',
  };
  return config;
}

function getProdConfigData() {
  var config = {
    API_Url: "http://localhost:63926/api",
    server: "http://localhost:63926/connect/token",
    TOKEN_ENDPOINT: "http://localhost:63926/connect/token",
    REVOCATION_ENDPOINT: "http://localhost:63926/connect/revocation",
    USERINFO_ENDPOINT: "http://localhost:63926/connect/userinfo",
    CLIENT_ID : "AndroidClient",
    CLIENT_SECRET:"secret",
    GRANT_TYPE : "password",
    SCOPE : "api offline_access",
    id_token : 'id_token',
    refresh_token : 'refresh_token',
  };
  return config;
}
