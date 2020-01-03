import React from "react";
import { DyProgress, DyButton } from "@dy.design";

export default class Progress extends React.Component {
  state = {
    num: 50
  };

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
    const { num } = this.state;
    return (
      <React.Fragment>
        <div className="flex-y">
          <DyProgress percent={num + "%"} />
          <div className="progress-num">{num}%</div>
        </div>
        <DyButton
          onClick={() => {
            const __num = num + 1;
            this.setState({ num: __num });
          }}
        >
          +
        </DyButton>
        <DyButton
          onClick={() => {
            console.log(1);

            const __num = num - 1;
            this.setState({ num: __num });
          }}
        >
          -
        </DyButton>

        <div className="codePlace">
          <pre
            dangerouslySetInnerHTML={{
              __html: toShow(`
              <div className="flex-y">
                <DyProgress percent={num + "%"} />
                <div className="progress-num">{num}%</div>
              </div>

              <DyButton
                onClick={() => {
                    const __num = num + 1;
                    this.setState({ num: __num });
                }}
                >
                 +
                </DyButton>
                <DyButton
                onClick={() => {
                    console.log(1);
        
                    const __num = num - 1;
                    this.setState({ num: __num });
                }}
                >
                 -
                </DyButton>
            `)
            }}
          />
          <button onClick={() => this.Copy()}>复制</button>
        </div>
        <div style={{ margin: "10px" }}>参数说明：</div>
        <div className="desc">percent： 0%-100% 类型: string</div>
      </React.Fragment>
    );
  }
}
