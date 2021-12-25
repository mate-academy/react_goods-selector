import classNames from 'classnames';
import React from 'react';
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
  selectedGood: string[];
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: ['Jam'],
  };

  addSelectedGood = (good: string) => {
    const { selectedGood } = this.state;

    this.setState({ selectedGood: [...selectedGood, good] });
  };

  removeSelectedGood = (good: string) => {
    const { selectedGood } = this.state;

    this.setState({ selectedGood: selectedGood.filter(item => item !== good) });
  };

  clearSelectedGood = () => {
    this.setState({ selectedGood: [] });
  };

  showListGoods = () => {
    const { selectedGood } = this.state;

    switch (selectedGood.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return (
          selectedGood.toString().endsWith('s')
            ? `${selectedGood} are selected`
            : `${selectedGood} is selected`
        );

      default:
        return (
          `${selectedGood.slice(0, -1)
            .join(', ')}
            and
            ${selectedGood[selectedGood.length - 1]}
            are selected`
        );
    }
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <div className="App__header">
          {selectedGood.length > 0
            && (
              <button
                type="button"
                className="App__btn App__btn--clear"
                onClick={() => this.clearSelectedGood()}
              >
                Clear all
              </button>
            )}
          <h1 className="App__title">
            {' '}
            {this.showListGoods()}
          </h1>
        </div>
        <ul className="App__list">
          {goodsFromServer.map(item => (
            <li
              key={item}
              className={classNames({
                App__item: true,
                'App__item--remove': selectedGood.includes(item),
              })}
            >
              {item}
              <button
                type="button"
                className="App__btn"
                onClick={() => (
                  selectedGood.includes(item)
                    ? this.removeSelectedGood(item)
                    : this.addSelectedGood(item)
                )}
              >
                {selectedGood.includes(item)
                  ? 'Remove'
                  : 'Add'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
