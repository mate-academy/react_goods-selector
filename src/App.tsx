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
  selectedGood: string;
};

class App extends React.Component<Props, State> {
  state = {
    selectedGood: 'Jam is selected',
  };

  ckickHandler = (good: string) => {
    this.setState({
      selectedGood: `${good} is selected`,
    });
  };

  clearSelect = () => {
    this.setState({ selectedGood: 'No goods selected' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          {selectedGood}
          <button
            type="button"
            onClick={() => this.clearSelect()}
            className={classNames(
              'btn',
              {
                hidden: selectedGood === 'No goods selected',
              },
            )}
          >
            X
          </button>
        </h1>
        <ul>
          {goodsFromServer.map(good => {
            const selectedItem = selectedGood.includes(good);

            return (
              <li
                key={good}
                className={classNames({
                  selected: selectedItem,
                })}
              >
                {good}
                <button
                  type="button"
                  onClick={() => {
                    this.ckickHandler(good);
                  }}
                  className={classNames(
                    'btn',
                    {
                      hidden: selectedItem,
                    },
                  )}
                >
                  Select
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
