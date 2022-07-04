import React from "react";
import Styles from "./DishScreen.module.css";

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
    </div>
  );
};
