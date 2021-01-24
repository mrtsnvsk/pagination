import React from 'react';

const UserInfo = ({ details }) => {
  return (
    <div>
      <p>
        Выбран пользователь:
        <b>{`${details.firstName} ${details.lastName}`}</b>
      </p>
      Описание:
      <p>
        <textarea
          readOnly={true}
          value={details.description}
          style={{ width: 250, height: 100 }}
        />
      </p>
      <p>
        Адрес проживания: <b>{details.address.streetAddress}</b>
      </p>
      <p>
        Город: <b>{details.address.city}</b>
      </p>
      <p>
        Провинция/штат: <b>{details.address.state}</b>
      </p>
      <p>
        Индекс: <b>{details.address.zip}</b>
      </p>
    </div>
  );
};

export default UserInfo;
