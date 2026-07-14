import LoginPage from '../support/pageObjects/LoginPage'

describe('E2E - Login', () => {
  const timestamp = Date.now()
  const user = {
    nome: `Test User ${timestamp}`,
    email: `user.${timestamp}@qa.com`,
    password: 'test1234',
    administrador: 'false',
  }
  let userId

  before(() => {
    cy.createUser(user).then((res) => {
      userId = res.body._id
    })
  })

  beforeEach(() => {
    LoginPage.visit()
  })

  after(() => {
    cy.deleteUser(userId)
  })

  it('should login with valid credentials and redirect to home', () => {
    LoginPage.login(user.email, user.password)

    cy.url().should('include', '/home')
    cy.url().should('not.include', '/admin')
  })

  it('should show error message when password is incorrect', () => {
    LoginPage.login(user.email, 'wrongpassword')

    cy.url().should('include', '/login')
    LoginPage.getErrorMessage().should('be.visible').and('contain', 'Email e/ou senha inválidos')
  })
})
