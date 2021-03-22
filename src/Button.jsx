import React from 'react';
import './App.scss';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export class Button extends React.Component {
  render() {
    const { callback, text } = this.props;

    return (
      <button
        type="button"
        onClick={callback}
      >
        {text}
      </button>
    );
  }
}

Button.propTypes = {
  callback: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
