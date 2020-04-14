import React, { useReducer } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import AppContext from "../contexts/AppContext";
import reducer from "../reducers";

import SearchBooksForm from "./SearchBooksForm";

const App = () => {
  const initialState = {
    keyword: "",
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <SearchBooksForm />
    </AppContext.Provider>
  );
};

export default App;
