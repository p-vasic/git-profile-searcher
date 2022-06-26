import Toggle from "../../src/components/Toggle"

describe('Toggle.cy.tsx', () => {
  it('should call onToggle function once click', () => {
    const toggleTheme = cy.stub().as('toggle')
    cy.mount(<Toggle isDarkMode={true} onToggle={toggleTheme} />)

    cy.get('[data-cy="toggle-button"]').click()
    cy.get('@toggle').should('have.been.calledOnce', true)
  })
})