import * as React from "react";
import * as _p from "prop-types";
import "./index.less";
interface Props {
  type: string;
  className?: string;
  style?: object;
  onClick?: (e: any) => void;
}
const Icon = (props: Props) => {
  return (
    <>
      <span style={props.style} onClick={props.onClick} className={`icon iconfont ${props.type} ${props.className}`} />
    </>
  );
};
Icon.propTypes = {
  type: _p.string.isRequired,
  className: _p.string,
  onClick: _p.func,
  style: _p.object,
};

export default Icon;
