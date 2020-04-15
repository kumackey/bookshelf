import React from "react";

import PropTypes from "prop-types";

const SearchResult = ({ searchResult }) => {
  console.log(searchResult);
  return (
    <>
      <div className="card">{searchResult.volumeInfo.title}</div>
    </>
  );
};

SearchResult.propTypes = {
  searchResult: PropTypes.any,
};

export default SearchResult;
