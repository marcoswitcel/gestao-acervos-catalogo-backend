import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // @note prefixo global para permitir versionamento da API
  // @link https://docs.nestjs.com/faq/global-prefix
  app.setGlobalPrefix('api/v1');

  await app.listen(3000);
}
bootstrap();
