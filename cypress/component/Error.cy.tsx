import Error from '../../src/components/Error';
import { ERROR_404_MESSAGE, ERROR_NOT_404_MESSAGE } from '../../src/constants';

describe('Error.cy.tsx', () => {
  const error1 = {
    type: 404
  }

  const error2 = 'error not a object type'

  const expected1 = ERROR_404_MESSAGE
  const expected2 = ERROR_NOT_404_MESSAGE

  it('Error with type 404', () => {
    cy.mount(<Error error={error1} />)
    
    cy.get('[data-cy="error-container"]').contains(expected1)
  })

  it('Error with not type 404', () => {
    cy.mount(<Error error={error2} />)

    cy.get('[data-cy="error-container"]').contains(expected2)
  })
})