/// <reference types="cypress" />

describe('Form renders', function () {

    it('Password submits correctly', function () {

      cy.visit('http://localhost:3000')
  
      cy.get('[data-cy=name]').type('Supreme')

      cy.get('[data-cy=email]').type('Supreme@Lambda.com') 

      cy.get('[data-cy=password]').type('pass') //isValid Check Here

      cy.get('[data-cy=tos]').check()

      cy.get('[data-cy=submit]').click()
  
      cy.get('.userContainer').should('be.visible')

    })
    
  })