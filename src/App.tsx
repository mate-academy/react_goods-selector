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

// Types are required by TypeScript Engine for the App Class Component
type Props = {};
type State = {
  selectedGood: string,
  startIndex: number,
};

class App extends React.Component<Props, State> {
  state = {
    selectedGood: 'Jam',
    startIndex: -1,
  };

  /* This method clears a product name in the <h1> title
  if it`s selected, deselects product and renders a Select <button> */
  productTitle = () => {
    this.setState({
      selectedGood: '',
      startIndex: -1,
    });
  };

  render() {
    const { startIndex, selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good: -
          {' '}
          {this.state.selectedGood
            ? `${selectedGood} is selected`
            : 'No goods selected'}
          <button
            type="button"
            onClick={this.productTitle}
          >
            X
          </button>
        </h1>

        <ul>
          {goodsFromServer.map((good, index) => (
            <>
              <li
                key={good}
                className={`item ${startIndex !== index ? '' : 'active'}`}
              >
                {good}
              </li>
              {startIndex !== index ? (
                <button
                  className="select"
                  key={`${good}product`}
                  type="button"
                  onClick={() => {
                    this.setState({
                      selectedGood: good,
                      startIndex: index,
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
