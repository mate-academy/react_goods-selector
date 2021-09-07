import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
  selectedGood: string,
};

class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  title = (selectedGood: string) => {
    return this.state.selectedGood
      ? `${selectedGood} is selected`
      : 'No goods selected';
  };

  selecetGood = (good: string) => {
    this.setState({ selectedGood: good });
  };

  clearGood = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1 className=".container-xxl d-flex justify-content-center">
          {this.title(selectedGood)}
          {selectedGood && (
            <button
              className="rounded border-0 btn btn-success"
              type="button"
              onClick={() => this.clearGood()}
            >
              Clear items
            </button>
          )}
        </h1>
        <ul className="row row-cols-auto d-flex justify-content-center">
          {goodsFromServer.map(good => (
            <li
              className={classNames(
                'w-auto p-3',
                'rounded',
                { 'bg-success': good === selectedGood },
              )}
              key={good}
            >
              {good}
              {' '}
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => this.selecetGood(good)}
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
