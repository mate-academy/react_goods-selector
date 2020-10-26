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
  good,
  id: index,
}));

class App extends React.Component {
  state = {
    selectedGoods: [],
  }

  resetState = ({ target }) => {
    const goods = [...target.nextElementSibling.children];

    goods.forEach((good) => {
      if (good.classList.contains('border-primary')) {
        good.classList.remove('border-primary');
      }
    });

    this.setState({
      selectedGoods: [],
    });
  }

  buttonClick = (good, target) => {
    if (target.textContent === 'Remove') {
      target.parentElement.classList.remove('border-primary');

      this.setState(({ selectedGoods }) => ({
        selectedGoods: selectedGoods
          .filter(selectedGood => selectedGood !== good),
      }));
    } else {
      target.parentElement.classList.add('border-primary');

      this.setState(({ selectedGoods }) => ({
        selectedGoods: [...selectedGoods, good],
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
          selected={selectedGoods}
        />
      </div>
    );
  }
}

export default App;
