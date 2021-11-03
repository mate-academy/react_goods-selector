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

type Props = {};

type State = {
  selectedGood: string;
  selectedGoodList: string[];
};

class App extends React.Component<Props, State> {
  state = {
    selectedGood: '',
    selectedGoodList: [],
  };

  onGoodSelect = (good: string) => {
    this.setState({ selectedGood: good });
  };

  onAdd = (good: string) => {
    this.setState((state) => {
      const list = state.selectedGoodList.concat(good);

      return { selectedGoodList: list };
    });
  };

  onRemove = (good: string) => {
    this.setState((state) => {
      const list = state.selectedGoodList.filter(item => item !== good);

      return { selectedGoodList: list };
    });
  };

  resetSelectedGood = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGoodList, selectedGood } = this.state;

    return (
      <div className="App">
        <div className="title">
          <h1>{ selectedGood ? `${selectedGood} is selected` : 'No goods selected' }</h1>

          {selectedGood && (
            <button
              onClick={() => this.resetSelectedGood()}
              type="button"
              className="button"
            >
              X
            </button>
          )}
        </div>

        {selectedGoodList.length > 0 && (
          <h1>
            {selectedGoodList.join(', ')}
            {' '}
            are selected
          </h1>
        )}

        <ul className="list">
          {goodsFromServer.map(good => (
            <li
              className={classNames('list__item', {
                'list__item--active': good === selectedGood || selectedGoodList.find(item => item === good),
              })}
              key={good}
            >
              {good}
              { good !== selectedGood && !selectedGoodList.find(item => item === good)
              && (
                <button
                  onClick={() => this.onGoodSelect(good)}
                  className="list__button button"
                  type="button"
                >
                  Select
                </button>
              )}

              <button
                onClick={() => this.onAdd(good)}
                className="list__button button"
                type="button"
              >
                Add in list
              </button>

              <button
                onClick={() => this.onRemove(good)}
                className="list__button button"
                type="button"
              >
                Remove from list
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
