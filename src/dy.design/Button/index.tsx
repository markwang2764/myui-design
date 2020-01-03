import * as React from "react";
import * as _p from "prop-types";
import "./index.less";

interface Iprops {
  children: React.ReactChildren | string;
  formLayout?: {
    x: number;
    y: number;
  };
  className?: string;
  style?: {
    [propName: string]: string;
  };
  type?: string;
  onClick?: (e: any) => any;
}
interface Istate {}
const types: any = {
  normal: "dy-button-normal",
  primary: "dy-button-primary",
  warning: "dy-button-warning",
  disabled: "dy-button-disabled",
  strong: "dy-button-strong",
  ghost: "dy-button-ghost",
};
export default class Button extends React.PureComponent<Iprops, Istate> {
  static propTypes = {
    children: _p.oneOfType([_p.element, _p.string]).isRequired,
    formLayout: _p.object,
    className: _p.string,
    style: _p.object,
    type: _p.string,
    onClick: _p.func,
  };

  // componentDidUpdate(preProps: Iprops) {
  //   const thisProps = this.props;
  //   console.log(thisProps);
  // }
  render() {
    const { formLayout, style, type, className: cssClass, children, onClick: propsOnClick } = this.props;

    return (
      <button
        className={"dy-button " + types[type] + " " + cssClass}
        style={style}
        onClick={e => {
          if (type == "disabled") return;
          propsOnClick && propsOnClick(e);
        }}
      >
        {children}
      </button>
    );
  }
}
