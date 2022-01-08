import React, { LegacyRef } from "react";
import './line.scss'
export class RecLine extends React.Component{
  render(){
    return (
      <div className="svg-line-demo">
        <svg
          width="300" height="200"
        >
          <polyline points="5 5, 575 5, 575 200, 5 200" fill="none" className="g-rect-path"/>
          <polyline points="5 5, 575 5, 575 200, 5 200" fill="none" className="g-rect-fill"/>
        </svg>
      </div>
    )
  }
}