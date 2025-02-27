import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Samia.</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 2 years of experience of learning React, NodeJS and python. Reach out if
          you'd like to learn more.
        </p>
        <a className={styles.contactBtn} href="mailto:myemail@email.com">
          Contact Me
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero Image"
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
