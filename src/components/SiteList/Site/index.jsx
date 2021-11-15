import React, { Component } from 'react'
import './index.css'

export default class Site extends Component {
  
  render() {
    const {siteName,iconUrl}=this.props.site
    return (
      <li className='site'>
        <div className='site-icon'>
          <img src={iconUrl} alt="Error" />
        </div>
        <div className='site-name'>{siteName}</div>
      </li>
    )
  }
}
