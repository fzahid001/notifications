import { AuthController } from 'src/modules/auth/controllers';
import { AuthService } from 'src/modules/auth/services';
import { Module } from '@nestjs/common';

@Module({
  imports: [
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
