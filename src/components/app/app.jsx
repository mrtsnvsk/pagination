import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as action from '../../redux/actions';
import TableComponent from '../table-component/table-component';
import Loading from '../loading/loading';
import './app.css';
import TableSearch from '../table-search/table-search';

const App = ({ users, takeUsers }) => {
  useEffect(() => {
    takeUsers();
  }, [takeUsers]);

  return (
    <div className='app'>
      {users ? (
        <>
          <TableSearch />
          <TableComponent />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    takeUsers: () => dispatch(action.takeUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
