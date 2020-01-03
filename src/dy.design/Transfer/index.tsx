import * as React from "react";
import * as _p from "prop-types";
import RelevanceTree from "../RelevanceTree";
import Button from "../Button";
import deepCompare from "../utils/deepCompare";
import "./index.less";
interface Iprops {
  dataSource: any;
  targetData: any[];
}
interface Istate {
  dataSource: any;
  targetData: any[];
  leftSelect: any[];
  rightSelect: any[];
}
export default class Transfer extends React.Component<Iprops, Istate> {
  static propTypes = {
    dataSource: _p.array.isRequired,
    targetData: _p.array.isRequired,
  };
  static defaultProps: Iprops = {
    dataSource: [],
    targetData: [],
  };
  state: Istate = {
    dataSource: [],
    leftSelect: [],
    targetData: [],
    rightSelect: [],
  };
  componentDidMount() {
    const { dataSource, targetData } = this.props;
    this.setState({ dataSource, targetData });
  }
  componentDidUpdate = (preProp: Iprops, preState: Istate) => {
    if (!deepCompare(preProp, this.props)) {
      const { dataSource, targetData } = this.props;
      this.setState({ dataSource, targetData });
    }
  };

  filterData = (selectData: any, dataSource: any) => {
    let newDataSource = dataSource || [];
    selectData.forEach((j: any, k: number) => {
      newDataSource.filter((v: any, i: number) => v.key !== j.key);
    });
    return newDataSource;
  };

  render = () => {
    const { dataSource = [], targetData = [], leftSelect = [], rightSelect = [] } = this.state;

    if (dataSource.length > 0)
      return (
        <div className={sc() + " flex-y"}>
          <div className={sc("leftWrapper")}>
            <RelevanceTree
              onSelect={(value: any) => {
                this.setState({ leftSelect: value });
              }}
              dataSource={dataSource}
              fleidName={{ title: "name", value: "uid", key: "key" }}
            />
          </div>
          <div className={sc("operate" + " flex-c flex-space-between")}>
            <Button
              onClick={() => {
                const newdataSource = this.filterData(leftSelect, dataSource);
                this.setState({ targetData: leftSelect });
              }}
            >
              右移
            </Button>
            <Button
              onClick={() => {
                this.setState({ dataSource: rightSelect });
              }}
            >
              左移
            </Button>
          </div>
          <div className={sc("rightWrapper")}>
            <RelevanceTree
              onSelect={(value: any) => {
                this.setState({ rightSelect: value });
              }}
              dataSource={targetData}
              fleidName={{ title: "name", value: "uid", key: "key" }}
            />
          </div>
        </div>
      );
    return null;
  };
}

// css prefix
function sc(name?: string) {
  return ["dy-transfer", name].filter(Boolean).join("-");
}
