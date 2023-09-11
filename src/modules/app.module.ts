import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';
import { ThrottlerModule } from '@nestjs/throttler';
// eslint-disable-next-line max-len
// import { TypeOrmModule } from '@nestjs/typeorm';                     // Run npm install --save @nestjs/typeorm typeorm mysql2
import { StatusMonitorModule } from 'nestjs-status-monitor';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Utils } from '../helpers/utils';
// import { databaseConfig } from '../configs/database.config';

@Module({
  imports: [
    LoggerModule.forRoot(),
    ConfigModule.forRoot(),
    StatusMonitorModule.forRoot(),
    ThrottlerModule.forRoot([
      {
        ttl: parseInt(process.env.RATE_LIMIT_TTL, 10) || 60,
        limit: parseInt(process.env.RATE_TOTAL_LIMIT, 10) || 100
      }
    ])
    // TypeOrmModule.forRoot(databaseConfig())
  ],
  controllers: [AppController],
  providers: [AppService, Utils]
})

export class AppModule {}
