import Profile from "../../src/container/Profile"

describe('Profile.cy.tsx', () => {
  const user = {
    "login": "ev",
    "id": 549077,
    "avatar_url": "https://avatars.githubusercontent.com/u/549077?v=4",
    "html_url": "https://github.com/ev",
    "followers": 0,
    "following": 0,
    "public_repos": 0,
    "created_at": "2011-01-05T18:45:48Z",
  }
  const date = new Date(user.created_at);
  const joinedDate = date.toDateString().split(" ").slice(1).join(" ");

  beforeEach(() => {
    cy.mount(<Profile userData={user} />)
  })

  it('Mount Profile and check its background image', () => {
    cy.get('[data-cy="user-image"]').should('have.css', 'background-image').as('user-bg-image')
    cy.get('@user-bg-image').should('equal', `url("${user.avatar_url}")`)
  })

  it('Mount Profile and check its user data', () => {
    cy.get('[data-cy="profile"]').should('contain.text', `Joined github on ${joinedDate}`)
    cy.get('[data-cy="profile"]').should('contain.text', `Since have created ${user.public_repos} projects`)
    cy.get('[data-cy="profile"]').should('contain.text', `Followers ${user.followers}`)
    cy.get('[data-cy="profile"]').should('contain.text', `Following ${user.following}`)
  })
})