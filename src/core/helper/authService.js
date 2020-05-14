import Router from "next/router";
import Cookie from "js-cookie";
export const CONST_KEY_TOKEN = "sojo_token";
export const CONST_KEY_PROFILE = "sojo_profile";
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
    Cookie.set(CONST_KEY_TOKEN, idToken);
  }

  getToken() {
    return Cookie.get(CONST_KEY_TOKEN);
  }

  login = () => {
    const idToken =
      "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWZiYWE2NmUyMmMyYzZkODI0ZTkzM2IiLCJyb2xlIjoicm9vdCIsImVtYWlsIjoiYWRtaW5fYmlieWNsZUBiYmIuY29tIiwibmFtZSI6IlZtb2Rldl9EZXZvbG9wbWVudCIsImlhdCI6MTU4OTQ0MjM0MCwiZXhwIjoxNTkwMDQ3MTQwfQ.sK8ouo29ScM1DIOi0065fSRvhuomiCp6qFOt-FIDceqiBtPM2Qxs7AlPHIXWfK_TOe7m3bU9lquOgumqDnmndA";
    this.setToken(idToken);
    Router.push({
      pathname: "/",
    });
  };

  logout() {
    Cookie.remove(CONST_KEY_TOKEN);
    Router.push({
      pathname: "/",
    });
  }
}
