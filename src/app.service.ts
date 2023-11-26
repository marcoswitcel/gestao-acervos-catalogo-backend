import { Injectable } from '@nestjs/common';
import { PRODUCTS } from './mock/products.mock';

@Injectable()
export class AppService {
  products = PRODUCTS;

  getHello(): string {
    return 'Hello World!';
  }

  async getAllProducts() {
    return await this.products;
  }
}
