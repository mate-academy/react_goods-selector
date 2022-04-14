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
  selectedGoods: string[];
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGoods: [],
  };

  addInitialText = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${selectedGoods[0]} is selected`;
      default:
        return `${selectedGoods.slice(0, -1).join(', ')}
        and ${selectedGoods[selectedGoods.length - 1]} are selected`;
    }
  };

  isSelectedItem = (item: string) => {
    return this.state.selectedGoods.find(good => good === item);
  };

  addItem = (item: string) => {
    this.setState((state) => {
      return { selectedGoods: [...state.selectedGoods, item] };
    });
  };

  removeItem = (item: string) => {
    this.setState((state) => {
      return { selectedGoods: state.selectedGoods.filter(good => good !== item) };
    });
  };

  clearSelect = () => {
    this.setState({ selectedGoods: [] });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div>
        <div className="App">
          <h1>
            <div className="initial_text">{this.addInitialText()}</div>
            <div>
              <button
                type="button"
                className={classNames(
                  'buttonX',
                  { hidden: selectedGoods.length === 0 },
                )}
                onClick={this.clearSelect}
              >
                X
              </button>
            </div>
          </h1>
        </div>
        <div className="listOfGoods">
          <ul>
            {goodsFromServer.map((item) => (
              <li
                key={item}
                className="listOfGoods item"
              >
                <div className={classNames(
                  'listOfGoods',
                  { active: this.isSelectedItem(item) },
                )}
                >
                  {item}
                </div>

                <div>
                  <button
                    type="button"
                    className={classNames(
                      'listOfGoods button',
                      { hidden: this.isSelectedItem(item) },
                    )}
                    onClick={() => {
                      this.addItem(item);
                    }}
                  >
                    Add
                  </button>
                </div>

                <div>
                  <button
                    type="button"
                    className={classNames(
                      'listOfGoods button',
                      { hidden: !this.isSelectedItem(item) },
                    )}
                    onClick={() => {
                      this.removeItem(item);
                    }}
                  >
                    Remove
                  </button>
                </div>

              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
