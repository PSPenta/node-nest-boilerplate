/* eslint-disable class-methods-use-this */
import { Injectable } from '@nestjs/common';

@Injectable()
// eslint-disable-next-line import/prefer-default-export
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
