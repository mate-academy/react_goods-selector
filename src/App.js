import React from 'react';
import classNames from 'classnames';
import './App.scss';

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

const preparedGoods = goodsFromServer.map((good, id) => ({
  good,
  id,
}));

export class App extends React.Component {
  state = {
    selectedGood: 'no item selected',
  }

  toRemoveSelection = () => {
    this.setState({ selectedGood: 'no item selected' });
  }

  toSetSelection = (element) => {
    this.setState({ selectedGood: element.textContent });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <section className="heading">
          <h1>
            {'Selected good: - '}
            {selectedGood}
          </h1>

          <button
            className="heading__button"
            type="button"
            onClick={() => this.toRemoveSelection()}
          >
            X
          </button>
        </section>

        <ul
          className="goods"
        >
          {preparedGoods.map(item => (
            <li>
              <button
                key={item.id}
                type="button"
                className={classNames({
                  good: true,
                  selected: selectedGood === item.good,
                })}
                onClick={event => this.toSetSelection(event.target)}
              >
                {item.good}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
