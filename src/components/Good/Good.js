import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import './Good.scss';

import { GoodShape } from '../shapes/GoodShape';

export const Good = ({ good, selectedGoods, toggleGood }) => {
  const { name } = good;

  const goodClasses = ClassNames({
    good: true,
    'good--selected': selectedGoods.includes(name),
  });

  return (
    <div className={goodClasses}>
      <p>{name}</p>
      <button
        type="button"
        className="good__button button"
        onClick={toggleGood}
      >
        {goodClasses.includes('good--selected') ? 'Remove' : 'Select'}
      </button>
    </div>
  );
};

Good.propTypes = PropTypes.shape(GoodShape).isRequired;
