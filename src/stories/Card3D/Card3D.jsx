import React from "react";
import PropTypes from "prop-types";
import styles from "./Card3D.module.css";

/**
 * Primary UI component for user interaction
 */
export const Card3D = ({ coverImage, titleImage, upperImage, ...props }) => {
  return (
    <>
      <a
        href="https://www.mythrillfiction.com/force-mage"
        alt="Mythrill"
        target="_blank"
      >
        <div class={styles.card}>
          <div class={styles.wrapper}>
            <img src={coverImage} class={styles.coverImage} />
          </div>
          <img src={titleImage} class={styles.title} />
          <img src={upperImage} class={styles.character} />
        </div>
      </a>
    </>
  );
};
