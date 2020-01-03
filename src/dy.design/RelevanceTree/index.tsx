import * as React from "react";
import * as _p from "prop-types";
import Icon from "../Icon";
import "./index.less";
import deepCompare from "../utils/deepCompare";
interface TreeNodeProps {
  children?: React.ReactElement;
  title: string;
  value: string | number;
  sourceKey: number;
  sourceItem: { [propsName: string]: any };
  checked: boolean;
  onClick: (data: any) => any;
  style?: { [propsName: string]: any };
}
class TreeNode extends React.PureComponent<TreeNodeProps, { [propName: string]: any }> {
  static propTypes = {
    title: _p.string.isRequired,
    value: _p.oneOfType([_p.string, _p.number]).isRequired,
    sourceKey: _p.string.isRequired,
    onClick: _p.func.isRequired,
    checked: _p.bool,
  };
  static defaultProps = {
    checked: false,
  };
  state = {
    [this.props.sourceKey]: false,
  };
  componentDidMount() {
    if (this.props.checked) {
      this.setState({ [this.props.sourceKey]: true });
    }
  }
  // componentDidUpdate(preProps: TreeNodeProps) {
  //   const thisProps = this.props;
  //   if (preProps.checked !== thisProps.checked) {
  //     this.setState({ [thisProps.sourceKey]: thisProps.checked });
  //   }
  // }
  render = () => {
    const { title, value, sourceKey, children, onClick: onPropsClick, sourceItem, checked, style: propStyle } = this.props;
    const childcounts = React.Children.count(children);

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
              onPropsClick({
                key: sourceKey,
                checked: checked,
                value: value,
                Item: sourceItem,
              });
            }}
          >
            <Icon type={checked ? "dy-kongjianxuanzhong" : "dy-xingzhuang-juxing"} className="checkIcon" />
            <span className={sc("node-title-ellipsis")}>
              {title}
              <span className="tooltip">{title}</span>
            </span>
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
  onSelect: (value: any) => any;
  className?: string;
  style?: { [propName: string]: any };
  defaultValue?: string[];
  nodeStyle?: { [propName: string]: any };
}
interface Istate {
  selectedData?: any[];
  dataSource: any[];
}
export default class RelevanceTree extends React.PureComponent<IProps, Istate> {
  static propTypes = {
    dataSource: _p.array.isRequired,
    fleidName: _p.shape({
      title: _p.string.isRequired,
      value: _p.string.isRequired,
      key: _p.string.isRequired,
      defaultValue: _p.array,
    }),
    onSelect: _p.func,
    className: _p.string,
    style: _p.object,
    nodeStyle: _p.object,
  };
  static defaultProps: IProps = {
    fleidName: { title: "title", value: "value", key: "key" },
    onSelect: () => {},
    dataSource: [],
    defaultValue: [],
    nodeStyle: {},
  };
  state: Istate = {
    selectedData: [],
    dataSource: [],
  };

  componentDidMount = () => {
    const { dataSource, defaultValue, fleidName } = this.props;

    if (defaultValue !== undefined && defaultValue !== null && defaultValue.length > 0) {
      let newDataSource: any[] = [];
      newDataSource = this.atDefaultValueMapDataSource(dataSource, defaultValue, fleidName, newDataSource);
      this.setState({ dataSource: newDataSource });
    } else {
      this.setState({ dataSource });
    }
  };
  atDefaultValueMapDataSource = (dataSource: any, defaultValue: string[], fleidName: any, newDataSource: any) => {
    newDataSource = JSON.parse(JSON.stringify(dataSource));
    const valueKey = fleidName.value;
    defaultValue.forEach((v: any, i: number) => {
      let ii = 0;
      function loopNode(data: any, nodeValue: any[]) {
        if (ii >= v.length) return;
        data.forEach((k: any, j: number) => {
          if (k[valueKey] === nodeValue[ii]) {
            k.checked = true;
            ii = ii + 1;
            if (k.children !== undefined && k.children !== null && k.children.length > 0) {
              loopNode(k.children, nodeValue);
            }
          } else {
            if (k.children !== undefined && k.children !== null && k.children.length > 0) {
              loopNode(k.children, nodeValue);
            }
          }
        });
      }
      loopNode(newDataSource, v);
    });
    return newDataSource;
  };

