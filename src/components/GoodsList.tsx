import React from 'react';

interface Props {
  good: string;
  addedToCart: string[]
}

export const GoodsList: React.FC<Props> = (props) => {
  const { good, addedToCart } = props;

  return (
    <h3 key={good} className={!addedToCart.includes(good) ? ('text-primary') : ('text-light bg-dark')}>{good}</h3>
  );
};
