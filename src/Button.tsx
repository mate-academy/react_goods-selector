import React from 'react';
import './Button.scss';

type Props = {
  action: () => void;
  classes: string;
  text: string;
};

export const Button: React.FC<Props> = (props) => {
  return (
    <button
      type="button"
      className={props.classes}
      onClick={props.action}
    >
      {props.text}
    </button>
  );
};
