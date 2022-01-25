import React from 'react';
import classNames from 'classnames/bind';
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
  goods: string[];
  selectedGood: string[];
}

export class App extends React.Component<{}, State> {
  state = {
    goods: [...goodsFromServer],
    selectedGood: [''],
  };

  addButton = (good: string) => {
    this.setState((state) => ({
      selectedGood: [...state.selectedGood, good],
    }));
  };

  removeButton = (good: string) => {
    this.setState((state) => ({
      selectedGood: [...state.selectedGood.filter((item) => (item !== good))],
    }));
  };

  clearGoods = () => {
    this.setState({
      selectedGood: [''],
    });
  };

  pretier = (goods:string[]):string => {
    switch (goods.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${goods[0]} is selected`;
      default:
        return `${goods.slice(0, -1).join(', ')} and ${goods[goods.length - 1]} are selected`;
    }
  };

  render() {
    const { goods, selectedGood } = this.state;

    if (selectedGood[0] === '') {
      this.setState((state) => ({
        selectedGood: [...state.selectedGood.filter((item) => (item !== ''))],
      }));
    }

    return (
      <div className="App">
        <div className="container">
          <ul className="list">
            {goods.map((good) => {
              const isButtonPress = selectedGood.includes(good);

              return (
                <li
                  className="list__item"
                  key={good}
                >
                  <button
                    className={classNames('list__button', {
                      'list__button--red': isButtonPress,
                    })}
                    type="button"
                    onClick={() => (
                      isButtonPress
                        ? this.removeButton(good)
                        : this.addButton(good)
                    )}
                  >
                    {
                      isButtonPress
                        ? 'Remove'
                        : 'Add'
                    }
                  </button>
                  <span className="list__title">
                    {good}
                  </span>
                </li>
              );
            })}
          </ul>

          <div className="close">
            {
              !!selectedGood.length
              && (
                <button
                  className="close__button"
                  type="button"
                  onClick={this.clearGoods}
                >
                  X
                </button>
              )
            }
          </div>
        </div>

        <h1 className="title">
          {this.pretier(selectedGood)}
        </h1>
      </div>
    );
  }
}
