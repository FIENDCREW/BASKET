import React, { FC } from 'react';
import { IUsers } from '../../../interfaces/IUsers';
import Pagination from '../../../shared/Pagination';
import style from '../UsersPage.module.scss';
import UserCard from './UserCard';

interface IProps {
  usersDataAttr: IUsers[];
}

const UsersPageComponent: FC<IProps> = ({ usersDataAttr }) => {
  return (
    <div>
      <p>Наушники:</p>
      <div className={style.user_list}>
        {usersDataAttr.length ? (
          usersDataAttr.map((user) => {
            const { id, title, price, rate, img } = user;
            return (
              <React.Fragment key={`UserId:${id}`}>
                <UserCard id={id} title={title} price={price} img={img} rate={rate} />
              </React.Fragment>
            );
          })
        ) : (
          <div>Пользователи не найдены.</div>
        )}

        <Pagination limit={4} itemsAmount={usersDataAttr.length} />
      </div>
    </div>
  );
};

export default UsersPageComponent;
