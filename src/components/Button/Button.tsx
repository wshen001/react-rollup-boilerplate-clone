import React, { FC } from 'react';
import './styles.css';

export interface IButtonProps {
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  text?: string;
}

export const Button: FC<IButtonProps> = ({ onClick, disabled, className, text }) => (
  <button type="button" onClick={onClick} disabled={disabled}>
    {text} Yes, Built Successful!
  </button>
);
