import * as React from "react";
import * as ReactDOM from "react-dom";

import * as _p from "prop-types";
import "./index.less";
import Button from "../Button";
import Icon from "../Icon";
interface Iprops {
  children: React.ReactChildren | string;
  footer?: React.ReactChildren | React.ReactNode;
  cautionIcon?: React.ReactChildren | React.ReactNode;
  title?: string;
  className?: string;
  style?: {
    [propName: string]: string;
  };
  visible?: boolean;
  onOk?: (e?: any) => any;
  onCancel?: (e?: any) => any;
  onClose?: (e?: any) => any;
}
interface Istate {
  contentWidth?: any;
  contentHeight?: any;
}
function scopedClass(name?: string) {
  return ["dy-dialog", name].filter(Boolean).join("-");
}
class Dialog extends React.PureComponent<Iprops, Istate> {
  contentRef: any = null;
  static DyModal: (arg: any) => any;
  static DyAlert: (arg: any) => any;
  static DyConfirm: (arg: any) => any;

  static propTypes = {
    children: _p.oneOfType([_p.element.isRequired, _p.string]).isRequired,
    footer: _p.element,
    cautionIcon: _p.element,
    visible: _p.bool.isRequired,
    title: _p.string,
    className: _p.string,
    style: _p.object,
    type: _p.string,
    onOk: _p.func,
    onCancel: _p.func,
    onClose: _p.func
  };
  state = {
    contentWidth: "",
    contentHeight: ""
  };
  componentDidMount() {
    if (this.contentRef !== null) {
      this.setState({
        contentWidth: this.contentRef.offsetWidth,
        contentHeight: this.contentRef.offsetHeight
      });
    }
  }

  componentDidUpdate(prevProps: Iprops, prevState: Istate) {
    // if (this.contentRef !== null) {
    //   console.log(this.contentRef);
    //   this.setState({
    //     contentWidth: this.contentRef.offsetWidth,
    //     contentHeight: this.contentRef.offsetHeight,
    //   });
    //   window.onresize = () => {
    //     const windowWidth = document.body.clientWidth;
    //   };
    // }
  }

  render() {
    const {
      style,
      title,
      className: cssClass,
      children,
      cautionIcon,
      footer,
      visible = false,
      onOk: propsOnOk,
      onCancel: propsOnCancel,
      onClose: propsOnClose
    } = this.props;
    const { contentWidth, contentHeight } = this.state;

    const dom = visible ? (
      <div className={scopedClass("")}>
        <div
          className={scopedClass("backdrop")}
          style={{
            opacity: visible ? 0.3 : 0
          }}
        />
        <div
          className={scopedClass("content") + " " + cssClass}
          ref={e => {
            this.contentRef = e;
          }}
          style={{
            marginLeft: -contentWidth / 2 + "px",
            marginTop: -contentHeight / 2 + "px"
          }}
        >
          <div className="dy-dialog-content-header flex-y flex-space-between">
            <div className="dy-dialog-content-header-title ellipsis flex-y">
              {cautionIcon ? (
                <span
                  style={{
                    marginRight: "5px"
                  }}
                >
                  {cautionIcon}
                </span>
              ) : null}

              {title}
            </div>
            <Icon
              type="dy-times"
              className="close"
              onClick={() => {
                propsOnClose && propsOnClose();
              }}
            />
          </div>
          <div className="dy-dialog-content-middle">{children}</div>
          <div className="flex-y dy-dialog-content-footer">
            {footer ? (
              footer
            ) : (
              <React.Fragment>
                <Button
                  type="primary"
                  style={{
                    marginLeft: "10px"
                  }}
                  onClick={() => {
                    propsOnOk && propsOnOk();
                  }}
                >
                  确认
                </Button>
                <Button
                  onClick={() => {
                    propsOnCancel && propsOnCancel();
                  }}
                >
                  取消
                </Button>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    ) : null;

    return ReactDOM.createPortal(dom, document.body);
  }
}

interface DialogApi {
  title?: string;
  content?: string | React.ReactChildren;
}

const DyAlert = (
  alertarg: DialogApi = { title: "提示", content: "someting about alert" }
) => {
  const { title, content } = alertarg;

  const onOk = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  const component = (
    <Dialog
      cautionIcon={
        <Icon
          type="dy-exclamation-circle"
          style={{ color: "#f99a0e", fontSize: "22px" }}
        />
      }
      title={title}
      visible={true}
      footer={
        <>
          <Button
            type="primary"
            style={{
              marginLeft: "10px"
            }}
            onClick={onOk}
          >
            确认
          </Button>
        </>
      }
      onClose={onOk}
    >
      {content}
    </Dialog>
  );
  const div = document.createElement("div");
  document.body.append(div);
  ReactDOM.render(component, div);
};

interface ConfirmApi {
  title?: string;
  content?: any;
  onOk: () => void;
  onCancel: () => void;
}

const DyConfirm = ({
  title = "confirm",
  content = "sometion about confirm",
  onOk,
  onCancel
}: ConfirmApi) => {
  const onYes = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    onOk && onOk();
  };

  const onNo = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    onCancel && onCancel();
  };
  const component = (
    <Dialog
      cautionIcon={
        <Icon
          type="dy-question-circle"
          style={{ color: "#f99a0e", fontSize: "22px" }}
        />
      }
      title={title}
      visible={true}
      onClose={() => {
        onNo();
      }}
      footer={
        <>
          <Button
            type="warning"
            style={{
              marginLeft: "10px"
            }}
            onClick={onYes}
          >
            确认
          </Button>
          <Button onClick={onNo}> 取消 </Button>
        </>
      }
    >
      {content}
    </Dialog>
  );

  const div = document.createElement("div");
  document.body.appendChild(div);
  ReactDOM.render(component, div);
};

interface ModalApi {
  title?: string;
  content?: any;
  onOk: () => void;
  onCancel?: () => void;
  onClose?: () => void;
  footer?: React.ReactElement;
}

const DyModal = ({
  title = "modal",
  content = "sometion about modal",
  onOk,
  onCancel
}: ModalApi) => {
  const onYes = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    onOk && onOk();
  };

  const onNo = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    onCancel && onCancel();
  };

  const component = (
    <Dialog
      title={title}
      visible={true}
      onClose={() => {
        onNo();
      }}
      footer={
        <>
          <Button
            type="warning"
            style={{
              marginLeft: "10px"
            }}
            onClick={onYes}
          >
            确认
          </Button>
          <Button onClick={onNo}> 取消 </Button>
        </>
      }
    >
      {content}
    </Dialog>
  );

  const div = document.createElement("div");
  document.body.appendChild(div);
  ReactDOM.render(component, div);
};
Dialog.DyModal = DyModal;
Dialog.DyAlert = DyAlert;
Dialog.DyConfirm = DyConfirm;
export default Dialog;
