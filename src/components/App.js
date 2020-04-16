import React, { useReducer } from "react";
import { useLocation } from "react-router-dom";

import AppContext from "../contexts/AppContext";

import reducer from "../reducers";

import SearchBooksForm from "./SearchBooksForm";
import SearchResults from "./SearchResults";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const App = () => {
  const query = useQuery();
  const keyword = query.get("q");
  const initialState = {
    keyword: keyword,
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
