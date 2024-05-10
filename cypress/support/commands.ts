Cypress.Commands.add("accessAndCheckInterface", (name: string) => {
    cy.visit("/")

    cy.get(`a[href="/${name}"]`).click()

    cy.get(`#${name}`).should("be.visible")
    cy.url().should("include", `/${name}`)
})
