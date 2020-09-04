import React from 'react';
import './App.scss';
import className from 'classnames';

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
    selectedGood: ' - ',
  };

  selected = (item) => {
    this.setState({
      selectedGood: item,
    });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="app">
        <div className="app__heading">
          <h1>
            Selected good:
            {` ${selectedGood} `}
          </h1>
          {selectedGood !== ' - ' && (
            <button
              type="button"
              className="button__clear"
              onClick={() => {
                this.selected(' - ');
              }}
            >
              X
            </button>
          )}
        </div>
        <div className="goods">
          {goodsFromServer.map(item => (
            <button
              type="button"
              className={className(
                'good', {
                  'good--selected': selectedGood === item,
                },
              )}
              onClick={
                () => this.selected(item)
              }
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
