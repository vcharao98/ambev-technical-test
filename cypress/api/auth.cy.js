describe('API - Authentication', () => {
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

  after(() => {
    cy.deleteUser(userId)
  })

  it('should authenticate with valid credentials and return a token', () => {
    cy.loginAs(user.email, user.password).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body.authorization).to.match(/^Bearer\s[\w-]+\.[\w-]+\.[\w-]+$/)
      expect(res.body.message).to.eq('Login realizado com sucesso')
    })
  })

  it('should return 401 when authenticating with wrong password', () => {
    cy.loginAs(user.email, 'wrong-password').then((res) => {
      expect(res.status).to.eq(401)
      expect(res.body).not.to.have.property('authorization')
      expect(res.body.message).to.eq('Email e/ou senha inválidos')
    })
  })
})
