import React from 'react';
import { GoodShape } from '../../shapes/GoodShape';

export const Good = ({ good, selectTodo, deleteTodo, selected }) => (
  <div className="good">
    <button
      type="button"
      className={selected.includes(good.title)
        ? 'good__item selected' : 'good__item'}
      onClick={() => selectTodo(good.id)}
      onContextMenu={deleteTodo}
    >
      {good.title}
    </button>
  </div>
);

Good.propTypes = GoodShape;
