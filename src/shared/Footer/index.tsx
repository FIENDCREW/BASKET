import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ImVk, ImTelegram, ImWhatsapp } from 'react-icons/im';
import { AiOutlineGlobal } from 'react-icons/ai';
import footerConfig from './footerConfig';
import style from './Footer.module.scss';

const Footer = () => {
  const { pathname } = useLocation();
  return (
    <div className={style.footer_blok}>
      <div className={style.footer_menu}>
        <h2 className={style.footer_text}>QPICK</h2>
        <div className={style.footer_column_one}>
          <ul className={style.footer_column_ul}>
            {footerConfig.map((menuItem) => {
              const isActiveClassName = pathname.includes(menuItem.path) ? style.active : '';
              return (
                <Link
                  key={menuItem.id}
                  to={menuItem.path}
                  className={`${isActiveClassName} ${style.footer_column_li}`}>
                  <li>{menuItem.name}</li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div className={style.footer_column_two}>
          <div>
            <Link to="/terms_of_service" className={style.footer_column_li}>
              Условия сервиса
            </Link>
          </div>
          <div className={style.fooetr_column_two_lan}>
            <AiOutlineGlobal className={style.AiOutlineGlobal} />
            <p className={style.p}>Рус</p>
            <p>Eng</p>
          </div>
        </div>
        <div className={style.fooetr_column_three}>
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
