import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import PaginationBar from '../pagination-bar/pagination-bar';
import UserInfo from '../user-info/user-info';
import { connect } from 'react-redux';

const TableComponent = ({ searchUsers, currentPage, postsPerPage }) => {
  const [details, setDetails] = useState();
  const [sortField, setSortField] = useState('id');
  const [sort, setSort] = useState('asc');
  const [sortIcon, setSortIcon] = useState('▲');

  const byField = (field) => {
    if (sort === 'asc') {
      return (a, b) => (a[field] > b[field] ? 1 : -1);
    }
    if (sort === 'desc') {
      return (a, b) => (a[field] < b[field] ? 1 : -1);
    }
  };

  const sortItems = (e) => {
    setSortField(e.target.getAttribute('name'));
    sort === 'desc' ? setSort('asc') : setSort('desc');
    sortIcon === '▲' ? setSortIcon('▼') : setSortIcon('▲');
  };

  // get current users
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = searchUsers
    .sort((a, b) => (a['id'] > b['id'] ? 1 : -1))
    .slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div>
      <Table bordered hover responsive='sm'>
        <thead>
          <tr onClick={sortItems}>
            <th name='id' size='sm'>
              ID {sortField === 'id' ? sortIcon : null}
            </th>
            <th name='firstName'>
              First Name {sortField === 'firstName' ? sortIcon : null}
            </th>
            <th name='lastName'>
              Last Name {sortField === 'lastName' ? sortIcon : null}
            </th>
            <th name='email'>
              Email {sortField === 'email' ? sortIcon : null}
            </th>
            <th name='phone'>
              Phone {sortField === 'phone' ? sortIcon : null}
            </th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.sort(byField(sortField)).map((el, index) => {
            return (
              <tr onClick={() => setDetails(el)} key={index}>
                <td>{el.id}</td>
                <td>{el.firstName}</td>
                <td>{el.lastName}</td>
                <td>{el.email}</td>
                <td>{el.phone}</td>
              </tr>
            );
          })}
        </tbody>
        <tbody></tbody>
      </Table>
      {details && <UserInfo details={details} />}
      <PaginationBar totalPosts={searchUsers.length} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentPage: state.currentPage,
    postsPerPage: state.postsPerPage,
    searchUsers: state.searchUsers,
  };
};

export default connect(mapStateToProps)(TableComponent);
