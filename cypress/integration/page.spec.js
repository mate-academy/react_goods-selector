const page = {
  title: () => cy.get('h1.title'),
  clearButton: () => cy.byDataCy('ClearButton'),
  goods: () => cy.byDataCy('Good'),

  assertGoodSelected: index => {
    page.goods().eq(index)
      .should('have.class', 'has-background-success-light');
  },

  assertSelectedGoodsCount: count => {
    cy.get('[data-cy="Good"].has-background-success-light')
      .should('have.length', count);
  },
};

describe('Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('', () => {
    it('should have a list with one item per a good', () => {
      page.goods().should('have.length', 10);

      page.goods().eq(0).byDataCy('GoodTitle').should('have.text', 'Dumplings');
      page.goods().eq(4).byDataCy('GoodTitle').should('have.text', 'Apple');
      page.goods().eq(8).byDataCy('GoodTitle').should('have.text', 'Jam');
    });

    it('should have a title with Jam selected by default', () => {
      page.title().should('have.text', `Jam is selected`);
    });

    it('should have an "x" button in the title', () => {
      page.clearButton().should('exist');
    });

    it('should have only 1 highlighted good', () => {
      page.assertSelectedGoodsCount(1);
    });

    it('should have Jam highlighted', () => {
      page.assertGoodSelected(8);
    });

    it('should show RemoveButton for a selected good', () => {
      page.goods().eq(8)
        .byDataCy('RemoveButton')
        .should('exist');
    });

    it('should have only 1 RemoveButton', () => {
      cy.byDataCy('RemoveButton').should('have.length', 1);
    });

    it('should have correct style for the RemoveButton', () => {
      cy.byDataCy('RemoveButton')
        .should('have.class', 'is-info')
        .and('have.text', '-');
    });

    it('should not have AddButton for the selected good', () => {
      page.goods().eq(8)
        .byDataCy('AddButton')
        .should('not.exist');
    });

    it('should have an AddButton for each not selected goods', () => {
      cy.byDataCy('AddButton').should('have.length', 9);
    });

    it('should have correct styles for AddButton', () => {
      cy.get('[data-cy="AddButton"].is-info').should('not.exist');
      cy.contains('[data-cy="AddButton"]', '-').should('not.exist');
      cy.byDataCy('AddButton').eq(0).should('have.text', '+');
    });
  });

  describe('after selecting another good', () => {
    beforeEach(() => {
      page.goods().eq(1).byDataCy('AddButton').click()
    });

    it('should have title with a new selected good', () => {
      page.title().should('have.text', 'Carrot is selected');
    });

    it('should have an "x" button in the title', () => {
      page.clearButton().should('exist');
    });

    it('should have new good selected', () => {
      page.assertGoodSelected(1);
    });

    it('should have 1 selected good', () => {
      page.assertSelectedGoodsCount(1);
    });

    it('should show RemoveButton for a new good', () => {
      page.goods().eq(1)
        .byDataCy('RemoveButton')
        .should('exist');
    });

    it('should have only 1 RemoveButton', () => {
      cy.byDataCy('RemoveButton').should('have.length', 1);
    });
  });

  describe('after title "x" button click', () => {
    beforeEach(() => {
      page.clearButton().click()
    });

    it('should have title with no selected good', () => {
      page.title().should('have.text', 'No goods selected');
    });

    it('should not have "x" button', () => {
      page.clearButton().should('not.exist');
    });

    it('should not have selected goods', () => {
      page.assertSelectedGoodsCount(0);
    });

    it('should allow to select a good', () => {
      page.goods().eq(4).byDataCy('AddButton').click()

      page.title().should('have.text', 'Apple is selected');
      page.assertGoodSelected(4);
    });
  });

  describe('after RemoveButton click', () => {
    beforeEach(() => {
      cy.byDataCy('RemoveButton').click();
    });

    it('should have title with no selected good', () => {
      page.title().should('have.text', 'No goods selected');
    });

    it('should not have "x" button', () => {
      page.clearButton().should('not.exist');
    });

    it('should not have selected goods', () => {
      page.assertSelectedGoodsCount(0);
    });

    it('should allow to select a good', () => {
      page.goods().eq(5).byDataCy('AddButton').click()

      page.title().should('have.text', 'Bread is selected');
      page.assertGoodSelected(5);
    });
  });
});
