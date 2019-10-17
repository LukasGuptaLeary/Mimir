import { Component, OnInit, Injectable } from '@angular/core';
import {DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable()
export class CommonData {
  sharedData = 'https://www.google.com';
}

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent implements OnInit {

  recipeUrl: SafeResourceUrl;
  // sharedData: string;

  constructor(public sanitizer: DomSanitizer) {//, aService: CommonData) {
    // this.sharedData = aService.sharedData;
  }

  ngOnInit() {
    this.recipeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('http://www.recipe.com/');
  }

}
