import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsService } from './products/products.service';
import { CatalogsService } from './catalogs/catalogs.service';
import { ProductsModule } from './products/products.module';
import { CatalogsModule } from './catalogs/catalogs.module';

@Module({
  imports: [ProductsModule, CatalogsModule],
  controllers: [AppController],
  providers: [AppService, ProductsService, CatalogsService],
})
export class AppModule {}
