import { YoutubeItem } from "./../rxjs/youtube-search";
import { createAction, props } from "@ngrx/store";

export const search = createAction("[Youtube Search] Search");
export const results = createAction(
	"[Youtube Search] Results",
	props<{ searchItems: YoutubeItem[]; pageToken: string }>()
);


export default {
    search,
    results
}