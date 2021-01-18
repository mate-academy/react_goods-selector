import React from 'react';
import PropTypes from 'prop-types';

export const Good = ({ good, addGood, removeGood }) => (
  <>
    <span className="list__item-name">{good}</span>
    <div>
      <button
        type="button"
        className="list__button list__button_green"
        onClick={() => addGood(good)}
      >
        add
      </button>
      <button
        type="button"
        className="list__button list__button_red"
        onClick={() => removeGood(good)}
      >
        remove
      </button>
    </div>
  </>
);

Good.propTypes = {
  good: PropTypes.string.isRequired,
  addGood: PropTypes.func.isRequired,
  removeGood: PropTypes.func.isRequired,
};
