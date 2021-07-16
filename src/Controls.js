import React from 'react';
import PropTypes from 'prop-types';

export const Clear = props => (
  <button
    type="button"
    className="clear"
    onClick={props.clear.bind(props.app)}
  >
    X
  </button>
);

export const Remove = props => (
  <button
    type="button"
    onClick={props.remove.bind(props.app)}
  >
    Remove
  </button>
);

export const Add = props => (
  <button
    type="button"
    onClick={props.add.bind(props.app)}
  >
    Add
  </button>
);

const appType = PropTypes.shape({
  selectedGoods: PropTypes.arrayOf(PropTypes.string).isRequired,
});

Add.propTypes = {
  add: PropTypes.func.isRequired,
  app: appType.isRequired,
};

Remove.propTypes = {
  remove: PropTypes.func.isRequired,
  app: appType.isRequired,
};

Clear.propTypes = {
  clear: PropTypes.func.isRequired,
  app: appType.isRequired,
};
