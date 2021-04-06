import React from 'react';
import className from 'classnames';
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
    selectedGood: 'Jam',
  }

  selectGood = (good) => {
    this.setState({ selectedGood: good });
  }

  unselectGood = () => {
    this.setState({ selectedGood: null });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App column is-one-third is-centered">
        <div className="panel">
          <div
            className="
              panel-heading
              is-flex
              is-justify-content-space-between
            "
          >
            <h1 className="title is-5">
              {
                selectedGood
                  ? `${selectedGood} is selected` : 'No goods selected'
              }
            </h1>
            <button
              type="button"
              className={
                className(
                  'button',
                  { 'is-hidden': !selectedGood },
                )
              }
              onClick={() => this.unselectGood()}
            >
              X
            </button>
          </div>
          <ul className="goods-list">
            {
              goodsFromServer.map(
                good => (
                  <li
                    key={good}
                    className={
                      className(
                        'panel-block is-flex is-justify-content-space-between',
                        { 'is-selected': good === selectedGood },
                      )
                    }
                  >
                    <span>{good}</span>
                    <button
                      type="button"
                      className={
                        className(
                          'button',
                          { 'is-hidden': good === selectedGood },
                        )
                      }
                      onClick={() => this.selectGood(good)}
                    >
                      Select
                    </button>
                  </li>
                ),
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
