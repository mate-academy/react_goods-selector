import React from 'react';
import PropTypes from 'prop-types';

export const Header = ({ item, callback }) => (
  <div className="wrapper">
    <h1>
      {`Selected good: - `}
      <span>
        {item.join(' ')}
      </span>
    </h1>

    <button
      type="button"
      onClick={callback}
      className="btn btn-danger"
    >
      X
    </button>
  </div>
);

Header.propTypes = {
  item: PropTypes.arrayOf(PropTypes.string).isRequired,
  callback: PropTypes.func.isRequired,
};
