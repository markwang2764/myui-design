import React from "react";
import { DyButton } from "@dy.design";

export default class Button extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {}
  //   normal: "dy-button-normal",
  //   primary: "dy-button-primary",
  //   warning: "dy-button-warning",
  //   disabled: "dy-button-disabled",
  //   strong: "dy-button-strong",
  //   ghost: "dy-button-ghost",
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
        <DyButton type="normal">normal</DyButton>
        <DyButton type="primary">primary</DyButton>
        <DyButton type="warning">warning</DyButton>
        <DyButton type="disabled">disabled</DyButton>
        <DyButton type="strong">strong</DyButton>
        <DyButton type="ghost">ghost</DyButton>
        <div className="codePlace">
          <pre
            dangerouslySetInnerHTML={{
              __html: toShow(`
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { DyButton } from "@dy.design";


    class Button extends React.PureComponent {
       

        SetState =(value)=>{
            console.log("you select value is", value)
            this.setState({
                value:value
            })
        }

        render(){
            return <div>
                    按钮：
                    <DyButton type="normal" className="" style={{}} onClick{(e) => {}}>normal</DyButton>
                    <DyButton type="primary">primary</DyButton>
                    <DyButton type="warning">warning</DyButton>
                    <DyButton type="disabled">disabled</DyButton>
                    <DyButton type="strong">strong</DyButton>
                    <DyButton type="ghost">ghost</DyButton>
            </div>
        }
    }

    ReactDOM.render(<RadioExample />, DomNode);
            `)
            }}
          />
          <button onClick={() => this.Copy()}>复制</button>
        </div>
        <div style={{ margin: "10px" }}>参数说明：</div>
        <div className="desc">type: button的类型</div>
        <div className="desc">className: button的class</div>
        <div className="desc">style: button的内联样式</div>
        <div className="desc">onClick: button的点击事件</div>
      </React.Fragment>
    );
  }
}
