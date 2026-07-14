const api = () => Cypress.env('apiUrl')

Cypress.Commands.add('createUser', (body) => {
  return cy.request('POST', `${api()}/usuarios`, body)
})

Cypress.Commands.add('deleteUser', (id) => {
  return cy.request('DELETE', `${api()}/usuarios/${id}`)
})

Cypress.Commands.add('loginAs', (email, password) => {
  return cy.request({
    method: 'POST',
    url: `${api()}/login`,
    body: { email, password },
    failOnStatusCode: false,
  })
})

Cypress.Commands.add('createProduct', (token, body) => {
  return cy.request({
    method: 'POST',
    url: `${api()}/produtos`,
    headers: { Authorization: token },
    body,
  })
})

Cypress.Commands.add('deleteProduct', (id, token) => {
  return cy.request({
    method: 'DELETE',
    url: `${api()}/produtos/${id}`,
    headers: { Authorization: token },
  })
})
