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
    selectedGood: 'Jam',
  };

  render() {
    return (
      <div className="App">
        <h1>
          {(this.state.selectedGood)
            ? `${this.state.selectedGood} is selected`
            : 'No goods selected'}
        </h1>
        <div className="goods">
          <ul className="goods__list">
            {goodsFromServer.map(el => (
              <li
                className="goods__list-item"
              >
                {(el === this.state.selectedGood)
                  ? (
                    <>
                      <p className="goods__list-item-text-selected">
                        {el}
                      </p>
                      <button
                        className="goods__list-button"
                        type="button"
                        onClick={() => {
                          this.setState({ selectedGood: false });
                        }}
                      >
                        remove
                      </button>
                    </>
                  )
                  : (
                    <>
                      <p className="goods__list-item-text">
                        {el}
                      </p>
                      <button
                        className="goods__list-button"
                        type="button"
                        onClick={() => {
                          this.setState({ selectedGood: el });
                        }}
                      >
                        choose me
                      </button>
                    </>
                  )}
              </li>
            ))}
          </ul>
        </div>
        {((this.state.selectedGood)
          ? (
            <button
              type="button"
              onClick={() => {
                this.setState({ selectedGood: '' });
              }}
            >
              CLEAR
            </button>

          )
          : '')}
      </div>
    );
  }
}

export default App;

/*

*/
