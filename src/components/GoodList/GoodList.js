import React from 'react';
import { GoodListProps } from '../../props/GoodListProps';
import { Good } from '../Good';

export const GoodList = ({ goods, buttonClick, selectedGoods }) => (
  <section className="row row-cols-2 row-cols-md-4">
    {goods.map(good => (
      <Good
        name={good.name}
        buttonClick={buttonClick}
        selectedGoods={selectedGoods}
        key={good.id}
      />
    ))}
  </section>
);

GoodList.propTypes = GoodListProps;
