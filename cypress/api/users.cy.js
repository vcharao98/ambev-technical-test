describe('API - Users', () => {
  let userId

  afterEach(() => {
    if (userId) {
      cy.deleteUser(userId)
      userId = null
    }
  })

  it('should create a user and return message and id', () => {
    const timestamp = Date.now()
    const user = {
      nome: `Test User ${timestamp}`,
      email: `user.${timestamp}@qa.com`,
      password: 'test1234',
      administrador: 'false',
    }

    cy.createUser(user).then((res) => {
      userId = res.body._id
      expect(res.status).to.eq(201)
      expect(res.body.message).to.eq('Cadastro realizado com sucesso')
      expect(res.body._id).to.be.a('string').and.not.be.empty
    })
  })
})
