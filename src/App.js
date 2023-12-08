import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "./Components/atoms/Page/Page";
import ToDo from "./Components/pages/ToDo";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Store/Store";

const App = () => {
  return (
    <Provider store={store}>
      <Page>
        <BrowserRouter>
          <Routes>
            <Route index element={<ToDo />} />
          </Routes>
        </BrowserRouter>
      </Page>
    </Provider>
  );
};

export default App;
