import * as React from "react";
import * as _p from "prop-types";
import "./index.less";
import Icon from "../Icon";

interface Iprops {
  className?: string;
  color?: string;
  style?: { [propName: string]: any };
  label?: string;
  labelStyle?: { [propName: string]: any };
  formLayout: { x: number; y: number };
  onChange: (e: any) => void;
  checked?: boolean;
  size?: "tiny" | "normal";
  disabled?: boolean;
  text?: {
    checked: string;
    unChecked: string;
  };
}
interface Istate {
  isOn: boolean;
}

export default class Switch extends React.Component<Iprops, Istate> {
  static propTypes = {
    className: _p.string,
    color: _p.string,
    style: _p.object,
    label: _p.string,
    labelStyle: _p.object,
    formLayout: _p.shape({
      x: _p.number,
      y: _p.number,
    }),
    checked: _p.bool,
    disabled: _p.bool,
    text: _p.shape({
      checked: _p.string,
      unChecked: _p.string,
    }),
  };
  static defaultProps = {
    color: "#57a0b9",
    formLayout: { x: 1, y: 5 },
    checked: false,
    size: "normal",
    disabled: false,
    text: {
      checked: "开",
      unChecked: "关",
    },
  };
  state: Istate = {
    isOn: this.props.checked,
  };
  componentDidUpdate = (preProps: Iprops) => {
    const thisProps = this.props;
    if (preProps.checked !== thisProps.checked) {
      this.setState({ isOn: thisProps.checked });
    }
  };
  switch = () => {
    const { className: cssClass, style, onChange: onPropsChange, size, disabled, text } = this.props;
    const { isOn } = this.state;

    return (
      <div
        className={
          "switch-wrapper flex " +
          (size ? size : "") +
          " " +
          (cssClass ? cssClass : "") +
          " " +
          (isOn ? "switch-ison" : "switch-isoff") +
          " " +
          (disabled ? "disabled" : "")
        }
        style={style}
        onClick={() => {
          if (disabled) return;
          this.setState({
            isOn: !isOn,
          });
          onPropsChange && onPropsChange(!isOn);
        }}
      >
        <span className="lefttext" style={{ display: isOn ? "block" : "none" }}>
          {text.checked}
        </span>
        <Icon
          type="dy-gongyede-"
          className="switch-button"
          style={{
            transition: "transform .5s",
          }}
        />
        <span className="righttext" style={{ display: isOn ? "none" : "block" }}>
          {text.unChecked}
        </span>
      </div>
    );
  };
  render() {
    const { label, formLayout, labelStyle } = this.props;

    if (label) {
      return (
        <div className="flex-y form-item">
          <label className="form-label" style={{ flex: formLayout.x, ...labelStyle }}>
            {label}
          </label>
          <div className="form-content" style={{ flex: formLayout.y }}>
            {this.switch()}
          </div>
        </div>
      );
    }

    return this.switch();
  }
}
