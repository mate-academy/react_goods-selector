// import { ReactComponent } from '*.svg';
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

const preparedGoods = goodsFromServer.map((item, index) => (
  {
    id: index,
    name: item,
  }
));

class App extends React.Component {
  state = {
    selectedGoods: [],
  }

  toggleGood = ({ name, id }) => {
    this.setState((state) => {
      if (!state.selectedGoods.includes(name)) {
        return {
          selectedGoods: [...state.selectedGoods, name],
        };
      }

      const goodIndex = state.selectedGoods.indexOf(name);

      state.selectedGoods.splice(goodIndex, 1);

      return {
        selectedGoods: state.selectedGoods,
      };
    });
  }

  clearSelect = () => {
    this.setState({
      selectedGoods: [],
    });
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>
          {`Selected good: - ${selectedGoods.join(', ')}`}
        </h1>
        <button
          type="button"
          onClick={this.clearSelect}
        >
          Clear
        </button>
        <GoodList
          preparedGoods={preparedGoods}
          toggleGood={this.toggleGood}
        />
      </div>
    );
  }
}

export default App;
