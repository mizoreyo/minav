import React, { Component } from 'react'
import Search from './components/Search'
import SiteList from './components/SiteList'
import './App.css'

export default class App extends Component {

  render() {
    return (
      <div className='main-body'>
        <Search />
        <SiteList />
      </div>
    )
  }
}

