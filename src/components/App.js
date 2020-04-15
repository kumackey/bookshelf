import React, { useReducer } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import AppContext from "../contexts/AppContext";

import reducer from "../reducers";

import SearchBooksForm from "./SearchBooksForm";
import SearchResults from "./SearchResults";

const App = () => {
  const initialState = {
    keyword: "",
    searchResults: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container">
        <SearchBooksForm />
        <SearchResults />
      </div>
    </AppContext.Provider>
  );
};

export default App;
