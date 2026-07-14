import LoginPage from '../support/pageObjects/LoginPage'
import RegisterPage from '../support/pageObjects/RegisterPage'

describe('E2E - Register', () => {
  const timestamp = Date.now()
  const user = {
    nome: `Test User ${timestamp}`,
    email: `user.${timestamp}@qa.com`,
    password: 'test1234',
  }

  after(() => {
    cy.request(`${Cypress.env('apiUrl')}/usuarios?email=${user.email}`).then(
      (res) => {
        if (res.body.quantidade > 0) {
          cy.deleteUser(res.body.usuarios[0]._id)
        }
      }
    )
  })

  it('should register a new user and redirect to home', () => {
    LoginPage.visit()
    LoginPage.goToRegister()

    RegisterPage.registerUser(user.nome, user.email, user.password, false)

    RegisterPage.getSuccessMessage()
      .should('be.visible')
      .and('contain', 'Cadastro realizado com sucesso')
    cy.url().should('include', '/home')
  })
})
