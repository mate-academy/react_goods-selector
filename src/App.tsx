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
  selectedGood: string[],
};

class App extends React.Component<{}, State> {
  state = {
    selectedGood: ['Jam'],
  };

  isSelected = (item: string) => {
    if (!this.state.selectedGood.includes(item)) {
      this.setState(({ selectedGood }) => {
        return {
          selectedGood: [...selectedGood, item],
        };
      });
    } else {
      this.setState(({ selectedGood }) => {
        return {
          selectedGood: [...selectedGood].filter(goods => goods !== item),
        };
      });
    }
  };

  setTitle = () => {
    const { selectedGood } = this.state;

    if (selectedGood.length === 0) {
      return 'No goods selected';
    }

    if (selectedGood.length === 1) {
      return `${selectedGood} is selected`;
    }

    const firstGoods = selectedGood.slice(0, -1);

    return `${firstGoods.join(', ')} and ${selectedGood[selectedGood.length - 1]} are selected`;
  };

  clearTitle = () => {
    this.setState({ selectedGood: [] });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1 className="title">
          {this.setTitle()}
          {' '}
          {selectedGood.length !== 0 && (
            <button
              className="title__button"
              type="button"
              onClick={() => {
                this.clearTitle();
              }}
            >
              x
            </button>
          )}
        </h1>
        <ul className="list">
          {goodsFromServer.map(item => (
            <li
              className={classNames('list__item', { selected: selectedGood.includes(item) })}
              key={item}
            >
              {item}
              <button
                className="list__button"
                type="button"
                onClick={() => {
                  this.isSelected(item);
                }}
              >
                {selectedGood.includes(item) ? 'Remove' : 'Select'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
