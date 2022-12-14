import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import mockedUsers from '../../mocks/mockedUsers';
import UsersPageComponent from './components/UsersPageComponent';

const UsersPage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/') {
      navigate('/users_page');
    }
  }, [pathname, navigate]);

  return !mockedUsers ? <div>Загрузка...</div> : <UsersPageComponent usersDataAttr={mockedUsers} />;
};

export default UsersPage;
