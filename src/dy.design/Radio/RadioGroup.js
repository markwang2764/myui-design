import React from 'react'
import _p from 'prop-types'

import Radio from './Radio.js'

const RadioNew = (radio, i) => {
    return <Radio name='e' {...radio.props} key={i} />
}

class RadioGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: this.props.value || '',
            name: Number.MAX_SAFE_INTEGER * Math.random() * 10 + 'radio'
        }
    }

    componentWillMount() {
        this.setState({
            value: this.props.value
        })
    }

    SetValue = (radio) => {
        this.props.onClick(radio.props.value)
        this.setState({
            value: radio.props.value
        })
    }

    render() {
        return <div >
            {this.props.children.map((radio, i) =>
                <Radio name={this.state.name} {...radio.props} key={i} onClick={() => this.SetValue(radio, i)} checked={this.state.value == radio.props.value ? true : false} />
            )}
        </div>
    }
}
export default RadioGroup