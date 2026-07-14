const selectors = {
  home: '[data-testid="home"]',
  createUser: '[data-testid="cadastrar-usuarios"]',
  listUsers: '[data-testid="listar-usuarios"]',
  createProduct: '[data-testid="cadastrar-produtos"]',
  listProducts: '[data-testid="listar-produtos"]',
  reports: '[data-testid="link-relatorios"]',
  logout: '[data-testid="logout"]',
}

class NavBar {
  goToHome() {
    cy.get(selectors.home).click()
  }

  goToCreateUser() {
    cy.get(selectors.createUser).click()
  }

  goToListUsers() {
    cy.get(selectors.listUsers).click()
  }

  goToCreateProduct() {
    cy.get(selectors.createProduct).click()
  }

  goToListProducts() {
    cy.get(selectors.listProducts).click()
  }

  goToReports() {
    cy.get(selectors.reports).click()
  }

  logout() {
    cy.get(selectors.logout).click()
  }
}

export default new NavBar()
