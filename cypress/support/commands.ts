Cypress.Commands.add("accessAndCheckInterface", (urlPath: string) => {
    cy.visit("/")

    cy.get(`a[href="/${urlPath}"]`).click()

    cy.get(`#${urlPath}`).should("be.visible")
    cy.url().should("include", `/${urlPath}`)
})
