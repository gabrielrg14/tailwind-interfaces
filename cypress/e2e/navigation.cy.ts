/// <reference path="../support/commands.d.ts" />

describe("Interface navigation", () => {
    it("navigate to the resort page", () => {
        cy.accessAndCheckInterface("resort")
        cy.title().should("contain", "Resort")
    })

    it("navigate to the spotify page", () => {
        cy.accessAndCheckInterface("spotify")
        cy.title().should("contain", "Spotify")
    })

    it("navigate to the instagram page", () => {
        cy.accessAndCheckInterface("instagram")
        cy.title().should("contain", "Instagram")
    })
})
