/**
 * @note
 * @author  wangyuefeng 
 * @create  2018-10-01
 */

import React from 'react';
import makeCancelable from '@helpers/makeCancelable'

const AsyncComponent = loadComponent => (
    class DynamicComponent extends React.Component {
        cancelable = null
        state = {
            Component: null,
        }
        componentWillMount() {
            if (this.hasLoadedComponent()) return
            this.cancelable = makeCancelable(loadComponent())
            this.cancelable.promise
                .then(module => module.default)
                .then(Component => {
                    if (Component) {
                        this.setState({ Component })
                    }
                }).catch(err => {
                    // console.error('load error ==> AsyncComponent');
                    // throw err;
                })
        }

        hasLoadedComponent() {
            return this.state.Component !== null
        }


        componentWillUnmount() {
            this.cancelable.cancel()
        }

        render() {
            const { Component } = this.state
            return (Component) ? <Component {...this.props} /> : null
        }
    }
)
export default AsyncComponent