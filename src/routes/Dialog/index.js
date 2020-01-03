import React, { Fragment } from "react";
import "./index.less";
import { DyDialog, DyButton } from "@dy.design";
const { DyConfirm, DyAlert, DyModal } = DyDialog;

export default class Dialog extends React.Component {
  state = {
    visible: false
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
    const { visible } = this.state;
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
            DyDialog用法：
          </div>
          <DyButton
            onClick={() => {
              this.setState({ visible: true });
            }}
          >
            点击弹窗
          </DyButton>
          <DyDialog
            title="标题"
            visible={visible}
            onClose={() => {
              this.setState({ visible: false });
            }}
            footer={
              <Fragment>
                <DyButton
                  type="warning"
                  style={{
                    marginLeft: "10px"
                  }}
                  onClick={() => {
                    this.setState({ visible: false });
                  }}
                >
                  确认
                </DyButton>
                <DyButton
                  onClick={() => {
                    this.setState({ visible: false });
                  }}
                >
                  取消
                </DyButton>
              </Fragment>
            }
          >
            <div>im dialog</div>
          </DyDialog>
          <div className="codePlace">
            <pre
              className="pre1"
              dangerouslySetInnerHTML={{
                __html: toShow(`
    import React from 'react';
    import ReactDOM from 'react-dom';
     import { DyDialog, DyButton } from "@dy.design";


    class Dialog extends React.PureComponent {

        state = {
            visible: false,
          };


        render(){
        return    
          <Fragment>
            <DyButton
                onClick={() => {
                  this.setState({ visible: true });
                }}
              >
              点击弹窗
            </DyButton>
            <DyDialog
              title="标题"
              visible={visible}
              onClose={() => {
                this.setState({ visible: false });
              }}
              footer={
                <Fragment>
                  <DyButton
                    type="warning"
                    style={{
                      marginLeft: "10px"
                    }}
                    onClick={() => {
                      this.setState({ visible: false });
                    }}
                  >
                    确认
                  </DyButton>
                  <DyButton
                    onClick={() => {
                      this.setState({ visible: false });
                    }}
                  >
                    取消
                  </DyButton>
                </Fragment>
                }
              >
              <div>im dialog</div>
            </DyDialog>
          </Fragment>


          modal({
            title: "新建流程模板",
            content: (
              <CreateNewProcessTemplate
                getValue={value => {
                  this.setState({ newProcessArgs: value });
                }}
              />
            ),
            onOk: () => {
              const { processType, processTemplateName, processTemplateDesc } = this.state.newProcessArgs;

              if (!processType) {
                error("模板类型不能为空");
                return;
              }
              if (!processTemplateName) {
                error("模板名字不能为空");
                return;
              }
              if (!processTemplateDesc) {
                error("模板描述不能为空");
                return;
              }
              createProcesstemplates({ processType, processTemplateName, processTemplateDesc }).then(res => {
                this.setState({ processDefaultSelectKey: res.uid });
                this._getProcesstemplatesByUid(res.uid);

                message("新建成功");
                this.getTemplates();
              });
            },
            onCancel: () => {},
          });
        }
    }

    ReactDOM.render(<Dialog />, DomNode);
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
            DyAlert|DyConfirm|DyModal用法：
          </div>
          <DyButton
            onClick={() => {
              DyAlert({
                title: "alert",
                content: <div>im alert</div>
              });
            }}
          >
            DyAlert
          </DyButton>
          <DyButton
            onClick={() => {
              DyConfirm({
                title: "confirm",
                content: <div>im confirm</div>,
                onOk: () => {
                  alert("ok");
                },
                onCancel: () => {
                  alert("cancel");
                }
              });
            }}
          >
            DyConfirm
          </DyButton>
          <DyButton
            onClick={() => {
              DyModal({
                title: "modal",
                content: <div>im Modal</div>,
                onOk: () => {
                  alert("ok");
                },
                onCancel: () => {
                  alert("cancel");
                }
              });
            }}
          >
            DyModal
          </DyButton>

          <div className="codePlace">
            <pre
              className="pre2"
              dangerouslySetInnerHTML={{
                __html: toShow(`
    import React from 'react';
    import ReactDOM from 'react-dom';


    class DyAlert extends React.PureComponent {

        render(){
            return    
            <Fragment>
            
              <DyButton
                onClick={() => {
                  DyAlert({
                    title: "alert",
                    content: <div>im alert</div>
                  });
                }}
              >
                DyAlert
              </DyButton>

              <DyButton
                onClick={() => {
                  DyConfirm({
                    title: "confirm",
                    content: <div>im confirm</div>,
                    onOk: () => {
                      alert("ok");
                    },
                    onCancel: () => {
                      alert("cancel");
                    }
                  });
                }}
              >
                DyConfirm
              </DyButton>

              <DyButton
                onClick={() => {
                  DyModal({
                    title: "modal",
                    content: <div>im Modal</div>,
                    onOk: () => {
                      alert("ok");
                    },
                    onCancel: () => {
                      alert("cancel");
                    }
                  });
                }}
              >
                DyModal
              </DyButton>

            </Fragment>
      
            `)
              }}
            />
            <button onClick={() => this.Copy(".pre2")}>复制</button>
          </div>
        </div>

        <div style={{ margin: "10px" }}>参数说明：</div>
        <div className="desc">
          复杂的弹窗表单等 使用Dialog 简单的弹窗提示及数据交互使用alert confirm
          modal 已经在全局挂在这个三个方法
        </div>
        <div className="desc"> window.alert = DyAlert; </div>
        <div className="desc"> window.confirm = DyConfirm; </div>
        <div className="desc"> window.modal = DyModal; </div>
      </React.Fragment>
    );
  }
}
