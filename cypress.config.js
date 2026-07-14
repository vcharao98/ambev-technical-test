const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
  },
  e2e: {
    baseUrl: 'https://front.serverest.dev',
    specPattern: 'cypress/{api,e2e}/**/*.cy.js',
    env: {
      apiUrl: 'https://serverest.dev',
    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
    },
  },
})
