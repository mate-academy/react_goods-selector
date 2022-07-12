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
    selectedGoods: ['Jam'],
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          {selectedGoods.length === 0
            ? 'No goods selected'
            : (
              <>
                {`Selected Goods: ${selectedGoods.join(', ')}`}
                <button
                  type="button"
                  className="App__clearButton"
                  onClick={() => {
                    this.setState({ selectedGoods: [] });
                  }}
                >
                  Clear
                </button>
              </>
            )}
        </h1>
        <ul className="App__list">
          {goodsFromServer.map(good => {
            return selectedGoods.includes(good)
              ? (
                <li className="App__listItem App__listItem--selected">
                  {good}
                  {' - '}
                  <button
                    type="button"
                    className="
                      App__listItemButton
                      App__listItemButton--toRemove
                    "
                    onClick={() => {
                      selectedGoods.splice(selectedGoods.indexOf(good), 1);
                      this.setState({ selectedGoods });
                    }}
                  >
                    Remove
                  </button>
                </li>
              )
              : (
                <li className="App__listItem">
                  {good}
                  {' - '}
                  <button
                    type="button"
                    className="
                      App__listItemButton
                      App__listItemButton--toSelect
                    "
                    onClick={() => {
                      selectedGoods.push(good);
                      this.setState({ selectedGoods });
                    }}
                  >
                    Select
                  </button>
                </li>
              );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
