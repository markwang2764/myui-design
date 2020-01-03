//connect 负责链接组件 给到redux里的数据放到组件的属性里
import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from "./my-redux";
const Context = React.createContext()
const Provider = Context.Provider
const Consumer = Context.Consumer
export const connect = (mapStateToProps=state=>state,mapDispatchToProps={}) =>  (WrapComponent) => {
  return class ConnectComponent extends React.PureComponent {
    state={
        props:{}
    }
    store = {}
    update(){
      // 获取mapStateToProps 和 mapDispatchToProps 放入this.props里
      const store = this.store
      const stateProps = mapStateToProps(store.getState())
      // addGun = () => store.dispatch(addGun())
      const dispatchProps = bindActionCreators(mapDispatchToProps,store.dispatch)
      this.setState({
        props:{
          ...this.state.props,
          ...stateProps,
          ...dispatchProps
        }
      })
    }
    render(){
      return 
      <Consumer>
        {
            store => {
                this.store = store
                store.subscribe(() => this.update())
                this.update()   
                return <WrapComponent {...this.state.props} />
            }
        }
      </Consumer>
    }
  }
}
// Provider  把store放到context里 所有子元素可以直接取到store
export class Provider extends React.Component{
  static propTypes = {
    store: PropTypes.object.isRequired
  }
  render(){
    return <Provider value ={this.props.store}>
        {this.props.children}
    </Provider>
  }
}