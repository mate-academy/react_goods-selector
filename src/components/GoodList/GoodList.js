import React from 'react';
import { GoodListProps } from '../../props/GoodListProps';
import { Good } from '../Good';

export const GoodList = ({ goods, buttonClick, selected }) => (
  <section className="row row-cols-2 row-cols-md-4">
    {goods.map(({ good, id }) => (
      <Good
        good={good}
        buttonClick={buttonClick}
        selected={selected}
        key={id}
      />
    ))}
  </section>
);

GoodList.propTypes = GoodListProps;
