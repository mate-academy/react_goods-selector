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

type State = {
  selectedGoods: string[],
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  add = (item: string) => {
    this.setState((prev) => {
      prev.selectedGoods.push(item);

      return { selectedGoods: prev.selectedGoods };
    });
  };

  remove = (item: string) => {
    const indexOf = this.state.selectedGoods.indexOf(item);

    this.setState((prev) => {
      prev.selectedGoods.splice(indexOf, 1);

      return { selectedGoods: prev.selectedGoods };
    });
  };

  title = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case (0):
        return 'No goods selected';

      case (1):
        return `${selectedGoods[0]} is selected`;

      default:
        return `${selectedGoods.slice(0, -1).join(', ')}
          and ${selectedGoods.slice(-1)} are selected`;
    }
  };

  render() {
    return (
      <div className="app">
        <div>
          <h1 className="app__title">{this.title()}</h1>

          <button
            className="app__clear"
            type="button"
            onClick={() => {
              this.setState({ selectedGoods: [] });
            }}
          >
            {this.state.selectedGoods.length > 0 && 'Clear'}
          </button>
        </div>

        <ul className="app__list">
          {goodsFromServer.map(item => (
            <li
              key={item}
              className={classNames(
                'app__list-item',
                {
                  active: this.state.selectedGoods.includes(item),
                },
              )}
            >
              <label className="app__list-label">
                <span className="app__list-item-name">{item}</span>
                <button
                  className="app__list-item-button"
                  type="button"
                  onClick={
                    this.state.selectedGoods.includes(item)
                      ? () => this.remove(item)
                      : () => this.add(item)
                  }
                >
                  {this.state.selectedGoods.includes(item)
                    ? 'Remove'
                    : 'Select'}
                </button>
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
