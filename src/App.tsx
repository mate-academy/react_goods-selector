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

type Props = {};

type State = {
  selectedGoods: string[];
};

class App extends React.Component<Props, State> {
  selectedProducts: string[] = ['Jam'];

  state = {
    selectedGoods: this.selectedProducts,
  };

  printSelectedGoods = () => {
    let printGoods = '';

    if (this.selectedProducts.length === 1) {
      return `${this.state.selectedGoods[0]} is selected!`;
    }

    if (this.selectedProducts.length === 2) {
      return `${this.state.selectedGoods[0]} and ${this.state.selectedGoods[1]} are selected!`;
    }

    if (this.selectedProducts.length >= 3) {
      this.selectedProducts.forEach((p, i) => {
        if (i === 0) {
          printGoods = p;
        } else if (i === this.selectedProducts.length - 1) {
          printGoods = `${printGoods} and ${p}`;
        } else {
          printGoods = `${printGoods}, ${p}`;
        }
      });

      return `${printGoods} are selected!`;
    }

    return 'No goods selected!';
  };

  clearList = () => {
    this.selectedProducts = [];
    this.setState({ selectedGoods: this.selectedProducts });
  };

  click = (good: string) => {
    if (this.selectedProducts.includes(good)) {
      const remove = this.selectedProducts.filter(product => product !== good);

      this.selectedProducts = remove;
    } else {
      this.selectedProducts.push(good);
    }

    this.setState({ selectedGoods: this.selectedProducts });
  };

  render() {
    return (
      <div className="App column">
        <h1 className="title">{this.printSelectedGoods()}</h1>

        <ul className="column level is-half">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={classNames(
                'columns level-left',
                {
                  'has-background-success-light':
                  this.state.selectedGoods.includes(good),
                },
              )}
            >
              <div
                className={classNames(
                  'column',
                  {
                    'has-text-success': this.state.selectedGoods.includes(good),
                  },
                )}
              >
                {good}
              </div>

              <button
                type="button"
                className={classNames(
                  'button',
                  {
                    'is-success':
                    this.state.selectedGoods.includes(good),
                    'is-light': !this.state.selectedGoods.includes(good),

                  },
                )}
                onClick={() => this.click(good)}
              >
                {this.state.selectedGoods.includes(good) ? 'Remove' : 'Select'}
              </button>
            </li>
          ))}
        </ul>

        {this.state.selectedGoods.length !== 0 ? (
          <button
            type="button"
            className="button is-rounded"
            onClick={this.clearList}
          >
            Clear goods
          </button>
        ) : ''}
      </div>
    );
  }
}

export default App;
