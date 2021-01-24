import * as constant from './constants';
import { getAllUsers } from '../api/requests';

export const takeUsers = () => {
  return async (dispatch) => {
    const response = await getAllUsers();
    dispatch({
      type: constant.GET_USERS,
      payload: response.data,
    });
  };
};

export const setCurrentUser = (pageNumber) => {
  return {
    type: constant.SET_CURRENT_PAGE,
    payload: pageNumber,
  };
};

export const onSearchUsers = (term) => {
  return (dispatch, getState) => {
    const data = getState();
    let searchItems = [];
    if (term === '') {
      searchItems = data.users;
    } else {
      searchItems = data.users.filter((el) => {
        return (
          el.firstName.toLowerCase().includes(term.toLowerCase()) ||
          el.lastName.toLowerCase().includes(term.toLowerCase()) ||
          el.email.toLowerCase().includes(term.toLowerCase())
        );
      });
    }
    dispatch({
      type: constant.SEARCH_USERS,
      payload: searchItems,
    });
  };
};
