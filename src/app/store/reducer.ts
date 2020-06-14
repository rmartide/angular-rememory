import SearchActions from "./actions";
import initialState, { State } from "./state";
import { createReducer, on, Action } from "@ngrx/store";

const _youtubeSearchReducer = createReducer(
	initialState,
	on(SearchActions.results, (state, payload) => ({
		...state,
		...payload
	}))
);

export function reducer(state: State, action: Action) {
    return _youtubeSearchReducer(state, action);
}
