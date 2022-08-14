type ArtistData = {
  artists: Artists;
};

type Artists = {
  artist: Artist[];
  '@attr': Attribute;
};

type Artist = {
  name: string;
  playcount?: string;
  listeners: string;
  mbid: string;
  url: string;
  streamable: string;
  image: Image[];
};

type ArtistSearchData = {
  results: ArtistSearch;
};

type ArtistSearch = {
  'opensearch:Query': {
    '#text': string;
    role: string;
    startPage: string;
  };
  'opensearch:totalResults': string;
  'opensearch:startIndex': string;
  'opensearch:itemsPerPage': string;
  artistmatches: ArtistMatch;
  '@attr': Attribute;
};

type ArtistMatch = {
  artist: Artist[];
};
