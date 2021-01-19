import React from 'react';
import PropTypes from 'prop-types';

export function Good({ good, goodSelected }) {
  return (
    <>
      <p id="good">{good}</p>
      <button
        type="button"
        className="goods__select"
        onClick={(event) => {
          goodSelected(event, good);
        }}
      >
        Select
      </button>
    </>
  );
}

Good.propTypes = {
  good: PropTypes.string.isRequired,
  goodSelected: PropTypes.func.isRequired,
};
