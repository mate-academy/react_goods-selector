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

export class App extends React.Component {
  state = {
    goods: goodsFromServer,
    selectedGood: 'Jam',
  };

  selectedHandler = (good: string) => {
    this.setState({ selectedGood: `${good} is selected` });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good: -
          {' '}
          {!selectedGood ? 'No goods selected' : selectedGood}
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
            <>
              <li key={good} className={classNames({ App__item: selectedGood.includes(good) })}>
                {good}
                {' '}
                <button
                  type="button"
                  onClick={() => {
                    this.selectedHandler(good);
                  }}
                  className={classNames({
                    buttonVisible: selectedGood.includes(good),
                  })}
                >
                  Select
                </button>
              </li>
            </>
          ))}
        </ul>
      </div>
    );
  }
}
