* 引入此组件
```js
import {RadioGroup,Radio} from '../dy.design/Radio/index';
```
* 使用方法
```js
const [value,setValue] =useState(2);

 <RadioGroup value={value} onClick={(e)=>setValue(e)}>
    <Radio value={1}>A</Radio>
    <Radio value={2}>B</Radio>
    <Radio value={3}>C</Radio>
</RadioGroup>
```
