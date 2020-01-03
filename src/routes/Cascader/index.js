import React from "react";
import "./index.less";
import { DyCascader } from "@dy.design";
const options = [
  {
    uid: "480304801029029888",
    ctype: "SYSGROUP",
    name: "System Administrator",
    children: [
      {
        uid: "480304801058390016",
        ctype: "SYSROLE",
        name: "System Administrator"
      }
    ],
    project: false
  },
  {
    uid: "578236375673864192",
    ctype: "SYSGROUP",
    name: "test",
    children: [
      {
        uid: "578237137321721856",
        ctype: "SYSROLE",
        name: "测试人员"
      }
    ],
    project: true
  }
];
export default class Cascader extends React.Component {
  state = {
    loginGroup: "",
    loginRole: ""
  };
  componentDidMount() {}

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
              marginBottom: "10px"
            }}
          >
            普通用法：
          </div>
          <DyCascader
            options={options}
            fieldNames={{
              label: "name",
              value: "uid"
            }}
            style={{
              border: "1px solid #dfe6ed"
            }}
          />
          <div className="codePlace">
            <pre
              className="pre1"
              dangerouslySetInnerHTML={{
                __html: toShow(`
                const options = [
                  {
                    uid: "480304801029029888",
                    ctype: "SYSGROUP",
                    name: "System Administrator",
                    children: [
                      {
                        uid: "480304801058390016",
                        ctype: "SYSROLE",
                        name: "System Administrator"
                      }
                    ],
                    project: false
                  },
                  {
                    uid: "578236375673864192",
                    ctype: "SYSGROUP",
                    name: "test",
                    children: [
                      {
                        uid: "578237137321721856",
                        ctype: "SYSROLE",
                        name: "测试人员"
                      }
                    ],
                    project: true
                  }
                ];
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { DyCascader } from "@dy.design";


    class Cascader extends React.PureComponent {

        state = {
            loginGroup: "",
            loginRole: ""
          };


        render(){
            return    
            <DyCascader
                options={options}
                fieldNames={{
                    label: "name",
                    value: "uid"
                }}
                style={{
                    border: "1px solid #dfe6ed"
                }}
           
            />
        }
    }

    ReactDOM.render(<RadioExample />, DomNode);
            `)
              }}
            />
            <button onClick={() => this.Copy(".pre1")}>复制</button>
          </div>
        </div>

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
              marginBottom: "10px"
            }}
          >
            用于表单：
          </div>
          <DyCascader
            formLayout={{ x: 1, y: 4 }}
            options={options}
            fieldNames={{
              label: "name",
              value: "uid"
            }}
            defaultValue={["480304801029029888", "480304801058390016"]}
            style={{
              color: "red",
              border: "1px solid #dfe6ed"
            }}
            className="formCascader"
            label="组/角色："
            onChange={value => {
              this.setState({ loginGroup: value[0], loginRole: value[1] });
            }}
          />
          <div className="codePlace">
            <pre
              className="pre2"
              dangerouslySetInnerHTML={{
                __html: toShow(`
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { DyCascader } from "@dy.design";


    class Cascader extends React.PureComponent {

        state = {
            loginGroup: "",
            loginRole: ""
          };


        render(){
            return    
            <DyCascader
                formLayout={{ x: 1, y: 4 }}
                options={options}
                fieldNames={{
                    label: "name",
                    value: "uid"
                }}
                defaultValue={["480304801029029888", "480304801058390016"]}
                style={{
                    color: "red",
                    border: "1px solid #dfe6ed"
                }}
                className="tableCascader"
                label="组/角色："
                onChange={value => {
                  this.setState({ loginGroup: value[0], loginRole: value[1] });
                }}
          />
        }
    }

    ReactDOM.render(<RadioExample />, DomNode);

    style:
        .formCascader {
            background: #eee;
            padding: 30px;
            color: #000;
        }
      
            `)
              }}
            />
            <button onClick={() => this.Copy(".pre2")}>复制</button>
          </div>
        </div>

        <div style={{ margin: "10px" }}>参数说明：</div>
        <div className="desc">
          formLayout: label与input的flex宽度比例 x为label的比例， y为input的比例
          类型：{`{x: number, y: number}`}
        </div>
        <div className="desc">options: cascader的数据 类型： any[] </div>
        <div className="desc">
          fieldNames: 自定义 options 中 label value 默认是
          {`{label:"label",value:"value"}`} 类型：object{}
        </div>
        <div className="desc">defaultValue: 默认的选中项 类型： string[]</div>
        <div className="desc">style: input的样式 类型：object{}</div>
        <div className="desc">className: cascader组件的类名 类型： string</div>
        <div className="desc">label: 左侧lable 类型： string</div>
        <div className="desc">onChange: change时间 类型： fun</div>
      </React.Fragment>
    );
  }
}
