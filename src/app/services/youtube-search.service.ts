import { State } from './../store/state';
import {search} from '@app/store/actions';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { debounceTime, filter, distinctUntilChanged } from 'rxjs/operators';
import { YoutubeSearch, SearchInput } from '@app/rxjs/youtube-search';
import { HttpClient } from '@angular/common/http';
import * as JSON from '@assets/keys.json';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class YoutubeSearchService {
  private url = 'https://www.googleapis.com/youtube/v3/search';
  private input$: Subject<SearchInput> = new Subject();
  private search$: Subject<YoutubeSearch> = new Subject();
  private keys: { API_KEY: string, CLIENT_ID: string } = JSON['default'];
  private initParams = {
    part: 'snippet',
    key: this.keys.API_KEY,
    maxResults: '12',
    type: 'video'
  };
  constructor(private http: HttpClient, private store: Store<{youtubeSearch: State}>) {
    this.inputObservable().subscribe(searchInput => {
      this.emitYoutubeSearch(searchInput);
      this.store.dispatch(search());
    });
  }

  private inputObservable(): Observable<SearchInput> {
    return this.input$.pipe(
      debounceTime(300),
      filter(searchInput => searchInput.value !== ''),
      distinctUntilChanged()
    );
  }

  search(searchInput: SearchInput): void {
    this.input$.next(searchInput);
  }

  private emitYoutubeSearch(searchInput: SearchInput) {
    this.apiSearchObservable(searchInput).subscribe(result => this.search$.next(result));
  }

  private apiSearchObservable(searchInput: SearchInput): Observable<YoutubeSearch> {
    const params = {
      ...this.initParams
    };
    if (searchInput.option === 'q') {
      this.initParams['q'] = searchInput.value;
    }
    params[searchInput.option] = searchInput.value;
    return this.http.get<YoutubeSearch>(this.url, { params });
  }

  searchResults(): Observable<YoutubeSearch> {
    return this.search$;
  }
}
