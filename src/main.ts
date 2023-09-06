import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as compression from 'compression';
import helmet from 'helmet';
import { Logger } from 'nestjs-pino';
import { AppModule } from './modules/app.module';

(async () => {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    bufferLogs: true
  });

  await app.useLogger(app.get(Logger));
  await app.use(helmet());
  await app.use(compression());

  const config = new DocumentBuilder()
    .setTitle('Node Nest Boilerplate')
    .setDescription('')
    .setVersion('1.0.0')
    .addTag('')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/api-docs', app, document);

  await app.listen(process.env.HTTP_PORT || 8090);
})();
