import * as React from "react";
import * as _p from "prop-types";
import Icon from "../Icon";
import deepCompare from "../utils/deepCompare";
import "./index.less";
interface TreeNodeProps {
  children?: React.ReactElement;
  title: string;
  value: string | number;
  sourceKey: string | number;
  sourceItem: { [propsName: string]: any };
  onClick: (data: any, checked: boolean) => any;
  checkedKey?: string;
  defaultValue: string[];
  style?: { [propsName: string]: any };
}
class TreeNode extends React.Component<TreeNodeProps, { [propName: string]: any }> {
  static propTypes = {
    title: _p.string.isRequired,
    value: _p.oneOfType([_p.string, _p.number]).isRequired,
    sourceKey: _p.oneOfType([_p.string, _p.number]).isRequired,
    onClick: _p.func.isRequired,
    checkedKey: _p.string,
    defaultValue: _p.array,
  };
  static defaultProps = {};
  state = {
    [this.props.sourceKey]: false,
    checked: false,
  };
  componentDidMount() {
    const { value, sourceKey, checkedKey = null, defaultValue } = this.props;
    if (defaultValue.length > 0) {
      defaultValue.forEach(v => {
        if (value === v) {
          this.setState({ checked: true, [sourceKey]: true });
        }
      });
    }
  }
  componentDidUpdate(preProp: TreeNodeProps, preState: { [propName: string]: any }) {
    const thisState = this.state;
    const thisProp = this.props;
    if (!deepCompare(thisProp.defaultValue, preProp.defaultValue)) {
      this.setState({ checked: false, [thisProp.sourceKey]: false }, () => {
        if (thisProp.defaultValue.length > 0) {
          thisProp.defaultValue.forEach(v => {
            if (thisProp.value === v) {
              this.setState({ checked: true, [thisProp.sourceKey]: true });
            }
          });
        }
      });
    }
  }
  render = () => {
    const {
      title,
      value,
      sourceKey,
      children,
      onClick: onPropsClick,
      sourceItem,
      checkedKey = null,
      defaultValue,
      style: propStyle,
    } = this.props;
    const childcounts = React.Children.count(children);
    let checked = this.state.checked;
    if (checkedKey) {
      checked = sourceKey === checkedKey;
    }

    return (
      <div className={sc("node")} style={propStyle}>
        <div className="flex-y">
          {childcounts ? (
            <Icon
              type="dy-caret-right"
              style={{ transform: this.state[sourceKey] ? "rotate(90deg)" : "rotate(0deg)" }}
              className="checkIcon"
              onClick={e => {
                e.stopPropagation();
                this.setState({ [sourceKey]: !this.state[sourceKey] });
              }}
            />
          ) : (
            <span className="checkIcon" />
          )}
          <div
            className={sc("node-title") + " flex-y " + (checked ? sc("node-checked") : "")}
            onClick={e => {
              e.stopPropagation();
              onPropsClick(sourceItem, checked);
              if (!checkedKey) {
                this.setState({ checked: !this.state.checked });
              }
            }}
          >
            <Icon type={checked ? "dy-kongjianxuanzhong" : "dy-xingzhuang-juxing"} className="checkIcon" />
            {title}
          </div>
        </div>
        <div className={sc("node-child")} style={{ display: this.state[sourceKey] ? "block" : "none" }}>
          {children}
        </div>
      </div>
    );
  };
}

interface IProps {
  dataSource: any[];
  fleidName?: { title: string; value: string; key: string };
  onSelect: (value: any[], nodeData?: any) => any;
  singleSelecter?: boolean;
  defaultValue?: string[];
  nodeStyle?: { [propName: string]: any };
}
interface Istate {
  selectedData?: any[];
  checkedKey?: string;
}
export default class Tree extends React.Component<IProps, Istate> {
  static propTypes = {
    dataSource: _p.array.isRequired,
    fleidName: _p.shape({
      title: _p.string.isRequired,
      value: _p.string.isRequired,
      key: _p.string.isRequired,
    }),
    onSelect: _p.func,
    singleSelecter: _p.bool,
    defaultValue: _p.array,
  };
  static defaultProps: IProps = {
    dataSource: [],
    fleidName: { title: "title", value: "value", key: "key" },
    onSelect: () => {},
    singleSelecter: false,
    defaultValue: [],
    nodeStyle: {},
  };

  state: Istate = {
    selectedData: this.props.defaultValue,
    checkedKey: "",
  };
  // 处理defaultValue
  // componentDidMount() {
  //   console.log(this.props.defaultValue, this.state.selectedData);
  // }
  componentDidUpdate(preProp: IProps, preState: Istate) {
    const thisState = this.state;
    const thisProps = this.props;
    if (deepCompare(thisState.selectedData, preState.selectedData) && !deepCompare(thisProps.defaultValue, preProp.defaultValue)) {
      this.setState({ selectedData: thisProps.defaultValue });
    }
  }

  onNodeClick = (nodeData: any, checked: boolean) => {
    const { title, value, key } = this.props.fleidName;
    if (this.props.singleSelecter) {
      if (!checked) {
        this.setState({ selectedData: [nodeData], checkedKey: nodeData.key });
        this.props.onSelect([nodeData]);
      } else {
        this.setState({ selectedData: [], checkedKey: "" });
        this.props.onSelect([]);
      }
    } else {
      if (!checked) {
        let selectedData = this.state.selectedData;
        selectedData.push(nodeData[value]);
        this.setState({ selectedData });
        this.props.onSelect(selectedData, nodeData);
      } else {
        let selectedData = this.state.selectedData;
        selectedData = selectedData.filter(v => v !== nodeData[value]);
        this.setState({ selectedData });
        this.props.onSelect(selectedData, nodeData);
      }
    }
  };
  renderTreeNodes = (data: any) =>
    data.map((item: any) => {
      const { title, value, key } = this.props.fleidName;
      const { defaultValue = [], nodeStyle } = this.props;
      if (item.children) {
        return (
          <TreeNode
            onClick={this.onNodeClick}
            key={item[key]}
            title={item[title]}
            value={item[value]}
            sourceKey={item[key]}
            sourceItem={item}
            defaultValue={defaultValue}
            style={nodeStyle}
          >
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return (
        <TreeNode
          onClick={this.onNodeClick}
          key={item[key]}
          title={item[title]}
          value={item[value]}
          sourceKey={item[key]}
          sourceItem={item}
          checkedKey={this.state.checkedKey}
          defaultValue={defaultValue}
          style={nodeStyle}
        />
      );
    });
  render = () => {
    const { children, dataSource, onSelect } = this.props;
    return <div className={sc()}>{this.renderTreeNodes(dataSource)}</div>;
  };
}

// css prefix
function sc(name?: string) {
  return ["dy-tree", name].filter(Boolean).join("-");
}
