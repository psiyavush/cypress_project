/// <reference types="cypress" />

describe('Login Page', () => {
  it('Success Auth', () => {
    cy.visit('https://www.saucedemo.com/')
    const login = "standard_user"
    const pass = "secret_sauce"
    cy.get('[data-test="username"]').type(`${login}{enter}`)
    cy.get('[data-test="password"]').type(`${pass}{enter}`)
    cy.get('[data-test="login-button"]').click()
    cy.get('.title').should('have.text', 'Products')
  })
})

// describe('Login Page', () => {
//   it('Success Auth', () => {
//     cy.visit('https://aloeapteka.ru/')
//     cy.get('.login > span').click()
//     cy.get('form > :nth-child(2) > .form-control').type('8000000000')
//   })
// })