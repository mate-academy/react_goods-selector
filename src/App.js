import React from 'react';

import { SelectButtonList } from './components/SelectButtonList';
import { SelectedGoods } from './components/SelectedGoods';

import './App.scss';

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

const prepearedGoods = goodsFromServer.map((good, index) => (
  {
    name: good,
    id: index,
  }
));

class App extends React.Component {
  state = {
    selectedGoods: [],
  }

  selectGoods = (event, goodName) => {
    event.persist();

    this.setState((prevState) => {
      const prevSelectedGoods = prevState.selectedGoods;

      if (event.ctrlKey) {
        if (prevSelectedGoods.includes(goodName)) {
          prevSelectedGoods.splice(prevSelectedGoods.indexOf(goodName), 1);

          return { selectedGoods: [...prevSelectedGoods] };
        }

        return { selectedGoods: [...prevSelectedGoods, goodName] };
      }

      return { selectedGoods: [goodName] };
    });
  }

  resetGoods = () => {
    this.setState({ selectedGoods: [] });
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <SelectedGoods
          selectedGoods={selectedGoods}
          handleClick={this.resetGoods}
        />

        <SelectButtonList
          handleClick={this.selectGoods}
          goods={prepearedGoods}
          selectedGoods={this.state.selectedGoods}
        />
      </div>
    );
  }
}

export default App;
