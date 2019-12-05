import {PreferencesModel} from './preferences.model';

export interface UserModel {
    favorits: string[];
    preferences: PreferencesModel;
    cuttingboard: string[];
}
