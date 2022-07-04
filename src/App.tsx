import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/layout/header/Header";
import { DishScreen } from "./screens/dish-screen/DishScreen";
import { SportsScreen } from "./screens/sports-screen/SportsScreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route path="/sports" component={SportsScreen} />
        <Route path="/dishes" component={DishScreen} />
      </BrowserRouter>
    </div>
  );
}

export default App;
