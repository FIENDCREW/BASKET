import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import footerConfig from './footerConfig';
import style from './Footer.module.scss';

const Footer = () => {
  const { pathname } = useLocation();
  return (
    <div className={style.page_footer}>
      <div className={style.footer_menu}>
        <div>
          <img src="" alt="LOGO" />
        </div>
        <div>
          <ul className={style.sidebar_menu}>
            {footerConfig.map((menuItem) => {
              const isActiveClassName = pathname.includes(menuItem.path) ? style.active : '';
              return (
                <Link
                  key={menuItem.id}
                  to={menuItem.path}
                  className={`${isActiveClassName} ${style.sidebar_menu_item}`}>
                  <li>{menuItem.name}</li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div>
          <Link to="/">
            <p>Условия сервиса</p>
          </Link>
          <div>
            <p>Каз</p>
            <p>Рус</p>
            <p>Eng</p>
          </div>
        </div>
        <div>VK, Telegram, WthasApp</div>
      </div>
    </div>
  );
};

export default Footer;
