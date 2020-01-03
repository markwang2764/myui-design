import React, { Fragment } from "react";
import "./index.less";
import { DyFormItem, DyIcon } from "../../dy.design";
let throtter = null;
export default class FormItem extends React.Component {
  state = {
    username: "",
    password: ""
  };
  Copy = className => {
    var Url2 = document.querySelector(className).innerText;

    var oInput = document.createElement("textarea");
    oInput.value = Url2;
    document.body.appendChild(oInput);
    oInput.select(); // 选择对象
    document.execCommand("Copy"); // 执行浏览器复制命令
    alert("复制成功");
  };

  render() {
    const { username, password } = this.state;
    return (
      <React.Fragment>
        <div
          style={{
            fontSize: "16px",
            padding: "30px",
            marginBottom: "10px",
            background: "#fff"
          }}
        >
          <div
            style={{
              marginBottom: "30px"
            }}
          >
            FormItem用法：
          </div>
          <DyFormItem
            onChange={value => {
              this.setState({ username: value });
              // 实时输入验证的 请使用以下代码进行节流
              //   if (throtter) {
              //     clearTimeout(throtter);
              //   }
              //   if (value) {
              //     throtter = setTimeout(() => {
              //       //   this.verifyName(value);
              //       clearTimeout(throtter);
              //     }, 1000);
              //   } else {
              //     // this.setState({ verify: null });
              //   }
            }}
            className="username"
            formLayout={{ x: 1, y: 4 }}
            state="success"
            style={{ color: "#fff" }}
            labelStyle={{ color: "#fff" }}
            value={username}
            label="账户："
          />
          <DyFormItem
            type="password"
            style={{ color: "#fff" }}
            labelStyle={{ color: "#fff" }}
            onChange={value => {
              this.setState({ password: value });
            }}
            className="password"
            formLayout={{ x: 1, y: 4 }}
            value={password}
            state="error"
            label="密码："
          />
          <div style={{ margin: "30px 0px" }}>普通的输入框：</div>
          <DyFormItem
            style={{ color: "#fff" }}
            labelStyle={{ color: "#fff" }}
            onChange={value => {}}
            className="password"
            suffix={
              <DyIcon
                onClick={() => {
                  alert(1);
                }}
                type="dy-guanfangbanben"
              />
            }
          />
          <div className="codePlace">
            <pre
              className="pre1"
              dangerouslySetInnerHTML={{
                __html: toShow(`
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { DyFormItem } from "../../dy.design";


    class FormItem extends React.PureComponent {

        state = {
            username: "",
            password: ""
          };


        render(){
            const { username, password } = this.state;
        return    
          <Fragment>
            <DyFormItem
             onChange={value => {
                this.setState({ username: value });
                // 实时输入验证的 请使用以下代码进行节流
                //   if (throtter) {
                //     clearTimeout(throtter);
                //   }
                //   if (value) {
                //     throtter = setTimeout(() => {
                //       //   this.verifyName(value);
                //       clearTimeout(throtter);
                //     }, 1000);
                //   } else {
                //     // this.setState({ verify: null });
                //   }
                }}
                className="username"
                formLayout={{ x: 1, y: 4 }}
                state="success"
                style={{ color: "#fff" }}
                labelStyle={{ color: "#fff" }}
                value={username}
                label="账户："
            />

            <DyFormItem
                type="password"
                style={{ color: "#fff" }}
                labelStyle={{ color: "#fff" }}
                onChange={value => {
                    this.setState({ password: value });
                }}
                className="password"
                formLayout={{ x: 1, y: 4 }}
                value={password}
                state="error"
                label="密码："
            />

            <DyFormItem
                style={{ color: "#fff" }}
                labelStyle={{ color: "#fff" }}
                onChange={value => {}}
                className="password"
                suffix={<DyIcon type="dy-guanfangbanben" />}
            />
          </Fragment>
        }
    }

    ReactDOM.render(<FormItem />, DomNode);

    style: 
    .username,
    .password {
        padding: 30px;
        background: #ccc;
        color: #fff;
    }

            `)
              }}
            />
            <button onClick={() => this.Copy(".pre1")}>复制</button>
          </div>
        </div>

        <div style={{ margin: "10px" }}>参数说明：</div>
        <div className="desc">onChange: 输入框的change事件</div>
        <div className="desc">
          className: 控制整个容器的样式 不包括label和input的样式 类型： string
        </div>
        <div className="desc">style: input的样式 类型：object{}</div>
        <div className="desc">labelStyle: label的样式 类型object{}</div>
        <div className="desc">label: 左侧lable 类型： string</div>
        <div className="desc">state: success | error 类型： string</div>
        <div className="desc">suffix: 末尾显示的额外元素 类型： any</div>
        <div className="desc">
          formLayout: label与input的flex宽度比例 x为label的比例， y为input的比例
          类型：{`{x: number, y: number}`}
        </div>
      </React.Fragment>
    );
  }
}
