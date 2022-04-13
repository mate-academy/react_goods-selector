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

export class App extends React.Component {
  state = {
    selectedGood: '',
    selectedGoods: [],
  };

  render() {
    const {
      selectedGood, selectedGoods,
    } = this.state;

    const message = () => {
      if (selectedGood !== '') {
        return `${selectedGood} is selected`;
      }

      if (selectedGoods.length === 1) {
        return `${selectedGoods.join('')} is selected`;
      }

      if (selectedGoods.length > 1) {
        return `${selectedGoods.join(',')} are selected`;
      }

      return 'No goods selected';
    };

    return (
      <>
        <div className="App">
          <h1 className="title">
            Selected good:
            <span className="red">
              {message()}
            </span>

            <button
              type="button"
              className="button button__h1"
              onClick={() => {
                this.setState({ selectedGood: '' });
              }}
            >
              X
            </button>
          </h1>

          <ul className="goods">
            {goodsFromServer.map(good => (
              <li
                key={good}
                className={classNames(
                  'good',
                  {
                    good__active: selectedGood === good,
                  },
                )}
              >
                {good}

                <button
                  type="button"
                  className={`${selectedGood !== good ? 'button' : 'button__disable'}`}
                  onClick={() => {
                    this.setState({ selectedGood: good });
                  }}
                >
                  Select
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>Advanced task</div>

        <div className="App">
          <h1 className="title">
            Selected good:
            <span className="red">
              {message()}
            </span>
            <button
              type="button"
              className="button button__h1"
              onClick={() => {
                this.setState({ selectedGoods: [] });
              }}
            >
              X
            </button>
          </h1>
          <ul className="goods">
            {goodsFromServer.map(good => (
              <div key={good} className="good__block">
                <li className={classNames(
                  'good',
                  {
                    good__active: selectedGoods.includes(good as never),
                  },
                )}
                >
                  {good}
                </li>

                <button
                  type="button"
                  className={classNames(
                    'button',
                    {
                      button__hidden: selectedGoods.includes(good as never),
                    },
                  )}
                  onClick={() => {
                    this.setState(() => ({
                      selectedGoods: [...selectedGoods, good],
                    }));
                  }}
                >
                  Add
                </button>

                <button
                  type="button"
                  className={classNames(
                    'button',
                    {
                      button__hidden: !selectedGoods.includes(good as never),
                    },
                  )}
                  onClick={() => {
                    this.setState(() => ({
                      selectedGoods: selectedGoods.filter(
                        (item) => item !== good,
                      ),
                    }));
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
