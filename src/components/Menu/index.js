import React, { Component } from 'react';
import Menu from '../../dy.design/Menu/index';
import Icon from '../../dy.design/Icon'
const {Item, SubMenu} = Menu
import {WithRoute} from "../../dy.router";
import data from './menu.json'
import './index.less';

import {changeNavigationTabs, changeSelectedKey} from '@store/cacheMenu/action';
import {connect} from 'react-redux'
@connect(state => state.cacheMenu, {changeNavigationTabs, changeSelectedKey})
@WithRoute
export default class MenuList extends Component {

    state={
        data: data
    }

    componentDidMount() {
        if(!sessionStorage.loginStatus){
            // this.props.history.replace('/login')
        };
        const defaultPath = data[0]['child'] ? data[0]['child'][0] : data[0]
        sessionStorage.defaultPath = JSON.stringify({
            path: [0, defaultPath.path],
            title: defaultPath.title
        })
        sessionStorage.menuList = JSON.stringify(data)
    }
    

    handleClick = data => {
        const thisProps = this.props
        const {path} =data
        
        if(path[1]){
            thisProps.history.push(path[1])
            const converData = {path:data['path'], title:data['title'][1]}
            
            sessionStorage.histroyPath = JSON.stringify(converData)
            const navigationTabs = thisProps.navigationTabs
            navigationTabs.push(converData)
            let obj = {},
            result = []
            navigationTabs.forEach(v => {
                obj[v.path[1]] = v
            })
            for (let j in obj) {
                result.push(obj[j])
            }
            sessionStorage.navigationTabs = JSON.stringify(result);
            thisProps.changeNavigationTabs(result)
            thisProps.changeSelectedKey(converData)
        }
    }
    /**
     *
     * @param data 菜单数据
     * @memberof MenuList 递归渲染菜单数据
     * @returns dy.design ITEM
     */
    menuList = data =>
        data.map((v, i) => {
            if (v.child && v.child.length > 0) {
                return (<SubMenu
                    subKey={i}
                    key={v.path || v.title}
                    title={
                    <span className="flex-y">{v.icon ? 
                    <Icon className="mr10" type={v.icon} /> : ''}
                    <span>{v.title}</span>
                    </span>}
                    >
                    {this.menuList(v.child)}
                </SubMenu>)
            } 
            return (<Item key={v.path || v.title} path={v.path}>
                {v.icon ? <Icon className="mr10" type={v.icon} /> : null}{v.title}</Item>)
        })

    render() {

        let path = []
        if(sessionStorage.histroyPath){
            path = JSON.parse(sessionStorage.histroyPath).path
        }
        
        return (
            <Menu
                defaultSelectedKeys={path[1] || (data[0]['child'] ? data[0]['child'][0]['path'] : data[0]['path'])}
                selectedKey= {this.props.selectedKey || {}}
                defaultOpenKeys={path[0] || 0}
                onClick={this.handleClick}
                className="menu"
            >
                {this.menuList(this.state.data)}
            </Menu>
        );
    }
}

