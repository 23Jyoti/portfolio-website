import React from "react";
import skillsData from "../../data/skills.json"; 
import styles from "./Skills.module.css";

export const Skills = () => {
  return (
    <section className={styles.conatiner} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skillsData.map((skill, id) => {
            const imageUrl = skill.imageSrc;

            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={imageUrl} alt={skill.title} />
                </div>
                <p className={styles.para}>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};