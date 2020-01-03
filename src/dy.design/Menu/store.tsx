import * as React from 'react';
import {Action, reducer, State, initialState} from './menuReducer'
const {createContext, useContext, useReducer} = React
const stateCtx = createContext(initialState)
const dispatchCtx = createContext((() => 0) as React.Dispatch<Action>)

interface ProviderProp {
    children: React.ReactNode
}
export const Provider = ({children}:ProviderProp) => {
    const [state,
        dispatch] = useReducer(reducer, initialState)
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

export const useGlobalState = <K extends keyof State>(property?: K) => {
    const state = useContext(stateCtx)
    return state[property]
}