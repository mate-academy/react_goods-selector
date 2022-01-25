import React from 'react';
import './App.scss';
import classNames from 'classnames';

const goodsFromServer = [
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
  selectedGood: string,
};

type Props = {};

export class App extends React.Component<Props, State> {
  state = {
    goods: [...goodsFromServer],
    selectedGood: 'Jam',
  };

  selectedHandler = (good: string) => {
    this.setState({ selectedGood: good });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good: -
          {' '}
          {!selectedGood
            ? 'No goods selected'
            : `${selectedGood} is selected`}
        </h1>
        <button
          className="removeGood"
          type="button"
          onClick={() => {
            this.setState({ selectedGood: '' });
          }}
        >
          X
        </button>
        <ul className="App__list">
          {this.state.goods.map((good) => (
            <li key={good} className={classNames({ App__item: selectedGood === good })}>
              {good}
              {' '}
              <button
                type="button"
                onClick={() => {
                  this.selectedHandler(good);
                }}
                className={classNames({
                  buttonVisible: selectedGood === good,
                })}
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
