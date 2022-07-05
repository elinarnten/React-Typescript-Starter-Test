import React from "react";
import Styles from "./DishScreen.module.css";
import { dishes } from "../../../src/db/db.json";
interface Props {
  // id: number;
  // title: String;
  // description: String;
  // url: String;
}

export const DishScreen: React.FC<Props> = () => {
  return (
    <div>
      <h1 className={Styles.title}>Hello from dishscreen</h1>

      {dishes.map((dishes) => {
        return (
          <div className={Styles.container}>
            <div className={Styles.card}>
              <img className={Styles.img} src={dishes.url} alt={dishes.title} />

              <div className={Styles.textContainer}>
                <h2>{dishes.title}</h2>
                <p>{dishes.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
