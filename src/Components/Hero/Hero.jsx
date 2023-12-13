import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, we are The Programman</h1>
        <p className={styles.description}>We consist of 4 people, namely Ahmad Ferry R, Dimas Putra M, Saiful Amin Rizki, and Tri Setyobudi. 4 people who enjoy technology. Let's take a look at our team portfolio!</p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Us
        </a>
      </div>
      <img src={getImageUrl("hero/heroteam.png")} alt="Hero image of me" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
