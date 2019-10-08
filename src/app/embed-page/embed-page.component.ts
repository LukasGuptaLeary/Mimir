import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-embed-page',
  templateUrl: './embed-page.component.html',
  styleUrls: ['./embed-page.component.css']
})
export class EmbedPageComponent implements OnInit {

  embeddedUrl : string;

  constructor() {
    this.embeddedUrl = "https://www.google.com/"
  }

  ngOnInit() {
  }

}
