export interface YoutubeSearch {
    etag: string;
    items: Array<YoutubeItem>;
    kind: string;
    regionCode: string;
    pageInfo: PageInfo;
    nextPageToken: string;
    prevPageToken: string;
}

export interface YoutubeItem {
    etag: string;
    id: YoutubeItemId;
    kind: string;
    snippet: YoutubeItemSnippet;
}

export interface PageInfo {
    totalResults: Number;
    resultsPerPage: Number;
}

export interface YoutubeItemId {
    kind: string;
    videoId: string;
}

export interface YoutubeItemSnippet {
    channelId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: string;
    thumbnails: SnippetThumbnails;
    title: string;
}

export interface SnippetThumbnails {
    default: SnippetThumbnailsQuality;
    high: SnippetThumbnailsQuality;
    medium: SnippetThumbnailsQuality;
}

export interface SnippetThumbnailsQuality {
    url: string;
    width: Number;
    height: Number;
}

export interface SearchInput {
    value: string;
    option: string;
}
