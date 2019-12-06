import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {RecipeModel} from '../../../shared/models/recipe.model';
import {filter, map, tap} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {


  recipes$: Observable<RecipeModel[]>;

  constructor(
      private auth: AngularFireAuth,
      private db: AngularFirestore,
      private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipeIDFromURI(uri: string) {
    const uriArray = uri.split('_');
    return uriArray[uriArray.length - 1];
  }

  removeFavorite(recipe) {
    this.db.collection('user')
      .doc(this.auth.auth.currentUser.uid)
      .collection('favorites')
      .doc(this.getRecipeIDFromURI(recipe.uri))
      .delete().then(() => {
        this.getRecipes();
        const snack = this.snackbar.open(recipe.label + ' has been removed from your favorites.', null, {
          duration: 8000
        });
      });
  }

  getRecipes() {
    this.recipes$ = this.db
      .collection('user')
      .doc(this.auth.auth.currentUser.uid)
      .collection('favorites')
      .get().pipe(
          map(docs => docs.docs.map(doc => doc.data().recipe))
      );
  }

}
