const BASE_API = (method: string, page: number) =>
  `https://ws.audioscrobbler.com/2.0/?method=${method}&api_key=${process.env.NEXT_PUBLIC_LAST_FM_API_KEY}&format=json&page${page}&limit=20`;

const api = {
  GET_TRACKS_URL: (page: number) => BASE_API('chart.getTopTracks', page),
  GET_ARTISTS_URL: (page: number) => BASE_API('chart.getTopArtists', page),
  SEARCH_TRACKS_URL: (page: number, query: string) =>
    `${BASE_API('track.search', page)}&track=${query}`,
  SEARCH_ARTISTS_URL: (page: number, query: string) =>
    `${BASE_API('artist.search', page)}&artist=${query}`,
};

export default api;
