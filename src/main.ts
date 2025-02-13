import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { config } from './config';
import * as cors from 'cors';
import { TransformInterceptor } from './interceptors';
import * as compression from 'compression';
// import helmet from 'helmet';

async function bootstrap() {
  const logger = new Logger(config.SERVICE_NAME);
  const app = await NestFactory.create(AppModule, {});

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
    logger.verbose(`App started on port: ${config.PORT}`),
  );
}
bootstrap();
