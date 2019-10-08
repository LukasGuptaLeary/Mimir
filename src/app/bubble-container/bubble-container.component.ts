import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bubble-container',
  templateUrl: './bubble-container.component.html',
  styleUrls: ['./bubble-container.component.css']
})
export class BubbleContainerComponent implements OnInit {

  @Input()
  header: string;
  @Input()
  list;

  constructor() {
    this.header = 'Insert a Header';
    this.list = ['pass', 'in', 'a', 'list'];
  }

  ngOnInit() {
  }

}
