let productsService = require('./products');

test('Testing third product', () => {
    expect(productsService.getThird()).toBe({
        id: '3',
        name: 'aceite',
        price: '450'
    });
})