import * as React from "react";
import * as _p from "prop-types";
import deepCompare from "../utils/deepCompare";
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
  options: any[];
  fieldNames?: {
    label: string;
    value: string;
  };
  label?: string;
  defaultValue?: string;
  onChange: (value: any) => any;
  labelStyle?: {
    [propName: string]: string;
  };
}
interface Istate {
  showSelected: boolean;
  selectedValue: string;
  firstName: string;
  secondName: string;
  innerEvents: boolean;
  title: string;
}
export default class Select extends React.Component<Iprops, Istate> {
  static propTypes = {
    formLayout: _p.object,
    className: _p.string,
    style: _p.object,
    options: _p.array.isRequired,
    fieldNames: _p.object,
    onChange: _p.func,
    defaultValue: _p.string,
    labelStyle: _p.object
  };
  static defaultProps = {
    fieldNames: {
      label: "label",
      value: "value"
    }
  };
  state: Istate = {
    showSelected: false,
    selectedValue: "",
    firstName: "",
    secondName: "",
    innerEvents: false,
    title: ""
  };
  setTitle = () => {
    const { defaultValue, options, fieldNames } = this.props;
    const isValue = options.find(v => v[fieldNames["value"]] === defaultValue);

    if (isValue) {
      this.setState({
        title: isValue[fieldNames["label"]]
      });
    } else {
      this.setState({ title: defaultValue || "" });
    }
  };
  componentDidMount() {
    this.setTitle();
  }
  componentDidUpdate(preProps: Iprops, preState: Istate) {
    const thisProps = this.props;
    const thisState = this.state;

    if (
      thisState.title === preState.title &&
      thisProps.defaultValue !== preProps.defaultValue
    ) {
      this.setState({ title: this.props.defaultValue || "" });
      this.setTitle();
    }
  }

  onPopupVisibleChange = (visible: boolean) => {
    this.setState({ showSelected: visible });
  };

  render() {
    const {
      style,
      formLayout,
      className: cssClass,
      options,
      fieldNames,
      onChange: propsOnChange,
      label,
      labelStyle
    } = this.props;

    const { showSelected, innerEvents, title } = this.state;

    let x, y;
    if (formLayout) {
      x = formLayout.x || null;
      y = formLayout.y || null;
    }

    return (
      <div className={"dy-select flex-y " + cssClass}>
        {label ? (
          <label
            style={{
              flex: x ? x : 1,
              ...labelStyle
            }}
          >
            {label}
          </label>
        ) : null}

        <div
          className="input-wrapper"
          style={{ flex: y ? y : 6, ...style, border: "none" }}
        >
          <span
            className="dy-select-label"
            style={{
              ...style,
              border: "none"
            }}
          >
            {title}
          </span>

          <input
            onClick={() => {}}
            onFocus={() => {
              this.onPopupVisibleChange(true);
            }}
            onBlur={() => {
              if (!innerEvents) this.onPopupVisibleChange(false);
            }}
            style={
              style.border
                ? {
                    fontSize: "0px",
                    border: style.border
                  }
                : {
                    fontSize: "0px"
                  }
            }
            className={innerEvents ? "focusInput" : ""}
          />
          <span
            onClick={() => {
              this.onPopupVisibleChange(true);
            }}
            className="dy-select-arrow"
            style={{
              transform: showSelected ? "rotate(180deg)" : "rotate(0deg)"
            }}
          />

          <div
            tabIndex={0}
            style={{
              width: "100%",
              visibility: showSelected ? "visible" : "hidden"
            }}
            className="dy-select-select"
            onMouseDown={e => {
              this.setState({ innerEvents: true });
            }}
            onFocus={() => {
              this.setState({ innerEvents: true });
              this.onPopupVisibleChange(true);
            }}
            onBlur={() => {
              this.setState({ innerEvents: false });
              this.onPopupVisibleChange(false);
            }}
          >
            {options.map((v, i) => (
              <div
                onClick={() => {
                  const selectedValue: string = v[fieldNames["value"]];
                  const title: string = v[fieldNames["label"]];

                  this.setState({ selectedValue, showSelected: false, title });
                  propsOnChange && propsOnChange(selectedValue);
                }}
                key={i}
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                className="dy-select-options flex-y flex-space-between"
              >
                {v[fieldNames["label"]]}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
