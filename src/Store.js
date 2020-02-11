import React, {createContext, useReducer} from "react";
import Reducer from './Reducer'

const initialState = {
  posts: [],
  error: null
};

export const Context = createContext(initialState);
const Provider = Context.Provider;

const Store = ({children}) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Provider value={[state, dispatch]}>
      {children}
    </Provider>
  )
};

export default Store;