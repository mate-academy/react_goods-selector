import React from 'react';
import { GoodsListPropTypes } from '../propTypeShapes/goodsList';
import { ListItem } from './ListItem';

export function GoodsList({ goodsList, selectedGoods, selectItem }) {
  return (
    <ul className="list-of-goods">
      {goodsList.map(({ name, id }) => (
        <ListItem
          name={name}
          key={id}
          selectedGoods={selectedGoods}
          selectItem={selectItem}
        />
      ))}
    </ul>
  );
}

GoodsList.propTypes = GoodsListPropTypes;
