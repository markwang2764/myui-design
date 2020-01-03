// 参数为一个reducer 集合 里面有全部的reducer

type Action = {type: string, [propName: string]: any}
type State = {[propName: string]: any}
interface Reducers {
    [propName: string]: (state:any, action: Action) => any
}
 const combineReducer = (reducers: Reducers) => {
    //取得所有key
    const reducerKeys = Object.keys(reducers)
    //用来放所有的Reducer state
    let objInitState:State = {}
    //检查是否都有预设的 state 值
    reducerKeys.forEach((key) => {
        //、、传入空的type, 因为Reducer 内会有预设action为回传目前的state
        const initState = reducers[key](undefined, {type: ''})
        if(initState === 'undefined'){
            //没有的话提示错误
            throw new Error(`${key} dose not return state`)
        }
        objInitState[key] = initState
    })
    return (state:State, action:Action) => {
        if(action){
            reducerKeys.forEach((key) => {
                const previousState = objInitState[key]
                objInitState[key] = reducers[key](previousState, action)
            })
        }
        return { ...objInitState }
    }
}

export default combineReducer