import { EMPTY_REPOSITORY } from "../../src/constants"
import RepoList from "../../src/container/RepoList"

describe('RepoList.cy.tsx', () => {
  const repos = [
    {
      "id": 502725655,
      "name": "nx-simple",
      "html_url": "https://github.com/p-vasic/nx-simple",
      "description": null,
      "language": "JavaScript",
    }
  ]

  it('RepoList with empty repos', () => {
    cy.mount(<RepoList repos={[]} />)

    cy.get('[data-cy="repo-list"]').should('contain.text', EMPTY_REPOSITORY)
  })

  it('RepoList with not empty repos', () => {
    cy.mount(<RepoList repos={repos} />)

    cy.get('[data-cy="repo-item"]').should('have.length', repos.length)
    cy.get('[data-cy="repo-item"]').first().as('first-item').should('contain.text', repos[0].name)
    if (repos[0].description) {
      cy.get('@first-item').should('contain.text', repos[0].description)
    }
  })
})