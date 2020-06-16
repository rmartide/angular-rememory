import { State } from './state';
import { createSelector } from '@ngrx/store';

export interface AppState {
    youtubeSearch: State
}


export const selectFeature = (state: AppState) => state.youtubeSearch;

export const selectFeatureYoutubeSearch = createSelector(
    selectFeature,
    (state: State) => state
);