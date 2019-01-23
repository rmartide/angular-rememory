import { Component, OnInit, HostListener } from '@angular/core';
import { YoutubeItem } from './youtube-search';
import { YoutubeSearchService } from '@app/services/youtube-search.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  constructor(private youtube: YoutubeSearchService) {
  }
  searchItems: YoutubeItem[];
  pageToken: string;
  auxToken: string;
  length: number;

  handleScroll() {
    if (this.auxToken !== this.pageToken) {
      this.youtube.search({ value: this.pageToken, option: 'pageToken' });
      this.auxToken = this.pageToken;
    }
  }

  ngOnInit() {
    this.youtube.searchResults()
      .subscribe(result => {
        this.searchItems = result.prevPageToken ? this.searchItems.concat(result.items) : result.items;
        this.pageToken = result.nextPageToken;
        this.length = this.searchItems.length;
      });
  }
}
