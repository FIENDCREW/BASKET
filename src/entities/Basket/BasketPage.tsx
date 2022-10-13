import React from 'react';
import style from './Basket.module.scss';

const BasketPage = () => {
  return (
    <div className={style.basket_page}>
      <p>Корзина</p>
      <div className={style.basket_container}>
        <div className={style.basket_left}>
          <div>
            <div>товар</div>
            <div>нейм</div>
          </div>
          <div>
            <div>count</div>
            <div>mouch</div>
          </div>
        </div>
        <div className={style.basket_right}>
          <div>
            <p>itigo</p>
            <p>sum</p>
          </div>
          <div>
            <button type="button">Перейти к оформлению</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
