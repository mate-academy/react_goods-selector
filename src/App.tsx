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
  selectedGood: string[],
};
class App extends React.Component<{}, State> {
  state: State = {
    selectedGood: ['Jam'],
  };

  addGood = (good:string) => {
    this.setState((state) => (
      state.selectedGood.includes(good)
        ? {
          selectedGood: state.selectedGood.filter(
            element => element !== good,
          ),
        }
        : { selectedGood: state.selectedGood.concat(good) }
    ));
  };

  clear = () => {
    this.setState({ selectedGood: [] });
  };

  render() {
    const { selectedGood } = this.state;
    let title = 'No goods selected';

    if (selectedGood.length === 1) {
      title = `${selectedGood[0]} is selected`;
    } else if (selectedGood.length > 1) {
      title = `${selectedGood.slice(0, -1).join(', ')} and ${selectedGood[selectedGood.length - 1]} are selected`;
    }

    return (
      <div className="App">
        <h1>
          {title}
          {' '}
          <button
            className={
              classNames(
                'button',
                'button-clear',
                { 'button-hidden': selectedGood.length === 0 },
              )
            }
            type="button"
            onClick={this.clear}
          >
            Clear
          </button>
        </h1>
        <ul className="list">
          {goodsFromServer.map(good => (
            <div
              className={
                classNames(
                  'wrapper',
                  { active: selectedGood.includes(good) },
                )
              }
            >
              <li
                className={
                  classNames(
                    'list__item',
                    { active: selectedGood.includes(good) },
                  )
                }
                key={good}
              >
                {good}
              </li>
              <button
                className="button"
                type="button"
                onClick={() => {
                  this.addGood(good);
                }}
              >
                {selectedGood.includes(good) ? 'Remove' : 'Add'}

              </button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