  componentDidUpdate = (prevProps: any, prevState: any) => {
    const { dataSource: preDataSource = [], defaultValue: preDefaultValue = [] } = prevProps;
    const { dataSource = [], defaultValue = [], fleidName } = this.props;

    if (!deepCompare(preDataSource, dataSource)) {
      if (defaultValue !== undefined && defaultValue !== null && defaultValue.length > 0) {
        let newDataSource: any[] = [];
        newDataSource = this.atDefaultValueMapDataSource(dataSource, defaultValue, fleidName, newDataSource);
        this.setState({ dataSource: newDataSource });
      } else {
        this.setState({ dataSource });
      }
    }
    if (!deepCompare(preDefaultValue, defaultValue)) {
      let newDataSource: any[] = [];
      newDataSource = this.atDefaultValueMapDataSource(dataSource, defaultValue, fleidName, newDataSource);
      this.setState({ dataSource: newDataSource });
    }
  };
  onNodeClick = (nodeData: any) => {
    const { key, checked } = nodeData;
    let dataSource = this.state.dataSource;

    const rootKeylen = dataSource[0].key.split("-").length;
    dataSource = this.mapDataSource(dataSource, key, checked, rootKeylen);
    let selectData = this.mapSelectData(dataSource);
    selectData = this.loopSelectData(selectData);
    this.props.onSelect(selectData);
    this.setState({ dataSource });
  };
  loopSelectData = (selectData: any) => {
    let newSeletData = selectData || [];
    newSeletData = this.filterSelectData(newSeletData);
    newSeletData.forEach((v: any, i: number) => {
      if (v.children) {
        v.children = this.filterSelectData(v.children);
        this.loopSelectData(v.children);
      }
    });
    return newSeletData;
  };
  mapSelectData = (dataSource: any) => {
    return dataSource.map((v: any, i: number) => {
      if (v.children && v.checked) {
        return {
          ...v,
          children: this.mapSelectData(v.children),
        };
      } else if (v.checked) {
        return v;
      }
    });
  };

  filterSelectData = (dataSource: any) => {
    return dataSource.filter((v: any, i: number) => {
      return v != undefined;
    });
  };

  mapDataSource = (data: any, key: string, checked: boolean, rootKeylen: number) => {
    return data.map((d: any, i: number) => {
      if (d.key.length >= key.length) {
        const dkeyArray = d.key.split("-");
        const keyArray = key.split("-");

        let isSelected = true;
        keyArray.forEach((v: any, i: number) => {
          if (v !== dkeyArray[i]) {
            isSelected = false;
          }
        });
        let checkOrUncheck = false;
        // 如果本来已经选中则取消

        if (isSelected) {
          if (checked) {
            checkOrUncheck = false;
          } else {
            checkOrUncheck = true;
          }
        } else {
          checkOrUncheck = d.checked || false;
        }

        if (d.children !== null && d.children !== undefined) {
          return {
            ...d,
            checked: checkOrUncheck,
            children: this.mapDataSource(d.children, key, checked, rootKeylen),
          };
        } else {
          return {
            ...d,
            checked: checkOrUncheck,
            children: null,
          };
        }
      } else {
        const dkeyArray = d.key.split("-");
        const keyArray = key.split("-");

        let isSelected = true;
        dkeyArray.forEach((v: any, i: number) => {
          if (v !== keyArray[i]) {
            isSelected = false;
          }
        });

        let checkOrUncheck = false;
        // 如果本来已经选中则取消
        if (isSelected) {
          if (checked) {
            checkOrUncheck = false;
            if (d.key.split("-").length == rootKeylen) {
            }

            let loopChildren = (data: any, key: string) => {
              data.forEach((v: any, i: number) => {
                let lineal = false;
                const vkeyArray = v.key.split("-");
                const keyArray = key.split("-");
                if (vkeyArray.length <= keyArray.length) {
                  if (v.children) {
                    vkeyArray.forEach((j: any, k: number) => {
                      if (j !== keyArray[k]) {
                        lineal = true;
                      }
                    });

                    if (lineal) {
                      if (v.checked) {
                        checkOrUncheck = true;
                      }
                    } else {
                      loopChildren(v.children, key);
                    }
                  } else {
                    if (key !== v.key) {
                      if (v.checked) {
                        checkOrUncheck = true;
                      }
                    }
                  }
                }
              });
            };
            loopChildren(d.children, key);
          } else {
            checkOrUncheck = true;
          }
        } else {
          checkOrUncheck = d.checked || false;
        }

        if (d.children !== null && d.children !== undefined) {
          return {
            ...d,
            checked: checkOrUncheck,
            children: this.mapDataSource(d.children, key, checked, rootKeylen),
          };
        } else {
          return {
            ...d,
            checked: checkOrUncheck,
            children: null,
          };
        }
      }
    });
  };

  renderTreeNodes = (data: any) =>
    data.map((item: any) => {
      const { title, value, key } = this.props.fleidName;
      const { nodeStyle } = this.props;
      let checked = item.checked || false;

      if (item.children != null && item.children != undefined) {
        return (
          <TreeNode
            onClick={this.onNodeClick}
            key={item[key]}
            title={item[title]}
            value={item[value]}
            sourceKey={item[key]}
            sourceItem={item}
            checked={checked}
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
          checked={checked}
          style={nodeStyle}
        />
      );
    });
  render = () => {
    const { dataSource } = this.state;
    const { className, style } = this.props;
    if (dataSource.length > 0)
      return (
        <div className={sc() + " " + (className ? className : "")} style={style ? style : null}>
          {this.renderTreeNodes(dataSource)}
        </div>
      );
    return null;
  };
}

// css prefix
function sc(name?: string) {
  return ["dy-relevance-tree", name].filter(Boolean).join("-");
}
