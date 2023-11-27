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
    return 'This action adds a new catalog';
  }

  findAll() {
    return this.catalogRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} catalog`;
  }

  update(id: number, updateCatalogDto: UpdateCatalogDto) {
    return `This action updates a #${id} catalog`;
  }

  remove(id: number) {
    return `This action removes a #${id} catalog`;
  }
}
