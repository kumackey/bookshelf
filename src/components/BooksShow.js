import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { getResponseFromId } from "../googleBooksAPI";

const BooksShow = (props) => {
  const [item, setItem] = useState({});
  const id = props.match.params.id;

  const getItemFromId = async (id) => {
    const response = await getResponseFromId(id);
    setItem(response.data);
  };

  useEffect(() => {
    getItemFromId(id);
  }, [id]);

  return (
    <div className="container">
      id:
      {item.id}
    </div>
  );
};

BooksShow.propTypes = {
  match: PropTypes.any,
};

export default BooksShow;
