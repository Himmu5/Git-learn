import { Action, createStore } from 'redux'

export type State= {
  count:number;
}

const inititalState = {
  count:0
}

function reducer(currentState:State=inititalState , action:Action):State{
  if(action.type == 'Plus'){
    return { ...currentState, count : currentState.count + 1}
  }
  return currentState
}

const store = createStore(reducer , (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__() );

export default store;