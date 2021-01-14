import React from 'react';
import PropTypes from 'prop-types';

export class Good extends React.Component {
  state = {
    isSelected: false,
  };

  clickHandler = () => {
    this.setState(prevState => ({ isSelected: !prevState.isSelected }));
    this.props.setGood(this.props.word);
  };

  render() {
    return (
      <>
        <li className={this.props.word === this.props.selectedGood
          ? 'selected' : null}
        >
          {this.props.word}
        </li>
        <button
          type="button"
          onClick={this.clickHandler}
        >
          Select
        </button>
      </>
    );
  }
}

Good.propTypes = {
  setGood: PropTypes.func.isRequired,
  word: PropTypes.string.isRequired,
  selectedGood: PropTypes.string.isRequired,
};
