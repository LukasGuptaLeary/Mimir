import * as express from 'express';
import Axios from "axios";
import {EDAMAM_API_KEY, EDAMAM_APP_ID} from "../../api.config";

export const recipeRouter = express.Router();

recipeRouter.get('/', async (req, res, next) => {

    const { q } = req.query;

    const response = await Axios.get('https://api.edamam.com/search', {
        params: {
            app_id: EDAMAM_APP_ID,
            app_key: EDAMAM_API_KEY,
            q,
            from: 0,
            to: 20
        }
    });

    const { hits, count } = response.data;

    res.json({ hits, count });
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
