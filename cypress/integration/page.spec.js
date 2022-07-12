import goods from '../../src/goods.js'

const page = {
  title: () => cy.get('.App__title'),
  clearButton: () => cy.get('.App__clear'),
  goodAtIndex: (index) => cy.get('.Good').eq(index),
  goodWithText: (text) => cy.get('.Good').contains(text),
}

describe('Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have a list with one item per a good', () => {
    cy.get('.Good')
      .should('have.length', goods.length);

    page.goodAtIndex(5)
      .should('contain', goods[5]);

    page.goodAtIndex(8)
      .should('contain', goods[8]);
  });

  it('should have a title with Jam selected by default', () => {
    page.title()
      .should('have.text', `Jam is selected`);
  });

  it('should have a selected item with a "Good--active" class', () => {
    page.goodWithText('Jam')
      .should('have.class', 'Good--active');
  })

  it('should have the "Clear" button when an item is selected', () => {
    page.clearButton()
      .should('have.text', 'Clear');
  });

  it('should remove selection on "Clear" click', () => {
    page.clearButton().click()

    page.title()
      .should('have.text', 'No goods selected');
  });

  it('should not show the "Clear" button if there is no selected good', () => {
    page.clearButton().click()

    page.clearButton()
      .should('not.exist');
  });

  it('should have a "Select" button next to a not selected item', () => {
    page.goodAtIndex(3)
      .find('.Good__select')
      .should('have.text', 'Select')
  });

  it('should allow to select a good with its "Select" button', () => {
    page.goodAtIndex(3)
      .find('.Good__select')
      .click()

    page.goodAtIndex(3)
      .should('have.class', 'Good--active');

    page.title()
      .should('have.text', `${goods[3]} is selected`)
  });

  it('should not have a "Select" button next to a selected item', () => {
    page.goodWithText('Jam')
      .find('.Good__select')
      .should('not.exist');
  });

  it('should have a "Remove" button next to a selected item', () => {
    page.goodWithText('Jam')
      .find('.Good__remove')
      .should('have.text', 'Remove')
  });

  it('should unselect an item with its "Remove" button', () => {
    page.goodWithText('Jam')
      .find('.Good__remove')
      .click();

    page.goodWithText('Jam')
      .should('not.have.class', 'Good--active');

    page.title()
      .should('have.text', 'No goods selected');
  })

  it('should not have a "Remove" button next to a not selected item', () => {
    page.goodAtIndex(3)
      .find('.Good__remove')
      .should('not.exist');
  });
});
