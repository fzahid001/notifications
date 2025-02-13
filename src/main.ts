import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { config } from './config';
import * as cors from 'cors';
import { TransformInterceptor } from './interceptors';
import * as compression from 'compression';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express'
// import helmet from 'helmet';

async function bootstrap() {
  const server = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  await app.startAllMicroservices();
  app.useGlobalInterceptors(new TransformInterceptor());
  app.use(cors());
  app.use(compression());

 
  await app.listen(config.PORT, () =>
    console.log(`App started on port: ${config.PORT}`),
  );
}
bootstrap();
