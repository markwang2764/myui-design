import * as React from "react";
import * as _p from "prop-types";
import "./index.less";
import deepCompare from "../utils/deepCompare";

interface Iprops {
  dataSource: any[];
}
interface Istate {
  [key: string]: any;
  initPostion: { left: number; top: number };
}

export default class FlowChart extends React.Component<Iprops, Istate> {
  flowChartRef: any = null;
  static propTypes = {
    dataSource: _p.array.isRequired,
  };
  static defaultProps = {
    dataSource: [
      {
        taskName: "start",
      },
      {
        taskName: "dotask",
      },
    ],
  };
  state: Istate = {
    initPostion: { left: 0, top: 0 },
  };
  componentDidMount() {
    this.setState({
      initPostion: {
        left: this.flowChartRef.clientWidth / 2 - 60,
        top: 10,
      },
    });
  }
  componentDidUpdate(preProps: Iprops) {
    if (!deepCompare(this.props, preProps)) {
      console.log(1);
    }
  }
  render() {
    const { dataSource } = this.props;
    const { left, top } = this.state.initPostion;
    console.log(this.state.renderKeys);

    return (
      <div
        className={sc()}
        ref={flowChartRef => {
          this.flowChartRef = flowChartRef;
        }}
      >
        {dataSource.map((v, i) => {
          return (
            <div
              key={i}
              className={sc("node")}
              style={{ left: left + "px", top: top + i * 120 + "px" }}
              onMouseDown={e => {
                const ele = e.currentTarget;
                let left: any = ele.style.left;
                left = left ? left.slice(0, left.indexOf("px")) : 0;
                let top: any = ele.style.top;
                top = top ? top.slice(0, top.indexOf("px")) : 0;

                let oldX = e.clientX - left;
                let oldY = e.clientY - top;

                ele.onmousemove = moveEvent => {
                  if (oldX !== null) {
                    const x = moveEvent.clientX - oldX;
                    const y = moveEvent.clientY - oldY;

                    ele.style.left = `${x}px`;
                    ele.style.top = `${y}px`;

                    this.setState({
                      ["nodeleft" + i]: x,
                      ["nodetop" + i]: y,
                    });
                  }
                };
              }}
              onMouseUp={e => {
                const ele = e.currentTarget;
                ele.onmousemove = null;
                ele.onmouseup = null;
              }}
              onMouseLeave={e => {
                const ele = e.currentTarget;
                ele.onmousemove = null;
              }}
            >
              <svg>
                <g>
                  {i === 0 ? (
                    <ellipse cx="60" cy="40" rx="55" ry="35" style={{ fill: "#57a0b9", stroke: "#e0e9ef", strokeWidth: "10" }} />
                  ) : (
                    <rect width="100%" height="100%" style={{ fill: "#57a0b9", stroke: "#e0e9ef", strokeWidth: "10" }} />
                  )}
                  <text className="taskName" x="28" y="28" style={{ fill: "#fff" }}>
                    {v.taskName}
                  </text>
                </g>
              </svg>
            </div>
          );
        })}
        {dataSource.map((v, i) => {
          if (i === dataSource.length - 1) return;
          let prevNodeX, prevNodeY, nextNodeX, nextNodeY;
          if (i === 0) {
            prevNodeX = null;
            prevNodeY = null;
          } else {
            prevNodeX = this.state["nodeleft" + (i - 1)] ? this.state["nodeleft" + (i - 1)] : left;
            prevNodeY = this.state["nodetop" + (i - 1)] ? this.state["nodetop" + (i - 1)] : top + (i - 1) * 120;
          }
          nextNodeX = this.state["nodeleft" + (i + 1)] ? this.state["nodeleft" + (i + 1)] : left;
          nextNodeY = this.state["nodetop" + (i + 1)] ? this.state["nodetop" + (i + 1)] : top + (i + 1) * 120;
          const lineX = this.state["nodeleft" + i] ? this.state["nodeleft" + i] : left;
          const lineY = this.state["nodetop" + i] ? this.state["nodetop" + i] : top + i * 120;
          //    线条元素起始点
          let positionX, positionY, lineEndX, lineEndY, rotate;
          positionX = lineX + 60;
          positionY = lineY + 80;
          if (lineX >= nextNodeX) {
            rotate = 180;
          } else {
            rotate = 0;
          }

          //   线条终点
          lineEndX = nextNodeX - lineX;
          lineEndY = nextNodeY - lineY - 80;

          return (
            <svg
              key={i}
              className={sc("line")}
              style={{
                left: positionX + "px",
                top: positionY + "px",
                height: Math.abs(lineEndY) + "px",
                width: Math.abs(lineEndX) + "px",
                transform: `rotateY(${rotate}deg)`,
              }}
            >
              <g>
                <path
                  style={{ fill: "none", stroke: "#333", strokeWidth: "2", transform: `rotateY(${rotate}deg)` }}
                  d={`M0 0 L 0 ${lineEndY / 2} ${lineEndX} ${lineEndY / 2} ${lineEndX} ${lineEndY}`}
                />
              </g>
            </svg>
          );
        })}
      </div>
    );
  }
}

function sc(name?: string) {
  return ["dy-flowchart", name].filter(Boolean).join("-");
}
