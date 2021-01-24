import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import * as action from '../../redux/actions';
import { connect } from 'react-redux';

const PaginationBar = ({
  postsPerPage,
  totalPosts,
  setCurrentUser,
  currentPage,
}) => {
  let items = [];

  for (
    let number = 1;
    number <= Math.ceil(totalPosts / postsPerPage);
    number++
  ) {
    items.push(
      <Pagination.Item
        onClick={() => setCurrentUser(number)}
        key={number}
        active={currentPage === number}
      >
        {number}
      </Pagination.Item>
    );
  }

  return <Pagination>{items}</Pagination>;
};

const mapStateToProps = (state) => {
  return {
    currentPage: state.currentPage,
    postsPerPage: state.postsPerPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (pageNumber) => dispatch(action.setCurrentUser(pageNumber)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaginationBar);
