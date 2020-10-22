import React from 'react';
import './App.scss';
import { Header } from './components/Header';
import { List } from './components/List';

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

const preparedGoods = goodsFromServer.map((good, index) => (
  {
    name: good,
    id: index,
  }
));

class App extends React.Component {
  state = {
    selectedGoods: [],
  };

  clickHandler = (event) => {
    if (event.ctrlKey || event.metaKey) {
      const target = event.target.textContent;

      this.setState((prevState) => {
        if (prevState.selectedGoods.includes(target)) {
          const leftGoods = prevState.selectedGoods
            .filter(good => good !== target);

          return { selectedGoods: leftGoods };
        }

        const newArr = [...prevState.selectedGoods, target];

        return { selectedGoods: newArr };
      });
    } else {
      this.setState({ selectedGoods: [event.target.textContent] });
    }
  }

  removeAll = () => {
    this.setState({ selectedGoods: [] });
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <Header selectedGoods={selectedGoods} onClick={this.removeAll} />
        <List
          data={preparedGoods}
          selectedGoods={selectedGoods}
          onClick={this.clickHandler}
        />
      </div>
    );
  }
}

export default App;
