import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  create(createProductDto: CreateProductDto) {
    const produtct = new Product();

    // @todo João, testar
    produtct.title = createProductDto.title;
    produtct.description = createProductDto.description;
    produtct.rascunho = createProductDto.rascunho;
    produtct.foto = createProductDto.foto;
    produtct.id = createProductDto.id;

    return this.productRepository.save(produtct);
  }

  findAll() {
    return this.productRepository.find();
  }

  findOne(id: string) {
    return this.productRepository.findOneBy({ id });
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const produtct = await this.productRepository.findOneBy({ id });

    if (!produtct) return null;

    // @note questionavel se deveria aceitar o id para atualização
    produtct.title = updateProductDto.title;
    produtct.description = updateProductDto.description;
    produtct.rascunho = updateProductDto.rascunho;
    produtct.foto = updateProductDto.foto;
    produtct.id = updateProductDto.id;

    return this.productRepository.save(produtct);
  }

  async remove(id: string) {
    return await this.productRepository.delete(id);
  }
}
