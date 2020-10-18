import React, {
  crateContext,
  useContext,
  useReducer,
  createContext,
} from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
export const DataLayerContext = createContext(); // preparing the data layer

export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);
export const useDataLayerValue = () => useContext(DataLayerContext);
