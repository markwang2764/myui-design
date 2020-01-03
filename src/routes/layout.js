import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import "./layout.less";
import Menu from "@components/Menu";
import { DyIcon, DyDialog, DyMessage } from "@dy.design";
const { DyConfirm, DyAlert, DyModal } = DyDialog;
const { message, error, warning } = DyMessage;

export default class Layout extends React.Component {
  static contextTypes = {
    stateCtx: PropTypes.object,
    dispatchCtx: PropTypes.func
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      siderWidth: 0,
      contentWidth: 0
    };
  }

  componentDidMount() {
    // 常用ui组件 挂载至全局
    // window.alert = DyAlert;
    // window.confirm = DyConfirm;
    // window.modal = DyModal;
    window.message = message;
    window.warning = warning;
    window.error = error;
    const siderWidth = this.refs.siderRef.clientWidth;
    const contentWidth = document.body.clientWidth - siderWidth;
    this.setState({ contentWidth, siderWidth });
    window.toShow = str => {
      var Reg = new RegExp(
        "(import|class|from|extends|function|div|constructor|super|this|const|let)",
        "g"
      );
      var Reg1 = new RegExp("(<|>|log|render)", "g");
      var Reg2 = new RegExp("({|})", "g");
      var Reg3 = new RegExp("(['\"][a-zA-Z-.s]*?['\"])", "g");
      return str
        .replace(Reg1, "<font color=#f81d22>$1</font>")
        .replace(Reg3, "<font color=#0b8235>$1</font>")
        .replace(Reg2, "<font color=#999>$1</font>")
        .replace(Reg, "<font color=#008dff>$1</font>");
    };
    // innerHTML转译成文本
    window.toCopy = str => {
      let reg = /<\/?.+?\/?>/g;
      return str
        .replace(reg, "")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">");
    };
  }

  render() {
    return (
      <div
        className="container"
        style={{
          height: "100vh",
          overflow: "hidden"
        }}
      >
        <header className="header">dy.design</header>

        <div className="main">
          <div className="sider" ref="siderRef">
            <Menu />
          </div>
          <div className="content">
            {/* <HeaderNavigation siderWidth={this.state.siderWidth || 35} /> */}
            <React.Fragment>{this.props.children}</React.Fragment>
          </div>
        </div>
        <footer className="footer">
          © 2019 dy.plm Product Lifecycle Management Software Inc. 公司信息
          Cookie 策略 隐私政策 使用条款 数码 ID 报告盗版行为
        </footer>
      </div>
    );
  }
}
