type TrackData = {
  tracks: Tracks;
};

type Tracks = {
  track: Track[];
  '@attr': Attribute;
};

type Track = {
  name: string;
  playcount: string;
  listeners: string;
  mbid: string;
  url: string;
  streamable: Streamable;
  artist: TrackArtist;
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
