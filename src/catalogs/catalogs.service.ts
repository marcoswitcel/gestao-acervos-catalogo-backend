import { Injectable } from '@nestjs/common';
import { CreateCatalogDto } from './dto/create-catalog.dto';
import { UpdateCatalogDto } from './dto/update-catalog.dto';
import { Catalog } from './entities/catalog.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CatalogsService {
  constructor(
    @InjectRepository(Catalog)
    private catalogRepository: Repository<Catalog>,
  ) {}

  create(createCatalogDto: CreateCatalogDto) {
    const catalog = new Catalog();

    // @note questionavel se deveria aceitar o id para atualização
    catalog.title = createCatalogDto.title;
    catalog.description = createCatalogDto.description;
    catalog.publicado = createCatalogDto.publicado;
    catalog.itens = createCatalogDto.itens;
    catalog.id = createCatalogDto.id;

    return this.catalogRepository.save(catalog);
  }

  findAll() {
    return this.catalogRepository.find();
  }

  findOne(id: string) {
    return this.catalogRepository.findOneBy({ id });
  }

  async update(id: string, updateCatalogDto: UpdateCatalogDto) {
    const catalog = await this.catalogRepository.findOneBy({ id });

    if (!catalog) return null;

    // @note questionavel se deveria aceitar o id para atualização
    catalog.title = updateCatalogDto.title;
    catalog.description = updateCatalogDto.description;
    catalog.publicado = updateCatalogDto.publicado;
    catalog.itens = updateCatalogDto.itens;
    catalog.id = updateCatalogDto.id;

    return this.catalogRepository.save(catalog);
  }

  remove(id: string) {
    return this.catalogRepository.delete(id);
  }
}
