import { Artworks } from "../lib/artworks";

export default function ArtworkLinks() {
  return (
    <div>
      <h2>artworks</h2>
      <ul>
        {Artworks.map((artwork) => (
          <li>
            <a href={`/artworks/${artwork.artworkName}`}>
              {artwork.artworkName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
