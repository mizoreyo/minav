import React, { Component } from 'react'
import './index.css'

export default class Search extends Component {

  state = {
    isScrolled: false
  }

  componentDidMount() {
    window.onscroll = () => {
      let scrollDistance = document.documentElement.scrollTop
      console.log("滚动=" + scrollDistance)
      if (scrollDistance > 0) {
        this.setState({
          isScrolled: true
        })
      } else {
        this.setState({
          isScrolled: false
        })
      }
    }
  }

  handleSearch = () => {
    const { searchEngine } = this.props
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

  handleEnterKey = (event) => {
    if (event.key === 'Enter') {
      this.handleSearch()
    }
  }

  render() {
    const { isScrolled } = this.state
    const height = document.documentElement.clientHeight
    console.log('高度' + height);
    return (
      <div className={`${isScrolled ? 'scrolled' : ''} search`} style={isScrolled ? { marginTop : (height - 50) / 2} : { margin: (height - 50) / 2
  }
}>
        <div className="search-input-content">
          <input onKeyUp={this.handleEnterKey} className='search-input' type="text" placeholder="Minav Search" ref={node => this.searchNode = node} />
          <hr className='underline' />
        </div>
        <button onClick={this.handleSearch} className="search-button">
          <i className="iconfont icon-search"></i>
        </button>
      </div >
    )
  }
}
