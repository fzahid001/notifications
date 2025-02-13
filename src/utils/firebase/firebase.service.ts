import * as admin from 'firebase-admin';
import { Injectable } from '@nestjs/common';
import { join } from 'path';

@Injectable()
export class FirebaseService {
  private readonly firebaseAdmin;

  constructor() {
  const serviceAccountPath = join(__dirname, '../../../firebase-admin.json');
  const serviceAccount = require(serviceAccountPath);
    // const serviceAccount = require('../../../purepay-firebase-admin.json');
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
    this.firebaseAdmin = admin;
  }

  getAdmin() {
    return this.firebaseAdmin;
  }
}