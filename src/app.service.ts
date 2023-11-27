import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Aplicação de Gestão de Acervos e Catalogo Digital!';
  }
}
