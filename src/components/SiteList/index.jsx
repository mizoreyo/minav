import React, { Component } from 'react'
import Site from "./Site"
import './index.css'

export default class SiteList extends Component {
  state = {
    listFolded: false,
    unfoldHeight: 0
  }

  handleFold = () => {
    const { unfoldHeight } = this.state
    console.log("handleFold:" + unfoldHeight)
    const node = this.siteListContentNode
    if (!this.state.listFolded) {
      node.style.height = 52 + 'px'
    } else {
      node.style.height = unfoldHeight + 'px'
    }
    this.setState({
      listFolded: !this.state.listFolded
    })
  }

  windowResize = () => {
    const node = this.siteListContentNode
    const width = node.clientWidth
    const dataNum = this.props.classfy.siteList.length
    let targetHeight
    if (width === 1000) {
      targetHeight = Math.ceil(dataNum / 8) * 120 + 52
    } else if (width === 750) {
      targetHeight = Math.ceil(dataNum / 6) * 120 + 52
    } else if (width === 500) {
      targetHeight = Math.ceil(dataNum / 4) * 120 + 52
    } else if (width < 500) {
      targetHeight = Math.ceil(dataNum / 4) * width * 0.25 + 52
    }
    if (targetHeight !== this.state.unfoldHeight) {
      this.setState({
        unfoldHeight: targetHeight
      })
      console.log("windowResize:" + this.state.unfoldHeight)
      if (!this.state.listFolded) {
        node.style.height = targetHeight + 'px'
      }
    }
  }

  componentDidMount() {
    const node = this.siteListContentNode
    let height = node.clientHeight
    // 记录下第一次渲染出siteList的高度
    this.setState({
      unfoldHeight: height
    })
    console.log(height)
    // siteList高度本来是auto，为实现过渡效果设置siteList的高度
    node.style.height = height + 'px'
    // 设置窗口变化的回调
    window.addEventListener('resize', this.windowResize)
  }

  render() {
    const { listFolded } = this.state
    const { classfyName, siteList } = this.props.classfy
    return (
      <div ref={node => { this.siteListContentNode = node }} className='site-list-content'>
        <div className='list-header'>
          <button className='open-button' onClick={this.handleFold}>
            <i className={`iconfont open-button-icon ${listFolded ? 'icon-angle-right' : 'icon-angle-down'}`}></i>
          </button>
          <span>{classfyName}</span>
        </div>
        <ul className='site-list'>
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
