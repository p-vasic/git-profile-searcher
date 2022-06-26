import Loader from '../../src/components/Loader'
import { DEFAULT_ICON_SIZE } from '../../src/constants'

describe('Loader.cy.tsx', () => {
  it('Loader without size prop', () => {
    cy.mount(<Loader />)
    
    cy.get('[data-cy="loader"]').get('svg').first().as('loaderIcon')
    cy.get('@loaderIcon').should('have.attr', 'width').should('equal', `${DEFAULT_ICON_SIZE}`)
    cy.get('@loaderIcon').should('have.attr', 'height').should('equal', `${DEFAULT_ICON_SIZE}`)
  })

  it('Loader with size 35', () => {
    cy.mount(<Loader size={35} />)
    
    cy.get('[data-cy="loader"]').get('svg').first().as('loaderIcon')
    cy.get('@loaderIcon').should('have.attr', 'width').should('equal', '35')
    cy.get('@loaderIcon').should('have.attr', 'height').should('equal', '35')
  })
})