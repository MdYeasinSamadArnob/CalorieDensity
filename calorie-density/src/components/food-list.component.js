import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./search.component.js"

export default class FoodList extends Component {


    test = () => {
        var amount = prompt("Please enter consumed amount in g");
        var table = document.getElementById("evening");
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell2.innerHTML = "NEW CELL1";
        cell1.innerHTML = amount;
    }

    render() {
        return (
            <div>
                <table class="table" id={this.props.tableId}>
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">{this.props.date}</th>
                            <th scope="col" colspan="3"> {this.props.daytime}</th>
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
                        <tr>
                            <td>12</td>
                            <td>Banana</td>
                            <td>1</td>
                            <td>good</td>
                        </tr>
                        <tr>
                            <td>233</td>
                            <td>Berries</td>
                            <td>2.3</td>
                            <td>okay</td>
                        </tr>
                        <tr>
                            <td>55</td>
                            <td>Bread</td>
                            <td>6</td>
                            <td>bad</td>
                        </tr>
                    </tbody>
                </table>
                <Search func={this.test}></Search>
                <br></br>
                <br></br>
            </div>
        )
    }
}