import { Component, OnInit, Input, ElementRef, OnDestroy } from '@angular/core';
import { YoutubeItem } from '../youtube-search';
import ProxyTech from '@services/proximity-tech.js';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit, OnDestroy {

  @Input() searchItem: YoutubeItem;

  constructor(private elRef: ElementRef) { }

  ngOnInit() {
    ProxyTech.exec(this.elRef.nativeElement);
  }

  ngOnDestroy(): void {
    //REMOVE EVENTLISTENER
  }
}
