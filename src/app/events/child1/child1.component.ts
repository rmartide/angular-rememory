import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {

  @Output() event = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    this.event.emit('Child 1 here!!');
  }

}
