import * as admin from 'firebase-admin';
import {Request, Response} from 'express';

const serviceAccount = require('../../secret/mimirServiceAccount.json');

export const firebaseApp = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://mimir-cd0bd.firebaseio.com'
});

export const FIREBASE_APP = 'firebaseAdmin';

export function useFirebaseApp(req: Request, res: Response, next) {
    req[FIREBASE_APP] = firebaseApp;
    next();
}
