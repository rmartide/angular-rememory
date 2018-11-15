import { Component, OnInit, ElementRef } from '@angular/core';
import { YoutubeItem } from './youtube-search';
import { YoutubeSearchService } from '@app/services/youtube-search.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  private changes: MutationObserver;
  constructor(private youtube: YoutubeSearchService) {
  }
  searchItems: YoutubeItem[];

  ngOnInit() {
    this.youtube.searchResults()
      .subscribe(result => {
        this.searchItems = result.items.filter(item => item.id.kind === "youtube#video");
      });
  }
}
