/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        /**
         * Access the interface, check visibility and whether the URL provided is included.
         *
         * @param urlPath string - The URL path of the interface you want to access and check
         *
         * @example cy.accessAndCheckInterface("resort") // Access the provided URL and perform the checks
         */
        accessAndCheckInterface(urlPath: string): Cypress.Chainable<undefined>
    }
}
