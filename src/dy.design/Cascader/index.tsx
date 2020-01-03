import * as React from "react";
import * as _p from "prop-types";
import Icon from "../Icon";
import "./index.less";
import deepCompare from "../utils/deepCompare";
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
  labelStyle?: { [key: string]: any };
  defaultValue?: any[];
  onChange: (value: any) => any;
}
interface Istate {
  showSelected: boolean;
  childOptions: any[];
  selectedValue: any[];
  label: string;
  firstName: string;
  secondName: string;
  innerEvents: boolean;
}

export default class Cascader extends React.Component<Iprops, Istate> {
  static propTypes = {
    formLayout: _p.object,
    className: _p.string,
    style: _p.object,
    options: _p.array.isRequired,
    fieldNames: _p.object,
    onChange: _p.func,
    defaultValue: _p.array,
    label: _p.string,
    labelStyle: _p.object
  };
  theIpt: null | HTMLInputElement = null;
  state: Istate = {
    showSelected: false,
    childOptions: [],
    selectedValue: [],
    firstName: "",
    secondName: "",
    label: "",
    innerEvents: false
  };
  componentDidMount() {
    if (this.props.defaultValue) {
      this.setLabel();
    }
  }

  componentDidUpdate(preProps: Iprops, preState: Istate) {
    const thisProps = this.props;
    const { options, defaultValue } = thisProps;
    if (
      !deepCompare(options, preProps.options) ||
      !deepCompare(defaultValue, preProps.defaultValue)
    ) {
      if (defaultValue) {
        this.setLabel();
      }
    }
  }

  getRelevanceHierarchy = (value: string, hierarchy: any[]): any => {
    const { fieldNames } = this.props;
    let result,
      finded = false;
    const travelsal = (data: any) => {
      if (finded) {
        return;
      } else if (data[fieldNames.value] === value) {
        result = data;
        finded = true;
      } else {
        data.children && data.children.forEach(travelsal);
      }
    };
    hierarchy.forEach(travelsal);
    return result;
  };

  setLabel = () => {
    const { options, defaultValue, fieldNames } = this.props;

    if (options.length === 0) return;

    let label = "";
    const father = this.getRelevanceHierarchy(defaultValue[0], options);

    let children: any[] = [];
    if (father) {
      label = father[fieldNames.label];
      children = father.children;
    }

    let child = children.find(j => j[fieldNames.value] == defaultValue[1]);
    if (child) {
      label = father[fieldNames.label] + " / " + child[fieldNames.label];
    }
    this.setState({ label });
  };

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
      defaultValue,
      label: formLabel,
      labelStyle
    } = this.props;

    const {
      showSelected,
      childOptions,
      selectedValue,
      firstName,
      secondName,
      innerEvents,
      label
    } = this.state;

    let field = fieldNames
      ? fieldNames
      : {
          label: "label",
          value: "value"
        };

    let x, y;
    if (formLayout) {
      x = formLayout.x || null;
      y = formLayout.y || null;
    }

    return (
      <div className={"dy-cascader flex-y " + cssClass}>
        {formLabel ? (
          <label
            style={{
              flex: x ? x : 1,
              ...labelStyle
            }}
          >
            {formLabel}
          </label>
        ) : null}
        <div
          className="input-wrapper"
          style={{ flex: y ? y : 6, ...style, border: "none" }}
        >
          <span
            className="dy-cascader-label"
            style={{
              ...style,
              border: "none"
            }}
          >
            {label}
          </span>

          <input
            onClick={() => {}}
            onFocus={() => {
              this.onPopupVisibleChange(true);
              this.setState({ childOptions: [] });
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
            className="dy-cascader-arrow"
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
            className="dy-cascader-select flex"
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
            <div className="dy-cascader-select_left">
              {options.map((v, i) => (
                <div
                  onMouseEnter={() => {
                    if (v.children) {
                      const selectedValue = [v[field["value"]]];
                      this.setState({
                        childOptions: v.children,
                        selectedValue,
                        firstName: v.name,
                        secondName: ""
                      });
                    }
                  }}
                  onMouseLeave={() => {}}
                  key={i}
                  className="dy-cascader-options flex-y flex-space-between"
                >
                  {v[field["label"]]}
                  <Icon
                    type="dy-angle-right"
                    style={{
                      fontSize: "12px"
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="dy-cascader-select_right">
              {childOptions.map((v, i) => (
                <div
                  onClick={() => {
                    let selectedValue = this.state.selectedValue;
                    selectedValue[1] = v[field["value"]];
                    const label = firstName + " / " + v.name;

                    this.setState({
                      selectedValue,
                      secondName: v.name,
                      label,
                      showSelected: false
                    });
                    propsOnChange && propsOnChange(selectedValue);
                  }}
                  key={i}
                  className="dy-cascader-options"
                >
                  {v[field["label"]]}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
