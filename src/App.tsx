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
  selectedGoodsArray: string[] = [];

  state = {
    selectedGood: 'Jam',
  };

  generateTitle() {
    if (this.state.selectedGood !== '') {
      this.selectedGoodsArray.push(this.state.selectedGood);
    }

    const lengthArray = this.selectedGoodsArray.length;
    let title = '';

    title = this.selectedGoodsArray.join(', ');

    if (lengthArray >= 3) {
      const i = lengthArray - 1;

      const arr = this.selectedGoodsArray.slice(0, i);

      title = arr.join(', ');

      title = `${title} and ${this.selectedGoodsArray[i]}`;
    }

    const rest = lengthArray >= 2 ? 'are selected' : 'is selected';

    title = `${title} ${rest}`;

    title = lengthArray !== 0 ? title : 'No goods selected';

    return title;
  }

  render() {
    return (
      <div className="App">
        <h1>
          {this.generateTitle()}
        </h1>
        {this.selectedGoodsArray.length > 1 && (
          <button
            type="button"
            onClick={() => {
              this.setState({ selectedGood: '' });

              this.selectedGoodsArray = [];
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
                className={classNames({ chosen: this.selectedGoodsArray.includes(good) })}
              >
                {good}
                {!this.selectedGoodsArray.includes(good) && (
                  <button
                    type="button"
                    onClick={() => {
                      this.setState({ selectedGood: good });
                    }}
                  >
                    Add
                  </button>
                )}
                {this.selectedGoodsArray.includes(good) && (
                  <button
                    type="button"
                    onClick={() => {
                      this.selectedGoodsArray
                = this.selectedGoodsArray.filter((valueGood: string) => valueGood !== good);
                      this.setState({ selectedGood: '' });
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
