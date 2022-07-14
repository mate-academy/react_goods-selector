import React from 'react';

type Props = {
  clickCallback: () => void;
  title: string;
};

export const Button: React.FC<Props> = ({ clickCallback, title }) => (
  <button
    type="button"
    onClick={clickCallback}
    className="button"
  >
    {title}
  </button>
);
