import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {map, switchMap, take} from 'rxjs/operators';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Observable} from 'rxjs';
import {RecipeModel} from '../../../shared/models/recipe.model';
import {RecipeService} from '../../../shared/recipe.service';
import {firestore} from 'firebase';
import Timestamp = firestore.Timestamp;

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  recipe$: Observable<RecipeModel>;

  comments: { comment: string; rating: string; timestamp: Timestamp; }[];

  addRatingsFormGroup = new FormGroup({
    rating: new FormControl(null, [])
  });
  addCommentsFormGroup = new FormGroup({
    comment: new FormControl(null, [])
  });

  constructor(
    private auth: AngularFireAuth,
    private db: AngularFirestore,
    private route: ActivatedRoute,
    private service: RecipeService
  ) { }

  ngOnInit() {
    this.recipe$ = this.route.parent.paramMap.pipe(
        switchMap((params: ParamMap) =>
            this.service.getRecipe(params.get('r')))
    );
    this.recipe$.pipe(take(1)).subscribe(recipe => {
      this.db
        .collection('recipe')
        .doc(this.getRecipeIDFromURI(recipe.uri))
        .collection('comments')
        .doc<{ comment: string; rating: string; timestamp: Timestamp; }>(this.auth.auth.currentUser.uid)
        .get().subscribe(comment => {
          this.addCommentsFormGroup.get('comment').patchValue(comment.data().comment);
          this.addRatingsFormGroup.get('rating').patchValue(comment.data().rating);
      });
    });
    this.getComments();
  }

  submitFeedback() {
    const rating = this.addRatingsFormGroup.get('rating').value;
    const comment = this.addCommentsFormGroup.get('comment').value;

    this.recipe$.pipe(take(1)).subscribe(recipe => {
      this.db
        .collection('recipe')
        .doc(this.getRecipeIDFromURI(recipe.uri))
        .collection('comments')
        .doc(this.auth.auth.currentUser.uid)
        .set({
          comment,
          rating,
          timestamp: firestore.FieldValue.serverTimestamp()
        }).then(() => {
          this.getComments();
      });
    });
  }

  getRecipeIDFromURI(uri: string) {
    const uriArray = uri.split('_');
    return uriArray[uriArray.length - 1];
  }

  getComments() {
    this.recipe$.pipe(
      take(1),
      switchMap(recipe => this.db
        .collection('recipe')
        .doc(this.getRecipeIDFromURI(recipe.uri))
        .collection('comments')
        .get()),
      map(docs => docs.docs.map(doc => doc.data()))
    ).subscribe(comments => {
      console.log(comments);
      this.comments = comments as { comment: string; rating: string; timestamp: Timestamp; }[];
    });
  }
}
