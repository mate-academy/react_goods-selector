import React from 'react';
import './App.scss';
import classNames from 'classnames';
import goodsFromServer from './goods';

interface State {
  selectedGoods: string[];
  goods: string[];
}

export class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
    goods: goodsFromServer,
  };

  getHeaderTitle() {
    const { selectedGoods } = this.state;

    if (!selectedGoods.length) {
      return 'No goods selected';
    }

    if (selectedGoods.length === 1) {
      return `${selectedGoods[0]} is selected`;
    }

    const lastIndex = selectedGoods.length - 1;
    const firstPart = selectedGoods.slice(0, -1);
    const joined = `${firstPart.join(', ')} and ${selectedGoods[lastIndex]}`;

    return `${joined} are selected`;
  }

  isSelected(goodName: string) {
    const { selectedGoods } = this.state;

    return selectedGoods.includes(goodName);
  }

  selectGood(good: string) {
    const { selectedGoods } = this.state;

    this.setState({ selectedGoods: [...selectedGoods, good] });
  }

  unselectGood(good: string) {
    const { selectedGoods } = this.state;
    const newGoods = selectedGoods.filter(el => el !== good);

    this.setState({ selectedGoods: newGoods });
  }

  selectToggle(goodName: string) {
    if (this.isSelected(goodName)) {
      this.unselectGood(goodName);

      return;
    }

    this.selectGood(goodName);
  }

  clear() {
    this.setState({ selectedGoods: [] });
  }

  render() {
    const { goods } = this.state;
    const { selectedGoods } = this.state;

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            {this.getHeaderTitle()}
          </h1>
          <button
            type="button"
            className={classNames('Good__clear',
              {
                'Good__clear--unvisible': !selectedGoods.length,
              })}
            onClick={() => {
              this.clear();
            }}
          >
            Clear
          </button>
        </header>

        <ul>
          {goods.map(good => {
            const isSelected = this.isSelected(good);

            return (
              <li
                key={good}
                className={classNames('Good',
                  {
                    'Good--active': isSelected,
                  })}
              >
                {good}
                <button
                  type="button"
                  className={classNames(
                    'controlBtn',
                    {
                      'btn--success': !isSelected,
                      'btn--error': isSelected,
                    },
                  )}
                  onClick={() => this.selectToggle(good)}
                >
                  {(isSelected
                    ? 'Remove'
                    : 'Select'
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}
