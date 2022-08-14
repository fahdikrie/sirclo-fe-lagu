type TrackData = {
  tracks: Tracks;
};

type Tracks = {
  track: Track[];
  '@attr': Attribute;
};

type Track = {
  name: string;
  playcount?: string;
  listeners: string;
  mbid: string;
  url: string;
  streamable: Streamable;
  artist: TrackArtist | string;
  image: Image[];
};

type Streamable = {
  '#text': string;
  fulltrack: string;
};

type TrackArtist = {
  name: string;
  mbid: string;
  url: string;
};

type TrackSearchData = {
  results: TrackSearch;
};

type TrackSearch = {
  'opensearch:Query': {
    '#text': string;
    role: string;
    startPage: string;
  };
  'opensearch:totalResults': string;
  'opensearch:startIndex': string;
  'opensearch:itemsPerPage': string;
  trackmatches: TrackMatch;
  '@attr': Attribute;
};

type TrackMatch = {
  track: Track[];
};
