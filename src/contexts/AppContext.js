import React, { createContext, useReducer, useContext } from "react";

import * as types from "../actions/types";

const initState = {
  auth: false,
  loading: false,
  resources: [],
  carousel: {
    index: 0,
    item: {}
  }
};

const reducer = (state = initState, action) => {
  switch(action?.type){
    case types.SET_BACKGROUND_RESOURCES:
      return {
        ...state,
        resources: action.payload
      };
    case types.SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case types.SET_CAROUSEL_ITEM:
      return {
        ...state,
        carousel: action.payload
      };
    default:
      return state;
  };
};

const AppContext = createContext({});

const Provider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initState);

  return(
    <AppContext.Provider value={{
      state,
      dispatch
    }}>
      {children}
    </AppContext.Provider>
  );
}

const useStore = () => useContext(AppContext).state;

const useDispatch = () => useContext(AppContext).dispatch;

export {
  AppContext,
  Provider,
  useStore,
  useDispatch
};