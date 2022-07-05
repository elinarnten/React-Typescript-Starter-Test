import React from "react";
import { sports } from "../../../src/db/db.json";
import styles from "./SportsScreen.module.css";

interface Props {
  id: number;
  title: String;
  description: String;
  url: String;
}
console.log(sports);

export const SportsScreen: React.FC<Props> = (props) => {
  return (
    <div>
      {/* <h1>{JSON.stringify(sports)}</h1> */}
      <h1 className={styles.title}>Hello from sports-screen ⚽ </h1>

      {sports.map((sports) => {
        return (
          <div className={styles.container}>
            <div className={styles.card}>
              <img className={styles.img} src={sports.url} alt={sports.title} />
              <h2 className={styles.cardTitle}>{sports.title}</h2>
              <p className={styles.description}>{sports.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
