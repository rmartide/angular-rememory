import { YoutubeSearch } from "@app/rxjs/youtube-search";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { YoutubeSearchService } from "@app/services/youtube-search.service";
import SearchActions from "./actions";
import { mergeMap, map, distinctUntilKeyChanged } from "rxjs/operators";

@Injectable()
export class YoutubeSearchEffects {
	loadResults$ = createEffect(() =>
		this.actions$.pipe(
			ofType(SearchActions.search),
			mergeMap(() =>
				this.youtube.searchResults().pipe(
					distinctUntilKeyChanged("nextPageToken"),
					map((result: YoutubeSearch) => {
						return SearchActions.results({ searchItems: result.items, pageToken: result.nextPageToken });
					})
				)
			)
		)
	);

	constructor(private actions$: Actions, private youtube: YoutubeSearchService) {}
}
