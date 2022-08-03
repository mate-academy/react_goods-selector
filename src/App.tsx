import React from 'react';
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

interface State {
  select: string[],
}

class App extends React.Component {
  state: State = {
    select: ['Jam'],
  };

  handlerButton = (good: string) => {
    if (this.state.select.includes(good)) {
      this.remove(good);
    } else {
      this.selected(good);
    }
  };

  selected(good: string) {
    this.setState((prevState: State) => {
      return {
        select: [...prevState.select, good],
      };
    });
  }

  remove(good: string) {
    this.setState((prevState: State) => {
      return {
        select: prevState.select.filter((el) => {
          return el !== good;
        }),
      };
    });
  }

  render() {
    const { select } = this.state;
    const arraySelected = `${select
      .slice(0, select.length - 1)
      .join(', ')} and ${select[select.length - 1]} are selected`;

    return (
      <div className="App">
        <div className="Goods-container">
          <div className="Goods-container__selected Selected">
            <h1 className="Selected__header">
              {select.length ? 'Selected good' : 'No goods selected'}
            </h1>
            <h2 className="Selected__goods">
              {
                select.length !== 0 && (
                  select.length > 1
                    ? arraySelected
                    : `${select.join(', ')} is selected`
                )
              }
            </h2>
          </div>
          <ul className="Goods-container__list list">
            {goodsFromServer.map((good) => {
              return (
                <li
                  className={select.includes(good)
                    ? 'Active list__item' : 'list__item'}
                  key={good}
                >
                  <h2>{good}</h2>
                  <button
                    className="Button"
                    type="button"
                    onClick={() => this.handlerButton(good)}
                  >
                    {select.includes(good) ? 'Remove' : 'Select'}
                  </button>
                </li>
              );
            })}
          </ul>
          <button
            className={select.length ? 'Button' : 'Button none'}
            type="button"
            onClick={() => {
              this.setState({ select: [] });
            }}
          >
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default App;
