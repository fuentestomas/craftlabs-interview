class Products {
    products = [
        {
            id: '1',
            name: 'coca-cola',
            price: '200'
        },
        {
            id: '2',
            name: 'arroz',
            price: '210'
        },
        {
            id: '3',
            name: 'aceite',
            price: '450'
        }
    ]
    
    getProducts() {
        return this.products;
    }
}

let productObject = new Products();

module.exports = productObject;