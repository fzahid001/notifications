import { Global } from '@nestjs/common';
import { FirebaseService } from '../firebase/firebase.service';

@Global()
export class NotificationService {
    constructor(
        private firebaseService: FirebaseService,
    ) { }

    async sendPushNotification(fcmToken: string, payload: any) {
        const messaging = this.firebaseService.getAdmin().messaging();
        try {
            const response = await messaging.send({
                token: fcmToken,
                notification: {
                    title: payload.title, // Assuming 'title' is part of the payload
                    body: payload.body,    // Assuming 'body' is part of the payload
                },
                data: payload.data // Include additional data if needed
            });
            console.log('response :', response);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    }
}