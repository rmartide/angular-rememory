import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor() { }

  log: String[];

  ngOnInit() {
    this.log = new Array<String>();
  }

  handleChildrenClick(msg) {
    this.log.push(msg);
  }

}
