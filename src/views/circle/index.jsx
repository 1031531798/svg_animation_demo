import React from "react";
import './cricle.css'
export class SvgCircle extends React.Component {
  render() {
    return <div className="svg-div">
      <div className="nav-box">
        <div className="meter" data-note="7.59">
          <svg width="84" height="84" className="meter-svg">
            <circle cx="41" cy="41" r="38" className={['svg-circle', 'circle-path'].join(' ')}></circle>
            <circle cx="41" cy="41" r="38" className={['svg-circle', 'circle-fill'].join(' ')}></circle>
          </svg>
          <div className="number">
            <span className="number-int">0.</span>
            <span className="number-dec">00</span>
          </div>
        </div>
        <div className="meter" data-note="6.93">
          <svg width="84" height="84" className="meter-svg">
            <circle cx="41" cy="41" r="38" className={['svg-circle', 'circle-path'].join(' ')}></circle>
            <circle cx="41" cy="41" r="38" className={['svg-circle', 'circle-fill'].join(' ')}></circle>
          </svg>
          <div className="number">
            <span className="number-int">0.</span>
            <span className="number-dec">00</span>
          </div>
        </div>
        <div className="meter" data-note="5.38">
          <svg width="84" height="84" className="meter-svg">
            <circle cx="41" cy="41" r="38" className={['svg-circle', 'circle-path'].join(' ')}></circle>
            <circle cx="41" cy="41" r="38" className={['svg-circle', 'circle-fill'].join(' ')}></circle>
          </svg>
          <div className="number">
            <span className="number-int">0.</span>
            <span className="number-dec">00</span>
          </div>
        </div>
        <div className="meter" data-note="9.30">
          <svg width="84" height="84" className="meter-svg">
            <circle cx="41" cy="41" r="38" className={['svg-circle', 'circle-path'].join(' ')}></circle>
            <circle cx="41" cy="41" r="38" className={['svg-circle', 'circle-fill'].join(' ')}></circle>
          </svg>
          <div className="number">
            <span className="number-int">0.</span>
            <span className="number-dec">00</span>
          </div>
        </div>
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