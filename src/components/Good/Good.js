import React from 'react';
import ClassNames from 'classnames';
import { GoodShape } from '../../shapes/GoodShape';

export const Good = ({ good, selectTodo, selected }) => (
  <div className="good">
    <button
      type="button"
      className={
        ClassNames('good__item', { selected: selected.includes(good.title) })
      }
      onClick={event => selectTodo(good.id, event)}
    >
      {good.title}
    </button>
  </div>
);

Good.propTypes = GoodShape;
