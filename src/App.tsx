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
    selectedGoodsArray: ['Jam'],
  };

  generateTitle() {
    const { selectedGoodsArray } = this.state;

    let title = '';

    title = selectedGoodsArray.join(', ');

    const lengthArray = selectedGoodsArray.length;

    if (lengthArray >= 3) {
      const i = lengthArray - 1;

      const arr = selectedGoodsArray.slice(0, i);

      title = arr.join(', ');

      title = `${title} and ${selectedGoodsArray[i]}`;
    }

    const rest = lengthArray >= 2 ? 'are selected' : 'is selected';

    title = `${title} ${rest}`;

    title = lengthArray !== 0 ? title : 'No goods selected';

    return title;
  }

  render() {
    const { selectedGoodsArray } = this.state;

    return (
      <div className="App">
        <h1>
          {this.generateTitle()}
        </h1>
        {selectedGoodsArray.length > 1 && (
          <button
            type="button"
            onClick={() => {
              this.setState({
                selectedGoodsArray: [],
              });
            }}
          >
            Clear list
          </button>
        )}
        <ul className="goods">
          {goodsFromServer.map((good: string, index: number) => {
            return (
              <li
                key={+index}
                className={classNames({ chosen: selectedGoodsArray.includes(good) })}
              >
                {good}
                {!selectedGoodsArray.includes(good) && (
                  <button
                    type="button"
                    onClick={() => {
                      selectedGoodsArray.push(good);

                      this.setState({ selectedGoodsArray });
                    }}
                  >
                    Add
                  </button>
                )}
                {selectedGoodsArray.includes(good) && (
                  <button
                    type="button"
                    onClick={() => {
                      this.setState({
                        selectedGoodsArray: selectedGoodsArray.filter(
                          (valueGood: string) => valueGood !== good,
                        ),
                      });
                    }}
                  >
                    Remove
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
