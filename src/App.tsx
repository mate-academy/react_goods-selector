import classNames from 'classnames';
import React from 'react';
import './App.scss';
import goodsFromServer from './goods';

type Goods = {
  name?: string,
  id?: number,
};

// eslint-disable-next-line @typescript-eslint/no-shadow
const goodsWithId = (goodsFromServer: string[]) => {
  const goodsWithIdArray: Goods[] = [];

  // eslint-disable-next-line array-callback-return
  goodsFromServer.map((good: string, index: number) => {
    const GoodObj: Goods = {};

    GoodObj.name = good;
    GoodObj.id = index;

    goodsWithIdArray.push(GoodObj);
  });

  return goodsWithIdArray;
};

const newgoods = goodsWithId(goodsFromServer);

export class App extends React.Component {
  state = {
    selectedName: 'Jam',
    selectedId: newgoods.length - 2,
  };

  render() {
    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            {this.state.selectedName ? (
              `${this.state.selectedName} is selected`
            ) : (
              'No goods selected'
            )}
          </h1>

          {this.state.selectedName !== null && (
            <button
              type="button"
              onClick={() => {
                this.setState(
                  {
                    selectedId: null,
                    selectedName: null,
                  },
                );
              }}
            >
              Clear
            </button>
          )}
        </header>

        <ul>
          {newgoods.map(good => (
            <li
              className={
                classNames(
                  'Good',
                  {
                    'Good--active': good.id === this.state.selectedId,
                  },
                )
              }
              key={good.id}
            >
              {good.name}
              {good.id === this.state.selectedId ? (
                <button
                  type="button"
                  onClick={() => {
                    this.setState(
                      {
                        selectedId: null,
                        selectedName: null,
                      },
                    );
                  }}
                >
                  Clear
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    this.setState(
                      {
                        selectedId: good.id,
                        selectedName: good.name,
                      },
                    );
                  }}
                >
                  Select
                </button>
              )}
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
