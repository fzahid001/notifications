import { FirebaseService } from './firebase.service';
import { NotificationService } from './notification.service';
import { Global, Module } from '@nestjs/common';
@Global()
@Module({
  imports:[
  ],
  providers: [FirebaseService, NotificationService],
  exports: [FirebaseService, NotificationService],
})
export class FirebaseModule {}
