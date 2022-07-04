import React from "react";
import { sports } from "../../../src/db/db.json";
import { dishes } from "../../../src/db/db.json";

interface Props {
  id: number;
  title: String;
  description: String;
  url: String;
}
console.log(sports);
console.log(dishes);
export const SportsScreen: React.FC<Props> = (props) => {
  return (
    <div>
      {/* <h1>{JSON.stringify(sports)}</h1> */}
      <h3>Hello from sports-screen</h3>

      {sports.map((sports) => {
        return (
          <div className="card">
            <div className="title">{sports.title}</div>
            <img className="img" src={sports.url} alt={sports.title} />
            <div className="description">{sports.description}</div>
          </div>
        );
      })}
    </div>
  );
};
