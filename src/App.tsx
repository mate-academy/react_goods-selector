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

class App extends React.Component {
  state = {
    select: ['Jam'],
  };

  selected(good: string) {
    this.setState({
      // eslint-disable-next-line react/no-access-state-in-setstate
      select: [...this.state.select, good],
    });
  }

  remove(good: string) {
    this.setState({
      // eslint-disable-next-line react/no-access-state-in-setstate
      select: this.state.select.filter((el) => {
        return el !== good;
      }),
    });
  }

  render() {
    const { select } = this.state;

    return (
      <div className="App">
        <div className="Goods-container">
          <div className="Goods-container__selected Selected">
            <h1 className="Selected__header">
              {select.length ? 'Selected good' : 'No goods selected'}
            </h1>
            <h2 className="Selected__goods">{select.join(', ')}</h2>
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
                    onClick={() => {
                      if (select.includes(good)) {
                        this.remove(good);
                      } else {
                        this.selected(good);
                      }
                    }}
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
