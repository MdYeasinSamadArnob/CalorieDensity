import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodList from "./components/food-list.component"

class App extends Component {
  render() {
    return (
        <div className="container">
          <h2>Hello World</h2>
          <FoodList daytime="morning" date="03.03.2020" tableId="morning"></FoodList>
          <FoodList daytime="noon" date="03.03.2020" tableId="noon"></FoodList>
          <FoodList daytime="evening" date="05.03.2020" tableId="evening"></FoodList>
        </div>
    );
  }
}

export default App;