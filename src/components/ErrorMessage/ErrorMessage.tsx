import React from 'react';
import s from './ErrorMessage.module.css';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div>
    <p className={s.error_message}>{message}</p>
  </div>
);

export default ErrorMessage;
