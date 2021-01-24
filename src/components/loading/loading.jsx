import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
  return (
    <div className='text-center'>
      <Spinner
        className='mt-3'
        style={{ height: 70, width: 70 }}
        animation='border'
        variant='primary'
      />
      <p>Загрузка пользователей...</p>
    </div>
  );
};

export default Loading;
