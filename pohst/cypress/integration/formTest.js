/// <reference types="cypress" />

describe('Form renders', function () {

    it('Form submits correctly', function () {

      cy.visit('http://localhost:3000')
  
      cy.get('[data-cy=name]').type('Supreme')

      cy.get('[data-cy=email]').type('Supreme@Lambda.com')

      cy.get('[data-cy=password]').type('password')

      cy.get('[data-cy=tos]').check()

      cy.get('[data-cy=submit]').click()
  
      cy.get('.userContainer').should('be.visible')

    })
    
  })