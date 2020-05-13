import React, { Component } from "react";
import Router from "next/router";
export const CONST_ROLE_APP = {
  ADMIN: "admin",
  USER: "user",
};

function navigatePage(ctx, pathname) {
  if (ctx.req) {
    ctx.res.writeHead(302, { Location: pathname });
    ctx.res.end();
  } else {
    Router.push({
      pathname: pathname,
    });
  }
}

export default function withAuth(WrappedComponent, role = null) {
  return class Authenticated extends Component {
    static async getInitialProps(ctx) {
      let token = "";
      if (!token) {
        navigatePage(ctx, "/login");
      } else {
        console.log(role, "role");
        if (role === CONST_ROLE_APP.USER) {
          navigatePage(ctx, `/${CONST_ROLE_APP.USER}`);
        }
        if (role === CONST_ROLE_APP.ADMIN) {
          navigatePage(ctx, `/${CONST_ROLE_APP.ADMIN}`);
        }
        navigatePage(ctx, "/");
      }

      const componentProps =
        WrappedComponent.getInitialProps &&
        (await WrappedComponent.getInitialProps(ctx));
      return { ...componentProps, token };
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
