import React from "react";

import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const SearchResult = ({ searchResult }) => {
  return (
    <>
      <Link to={`/books/${searchResult.id}`}>
        <div className="card">{searchResult.volumeInfo.title}</div>
      </Link>
    </>
  );
};

SearchResult.propTypes = {
  searchResult: PropTypes.any,
};

export default SearchResult;
