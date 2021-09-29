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
  selectedGood: string;
};

class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="container">
        <div>
          <h1>{selectedGood === '' ? 'No goods selected' : `${selectedGood} is selected`}</h1>
        </div>
        <div>
          <button
            className={classNames('cancelingButton', selectedGood ? 'show' : 'hide')}
            type="button"
            onClick={() => {
              this.setState({ selectedGood: '' });
            }}
          >
            X
          </button>

        </div>

        <ul className="list">
          {goodsFromServer.map(word => (
            <li key={word} className={classNames('list__item')}>
              {word}
              <button
                className="list__item__button"
                type="button"
                onClick={() => {
                  this.setState({ selectedGood: word });
                }}
              >
                Select
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
