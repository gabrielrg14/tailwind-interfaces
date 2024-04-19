describe("Home page links", () => {
    beforeEach(() => cy.visit("/"))

    it("should navigate to the resort page by clicking the link", () => {
        cy.get('[href="/resort"]').click()

        cy.get("#resort").should("be.visible")
        cy.url().should("include", "/resort")
    })

    it("should navigate to the spotify page by clicking the link", () => {
        cy.get('[href="/spotify"]').click()

        cy.get("#spotify").should("be.visible")
        cy.url().should("include", "/spotify")
    })

    it("should navigate to the instagram page by clicking the link", () => {
        cy.get('[href="/instagram"]').click()

        cy.get("#instagram").should("be.visible")
        cy.url().should("include", "/instagram")
    })
})
