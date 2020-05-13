import Router from "next/router";
const CONST_KEY_TOKEN = "id_token";
const CONST_KEY_PROFILE = "profile";
export default class AuthService {
  constructor() {
    this.getProfile = this.getProfile.bind(this);
  }

  loggedIn() {
    const token = this.getToken();
    return !!token;
  }

  setProfile(profile) {
    localStorage.setItem(CONST_KEY_PROFILE, JSON.stringify(profile));
  }

  getProfile() {
    const profile = localStorage.getItem(CONST_KEY_PROFILE);
    return profile ? JSON.parse(localStorage.profile) : {};
  }

  setToken(idToken) {
    localStorage.setItem(CONST_KEY_TOKEN, idToken);
  }

  getToken() {
    return localStorage.getItem(CONST_KEY_TOKEN);
  }

  login = () => {
    this.setToken("token");
    Router.push({
      pathname: "/",
    });
  };

  logout() {
    localStorage.removeItem(CONST_KEY_TOKEN);
    localStorage.removeItem(CONST_KEY_PROFILE);
    Router.push({
      pathname: "/login",
    });
  }

  _checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      var error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }
}
