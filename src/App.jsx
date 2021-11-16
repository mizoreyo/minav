import React, { Component } from 'react'
import axios from 'axios'
import Search from './components/Search'
import SiteList from './components/SiteList'
import './App.css'

export default class App extends Component {
  state = {
    searchEngine: "baidu",
    classfyList: []
  }

  componentDidMount() {
    axios.get('/config.json')
      .then((response) => {
        const { background, classfyList, searchEngine } = response.data
        document.body.style.backgroundImage = `url("${background}")`
        this.setState({
          classfyList: classfyList,
          searchEngine: searchEngine
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render() {
    const { searchEngine, classfyList } = this.state
    return (
      <div className='main-body'>
        <Search searchEngine={searchEngine} />
        {
          classfyList.map((classfy, index) => {
            return <SiteList classfy={classfy} key={index} />
          })
        }
      </div>
    )
  }
}

