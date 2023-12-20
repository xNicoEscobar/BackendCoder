class ProductManager {
    static id = 0;
    title;
    products;

    constructor(nombre) {
        this.nombre = nombre;
        this.products = [];
    }

    addProduct(title, description, price, thumbnail, stock) {
        const product = {
            id: ProductManager.id,
            title,
            description,
            price,
            thumbnail,
            stock,
        };

        this.products.push(product);
        ProductManager.id++;
        return product;
    }

    getProducts() {
        return this.products;
    }

    getProductsById(id) {
        for (let i = 0; i < this.products.length; i++) {
            const product = this.products[i];
            if (product.id === id) {
                return product;
            }
        }

        return 'Not found';
    }

}

const minimercado = new ProductManager('NicoShop');

/*------Add products------*/

const product = minimercado.addProduct('Lechelita', 'Leche deslactosada', 800, 'soy_una_leche_xd.png', 10 );
const product2 = minimercado.addProduct('JackDaniels', 'Un poco de prestigio', 300000, 'soy_super_expensive.png', 4 );
const product3 = minimercado.addProduct('Pitusas', 'Las galletitas mas nobles del mundo', 400, 'pitusas.png', 4 );
const product4 = minimercado.addProduct('Coca Cola', 'Formula ultrasecreta pero deliciosa 😋', 600, 'soy_una_coca.png', 4 );

/*------Get all products------*/

console.log(minimercado.getProducts()); 

/*------Id Finder------*/

console.log(minimercado.getProductsById(2));