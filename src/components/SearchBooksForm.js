import React, { useState, useContext } from "react";

import { UPDATE_KEYWORD, UPDATE_SEARCH_RESULTS } from "../actions";

import AppContext from "../contexts/AppContext";

import { getResponseFromKeyword } from "../googleBooksAPI";

const SearchBooksForm = () => {
  const { state, dispatch } = useContext(AppContext);
  const [keyword, setKeyword] = useState("");

  const searchBooksWithKeyword = async (e) => {
    e.preventDefault();
    dispatch({
      type: UPDATE_KEYWORD,
      keyword: keyword,
    });
    const response = await getResponseFromKeyword(keyword);
    dispatch({
      type: UPDATE_SEARCH_RESULTS,
      response: response,
    });
  };

  return (
    <>
      <h4>本を検索</h4>
      <div className="form-group">
        <label htmlFor="formKeyword">キーワード</label>
        <input className="form-control" id="formKeyword" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      </div>
      <button className="btn btn-primary" onClick={searchBooksWithKeyword} disabled={!keyword}>
        検索する
      </button>
      <div>検索ワード: {state.keyword}</div>
    </>
  );
};

export default SearchBooksForm;
