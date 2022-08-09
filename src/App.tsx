import classNames from 'classnames';
import React from 'react';
import './App.scss';
import goodsFromServer from './goods';
import 'bulma/css/bulma.min.css';

interface State {
  selectedGoods: string[],
}

export class App extends React.Component <{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title title">
            { selectedGoods.length === 0
              ? 'No goods selected'
              : `${selectedGoods} is selected`}
          </h1>

          {selectedGoods.length > 0 && (
            <button
              type="button"
              className="
                App__clear
                button
                is-small"
              onClick={() => {
                this.setState({ selectedGoods: [] });
              }}
            >

              Clear
            </button>
          )}
        </header>

        <ul>
          {goodsFromServer.map(good => (
            <li className={classNames(
              'Good',
              selectedGoods.includes(good)
                ? 'Good--active'
                : '',
            )}
            >

              {good}

              <button
                type="button"
                className={`Good__${selectedGoods.includes(good)
                  ? 'remove is-danger is-outlined'
                  : 'select is-success'}
                  button is-small`}
                onClick={() => {
                  if (selectedGoods.includes(good)) {
                    selectedGoods.splice(selectedGoods.indexOf(good), 1);
                    this.setState({
                      selectedGoods,
                    });
                  } else {
                    selectedGoods.push(good);
                    this.setState({
                      selectedGoods,
                    });
                  }
                }}
              >
                {selectedGoods.includes(good) ? 'Remove' : 'Select'}

              </button>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
