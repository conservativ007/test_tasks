import React, { useState } from 'react';

import { useAppDispatch } from '../../hooks/redux';
import { IUser, userSlice } from '../../store/reducers/UserSlice';
import { useNavigate } from 'react-router-dom';

import './index.scss';

export const Form = () => {
  const [userData, setUserData] = useState<string>('test test test');
  const [city, setCity] = useState<string>('city');

  const dispatch = useAppDispatch();
  const { setUser, setShowForm } = userSlice.actions;

  const navigate = useNavigate();

  const handleClick = () => {
    if (userData.length === 0 || city.length === 0) {
      console.log('you must enter firstname and secondname');
      return;
    }

    let newUser: IUser = {
      userData: userData.trim(),
      city: city.trim(),
    };

    dispatch(setUser(newUser));
    dispatch(setShowForm(false));
    navigate('/game');
  };

  return (
    <div className="form-container">
      <input
        value={userData}
        onChange={(e) => setUserData(e.target.value)}
        type="text"
        placeholder="ФИО"
      />
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        type="text"
        placeholder="город"
      />
      <p onClick={handleClick}>войти</p>
    </div>
  );
};
