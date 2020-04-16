import { UPDATE_SEARCH_RESULTS } from "../actions";

const searchResults = (state = [], action) => {
  switch (action.type) {
    case UPDATE_SEARCH_RESULTS: {
      const items = action.response.data.items;
      return items;
    }
    default:
      return state;
  }
};

export default searchResults;
