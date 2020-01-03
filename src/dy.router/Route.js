import React from 'react'
import Context from './react-router-context'

const Consumer = Context.Consumer
import pathToRegExp from 'path-to-regexp'


export default (props) => <Consumer>
{value =>  <CacheComponent value={value} {...props}></CacheComponent>}
</Consumer>


class CacheComponent extends React.Component {
    render() {
        let {
            path = "/",
            exact = false,
            cache = false,
            component: Component,
            value
        } = this.props

        let {pathname} = value.location
        let keys = []
        let reg = pathToRegExp(path, keys, {end: exact})
        if (reg.test(pathname)) {
                if(!!Component){
                    if(cache){
                        return <div style={{display: 'block'}}>
                        <Component {...this.props} {...value} />
                    </div>
                    }else{
                     return <Component {...this.props} {...value} />
                    }
                }
            }
        else{
            if(cache) return <div style={{display: 'none'}}>
                <Component {...this.props} {...value} />
            </div>;
        }
        return null
    }
}