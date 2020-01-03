import React from 'react';
const {createContext, useContext, useReducer} = React
import menuReducer from './menuReducer'
import combineReducer from './combineReducer';

const reducers = combineReducer({
    menuReducer
})
const initState = reducers()
const stateCtx = createContext(initState)
const dispatchCtx = createContext((() => 0))

export const Provider = ({children}) => {
    const [state,
        dispatch] = useReducer(reducers, initState)
    return (
        <dispatchCtx.Provider value={dispatch}>
            <stateCtx.Provider value={state}>
                {children}
            </stateCtx.Provider>
        </dispatchCtx.Provider>
    )
}

export const useDispatch = () => {
    return useContext(dispatchCtx)
}

export const useGlobalState = (property) => {
    const state = useContext(stateCtx)
    if(!property) return state;
    return state[property]
}

export const connect = (mapStateToProps=state=>state,mapDispatchToProps={}) =>  (WrapComponent) => 
 (props) => {
    const globalState = useContext(stateCtx)
    const dispatch = useContext(dispatchCtx)
     const [combineProps, setCombineProps] = useState(props)
   
     useEffect(() => {
      setCombineProps({...props,globalState,dispatch})
     })
    return <WrapComponent {...combineProps} />
 }





//{
//     return class ConnectComponent extends React.Component {
//       static contextTypes = {
//         store: PropTypes.object
//       }
//       constructor(props,context) {
//         super(props,context)
//         this.state = {
//           props: {}
//         }
//       }
//       componentDidMount() {
//         const {store} = this.context
//         store.subscribe(()=>this.update())
//         this.update()      
//       }
//       update(){
//         // 获取mapStateToProps 和 mapDispatchToProps 放入this.props里
//         const {store} = this.context
//         const stateProps = mapStateToProps(store.getState())
//         // addGun = () => store.dispatch(addGun())
//         const dispatchProps = bindActionCreators(mapDispatchToProps,store.dispatch)
//         this.setState({
//           props:{
//             ...this.state.props,
//             ...stateProps,
//             ...dispatchProps
//           }
//         })
//       }
//       render(){
//         return <WrapComponent {...this.state.props} />
//       }
//     }
//   }