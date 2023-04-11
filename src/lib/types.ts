export type Artwork = {
  artworkName: string;
  props: {
    artists: string[];
    aboutArtists: string[];
    artistLinks: string[];
    medium: string;
    aboutArtwork: string[];
    localImagePaths: string[] | null;
    localAudioPaths: string[] | null;
    youtubeEmbedURLs: string[] | null;
  };
};

export type ArtworkComponentProps = {
  artworkName: string;
  artists: string[];
  aboutArtists: string[];
  artistLinks: string[];
  medium: string;
  aboutArtwork: string[];
  localImagePaths: string[] | null;
  localAudioPaths: string[] | null;
  youtubeEmbedURLs: string[] | null;
};
