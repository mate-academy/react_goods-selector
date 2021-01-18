import React from 'react';
import './Good.scss';
import PropTypes from 'prop-types';
/* eslint-disable react/prefer-stateless-function */

export class Good extends React.Component {
  static propTypes = {
    good: PropTypes.string.isRequired,
    setSelectedGood: PropTypes.func.isRequired,
    selectedGood: PropTypes.func.isRequired,
    removeFromSelected: PropTypes.func.isRequired,
  }

  render() {
    const {
      good,
      setSelectedGood,
      selectedGood,
      removeFromSelected,
    } = this.props;

    return (
      <li
        className={`list-item box is-flex is-justify-content-space-between
          ${selectedGood.includes(good) ? 'selected' : ''}`}
      >
        <p className="mx-2">
          {good}
        </p>

        <div>
          <button
            type="button"
            className={`button is-small is-success is-outlined mx-1
              ${selectedGood.includes(good) ? 'disabled' : ''}`}
            onClick={() => setSelectedGood(good)}
          >
            Add
          </button>

          <button
            type="button"
            className="button is-small is-danger is-outlined"
            onClick={() => removeFromSelected(good)}
          >
            Remove
          </button>
        </div>
      </li>
    );
  }
}
