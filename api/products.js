let methods = require('./productsMethods');

class ProductsService {

    getProductsList() {
        return methods.getProducts();
    }

    getThird() {
        let products = this.getProductsList();
        if (products[2]) return products[2]
        return null;
    }

}

let service = new ProductsService();

module.exports = service;