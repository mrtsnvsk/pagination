import * as constant from './constants';

let initialState = {
  users: null,
  searchUsers: null,
  currentPage: 1,
  postsPerPage: 50,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.GET_USERS:
      return {
        ...state,
        users: action.payload,
        searchUsers: action.payload,
      };
    case constant.SEARCH_USERS:
      return {
        ...state,
        searchUsers: action.payload,
      };
    case constant.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
