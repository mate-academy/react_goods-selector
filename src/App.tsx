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

  removeSelectedGood = () => {
    this.setState(() => ({
      selectedGoods: [],
    }));
  };

  addSelectedGood = (good: string) => (
    this.setState(prevState => ({
      selectedGoods: [...prevState.selectedGoods, good],
    }))
  );

  render() {
    const { selectedGoods } = this.state;
    const title = selectedGoods[selectedGoods.length - 1];

    return (
      <div className="App container">
        <div className="h1 d-flex justify-content-between">
          {selectedGoods.length ? (
            `${title} is selected`) : ('No goods selected')}

          {selectedGoods.length ? (
            <button type="button" className="btn btn-outline-danger btn-sm" onClick={this.removeSelectedGood}>x</button>) : (<></>)}
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
