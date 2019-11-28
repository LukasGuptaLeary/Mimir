import * as admin from 'firebase-admin';
import {Request, Response} from 'express';

export const USER = 'userToken';

export async function useAuthorization(req: Request, res: Response, next) {
    let idToken = req.headers.authorization as string;

    if (idToken && idToken !== '') {
        if (idToken.startsWith('Bearer ')) {
            idToken = idToken.slice(7, idToken.length);
        }
        try {
            const decodedToken = await admin.auth().verifyIdToken(idToken);

            if (!decodedToken.uid) {
                return res.status(401).end();
            }

            req[USER] = decodedToken;

            return next();
        } catch (e) {
            console.log(e);
            return res.status(401).end();
        }
    } else {
        return res.status(401).end();
    }
}

