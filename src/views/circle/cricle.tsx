import React from "react";
type CircleProps = {
  note: string,
  transitionDuration: number
}
interface CircleType {
  numberIntRef: any
}
export class SvgCircle extends React.Component<CircleProps> {
  circlePathRef: any
  numberIntRef: any
  numberDecRef: any
  constructor(props: CircleProps) {
    super(props);
    this.state = {
      note: props.note
    }
    this.circlePathRef = React.createRef();
    this.numberIntRef = React.createRef();
    this.numberDecRef = React.createRef();
  }
  componentDidMount () {
    console.error(this.numberIntRef.current)
    this.setSvgCircle()
  }
  // 设置svg circle动画
  setSvgCircle () {
    const circlePath = this.circlePathRef.current
      const radius = circlePath.r.baseVal.value
      const circumference = 2 * Math.PI * radius
      const num = 1 - (Number(this.props.note) / 10)
      this.numAnimation(Number(this.props.note.split('.')[0]), this.numberIntRef.current)
      this.numAnimation(Number(this.props.note.split('.')[1]), this.numberDecRef.current)
      circlePath.style.setProperty('stroke-dashoffset', circumference)
      setTimeout(() => circlePath.style.strokeDashoffset = circumference * num, 200);
  }
  // 设置数字动画
  numAnimation (num: number, ref: any) {
    const time = this.props.transitionDuration / num
    let counter = 0
    const increase = setInterval(() => {
      if (counter >= num) {
        clearInterval(increase)
      }
      ref.innerText = counter + '.'
      counter++
    }, time)
  }
  render(): React.ReactNode {
    return (
      <div className="meter" data-note={this.props.note}>
        <svg width="84" height="84" className="meter-svg">
          <circle ref={this.circlePathRef} cx="41" cy="41" r="38" className={['svg-circle', 'circle-path'].join(' ')}></circle>
          <circle cx="41" cy="41" r="38" className={['svg-circle', 'circle-fill'].join(' ')}></circle>
        </svg>
        <div className="number">
          <span ref={this.numberIntRef} className="number-int">0.</span>
          <span ref={this.numberDecRef} className="number-dec">00</span>
        </div>
      </div>
    )
  }
}