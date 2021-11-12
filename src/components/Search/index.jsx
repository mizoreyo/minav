import React, { Component } from 'react'
import './index.css'

export default class Search extends Component {
  render() {
    return (
      <div className="search">
        <input className="search-input" type="text" placeholder="Search..." />
        <button className="search-button">
          <i className="iconfont icon-search"></i>
        </button>
      </div>
    )
  }
}
