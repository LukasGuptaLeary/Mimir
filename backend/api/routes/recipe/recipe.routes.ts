import * as express from 'express';
import * as admin from 'firebase-admin';
import Axios from 'axios';
import {EDAMAM_API_KEY, EDAMAM_APP_ID} from '../../api.config';
import {USER} from '../../functions/core/authorization';
import {FIREBASE_APP} from '../../functions/core/firebaseApp';
import * as qs from 'qs';

export const recipeRouter = express.Router();

recipeRouter.get('/', async (req, res, next) => {
    const { uid } = req[USER];
    const db = admin.firestore(req[FIREBASE_APP]);

    try {
        const user = await db.collection('user').doc(uid).get();

        const params = await getParams(user.data());

        const response = await Axios.get('https://api.edamam.com/search', {
            params,
            paramsSerializer: (p) => {
                const { q, ...other } = p;
                return 'q=' + q + '&' + qs.stringify(other, { indices: false });
            }
        });

        const { hits, count } = response.data;

        res.json({ hits, count });
    } catch (e) {
        console.log(e);
        res.status(500);
    }
});

recipeRouter.get('/:r', async (req, res, next) => {

    const { r } = req.params;

    const response = await Axios.get('https://api.edamam.com/search', {
        params: {
            app_id: EDAMAM_APP_ID,
            app_key: EDAMAM_API_KEY,
            r: `http://www.edamam.com/ontologies/edamam.owl#recipe_${r}`
        }
    });

    res.json(response.data[0]);
});

export async function getParams(user) {

    const { preferences, cuttingboard } = user;
    const { diet, dishType, cuisineType, health } = preferences;

    let params = {
        app_id: EDAMAM_APP_ID,
        app_key: EDAMAM_API_KEY,
        q: cuttingboard.join(','),
        from: 0,
        to: 20
    } as any;

    if (!(!diet) && diet !== '') {
        params = { ...params, diet };
    }

    if (!(!dishType) && dishType.length > 0) {
        params = { ...params, dishType };
    }

    if (!(!cuisineType) && cuisineType.length > 0) {
        params = { ...params, cuisineType };
    }

    if (!(!health) && health.length > 0) {
        params = { ...params, health };
    }

    return params;
}
