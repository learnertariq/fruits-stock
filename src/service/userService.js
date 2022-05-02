import http from "./http";

const apiendpoint = "/login";
http.setToken(getToken());

const login = async ({ email }) => {
  const { data, headers } = await http.post(apiendpoint, {
    email,
  });

  console.log(headers);
  localStorage.setItem("x-auth-token", headers["x-auth-token"]);

  return data;
};

const logout = () => {
  localStorage.removeItem("x-auth-token");
};

function getToken() {
  return localStorage.getItem("x-auth-token");
}

export default {
  login,
  logout,
};
