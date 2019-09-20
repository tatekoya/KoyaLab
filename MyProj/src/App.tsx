import React from 'react';
import AppContainer from './AppContainer';
import { Provider } from "react-redux";
import { createStore } from "redux";
import appReducer from "./Reducer";

// ReducerからStoreを作成
const store = createStore(appReducer);

const App = () => {

  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
