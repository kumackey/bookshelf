import React, { useState, useContext } from "react";

import AppContext from "../contexts/AppContext";

import { UPDATE_KEYWORD } from "../actions";

const SerchBooksForm = () => {
  const { state, dispatch } = useContext(AppContext);
  const [keyword, setKeyword] = useState("");

  const searchBooksWithKeyword = (e) => {
    e.preventDefault();
    dispatch({
      type: UPDATE_KEYWORD,
      keyword: keyword,
    });
  };

  return (
    <>
      <h4>本を検索</h4>
      <div className="form-group">
        <label htmlFor="formKeyword">キーワード</label>
        <input className="form-control" id="formKeyword" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      </div>
      <button className="btn btn-primary" onClick={searchBooksWithKeyword} disabled={false}>
        検索する
      </button>
      <div>検索ワード: {state.keyword}</div>
    </>
  );
};

export default SerchBooksForm;
