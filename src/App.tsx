import React from 'react';
import './App.scss';
import classNames from 'classnames';

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

  type State = {
    selectedGood:string,
  };

class App extends React.Component<{}, State> {
  state:State = {
    selectedGood: 'Jam',
  };

  clear = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">

        <div className="App__title">
          <h1>
            Selected good: -
            {selectedGood}
          </h1>
          {selectedGood !== '' && (
            <button className="button" type="button" onClick={this.clear}>

              Clear
            </button>
          )}
        </div>
        <ul>
          {goodsFromServer.map(good => {
            return (
              <li className={classNames('App__item', {
                active: this.state.selectedGood === good,
              })}
              >
                {good}
                {' - '}
                {selectedGood !== good && (
                  <button
                    className="button"
                    type="button"
                    onClick={() => this.setState({ selectedGood: good })}
                  >
                    Add
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
