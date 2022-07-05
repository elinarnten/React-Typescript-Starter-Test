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
    <div className={Styles.DishScreenContainer}>
      <h3>Hello from dishscreen</h3>

      {dishes.map((dishes) => {
        return (
          <div className={Styles.container}>
            <div className={Styles.card}>
              <img className={Styles.img} src={dishes.url} alt={dishes.title} />
              <h2 className={Styles.cardTitle}>{dishes.title}</h2>
              <p className={Styles.description}>{dishes.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
