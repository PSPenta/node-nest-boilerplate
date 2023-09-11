import { Injectable } from '@nestjs/common';
import { Utils } from '../helpers/utils';

@Injectable()
export class AppService {
  constructor(private readonly utils: Utils) {}

  getHello(): string {
    return this.utils.responseMsg('', true, { message: 'Hello PSP!' });
  }
}
