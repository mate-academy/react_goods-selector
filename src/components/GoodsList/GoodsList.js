import React from 'react';
import PropTypes from 'prop-types';
import { Good } from '../Good/Good';

import './GoodsList.scss';
import { GoodShape } from '../../shapes/GoodShape';

export const GoodsList = ({ goodsList, selectGood }) => (
  <ul className="GoodsList">
    {goodsList.map(({ key, name, selected }) => (
      <li key={key} className="GoodsList__item Good">
        <Good
          goodName={name}
          selected={selected}
          selectGood={selectGood}
        />
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  goodsList: PropTypes.arrayOf(GoodShape).isRequired,
  selectGood: PropTypes.func.isRequired,
};
