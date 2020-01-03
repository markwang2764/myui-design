import React from "react";
import { DyButton } from "@dy.design";

export default class Button extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {}

  Copy = () => {
    var Url2 = document.getElementsByTagName("pre")[0].innerText;
    var oInput = document.createElement("textarea");
    oInput.value = Url2;
    document.body.appendChild(oInput);
    oInput.select(); // 选择对象
    document.execCommand("Copy"); // 执行浏览器复制命令
    alert("复制成功");
  };
  render() {
    return (
      <React.Fragment>
        <DyButton
          type="normal"
          onClick={() => {
            message("the message");
          }}
        >
          message
        </DyButton>
        <DyButton
          type="primary"
          onClick={() => {
            error("the error");
          }}
        >
          error
        </DyButton>
        <DyButton
          type="warning"
          onClick={() => {
            warning("the warning");
          }}
        >
          warning
        </DyButton>

        <div className="codePlace">
          <pre
            dangerouslySetInnerHTML={{
              __html: toShow(`
              <DyButton
                type="normal"
                onClick={() => {
                    message("the message");
                }}
                >
                message
              </DyButton>
              <DyButton
                type="primary"
                onClick={() => {
                    error("the error");
                }}
                >
                error
              </DyButton>
              <DyButton
                type="warning"
                onClick={() => {
                    warning("the warning");
                }}
                >
                warning
              </DyButton>
            `)
            }}
          />
          <button onClick={() => this.Copy()}>复制</button>
        </div>
        <div style={{ margin: "10px" }}>参数说明：</div>
        <div className="desc">三个方法已挂载至全局 message error warning</div>
      </React.Fragment>
    );
  }
}
