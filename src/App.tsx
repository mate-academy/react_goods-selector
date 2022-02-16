import React from 'react';
import classNames from 'classnames';
import { formatGoods } from './utils';
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
  selectedGoods: string[];
};

class App extends React.Component<Props, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  selectHandler(good: string) {
    const { selectedGoods } = this.state;

    this.setState({ selectedGoods: [...selectedGoods, good] });
  }

  removeHandler(good: string) {
    const { selectedGoods } = this.state;
    const index = selectedGoods.indexOf(good);

    this.setState({
      selectedGoods: [
        ...selectedGoods.slice(0, index),
        ...selectedGoods.slice(index + 1),
      ],
    });
  }

  resetSelection() {
    this.setState({ selectedGoods: [] });
  }

  render() {
    const { selectedGoods } = this.state;
    const title = selectedGoods.length ? formatGoods(selectedGoods) : 'No goods selected';

    return (
      <div className="App">
        <div className="title-container">
          <h1>
            {title}
          </h1>

          {Boolean(selectedGoods.length) && (
            <button
              type="button"
              className="title-button"
              onClick={() => {
                this.resetSelection();
              }}
            >
              x
            </button>
          )}
        </div>

        <ul className="goods">
          {goodsFromServer.map(good => {
            const goodIsSelected = selectedGoods.includes(good);

            return (
              <div className="good-container" key={good}>
                <li
                  className={classNames(
                    'good',
                    { 'good--selected': goodIsSelected },
                  )}
                >
                  {good}
                </li>

                {goodIsSelected
                  ? (
                    <button
                      type="button"
                      className="button"
                      onClick={() => {
                        this.removeHandler(good);
                      }}
                    >
                      Remove
                    </button>
                  )
                  : (
                    <button
                      type="button"
                      className="button"
                      onClick={() => {
                        this.selectHandler(good);
                      }}
                    >
                      Add
                    </button>
                  )}
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
