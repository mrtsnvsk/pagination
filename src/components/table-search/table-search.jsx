import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as action from '../../redux/actions';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const TableSearch = ({ onSearchUsers }) => {
  const [term, setTerm] = useState('');

  return (
    <InputGroup className='mb-3 mt-3'>
      <InputGroup.Prepend>
        <Button onClick={() => onSearchUsers(term)} variant='outline-secondary'>
          Поиск
        </Button>
      </InputGroup.Prepend>
      <FormControl
        onChange={(e) => setTerm(e.target.value)}
        placeholder='Введите данные'
        aria-describedby='basic-addon1'
      />
    </InputGroup>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchUsers: (term) => dispatch(action.onSearchUsers(term)),
  };
};

export default connect(null, mapDispatchToProps)(TableSearch);
