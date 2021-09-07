import React from 'react';
import './App.scss';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

const goodsFromServer: string[] = [
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

const goodsWithId = goodsFromServer.map((good) => (
  {
    name: good,
    id: uuidv4(),
  }
));

interface State {
  selectedGoods: string[];
}

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: [],
  };

  showGoods = () => {
    const { selectedGoods } = this.state;

    const goodsWithoutLast = selectedGoods.slice(0, -1);
    const lastGood = selectedGoods[selectedGoods.length - 1];

    return selectedGoods.length > 1
      ? `${goodsWithoutLast.join(', ')} and ${lastGood} are selected`
      : `${lastGood} is selected`;
  };

  reset = () => (
    this.setState({ selectedGoods: [] })
  );

  addItem = (item: string) => {
    this.setState((prevState) => ({
      selectedGoods: [...prevState.selectedGoods, item],
    }));
  };

  removeItem = (item: string) => {
    this.setState((prevState) => ({
      selectedGoods: prevState.selectedGoods.filter(
        good => good !== item,
      ),
    }
    ));
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        {selectedGoods.length > 0
          ? (
            <>
              <h1>{`Selected goods: ${this.showGoods()}`}</h1>
              <button
                className="button"
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>
            </>
          )
          : <h1>No goods selected</h1>}
        <ul className="list">
          {goodsWithId.map(good => (
            <li
              key={good.id}
              className={classNames('list__item',
                { 'list__item--selected': selectedGoods.includes(good.name) })}
            >
              <h3>{good.name}</h3>
              <button
                className="button"
                type="button"
                onClick={() => this.addItem(good.name)}
                disabled={selectedGoods.includes(good.name)}
              >
                Add
              </button>
              <button
                className="button"
                type="button"
                onClick={() => this.removeItem(good.name)}
                disabled={!selectedGoods.includes(good.name)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
