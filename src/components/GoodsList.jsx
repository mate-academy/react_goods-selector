import React from 'react';
import PropTypes, { string } from 'prop-types';
import { Good } from './Good';
import classNames from 'classnames';

export const GoodsList = ({ goods, addGood, removeGood, selectedItem }) => (
  <ul className="list">
    {goods.map(item => (
      <li
        key={item}
        className={
          classNames('list__item', { highlight: selectedItem.includes(item) })
        }
      >
        <Good
          good={item}
          addGood={addGood}
          removeGood={removeGood}
        />
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  selectedItem: PropTypes.arrayOf(string).isRequired,
  goods: PropTypes.arrayOf(string).isRequired,
  addGood: PropTypes.func.isRequired,
  removeGood: PropTypes.func.isRequired,
};
