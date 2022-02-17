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

type State = {
  selectedGood: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    selectedGood: 'Jam',
  };

  clear = () => {
    this.setState({ selectedGood: '' });
  };

  addWord = (word: string) => {
    this.setState({ selectedGood: word });
  };

  clickHandler = (el: string, selectedGood: string) => (
    selectedGood === el
      ? this.clear()
      : this.addWord(el)
  );

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="app">
        <h1 className="app__title">
          {selectedGood ? `${selectedGood} is selected`
            : 'No goods selected'}
          {'  '}
          <button
            type="button"
            className="button"
            onClick={this.clear}
          >
            X
          </button>
        </h1>

        <ul className="list">
          {goodsFromServer.map(el => (
            <>
              <li
                key={el + Math.random()}
                className={classNames(
                  'list__item',
                  {
                    'list__item--selected':
                    selectedGood === el,
                  },
                )}
              >
                {el}
              </li>

              <button
                type="button"
                className="list__button"
                onClick={() => (
                  this.clickHandler(el, selectedGood)
                )}
              >
                {selectedGood === el
                  ? 'delete'
                  : 'add'}
              </button>
            </>
          ))}
        </ul>
      </div>
    );
  }
}
