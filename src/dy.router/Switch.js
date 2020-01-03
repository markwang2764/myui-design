import React from 'react';
import context from "./react-router-context";
const Consumer = context.Consumer
import pathToRegExp from "path-to-regexp";

export default class Switch extends React.Component {
    render() {
        return <Consumer>
            {value => {
                let pathname = value.location.pathname
                let childCom = React
                    .Children
                    .map(this.props.children, child => {
                        
                        let {
                            cache = false,
                            path = '/',
                            exact = false
                        } = child.props
                        
                        if (cache) {
                            return child
                        } else {
                            let reg = pathToRegExp(path, [], {end: exact})
                            if (reg.test(pathname)) {
                                return child
                            }
                        }

                    })
                return childCom
            }
}
        </Consumer>
    }
}