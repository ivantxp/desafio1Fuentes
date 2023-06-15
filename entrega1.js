class ProductManager {
    static ultimoId = 0;

    constructor() {
        this.products = [];
    }

    getProducts() {
        return this.products;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        const repit = this.products.some((el) => el.code === code);
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("a dejado un campo de ingreso vacio en addProductos");
        } else if (typeof price !== "number" || typeof stock !== "number") {
            console.error(`error ingreso ${title}`);
        } else if (repit) {
            console.error(
                `el codigo "${code}" ya fue ingresado, ingrese uno nuevo`
            );
        } else {
            ProductManager.ultimoId++;
            this.products.push({
                id: ProductManager.ultimoId,
                title: title,
                description: description,
                price: price,
                thumbnail: thumbnail,
                code: code,
                stock: stock,
            });
        }
    }

    getProductById(id) {
        const targetID = this.products.find((el) => el.id === id);
        debugger;

        if (targetID) {
            return targetID;
        } else {
            return "not Found";
        }
    }
}

//pruebas codigo
const products = new ProductManager();
console.log(products.getProducts());

//codigos de prueba ingreso
products.addProduct("Title 1", "Description 1", 40, "sin imag", "coded71", 15);

//codigos de prueba ingreso
products.addProduct("Title 2", "Description 2", 20, "sin imag", "coded1", 15);

//codigos de prueba ingreso error numerico
products.addProduct("Title 3", "Description 3", "24", "sin imag", "coded1", 15);

//codigos de prueba ingreso error code
products.addProduct("Title 3", "Description 3", 24, "sin imag", "coded71", 15);

//codigos de prueba mostrar todo los productos
console.log(products.getProducts());

//codigos de prueba buscar por id
console.log(products.getProductById(2));

//codigos de prueba buscar por id
console.log(products.getProductById(10));
