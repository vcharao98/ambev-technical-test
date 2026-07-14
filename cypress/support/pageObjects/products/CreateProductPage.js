const selectors = {
  name: '[data-testid="nome"]',
  price: '[data-testid="preco"]',
  description: '[data-testid="descricao"]',
  quantity: '[data-testid="quantity"]',
  image: '[data-testid="imagem"]',
  submitButton: '[data-testid="cadastarProdutos"]',
}

class CreateProductPage {
  visit() {
    cy.visit('/admin/cadastrarprodutos')
  }

  fillName(name) {
    cy.get(selectors.name).type(name)
  }

  fillPrice(price) {
    cy.get(selectors.price).type(price)
  }

  fillDescription(description) {
    cy.get(selectors.description).type(description)
  }

  fillQuantity(quantity) {
    cy.get(selectors.quantity).type(quantity)
  }

  uploadImage(image) {
    cy.get(selectors.image).selectFile(image)
  }

  submit() {
    cy.get(selectors.submitButton).click()
  }

  createProduct(name, price, description, quantity, image) {
    this.fillName(name)
    this.fillPrice(price)
    this.fillDescription(description)
    this.fillQuantity(quantity)
    this.uploadImage(image)
    this.submit()
  }
}

export default new CreateProductPage()
