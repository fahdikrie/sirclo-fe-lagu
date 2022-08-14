type ArtistData = {
  artists: Artists;
};

type Artists = {
  artist: Artist[];
  '@attr': Attribute;
};

type Artist = {
  name: string;
  playcount: string;
  listeners: string;
  mbid: string;
  url: string;
  streamable: string;
  image: Image[];
};
