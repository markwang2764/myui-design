import React from "react";
import "./index.less";
import { DySelect } from "@dy.design";

const options = [
  { ctype: "SYSROLE", key: "0-0-0", name: "dbAdm", uid: "480304799577800704" },
  {
    ctype: "SYSROLE",
    key: "0-2-0",
    name: "3ffdsfdsfdsfsd",
    uid: "603538432966262784"
  },
  {
    ctype: "SYSROLE",
    key: "0-2-1",
    name: "newTestRole",
    uid: "605767351123574784"
  },
  {
    ctype: "SYSROLE",
    key: "0-3-0",
    name: "Phone Administration",
    uid: "565099531453071360"
  },
  {
    ctype: "SYSROLE",
    key: "0-4-0",
    name: "Project Administrator",
    uid: "480304801733672960"
  },
  {
    ctype: "SYSROLE",
    key: "0-5-0",
    name: "System Administrator",
    uid: "480304801058390016"
  },
  {
    ctype: "SYSROLE",
    key: "0-6-0",
    name: "Workflow Administrator",
    uid: "499884769648050176"
  },
  {
    ctype: "SYSROLE",
    key: "0-7-0",
    name: "通用事业部",
    uid: "601366797798604800"
  },
  { ctype: "SYSROLE", key: "0-7-1-0", name: "3r3", uid: "601417884354215936" },
  {
    ctype: "SYSROLE",
    key: "0-7-1-1",
    name: "rwqrwq",
    uid: "601726313677455360"
  }
];

export default class Select extends React.Component {
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
          <DySelect
            options={options}
            fieldNames={{
              label: "name",
              value: "uid"
            }}
            style={{
              border: "1px solid #dfe6ed"
            }}
            onChange={value => {
              console.log(value);
            }}
          />
          <div className="codePlace">
            <pre
              className="pre1"
              dangerouslySetInnerHTML={{
                __html: toShow(`
 
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { DySelect } from "@dy.design";
    const options = [
        { ctype: "SYSROLE", key: "0-0-0", name: "dbAdm", uid: "480304799577800704" },
        {
          ctype: "SYSROLE",
          key: "0-2-0",
          name: "3ffdsfdsfdsfsd",
          uid: "603538432966262784"
        },
        {
          ctype: "SYSROLE",
          key: "0-2-1",
          name: "newTestRole",
          uid: "605767351123574784"
        },
        {
          ctype: "SYSROLE",
          key: "0-3-0",
          name: "Phone Administration",
          uid: "565099531453071360"
        },
        {
          ctype: "SYSROLE",
          key: "0-4-0",
          name: "Project Administrator",
          uid: "480304801733672960"
        },
        {
          ctype: "SYSROLE",
          key: "0-5-0",
          name: "System Administrator",
          uid: "480304801058390016"
        },
        {
          ctype: "SYSROLE",
          key: "0-6-0",
          name: "Workflow Administrator",
          uid: "499884769648050176"
        },
        {
          ctype: "SYSROLE",
          key: "0-7-0",
          name: "通用事业部",
          uid: "601366797798604800"
        },
        { ctype: "SYSROLE", key: "0-7-1-0", name: "3r3", uid: "601417884354215936" },
        {
          ctype: "SYSROLE",
          key: "0-7-1-1",
          name: "rwqrwq",
          uid: "601726313677455360"
        }
      ];

    class Select extends React.PureComponent {

    

        render(){
            return    
            <DySelect
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

    ReactDOM.render(<Select />, DomNode);
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
          <DySelect
            formLayout={{ x: 1, y: 4 }}
            options={options}
            fieldNames={{
              label: "name",
              value: "uid"
            }}
            defaultValue={"480304801733672960"}
            style={{
              color: "red",
              border: "1px solid #dfe6ed"
            }}
            className="selectCascader"
            label="角色："
            onChange={value => {
              console.log(value);
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


    class Select extends React.PureComponent {

        state = {
            loginGroup: "",
            loginRole: ""
          };


        render(){
            return    
            <DySelect
                formLayout={{ x: 1, y: 4 }}
                options={options}
                fieldNames={{
                label: "name",
                value: "uid"
                }}
                defaultValue={"480304801733672960"}
                style={{
                color: "red",
                border: "1px solid #dfe6ed"
                }}
                label="角色："
                onChange={value => {
                console.log(value);
                }}
            />
        }
    }

    ReactDOM.render(<Select />, DomNode);
style:
.selectCascader {
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
        <div className="desc">options: select的数据 类型： any[] </div>
        <div className="desc">
          fieldNames: 自定义 options 中 label value 默认是
          {`{label:"label",value:"value"}`} 类型：object{}
        </div>
        <div className="desc">defaultValue: 默认的选中项 类型： string</div>
        <div className="desc">style: input的样式 类型：object{}</div>
        <div className="desc">className: select组件的类名 类型： string</div>
        <div className="desc">label: 左侧lable 类型： string</div>
        <div className="desc">onChange: change时间 类型： fun</div>
      </React.Fragment>
    );
  }
}
