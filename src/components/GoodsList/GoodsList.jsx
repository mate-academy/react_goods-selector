import React from 'react';
import PropTypes from 'prop-types';
import { Good } from '../Good/Good';

export class GoodsList extends React.Component {
  static propTypes = {
    goods: PropTypes.arrayOf(PropTypes.string),
    setSelectedGood: PropTypes.func.isRequired,
    selectedGood: PropTypes.func.isRequired,
    removeFromSelected: PropTypes.func.isRequired,
  }

  static defaultProps = {
    goods: [],
  }

  render() {
    const {
      goods,
      setSelectedGood,
      selectedGood,
      removeFromSelected,
    } = this.props;

    return (

      goods.map(good => (
        <Good
          key={good}
          good={good}
          setSelectedGood={setSelectedGood}
          selectedGood={selectedGood}
          removeFromSelected={removeFromSelected}
        />
      ))
    );
  }
}
