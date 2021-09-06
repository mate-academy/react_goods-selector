import React from 'react';
import classNames from 'classnames';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

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
  selectedGood: string[];
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: ['Jam'],
  };

  getSelect = (item: string) => {
    this.setState((state) => ({
      selectedGood: [...state.selectedGood, item],
    }));
  };

  render() {
    return (
      <div className="App">
        <ul className="list-group">
          {goodsFromServer.map(item => (
            <li
              key={item}
              className={classNames(
                'list-group-item list-group-item-info',
                {
                  'list-group-item-success': this.state.selectedGood.includes(item),
                },
              )}
            >
              <div>{item}</div>
              <button
                className={classNames(
                  'btn btn-success',
                  {
                    visible: this.state.selectedGood.includes(item),
                  },
                )}
                type="button"
                onClick={() => {
                  this.getSelect(item);
                }}
              >
                Select
              </button>
            </li>
          ))}
        </ul>
        <h1
          className={classNames(
            'title',
            {
              visible: this.state.selectedGood.length === 0,
            },
          )}
        >
          {`${this.state.selectedGood.join(', ')} is selected`}
        </h1>
        <button
          className={classNames(
            'btn btn-warning btn-center',
            {
              visible: this.state.selectedGood.length === 0,
            },
          )}
          type="button"
          onClick={() => (
            this.setState({ selectedGood: [] })
          )}
        >
          X
        </button>
      </div>
    );
  }
}
