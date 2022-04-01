const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

describe('Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have only original items on the list', () => {
    cy.getByDataCy('good')
      .should('have.length', goodsFromServer.length);
  });

  it('should have selected Jam item by default', () => {
    cy.getByDataCy('title')
      .should('contain', `${goodsFromServer[8]} is selected`);
  });

  it('should have a name of item on the each item in the list', () => {
    cy.getByDataCy('good')
      .findByDataCy('good-name')
      .should('contain', goodsFromServer[0]);
  });

  it('should have a "Remove" button to select an item', () => {
    cy.getByDataCy('good')
      .findByDataCy('good-btn', 8)
      .click();

    cy.getByDataCy('title')
      .should('contain', 'No selected goods');
  });

  it('should have a "Select" button to unselect selected item', () => {
    cy.getByDataCy('good')
      .findByDataCy('good-btn', 8)
      .dblclick();

    cy.getByDataCy('title')
      .should('contain', `${goodsFromServer[8]} is selected`);
  });

  it('should have "Clear" button to remove selected elements', () => {
    cy.getByDataCy('clear-btn')
      .click();

    cy.getByDataCy('title')
      .should('contain', 'No selected goods');
  });

  it('should not display "Clear" button if there is no selected good', () => {
    cy.getByDataCy('good')
      .findByDataCy('good-btn', 8)
      .click();

    cy.getByDataCy('clear-btn')
      .should('not.visible');
  });
});
