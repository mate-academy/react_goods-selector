import React from 'react';
import classNames from 'classnames';
import './App.scss';

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

interface State {
  selectedGood: string[],
}

type Props = {};

class App extends React.Component<Props, State> {
  state: State = {
    selectedGood: [goodsFromServer[0]],
  };

  addGood = (good: string) => {
    if (this.state.selectedGood.includes(good)) {
      return;
    }

    this.setState(({ selectedGood }) => ({
      selectedGood: [...selectedGood, good],
    }));
  };

  removeGood = (good: string) => {
    this.setState(({ selectedGood }) => ({
      selectedGood: selectedGood.filter(el => el !== good),
    }));
  };

  showSelectedGoods = () => {
    const { selectedGood } = this.state;
    const lastGood = selectedGood[selectedGood.length - 1];
    const copyList = [...selectedGood];

    if (selectedGood.length === 1) {
      return selectedGood[0];
    }

    copyList.pop();

    return (copyList.length === 0) ? 'No goods are selected' : `${copyList.join(', ')} and ${lastGood}.`;
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <div className="App__header">
          <button
            type="button"
            className={classNames(
              'clear-button',
              { 'clear-button--hidden': selectedGood.length === 0 },
            )}
            onClick={() => {
              this.setState((
                { selectedGood: [] }
              ));
            }}
          >
            X
          </button>
          <h1 className="App__title">Selected goods:</h1>
        </div>

        <div className="App__window">
          {this.showSelectedGoods()}
        </div>

        <ul className="list">
          {goodsFromServer.map(product => (
            <li
              className={classNames(
                'list__item',
                { 'list__item--selected': selectedGood.includes(product) },
              )}
              key={product}
            >
              {product}
              <button
                className="list__btn"
                type="button"
                onClick={
                  selectedGood.includes(product)
                    ? () => this.removeGood(product)
                    : () => this.addGood(product)
                }
              >
                {selectedGood.includes(product) ? 'Remove' : 'Add'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
