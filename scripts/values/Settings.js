/**
 * Created by javi on 18/6/15.
 */
angular
    .module("jeviteca")
    .value("Settings", {
        "albumsUrl": "data/albums.json",
        "bandsUrl": "data/bands.json",
        "genresUrl": "data/genres.json",
        "wikiBaseUrl": "https://es.wikipedia.org/wiki/Special:Search?search=",
        "youtubeBaseUrl": "https://www.youtube.com/results?search_query=",
        ratesStorageKey: "rates"
    });