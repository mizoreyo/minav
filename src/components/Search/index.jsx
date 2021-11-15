import React, { Component } from 'react'
import './index.css'

export default class Search extends Component {

  handleSearch = () => {
    const {searchEngine}=this.props
    const { value } = this.searchNode
    switch (searchEngine) {
      case 'baidu': {
        window.location.href = `https://www.baidu.com/s?ie=UTF-8&wd=${value.trim()}`
        break
      }
      case 'google': {
        window.location.href = `https://www.google.com/search?q=${value.trim()}`
        break
      }
      default: {
        window.location.href = `https://www.baidu.com/s?ie=UTF-8&wd=${value.trim()}`
      }
    }
  }

  handleEnterKey=(event) => {
    if(event.key==='Enter') {
      this.handleSearch()
    }
  }

  render() {
    return (
      <div className="search">
        <input onKeyUp={this.handleEnterKey} className="search-input" type="text" placeholder="Search..." ref={node => this.searchNode = node} />
        <button onClick={this.handleSearch} className="search-button">
          <i className="iconfont icon-search"></i>
        </button>
      </div>
    )
  }
}
