import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodList from "./components/food-list.component"

class App extends Component {
  render() {
    return (
        <div className="container">
          <h1>Calorie Density</h1>
          <br></br>
          <br></br>
          <FoodList daytime="Breakfast" date={new Date().toISOString().slice(0, 10)} tableId="morning"></FoodList>
          <FoodList daytime="Lunch" date={new Date().toISOString().slice(0, 10)}  tableId="noon"></FoodList>
          <FoodList daytime="Dinner" date={new Date().toISOString().slice(0, 10)}  tableId="evening"></FoodList>
        </div>
    );
  }
}

export default App;