import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  ratings = [];
  comments = [];
  date = new Date();
  timeStamp = '';
  count = 0;

  addRatingsFormGroup = new FormGroup({
    rating: new FormControl(null, [])
  });
  addCommentsFormGroup = new FormGroup({
    comment: new FormControl(null, [])
  });

  constructor() { }

  ngOnInit() {
  }

  addRating() {
    const rating = this.addRatingsFormGroup.get('rating');
    if (rating.value) {
      this.ratings.pop();
      this.ratings.push(rating.value);
    }
  }

  addCom() {
    const comment = this.addCommentsFormGroup.get('comment');
    if (comment.value) {
      this.comments.push(comment.value);
      this.timeStamp = formatDate(this.date, 'MM-dd-yyyy @ hh:mm a', 'en-US', 'est');
      this.count = this.comments.length;
    }
  }
}
