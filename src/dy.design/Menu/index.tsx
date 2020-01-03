import * as React from "react";
import * as _p from "prop-types";
import { Provider, useGlobalState, useDispatch } from "./store";
import "./index.less";
import Item from "./Item";
import SubMenu from "./SubMenu";
interface Props {
  children?: React.ReactElement<any>;
  onClick: <T>(e: T) => void;
  defaultSelectedKeys?: string;
  defaultOpenKeys?: string;
  selectedKey?: { path: [number, string]; title: string };
  className?: string;
}
const HookMenu = (props: Props) => {
  const path = useGlobalState("path");
  const title = useGlobalState("title");
  const inside = useGlobalState("inside");
  React.useEffect(() => {
    if (inside && path.length > 0 && title) {
      props.onClick({ path, title });
    }
  }, [path]);

  return (
    <ul className={props.className + " dyd-menu"}>
      {React.Children.map(props.children, child =>
        React.cloneElement(child, {
          defaultSelectedKeys: props.defaultSelectedKeys,
          defaultOpenKeys: props.defaultOpenKeys,
          selectedKey: props.selectedKey
        })
      )}
    </ul>
  );
};
type menuProps = Partial<Props>;
export default class Menu extends React.Component<menuProps, {}> {
  static Item = Item;
  static SubMenu = SubMenu;
  static propTypes = {
    defaultOpenKeys: _p.oneOfType([_p.string, _p.number]),
    defaultSelectedKeys: _p.oneOfType([_p.string, _p.number]),
    selectedKey: _p.object,
    style: _p.object,
    onClick: _p.func,
    className: _p.string
  };
  render() {
    return (
      <Provider>
        <HookMenu {...this.props} onClick={this.props.onClick} />
      </Provider>
    );
  }
}
