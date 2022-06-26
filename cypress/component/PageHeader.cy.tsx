import React from "react"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import PageHeader from "../../src/container/PageHeader"

describe('PageHeader.cy.tsx', () => {
  it('ThemeContext toggleTheme function test in PageHeader Component', () => {
    const toggleTheme = cy.stub().as('toggle')
    
    cy.mount(
      <BrowserRouter>
        <ThemeProvider theme={{
          id: 'dark',
          toggleTheme: toggleTheme
        }}>
          <PageHeader />
        </ThemeProvider>
      </BrowserRouter>
    )

    cy.get('[data-cy="toggle-button"]').click()

    cy.get('@toggle').should('have.been.called', 1)
  })
})