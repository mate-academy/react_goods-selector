import React from 'react';
import './App.scss';
import { GoodsList } from './components';
import { ResetButton } from './components/ResetButton';

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

const preparedGoods = goodsFromServer.map((item, id) => ({
  name: item,
  id,
}));

class App extends React.Component {
  state = {
    selectedGoods: [],
  }

  selectItem = (name) => {
    const { selectedGoods } = this.state;
    const newSelectedGoods = [...selectedGoods];

    if (selectedGoods.includes(name)) {
      const itemIndex = selectedGoods.indexOf(name);

      newSelectedGoods.splice(itemIndex, 1);
    } else {
      newSelectedGoods.push(name);
    }

    this.setState({
      selectedGoods: [...newSelectedGoods],
    });
  }

  resetList = () => {
    this.setState({
      selectedGoods: [],
    });
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <span className="reset-text">RESET: </span>
        <ResetButton resetList={this.resetList} />
        <h1>
          Selected goods:
          {' '}
          {selectedGoods.join(', ')}
        </h1>
        <GoodsList
          goodsList={preparedGoods}
          selectedGoods={this.state.selectedGoods}
          selectItem={this.selectItem}
        />
      </div>
    );
  }
}

export default App;
