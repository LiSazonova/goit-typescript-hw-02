import React from 'react';
import s from './Footer.module.css';

const Footer : React.FC = () => {
  return (
    <div className={s.footer}>
      <p className={s.footer_text}>&copy; All right reserved! 2024</p>
    </div>
  );
};

export default Footer;
