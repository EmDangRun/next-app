const withCSS = require("@zeit/next-css");
const withImages = require("next-images");
module.exports = withCSS({
  cssModules: true,
});

module.exports = withImages({
  webpack(config, options) {
    return config;
  },
});

module.exports = {
  publicRuntimeConfig: {
    localeSubpaths:
      typeof process.env.LOCALE_SUBPATHS === "string"
        ? process.env.LOCALE_SUBPATHS
        : "none",
  },
};
