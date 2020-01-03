import React from "react";
import context from "./react-router-context";
const Provider = context.Provider
import {getUrlParameter} from '@helpers/get';
export default class BrowserRouter extends React.Component {
    state = {
        location: {
            pathname: window.location.pathname || '/'
        }
    }

    componentWillMount() {
        window.addEventListener('popstate', () => {
            const pathname = window.location.pathname
            this.handleChangeState(pathname)
        }, false)
    }

    handleChangeState = (pathname, query) => {
        this.setState({
            location: {
                ...this.state.location,
                pathname,
                query
            }
        })
    }

    handleHistroy = (url, type) => {
        let pathname
        let query = {}
        let queryObj = {}

        if (url.indexOf("?") != -1) {
            pathname = url.split("?")[0]
            query = url.split("?")[1]
            query = query.split("&")
            query.forEach((v, i) => {
                let key = v.split("=")[0]
                let value = v.split("=")[1]
                queryObj[key] = value
            })
        } else {
            pathname = url
        }
        if (type == 'push') {
            window
                .history
                .pushState({}, null, url)
        } else {
            window
                .history
                .replaceState({}, null, url)
        }
        this.handleChangeState(pathname, queryObj)
    }

    render() {
        
        let _this = this;
        let value = {
            ...this.state,
            history: {
                push(url) {
                    _this.handleHistroy(url, 'push')
                },
                replace(url) {
                    _this.handleHistroy(url, 'replace')
                }
            }
        }

        return (
            <Provider value={value}>
                {this.props.children}
            </Provider>
        )
    }
}