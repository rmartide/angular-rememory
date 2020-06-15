import { State } from './../store/state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { YoutubeItem } from '@app/rxjs/youtube-search';

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.scss']
})
export class NgrxComponent implements OnInit {

  searchItems: YoutubeItem[] = [];

  constructor(private store: Store<{youtubeSearch: State}>) { }

  ngOnInit(): void {
    this.store.subscribe(({youtubeSearch}) => {
      this.searchItems = youtubeSearch?.searchItems;
    })
  }

}
