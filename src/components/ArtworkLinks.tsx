import { Artworks } from "../lib/artworks";
import type { Artwork } from "../lib/types";
import styles from "./ArtworkLinks.module.css";

export default function ArtworkLinks() {
  // TODO: add collaborative piece link when implemented
  const art_table = {
    flyman: Artworks[0], //
    going_somewhere: Artworks[1],
    hers_and_mine: Artworks[2],
    ill_be_behind_you: Artworks[3], //
    motherhood: Artworks[4], //
    ode_to_mother: Artworks[5], //
    oh_mother: Artworks[6], //
    still_life: Artworks[7], //
    thread_of_red: Artworks[8],
  };

  const Empty = () => <div className={styles.gridItem} />;
  const Link = ({
    artwork,
    rotateLeft,
    rotateRight,
    rotateUpside,
  }: {
    artwork: Artwork;
    rotateLeft?: boolean;
    rotateRight?: boolean;
    rotateUpside?: boolean;
  }) => {
    let classNames = "";
    if (rotateLeft) {
      classNames += `${styles.rotateLeft} `;
    }
    if (rotateRight) {
      classNames += `${styles.rotateRight} `;
    }
    if (rotateUpside) {
      classNames += `${styles.rotateUpside} `;
    }
    // classNames = "";
    return (
      <div className={styles.gridItem}>
        <a href={`${import.meta.env.BASE_URL}artworks/${artwork.artworkName}`} className={classNames}>
          {artwork.artworkName} by {artwork.props.artists}
        </a>
      </div>
    );
  };

  const row1 = (
    <>
      <Empty />
      <Empty />
      <Empty />
      <Empty />
      <Link artwork={art_table.flyman} rotateLeft/>
    </>
  );
  const row2 = (
    <>
      <Link artwork={art_table.motherhood} rotateLeft></Link>
      <Empty />
      <Link artwork={art_table.ode_to_mother} />
      <Empty />
      <Empty />
    </>
  );
  const row3 = (
    <>
      <Empty />
      <Link artwork={art_table.ill_be_behind_you} rotateRight/>
      <Empty />
      <Empty />
      <Empty />
    </>
  );
  const row4 = (
    <>
      <Link artwork={art_table.oh_mother} rotateUpside />
      <Empty />
      <Empty />
      <Empty />
      <Link artwork={art_table.still_life} />
    </>
  );
  const row5 = (
    <>
      <Empty />
      <Empty />
      <Link artwork={art_table.going_somewhere} rotateLeft />
      <Empty />
      <Empty />
    </>
  );
  const row6 = (
    <>
      <Link artwork={art_table.thread_of_red}></Link>
      <Empty />
      <Empty />
      <Empty />
      <Link artwork={art_table.hers_and_mine} rotateRight />
    </>
  );

  return (
    <div className={styles.grid}>
      {row1}
      {row2}
      {row3}
      {row4}
      {row5}
      {row6}
    </div>
  );
}
