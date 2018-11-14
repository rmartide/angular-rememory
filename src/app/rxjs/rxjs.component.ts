import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { debounceTime, filter, distinctUntilChanged } from 'rxjs/operators';
import * as JSON from '@assets/keys.json';
import { YoutubeSearch, YoutubeItem } from './youtube-search';
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  constructor(private http: HttpClient) { }
  input$: Subject<String> = new Subject();
  searchItems: YoutubeItem[];
  typed = '';
  keys: { APIKEY: string, CLIENT_ID: string } = JSON['default'];
  url = 'https://www.googleapis.com/youtube/v3/search';

  ngOnInit() {
    this.input$.pipe(
      debounceTime(300),
      filter(typed => typed !== ''),
      distinctUntilChanged()
    )
      .subscribe(typed => this.print(typed));
  }

  handleChange(event: KeyboardEvent) {
    const target = <HTMLInputElement>event.target;
    this.input$.next(target.value);

  }

  print(value) {
    this.http.get<YoutubeSearch>(this.url,
      {
        params: {
          part: 'snippet',
          q: value,
          key: this.keys.APIKEY,
          maxResults: '12'
        }
      }
    ).subscribe(result => {
      this.searchItems = result.items;
    });
  }
}
