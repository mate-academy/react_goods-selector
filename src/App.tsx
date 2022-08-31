import classNames from 'classnames';
import React from 'react';
import './App.scss';
import goodsFromServer from './goods';

type Goods = {
  name?: string,
  id?: number,
};

const goodswithid = (FromServer: string[]) => {
  const newarr: Goods[] = [];

  // eslint-disable-next-line array-callback-return
  FromServer.map((good: string, index: number) => {
    const obj: Goods = {};

    obj.name = good;
    obj.id = index;

    newarr.push(obj);
  });

  return newarr;
};

const newgoods = goodswithid(goodsFromServer);

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
              'No good is selected'
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
