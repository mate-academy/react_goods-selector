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
  selectedGoods: string[];
};

class App extends React.Component<unknown, State> {
  state: State = {
    selectedGoods: ['Jam'],
  };

  removeSelectedGoods = () => {
    this.setState(() => ({
      selectedGoods: [],
    }));
  };

  addSelectedGood = (good: string) => (
    this.setState(currentState => ({
      selectedGoods: [...currentState.selectedGoods, good],
    }))
  );

  render() {
    const { selectedGoods } = this.state;
    const title = selectedGoods[selectedGoods.length - 1];
    const hasTitle = selectedGoods.length > 0;

    return (
      <div className="App container">
        <div className="h1 d-flex justify-content-between">
          {hasTitle
            ? `${title} is selected`
            : ('No goods selected')}

          {hasTitle && (
            <button
              type="button"
              className="btn btn-outline-danger btn-sm"
              onClick={this.removeSelectedGoods}
            >
              x
            </button>
          )}
        </div>

        <ul className="list-group-item">
          {goodsFromServer.map((good) => (
            <li
              key={good}
              className={classNames('list-group-item', {
                active: title === good,
              })}
            >
              <div className="d-grid gap-2">
                {good}
                {
                  title !== good && (
                    <button
                      type="button"
                      className="btn btn-outline-secondary "
                      onClick={() => {
                        return this.addSelectedGood(good);
                      }}
                    >
                      Select
                    </button>
                  )
                }
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
