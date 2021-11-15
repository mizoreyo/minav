import React, { Component } from 'react'
import './index.css'

export default class Site extends Component {

  handleJump = (siteUrl) => {
    window.location.href = siteUrl
  }

  render() {
    const { siteName, iconUrl, siteUrl } = this.props.site
    return (
      <li className='site'>
        <div className='site-icon' onClick={() => this.handleJump(siteUrl)}>
          <img src={iconUrl} alt="Error" />
        </div>
        <div className='site-name'>{siteName}</div>
      </li>
    )
  }
}

