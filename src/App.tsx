import React from 'react';
import cn from 'classnames';
import { Button, Spinner } from 'react-bootstrap';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Good } from './types/Good';

import goodsFromServer from './goods';

function takeGoodsFromServer(goods: string[]): Good[] {
  return goods.map((el: string, i) => ({
    name: el,
    id: i,
  }));
}

interface State {
  goods: Good[],
  selectedGoods: string[],
}

export class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
    selectedGoods: ['Jam'],
  };

  componentDidMount() {
    setTimeout(
      () => this.setState({ goods: takeGoodsFromServer(goodsFromServer) }),
      1000,
    );
  }

  handleRemove = (name: string): void => {
    this.setState((prevState) => {
      const goods = [...prevState.selectedGoods]
        .filter(good => good !== name);

      return { selectedGoods: goods };
    });
  };

  handleSelect = (name: string): void => {
    this.setState((prevState) => ({
      selectedGoods: [...prevState.selectedGoods, name],
    }));
  };

  handleClear = () => {
    this.setState({ selectedGoods: [] });
  };

  getTitle = (selected: string[]): string => {
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

    if (!goods.length) {
      return (
        <>
          <main className="App">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </main>
        </>
      );
    }

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            {this.getTitle(selectedGoods)}
          </h1>

          {Boolean(selectedGoods.length) && (
            <Button
              variant="danger"
              type="button"
              className={cn(
                'App__clear',
              )}
              onClick={() => this.handleClear()}
            >
              Clear
            </Button>
          )}
        </header>

        <ul className="Good-list">
          {goods.map(good => {
            const isActiveGood = selectedGoods.includes(good.name);

            return (
              <li
                key={good.id}
                className={cn(
                  'Good',
                  {
                    'Good--active': isActiveGood,
                  },
                )}
              >
                {good.name}

                {isActiveGood ? (
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
            );
          })}
        </ul>
      </main>
    );
  }
}
