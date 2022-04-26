const goods = [
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

const page = {
  getGoodButton(index, buttonSelector) {
    return cy.contains('li', goods[index])
      .contains(buttonSelector);
  },
  header() {
    return cy.get('h1');
  }
};

describe('Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have only original items on the list', () => {
    cy.get('li')
      .should('have.length', goods.length);
  });

  it('should have selected Jam item by default', () => {
    page.header()
      .should('contain', `${goods[8]} is selected`);
  });

  it('should have a name of item on the each item in the list', () => {
    cy.get('li')
      .contains(goods[0])
      .should('be.visible');
  });

  it('should have a "Remove" button to unselect selected item', () => {
    page.getGoodButton(8, buttons.remove) 
      .click();

    page.header()
      .should('contain', 'No goods selected');
  });

  it('should have a "Select" button to select item', () => {
    page.getGoodButton(8, buttons.remove) 
      .click();
    page.getGoodButton(8, buttons.select)
      .click();

    page.header()
      .should('contain', `${goods[8]} is selected`);
  });

  it('shouldn\'t have a "Select" button on the selected item', () => {
    page.getGoodButton(8, buttons.select)
      .should('not.exist');
  });

  it('should have "Clear" button to remove selected elements', () => {
    cy.contains('button', buttons.clear)
      .click();

    page.header()
      .should('contain', 'No goods selected');
  });

  it('should not display "Clear" button if there is no selected good', () => {
    page.getGoodButton(8, buttons.remove)
      .click();

    cy.contains('button', buttons.clear)
      .should('not.exist');
  });
});
