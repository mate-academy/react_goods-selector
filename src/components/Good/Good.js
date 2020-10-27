import React from 'react';
import PropTypes from 'prop-types';

const Good = (props) => {
  const { addItem, changeButtonName, item } = props;

  return (
    <li
      className={
        changeButtonName(item) === 'add'
          ? 'app__good'
          : 'app__good app__good--selected'
      }
    >
      {item}

      <button
        className="app__button app__button--dark"
        type="button"
        onClick={event => addItem(event, item)}
      >
        {changeButtonName(item)}
      </button>
    </li>
  );
};

Good.propTypes = {
  item: PropTypes.string.isRequired,
  addItem: PropTypes.func.isRequired,
  changeButtonName: PropTypes.func.isRequired,
};

export default Good;
