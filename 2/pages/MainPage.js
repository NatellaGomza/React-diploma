import React from 'react';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import basketReducer from "../components/basketReducer";

import PagesRouter from './PagesRouter';
import PagesLinks from './PagesLinks';

let combinedReducer=combineReducers({
  // редьюсер counterReducer отвечает за раздел state под именем counter
  basket: basketReducer, 
  // + другие редьюсеры
});
let store=createStore(combinedReducer);

class MainRouter extends React.Component {

    render() {
  
      return (
        <Provider store={store}>
         <PagesLinks />
         <PagesRouter/>
        </Provider>
      );
    }
  
  }
  
  export default MainRouter;