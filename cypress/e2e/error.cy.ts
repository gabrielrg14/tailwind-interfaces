/// <reference types="../support/commands.d.ts" />

describe("Error", () => {
    it("redirects to home page when accessing 404 page", () => {
        cy.visit("/not-found", { failOnStatusCode: false })

        cy.contains("main section button", "Go to Home")
            .should("be.visible")
            .click()

        cy.contains("main section h1", "Tailwind Interfaces").should(
            "be.visible"
        )
    })
})
