const selectors = {
  name: '[data-testid="nome"]',
  email: '[data-testid="email"]',
  password: '[data-testid="password"]',
  administratorCheckbox: '[data-testid="checkbox"]',
  submitButton: '[data-testid="cadastrar"]',
  successToast: 'div.alert',
}

class RegisterPage {
  visit() {
    cy.visit('/cadastrarusuarios')
  }

  fillName(name) {
    cy.get(selectors.name).type(name)
  }

  fillEmail(email) {
    cy.get(selectors.email).type(email)
  }

  fillPassword(password) {
    cy.get(selectors.password).type(password)
  }

  checkAdministrator() {
    cy.get(selectors.administratorCheckbox).check()
  }

  submit() {
    cy.get(selectors.submitButton).click()
  }

  registerUser(name, email, password, isAdmin = false) {
    this.fillName(name)
    this.fillEmail(email)
    this.fillPassword(password)
    if (isAdmin) {
      this.checkAdministrator()
    }
    this.submit()
  }

  getSuccessMessage() {
    return cy.get(selectors.successToast)
  }
}

export default new RegisterPage()
