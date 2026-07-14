const selectors = {
  email: '[data-testid="email"]',
  password: '[data-testid="senha"]',
  submitButton: '[data-testid="entrar"]',
  registerLink: '[data-testid="cadastrar"]',
  errorToast: '[role="alert"]',
}

class LoginPage {
  visit() {
    cy.visit('/login')
  }

  fillEmail(email) {
    cy.get(selectors.email).type(email)
  }

  fillPassword(password) {
    cy.get(selectors.password).type(password)
  }

  submit() {
    cy.get(selectors.submitButton).click()
  }

  login(email, password) {
    this.fillEmail(email)
    this.fillPassword(password)
    this.submit()
  }

  goToRegister() {
    cy.get(selectors.registerLink).click()
  }

  getErrorMessage() {
    return cy.get(selectors.errorToast)
  }
}

export default new LoginPage()
