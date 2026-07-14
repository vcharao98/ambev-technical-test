const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://front.serverest.dev',
    specPattern: 'cypress/{api,e2e}/**/*.cy.js',
    env: {
      apiUrl: 'https://serverest.dev',
    },
    setupNodeEvents(on, config) {},
  },
})
