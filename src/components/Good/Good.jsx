import React from 'react';
import PropTypes from 'prop-types';

export function Good({ good, goodSelected }) {
  return (
    <>
      <p>{good}</p>
      <button
        type="button"
        className="goods__select"
        onClick={(event) => {
          goodSelected(event, good);
          // передача кастомного параметра обратно в функцию, полученную пропсом
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
