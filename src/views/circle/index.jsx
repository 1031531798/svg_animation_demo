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
  setSvgCircle () {
    const displays = document.querySelectorAll('.meter');
    displays.forEach(display => {
      let circlePath = display.querySelector('.circle-path')
      let radius = circlePath.r.baseVal.value
      let circumference = 2 * Math.PI * radius
      let num = 1 - (display.dataset.note / 10)
      let [int, dec] = display.dataset.note.split('.')
      this.numAnimation(display, Number(int), '.number-int')
      this.numAnimation(display, Number(dec), '.number-dec')
      circlePath.style.setProperty('stroke-dashoffset', circumference)
      setTimeout(() => circlePath.style.strokeDashoffset = circumference * num, 200);
    })
  }
  
  numAnimation (display, num, className) {
    const dom = display.querySelector(className)
    const decPoint = className === '.number-int' ? '.' : ''
    const time = this.state.transitionDuration / num
    let counter = 0
    let increase = setInterval(() => {
      if (counter >= num) {
        clearInterval(increase)
      }
      dom.innerText = counter + decPoint
      counter++
    }, time)
  }
  clearCircleNote () {
    console.error('232')
    this.setState((state) => ({
      transitionDuration: 700,
      circleList: state.circleList.map(item => {
        return {
          ...item,
          note: '0'
        }
      })
    }))
  }
  playerSvg () {
    this.clearCircleNote()
    setTimeout(() => {
    console.log(this.state)

    }, 1000)
    const displays = document.querySelectorAll('.meter');
  }
  // 挂载完成触发
  componentDidMount () {
    this.setSvgCircle()
  }
  getCircle () {
    return this.state.circleList.map(item => {
      return <SvgCircle key={item.name} note={item.note}></SvgCircle>
    })
  }
  render() {
    return <div className="svg-div">
      <div className="svg-demo-row">
        <h2 className="svg-demo-title">svg 环形进度条动画</h2>
        <span>{this.state.transitionDuration}</span>
        <BtnParticle label="点击播放" onClick={() => {this.playerSvg()}}></BtnParticle>
      </div>
      <div className="nav-box">
        {this.getCircle()}
      </div>
    </div>;
  }
}

