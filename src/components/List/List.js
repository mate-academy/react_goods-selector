import React from 'react';
import './List.css';
import { ListShape } from './ListShape';

export const List = ({ items, selected, clicker }) => (
  <ul className="App__list">
    {items.map(item => (
      <li key={item.id}>
        <button
          type="button"
          className={selected === item.name
            ? 'App__selected App__button'
            : 'App__button'}
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
