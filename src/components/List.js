import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './Item';
import { ItemFromServerShape } from '../shapes/ItemFromServerShape';

export const List = ({ data, stateValue, callback }) => (
  <ul className="list-group list-group-horizontal list">
    {
      data.map(item => (
        <li key={item.id} className="list-group-item item">
          <Item
            stateValue={stateValue}
            callback={callback}
            item={item}
          />
        </li>
      ))
    }
  </ul>
);

List.propTypes = {
  data: PropTypes.arrayOf(ItemFromServerShape).isRequired,
  stateValue: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  callback: PropTypes.func.isRequired,
};
