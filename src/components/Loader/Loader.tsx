import { Oval } from 'react-loader-spinner';
import s from './Loader.module.css';
import React from 'react';

const Loader: React.FC = () => (
  <div className={s.loader__wrapper}>
    <Oval
      height={80}
      width={80}
      color="#61D6FB"
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#007498"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  </div>
);

export default Loader;
