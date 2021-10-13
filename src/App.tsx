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
  goods: string[],
};

class App extends React.Component<{}, State> {
  state = {
    goods: ['Jam'],
  };

  toggleSelectedItem = (good: string) => {
    const { goods } = this.state;

    if (goods.includes(good)) {
      this.setState({ goods: [...goods.filter(item => item !== good)] });
    } else {
      this.setState({ goods: [...goods, good] });
    }
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1>
          {goods.length
            ? `Selected good: - ${goods.join(', ')}`
            : 'No goods selected'}
        </h1>
        <button
          type="button"
          onClick={() => {
            this.setState({ goods: [] });
          }}
        >
          Clear
        </button>
        <ul className="list">
          {goodsFromServer.map((currentGood) => {
            const isSelected = goods.includes(currentGood);

            return (
              <li
                key={currentGood}
                className={classNames(
                  'list__item',
                  { 'list__item--selected': isSelected },
                )}
              >
                {currentGood}
                <button
                  type="button"
                  onClick={() => this.toggleSelectedItem(currentGood)}
                >
                  {isSelected ? 'Remove' : 'Select'}
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
