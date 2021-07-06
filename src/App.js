import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss';
import { GoodList } from './components/GoodList/GoodList';

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

const preparedGoods = goodsFromServer.map((good, index) => ({
  name: good,
  id: index,
}));

class App extends React.Component {
  state = {
    selectedGoods: [],
  }

  resetState = () => {
    this.setState({
      selectedGoods: [],
    });
  }

  buttonClick = (name) => {
    if (this.state.selectedGoods.includes(name)) {
      this.setState(({ selectedGoods }) => ({
        selectedGoods: selectedGoods
          .filter(selectedGood => selectedGood !== name),
      }));
    } else {
      this.setState(({ selectedGoods }) => ({
        selectedGoods: [...selectedGoods, name],
      }));
    }
  }

  render() {
    const {
      state: { selectedGoods },
      resetState,
      buttonClick,
    } = this;

    return (
      <div className="App">
        <h1>
          Selected good:
          {' '}
          {selectedGoods.join(', ')}
        </h1>

        <button
          className="mb-3 btn-primary"
          type="button"
          onClick={resetState}
        >
          X
        </button>

        <GoodList
          goods={preparedGoods}
          buttonClick={buttonClick}
          selectedGoods={selectedGoods}
        />
      </div>
    );
  }
}

export default App;
