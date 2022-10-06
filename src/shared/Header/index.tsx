import React from 'react';
import Basket from '../../entities/Basket/Basket';
import style from './Header.module.scss';

const Header = () => {
  return (
    <div className={style.page_header}>
      <div className={style.header_text}>QPICK</div>
      <Basket />
    </div>
  );
};

export default Header;
