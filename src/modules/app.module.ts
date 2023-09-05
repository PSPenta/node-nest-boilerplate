/* eslint-disable @typescript-eslint/comma-dangle */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { LoggerModule } from 'nestjs-pino';
import { StatusMonitorModule } from 'nestjs-status-monitor';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Utils } from '../helpers/utils';

@Module({
  imports: [
    LoggerModule.forRoot(),
    ConfigModule.forRoot(),
    StatusMonitorModule.forRoot(),
    ThrottlerModule.forRoot([
      {
        ttl: 60,
        limit: 100
      }
    ])
  ],
  controllers: [AppController],
  providers: [AppService, Utils]
})

// eslint-disable-next-line import/prefer-default-export
export class AppModule {}
