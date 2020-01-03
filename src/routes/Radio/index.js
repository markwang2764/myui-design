import React from 'react';
import { RadioGroup, Radio } from '../../dy.design/Radio/index';
import './index.less'
import Reg from './RegExp'
export default class Button extends React.PureComponent {
    constructor() {
        super()
        this.state = {
            value: 'A',
            html: `
    import React from 'react';
    import ReactDOM from 'react-dom';
    import {RadioGroup,Radio} from 'dy.design';

    class RadioExample extends React.PureComponent {
        constructor(){
            super()
            this.state={
                value:'A',
            }
        }

        SetState =(value)=>{
            console.log("you select value is", value)
            this.setState({
                value:value
            })
        }

        render(){
            return <div>
                    单选按钮组：
                    <RadioGroup value={this.state.value} onClick={(value)=>this.SetState(value)}>
                        <Radio value={"A"}>A</Radio>
                        <Radio value={"B"}>B</Radio>
                        <Radio value={"C"}>C</Radio>
                    </RadioGroup>
            </div>
        }
    }

    ReactDOM.render(<RadioExample />, DomNode);
            `
        }
    }

    SetState = (value) => {
        console.log("you select value is", value)
        this.setState({
            value: value
        })
    }

    Copy = () => {
        var Url2 = document.getElementsByTagName("pre")[0].innerText;
        var oInput = document.createElement('textarea');
        oInput.value = Url2;
        document.body.appendChild(oInput);
        oInput.select(); // 选择对象
        document.execCommand("Copy"); // 执行浏览器复制命令
        alert('复制成功');
    }
    render() {
        return <React.Fragment>
            单选按钮组： <RadioGroup value={this.state.value} onClick={(value) => this.SetState(value)}>
                <Radio value={"A"}>A</Radio>
                <Radio value={"B"}>B</Radio>
                <Radio value={"C"}>C</Radio>
            </RadioGroup>
            <div className="codePlace">
                <pre dangerouslySetInnerHTML={{ __html: Reg.toShow(this.state.html) }}>
                </pre>
                <button onClick={() => this.Copy()}>复制</button>
            </div>

        </React.Fragment>
    }
}