import React from 'react';
import PropTypes from 'prop-types';
import { Good } from '../Good/Good';

const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export class GoodList extends React.Component {
  state = {
    selectedGood: this.props.selectedGood,
  };

  stateUtize() {
    return this.state.selectedGood;
  }

  render() {
    return (
      <>
        {goodsFromServer.map(good => (
          <div key={good}>
            <Good
              word={good}
              setGood={this.props.setGood}
              selectedGood={this.props.selectedGood}
            />
          </div>
        ))}
      </>
    );
  }
}

GoodList.propTypes = {
  setGood: PropTypes.func.isRequired,
  selectedGood: PropTypes.string.isRequired,
};
