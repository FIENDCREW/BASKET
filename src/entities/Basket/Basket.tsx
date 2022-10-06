import React from 'react';
import { RiShoppingCart2Line, RiHeart3Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import style from './Basket.module.scss';

const Basket = () => {
  return (
    <div className={style.basket_main}>
      <Link to="/" className={style.heart}>
        <RiHeart3Line />
      </Link>
      <Link className={style.shopping} to="/">
        <RiShoppingCart2Line />
      </Link>
    </div>
  );
};

export default Basket;
