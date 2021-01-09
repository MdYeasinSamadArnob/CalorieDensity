import React, { Component } from 'react'
import axios from 'axios'
import SearchResults from './searchresults.component.js'
 

export default class Search extends Component {
  state = {
    query: '',
    results: []
  }

  getInfo = () => {

    const foodPostData = {
        appKey: process.env.REACT_APP_API_KEY,
        query: this.state.query,
        appId: process.env.REACT_APP_APP_ID,
        fields: [
            "item_name",
            "brand_name",
            "nf_calories"
          ],
    }
     
    axios.post('https://api.nutritionix.com/v1_1/search', foodPostData)
      .then(({ data }) => {
        this.setState({
          results: data.hits[0]
        })
        console.log(this.getState)
      })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } else if (!this.state.query) {
      }
    })
  }

  render() {
    return (
      <form>
        <input
          placeholder="Search your food"
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <SearchResults results={this.state.results} />
      </form>
    )
  }
}

