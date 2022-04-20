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
    cy.contains('li', goodsFromServer[8])
      .as('jamItem');
    cy.contains('[type="button"]', 'Clear')
      .as('clearBtn');
  });

  it('should have only original items on the list', () => {
    cy.getByDataCy('good')
      .should('have.length', goodsFromServer.length);
  });

  it('should have selected Jam item by default', () => {
    cy.contains('h1', `${goodsFromServer[8]} is selected`)
      .should('exist');
  });

  it('should have a name of item on the each item in the list', () => {
    cy.getByDataCy('good')
      .contains(goodsFromServer[0])
      .should('exist');
  });

  it('should have a "Remove" button to unselect selected item', () => {
    cy.get('@jamItem')
      .contains('Remove')
      .click();

    cy.contains('h1', 'No goods selected')
      .should('exist');
  });

  it('should have a "Select" button to select item', () => {
    cy.get('@jamItem')
      .contains('Remove')
      .click();
    cy.get('@jamItem')
      .contains('Select')
      .click();

    cy.contains('h1', `${goodsFromServer[8]} is selected`)
      .should('exist');
  });

  it('shouldn\'t have a "Select" button on the selected item', () => {
    cy.get('@jamItem')
      .contains('Select')
      .should('not.exist');
  });

  it('should have "Clear" button to remove selected elements', () => {
    cy.get('@clearBtn')
      .click();

    cy.contains('h1', 'No goods selected')
      .should('exist');
  });

  it('should not display "Clear" button if there is no selected good', () => {
    cy.get('@jamItem')
      .contains('Remove')
      .click();

    cy.get('@clearBtn')
      .should('not.exist');
  });
});
