import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent implements OnInit {
  
  recipeUrl: SafeResourceUrl;

  constructor (public sanitizer:DomSanitizer) {

  }

  ngOnInit() {
    this.recipeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com');
  }

}
