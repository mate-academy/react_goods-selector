import React from 'react';
import cn from 'classnames';
import './App.scss';

import goodsFromServer from './goods';

interface State {
  selectedGoods: string[],
  goods: string[],
}

export class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
    goods: goodsFromServer,
  };

  getTitle() {
    const { selectedGoods } = this.state;

    if (!selectedGoods.length) {
      return 'No goods selected';
    }

    if (selectedGoods.length === 1) {
      return `${selectedGoods} is selected`;
    }

    const lastIndex = selectedGoods.length - 1;
    const firstPart = selectedGoods.slice(0, -1);
    const joined = `${firstPart.join(', ')} and ${selectedGoods[lastIndex]}`;

    return `${joined} are selected`;
  }

  clear = () => {
    this.setState({
      selectedGoods: [],
    });
  };

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

  render(): React.ReactNode {
    const { goods } = this.state;

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            {this.getTitle()}
          </h1>

          <button
            type="button"
            className="App__clear"
            onClick={this.clear}
          >
            Clear
          </button>
        </header>

        <ul>
          {goods.map(good => {
            const isSelected = this.isSelected(good);

            return (
              <li key={good}>
                <div>
                  {good}
                  <button
                    type="button"
                    className={cn(
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
                </div>
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}
