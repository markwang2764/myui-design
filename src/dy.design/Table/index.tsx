import * as React from "react";
import * as _p from "prop-types";
import "./index.less";
import deepCompare from "../utils/deepCompare";
import Icon from "../Icon";
interface Iprops {
  columns: any[];
  dataSource: any[];
  dataSourceKey?: string;
  defaultSelectKey?: string;
  emptyText?: string;
  pagination?: {
    [propName: string]: any;
  };
  rowSelection?: {
    [propName: string]: any;
  };
  isLastNoOp?: boolean;
  className?: string;
  style?: {
    [propName: string]: string;
  };
  bordered?: any;
  onRowClick?: (...rest: any) => any;
  needActivated?: boolean;
  hideHeader?: boolean;
}
interface Istate {
  rowAllSelect: boolean;
  rowCheck: any[];
  rowSelId: any[];
  sortArr: any[];
  currentIndex: number;
  currentKey: string;
  [propName: string]: any;
}
export default class Table extends React.PureComponent<Iprops, Istate> {
  static propTypes = {
    columns: _p.array.isRequired,
    dataSource: _p.array.isRequired,
    dataSourceKey: _p.string,
    emptyText: _p.string,
    pagination: _p.object,
    rowSelection: _p.object,
    isLastNoOp: _p.bool,
    className: _p.string,
    style: _p.object,
    needActivated: _p.bool,
    defaultSelectKey: _p.oneOfType([_p.string, _p.number]),
    hideHeader: _p.bool,
  };
  static defaultProps: Iprops = {
    dataSource: [],
    dataSourceKey: "key",
    columns: [],
    pagination: {},
    emptyText: "暂无相关信息",
    hideHeader: false,
  };
  constructor(props: Iprops, context: any) {
    super(props, context);
    this.state = {
      rowAllSelect: false,
      rowCheck: [],
      rowSelId: [],
      sortArr: [],
      currentIndex: -1,
      currentKey: "",
    };
  }
  componentDidMount() {}

  componentDidUpdate(preProps: Iprops, preState: Istate) {
    const thisProps = this.props;

    if (!deepCompare(thisProps.defaultSelectKey, preProps.defaultSelectKey)) {
      const { defaultSelectKey, dataSource, dataSourceKey } = this.props;
      if (defaultSelectKey) {
        this.setState({ currentKey: defaultSelectKey });
      }
    }
  }

  getAllColumns = (columns: any) => {
    const result: any[] = [];
    columns.forEach((column: any) => {
      if (column.children) {
        result.push(column);
        result.push.apply(result, this.getAllColumns(column.children));
      } else {
        result.push(column);
      }
    });
    return result;
  };

  retColumns = (columns: any[]) => {
    const { sortArr, rowAllSelect } = this.state;
    const { rowSelection, bordered } = this.props;

    return (
      <thead>
        <tr className={bordered ? "table-border" : ""}>
          {columns.map((v, i) => (
            <th key={i}>{v.title}</th>
          ))}
        </tr>
      </thead>
    );
  };

  retRows = (
    columns: any[],
    data: any,
    index: number,
    isLastNoOp: any,
    length: number,
    childKey?: string,
    childsSort?: number,
    isCurrentKey?: boolean
  ): any => {
    let childIndent: string = 25 * childsSort + "px";
    let IconIndex: string = 25 * childsSort - 20 + "px";
    let rotate = "rotate(0deg)";
    let setNextStateWidthChildKey = true;
    if (this.state[childKey] === undefined) {
      if (isCurrentKey) {
        rotate = "rotate(45deg)";
        setNextStateWidthChildKey = false;
      }
    } else {
      if (this.state[childKey] === true) {
        rotate = "rotate(45deg)";
        setNextStateWidthChildKey = false;
      } else {
        rotate = "rotate(0deg)";
        setNextStateWidthChildKey = true;
      }
    }

    return this.getAllColumns(columns).map((col, i) => {
      if (col.dataIndex !== undefined) {
        if (data[col.dataIndex] !== undefined) {
          return (
            <td
              key={i}
              style={{
                width: col.width && col.width,
                textAlign: childKey && i === 0 ? "left" : "center",
                paddingLeft: i === 0 ? childIndent : "0px",
              }}
            >
              {childKey && i === 0 ? (
                <Icon
                  type="dy-angle-right"
                  style={{
                    transform: rotate,
                    left: IconIndex,
                  }}
                  onClick={e => {
                    e.stopPropagation();
                    this.setState({ [childKey]: setNextStateWidthChildKey });
                  }}
                />
              ) : (
                ""
              )}
              {col.render ? col.render(data[col.dataIndex], data, index) : data[col.dataIndex]}
            </td>
          );
        } else {
          return (
            <td
              key={i}
              style={{
                width: col.width && col.width,
                textAlign: childKey && i === 0 ? "left" : "center",
                paddingLeft: i === 0 ? childIndent : "0px",
              }}
            >
              {childKey && i === 0 ? (
                <Icon
                  type="dy-angle-right"
                  style={{ transform: rotate }}
                  onClick={e => {
                    e.stopPropagation();
                    this.setState({ [childKey]: setNextStateWidthChildKey });
                  }}
                />
              ) : (
                ""
              )}
            </td>
          );
        }
      } else {
        let renderEle = "";
        if (col.render) {
          renderEle = col.render(index, data, index);
        }
        return (
          <td
            key={i}
            style={{
              width: col.width && col.width,
              paddingLeft: i === 0 ? childIndent : "0px",
            }}
          >
            {childKey && i === 0 ? (
              <Icon
                type="dy-angle-right"
                style={{ transform: rotate }}
                onClick={e => {
                  e.stopPropagation();
                  this.setState({ [childKey]: setNextStateWidthChildKey });
                }}
              />
            ) : (
              ""
            )}
            {col.render && renderEle}
          </td>
        );
      }
    });
  };

