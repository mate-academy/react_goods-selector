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

const buttons = {
  clear: 'Clear',
  remove: 'Remove',
  select: 'Select'
};

Cypress.Commands.add('selectItemBtn', (btn) => {
  cy.contains('li', goodsFromServer[8])
    .contains(btn);
});

describe('Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have only original items on the list', () => {
    cy.get('li')
      .should('have.length', goodsFromServer.length);
  });

  it('should have selected Jam item by default', () => {
    cy.contains('h1', `${goodsFromServer[8]} is selected`)
      .should('exist');
  });

  it('should have a name of item on the each item in the list', () => {
    cy.get('li')
      .contains(goodsFromServer[0])
      .should('exist');
  });

  it('should have a "Remove" button to unselect selected item', () => {
    cy.selectItemBtn(buttons.remove).click();

    cy.contains('h1', 'No goods selected')
      .should('exist');
  });

  it('should have a "Select" button to select item', () => {
    cy.selectItemBtn(buttons.remove).click();
    cy.selectItemBtn(buttons.select).click();

    cy.contains('h1', `${goodsFromServer[8]} is selected`)
      .should('exist');
  });

  it('shouldn\'t have a "Select" button on the selected item', () => {
    cy.selectItemBtn(buttons.select)
      .should('not.exist');
  });

  it('should have "Clear" button to remove selected elements', () => {
    cy.contains('button', buttons.clear)
      .click();

    cy.contains('h1', 'No goods selected')
      .should('exist');
  });

  it('should not display "Clear" button if there is no selected good', () => {
    cy.selectItemBtn(buttons.remove)
      .click();

    cy.contains('button', buttons.clear)
      .should('not.exist');
  });
});
