import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { getResponseFromId } from "../googleBooksAPI";

const BooksShow = (props) => {
  const [item, setItem] = useState({});
  const [title, setTitle] = useState("");
  const [imageLink, setImageLink] = useState("");
  const id = props.match.params.id;

  const getItemFromId = async () => {
    const response = await getResponseFromId(id);
    setItem(response.data);
  };

  const setItemInformation = () => {
    if (item.volumeInfo) {
      setTitle(item.volumeInfo.title);
      setImageLink(item.volumeInfo.imageLinks.thumbnail);
    }
  };

  useEffect(() => {
    getItemFromId();
    setItemInformation();
  }, [item.id]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <img src={imageLink} alt="本のサムネイル" />
        </div>
        <div className="col-8">
          <h4>title: {title}</h4>
          <Link to="/">
            <button className="btn btn-primary">戻る</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

BooksShow.propTypes = {
  match: PropTypes.any,
};

export default BooksShow;
