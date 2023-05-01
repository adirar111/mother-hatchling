import { Artworks } from "../lib/artworks";
import type { Artwork } from "../lib/types";
import styles from "./ArtworkLinks.module.css";

export default function ArtworkLinks() {
  // TODO: add collaborative piece link when implemented
  const art_table = {
    flyman: Artworks[0],
    going_somewhere: Artworks[1],
    hers_and_mine: Artworks[2],
    ill_be_behind_you: Artworks[3],
    motherhood: Artworks[4],
    ode_to_mother: Artworks[5],
    oh_mother: Artworks[6],
    still_life: Artworks[7],
    coming_out: Artworks[8],
  };

  const Empty = () => <td className={styles.td} />;
  const Link = ({
    artwork,
    rotateLeft,
    rotateRight,
    rotateUpside,
    passwordPromptText,
    password,
  }: {
    artwork: Artwork;
    rotateLeft?: boolean;
    rotateRight?: boolean;
    rotateUpside?: boolean;
    passwordPromptText?: string;
    password?: string;
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

    if (password && passwordPromptText) {
      return (
        <td className={styles.td}>
          <a
            className={`${classNames}${styles.link}`}
            href={`${import.meta.env.BASE_URL}artworks/${artwork.artworkName}`}
            onClick={(e) => {
              e.preventDefault();
              const passwordPrompt = () => {
                const inputtedPassword = window.prompt(passwordPromptText);
                if (inputtedPassword === null || inputtedPassword === "") {
                  // cancel conditions
                  // exit
                  return;
                }
                if (inputtedPassword === password) {
                  // successful password
                  window.location.href = `${import.meta.env.BASE_URL}artworks/${
                    artwork.artworkName
                  }`;
                  // exit after navigating
                  return;
                }
                passwordPrompt();
              };
              passwordPrompt();
            }}
          >
            {artwork.artworkName} by {artwork.props.artists.join(", ")}
          </a>
        </td>
      );
    }

    return (
      <td className={styles.td}>
        <a
          href={`${import.meta.env.BASE_URL}artworks/${artwork.artworkName}`}
          className={`${classNames}${styles.link}`}
        >
          {artwork.artworkName} by {artwork.props.artists.join(", ")}
        </a>
      </td>
    );
  };

  const row1 = (
    <tr className={styles.row} key={0}>
      <Empty key={0} />
      <Empty key={1} />
      <Empty key={2} />
      <Empty key={3} />
      <Link artwork={art_table.flyman} rotateLeft key={4} />
    </tr>
  );
  const row2 = (
    <tr className={styles.row} key={1}>
      <Link artwork={art_table.motherhood} rotateLeft key={0} />
      <Empty key={1} />
      <Link artwork={art_table.ode_to_mother} key={2} />
      <Empty key={3} />
      <Empty key={4} />
    </tr>
  );
  const row3 = (
    <tr className={styles.row} key={2}>
      <Empty key={0} />
      <Link artwork={art_table.ill_be_behind_you} rotateRight key={1} />
      <Empty key={2} />
      <Empty key={3} />
      <Empty key={4} />
    </tr>
  );
  const row4 = (
    <tr className={styles.row} key={3}>
      <Link artwork={art_table.oh_mother} rotateUpside key={0} />
      <Empty key={1} />
      <Empty key={2} />
      <Empty key={3} />
      <Link artwork={art_table.still_life} key={4} />
    </tr>
  );
  const row5 = (
    <tr className={styles.row} key={4}>
      <Empty key={0} />
      <Empty key={1} />
      <Link artwork={art_table.going_somewhere} rotateLeft key={2} />
      <Empty key={3} />
      <Empty key={4} />
    </tr>
  );
  const row6 = (
    <tr className={styles.row} key={5}>
      <Link
        artwork={art_table.coming_out}
        key={0}
        rotateLeft
        password="9999"
        passwordPromptText="Please dm @sunnypork to get the password"
      />
      <Empty key={1} />
      <Empty key={2} />
      <Empty key={3} />
      <Link artwork={art_table.hers_and_mine} rotateRight key={4} />
    </tr>
  );

  const rows = [row1, row2, row3, row4, row5, row6];

  return (
    <table className={styles.table}>
      <tbody>{rows}</tbody>
    </table>
  );
}
