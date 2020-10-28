import React from 'react';
import classNames from 'classnames';

import 'bulma';
import './App.scss';

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
    selected: '',
    index: null,
  }

  saveSelectedGood = (good) => {
    const goodIndex = goodsFromServer.indexOf(good);

    this.setState({
      selected: ` - ${good}`,
      index: goodIndex,
    });
  }

  cleanSelected = () => {
    this.setState({
      selected: '',
      index: null,
    });
  }

  render() {
    const { selected, index } = this.state;

    return (
      <div className="App content hero is-primary is-medium">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="h1">
              {`Selected good:${selected}`}
            </h1>

            {(index || index === 0) && (
              <button
                className="button is-rounded"
                onClick={this.cleanSelected}
                type="button"
              >
                X
              </button>
            )}
          </div>

          <ul>
            {goodsFromServer.map((good, i) => (
              <li
                key={good}
                className={classNames({ 'js-selected': index === i })}
              >
                {`${good} `}
                {index !== i && (
                  <button
                    className="button is-small is-rounded is-inverted"
                    onClick={() => this.saveSelectedGood(good)}
                    type="button"
                  >
                    Select
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
