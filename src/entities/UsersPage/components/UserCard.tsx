import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Buttons from '../../../shared/Buttons/Buttons';
import style from '../UsersPage.module.scss';

interface IProps {
  id: number;
  img: string;
  title: string;
  price: string | number;
  rate: string | number;
}

const UserCard: FC<IProps> = ({ id, img, title, price, rate }) => {
  return (
    <div className={style.user_card}>
      <Link to={`${id}`}>
        <p>{img}</p>
      </Link>
      <div className={style.card_main}>
        <div className={style.card_info}>
          <p>{title}</p>
          <p>{price}</p>
        </div>
        <div className={style.card_btn}>
          <p>{rate}</p>
          <Buttons />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
