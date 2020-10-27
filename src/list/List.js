import React from 'react';
import { ListShape } from '../shapes/ListShape';
import './List.scss';

export const List = ({ items, selected, clicker }) => (
  <ul className="App__list list">
    {items.map(item => (
      <li key={item.id} className="list__item item">
        <button
          type="button"
          className={selected === item.name
            ? 'item__selected item__button'
            : 'item__button'}
          onClick={event => clicker(event)}
        >
          {item.name}
        </button>
      </li>
    ))
    }
  </ul>
);

List.propTypes = ListShape;
