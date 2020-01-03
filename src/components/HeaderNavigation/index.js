import React from 'react';
import {connect} from 'react-redux'
import {changeNavigationTabs, changeSelectedKey} from '@store/cacheMenu/action'

import Icon from '../../dy.design/Icon'
import {WithRoute} from "../../dy.router";
import "./index.less";
@connect(state => state.cacheMenu, {changeNavigationTabs, changeSelectedKey})
@WithRoute
export default class HeaderNavigatoin extends React.Component {
    state = {
        eleWidth: 0,
        currentPath: 0,
        menuList: sessionStorage.menuList ? JSON.parse(sessionStorage.menuList) : []
    }
    componentDidMount() {
        const _this = this
        let eleWidth = document.body.clientWidth - _this.props.siderWidth
        _this.setState({eleWidth})
        window.onresize = function () {
            eleWidth = document.body.clientWidth - _this.props.siderWidth
            _this.setState({eleWidth})
        };
        if(sessionStorage.navigationTabCurrentPath){
            this.setState({currentPath: sessionStorage.navigationTabCurrentPath})
        }
        if(sessionStorage.navigationTabs){
            this.props.changeNavigationTabs(JSON.parse(sessionStorage.navigationTabs))
        }else{
            this.props.changeNavigationTabs([JSON.parse(sessionStorage.defaultPath)])
            this.props.history.push(JSON.parse(sessionStorage.defaultPath).path[1])
        }
    }

    componentWillMount() {
        window.addEventListener('popstate', () => {
            const menuList = this.state.menuList
            let hrefPath = window.location.href.split("//")[1]
            hrefPath= hrefPath.substr(hrefPath.indexOf("/"))
            this.findSelectedKey(hrefPath, menuList, 0)
        }, false)
    }

    
    componentWillReceiveProps(nextProps) {
        let hrefPath = window.location.href.split("//")[1]
        hrefPath= hrefPath.substr(hrefPath.indexOf("/"))
        this.setState({currentPath: hrefPath})
        sessionStorage.navigationTabCurrentPath = hrefPath
    }

    findSelectedKey = (path, list, index) => {
        list.forEach((v,i) => {
            if(v.child&&v.child.length > 0){
                this.findSelectedKey(path, v.child, i)
            }else{
                if(v.path == path){
                    this.props.changeSelectedKey({
                        path: [index, v.path],
                        title: v.title
                    })
                }
            }
        })
    }

    render() {
        const {eleWidth, currentPath} = this.state
        const { navigationTabs, selectedKey} = this.props
        
        return (
            <div
                style={{
                height: '20px',
                width: eleWidth
                    ? eleWidth + "px"
                    : '100%'
            }}
                className="header-navigation flex-y">
                {navigationTabs.map((v, i) => {
                    return <div  onClick={() => {
                        this.setState({currentPath: v.path[1]})
                        this.props.history.replace(v.path[1])
                        this.props.changeSelectedKey(v)
                        sessionStorage.histroyPath = JSON.stringify(v)
                        sessionStorage.navigationTabCurrentPath = v.path[1]
                    }}
                    className={(currentPath == v.path[1]&& navigationTabs.length > 1 ? 'navigation-tab__actived ' : '') + "navigation-tab flex-y"}
                    key={i}>
                    <div className="ellipsis">
                        {v.title}
                    </div>
                    {
                        currentPath != i&& navigationTabs.length > 1 ?
                        <Icon
                            className="navigation-close"
                            onClick={(e) => {
                            e.stopPropagation();
                            let result = navigationTabs.filter(j => j.path[1] != v.path[1]);
                            if(v.path[1] == currentPath){
                                const index = i == 0 ? i : i - 1
                                this.setState({currentPath: result[index].path[1]})
                                this.props.history.replace(result[index].path[1])
                                this.props.changeSelectedKey(result[index])
                                sessionStorage.histroyPath = JSON.stringify(result[index])
                                sessionStorage.navigationTabCurrentPath = result[index].path[1]
                            }
                            sessionStorage.navigationTabs = JSON.stringify(result);
                            this.props.changeNavigationTabs(result)
                        }}
                            type="guanbi"/> : null
                    }
                        
                    </div>
                })
}
            </div>

        )
    }
}
