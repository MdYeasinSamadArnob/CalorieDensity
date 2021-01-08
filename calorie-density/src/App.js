import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodList from "./components/food-list.component"

class App extends Component {
  render() {
    return (
        <div className="container">
          <h2>Hello World</h2>
          <FoodList></FoodList>
        </div>
    );
  }
}

export default App;