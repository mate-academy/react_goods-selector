import React from 'react';
import PropTypes from 'prop-types';
import { prepearedGoodsShape } from '../shapes/prepearedGoodsShape';
import { SelectButton } from '../SelectButton';

import './SelectButtonList.scss';

export const SelectButtonList = ({ handleClick, goods, selectedGoods }) => (
  <div className="SelectButtonList">
    {goods.map((good) => {
      const isSelected = selectedGoods.includes(good.name);

      return (
        <SelectButton
          key={good.id}
          handleClick={handleClick}
          goodName={good.name}
          isSelected={isSelected}
        />
      );
    })}
  </div>
);

SelectButtonList.propTypes = {
  handleClick: PropTypes.func.isRequired,
  goods: PropTypes.arrayOf(prepearedGoodsShape).isRequired,
  selectedGoods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
