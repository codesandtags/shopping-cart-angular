import { Product } from '../models/product.model';

export class MockUtils {

  public static generateProducts(amountProducts: number): Product[] {
    // TODO: Create logic to retrieve the products
    const products: Product[] = [];
    const categories = [{
      name: 'Gestación',
      photo: 'gestacion',
      description: 'Una canción que inspira...'
    }, {
      name: 'Cumpleaños',
      photo: 'cumpleanos',
      description: 'Una canción que inspira...'
    }, {
      name: 'Jardín',
      photo: 'jardin',
      description: 'Una canción que inspira...'
    }, {
      name: 'Mamá',
      photo: 'mama',
      description: 'Una canción que inspira...'
    }, {
      name: 'Navidad',
      photo: 'navidad',
      description: 'Una canción que inspira...'
    }];
    const baseImages = './assets/images/';

    for (let i = 0; i < amountProducts; i++) {
      const categoryIndex = Math.floor(Math.random() * categories.length);
      const id = 'u' + Math.floor(Math.random() * 10000);
      const category = categories[categoryIndex];
      const product: Product = {
        id,
        price: 10000,
        photo: `${baseImages}${category.photo}.png`,
        name: category.name,
        description: category.description
      };

      products.push(product);
    }
    return products;
  }
}
