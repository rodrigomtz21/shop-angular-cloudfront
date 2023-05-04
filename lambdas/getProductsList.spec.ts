const getProductsList = require('../lambdas/getProductsList');


describe('getProductsList', () => {
  it('correct product list is generated', () => {
    expect(getProductsList.handler()).toBe([]);
  });
})
