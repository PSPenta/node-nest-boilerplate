/* eslint-disable class-methods-use-this */
import { Injectable } from '@nestjs/common';
import { Utils } from '../helpers/utils';

@Injectable()
// eslint-disable-next-line import/prefer-default-export
export class AppService {
  constructor(private readonly utils: Utils) {}

  getHello(): string {
    return this.utils.responseMsg('', true, { message: 'Hello PSP!' });
  }
}
