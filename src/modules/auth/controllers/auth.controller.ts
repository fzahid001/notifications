import { Controller, Get, Body, Post } from '@nestjs/common';
import { AuthService } from 'src/modules/auth/services';
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Get('test')
  async test() { 
    return 'test';
  }

  @Post('send-notification')
  async sendNotification(@Body() notificationData: any) {
    console.log('notificationData :', notificationData);
    return await this.authService.sendNotification(notificationData);
  }
}
