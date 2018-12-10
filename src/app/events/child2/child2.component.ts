import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {

  @Output() event = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    this.event.emit('Child 2 here!!');
  }

}
