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
  selectedGood: string | null;
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: goodsFromServer[8],
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          {selectedGood
            ? (`${selectedGood} is selected`)
            : ('No goods selected')}

          {selectedGood && (
            <button
              type="button"
              className="clear-button"
              onClick={() => this.setState({ selectedGood: null })}
            >
              X
            </button>
          )}
        </h1>

        <ul className="goodsList">
          {goodsFromServer.map(good => {
            return (
              <li
                className={classNames('goodsList__item', { 'goodsList__item--selected': selectedGood === good })}
              >

                <span>{good}</span>

                {selectedGood !== good && (
                  <button
                    type="button"
                    onClick={() => this.setState({ selectedGood: good })}
                  >
                    select
                  </button>
                )}
              </li>
            );
          })}
        </ul>

      </div>
    );
  }
}

// const App: React.FC = () => (
//   <div className="App">
//     <h1>Selected good: -</h1>
//     {goodsFromServer.length}
//   </div>
// );

// export default App;
