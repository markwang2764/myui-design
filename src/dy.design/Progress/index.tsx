import * as React from "react";
import * as _p from "prop-types";
import "./index.less";

interface Iprops {
  className?: string;
  percent?: string;
  color?: string;
  style?: { [propName: string]: any };
}
interface Istate {}

export default class Progress extends React.Component<Iprops, Istate> {
  static propTypes = {
    className: _p.string,
    percent: _p.string,
    color: _p.string,
    style: _p.object,
  };

  static defaultProps = {
    percent: "0%",
    color: "#57a0b9",
  };
  render() {
    const { percent, color, className: cssClass, style } = this.props;

    return (
      <div className={"progress-wrapper " + (cssClass ? cssClass : "")} style={style}>
        <div
          className="progress-innerbar"
          style={{
            width: percent,
            background: color,
          }}
        />
      </div>
    );
  }
}
