import { State } from './../store/state';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectFeatureYoutubeSearch } from '@app/store/selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.scss']
})
export class NgrxComponent {

  state: Observable<State> = this.store.select(selectFeatureYoutubeSearch);

  constructor(private store: Store<{youtubeSearch: State}>) { }
}
