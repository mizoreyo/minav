import React, { Component } from 'react'
import axios from 'axios'
import Search from './components/Search'
import SiteList from './components/SiteList'
import './App.css'

export default class App extends Component {
  state={
    searchEngine: "baidu",
    classfyList: []
  }

  componentDidMount() {
    axios.get('/config.json')
      .then((response) => {
        this.setState({
          classfyList: response.data.classfyList,
          searchEngine: response.data.searchEngine
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render() {
    const {searchEngine,classfyList}=this.state
    return (
      <div className='main-body'>
        <Search searchEngine={searchEngine} />
        {
          classfyList.map((classfy,index) => {
            return <SiteList classfy={classfy} key={index} />
          })
        }
      </div>
    )
  }
}

