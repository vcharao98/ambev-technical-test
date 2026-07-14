describe('API - Products', () => {
  let adminId
  let token
  let productId

  beforeEach(() => {
    const timestamp = Date.now()
    const admin = {
      nome: `Test Admin ${timestamp}`,
      email: `admin.${timestamp}@qa.com`,
      password: 'test1234',
      administrador: 'true',
    }

    cy.createUser(admin)
      .then((res) => {
        adminId = res.body._id
        return cy.loginAs(admin.email, admin.password)
      })
      .then((res) => {
        token = res.body.authorization
      })
  })

  afterEach(() => {
    if (productId) {
      cy.deleteProduct(productId, token)
      productId = null
    }
    cy.deleteUser(adminId)
  })

  it('should create a product with admin token and return message and id', () => {
    const timestamp = Date.now()
    const product = {
      nome: `Test Product ${timestamp}`,
      preco: 100,
      descricao: `Description ${timestamp}`,
      quantidade: 10,
    }

    cy.createProduct(token, product).then((res) => {
      productId = res.body._id
      expect(res.status).to.eq(201)
      expect(res.body.message).to.eq('Cadastro realizado com sucesso')
      expect(res.body._id).to.be.a('string').and.not.be.empty
    })
  })
})
