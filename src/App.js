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

class App extends React.Component {
  state = {
    selectedGood: ['Jam'],
  };

  getSelectedGoodsTitle = (selectedGood) => {
    switch (selectedGood.length) {
      case 0:
        return `No goods selected`;
      case 1:
        return `${selectedGood} is selected`;
      default: {
        const lastGood = selectedGood[selectedGood.length - 1];

        return `${selectedGood.slice(0, selectedGood.length - 1).join(', ')} 
          and ${lastGood} are selected`;
      }
    }
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <>
          <h1 className="title">
            {this.getSelectedGoodsTitle(selectedGood)}
          </h1>
          <button
            title="Clear the list of selected itemss"
            type="button"
            className={classNames('clearAll-button', {
              hover: selectedGood.length === 0,
            })}
            onClick={() => {
              this.setState({ selectedGood: [] });
            }}
          >
            X
          </button>
        </>

        <ul className="goods">
          {goodsFromServer.map(good => (
            <div className="goods__wrapper" key={good}>
              <li
                className={classNames('goods__item', {
                  active: selectedGood.includes(good),
                })}
              >
                {good}
              </li>
              <button
                className="goods__button"
                type="button"
                onClick={() => {
                  if (!selectedGood.includes(good)) {
                    this.setState(() => ({
                      selectedGood: [...selectedGood, good],
                    }));
                  } else {
                    this.setState(() => ({
                      selectedGood: selectedGood.filter(item => item !== good),
                    }));
                  }
                }}
              >
                {selectedGood.includes(good) ? 'Remove' : 'Add'}
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
