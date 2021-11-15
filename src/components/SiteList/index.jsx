import React, { Component } from 'react'
import Site from "./Site"
import './index.css'

export default class SiteList extends Component {
  state = {
    listFolded: false
  }

  handleFold = () => {
    this.setState({
      listFolded: !this.state.listFolded
    })
  }

  render() {
    const { listFolded } = this.state
    const { classfyName,siteList } = this.props.classfy
    return (
      <div className='site-list-content'>
        <div className='list-header'>
          <button className='open-button' onClick={this.handleFold}>
            <i className={`iconfont open-button-icon ${listFolded ? 'icon-angle-right' : 'icon-angle-down'}`}></i>
          </button>
          <span>{classfyName}</span>
        </div>
        <ul className={`site-list ${listFolded ? 'hidden' : ''}`}>
          {
            siteList.map((site, index) => {
              return <Site key={index} site={site} />
            })
          }
        </ul>
      </div>
    )
  }
}
