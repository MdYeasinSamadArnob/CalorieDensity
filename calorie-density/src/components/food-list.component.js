import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom'

import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./search.component.js"

export default class FoodList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            calDensity: 0,
            consumedGramsOfFood: 0,
            consumedCalories: 0
        };
    }

    test = (nf_calories) => {
        var amount = prompt("Please enter consumed amount in g");
        var table = document.getElementById(this.props.tableId);
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell2.innerHTML = nf_calories;
        cell1.innerHTML = amount;
        this.setState({  
            consumedGramsOfFood: Number(this.state.consumedGramsOfFood) + Number(amount),
            consumedCalories: Number(this.state.consumedCalories) + Number(nf_calories * (amount / 100))})
    }

    render() {

        return (
            <div>
                <table class="table" id={this.props.tableId}>
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">{this.props.date}</th>
                            <th scope="col"> {this.props.daytime}</th>
                            <th scope="col">Calorie Density: {this.state.consumedCalories / this.state.consumedGramsOfFood}</th>
                            <th scope="col">Consumed Food: {this.state.consumedGramsOfFood}g</th>
                            <th scope="col">Consumed Calories: {this.state.consumedCalories} kcal</th>
                        </tr>
                    </thead>
                    <thead>
                        <tr>
                            <th scope="col">Amount(g)</th>
                            <th scope="col">Item</th>
                            <th scope="col">kcal/100g</th>
                            <th scope="col">Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
                <Search func={this.test}></Search>
                <br></br>
                <br></br>
            </div>
        )
    }
}