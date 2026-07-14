# Ambev Technical Test — Cypress Test Suite

Automated test suite for the [ServeRest](https://serverest.dev) platform, covering API and E2E scenarios using Cypress.

## Tech Stack

- [Cypress](https://www.cypress.io/) — test framework
- [cypress-mochawesome-reporter](https://github.com/LironEr/cypress-mochawesome-reporter) — HTML test reports
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) — linting and formatting

## Prerequisites

- Node.js 20+
- npm

## Installation

```bash
npm install
```

## Project Structure

```
cypress/
├── api/                     # API test specs
│   ├── auth.cy.js
│   ├── users.cy.js
│   └── products.cy.js
├── e2e/                     # E2E test specs
│   ├── login.cy.js
│   ├── register.cy.js
│   └── products.cy.js
├── fixtures/
│   └── test-image.png       # Test asset for product image upload
└── support/
    ├── commands.js          # Custom Cypress commands
    ├── e2e.js               # Support file entry point
    ├── components/
    │   └── NavBar.js        # Shared navigation component
    └── pageObjects/
        ├── LoginPage.js
        ├── RegisterPage.js
        └── products/
            ├── CreateProductPage.js
            └── ProductListPage.js
```

## Running Tests

### API Tests

```bash
npm run test:api              # all API specs
npm run test:api:auth         # authentication
npm run test:api:users        # users
npm run test:api:products     # products
```

### E2E Tests

```bash
npm run test:e2e              # all E2E specs
npm run test:e2e:login        # login flow
npm run test:e2e:register     # registration flow
npm run test:e2e:products     # admin product creation
```

## Test Reports

Reports are generated automatically after each run inside `cypress/reports/`.

```bash
npm run report:open           # open the HTML report in the browser
npm run report:clean          # delete the reports folder
```

## Linting & Formatting

```bash
npm run lint                  # check for linting issues
npm run lint:fix              # auto-fix linting issues
npm run format                # format all files with Prettier
```

## CI/CD

The GitHub Actions pipeline is triggered manually via **Actions → Run workflow**. A dropdown allows selecting which suite to run: `all`, `api`, or `e2e`.

Reports are uploaded as artifacts at the end of each run.

## Application URLs

| Environment | URL |
|---|---|
| Frontend | https://front.serverest.dev |
| API / Swagger | https://serverest.dev |
