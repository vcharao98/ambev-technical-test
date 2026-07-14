const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/api/**/*.cy.js',
    env: {
      apiUrl: 'https://serverest.dev',
    },
    setupNodeEvents(on, config) {},
  },
})
