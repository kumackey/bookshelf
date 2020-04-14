import axios from "axios";

export const getResponseFromKeyword = async (keyword) => {
  const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=search?${keyword}`);
  return response;
};
