import React from 'react';
import classnames from 'classnames';

import './App.scss';

import goodsFromServer from './goods';

type State = {
  selectedGoods: string[],
};
// eslint-disable-next-line react/prefer-stateless-function
export class App extends React.Component<{}, State> {
  buttonClasses = 'button is-dark is-rounded';

  state = {
    selectedGoods: ['Jam'],
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title tag is-large">
            {`${selectedGoods.length === 0 ? 'No goods selected' : selectedGoods} `}
            is selected
          </h1>
          {selectedGoods.length === 0 || (
            <button
              type="button"
              className={classnames('App__clear', this.buttonClasses)}
              onClick={() => this.setState({
                selectedGoods: [],
              })}
            >
              Clear
            </button>
          )}
        </header>

        <ul>
          {goodsFromServer.map(item => (
            <li
              key={item}
              className={classnames(
                'Good',
                selectedGoods.includes(item)
                  ? 'Good--active'
                  : '',
              )}
            >
              {item}

              <button
                type="button"
                className={classnames(
                  `Good__${item in selectedGoods ? 'remove' : 'select'}`,
                  this.buttonClasses,
                )}
                onClick={() => {
                  if (selectedGoods.includes(item)) {
                    selectedGoods.splice(selectedGoods.indexOf(item), 1);
                    this.setState({
                      selectedGoods,
                    });
                  } else {
                    selectedGoods.push(item);
                    this.setState({
                      selectedGoods,
                    });
                  }
                }}
              >
                {selectedGoods.includes(item)
                  ? 'Remove'
                  : 'Select'}
              </button>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
