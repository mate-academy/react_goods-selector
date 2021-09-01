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

  reset = () => (
    this.setState({ selectedGoods: [] })
  );

  addItem = (item: string) => {
    this.setState((prevState) => ({
      selectedGoods: [...prevState.selectedGoods, item],
    }));
  };

  removeItem = (item: string) => {
    this.setState((prevState) => {
      const { selectedGoods } = prevState;

      if (selectedGoods.includes(item)) {
        const lastIndex = selectedGoods.lastIndexOf(item);
        const newSelectedGoods = [...selectedGoods];

        newSelectedGoods.splice(lastIndex, 1);

        return { selectedGoods: newSelectedGoods };
      }

      return null;
    });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        {selectedGoods.length > 0
          ? (
            <>
              <h1>{`Selected goods: ${selectedGoods.join(', ')}`}</h1>
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
          {goodsWithId.map(good => {
            const { name, id } = good;

            return (
              <li
                key={id}
                className={classNames('list__item',
                  { 'list__item--selected': selectedGoods.includes(name) })}
              >
                <h3>{name}</h3>
                <button
                  className="button"
                  type="button"
                  onClick={() => this.addItem(name)}
                >
                  Add
                </button>
                <button
                  className="button"
                  type="button"
                  onClick={() => this.removeItem(name)}
                  disabled={!selectedGoods.includes(name)}
                >
                  Remove
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
