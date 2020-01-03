import React from 'react'
import context from './react-router-context'
const Consumer = context.Consumer

export default class Link extends React.Component{
    render() {
        return <Consumer>
            {({history}) => {
                return <a
                    onClick={() => {
                        history.push(this.props.to)
                    }}
                ></a>
            }}
        </Consumer>
    }
}