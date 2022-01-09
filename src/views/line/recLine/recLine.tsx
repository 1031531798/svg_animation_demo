import React, { LegacyRef } from "react";
import './line.scss'
import { SvgTitlte } from '../../../components/title/title';

export class RecLine extends React.Component{
  render(){
    return (
      <div className="svg-line-demo svg-div">
        <SvgTitlte label="svg 矩形进度条动画" />
        <svg
          width="300" 
        >
          <polyline points="5 5, 275 5, 275 100, 5 100, 5 5" fill="none" className="g-rect-path"/>
          <polyline points="5 5, 275 5, 275 100, 5 100, 5 5" fill="none" className="g-rect-fill"/>
        </svg>
      </div>
    )
  }
}