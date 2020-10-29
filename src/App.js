
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
      if (!state.selectedGoods.includes(name)) {
        return {
          selectedGoods: [...state.selectedGoods, name],
        };
      }

      const filteredGoods = [...state.selectedGoods]
        .filter(good => good !== name);

      return {
        selectedGoods: filteredGoods,
      };
    });
  }

  ClearGoodsHandler = () => {
    this.setState({
      selectedGoods: [],
    });
  }

  render() {
    return (
      <div className="app">
        <h1>
          Selected goods:
          {this.state.selectedGoods.join(', ')}
        </h1>
        <GoodsList
          preparedGoods={preparedGoods}
          clickHandler={this.SelectGoodsHandler}
        />
        <button
          className="fluid ui red button"
          onClick={this.ClearGoodsHandler}
          type="button"
          tabIndex="-1"
        >
          Clear All
        </button>
      </div>
    );
  }
}

export default App;
