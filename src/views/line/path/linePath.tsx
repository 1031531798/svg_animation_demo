import React, { LegacyRef } from "react";
import Vivus from 'vivus'
import './line.scss'
import { SvgTitlte } from '../../../components/title/title';

export class LinePath extends React.Component{
  setAnimation () {
    const vivusObject = new Vivus('line-svg', {
      duration: 200,
    }, () => {
      console.error('dsadsa')
    });
  }
  componentDidMount () {
    this.setAnimation()
  }
  render(){
    return (
      <div className="svg-div svg-line-demo">
        <SvgTitlte label="svg 线条动画" />
        <svg className="live-svg" width="50" height="50" viewBox="0 0 16 16">
          <circle cx="8" cy="8" r="8" stroke="none" fill="#e92689" />
          {[1, 2, 3].map((it, index) => (
            <line
              key={index}
              className={`line-${index + 1}`}
              stroke="#fff"
              strokeLinecap="round"
              strokeWidth="1.5"
              x1={5 + index * 3}
              y1="3"
              x2={5 + index * 3}
              y2="12"
            />
          ))}
        </svg>
        <div className="move-point">
          <svg
          id="line-svg"
          >
            <path fill="transparent" stroke="#888888" strokeWidth="1" d="M10 80 Q 77.5 10, 145 80 T 280 80" className="path"></path>
          </svg>
          <div className="ball">
          </div>
        </div>
      </div>
    )
  }
}