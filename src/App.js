import React from 'react';
import './App.scss';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';

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
    selectedGood: [' Jam'],
  }

  clear = () => {
    this.setState({ selectedGood: [] });
  }

  toAdd = (good) => {
    this.setState(prevState => (
      {
        selectedGood: [...prevState.selectedGood, ` ${good}`],
      }
    ));
  }

  toRemove = (good) => {
    this.setState(prevState => (
      {
        selectedGood: [...prevState.selectedGood]
          .filter(el => el !== ` ${good}`),
      }
    ));
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <div className="container">
          <h1 className="header">
            Goods Selector
          </h1>
          <h2 className="selectedList">
            Selected goods:
            {
            selectedGood.length === 1
              && `${selectedGood} is selected`
            }

            {
            selectedGood.length >= 2
              && `${selectedGood} are selected`
            }

            {
            selectedGood.length === 0
              && ' No goods selected'
            }
          </h2>

          {selectedGood.length !== 0
            && (
              <>
                <h2 className="clearText">
                  Clear selection:
                </h2>

                <button
                  type="button"
                  className="clearButton"
                  onClick={this.clear}
                >
                  X
                </button>
              </>
            )
          }

          <ul className="list">
            {goodsFromServer.map(good => (
              <li
                key={uuidv4()}
                className={classNames('good', {
                  selected: selectedGood.includes(` ${good}`),
                })}
              >
                {good}

                {
                !selectedGood.includes(` ${good}`)
                  ? (
                    <button
                      type="button"
                      className="button"
                      onClick={() => {
                        this.toAdd(good);
                      }}
                    >
                      Add
                    </button>
                  )
                  : (
                    <button
                      type="button"
                      className="button"
                      onClick={() => {
                        this.toRemove(good);
                      }}
                    >
                      Remove
                    </button>
                  )
                }
              </li>
            ))}
          </ul>

        </div>
      </div>
    );
  }
}

export default App;
