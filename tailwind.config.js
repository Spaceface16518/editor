const _ = require('lodash')
const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["index.html", "css/style.css"],
  darkMode: "media",
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [
    plugin(({ addComponents, theme }) => {
      const screens = theme("screens", {});

      const mediaQueries = _.map(screens, width => {
        return {
          [`@media (min-width: ${width})`]: {
            ".p-container": {
              "padding-left": `calc((100% - ${width}) / 2)`,
              "padding-right": `calc((100% - ${width}) / 2)`
            }
          }
        };
      });

      addComponents([
        { ".p-container": { width: "100%" } },
        ...mediaQueries
      ]);
    })
  ]
};
