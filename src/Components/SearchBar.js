import React, { Component } from "react"
import { Link } from 'react-router-dom'

class SearchBar extends Component {
  constructor() {
    super()

    this.state = {
      search: ''
    }

    this.handleChange = this.handleChange.bind(this)

  }

  handleChange(e) {
    this.setState({
    search: e.target.value
    })

  }

  render() {
    return (
      <form className="form-inline mt-3 mb-5">
        <div className="form-group mb-2 mr-2">
          <input
            type="text"
            className="form-control-plaintext bg-light rounded"
            name="search"
            placeholder="Search for a Country..."
            onChange={this.handleChange}
            value={this.state.search}
          />
        </div>
        <Link to={`/Details/${this.state.search}`}>
          <button  className="btn btn-secondary mb-2"> Search </button>
        </Link>
      </form>
    )
  }
}

export default SearchBar
