import { BrowserRouter } from 'react-router-dom'
import Logo from '../../src/components/Logo'
import { DEFAULT_ICON_SIZE } from '../../src/constants'

describe('Logo.cy.tsx', () => {
  it('Logo without size prop', () => {
    cy.mount(<BrowserRouter><Logo /></BrowserRouter>)
    
    cy.get('[data-cy="logo"]').get('svg').first().as('logoIcon')
    cy.get('@logoIcon').should('have.attr', 'width').should('equal', `${DEFAULT_ICON_SIZE}`)
    cy.get('@logoIcon').should('have.attr', 'height').should('equal', `${DEFAULT_ICON_SIZE}`)
  })

  it('Logo with size 35', () => {
    cy.mount(<BrowserRouter><Logo size={35} /></BrowserRouter>)
    
    cy.get('[data-cy="logo"]').get('svg').first().as('logoIcon')
    cy.get('@logoIcon').should('have.attr', 'width').should('equal', '35')
    cy.get('@logoIcon').should('have.attr', 'height').should('equal', '35')
  })
})