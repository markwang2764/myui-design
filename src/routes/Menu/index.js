import React, { Fragment } from "react";
import "./index.less";
import { DyMenu, DyIcon } from "../../dy.design";
const { Item, SubMenu } = DyMenu;
let throtter = null;
export default class FormItem extends React.Component {
  state = {};
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
              marginBottom: "30px"
            }}
          >
            Menu的用法
          </div>

          <DyMenu
            defaultSelectedKeys={1}
            defaultOpenKeys={0}
            onClick={e => {
              console.log(e);
            }}
          >
            <SubMenu
              subKey={0}
              title={
                <span>
                  <DyIcon type="dy-tuzhi" />
                  <span>Navigation One</span>
                </span>
              }
            >
              <Item path="1">Option 1</Item>
            </SubMenu>

            <Item key="2" path="2">
              Option 2
            </Item>
            <SubMenu
              subKey={3}
              title={
                <span>
                  <DyIcon type="dy-tuzhi" />
                  <span>Navigation One</span>
                </span>
              }
            >
              <Item path="4">Option 4</Item>
            </SubMenu>
          </DyMenu>
          <div className="codePlace">
            <pre
              className="pre1"
              dangerouslySetInnerHTML={{
                __html: toShow(`
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { DyMenu, DyIcon } from "../../dy.design";
    const { Item, SubMenu } = DyMenu;


    class Menu extends React.PureComponent {


        render(){
        return    
            <DyMenu
                defaultSelectedKeys={1}
                defaultOpenKeys={0}
                onClick={e => {
                console.log(e);
                }}
                className="menu"
            >
                <SubMenu
                subKey={0}
                path="0"
                title={
                    <span>
                    <DyIcon type="dy-tuzhi" />
                    <span>Navigation One</span>
                    </span>
                }
                >
                <Item key="1" path="1">
                    Option 1
                </Item>
                </SubMenu>

                <Item key="2" path="2">
                Option 2
                </Item>
                <SubMenu
                subKey={3}
                path="3"
                title={
                    <span>
                    <DyIcon type="dy-tuzhi" />
                    <span>Navigation One</span>
                    </span>
                }
                >
                <Item key="4" path="4">
                    Option 4
                </Item>
                </SubMenu>
            </DyMenu>
            }
        }

    ReactDOM.render(<Menu />, DomNode);
            `)
              }}
            />
            <button onClick={() => this.Copy(".pre1")}>复制</button>
          </div>
        </div>

        <div style={{ margin: "10px" }}>参数说明：</div>
        <div className="desc">onClick: 菜单点击事件</div>
        <div className="desc">className: 控制整个容器的样式 类型： string</div>
        <div className="desc">
          defaultSelectedKeys: 默认选中的key{`<对应Item的path属性>`}
          类型：string | number
        </div>
        <div className="desc">
          defaultOpenKeys: 默认展开的subKey 类型：string | number
        </div>
        <div className="desc">submenu的参数：</div>
        <div className="desc">subKey: submenu的key 控制元素是否默认展开</div>
        <div className="desc">title: submenu的显示 类型：any</div>
        <div className="desc">Item的参数：</div>
        <div className="desc">
          path: 对应item的key 控制元素是否选中 类型：string
        </div>
      </React.Fragment>
    );
  }
}
