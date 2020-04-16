import { UPDATE_KEYWORD } from "../actions";

const keyword = (state = "", action) => {
  switch (action.type) {
    case UPDATE_KEYWORD: {
      return action.keyword;
    }
    default:
      return state;
  }
};

export default keyword;
