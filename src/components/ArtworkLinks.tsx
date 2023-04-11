import { Artworks } from "../lib/artworks";

export default function ArtworkLinks() {
  // TODO: add collaborative piece link when implemented
  return (
    <div>
      <h2>artworks</h2>
      <ul style={{ listStyleType: "none" }}>
        {Artworks.map((artwork, index) => (
          <li key={index}>
            <a href={`artworks/${artwork.artworkName}`}>
              {artwork.artworkName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
