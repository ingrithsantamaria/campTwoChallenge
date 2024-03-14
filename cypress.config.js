const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://uitestingplayground.com/",
    viewportWidth: 414,
    viewportHeight: 896,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
