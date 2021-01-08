import React, { Component } from 'react';

export default class FoodList extends Component {
    render() {
        return (
            <div>
                <table class="table">
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
            </div>
        )
    }
}