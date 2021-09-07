import React from 'react';
import classNames from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';
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
  selectedGood: string;
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedGood: '',
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          {'Selected good: '}
          {!selectedGood ? 'No goods selected' : `${selectedGood}`}
          <button
            type="button"
            onClick={() => {
              this.setState({ selectedGood: '' });
            }}
            className={classNames(
              'btn btn-danger',
              {
                btn_hidden: selectedGood === '',
              },
            )}
          >
            Clear items
          </button>
        </h1>
        <ul className="goodsList">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={classNames(
                'goodsList__item',
                {
                  goodsList__item_active: selectedGood === good,
                },
              )}
            >
              {good}
              <button
                type="button"
                onClick={() => {
                  this.setState({ selectedGood: good });
                }}
                className={classNames(
                  'btn btn-primary',
                  {
                    btn_hidden: selectedGood === good,
                  },
                )}
              >
                Select
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
