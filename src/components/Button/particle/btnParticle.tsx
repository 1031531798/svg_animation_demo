import React from "react";
import './btnParticle.scss';
type ParticlePropsType = {
  label: string,
  onClick: any
}
export class BtnParticle extends React.Component<ParticlePropsType>{
  render(): React.ReactNode {
    const prefixCls = 'btn-particle';
    return (
      <div className={prefixCls}>
        <button 
        className={[`${prefixCls}-btn`, `${prefixCls}-pink`, `${prefixCls}-bubbles`].join(' ')}
        onClick={() => {this.props.onClick()}}
        >{this.props.label}</button>
      </div>
    );
  }
}