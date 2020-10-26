import React from 'react';
import './App.scss';

import { GoodList } from './components/GoodList';

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

const preparedGoods = goodsFromServer.map((good, id) => ({
  name: good,
  id,
}));

class App extends React.Component {
  state = {
    selectedGoods: [],
  }

  toggleGood = (event) => {
    const goodName = event.target.previousElementSibling.textContent;
    const buttonName = event.target.textContent;
    const { selectedGoods } = this.state;
    const updatedSelectedGoods = [...selectedGoods];

    if (buttonName === 'Select') {
      if (!updatedSelectedGoods.includes(goodName)) {
        updatedSelectedGoods.push(goodName);
      }
    } else {
      updatedSelectedGoods.splice(updatedSelectedGoods.indexOf(goodName), 1);
    }

    this.setState({
      selectedGoods: [...updatedSelectedGoods],
    });
  };

  clearSelected = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="app">
        <h1 className="app__header">
          {`Selected good: - ${selectedGoods.join(', ')}`}
        </h1>
        <button
          type="button"
          className="app__button button"
          onClick={this.clearSelected}
        >
          X
        </button>
        <GoodList
          goods={preparedGoods}
          selectedGoods={selectedGoods}
          toggleGood={this.toggleGood}
        />
      </div>
    );
  }
}

export default App;
