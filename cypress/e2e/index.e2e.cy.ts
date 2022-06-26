import ReposData from '../fixtures/repos.json'

describe('empty spec', () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://https://api.github.com/users/p-vasic",
      {
        fixture: "user.json",
      }
    );
    cy.intercept(
      "GET",
      "https://api.github.com/users/p-vasic/repos?*",
      {
        fixture: "repos.json",
      }
    );
  });

  it('Profile Search', () => {
    cy.visit('/')

    cy.get('[data-cy="search-form"]').should('not.be.null')
    cy.get('[data-cy="user-search-input"]').type('p-vasic')
    cy.get('[data-cy="search-button"]').click()
    
    cy.wait(4000)
    
    cy.url().as('user-profile-page')
    cy.get('@user-profile-page').should('include', '/user/p-vasic')
    cy.get('[data-cy="profile"]').as('profile').should('not.be.null')
    cy.get('[data-cy="repo-list"]').as('repos-list').should('not.be.null')

    cy.get('@profile').should('contain.text', 'p-vasic')
    cy.get('[data-cy="repo-item"]').should('have.length', ReposData.length)

    cy.get('[data-cy="logo"]').click()
    
    cy.wait(1000)
    cy.url().as('search-page')
    cy.get('@search-page')

    cy.get('[data-cy="toggle-button"]').click()
    cy.get('body').should('have.css', 'background-color').should('equal', 'rgb(30, 30, 44)')

    cy.wait(1000)

    cy.get('[data-cy="toggle-button"]').click()
    cy.get('body').should('have.css', 'background-color').should('equal', 'rgb(245, 246, 250)')
  })
})