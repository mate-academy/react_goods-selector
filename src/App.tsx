import React from 'react';
import './App.scss';
import classNames from 'classnames';

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

class App extends React.Component<{}, State> {
  state = {
    selectedGood: ['Jam'],
  };

  buttonClick = (item: string) => {
    const { selectedGood } = this.state;

    if (selectedGood.includes(item)) {
      this.setState(state => ({
        selectedGood: state.selectedGood.filter(e => e !== item),
      }));
    } else {
      this.setState(state => ({ selectedGood: [...state.selectedGood, item] }));
    }
  };

  clearGoods = () => {
    this.setState({
      selectedGood: [],
    });
  };

  render() {
    const { selectedGood } = this.state;

    const title = () => {
      switch (selectedGood.length) {
        case 0:
          return 'No goods selected';
        case 1:
          return `${selectedGood} is selected`;

        default:
          return `${selectedGood.slice(0, selectedGood.length - 1).join(',')} and ${selectedGood.at(-1)} are selected`;
      }
    };

    return (
      <div className="App">
        <h1>{title()}</h1>
        <div className="clear-button-wrapper">
          {(selectedGood.length > 0)
            && (
              <button
                className="clear-button"
                type="button"
                onClick={this.clearGoods}
              >
                Clear
              </button>
            )}
        </div>
        <ul>
          {goodsFromServer.map((item) => {
            const selectedGoods = selectedGood.includes(item);

            return (
              <li
                className={classNames(
                  'item',
                  { selected: selectedGoods },
                )}
                key={item}
              >
                {item}
                <button
                  type="button"
                  onClick={() => this.buttonClick(item)}
                  className={classNames(
                    'item__button',
                    { 'item__button-selected': selectedGoods },
                  )}
                >
                  {selectedGoods ? 'Remove' : 'Select'}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
