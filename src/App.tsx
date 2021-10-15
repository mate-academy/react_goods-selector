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

type States = {
  selectedGood: string,
};

class App extends React.PureComponent<{}, States> {
  state: States = {
    selectedGood: 'Jam',
  };

  getTitle = () => {
    return this.state.selectedGood === ''
      ? 'No goods selected'
      : `${this.state.selectedGood} is selected`;
  };

  render() {
    return (
      <div className="App">
        <div>
          <h1>{this.getTitle()}</h1>
          {this.state.selectedGood !== ''
          && (
            <button
              type="button"
              onClick={() => this.setState({ selectedGood: '' })}
            >
              X
            </button>
          )}
        </div>
        <ul className="list">
          {goodsFromServer.map((good: string) => (
            <>
              <li
                key={goodsFromServer.indexOf(good)}
                className={classNames('listItem', { selected: this.state.selectedGood === good })}
              >
                {good}
              </li>
              {this.state.selectedGood !== good && (
                <button
                  type="button"
                  onClick={
                    () => {
                      this.setState({ selectedGood: good });
                    }
                  }
                >
                  Select
                </button>
              )}
            </>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
