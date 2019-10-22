import {RecipeModel} from './recipe.model';

export interface RecipeSearchModel {
    hits: {
        recipe: RecipeModel;
        bookmarked: boolean;
        bought: boolean;
    }[];
    count: number;
}
