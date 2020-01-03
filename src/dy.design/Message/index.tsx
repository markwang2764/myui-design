import * as React from "react";
import * as ReactDOM from "react-dom";

import * as _p from "prop-types";
import "./index.less";
interface Iprops {
  msg: string;
  time?: number;
  type: string;
}
class Message extends React.Component<Iprops> {
  static propsTypes = {
    msg: _p.string.isRequired,
    time: _p.number,
    type: _p.string.isRequired
  };
  static message: (arg: any, timer?: number) => void;
  static error: (arg: any, timer?: number) => void;
  static warning: (arg: any, timer?: number) => void;
  render = () =>
    ReactDOM.createPortal(
      <div
        style={{
          animation: `move ${this.props.time || 3}s`
        }}
        className={"dy-message " + "dy-message__" + this.props.type}
      >
        {this.props.msg}
      </div>,
      document.body
    );
}

export const message = (msg: string, time: number) => {
  const div = document.createElement("div");
  document.body.appendChild(div);
  ReactDOM.render(<Message msg={msg} time={time} type="success" />, div);

  setTimeout(() => {
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  }, time || 4000);
};
export const error = (msg: string, time: number) => {
  const div = document.createElement("div");
  document.body.appendChild(div);
  ReactDOM.render(<Message msg={msg} time={time} type="error" />, div);

  setTimeout(() => {
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  }, time || 4000);
};
export const warning = (msg: string, time: number) => {
  console.log(msg);

  const div = document.createElement("div");
  document.body.appendChild(div);
  ReactDOM.render(<Message msg={msg} time={time} type="warning" />, div);

  setTimeout(() => {
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  }, time || 4000);
};

Message.message = message;
Message.error = error;
Message.warning = warning;
export default Message;
