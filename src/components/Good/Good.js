import React from 'react';
import classNames from 'classnames';

import { GoodProps } from '../../props/GoodProps';

export const Good = ({ name, buttonClick, selectedGoods }) => {
  const cardCalass = classNames('card', 'card-body', 'col', 'mb-4', {
    'border-primary': selectedGoods.includes(name),
  });

  return (
    <div className={cardCalass}>
      <p className="card-text">{name}</p>

      <button
        className="btn-primary"
        type="button"
        onClick={() => {
          buttonClick(name);
        }}
      >
        {
          selectedGoods.includes(name)
            ? 'Remove'
            : 'Add'
        }
      </button>
    </div>
  );
};

Good.propTypes = GoodProps;
