import * as React from "react";
import Icon from "../Icon";
import * as _p from "prop-types";
import "./index.less";

interface Iprops {
  formLayout?: {
    x: number;
    y: number;
  };
  className?: string;
  style?: {
    [propName: string]: string;
  };
  type?: string;
  label?: string;
  labelStyle?: {
    [propName: string]: string;
  };
  value?: string | number;
  state?: null | "error" | "success";
  suffix?: React.ReactElement;
  onChange?: (value: number | string) => any;
}
interface Istate {}

export default class FormItem extends React.Component<Iprops, Istate> {
  static propTypes = {
    formLayout: _p.object,
    className: _p.string,
    style: _p.object,
    labelStyle: _p.object,
    label: _p.string,
    value: _p.oneOfType([_p.string, _p.number]),
    type: _p.string,
    state: _p.oneOf(["error", "success", null]),
    onChange: _p.func,
    suffix: _p.element,
  };

  render() {
    const {
      style,
      label,
      formLayout,
      className: cssClass,
      onChange: IonChange,
      state,
      type,
      value: inputValue,
      labelStyle,
      suffix,
    } = this.props;

    let x, y;
    if (formLayout) {
      x = formLayout.x || null;
      y = formLayout.y || null;
    }
    return (
      <div className={"form-item flex-y " + cssClass}>
        {label ? (
          <label
            style={{
              flex: x ? x : 1,
              ...labelStyle,
            }}
          >
            {label}
          </label>
        ) : null}
        {type === "textArea" ? (
          <textarea
            value={inputValue}
            onChange={e => {
              IonChange(e.target.value);
            }}
            style={{
              flex: y ? y : 6,
              ...style,
            }}
          />
        ) : (
          <>
            <input
              value={inputValue}
              type={type}
              onChange={e => {
                IonChange(e.target.value);
              }}
              style={{
                flex: y ? y : 6,
                ...style,
              }}
            />
            {state == "success" ? (
              <Icon type="dy-check-circle" className="icon-state" />
            ) : state == "error" ? (
              <Icon type="dy-times-circle" className="icon-state icon-error-state" />
            ) : null}
            {suffix ? <div className="suffix-wrapper">{suffix}</div> : null}
          </>
        )}
      </div>
    );
  }
}
