import React, { useContext } from "react";

import AppContext from "../contexts/AppContext";

import SearchResult from "./SearchResult";

const SearchResults = () => {
  const { state } = useContext(AppContext);

  return (
    <>
      <h4 className="mt-3">検索結果</h4>
      {state.searchResults.map((searchResult, index) => {
        return <SearchResult key={index} searchResult={searchResult} />;
      })}
    </>
  );
};

export default SearchResults;
