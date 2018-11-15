import { Component, OnInit, Input } from '@angular/core';
import { YoutubeItem } from '../youtube-search';
import ProxyTech from '@services/proximity-tech.js';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  @Input() searchItem: YoutubeItem;

  constructor() { }

  ngOnInit() {
  }

}
