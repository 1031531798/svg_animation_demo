import React from "react";
type SvgTitlteProps = {
  label: string
}
export class SvgTitlte extends React.Component<SvgTitlteProps>{
  render(): React.ReactNode {
    const prefixCls = 'svg-demo-row';
    return (
      <div className={prefixCls}>
        <h2 className="svg-demo-title">{this.props.label}</h2>
      </div>
    );
  }
}