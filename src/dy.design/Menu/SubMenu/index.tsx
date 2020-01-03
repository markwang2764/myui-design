import * as React from "react";
import * as _p from "prop-types";
import "./index.less";
import { useDispatch, useGlobalState } from "../store";
const { useState, useEffect, useContext, useCallback } = React;

interface SubMenuProps {
  children: React.ReactElement;
  title: string | React.ReactElement;
  path?: string;
  subKey: number | string;
  defaultOpenKeys?: string | number;
  defaultSelectedKeys?: string | number;
}
const SubMenu = (props: SubMenuProps) => {
  const {
    children,
    title,
    defaultOpenKeys,
    defaultSelectedKeys,
    subKey
  } = props;

  useEffect(() => {
    if (defaultOpenKeys != undefined) {
      if (defaultOpenKeys == subKey) {
        setIsOpen(true);
      }
    }
  }, []);

  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = useGlobalState("path");

  useEffect(() => {
    const key: any = currentPath[0];
    if (key !== undefined) {
      if (key == subKey) {
        setIsOpen(true);
      }
    }
  }, [currentPath, subKey]);

  return (
    <div
      className="dyd-submenu"
      // onMouseEnter={useCallback((e: React.MouseEvent<HTMLElement>) => {
      //     setIsOpen(preIsOpen => !preIsOpen)
      // },[])}
      // onMouseLeave={useCallback((e: React.MouseEvent<HTMLElement>) => {
      //     setIsOpen(preIsOpen => !preIsOpen)
      // },[])}
    >
      <div
        className="dyd-submenu-title flex-y flex-space-between"
        onClick={useCallback((e: React.MouseEvent<HTMLElement>) => {
          setIsOpen(preIsOpen => !preIsOpen);
        }, [])}
      >
        {title}
        <i
          className="dyd-arrow-bottom"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </div>
      <ul style={{ display: isOpen ? "block" : "none" }}>
        {React.Children.map(children, child =>
          React.cloneElement(child, {
            parentkeys: subKey,
            defaultSelectedKeys,
            defaultOpenKeys
          })
        )}
      </ul>
    </div>
  );
};

SubMenu.propTypes = {
  title: _p.oneOfType([_p.string, _p.element]).isRequired,
  subKey: _p.number.isRequired
};
export default SubMenu;
