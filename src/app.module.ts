import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsService } from './products/products.service';
import { CatalogsService } from './catalogs/catalogs.service';
import { ProductsModule } from './products/products.module';
import { CatalogsModule } from './catalogs/catalogs.module';
import { ConfigModule } from '@nestjs/config';

/**
 * @link https://docs.nestjs.com/techniques/configuration
 */


@Module({
  imports: [ConfigModule.forRoot(), ProductsModule, CatalogsModule],
  controllers: [AppController],
  providers: [AppService, ProductsService, CatalogsService],
})
export class AppModule {}
