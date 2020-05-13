import React, { Component } from "react";
import Head from "next/head";
import ReactGoogleMaps from "../components/ReactGoogleMaps";
import { withTranslation } from "../../i18n";
import withAuth from "../core/helper/withAuth";
import AuthService from "../core/helper/authService";
import Router from "next/router";
class Home extends Component {
  constructor(props) {
    super(props);
    this.authService = new AuthService();
  }

  onLogout = () => {
    this.authService.logout();
  };

  render() {
    const { t, i18n } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>Home page</title>
          <meta property="description" content="Home page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {t("Hello")}
        <button
          type="button"
          onClick={() =>
            i18n.changeLanguage(i18n.language === "en" ? "vi" : "en")
          }
        >
          {t("change-locale")}
        </button>
        <ReactGoogleMaps />
        <button onClick={this.onLogout}>Logout</button>
      </React.Fragment>
    );
  }
}

export default withAuth(withTranslation("common")(Home), "user");
