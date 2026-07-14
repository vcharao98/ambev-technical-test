class ProductListPage {
  visit() {
    cy.visit('/admin/listarprodutos')
  }

  getProductInList(name) {
    return cy.contains('tr', name)
  }
}

export default new ProductListPage()
