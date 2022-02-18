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
  selectedGood: string,
};

class App extends React.Component<Props, State> {
  state: State = {
    selectedGood: 'Jam',
  };

  clearGood = () => {
    this.setState({ selectedGood: '' });
  };

  addGood = (good: string) => {
    this.setState({ selectedGood: good });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <div className="app">
          <h1 className="app_title">
            {selectedGood
              ? `${selectedGood} is Selected`
              : 'No goods selected'}
          </h1>
          {selectedGood && (
            <button
              type="button"
              className="app_title__button"
              onClick={this.clearGood}
            >
              X
            </button>
          )}
        </div>

        <ul className="goods_list">
          {goodsFromServer.map((good) => (
            <div className="goods_container">
              <li
                key={good}
                className={classNames(
                  'goods_item',
                  { goods_item__active: selectedGood === good },
                )}
              >
                {good}
              </li>
              <button
                type="button"
                className="goods_button"
                onClick={() => {
                  return (selectedGood === good
                    ? this.clearGood()
                    : this.addGood(good));
                }}
              >
                {selectedGood === good
                  ? 'Remove'
                  : 'Add'}
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
