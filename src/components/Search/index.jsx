import React, { Component } from 'react'
import './index.css'

export default class Search extends Component {
  handleSearch=() => {
    alert('搜索')
  }

  render() {
    return (
      <div className="search">
        <input className="search-input" type="text" placeholder="Search..." />
        <button onClick={this.handleSearch} className="search-button">
          <i className="iconfont icon-search"></i>
        </button>
      </div>
    )
  }
}
