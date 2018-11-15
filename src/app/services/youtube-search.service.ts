import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { debounceTime, filter, distinctUntilChanged } from 'rxjs/operators';
import { YoutubeSearch } from '@app/rxjs/youtube-search';
import { HttpClient } from '@angular/common/http';
import * as JSON from '@assets/keys.json';

@Injectable({
  providedIn: 'root'
})
export class YoutubeSearchService {
  private url = 'https://www.googleapis.com/youtube/v3/search';
  private input$: Subject<String> = new Subject();
  private search$: Subject<YoutubeSearch> = new Subject();
  private keys: { API_KEY: string, CLIENT_ID: string } = JSON['default'];

  constructor(private http: HttpClient) {
    this.inputObservable().subscribe(value => this.emitYoutubeSearch(value));
  }

  inputObservable(): Observable<String> {
    return this.input$.pipe(
      debounceTime(300),
      filter(typed => typed !== ''),
      distinctUntilChanged()
    );
  }

  search(value): void {
    this.input$.next(value);
  }
/* 
  
  search(value): void {
    const obs = of(value).pipe(
      debounceTime(300),
      filter(typed => typed !== ''),
      distinctUntilChanged()
    );
    obs.subscribe(value => this.emitYoutubeSearch(value));
  }
 */
  emitYoutubeSearch(value) {
    this.apiSearchObservable(value).subscribe(result => this.search$.next(result));
  }

  apiSearchObservable(value): Observable<YoutubeSearch> {
    return this.http.get<YoutubeSearch>(this.url,
      {
        params: {
          part: 'snippet',
          q: value,
          key: this.keys.API_KEY,
          maxResults: '12'
        }
      }
    );
  }

  searchResults(): Observable<YoutubeSearch> {
    return this.search$;
  }
}
