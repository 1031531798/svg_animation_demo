import React from "react";
type CircleProps = {
  note: number
}
export class SvgCircle extends React.Component<CircleProps> {
  render(): React.ReactNode {
    return (
      <div className="meter" data-note={this.props.note}>
        <svg width="84" height="84" className="meter-svg">
          <circle cx="41" cy="41" r="38" className={['svg-circle', 'circle-path'].join(' ')}></circle>
          <circle cx="41" cy="41" r="38" className={['svg-circle', 'circle-fill'].join(' ')}></circle>
        </svg>
        <div className="number">
          <span className="number-int">0.</span>
          <span className="number-dec">00</span>
        </div>
      </div>
    )
  }
}