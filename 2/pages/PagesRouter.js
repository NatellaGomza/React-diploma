import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { createStore, combineReducers } from 'redux';

import Page_About from './Page_About';
import Page_Company from './Page_Company';
import Page_Basket from './Page_Basket';
import Page_ProductsList from './Page_ProductsList';
import Page_AllProducts from './Page_AllProducts';

// import basketReducer from "../components/basketReducer";

// let combinedReducer=combineReducers({
//   // редьюсер counterReducer отвечает за раздел state под именем counter
//   basket: basketReducer, 
//   // + другие редьюсеры
// });
// let store=createStore(combinedReducer);

class PagesRouter extends React.Component {

  render() {

    return (
      // <Provider store={store}>
        <Routes>
          <Route path="/" element={<Page_About />} />
          <Route path="/company" element={<Page_Company />} />
          <Route path="/basket" element={<Page_Basket />} />
          <Route path="/products/" element={<Page_AllProducts />} />
          <Route path="/products/:item" element={<Page_ProductsList />} />
        </Routes>
      // {/* </Provider> */}
    );
  }

}

export default PagesRouter;
