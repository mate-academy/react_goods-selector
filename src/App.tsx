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
  selectedGood: string,
};

class App extends React.Component<{}, State> {
  state = {
    selectedGood: goodsFromServer[8],
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1 className="title">
          {selectedGood
            ? `${selectedGood} is selected`
            : 'No goods selected'}
        </h1>
        {selectedGood && (
          <button
            type="button"
            className={classNames('btn', 'btn-info', 'title-button')}
            onClick={() => {
              this.setState({ selectedGood: '' });
            }}
          >
            Clear
          </button>
        )}
        <ul className="list">
          {goodsFromServer.map(good => {
            const selected = selectedGood === good;

            return (
              <li
                className="list__item"
                key={good}
              >
                <button
                  className={
                    classNames(
                      'list__phrase',
                      { 'list__phrase--active': selected },
                    )
                  }
                  type="button"
                >
                  {good}
                </button>
                <button
                  type="button"
                  className={
                    classNames(
                      'btn',
                      { 'btn-success': !selected },
                      { 'btn-danger': selected },
                      'list__button',
                    )
                  }
                  onClick={() => {
                    const prevGood = this.state.selectedGood;

                    this.setState({
                      selectedGood:
                        prevGood === good
                          ? ''
                          : good,
                    });
                  }}
                >
                  {selected ? 'Remove' : 'Select'}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
