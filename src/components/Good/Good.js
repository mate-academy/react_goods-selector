import React from 'react';
import { GoodProps } from '../../props/GoodProps';

export const Good = ({ good, buttonClick, selected }) => (
  <div className="card card-body col mb-4">
    <p className="card-text">{good}</p>

    <button
      className="btn-primary"
      type="button"
      onClick={({ target }) => {
        buttonClick(good, target);
      }}
    >
      {
        selected.includes(good)
          ? 'Remove'
          : 'Add'
      }
    </button>
  </div>
);

Good.propTypes = GoodProps;
