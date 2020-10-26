import React from 'react';
import PropTypes from 'prop-types';
import './GoodList.scss';

import { Good } from '../Good';
import { GoodListShape } from '../shapes/GoodListShape';

export const GoodList = ({ goods, selectedGoods, toggleGood }) => (
  <div className="good-list">
    {goods.map(good => (
      <Good
        good={good}
        selectedGoods={selectedGoods}
        toggleGood={toggleGood}
        key={good.id}
      />
    ))}
  </div>
);

GoodList.propTypes = PropTypes.shape(GoodListShape).isRequired;
