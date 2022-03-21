import React from 'react';
import ClassNames from 'classnames';
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

class App extends React.Component<Props, State> {
  state = {
    selectedGood: 'Jam',
  };

  /* This method clears a product name in the <h1> title
  if it`s selected, deselects product and renders a Select <button> */
  productTitle = () => {
    this.setState({
      selectedGood: '',
    });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good: -
          {' '}
          {this.state.selectedGood
            ? `${selectedGood} is selected`
            : 'No goods selected'}
          {selectedGood && (
            <button
              type="button"
              onClick={this.productTitle}
            >
              X
            </button>
          )}
        </h1>

        <ul>
          {goodsFromServer.map((good) => (
            <>
              <li
                key={good}
                className={ClassNames('item', {
                  active: selectedGood === good,
                })}
              >
                {good}
              </li>
              {selectedGood !== good ? (
                <button
                  className="select"
                  key={`${good}product`}
                  type="button"
                  onClick={() => {
                    this.setState({
                      selectedGood: good,
                    });
                  }}
                >
                  Select
                </button>
              )
                : null}
              <br />
            </>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
