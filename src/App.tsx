import React from 'react';
import classNames from 'classnames';
import { Button } from './Button';
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

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: [],
  };

  getSelected = (good: string) => {
    this.setState((currentState: State) => ({
      selectedGoods: [...currentState.selectedGoods, good],
    }));
  };

  getRemoved = (good: string) => {
    this.setState((currentState: State) => ({
      selectedGoods: currentState.selectedGoods.filter(product => product !== good),
    }));
  };

  deleteGoods = () => {
    this.setState({ selectedGoods: [] });
  };

  render() {
    const { selectedGoods } = this.state;
    let allGoods;

    if (selectedGoods.length === 1) {
      allGoods = `${selectedGoods[0]}`;
    }

    if (selectedGoods.length > 1) {
      const firsts = selectedGoods.slice(0, selectedGoods.length - 1);
      const last = selectedGoods[selectedGoods.length - 1];

      allGoods = `${firsts.join(', ')} and ${last}`;
    }

    return (
      <div className="App">
        <div className="container container__selected">
          <h1>
            {selectedGoods.length > 0 ? `${allGoods} is selected` : 'No goods selected'}
          </h1>
          {selectedGoods.length > 0 && (
            <Button
              classes="button button__clear"
              action={() => {
                this.deleteGoods();
                window.location.reload();
              }}
              text="X"
            />
          )}
        </div>
        <ul className="goods">
          {goodsFromServer.map(good => (
            <div className="container container__goods">
              <li
                key={good}
                className={classNames('good',
                  { good__selected: selectedGoods.includes(good) })}
              >
                {good}
              </li>
              <div className="buttons">
                <Button
                  action={() => {
                    this.getSelected(good);
                  }}
                  classes="button"
                  text="Add"
                />
                <Button
                  action={() => {
                    this.getRemoved(good);
                  }}
                  classes="button"
                  text="Remove"
                />
              </div>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
