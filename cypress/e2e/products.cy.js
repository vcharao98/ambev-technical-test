import LoginPage from '../support/pageObjects/LoginPage'
import CreateProductPage from '../support/pageObjects/products/CreateProductPage'
import ProductListPage from '../support/pageObjects/products/ProductListPage'
import NavBar from '../support/components/NavBar'

describe('E2E - Products', () => {
  const timestamp = Date.now()
  const admin = {
    nome: `Test Admin ${timestamp}`,
    email: `admin.${timestamp}@qa.com`,
    password: 'test1234',
    administrador: 'true',
  }
  let adminId
  let token
  let productName

  before(() => {
    cy.createUser(admin).then((res) => {
      adminId = res.body._id
      return cy.loginAs(admin.email, admin.password)
    }).then((res) => {
      token = res.body.authorization
    })
  })

  after(() => {
    cy.request(`${Cypress.env('apiUrl')}/produtos?nome=${encodeURIComponent(productName)}`).then((res) => {
      if (res.body.quantidade > 0) {
        cy.deleteProduct(res.body.produtos[0]._id, token)
      }
    })
    cy.deleteUser(adminId)
  })

  it('should create a product and display it in the products list', () => {
    productName = `Test Product ${Date.now()}`

    LoginPage.visit()
    LoginPage.login(admin.email, admin.password)
    cy.url().should('include', '/admin/home')

    NavBar.goToCreateProduct()

    CreateProductPage.createProduct(productName, 100, 'Test description', 10, 'cypress/fixtures/test-image.png')

    ProductListPage.getProductInList(productName).should('be.visible')
  })
})
