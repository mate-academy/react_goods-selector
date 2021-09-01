import React from 'react';

import './Button.scss';

type Props = {
  buttonName: string;
  action: () => void;
  disabled: boolean;
};

export const Button: React.FC<Props> = ({ buttonName, action, disabled }) => {
  return (
    <button
      type="button"
      className="button"
      onClick={action}
      disabled={disabled}
    >
      {buttonName}
    </button>
  );
};
