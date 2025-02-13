import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MorganInterceptor, MorganModule } from 'nest-morgan';
import { AuthModuleOptions } from '@nestjs/passport';
import { APP_INTERCEPTOR, RouterModule } from '@nestjs/core';
import { routes } from './routes';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'src/config';
import { AuthModule } from '../auth';
import { FirebaseModule } from '../../utils/firebase/firebase.module';
import { NotificationService } from '../../utils/firebase/notification.service';


@Module({
  imports: [
    MongooseModule.forRoot(config.DATABASE_LINK, {
      dbName: config.DATABASE_NAME,
    }),
    AuthModule,
    FirebaseModule,
    RouterModule.register(routes),
    ConfigModule.forRoot({ isGlobal: true }),
    MorganModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: MorganInterceptor('combined'),
    },
    AuthModuleOptions,
    NotificationService
  ],
  exports: [NotificationService],
})
export class AppModule {
  static port: number;
  static hostname: string;
  static isProduction: boolean;

  constructor(private readonly configService: ConfigService) {
    AppModule.port = Number(process.env.PORT);
    AppModule.hostname = this.configService.get('APP_URL');
    AppModule.isProduction =
      this.configService.get('NODE_ENV') === 'production';
  }
}
