import products from "./products.json";

class Product {
  constructor(name: string, price: number, id: number,) {
    this.name = name;
    this.price = price;
    this.id = id;
  }
  static findProductsBelow(price:number){
   const nuevoArray = products.filter(p=>{
    return p.price < price;
   });
   return nuevoArray;
  }
  id: number;
  name: string;
  price: number;
}

class User {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  products: Product[] = [];
  addProduct(newProduct: Product) {
    this.products.push(newProduct);
  }
  addProducts(newProducts: Product[]) {
   for (let i = 0; i < newProducts.length; i++){
      const singleProduct = newProducts[i];
      this.products.push(singleProduct);
    }
  }
}

export { User, Product };
