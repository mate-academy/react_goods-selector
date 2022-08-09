import React from 'react';
import classNames from 'classnames';
import { Button } from 'react-bootstrap';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Good } from './types/Good';

import goodsFromServer from './goods';

function takeGoodsFromServer(goods: string[]): Good[] {
  return goods.map((el: string) => ({ name: el }));
}

interface State {
  goods: Good[],
  selectedGoods: string[],
}

export class App extends React.Component<{}, State> {
  state = {
    goods: takeGoodsFromServer(goodsFromServer),
    selectedGoods: ['Jam'],
  };

  handleRemove = (name: string): void => {
    this.setState((prevState) => {
      const previousGood = [...prevState.selectedGoods];
      const index = previousGood.indexOf(name);

      if (index !== -1) {
        previousGood.splice(index, 1);
      }

      return { selectedGoods: previousGood };
    });
  };

  handleSelect = (name: string): void => {
    this.setState((prevState) => {
      const previousSelectedGoods = [...prevState.selectedGoods];

      if (!previousSelectedGoods.includes(name)) {
        previousSelectedGoods.push(name);
      }

      return { selectedGoods: previousSelectedGoods };
    });
  };

  getSelectedGoods = (selected: string[]): string => {
    switch (true) {
      case selected.length > 3:
        return `${selected[0]}, ${selected[1]} and ${selected.length - 2} others are selected`;

      case selected.length === 3:
        return `${selected[0]}, ${selected[1]} and ${selected[2]} are selected`;

      case selected.length === 2:
        return `${selected[0]} and ${selected[1]} are selected`;

      case selected.length === 1:
        return `${selected[0]} is selected`;

      case selected.length === 0:
        break;

      default:
        throw new Error('error in getSelectedGoods() function');
    }

    return 'No goods selected';
  };

  render() {
    const { goods, selectedGoods } = this.state;

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            {this.getSelectedGoods(selectedGoods)}
          </h1>

          {Boolean(selectedGoods.length) && (
            <Button
              variant="danger"
              type="button"
              className={classNames(
                'App__clear',
              )}
              onClick={() => this.setState({ selectedGoods: [] })}
            >
              Clear
            </Button>
          )}
        </header>

        <ul className="Good-list">
          {goods.map(good => (
            <li
              key={good.name}
              className={classNames(
                'Good',
                {
                  'Good--active': selectedGoods.includes(good.name),
                },
              )}
            >
              {good.name}

              {selectedGoods.includes(good.name) ? (
                <Button
                  variant="warning"
                  type="button"
                  className="Good__remove Good__button"
                  onClick={() => this.handleRemove(good.name)}
                >
                  Remove
                </Button>
              ) : (
                <Button
                  variant="warning"
                  type="button"
                  className="Good__select Good__button"
                  onClick={() => this.handleSelect(good.name)}
                >
                  Select
                </Button>
              )}
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
