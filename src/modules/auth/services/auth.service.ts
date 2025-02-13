import { Injectable } from '@nestjs/common';
import { NotificationService } from '../../../utils/firebase/notification.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly notificationService: NotificationService,
  ) {}

  async sendNotification(notificationData: any): Promise<string> {
    console.log('notificationData.title :', notificationData.title);
    console.log('notificationData.body :', notificationData.body);
    console.log('notificationData.fcmToken :', notificationData.fcmToken);
    this.notificationService.sendPushNotification(notificationData.fcmToken, {
      title: notificationData.title.toString(),
      body: notificationData.body.toString(),   
      data: {
        title: notificationData.title.toString(),
        body: notificationData.body.toString(),
      }

    });
    return 'yes'
  }
}
