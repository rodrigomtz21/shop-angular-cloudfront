const getProductsList = require('../lambdas/getProductsList');

test('correct product list is generated', () => {
  expect(getProductsList.handler()).toBe([]);
})