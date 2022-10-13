import React, { useState } from 'react';
import { RiShoppingCart2Line, RiHeart3Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import style from './Basket.module.scss';
import BasketPage from './BasketPage';

const Basket = () => {
  const isShow = useState(true);

  return (
    <div className={style.basket_main}>
      <Link to="/basket" className={style.heart}>
        <RiHeart3Line />
        {isShow && <BasketPage />}
      </Link>
      <Link className={style.shopping} to="/">
        <RiShoppingCart2Line />
      </Link>
    </div>
  );
};

export default Basket;
