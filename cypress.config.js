const { defineConfig } = require('cypress');

module.exports = defineConfig({
    viewportHeight: 375,
    viewportWidth: 667,
    viewportHeight: 960,
    viewportWidth: 1536,
    e2e: {
        baseUrl: 'http://localhost:3000',
        setupNodeEvents(on, config) {
            // implement node event listeners here
        }
    }
});
