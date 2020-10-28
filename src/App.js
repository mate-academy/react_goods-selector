
import React, { PureComponent } from 'react';
import './App.scss';
import 'semantic-ui-css/semantic.min.css';
import GoodsList from './Components/GoodsList';

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
    name: item,
    id: index,
  }
));

class App extends PureComponent {
  state = {
    selectedGoods: [],
  }

  SelectGoodsHandler = ({ name, id }) => {
    this.setState((state) => {
      if (!state.selectedGoods.includes(` ${name}`)) {
        return {
          selectedGoods: [...state.selectedGoods, ` ${name}`],
        };
      }

      const goodIndex = state.selectedGoods.indexOf(` ${name}`);

      state.selectedGoods.splice(goodIndex, 1);

      return {
        selectedGoods: state.selectedGoods,
      };
    });
  }

  ClearGoodsHandler = () => {
    this.setState(
      {
        selectedGoods: [],
      },
    );
  }

  render() {
    return (
      <div className="app">
        <h1>
          Selected goods:
          {this.state.selectedGoods}
        </h1>
        <GoodsList
          preparedGoods={preparedGoods}
          clickHandler={this.SelectGoodsHandler}
        />
        <button
          className="fluid ui red button"
          onClick={this.ClearGoodsHandler}
          type="button"
        >
          Clear All
        </button>
      </div>
    );
  }
}

export default App;

/* this.setState(prevState => {
  if (!prevState.selectedGoods.includes(` ${name}`)) {
    return ({
      selectedGoods: [...prevState.selectedGoods, ` ${name}`],
    });
  }

  const currIndex = this.state.selectedGoods.indexOf(` ${name}`);

  return ({
    selectedGoods: this.state.selectedGoods.splice(currIndex, 1),
  });
});
 */
