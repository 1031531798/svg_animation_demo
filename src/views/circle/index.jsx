import React from "react";
import { BtnParticle } from "../../components/Button/particle/btnParticle";
import './cricle.scss'
import {SvgCircle} from './cricle.tsx'
export class SvgCircleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transitionDuration: 900,
      circleList: [
        {name: 'circle1', note: '4.8'},
        {name: 'circle2', note: '6.3'},
        {name: 'circle3', note: '8.4'},
        {name: 'circle4', note: '5.5'}
      ]
    }
  }
  setRandomNote () {
    this.setState({
      circleList: this.state.circleList.map(item => {
        let intRandom = Math.floor(Math.random() * 10)
        let decRandom = Math.floor(Math.random() * 100)
        return {
          ...item,
          note: `${intRandom}.${decRandom}`
        }
      })
    })
  }
  clearCircleNote () {
    this.setState((state) => ({
      circleList: state.circleList.map(item => {
        return {
          ...item,
          note: '0.00'
        }
      })
    }))
  }
  playerSvg () {
    this.clearCircleNote()
    setTimeout(() => {
      this.setRandomNote()
    }, 1000)
  }
  // 挂载完成触发
  componentDidMount () {
    console.log(this.props)
  }
  getCircle () {
    return this.state.circleList.map(item => {
      return <SvgCircle key={item.name} note={item.note} transitionDuration={this.state.transitionDuration}></SvgCircle>
    })
  }
  render() {
    return <div className="svg-div">
      <div className="svg-demo-row">
        <h2 className="svg-demo-title">svg 环形进度条动画</h2>
        <BtnParticle label="点击播放" onClick={() => {this.playerSvg()}}></BtnParticle>
      </div>
      <div className="nav-box">
        {this.getCircle()}
      </div>
    </div>;
  }
}

