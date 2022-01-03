import React from "react";
import './cricle.scss'
import {SvgCircle} from './cricle.tsx'
export class SvgCircleList extends React.Component {
  render() {
    return <div className="svg-div">
      <h2 className="svg-demo-title">svg 环形进度条动画</h2>
      <div className="nav-box">
        <SvgCircle note="4.8"></SvgCircle>
        <SvgCircle note="6.3"></SvgCircle>
        <SvgCircle note="8.4"></SvgCircle>
        <SvgCircle note="5.5"></SvgCircle>
      </div>
    </div>;
  }
}
window.onload = () => {
  setSvgCircle()
}
const transitionDuration = 900

function setSvgCircle () {
  const displays = document.querySelectorAll('.meter');
  displays.forEach(display => {
    let circlePath = display.querySelector('.circle-path')
    let radius = circlePath.r.baseVal.value
    let circumference = 2 * Math.PI * radius
    let num = 1 - (display.dataset.note / 10)
    let [int, dec] = display.dataset.note.split('.')
    numAnimation(display, Number(int), '.number-int')
    numAnimation(display, Number(dec), '.number-dec')
    circlePath.style.setProperty('stroke-dashoffset', circumference)
    setTimeout(() => circlePath.style.strokeDashoffset = circumference * num, 200);
  })
}


function numAnimation (display, num, className) {
  const dom = display.querySelector(className)
  const decPoint = className === '.number-int' ? '.' : ''
  const time = transitionDuration / num
  let counter = 0
  let increase = setInterval(() => {
    if (counter >= num) {
      clearInterval(increase)
    }
    dom.innerText = counter + decPoint
    counter++
  }, time)
}