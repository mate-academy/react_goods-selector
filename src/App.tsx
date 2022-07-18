import classNames from 'classnames';
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
    selectedGood: ['Jam'],
  };

  getSelectedGoodsTitle() {
    return !this.state.selectedGood.length
      ? 'No goods selected'
      : `${this.state.selectedGood}
    ${' '}
    ${this.state.selectedGood.length > 1
    ? 'are'
    : 'is'}
      selected`;
  }

  addGood(good: string) {
    return this.state.selectedGood.includes(good)
      ? this.state.selectedGood.filter((select: string) => select !== good)
      : [...this.state.selectedGood, good];
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          {this.getSelectedGoodsTitle()}
          {selectedGood.length
            ? (
              <button
                type="button"
                onClick={() => (
                  this.setState({ selectedGood: [] })
                )}
              >
                Clear
              </button>
            )
            : null}
        </h1>
        <ul>
          {goodsFromServer.map((good: string) => (
            <li
              key={good}
              className={classNames({
                selectedGood: selectedGood.includes(good),
              })}
            >
              {good}
              {' '}
              <button
                type="button"
                onClick={() => {
                  this.setState({
                    selectedGood: this.addGood(good),
                  });
                }}
              >
                {selectedGood.includes(good)
                  ? 'Remove'
                  : 'Select'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
