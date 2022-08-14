const BASE_API = (method: string) =>
  `https://ws.audioscrobbler.com/2.0/?method=${method}&api_key=${process.env.NEXT_PUBLIC_LAST_FM_API_KEY}&format=json`;

const api = {
  GET_TRACKS_URL: BASE_API('chart.getTopTracks'),
  GET_ARTISTS_URL: BASE_API('chart.getTopArtists'),
  SEARCH_TRACKS_URL: BASE_API('track.search'),
  SEARCH_ARTISTS_URL: BASE_API('artist.search'),
};

export default api;
