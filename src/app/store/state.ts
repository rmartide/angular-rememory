import { YoutubeItem } from './../rxjs/youtube-search';
const state: State = {
    searchItems: [],
    pageToken: ''
}


export interface State {
    searchItems: YoutubeItem[];
    pageToken: string;
}

export default state;