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

class App extends React.Component {
  state = {
    goods: goodsFromServer,
    selectedGoods: ['Jam'],
  };

  render() {
    const { goods } = this.state;
    let { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>{selectedGoods.length > 0 ? `${selectedGoods.join(', ')} ${selectedGoods.length === 1 ? 'is' : 'are'} selected` : 'No goods selected'}</h1>
        {(selectedGoods.length > 0 && (
          <button
            type="button"
            className="button button-1"
            onClick={() => {
              this.setState(() => {
                return {
                  selectedGoods: [],
                };
              });
            }}
          >
            Clear
          </button>
        )
        )}
        <ul>
          {goods.map(good => (
            <li
              key={good}
              className={
                classNames('li', { active: selectedGoods.includes(good) })
              }
            >
              {good}
              <button
                type="button"
                className="button"
                onClick={(event) => {
                  if (event.currentTarget.textContent === 'Remove') {
                    selectedGoods = selectedGoods.filter(x => x !== good);
                  } else {
                    selectedGoods.push(good);
                  }

                  this.setState(() => {
                    return {
                      selectedGoods,
                    };
                  });
                }}
              >
                { selectedGoods.includes(good) ? 'Remove' : 'Select' }
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
