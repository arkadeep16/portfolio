import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Web Designer</h3>
              <p>
                I specialize in converting PSD and Figma designs into responsive
                web layouts using HTML, CSS, and Bootstrap, ensuring clean and
                pixel-perfect results.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I contribute to building dynamic and interactive web pages using
                JavaScript and React.js, focusing on performance,
                responsiveness, and user experience.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