  retBodyWidthDataSource = (dataSource: any[], childKey?: string) =>
    dataSource.map((data, i) => {
      const {
        columns,
        pagination,
        rowSelection,
        style,
        emptyText,
        isLastNoOp,
        bordered,
        needActivated = false,
        dataSourceKey,
        defaultSelectKey,
        hideHeader,
      } = this.props;
      const { rowCheck, currentIndex, currentKey } = this.state;
      let __newChildKey = childKey ? childKey + "-" + i : "expand-" + i;
      let isCurrentChildrenKey = false;
      if (data.children && data.children.length > 0) {
        isCurrentChildrenKey = data.children.some((d: any) => d[dataSourceKey] === currentKey);
        if (!isCurrentChildrenKey) {
          isCurrentChildrenKey = this.retForDefaultKey(data.children, currentKey);
        }
      }
      let renderChildren = null;
      if (this.state[__newChildKey] === undefined) {
        if (isCurrentChildrenKey) {
          renderChildren = this.retBodyWidthDataSource(data.children, __newChildKey);
        }
      } else {
        if (this.state[__newChildKey] === true) {
          renderChildren = this.retBodyWidthDataSource(data.children, __newChildKey);
        } else {
          renderChildren = null;
        }
      }

      const childsSort: number = __newChildKey.match(/-/g).length;
      if (data.children && data.children.length > 0) {
        return (
          <React.Fragment key={data[dataSourceKey] || i}>
            <tr
              className={
                (needActivated && data[dataSourceKey] == currentKey ? "activatedTr" : "") + " " + (!!bordered ? "table-border" : "")
              }
              onClick={e => {
                this.setState({ currentIndex: i, currentKey: data[dataSourceKey] });
                this.trClick(e, data);
              }}
            >
              {this.retRows(columns, data, i, isLastNoOp, dataSource.length, __newChildKey, childsSort, isCurrentChildrenKey)}
            </tr>

            <React.Fragment>{renderChildren}</React.Fragment>
          </React.Fragment>
        );
      }
      return (
        <tr
          key={data[dataSourceKey] || i}
          className={(needActivated && data[dataSourceKey] == currentKey ? "activatedTr" : "") + " " + (!!bordered ? "table-border" : "")}
          onClick={e => {
            this.setState({ currentIndex: i, currentKey: data[dataSourceKey] });
            this.trClick(e, data);
          }}
        >
          {this.retRows(columns, data, i, isLastNoOp, dataSource.length, null, childsSort)}
        </tr>
      );
    });

  retForDefaultKey = (data: any, defaultKey: string) => {
    let isCurrentChildrenKey = false;
    const { dataSourceKey } = this.props;
    data.forEach((v: any, i: number) => {
      if (v.children && v.children.length > 0) {
        isCurrentChildrenKey = v.children.some((d: any) => d[dataSourceKey] === defaultKey);
        if (!isCurrentChildrenKey) {
          this.retForDefaultKey(v.children, defaultKey);
        }
      }
    });

    return isCurrentChildrenKey;
  };

  trClick = (e: any, data: any) => {
    this.props.onRowClick && this.props.onRowClick(e, data);
  };

  render() {
    const { className, columns, dataSource, style, hideHeader } = this.props;

    const { rowCheck, currentIndex, currentKey } = this.state;

    return (
      <div className={sc() + " " + className}>
        <table style={style}>
          {hideHeader ? null : this.retColumns(columns)}
          <tbody>{this.retBodyWidthDataSource(dataSource)}</tbody>
        </table>
      </div>
    );
  }
}
// css prefix
function sc(name?: string) {
  return ["dy-table", name].filter(Boolean).join("-");
}
