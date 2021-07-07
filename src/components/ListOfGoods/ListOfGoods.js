import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Good } from '../Good/Good';

export const ListOfGoods = ({ goods, selected, clickHandler }) => (
  <ul className="App__list">
    {goods.map((good) => {
      const nameClass = cn(
        'good__button',
        {
          'good__button--active': selected.includes(good),
        },
      );

      return (
        <Good
          key={good}
          nameOfClass={nameClass}
          nameOfGood={good}
          click={
            () => {
              clickHandler(good);
            }
          }
        />
      );
    })}
  </ul>
);

ListOfGoods.propTypes = {
  goods: PropTypes
    .arrayOf(PropTypes.oneOfType([PropTypes.string])).isRequired,
  clickHandler: PropTypes.func.isRequired,
  selected: PropTypes
    .arrayOf(PropTypes.oneOfType([PropTypes.string])).isRequired,
};
