import axios from "axios";

export const getJSONFromKeyword = (keyword) => {
  return axios.get(`https://www.googleapis.com/books/v1/volumes?q=search?${keyword}`);
};
