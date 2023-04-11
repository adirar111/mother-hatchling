import type { ArtworkComponentProps } from "../lib/types";

export default function Artwork({
  artworkName,
  artists,
  medium,
  aboutArtists,
  artistLinks,
  aboutArtwork,
  localImagePaths,
  localAudioPaths,
  youtubeEmbedURLs,
}: ArtworkComponentProps) {
  const artworks = createArtworkComponents(
    localImagePaths,
    localAudioPaths,
    youtubeEmbedURLs
  );
  return (
    <div>
      <h2>{artworkName}</h2>
      <h3>by: {artists.join(", ")}</h3>
      <h3>about the artist:</h3>
      {aboutArtists.map((aboutArtist, index) => (
        <p key={index}>{aboutArtist}</p>
      ))}
      <ul>
        {artistLinks.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
      <h3>about the artwork:</h3>
      <p>{medium}</p>
      {aboutArtwork.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      {artworks.map((artwork, index) => (
        <div style={{ margin: "10px 0px", textAlign: "center" }} key={index}>
          {artwork}
        </div>
      ))}
    </div>
  );
}

function YouTubeEmbedFrame({ embedURL }: { embedURL: string }) {
  // not gonna bother parsing youtube URLs, so assume the link provided is embeddable
  return (
    <iframe
      width="100%"
      style={{
        aspectRatio: "16/9",
      }}
      src={embedURL}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
}

function createArtworkComponents(
  localImagePaths: string[] | null,
  localAudioPaths: string[] | null,
  youtubeEmbedURLs: string[] | null
) {
  const artworkArray = [];
  if (localImagePaths) {
    for (const localImagePath of localImagePaths) {
      const image = <img style={{ maxWidth: "100%" }} src={localImagePath} />;
      artworkArray.push(image);
    }
  }
  if (localAudioPaths) {
    for (const localAudioPath of localAudioPaths) {
      // enforcing mp3 filetype for audio
      const audio = (
        <audio controls>
          <source src={localAudioPath} type="audio/mpeg" />
        </audio>
      );
      artworkArray.push(audio);
    }
  }
  if (youtubeEmbedURLs) {
    for (const youtubeEmbedURL of youtubeEmbedURLs) {
      const youtubeFrame = <YouTubeEmbedFrame embedURL={youtubeEmbedURL} />;
      artworkArray.push(youtubeFrame);
    }
  }

  return artworkArray;
}
