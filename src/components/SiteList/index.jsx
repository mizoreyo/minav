import React, { Component } from 'react'
import axios from 'axios'
import Site from "./Site"
import './index.css'

export default class SiteList extends Component {
  state = {
    siteList: []
  }

  componentDidMount() {
    axios.get('/config.json')
      .then((response) => {
        this.setState({
          siteList: response.data.siteList
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render() {
    const {siteList} =this.state
    return (
      <ul className='site-list'>
        {
          siteList.map((site,index) => {
            return <Site key={index} site={site} />
          })
        }
      </ul>
    )
  }
}
