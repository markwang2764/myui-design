import * as React from 'react'
import * as _p from 'prop-types'
import './index.less'
import {isObjectEmpty} from '../is'
import {useDispatch, useGlobalState} from '../store';
const {
    useState,
    useEffect,
    useContext,
    useCallback
} = React

interface ItemProps {
    children: React.ReactNode,
    path: string,
    disabled: boolean,
    defaultSelectedKeys?: string | number
    defaultOpenKeys?: string | number
    selectedKey?: {
        path: [number, string],
        title: string
    }
    parentkeys?: string | number
}
const Item = (props: ItemProps) => {
    const {children, path, disabled, defaultSelectedKeys, defaultOpenKeys, parentkeys, selectedKey} = props
    
    useEffect(() => {
        dispatch({ type: 'activated', data: {path: [defaultOpenKeys, defaultSelectedKeys]} })
          return () => {
          };
        }, [])
    const currentPath = useGlobalState('path')[1]
    
    const dispatch = useDispatch()
    useEffect(() => {
        if(!isObjectEmpty(selectedKey)){
            dispatch({ type: 'activated', data: {path: selectedKey.path, title: selectedKey.title, inside: false} })
        }
    }, [selectedKey])
    const increment = useCallback(() => {
        dispatch({ type: 'activated', data: {path: [parentkeys, path], title: children, inside: true} })
    }, [parentkeys]);
 
    return (
        <li onClick={increment} 
        className={(disabled?'disabled ': '') + ' dyd-menu-item ' + (currentPath == path ? 'dyd-menu-item__activated' : '')}
        >
            {children}
        </li>
    )
}


Item.propTypes= {
    path: _p.string.isRequired,
    disabled: _p.bool
}
export default Item