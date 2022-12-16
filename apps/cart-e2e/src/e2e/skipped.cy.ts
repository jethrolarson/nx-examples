import { getHeader } from '@nx-example/shared/e2e-utils';

describe('cart skipped test', () => {
  before(() => cy.visit('/cart'));

  it('should display the header', () => {
    getHeader().should('exist');
  });
});
