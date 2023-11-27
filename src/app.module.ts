import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CatalogsModule } from './catalogs/catalogs.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products/entities/product.entity';
import { Catalog } from './catalogs/entities/catalog.entity';

/**
 * @link https://docs.nestjs.com/techniques/configuration
 */

const typeOrmModuleInstance = TypeOrmModule.forRoot({
  type: 'postgres',
  host: process.env.DATA_SOURCE_HOST || 'localhost',
  port: 5432,
  username: process.env.DATA_SOURCE_USERNAME || 'postgres',
  password: process.env.DATA_SOURCE_PASSWORD || 'simform',
  entities: [Product, Catalog],
  database: process.env.DATA_SOURCE_DATABASE || 'pgWithNest',
  synchronize: true,
  logging: true,
  ssl: true,
});

@Module({
  imports: [
    typeOrmModuleInstance,
    ConfigModule.forRoot(),
    ProductsModule,
    CatalogsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
