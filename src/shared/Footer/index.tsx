import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ImVk, ImTelegram, ImWhatsapp } from 'react-icons/im';
import { AiOutlineGlobal } from 'react-icons/ai';
import footerConfig from './footerConfig';
import style from './Footer.module.scss';

const Footer = () => {
  const { pathname } = useLocation();
  return (
    <div className={style.page_footer}>
      <div className={style.footer_menu}>
        <div className={style.footer_text}>QPICK</div>
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
            <AiOutlineGlobal />
            <p>Рус</p>
            <p>Eng</p>
          </div>
        </div>
        <div>
          <a href="https://vk.com/">
            <ImVk className={style.ImVk} />
          </a>
          <a href="https://web.telegram.org/">
            <ImTelegram className={style.ImTelegram} />
          </a>
          <a href="https://www.whatsapp.com/">
            <ImWhatsapp className={style.ImWhatsapp} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
