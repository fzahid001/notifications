import { Controller, Get } from '@nestjs/common';
import { AuthService } from 'src/modules/auth/services';
import { Body, Post, Request } from '@nestjs/common';
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('send-notification')
  async sendNotification(@Body() notificationData: any) {
    console.log('notificationData :', notificationData);
    return await this.authService.sendNotification(notificationData);
  }
}
