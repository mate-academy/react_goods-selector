import React from 'react';
import classNames from 'classnames';

import styles from './App.scss';

const cn = classNames.bind(styles);

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

const NO_SELECTED = 'No goods selected';

class App extends React.Component {
  state = {
    selectedGood: NO_SELECTED,
  }

  clickHandlerSelectedGood = () => {
    this.setState({
      selectedGood: NO_SELECTED,
    });
  }

  clickHandlerGood = (good) => {
    this.setState({
      selectedGood: good,
    });
  }

  render() {
    const { selectedGood } = this.state;

    const buttonСleanHiden = selectedGood !== NO_SELECTED;

    return (
      <div className="App">
        <div className="selectedGood">
          <h1>
            Selected good: - {` ${selectedGood} `}{selectedGood !== NO_SELECTED && 'is selected'}
          </h1>
          {buttonСleanHiden && (
            <button
              className="buttonСlean"
              type="button"
              onClick={this.clickHandlerSelectedGood}
            >
              X
            </button>
          )}
        </div>

        <ul>
          {goodsFromServer.map((good) => {
            const buttonShow = selectedGood !== good;

            const classNameGood = cn(
              'good',
              {selected: !buttonShow}
            );
              
            return (
              <li key={good}>
                <div className="goodBox">
                  <div className={classNameGood}>
                    <p className="goodName">
                      {good}
                    </p>
                  </div>
                  <div className="buttonBox">
                    {buttonShow && (
                      <button
                        className="button"
                        type="button"
                        onClick={() => {
                          this.clickHandlerGood(good);
                        }}
                      >
                        Select
                      </button>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
