/// <reference types="cypress" />

describe('Form renders', function () {

    it('Name submits correctly', function () {

      cy.visit('http://localhost:3000')
  
      cy.get('[data-cy=name]').type('12') //isValid Check Here

      cy.get('[data-cy=email]').type('Supreme@Lambda.com') 

      cy.get('[data-cy=password]').type('password')

      cy.get('[data-cy=tos]').check()

      cy.get('[data-cy=submit]').click()
  
      cy.get('.userContainer').should('be.visible')

    })
    
  })