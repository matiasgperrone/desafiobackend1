// CLASE CON CONSTRUCTOR Y ARREGLO VACIO

class ProductManager {
  constructor() {
    this.products = [];
  }

  // MÉTODO ADD PRODUCTS

  addProduct(title, description, price, thumbnail, code, stock) {
    let product = this.products.find((item) => item.code === code);
    if (!product) {
      this.products.push({
        id: this.products.length + 1,

        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      });
      console.log("Producto agregado");
    } else {
      console.log("El producto ya se encuentra en la lista.");
    }
  }

  // MÉTODO GET PRODUCTS

  getProducts() {
    return this.products;
  }

  // MÉTODO GET PRODUCTS BY ID
  getProductByID(id) {
    let product = this.products.find((item) => item.id === id);
    if (!product) {
      console.log("El producto no está en la lista.");
    } else {
      console.log("Su producto es ", product);
    }
  }
}

// PROBANDO LOS MÉTODOS

let productManager = new ProductManager();

// OBTENEMOS EL ARREGLO INICIAL VACIO

console.log("getProducts", productManager.getProducts());

// AGREGAMOS UN PRODUCTO COMO PRUEBA

productManager.addProduct(
  "Zapatillas",
  "Prueba",
  50000,
  "Aca va una imagen",
  10,
  5
);

// VEMOS EL ARREGLO CON EL NUEVO PRODUCTO

console.log(productManager.getProducts());

// QUEREMOS AGREGAR UN PRODUCTO CON IGUAL CODE

productManager.addProduct(
  "Zapatillas",
  "Prueba",
  50000,
  "Aca va una imagen",
  10,
  5
);

// OBTENEMOS UN PRODUCTO POR SU ID
console.log("ID es ", id);
productManager.getProductByID(1);
