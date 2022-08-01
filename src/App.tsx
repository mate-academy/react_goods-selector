import React from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import './App.scss';

import goodsFromServer from './goods';

const goods = goodsFromServer.map(good => ({
  id: uuidv4(),
  name: good,
}));

type State = {
  selectedGoods: string[];
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGoods: ['Jam'],
  };

  componentDidMount() {
    this.setTitle();
  }

  setTitle = () => {
    const { selectedGoods } = this.state;
    const { length } = selectedGoods;

    switch (length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${selectedGoods[0]} is selected`;
      default:
        return `${selectedGoods.slice(0, length - 1).join(', ')} and ${selectedGoods[length - 1]}`;
    }
  };

  handlingRemove = (good: string) => {
    this.setState((prevState) => ({
      selectedGoods: prevState.selectedGoods.filter(item => item !== good),
    }));
  };

  handlingSelect = (good: string) => {
    this.setState((prevState) => ({
      selectedGoods: [...prevState.selectedGoods, good],
    }));
  };

  handlingClear = () => {
    this.setState({ selectedGoods: [] });
  };

  render() {
    const { selectedGoods } = this.state;
    const { length } = selectedGoods;

    return (
      <main className="App is-light">
        <header className="App__header">
          <h1 className="App__title">
            {this.setTitle()}
          </h1>

          {length
            ? (
              <button
                type="button"
                className="App__clear button is-danger"
                onClick={this.handlingClear}
              >
                Clear
              </button>
            )
            : '' }
        </header>

        <ul className="Goods">
          {goods.map(({ id, name }) => {
            const isSelected = selectedGoods.includes(name);

            return (
              <li
                key={id}
                className={classNames(
                  'Good level-item',
                  {
                    'Good--active': isSelected,
                  },
                )}
              >
                <h1>{name}</h1>

                {isSelected
                  ? (
                    <button
                      type="button"
                      className="Good__remove button is-danger"
                      onClick={() => this.handlingRemove(name)}
                    >
                      Remove
                    </button>
                  )
                  : (
                    <button
                      type="button"
                      className="Good__select button is-dark"
                      onClick={() => this.handlingSelect(name)}
                    >
                      Select
                    </button>
                  )}
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}
