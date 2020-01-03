import React from 'react'
import context from './react-router-context'
const Consumer = context.Consumer
export default class Redirect extends React.Component{
    render(){
        return <Consumer>
            {({history}) =>{
                history.push(this.props.to)
                return null
            }}
        </Consumer>
    }
}