import * as express from 'express';
import {recipeRouter} from './recipe/recipe.routes';

export const routes = express.Router();

routes.use('/recipe', recipeRouter);


