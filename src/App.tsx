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
                this.setState({ selectedGoods: [] });
              }}
            >
              x
            </button>
          )}
        </div>

        <ul className="goods">
          {goodsFromServer.map(good => {
            const goodIsSelected = selectedGoods.includes(good);

            const selectHandler = () => {
              selectedGoods.push(good);
              this.setState({ selectedGoods });
            };

            const removeHandler = () => {
              const index = selectedGoods.indexOf(good);

              selectedGoods.splice(index, 1);
              this.setState({ selectedGoods });
            };

            return (
              <div className="good-container">
                <li
                  key={good}
                  className={classNames(
                    'good',
                    { 'good--selected': goodIsSelected },
                  )}
                >
                  {good}
                </li>

                {goodIsSelected
                  ? (
                    <div>
                      <button
                        type="button"
                        className="button"
                        onClick={selectHandler}
                      >
                        Add
                      </button>
                      <button
                        type="button"
                        className="button"
                        onClick={removeHandler}
                      >
                        Remove
                      </button>
                    </div>
                  )
                  : (
                    <button
                      type="button"
                      className="button"
                      onClick={selectHandler}
                    >
                      Select
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
