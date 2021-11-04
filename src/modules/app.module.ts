import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { LoggerModule } from 'nestjs-pino';
import { StatusMonitorModule } from 'nestjs-status-monitor';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    LoggerModule.forRoot(),
    ConfigModule.forRoot(),
    StatusMonitorModule.forRoot(),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 100
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})

// eslint-disable-next-line import/prefer-default-export
export class AppModule {}
