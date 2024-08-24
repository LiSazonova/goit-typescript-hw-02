import React from 'react';
import s from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  onClick: () => void;
}
const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => (
  <div className={s.load__wrapper}>
    <button className={s.load__btn} onClick={onClick}>
      Load more
    </button>
  </div>
);

export default LoadMoreBtn;
