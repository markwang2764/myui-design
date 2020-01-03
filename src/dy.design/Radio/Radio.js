import React from "react";
import _p from "prop-types";
import "./Radio.less";

const RadioButton = props => {
  return (
    <div className="radio" style={{ display: "inline-block", paddingLeft: "10px" }}>
      <input
        id={props.value}
        value={props.value}
        type="radio"
        checked={props.checked}
        name={props.name}
        onChange={() => (props.onClick ? props.onClick(this) : "")}
      />
      <label htmlFor={props.value}>{props.children}</label>
    </div>
  );
};

export default RadioButton;
