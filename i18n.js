const NextI18Next = require("next-i18next").default;
// const { localeSubpaths } = require("next/config").default().publicRuntimeConfig;

const localeSubpathVariations = {
  none: {},
  foreign: {
    vi: "vi",
  },
  all: {
    en: "en",
    vi: "vi",
  },
};

module.exports = new NextI18Next({
  otherLanguages: ["vi"],
  //   localeSubpaths: localeSubpathVariations[localeSubpaths],
});
