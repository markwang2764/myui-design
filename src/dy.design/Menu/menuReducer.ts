export interface State {
  path: string[],
  title: string,
  inside: boolean
}

export const initialState: State = {
  path: [],
  title: '',
  inside: true 
}

export type Action = {type: 'activated', data: {}} | {type: 'unactivated', data: {}}


export const reducer = (state:State, action:Action): State => {
    switch (action.type) {
      case 'activated':
        return {...state, ...action.data};
      case 'unactivated':
        return {...state, ...action.data};
      default:
        throw new Error('没有这样的type');
    }
  }