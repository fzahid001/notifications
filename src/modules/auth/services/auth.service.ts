import { Injectable } from '@nestjs/common';
import { NotificationService } from '../../../utils/firebase/notification.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly notificationService: NotificationService,
  ) {}

  async sendNotification(notificationData: any): Promise<string> {
    this.notificationService.sendPushNotification(notificationData.fcmToken, {
      title: notificationData.title.toString(),
      body: notificationData.description.toString(),   
      data: notificationData.body,
    });
    return 'yes'
  }
}
