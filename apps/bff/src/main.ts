/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = AppModule.CONFIGURATION.GLOBAL_PREFIX || 'api';
  app.setGlobalPrefix(globalPrefix);
  const config = new DocumentBuilder()
    .setTitle('E Bff API')
    .setDescription('The bff API description')
    .setVersion('1.0')
    .addTag('bff')
    .addBearerAuth({
      description: 'JWT Authorization header using the Bearer scheme',
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      name: 'Authorization',
      in: 'header',
    })
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(`${globalPrefix}/docs`, app, documentFactory);
  const port = AppModule.CONFIGURATION.APP_CONFIG.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
  Logger.log(
    `📖 Swagger docs available at: http://localhost:${port}/${globalPrefix}/docs`
  );
}

bootstrap();
