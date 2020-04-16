import axios from "axios";

export const getResponseFromKeyword = (keyword) => {
  return axios.get(`https://www.googleapis.com/books/v1/volumes?q=search?${keyword}`);
};

export const getResponseFromId = (id) => {
  return axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
};
